import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-turn-out-different-each-batch",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Turn Out Different Each Batch",
  "subtitle": "Temperature paths, measurement error, and mixer variance swamp tiny “feel” differences.",
  "readTime": "8 min read",
  "emoji": "🎲",
  "fixRecipe": {
    "category": "cookie",
    "problem": "general"
  },
  "quickAnswer": "Batch variance is usually butter temperature, flour measurement, oven preheat quality, and pan temperature—not fate. Weigh everything, sheet pan temperature, and log oven thermometer + time-to-set.",
  "intro": "Humans underestimate noise in home baking. Two batches that “felt the same” can diverge because butter was 58°F once and 68°F another time, or because the second sheet went onto a hot pan. Reliability is a systems problem: grams, thermometers, and written notes. Repeatability needs controlled dough temperature (ideally 65–70°F / 18–21°C when scooping), consistent scoop size, and oven verification—many home ovens cycle ±25°F around setpoint affecting spread and browning.",
  "sections": [
    {
      "heading": "Ingredient state",
      "paragraphs": [
        "Butter and egg temperature change emulsion behavior and spread. Flour packs in cups. Even “the same” brand can vary seasonally."
      ]
    },
    {
      "heading": "Equipment state",
      "paragraphs": [
        "Dark pans vs light pans, convection on/off, rack height, and whether the oven fully recovered between sheets all move outcomes."
      ],
      "tip": "Cool pans between batches with a cold-water rinse and towel dry for consistent starting temperature."
    },
    {
      "heading": "Mixing variance",
      "paragraphs": [
        "Creaming for three vs six minutes changes aeration. Use timer and visual cues (pale, fluffy) every time."
      ]
    },
    {
      "heading": "Fix My Recipe as a batch log",
      "paragraphs": [
        "Enter grams each bake. When something drifts, you have a frozen record instead of memory. Pair with photos of dough balls pre-bake."
      ]
    },
    {
      "heading": "Measurements and tools",
      "paragraphs": [
        "Gram scales for flour and sugar remove the largest variance. Spooned cups vary 10–15% mass.",
        "Same rack position and preheat stabilization (thermometer, not beep) matter."
      ]
    },
    {
      "heading": "Butter and mixing",
      "paragraphs": [
        "Creaming time changes air cell count—timer helps. Butter temp affects emulsion before flour."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why cookies turn out different each batch is easier to act on when you anchor numbers instead of vibes. Cookie spread begins as butter phases soften near body temperature and fully mobilizes in the oven—edges often see higher heat first, so tray position and rotation matter. For chewy vs crisp targets, final internal moisture and surface dehydration differ: lower final moisture and more edge browning read “crisp,” while higher moisture and less Maillard read “chewy.” Chill dough near 38°F (3°C) to delay fat flow and reduce spread if needed. Sheet color changes bottom heat flux; light aluminum often gentler than dark nonstick for the same set temperature. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "related": [
    {
      "title": "How to Debug Cookie Batch Issues",
      "path": "/cookie-science/how-to-debug-cookie-batch-issues"
    },
    {
      "title": "Fix Recipes One Variable at a Time",
      "path": "/baking-science/fix-recipes-one-variable-at-a-time"
    }
  ],
  "faqs": [
    {
      "q": "Humidity day difference?",
      "a": "Flour absorbs moisture—slightly less flour or shorter bake sometimes."
    },
    {
      "q": "Dark sheet variance?",
      "a": "Swap to light or reduce temp 25°F for same timing."
    }
  ]
};

export default function WhyCookiesTurnOutDifferentEachBatch() {
  return <ScienceArticlePage spec={SPEC} />;
}
