import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-pie-crust-falls-apart",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Pie Crust Falls Apart",
  "subtitle": "Not enough water, not enough cohesion, or too much fat weakens the matrix.",
  "readTime": "7 min read",
  "emoji": "🍂",
  "fixRecipe": {
    "category": "pie",
    "problem": "general"
  },
  "quickAnswer": "Short, crumbly dough that will not transfer to the pan needs slightly more water, gentler mixing, or a rest so moisture distributes. Extreme fat ratios can prevent any gluten continuity.",
  "intro": "Tender and fragile share a border. You want tender flakes, not sand. Falling apart signals insufficient continuous gluten network for handling—even if baked texture would have been fine. Structural integrity needs enough hydrated gluten to hold shape but not so much that toughness dominates—often 3–6% water by flour weight in very short doughs, highly sensitive. Overworking raises gluten and can paradoxically shrink or slough in layers.",
  "sections": [
    {
      "heading": "Hydration for cohesion",
      "paragraphs": [
        "Pie dough should come together with a squeeze but still look marbled. Totally dry crumb cannot sheet."
      ]
    },
    {
      "heading": "Fat pieces too small",
      "paragraphs": [
        "Over-processing butter removes discrete fat pockets needed for flakes and can yield mealy dough that fractures."
      ]
    },
    {
      "heading": "Handling",
      "paragraphs": [
        "Fold dough, do not knead like bread. Use bench scraper to fraisage if needed."
      ],
      "tip": "Roll between parchment for transfer instead of forcing a fragile round."
    },
    {
      "heading": "Tool support",
      "paragraphs": [
        "Pie problems in Fix My Recipe map to crust texture categories; compare your fat–flour ratio to norms while you adjust water by teaspoons."
      ]
    },
    {
      "heading": "Fat size distribution",
      "paragraphs": [
        "Pea-sized butter leaves voids; sand-texture shortens too much for transfer. Chill between steps.",
        "Blind bake with weights until set—steam puff can shatter unweighted."
      ]
    },
    {
      "heading": "Pan release",
      "paragraphs": [
        "Glass vs metal bend differently—support sides when moving."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why pie crust falls apart is easier to act on when you anchor numbers instead of vibes. Pie dough stays workable around 50–60°F (10–16°C); warmer butter smears, colder dough cracks. Blind-bake until the shell reaches golden where it contacts filling—pale bottoms often mean soggy interfaces even when fruit reads hot. Fruit fillings commonly need to exceed roughly 200°F (93°C) in the bubbling center for starch thickeners to fully activate, but edges can scorch above 350°F (177°C) local surface—foil shields help. Glass and ceramic pans change bottom heat paths versus metal; adjust rack and time, not only temperature. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "title": "Why Pie Crust Is Flaky",
      "path": "/pie-science/why-pie-crust-is-flaky"
    },
    {
      "title": "Why Pie Crust Shrinks",
      "path": "/pie-science/why-pie-crust-shrinks"
    }
  ],
  "faqs": [
    {
      "q": "Gluten-free crust?",
      "a": "Binders like xanthan replace gluten—different handling."
    },
    {
      "q": "Cracks when folding?",
      "a": "Dough too dry—spritz water sparingly."
    }
  ]
};

export default function WhyPieCrustFallsApart() {
  return <ScienceArticlePage spec={SPEC} />;
}
