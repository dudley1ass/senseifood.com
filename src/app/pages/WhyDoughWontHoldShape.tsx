import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-dough-wont-hold-shape",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Dough Won't Hold Shape",
  "subtitle": "Slack dough is about strength, proof state, and hydration relative to protein—not “bad yeast.”",
  "readTime": "8 min read",
  "emoji": "🫓",
  "fixRecipe": {
    "category": "bread",
    "problem": "dense"
  },
  "quickAnswer": "Dough spreads when gluten is too weak for the hydration used, when it is over-proofed and relaxed, or when shaping skipped surface tension. Strengthen with folds, moderate hydration, or shorter proof.",
  "intro": "Shape memory in bread is elastic energy stored in gluten. If that network is slack, the dough obeys gravity and becomes a puddle. Fixing shape is about aligning time, temperature, and strength so the loaf you place in the oven is the loaf you meant to bake. Shape retention needs gluten tension and surface dryness; over-hydrated or over-proofed dough flows. Bench rest at 68–75°F (20–24°C) allows relaxation without collapse—too cold and it springs back, too warm and it spreads.",
  "sections": [
    {
      "heading": "Hydration beyond flour strength",
      "paragraphs": [
        "Social media hydration numbers are not universal. Your flour may not support 78% for a tall batard without careful technique."
      ]
    },
    {
      "heading": "Proofing past the peak",
      "paragraphs": [
        "An over-proofed dough relaxes; shaping tension dissipates within minutes. The poke test and volume cues matter more than the clock."
      ]
    },
    {
      "heading": "Shaping skills",
      "paragraphs": [
        "Tension pulls align outer gluten strands like a rubber band. Under-shaped loaves flatten. Practice with lower hydration dough first."
      ],
      "tip": "Cold final proof (retard) firms butter-rich doughs for easier scoring."
    },
    {
      "heading": "Structured experiments",
      "paragraphs": [
        "Change hydration or proof time—not both at once. Use Fix My Recipe to see whether your formula already sits at the extreme edge of typical strength bands."
      ]
    },
    {
      "heading": "Strength building",
      "paragraphs": [
        "Letter folds during bulk build structure without aggressive mixing. Final shaping should create surface tension—skin seals expansion.",
        "Banneton flour supports wet dough; too little and dough sticks; too much and seam slides."
      ]
    },
    {
      "heading": "Timing",
      "paragraphs": [
        "Shape after sufficient strength exists—under-developed dough tears when tensioned."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why dough won't hold shape is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "q": "High hydration ciabatta?",
      "a": "Expected slack—different shaping tools."
    },
    {
      "q": "Pizza dough floppy?",
      "a": "Warm dough and gluten relaxation—cold re-tighten."
    }
  ]
};

export default function WhyDoughWontHoldShape() {
  return <ScienceArticlePage spec={SPEC} />;
}
