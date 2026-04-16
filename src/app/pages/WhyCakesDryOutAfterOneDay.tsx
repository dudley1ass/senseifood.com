import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-dry-out-after-one-day",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Dry Out After One Day",
  "subtitle": "Starch retrogradation and moisture migration to air or frosting steal tenderness.",
  "readTime": "8 min read",
  "emoji": "📅",
  "fixRecipe": {
    "category": "cake",
    "problem": "dry"
  },
  "quickAnswer": "Next-day dryness is mostly staling: amylopectin reorganizes and frees water that then evaporates. Simple syrup, fat choice, airtight storage, and freezing slow it.",
  "intro": "Cakes do not only “lose moisture”; they reorganize how water is bound. Understanding staling separates hopeless recipes from normal physics you can manage. Staling is fastest between roughly 32–50°F (0–10°C)—refrigerator territory—because starch retrogrades quickly while water mobility is still meaningful. Freezing near 0°F (-18°C) slows both retrogradation and microbial growth, though ice crystals can damage cells if thawed carelessly.",
  "sections": [
    {
      "heading": "Retrogradation",
      "paragraphs": [
        "Cooked starch crystals slowly reorder; texture feels firmer even at same total water."
      ]
    },
    {
      "heading": "Storage",
      "paragraphs": [
        "Cut faces expose crumb; refrigerator accelerates perceived staling for many cakes though mold risk drops."
      ],
      "tip": "Press plastic directly to cut surfaces; room temp for butter cakes when safe."
    },
    {
      "heading": "Formulation",
      "paragraphs": [
        "Sugar and fat retain moisture; oil cakes often stale slower than pure butter cakes."
      ]
    },
    {
      "heading": "Debugger",
      "paragraphs": [
        "Compare sugar–fat–liquid bands; if you are lean, staling wins fast."
      ]
    },
    {
      "heading": "Time and temperature storage map",
      "paragraphs": [
        "Room temperature (68–72°F / 20–22°C) for butter cakes in airtight domes often beats fridge for texture for 1–2 days if food safety allows. High-sugar/high-acid items resist mold longer than dairy-heavy fillings alone.",
        "Simple syrup (sugar–water brushed on layers) increases free moisture and can mask firming crumb—classic pastry trick without changing the bake itself."
      ]
    },
    {
      "heading": "Fat type and staling rate",
      "paragraphs": [
        "Oil interferes less with starch crystallization long-term than solid butter crystals—oil cakes often taste softer day two. Emulsifiers in commercial mixes play the same role at micro scale."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why cakes dry out after one day is easier to act on when you anchor numbers instead of vibes. Butter cakes commonly finish between 200–210°F (93–99°C) at the geometric center, though chocolate and very moist formulas can mislead thermometers—pair probe results with spring-back and clean skewer. Edge-to-center gradients matter: a reading “done” only at the top center can still leave wet bands near the pan floor—check an inch above the bottom in thick layers. Convection and dark pans shift effective heat; if edges race, lower the set temperature about 25°F (14°C) and extend time. Cooling until crumb structure stabilizes—often below 100°F (38°C) internally for large layers—reduces tearing and sticky knife drag. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cakes Dry Out",
      "path": "/cake-science/why-cakes-dry-out"
    },
    {
      "title": "How to Debug Cake Problems",
      "path": "/cake-science/how-to-debug-cake-problems"
    },
    {
      "title": "Why Cakes Are Dense",
      "path": "/cake-science/why-cakes-are-dense"
    }
  ],
  "faqs": [
    {
      "q": "Does bread staling science equal cake staling?",
      "a": "Same starch retrogradation theme; cakes have more sugar and fat modifying the curve."
    },
    {
      "q": "Microwave to revive?",
      "a": "Brief warming gelatinizes starch temporarily—good for a slice, not a long fix."
    }
  ]
};

export default function WhyCakesDryOutAfterOneDay() {
  return <ScienceArticlePage spec={SPEC} />;
}
