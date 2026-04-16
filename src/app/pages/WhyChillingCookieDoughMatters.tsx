import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-chilling-cookie-dough-matters",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Chilling Cookie Dough Matters",
  "subtitle": "Solid fat, hydrated flour, and relaxed gluten change spread, thickness, and flavor.",
  "readTime": "8 min read",
  "emoji": "❄️",
  "fixRecipe": {
    "category": "cookie",
    "problem": "spreads-too-much"
  },
  "quickAnswer": "Chilling firms butter, lets flour hydrate, and can reduce spread while concentrating flavor as dough dries slightly at the surface. It is not mandatory for all recipes but is a powerful knob for high-butter formulas.",
  "intro": "Chill is mislabeled as a “trick.” It is slow chemistry and physics. The dough you scoop immediately is not the same material after resting cold—even if ingredients on paper never changed. Chilling firms fat, slows gluten relaxation, and allows sugar to hydrate more fully—changing spread kinetics. Dough at 38°F (3°C) enters the oven with less pre-melt than 70°F (21°C) dough, often reducing spread several millimeters per cookie.",
  "sections": [
    {
      "heading": "Fat rheology",
      "paragraphs": [
        "Cold butter crystals limit flow until the oven provides melt energy. That delays spread so edges set before the center fully flattens, yielding thicker cookies."
      ]
    },
    {
      "heading": "Hydration and gluten",
      "paragraphs": [
        "Rest allows even water distribution and some gluten relaxation, changing chew and surface cracking patterns."
      ]
    },
    {
      "heading": "Flavor",
      "paragraphs": [
        "Longer rests can increase perceived complexity as flour enzymes snip starches and proteins, freeing sugars for browning."
      ]
    },
    {
      "heading": "Pair with the debugger",
      "paragraphs": [
        "If chilling fixes spread but creates dryness, your sugar–flour balance may be aggressive. Cookie mode helps you see the trade space."
      ]
    },
    {
      "heading": "Time and temperature",
      "paragraphs": [
        "30–60 minutes chills surface; 24–72 hours develops flavor via limited fermentation and full sugar equilibrium.",
        "Resting also reduces sticky handling—easier scoop consistency."
      ]
    },
    {
      "heading": "Hydration of flour",
      "paragraphs": [
        "Even hydration reduces free water flash-off in first oven minutes—slightly thicker result."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why chilling cookie dough matters is easier to act on when you anchor numbers instead of vibes. Cookie spread begins as butter phases soften near body temperature and fully mobilizes in the oven—edges often see higher heat first, so tray position and rotation matter. For chewy vs crisp targets, final internal moisture and surface dehydration differ: lower final moisture and more edge browning read “crisp,” while higher moisture and less Maillard read “chewy.” Chill dough near 38°F (3°C) to delay fat flow and reduce spread if needed. Sheet color changes bottom heat flux; light aluminum often gentler than dark nonstick for the same set temperature. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cookies Spread Too Much",
      "path": "/cookie-science/why-cookies-spread-too-much"
    },
    {
      "title": "Why Cookies Flatten",
      "path": "/cookie-science/why-cookies-flatten"
    }
  ],
  "faqs": [
    {
      "q": "Freeze instead of chill?",
      "a": "Longer delay to bake—thaw slightly for even bake."
    },
    {
      "q": "Skip for thin crisps?",
      "a": "Sometimes yes—style dependent."
    }
  ]
};

export default function WhyChillingCookieDoughMatters() {
  return <ScienceArticlePage spec={SPEC} />;
}
