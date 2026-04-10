import { articlePath, type ScienceArticleSpec } from '../scienceArticleTypes';
import { breadNewScienceArticlesPart1 } from './breadPart1';
import { breadNewScienceArticlesPart2 } from './breadPart2';
import { cookieGapScienceArticles, pieGapScienceArticles } from './cookiesAndPies';
import { cakeGapScienceArticles } from './cakesGaps';
import { coffeeGapScienceArticles, iceCreamGapScienceArticles } from './coffeeAndIceCream';

export const ALL_NEW_SCIENCE_ARTICLES: ScienceArticleSpec[] = [
  ...breadNewScienceArticlesPart1,
  ...breadNewScienceArticlesPart2,
  ...cookieGapScienceArticles,
  ...pieGapScienceArticles,
  ...cakeGapScienceArticles,
  ...coffeeGapScienceArticles,
  ...iceCreamGapScienceArticles,
];

/** Route paths without leading slash — used by prerender and sitemap. */
export const NEW_SCIENCE_ARTICLE_PATHS: string[] = ALL_NEW_SCIENCE_ARTICLES.map((s) => articlePath(s));

export type { ScienceArticleSpec };
