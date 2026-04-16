import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-burns-on-the-bottom",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Burns on the Bottom",
  "subtitle": "Conductive heat from stone, thin pans, and oven floor hot spots chars the base first.",
  "readTime": "7 min read",
  "emoji": "🔥",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Bottom burn is conductive heat, not mystery. Double-pan, use parchment, raise the rack, lower stone temperature, or place a baking sheet under the loaf to deflect radiant heat from the oven floor.",
  "intro": "The bottom of a loaf touches the hottest conductive path in most home ovens. While the top browns by radiation and convection, the base can scorch because it sits against metal or ceramic that stores energy. Fixing bottom burn is kitchen physics, not a new ingredient. Contact surface between pan and dough often exceeds air temperature—dark metal, thin sheets, and direct flame transfer can char bottoms above 350°F (177°C) air while the crown looks pale. Thermal mass of baking stone can even out or worsen depending on preheat.",
  "sections": [
    {
      "heading": "Thermal mass and contact",
      "paragraphs": [
        "Baking steel and stones excel at crisp bases but punish delicate sandwich loaves. A second sheet pan as a heat shield adds air gap insulation.",
        "Dark, thin pans run hotter than light, thick ones."
      ]
    },
    {
      "heading": "Sugar and dairy",
      "paragraphs": [
        "Enriched doughs caramelize faster on contact surfaces. Lower the bake temperature slightly and extend time if bottoms race."
      ],
      "tip": "Slide a thin pizza stone on a rack above the floor to lift the loaf away from the worst radiant zone."
    },
    {
      "heading": "Preheating myths",
      "paragraphs": [
        "Long violent preheats overheat stones. Match preheat duration to what the recipe truly needs."
      ]
    },
    {
      "heading": "Record and adjust",
      "paragraphs": [
        "Log rack position and pan type when bottoms burn. Fix My Recipe still helps you see if the formula is unusually high in sugar, which lowers the thermal margin before char."
      ]
    },
    {
      "heading": "Insulation tactics",
      "paragraphs": [
        "Double pan, baking stone buffer, or parchment layer reduces heat flux to the bottom. Lower rack position away from lower element helps in some ovens.",
        "Reduce oven 25°F (14°C) and extend time—depth of heat matters more than peak temperature for thick loaves."
      ]
    },
    {
      "heading": "Sugar and dairy",
      "paragraphs": [
        "Sugars caramelize faster—sweet doughs need more bottom protection than lean."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why bread burns on the bottom is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "q": "Silicone mat help?",
      "a": "Insulates slightly; watch for longer bake."
    },
    {
      "q": "Glass pan burn?",
      "a": "Different heat path—often slower bottom than metal but can still scorch."
    }
  ]
};

export default function WhyBreadBurnsOnTheBottom() {
  return <ScienceArticlePage spec={SPEC} />;
}
