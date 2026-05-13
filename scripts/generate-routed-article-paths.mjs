/**
 * Writes `src/app/pages/articles/routedScienceArticlePaths.ts` from
 * `articleContentRoutes.tsx` + `inlineGapArticleRoutes.tsx`.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function pathsFromFile(filePath, re) {
  const src = fs.readFileSync(filePath, 'utf8');
  return [...src.matchAll(re)].map((m) => '/' + m[1]);
}

const routesSrc = path.join(root, 'src/app/articleContentRoutes.tsx');
const inlineSrc = path.join(root, 'src/app/inlineGapArticleRoutes.tsx');
const re = /path:\s*'([^']+)'/g;

const all = [...new Set([...pathsFromFile(routesSrc, re), ...pathsFromFile(inlineSrc, re)])].sort();

const outPath = path.join(root, 'src/app/pages/articles/routedScienceArticlePaths.ts');
const body =
  '/**\n' +
  ' * Auto-generated — do not edit by hand.\n' +
  ' * Regenerate after changing src/app/articleContentRoutes.tsx or src/app/inlineGapArticleRoutes.tsx:\n' +
  ' *   node scripts/generate-routed-article-paths.mjs\n' +
  ' *\n' +
  ' * Every path here should appear exactly once in allArticlesCatalog.ts (as a card url).\n' +
  ' * Grep this file when checking for duplicate article URLs.\n' +
  ' */\n' +
  'export const ROUTED_SPEC_ARTICLE_PATHS = [\n' +
  all.map((p) => `  '${p}',`).join('\n') +
  '\n] as const;\n\n' +
  'export const ROUTED_SPEC_ARTICLE_PATH_SET = new Set<string>(ROUTED_SPEC_ARTICLE_PATHS);\n';

fs.writeFileSync(outPath, body, 'utf8');
console.log('Wrote', outPath, 'paths:', all.length);
