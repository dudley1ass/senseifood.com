import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "brown-gravy-stock-based",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Brown Gravy (Stock-Based Roux): Recipe & Balance Guide",
  "subtitle": "Roux-thickened gravy from drippings or butter + flour + stock — how to read salt vs fat and avoid a thin finish.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🍲",
  "quickAnswer": "Equal tablespoons of butter and flour are classic by volume (~1.5–1.9:1 by weight). Simmer until the body matches the plate, then season at the end.",
  "intro": "Brown gravy is a small set of moves done in the right order: toast the roux, add warm stock in stages, simmer to thicken, then salt and pepper to taste. The Sauce Sensei model treats this build as fat-forward once the roux carries butter or drippings, with salt coming from stock and your finish — so tasting late matters more than nailing grams on paper.",
  "sections": [
    {
      "heading": "Roux first, liquid second",
      "paragraphs": [
        "Cook the roux until it smells toasty and the raw flour note is gone — usually a few minutes at gentle heat. Pale roux thickens; deeply browned roux adds flavor but reduces thickening power, so pick your toast level for the dish.",
        "Add stock warm and in increments, whisking out lumps before more liquid goes in. If the gravy is thin, simmer to reduce; if it is tight, thin with more stock before you chase salt."
      ],
      "tip": "Season after the gravy is close to final thickness — reduction concentrates salt."
    },
    {
      "heading": "Balance on the wheel",
      "paragraphs": [
        "Stock-forward gravies dilute perceived salt until they reduce; fat from roux rounds mouthfeel. If the dot on the wheel reads very fat-heavy, a touch more salt or a splash of acid (wine, vinegar) can restore contrast without turning the sauce sharp.",
        "Use the interactive builder to scale the batch and watch how butter + flour + stock grams move the modeled pulls — then trust your spoon at the stove."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on brown gravy (stock-based roux): recipe & balance guide is easier to act on when you anchor numbers instead of vibes. Ice cream hardness depends on ice phase fraction, sugar depression of freezing point, fat network, and air (overrun). Typical home freezers sit near 0°F (-18°C); serving slightly warmer—around 6–10°F (-14 to -12°C) for hard-pack—improves scoopability. Pasteurizing custard bases to roughly 175–180°F (79–82°C) without boiling sets proteins safely; boiling risks curdling emulsions. Rapid freezing forms smaller ice crystals; slow freezing and partial thaw cycles grow crystals and feel icy. Total solids (fat + MSNF + sugar + stabilizers) set body; water-only bases freeze harder. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "related": [
    {
      "title": "Temperature: The Silent Killer of Sauces",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "Order of Operations: Timing Changes Everything",
      "path": "/sauce-science/order-of-operations-sauce-timing"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "sauceSensei": {
    "sauceId": "simple-gravy"
  }
};

export default function BrownGravyStockBased() {
  return <ScienceArticlePage spec={SPEC} />;
}
