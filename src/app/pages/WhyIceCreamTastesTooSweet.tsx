import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-tastes-too-sweet",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Tastes Too Sweet (Cold Suppression Curve)",
  "subtitle": "Sweetness perception shifts with temperature; cold hides bitterness but can leave sucrose loud.",
  "readTime": "7 min read",
  "level": "Serving temperature",
  "emoji": "🍬",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "general"
  },
  "quickAnswer": "At freezer temperature, volatile aromatics are quieter while sucrose still reads strong. Balance with salt, dairy solids, and bitterness (cocoa, coffee) or serve slightly warmer for tastings.",
  "intro": "Sweetness is not a single number on a label—it is perceived intensity that changes with temperature and aroma context. Ice cream is eaten cold, so the “cold suppression curve” shifts the whole flavor mix.",
  "sections": [
    {
      "heading": "Temperature vs perceived sweetness",
      "paragraphs": [
        "Colder samples mute some aromatics faster than they mute simple sweetness, so sugar can dominate. A base that tastes perfect at 40°F may taste blunt at 0°F."
      ]
    },
    {
      "heading": "Solids and water activity sequence",
      "paragraphs": [
        "MSNF and egg yolk add buffering and cooked notes that compete with sugar. Building solids before final sugar lock reduces “one-note sweet.”"
      ]
    },
    {
      "heading": "Holding in the mouth",
      "paragraphs": [
        "As a bite warms on the tongue, aromatics return—formulators taste temper, not only frozen nibs."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Ice Cream Lacks Flavor",
      "path": "/ice-cream-science/why-ice-cream-lacks-flavor"
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

export default function WhyIceCreamTastesTooSweet() {
  return <ScienceArticlePage spec={SPEC} />;
}
