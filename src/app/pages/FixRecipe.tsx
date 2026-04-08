import { useMemo, useEffect, useState, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router';
import { ArrowLeft, FlaskConical, Plus, SlidersHorizontal, Trash2 } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { evaluateDiagnostic } from '../diagnostics/evaluate';
import type { DiagnosticFinding, RecipeCategory } from '../diagnostics/types';
import {
  INGREDIENT_CATALOG,
  aggregateRecipeRows,
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

const SENSEI_GROUPS = (() => {
  const seen = new Set<string>();
  const order: string[] = [];
  for (const ing of INGREDIENT_CATALOG) {
    if (!seen.has(ing.sensei)) {
      seen.add(ing.sensei);
      order.push(ing.sensei);
    }
  }
  return order.map((sensei) => ({
    sensei,
    items: INGREDIENT_CATALOG.filter((i) => i.sensei === sensei),
  }));
})();

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
      aggregateRecipeRows(
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-12 pb-28">
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm mb-4">
            <FlaskConical className="w-4 h-4" />
            Fix My Recipe
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent mb-3">
            Debugger for cooking
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Say what you were making, paste or describe your recipe, then line up ingredients in metric or US measures.
            We run a deterministic rule engine (no AI) for ratio-aware hints—then use the sliders to preview small shifts.
          </p>
          <div className="mt-6 max-w-2xl rounded-xl border border-amber-200/90 bg-amber-50/90 px-4 py-3 text-sm text-amber-950/90 leading-relaxed">
            <strong className="font-semibold">Got an old recipe and not sure if that&apos;s tablespoons or teaspoons?</strong>{' '}
            Enter the amount in the ingredient lines and switch the unit—the flour, fat, and sugar totals update
            immediately, so you can tell which reading is plausible. Run <span className="font-medium">Diagnose</span> and
            the ratio signals will highlight when the formula looks badly off.
          </div>
        </header>

        <div className="grid gap-8 md:grid-cols-1">
          <section className="bg-white/90 backdrop-blur rounded-2xl border-2 border-purple-100 shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">Inputs</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  What were you trying to make?
                </label>
                <select
                  value={category}
                  onChange={(e) => {
                    const c = e.target.value as RecipeCategory;
                    setCategory(c);
                    setProblemId(PROBLEM_OPTIONS[c][0]?.id ?? 'general');
                  }}
                  className="w-full rounded-xl border-2 border-purple-100 bg-white px-4 py-3 text-sm"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label} — {c.description}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  Your recipe (paste or describe — optional)
                </label>
                <textarea
                  value={recipeNotes}
                  onChange={(e) => setRecipeNotes(e.target.value)}
                  placeholder="e.g. 2 cups flour, 1 stick butter, 3/4 cup sugar, baked 350°F for 12 min…"
                  rows={4}
                  className="w-full rounded-xl border-2 border-purple-100 bg-white px-4 py-3 text-sm resize-y min-h-[100px] placeholder:text-muted-foreground/60"
                />
              </div>
              <div>
                <span className="block text-sm font-medium text-foreground/80 mb-2">Measurements</span>
                <div className="flex rounded-xl border-2 border-purple-100 p-1 gap-1 bg-purple-50/40">
                  <button
                    type="button"
                    onClick={() => setSystem('metric')}
                    className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-colors ${
                      measurementSystem === 'metric'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                  >
                    Metric (g, kg, ml)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSystem('us')}
                    className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-colors ${
                      measurementSystem === 'us'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                  >
                    US (cups, tbsp, tsp, oz)
                  </button>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <label className="text-sm font-medium text-foreground/80">Ingredients</label>
                  <button
                    type="button"
                    onClick={() => setRows((r) => [...r, createRecipeRow(measurementSystem)])}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-700 hover:text-purple-900"
                  >
                    <Plus className="w-4 h-4" />
                    Add line
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Options cover Cookie, cake, pie, ice cream, coffee, and bread-style ingredients. Amounts convert to grams
                  for flour, fat, and sugar ratio signals.
                </p>
                <ul className="space-y-3">
                  {rows.map((row) => {
                    const isEgg = row.ingredientId === 'egg-whole';
                    const unitChoices = measurementSystem === 'metric' ? METRIC_UNITS : US_UNITS;
                    return (
                      <li
                        key={row.rowId}
                        className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:items-end rounded-xl border border-purple-100 bg-purple-50/30 p-3"
                      >
                        <div className="flex-1 min-w-[200px]">
                          <label className="sr-only">Ingredient</label>
                          <select
                            value={row.ingredientId}
                            onChange={(e) => updateRow(row.rowId, { ingredientId: e.target.value })}
                            className="w-full rounded-lg border-2 border-purple-100 bg-white px-3 py-2 text-sm"
                          >
                            {SENSEI_GROUPS.map(({ sensei, items }) => (
                              <optgroup key={sensei} label={sensei}>
                                {items.map((ing) => (
                                  <option key={ing.id} value={ing.id}>
                                    {ing.label}
                                  </option>
                                ))}
                              </optgroup>
                            ))}
                          </select>
                        </div>
                        <div className="w-full sm:w-28">
                          <label className="sr-only">Amount</label>
                          <input
                            type="text"
                            inputMode="decimal"
                            placeholder="Amount"
                            value={row.amount}
                            onChange={(e) => updateRow(row.rowId, { amount: e.target.value })}
                            className="w-full rounded-lg border-2 border-purple-100 bg-white px-3 py-2 text-sm tabular-nums"
                          />
                        </div>
                        <div className="w-full sm:w-36">
                          <label className="sr-only">Unit</label>
                          {isEgg ? (
                            <div className="rounded-lg border-2 border-purple-100 bg-white px-3 py-2 text-sm text-foreground/80">
                              whole egg(s)
                            </div>
                          ) : (
                            <select
                              value={row.unit === 'count' ? defaultUnitForSystem(measurementSystem) : row.unit}
                              onChange={(e) =>
                                updateRow(row.rowId, { unit: e.target.value as MetricUnit | UsUnit })
                              }
                              className="w-full rounded-lg border-2 border-purple-100 bg-white px-3 py-2 text-sm"
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
                          className="inline-flex items-center justify-center rounded-lg border-2 border-transparent p-2 text-muted-foreground hover:text-red-600 hover:bg-red-50 disabled:opacity-40 disabled:pointer-events-none shrink-0"
                          aria-label="Remove ingredient row"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {aggregated.flourG > 0 || aggregated.butterG > 0 || aggregated.sugarG > 0 ? (
                <div className="rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50/80 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-purple-900/80 mb-2">
                    Totals used for ratio signals
                  </p>
                  <dl className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                    <div className="flex justify-between sm:block gap-2">
                      <dt className="text-muted-foreground">Flour (equiv.)</dt>
                      <dd className="font-medium tabular-nums">{aggregated.flourG} g</dd>
                    </div>
                    <div className="flex justify-between sm:block gap-2">
                      <dt className="text-muted-foreground">Fat (equiv.)</dt>
                      <dd className="font-medium tabular-nums">{aggregated.butterG} g</dd>
                    </div>
                    <div className="flex justify-between sm:block gap-2">
                      <dt className="text-muted-foreground">Sugar (equiv.)</dt>
                      <dd className="font-medium tabular-nums">{aggregated.sugarG} g</dd>
                    </div>
                  </dl>
                </div>
              ) : null}
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">What went wrong?</label>
                <select
                  value={problemId}
                  onChange={(e) => setProblemId(e.target.value)}
                  className="w-full rounded-xl border-2 border-purple-100 bg-white px-4 py-3 text-sm"
                >
                  {PROBLEM_OPTIONS[category].map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-xs text-muted-foreground">
                Ratio totals come from the ingredient lines above (not from the free-text recipe). Coffee- and bread-heavy
                flows can still use problem-only rules if you skip those lines.
              </p>
              <button
                type="button"
                onClick={runDiagnose}
                className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 font-medium shadow-md hover:opacity-95 transition-opacity"
              >
                Diagnose
              </button>
            </div>
          </section>

          <section className="bg-white/90 backdrop-blur rounded-2xl border-2 border-purple-100 shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-2">Signals</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Derived from flour / fat / sugar grams implied by your ingredient lines. If those totals are empty, we only
              match on the problem you selected.
            </p>
            {result.signals.length ? (
              <ul className="flex flex-wrap gap-2">
                {result.signals.map((s) => (
                  <li key={s} className="text-xs font-medium px-3 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-100">
                    {s.replace(/_/g, ' ')}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">
                No ratio signals yet—add flour, fat, or sugar lines (or continue with problem-only rules).
              </p>
            )}
          </section>

          <section className="bg-white/90 backdrop-blur rounded-2xl border-2 border-purple-100 shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <SlidersHorizontal className="w-5 h-5 text-purple-700" />
              <h2 className="text-xl font-semibold text-foreground">What-if sliders</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Nudge flour, fat, and sugar in ±15% steps to see plain-language previews. This does not call an API—it
              extrapolates from baking mechanics tied to your top diagnosis.
            </p>
            <div className="space-y-6">
              {(
                [
                  ['Flour vs baseline', flourAdj, setFlourAdj],
                  ['Fat vs baseline', fatAdj, setFatAdj],
                  ['Sugar vs baseline', sugarAdj, setSugarAdj],
                ] as const
              ).map(([label, val, setVal]) => (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-foreground/90">{label}</span>
                    <span className="text-purple-700 tabular-nums">{val > 0 ? `+${val}` : val}%</span>
                  </div>
                  <input
                    type="range"
                    min={-15}
                    max={15}
                    step={1}
                    value={val}
                    onChange={(e) => setVal(Number(e.target.value))}
                    className="w-full accent-purple-600"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 p-4 text-sm text-foreground/90 leading-relaxed">
              {preview || 'Run Diagnose to see a predicted effect line, then move sliders for a preview.'}
            </div>
          </section>

          <section className="bg-white/90 backdrop-blur rounded-2xl border-2 border-purple-100 shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">Findings</h2>
            <div className="space-y-6">
              {result.findings.map((f) => (
                <article key={f.id} className="rounded-xl border border-purple-100 bg-white p-5 shadow-sm">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                    <span className="text-xs uppercase tracking-wide px-2 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-100">
                      {f.confidence} confidence
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{f.explanation}</p>
                  <p className="text-sm font-medium text-foreground mb-2">Suggested changes</p>
                  <ul className="space-y-2 mb-4">
                    {f.suggestedChanges.map((c, i) => (
                      <li key={i} className="text-sm text-foreground/90 flex gap-2">
                        <span className="text-purple-600 font-semibold shrink-0">
                          {c.deltaPct === 0 ? '→' : `${c.direction === 'increase' ? '+' : '−'}${Math.abs(c.deltaPct)}%`}
                        </span>
                        <span>
                          <span className="font-medium">{c.ingredient}:</span> {c.rationale}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-foreground/90 leading-relaxed border-t border-purple-50 pt-3">
                    <span className="font-semibold text-purple-800">Predicted effect:</span> {f.predictedEffect}
                  </p>
                  {f.relatedArticlePath ? (
                    <Link
                      to={f.relatedArticlePath}
                      className="inline-flex mt-3 text-sm font-medium text-pink-600 hover:underline"
                      onClick={() => trackCTAClick('fix_recipe_finding', f.relatedArticlePath ?? '')}
                    >
                      Read the science article →
                    </Link>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          {category === 'cookie' ? (
            <section className="rounded-2xl border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-6 text-center">
              <p className="text-sm text-foreground/80 mb-3">Want quantitative spread and texture prediction?</p>
              <a
                href="https://cookiesensei.senseifood.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white text-amber-700 font-semibold px-6 py-3 border-2 border-amber-200 shadow-sm hover:shadow-md transition-shadow"
                onClick={() => trackCTAClick('fix_recipe', 'open_cookie_sensei')}
              >
                Open CookieSensei →
              </a>
            </section>
          ) : null}
        </div>
      </main>

      <Footer />
    </div>
  );
}
