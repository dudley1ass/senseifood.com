/**
 * Specs for topic-gap and sauce articles (long-form body). The /articles grid roster lives in
 * `src/app/pages/articles/allArticlesCatalog.ts` (titles, blurbs, URLs, Sensei pairing).
 */
import { articlePath, type ScienceArticleSpec } from '../scienceArticleTypes';
import { applyEnrichments } from './applyEnrichments';
import { appendDynamicSectionIfShort } from './dynamicArticleExtension';
import { breadNewScienceArticlesPart1 } from './breadPart1';
import { breadNewScienceArticlesPart2 } from './breadPart2';
import { cookieGapScienceArticles, pieGapScienceArticles } from './cookiesAndPies';
import { cakeGapScienceArticles } from './cakesGaps';
import { coffeeGapScienceArticles, iceCreamGapScienceArticles } from './coffeeAndIceCream';
import { sauceScienceArticles } from './sauceScience';
import { sauceRecipeGuideArticles } from './sauceRecipeGuides';
import { phase2GapArticlesPart1 } from './phase2GapArticlesPart1';
import { phase2GapArticlesPart2 } from './phase2GapArticlesPart2';
import { phase2GapArticlesPart3 } from './phase2GapArticlesPart3';
import { phase2GapArticlesPart4 } from './phase2GapArticlesPart4';

const RAW_NEW_SCIENCE_ARTICLES: ScienceArticleSpec[] = [
  ...breadNewScienceArticlesPart1,
  ...breadNewScienceArticlesPart2,
  ...cookieGapScienceArticles,
  ...pieGapScienceArticles,
  ...cakeGapScienceArticles,
  ...coffeeGapScienceArticles,
  ...iceCreamGapScienceArticles,
  ...sauceScienceArticles,
  ...sauceRecipeGuideArticles,
  ...phase2GapArticlesPart1,
  ...phase2GapArticlesPart2,
  ...phase2GapArticlesPart3,
  ...phase2GapArticlesPart4,
];

export const ALL_NEW_SCIENCE_ARTICLES: ScienceArticleSpec[] = applyEnrichments(RAW_NEW_SCIENCE_ARTICLES).map(
  appendDynamicSectionIfShort
);

const SPEC_BY_PATH: Map<string, ScienceArticleSpec> = (() => {
  const m = new Map<string, ScienceArticleSpec>();
  for (const s of ALL_NEW_SCIENCE_ARTICLES) {
    m.set(articlePath(s), s);
  }
  return m;
})();

/** Lookup for page components that resolve content from the central new-science article specs. */
export function getScienceArticleByPath(path: string): ScienceArticleSpec | undefined {
  return SPEC_BY_PATH.get(path);
}

/** Route paths without leading slash — used by prerender and sitemap. */
export const NEW_SCIENCE_ARTICLE_PATHS: string[] = ALL_NEW_SCIENCE_ARTICLES.map((s) => articlePath(s));

export type { ScienceArticleSpec };
