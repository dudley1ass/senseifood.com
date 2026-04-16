import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-crust-is-too-hard",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Crust Is Too Hard",
  "subtitle": "Steam, sugar, oven heat, and bake time build crust thickness and hardness.",
  "readTime": "7 min read",
  "emoji": "🪨",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Hard crusts come from long, dry, hot baking; high sugar or dairy browning; or lack of moisture in the oven early in the bake. Steam the first third, then vent; tent foil if the crust races ahead of the crumb.",
  "intro": "Crust hardness is the combination of dehydrated surface layers and Maillard polymers that stiffen as moisture leaves. Artisan bakers chase shatter; sandwich lovers want peelable softness. The same dough can lean either way depending on how you manage the oven’s first ten minutes. Crust hardness rises with surface dehydration above ~300°F (149°C) local surface temp during bake and with low humidity ovens. Steam early keeps crust plastic longer; dry heat the whole time yields thick leathery crusts.",
  "sections": [
    {
      "heading": "Oven environment",
      "paragraphs": [
        "Steam keeps the surface flexible so the loaf can expand and delays excessive early browning. When steam is removed or exhausted, the crust dries and hardens.",
        "A Dutch oven traps enough steam for many home bakers; open bakes need a lidded tray of water or careful spritzing."
      ]
    },
    {
      "heading": "Sugar, milk, and fat",
      "paragraphs": [
        "Sugars caramelize; proteins brown. Enriched doughs color faster, which tempts shorter bakes—watch the interior, not only the glow."
      ],
      "tip": "If crust is armor-plated but crumb is pale, lower temperature 15–25°F and bake longer."
    },
    {
      "heading": "Storage effects",
      "paragraphs": [
        "Crust softens in plastic as moisture migrates from crumb to surface; it hardens again if over-dried. Choose storage to match how you like to eat the heel."
      ]
    },
    {
      "heading": "Debug ratios",
      "paragraphs": [
        "Fix My Recipe highlights enrichment levels; very sweet doughs need gentler heat strategies. Pair ratio insight with a simple oven log: time under steam, final temp, and internal temperature."
      ]
    },
    {
      "heading": "Temperature and time at surface",
      "paragraphs": [
        "Convection accelerates crust formation—reduce temp or time. Dutch ovens trap steam then remove lid to brown—sequence controls crust thickness.",
        "Egg washes and milk washes brown at different rates; egg proteins set firm."
      ]
    },
    {
      "heading": "Cooling",
      "paragraphs": [
        "Cooling in a steamy environment (tent with towel) softens crust slightly by moisture redistribution—does not fix over-thick crust from bake."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why bread crust is too hard is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "q": "Baguette should be hard?",
      "a": "Yes for style—compare to your goal, not soft sandwich bread."
    },
    {
      "q": "Microwave soften?",
      "a": "Steams surface briefly; stales faster after."
    }
  ]
};

export default function WhyBreadCrustIsTooHard() {
  return <ScienceArticlePage spec={SPEC} />;
}
