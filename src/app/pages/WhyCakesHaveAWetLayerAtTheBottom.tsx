import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-have-a-wet-layer-at-the-bottom",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Have a Wet Layer at the Bottom",
  "subtitle": "Sinking emulsions, sugar syrup pockets, and under-baked bases leave a gummy band.",
  "readTime": "8 min read",
  "emoji": "🌊",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "A wet bottom layer often means batter split, sugar pooled, or the lowest zone never reached set temperature. Emulsify fully, avoid cold butter clumps, bake longer with correct rack, and check pan conductivity.",
  "intro": "That slick, dense seam is not “extra moisture” in a good way—it is a zone where structure did not set uniformly. Think in layers: emulsion integrity before baking, heat path during baking, cooling after. From a heat-transfer view, the bottom centimeter is last to reach gelatinization temperature for starch and full protein set—often needing the same internal temp as the center but arriving later because the pan bottom sheds heat to the rack or countertop. Glass and ceramic pans slow bottom heat compared with aluminum, which can paradoxically leave a wet band in recipes timed for metal.",
  "sections": [
    {
      "heading": "Broken emulsions",
      "paragraphs": [
        "If fat and water separate, dense liquid can settle. Proper creaming temperature and gradual egg addition keep a stable suspension."
      ]
    },
    {
      "heading": "Sugar and density",
      "paragraphs": [
        "Heavy sugar syrups can sink in unstable batters, creating sweet, wet strata."
      ]
    },
    {
      "heading": "Bake path",
      "paragraphs": [
        "Glass and ceramic slow bottom heat; metal speeds it. A wet bottom on dark pans might be under-bake in center while top looks done."
      ],
      "tip": "Probe temperature 1 inch above pan floor, not only top center."
    },
    {
      "heading": "Debugger alignment",
      "paragraphs": [
        "Cake mode shows fat–liquid–sugar balance. Pair unusual ratios with emulsion checks next bake."
      ]
    },
    {
      "heading": "Probe placement and true doneness",
      "paragraphs": [
        "Check internal temperature just above the pan floor, not only in the geometric center of tall layers. If the floor reads 195°F (91°C) but the mid-crumb reads 205°F (96°C), you may still have under-set starch at the interface—extend bake 3–5 minutes with foil if the top is dark enough.",
        "Sugar concentration increases local boiling point depression; very sweet layers can remain syrupy until enough water has steamed off—another reason “wet” reads as gummy rather than merely moist."
      ]
    },
    {
      "heading": "Emulsion temperature when mixing",
      "paragraphs": [
        "Butter around 65–68°F (18–20°C) creams predictably; rock-cold butter or melted butter dropped into a cold mix can encourage fat to pool before baking, amplifying separation. Eggs incorporated near room temperature emulsify more completely than fridge-cold eggs shocked into stiff butter."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why cakes have a wet layer at the bottom is easier to act on when you anchor numbers instead of vibes. Butter cakes commonly finish between 200–210°F (93–99°C) at the geometric center, though chocolate and very moist formulas can mislead thermometers—pair probe results with spring-back and clean skewer. Edge-to-center gradients matter: a reading “done” only at the top center can still leave wet bands near the pan floor—check an inch above the bottom in thick layers. Convection and dark pans shift effective heat; if edges race, lower the set temperature about 25°F (14°C) and extend time. Cooling until crumb structure stabilizes—often below 100°F (38°C) internally for large layers—reduces tearing and sticky knife drag. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cakes Turn Gummy",
      "path": "/cake-science/why-cakes-turn-gummy"
    },
    {
      "title": "How to Debug Cake Problems",
      "path": "/cake-science/how-to-debug-cake-problems"
    },
    {
      "title": "Why Cakes Are Dense",
      "path": "/cake-science/why-cakes-are-dense"
    }
  ],
  "faqs": [
    {
      "q": "Can I fix a wet bottom by longer cool?",
      "a": "Cooling cannot finish under-baked starch; rebake briefly if discovered immediately, or trim and soak for trifle if already cooled."
    },
    {
      "q": "Does a water bath cause wet bottoms?",
      "a": "Leakage can; wrap pans well. Otherwise water baths even heating and often reduce wet bands in cheesecakes—different physics than butter cakes."
    }
  ]
};

export default function WhyCakesHaveAWetLayerAtTheBottom() {
  return <ScienceArticlePage spec={SPEC} />;
}
