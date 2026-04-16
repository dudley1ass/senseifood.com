import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-oven-spring-happens",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Oven Spring Happens",
  "subtitle": "Gas expands, yeast races until heat kills it, and steam pressure inflates cells before the crumb sets.",
  "readTime": "8 min read",
  "emoji": "🎈",
  "fixRecipe": {
    "category": "bread",
    "problem": "wont-rise"
  },
  "quickAnswer": "Oven spring is rapid expansion from hot gas and steam inside a still-soft dough, amplified by last gasp yeast activity, until proteins set. Strong gluten, proper proof, steam, and heat transfer make it visible.",
  "intro": "Oven spring is the theatrical moment bread bakers chase: the loaf surges, scores peel back, and the silhouette transforms. Under the drama is straightforward thermodynamics plus biology stopping at a precise death temperature for yeast. Oven spring is rapid expansion when yeast and trapped water vapor pressure inflate the dough before the crust sets—mostly in the first third of bake while internal temp climbs from 140°F (60°C) toward starch set.",
  "sections": [
    {
      "heading": "Gas laws in the crumb",
      "paragraphs": [
        "Charles’s law is the intuitive part: gases expand when heated. The less intuitive part is how many separate bubbles do this at once inside a viscoelastic foam."
      ]
    },
    {
      "heading": "Yeast sprint",
      "paragraphs": [
        "Warmth accelerates fermentation until thermal death around 140°F for yeast. That final burst overlaps with expansion."
      ]
    },
    {
      "heading": "Structure setting",
      "paragraphs": [
        "Spring ends when gluten coagulates and starch gelatinizes enough to lock shape. Under-proofed dough can spring then tear; over-proofed dough has little left to give."
      ]
    },
    {
      "heading": "Practice loop",
      "paragraphs": [
        "Photograph each loaf at 2, 5, and 10 minutes in the oven. Pair visuals with Fix My Recipe ratio notes to learn whether problems are fermentation-first or heat-first."
      ]
    },
    {
      "heading": "Gas and vapor",
      "paragraphs": [
        "CO₂ from yeast and air bubbles expand with heat; water vapor contributes pressure once localized boiling begins in crumb pores.",
        "Scoring directs expansion—without it, weak points burst randomly."
      ]
    },
    {
      "heading": "Limits",
      "paragraphs": [
        "Over-proofed dough cannot spring—bubble walls already thinned. Under-powered ovens may set crust before expansion completes."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why oven spring happens is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "q": "No spring sourdough?",
      "a": "Check proof state and steam; both dominate."
    },
    {
      "q": "Pizza spring?",
      "a": "Same physics—hot stone, fast set."
    }
  ]
};

export default function WhyOvenSpringHappens() {
  return <ScienceArticlePage spec={SPEC} />;
}
