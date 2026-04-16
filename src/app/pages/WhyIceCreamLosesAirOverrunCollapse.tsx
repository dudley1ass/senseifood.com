import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-loses-air-overrun-collapse",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Loses Air (Overrun Collapse)",
  "subtitle": "Dasher time, viscosity, and cold chain breaks determine how much air stays trapped.",
  "readTime": "8 min read",
  "level": "Process & churn",
  "emoji": "💨",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "general"
  },
  "quickAnswer": "Air whipped in at churn must be imprisoned by partially frozen serum. Warm breaks, thin bases, or stopping churn too early let bubbles coalesce and escape on hardening.",
  "intro": "Overrun is a foam frozen in time. If the continuous phase stiffens too slowly—or reliquefies later—bubbles drain and the pint feels dense and short.",
  "sections": [
    {
      "heading": "Churn temperature path",
      "paragraphs": [
        "The dasher introduces air while crystals nucleate. If draw temperature is too warm, bubbles collapse before the matrix locks."
      ]
    },
    {
      "heading": "Viscosity before freeze",
      "paragraphs": [
        "Ageing base hydrates stabilizers; skipping rest yields weepy foam that cannot hold air."
      ]
    },
    {
      "heading": "Holding cold chain through hardening",
      "paragraphs": [
        "Partial thaw-refreeze cycles collapse structure; air pockets shrink as ice reorganizes."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Ice Cream Separates",
      "path": "/ice-cream-science/why-ice-cream-separates"
    },
    {
      "title": "Why Ice Cream Is Too Soft",
      "path": "/ice-cream-science/why-ice-cream-is-too-soft"
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

export default function WhyIceCreamLosesAirOverrunCollapse() {
  return <ScienceArticlePage spec={SPEC} />;
}
