import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-have-no-depth-of-flavor",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Have No Depth of Flavor",
  "subtitle": "Single-note sugar without Maillard contrast, salt, brown butter, or aged dough.",
  "readTime": "8 min read",
  "level": "Flavor chemistry",
  "emoji": "🎵",
  "fixRecipe": {
    "category": "cookie",
    "problem": "general"
  },
  "quickAnswer": "Depth needs contrast: browned butter or longer bake edges, salt, acid (molasses, brown sugar), and time for flavor precursor reactions. Resting dough redistributes aromatics.",
  "intro": "Depth is stacked peaks across time as you chew: caramel, salt, roast, vanilla. A fast pale bake of white sugar dough is one peak—sweet.",
  "sections": [
    {
      "heading": "Maillard timing vs thickness",
      "paragraphs": [
        "Thicker dough needs a thermal path that still browns edges without drying centers—use temperature steps."
      ]
    },
    {
      "heading": "Chill sequence",
      "paragraphs": [
        "Rest hydrates flour, mellows leavening harshness, and allows lipid oxidation notes to develop subtly."
      ]
    },
    {
      "heading": "Salt and acid micro-adjustments",
      "paragraphs": [
        "A few extra tenths percent salt and a trace of acid lift caramel perception."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Chilling Cookie Dough Matters",
      "path": "/cookie-science/why-chilling-cookie-dough-matters"
    },
    {
      "title": "Why Cookies Brown",
      "path": "/cookie-science/why-cookies-brown"
    },
    {
      "title": "Why Cookies Spread",
      "path": "/cookie-science/why-cookies-spread"
    },
    {
      "title": "How to Debug Cookie Batch Issues",
      "path": "/cookie-science/how-to-debug-cookie-batch-issues"
    }
  ]
};

export default function WhyCookiesHaveNoDepthOfFlavor() {
  return <ScienceArticlePage spec={SPEC} />;
}
