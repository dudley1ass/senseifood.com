import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-dough-rises-too-fast",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Dough Rises Too Fast",
  "subtitle": "Heat, high yeast, sugar, and small dough mass accelerate fermentation—sometimes past flavor and structure.",
  "readTime": "7 min read",
  "emoji": "🚀",
  "fixRecipe": {
    "category": "bread",
    "problem": "wont-rise"
  },
  "quickAnswer": "Fast rise usually means warm ambient temperature, high yeast percentage, or both. Cool the dough, reduce yeast slightly, or use cold water to stretch fermentation for better flavor and safer proof windows.",
  "intro": "Rising fast sounds ideal until you miss the peak and over-proof. It also truncates flavor development because bacterial byproducts and slower yeast pathways do not have time to contribute complexity. Speed is not the goal; controlled timing is. Fast fermentation at 82–90°F (28–32°C) can double bulk in under an hour—risking alcohol, acetic spike, and weak gluten. Yeast activity is exponential in that band until nutrients limit.",
  "sections": [
    {
      "heading": "Temperature dominates",
      "paragraphs": [
        "Moving dough from a 62°F kitchen to an 82°F proofing box changes timelines dramatically. Track ambient and dough temperature, not just “two hours.”"
      ]
    },
    {
      "heading": "Yeast quantity",
      "paragraphs": [
        "Doubling yeast to “save time” often costs you window width. Precision weighing matters for small masses of yeast."
      ],
      "tip": "Try cold autolyse and refrigerated bulk for schedule control."
    },
    {
      "heading": "Sugar and osmotic pressure",
      "paragraphs": [
        "Sweet doughs can paradoxically behave oddly; very high sugar ties water and stresses yeast. Fast rise in mild sweet doughs more often traces to warmth."
      ]
    },
    {
      "heading": "Tooling",
      "paragraphs": [
        "If your formula is yeast-heavy relative to flour, Fix My Recipe will contrast it with lean bread norms. Pair that insight with a kitchen thermometer."
      ]
    },
    {
      "heading": "Cooling control",
      "paragraphs": [
        "Move dough to cooler space or use fridge retard. Reduce starter inoculation in sourdough for slower acid build.",
        "Salt percentage within normal 1.8–2.2% flour weight regulates yeast speed slightly."
      ]
    },
    {
      "heading": "Signals",
      "paragraphs": [
        "Over-fast rise often smells beer-y and collapses—smell and volume cues beat clock."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why dough rises too fast is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "q": "Instant vs active dry speed?",
      "a": "Instant skips blooming—can feel faster in same temp."
    },
    {
      "q": "Sugar rush?",
      "a": "High sugar osmotically stresses yeast initially then feeds—complex curve."
    }
  ]
};

export default function WhyDoughRisesTooFast() {
  return <ScienceArticlePage spec={SPEC} />;
}
