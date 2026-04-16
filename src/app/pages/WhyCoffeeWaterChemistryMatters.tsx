import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-water-chemistry-matters",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Water Chemistry Matters",
  "subtitle": "Hardness, alkalinity, and filter solids change extraction efficiency and sensory balance.",
  "readTime": "8 min read",
  "level": "Water chemistry",
  "emoji": "💧",
  "fixRecipe": {
    "category": "coffee",
    "problem": "general"
  },
  "quickAnswer": "Magnesium extracts differently than calcium; high bicarbonate buffers acid and dulls brightness; chlorinated tap adds off-notes. Match water to roast or use calibrated packets.",
  "intro": "Coffee is mostly water. If your H₂O is a moving target, every dial on the grinder becomes a moving target too. Water is not neutral—it is an active reagent.",
  "sections": [
    {
      "heading": "Ion profile vs flavor axis",
      "paragraphs": [
        "Magnesium tends to promote sharp fruit extraction; calcium can emphasize heavier body. Both need sane total hardness."
      ]
    },
    {
      "heading": "Temperature interaction with minerals",
      "paragraphs": [
        "Boilers scale and drift delivery; maintenance is a taste issue."
      ]
    },
    {
      "heading": "Holding water in tanks",
      "paragraphs": [
        "Stagnant RO without remineralization leaches flat cups; remineralize to a spec, not zero TDS forever."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Coffee Tastes Metallic",
      "path": "/coffee-science/why-coffee-tastes-metallic"
    },
    {
      "title": "Why Coffee Tastes Salty",
      "path": "/coffee-science/why-coffee-tastes-salty"
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

export default function WhyCoffeeWaterChemistryMatters() {
  return <ScienceArticlePage spec={SPEC} />;
}
