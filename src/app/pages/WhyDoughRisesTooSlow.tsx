import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-dough-rises-too-slow",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Dough Rises Too Slow",
  "subtitle": "Cold, tired yeast, salt errors, and extreme sweet or rich doughs stretch timelines.",
  "readTime": "7 min read",
  "emoji": "🐢",
  "fixRecipe": {
    "category": "bread",
    "problem": "wont-rise"
  },
  "quickAnswer": "Slow rise is often cold dough, weak yeast, or too much salt. Warm the environment gently, verify yeast, and weigh salt. Enriched doughs legitimately take longer—plan for it.",
  "intro": "Impatience makes every minute feel like failure, but slow is not automatically wrong. The skill is distinguishing healthy slow from broken slow: the first yields flavor; the second yields lunch plans ruined. Slow rise below 65°F (18°C) for sourdough or cold kitchen can stretch bulk past 6 hours without being “wrong”—but dead yeast or salt errors mimic slowness. Target 76–78°F (24–26°C) for predictable 2–3 hour bulk in many recipes.",
  "sections": [
    {
      "heading": "Temperature floor",
      "paragraphs": [
        "Below roughly 50°F, yeast activity is minimal for many strains; dough sits. Use a proofer, oven with light on, or longer timeline."
      ]
    },
    {
      "heading": "Yeast and salt",
      "paragraphs": [
        "Old yeast and salt slips are the classic duo. Always verify with a foam test when in doubt."
      ]
    },
    {
      "heading": "Heavy enrichments",
      "paragraphs": [
        "Eggs, butter, and sugar change osmolarity and structure; fermentation crawls. This is expected, not a sign to dump in more yeast mid-bulk without thinking."
      ],
      "tip": "Preferment or autolyse can jump-start sluggish doughs."
    },
    {
      "heading": "Sanity check ratios",
      "paragraphs": [
        "Bread mode in Fix My Recipe highlights unusually high salt or low yeast for your style. Use it before you randomly double yeast and overshoot the next bake."
      ]
    },
    {
      "heading": "Vitality checks",
      "paragraphs": [
        "Bloom yeast in 100–110°F (38–43°C) water with pinch sugar—foam in 10 minutes or replace.",
        "Sourdough starter should double predictably at room temp—refresh if flat after 8 hours."
      ]
    },
    {
      "heading": "Inhibition",
      "paragraphs": [
        "Too much salt or spice (clove, cinnamon) can slow yeast—check weights."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why dough rises too slow is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "q": "Cold water shock?",
      "a": "Fridge-cold mix slows hours—use lukewarm liquids in winter."
    },
    {
      "q": "Old flour?",
      "a": "Rancid fat can inhibit—smell flour bag."
    }
  ]
};

export default function WhyDoughRisesTooSlow() {
  return <ScienceArticlePage spec={SPEC} />;
}
