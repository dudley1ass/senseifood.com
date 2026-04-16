import { ARTICLE_LIBRARY_TAB_IDS, type ArticleLibraryTabId } from '../../constants/articleLibraryNav';
import type { ArticleLibraryCard } from './articleCardTypes';
import { ALL_ARTICLES_CATALOG } from './allArticlesCatalog';

export const FIX_IT_URLS = new Set<string>([
  '/baking-science/how-to-use-fix-my-recipe',
  '/baking-science/fix-recipes-one-variable-at-a-time',
  '/baking-science/why-recipes-fail',
  '/cookie-science/how-to-debug-cookie-batch-issues',
  '/cake-science/how-to-debug-cake-problems',
  '/coffee-science/how-to-debug-your-coffee',
]);

export const TAB_IDS = ARTICLE_LIBRARY_TAB_IDS;
export type TabId = ArticleLibraryTabId;

export function parseTabParam(value: string | null): TabId {
  if (value && (TAB_IDS as readonly string[]).includes(value)) return value as TabId;
  return 'fix-it';
}

export const ARTICLE_TABS: { id: TabId; label: string; category: 'FIX_IT' | 'ALL' | string }[] = [
  { id: 'fix-it', label: 'Fix it', category: 'FIX_IT' },
  { id: 'cookies', label: 'Cookies', category: 'Cookie Science' },
  { id: 'cakes', label: 'Cakes', category: 'Cake Science' },
  { id: 'bread', label: 'Bread', category: 'Bread Science' },
  { id: 'pies', label: 'Pies', category: 'Pie Science' },
  { id: 'ice-cream', label: 'Ice cream', category: 'Ice Cream Science' },
  { id: 'coffee', label: 'Coffee', category: 'Coffee Science' },
  { id: 'sauces', label: 'Sauces', category: 'Sauce Science' },
  { id: 'baking', label: 'Baking science', category: 'Baking Science' },
  { id: 'all', label: 'All', category: 'ALL' },
];

export function getAllArticleCards(): ArticleLibraryCard[] {
  return ALL_ARTICLES_CATALOG;
}
