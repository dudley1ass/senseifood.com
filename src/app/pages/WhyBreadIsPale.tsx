import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-is-pale",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Is Pale",
  "subtitle": "Maillard needs surface dryness, heat, and reducing sugars; steam and low sugar slow color.",
  "readTime": "7 min read",
  "emoji": "⬜",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Pale crusts usually mean the surface stayed wet too long, the oven ran cool, or the dough lacked reducing sugars for browning. Reduce steam duration, verify temperature with a thermometer, or brush with wash.",
  "intro": "Color is flavor when it comes to crust. Pale bread often tastes “raw” even when fully baked because our palates associate depth of roast with aroma compounds from Maillard and caramelization. Maillard browning accelerates above roughly 285°F (140°C) surface temperature with available reducing sugars and amino acids. Steam-heavy ovens without a dry finish keep surfaces below effective browning; low sugar doughs lack substrate.",
  "sections": [
    {
      "heading": "Steam balance",
      "paragraphs": [
        "Steam that never clears keeps the crust leathery and blond. Transition to a dry oven phase for color development."
      ]
    },
    {
      "heading": "Temperature accuracy",
      "paragraphs": [
        "Home ovens drift. A 25°F low error can add many minutes to browning while the crumb continues to dry."
      ]
    },
    {
      "heading": "Washes and toppings",
      "paragraphs": [
        "Egg, milk, or malt syrups increase browning. For lean doughs, a light mist of water before loading still allows color if the dry phase follows."
      ]
    },
    {
      "heading": "Formula angle",
      "paragraphs": [
        "Low-sugar, low-fat lean breads are supposed to be lighter in color than brioche. Compare to style intent. Fix My Recipe can show if your enrichment is unexpectedly low relative to similar formulas."
      ]
    },
    {
      "heading": "Finish temperature and environment",
      "paragraphs": [
        "Remove steam, raise temp last minutes, or use convection to dry and brown. Milk, egg, or malt syrup washes add sugars for color without sweetness spike.",
        "Diastatic malt in tiny amounts helps crust color in lean doughs—measure carefully."
      ]
    },
    {
      "heading": "Oven calibration",
      "paragraphs": [
        "If tops are chronically pale, verify actual air temp—you may be 30°F low."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why bread is pale is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "q": "Pale but baked through?",
      "a": "Color is optional for safety—texture rules doneness."
    },
    {
      "q": "Whole wheat darker?",
      "a": "Bran masks crumb color; crust can still be pale without malt."
    }
  ]
};

export default function WhyBreadIsPale() {
  return <ScienceArticlePage spec={SPEC} />;
}
