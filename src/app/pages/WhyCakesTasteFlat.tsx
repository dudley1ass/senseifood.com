import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-taste-flat",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Taste Flat (Flavor Layering Failure)",
  "subtitle": "Maillard timing, salt, acid, and aromatic volatility stack—or cancel—depending on bake curve and cooling.",
  "readTime": "8 min read",
  "level": "Flavor & heat curve",
  "emoji": "😐",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "Flat flavor is rarely one missing spice. It is usually weak browning (time/temperature), low salt, no acid contrast, or aromas that baked off because they were added too early or cooled under a tight seal that trapped steam.",
  "intro": "Flavor in cake is layered: base sweetness, browned notes from the crust, volatile aromatics from extracts and zest, and the finishing perception after swallowing. If your thermal sequence mutes browning or drives volatiles out too early, the crumb reads as “sweet cardboard.”",
  "sections": [
    {
      "heading": "Time and temperature create depth",
      "paragraphs": [
        "Pale cakes often taste flat because Maillard and caramel notes are under-developed. A slightly longer crust phase at controlled temperature (not a blast that dries the interior) builds complexity."
      ]
    },
    {
      "heading": "Sequence of volatile ingredients",
      "paragraphs": [
        "Alcohols and citrus oils flash off quickly. Adding them at the very end of mixing—or even brushing a cooled cake—preserves top notes that oven heat would erase."
      ]
    },
    {
      "heading": "Holding and cooling change perception",
      "paragraphs": [
        "Trapping steam right after bake with an airtight lid can dull aroma perception. Vent until just warm, then wrap for moisture retention."
      ]
    },
    {
      "heading": "Salt and acid as amplifiers",
      "paragraphs": [
        "Salt lifts sweetness perception; a trace of acid (buttermilk, yogurt, a pinch of citrate) separates sugar monotony. Measure salt by weight; tiny acid moves matter late in the formula."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cakes Brown",
      "path": "/cake-science/why-cakes-brown"
    },
    {
      "title": "Why Cakes Are Too Sweet",
      "path": "/cake-science/why-cakes-are-too-sweet"
    },
    {
      "title": "How to Debug Cake Problems",
      "path": "/cake-science/how-to-debug-cake-problems"
    },
    {
      "title": "Why Cakes Turn Gummy",
      "path": "/cake-science/why-cakes-turn-gummy"
    }
  ]
};

export default function WhyCakesTasteFlat() {
  return <ScienceArticlePage spec={SPEC} />;
}
