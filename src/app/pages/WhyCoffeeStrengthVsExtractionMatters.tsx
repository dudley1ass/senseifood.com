import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-strength-vs-extraction-matters",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Strength vs Extraction Matters",
  "subtitle": "TDS and yield describe different axes; confusing them sends fixes in wrong directions.",
  "readTime": "9 min read",
  "emoji": "⚖️",
  "fixRecipe": {
    "category": "coffee",
    "problem": "extraction-balance"
  },
  "quickAnswer": "Strength is how concentrated the cup is (brew ratio, bypass water). Extraction is what fraction of grounds mass became beverage. Strong can be under-extracted; weak can be over-extracted—taste proves it.",
  "intro": "This is the single most valuable mental model in coffee troubleshooting. Baking has parallel ideas: hydration vs mixing intensity. Once you separate axes, adjustments stop fighting each other. Strength (TDS) is concentration; extraction is percentage of grounds dissolved. You can brew 1:10 weak-tasting if under-extracted, or 1:18 strong-tasting if over-extracted—two independent sliders.",
  "sections": [
    {
      "heading": "Definitions that behave",
      "paragraphs": [
        "Strength moves with dose relative to water and final beverage mass. Extraction moves with grind, time, temperature, and agitation."
      ]
    },
    {
      "heading": "Common mistakes",
      "paragraphs": [
        "Fixing sour by adding hot water weakens strength without fixing extraction. Fixing bitterness only by adding water hides harshness but wastes solubles."
      ]
    },
    {
      "heading": "Practical workflow",
      "paragraphs": [
        "First hit a reasonable ratio band for your method, then adjust grind/time to place flavor. Revisit ratio only after extraction sits in a sane window."
      ],
      "tip": "Write two columns in your notes: “strength changes” vs “extraction changes.”"
    },
    {
      "heading": "SenseiFood alignment",
      "paragraphs": [
        "Coffee mode’s extraction-balance entry is built for this dichotomy. Baking users can practice the same discipline in Fix My Recipe across categories."
      ]
    },
    {
      "heading": "Dialing metaphor",
      "paragraphs": [
        "Grind/time mainly moves extraction; ratio mainly moves strength—first principles for troubleshooting.",
        "Ideal cup often targets ~18–22% extraction and ~1.2–1.4% TDS for filter—ranges vary by preference."
      ]
    },
    {
      "heading": "Practical workflow",
      "paragraphs": [
        "Fix extraction window, then adjust ratio for mouthfeel—re-measure when changing roast."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why coffee strength vs extraction matters is easier to act on when you anchor numbers instead of vibes. Water temperature for manual filter brewing is often discussed around 195–205°F (90–96°C) off boil, adjusting for roast and altitude—cooler water can under-extract acids while hotter water can over-extract bitter compounds. Espresso puck temperature interacts with pressure and flow: channeling produces mixed under/over pockets in one cup. Grind size changes surface area exponentially in practice—small grind steps move extraction more than large temperature jumps. Record dose, yield, time, and taste notes together; changing only one variable per session isolates cause. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "q": "Refractometer needed?",
      "a": "Helpful not mandatory—taste with structured checklist works."
    },
    {
      "q": "Espresso TDS?",
      "a": "Higher range—compare to yield and time, not filter numbers."
    }
  ]
};

export default function WhyCoffeeStrengthVsExtractionMatters() {
  return <ScienceArticlePage spec={SPEC} />;
}
