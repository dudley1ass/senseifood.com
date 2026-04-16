import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-dough-is-too-sticky",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Dough Is Too Sticky",
  "subtitle": "Stickiness is usually hydration, weak gluten early in mixing, or flour absorption—not necessarily “too much water.”",
  "readTime": "7 min read",
  "emoji": "🖐️",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Sticky dough often means you are mid-mix before gluten aligns, your hydration is high for your flour, or your hands/tools are dry and grabbing the surface. Wait for rest, use wet hands, and adjust flour brand or hydration on the next bake.",
  "intro": "Sticky is the wrong word for what beginners feel; “highly hydrated and under-developed” is closer. Professional bakers expect tackiness in many doughs and use technique—folds, scrapers, wet hands—to manage it. This article separates normal tack from true errors so you do not panic-flour your way into a brick. Stickiness often reflects hydration above flour absorption, incomplete gluten development, or amylase activity making slack dough. Finished dough temperature near 75–80°F (24–27°C) feels stickier than cold dough at same hydration due to fat and water mobility.",
  "sections": [
    {
      "heading": "Development timeline",
      "paragraphs": [
        "In the first minutes after combining flour and water, the mass shreds and sticks. After rest and mechanical work, proteins align and the dough becomes smoother and less clingy. If you add flour during the ugly phase, you permanently change the formula.",
        "Try a 20–30 minute autolyse (flour and water only) before adding salt and yeast on the next attempt; many sticky complaints vanish."
      ]
    },
    {
      "heading": "Hydration vs flour absorption",
      "paragraphs": [
        "An 80% hydration recipe written for a specific mill may feel impossible with another brand. Protein, damaged starch, and milling style change how water binds."
      ],
      "tip": "Reserve 5% water; add only if the dough genuinely refuses to hydrate after folds."
    },
    {
      "heading": "Technique: friction and temperature",
      "paragraphs": [
        "Cold, dry hands grab dough. Wet hands and a bench scraper reduce tearing. Warm dough is softer; cold dough is firmer—temperature is a texture knob."
      ]
    },
    {
      "heading": "When to change the recipe",
      "paragraphs": [
        "If stickiness persists after full development and the loaf spreads in proof, lower hydration 3–4% or increase strength with a short knead or extra fold series. Fix My Recipe helps compare your ratio to typical bands for sandwich vs artisan styles."
      ]
    },
    {
      "heading": "Absorption and autolyse",
      "paragraphs": [
        "Resting flour and water allows hydration without kneading—less sticky feel after 20–60 minutes. Salt added late in autolyse preserves enzyme control.",
        "Different wheat crops absorb differently—same recipe, new bag of flour may need ±2% water."
      ]
    },
    {
      "heading": "Handling technique",
      "paragraphs": [
        "Wet hands and bench scraper beat adding flour repeatedly—which changes ratio."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why dough is too sticky is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "q": "Sticky vs wet?",
      "a": "Wet is excess water; sticky can be protease or high hydration design."
    },
    {
      "q": "Fix with more flour always?",
      "a": "Last resort—better folds and time."
    }
  ]
};

export default function WhyDoughIsTooSticky() {
  return <ScienceArticlePage spec={SPEC} />;
}
