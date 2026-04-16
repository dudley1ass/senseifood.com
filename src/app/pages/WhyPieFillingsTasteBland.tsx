import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-pie-fillings-taste-bland",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Pie Fillings Taste Bland (Flavor Dilution Problem)",
  "subtitle": "Fruit water, thickener timing, and bake temperature dilute or trap volatile aromatics.",
  "readTime": "8 min read",
  "level": "Concentration & timing",
  "emoji": "🫙",
  "fixRecipe": {
    "category": "pie",
    "problem": "general"
  },
  "quickAnswer": "Bland filling usually means flavor compounds were diluted by released fruit juice, masked by too much starch, or never concentrated because the filling never reached a controlled simmer before the crust finished.",
  "intro": "Pie filling is a concentration problem disguised as a recipe problem. Fruit sheds water in the oven; if that water stays in the matrix without reduction or balance, taste perception drops even when sugar is high.",
  "sections": [
    {
      "heading": "Pre-bake concentration sequence",
      "paragraphs": [
        "Macrating, draining, then reducing part of the juice builds flavor per spoonful. Skipping reduction is the fastest route to “sweet water with fruit.”"
      ]
    },
    {
      "heading": "Temperature and thickener choice",
      "paragraphs": [
        "Starches need full gelatinization temperature for clarity and body, but overheated fruit cooks off aromatics. Pulse heat: thicken, then gentle finish."
      ]
    },
    {
      "heading": "Holding after slice",
      "paragraphs": [
        "Refrigerated slices continue osmosis; salt and acid adjustments show up more clearly after a rest—taste cold if you serve cold."
      ]
    },
    {
      "heading": "Acid, salt, and bitter edge",
      "paragraphs": [
        "A small acid hit (lemon, malic) and pinch salt lift fruit identity the way sugar alone cannot."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Pie Filling Is Runny",
      "path": "/pie-science/why-pie-filling-is-runny"
    },
    {
      "title": "Why Pie Filling Bubbles Over",
      "path": "/pie-science/why-pie-filling-bubbles-over"
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

export default function WhyPieFillingsTasteBland() {
  return <ScienceArticlePage spec={SPEC} />;
}
