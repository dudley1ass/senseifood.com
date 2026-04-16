import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "temperature-silent-killer-sauces",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Temperature: The Silent Killer of Sauces",
  "subtitle": "Why heat control matters more than ingredient lists for stable, glossy sauces.",
  "readTime": "9 min read",
  "level": "Sauce fundamentals",
  "emoji": "🌡️",
  "quickAnswer": "Most sauces fail because of heat path, not ingredient quality. If it breaks, lower heat first, then repair.",
  "intro": "Sauces are thermal systems. You are not only combining ingredients—you are controlling protein behavior, fat dispersion, and evaporation under changing temperature. The same recipe can be silky at one simmer intensity and split at another.",
  "sections": [
    {
      "heading": "Low heat and high heat fail differently",
      "paragraphs": [
        "Low heat can leave aromatics under-extracted and emulsions under-formed, giving a flat, disconnected flavor. High heat does the opposite: it pushes proteins and fat droplets past stability limits, so butter, cream, and cheese sauces separate.",
        "This is why two cooks using the same grams can get opposite outcomes. The process history matters more than static composition."
      ],
      "tip": "If a sauce breaks, LOWER HEAT before adding any fix ingredient."
    },
    {
      "heading": "State beats ratio",
      "paragraphs": [
        "Flavor wheels describe balance dimensions like salt, fat, acid, and sweet. Temperature describes physical state. A sauce can be “balanced” on paper but unstable in the pan because the emulsion state has already failed.",
        "Use visual cues: tiny active bubbles and glossy surface are usually safer than aggressive rolling boil when finishing with dairy fat."
      ]
    },
    {
      "heading": "Practical thermal workflow",
      "paragraphs": [
        "Build flavor at higher heat, then step down before finishing. Add butter, cream, or cheese at controlled sub-boil or off-heat carryover. Re-check texture before final seasoning.",
        "Treat your stove like equipment with calibration variance. “Medium” is not universal; note your own dial positions that produce reliable sauce behavior."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on temperature: the silent killer of sauces is easier to act on when you anchor numbers instead of vibes. Ice cream hardness depends on ice phase fraction, sugar depression of freezing point, fat network, and air (overrun). Typical home freezers sit near 0°F (-18°C); serving slightly warmer—around 6–10°F (-14 to -12°C) for hard-pack—improves scoopability. Pasteurizing custard bases to roughly 175–180°F (79–82°C) without boiling sets proteins safely; boiling risks curdling emulsions. Rapid freezing forms smaller ice crystals; slow freezing and partial thaw cycles grow crystals and feel icy. Total solids (fat + MSNF + sugar + stabilizers) set body; water-only bases freeze harder. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can I fix a broken sauce by whisking harder?",
      "a": "Sometimes temporarily, but if heat is still too high the break often returns. Reduce heat first, then add warm liquid and whisk."
    },
    {
      "q": "Why does restaurant sauce seem more consistent?",
      "a": "They standardize both formula and heat workflow, including reduction targets and finishing temperatures."
    }
  ],
  "related": [
    {
      "title": "Emulsion vs Non-Emulsion Sauces",
      "path": "/sauce-science/emulsion-vs-non-emulsion-sauces"
    },
    {
      "title": "Order of Operations in Sauces",
      "path": "/sauce-science/order-of-operations-sauce-timing"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  }
};

export default function TemperatureSilentKillerSauces() {
  return <ScienceArticlePage spec={SPEC} />;
}
