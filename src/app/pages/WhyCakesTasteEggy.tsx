import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-taste-eggy",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Taste Eggy",
  "subtitle": "Sulfur-y notes from overcooked egg, a recipe that does not have enough flavor to balance the eggs, and a pale, under-browned crust can all add up to a cake that tastes “eggy” even with the right number of eggs.",
  "readTime": "7 min read",
  "emoji": "🥚",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "An eggy flavor usually comes from overcooked egg proteins releasing their sulfur compounds, an egg-to-sugar ratio that tips heavy without enough other flavors to balance it, or a pale crust that does not have the toasty browned aromas to mask the egg note. Add a small pinch more salt, more vanilla, a touch of brown sugar, or stop the bake before the edges over-set.",
  "intro": "Eggs themselves taste pretty mild, but eggs contain sulfur-bearing amino acids, and when the proteins are overcooked, those sulfur compounds (like hydrogen sulfide and related molecules—the same family that gives boiled eggs their distinctive smell) start to amplify. Sometimes the recipe simply lacks the contrast ingredients that would otherwise hide egg’s clean but animal-y note. Egg white proteins denature (unfold and link up into a set network) across a wide temperature band starting near 140°F (60°C) and continuing to firm up well past 180°F (82°C); yolk sets more gradually. Prolonged heat drives more of those sulfur volatiles into the cake than a brief, gentle set would—sheet cakes with thin edges often over-expose the egg to high heat at the rim, even when the middle is set perfectly.",
  "sections": [
    {
      "heading": "Heat and sulfur",
      "paragraphs": [
        "A long bake at a high temperature in a thin batter can over-set the egg films right at the edges and along the top of the cake. Those over-set edges are where eggy notes concentrate, especially in sheet cakes and any batter that spreads thin and bakes fast at the perimeter."
      ]
    },
    {
      "heading": "Balance",
      "paragraphs": [
        "Sugar, salt, vanilla, citrus zest, and the warm notes of brown butter all counteract plain egg flavor. A cake without much aromatic load (almost no vanilla, no citrus, no spice, no salt) has no other voices to balance the egg—the egg ends up doing the talking by default."
      ]
    },
    {
      "heading": "Yolk-heavy formulas",
      "paragraphs": [
        "Extra yolks enrich the cake (more fat, more emulsifier from the yolk’s lecithin), but they also add more egg flavor for your tongue to register. If you are using a yolk-heavy recipe like a chiffon or a high-ratio cake, compensate with more aroma (vanilla, citrus) and a better browned surface."
      ]
    },
    {
      "heading": "Ratios",
      "paragraphs": [
        "Cake mode in Fix My Recipe highlights the weight of egg in your recipe relative to the flour and sugar. Use it as a sanity check before randomly removing an egg, since pulling an egg out also affects the structure of the cake, not just the flavor."
      ]
    },
    {
      "heading": "Maillard, sugar, and how browning masks egg",
      "paragraphs": [
        "Browning reactions produce hundreds of aromatic compounds (the toasty, nutty, caramelized smells of a well-baked cake) that compete with egg’s mild sulfur notes. A pale, under-browned sponge with a high egg ratio will read as eggy much faster than a cake whose top has caramelized properly. A few grams of brown sugar or milk powder added to the batter increases Maillard browning without rewriting the recipe. Salt also shifts flavor perception broadly; many “eggy” complaints disappear with another ⅛–¼ teaspoon of salt in a test batch—measure salt by weight for repeatability, because teaspoons of different salts vary a lot."
      ]
    },
    {
      "heading": "Yolk-heavy and custard-style layers",
      "paragraphs": [
        "Yolks bring lipids and emulsifiers (especially lecithin, a phospholipid that emulsifies fat into water-based liquids), but they also bring more egg flavor mass. Balancing with vanilla, citrus zest, almond extract, or a teaspoon of coffee in chocolate cakes keeps the flavor profile complex and interesting rather than one-note egg."
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
      "title": "Why Eggs Matter in Baking",
      "path": "/baking-science/why-eggs-matter-in-baking"
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
      "q": "Do fresh farm eggs taste eggier than supermarket eggs?",
      "a": "They often taste slightly richer because of their fattier, more orange yolks. If that depth bothers you in a cake, lean on balanced recipes that have enough sugar and aromatics to mask it; the answer is rarely to switch eggs."
    },
    {
      "q": "Does the temperature of the eggs matter for flavor?",
      "a": "Yes, indirectly. Eggs at room temperature emulsify into the batter better than fridge-cold eggs, which means the cake bakes with fewer streaky over-baked pockets where the egg has concentrated. Those streaky pockets are exactly where sulfur notes are loudest."
    }
  ]
};

export default function WhyCakesTasteEggy() {
  return <ScienceArticlePage spec={SPEC} />;
}
