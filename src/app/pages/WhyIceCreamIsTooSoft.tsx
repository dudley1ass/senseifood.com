import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-is-too-soft",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Is Too Soft",
  "subtitle": "Too much sugar, alcohol, or warm freezers prevent proper firming.",
  "readTime": "7 min read",
  "emoji": "🍦",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "melts-fast"
  },
  "quickAnswer": "Soft ice cream straight from the freezer signals high sugar or alcohol, incomplete freezing, or a warm freezer. Check dasher time, hardening step, and recipe balance.",
  "intro": "Soft can be luscious—or unstable. Distinguish melt on the spoon from never setting in the first place. Soft serve in freezer often means incomplete freezing (draw temperature above ~21°F / -6°C for some bases) or high sugar/alcohol keeping it fluid at 0°F. Poor air incorporation also feels dense-soft.",
  "sections": [
    {
      "heading": "Solids and alcohol",
      "paragraphs": [
        "Extra cordials or syrup can suppress freezing enough that the base stays soupy."
      ]
    },
    {
      "heading": "Machine draw temperature",
      "paragraphs": [
        "Under-churned bases freeze more water later in the pan unevenly; follow hardening."
      ]
    },
    {
      "heading": "Thermal abuse",
      "paragraphs": [
        "Opening the freezer often drives temperature cycles that feel like “never hard.”"
      ]
    },
    {
      "heading": "Debugger",
      "paragraphs": [
        "Ice cream mode highlights sugar-heavy formulas; pair with thermometer checks of your freezer."
      ]
    },
    {
      "heading": "Freezer and churn",
      "paragraphs": [
        "Domestic machines may not reach commercial overrun—expect softer texture legitimately.",
        "Cure in coldest part of freezer 4+ hours after churn for firmness."
      ]
    },
    {
      "heading": "Recipe balance",
      "paragraphs": [
        "Too much corn syrup or invert can prevent firm set—check solids ratios."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why ice cream is too soft is easier to act on when you anchor numbers instead of vibes. Ice cream hardness depends on ice phase fraction, sugar depression of freezing point, fat network, and air (overrun). Typical home freezers sit near 0°F (-18°C); serving slightly warmer—around 6–10°F (-14 to -12°C) for hard-pack—improves scoopability. Pasteurizing custard bases to roughly 175–180°F (79–82°C) without boiling sets proteins safely; boiling risks curdling emulsions. Rapid freezing forms smaller ice crystals; slow freezing and partial thaw cycles grow crystals and feel icy. Total solids (fat + MSNF + sugar + stabilizers) set body; water-only bases freeze harder. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    },
    {
      "heading": "Extra variables that swing results",
      "paragraphs": [
        "Overrun (air volume) changes how flavors release and how hardness reads—home machines vary; note churn time and visual “soft-serve” finish before hardening. Emulsifiers and eggs shift freezing curves a few degrees; document brand changes. If you temper for service, track hold time above 0°F (−18°C)—small windows change mouthfeel dramatically. Solids—not just fat—include milk solids nonfat; higher MSNF can increase water binding and change scoop firmness at the same sugar level. Alcohol and invert syrups both depress freezing point; a few percentage points of ethanol can keep bases softer at 0°F than math from sugar alone would suggest."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Ice Cream Melts Fast",
      "path": "/ice-cream-science/why-ice-cream-melts-fast"
    },
    {
      "title": "Why Ice Cream Gets Icy",
      "path": "/ice-cream-science/why-ice-cream-gets-icy"
    },
    {
      "title": "Why Ice Cream Is Creamy",
      "path": "/ice-cream-science/why-ice-cream-is-creamy"
    }
  ],
  "faqs": [
    {
      "q": "Soft after week?",
      "a": "Partial melt-refreeze cycles—texture suffers."
    },
    {
      "q": "Gelato softer?",
      "a": "Style intent—warmer service temp."
    }
  ]
};

export default function WhyIceCreamIsTooSoft() {
  return <ScienceArticlePage spec={SPEC} />;
}
