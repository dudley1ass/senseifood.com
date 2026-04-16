import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-sauces-separate-on-the-plate",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Why Sauces Separate on the Plate (Holding Failure)",
  "subtitle": "Carry time, plate heat, and oil-water relaxation undo what the pan achieved.",
  "readTime": "8 min read",
  "level": "Holding & plating",
  "emoji": "🍽️",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Separation on the plate is usually broken emulsion plus low sheer stress: sauce sits, fat rises, water sinks. Thicken slightly, mount with cold butter at pickup, and sauce closer to pass.",
  "intro": "The pass is a physics lab. Thin emulsions relax under gravity; warm plates accelerate oil mobility; long walks from kitchen to table finish the break your pan fought.",
  "sections": [
    {
      "heading": "Time under gravity",
      "paragraphs": [
        "Even stable emulsions can bleed if viscosity is too low. A touch of starch or longer reduction buys time."
      ]
    },
    {
      "heading": "Plate temperature sequence",
      "paragraphs": [
        "Scorching plates flash-separate fat; ice-cold plates set fat too fast in clumps. Warm plate, not pizza-stone hot."
      ]
    },
    {
      "heading": "Pick-up vs expo timing",
      "paragraphs": [
        "Sauce last, protein first—or brush with hot butter at the window to revive emulsion sheen."
      ]
    }
  ],
  "related": [
    {
      "title": "Emulsion vs Non-Emulsion Sauces",
      "path": "/sauce-science/emulsion-vs-non-emulsion-sauces"
    },
    {
      "title": "One-Change Rule for Sauce Debugging",
      "path": "/sauce-science/one-change-rule-sauce-debugging"
    },
    {
      "title": "Temperature: The Silent Killer of Sauces",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "Emulsion vs Non-Emulsion Sauces",
      "path": "/sauce-science/emulsion-vs-non-emulsion-sauces"
    }
  ]
};

export default function WhySaucesSeparateOnThePlate() {
  return <ScienceArticlePage spec={SPEC} />;
}
