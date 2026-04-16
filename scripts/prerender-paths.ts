/**
 * Single source for “which URLs get static HTML” — keep in sync with scripts/generate-sitemap.ts.
 */
import fs from 'fs';
import path from 'path';

import { ARTICLE_CONTENT_PATHS } from '../src/app/articleContentRoutes.tsx';
import { INLINE_GAP_ARTICLE_PATHS } from '../src/app/inlineGapArticleRoutes.tsx';

export function extractArticlePathsFromRoutesFile(routesFile: string): string[] {
  const content = fs.readFileSync(routesFile, 'utf8');
  const re = /\{\s*path:\s*["']([^"']+)["'],\s*Component:/g;
  const out: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(content)) !== null) {
    const p = m[1];
    if (p === '/' || !p.includes('/')) continue;
    out.push(p);
  }
  return [...new Set(out)].sort();
}

/** Relative article paths (no leading slash), deduped — same set the sitemap uses for article URLs. */
export function getAllArticleRelativePaths(projectRoot: string): string[] {
  const routesFile = path.join(projectRoot, 'src', 'app', 'appRouteChildren.tsx');
  const fromRoutesFile = extractArticlePathsFromRoutesFile(routesFile);
  return [...new Set([...fromRoutesFile, ...ARTICLE_CONTENT_PATHS, ...INLINE_GAP_ARTICLE_PATHS])].sort();
}

export function getAllPrerenderPaths(projectRoot: string): string[] {
  const articles = getAllArticleRelativePaths(projectRoot);
  return ['/', '/articles', '/fix-recipe', '/bread-sensei', '/sauce-sensei', ...articles.map((p) => `/${p}`)];
}
