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
  "intro": "Custard pie filling is a heat-set egg gel suspended in sweet dairy: gentle coagulation creates smooth slices, but the same proteins turn rubbery and prone to fissures when pushed past their comfort zone. Cracks are stress relief: the surface sets, the interior swells or shrinks with temperature change, and something has to give. The usual culprits are overshooting bake endpoint, baking in a way that overheats edges before the center catches up, or shocking the pie thermally during cooling. Unlike cream pies topped after chilling, a baked custard wears its mistakes on top—this guide focuses on temperature targets, shell-filling timing, and cooling ramps that keep the top glossy.",
  "sections": [
    {
      "heading": "Target temperature, not color alone",
      "paragraphs": [
        "Custards tighten dramatically in a narrow band near fully set eggs. A few degrees can separate silky from curdy; the latter cracks as it cools because the protein matrix cannot shrink as one piece.",
        "Use a thermometer near the geometric center for thick pies, and pair numbers with jiggle: the center should move as a thickened liquid, not slosh like milk and not bounce like rubber. If you only rely on surface browning, you may already be past ideal for some formulas."
      ],
      "bullets": [
        {
          "title": "Carryover heat",
          "text": "Pull when slightly under your mental ‘done’—residual heat finishes the last few degrees in the mass."
        },
        {
          "title": "Oven hot spots",
          "text": "Rotate; shield crust edges if they set the perimeter early, creating a skin that tears when the center later swells."
        }
      ]
    },
    {
      "heading": "Sequence: blind bake and hot filling",
      "paragraphs": [
        "Pouring very hot custard into a hot shell starts set evenly and reduces the chance of a thick surface skin forming over an underheated interior. A cold shell plus hot filling can set the top prematurely while the middle continues to expand—classic crack recipe.",
        "If your process requires cooler filling for safety, compensate with lower oven temperature and longer time so gradients stay gentle."
      ]
    },
    {
      "heading": "Cooling ramp",
      "paragraphs": [
        "Abrupt chilling sets a rigid surface while the interior still moves. Cool gradually: oven door ajar, then counter, then refrigerator. Moving a steaming pie straight into cold air or the fridge can tension the surface enough to split.",
        "Covering too early traps steam and softens crust; uncovering too long dries the top—find the balance for your environment."
      ],
      "tip": "If cosmetic cracks appear but texture is good, a thin layer of lightly sweetened cream or a fruit glaze hides sins for guests; fix process next bake."
    },
    {
      "heading": "Sugar, dairy, and inclusions",
      "paragraphs": [
        "Sugar and fat modify coagulation temperature and firmness. Changing dairy fat level or substituting cream types shifts set—revisit bake time when you alter richness. Heavy mix-ins can create weak planes where cracks initiate."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why did mine crack only after refrigeration?",
      "a": "Cooling shrinkage continues; a surface that looked fine warm can tear when cold-contrasted. Slow cooling and avoiding ultra-cold fridge placement on the first hour helps."
    },
    {
      "q": "Does water bath baking help?",
      "a": "Often yes—gentler heat reduces edge overcooking and slows skin formation. It is insurance, not a substitute for pulling at the right temperature."
    },
    {
      "q": "Are small surface cracks always overbaking?",
      "a": "Usually protein overtightening or thermal shock, but severe weeping can accompany cracks if syneresis follows—taste and texture tell the rest of the story."
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
