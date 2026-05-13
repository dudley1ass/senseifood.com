import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "lemon-pan-sauce",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Lemon Pan Sauce: Recipe & Balance Guide",
  "subtitle": "Stock plus lemon plus cold butter mounted at the end — bright acid carrying a glossy fat emulsion that hits the plate as a thin, lively coat.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🍋",
  "quickAnswer": "Add the lemon off the heat at the very end so you keep the volatile top notes — the citrus aroma compounds that smell like fresh peel are extremely heat-sensitive and start vanishing the moment lemon juice hits a hot pan. Boil it hard and the sauce can taste harsh or metallic where it once tasted bright.",
  "intro": "Lemon pan sauce is a textbook way to finish a chicken or fish dish. The sequence is built into the recipe: you sear the protein and build fond (the dark caramelized bits of cooked-on protein and sugars stuck to the pan bottom — actually one of the most flavorful things in cooking), then you deglaze with stock or wine to dissolve that fond into the liquid, reduce until the sauce concentrates, and finish off heat with cold butter and a controlled hit of lemon juice. The order is the recipe. Late-added acid preserves the freshest part of the citrus aroma because heat drives off the volatile compounds — the small, easily-vaporized molecules — that give lemon its lift. Late-added cold butter, swirled in off heat or at the barest simmer, builds an emulsion (tiny droplets of fat suspended in the watery sauce) that adds gloss and body without splitting, because at lower temperatures the dairy fat does not get sheared apart from the milk proteins holding it together. If you reduce on a hot enough pan that the sauce is rolling and the surface is bubbling like a kettle, your final butter mount is fighting a losing battle.",
  "sections": [
    {
      "heading": "Acid timing",
      "paragraphs": [
        "If the sauce needs to reduce, do it before the lemon goes in. Late acid gives you a clear, fresh lift on the palate — the kind of sensation that makes a sauce taste alive — while early acid simmered into the sauce becomes part of the background chord, mellower and rounder but without that top-note pop. Whisk cold butter into the warm sauce off heat or at the barest simmer to give the emulsion the best chance of forming. The reason cold butter works better than warm or melted butter for mounting is structural: cold butter is still a stable matrix of fat crystals, water droplets, and milk proteins, and as it slowly melts into the warm sauce it releases each component into a controlled environment that lets the proteins coat the new fat droplets and hold them in suspension. Melted butter is already split into oil and milk solids and gives you no help with the emulsion."
      ]
    },
    {
      "heading": "Serving and balance",
      "paragraphs": [
        "This sauce skews acid-forward by design — that is part of its character, not a problem to fix. Balance it with salt and the fat from the butter using the Sauce Sensei wheel as a map, not a scoreboard. If it tastes great on the plate but looks extreme on the model, double-check that the grams you entered match what is actually in the pan, since a pan sauce can pull body from drippings the model does not see. Salt threshold matters here in particular because salt and lemon both light up bright flavors, and when both are at the right level the sauce feels electric — when either one is low, it tastes flat in a way that suggests the wrong fix."
      ]
    },
    {
      "heading": "Heat management when finishing with butter",
      "paragraphs": [
        "The most common failure of a lemon pan sauce is breaking the butter — the sauce ends up oily on the surface with a thin watery layer underneath, instead of the unified glossy coat you wanted. The cause is almost always heat. Once your reduction is done, pull the pan off the burner, let it sit for ten or fifteen seconds, and then drop in the cold butter cubes a few at a time while swirling or whisking gently. The residual heat is plenty to melt the butter into the sauce, but it is not so much that the fat shears free of the milk proteins holding it together. If you see signs of splitting — oily slick, watery layer — add a teaspoon of cold water or stock and whisk vigorously to rebuild the emulsion.",
        "The lemon goes in last, after the butter is incorporated. That way, the bright top notes from the lemon survive into the finished sauce, and the acidity does not destabilize the new emulsion you just built. Drop in zest if you want even more aromatic lift — the oils in the yellow part of the peel are concentrated and floral in a way the juice is not."
      ]
    },
    {
      "heading": "Service and small batches",
      "paragraphs": [
        "Pan sauces are designed to be made and served immediately — they do not hold well. As the sauce sits, the butter emulsion loosens and starts to split, and the volatile lemon aromatics keep escaping. If you have to pause between pan-sauce and table, leave the sauce off the heat with a piece of plastic pressed to the surface and warm it briefly with a few drops of stock and a quick whisk just before serving. A small batch — say, enough to sauce two pieces of fish — also concentrates faster than a large one because it has more surface area relative to volume, so check seasoning aggressively when you scale recipes down."
      ]
    }
  ],
  "related": [
    {
      "title": "Temperature: The Silent Killer of Sauces",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "Order of Operations: Timing Changes Everything",
      "path": "/sauce-science/order-of-operations-sauce-timing"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "sauceSensei": {
    "sauceId": "pan-sauce-lemon"
  }
};

export default function LemonPanSauce() {
  return <ScienceArticlePage spec={SPEC} />;
}
