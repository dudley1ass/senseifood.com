/**
 * Per-route title, description, canonical, and JSON-LD.
 *
 * Hand-tuned titles/descriptions for high-traffic paths live in SEO_OVERRIDES below; everything
 * else uses the centralized slug/category rules in computeRouteSeo.
 *
 * --- Post-deploy & SEO ops (this repo = hub only) ---
 *
 * Google Search Console (one property for https://senseifood.com is enough to start):
 * - After each deploy: URL Inspection → enter live URL → Test live URL → confirm HTML shows
 *   expected <title> and meta description (prerendered pages).
 * - Spot-check /, /articles, and a few article URLs; fix Coverage issues before chasing Lighthouse.
 *
 * Tool repos (CookieSensei, etc.): add SSG/prerender only if those SPAs must rank in search;
 * many teams prioritize the hub + articles first.
 *
 * beansensei.com (apex) vs beansensei.senseifood.com: if the apex domain exists and duplicates
 * the subdomain, configure a 301 at the DNS/registrar or host (e.g. Render redirect rules) to
 * your chosen canonical—not in this static bundle unless that domain is served from the same host
 * as senseifood.com (see public/_redirects for same-origin redirects only).
 */

export const SITE_URL = 'https://senseifood.com';
export const SITE_NAME = 'SenseiFood';

const SMALL_WORDS = new Set([
  'a',
  'an',
  'the',
  'and',
  'or',
  'but',
  'in',
  'on',
  'at',
  'to',
  'for',
  'of',
  'as',
  'by',
  'is',
  'it',
]);

/** Path segment → display category + keyword for descriptions */
const CATEGORY_SEGMENT: Record<string, { label: string; keyword: string }> = {
  'cookie-science': { label: 'Cookie Science', keyword: 'cookies' },
  'cake-science': { label: 'Cake Science', keyword: 'cakes' },
  'bread-science': { label: 'Bread Science', keyword: 'bread' },
  'pie-science': { label: 'Pie Science', keyword: 'pies' },
  'ice-cream-science': { label: 'Ice Cream Science', keyword: 'ice cream' },
  'coffee-science': { label: 'Coffee Science', keyword: 'coffee' },
  'baking-science': { label: 'Baking Science', keyword: 'baking' },
  'nutrition-science': { label: 'Nutrition', keyword: 'nutrition' },
  'sauce-science': { label: 'Sauce Science', keyword: 'sauces' },
};

export type RouteSeo = {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: Record<string, unknown>;
};

/** Optional title/description overrides for top URLs (paths must match normalizePath). */
type SeoOverride = Partial<Pick<RouteSeo, 'title' | 'description'>>;

const SEO_OVERRIDES: Record<string, SeoOverride> = {
  '/': {
    title: 'SenseiFood — Where Food Meets How-To',
    description:
      'Fix recipe failures, bake better bread, make smoother ice cream, and eat well—food science articles plus free Sensei builders and Fix My Recipe. No signup.',
  },
  '/articles': {
    title: 'Food science articles — baking, coffee & more | SenseiFood',
    description:
      'Readable deep dives on spread, extraction, rise, texture, and common failures. Read the science on SenseiFood, then use our free tools to apply it in your kitchen.',
  },
  /** CTR sprint: answer-first meta, exact-query phrasing, ≤60 char titles after ensureTitleBand */
  '/cookie-science/why-cookies-spread': {
    title: 'Why cookies spread too much: butter, sugar & fixes',
    description:
      'Cookie spreading explained: fat melts before structure sets. Fix spread with chilled dough, butter temperature, flour and sugar tweaks—science-backed steps.',
  },
  '/cookie-science/brown-sugar-vs-white-sugar': {
    title: 'Brown vs white sugar in cookies: chew & spread',
    description:
      'Brown sugar vs white sugar in cookies: moisture, spread, chew, Maillard browning, and flavor. Pick ratios for the texture you want—no guesswork.',
  },
  '/cookie-science/why-cookies-are-chewy': {
    title: 'What makes cookies chewy? Moisture, fat & sugar',
    description:
      'What makes cookies chewy: hydration, fat type, sugar, and bake time. Learn the levers for soft centers vs crisp edges and link fixes to spread and hardness.',
  },
  '/cookie-science/why-cookies-turn-hard': {
    title: 'Why cookies get hard after baking (& how to fix)',
    description:
      'Why cookies harden: moisture loss, sugar crystallization, over-bake, and storage. Keep cookies softer longer with recipe and cooling fixes from food science.',
  },
  '/cookie-science/why-cookies-spread-too-much': {
    title: 'Cookie spreading too much? Fixes that work',
    description:
      'Cookies spread too much when butter is too warm, flour is under-measured, or sugar drives flow. Chill dough, check ratios, pan temp—practical fix order.',
  },
  '/cookie-science/why-cookies-dont-spread': {
    title: "Cookies won't spread: butter temp, flour & fixes",
    description:
      'Cookies do not spread when fat is too cold, flour is high, or leavening is off. Learn why cookies stay domed and how to unlock even spread without thinning.',
  },
  '/cookie-science/why-cookies-puff-up-too-much': {
    title: 'Why cookies puff up: steam, leavening & oven fixes',
    description:
      'Cookies balloon when steam and gas expand before spread finishes—warm butter, extra leavening, or fast crust set. Chill dough, verify grams, and tune oven for even cookies.',
  },
  '/cake-science/why-cakes-collapse': {
    title: 'Why cakes collapse: structure, steam & timing',
    description:
      'Why cakes collapse: weak structure, early oven open, under-bake, or too much leavening. Diagnose sinking and collapsing with fixes for mixing, temp, and timing.',
  },
  '/cake-science/why-cakes-sink': {
    title: 'Why cakes sink in the middle: causes & fixes',
    description:
      'Why cakes sink in the middle: underdone centers, leavening imbalance, or cooling too fast. Match symptoms to causes and stabilize rise with science-based tweaks.',
  },
  '/cake-science/why-cakes-are-dense': {
    title: 'Dense cake: mixing, flour & leavening fixes',
    description:
      'Dense cake causes: over-mixing, cold butter, weak leavening, wrong flour. Connect density to rise and moisture—practical fixes for a lighter crumb.',
  },
  '/cake-science/why-cakes-rise': {
    title: 'Why cakes rise: air, steam & leavening science',
    description:
      'Why cakes rise: trapped air, steam expansion, and chemical leaveners. See how structure sets so gas does not escape—pairs with collapse and dense cake guides.',
  },
  '/cake-science/why-cakes-dry-out': {
    title: 'Why cakes dry out: bake time, sugar & moisture',
    description:
      'Why cakes dry out: over-bake, low fat, high oven, or storage. Fix crumb moisture with sugar, fat, and doneness cues—links to dense and dry-texture articles.',
  },
  '/coffee-science/why-coffee-tastes-bitter': {
    title: 'Bitter coffee: over-extraction & quick fixes',
    description:
      'Bitter coffee fix: grind coarser, shorter brew, lower temp, or less agitation. Separate true bitterness from dark roast and channeling—actionable dial-in steps.',
  },
  '/coffee-science/why-coffee-tastes-sour': {
    title: 'Sour coffee: under-extraction & how to fix it',
    description:
      'Sour coffee means under-extraction: hotter water, finer grind, longer time, or higher dose. Balance acidity with sweetness using a simple fix order for any brewer.',
  },
  '/coffee-science/coffee-extraction-science': {
    title: 'Coffee extraction: strength vs flavor explained',
    description:
      'Coffee extraction science: TDS vs yield, grind, time, and temperature. Learn under vs over-extracted coffee and how to fix sour, bitter, or hollow cups fast.',
  },
  '/bread-science/why-bread-rises': {
    title: 'Why bread rises: yeast, gluten & trapped gas',
    description:
      'Why bread rises: CO₂ from yeast, gluten trapping gas, and oven spring. Practical cues for proofing and structure—pairs with dense bread and hydration guides.',
  },
  '/bread-science/how-yeast-works': {
    title: 'How yeast works: rise, fermentation & flavor',
    description:
      'How yeast works in baking: fermentation, gas, dough strength, and flavor. Understand rise limits vs gluten so dense or gummy loaves make sense and fix faster.',
  },
  '/bread-science/why-bread-splits-on-the-side': {
    title: 'Bread splits on the side: scoring & oven spring',
    description:
      'Side blowouts mean gas found a weak seam—shallow scores, tight shaping, or dry crust. Fix bread splitting with steam, depth, and even surface tension.',
  },
  '/pie-science/why-pie-crust-is-flaky': {
    title: 'Flaky pie crust: fat, steam & layer science',
    description:
      'Flaky pie crust: solid fat layers, steam pockets, and gentle mixing. Fix tough or soggy crust with temperature and hydration—science for tender slices.',
  },
  '/ice-cream-science/why-ice-cream-gets-icy': {
    title: 'Icy ice cream: crystals, sugar & storage fixes',
    description:
      'Icy ice cream: large ice crystals from sugar balance, overrun, or thaw-refreeze. Fix texture with solids, churn, and cold storage—science for smoother scoops.',
  },
  '/ice-cream-science/why-ice-cream-gets-sandy': {
    title: 'Sandy ice cream: lactose crystals & dairy balance',
    description:
      'Sandy grit in ice cream is often lactose sand from concentrated milk solids and freezer cycling—not the same as icy chunks. Fix with sugar spectrum, MSNF, and hardening temp.',
  },
  '/cookie-science/why-cookies-lose-freshness-overnight': {
    title: 'Cookies stale overnight: moisture, sugar & starch',
    description:
      'Freshness loss is moisture migration, sucrose crystallization, and starch retrogradation. Fix storage, sugar spectrum, and freezing strategy—science for softer day-two cookies.',
  },
  '/bread-science/why-bread-tastes-bland': {
    title: 'Bread tastes bland: fermentation, salt & browning',
    description:
      'Bland bread comes from short ferments, low salt, and pale crusts. Extend time, weigh salt, and improve heat and steam for depth—pairs with yeast and hydration guides.',
  },
  '/bread-science/why-bread-has-huge-holes': {
    title: 'Bread huge holes: shaping, proof & hydration',
    description:
      'Irregular caverns come from uneven gas, shaping tension, or hydration past dough strength—same levers as large-hole troubleshooting for open crumb styles.',
  },
  '/cake-science/why-frosting-melts-off-cakes': {
    title: 'Frosting melts off cakes: crumb temp & emulsions',
    description:
      'Melting frosting is warm crumb, broken buttercream emulsions, and unstable sugar phases. Chill layers, temper acids, and finish fat off-heat—practical fix order.',
  },
  '/cake-science/why-cakes-taste-oily': {
    title: 'Cakes taste oily: emulsion & fat balance',
    description:
      'Oily crumb signals broken emulsions or fat overload versus structure. Fix with mixing order, temperature, and ratio checks—pairs with oil-out and dense cake guides.',
  },
  '/cake-science/why-cakes-shrink-after-baking': {
    title: 'Cakes shrink after baking: cooling & pan release',
    description:
      'Shrink ties to steam loss, protein contraction, and pan adhesion. Log internal temp, pan type, and cooling path—science for even sidewalls.',
  },
  '/pie-science/why-pie-crust-gets-tough-after-cooling': {
    title: 'Pie crust tough after cooling: moisture migration',
    description:
      'Tough cold crust is hydrated gluten and retrograded starch from filling transfer. Vent, set thickeners, and cool on a rack—science for tender slices next day.',
  },
  '/pie-science/why-fruit-pies-leak-juice': {
    title: 'Fruit pies leak juice: thickeners & boil control',
    description:
      'Leaking pies mean free juice beat your gel network. Macerate, drain, hit starch gel temps, and vent steam—practical troubleshooting for clean slices.',
  },
  '/pie-science/why-pumpkin-pie-weeps': {
    title: 'Pumpkin pie weeps: custard set & syneresis',
    description:
      'Weeping pumpkin pie is over-tight proteins and stressed gels squeezing serum. Gentle bake, sugar balance, and slow cooling reduce surface beads.',
  },
  '/ice-cream-science/why-homemade-ice-cream-melts-unevenly': {
    title: 'Ice cream melts unevenly: overrun & emulsions',
    description:
      'Uneven melt is microstructure heterogeneity—air, fat churn, and heat shock bands. Fix draw temp, emulsifiers, and hardening—science for clean meltdown.',
  },
  '/ice-cream-science/why-ice-cream-tastes-better-after-resting-overnight': {
    title: 'Ice cream better after resting: aging & crystals',
    description:
      'Overnight base rest hydrates proteins and stabilizers; hardened pints temper for smoother flavor release—why aging is not chef myth.',
  },
  '/coffee-science/why-coffee-tastes-muddy': {
    title: 'Coffee tastes muddy: fines, channels & filters',
    description:
      'Muddy cups combine ultrafines, uneven extraction, and weak filtration. Coarsen carefully, improve evenness, and clean grinders—clarity checklist.',
  },
  '/coffee-science/why-coffee-water-quality-matters': {
    title: 'Coffee water quality: hardness, alkalinity & taste',
    description:
      'Water minerals change extraction and mouthfeel more than many recipes admit—dial filtration and remineralization with practical targets.',
  },
  '/baking-science/why-measuring-by-weight-matters': {
    title: 'Measure baking by weight: flour, salt & scale wins',
    description:
      'Grams beat cups for flour packing, leavening precision, and scaling. Learn why weight is the fastest quality upgrade in home baking.',
  },
  '/baking-science/why-oven-calibration-matters': {
    title: 'Oven calibration: true temp, racks & convection',
    description:
      'Dial vs cavity temperature diverges; probes and logs fix browning and set timing. Calibrate for repeatable cookies, cakes, and bread.',
  },
  '/baking-science/why-overmixing-changes-texture': {
    title: 'Overmixing changes texture: gluten, air & heat',
    description:
      'Mixing stage controls gluten, bubble size, and batter temperature—different rules for cakes, cookies, and bread. Match technique to formula intent.',
  },
  '/sauce-science/why-cream-sauces-curdle': {
    title: 'Cream sauces curdle: heat, acid & dairy proteins',
    description:
      'Curdled cream sauces break when proteins aggregate faster than emulsions recover. Lower heat, temper acids, use starch support—science for silky finishes.',
  },
  '/sauce-science/why-sauces-taste-better-the-next-day': {
    title: 'Sauces taste better next day: diffusion & rest',
    description:
      'Overnight, salt equilibrates, aromatics integrate, and emulsions relax for rounder flavor—reheat gently to keep the win.',
  },
  '/sauce-science/why-butter-sauces-separate': {
    title: 'Butter sauces separate: emulsion & temperature',
    description:
      'Separated butter sauces need controlled mounting heat and stable water phases. Whisk, finish off-heat, and respect pH—practical recovery steps.',
  },
  '/nutrition-science/why-protein-keeps-you-full-longer': {
    title: 'Protein and fullness: hormones & meal timing',
    description:
      'Protein shifts satiety hormones and slows gastric emptying. Learn practical meal patterns without hype—pairs with fiber and plate method guides.',
  },
  '/nutrition-science/why-processed-foods-are-easy-to-overeat': {
    title: 'Processed foods easy to overeat: energy density',
    description:
      'Texture, salt-sugar-fat loops, and low fiber increase ad libitum intake. Understand engineering cues to design better defaults.',
  },
  '/nutrition-science/why-fiber-matters-for-blood-sugar': {
    title: 'Fiber and blood sugar: viscosity & fermentation',
    description:
      'Fiber slows glucose absorption and supports fermentation metabolites—whole-food patterns beyond supplement shortcuts.',
  },
  '/nutrition-science/best-foods-for-healthy-aging': {
    title: 'Best foods for healthy aging: density, protein & fiber',
    description:
      'Prioritize nutrient-dense plates, enough protein, fiber, and anti-inflammatory patterns—practical aging nutrition without obsession.',
  },
  '/nutrition-science/cooking-for-aging-parents-nutrition-that-matters': {
    title: 'Cooking for aging parents: protein, hydration & ease',
    description:
      'Focus on protein anchors, reliable hydration, appetite changes, and textures that are easy to chew and enjoy.',
  },
  '/nutrition-science/easy-high-protein-meals-for-older-adults': {
    title: 'Easy high-protein meals for older adults',
    description:
      'Simple skillet templates, grocery shortcuts, and soft-but-filling options for strength and steady energy.',
  },
  '/nutrition-science/how-to-build-balanced-family-meals': {
    title: 'Balanced family meals: practical plate building',
    description:
      'A flexible plate method for protein, vegetables, carbs, and fats that survives busy weeknights.',
  },
  '/nutrition-science/how-to-build-healthier-kids-meals-without-food-fights': {
    title: 'Healthier kids meals without food fights',
    description:
      'Structure, choices within limits, and environment tweaks beat pressure and negotiation at the table.',
  },
  '/nutrition-science/how-to-eat-better-without-giving-up-comfort-food': {
    title: 'Eat better without giving up comfort food',
    description:
      'Satisfaction and favorite foods belong in sustainable plans—consistency beats perfection when stress hits.',
  },
  '/nutrition-science/how-to-introduce-new-foods-to-kids': {
    title: 'Introduce new foods to kids: low-pressure exposure',
    description:
      'Repeated tiny tastes, pairing with liked foods, and calm routines build familiarity better than bribery.',
  },
  '/nutrition-science/nutrition-for-busy-families': {
    title: 'Nutrition for busy families: defaults that stick',
    description:
      'Batch proteins, frozen vegetables, and repeatable templates beat chasing idealized scratch cooking every night.',
  },
  '/nutrition-science/protein-for-growing-kids-what-actually-matters': {
    title: 'Protein for growing kids: needs vs myths',
    description:
      'What most kids actually need, common misunderstandings, and simple whole-food patterns that cover growth.',
  },
  '/nutrition-science/why-appetite-changes-after-50': {
    title: 'Why appetite changes after 50',
    description:
      'Hormones, medications, and sensory shifts can blunt hunger cues—eating patterns change even without “trying.”',
  },
  '/nutrition-science/why-breakfast-affects-school-performance': {
    title: 'Breakfast and school performance: steady fuel',
    description:
      'Morning meals influence blood sugar stability, attention, and mood—patterns matter as much as labels.',
  },
  '/nutrition-science/why-crash-diets-fail': {
    title: 'Why crash diets fail: hormones, muscle & rebound',
    description:
      'Extreme restriction fights hunger biology and muscle preservation—slower change often wins long term.',
  },
  '/nutrition-science/why-family-dinners-matter': {
    title: 'Why family dinners matter for habits & connection',
    description:
      'Shared meals shape pacing, variety, and norms—kids absorb eating culture from what they see repeated.',
  },
  '/nutrition-science/why-fiber-helps-with-weight-control': {
    title: 'Fiber and weight control: fullness & steady energy',
    description:
      'How fiber changes satiety, digestion speed, and post-meal energy—beyond counting calories alone.',
  },
  '/nutrition-science/why-healthy-eating-feels-hard': {
    title: 'Why healthy eating feels hard in modern food environments',
    description:
      'Convenience engineering, portion creep, and palatability science stack the deck—strategy beats blame.',
  },
  '/nutrition-science/why-high-protein-diets-feel-easier': {
    title: 'Why higher-protein patterns feel easier to sustain',
    description:
      'Protein shifts satiety signals and helps protect lean mass—practical reasons many people feel less ravenous.',
  },
  '/nutrition-science/why-hydration-gets-harder-with-age': {
    title: 'Why hydration gets harder with age',
    description:
      'Weaker thirst signaling and shifting fluid balance raise dehydration risk before obvious thirst.',
  },
  '/nutrition-science/why-kids-love-processed-foods': {
    title: 'Why kids love processed foods: reward & texture',
    description:
      'Salt, sugar, fat combinations and engineered textures strongly activate reward circuits—biology meets formulation.',
  },
  '/nutrition-science/why-kids-reject-vegetables': {
    title: 'Why kids reject vegetables: bitterness & novelty',
    description:
      'Sensitivity to bitter compounds, texture caution, and evolutionary food neophobia explain picky patterns.',
  },
  '/nutrition-science/why-late-night-snacking-happens': {
    title: 'Late-night snacking: stress, sleep & blood sugar',
    description:
      'Why evenings unravel into extra calories—habits meet physiology, with practical levers to test.',
  },
  '/nutrition-science/why-liquid-calories-dont-feel-filling': {
    title: "Liquid calories and satiety: why drinks don't fill you",
    description:
      'Drinks bypass chewing, gastric stretch timing, and many oral cues—calories without the usual fullness signals.',
  },
  '/nutrition-science/why-meal-prep-actually-works': {
    title: 'Why meal prep works: fewer decisions, better defaults',
    description:
      'Batching cuts decision fatigue so healthy choices become the path of least resistance at dinner time.',
  },
  '/nutrition-science/why-muscle-loss-happens-as-you-age': {
    title: 'Muscle loss with age: sarcopenia basics & levers',
    description:
      'How sarcopenia develops and how protein plus resistance training slow the slide in real life.',
  },
  '/nutrition-science/why-portion-sizes-have-changed-so-much': {
    title: 'Why portion sizes changed: packages, plates & norms',
    description:
      'How serving-size creep resets expectations and hunger cues—eyes stop being reliable calorie gauges.',
  },
  '/nutrition-science/why-protein-matters-more-after-50': {
    title: 'Protein after 50: timing, spread meals & muscle',
    description:
      'Anabolic resistance and recovery shifts make protein distribution and training partners to food quality.',
  },
  '/nutrition-science/why-recovery-takes-longer-after-50': {
    title: 'Why recovery takes longer after 50',
    description:
      'Protein synthesis, inflammation, and sleep architecture change—gentler plans beat “push through” alone.',
  },
  '/nutrition-science/why-some-kids-are-always-hungry': {
    title: 'Why some kids seem always hungry',
    description:
      'Growth spurts, sleep, protein balance, and ultra-processed snacks can all skew fullness and grazing.',
  },
  '/baking-science/why-butter-temperature-matters': {
    title: 'Butter temp in baking: cold vs soft vs melted',
    description:
      'Butter temperature changes spread, aeration, and structure in cookies and cakes. Cold vs room temp vs melted—match fat state to the bake you want.',
  },
  '/baking-science/why-eggs-matter-in-baking': {
    title: 'Eggs in baking: 5 jobs that control texture & rise',
    description:
      'Eggs in baking: structure, moisture, fat, emulsion, and leavening. Yolk vs white ratios change chew and dome—pairs with cake dense and cookie texture guides.',
  },
  '/baking-science/why-gluten-matters-and-what-youre-replacing': {
    title: "Why gluten matters in baking | SenseiFood",
    description:
      'Gluten is a structure system, not just an ingredient. Learn how gluten-free baking replaces elasticity, gas retention, and crumb stability.',
  },
  '/baking-science/gluten-free-flour-matrix-why-one-flour-never-works': {
    title: 'Gluten-free flour matrix: why blends win',
    description:
      'Why one gluten-free flour rarely works alone. Build better texture by balancing structure flours, starches, and binders.',
  },
  '/baking-science/hydrocolloids-secret-weapon-xanthan-guar-gum': {
    title: 'Xanthan vs guar gum in gluten-free baking',
    description:
      'How xanthan and guar gum improve gluten-free structure, with practical usage ranges to avoid gummy or slimy texture.',
  },
  '/baking-science/moisture-management-why-gluten-free-food-dries-out-faster': {
    title: 'Why gluten-free baking dries out faster',
    description:
      'Gluten-free foods stale quickly from moisture loss and starch retrogradation. Learn formula and storage fixes that keep texture softer longer.',
  },
  '/baking-science/leavening-without-gluten-why-rise-is-harder': {
    title: 'Leavening without gluten: rise and retention',
    description:
      'Gas production is only half of rise. Learn why gluten-free products collapse and how eggs, psyllium, and binders improve retention.',
  },
  '/nutrition-science/how-much-protein-do-you-actually-need': {
    title: 'How much protein do you need daily?',
    description:
      'Most people under-target protein for health, recovery, and aging. Learn practical gram targets and why protein distribution across meals matters.',
  },
  '/nutrition-science/power-of-vegetables-why-quantity-matters': {
    title: 'Why vegetables matter more than calories',
    description:
      'Vegetables are fiber and phytochemical systems that support gut health, inflammation control, and appetite regulation.',
  },
  '/nutrition-science/balanced-plates-without-counting-calories': {
    title: 'Balanced plate method: eat right simply',
    description:
      'Build better meals without macro tracking using the simple plate method: vegetables, protein, carbs, and healthy fats.',
  },
  '/nutrition-science/why-youre-still-hungry-science-of-satiety': {
    title: "Why you're still hungry after meals",
    description:
      'Hunger is biology, not willpower. Learn ghrelin, leptin, and how protein plus fiber improves fullness and reduces cravings.',
  },
  '/nutrition-science/protein-plus-fiber-for-health-and-weight-control': {
    title: 'Protein + fiber: best combo for satiety',
    description:
      'Protein and fiber together improve fullness, blood sugar stability, and adherence. Practical target ranges for better daily meals.',
  },
};

function applySeoOverrides(path: string, seo: RouteSeo): RouteSeo {
  const o = SEO_OVERRIDES[path];
  if (!o) return seo;

  const title = o.title != null ? ensureTitleBand(o.title) : seo.title;
  const description = o.description != null ? ensureDescriptionBand(o.description) : seo.description;
  const merged: RouteSeo = { ...seo, title, description };

  if (merged.jsonLd && typeof merged.jsonLd === 'object' && merged.jsonLd['@type'] === 'Article') {
    const headline = title.split(/\s*\|\s*/)[0].trim();
    merged.jsonLd = {
      ...merged.jsonLd,
      headline,
      description,
    };
  }
  if (merged.jsonLd && typeof merged.jsonLd === 'object' && merged.jsonLd['@type'] === 'WebSite') {
    merged.jsonLd = { ...merged.jsonLd, description };
  }

  return merged;
}

function clampText(text: string, max: number): string {
  const t = text.trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  const base = (lastSpace > max * 0.5 ? cut.slice(0, lastSpace) : cut).trimEnd();
  return `${base}…`;
}

function ensureTitleBand(title: string, min = 45, max = 60): string {
  let t = title.trim();
  if (t.length > max) t = clampText(t, max);
  if (t.length < min && !t.includes('|')) {
    t = `${t} | ${SITE_NAME}`;
    if (t.length > max) t = clampText(t, max);
  }
  return t;
}

function ensureDescriptionBand(description: string, min = 120, max = 155): string {
  let d = description.trim();
  if (d.length > max) d = clampText(d, max);
  if (d.length < min) {
    d = `${d} Science-based guides and free tools on ${SITE_NAME}.`;
    if (d.length > max) d = clampText(d, max);
  }
  return d;
}

/** Turn URL slug into a readable headline (e.g. why-cookies-spread → Why Cookies Spread) */
export function slugToArticleTitle(slug: string): string {
  return slug
    .split('-')
    .map((word, i) => {
      const lower = word.toLowerCase();
      if (lower === 'vs') return 'vs';
      if (i > 0 && SMALL_WORDS.has(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(' ');
}

function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed || '/';
}

function articleJsonLd(params: {
  headline: string;
  description: string;
  canonical: string;
  categoryLabel: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.headline,
    description: params.description,
    url: params.canonical,
    articleSection: params.categoryLabel,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': params.canonical,
    },
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

function websiteJsonLd(description: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description,
  };
}

function computeRouteSeo(path: string): RouteSeo {
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;

  if (path === '/') {
    const title = ensureTitleBand(
      `What to Make Today — Food Science Tools | ${SITE_NAME}`
    );
    const description = ensureDescriptionBand(
      'Pick baking, coffee, or ice cream—then open free Sensei tools. Learn why recipes work and fix spread, texture, extraction, and more. No signup.'
    );
    return {
      title,
      description,
      canonical: `${SITE_URL}/`,
      jsonLd: websiteJsonLd(description),
    };
  }

  if (path === '/articles') {
    const title = ensureTitleBand(`Food Science Articles — Learn the Why | ${SITE_NAME}`);
    const description = ensureDescriptionBand(
      'Deep dives on cookies, cakes, coffee, ice cream, pie, and baking chemistry. Read the science, then apply it with Sensei tools.'
    );
    return {
      title,
      description,
      canonical: `${SITE_URL}/articles`,
    };
  }

  if (path === '/fix-recipe') {
    const title = ensureTitleBand(`Fix My Recipe — debug baking & coffee | ${SITE_NAME}`);
    const description = ensureDescriptionBand(
      'Rule-based recipe debugger: pick what went wrong, add optional gram weights, get clear causes and variable suggestions. Transparent science—no AI required.'
    );
    return {
      title,
      description,
      canonical: `${SITE_URL}/fix-recipe`,
    };
  }

  if (path === '/bread-sensei') {
    const title = ensureTitleBand(`Bread Sensei — dough formulas & baker's % | ${SITE_NAME}`);
    const description = ensureDescriptionBand(
      'Free bread builder: pick a style (lean to enriched), edit ingredients, see hydration and enrichment vs classic targets, nutrition per slice, and bake steps. Part of SenseiFood — also at breadsensei.com.'
    );
    return {
      title,
      description,
      canonical: `${SITE_URL}/bread-sensei`,
    };
  }

  if (path === '/sauce-sensei') {
    const title = ensureTitleBand(`Sauce Sensei — sauce builder & balance tool | ${SITE_NAME}`);
    const description = ensureDescriptionBand(
      'Build sauces with a practical balance workflow: temperature, reduction, emulsion, umami, and recovery steps. Includes links to SEO-indexed sauce science articles.'
    );
    return {
      title,
      description,
      canonical: `${SITE_URL}/sauce-sensei`,
    };
  }

  const segments = path.split('/').filter(Boolean);
  if (segments.length === 2) {
    const [segment, slug] = segments;
    const cat = CATEGORY_SEGMENT[segment];
    const headline = slugToArticleTitle(slug);
    const keyword = cat?.keyword ?? 'recipes';
    const categoryLabel = cat?.label ?? 'Food Science';

    let title = `${headline} | ${SITE_NAME}`;
    title = ensureTitleBand(title);

    const description = ensureDescriptionBand(
      `${headline}: causes, fixes, and food science for better ${keyword}. Free guide from ${SITE_NAME}.`
    );

    return {
      title,
      description,
      canonical,
      jsonLd: articleJsonLd({
        headline,
        description,
        canonical,
        categoryLabel,
      }),
    };
  }

  const fallbackTitle = ensureTitleBand(`${SITE_NAME} — Food science tools & articles`);
  const fallbackDesc = ensureDescriptionBand(
    `${SITE_NAME} helps you fix and design recipes using food science—cookies, cakes, pie, ice cream, and coffee.`
  );
  return {
    title: fallbackTitle,
    description: fallbackDesc,
    canonical,
  };
}

export function getRouteSeo(pathname: string): RouteSeo {
  const path = normalizePath(pathname);
  return applySeoOverrides(path, computeRouteSeo(path));
}
