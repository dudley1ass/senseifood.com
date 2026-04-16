/**
 * Writes TS object literals for all science-gap + sauce library cards into pages/articles/_scienceRowsFragment.txt.
 * Run: npx tsx scripts/dump-inline-science-cards.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ALL_NEW_SCIENCE_ARTICLES } from '../src/app/data/newScienceArticles/index.ts';
import type { ScienceArticleSpec } from '../src/app/data/scienceArticleTypes.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '../src/app/pages/articles/_scienceRowsFragment.txt');

const NEW_ARTICLE_CARD_COLORS: Record<ScienceArticleSpec['categoryLabel'], [string, string, string]> = {
  'Bread Science': ['from-amber-500 to-yellow-600', 'from-yellow-600 to-orange-500', 'from-orange-500 to-amber-700'],
  'Cookie Science': ['from-amber-500 to-orange-600', 'from-orange-500 to-red-500', 'from-yellow-500 to-amber-600'],
  'Cake Science': ['from-pink-500 to-purple-600', 'from-purple-500 to-rose-600', 'from-rose-500 to-pink-600'],
  'Pie Science': ['from-orange-500 to-amber-600', 'from-amber-600 to-yellow-700', 'from-yellow-600 to-orange-600'],
  'Ice Cream Science': ['from-cyan-500 to-blue-600', 'from-blue-400 to-cyan-500', 'from-sky-500 to-blue-600'],
  'Coffee Science': ['from-stone-600 to-amber-800', 'from-amber-600 to-yellow-800', 'from-stone-700 to-amber-900'],
  'Sauce Science': ['from-rose-600 to-orange-600', 'from-amber-600 to-rose-600', 'from-orange-600 to-red-600'],
};

const rows = ALL_NEW_SCIENCE_ARTICLES.map((spec, i) => {
  const palette = NEW_ARTICLE_CARD_COLORS[spec.categoryLabel];
  return {
    title: spec.title,
    description: spec.subtitle,
    category: spec.categoryLabel,
    readTime: spec.readTime,
    color: palette[i % palette.length],
    url: `/${spec.segment}/${spec.slug}`,
  };
});

const j = (s: string) => JSON.stringify(s);

const lines: string[] = [];
for (const r of rows) {
  lines.push(`    {
      title: ${j(r.title)},
      description: ${j(r.description)},
      category: ${j(r.category)},
      readTime: ${j(r.readTime)},
      color: ${j(r.color)},
      url: ${j(r.url)},
    },`);
}
fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
console.log('Wrote', outPath, lines.length, 'rows');
