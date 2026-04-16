import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-tastes-over-extracted",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Tastes Over-Extracted",
  "subtitle": "Dry bitterness, astringency, and hollow finish when too much solid dissolves.",
  "readTime": "8 min read",
  "emoji": "⚗️",
  "fixRecipe": {
    "category": "coffee",
    "problem": "bitter"
  },
  "quickAnswer": "Over-extraction pulls more bitter, woody, and astringent compounds. Coarsen grind, shorten time, lower temperature slightly, or reduce agitation—pick the variable that matches your brew method.",
  "intro": "Extraction is a curve: acids and sugars come early; heavier bitters later. Pushing too far along that curve is over-extraction in the cup, even if your TDS meter says something else. Over-extraction pulls late compounds—tannins, bitter alkaloids—past pleasant balance, often when water contact time is too long or temperature too high. Espresso shots past ~35–40s for same dose often trend woody; filter past ~4:30 can gain dryness.",
  "sections": [
    {
      "heading": "The flavor curve",
      "paragraphs": [
        "Espresso and pourover differ in mechanics but share the idea of contact time × surface area × temperature."
      ]
    },
    {
      "heading": "Grind as the main dial",
      "paragraphs": [
        "Finer grind increases surface area and usually pushes extraction upward. Coarsening is the first fix for harsh, dry cups when time is fixed."
      ]
    },
    {
      "heading": "Temperature and roast",
      "paragraphs": [
        "Hotter water extracts faster; dark roasts have more soluble ash and can taste harsh sooner."
      ]
    },
    {
      "heading": "Debugger alignment",
      "paragraphs": [
        "Coffee mode links bitter and burnt-taste clusters to practical levers. Use it after you log grind setting, time, and ratio."
      ]
    },
    {
      "heading": "Time, temperature, grind",
      "paragraphs": [
        "Finer grind increases surface area—same time yields higher extraction. Raise temperature in 1°F steps or coarsen slightly to reduce harshness.",
        "Brew ratio 1:15 vs 1:17 changes strength at same extraction—confusing diagnosis without scale."
      ]
    },
    {
      "heading": "Dark roast sensitivity",
      "paragraphs": [
        "Soluble mass is higher—easier to over-extract quickly; shorter ratios help."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why coffee tastes over-extracted is easier to act on when you anchor numbers instead of vibes. Water temperature for manual filter brewing is often discussed around 195–205°F (90–96°C) off boil, adjusting for roast and altitude—cooler water can under-extract acids while hotter water can over-extract bitter compounds. Espresso puck temperature interacts with pressure and flow: channeling produces mixed under/over pockets in one cup. Grind size changes surface area exponentially in practice—small grind steps move extraction more than large temperature jumps. Record dose, yield, time, and taste notes together; changing only one variable per session isolates cause. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    },
    {
      "heading": "Extra variables that swing results",
      "paragraphs": [
        "Grinder retention can silently change dose: purge stale grounds after idle. Water TDS around 75–150 ppm is a common specialty-coffee starting band; extremely soft or hard municipal water shifts extraction without you touching grind. For espresso, track yield in grams alongside time—ratio changes strength independent of extraction."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Coffee Tastes Bitter",
      "path": "/coffee-science/why-coffee-tastes-bitter"
    },
    {
      "title": "Coffee Extraction Science",
      "path": "/coffee-science/coffee-extraction-science"
    },
    {
      "title": "How to Debug Your Coffee",
      "path": "/coffee-science/how-to-debug-your-coffee"
    }
  ],
  "faqs": [
    {
      "q": "Bitter vs over-extracted?",
      "a": "Overlap; TDS measurement clarifies."
    },
    {
      "q": "Stirring pour-over?",
      "a": "Can even extraction or cause fines migration—technique dependent."
    }
  ]
};

export default function WhyCoffeeTastesOverExtracted() {
  return <ScienceArticlePage spec={SPEC} />;
}
