import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-stick-to-each-other-after-baking",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Stick to Each Other After Baking",
  "subtitle": "Edges stay thermoplastic until cooled; steam and sugar bridges fuse contact patches.",
  "readTime": "6 min read",
  "level": "Cooling phase",
  "emoji": "🤝",
  "fixRecipe": {
    "category": "cookie",
    "problem": "general"
  },
  "quickAnswer": "Cookies fuse when placed touching while edges are still soft and releasing steam. Space on the sheet, cool on rack with airflow, and don’t stack until room temperature.",
  "intro": "Post-bake is part of the recipe. Sugar–fat films on hot edges are adhesive. Contact area × time × temperature predicts whether you get one mega-cookie.",
  "sections": [
    {
      "heading": "Cooling curve on the pan vs rack",
      "paragraphs": [
        "Pan holds heat and steam longer than a rack. Move sooner for thin cookies."
      ]
    },
    {
      "heading": "Stacking sequence for storage",
      "paragraphs": [
        "Even “cool” cookies can cold-flow under weight in a tin. Parchment between layers."
      ]
    },
    {
      "heading": "Humidity holding",
      "paragraphs": [
        "Airtight while still warm traps moisture on surfaces—sticky interfaces."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cookies Stick Together",
      "path": "/cookie-science/why-cookies-stick-together"
    },
    {
      "title": "Why Cookies Spread Too Much",
      "path": "/cookie-science/why-cookies-spread-too-much"
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

export default function WhyCookiesStickToEachOtherAfterBaking() {
  return <ScienceArticlePage spec={SPEC} />;
}
