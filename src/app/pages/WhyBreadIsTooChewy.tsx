import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-is-too-chewy",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Is Too Chewy",
  "subtitle": "Chew comes from a dense gluten network, not enough water in the dough, and long mixing—soften any one of those and the bite gets gentler.",
  "readTime": "7 min read",
  "emoji": "😬",
  "fixRecipe": {
    "category": "bread",
    "problem": "dense"
  },
  "quickAnswer": "Too much chew usually means your gluten is too strong (high-protein flour, very long mixing), the dough is too dry for the kind of bread you wanted, or the loaf is under-baked and the inside is leaving a tough core. Try mixing for less time, adding a bit more water, or working in a small amount of fat or milk to tenderize the crumb.",
  "intro": "Chew is not a moral failing of your baking—it is rheology, the science of how soft, stretchy materials behave. A crumb springs back against your teeth because gluten (the elastic protein network that forms when wheat flour meets water and gets worked) and starch link up into one continuous, elastic web. Some breads are supposed to chew that way—bagels, New York–style pizza, high-gluten sandwich loaves are practically celebrating it. But when your dinner rolls feel like a workout, you want to either weaken the gluten network on purpose or add tenderizers like fat and dairy to soften how that network behaves. Chew is highest when you combine high gluten development with low hydration relative to the flour’s protein and long mixing. Even the water temperature when you mix matters: warmer dough tends to be more extensible (it stretches easily), cooler dough tends to be tighter and more elastic (it bounces back).",
  "sections": [
    {
      "heading": "Protein and mixing",
      "paragraphs": [
        "Bread flour quietly substituted into a soft-roll recipe is the most common upgrade in chew that you did not actually ask for. The extra protein in bread flour links into tighter gluten chains that survive your teeth a lot longer. Long machine mixing aligns those gluten strands aggressively, building a strong, springy network. Mixing by hand—or doing a shorter mix and then a few stretch-and-folds during bulk fermentation—develops gluten more gently and leaves you with a more relaxed, more tender crumb."
      ]
    },
    {
      "heading": "Moisture and fat",
      "paragraphs": [
        "Water acts as a plasticizer in dough—it lets the gluten network bend instead of tear—so a dry dough automatically feels tougher and chewier. Fat does something a bit different: it physically coats the flour particles and gets in the way of gluten strands fully linking up, so the strands end up shorter (this is why a buttery brioche feels so soft and tears easily compared to a lean baguette, which has no fat to interrupt the gluten)."
      ]
    },
    {
      "heading": "Bake and thickness",
      "paragraphs": [
        "A loaf with a thin crust but a thick, under-set interior can read strangely chewy through the middle, even when the outside seems done. Check the inside with a thermometer and look at how evenly the loaf is browned; if one side is dark and another is pale, the heat distribution in your oven is doing its own thing and could be leaving a chewy stripe in the middle."
      ]
    },
    {
      "heading": "Tune with Fix My Recipe",
      "paragraphs": [
        "Plug your formula into Fix My Recipe and see whether the fat and water are unusually low compared to the amount of flour in similar breads. One structured change at a time—swapping some of the water for milk, or replacing a chunk of bread flour with all-purpose flour—almost always moves chew more than any mystery “tenderizing” additive."
      ]
    },
    {
      "heading": "Protein math and hydration",
      "paragraphs": [
        "At the exact same hydration, bread flour will chew tougher than all-purpose flour because there is simply more protein available to form gluten. Reducing how long you mix, or adding a quiet rest after mixing (an autolyse) before you knead, will soften the perceived chew without forcing you to switch flours. Whole wheat is a special case: the bran (the rough outer layer of the wheat kernel) cuts gluten strands like little blades, so a high-bran loaf can paradoxically feel both gritty and chewy at the same time—the fix for that is different from softening a white-flour loaf, and usually involves soaking the whole wheat for a few hours before mixing."
      ]
    },
    {
      "heading": "Bake color and Maillard",
      "paragraphs": [
        "A very dark crust adds a faint bitter edge that your mouth often registers as “extra chewy” even when the crumb itself is fine. If your loaf already reads 205°F (96°C) inside, you can pull it a hair earlier or finish it at a slightly lower oven temperature to keep the crust from going too far toward bitter."
      ]
    },
    {
      "heading": "What to change next if chew is the complaint",
      "paragraphs": [
        "Chew usually comes from gluten development, acidity from a long ferment, or a crust that browned hard enough to feel extra firm between your teeth. Pick one lane per bake: shorten mix or switch toward lower-protein flour if the crumb is springy-tight; shorten cold proof if sourness and chew arrived together; pull a few degrees earlier or finish at a gentler temperature if the crust is dark and bitter-edged while the inside already reads done.",
        "A crumb photo after the loaf is fully cool keeps you honest—uniform tight grain points to mixing or flour strength, while a decent open crumb with a tough rim points to bake color or steam timing. You still do not need a spreadsheet; a sentence per loaf (\"darker crust, same mix\") beats reinventing the wheel every weekend."
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
      "q": "What is the difference between chewy and tough?",
      "a": "Chewy crumb springs back at you—the gluten is elastic and the bite resists, then yields. Tough crumb tears apart instead of stretching—it feels dry and fibrous. The fixes are different: chew comes from very developed gluten, tough comes from over-baking or not enough moisture and fat."
    },
    {
      "q": "Does an overnight cold ferment make bread chewier?",
      "a": "It can. A long, cold fermentation builds up acid in the dough, and that acidity tightens the gluten network so the crumb feels chewier (and also tangier). A shorter, warmer bulk rise softens both the chew and the sour flavor if those are not what you want."
    }
  ]
};

export default function WhyBreadIsTooChewy() {
  return <ScienceArticlePage spec={SPEC} />;
}
