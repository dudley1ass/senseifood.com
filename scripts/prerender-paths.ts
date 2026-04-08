/**
 * Single source for “which URLs get static HTML” — keep in sync with generate-sitemap.js regex.
 */
import fs from 'fs';
import path from 'path';

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
  const articles = extractArticlePathsFromRoutesFile(routesFile);
  return ['/', '/articles', ...articles.map((p) => `/${p}`)];
}
