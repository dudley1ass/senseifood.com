import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-custard-pies-crack",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Custard Pies Crack",
  "subtitle": "Overbake sets egg proteins too tight; cooling shrinkage exceeds what the surface can flex.",
  "readTime": "7 min read",
  "level": "Egg set & cooling",
  "emoji": "〰️",
  "fixRecipe": {
    "category": "pie",
    "problem": "general"
  },
  "quickAnswer": "Custard cracks when the interior passes the tight curd stage—usually too hot too long—or cools too fast so the surface tension tears. Pull earlier, use residual heat, and cool gradually.",
  "intro": "Custard is a delicate protein gel. The oven phase should end while the center still jiggles as a unit; carryover finishes set. Cracks are stress fractures from overcooked protein or thermal shock.",
  "sections": [
    {
      "heading": "Target temperature, not color alone",
      "paragraphs": [
        "Nose past 185°F in the custard zone and you invite syneresis and surface splits. Probe near center; rely on jiggle plus a few degrees under “firm.”"
      ]
    },
    {
      "heading": "Sequence: blind bake and hot filling",
      "paragraphs": [
        "Pouring very hot custard into a very hot shell evens set. Cold shell + hot filling can skin early and tear later."
      ]
    },
    {
      "heading": "Cooling ramp",
      "paragraphs": [
        "Oven door ajar, then counter, then chill. Abrupt fridge moves create a skin that cracks as the interior contracts."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Pie Crust Shrinks",
      "path": "/pie-science/why-pie-crust-shrinks"
    },
    {
      "title": "Why Pie Crust Burns Before Filling Cooks",
      "path": "/pie-science/why-pie-crust-burns-before-filling-cooks"
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

export default function WhyCustardPiesCrack() {
  return <ScienceArticlePage spec={SPEC} />;
}
