import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-tastes-better-at-certain-temperatures",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Tastes Better at Certain Temperatures",
  "subtitle": "Sweet–sour–bitter balance moves as solubility and volatility change down the cooling curve.",
  "readTime": "8 min read",
  "level": "Temperature curve",
  "emoji": "🌡️",
  "fixRecipe": {
    "category": "coffee",
    "problem": "general"
  },
  "quickAnswer": "Many coffees “open up” between 120–150°F where acids integrate with sugars; too hot masks detail, too cold exposes ash and tannin. Taste the same cup across a 10-minute window.",
  "intro": "There is no single best temperature—there is a best window for a given roast and extraction. Brewing is only half; drinking is a time–temperature experiment.",
  "sections": [
    {
      "heading": "Cooling as part of recipe design",
      "paragraphs": [
        "Cupping uses standardized cooling on purpose: flavor is a trajectory."
      ]
    },
    {
      "heading": "Milk drinks shift the window",
      "paragraphs": [
        "Lactose sweetness and protein binding change perceived acidity peaks vs black coffee."
      ]
    },
    {
      "heading": "Holding and reheating",
      "paragraphs": [
        "Microwave reheating spikes uneven volatiles; gentle thermal mix preserves balance longer."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Coffee Tastes Different Cold",
      "path": "/coffee-science/why-coffee-tastes-different-cold"
    },
    {
      "title": "Why Coffee Tastes Flat",
      "path": "/coffee-science/why-coffee-tastes-flat"
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

export default function WhyCoffeeTastesBetterAtCertainTemperatures() {
  return <ScienceArticlePage spec={SPEC} />;
}
