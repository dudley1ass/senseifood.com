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
];

export const ALL_NEW_SCIENCE_ARTICLES: ScienceArticleSpec[] = applyEnrichments(RAW_NEW_SCIENCE_ARTICLES).map(
  appendDynamicSectionIfShort
);

/** Route paths without leading slash — used by prerender and sitemap. */
export const NEW_SCIENCE_ARTICLE_PATHS: string[] = ALL_NEW_SCIENCE_ARTICLES.map((s) => articlePath(s));

export type { ScienceArticleSpec };
