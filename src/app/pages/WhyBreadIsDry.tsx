import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-is-dry",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Is Dry",
  "subtitle": "How long it bakes, how thirsty the flour is, how you store it, and how much fat is in the dough all quietly pull water out of the crumb.",
  "readTime": "7 min read",
  "emoji": "🏜️",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Dry bread almost always comes from one of three things: you baked it past the point where the inside was set, the flour drank up more water than the recipe expected, or the bread sat around losing moisture to the air. If the crust is thick and the crumb feels chalky in your mouth, pull the loaf a touch earlier next time. And once you cut into a loaf, keep the cut face covered—an exposed cut edge dries out shockingly fast.",
  "intro": "“Dry” is a word your mouth uses for something specific in the science: there is not enough free water left in the crumb, the starches have rearranged into stiffer, more crystalline structures (a process bakers call retrogradation—basically staling at the molecular level), and the loaf has lost its plasticizing water that normally keeps bread soft. Home bakers often blame the recipe and start tweaking tablespoons of water, when in reality the oven and the bread box are usually moving far more water than any small ingredient change ever could. Two things make crumb feel dry: baking past about 210°F (99°C) in spots, which drives off extra moisture, and the slow staling that happens over hours and days as those starches reorganize. Breads enriched with fat and eggs lose their free moisture on a different schedule than lean, flour-water-salt-yeast loaves, so the same storage habit can give very different next-day results.",
  "sections": [
    {
      "heading": "Over-baking past the point the crumb has set",
      "paragraphs": [
        "Once the inside of a loaf crosses the temperature range where the crumb is properly set, every extra minute in the oven is mostly just driving water out. A loaf you leave in a little longer “to be safe” can come out tough, cottony, and noticeably drier even though the recipe itself was fine. The fix is matching the loaf size to the bake time and heat: small rolls finish in a flash, while a big country loaf (a miche) wants a gentler heat for longer so the heat can creep all the way to the center without overcooking the outer crumb."
      ]
    },
    {
      "heading": "Hydration and the flour you actually bought",
      "paragraphs": [
        "Flour is a crop, not a chemistry standard. The protein and mineral content (bakers call the mineral content “ash”) drifts with the seasons and from one bag to the next. A hydration that felt perfect in January can feel dry in July because the new bag is simply thirstier. An autolyse—just mixing the flour and water and letting it rest for 20–60 minutes before adding salt and yeast—is a great low-effort way to see how thirsty this particular flour really is before you commit to a final dough."
      ],
      "tip": "Add water in two stages: hold back about 3–5% of the water until you have felt the dough after its rest, then trickle the rest in only if it still feels stiff."
    },
    {
      "heading": "Staling and storage",
      "paragraphs": [
        "Staling is not only water sneaking out of the loaf—it is also the starch granules reorganizing into stiffer crystalline patterns after baking, which is exactly the retrogradation we mentioned earlier. The crumb can still hold plenty of water and yet feel dry and crumbly because of that structural shuffle. The fridge is the worst place for most breads because cold temperatures actually speed this reorganization up. If you will not finish the loaf in a day or two, slice it and freeze the slices; you can pull them straight to a toaster. For a crusty loaf you are eating today, a paper bag on the counter is fine—just accept that the crust will soften the moment you wrap it in plastic."
      ]
    },
    {
      "heading": "Using the debugger",
      "paragraphs": [
        "Pull up your dough’s hydration percentage and compare it to the reference bands shown in bread mode. If you are sitting low for an artisan open-crumb loaf but the bread still feels dry, then the bake itself or the storage habits are almost certainly the main suspect, not the hydration written at the top of the recipe."
      ]
    },
    {
      "heading": "Bake profile",
      "paragraphs": [
        "Lower temperature for a longer time evens out the heat for thick, dense loaves; thin free-form loaves can take more direct, radiant heat from above. If the crust hits a deep amber color but your probe says the inside is still 15°F shy of the target, tent loose foil over the top so the crust stops darkening while the middle catches up. Steam early in the bake matters too: a moist surface stays stretchy enough for the loaf to do its “oven spring” jump. If you skip steam, the crust seals too fast and traps steam inside unevenly—you can end up with the strange paradox of a dry-looking crust hiding a wet, undercooked crumb."
      ]
    },
    {
      "heading": "Storage humidity",
      "paragraphs": [
        "A bread box that sits around 70–80% relative humidity slows staling noticeably compared with a paper bag sitting on a dry kitchen counter, and it is still dry enough not to grow mold in a warm kitchen. You do not need a fancy humidity-controlled box—a roomy ceramic or wooden bread box does most of the work, because it traps just enough of the bread’s own evaporated moisture to keep the crust and crumb in friendlier balance."
      ]
    },
    {
      "heading": "Dryness is usually a ratio, a bake, or the clock after baking",
      "paragraphs": [
        "If the crumb feels chalky and tight, look first at how much flour actually went into the bowl—packed cups and humid bags quietly steal water from the formula. If the crumb is open but the loaf still eats dry, you may have baked past the sweet spot or cooled it in a hot, breezy spot that pulled moisture out fast.",
        "For the next bake, change one kindness at a time: weigh flour and water, shorten bake slightly if the crust is already dark, tent with a towel while cooling if the crust set rock-hard early, or move toward a touch more fat or milk in enriched breads. SenseiFood’s Fix My Recipe bread mode still helps when you suspect the hydration percentage and enrichment are out of balance for the loaf style you want."
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
      "q": "Is oil or butter better for keeping bread soft?",
      "a": "Oil-enriched breads usually feel softer the next day because oil stays liquid at room temperature, while butter firms up as it cools and makes the crumb feel stiffer—even though the actual water content is similar."
    },
    {
      "q": "What is freezer burn, and how do I avoid it on bread?",
      "a": "Freezer burn is sublimation—ice in the bread turning straight into vapor and escaping—so the crumb dries out in the freezer instead of staying frozen-fresh. Wrap slices tightly in plastic and then in foil or a freezer bag with the air pressed out, and they keep their moisture for weeks."
    }
  ]
};

export default function WhyBreadIsDry() {
  return <ScienceArticlePage spec={SPEC} />;
}
