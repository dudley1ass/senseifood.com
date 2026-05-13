/**
 * Collapse staccato "paragraphs" arrays (2–3 very short strings) into one flowing paragraph
 * in ScienceArticleSpec TSX files — improves narrative feel without touching FAQs or imports.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const pagesDir = path.join(root, 'src', 'app', 'pages');

const MAX_EACH = 320;
const MAX_JOINED = 1400;

const THREE_RE =
  /"paragraphs": \[\r?\n        "[^"]*",\r?\n        "[^"]*",\r?\n        "[^"]*"\r?\n      \]/g;
const TWO_RE = /"paragraphs": \[\r?\n        "[^"]*",\r?\n        "[^"]*"\r?\n      \]/g;

function extractStrings(block) {
  const m = [...block.matchAll(/\n        "([^"]*)"/g)];
  return m.map((x) => x[1]);
}

function shouldMerge(parts) {
  if (parts.length < 2) return false;
  if (parts.some((p) => p.length > MAX_EACH)) return false;
  const joined = parts.join(' ');
  if (joined.length > MAX_JOINED) return false;
  return true;
}

function mergeBlock(parts) {
  const joined = parts.join(' ');
  return `"paragraphs": [\n        ${JSON.stringify(joined)}\n      ]`;
}

function processContent(s) {
  let out = s;
  let pass = true;
  while (pass) {
    pass = false;
    out = out.replace(THREE_RE, (block) => {
      const parts = extractStrings(block);
      if (parts.length !== 3 || !shouldMerge(parts)) return block;
      pass = true;
      return mergeBlock(parts);
    });
  }
  pass = true;
  while (pass) {
    pass = false;
    out = out.replace(TWO_RE, (block) => {
      const parts = extractStrings(block);
      if (parts.length !== 2 || !shouldMerge(parts)) return block;
      pass = true;
      return mergeBlock(parts);
    });
  }
  return out;
}

function main() {
  let files = 0;
  let changedFiles = 0;
  for (const name of fs.readdirSync(pagesDir)) {
    if (!name.endsWith('.tsx')) continue;
    const full = path.join(pagesDir, name);
    let s = fs.readFileSync(full, 'utf8');
    if (!s.includes('const SPEC: ScienceArticleSpec')) continue;
    files++;
    const next = processContent(s);
    if (next !== s) {
      fs.writeFileSync(full, next, 'utf8');
      changedFiles++;
      console.log('merged', name);
    }
  }
  console.log('SPEC files scanned:', files, 'files changed:', changedFiles);
}

main();
