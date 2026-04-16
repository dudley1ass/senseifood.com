import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-develops-ice-layers-over-time",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Develops Ice Layers Over Time",
  "subtitle": "Temperature oscillation drives water vapor to refreeze at the coldest interface.",
  "readTime": "8 min read",
  "level": "Storage degradation",
  "emoji": "❄️",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "icy"
  },
  "quickAnswer": "Ice layers form when the pint warms slightly then refreezes—water migrates and plates out on the container wall or surface. Limit air headspace, keep steady cold, and press parchment to surface.",
  "intro": "Your freezer is a climate system, not a constant. Every door opening is a mini heat cycle. Ice layers are the macroscopic signature of recrystallization at interfaces.",
  "sections": [
    {
      "heading": "Temperature cycling math in plain language",
      "paragraphs": [
        "Small repeated warmings increase average ice crystal size and create visible sheets. Steadier −5°F band beats swinging 10°F around a setpoint."
      ]
    },
    {
      "heading": "Headspace and surface area",
      "paragraphs": [
        "Air exchanges moisture with the product. Fill containers, surface-cover, and avoid tall skinny voids."
      ]
    },
    {
      "heading": "Holding after partial serve",
      "paragraphs": [
        "Softened rim refreezes as a crust ring. Smooth the surface before returning to freezer."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Ice Cream Gets Icy",
      "path": "/ice-cream-science/why-ice-cream-gets-icy"
    },
    {
      "title": "Why Ice Cream Gets Freezer Burn",
      "path": "/ice-cream-science/why-ice-cream-gets-freezer-burn"
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

export default function WhyIceCreamDevelopsIceLayersOverTime() {
  return <ScienceArticlePage spec={SPEC} />;
}
