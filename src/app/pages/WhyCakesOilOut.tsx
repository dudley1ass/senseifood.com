import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-oil-out",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Oil Out (Fat Separation in Batter)",
  "subtitle": "When you bring the fat into the batter, how warm everything is, and the order you mix things in all decide whether the cake will later weep oil out of the crumb.",
  "readTime": "8 min read",
  "level": "Process & temperature",
  "emoji": "🛢️",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "Visible oil on the surface or greasy streaks in the crumb almost always mean the emulsion (the suspension of tiny fat droplets in the water-based liquid) broke during mixing or got too warm before the cake structure had a chance to set. Match the softness of the butter to your mixing method, add eggs in stages instead of all at once, and avoid letting the batter sit at warm room temperature before baking.",
  "intro": "Cake batter is a temporary emulsion: the tiny droplets of fat stay suspended inside the watery phase because proteins from the eggs and other emulsifiers (compounds like lecithin in egg yolk, which can hold onto both fat and water at the same time) coat the surface of each droplet and keep them from merging back together. When that balance fails—because the temperature was wrong at one step, you mixed things in the wrong order, or the batter sat around too long before baking—the fat droplets merge, coalesce, and migrate out of the matrix. The symptoms show up as shine on the surface, pools at the bottom of the pan, or slices that look like they are sweating. Oil-out is not always visible in the mixing bowl; sometimes it only appears during baking or cooling, when it turns out the batter never properly captured all the fat in the first place. Fixing it is less about chanting “do not over-mix” and more about lining up temperature, the order things go in, and how the batter is held so the emulsifiers can meet the fat in thin, stable films. SenseiFood treats this as interface physics: restore the conditions where the droplets stay small and well-separated from each other.",
  "sections": [
    {
      "heading": "Temperature path through creaming and adding eggs",
      "paragraphs": [
        "Butter that is too warm creams faster, but it also produces larger, less stable fat droplets that are easier to coalesce later. Adding cold eggs straight from the fridge into warm butter shocks the fat and encourages the emulsion to split. Aim for cool-room butter and eggs that are neither fridge-cold nor warm; the classic “bring everything to the same temperature” advice is really about avoiding shock at the boundary between oil and water. If the mixer bowl is heating up from a long mix, pause and scrape down the sides—heat is a silent emulsion killer. In a warm kitchen, starting with slightly cooler butter or chilling the bowl briefly partway through can save a borderline batter."
      ]
    },
    {
      "heading": "Sequence: water and fat meet on your schedule",
      "paragraphs": [
        "Dumping a slug of liquid into a fat phase that has not yet been properly aerated and coated will wash out the structure. Alternate dry and wet ingredients in stages so the emulsifiers from the egg yolk meet the fat in thin films, not big floods. The goal is repeated small contacts, not one heroic pour. Different methods (creaming, reverse creaming, foam, oil-based one-bowl) develop gluten differently—pick one and commit. A halfway-hybrid method is a common way to split an emulsion, because the fat phase never got the careful treatment the original method assumed it would."
      ],
      "bullets": [
        {
          "title": "Egg addition",
          "text": "Add the eggs in portions and beat until each addition fully disappears into the batter before you add the next one. Rushing this step is how beginners create a batter that looks curdled in the bowl—it can still bake, but poorly."
        }
      ]
    },
    {
      "heading": "Holding the batter before the oven",
      "paragraphs": [
        "A batter that sits warm—near a hot stove, or in a sunny window—can lose its fat microstructure as the tiny solid butter crystals melt. If you must hold the batter, cover it and keep it cool, and slightly chill the pan before loading so the fat at the contact layer does not reliquefy. Time is not neutral: emulsions age. Pouring fresh batter into a hot metal pan that has been sitting on a warm stovetop will essentially melt the fat at the bottom layer of the cake before the oven even gets a say. Use a trivet and a room-temperature pan whenever you can."
      ]
    },
    {
      "heading": "Once the cake bakes, the fat is locked in place",
      "paragraphs": [
        "Until the starch gelatinizes (absorbs water and swells into a set network) and the proteins denature (uncurl and link up into the cake’s permanent structure), fat is free to move around. An under-baked center often releases more free fat as it cools because the matrix never fully imprisoned the fat droplets. If the crumb is greasy and wet, doneness and emulsion are probably overlapping issues—do not just blame one. Over-baking can also squeeze fat out of damaged protein networks, so “bake it longer” is not always the right answer either. Look for the sweet spot where the structure is set and the moisture the recipe intended is still inside the crumb."
      ],
      "tip": "If you can already see oil pooling in raw batter, remixing the broken bowl is rarely a clean save—portion the broken batter into a new bowl, gently warm a yolk with a splash of milk, and whisk it back in off heat to rebuild the emulsion, or just restart that stage."
    },
    {
      "heading": "Oil after cooling: storage and slicing",
      "paragraphs": [
        "Sometimes fat blooms on the surface of a slice after refrigeration because the saturated fat fractions migrate and recrystallize at the surface. That can look like an oil-out problem even when the batter itself was fine—the taste and texture will be different from a true emulsion break. If the slices are only greasy when cold and seem fine after warming briefly, you are probably seeing fat bloom rather than a real failure. A true emulsion break tends to show up consistently across temperatures."
      ]
    }
  ],
  "faqs": [
    {
      "q": "My batter looks curdled but the recipe says it will come together—will it actually?",
      "a": "Sometimes yes, with continued patient mixing at the right temperature it pulls itself back together. Sometimes no, if the fat got too warm or the liquid was added too fast and the emulsion has truly broken. If it still looks broken after a minute of patient mixing, restart the fat–egg stage rather than baking a hope."
    },
    {
      "q": "Does oiling out mean I should use less fat next time?",
      "a": "Not automatically. Cutting fat changes both the tenderness and the volume of the cake, so it is a big change for the wrong reason. First, stabilize the emulsion by fixing your process—temperature path, order of addition, how long the batter is held. Only adjust the formula after the process is solid."
    },
    {
      "q": "Can oil-free or vegan batters still oil out?",
      "a": "Yes. They can still show separation-like symptoms—pooled oil leaking from nut butters, a split aquafaba (whipped chickpea liquid used as an egg substitute) emulsion, or a layer of melted coconut oil on top. The interface science is the same: control the temperature, and add ingredients gradually so the emulsifiers can actually do their job."
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
      "title": "Why Cakes Taste Flat",
      "path": "/cake-science/why-cakes-taste-flat"
    }
  ]
};

export default function WhyCakesOilOut() {
  return <ScienceArticlePage spec={SPEC} />;
}
