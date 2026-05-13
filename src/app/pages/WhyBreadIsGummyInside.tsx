import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-is-gummy-inside",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Is Gummy Inside",
  "subtitle": "The starches inside a loaf need both enough heat and enough time to set properly; pulling the bread early or cutting in too soon are the classic ways to end up with a gummy middle.",
  "readTime": "7 min read",
  "emoji": "🫠",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "A gummy interior almost always means one of two things: the loaf never got hot enough inside for long enough, or you sliced into it while the inside was still steamy and unset. Aim for roughly 190–210°F internal temperature (the exact number depends on the style of bread), and let the loaf cool all the way before you cut it.",
  "intro": "“Gummy” is a texture word, not just a moisture word. It describes a crumb that feels moist, sticky, and clingy—the kind that smears on the knife instead of breaking cleanly. That is very different from a tender crumb, which is soft but releases the blade easily. Bakers are quick to blame the dough hydration written on the recipe, but the timeline of heat actually creeping into the center of the loaf usually matters more than any tablespoon-level tweak. Inside a wheat loaf, the starch granules absorb water, swell, and lock into a stable network in a process called gelatinization, which is mostly finished once the crumb hits 185–205°F (85–96°C). When bread comes out gummy, you usually pulled it out of the oven before that whole crumb was uniformly in that range, or you cut into it while the middle was still 120–140°F (49–60°C) and full of steam.",
  "sections": [
    {
      "heading": "Under-baking and carry-over cooking",
      "paragraphs": [
        "Bread sets from the outside inward. A beautifully dark crust can form well before the center has crossed the temperature where the starches fully gelatinize and the proteins set into a stable, sliceable mesh. That half-set center will feel wet and dense in your mouth even after the loaf has cooled completely. The honest fix is a thermometer in the thickest part of the loaf. Lean wheat doughs are usually done somewhere around 200–208°F internal; enriched breads (with butter, eggs, milk) often read a couple of degrees lower, but they still have to clear the threshold where the crumb stops looking glassy and translucent and starts looking properly set."
      ]
    },
    {
      "heading": "Cooling and starch retrogradation",
      "paragraphs": [
        "Straight out of the oven, the starch in the crumb is still holding a lot of trapped steam. Cutting in immediately forces that steam out unevenly and leaves a tacky, gluey layer on the blade. Letting the loaf rest on a wire rack for at least an hour (longer for a really big loaf) gives the moisture inside time to even out. If you absolutely have to serve warm bread, compromise on the format—bake rolls or a small batard, where heat reaches the center evenly and the loaf cools quickly enough to be sliceable, instead of hacking into a hot boule."
      ],
      "tip": "If your crust looks dark but the inside is still gummy, drop the oven temperature 25°F next time and bake longer—getting heat deep into the loaf matters more than how brown the outside looks."
    },
    {
      "heading": "Formula factors",
      "paragraphs": [
        "Very wet doughs (high-hydration doughs) are great for an airy open crumb, but they are also easier to under-bake. The crumb can look beautifully open and holey while still being moist and unset inside. Adding sugar and dairy makes the crust brown faster, which can fool your eye into pulling the loaf early. Sourdough that is quite acidic can also interact with starch texture in a way that feels slightly tacky on the tooth—so if your bread tastes sharp and the crumb is also wet, do not jump to adding more flour. Verify the fermentation first, and then verify that it actually finished baking."
      ]
    },
    {
      "heading": "Next steps with tools",
      "paragraphs": [
        "Note the temperature you pulled the loaf at and how long you let it cool, and keep a photo or two of the crumb. Fix My Recipe lets you compare your hydration and enrichment levels (how much fat, sugar, or dairy is in the dough) to typical profiles, so you can see whether the oven side of the story or the dough side needs adjusting first."
      ]
    },
    {
      "heading": "Carry-over and cooling",
      "paragraphs": [
        "After you take a loaf out of the oven, the residual heat in the crust will keep cooking the center a tiny bit—typically another 2–5°F rise—but this “carry-over” cannot rescue a loaf you pulled far below temperature. The bread will not magically finish baking on the cooling rack. Once the loaf is properly done, let large loaves cool down to about 90°F (32°C) internally before you slice them, or even cooler if you want truly clean slices. Warm bread always smears and feels wet under the knife, even when it is technically baked through perfectly."
      ]
    },
    {
      "heading": "Enzymes and very long autolyses",
      "paragraphs": [
        "If you do a very long cold autolyse (mixing flour and water and resting it for many hours in the fridge before mixing in salt and yeast), enzymes in the flour called proteases—which break down protein—have time to chew on the gluten. That can degrade the gluten enough that the crumb feels sticky, even though the loaf is fully baked. The fix is shortening the autolyse or chilling it harder, not throwing on more flour."
      ]
    },
    {
      "heading": "Gummy loaves reward a boring probe habit",
      "paragraphs": [
        "Most home gumminess is simply under-baked center or slicing while steam is still rearranging itself inside the loaf. A thermometer in the thickest part removes the argument: lean doughs are often fully set somewhere in the 200–208°F (93–97°C) neighborhood, while enriched doughs sometimes finish a little lower depending on sugar and fat—compare to your recipe’s target, not to someone else’s Instagram timeline.",
        "If the numbers say done and it is still tacky, think about inclusions (cheese, fruit) holding moisture, a too-long autolyse weakening gluten, or an oven that browns the outside before the middle catches up—foil tent and lower heat can buy the center time without burning the roof. One change per bake keeps the story honest."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Bread Rises",
      "path": "/bread-science/why-bread-rises"
    },
    {
      "title": "How Yeast Works in Baking",
      "path": "/bread-science/how-yeast-works"
    }
  ],
  "faqs": [
    {
      "q": "How do I know my thermometer is accurate?",
      "a": "Stick the probe in a glass of ice water (it should read 32°F / 0°C) and then in a pot of boiling water (it should read about 212°F / 100°C at sea level, lower at altitude). If the readings are off, either calibrate the probe or just remember the offset so you can mentally adjust."
    },
    {
      "q": "Is sourdough gumminess different from yeast bread gumminess?",
      "a": "Sourdough’s extra acidity can make the crumb feel slightly tacky on the tooth even when fully baked, but you still want to check internal temperature first—it is almost always under-bake, not acidity, that makes a loaf truly gummy."
    }
  ]
};

export default function WhyBreadIsGummyInside() {
  return <ScienceArticlePage spec={SPEC} />;
}
