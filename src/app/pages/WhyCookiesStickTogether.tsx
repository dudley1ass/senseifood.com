import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-stick-together",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Stick Together",
  "subtitle": "Thermal mass, steam, and cooling phase fuse edges when spacing or timing fails.",
  "readTime": "6 min read",
  "emoji": "🫂",
  "fixRecipe": {
    "category": "cookie",
    "problem": "spreads-too-much"
  },
  "quickAnswer": "Cookies weld when spread places edges in contact while still soft and steam-hot. Increase spacing, use cooler dough, smaller scoop, or lower temp for slower spread; cool fully before stacking.",
  "intro": "Kiss cookies can be intentional; fused mega-cookies usually are not. The fix is geometry and heat transfer, not a mystery “nonstick” spray alone. Contact while above glass transition temperature for sugar-fat matrix (~ room temp for soft batches) welds cookies; cooling below ~95°F (35°C) surface reduces tack. Moisture migration from under-baked centers also glues neighbors.",
  "sections": [
    {
      "heading": "Contact while plastic",
      "paragraphs": [
        "Sugar–fat matrices stay viscous until cooled. Touching edges fuse like hot caramel."
      ]
    },
    {
      "heading": "Pan loading",
      "paragraphs": [
        "Crowded pans trap steam, slowing crust set and encouraging lateral flow."
      ],
      "tip": "One sheet per rack position for airflow unless your recipe specifies otherwise."
    },
    {
      "heading": "Spread prediction",
      "paragraphs": [
        "If dough always reaches neighbors, reduce scoop size or increase spacing rather than fighting geometry each bake."
      ]
    },
    {
      "heading": "Ratios",
      "paragraphs": [
        "Fix My Recipe flags high sugar and butter relative to flour—classic spread drivers. Fix ratios before buying a larger pan."
      ]
    },
    {
      "heading": "Cooling protocol",
      "paragraphs": [
        "Space 2 inches on sheet; move to wire rack before fully cool so bases do not steam-weld to pan neighbors.",
        "Layer storage with parchment between when still slightly warm."
      ]
    },
    {
      "heading": "Humidity and chew",
      "paragraphs": [
        "Chewy cookies with hygroscopic sugar pull water from air—stickier stacks in humid climates."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why cookies stick together is easier to act on when you anchor numbers instead of vibes. Cookie spread begins as butter phases soften near body temperature and fully mobilizes in the oven—edges often see higher heat first, so tray position and rotation matter. For chewy vs crisp targets, final internal moisture and surface dehydration differ: lower final moisture and more edge browning read “crisp,” while higher moisture and less Maillard read “chewy.” Chill dough near 38°F (3°C) to delay fat flow and reduce spread if needed. Sheet color changes bottom heat flux; light aluminum often gentler than dark nonstick for the same set temperature. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    },
    {
      "heading": "Extra variables that swing results",
      "paragraphs": [
        "Pan insulation and batch size alter edge vs center: bake one test tray with a single dough batch before scaling. Dough temperature entering the oven—if you scoop at 50°F (10°C) vs 70°F (21°C)—changes spread even at the same set temperature."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cookies Spread",
      "path": "/cookie-science/why-cookies-spread"
    },
    {
      "title": "Why Cookies Spread Unevenly",
      "path": "/cookie-science/why-cookies-spread-unevenly"
    }
  ],
  "faqs": [
    {
      "q": "Stick in jar?",
      "a": "Vacuum cooling then seal; warm cookies sweat."
    },
    {
      "q": "Chocolate bloom sticky?",
      "a": "Different issue—fat/sugar bloom on surface."
    }
  ]
};

export default function WhyCookiesStickTogether() {
  return <ScienceArticlePage spec={SPEC} />;
}
