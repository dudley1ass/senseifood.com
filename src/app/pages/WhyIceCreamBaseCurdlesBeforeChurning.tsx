import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-base-curdles-before-churning",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Base Curdles Before Churning",
  "subtitle": "Egg yolk + heat + acid without enough buffering crosses the tight curd line.",
  "readTime": "7 min read",
  "level": "Cook step",
  "emoji": "🥚",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "general"
  },
  "quickAnswer": "Curdled bases come from cooking custard too hot or too fast, or acid added before proteins are protected by enough fat/sugar. Temper, lower heat, strain if needed.",
  "intro": "French-style bases are thin custards. The same egg chemistry as sauce hollandaise applies: gentle thickening, constant motion, and respecting the narrow band between silky and grainy.",
  "sections": [
    {
      "heading": "Temperature ramp for yolk set",
      "paragraphs": [
        "Stay in the 170–180°F zone with patience; spikes past 185°F can seize even with cream present."
      ]
    },
    {
      "heading": "Sequence: acid and chocolate",
      "paragraphs": [
        "High-acid fruit bases need staged addition after some fat and sugar are incorporated, or use fruit compote off-heat."
      ]
    },
    {
      "heading": "Holding hot bases",
      "paragraphs": [
        "Residual pan heat continues cooking off burner. Transfer promptly or float bowl on ice at nappe."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Ice Cream Separates",
      "path": "/ice-cream-science/why-ice-cream-separates"
    },
    {
      "title": "Why Ice Cream Is Creamy",
      "path": "/ice-cream-science/why-ice-cream-is-creamy"
    },
    {
      "title": "Why Ice Cream Is Creamy",
      "path": "/ice-cream-science/why-ice-cream-is-creamy"
    },
    {
      "title": "Why Ice Cream Gets Icy",
      "path": "/ice-cream-science/why-ice-cream-gets-icy"
    }
  ]
};

export default function WhyIceCreamBaseCurdlesBeforeChurning() {
  return <ScienceArticlePage spec={SPEC} />;
}
