import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-sauces-taste-metallic",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Why Sauces Taste Metallic",
  "subtitle": "Reactive pans, long wine reduction, and certain spices release metal ions or perceptions.",
  "readTime": "7 min read",
  "level": "Equipment & reduction",
  "emoji": "🔩",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Metallic taste often traces to unlined copper or aluminum contact with acids, long reduced wine, or iron-rich water. Switch to stainless or enamel, shorten aggressive acid cooks, and filter aggressively reduced liquids.",
  "intro": "Sauces are aggressive solvents. Low pH + heat + bare reactive metal is a recipe for perceptible metal notes, sometimes confused with “blood” or “tin.”",
  "sections": [
    {
      "heading": "Time–temperature with acid in reactive pans",
      "paragraphs": [
        "Short deglazes are fine; long simmers extract ions. Match pan to task."
      ]
    },
    {
      "heading": "Sequence: wine reduction depth",
      "paragraphs": [
        "Over-reduced wine concentrates trace metals and bitter polyphenolics. Stop earlier, strain, polish with fresh fat."
      ]
    },
    {
      "heading": "Holding in metal bains",
      "paragraphs": [
        "Long holds in aluminum hotel pans can pick up notes—transfer to neutral vessels."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Coffee Tastes Metallic",
      "path": "/coffee-science/why-coffee-tastes-metallic"
    },
    {
      "title": "Water Content: Hidden Dilution",
      "path": "/sauce-science/water-content-hidden-dilution"
    },
    {
      "title": "Temperature: The Silent Killer of Sauces",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "Emulsion vs Non-Emulsion Sauces",
      "path": "/sauce-science/emulsion-vs-non-emulsion-sauces"
    }
  ]
};

export default function WhySaucesTasteMetallic() {
  return <ScienceArticlePage spec={SPEC} />;
}
