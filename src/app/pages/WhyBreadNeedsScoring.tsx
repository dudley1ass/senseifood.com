import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-needs-scoring",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Needs Scoring",
  "subtitle": "Scores channel expansion so the crust tears predictably instead of randomly.",
  "readTime": "7 min read",
  "emoji": "✂️",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Scoring creates a weak line where pressure escapes during oven spring. Without it, loaves burst at seams or blow out at the base. Depth and angle interact with dough strength and steam.",
  "intro": "Bread skin is not decorative packaging; it is a stressed membrane holding pressure. A score is a relief valve engineered into that membrane. Artisan ears are pretty side effects of correct physics, not the primary function. Scores control where dough tears under tension as internal pressure rises—typically 15–25 psi equivalent stress in small pockets—so the loaf expands predictably instead of blowing out weak seams.",
  "sections": [
    {
      "heading": "Controlled failure",
      "paragraphs": [
        "Materials science calls this designing a failure plane. You choose where the dough opens so the rest of the surface stays intact."
      ]
    },
    {
      "heading": "Strength matching",
      "paragraphs": [
        "Weak dough: shallow scores or it tears. Strong dough: confident depth and angle to lift an ear."
      ]
    },
    {
      "heading": "Pan bread",
      "paragraphs": [
        "Sandwich loaves sometimes score for tension relief; sometimes the pan edge guides expansion. Know your formula."
      ],
      "tip": "Lame blades dull; replace or strop so you cut, not drag."
    },
    {
      "heading": "Holistic view",
      "paragraphs": [
        "If scoring never opens, suspect surface dryness, under-steam, or dough that was already over-proofed and fragile. Ratios from Fix My Recipe help separate dough issues from blade issues."
      ]
    },
    {
      "heading": "Depth and angle",
      "paragraphs": [
        "Shallow scores for batards open ears; grigne forms where lip peels. Depth ~¼–½ inch depending on hydration.",
        "Cold retarded dough scores cleaner than warm sticky dough—chill briefly if needed."
      ]
    },
    {
      "heading": "Pattern and expansion",
      "paragraphs": [
        "Multiple scores distribute expansion on very wet dough; single slash for stiff dough."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why bread needs scoring is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "q": "Score after loading?",
      "a": "Score right before oven—delay risks sticking closed."
    },
    {
      "q": "Lame vs knife?",
      "a": "Curved lame creates flap; straight cuts differ."
    }
  ]
};

export default function WhyBreadNeedsScoring() {
  return <ScienceArticlePage spec={SPEC} />;
}
