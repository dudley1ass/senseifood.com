import { ArrowLeft, ChefHat, ExternalLink, FlaskConical } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';
import { SAUCE_SENSEI_APP_URL } from '../config/publicUrls';
import { articlesIndexHref, isArticleLibraryTabId } from '../constants/articleLibraryNav';
import { trackCTAClick, trackClicksToFixRecipe, trackToolStart } from '../utils/analytics';

const THEME: Record<
  ScienceArticleSpec['categoryLabel'],
  {
    pageBg: string;
    pill: string;
    h1: string;
    h2: string;
    heroFrom: string;
    heroTo: string;
    quickBorder: string;
    quickLabel: string;
    ctaFrom: string;
    ctaTo: string;
    linkClass: string;
  }
> = {
  'Bread Science': {
    pageBg: 'from-amber-50 via-yellow-50 to-orange-50',
    pill: 'from-amber-500 to-yellow-600',
    h1: 'from-amber-600 to-yellow-600',
    h2: 'from-amber-600 to-yellow-600',
    heroFrom: 'from-amber-200',
    heroTo: 'to-yellow-300',
    quickBorder: 'border-amber-400',
    quickLabel: 'text-amber-800',
    ctaFrom: 'from-amber-600',
    ctaTo: 'to-yellow-600',
    linkClass: 'text-amber-700',
  },
  'Cookie Science': {
    pageBg: 'from-orange-50 via-amber-50 to-yellow-50',
    pill: 'from-orange-500 to-amber-600',
    h1: 'from-orange-600 to-amber-700',
    h2: 'from-orange-600 to-amber-700',
    heroFrom: 'from-orange-200',
    heroTo: 'to-amber-300',
    quickBorder: 'border-orange-400',
    quickLabel: 'text-orange-800',
    ctaFrom: 'from-orange-600',
    ctaTo: 'to-amber-600',
    linkClass: 'text-orange-700',
  },
  'Cake Science': {
    pageBg: 'from-purple-50 via-pink-50 to-rose-50',
    pill: 'from-purple-500 to-pink-600',
    h1: 'from-purple-600 to-pink-600',
    h2: 'from-purple-600 to-pink-600',
    heroFrom: 'from-purple-200',
    heroTo: 'to-pink-300',
    quickBorder: 'border-purple-400',
    quickLabel: 'text-purple-800',
    ctaFrom: 'from-purple-600',
    ctaTo: 'to-pink-600',
    linkClass: 'text-purple-700',
  },
  'Pie Science': {
    pageBg: 'from-amber-50 via-orange-50 to-yellow-50',
    pill: 'from-amber-600 to-orange-600',
    h1: 'from-amber-700 to-orange-600',
    h2: 'from-amber-700 to-orange-600',
    heroFrom: 'from-amber-200',
    heroTo: 'to-orange-300',
    quickBorder: 'border-orange-400',
    quickLabel: 'text-orange-900',
    ctaFrom: 'from-amber-600',
    ctaTo: 'to-orange-600',
    linkClass: 'text-amber-800',
  },
  'Ice Cream Science': {
    pageBg: 'from-cyan-50 via-sky-50 to-blue-50',
    pill: 'from-cyan-500 to-blue-600',
    h1: 'from-cyan-600 to-blue-700',
    h2: 'from-cyan-600 to-blue-700',
    heroFrom: 'from-cyan-200',
    heroTo: 'to-blue-300',
    quickBorder: 'border-cyan-400',
    quickLabel: 'text-cyan-900',
    ctaFrom: 'from-cyan-600',
    ctaTo: 'to-blue-600',
    linkClass: 'text-cyan-800',
  },
  'Coffee Science': {
    pageBg: 'from-stone-100 via-amber-50 to-yellow-50',
    pill: 'from-stone-600 to-amber-800',
    h1: 'from-stone-700 to-amber-800',
    h2: 'from-stone-700 to-amber-800',
    heroFrom: 'from-stone-200',
    heroTo: 'to-amber-200',
    quickBorder: 'border-stone-400',
    quickLabel: 'text-stone-800',
    ctaFrom: 'from-stone-700',
    ctaTo: 'to-amber-700',
    linkClass: 'text-amber-900',
  },
  'Sauce Science': {
    pageBg: 'from-amber-50 via-rose-50 to-orange-50',
    pill: 'from-rose-600 to-orange-600',
    h1: 'from-rose-700 to-orange-600',
    h2: 'from-rose-700 to-orange-600',
    heroFrom: 'from-rose-200',
    heroTo: 'to-orange-300',
    quickBorder: 'border-rose-400',
    quickLabel: 'text-rose-900',
    ctaFrom: 'from-rose-700',
    ctaTo: 'to-orange-600',
    linkClass: 'text-rose-800',
  },
};

type Props = { spec: ScienceArticleSpec };

export function ScienceArticlePage({ spec }: Props) {
  const location = useLocation();
  const rawTab = (location.state as { articlesTab?: string } | null | undefined)?.articlesTab;
  const preservedTab = isArticleLibraryTabId(rawTab) ? rawTab : null;
  const articlesListHref = articlesIndexHref(preservedTab);
  const articlesListState = preservedTab ? ({ articlesTab: preservedTab } as const) : undefined;

  const t = THEME[spec.categoryLabel];
  const fixHref = `/fix-recipe?category=${spec.fixRecipe.category}&problem=${encodeURIComponent(spec.fixRecipe.problem)}`;
  const sauceInteractiveUrl = spec.sauceSensei
    ? `${SAUCE_SENSEI_APP_URL}/sauce/${spec.sauceSensei.sauceId}`
    : null;
  const sauceMirrorArticleUrl = spec.sauceSensei ? `${SAUCE_SENSEI_APP_URL}/article/${spec.slug}` : null;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${t.pageBg}`}>
      <Navigation />

      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to={articlesListHref}
          state={articlesListState}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <div
            className={`inline-flex items-center gap-2 bg-gradient-to-r ${t.pill} text-white px-4 py-2 rounded-full text-sm mb-6`}
          >
            {spec.sauceSensei ? `${spec.categoryLabel} · Recipe guide` : spec.categoryLabel}
          </div>
          <h1 className={`text-5xl md:text-6xl mb-6 bg-gradient-to-r ${t.h1} bg-clip-text text-transparent`}>
            {spec.title}
          </h1>
          <p className="text-xl text-muted-foreground">{spec.subtitle}</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>{spec.readTime}</span>
            <span>•</span>
            <span>{spec.level ?? 'Practical science'}</span>
          </div>
        </header>

        <div className={`w-full h-80 bg-gradient-to-br ${t.heroFrom} ${t.heroTo} rounded-3xl mb-12 flex items-center justify-center shadow-2xl`}>
          <span className="text-8xl">{spec.emoji}</span>
        </div>

        {spec.sauceSensei ? (
          <div
            className={`bg-white/90 border-2 border-rose-200 rounded-2xl p-6 shadow-md mb-10 bg-gradient-to-br ${t.heroFrom} ${t.heroTo}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <ChefHat className="w-10 h-10 text-rose-700 shrink-0" aria-hidden />
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-rose-900 mb-1">Sauce Sensei (interactive)</p>
                <p className="text-foreground/90 text-sm leading-relaxed mb-4">
                  Build this sauce with live grams, the flavor wheel, and structure guardrails on{' '}
                  <strong className="text-foreground">saucesensei.com</strong>. This hub article is indexed here; the app
                  mirrors the same guide under <code className="text-xs bg-white/60 px-1 rounded">/article/{spec.slug}</code>{' '}
                  for sharing.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <a
                    href={sauceInteractiveUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackCTAClick('science_article_inline', 'sauce_sensei_interactive', sauceInteractiveUrl!);
                      trackToolStart('SauceSensei', 'science_article_inline');
                    }}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${t.ctaFrom} ${t.ctaTo} text-white text-sm font-bold px-5 py-3 shadow-md hover:opacity-95 transition-opacity`}
                  >
                    Open interactive recipe
                    <ExternalLink className="w-4 h-4" aria-hidden />
                  </a>
                  <a
                    href={sauceMirrorArticleUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackCTAClick('science_article_inline', 'sauce_sensei_article_mirror', sauceMirrorArticleUrl!)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-rose-400 bg-white/90 text-rose-900 text-sm font-semibold px-5 py-3 hover:bg-white"
                  >
                    Same article in Sauce Sensei
                    <ExternalLink className="w-4 h-4" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white/80 border border-stone-200 rounded-2xl p-6 shadow-md mb-10 flex gap-4 items-start">
            <FlaskConical className="w-8 h-8 text-purple-600 shrink-0 mt-1" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-800 mb-1">Apply this in your kitchen</p>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                SenseiFood’s rule-based <strong>Fix My Recipe</strong> debugger walks through ratios and process using the same
                category you’re reading about—no signup, no black-box AI. Add optional gram weights to see how your formula
                compares to reference patterns.
              </p>
              <Link
                to={fixHref}
                onClick={() => {
                  trackClicksToFixRecipe('science_article_inline');
                  trackCTAClick('science_article_inline', 'fix_my_recipe', fixHref);
                }}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold px-5 py-2.5 shadow-md hover:opacity-95 transition-opacity"
              >
                Open Fix My Recipe for this topic →
              </Link>
              <p className="text-xs text-muted-foreground mt-3">
                New to the tool? Read{' '}
                <Link to="/baking-science/how-to-use-fix-my-recipe" className="underline font-medium text-purple-700">
                  How to Use Fix My Recipe
                </Link>{' '}
                and{' '}
                <Link
                  to="/baking-science/fix-recipes-one-variable-at-a-time"
                  className="underline font-medium text-purple-700"
                >
                  Fix Recipes One Variable at a Time
                </Link>
                .
              </p>
            </div>
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <div className={`bg-white border-l-4 ${t.quickBorder} p-5 rounded-xl mb-8 flex items-start gap-4`}>
            <span className="text-3xl flex-shrink-0">⚡</span>
            <div>
              <p className={`font-bold ${t.quickLabel} text-sm uppercase tracking-wide mb-1`}>Quick answer</p>
              <p className="text-foreground/80 leading-relaxed">{spec.quickAnswer}</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">{spec.intro}</p>

          {spec.sections.map((sec) => (
            <section key={sec.heading}>
              <h2 className={`text-3xl mt-12 mb-6 bg-gradient-to-r ${t.h2} bg-clip-text text-transparent`}>{sec.heading}</h2>
              {sec.paragraphs.map((p, i) => (
                <p key={`${sec.heading}-${i}`} className="leading-relaxed text-foreground/80 mb-5">
                  {p}
                </p>
              ))}
              {sec.bullets && sec.bullets.length > 0 && (
                <ul className="space-y-3 my-6 not-prose">
                  {sec.bullets.map((b) => (
                    <li key={(b.title ?? '') + b.text.slice(0, 40)} className="flex gap-3 text-foreground/80">
                      <span className="text-lg leading-none">•</span>
                      <span>
                        {b.title ? <strong className="text-foreground">{b.title}: </strong> : null}
                        {b.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {sec.tip ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-900 not-prose my-6">
                  <strong>Practical fix: </strong>
                  {sec.tip}
                </div>
              ) : null}
            </section>
          ))}

          {spec.faqs && spec.faqs.length > 0 ? (
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-12 not-prose">
              <h2 className="text-3xl mb-6 text-foreground">Frequently asked questions</h2>
              <div className="space-y-6">
                {spec.faqs.map((f, i) => (
                  <div key={i} className={i > 0 ? 'border-t border-stone-100 pt-6' : ''}>
                    <h3 className="text-xl mb-2 text-foreground">{f.q}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-stone-200 my-10 not-prose">
            <h3 className="text-2xl mb-4">Related articles</h3>
            <div className="space-y-3">
              {spec.related.map((r) => (
                <Link
                  key={r.path}
                  to={r.path}
                  state={articlesListState}
                  className={`block ${t.linkClass} hover:underline text-sm font-medium`}
                >
                  → {r.title}
                </Link>
              ))}
            </div>
          </div>

          <div className={`bg-gradient-to-br ${t.ctaFrom} ${t.ctaTo} rounded-3xl p-10 text-white my-16 shadow-2xl not-prose`}>
            {spec.sauceSensei ? (
              <>
                <h3 className="text-3xl mb-4">Turn this guide into a live build</h3>
                <p className="text-white/90 mb-6 text-lg leading-relaxed">
                  Sauce Sensei runs the interactive wheel and guardrails for this exact recipe. Use it to scale amounts, then
                  come back here for the long-form read anytime — both URLs are indexed for search.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={sauceInteractiveUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackCTAClick('science_article_footer', 'sauce_sensei_interactive', sauceInteractiveUrl!);
                      trackToolStart('SauceSensei', 'science_article_footer');
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-white text-rose-900 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all text-center"
                  >
                    Open Sauce Sensei
                    <ExternalLink className="w-5 h-5" aria-hidden />
                  </a>
                  <Link
                    to={articlesIndexHref('sauces')}
                    state={{ articlesTab: 'sauces' as const }}
                    className="inline-block border-2 border-white/80 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors text-center"
                  >
                    More sauce articles
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-3xl mb-4">Turn diagnosis into a testable next bake</h3>
                <p className="text-white/90 mb-6 text-lg leading-relaxed">
                  Use Fix My Recipe to match your symptom to common ratio and process causes, then change <em>one</em> variable
                  and rebake—exactly how professional kitchens debug formulas.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to={fixHref}
                    onClick={() => {
                      trackClicksToFixRecipe('science_article_footer');
                      trackCTAClick('science_article_footer', 'fix_my_recipe', fixHref);
                    }}
                    className="inline-block bg-white text-stone-900 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all text-center"
                  >
                    Open Fix My Recipe →
                  </Link>
                  <Link
                    to={articlesListHref}
                    state={articlesListState}
                    className="inline-block border-2 border-white/80 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors text-center"
                  >
                    Browse all articles
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

function createArticlePageComponent(spec: ScienceArticleSpec) {
  function Page() {
    return <ScienceArticlePage spec={spec} />;
  }
  Page.displayName = `ScienceArticle(${spec.slug})`;
  return Page;
}

export function createScienceArticleRoutes(specs: ScienceArticleSpec[]) {
  return specs.map((spec) => ({
    path: `${spec.segment}/${spec.slug}`,
    Component: createArticlePageComponent(spec),
  }));
}
