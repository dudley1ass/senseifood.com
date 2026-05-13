import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-pie-crust-falls-apart",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Pie Crust Falls Apart",
  "subtitle": "When there's not quite enough water, not enough cohesion between layers, or so much fat that the dough never knits together, the crust crumbles instead of holding a slice.",
  "readTime": "7 min read",
  "emoji": "🍂",
  "fixRecipe": {
    "category": "pie",
    "problem": "general"
  },
  "quickAnswer": "A short, crumbly dough that breaks in pieces when you try to transfer it usually needs a touch more water, gentler mixing, or a longer rest to let the moisture distribute evenly through the dough. Push the fat ratio too far above what the flour can support and you end up with no continuous network at all—just rich, fragile sand. Patch it back together with cold water added a teaspoon at a time, and resist the urge to keep working it.",
  "intro": "Tender and fragile share a border that's easier to cross than most pie books admit. You want tender flakes, not sand that falls apart in the pan. When a crust falls apart on you, the dough is telling you there isn't enough continuous gluten network to handle being lifted and shaped—even if the baked texture would have been beautiful. Structural integrity needs enough hydrated gluten (the stretchy protein network that flour develops when it meets water) to hold a shape, without so much that the crust turns tough instead. For very short doughs (high in fat, low in water), that target often sits around 3–6% water by flour weight, which is a very sensitive range. Overworking the dough raises gluten in the wrong direction and can paradoxically cause the crust to shrink or slough in layers in the oven even though it felt sturdy on the bench.",
  "sections": [
    {
      "heading": "Hydration for cohesion",
      "paragraphs": [
        "Pie dough should come together with a firm squeeze in your hand but still look marbled—you should see streaks of butter against the flour, not a smooth, uniform paste. A totally dry, crumbly mix can't sheet out under a rolling pin no matter how cold or rested it is. If a squeezed handful crumbles apart on its own when you open your fingers, that's the dough asking for a few more drops of water."
      ]
    },
    {
      "heading": "Fat pieces too small",
      "paragraphs": [
        "Over-processing the butter—usually with a food processor running a few seconds too long—chops the fat into pieces so small that they no longer create the discrete pockets you need for flaky layers in the oven. The result is a mealy, sandy dough that fractures when you try to roll it. You want pea- to almond-sized chunks of butter at the very least, distributed visibly through the flour."
      ]
    },
    {
      "heading": "Handling",
      "paragraphs": [
        "Folding is the right verb, not kneading. After the dough comes together, treat it like puff pastry rather than bread: a few gentle pats and folds, not a workout. If you need to consolidate a dry, broken dough, use a technique called fraisage—smearing small portions across the counter with the heel of your hand and gathering them back together. It binds the dough with minimal gluten development."
      ],
      "tip": "Roll between parchment for transfer instead of forcing a fragile round."
    },
    {
      "heading": "Tool support",
      "paragraphs": [
        "Pie problems in Fix My Recipe map to specific crust texture categories—'falls apart' shows up differently from 'tough' or 'soggy.' Compare your fat-to-flour ratio against the typical range for your style of crust before you start adjusting water by teaspoons, so you know which knob to turn first."
      ]
    },
    {
      "heading": "Fat size distribution",
      "paragraphs": [
        "Pea-sized butter leaves bigger voids when it melts, which gives you dramatic flake but a more fragile bench feel. Sand-textured fat shortens the dough so much that it can't transfer without falling apart. Either way, keep chilling between major steps—after mixing, after the first roll, after shaping—because warm fat smears into the flour and removes the layer structure entirely. Blind-baking with weights until the shell is structurally set is also important, because steam puff can shatter an unweighted, fragile shell during the first minutes in the oven."
      ]
    },
    {
      "heading": "Pan release",
      "paragraphs": [
        "Glass and metal pans flex differently when you slide a slice out, which can make a fragile crust fall apart even when it baked fine. Support the sides of the pan when you're moving a finished pie, and let the bottom cool completely before cutting, so the fat firms up and the crust can carry its own weight on the spatula."
      ]
    },
    {
      "heading": "Pie nights get easier with a few steady habits",
      "paragraphs": [
        "Dough is happiest cool—roughly cool-room to refrigerator-cold butter—so it rolls without smearing. For filled pies, think in two heats: get the crust structure and color you want, then make sure the filling actually reaches a lively bubble in the center so thickeners and fruit have done their job without burning the rim.",
        "Jot pan type, rack height, and whether you used a shield; those three explain most lopsided bakes. SenseiFood’s Fix My Recipe pie mode still helps when you suspect the fat-to-flour ratio or hydration is off your target."
      ]
    },
    {
      "heading": "Extra variables that swing results",
      "paragraphs": [
        "Egg washes brown at different rates: whole egg goes moderately, yolk-only goes deep and shiny, milk wash stays gentle—pick one and stick with it for a series of test bakes. Docking and pie weights change how steam escapes during a blind bake; note the weight amount and the minutes you baked weighted. Fruit acidity (pH) affects how starch sets—very acidic fillings like cherry or rhubarb often need a slightly higher thickener percentage than the generic charts suggest, because acid weakens the starch network as it tries to form."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Pie Crust Is Flaky",
      "path": "/pie-science/why-pie-crust-is-flaky"
    },
    {
      "title": "Why Pie Crust Shrinks",
      "path": "/pie-science/why-pie-crust-shrinks"
    }
  ],
  "faqs": [
    {
      "q": "Does gluten-free crust fall apart for the same reasons?",
      "a": "Not exactly—gluten-free flours don't form the same protein network, so you have to lean on binders like xanthan gum, psyllium husk, or a careful blend of starches to do the structural job that gluten would otherwise handle. Handling is genuinely different: gluten-free doughs need more rest for the binder to fully hydrate, and they're best rolled between sheets of parchment because they don't tolerate much rework."
    },
    {
      "q": "What about cracks that appear when I try to fold the dough into quarters for transfer?",
      "a": "Those cracks almost always mean the dough is too dry on the surface. Spritz the surface very lightly with cold water before folding, or work in another teaspoon or two of water before chilling. Resist the urge to flour the bench heavily—you'll dry the dough out further and make the cracking worse."
    }
  ]
};

export default function WhyPieCrustFallsApart() {
  return <ScienceArticlePage spec={SPEC} />;
}
