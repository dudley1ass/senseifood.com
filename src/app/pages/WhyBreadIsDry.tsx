import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-is-dry",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Is Dry",
  "subtitle": "Bake time, flour absorption, storage, and enrichment levels all steal moisture from crumb.",
  "readTime": "7 min read",
  "emoji": "🏜️",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Dry bread usually means over-baked crumb, flour that absorbed more water than the recipe assumed, or storage that let moisture equilibrate into the air. Pull earlier if crust is thick and crumb chalky; store cut sides covered.",
  "intro": "Dryness is both a sensory label and a physical reality: less free water in the crumb, firmer starch retrogradation, and faster staling. Home bakers often curse “the recipe” when the oven environment and storage habits moved more water than a tablespoon tweak ever could. Perceived dryness rises when crumb loses plasticizing water—both from over-baking past 210°F (99°C) in spots and from staling retrogradation over hours to days. Fat-enriched breads lose free moisture differently than lean loaves.",
  "sections": [
    {
      "heading": "Over-baking beyond the crumb set point",
      "paragraphs": [
        "Once internal temperature passes the set range, moisture loss accelerates. A loaf left “to be safe” can read tough and cottony even with a correct formula.",
        "Match loaf size to time: small rolls finish quickly; large miche needs gentle heat longer."
      ]
    },
    {
      "heading": "Hydration and brand variance",
      "paragraphs": [
        "Flour is a crop; protein and ash change seasonally. A hydration that felt perfect in January can feel dry in July with a new bag. Autolyse reveals how thirsty your flour really is."
      ],
      "tip": "Add water in two stages: hold back 3–5% until you feel the dough after rest."
    },
    {
      "heading": "Staling and storage",
      "paragraphs": [
        "Staling is starch reorganizing, not only water leaving. Refrigeration speeds perceived staling for many breads. Freeze sliced portions you will not eat in a day or two; keep crusty bread in a paper bag and accept that the crust will soften when wrapped."
      ]
    },
    {
      "heading": "Using the debugger",
      "paragraphs": [
        "Compare your dough’s hydration percentage to reference bands in bread mode. If you are low for an artisan open crumb but the bread feels dry, the bake or storage story is the prime suspect, not the recipe’s headline hydration."
      ]
    },
    {
      "heading": "Bake profile",
      "paragraphs": [
        "Lower temperature longer bake evens heat for thick loaves; thin free-form loaves tolerate higher radiant heat. Tent foil when crust hits amber but interior lags 15°F behind target.",
        "Steam early prevents premature crust that traps steam inside unevenly—dry crust, wet crumb paradox is possible."
      ]
    },
    {
      "heading": "Storage RH",
      "paragraphs": [
        "Bread boxes around 70–80% relative humidity slow staling compared with paper bags on a dry counter—without encouraging mold in warm kitchens."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why bread is dry is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Bread Rises",
      "path": "/bread-science/why-bread-rises"
    },
    {
      "title": "How Yeast Works in Baking",
      "path": "/bread-science/how-yeast-works"
    }
  ],
  "faqs": [
    {
      "q": "Oil vs butter dryness?",
      "a": "Oil often feels softer next-day; butter firms when cold."
    },
    {
      "q": "Freeze drying?",
      "a": "Freezer burn is sublimation—airtight wrap prevents it."
    }
  ]
};

export default function WhyBreadIsDry() {
  return <ScienceArticlePage spec={SPEC} />;
}
