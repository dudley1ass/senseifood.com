import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-tastes-thin-but-bitter",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Tastes Thin But Bitter (Split Extraction Problem)",
  "subtitle": "Channeling and uneven wetting yield sour/weak zones and bitter zones in the same cup.",
  "readTime": "8 min read",
  "level": "Extraction physics",
  "emoji": "⚖️",
  "fixRecipe": {
    "category": "coffee",
    "problem": "extraction-balance"
  },
  "quickAnswer": "Thin + bitter usually means uneven extraction: some grounds over-yielded tannins, others under-yielded solids. Fix grind distribution, reduce channeling, and align bloom/pour sequence before chasing ratio.",
  "intro": "A cup is an average of many micro-paths through the bed. If water races through some channels, you get both dilute under-extracted liquid and over-extracted bitter liquid at once—your tongue reads the contradiction as “weak but harsh.”",
  "sections": [
    {
      "heading": "Time, temperature, and pressure across the puck",
      "paragraphs": [
        "Espresso amplifies channel sensitivity because pressure follows least resistance. Even pourover beds punish uneven particle sizes with the same split."
      ]
    },
    {
      "heading": "Sequence: bloom and pulse pours",
      "paragraphs": [
        "Bloom exists to wet all surfaces before driving flow. Skipping or rushing it seeds dry pockets and micro-channels."
      ]
    },
    {
      "heading": "Holding after brew",
      "paragraphs": [
        "Bitter polymerization continues hot in a carafe; cooling masks some bitterness but leaves thin body if solids were never there."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Coffee Strength vs Extraction Matters",
      "path": "/coffee-science/why-coffee-strength-vs-extraction-matters"
    },
    {
      "title": "Why Coffee Tastes Over-Extracted",
      "path": "/coffee-science/why-coffee-tastes-over-extracted"
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

export default function WhyCoffeeTastesThinButBitter() {
  return <ScienceArticlePage spec={SPEC} />;
}
