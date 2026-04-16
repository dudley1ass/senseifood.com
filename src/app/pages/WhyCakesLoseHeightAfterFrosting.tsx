import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-lose-height-after-frosting",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Lose Height After Frosting",
  "subtitle": "Compression, temperature shock, and moisture migration from frosting into a delicate crumb.",
  "readTime": "8 min read",
  "level": "Assembly mechanics",
  "emoji": "📉",
  "fixRecipe": {
    "category": "cake",
    "problem": "collapse"
  },
  "quickAnswer": "Height drops when soft layers compress under heavy or warm frosting, or when syrup soaks and collapses cell walls. Chill layers, use boards for support, and match frosting temperature to crumb strength.",
  "intro": "Frosting is load. Even soft buttercream exerts normal force when spread. If the crumb is warm, under-set, or very aerated, that load crushes structure. Height loss is as much mechanics as “too much cream.”",
  "sections": [
    {
      "heading": "Temperature when frosting meets cake",
      "paragraphs": [
        "Warm frosting softens fat-set crumb; cold frosting on warm cake condenses steam at the interface. Pair temperatures: cool cake, workable—not hot—frosting."
      ]
    },
    {
      "heading": "Sequence: syrup, soak, and wait",
      "paragraphs": [
        "Heavy soak schedules weaken vertical walls. If using syrup, brush lightly and allow a skin to form before stacking."
      ]
    },
    {
      "heading": "Holding under wrap",
      "paragraphs": [
        "Tight plastic before chill can imprint and squash domes. Support with a dome or box that clears the crown."
      ]
    },
    {
      "heading": "Structural boards and dowels",
      "paragraphs": [
        "Tall stacks need horizontal load paths. A cake card under each tier and dowels for tall builds prevent sag that reads as “shrink.”"
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cakes Sink",
      "path": "/cake-science/why-cakes-sink"
    },
    {
      "title": "Why Cakes Collapse",
      "path": "/cake-science/why-cakes-collapse"
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

export default function WhyCakesLoseHeightAfterFrosting() {
  return <ScienceArticlePage spec={SPEC} />;
}
