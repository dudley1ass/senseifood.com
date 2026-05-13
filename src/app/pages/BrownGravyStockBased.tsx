import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "brown-gravy-stock-based",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Brown Gravy (Stock-Based Roux): Recipe & Balance Guide",
  "subtitle": "Roux-thickened gravy from drippings or butter, flour, and stock — how to read salt against fat and avoid ending up with thin, watery gravy.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🍲",
  "quickAnswer": "Equal tablespoons of butter and flour by volume — roughly a 1.5 to 1.9 to 1 ratio by weight — is the classic roux. Cook that paste until it smells toasty, whisk in warm stock in stages, simmer until it coats the back of a spoon, then taste and salt at the end. If you season too early, the gravy keeps reducing and concentrates the salt past where you want it.",
  "intro": "Brown gravy is a small handful of moves done in the right order. You toast a roux (a paste of flour and fat that thickens and gives the gravy its body — the flour swells and tangles into a gel as it cooks in the warm liquid), add stock in stages so it never seizes up, simmer it until it coats a spoon, and only then chase salt and pepper. The Sauce Sensei balance model treats brown gravy as fat-forward once the roux carries butter or pan drippings, with most of the salt coming from the stock and your finishing pinches. That is why tasting late matters more than nailing grams on paper — you can hit your target ratios perfectly and still end up either bland or salty depending on what the stock and the reduction did along the way.",
  "sections": [
    {
      "heading": "Roux first, liquid second",
      "paragraphs": [
        "Cook the roux until it smells toasty and the raw, pasty flour note disappears — usually a few minutes over gentle heat. A pale roux (cooked just enough to lose the raw flavor) thickens the most because the starch is still mostly intact. A deeper-cooked, darker roux has more nutty flavor but less thickening power, because the heat has broken some of the starch granules that would otherwise gel and grab water. Pick your toast level for the dish: pale for white gravy and weeknight chicken, golden for everyday brown gravy, cocoa-dark for gumbo-style depth. Add the stock warm and in stages — pouring cold stock onto a hot roux can cause the flour starches to shock and clump, while pouring all the stock in at once dilutes the paste before it has a chance to lump-free itself. A few small additions, each whisked smooth before the next, gives a glossy gravy without strain."
      ],
      "tip": "Season after the gravy is close to its final thickness — as it reduces it concentrates salt, so an early pinch can become a heavy hand by the time you serve."
    },
    {
      "heading": "Balance on the wheel",
      "paragraphs": [
        "Stock-forward gravies feel under-salted until they reduce, because the dissolved seasoning is spread thin in a lot of water. As that water evaporates the salt-per-spoonful climbs. Fat from the roux gives the gravy a rounded, coating mouthfeel that softens any sharp edges from the stock. If the gravy ends up reading very fat-heavy — slick on the tongue, almost greasy — a small extra pinch of salt or a splash of acid (a dash of wine, sherry, or even a teaspoon of vinegar) can restore contrast without making the sauce taste sour. Use the interactive builder to scale your batch and watch how moving butter, flour, and stock grams shifts the modeled pulls, then trust your spoon at the stove. The model is a map; your tongue is the territory."
      ]
    },
    {
      "heading": "Heat, simmer, and texture",
      "paragraphs": [
        "Once the stock is in, you are looking for a steady, lazy bubble — not a hard boil. A hard boil hammers the flour starches and shears the small fat droplets that give brown gravy its glossy coat, and it pushes evaporation faster than you can react. A gentle simmer gives the starch time to fully hydrate (each starch granule swells up like a tiny sponge, soaking up water and thickening the surrounding liquid), so the texture sets evenly. A finished gravy should fall off a spoon in a slow ribbon and pool around food on the plate rather than running off it.",
        "If the gravy is too thin when you taste it, just keep simmering — reduction will tighten the body and intensify flavor at the same time, though both move faster near the end as less water is left to evaporate. If the gravy goes too thick, splash in warm stock or water and re-simmer for a minute. Adjust salt last, after texture is settled, because thinning and reducing both move the perceived salinity around."
      ]
    },
    {
      "heading": "Drippings, alternatives, and serving",
      "paragraphs": [
        "Pan drippings from a roast give brown gravy its strongest savory voice — they carry browned proteins and caramelized sugars that have spent hours building flavor in the oven. If you do not have drippings, butter is fine, but consider adding a teaspoon of tomato paste browned briefly in the pan before the flour goes in. Browning tomato paste develops Maillard compounds (the same chemistry that gives roasted meat its deep flavor) and contributes a savory depth that mimics drippings without overshadowing the gravy. Serve gravy hot — its viscosity drops as the temperature falls, so a gravy that was perfect at the stove can feel slightly thick by the time it reaches the plate. Pour at the last minute and you get the right ribbon."
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
    "sauceId": "simple-gravy"
  }
};

export default function BrownGravyStockBased() {
  return <ScienceArticlePage spec={SPEC} />;
}
