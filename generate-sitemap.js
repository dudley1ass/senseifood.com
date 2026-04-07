/**
 * SenseiFood — sitemap.xml generator
 * Derives article URLs from src/app/routes.tsx so it stays in sync with the router.
 * Run: npm run generate-sitemap
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://senseifood.com';
const ROUTES_FILE = path.join(__dirname, 'src', 'app', 'routes.tsx');
const OUTPUT_FILE = path.join(__dirname, 'public', 'sitemap.xml');

const currentDate = new Date().toISOString().split('T')[0];

/** Slightly higher priority for historically strong URLs (edit as you learn from GSC). */
const HIGH_PRIORITY_LOCS = new Set([
  '/cake-science/why-cakes-sink',
  '/coffee-science/why-coffee-tastes-sour',
  '/cookie-science/why-cookies-spread',
]);

function extractArticlePathsFromRoutes() {
  const content = fs.readFileSync(ROUTES_FILE, 'utf8');
  const re = /\{\s*path:\s*"([^"]+)",\s*Component:/g;
  const out = [];
  let m;
  while ((m = re.exec(content)) !== null) {
    const p = m[1];
    if (p === '/' || !p.includes('/')) continue;
    out.push(p);
  }
  return [...new Set(out)].sort();
}

function writeSitemap() {
  const articlePaths = extractArticlePathsFromRoutes();

  const urls = [
    { loc: '/', priority: '1.0', changefreq: 'daily', lastmod: currentDate },
    { loc: '/articles', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
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

  const publicDir = path.join(__dirname, 'public');
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
