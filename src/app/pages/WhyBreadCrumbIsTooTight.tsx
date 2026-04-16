import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-crumb-is-too-tight",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Crumb Is Too Tight (Cell Structure Failure)",
  "subtitle": "Under-proofing, heavy degassing, or weak oven spring limit cell expansion.",
  "readTime": "8 min read",
  "level": "Structure mechanics",
  "emoji": "🧽",
  "fixRecipe": {
    "category": "bread",
    "problem": "wont-rise"
  },
  "quickAnswer": "Tight crumb means cells never expanded enough before set—often under-proof, aggressive shaping, too much flour on bench, or early crust lock from low steam.",
  "intro": "Open crumb is controlled failure of cell walls at the right moment: gas stretches gluten films until heat sets starch. If you degas the matrix or set the crust too early, expansion stops.",
  "sections": [
    {
      "heading": "Proofing time vs dough temperature",
      "paragraphs": [
        "Finger poke test is a timeline check, not a superstition. Under-proofed dough springs back instantly = cells not inflated."
      ]
    },
    {
      "heading": "Shaping sequence and surface tension",
      "paragraphs": [
        "Tight skin helps oven spring, but crushing the interior erases alveoli. Fold, don’t compress."
      ]
    },
    {
      "heading": "Oven temperature and steam phase",
      "paragraphs": [
        "Steam delays crust set; without it, the lid forms while interior pressure is still low."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Oven Spring Happens",
      "path": "/bread-science/why-oven-spring-happens"
    },
    {
      "title": "Why Bread Needs Steam",
      "path": "/bread-science/why-bread-needs-steam"
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

export default function WhyBreadCrumbIsTooTight() {
  return <ScienceArticlePage spec={SPEC} />;
}
