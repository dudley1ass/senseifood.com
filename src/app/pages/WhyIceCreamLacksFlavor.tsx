import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-lacks-flavor",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Lacks Flavor",
  "subtitle": "Cold suppresses sweetness and aroma; fat mutes; dilution hides extracts.",
  "readTime": "7 min read",
  "emoji": "😐",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "general"
  },
  "quickAnswer": "Flavor reads weaker frozen. Boost base before churn, use cooked concentrates, salt, acid, or alcohol carriers, and taste slightly over-strong warm knowing cold dulls perception.",
  "intro": "Frozen dessert formulation is compensatory psychology plus chemistry: what tastes right hot is often timid cold. Flavor perception drops at cold temperatures—taste buds less sensitive around 0–20°F (-18 to -7°C). Fat coats tongue and can mute volatile aromatics unless salt and vanilla are balanced. Overrun dilutes flavor mass per bite.",
  "sections": [
    {
      "heading": "Temperature and perception",
      "paragraphs": [
        "Trigeminal cold masks volatile aromatics. Sweetness perception drops at low temperatures."
      ]
    },
    {
      "heading": "Dilution math",
      "paragraphs": [
        "Air and water from milk dilute infusions; steep stronger or reduce water elsewhere."
      ]
    },
    {
      "heading": "Fat and vanilla",
      "paragraphs": [
        "Fat carries fat-soluble aromatics but can blanket subtle notes if not balanced."
      ]
    },
    {
      "heading": "Ratios",
      "paragraphs": [
        "Ice cream mode shows whether you are maxing sugar space while starving flavor carriers—adjust holistically."
      ]
    },
    {
      "heading": "Bloom and volatiles",
      "paragraphs": [
        "Let pint warm slightly on counter—volatiles release. Same ice cream reads sweeter and more aromatic at 10°F than at -5°F.",
        "Extracts and infusions need concentration to survive dilution by cream."
      ]
    },
    {
      "heading": "Fat and sugar",
      "paragraphs": [
        "Too much fat can flatten perceived flavor intensity—counterintuitive but common in testing."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why ice cream lacks flavor is easier to act on when you anchor numbers instead of vibes. Ice cream hardness depends on ice phase fraction, sugar depression of freezing point, fat network, and air (overrun). Typical home freezers sit near 0°F (-18°C); serving slightly warmer—around 6–10°F (-14 to -12°C) for hard-pack—improves scoopability. Pasteurizing custard bases to roughly 175–180°F (79–82°C) without boiling sets proteins safely; boiling risks curdling emulsions. Rapid freezing forms smaller ice crystals; slow freezing and partial thaw cycles grow crystals and feel icy. Total solids (fat + MSNF + sugar + stabilizers) set body; water-only bases freeze harder. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "title": "Why Ice Cream Is Creamy",
      "path": "/ice-cream-science/why-ice-cream-is-creamy"
    }
  ],
  "faqs": [
    {
      "q": "Salt in sweet?",
      "a": "Tiny pinch heightens perceived flavor complexity."
    },
    {
      "q": "Old freezer odors?",
      "a": "Fat absorbs smells—airtight containers matter."
    }
  ]
};

export default function WhyIceCreamLacksFlavor() {
  return <ScienceArticlePage spec={SPEC} />;
}
