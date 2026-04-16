import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-taste-floury",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Taste Floury",
  "subtitle": "Raw starch perception when hydration, bake time, or mixing order leaves flour ungelatinized.",
  "readTime": "7 min read",
  "level": "Hydration & bake",
  "emoji": "🌾",
  "fixRecipe": {
    "category": "cookie",
    "problem": "general"
  },
  "quickAnswer": "Floury taste means starch granules never fully hydrated or gelatinized—under-mixed dry pockets, very thick dough baked too pale, or flour not coated by fat/sugar before liquids.",
  "intro": "Palate detects raw wheat notes when amylose/amylopectin is not cooked enough in the micro-regions you bite. Time, temperature, and fat coating are the fixers.",
  "sections": [
    {
      "heading": "Mixing sequence and fat coating",
      "paragraphs": [
        "Creaming fat with sugar before flour limits free water racing to clump starch."
      ]
    },
    {
      "heading": "Bake temperature and spread",
      "paragraphs": [
        "Pale thick cookies center can stay floury while edges look done. Lower temp slightly longer or flatten dough."
      ]
    },
    {
      "heading": "Holding dough",
      "paragraphs": [
        "Long cold rest evens hydration; baking straight from incomplete rest leaves dry floury cores."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cookies Turn Cakey",
      "path": "/cookie-science/why-cookies-turn-cakey"
    },
    {
      "title": "Why Cookies Stay Thick",
      "path": "/cookie-science/why-cookies-stay-thick"
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

export default function WhyCookiesTasteFloury() {
  return <ScienceArticlePage spec={SPEC} />;
}
