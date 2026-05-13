import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const routed = fs.readFileSync(path.join(root, 'src/app/pages/articles/routedScienceArticlePaths.ts'), 'utf8');
const paths = [...routed.matchAll(/'(\/[^']+)'/g)].map((m) => m[1]);
const catalog = fs.readFileSync(path.join(root, 'src/app/pages/articles/allArticlesCatalog.ts'), 'utf8');
const urls = new Set([
  ...catalog.matchAll(/url:\s*'([^']+)'/g),
  ...catalog.matchAll(/url:\s*"([^"]+)"/g),
].map((m) => m[1]));

const missing = paths.filter((p) => !urls.has(p));
if (missing.length) {
  console.error('Catalog missing', missing.length, 'routed paths:');
  missing.forEach((x) => console.error(' ', x));
  process.exit(1);
}
console.log('OK: all', paths.length, 'routed paths appear in allArticlesCatalog.ts');
