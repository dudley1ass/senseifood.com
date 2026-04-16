import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-pie-crust-blisters",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Pie Crust Blisters",
  "subtitle": "Steam pockets under thin dough sheets before lamination-like layers set.",
  "readTime": "6 min read",
  "level": "Steam & dock",
  "emoji": "🫧",
  "fixRecipe": {
    "category": "pie",
    "problem": "general"
  },
  "quickAnswer": "Blisters are localized steam lifts. Under-docked shells, trapped air, or uneven lamination let water vapor push a bubble before the structure bonds to the pan.",
  "intro": "Think of blind-bake as pressure management. Without vents, steam finds the weakest plane and domes it. Blisters are the pastry version of blowouts.",
  "sections": [
    {
      "heading": "Docking and weights as a time sequence",
      "paragraphs": [
        "Dock before weights, bake weighted through steam release phase, then finish exposed per recipe. Skipping the weighted phase invites bubbles."
      ]
    },
    {
      "heading": "Temperature and pan contact",
      "paragraphs": [
        "Air gaps between dough and pan become steam pillows. Press dough to metal, especially corners."
      ]
    },
    {
      "heading": "Lamination vs shortcut mixing",
      "paragraphs": [
        "Uneven fat disks create irregular steam channels—sometimes desirable for flake, sometimes blisters in single-crust bakes."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Pie Crust Is Flaky",
      "path": "/pie-science/why-pie-crust-is-flaky"
    },
    {
      "title": "Why Pie Crust Gets Soggy",
      "path": "/pie-science/why-pie-crust-gets-soggy"
    },
    {
      "title": "Why Pie Filling Is Runny",
      "path": "/pie-science/why-pie-filling-is-runny"
    },
    {
      "title": "Why Pie Crust Gets Soggy",
      "path": "/pie-science/why-pie-crust-gets-soggy"
    }
  ]
};

export default function WhyPieCrustBlisters() {
  return <ScienceArticlePage spec={SPEC} />;
}
