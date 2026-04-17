/**
 * Rough word count of article body text in page TSX files (double-quoted strings in SPEC blocks).
 * Run: node scripts/count-article-words.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, '..', 'src', 'app', 'pages');

const skip = new Set([
  'Articles.tsx',
  'Home.tsx',
  'FixRecipe.tsx',
  'BreadSensei.tsx',
  'SauceSensei.tsx',
  'NotFound.tsx',
]);

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'articles') continue;
      out.push(...walk(p));
    } else if (ent.name.endsWith('.tsx')) out.push(p);
  }
  return out;
}

function wordCount(s) {
  return s
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

/** Extract content from double-quoted strings (handles \" escapes, not full TS). */
function extractQuotedStrings(src) {
  let t = '';
  let i = 0;
  while (i < src.length) {
    const q = src.indexOf('"', i);
    if (q === -1) break;
    let j = q + 1;
    let chunk = '';
    while (j < src.length) {
      const c = src[j];
      if (c === '\\') {
        chunk += src[j + 1] === 'n' ? ' ' : src[j + 1] || '';
        j += 2;
        continue;
      }
      if (c === '"') break;
      chunk += c;
      j++;
    }
    t += ' ' + chunk;
    i = j + 1;
  }
  return t;
}

const files = walk(pagesDir).filter((f) => !skip.has(path.basename(f)));
const rows = [];

for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  if (!/const\s+SPEC\s*:|ScienceArticleSpec/.test(src)) continue;
  const text = extractQuotedStrings(src);
  const wc = wordCount(text);
  rows.push({ f: path.relative(path.join(__dirname, '..'), f).replace(/\\/g, '/'), wc });
}

rows.sort((a, b) => a.wc - b.wc);
const under = rows.filter((r) => r.wc < 600);
console.log('SPEC article pages:', rows.length);
console.log('Under 600 words (quoted-string estimate):', under.length);
console.log('\nLowest 50:');
under.slice(0, 50).forEach((r) => console.log(r.wc, r.f));
if (under.length > 50) console.log('...');
fs.writeFileSync(
  path.join(__dirname, 'article-word-counts.json'),
  JSON.stringify({ generated: new Date().toISOString(), rows, under600: under }, null, 2),
  'utf8'
);
console.log('\nWrote scripts/article-word-counts.json');
