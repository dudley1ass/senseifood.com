/**
 * Append narrative text to intros of SPEC articles under ~600 words (quoted-string estimate).
 * Run after: node scripts/count-article-words.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const pagesDir = path.join(root, 'src', 'app', 'pages');

function wordCount(s) {
  return s
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

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

/** slug -> paragraph to append (starts with space) */
const APPEND = {
  'why-sauces-taste-better-the-next-day':
    ' If you blind-taste yesterday’s marinara beside a pot that just came off the burner, you are not chasing perfection—you are listening to time smooth edges that heat exaggerated. Garlic loses its raw shout, herbs sink into the middle of the flavor instead of camping on the roof of your mouth, and salt keeps migrating into places it could not reach while the sauce was still throwing steam at your face. That slow rewrite is why cooks with good habits lean on rested sauces whenever food-safety rules allow: depth trades away a little sparkle, and many plates prefer the trade.',

  'why-cream-sauces-curdle':
    ' Most curdle stories start the same way: the pan was louder than the cook, acid arrived like a plot twist during a boil, or skim dairy was asked to behave like heavy cream. When you narrate the failure in plain heat-and-timing language, the fix path stops feeling random. Gentle sub-simmer, tempered acid, and starch that had time to hydrate are the boring heroes that keep dinner creamy instead of grainy.',

  'why-butter-sauces-separate':
    ' A broken butter sauce is less “you failed chemistry” and more “heat moved faster than the emulsion could rearrange.” Water phase, butterfat, and whisking rhythm need to stay in the same conversation; cold butter off heat can close the loop if you catch the split early. Think in scenes—sheen versus oil slicks, tight gloss versus greasy pools—and the next batch gets calmer without buying new equipment.',

  'why-oven-calibration-matters':
    ' Once you stop trusting the dial as gospel, recipes stop gaslighting you. The story becomes honest: your “350°F” might be a shy 330°F hiding behind a slow probe, or a brave 375°F near the door. A thermometer turns arguments about timing into adjustments anyone can repeat, which is the whole point of calibration—not perfection, just a shared vocabulary with the recipe writer.',

  'why-pumpkin-pie-weeps':
    ' Weeping custard is the epilogue nobody asked for: proteins squeeze water after baking, or sugar pulls syrup as the pie cools and contracts. It can look dramatic on the surface while the flavor underneath is fine. When you connect weep patterns to bake depth, cool-down speed, and dairy swaps, the next pumpkin season feels less like superstition and more like predictable pastry physics.',

  'why-overmixing-changes-texture':
    ' Mixing is pacing. Creaming wants air; cake flour wants a light hand once hydrated gluten is on the table. The stand mixer is not evil, but the last thirty seconds after adding dry ingredients can rewrite a tender crumb into a chewy one. Treat “just combined” as a scene ending, not a suggestion, and your bakes stop punishing enthusiasm.',

  'why-measuring-by-weight-matters':
    ' Grams turn baking from a game of telephone into a straight line: the flour that arrived in the bowl is the flour the formula assumed. That matters because small volume errors stack across eggs, cocoa, and leaveners until the crumb tells a story you did not mean to write. A scale is less about precision theater and more about removing a whole class of silent variables.',

  'why-homemade-ice-cream-melts-unevenly':
    ' Uneven melt is often the epilogue of air, sugar, and fat disagreeing: some zones never froze as hard, overrun collapsed, or the scoop hit a warm edge first. The spoon feels the subplot before your eyes name it. When you connect melt behavior to base style, churn time, and freezer load, homemade ice cream stops feeling like a lottery and starts feeling like a process you can steer.',

  'why-ice-cream-tastes-better-after-resting-overnight':
    ' Fresh-churned ice cream is loud: cold suppresses nuance, volatiles are still sorting themselves, and sweetness can read ahead of dairy. A night in the freezer lets crystals and sugars settle into a calmer arrangement, so the same formula tastes more composed on day two. You are not imagining it—you are tasting slower chemistry and quieter texture.',

  'why-coffee-tastes-muddy':
    ' Muddy cups read like a choir where half the singers are sharp and half are flat: some grounds over-extract while neighbors under-extract, and the blend lands as smear instead of melody. Grind evenness, water quality, and pour discipline matter more than chasing the next gadget. Change one lever at a time and describe the cup in a sentence; boring logs beat expensive guesses.',

  'why-pie-crust-gets-tough-after-cooling':
    ' Toughness after cooling is usually gluten that kept working after the dough already said its lines—warm handling, thirsty rerolls, or restless rolling pin energy. Rest is not laziness; it is part of the recipe’s pacing. When you compare flake versus chew the next day, you learn whether the fix belongs to hydration, folding technique, or bake color—not to a mystery “bad day.”',

  'why-fruit-pies-leak-juice':
    ' Juicy pies are not moral failures; they are physics with fruit inside. Sugar pulls water, heat collapses cell walls, and thickeners need time and temperature to set a gel that can hold a slice. When you connect leakage to fruit variety, sugar level, venting, and cool-down patience, the story stops being “my pie betrayed me” and starts being “I can adjust one chapter next time.”',

  'why-fiber-matters-for-blood-sugar':
    ' Think of fiber as the guest at the table who insists everyone slow down: chewing lasts longer, the stomach’s contents stay thicker, and the intestine sees starch in smaller polite waves instead of one rude surge. That is why the same sugar grams can feel different wrapped in oats, beans, or whole fruit than they do in a quickly swallowed drink. Patterns beat panic; small sustainable shifts beat a single heroic week of restriction.',

  'why-protein-keeps-you-full-longer':
    ' Protein stretches the meal’s plot: gastric emptying eases, hormone signals lean toward satisfaction, and the rebound urge to chase ultra-palatable snacks often softens. None of this requires turning lunch into a spreadsheet—just noticing whether adding a fist-sized portion of protein changes how the afternoon feels compared with mostly refined starch alone. Distribution across meals usually beats one enormous dinner for steady appetite.',
};

function main() {
  for (const name of fs.readdirSync(pagesDir)) {
    if (!name.endsWith('.tsx')) continue;
    const full = path.join(pagesDir, name);
    let s = fs.readFileSync(full, 'utf8');
    if (!s.includes('const SPEC: ScienceArticleSpec')) continue;
    const slugMatch = s.match(/"slug":\s*"([^"]+)"/);
    if (!slugMatch) continue;
    const slug = slugMatch[1];
    const add = APPEND[slug];
    if (!add) continue;
    const m = s.match(/"intro":\s*"([\s\S]*?)"\s*,\s*\n\s*"sections"/);
    if (!m) {
      console.warn('intro pattern miss', name);
      continue;
    }
    const wc = wordCount(extractQuotedStrings(s));
    if (wc >= 600) continue;
    const nextIntro = m[1] + add;
    const serialized = JSON.stringify(nextIntro);
    s = s.replace(m[0], `"intro": ${serialized},\n  "sections"`);
    fs.writeFileSync(full, s, 'utf8');
    console.log('bumped intro', name);
  }
}

main();
