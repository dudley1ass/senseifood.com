import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-is-gummy-inside",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Is Gummy Inside",
  "subtitle": "Gelatinized starch needs heat and time to set; under-baking and cutting too soon are classic culprits.",
  "readTime": "7 min read",
  "emoji": "🫠",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Gummy interior usually means the loaf did not reach a high enough internal temperature for long enough, or you sliced while steam was still redistributing moisture inside the crumb. Aim for roughly 190–210°F internal depending on style, and cool completely before cutting.",
  "intro": "Gumminess is a texture word for moist starch that feels tacky and clings to the knife. It is not the same as tenderness: tender crumb releases cleanly; gummy crumb smears. Bakers often blame hydration, but the timeline of heat penetrating the loaf matters just as much as the formula on paper. Gelatinization of starch in wheat flour is largely complete in the 185–205°F (85–96°C) internal range for lean bread; gummy often means you exited the oven before that band was uniform, or sliced when interior was still 120–140°F (49–60°C) and steam-soft.",
  "sections": [
    {
      "heading": "Under-baking and carry-over cooking",
      "paragraphs": [
        "Bread sets from the outside in. A dark crust can form while the center is still below the temperature where starch fully gelatinizes and proteins set into a stable matrix. That semi-set center feels wet and dense even after cooling.",
        "Use a thermometer in the thickest part. Lean wheat doughs often finish near 200–208°F; enriched breads may read a little lower but still need to cross the threshold where the crumb no longer looks glassy."
      ]
    },
    {
      "heading": "Cooling and starch retrogradation",
      "paragraphs": [
        "Right out of the oven, starch holds trapped steam. Cutting immediately drives steam out of the crumb unevenly and leaves a tacky layer on the blade. Cooling on a rack for at least an hour (large loaves longer) lets moisture equilibrate.",
        "If you need warm bread for guests, compromise with a smaller roll format where heat penetrates evenly, rather than hacking a hot boule."
      ],
      "tip": "If crust is dark but interior is gummy, lower the temperature 25°F and extend bake time next time—depth of heat matters more than surface color alone."
    },
    {
      "heading": "Formula factors",
      "paragraphs": [
        "Extremely wet doughs are more forgiving for open crumb but easier to under-bake because the crumb looks open while still moist. Sugar and dairy increase browning, which again can mislead your eye.",
        "Sourdough with very high acidity can interact with starch texture; if flavor is sharp and crumb is wet, verify fermentation balance and bake-through, not just “more flour.”"
      ]
    },
    {
      "heading": "Next steps with tools",
      "paragraphs": [
        "Log your bake end temperature and cooling time alongside photos. Fix My Recipe helps you compare hydration and enrichment levels to typical profiles so you know whether to adjust the oven story or the dough story first."
      ]
    },
    {
      "heading": "Carry-over and cooling",
      "paragraphs": [
        "Loaves can rise 2–5°F after removal from residual heat; however, they cannot “finish baking” on the rack if pulled far under temp—carry-over is not a substitute for reaching set.",
        "Cool at least to 90°F (32°C) internal before slicing large loaves if you want clean slices; warm bread smears and feels wet even when correctly baked."
      ]
    },
    {
      "heading": "Enzymes and long autolyse",
      "paragraphs": [
        "Excessive protease activity from very long cold autolyse can degrade gluten enough to yield a sticky crumb—different from under-bake but still gummy to the tooth."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why bread is gummy inside is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "q": "Thermometer calibration?",
      "a": "Ice water should read 32°F (0°C); boiling water near 212°F (100°C) at sea level—adjust expectations at altitude."
    },
    {
      "q": "SD vs yeast gumminess?",
      "a": "Sourdough acidity can interact with starch texture; still check internal temp first."
    }
  ]
};

export default function WhyBreadIsGummyInside() {
  return <ScienceArticlePage spec={SPEC} />;
}
