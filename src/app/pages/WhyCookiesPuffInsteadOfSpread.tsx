import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-puff-instead-of-spread",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Puff Instead of Spread",
  "subtitle": "Cold fat, high flour, strong leavening, and short bake set a dome before flow.",
  "readTime": "7 min read",
  "level": "Spread mechanics",
  "emoji": "☁️",
  "fixRecipe": {
    "category": "cookie",
    "problem": "wont-spread"
  },
  "quickAnswer": "Puff without spread means structure set before viscous flow—cold butter, strong flour, too much BP/BS, or oven too hot on top. Warm dough slightly, reduce leavening, or knock air before bake.",
  "intro": "Spread is a race between fat melting, dough softening, and proteins setting. Puff wins when leavening gas expands in a matrix that stiffens before flow starts.",
  "sections": [
    {
      "heading": "Starting dough temperature",
      "paragraphs": [
        "Chilled is good for flavor; excessively cold prevents early spread phase."
      ]
    },
    {
      "heading": "Leavening sequence",
      "paragraphs": [
        "Double-action powder can create mid-bake bubbles that set as domes if fat has not lubricated flow paths."
      ]
    },
    {
      "heading": "Pan temperature and top heat",
      "paragraphs": [
        "Dark sheets and broiler-adjacent racks set tops fast—skin locks shape."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cookies Don't Spread",
      "path": "/cookie-science/why-cookies-dont-spread"
    },
    {
      "title": "Why Cookies Spread in the Oven But Not Before",
      "path": "/cookie-science/why-cookies-spread-in-oven-but-not-before"
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

export default function WhyCookiesPuffInsteadOfSpread() {
  return <ScienceArticlePage spec={SPEC} />;
}
