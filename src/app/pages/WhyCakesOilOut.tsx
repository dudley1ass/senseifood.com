import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-oil-out",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Oil Out (Fat Separation in Batter)",
  "subtitle": "Emulsion timing, fat temperature, and mixing sequence decide whether oil beads later weep from the crumb.",
  "readTime": "8 min read",
  "level": "Process & temperature",
  "emoji": "🛢️",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "Oil on the surface or greasy streaks usually mean the fat–water emulsion broke during mixing or got too warm before structure set. Match fat softness to method, add eggs gradually, and avoid long holds at room temp before baking.",
  "intro": "Cake batter is a temporary emulsion: fat droplets stay suspended in watery phases because proteins and emulsifiers (especially eggs) coat interfaces. When that balance fails—wrong temperature path, reversed sequence, or sitting too long—fat coalesces and migrates. The symptom shows up as shine, pools, or “sweating” slices.",
  "sections": [
    {
      "heading": "Temperature path through creaming and eggs",
      "paragraphs": [
        "Butter that is too warm creams faster but creates larger, less stable fat droplets. Cold eggs shock warm fat and encourage splitting. Aim for cool-room butter and eggs that are neither fridge-cold nor warm.",
        "If the bowl heats from a long mix, pause and scrape; surface heat is a silent emulsion killer."
      ]
    },
    {
      "heading": "Sequence: water and fat meet on your schedule",
      "paragraphs": [
        "Dumping liquid before the fat phase is properly aerated and coated can wash out structure. Alternate dry and wet in stages so surfactants from yolk encounter fat in thin films, not floods."
      ]
    },
    {
      "heading": "Holding phase before the oven",
      "paragraphs": [
        "Batters held hot (near a stove or in sun) can partially melt fat microstructure. If you must hold, keep covered and cool; rebalance by slightly chilling the pan before loading."
      ]
    },
    {
      "heading": "Bake set locks fat in place",
      "paragraphs": [
        "Until starch gelatinizes and proteins denature, fat can still move. Under-baked centers often release more free fat as they cool because the network never fully imprisoned droplets."
      ],
      "tip": "If you see oil pooling on raw batter, remix is rarely safe—portion into a fresh bowl, slightly warm yolk with a splash of milk, and whisk back in off heat, or restart that stage."
    }
  ],
  "related": [
    {
      "title": "Why Cakes Turn Gummy",
      "path": "/cake-science/why-cakes-turn-gummy"
    },
    {
      "title": "Why Cakes Have a Wet Layer at the Bottom",
      "path": "/cake-science/why-cakes-have-a-wet-layer-at-the-bottom"
    },
    {
      "title": "How to Debug Cake Problems",
      "path": "/cake-science/how-to-debug-cake-problems"
    },
    {
      "title": "Why Cakes Turn Gummy",
      "path": "/cake-science/why-cakes-turn-gummy"
    }
  ]
};

export default function WhyCakesOilOut() {
  return <ScienceArticlePage spec={SPEC} />;
}
