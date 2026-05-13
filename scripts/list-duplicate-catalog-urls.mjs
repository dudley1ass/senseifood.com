import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const c = fs.readFileSync(path.join(__dirname, '../src/app/pages/articles/allArticlesCatalog.ts'), 'utf8');
const u = [
  ...c.matchAll(/url:\s*'([^']+)'/g),
  ...c.matchAll(/url:\s*"([^"]+)"/g),
].map((m) => m[1]);
const d = {};
u.forEach((x) => {
  d[x] = (d[x] || 0) + 1;
});
const dup = Object.entries(d).filter(([, n]) => n > 1);
console.log('total url entries', u.length, 'unique', Object.keys(d).length);
console.log('duplicates', dup.length);
dup.forEach(([k, n]) => console.log(n, k));
