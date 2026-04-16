import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-sauces-break-when-reheated",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Why Sauces Break When Reheated",
  "subtitle": "Second-pass heat exceeds the emulsion’s stability window; fat coalesces and water weeps.",
  "readTime": "8 min read",
  "level": "Service-stage heat",
  "emoji": "🔁",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Reheat gently with a splash of water or stock, whisk constantly, and never boil a finished dairy emulsion. Microwave hotspots are a common breaker—use stove or low oven with foil.",
  "intro": "The first cook built an emulsion under controlled shear and temperature. Reheating is a new experiment: uneven microwaves, higher local heat on pan bottoms, and less available surfactant after storage.",
  "sections": [
    {
      "heading": "Temperature ceiling on rethermalization",
      "paragraphs": [
        "Treat reheat as finishing heat, not reduction heat. If you need to reduce, do it before emulsifying fat in."
      ]
    },
    {
      "heading": "Sequence: loosen, then thicken",
      "paragraphs": [
        "Add liquid to break the rubbery matrix gently, warm until smooth, then adjust—never the reverse on a seized pan."
      ]
    },
    {
      "heading": "Holding for service",
      "paragraphs": [
        "Bain-marie holds below simmer; direct flame even on “low” can exceed break point at the pan floor."
      ]
    }
  ],
  "related": [
    {
      "title": "Order of Operations in Sauces",
      "path": "/sauce-science/order-of-operations-sauce-timing"
    },
    {
      "title": "Water Content: Hidden Dilution",
      "path": "/sauce-science/water-content-hidden-dilution"
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

export default function WhySaucesBreakWhenReheated() {
  return <ScienceArticlePage spec={SPEC} />;
}
