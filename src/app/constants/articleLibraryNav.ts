/** Valid `?tab=` values on `/articles` — keep in sync with Articles.tsx filters. */
export const ARTICLE_LIBRARY_TAB_IDS = [
  'fix-it',
  'cookies',
  'bread',
  'cakes',
  'pies',
  'ice-cream',
  'coffee',
  'sauces',
  'baking',
  'human-brain',
  'human-chemistry',
  'human-evolution',
  'nutrition',
  'nutrition-over-50',
  'nutrition-kids',
  'nutrition-family',
  'nutrition-weight',
  'nutrition-seniors',
  'all',
] as const;

export type ArticleLibraryTabId = (typeof ARTICLE_LIBRARY_TAB_IDS)[number];

export function isArticleLibraryTabId(v: string | undefined | null): v is ArticleLibraryTabId {
  return Boolean(v && (ARTICLE_LIBRARY_TAB_IDS as readonly string[]).includes(v));
}

export function articlesIndexHref(tab: ArticleLibraryTabId | undefined | null): string {
  if (!tab) return '/articles';
  return `/articles?tab=${encodeURIComponent(tab)}`;
}
