import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const catalogPath = path.join(root, 'src/app/pages/articles/allArticlesCatalog.ts');
const outPath = catalogPath;
const foundationalPath = path.join(root, 'src/app/pages/articles/_foundationalArray.txt');

const leg = fs.readFileSync(catalogPath, 'utf8');
const marker = 'const FOUNDATIONAL_ARTICLE_ROWS: ArticleCardBase[] = [';
const start = leg.indexOf(marker);
if (start === -1) {
  console.error('Could not find FOUNDATIONAL_ARTICLE_ROWS in allArticlesCatalog.ts');
  process.exit(1);
}
const arrStart = start + marker.length;
const closeMarker = '\n];\n\nfunction withSensei';
const end = leg.indexOf(closeMarker, arrStart);
if (end === -1) {
  console.error('Could not find end of FOUNDATIONAL_ARTICLE_ROWS');
  process.exit(1);
}
const foundational = leg.slice(arrStart, end).trim();

const header = `import { ALL_NEW_SCIENCE_ARTICLES } from '../../data/newScienceArticles';
import type { ScienceArticleSpec } from '../../data/scienceArticleTypes';
import type { ArticleLibraryCard } from './articleCardTypes';

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

const NEW_ARTICLE_CARD_COLORS: Record<ScienceArticleSpec['categoryLabel'], [string, string, string]> = {
  'Bread Science': ['from-amber-500 to-yellow-600', 'from-yellow-600 to-orange-500', 'from-orange-500 to-amber-700'],
  'Cookie Science': ['from-amber-500 to-orange-600', 'from-orange-500 to-red-500', 'from-yellow-500 to-amber-600'],
  'Cake Science': ['from-pink-500 to-purple-600', 'from-purple-500 to-rose-600', 'from-rose-500 to-pink-600'],
  'Pie Science': ['from-orange-500 to-amber-600', 'from-amber-600 to-yellow-700', 'from-yellow-600 to-orange-600'],
  'Ice Cream Science': ['from-cyan-500 to-blue-600', 'from-blue-400 to-cyan-500', 'from-sky-500 to-blue-600'],
  'Coffee Science': ['from-stone-600 to-amber-800', 'from-amber-600 to-yellow-800', 'from-stone-700 to-amber-900'],
  'Sauce Science': ['from-rose-600 to-orange-600', 'from-amber-600 to-rose-600', 'from-orange-600 to-red-600'],
};

function cardsFromScienceSpecs(): ArticleCardBase[] {
  return ALL_NEW_SCIENCE_ARTICLES.map((spec, i) => {
    const palette = NEW_ARTICLE_CARD_COLORS[spec.categoryLabel];
    return {
      title: spec.title,
      description: spec.subtitle,
      category: spec.categoryLabel,
      readTime: spec.readTime,
      color: palette[i % palette.length],
      url: \`/\${spec.segment}/\${spec.slug}\`,
    };
  });
}

/** Original hub cards (cookies through baking-science). */
const FOUNDATIONAL_ARTICLE_ROWS: ArticleCardBase[] = [
${foundational}
];

function withSensei(row: ArticleCardBase): ArticleLibraryCard {
  return { ...row, senseiPei: senseiPeiForArticle(row.category, row.url) };
}

/**
 * Single roster of every /articles card: foundational SenseiFood articles plus every topic-gap and sauce article.
 * Long-form body text for gap/sauce URLs remains in \`src/app/data/newScienceArticles/\`; titles, blurbs, URLs, and Sensei pairing are defined or derived here for the library grid.
 */
export const ALL_ARTICLES_CATALOG: ArticleLibraryCard[] = [
  ...FOUNDATIONAL_ARTICLE_ROWS.map(withSensei),
  ...cardsFromScienceSpecs().map(withSensei),
];
`;

fs.writeFileSync(outPath, header, 'utf8');
fs.writeFileSync(foundationalPath, foundational, 'utf8');
console.log('Wrote', outPath);
