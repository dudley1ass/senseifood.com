import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-is-too-chewy",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Is Too Chewy",
  "subtitle": "Chew comes from gluten network density, low moisture, and long mixing—dial each back for a softer bite.",
  "readTime": "7 min read",
  "emoji": "😬",
  "fixRecipe": {
    "category": "bread",
    "problem": "dense"
  },
  "quickAnswer": "Excess chew usually means strong gluten (high protein flour, long mix), under-hydration, or under-baking leaving a tough core. Try shorter mix, slightly higher hydration, or a small fat or milk addition for tenderness.",
  "intro": "Chew is not a moral failing; it is rheology. A resilient crumb springs back because gluten and starch form a continuous network. Some breads—bagels, high-gluten sandwich loaves—celebrate that. When your dinner rolls feel like exercise equipment, you want to soften the network or add plasticizers like fat. Chew correlates with high gluten development, low hydration relative to protein, and long mixing—sometimes desirable in NY-style bagels, less so in sandwich bread. Temperature of water during mix affects gluten relaxation; warmer dough extensible, cooler tighter.",
  "sections": [
    {
      "heading": "Protein and mixing",
      "paragraphs": [
        "Bread flour in a soft-roll formula is a common chew upgrade you did not ask for. Protein links into tighter chains that survive chewing longer.",
        "Long machine mixing aligns gluten aggressively; hand mixing or short mix plus folds can yield a more relaxed crumb."
      ]
    },
    {
      "heading": "Moisture and fat",
      "paragraphs": [
        "Water plasticizes gluten; dry doughs feel tougher. Fat shortens gluten strands by coating flour particles, yielding tenderness—why brioche chews differently than baguette dough."
      ]
    },
    {
      "heading": "Bake and thickness",
      "paragraphs": [
        "Thin crusts with thick, under-set interiors can read oddly chewy at the center. Verify internal temperature and even browning."
      ]
    },
    {
      "heading": "Tune with Fix My Recipe",
      "paragraphs": [
        "Enter your formula to see whether fat and water sit low relative to flour compared with similar breads. One structured change—switching part of the liquid to milk, or swapping a fraction of bread flour to all-purpose—often moves chew more than mystery additives."
      ]
    },
    {
      "heading": "Protein and hydration math",
      "paragraphs": [
        "Bread flour at identical hydration feels chewier than AP because more gluten can form. Reducing mix time or adding autolyse softens perception without always lowering protein.",
        "Whole wheat bran cuts gluten strands—can paradoxically feel gritty-chewy; different fix than white flour chew."
      ]
    },
    {
      "heading": "Bake color and Maillard",
      "paragraphs": [
        "Dark crust adds bitter-chewy edge perception; lower final temp or shorter bake if interior is already 205°F (96°C)."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why bread is too chewy is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "q": "Chewy vs tough?",
      "a": "Tough tears; chewy springs—different levers."
    },
    {
      "q": "Overnight cold ferment chew?",
      "a": "Acidity strengthens gluten feel; shorter warm bulk can soften."
    }
  ]
};

export default function WhyBreadIsTooChewy() {
  return <ScienceArticlePage spec={SPEC} />;
}
