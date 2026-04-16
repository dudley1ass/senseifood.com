import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "water-content-hidden-dilution",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Hidden Water Content: The Dilution Variable",
  "subtitle": "Why sauces go thin when proteins and vegetables release unexpected moisture.",
  "readTime": "8 min read",
  "emoji": "💧",
  "quickAnswer": "Unexpectedly thin sauce is usually a water-load problem first; reduce before re-seasoning.",
  "intro": "Food releases water during cooking. Chicken, vegetables, and thawed ingredients can dilute your sauce after it seemed perfect, causing weak flavor and poor body.",
  "sections": [
    {
      "heading": "Where extra water comes from",
      "paragraphs": [
        "Protein purge, osmotic release from vegetables, and freeze-thaw water migration all add liquid that recipes rarely account for.",
        "If you season before this release stabilizes, final sauce often lands underpowered."
      ]
    },
    {
      "heading": "Corrective sequence",
      "paragraphs": [
        "Do not immediately add more salt, acid, and fat. First reduce to your target consistency, then reassess seasoning.",
        "This avoids over-seasoning a sauce that only needed water removal."
      ],
      "tip": "Unexpected thin? Reduce first before adjusting."
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on hidden water content: the dilution variable is easier to act on when you anchor numbers instead of vibes. Ice cream hardness depends on ice phase fraction, sugar depression of freezing point, fat network, and air (overrun). Typical home freezers sit near 0°F (-18°C); serving slightly warmer—around 6–10°F (-14 to -12°C) for hard-pack—improves scoopability. Pasteurizing custard bases to roughly 175–180°F (79–82°C) without boiling sets proteins safely; boiling risks curdling emulsions. Rapid freezing forms smaller ice crystals; slow freezing and partial thaw cycles grow crystals and feel icy. Total solids (fat + MSNF + sugar + stabilizers) set body; water-only bases freeze harder. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    },
    {
      "heading": "Extra variables that swing results",
      "paragraphs": [
        "When a symptom persists, compare two batches on consecutive days with the same flour bag and yeast lot—raw ingredient drift is real. Keep a kitchen thermometer calibrated yearly if you bake weekly; five degrees at the oven cavity is enough to change set time materially."
      ]
    }
  ],
  "related": [
    {
      "title": "Reduction Curve Is Nonlinear",
      "path": "/sauce-science/reduction-curve-nonlinear-flavor"
    },
    {
      "title": "Salt as Amplifier",
      "path": "/sauce-science/salt-as-amplifier-not-only-salty"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  }
};

export default function WaterContentHiddenDilution() {
  return <ScienceArticlePage spec={SPEC} />;
}
