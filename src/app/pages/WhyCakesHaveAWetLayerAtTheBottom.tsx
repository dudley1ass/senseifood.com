import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-have-a-wet-layer-at-the-bottom",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Have a Wet Layer at the Bottom",
  "subtitle": "When the batter quietly separates before baking, when heavy sugar syrup pools downward, or when the bottom of the cake never quite gets hot enough, you end up with a thin gummy band right above the pan.",
  "readTime": "8 min read",
  "emoji": "🌊",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "A wet bottom layer usually means one of three things: the batter split (the fat and water-based liquid separated and the heavier liquid sank), the sugar pooled before the cake set, or the lowest part of the cake never reached the temperature where starch sets up properly. The fixes are mixing until you have a stable, glossy emulsion, avoiding cold butter clumps that refuse to incorporate, baking longer on the right rack, and being aware that some pans (glass and ceramic) transfer heat to the bottom of the cake more slowly than aluminum.",
  "intro": "That slick, dense seam at the bottom of a slice is not “extra moisture” in a good way—it is a band of cake where the structure never set evenly. Think of the cake in layers: the emulsion (the stable mix of fat and water-based liquid) before you bake, the heat path during the bake, and the cooling after. From a heat-transfer view, the bottom centimeter of the cake is the last zone to reach the temperatures at which starch gelatinizes and proteins fully set. It often needs the same internal temperature as the center but arrives there later, because the pan floor is shedding heat into the rack or counter below. Glass and ceramic pans transfer heat to the bottom more slowly than aluminum, which can paradoxically leave a wet band in recipes that were originally timed for metal pans.",
  "sections": [
    {
      "heading": "Broken emulsions",
      "paragraphs": [
        "When fat and water in the batter separate before baking, the heavier liquid phase can settle at the bottom of the pan and never integrate. Creaming at the right temperature (cool-but-soft butter, not melted), adding eggs one at a time and emulsifying each before the next, and letting cold ingredients warm slightly before they hit the mix all help keep your batter stable."
      ]
    },
    {
      "heading": "Sugar and density",
      "paragraphs": [
        "Heavy sugar syrups are denser than the rest of the batter, and in an unstable mix they will sink and pool at the bottom, leaving a wet, sweet, gummy stratum right above the pan floor. The fix is structural: emulsify completely before pouring, and avoid overly liquid sweeteners (honey, very wet jams) being layered on without enough thickener."
      ]
    },
    {
      "heading": "Bake path",
      "paragraphs": [
        "Glass and ceramic pans slow the bottom heat compared with aluminum, which moves heat fast; the same recipe in a glass pan can come out with a wet bottom while in aluminum it bakes through cleanly. On dark pans, a wet bottom usually means the middle is still under-baked even though the top already looks beautifully set."
      ],
      "tip": "Probe the internal temperature about 1 inch above the pan floor, not just at the top center—the bottom is almost always the last place to actually finish baking."
    },
    {
      "heading": "Debugger alignment",
      "paragraphs": [
        "Cake mode in Fix My Recipe shows where the fat–liquid–sugar balance lands. If you see an unusual ratio there—too much liquid for the fat to hold, or sugar tipping high relative to flour—pair that with an emulsion check on the next bake, watching how cleanly the batter comes together as you mix."
      ]
    },
    {
      "heading": "Where to probe, and what is really “done”",
      "paragraphs": [
        "Check the internal temperature just above the pan floor on tall layers, not only in the geometric center. If the floor reads 195°F (91°C) and the mid-crumb reads 205°F (96°C), you may still have under-set starch at the very bottom—extend the bake another 3–5 minutes with foil tented over the top if it is already dark enough. Very sweet layers stay syrupy at higher temperatures than less-sugary cakes because high sugar concentration depresses the local boiling point of the water (a phenomenon called boiling point depression), which is another reason a sugar-heavy bottom layer reads as gummy rather than merely moist."
      ]
    },
    {
      "heading": "Emulsion temperature when you mix",
      "paragraphs": [
        "Butter at about 65–68°F (18–20°C) creams predictably—it holds tiny air bubbles and welcomes liquid in slowly. Rock-cold butter or fully melted butter dropped into a cool mix encourages the fat to pool and refuse to emulsify, which amplifies the bottom-layer problem during baking. Eggs added at room temperature emulsify much more completely than eggs straight out of the fridge that get shocked into firm butter."
      ]
    },
    {
      "heading": "What to try on the next bake",
      "paragraphs": [
        "Most layer-cake headaches get clearer when you treat the oven and the cool-down as part of the recipe, not background noise. Many butter cakes finish somewhere near 200–210°F (93–99°C) in the center, but chocolate and very wet batters can lie to a probe—pair numbers with spring-back and a skewer, and check an inch above the pan floor on thick layers so you do not get a dry top hiding a damp belt.",
        "Change one variable at a time—rack height, pan color, convection on or off, or the temperature curve—and photograph the crumb after the cake is fully cool. SenseiFood’s Fix My Recipe cake mode still helps when you suspect sugar, fat, or flour ratios have drifted from what the writer assumed."
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
      "q": "Can I fix a wet bottom by letting the cake cool longer?",
      "a": "Sadly no—cooling cannot finish setting starch that never got hot enough during the bake. If you catch it right out of the oven, you can sometimes pop the cake back in for a few minutes to finish. If it has already cooled and you find the wet layer when you slice, the most graceful save is trimming it off and using the layers in a trifle or soaked dessert."
    },
    {
      "q": "Does a water bath cause wet bottoms in cakes?",
      "a": "Water leaking into the pan can, so always wrap a springform or any seam pan really well in foil. Otherwise, a water bath actually evens out the heating and usually reduces wet bands—especially in cheesecakes, which are a different beast from butter cakes (more like a baked custard than a cake)."
    }
  ]
};

export default function WhyCakesHaveAWetLayerAtTheBottom() {
  return <ScienceArticlePage spec={SPEC} />;
}
