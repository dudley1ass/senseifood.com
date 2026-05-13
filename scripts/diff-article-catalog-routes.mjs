import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const routesSrc = fs.readFileSync(path.join(root, 'src/app/articleContentRoutes.tsx'), 'utf8');
const catalogSrc = fs.readFileSync(path.join(root, 'src/app/pages/articles/allArticlesCatalog.ts'), 'utf8');

const inlineSrc = fs.readFileSync(path.join(root, 'src/app/inlineGapArticleRoutes.tsx'), 'utf8');

const paths = [...routesSrc.matchAll(/path:\s*'([^']+)'/g)].map((m) => '/' + m[1]);
const inlinePaths = [...inlineSrc.matchAll(/path:\s*'([^']+)'/g)].map((m) => '/' + m[1]);
const allRoutes = [...new Set([...paths, ...inlinePaths])];
const urls = [
  ...[...catalogSrc.matchAll(/url:\s*'([^']+)'/g)].map((m) => m[1]),
  ...[...catalogSrc.matchAll(/url:\s*"([^"]+)"/g)].map((m) => m[1]),
];

const urlSet = new Set(urls);
const pathSet = new Set(allRoutes);

const missingInCatalog = allRoutes.filter((p) => !urlSet.has(p));
const extraInCatalog = urls.filter((u) => !pathSet.has(u));

console.log('articleContentRoutes:', paths.length);
console.log('inlineGapArticleRoutes:', inlinePaths.length);
console.log('unique routed article paths:', allRoutes.length);
console.log('allArticlesCatalog urls:', urls.length);
console.log('\nRoutes missing from catalog (' + missingInCatalog.length + '):');
missingInCatalog.forEach((x) => console.log(' ', x));
console.log('\nCatalog URLs with no matching route (' + extraInCatalog.length + '):');
extraInCatalog.forEach((x) => console.log(' ', x));
