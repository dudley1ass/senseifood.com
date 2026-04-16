import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-dough-tears-instead-of-stretching",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Dough Tears Instead of Stretching",
  "subtitle": "Under-hydrated gluten, cold fat, or insufficient rest limits extensibility.",
  "readTime": "7 min read",
  "level": "Gluten rheology",
  "emoji": "✂️",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Tearing means the gluten network is too tight or too dry for the stretch you demand. Autolyse, warmer rest, or small water additions improve extensibility; do not fight tears with more aggressive pulls.",
  "intro": "Stretching is viscoelastic flow. Tearing is brittle fracture. The crossover happens when relaxation time is longer than your shaping motion.",
  "sections": [
    {
      "heading": "Rest time as the hidden variable",
      "paragraphs": [
        "Bench relax allows glutenins to rearrange. Immediate shaping after cold retard often tears."
      ]
    },
    {
      "heading": "Temperature of dough and butter chunks",
      "paragraphs": [
        "Cold solid fat creates discontinuities that tear under sheet stress."
      ]
    },
    {
      "heading": "Sequence in high-hydration doughs",
      "paragraphs": [
        "Stretch-and-fold in the bowl builds extensibility before free shaping on the bench."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Dough Springs Back When Shaping",
      "path": "/bread-science/why-dough-springs-back-when-shaping"
    },
    {
      "title": "Why Dough Is Too Sticky",
      "path": "/bread-science/why-dough-is-too-sticky"
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

export default function WhyBreadDoughTearsInsteadOfStretching() {
  return <ScienceArticlePage spec={SPEC} />;
}
