import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-fruit-pies-turn-grainy",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Fruit Pies Turn Grainy",
  "subtitle": "Pectin breakdown, sugar crystallization, and overcooked thickeners change mouthfeel.",
  "readTime": "7 min read",
  "level": "Heat & starch",
  "emoji": "🌫️",
  "fixRecipe": {
    "category": "pie",
    "problem": "general"
  },
  "quickAnswer": "Grainy fruit filling often comes from overcooking pectin, undissolved starch, or high sugar driving crystal formation when the filling cools. Control peak temperature and hydrate starch before it hits acid.",
  "intro": "Smooth fruit gel is a race between softening cell walls, extracting pectin, and setting starch—each with its own temperature window. Overshoot any window and you feel grit.",
  "sections": [
    {
      "heading": "Temperature ceilings for fruit",
      "paragraphs": [
        "Long boils past set degrade pectin networks and can cause syneresis followed by grainy reheats. Log your bubble size and time at boil."
      ]
    },
    {
      "heading": "Sequence: starch before acid extremes",
      "paragraphs": [
        "Acid tightens starch granules early. Slurry into warm—not shock-cold—liquid while whisking to full viscosity before major acid hits."
      ]
    },
    {
      "heading": "Cooling curve and sugar",
      "paragraphs": [
        "Rapid cooling with very high sucrose can encourage perceptible crystals. Gentle cool and balanced glucose/fructose sources can smooth perception."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Pie Filling Is Runny",
      "path": "/pie-science/why-pie-filling-is-runny"
    },
    {
      "title": "Why Pie Crust Gets Tough",
      "path": "/pie-science/why-pie-crust-gets-tough"
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

export default function WhyFruitPiesTurnGrainy() {
  return <ScienceArticlePage spec={SPEC} />;
}
