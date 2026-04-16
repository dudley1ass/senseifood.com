import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-tastes-different-every-brew",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Tastes Different Every Brew",
  "subtitle": "Grinder retention, water, bloom, and human variance swamp “the same recipe.”",
  "readTime": "8 min read",
  "emoji": "🌀",
  "fixRecipe": {
    "category": "coffee",
    "problem": "general"
  },
  "quickAnswer": "Inconsistency is grinder steps, temperature drift, pour pattern, and stale vs fresh puck. Purge grinder, weigh inputs, use kettle with stable pour, and track water minerals.",
  "intro": "Coffee is more sensitive than most baking because you complete the “reaction” at service time. Small input noise becomes large sensory noise. Variance sources: grinder retention, water temp drift, pour pattern, bloom vigor, and bean age changing CO₂. Room humidity changes cooling rate of hot water in kettle between pours.",
  "sections": [
    {
      "heading": "Grinder purge and retention",
      "paragraphs": [
        "Yesterday’s grind setting mixes with today’s unless you discard a few grams."
      ]
    },
    {
      "heading": "Water as ingredient",
      "paragraphs": [
        "Filter bypass solids and alkalinity shift extraction. RO with no remineralization tastes different than tap."
      ]
    },
    {
      "heading": "Technique drift",
      "paragraphs": [
        "Pour height and spiral speed move agitation. Video yourself occasionally."
      ]
    },
    {
      "heading": "Debugger habit",
      "paragraphs": [
        "When taste swings, log three numbers: dose, yield or water, and time. Feed those into Fix My Recipe before changing two things at once."
      ]
    },
    {
      "heading": "Checklist",
      "paragraphs": [
        "Same dose to 0.1g, same water temp measured at pour spout, same pour cadence—remove variables systematically.",
        "Clean burrs—old fines change dose silently."
      ]
    },
    {
      "heading": "Bean state",
      "paragraphs": [
        "Days 4–14 post-roast often most stable; very fresh or very stale shifts extraction."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why coffee tastes different every brew is easier to act on when you anchor numbers instead of vibes. Water temperature for manual filter brewing is often discussed around 195–205°F (90–96°C) off boil, adjusting for roast and altitude—cooler water can under-extract acids while hotter water can over-extract bitter compounds. Espresso puck temperature interacts with pressure and flow: channeling produces mixed under/over pockets in one cup. Grind size changes surface area exponentially in practice—small grind steps move extraction more than large temperature jumps. Record dose, yield, time, and taste notes together; changing only one variable per session isolates cause. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "q": "Same recipe different baristas?",
      "a": "Human pour rate dominates in manual brew."
    },
    {
      "q": "Electric kettle variance?",
      "a": "Hold temp mode vs boil-then-wait changes first pour temp."
    }
  ]
};

export default function WhyCoffeeTastesDifferentEveryBrew() {
  return <ScienceArticlePage spec={SPEC} />;
}
