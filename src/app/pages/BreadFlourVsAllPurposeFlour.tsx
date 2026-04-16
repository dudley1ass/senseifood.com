import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "bread-flour-vs-all-purpose-flour",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Bread Flour vs All-Purpose Flour",
  "subtitle": "Protein drives gluten potential; choose flour for the structure your bread needs.",
  "readTime": "8 min read",
  "emoji": "🌾",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Bread flour has higher protein for stronger gluten networks—better for chewy, high-volume lean breads. All-purpose is more versatile for mixed enrichments and softer crumbs. Brand matters as much as label.",
  "intro": "Flour labels are marketing plus regulation plus crop variance. “Bread flour” usually means more gluten-forming protein than all-purpose from the same mill, but two bread flours from different brands can diverge more than bread vs AP within one brand. Bakers think in protein and absorption, not only bag names. Protein roughly 12–14% for bread flour vs 10–12% for AP in US brands—more gluten potential and water absorption. Ash content and wheat variety also shift extensibility vs elasticity.",
  "sections": [
    {
      "heading": "Protein and mixing tolerance",
      "paragraphs": [
        "Higher protein absorbs more water and withstands longer mixing, supporting open crumb in wet doughs."
      ]
    },
    {
      "heading": "When AP is better",
      "paragraphs": [
        "Soft rolls, some enriched doughs, and tender sandwich breads often prefer moderate protein to avoid excessive chew."
      ]
    },
    {
      "heading": "Ash and milling",
      "paragraphs": [
        "Extraction level changes flavor and water needs even when protein looks similar on paper."
      ],
      "tip": "Keep a notebook page per flour brand with hydration sweet spot from your kitchen."
    },
    {
      "heading": "Quantify in Fix My Recipe",
      "paragraphs": [
        "When you enter flour weight and hydration, bread mode contextualizes whether you are pushing the envelope for the flour class you chose."
      ]
    },
    {
      "heading": "When to choose which",
      "paragraphs": [
        "High hydration artisan: bread flour or blended. Tender sandwich: AP or blend. Cake and pastry need low protein—wrong flour entirely.",
        "Measure protein from label when possible; brands vary."
      ]
    },
    {
      "heading": "Mixing implications",
      "paragraphs": [
        "Higher protein tolerates longer mix to windowpane; AP reaches same strength faster but lower ceiling."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on bread flour vs all-purpose flour is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "q": "00 pizza flour?",
      "a": "Different grind and protein—specialized for pizza, not generic bread sub."
    },
    {
      "q": "Whole wheat protein number?",
      "a": "Includes bran weight—does not equal white gluten behavior."
    }
  ]
};

export default function BreadFlourVsAllPurposeFlour() {
  return <ScienceArticlePage spec={SPEC} />;
}
