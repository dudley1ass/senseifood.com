import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-has-large-holes",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Has Large Holes (Gas Coalescence)",
  "subtitle": "Uneven bubble distribution merges into chambers when gluten films are uneven.",
  "readTime": "7 min read",
  "level": "Gas dynamics",
  "emoji": "🕳️",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Random caverns often come from uneven hydration, late uneven yeast pockets, or shaping that trapped mega-bubbles. Pre-shape, bench rest, and gentle tension even the field.",
  "intro": "Small even holes are many stable cells. One giant hole is coalescence: two bubbles became one because the wall between them failed locally.",
  "sections": [
    {
      "heading": "Mixing uniformity",
      "paragraphs": [
        "Dry flour clumps hide yeast sanctuaries that blow out later. Fully hydrate before bulk."
      ]
    },
    {
      "heading": "Degassing and lamination choices",
      "paragraphs": [
        "Ciabatta wants coalescence; sandwich loaf does not. Match technique to target cell count."
      ]
    },
    {
      "heading": "Proof temperature gradients",
      "paragraphs": [
        "Dough near a radiator proofs faster on one side, creating uneven gas field."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Bread Is Dense",
      "path": "/bread-science/why-bread-is-dense"
    },
    {
      "title": "Why Dough Wont Hold Shape",
      "path": "/bread-science/why-dough-wont-hold-shape"
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

export default function WhyBreadHasLargeHoles() {
  return <ScienceArticlePage spec={SPEC} />;
}
