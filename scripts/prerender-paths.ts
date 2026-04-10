/**
 * Single source for “which URLs get static HTML” — keep in sync with scripts/generate-sitemap.ts.
 */
import fs from 'fs';
import path from 'path';

import { NEW_SCIENCE_ARTICLE_PATHS } from '../src/app/data/newScienceArticles/index.ts';

export function extractArticlePathsFromRoutesFile(routesFile: string): string[] {
  const content = fs.readFileSync(routesFile, 'utf8');
  const re = /\{\s*path:\s*"([^"]+)",\s*Component:/g;
  const out: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(content)) !== null) {
    const p = m[1];
    if (p === '/' || !p.includes('/')) continue;
    out.push(p);
  }
  return [...new Set(out)].sort();
}

export function getAllPrerenderPaths(projectRoot: string): string[] {
  const routesFile = path.join(projectRoot, 'src', 'app', 'appRouteChildren.tsx');
  const fromRoutesFile = extractArticlePathsFromRoutesFile(routesFile);
  const articles = [...new Set([...fromRoutesFile, ...NEW_SCIENCE_ARTICLE_PATHS])].sort();
  return ['/', '/articles', '/fix-recipe', '/bread-sensei', ...articles.map((p) => `/${p}`)];
}
