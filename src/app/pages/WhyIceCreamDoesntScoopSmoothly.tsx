import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-doesnt-scoop-smoothly",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Doesn't Scoop Smoothly",
  "subtitle": "Hardness is tied to freezing point depression, ice fraction, and temper time—not “bad luck.”",
  "readTime": "7 min read",
  "level": "Freezing & temper",
  "emoji": "🍨",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "general"
  },
  "quickAnswer": "Rock-hard pints usually mean low sugar/alcohol, very low freezer temp, or high water fraction. Let temper 5–10 minutes; if still chippy, adjust solids and freezing curve.",
  "intro": "Scoopability is rheology at a narrow temperature band. Too much water freezes as rigid ice; too little sugar raises the freezing point. Your freezer thermostat sets the final experience as much as the formula.",
  "sections": [
    {
      "heading": "Freezer temperature as part of the recipe",
      "paragraphs": [
        "0°F vs −10°F changes scoop effort dramatically. Store serve tubs slightly warmer than long-hold storage if possible."
      ]
    },
    {
      "heading": "Temper sequence before service",
      "paragraphs": [
        "Surface micro-thaw lubricates the scoop path. Cutting straight from deep cold fractures ice lamellae into powdery shards."
      ]
    },
    {
      "heading": "Holding after scooping",
      "paragraphs": [
        "Pre-scooped balls recrystallize edges if held uncovered in a blast freezer. Covered pan, steady cold."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Ice Cream Is Too Hard",
      "path": "/ice-cream-science/why-ice-cream-is-too-hard"
    },
    {
      "title": "Why Ice Cream Melts Fast",
      "path": "/ice-cream-science/why-ice-cream-melts-fast"
    },
    {
      "title": "Why Ice Cream Is Creamy",
      "path": "/ice-cream-science/why-ice-cream-is-creamy"
    },
    {
      "title": "Why Ice Cream Gets Icy",
      "path": "/ice-cream-science/why-ice-cream-gets-icy"
    }
  ]
};

export default function WhyIceCreamDoesntScoopSmoothly() {
  return <ScienceArticlePage spec={SPEC} />;
}
