import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-aroma-doesnt-match-taste",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Aroma Doesn't Match Taste",
  "subtitle": "Volatiles dominate nose; dissolved solids dominate palate—temperature splits the experience.",
  "readTime": "7 min read",
  "level": "Sensory mismatch",
  "emoji": "👃",
  "fixRecipe": {
    "category": "coffee",
    "problem": "general"
  },
  "quickAnswer": "Smell is thousands of volatiles; taste is mainly non-volatile balance. Roasty aroma can sit over a hollow cup if extraction skews sour/weak, or if you drink too cold.",
  "intro": "We say “this smells amazing but tastes flat” when the volatile phase over-promises relative to the extractive phase. Fixing it is about aligning grind, yield, and serve temperature—not adding more beans to the grinder blindly.",
  "sections": [
    {
      "heading": "Serve temperature sequence",
      "paragraphs": [
        "Aromatics flash off faster when hot; cooling shifts which volatiles reach orthonasal vs retronasal pathways."
      ]
    },
    {
      "heading": "Extraction yield vs roast color",
      "paragraphs": [
        "Dark roasts smell smoky while cup can be hollow if under-extracted; light roasts smell floral while cup can be sharp if under-developed in brew."
      ]
    },
    {
      "heading": "Holding in open carafes",
      "paragraphs": [
        "Aroma loss to air is real; cover between pours if judging quality."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Coffee Smells Good",
      "path": "/coffee-science/why-coffee-smells-good"
    },
    {
      "title": "Why Coffee Tastes Hollow",
      "path": "/coffee-science/why-coffee-tastes-hollow"
    },
    {
      "title": "Coffee Extraction Science",
      "path": "/coffee-science/coffee-extraction-science"
    },
    {
      "title": "How to Debug Your Coffee",
      "path": "/coffee-science/how-to-debug-your-coffee"
    }
  ]
};

export default function WhyCoffeeAromaDoesntMatchTaste() {
  return <ScienceArticlePage spec={SPEC} />;
}
