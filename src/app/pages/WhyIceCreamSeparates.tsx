import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-separates",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Separates",
  "subtitle": "Butterfat churn-out, unstable emulsions, and thaw-refreeze break smoothness.",
  "readTime": "8 min read",
  "emoji": "💧",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "general"
  },
  "quickAnswer": "Separation means broken emulsion or churned butter: overwhipping, heat shock, acidic fruit without stabilization, or fat that coalesced. Emulsifiers, cornstarch, and gentler churn help.",
  "intro": "Ice cream is a frozen emulsion foam. When fat globules irreversibly cluster, you see oily sheen, curdled texture, or watery whey pockets. Separation is broken emulsion—fat globules coalesce and water synerizes—often from heat shock, insufficient emulsifier, or acid curdling proteins. Custard bases need safe pasteurization 175–180°F (79–82°C) hold for egg set without boil.",
  "sections": [
    {
      "heading": "Churned butter",
      "paragraphs": [
        "Too long or too fast in a warm machine smears fat on dasher walls."
      ]
    },
    {
      "heading": "Acid and dairy",
      "paragraphs": [
        "Fruit acids can curdle unless balanced with starch or careful incorporation timing."
      ]
    },
    {
      "heading": "Thaw abuse",
      "paragraphs": [
        "Partial melt lets fat rise; refreeze never fully re-emulsifies."
      ],
      "tip": "Temper mix completely smooth before churn if you heated yolks or chocolate."
    },
    {
      "heading": "Debugger",
      "paragraphs": [
        "Compare fat and sugar levels to reference ranges; extreme ratios stress emulsions."
      ]
    },
    {
      "heading": "Emulsion science",
      "paragraphs": [
        "Lecithin in egg yolk and milk helps; commercial products add mono/diglycerides. Homogenization scale matters—blender re-emulsifies small batches.",
        "Acid fruits need stabilized bases—otherwise dairy proteins precipitate."
      ]
    },
    {
      "heading": "Churn and storage",
      "paragraphs": [
        "Over-churning can butter fat—grainy separated feel."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why ice cream separates is easier to act on when you anchor numbers instead of vibes. Ice cream hardness depends on ice phase fraction, sugar depression of freezing point, fat network, and air (overrun). Typical home freezers sit near 0°F (-18°C); serving slightly warmer—around 6–10°F (-14 to -12°C) for hard-pack—improves scoopability. Pasteurizing custard bases to roughly 175–180°F (79–82°C) without boiling sets proteins safely; boiling risks curdling emulsions. Rapid freezing forms smaller ice crystals; slow freezing and partial thaw cycles grow crystals and feel icy. Total solids (fat + MSNF + sugar + stabilizers) set body; water-only bases freeze harder. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "title": "Why Ice Cream Gets Freezer Burn",
      "path": "/ice-cream-science/why-ice-cream-gets-freezer-burn"
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
      "q": "Can I rescue split base?",
      "a": "Blend smooth, strain, rechill—sometimes works if not curdled hard."
    },
    {
      "q": "Vegan separates?",
      "a": "Different emulsifiers—lecithin or gums common."
    }
  ]
};

export default function WhyIceCreamSeparates() {
  return <ScienceArticlePage spec={SPEC} />;
}
