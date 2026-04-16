import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-pie-crust-burns-before-filling-cooks",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Pie Crust Burns Before Filling Cooks",
  "subtitle": "Edges see more heat than centers; shield, lower temperature, and set filling faster.",
  "readTime": "7 min read",
  "emoji": "⚠️",
  "fixRecipe": {
    "category": "pie",
    "problem": "general"
  },
  "quickAnswer": "Rim and top crust brown faster than deep filling sets. Use foil or silicone shields, bake on a lower rack with stone heat, or start hotter then finish gently—match recipe style.",
  "intro": "Pies are two thermal problems in one shell: pastry sets quickly while interior fluid needs time to gel. The crust always wins the race unless you engineer the handicap. Edge crust sees higher heat flux than protected center under lattice or full top—edges can exceed 350°F (177°C) while center filling lingers at 180°F (82°C). Foil shields reduce radiant heat to rim.",
  "sections": [
    {
      "heading": "Geometry of heat",
      "paragraphs": [
        "Edges are thin and exposed; centers are insulated by filling volume."
      ]
    },
    {
      "heading": "Sugar and dairy",
      "paragraphs": [
        "Egg and sugar in custard pies brown quickly; foil buys minutes for interior set."
      ]
    },
    {
      "heading": "Fruit juices",
      "paragraphs": [
        "Water-heavy fruit needs time to boil off enough to thicken; premature high heat chars lattice first."
      ],
      "tip": "Tent with loose foil dome, not tight plastic-like wrap that steams the crust soggy."
    },
    {
      "heading": "Holistic fixes",
      "paragraphs": [
        "Fix My Recipe can highlight unusually high sugar fillings that brown aggressively; pair ratio insight with foil discipline."
      ]
    },
    {
      "heading": "Temperature strategy",
      "paragraphs": [
        "Start high 425°F (218°C) for set then reduce to 350°F (177°C) for filling finish—classic double-temp approach.",
        "Place pie on preheated stone for bottom set while covering rim with foil ring."
      ]
    },
    {
      "heading": "Filling thickness",
      "paragraphs": [
        "Thicker fillings need longer center time—protect edges entire bake."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why pie crust burns before filling cooks is easier to act on when you anchor numbers instead of vibes. Pie dough stays workable around 50–60°F (10–16°C); warmer butter smears, colder dough cracks. Blind-bake until the shell reaches golden where it contacts filling—pale bottoms often mean soggy interfaces even when fruit reads hot. Fruit fillings commonly need to exceed roughly 200°F (93°C) in the bubbling center for starch thickeners to fully activate, but edges can scorch above 350°F (177°C) local surface—foil shields help. Glass and ceramic pans change bottom heat paths versus metal; adjust rack and time, not only temperature. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "title": "Why Pie Crust Gets Soggy",
      "path": "/pie-science/why-pie-crust-gets-soggy"
    },
    {
      "title": "Why Pie Filling Bubbles Over",
      "path": "/pie-science/why-pie-filling-bubbles-over"
    }
  ],
  "faqs": [
    {
      "q": "Custard curdle risk?",
      "a": "Low slow finish after hot shell set—different curve than fruit."
    },
    {
      "q": "Convection?",
      "a": "Browns faster—reduce 25°F or shield earlier."
    }
  ]
};

export default function WhyPieCrustBurnsBeforeFillingCooks() {
  return <ScienceArticlePage spec={SPEC} />;
}
