/**
 * Removes the three templated sections (Debugging field notes, Photographic evidence,
 * Results vocabulary) from ScienceArticleSpec TSX files and inserts a short narrative closer.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const BOILER = /\r?\n    \{\r?\n      "heading": "Debugging field notes",[\s\S]*?\r?\n    \},\r?\n    \{\r?\n      "heading": "Photographic evidence checklist",[\s\S]*?\r?\n    \},\r?\n    \{\r?\n      "heading": "Results vocabulary that travels",[\s\S]*?\r?\n    \}/;

/** slug -> { heading, paragraphs } */
const CLOSERS = {
  'why-fiber-matters-for-blood-sugar': {
    heading: 'What to notice in real meals',
    paragraphs: [
      'Picture the same calories arriving as juice versus whole fruit: the juice story is over in seconds, while fruit asks for chewing, mixing, and a slower release of sugar for many people. You are not building a lab notebook—just notice whether eating protein or vegetables first, adding a walk after lunch, or spreading fiber across the day changes how steady your energy feels.',
      'If you raise fiber, do it gradually with enough fluids, and treat discomfort or big swings as information rather than failure. A few plain sentences about what you ate and how the afternoon went beats serial numbers from kitchen appliances.',
    ],
  },
  'why-protein-keeps-you-full-longer': {
    heading: 'What to notice in real meals',
    paragraphs: [
      'Hunger has a storyline: a skimpy breakfast often reads as “discipline” until mid-afternoon, when the same person grazes through whatever is crunchy and nearby. Protein stretches that plot—meals linger in the stomach, blood sugar rises more gently with mixed plates, and the rebound urge to chase quick calories often softens.',
      'You do not need a spreadsheet to learn this. For a week, jot one line after lunch: roughly how much protein was on the plate and whether you were hunting snacks two hours later. Powder versus chicken matters less for the big picture than whether protein shows up consistently across the day.',
    ],
  },
  'why-oven-calibration-matters': {
    heading: 'How to read your oven like a character in the story',
    paragraphs: [
      'Recipes assume a cavity that behaves; your dial is only the opening line. When cookies brown on one edge while the center looks underdone, or cakes take fifteen mysterious minutes longer every time, the narrator is usually heat—not your talent.',
      'Treat a thermometer and a single sheet-pan test bake as the closing scene: you learn where the hot breath lives, then adjust time or rack with measured temperature in mind. Notes can be human (“back left runs fierce”) instead of equipment inventories.',
    ],
  },
  'why-measuring-by-weight-matters': {
    heading: 'Why the scale is a storyteller, not a gadget catalog',
    paragraphs: [
      'Volume cups turn baking into a game of telephone: a packed cup of flour is a different character than a sifted one, and the crumb knows the difference. Grams keep the cast consistent so when something goes wrong, you are arguing about process and temperature, not about whether the flour was shy.',
      'When you compare two batches, the plot is “same weights, one change”—not a list of model numbers. A short note on humidity or how long you creamed butter is enough for future you to recognize the twist.',
    ],
  },
  'why-bread-tastes-bland': {
    heading: 'Closing the loop on flavor',
    paragraphs: [
      'Bland bread is often a time problem dressed as a spice problem: the crumb looks fine because gas showed up to the party, while acids and esters from fermentation were stuck in traffic. Salt and a real crust are the scenes where quiet dough finally speaks.',
      'Change one timeline or salt step per bake and describe the loaf in plain language—nutty versus sweet-dough, crust snap versus chew. That story beats a photo checklist when you are chasing taste, not Instagram.',
    ],
  },
  'why-coffee-tastes-muddy': {
    heading: 'What muddy cups are trying to say',
    paragraphs: [
      'Muddiness is the taste of disagreement in the cup: some grounds gave up everything bitter while neighbors refused to give anything bright, so the story lands as a smear. Grind, water, and evenness of pour are the usual narrators—not the serial number on your grinder.',
      'Pick one lever per morning—slightly coarser, a cleaner filter, or a more even bloom—and describe the cup in a sentence. Negative runs matter; they stop you from buying another bag when the plot problem was extraction all along.',
    ],
  },
  'why-cookies-lose-freshness-overnight': {
    heading: 'Staling as a story you can see coming',
    paragraphs: [
      'Day-two cookies are the same formula with a different ending: moisture walks out the door, sugars find each other and crystallize, and the crumb tightens while aromas fade. The container and how long you waited before sealing are part of the plot, not footnotes.',
      'When you compare tins, bags, and freezer, write what changed in one sentence per batch—chew versus snap at breakfast, tacky edges or dry shoulders. That is enough for future you to trust the science instead of chasing random “mystery humectants.”',
    ],
  },
  'why-homemade-ice-cream-melts-unevenly': {
    heading: 'Reading melt like a narrative, not a spec sheet',
    paragraphs: [
      'Uneven melt is often the epilogue of air, sugar, and fat not agreeing: some zones were never as frozen, or overrun collapsed so water pooled beside butterfat rivers. The spoon feels the subplot before your eyes see it.',
      'Note base style, churn time, and how hard the freezer was working that week—plain language, not equipment IDs. Two batches with one intentional change tell the story faster than a folder of identical top-down photos.',
    ],
  },
  'why-ice-cream-tastes-better-after-resting-overnight': {
    heading: 'Why patience rewrites the flavor',
    paragraphs: [
      'Fresh-churned ice cream is excited: volatile aromatics are loud, ice crystals are still negotiating with sugar, and your tongue is cold enough to miss subtlety. A night in the freezer lets textures even out and lets sweetness read in tune with dairy instead of ahead of it.',
      'Taste the same pint at churn versus tomorrow with one sentence each time; you are recording phase, not building an evidence locker.',
    ],
  },
  'why-cakes-shrink-after-baking': {
    heading: 'Shrinkage as the last chapter, not a twist ending',
    paragraphs: [
      'A cake pulls away from the pan when the structure sets and steam stops pushing outward; too much shrink can mean over-baked sides, weak structure, or a formula that never had enough anchor for the rise it promised.',
      'Describe the sides—vertical, concave, dry rim—and whether the center sank after the door opened. That beats tagging photos for a slug you will never search.',
    ],
  },
  'why-frosting-melts-off-cakes': {
    heading: 'Heat and timing, told simply',
    paragraphs: [
      'Buttercream is a fat-and-sugar emulsion waiting for an excuse to slide; a warm crumb or a sunny windowsill is enough drama. The story is usually temperature balance, not a missing industrial stabilizer.',
      'Note crumb cool-down, room temp, and whether the sun hit the cake—then adjust one of those before you rebake the whole formula from suspicion.',
    ],
  },
  'why-overmixing-changes-texture': {
    heading: 'Mixing as pacing, not power tools',
    paragraphs: [
      'Overmixing is the scene where gluten or bubbles steal the spotlight from tenderness: the batter looked fine until the last aggressive minute. Creaming and finishing ask for different energy; the ending texture is the moral.',
      'Watch the window after flour appears and finish folding by hand when the recipe is fragile. One line about “ten seconds too long” saves more batches than logging mixer SKUs.',
    ],
  },
  'why-cream-sauces-curdle': {
    heading: 'Curdle as a cautionary tale',
    paragraphs: [
      'A smooth cream sauce wants gentle heat and respect for dairy proteins; boil is the villain, acid timing is the tricky supporting actor, and cold butter off heat is often the redemption beat.',
      'When it splits, write heat level, when acid joined, and whether the dairy was low-fat. Those three beats replay in almost every kitchen tragedy.',
    ],
  },
  'why-butter-sauces-separate': {
    heading: 'When fat walks out on you',
    paragraphs: [
      'Butter sauces break when emulsion confidence collapses—too hot, too little water phase, or shocked with cold ingredients. The fix is usually patience and a splash of water or cream, not a new pan model.',
      'Describe the sheen: greasy pools versus tight gloss. Future you remembers that language better than a photo rubric.',
    ],
  },
  'why-sauces-taste-better-the-next-day': {
    heading: 'The overnight rewrite',
    paragraphs: [
      'Flavors marry because large molecules keep dissolving, aromatics stop shouting and start harmonizing, and starches continue softening into the background. Refrigeration is a slow editor.',
      'Taste before and after a rest with one adjective each—sharp, round, flat, deep. You are documenting time’s work, not assembling a case file.',
    ],
  },
  'why-fruit-pies-leak-juice': {
    heading: 'Juice as plot, not accident',
    paragraphs: [
      'Fruit holds water like a secret; sugar and heat convince it to talk. Leakage usually means the filling never thickened enough, the lattice vented steam unevenly, or the slice was cut before the gel set its lines.',
      'Note fruit variety, sugar, thickeners, and cool time in plain sentences—those are the clues the next bake needs.',
    ],
  },
  'why-pie-crust-gets-tough-after-cooling': {
    heading: 'Tough crust after the curtain falls',
    paragraphs: [
      'Toughness is often gluten that kept working after the dough had already said its lines—warm handling, too much water, or aggressive rerolls. Rest helps the dough forget the stress.',
      'Describe flakes versus chew after a night in the fridge; that single contrast tells you whether to change hydration or handling next time.',
    ],
  },
  'why-pumpkin-pie-weeps': {
    heading: 'Weeping as a epilogue you can prevent',
    paragraphs: [
      'Pumpkin custard weeps when proteins squeeze water after baking or when sugar pulls syrup free as the pie cools; it feels like betrayal on an otherwise pretty surface.',
      'Log bake depth, cool speed, and whether you substituted milks—those choices change how tightly the proteins hug their water.',
    ],
  },
};

function formatCloserSection(closing) {
  const lines = closing.paragraphs.map((p) => `        ${JSON.stringify(p)}`).join(',\n');
  return `\n    {\n      "heading": ${JSON.stringify(closing.heading)},\n      "paragraphs": [\n${lines}\n      ]\n    }`;
}

function main() {
  const pagesDir = path.join(root, 'src', 'app', 'pages');
  const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith('.tsx'));
  let changed = 0;
  for (const file of files) {
    const full = path.join(pagesDir, file);
    let s = fs.readFileSync(full, 'utf8');
    if (!s.includes('"heading": "Debugging field notes"')) continue;

    const slugMatch = s.match(/"slug":\s*"([^"]+)"/);
    if (!slugMatch) {
      console.warn('skip (no slug):', file);
      continue;
    }
    const slug = slugMatch[1];
    const closing = CLOSERS[slug];
    if (!closing) {
      console.warn('missing closer for slug:', slug, file);
      continue;
    }
    if (!BOILER.test(s)) {
      console.warn('boilerplate pattern mismatch:', file);
      continue;
    }
    s = s.replace(BOILER, formatCloserSection(closing));
    fs.writeFileSync(full, s, 'utf8');
    changed++;
    console.log('updated', file);
  }
  console.log('done, files updated:', changed);
}

main();
