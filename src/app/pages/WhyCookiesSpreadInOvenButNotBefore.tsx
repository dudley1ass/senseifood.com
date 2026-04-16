import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-spread-in-oven-but-not-before",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Spread in the Oven But Not Before",
  "subtitle": "Cold fat, flour hydration, and delayed structure set explain the oven-only spread phase.",
  "readTime": "7 min read",
  "emoji": "🧊➡️🔥",
  "fixRecipe": {
    "category": "cookie",
    "problem": "spreads-too-much"
  },
  "quickAnswer": "Chilled dough holds solid fat crystals so room-temperature balls look tall; oven heat melts fat and releases free water, slackening dough and letting spread happen late. Flour also hydrates over time, changing viscosity.",
  "intro": "This pattern confuses people who expect dough to “look ready” on the sheet. Cookies are time-release systems: temperature, fat crystal state, and hydrated starch networks control when flow starts. Seeing no spread cold does not predict no spread hot. Spread requires fat phase transition—butter melts near 90–95°F (32–35°C) body-soft then fully liquefies in the oven—plus sugar dissolution lowering viscosity. Before bake, dough below fat melt stays structured; in-oven flow begins as temperature passes ~100°F (38°C) throughout the piece.",
  "sections": [
    {
      "heading": "Fat phase change",
      "paragraphs": [
        "Butter is a mix of fat crystals and water-in-fat emulsion. Cold keeps crystals solid; heat melts them, lowering viscosity so dough flows."
      ]
    },
    {
      "heading": "Hydration kinetics",
      "paragraphs": [
        "During chill, flour continues absorbing water. That changes how quickly the dough sets in the oven versus how much it flows early."
      ]
    },
    {
      "heading": "Leavening timing",
      "paragraphs": [
        "CO₂ from baking soda/powder expands when batter softens; if acid-base reactions start late, lift and spread coincide visually."
      ]
    },
    {
      "heading": "Debug spread deliberately",
      "paragraphs": [
        "If oven spread overshoots, cookie mode in Fix My Recipe checks sugar and butter-heavy ratios, and you pair that with one change: slightly more flour, shorter chill, or lower oven for slower set."
      ]
    },
    {
      "heading": "Oven heat transfer",
      "paragraphs": [
        "Edge cookies reach melt faster than center—differential spread in one tray is normal. Aluminum vs insulated sheets change bottom heat flux.",
        "Sugar type changes melt curve—more dissolved sugar flows earlier."
      ]
    },
    {
      "heading": "Leavening timing",
      "paragraphs": [
        "Baking soda releases with acid and heat; delayed spread can pair with late CO₂ puff after fat has flowed."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why cookies spread in the oven but not before is easier to act on when you anchor numbers instead of vibes. Cookie spread begins as butter phases soften near body temperature and fully mobilizes in the oven—edges often see higher heat first, so tray position and rotation matter. For chewy vs crisp targets, final internal moisture and surface dehydration differ: lower final moisture and more edge browning read “crisp,” while higher moisture and less Maillard read “chewy.” Chill dough near 38°F (3°C) to delay fat flow and reduce spread if needed. Sheet color changes bottom heat flux; light aluminum often gentler than dark nonstick for the same set temperature. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cookies Spread",
      "path": "/cookie-science/why-cookies-spread"
    },
    {
      "title": "Why Chilling Cookie Dough Matters",
      "path": "/cookie-science/why-chilling-cookie-dough-matters"
    }
  ],
  "faqs": [
    {
      "q": "Room temp butter effect?",
      "a": "More pre-melt on sheet—often more pre-spread before oven."
    },
    {
      "q": "Frozen dough disk?",
      "a": "Delays melt—less spread until thaw in oven."
    }
  ]
};

export default function WhyCookiesSpreadInOvenButNotBefore() {
  return <ScienceArticlePage spec={SPEC} />;
}
