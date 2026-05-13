import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-pie-crust-cracks-when-rolling",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Pie Crust Cracks When Rolling",
  "subtitle": "When dough is too cold, too dry, or has been overworked, it shatters and tears instead of stretching cleanly under the rolling pin.",
  "readTime": "7 min read",
  "emoji": "💔",
  "fixRecipe": {
    "category": "pie",
    "problem": "tough-crust"
  },
  "quickAnswer": "Pie dough that cracks while you're rolling it out is almost always too cold and brittle, slightly dry, or has been worked enough that the gluten is fighting back. Let it temper on the counter for a few minutes to soften up without going greasy, patch any small cracks with a wet finger as you roll, or rehydrate a too-dry dough by gently working in a few drops of cold water at a time.",
  "intro": "Pie dough is a fat-laminated paste pretending to be a solid. Too cold and it shatters like a piece of chocolate; too dry and it lacks the cohesion to stretch as one piece; too warm and the butter starts to smear and the whole thing sticks to your pin. Cracking during rolling sits squarely in the brittle zone of that spectrum. A useful mental model: pie dough is a fat-laminated starch matrix—at around 35°F (2°C) the cold fat shatters under pressure, and at around 65°F (18°C) and warmer, gluten (the stretchy protein network in wheat flour) starts forming tough sheets that resist stretching and tear instead. The sweet spot for rolling most laminated doughs is around 50–60°F (10–16°C), which is cool to the touch but not fridge-cold.",
  "sections": [
    {
      "heading": "Thermal window",
      "paragraphs": [
        "A dough straight from the refrigerator usually needs a few minutes on the counter before you start rolling. You're letting the cold butter come up just enough that it bends instead of breaking, without crossing into the soft, greasy zone where the fat starts smearing into the flour and ruining the layered structure. Five to ten minutes is enough for most home kitchens—long enough to feel a faint give when you press a finger into the disk."
      ]
    },
    {
      "heading": "Hydration balance",
      "paragraphs": [
        "Dry edges are almost always where cracks start. The amount of water flour needs varies by brand, by protein content, and by humidity in your kitchen on any given day—a teaspoon of water can be the difference between dough that rolls smoothly and dough that fights you the whole way. If the dough feels stiff and the edges flake when you roll, work in a few cold drops at a time rather than starting over."
      ]
    },
    {
      "heading": "Gluten and toughness",
      "paragraphs": [
        "Overmixed dough develops too much gluten and becomes paradoxically both more elastic (it springs back when you roll) and more prone to tearing along weak seams. Letting the dough rest in the fridge after mixing gives the gluten time to relax (you might see this called 'autolyse' in bread baking)—skipping that rest is one of the most common reasons home doughs crack when they shouldn't."
      ]
    },
    {
      "heading": "Pie mode debugging",
      "paragraphs": [
        "Fix My Recipe's pie category highlights when the fat-to-flour ratio sits at the extremes. If your dough feels dry every single time, your water ratio may just sit low for the flour brand you're using—different brands of all-purpose flour have meaningfully different protein content and water absorption, even when they look identical on the shelf."
      ]
    },
    {
      "heading": "Water and gluten",
      "paragraphs": [
        "Minimal water keeps gluten development low (which is good for tenderness), but pushed too far it makes the dough brittle and crack-prone. Tricks like using vodka instead of part of the water work because the alcohol evaporates during baking but doesn't activate gluten the way water does—so the dough hydrates enough to roll without going tough. A short rest between rolls lets the gluten relax and reduces the springback that creates seam tears."
      ]
    },
    {
      "heading": "Technique",
      "paragraphs": [
        "Roll from the center outward in smooth, even strokes rather than back and forth, and give the dough quarter-turns as you go. That keeps the disk round and distributes the work across all four sides, so you aren't repeatedly stretching one axis past its breaking point while leaving another underworked."
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
        "Egg washes brown at different rates: whole egg browns moderately, yolk-only goes deep and shiny, milk wash stays gentle—pick one and stick with it for a series of test bakes. Docking and pie weights change how steam escapes during a blind bake; note the weight amount and the minutes you baked weighted. Fruit acidity (pH) affects starch set—very acidic fillings like cherry or rhubarb often need adjusted thickener percentages compared to the generic charts because acid breaks down starch chains as they're trying to network."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Pie Crust Gets Tough",
      "path": "/pie-science/why-pie-crust-gets-tough"
    },
    {
      "title": "Butter vs Shortening in Pie Crust",
      "path": "/pie-science/butter-vs-shortening-in-crust"
    }
  ],
  "faqs": [
    {
      "q": "Food processor vs cutting in by hand?",
      "a": "A food processor is fast, but it's easy to over-process and cut the butter into pieces too small to laminate into real flaky layers—you can end up with a crumbly sand-textured dough instead. Hand-cutting with a pastry blender or even your fingertips gives you more control, even if it's slower."
    },
    {
      "q": "Does whole wheat crust crack more easily?",
      "a": "Yes, slightly. The bran particles in whole wheat flour physically interrupt the gluten network as it tries to form, which gives you a more tender dough but also makes it more prone to cracking under the rolling pin. A touch more water and a longer rest both help; some bakers blend half whole wheat with half all-purpose to get some of the flavor without all of the brittleness."
    }
  ]
};

export default function WhyPieCrustCracksWhenRolling() {
  return <ScienceArticlePage spec={SPEC} />;
}
