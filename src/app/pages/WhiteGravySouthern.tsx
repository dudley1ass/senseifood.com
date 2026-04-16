import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "white-gravy-southern",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "White Gravy (Southern Cream Gravy): Recipe & Balance Guide",
  "subtitle": "Roux + milk, aggressive pepper — dairy-forward comfort sauce for biscuits and fried chicken.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🤠",
  "quickAnswer": "Milk proteins scorch fast: keep a gentle bubble, not a rolling boil. Pepper is part of the flavor identity, not just garnish.",
  "intro": "White gravy is roux-thickened milk with a pepper-forward personality. It should be creamy, lightly savory, and spoonable — not a loose béchamel and not a paste. Because milk dilutes salt perception differently than stock gravies, seasoning checks happen after the sauce has tightened.",
  "sections": [
    {
      "heading": "Heat discipline",
      "paragraphs": [
        "After the roux, add milk in stages while whisking. A vigorous boil can break emulsion and scorch dairy on the pan floor; you want a steady, gentle bubble while thickening.",
        "Black pepper is traditional; add in layers so heat and aroma stay balanced with salt."
      ]
    },
    {
      "heading": "What “done” feels like",
      "paragraphs": [
        "The sauce should coat a spoon and pool slowly on a plate — if it is runny, reduce a bit longer before adding more fat. If it is gluey, thin with a splash of milk and re-season.",
        "Open the Sauce Sensei build for this variant to align grams with the wheel’s style target band for white gravy."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on white gravy (southern cream gravy): recipe & balance guide is easier to act on when you anchor numbers instead of vibes. Ice cream hardness depends on ice phase fraction, sugar depression of freezing point, fat network, and air (overrun). Typical home freezers sit near 0°F (-18°C); serving slightly warmer—around 6–10°F (-14 to -12°C) for hard-pack—improves scoopability. Pasteurizing custard bases to roughly 175–180°F (79–82°C) without boiling sets proteins safely; boiling risks curdling emulsions. Rapid freezing forms smaller ice crystals; slow freezing and partial thaw cycles grow crystals and feel icy. Total solids (fat + MSNF + sugar + stabilizers) set body; water-only bases freeze harder. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
    "sauceId": "white-gravy"
  }
};

export default function WhiteGravySouthern() {
  return <ScienceArticlePage spec={SPEC} />;
}
