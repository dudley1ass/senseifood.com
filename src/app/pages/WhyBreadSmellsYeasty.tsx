import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-smells-yeasty",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Smells Yeasty (Fermentation Imbalance)",
  "subtitle": "Fast ferment, warm bulk, and high yeast fraction spike esters before flavor matures.",
  "readTime": "8 min read",
  "level": "Fermentation time",
  "emoji": "🫧",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Yeasty aroma usually means fermentation ran hot or short—esters dominate before organic acids and alcohols mellow. Slow cold proof, less yeast, and full bake color fix the profile.",
  "intro": "Yeast smell is not “too much yeast” alone; it is timing. Given enough time at cool temperatures, yeast character integrates into complex notes. Rushed dough smells like the lab.",
  "sections": [
    {
      "heading": "Temperature control in bulk and proof",
      "paragraphs": [
        "Every 10°F roughly doubles activity until stress. Warm kitchens produce fast CO₂ and strong ester top notes."
      ]
    },
    {
      "heading": "Sequence: preferment vs straight dough",
      "paragraphs": [
        "Preferments shift flavor development earlier in the timeline so final proof can be shorter without raw yeast smell."
      ]
    },
    {
      "heading": "Holding shaped dough",
      "paragraphs": [
        "Over-proofed dough still smells yeasty after collapse because alcohols remain while structure failed."
      ]
    },
    {
      "heading": "Bake color as flavor finish",
      "paragraphs": [
        "Pale crust correlates with green, yeasty crumb aroma persisting. Adequate crust Maillard masks aldehydes."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Dough Rises Too Fast",
      "path": "/bread-science/why-dough-rises-too-fast"
    },
    {
      "title": "Why Bread Is Pale",
      "path": "/bread-science/why-bread-is-pale"
    },
    {
      "title": "Why Bread Rises",
      "path": "/bread-science/why-bread-rises"
    },
    {
      "title": "How Yeast Works",
      "path": "/bread-science/how-yeast-works"
    }
  ]
};

export default function WhyBreadSmellsYeasty() {
  return <ScienceArticlePage spec={SPEC} />;
}
