import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-tastes-icy",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Tastes Icy",
  "subtitle": "Large crystals and wet air pockets read as crunch and cold water on the tongue.",
  "readTime": "8 min read",
  "emoji": "🧊👅",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "icy"
  },
  "quickAnswer": "Icy mouthfeel means large ice crystals or high free water—slow freezing, heat shock, low solids, or stabilizer issues. Freeze faster, minimize thaw cycles, balance sugar and MSNF.",
  "intro": "This article complements “gets icy” storage physics with sensory framing: your tongue detects crystal size as texture. Icy texture means large ice crystals—often from slow freezing, partial thaw, or low total solids. Rapid freeze to -10°F (-23°C) or below in blast freezers makes small crystals; home freezers grow crystals over time.",
  "sections": [
    {
      "heading": "Crystal growth",
      "paragraphs": [
        "Small crystals feel smooth; large ones feel sandy. Heat shock melts and refreezes water into bigger crystals."
      ]
    },
    {
      "heading": "Formulation",
      "paragraphs": [
        "Dextrose, corn syrup, and milk solids interrupt ice continuity; too-lean bases crystallize eagerly."
      ]
    },
    {
      "heading": "Process",
      "paragraphs": [
        "Hardening after churn sets smaller crystals than skipping the step."
      ]
    },
    {
      "heading": "Tooling",
      "paragraphs": [
        "Fix My Recipe icy pathway pairs with your weights to show lean vs typical sugar–dairy ratios."
      ]
    },
    {
      "heading": "Heat shock",
      "paragraphs": [
        "Melting even partially and refreezing coarsens texture—minimize warm trips from store.",
        "Emulsifiers and stabilizers reduce crystal growth kinetics—home eggs/cornstarch play partial role."
      ]
    },
    {
      "heading": "Water activity",
      "paragraphs": [
        "High water, low fat/sugar formulas freeze icier—adjust solids."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why ice cream tastes icy is easier to act on when you anchor numbers instead of vibes. Ice cream hardness depends on ice phase fraction, sugar depression of freezing point, fat network, and air (overrun). Typical home freezers sit near 0°F (-18°C); serving slightly warmer—around 6–10°F (-14 to -12°C) for hard-pack—improves scoopability. Pasteurizing custard bases to roughly 175–180°F (79–82°C) without boiling sets proteins safely; boiling risks curdling emulsions. Rapid freezing forms smaller ice crystals; slow freezing and partial thaw cycles grow crystals and feel icy. Total solids (fat + MSNF + sugar + stabilizers) set body; water-only bases freeze harder. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "title": "Why Ice Cream Gets Icy",
      "path": "/ice-cream-science/why-ice-cream-gets-icy"
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
      "q": "Alcohol icy?",
      "a": "Keeps liquid phase—different mouthfeel than water ice."
    },
    {
      "q": "Sorbet icy?",
      "a": "Expected some—sugar and pectin manage it."
    }
  ]
};

export default function WhyIceCreamTastesIcy() {
  return <ScienceArticlePage spec={SPEC} />;
}
