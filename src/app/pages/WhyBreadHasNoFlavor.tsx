import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-has-no-flavor",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Has No Flavor (Underdeveloped Fermentation)",
  "subtitle": "Short autolyse, no preferment, and rush to oven starve complexity.",
  "readTime": "8 min read",
  "level": "Flavor development",
  "emoji": "🍞",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Flat bread flavor is usually too little time for enzymes and yeast to generate acids and alcohols, or flour that never hydrated. Extend bulk, add preferment, and salt on schedule—not dead last in a dry corner.",
  "intro": "Flavor in lean bread is mostly fermentation products plus crust chemistry. If your timeline is “mix → shape → bake” in two hours, you chose speed over depth.",
  "sections": [
    {
      "heading": "Time is an ingredient",
      "paragraphs": [
        "Cold retard 12–24h transforms flavor more than any single spice."
      ]
    },
    {
      "heading": "Temperature and enzyme activity",
      "paragraphs": [
        "Autolyse at cool temps improves protease action without runaway yeast; warm autolyse can over-soften before salt locks structure."
      ]
    },
    {
      "heading": "Salt timing",
      "paragraphs": [
        "Salt late can slow fermentation unpredictably; uniform distribution matters for even flavor maturation."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Dough Rises Too Slow",
      "path": "/bread-science/why-dough-rises-too-slow"
    },
    {
      "title": "Why Hydration Matters in Bread",
      "path": "/bread-science/why-hydration-matters-in-bread"
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

export default function WhyBreadHasNoFlavor() {
  return <ScienceArticlePage spec={SPEC} />;
}
