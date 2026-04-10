/**
 * SenseiFood — sitemap.xml generator (TS so we can import the new-article path registry).
 * Run: npm run generate-sitemap
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { NEW_SCIENCE_ARTICLE_PATHS } from '../src/app/data/newScienceArticles/index.ts';
import { extractArticlePathsFromRoutesFile } from './prerender-paths';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://senseifood.com';
const ROUTES_FILE = path.join(__dirname, '..', 'src', 'app', 'appRouteChildren.tsx');
const OUTPUT_FILE = path.join(__dirname, '..', 'public', 'sitemap.xml');

const currentDate = new Date().toISOString().split('T')[0];

const HIGH_PRIORITY_LOCS = new Set([
  '/cake-science/why-cakes-sink',
  '/coffee-science/why-coffee-tastes-sour',
  '/cookie-science/why-cookies-spread',
]);

function extractArticlePathsFromRoutes(): string[] {
  const fromFile = extractArticlePathsFromRoutesFile(ROUTES_FILE);
  return [...new Set([...fromFile, ...NEW_SCIENCE_ARTICLE_PATHS])].sort();
}

function writeSitemap() {
  const articlePaths = extractArticlePathsFromRoutes();

  const urls = [
    { loc: '/', priority: '1.0', changefreq: 'daily', lastmod: currentDate },
    { loc: '/articles', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
    { loc: '/fix-recipe', priority: '0.85', changefreq: 'weekly', lastmod: currentDate },
    ...articlePaths.map((p) => {
      const loc = `/${p}`;
      return {
        loc,
        priority: HIGH_PRIORITY_LOCS.has(loc) ? '0.9' : '0.8',
        changefreq: 'monthly',
        lastmod: currentDate,
      };
    }),
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  urls.forEach((url) => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${url.loc}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, xml, 'utf8');

  console.log('Sitemap generated.');
  console.log(`  File: ${OUTPUT_FILE}`);
  console.log(`  URLs: ${urls.length} (home + articles index + ${articlePaths.length} article routes)`);
  console.log(`  Submit: ${BASE_URL}/sitemap.xml`);
}

writeSitemap();
