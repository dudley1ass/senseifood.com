import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "emulsion-vs-non-emulsion-sauces",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Emulsion vs Non-Emulsion: Two Sauce Worlds",
  "subtitle": "How to diagnose oily separation vs normal concentration behavior.",
  "readTime": "9 min read",
  "emoji": "🧈",
  "quickAnswer": "If it looks oily and separated, treat it as emulsion failure: add warm liquid + whisk after lowering heat.",
  "intro": "Not all sauces are built on the same physics. Emulsified sauces can break. Non-emulsified sauces generally concentrate. Correct diagnosis determines the right fix.",
  "sections": [
    {
      "heading": "What breaks and what concentrates",
      "paragraphs": [
        "Pan sauces, mayo, and many cheese sauces depend on dispersed fat droplets, so they can split into oil and water phases.",
        "Reductions and soy glazes typically do not “break” the same way; they intensify as water evaporates."
      ]
    },
    {
      "heading": "Visual triage",
      "paragraphs": [
        "Glossy cohesion usually signals stable structure. Persistent oil slicks or pooling indicate broken emulsions."
      ],
      "tip": "If oily, it is likely broken — add warm liquid + whisk after lowering heat."
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on emulsion vs non-emulsion: two sauce worlds is easier to act on when you anchor numbers instead of vibes. Ice cream hardness depends on ice phase fraction, sugar depression of freezing point, fat network, and air (overrun). Typical home freezers sit near 0°F (-18°C); serving slightly warmer—around 6–10°F (-14 to -12°C) for hard-pack—improves scoopability. Pasteurizing custard bases to roughly 175–180°F (79–82°C) without boiling sets proteins safely; boiling risks curdling emulsions. Rapid freezing forms smaller ice crystals; slow freezing and partial thaw cycles grow crystals and feel icy. Total solids (fat + MSNF + sugar + stabilizers) set body; water-only bases freeze harder. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "title": "Temperature: The Silent Killer",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "Reduction Curve",
      "path": "/sauce-science/reduction-curve-nonlinear-flavor"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  }
};

export default function EmulsionVsNonEmulsionSauces() {
  return <ScienceArticlePage spec={SPEC} />;
}
