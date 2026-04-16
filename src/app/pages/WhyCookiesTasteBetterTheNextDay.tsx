import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-taste-better-the-next-day",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Taste Better the Next Day",
  "subtitle": "Moisture equilibrates, volatiles mellow, and crystalline sugar textures shift.",
  "readTime": "7 min read",
  "level": "Time-based changes",
  "emoji": "📅",
  "fixRecipe": {
    "category": "cookie",
    "problem": "general"
  },
  "quickAnswer": "Overnight rest equalizes water from center to edge, rounds harsh volatiles, and changes sugar crystal size for softer chew perception—even without formal “aging” dough.",
  "intro": "A warm cookie is a dynamic system: steam redistributes, amorphous sugar regions crystallize slowly, and lipid oxidation adds background notes. Day two is a different product—in a good way.",
  "sections": [
    {
      "heading": "Moisture migration timeline",
      "paragraphs": [
        "Edges dry first out of the oven; center moisture migrates outward over hours, softening tooth-shatter edges."
      ]
    },
    {
      "heading": "Temperature of storage",
      "paragraphs": [
        "Room temp allows modest staling reactions; fridge speeds crystallization differently."
      ]
    },
    {
      "heading": "Aroma mellowing",
      "paragraphs": [
        "Very hot-off-sheet volatiles (vanillin, aldehydes) are intense; equilibrium overnight reads “rounder.”"
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cookies Get Hard After Baking",
      "path": "/cookie-science/why-cookies-get-hard-after-baking"
    },
    {
      "title": "Why Cookies Are Chewy",
      "path": "/cookie-science/why-cookies-are-chewy"
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

export default function WhyCookiesTasteBetterTheNextDay() {
  return <ScienceArticlePage spec={SPEC} />;
}
