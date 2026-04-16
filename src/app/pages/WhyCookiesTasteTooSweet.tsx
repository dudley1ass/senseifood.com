import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-taste-too-sweet",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Taste Too Sweet",
  "subtitle": "Sugar load, salt balance, browning, and acid all set perceived sweetness—not just cup measurements.",
  "readTime": "7 min read",
  "emoji": "🍬",
  "fixRecipe": {
    "category": "cookie",
    "problem": "general"
  },
  "quickAnswer": "Cookies taste cloying when sucrose dominates without salt, acid, or bitter notes from browning to frame it. Reduce sugar slightly, add salt, brown butter, or a trace of acid; verify bake for real Maillard, not pale sugar.",
  "intro": "Sweetness is contrast. A cookie that reads “too sweet” on paper may actually be under-salted, under-baked for browning, or missing the tiny bitter and caramel compounds that make sugar taste like dessert instead of syrup. This guide walks the sensory stack so you adjust the right lever. Perceived sweetness spikes when sucrose concentration on the tongue is high and bitter/salt balance is low—typical around 68–72°F (20–22°C) serving temp for dough. Browned cookies show less “raw sugar” perception than pale ones because Maillard products add complexity.",
  "sections": [
    {
      "heading": "Salt as a frame",
      "paragraphs": [
        "Salt suppresses perceived sweetness slightly while increasing overall flavor intensity. Many home recipes under-salt; a small bump (especially fine salt distributed evenly) can make the same sugar feel less aggressive.",
        "Weigh salt. Volume measures of coarse vs fine salt scatter wildly."
      ]
    },
    {
      "heading": "Browning and bitterness (the good kind)",
      "paragraphs": [
        "Maillard products add complexity that balances sucrose. Pale, thick cookies with white sugar can taste one-note. A longer bake at moderate heat, brown sugar, or milk powder can deepen flavor without adding sucrose."
      ],
      "tip": "Try 5–10% sugar reduction paired with one extra minute of bake for color—often sweeter on paper, less cloying in the mouth."
    },
    {
      "heading": "Acid and dairy",
      "paragraphs": [
        "A touch of cream of tartar, a little yogurt, or cultured butter can brighten perception. Fat coats the tongue and rounds harsh edges."
      ]
    },
    {
      "heading": "Use Fix My Recipe on the ratio",
      "paragraphs": [
        "Cookie mode compares sugar, flour, fat, and salt bands. If you are above typical sugar for your target texture, the debugger suggests where to trade sugar for brown sugar, or how salt sits relative to sugar."
      ]
    },
    {
      "heading": "Sugar chemistry and bake color",
      "paragraphs": [
        "Invert sugar from corn syrup or honey tastes sweeter at equal weight to some palates because fructose is perceived sweeter than sucrose—recipe swaps are not 1:1 sensory.",
        "Salt at 0.3–0.5% flour weight often corrects cloying in test batches—measure grams."
      ]
    },
    {
      "heading": "Chilling and sugar dissolution",
      "paragraphs": [
        "Chilled dough dissolves sugar less before bake, changing spread and surface caramelization—sweetness perception interacts with texture."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why cookies taste too sweet is easier to act on when you anchor numbers instead of vibes. Cookie spread begins as butter phases soften near body temperature and fully mobilizes in the oven—edges often see higher heat first, so tray position and rotation matter. For chewy vs crisp targets, final internal moisture and surface dehydration differ: lower final moisture and more edge browning read “crisp,” while higher moisture and less Maillard read “chewy.” Chill dough near 38°F (3°C) to delay fat flow and reduce spread if needed. Sheet color changes bottom heat flux; light aluminum often gentler than dark nonstick for the same set temperature. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Will cutting sugar ruin spread?",
      "a": "Often slightly; compensate with a bit more brown sugar or tweak butter temp and chill, testing one variable at a time."
    },
    {
      "q": "European butter cookies sweeter?",
      "a": "Higher butterfat can carry sweetness differently—compare by weight."
    },
    {
      "q": "Stevia swap?",
      "a": "Bulking and browning differ—expect texture change."
    }
  ],
  "related": [
    {
      "title": "Brown Sugar vs White Sugar",
      "path": "/cookie-science/brown-sugar-vs-white-sugar"
    },
    {
      "title": "Why Cookies Taste Bland",
      "path": "/cookie-science/why-cookies-taste-bland"
    }
  ]
};

export default function WhyCookiesTasteTooSweet() {
  return <ScienceArticlePage spec={SPEC} />;
}
