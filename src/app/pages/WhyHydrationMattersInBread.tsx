import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-hydration-matters-in-bread",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Hydration Matters in Bread",
  "subtitle": "Water enables gluten, dissolves salts and sugars, and sets the crumb openness you can achieve.",
  "readTime": "8 min read",
  "emoji": "💧",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Hydration controls dough extensibility, fermentation speed, and final crumb openness. Too low yields tight crumb; too high demands technique. Express hydration as baker’s percentage of flour weight for repeatability.",
  "intro": "Hydration is the master variable in lean bread. It is not “how wet it feels” but how much water mass sits relative to flour mass. That ratio determines whether folds work, whether shaping is possible, and how open your alveoli can become before the structure collapses. Hydration % (baker’s math: water/flour ×100) sets crumb openness, shelf life, and handling difficulty. Typical sandwich breads 60–65%, artisan open crumb 75–85% with technique.",
  "sections": [
    {
      "heading": "Baker’s percentages",
      "paragraphs": [
        "Flour is 100%; water is relative. A 70% dough uses 700 g water per 1000 g flour. This language lets you scale and compare recipes across the internet without cup confusion."
      ]
    },
    {
      "heading": "Gluten and dilution",
      "paragraphs": [
        "Water lets gliadin and glutenin move and link. Extreme hydrations require folds to align strands because kneading alone cannot “press” structure into soup."
      ]
    },
    {
      "heading": "Fermentation coupling",
      "paragraphs": [
        "Wetter doughs often ferment faster at the same temperature because enzymes diffuse readily—but they also feel softer, tempting under-proof misreads."
      ]
    },
    {
      "heading": "Use the debugger intentionally",
      "paragraphs": [
        "Fix My Recipe shines when you enter weights and compare to reference bands. Move hydration in 2–3% steps; it is a coarse knob with fine effects."
      ]
    },
    {
      "heading": "Starch and gluten competition",
      "paragraphs": [
        "Water hydrates starch for gelatinization and enables gluten network formation—too little and dough tears; too much and dough needs folds to align structure.",
        "Temperature changes apparent hydration—warm water feels softer."
      ]
    },
    {
      "heading": "Adjusting safely",
      "paragraphs": [
        "Move 2–3% at a time; record outcomes. Humidity in flour storage changes effective hydration."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why hydration matters in bread is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is higher hydration always better?",
      "a": "No—technique and flour must match. A failed 80% loaf is worse than a joyful 68% loaf."
    },
    {
      "q": "Same hydration different flour?",
      "a": "Absorption differs—feel and windowpane test beat numbers."
    },
    {
      "q": "Oil in hydration %?",
      "a": "Usually counted separately—fat lubricates gluten."
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
  ]
};

export default function WhyHydrationMattersInBread() {
  return <ScienceArticlePage spec={SPEC} />;
}
