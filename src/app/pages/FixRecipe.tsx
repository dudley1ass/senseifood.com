import { useMemo, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { ArrowLeft, FlaskConical, SlidersHorizontal } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { evaluateDiagnostic } from '../diagnostics/evaluate';
import type { DiagnosticFinding, RecipeCategory } from '../diagnostics/types';
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

  const [flourG, setFlourG] = useState('');
  const [butterG, setButterG] = useState('');
  const [sugarG, setSugarG] = useState('');

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

  const evalInput = useMemo(
    () => ({
      category,
      problemId,
      flourG: flourG === '' ? undefined : Number(flourG),
      butterG: butterG === '' ? undefined : Number(butterG),
      sugarG: sugarG === '' ? undefined : Number(sugarG),
    }),
    [category, problemId, flourG, butterG, sugarG]
  );

  const result = useMemo(() => evaluateDiagnostic(evalInput), [evalInput]);
  const primary = result.findings[0];

  const preview = buildWhatIfPreview(primary, flourAdj, fatAdj, sugarAdj);

  const runDiagnose = () => {
    const r = evaluateDiagnostic(evalInput);
    trackEvent('fix_recipe_diagnose', {
      category,
      problem: problemId,
      signals: r.signals.join(','),
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
            Tell us what went wrong and optionally plug in a few weights. We run a deterministic rule engine (no AI) to
            suggest high-impact levers—then use the sliders to preview what small ratio shifts usually do.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-1">
          <section className="bg-white/90 backdrop-blur rounded-2xl border-2 border-purple-100 shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">Inputs</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">Category</label>
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
                <label className="block text-sm font-medium text-foreground/80 mb-2">Problem</label>
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
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">Flour (g)</label>
                  <input
                    type="number"
                    min={0}
                    placeholder="optional"
                    value={flourG}
                    onChange={(e) => setFlourG(e.target.value)}
                    className="w-full rounded-xl border-2 border-purple-100 bg-white px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">Butter / fat (g)</label>
                  <input
                    type="number"
                    min={0}
                    placeholder="optional"
                    value={butterG}
                    onChange={(e) => setButterG(e.target.value)}
                    className="w-full rounded-xl border-2 border-purple-100 bg-white px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">Sugar (g)</label>
                  <input
                    type="number"
                    min={0}
                    placeholder="optional"
                    value={sugarG}
                    onChange={(e) => setSugarG(e.target.value)}
                    className="w-full rounded-xl border-2 border-purple-100 bg-white px-4 py-3 text-sm"
                  />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Optional weights unlock ratio flags (e.g. high fat vs flour) so rules can tighten confidence. Coffee/bread
                can ignore these fields for now.
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
              Derived from your grams (when provided). Empty fields mean we only match on the problem you selected.
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
              <p className="text-sm text-muted-foreground">No ratio signals yet—add flour (and fat/sugar) or keep going with problem-only rules.</p>
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
