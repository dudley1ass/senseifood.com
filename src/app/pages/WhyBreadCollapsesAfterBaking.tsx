import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-collapses-after-baking",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Collapses After Baking",
  "subtitle": "Structure buckles when gluten is over-extended, proofing overshoots, or the crust cannot hold internal pressure.",
  "readTime": "8 min read",
  "emoji": "🥞",
  "fixRecipe": {
    "category": "bread",
    "problem": "wont-rise"
  },
  "quickAnswer": "Post-bake collapse often traces to over-proofed dough, weak gluten for the hydration used, or steam/oven spring that inflated the loaf faster than the crust could polymerize. Score deeply enough to control expansion and match proof time to dough strength.",
  "intro": "A loaf that looks heroic in the oven but sinks into a wrinkled top is a classic mismatch between gas production and structural integrity. Sometimes the collapse is visible out of the oven; sometimes it is subtle—a flattened dome and compressed crumb. Either way, the fix is to align fermentation, shaping tension, and scoring with the dough you actually have, not the dough you imagined. Structure must withstand steam pressure until the crust sets—typically as internal temp climbs through the 180–205°F (82–96°C) window. Over-proofed dough has exhausted gluten elasticity; the dome peaks then falls when crust cannot resist internal shrinkage as gas cools.",
  "sections": [
    {
      "heading": "Over-proofing and gluten fatigue",
      "paragraphs": [
        "As fermentation continues, gluten stretches and eventually weakens. Gas bubbles merge into fewer, larger pockets that rupture easily during oven spring. The loaf may mushroom sideways or deflate when cooling.",
        "Temperature swings amplify this: a long warm autolyse plus a hot kitchen can push a dough past its peak while you are not watching."
      ]
    },
    {
      "heading": "Insufficient surface tension",
      "paragraphs": [
        "Shaping creates a taut skin that helps the loaf expand upward. Slack shaping yields sideways spread and uneven oven spring, which later settles into a collapsed silhouette.",
        "Practice bench tension pulls without tearing the skin; if the dough tears, rest it five minutes and retry."
      ]
    },
    {
      "heading": "Scoring and steam",
      "paragraphs": [
        "Steam delays crust hardening so the loaf can expand. Without steam, crust sets early and expansion tears happen in unpredictable places. With steam but no score, pressure bursts the weakest seam.",
        "Scores are functional valves, not decoration. They should be deep enough for your dough strength—weak dough, shallower; strong dough, confident depth."
      ]
    },
    {
      "heading": "Debugging workflow",
      "paragraphs": [
        "If collapse correlates with very long proof, shorten bulk or final proof 15–25% next bake. If it correlates with slack dough, lower hydration slightly or add folds. Fix My Recipe can sanity-check whether your formula is unusually wet or low in structural flour for the style."
      ]
    },
    {
      "heading": "Oven spring window",
      "paragraphs": [
        "Maximum expansion often occurs in the first 5–10 minutes when crust is still flexible; too low oven temperature delays crust set and can yield lateral spread instead of upward spring.",
        "Steam in the first minutes keeps crust extensible; removing steam too late can trap excess moisture in the crumb."
      ]
    },
    {
      "heading": "Scoring depth",
      "paragraphs": [
        "Too shallow and the loaf bursts randomly; too deep can deflate. Aim for controlled expansion along the score line at 450–475°F (232–246°C) typical hearth temps."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why bread collapses after baking is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why did my sandwich loaf crater?",
      "a": "Often over-proof in the pan, or dough too soft for the pan height—center cannot support the dome."
    },
    {
      "q": "Collapsed only in center?",
      "a": "Often under-proofed surface vs over-proofed core mismatch—check shaping tension."
    },
    {
      "q": "Pan bread collapse?",
      "a": "Lid removal timing on pullman loaves matters—steam and pressure release."
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
  ]
};

export default function WhyBreadCollapsesAfterBaking() {
  return <ScienceArticlePage spec={SPEC} />;
}
