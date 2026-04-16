import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const catalogPath = path.join(root, 'src/app/pages/articles/allArticlesCatalog.ts');
const scienceFragmentPath = path.join(root, 'src/app/pages/articles/_scienceRowsFragment.txt');

const current = fs.readFileSync(catalogPath, 'utf8');
const marker = 'const FOUNDATIONAL_ARTICLE_ROWS: ArticleCardBase[] = [';
const start = current.indexOf(marker);
if (start === -1) {
  console.error('Could not find FOUNDATIONAL_ARTICLE_ROWS in allArticlesCatalog.ts');
  process.exit(1);
}
const arrStart = start + marker.length;
/** After foundational `];` comes this comment, then the science block (not `];` + const on adjacent lines). */
const closeMarkerFoundational = '\n];\n\n/** Topic-gap and sauce library cards';
let end = current.indexOf(closeMarkerFoundational, arrStart);
if (end === -1) {
  const closeLegacy = '\n];\n\nfunction withSensei';
  end = current.indexOf(closeLegacy, arrStart);
}
if (end === -1) {
  console.error('Could not find end of FOUNDATIONAL_ARTICLE_ROWS');
  process.exit(1);
}
const foundational = current.slice(arrStart, end).trim();

let scienceRows = '';
if (fs.existsSync(scienceFragmentPath)) {
  scienceRows = fs.readFileSync(scienceFragmentPath, 'utf8').trim();
} else {
  const sciMarker = 'const SCIENCE_GAP_AND_SAUCE_ARTICLE_ROWS: ArticleCardBase[] = [';
  const sStart = current.indexOf(sciMarker);
  if (sStart === -1) {
    console.error('Missing', scienceFragmentPath, '— run: npx tsx scripts/dump-inline-science-cards.ts');
    process.exit(1);
  }
  const sArrStart = sStart + sciMarker.length;
  const sEnd = current.indexOf('\n];\n\nfunction withSensei', sArrStart);
  if (sEnd === -1) {
    console.error('Could not find SCIENCE_GAP_AND_SAUCE_ARTICLE_ROWS block');
    process.exit(1);
  }
  scienceRows = current.slice(sArrStart, sEnd).trim();
}

const out = `import { ARTICLE_LIBRARY_TAB_IDS, type ArticleLibraryTabId } from '../../constants/articleLibraryNav';

/** One card on the /articles grid — full roster is \`ALL_ARTICLES_CATALOG\` in this file only. */
export type ArticleLibraryCard = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  color: string;
  url: string;
  senseiPei: string;
};

/** Which Sensei or in-app hub this library article pairs with. */
export function senseiPeiForArticle(category: string, url: string): string {
  if (category === 'Sauce Science' || url.startsWith('/sauce-science/')) return 'Sauce Sensei';
  if (category === 'Cookie Science') return 'CookieSensei';
  if (category === 'Bread Science') return 'Bread Sensei';
  if (
    category === 'Baking Science' ||
    category === 'Cake Science' ||
    category === 'Pie Science' ||
    category === 'Ice Cream Science' ||
    category === 'Coffee Science'
  ) {
    return 'Fix My Recipe';
  }
  return 'SenseiFood';
}

type ArticleCardBase = Omit<ArticleLibraryCard, 'senseiPei'>;

/** Original hub cards (cookies through baking-science). */
const FOUNDATIONAL_ARTICLE_ROWS: ArticleCardBase[] = [
${foundational}
];

/** Topic-gap and sauce library cards (same titles/URLs as long-form specs under \`src/app/data/newScienceArticles/\`). */
const SCIENCE_GAP_AND_SAUCE_ARTICLE_ROWS: ArticleCardBase[] = [
${scienceRows}
];

function withSensei(row: ArticleCardBase): ArticleLibraryCard {
  return { ...row, senseiPei: senseiPeiForArticle(row.category, row.url) };
}

/** Every /articles card in one array. */
export const ALL_ARTICLES_CATALOG: ArticleLibraryCard[] = [
  ...FOUNDATIONAL_ARTICLE_ROWS.map(withSensei),
  ...SCIENCE_GAP_AND_SAUCE_ARTICLE_ROWS.map(withSensei),
];

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
`;

fs.writeFileSync(catalogPath, out, 'utf8');
console.log('Wrote', catalogPath);
