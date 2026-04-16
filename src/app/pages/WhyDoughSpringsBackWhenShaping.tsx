import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-dough-springs-back-when-shaping",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Dough Springs Back When Shaping",
  "subtitle": "Elastic snap means gluten is tight—often under-relaxed or too strong for immediate shaping.",
  "readTime": "7 min read",
  "emoji": "↩️",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Spring-back during shaping is elastic gluten snapping shut. Rest the dough 10–20 minutes (bench rest) so gluten relaxes, or finish bulk fermentation if the dough is under-proofed and fighting you.",
  "intro": "There are two different “no” feelings in shaping: the dough that melts (slack) and the dough that fights (elastic). Spring-back is the second. It is not defiance; it is physics—stored elastic energy in protein networks that have not relaxed yet. Elastic springback is tight gluten not yet relaxed—gluten strands act like rubber bands. Resting dough pieces 10–20 minutes at room temperature allows viscous flow without losing gas.",
  "sections": [
    {
      "heading": "Bench rest",
      "paragraphs": [
        "After pre-shaping, gluten needs time to redistribute stress. Shaping immediately after dividing often yields rubber-ball behavior."
      ]
    },
    {
      "heading": "Under-fermented dough",
      "paragraphs": [
        "Immature dough is springy because fermentation has not yet softened the protein matrix. Let bulk go longer if volume is low and dough feels cold-tight."
      ]
    },
    {
      "heading": "Cold dough",
      "paragraphs": [
        "Chilled dough feels stiffer. Allow a short warm-up if ethical for your formula before final shaping."
      ]
    },
    {
      "heading": "Debug companion",
      "paragraphs": [
        "If spring-back pairs with dense crumb, you may be under-proofing globally. If spring-back pairs with collapse, you might be mixing timing signals—log temps and times and cross-check ratios in bread mode."
      ]
    },
    {
      "heading": "Relaxation temperature",
      "paragraphs": [
        "Warmer dough relaxes faster; cold dough from fridge needs longer bench rest before final shape.",
        "Over-strong mixing increases elastic memory—gentle handling after autolyse helps."
      ]
    },
    {
      "heading": "Divide and conquer",
      "paragraphs": [
        "Pre-shape rounds before batards to align gluten in stages—less fighting the dough."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why dough springs back when shaping is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
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
      "q": "Springback in pizza stretch?",
      "a": "Same physics—rest between stretches."
    },
    {
      "q": "Whole grain more spring?",
      "a": "Bran cuts strands—often less spring than white."
    }
  ]
};

export default function WhyDoughSpringsBackWhenShaping() {
  return <ScienceArticlePage spec={SPEC} />;
}
