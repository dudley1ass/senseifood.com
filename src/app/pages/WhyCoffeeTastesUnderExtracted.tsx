import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-tastes-under-extracted",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Tastes Under-Extracted",
  "subtitle": "Sour, salty, and thin cups when the brew stops too early on the curve.",
  "readTime": "8 min read",
  "emoji": "🍋",
  "fixRecipe": {
    "category": "coffee",
    "problem": "sour"
  },
  "quickAnswer": "Under-extracted coffee keeps a disproportionate share of early acids and lacks balancing sweetness. Finer grind, longer time, higher temperature within safe bounds, or better saturation fix it.",
  "intro": "Under-extraction is not the same as “light roast bright.” It is an incomplete dissolution problem: the balance point never arrived. Under-extraction stops before sugars and pleasant acids fully dissolve—often sour, salty, vegetal. Water below ~195°F (90°C) for many methods under-solubilizes; grinding too coarse shortens contact inefficiently.",
  "sections": [
    {
      "heading": "Acids first",
      "paragraphs": [
        "Chlorogenic and organic acids dissolve readily; sugars and melanoidins need more work."
      ]
    },
    {
      "heading": "Channeling masquerading as under",
      "paragraphs": [
        "Some liquid bypasses the bed, tasting weak-sour even when part of the puck is fine."
      ]
    },
    {
      "heading": "Dose and ratio",
      "paragraphs": [
        "Very high brew ratios can taste dilute and sour-ish if extraction yield stays low."
      ]
    },
    {
      "heading": "Use the tool",
      "paragraphs": [
        "Fix My Recipe’s sour and weak pathways list method-specific checks; pair with a simple tasting journal."
      ]
    },
    {
      "heading": "Yield window",
      "paragraphs": [
        "Aim for balanced cup by adjusting grind first in small steps, then temperature ±2°F, then ratio.",
        "Bloom phase matters in pour-over—insufficient wetting leaves dry pockets."
      ]
    },
    {
      "heading": "Freshness and CO₂",
      "paragraphs": [
        "Very fresh espresso off-gasses—first seconds blond; need adjusted yield timing."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why coffee tastes under-extracted is easier to act on when you anchor numbers instead of vibes. Water temperature for manual filter brewing is often discussed around 195–205°F (90–96°C) off boil, adjusting for roast and altitude—cooler water can under-extract acids while hotter water can over-extract bitter compounds. Espresso puck temperature interacts with pressure and flow: channeling produces mixed under/over pockets in one cup. Grind size changes surface area exponentially in practice—small grind steps move extraction more than large temperature jumps. Record dose, yield, time, and taste notes together; changing only one variable per session isolates cause. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "title": "Why Coffee Tastes Sour",
      "path": "/coffee-science/why-coffee-tastes-sour"
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
      "q": "Sour always under?",
      "a": "Often, but also roast level and water alkalinity interact."
    },
    {
      "q": "Cold brew under?",
      "a": "Time compensates—12h vs 18h changes extraction curve."
    }
  ]
};

export default function WhyCoffeeTastesUnderExtracted() {
  return <ScienceArticlePage spec={SPEC} />;
}
