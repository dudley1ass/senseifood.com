import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-tastes-hollow",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Tastes Hollow",
  "subtitle": "Low solubles, channeling, and stale beans produce empty mid-palate cups.",
  "readTime": "8 min read",
  "emoji": "🕳️",
  "fixRecipe": {
    "category": "coffee",
    "problem": "weak"
  },
  "quickAnswer": "“Hollow” usually means thin strength without pleasant acidity—under-dose, fast shot, channeling, or stale coffee. Increase effective extraction yield carefully or fix grinder and prep; distinguish from true sour under-extraction.",
  "intro": "Hollow is a metaphor tasters use for missing mid-body and sweetness: the coffee is wet, but nothing sings. It sits next to weak and sour in the diagnostic tree, which is why fixing it requires separating strength from extraction quality. “Hollow” often describes thin mouthfeel with sour-bitter imbalance—extraction yield in the 16–18% range can taste weak in TDS while still showing acids, common when grind is too coarse or water bypasses the bed. Ideal shot temperatures often sit 195–205°F (90–96°C) at puck for espresso; filter brews peak differently by method.",
  "sections": [
    {
      "heading": "Strength vs extraction",
      "paragraphs": [
        "Strength is concentration; extraction is what percentage of the grounds dissolved. You can have high strength but hollow flavor if you only dissolved easy early compounds, or low strength with decent balance if ratios are off."
      ]
    },
    {
      "heading": "Channeling and uneven flow",
      "paragraphs": [
        "Water finds paths of least resistance, under-extracting some puck zones and over-extracting others. The cup can taste simultaneously sharp and empty."
      ]
    },
    {
      "heading": "Staling and roast",
      "paragraphs": [
        "Very stale coffee loses aromatics that fill the mid-palate, leaving a flat wireframe where flavor used to be."
      ],
      "tip": "Taste at a fixed recipe with one variable changed—dose, yield, or grind—before buying new gear."
    },
    {
      "heading": "Fix My Recipe coffee mode",
      "paragraphs": [
        "Walk extraction-balance and weak profiles with your numbers in hand. The debugger frames ratio thinking the same way as baking: change one lever, observe, log."
      ]
    },
    {
      "heading": "Strength vs extraction",
      "paragraphs": [
        "Total dissolved solids (roughly related to strength) can be low while extraction percentage is high—bitter and weak simultaneously. Fix ratio before chasing finer grind.",
        "Channeling in espresso creates local over-extraction and local under-extraction—hollow, confusing cups."
      ]
    },
    {
      "heading": "Water chemistry",
      "paragraphs": [
        "Very soft water under-extracts aromatics; very hard can flatten acids—both read “flat” or hollow."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why coffee tastes hollow is easier to act on when you anchor numbers instead of vibes. Water temperature for manual filter brewing is often discussed around 195–205°F (90–96°C) off boil, adjusting for roast and altitude—cooler water can under-extract acids while hotter water can over-extract bitter compounds. Espresso puck temperature interacts with pressure and flow: channeling produces mixed under/over pockets in one cup. Grind size changes surface area exponentially in practice—small grind steps move extraction more than large temperature jumps. Record dose, yield, time, and taste notes together; changing only one variable per session isolates cause. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
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
      "q": "Light roast hollow?",
      "a": "High acid low solubles—try hotter water or finer grind within balance."
    },
    {
      "q": "Paper filter hollow?",
      "a": "Bypass or grind adjustment—method specific."
    }
  ]
};

export default function WhyCoffeeTastesHollow() {
  return <ScienceArticlePage spec={SPEC} />;
}
