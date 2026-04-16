import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-are-too-sweet",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Are Too Sweet",
  "subtitle": "Frosting stacks on sweet crumb; salt and acid shrink perceived sweetness.",
  "readTime": "7 min read",
  "emoji": "🍯",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "Reduce sugar slightly in crumb or frosting—not both at once—add salt, coffee or cocoa bitterness, citrus, or yogurt tang. Ensure adequate browning for complexity.",
  "intro": "Sweetness sums across layers. A balanced crumb under cloying buttercream still reads “too sweet.” Debug the stack, not only the sponge. Human sweetness perception drops when bitter, salty, and sour receptors activate—classic taste interaction. A cake at 20% sugar by baker’s percentage can taste sweeter next to unsweetened whipped cream than next to espresso buttercream because context changes the brain’s integration, not only the sugar grams.",
  "sections": [
    {
      "heading": "Layer accounting",
      "paragraphs": [
        "Tally sugar from simple syrup brushes, fillings, and frosting before blaming the cake."
      ]
    },
    {
      "heading": "Contrast",
      "paragraphs": [
        "Salt is the cheapest flavor fix. Acid from fruit curd cuts sugar perception."
      ]
    },
    {
      "heading": "Style goals",
      "paragraphs": [
        "American buttercream is sucrose-forward; consider meringue styles if you need less cloying finish."
      ]
    },
    {
      "heading": "Debugger",
      "paragraphs": [
        "Enter components separately if you test half batches; Fix My Recipe helps keep sugar changes structurally safe."
      ]
    },
    {
      "heading": "Solids, dissolved sugar, and “sweet hits”",
      "paragraphs": [
        "Simple syrup soaks add dissolved sucrose directly to crumb surfaces—very high perceived sweetness per gram compared with sugar baked into structure. Brushing warm layers drives syrup deeper; chilling slows perception slightly but does not remove sugar.",
        "Frostings near room temperature (65–72°F / 18–22°C) taste sweeter than ice-cold frosting because aroma volatiles move faster—temperature is a hidden variable in tastings."
      ]
    },
    {
      "heading": "Structural limits when cutting sugar",
      "paragraphs": [
        "Sugar holds moisture and interferes with gluten; aggressive cuts change texture. Reduce frosting first, or swap part granulated for glucose or trimoline where recipes allow—small % changes with less perceived sweetness sometimes."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why cakes are too sweet is easier to act on when you anchor numbers instead of vibes. Butter cakes commonly finish between 200–210°F (93–99°C) at the geometric center, though chocolate and very moist formulas can mislead thermometers—pair probe results with spring-back and clean skewer. Edge-to-center gradients matter: a reading “done” only at the top center can still leave wet bands near the pan floor—check an inch above the bottom in thick layers. Convection and dark pans shift effective heat; if edges race, lower the set temperature about 25°F (14°C) and extend time. Cooling until crumb structure stabilizes—often below 100°F (38°C) internally for large layers—reduces tearing and sticky knife drag. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cakes Taste Dry",
      "path": "/cake-science/why-cakes-taste-dry"
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
      "q": "Why does my cake taste sweeter the second day?",
      "a": "Moisture equilibrates and aromas meld; sometimes sugar perception increases as dryness is less distracting—store airtight."
    },
    {
      "q": "Coffee in chocolate cake—how much helps?",
      "a": "Even a teaspoon of instant coffee deepens bitterness enough to balance sweetness for many palates."
    }
  ]
};

export default function WhyCakesAreTooSweet() {
  return <ScienceArticlePage spec={SPEC} />;
}
