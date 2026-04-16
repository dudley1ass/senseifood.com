import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-pie-filling-bubbles-over",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Pie Filling Bubbles Over",
  "subtitle": "Steam, expansion, and under-set starch send filling over the rim during bake.",
  "readTime": "7 min read",
  "emoji": "🌋",
  "fixRecipe": {
    "category": "pie",
    "problem": "general"
  },
  "quickAnswer": "Bubbling over is boil-over: filling heats, expands, and boils before the crust edge contains it. Deep dish, foil ring, venting, and correct starch/thickener prevent mess and soggy rims.",
  "intro": "Pie filling is a viscous fluid becoming a gel. While still fluid, it pumps steam and swells. If volume exceeds containment, it exits—usually over the prettiest crimp you made. Boiling point of sucrose solutions rises with concentration—fruit fillings can superheat past 212°F (100°C) in thick viscous pockets, then erupt through vents. Steam expansion plus starch gel swelling adds volume suddenly.",
  "sections": [
    {
      "heading": "Volume and depth",
      "paragraphs": [
        "Overfilled shells lack headspace. Fruit releases juice; cream fillings foam."
      ]
    },
    {
      "heading": "Thickener timing",
      "paragraphs": [
        "Too little starch yields runny, energetic boiling. Precook fruit fillings when recipes call for it."
      ]
    },
    {
      "heading": "Heat shielding",
      "paragraphs": [
        "Foil on the rim slows crust darkening so you can bake long enough to set filling without burning."
      ]
    },
    {
      "heading": "Systems",
      "paragraphs": [
        "Fix My Recipe helps you think about sugar and liquid relative to solids for fruit fillings—runny filling and boil-over often correlate."
      ]
    },
    {
      "heading": "Vents and lattice",
      "paragraphs": [
        "Enough vent area prevents pressure build-up; egg wash sealing edges too well traps steam.",
        "Foil ring on crust edge reduces over-brown while center finishes to safe 195–200°F (91–93°C) for thickened fruit."
      ]
    },
    {
      "heading": "Thickener choice",
      "paragraphs": [
        "Cornstarch vs tapioca vs flour change burst behavior—tapioca can clear but boil vigorously."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why pie filling bubbles over is easier to act on when you anchor numbers instead of vibes. Pie dough stays workable around 50–60°F (10–16°C); warmer butter smears, colder dough cracks. Blind-bake until the shell reaches golden where it contacts filling—pale bottoms often mean soggy interfaces even when fruit reads hot. Fruit fillings commonly need to exceed roughly 200°F (93°C) in the bubbling center for starch thickeners to fully activate, but edges can scorch above 350°F (177°C) local surface—foil shields help. Glass and ceramic pans change bottom heat paths versus metal; adjust rack and time, not only temperature. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    },
    {
      "heading": "Extra variables that swing results",
      "paragraphs": [
        "Egg washes brown at different rates: whole egg vs yolk vs milk—pick one per series of tests. Docking and pie weights change steam escape during blind bake; note weight amount and bake minutes. Fruit pH affects starch set; very acid fillings may need adjusted thickener percentages from generic charts."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Pie Filling Is Runny",
      "path": "/pie-science/why-pie-filling-is-runny"
    },
    {
      "title": "Why Pie Crust Gets Soggy",
      "path": "/pie-science/why-pie-crust-gets-soggy"
    }
  ],
  "faqs": [
    {
      "q": "Pumpkin boil-over?",
      "a": "Custard fillings swell—shallow pan helps."
    },
    {
      "q": "Slurry lumps?",
      "a": "Lumps cause local steam pockets—whisk smooth."
    }
  ]
};

export default function WhyPieFillingBubblesOver() {
  return <ScienceArticlePage spec={SPEC} />;
}
