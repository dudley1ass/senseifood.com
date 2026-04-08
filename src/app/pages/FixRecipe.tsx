import { useMemo, useEffect, useState, useCallback, useRef } from 'react';
import { Link, useSearchParams } from 'react-router';
import { ArrowLeft, FlaskConical, Plus, SlidersHorizontal, Trash2 } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { evaluateDiagnostic } from '../diagnostics/evaluate';
import type { DiagnosticFinding, RecipeCategory } from '../diagnostics/types';
import {
  INGREDIENT_GROUPS,
  aggregateRecipeRowsExtended,
  defaultUnitForSystem,
  METRIC_UNITS,
  US_UNITS,
  type MeasurementSystem,
  type MetricUnit,
  type UsUnit,
} from '../diagnostics/recipeIngredientModel';
import { trackCTAClick, trackEvent } from '../utils/analytics';

const CATEGORIES: { id: RecipeCategory; label: string; description: string }[] = [
  { id: 'cookie', label: 'Cookies & bars', description: 'Spread, texture, browning' },
  { id: 'cake', label: 'Cakes', description: 'Rise, dryness, density' },
  { id: 'bread', label: 'Bread', description: 'Proof, ovenspring, crumb' },
  { id: 'pie', label: 'Pie', description: 'Crust texture, soggy base' },
  { id: 'iceCream', label: 'Ice cream', description: 'Ice crystals, melt' },
  { id: 'coffee', label: 'Coffee', description: 'Bitter, sour, weak cups' },
  { id: 'baking', label: 'General baking', description: 'Butter temp, process' },
];

const PROBLEM_OPTIONS: Record<RecipeCategory, { id: string; label: string }[]> = {
  cookie: [
    { id: 'spreads-too-much', label: 'Spreads too much / too thin' },
    { id: 'wont-spread', label: "Won't spread / stays too thick" },
    { id: 'too-hard', label: 'Too hard / tough' },
    { id: 'too-dry', label: 'Dry crumb' },
    { id: 'too-chewy', label: 'Too chewy' },
    { id: 'too-crispy', label: 'Too crispy / brittle' },
    { id: 'burn-bottom', label: 'Burns on the bottom' },
    { id: 'cakey', label: 'Cakey texture (not enough cookie)' },
    { id: 'rise-then-fall', label: 'Puffed then collapsed' },
    { id: 'stay-thick', label: 'Stays too thick / mounds' },
    { id: 'general', label: 'Not sure / general debug' },
  ],
  cake: [
    { id: 'collapse', label: 'Collapsed / fell in the middle' },
    { id: 'sink', label: 'Sank after baking' },
    { id: 'too-dense', label: 'Dense / heavy crumb' },
    { id: 'dry', label: 'Dry' },
    { id: 'general', label: 'General' },
  ],
  bread: [
    { id: 'wont-rise', label: "Won't rise / tight crumb" },
    { id: 'dense', label: 'Dense' },
    { id: 'general', label: 'General' },
  ],
  pie: [
    { id: 'tough-crust', label: 'Tough crust' },
    { id: 'soggy-crust', label: 'Soggy crust' },
    { id: 'general', label: 'General' },
  ],
  iceCream: [
    { id: 'icy', label: 'Icy / grainy' },
    { id: 'melts-fast', label: 'Melts too fast' },
    { id: 'general', label: 'General' },
  ],
  coffee: [
    { id: 'bitter', label: 'Bitter / harsh' },
    { id: 'burnt-taste', label: 'Burnt / smoky' },
    { id: 'sour', label: 'Sour / sharp' },
    { id: 'acidic', label: 'Too acidic' },
    { id: 'weak', label: 'Weak / thin' },
    { id: 'watery', label: 'Watery' },
    { id: 'extraction-balance', label: 'Dialing extraction overall' },
    { id: 'general', label: 'General' },
  ],
  baking: [
    { id: 'butter-temp', label: 'Butter temperature issues' },
    { id: 'recipes-fail', label: 'Recipes keep failing' },
    { id: 'general', label: 'General' },
  ],
};

function isRecipeCategory(v: string): v is RecipeCategory {
  return (
    v === 'cookie' ||
    v === 'cake' ||
    v === 'bread' ||
    v === 'pie' ||
    v === 'iceCream' ||
    v === 'coffee' ||
    v === 'baking'
  );
}

type RecipeRow = {
  rowId: string;
  ingredientId: string;
  amount: string;
  unit: MetricUnit | UsUnit | 'count';
};

function newRowId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `row-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function createRecipeRow(system: MeasurementSystem): RecipeRow {
  return {
    rowId: newRowId(),
    ingredientId: 'flour-ap',
    amount: '',
    unit: defaultUnitForSystem(system),
  };
}

function buildWhatIfPreview(
  finding: DiagnosticFinding | undefined,
  flourAdj: number,
  fatAdj: number,
  sugarAdj: number
): string {
  if (!finding) return '';
  const parts: string[] = [];
  if (flourAdj <= -5) parts.push('Less flour usually increases spread and softens structure.');
  if (flourAdj >= 5) parts.push('More flour adds structure and tends to limit spread.');
  if (fatAdj >= 5) parts.push('More fat often increases tenderness and spread in cookies.');
  if (fatAdj <= -5) parts.push('Less fat can reduce spread and firm the bite.');
  if (sugarAdj >= 5) parts.push('More sugar promotes spread and browning.');
  if (sugarAdj <= -5) parts.push('Less sugar can slow spread and reduce excessive crisp/thin extremes.');
  if (!parts.length) return finding.predictedEffect;
  return `${finding.predictedEffect} Preview: ${parts.join(' ')}`;
}

export default function FixRecipe() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = (() => {
    const c = searchParams.get('category') ?? 'cookie';
    return isRecipeCategory(c) ? c : 'cookie';
  })();

  const [category, setCategory] = useState<RecipeCategory>(initialCategory);
  const [problemId, setProblemId] = useState(() => {
    const fromUrl = searchParams.get('problem');
    if (fromUrl) return fromUrl;
    return PROBLEM_OPTIONS[initialCategory][0]?.id ?? 'general';
  });

  const [recipeNotes, setRecipeNotes] = useState('');
  const [measurementSystem, setMeasurementSystem] = useState<MeasurementSystem>('us');
  const [rows, setRows] = useState<RecipeRow[]>(() => [createRecipeRow('us')]);

  const [flourAdj, setFlourAdj] = useState(0);
  const [fatAdj, setFatAdj] = useState(0);
  const [sugarAdj, setSugarAdj] = useState(0);

  const findingsRef = useRef<HTMLDivElement>(null);
  const [diagnoseBanner, setDiagnoseBanner] = useState(false);

  useEffect(() => {
    const c = searchParams.get('category');
    const p = searchParams.get('problem');
    if (c && isRecipeCategory(c)) setCategory(c);
    if (p) setProblemId(p);
  }, [searchParams]);

  useEffect(() => {
    const choices = PROBLEM_OPTIONS[category];
    if (!choices.some((o) => o.id === problemId)) {
      setProblemId(choices[0]?.id ?? 'general');
    }
  }, [category, problemId]);

  const aggregated = useMemo(
    () =>
      aggregateRecipeRowsExtended(
        rows.map((r) => ({
          ingredientId: r.ingredientId,
          amount: r.amount,
          system: measurementSystem,
          unit: r.unit,
        }))
      ),
    [rows, measurementSystem]
  );

  const evalInput = useMemo(
    () => ({
      category,
      problemId,
      flourG: aggregated.flourG > 0 ? aggregated.flourG : undefined,
      butterG: aggregated.butterG > 0 ? aggregated.butterG : undefined,
      sugarG: aggregated.sugarG > 0 ? aggregated.sugarG : undefined,
      eggCount: aggregated.eggCount > 0 ? aggregated.eggCount : undefined,
      bakingPowderG: aggregated.bakingPowderG > 0 ? aggregated.bakingPowderG : undefined,
      bakingSodaG: aggregated.bakingSodaG > 0 ? aggregated.bakingSodaG : undefined,
      yeastG: aggregated.yeastG > 0 ? aggregated.yeastG : undefined,
      liquidG: aggregated.liquidG > 0 ? aggregated.liquidG : undefined,
    }),
    [category, problemId, aggregated]
  );

  const setSystem = useCallback((system: MeasurementSystem) => {
    setMeasurementSystem(system);
    setRows((prev) =>
      prev.map((r) =>
        r.ingredientId === 'egg-whole' ? { ...r, unit: 'count' } : { ...r, unit: defaultUnitForSystem(system) }
      )
    );
  }, []);

  const updateRow = useCallback((rowId: string, patch: Partial<RecipeRow>) => {
    setRows((prev) =>
      prev.map((r) => {
        if (r.rowId !== rowId) return r;
        const merged: RecipeRow = { ...r, ...patch };
        if (merged.ingredientId === 'egg-whole') {
          merged.unit = 'count';
        } else if (patch.ingredientId != null && r.ingredientId === 'egg-whole') {
          merged.unit = defaultUnitForSystem(measurementSystem);
        }
        return merged;
      })
    );
  }, [measurementSystem]);

  const result = useMemo(() => evaluateDiagnostic(evalInput), [evalInput]);
  const primary = result.findings[0];

  const preview = buildWhatIfPreview(primary, flourAdj, fatAdj, sugarAdj);

  const runDiagnose = () => {
    const r = evaluateDiagnostic(evalInput);
    trackEvent('fix_recipe_diagnose', {
      category,
      problem: problemId,
      signals: r.signals.join(','),
      measurement: measurementSystem,
      ingredient_rows: rows.filter((x) => x.amount.trim() !== '').length,
      has_recipe_notes: recipeNotes.trim().length > 0,
    });
    setSearchParams({ category, problem: problemId }, { replace: true });
    setDiagnoseBanner(true);
    window.setTimeout(() => setDiagnoseBanner(false), 5000);
    requestAnimationFrame(() => {
      findingsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      findingsRef.current?.focus({ preventScroll: true });
    });
  };

  const field =
    'w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm placeholder:text-stone-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/25';

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 py-8 pb-20">
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-violet-800 mb-5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-5 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-900 mb-2.5">
            <FlaskConical className="w-3.5 h-3.5 text-violet-600" aria-hidden />
            Fix My Recipe
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-950 mb-2">Recipe debugger</h1>
          <p className="text-sm text-stone-800 leading-snug mb-1.5">
            Something turned out weird? We&apos;ll help you figure out what likely went wrong and what to change next time.
          </p>
          <p className="text-sm text-stone-800 leading-snug">
            Got an old recipe with a mystery measurement? Type it in and switch between tablespoons and teaspoons—we&apos;ll
            flag amounts that look off before they ruin the batch.
          </p>
        </header>

        <div className="xl:grid xl:grid-cols-2 xl:gap-5 xl:items-start space-y-4 xl:space-y-0">
          <section className="rounded-xl border border-stone-200 bg-white p-4 md:p-5 shadow-sm xl:sticky xl:top-20">
            <h2 className="text-xs font-bold uppercase tracking-wide text-violet-900 mb-1">Build your recipe</h2>
            <p className="text-xs text-stone-600 mb-3 leading-snug">
              Add ingredients and amounts here. On the right, say what you were making and what went wrong—that drives
              the findings.
            </p>
            <div className="space-y-3">
              <div>
                <span className="block text-xs font-semibold text-stone-800 mb-1">Units</span>
                <div className="flex rounded-lg border border-violet-200/80 p-0.5 gap-0.5 bg-violet-50/60">
                  <button
                    type="button"
                    onClick={() => setSystem('metric')}
                    className={`flex-1 rounded-md py-1.5 text-xs font-semibold transition-colors ${
                      measurementSystem === 'metric'
                        ? 'bg-violet-700 text-white shadow-sm'
                        : 'text-stone-800 hover:bg-white/80 hover:text-violet-900'
                    }`}
                  >
                    Metric
                  </button>
                  <button
                    type="button"
                    onClick={() => setSystem('us')}
                    className={`flex-1 rounded-md py-1.5 text-xs font-semibold transition-colors ${
                      measurementSystem === 'us'
                        ? 'bg-violet-700 text-white shadow-sm'
                        : 'text-stone-800 hover:bg-white/80 hover:text-violet-900'
                    }`}
                  >
                    US (cup / tbsp / tsp)
                  </button>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <label className="text-xs font-semibold text-stone-800">Ingredients</label>
                  <button
                    type="button"
                    onClick={() => setRows((r) => [...r, createRecipeRow(measurementSystem)])}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-violet-800 hover:text-violet-950"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add
                  </button>
                </div>
                <ul className="space-y-2">
                  {rows.map((row) => {
                    const isEgg = row.ingredientId === 'egg-whole';
                    const unitChoices = measurementSystem === 'metric' ? METRIC_UNITS : US_UNITS;
                    return (
                      <li
                        key={row.rowId}
                        className="flex flex-col sm:flex-row gap-2 sm:items-center rounded-lg border border-violet-100/90 bg-violet-50/40 p-2"
                      >
                        <div className="flex-1 min-w-0 sm:min-w-[140px]">
                          <label className="sr-only">Ingredient</label>
                          <select
                            value={row.ingredientId}
                            onChange={(e) => updateRow(row.rowId, { ingredientId: e.target.value })}
                            className={field}
                          >
                            {INGREDIENT_GROUPS.map(({ group, items }) => (
                              <optgroup key={group} label={group}>
                                {items.map((ing) => (
                                  <option key={ing.id} value={ing.id}>
                                    {ing.label}
                                  </option>
                                ))}
                              </optgroup>
                            ))}
                          </select>
                        </div>
                        <div className="flex gap-2 flex-1 sm:flex-initial sm:w-auto">
                          <input
                            type="text"
                            inputMode="decimal"
                            placeholder="Amt"
                            value={row.amount}
                            onChange={(e) => updateRow(row.rowId, { amount: e.target.value })}
                            className={`${field} w-20 sm:w-24 shrink-0 tabular-nums`}
                          />
                          {isEgg ? (
                            <div className={`${field} flex-1 sm:w-28 text-stone-800 font-medium`}>eggs</div>
                          ) : (
                            <select
                              value={row.unit === 'count' ? defaultUnitForSystem(measurementSystem) : row.unit}
                              onChange={(e) =>
                                updateRow(row.rowId, { unit: e.target.value as MetricUnit | UsUnit })
                              }
                              className={`${field} flex-1 sm:w-28`}
                            >
                              {unitChoices.map((u) => (
                                <option key={u.value} value={u.value}>
                                  {u.label}
                                </option>
                              ))}
                            </select>
                          )}
                        </div>
                        <button
                          type="button"
                          disabled={rows.length <= 1}
                          onClick={() => {
                            if (rows.length <= 1) return;
                            setRows((r) => r.filter((x) => x.rowId !== row.rowId));
                          }}
                          className="inline-flex items-center justify-center rounded-lg p-2 text-stone-500 hover:bg-red-50 hover:text-red-700 disabled:opacity-30 disabled:pointer-events-none shrink-0 self-end sm:self-center"
                          aria-label="Remove row"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {aggregated.flourG > 0 || aggregated.butterG > 0 || aggregated.sugarG > 0 ? (
                <div className="flex flex-wrap gap-x-4 gap-y-1 rounded-lg border border-violet-200 bg-violet-50 px-3 py-2.5 text-xs text-stone-900">
                  <span className="font-bold text-violet-900">Ratio totals</span>
                  <span className="text-stone-800">
                    Flour <span className="tabular-nums font-bold text-violet-950">{aggregated.flourG}g</span>
                  </span>
                  <span className="text-stone-800">
                    Fat <span className="tabular-nums font-bold text-violet-950">{aggregated.butterG}g</span>
                  </span>
                  <span className="text-stone-800">
                    Sugar <span className="tabular-nums font-bold text-violet-950">{aggregated.sugarG}g</span>
                  </span>
                </div>
              ) : null}
              <p className="text-xs text-stone-700 leading-snug">
                Ratio totals use only these lines (not the notes on the right). Rule-based engine (no AI).
              </p>
              <button
                type="button"
                onClick={runDiagnose}
                className="w-full rounded-lg bg-gradient-to-r from-violet-700 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-500/25 hover:from-violet-800 hover:to-violet-700 transition-colors"
              >
                Diagnose
              </button>
              {diagnoseBanner ? (
                <p
                  className="text-sm font-semibold text-violet-900 text-center rounded-lg border border-violet-200 bg-violet-50 px-3 py-2"
                  role="status"
                  aria-live="polite"
                >
                  Scrolled to your context and findings.
                </p>
              ) : (
                <p className="text-xs text-stone-600 text-center leading-snug">
                  Tip: tap <span className="font-semibold text-stone-800">Diagnose</span> to jump to your context and
                  findings on the right (they also update as you edit).
                </p>
              )}
            </div>
          </section>

          <div className="space-y-4">
            <div
              ref={findingsRef}
              tabIndex={-1}
              id="fix-recipe-findings"
              className="scroll-mt-24 outline-none rounded-xl border border-stone-200 bg-white p-4 md:p-5 shadow-sm ring-offset-2 focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              <h2 className="text-xs font-bold uppercase tracking-wide text-violet-900 mb-1">What went wrong</h2>
              <p className="text-xs text-stone-600 mb-4 leading-snug">
                These answers match the findings below—same card so it&apos;s clear what we&apos;re fixing.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 mb-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">Making</label>
                  <select
                    value={category}
                    onChange={(e) => {
                      const c = e.target.value as RecipeCategory;
                      setCategory(c);
                      setProblemId(PROBLEM_OPTIONS[c][0]?.id ?? 'general');
                    }}
                    className={field}
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">Problem</label>
                  <select
                    value={problemId}
                    onChange={(e) => setProblemId(e.target.value)}
                    className={field}
                  >
                    {PROBLEM_OPTIONS[category].map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-xs font-semibold text-stone-800 mb-1">Notes (optional)</label>
                <textarea
                  value={recipeNotes}
                  onChange={(e) => setRecipeNotes(e.target.value)}
                  placeholder="Paste or describe what happened…"
                  rows={2}
                  className={`${field} resize-y min-h-[4.5rem]`}
                />
              </div>
              <div className="border-t border-stone-200 pt-4 mb-4">
                <h2 className="text-xs font-bold uppercase tracking-wide text-violet-900 mb-2">What this bakes like</h2>
                <p className="text-[11px] text-stone-600 mb-2 leading-snug">
                  From your flour, fat, sugar, eggs, leaveners, and liquids vs flour (approximate home-baking math).
                </p>
                {result.characterization ? (
                  <div className="rounded-lg border border-violet-200 bg-violet-50/90 px-3 py-3">
                    <p className="text-base font-bold text-stone-950 leading-snug mb-2">
                      This will tend to be: {result.characterization.headline}
                    </p>
                    <p className="text-sm text-stone-800 leading-relaxed">{result.characterization.blurb}</p>
                  </div>
                ) : (
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Add flour and real amounts in the builder on the left. Without flour in the table we can&apos;t classify
                    the dough (sugar cookie, cakey bar, shortbread, etc.).
                  </p>
                )}
              </div>
              <h2 className="text-xs font-bold uppercase tracking-wide text-violet-900 mb-3 border-t border-stone-200 pt-4">
                Findings
              </h2>
              <div className="space-y-3">
                {result.findings.map((f) => (
                  <article key={f.id} className="rounded-lg border border-violet-100 bg-violet-50/35 p-3">
                    <div className="flex flex-wrap items-baseline gap-2 mb-1.5">
                      <h3 className="text-sm font-bold text-stone-950">{f.title}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-md bg-violet-200/80 border border-violet-300 text-violet-950">
                        {f.confidence}
                      </span>
                    </div>
                    <p className="text-sm text-stone-800 mb-2 leading-relaxed">{f.explanation}</p>
                    <p className="text-xs font-bold text-violet-900 mb-1">Next try</p>
                    <ul className="space-y-1 mb-2">
                      {f.suggestedChanges.map((c, i) => (
                        <li key={i} className="text-sm text-stone-900 flex gap-1.5">
                          <span className="text-violet-700 font-bold shrink-0">
                            {c.deltaPct === 0 ? '→' : `${c.direction === 'increase' ? '+' : '−'}${Math.abs(c.deltaPct)}%`}
                          </span>
                          <span>
                            <span className="font-semibold text-stone-950">{c.ingredient}:</span>{' '}
                            <span className="text-stone-800">{c.rationale}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-stone-900 border-t border-violet-200/60 pt-2 leading-snug">
                      <span className="font-bold text-violet-900">Effect:</span> {f.predictedEffect}
                    </p>
                    {f.relatedArticlePath ? (
                      <Link
                        to={f.relatedArticlePath}
                        className="inline-flex mt-2 text-sm font-semibold text-violet-800 hover:text-violet-950 hover:underline"
                        onClick={() => trackCTAClick('fix_recipe_finding', f.relatedArticlePath ?? '')}
                      >
                        Article →
                      </Link>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>

            <section className="rounded-xl border border-stone-200 bg-white p-4 md:p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <SlidersHorizontal className="w-4 h-4 text-violet-600" aria-hidden />
                <h2 className="text-xs font-bold uppercase tracking-wide text-violet-900">What-if (±15%)</h2>
              </div>
              <p className="text-xs text-stone-800 mb-3 leading-snug">
                Preview how small ratio nudges tend to read—local only.
              </p>
              <div className="space-y-3">
                {(
                  [
                    ['Flour', flourAdj, setFlourAdj],
                    ['Fat', fatAdj, setFatAdj],
                    ['Sugar', sugarAdj, setSugarAdj],
                  ] as const
                ).map(([label, val, setVal]) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-stone-900">{label}</span>
                      <span className="tabular-nums font-semibold text-violet-800">{val > 0 ? `+${val}` : val}%</span>
                    </div>
                    <input
                      type="range"
                      min={-15}
                      max={15}
                      step={1}
                      value={val}
                      onChange={(e) => setVal(Number(e.target.value))}
                      className="w-full accent-violet-600"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-lg border border-violet-100 bg-violet-50/70 px-3 py-2 text-xs text-stone-900 leading-snug">
                {preview || 'Use Diagnose on the left, then move sliders.'}
              </div>
            </section>

            {category === 'cookie' ? (
              <section className="rounded-xl border border-amber-300/90 bg-amber-50 p-4 text-center">
                <p className="text-sm font-semibold text-amber-950 mb-2">Want spread and texture numbers?</p>
                <a
                  href="https://cookiesensei.senseifood.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-amber-100 text-amber-950 text-sm font-bold px-4 py-2 border-2 border-amber-400 hover:bg-amber-200 transition-colors"
                  onClick={() => trackCTAClick('fix_recipe', 'open_cookie_sensei')}
                >
                  CookieSensei →
                </a>
              </section>
            ) : null}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
