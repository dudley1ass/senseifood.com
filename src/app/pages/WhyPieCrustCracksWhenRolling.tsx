import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-pie-crust-cracks-when-rolling",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Pie Crust Cracks When Rolling",
  "subtitle": "Temperature, hydration, and gluten brittleness make dough chip instead of stretch.",
  "readTime": "7 min read",
  "emoji": "💔",
  "fixRecipe": {
    "category": "pie",
    "problem": "tough-crust"
  },
  "quickAnswer": "Cracking while rolling usually means dough is too cold and brittle, too dry, or over-worked. Let it temper slightly, patch with wet finger, or rehydrate with a few drops of water worked in gently.",
  "intro": "Pie dough is a fat-laminated paste pretending to be a solid. Too cold, it shatters like chocolate; too dry, it lacks cohesion; too warm, it sticks. Cracks during rolling sit in the brittle zone. Pie dough is a fat-laminated starch matrix—too cold (~35°F / 2°C) and fat shatters; too warm (~65°F / 18°C) and gluten forms tough sheets that tear. Ideal laminate often rolled around 50–60°F (10–16°C).",
  "sections": [
    {
      "heading": "Thermal window",
      "paragraphs": [
        "Fridge-cold dough needs a few minutes at room temperature to become pliable without turning greasy."
      ]
    },
    {
      "heading": "Hydration balance",
      "paragraphs": [
        "Dry edges crack first. Even absorption varies by flour; a teaspoon of water can change roll behavior."
      ]
    },
    {
      "heading": "Gluten and toughness",
      "paragraphs": [
        "Over-mixed dough is elastic and also prone to tearing. Rests relax gluten; do not skip them."
      ]
    },
    {
      "heading": "Pie mode debugging",
      "paragraphs": [
        "Fix My Recipe pie category highlights fat–flour balance extremes. If dough always feels dry, ratios may sit low on water for your flour."
      ]
    },
    {
      "heading": "Water and gluten",
      "paragraphs": [
        "Minimal water reduces gluten but risks brittleness—balance with vinegar or vodka tricks for tenderness without excess gluten.",
        "Rest between rolls relaxes gluten elasticity—reduces springback tears."
      ]
    },
    {
      "heading": "Technique",
      "paragraphs": [
        "Roll from center outward evenly; quarter-turns keep round shape without overworking one axis."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why pie crust cracks when rolling is easier to act on when you anchor numbers instead of vibes. Pie dough stays workable around 50–60°F (10–16°C); warmer butter smears, colder dough cracks. Blind-bake until the shell reaches golden where it contacts filling—pale bottoms often mean soggy interfaces even when fruit reads hot. Fruit fillings commonly need to exceed roughly 200°F (93°C) in the bubbling center for starch thickeners to fully activate, but edges can scorch above 350°F (177°C) local surface—foil shields help. Glass and ceramic pans change bottom heat paths versus metal; adjust rack and time, not only temperature. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "title": "Why Pie Crust Gets Tough",
      "path": "/pie-science/why-pie-crust-gets-tough"
    },
    {
      "title": "Butter vs Shortening in Pie Crust",
      "path": "/pie-science/butter-vs-shortening-in-crust"
    }
  ],
  "faqs": [
    {
      "q": "Food processor vs hand?",
      "a": "Processor risks over-cutting fat too fine—less flake."
    },
    {
      "q": "Whole wheat crust?",
      "a": "Bran cuts gluten—different crack behavior."
    }
  ]
};

export default function WhyPieCrustCracksWhenRolling() {
  return <ScienceArticlePage spec={SPEC} />;
}
