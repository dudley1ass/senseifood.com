import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-needs-steam",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Needs Steam",
  "subtitle": "Steam delays crust set, improves oven spring, and influences gloss and ear formation.",
  "readTime": "8 min read",
  "emoji": "💨",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Steam keeps the dough surface flexible early in the bake so expansion is not trapped by a premature crust. It also gelatinizes starches on the surface for shine. Remove steam later to build crispness and color.",
  "intro": "Steam is the bridge between raw dough and finished loaf. Without it, crust polymerizes quickly, slashes do not open cleanly, and expansion tears in random weak spots. With too much steam forever, bread never browns. Professional ovens separate these phases; home bakers mimic them with Dutch ovens, trays, or spritz bottles. Steam keeps crust below ~300°F (149°C) surface dehydration briefly so loaves expand before hardening—classic hearth technique. Without steam, crust cracks irregularly and oven spring is reduced.",
  "sections": [
    {
      "heading": "Surface plasticity",
      "paragraphs": [
        "Water condenses on cold dough entering a hot oven, keeping the outer layer cooler briefly. That keeps extensibility while internal gas pressure climbs."
      ]
    },
    {
      "heading": "Starch gelatinization and gloss",
      "paragraphs": [
        "Moist heat helps starches swell on the surface, contributing to sheen on some breads."
      ]
    },
    {
      "heading": "When steam ends",
      "paragraphs": [
        "The second phase needs dry heat to caramelize and crisp. Vent lids; open dampers; pull trays."
      ],
      "tip": "Preheating a Dutch oven longer than needed can overheat the metal; balance preheat with safe handling."
    },
    {
      "heading": "Connect to debugging",
      "paragraphs": [
        "If your loaves blow out at the base, steam plus weak scoring may be interacting. Fix My Recipe still helps you verify whether the dough itself was unusually tight or wet."
      ]
    },
    {
      "heading": "How much and when",
      "paragraphs": [
        "First 5–15 minutes saturated surface; vent thereafter for color. Home methods: lidded Dutch oven, pan of lava rocks, or mist—each varies humidity.",
        "Too much steam entire bake yields soft, thick crust—balance with dry finish."
      ]
    },
    {
      "heading": "Science summary",
      "paragraphs": [
        "Water film increases heat transfer coefficient briefly and plasticizes starch surface—allows stretch."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why bread needs steam is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Bread Rises",
      "path": "/bread-science/why-bread-rises"
    },
    {
      "title": "How Yeast Works in Baking",
      "path": "/bread-science/how-yeast-works"
    }
  ],
  "faqs": [
    {
      "q": "Steam pan dry?",
      "a": "Preheat rocks with water ready—cold water shock drops oven temp."
    },
    {
      "q": "Every bread?",
      "a": "Soft sandwich loaves in pans often skip; artisan free-form needs it."
    }
  ]
};

export default function WhyBreadNeedsSteam() {
  return <ScienceArticlePage spec={SPEC} />;
}
