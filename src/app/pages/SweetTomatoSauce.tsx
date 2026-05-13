import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "sweet-tomato-sauce",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Sweet Tomato Sauce: Recipe & Balance Guide",
  "subtitle": "Tomato, butter, and gentle sugar — the kid-friendly marinara that hides its science behind a smooth, rounded mouthfeel.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🍅",
  "quickAnswer": "Sugar fights the harsh acid from canned tomatoes by giving your tongue a competing sweet signal, which makes the same level of acidity read as round instead of sharp. Add sugar in small pinches and taste after the sauce simmers — sweetness reads different in hot sauce than cold, and you can land in candy territory if you sweeten in one big push.",
  "intro": "Sweet tomato sauce is still tomato-forward, but the sugar shifts the perception from sharp to rounded. Fat — usually olive oil or butter or both — carries aroma compounds and softens the bite further. The Sauce Sensei wheel helps separate acid-led fixes from sweet-led fixes so you do not chase the wrong axis with the wrong tool. This profile is common in family cooking where bitterness and aggressive acidity are not welcome at the table; the craft is adding enough sugar for kindness without crossing into ketchup territory. Salt still matters everywhere: a sauce that is sweet but under-salted reads flat and sugary, like an under-baked dessert. If you are scaling up for a crowd, remember that restaurant portions dilute the sauce on the plate (with pasta water, with the surface of the protein) differently than a spoon-taste from the pot. Adjust sugar and salt against the actual dish you are serving, not the spoon. And remember that leftovers often taste sweeter cold than hot — reheat gently before re-tasting, because cold mutes other flavors more than it mutes sweetness.",
  "sections": [
    {
      "heading": "Simmer with a plan",
      "paragraphs": [
        "A long simmer integrates the aromatics (onion, garlic, herbs) and mellows the harsh notes from canned tomatoes. The malic and citric acids in canned tomato can taste aggressive when raw and round out as they cook. Sugar should be solving a specific problem — bitterness from over-cooked vegetables, sharpness from very acidic tomatoes — not turning the sauce into dessert. Taste after each pinch and write down what you added once you find the sweetness band you like, so you can repeat it. If the sauce is thin and weak, reduce it before sweetening harder; concentration changes how every other taste registers, because the dissolved sugars, acids, and salts all climb together as water leaves."
      ]
    },
    {
      "heading": "Salt late and deliberately",
      "paragraphs": [
        "Tomato products vary wildly in baseline salt and acid content. Some brands of canned tomatoes are barely seasoned; others come with enough salt that a teaspoon of additional salt sends the sauce into salt-lick territory. Season near the end of cooking when you can taste the actual final liquid, not the early dilute version. If you have to add salt early for a specific reason — sweating aromatics, for instance, where salt draws moisture out of onion and garlic so they soften faster — under-target the early salt and plan to finish at the end. Cheese finishes like parmesan bring a lot of salt and umami; account for them before doing a final salt adjustment, or you can land salty after the cheese hits."
      ],
      "tip": "Taste at service temperature; cold sauce reads less sweet and more acid than hot, because heat affects how each taste receptor registers its target molecule."
    },
    {
      "heading": "Fat choice and mouthfeel",
      "paragraphs": [
        "Butter adds roundness and a soft creamy finish — the milk solids in butter contribute a slight cooked-dairy note that flatters tomato beautifully. Olive oil adds fruit and pepper notes that come from the polyphenols in the oil. Blending both is common in classic Italian-American sauce traditions because you get the best of each. Enough fat in the sauce helps the sugar feel integrated rather than granular or sticky on the palate — fat coats the tongue and slows the tongue's reading of sweetness, so each bite tastes less aggressively sweet than the same sugar content in a fat-free sauce. If the sauce feels watery-sweet — sweetness without body — you may need body from reduction or a small starch trick (a tablespoon of tomato paste, a roux base), not more sugar."
      ],
      "bullets": [
        {
          "title": "Onion and carrot",
          "text": "Natural sweetness from slowly cooked vegetables can reduce the need for refined sugar. Carrot in particular contributes both sweetness and aromatic depth as it cooks down. A patient sweat — onions and carrots in olive oil over low heat until they turn translucent and soft — gives you a savory-sweet base before you even open the can of tomatoes."
        }
      ]
    },
    {
      "heading": "Acid without harshness",
      "paragraphs": [
        "Sometimes a small squeeze of lemon or a brief wine reduction adds depth without reading sharp. Add it after sugar and salt are close to right, because acid last moves the whole picture of the sauce — it shifts how you read every other taste. A pinch of baking soda can mellow very acidic cans (it reacts chemically with the acid, neutralizing some of it), but use it sparingly and taste between pinches; too much baking soda gives the sauce a flat, slightly soapy, slightly muddy character that does not improve with further cooking. A quarter teaspoon for a whole pot is plenty."
      ]
    },
    {
      "heading": "Herbs, alliums, and finishing",
      "paragraphs": [
        "Basil and oregano behave differently in a sweet sauce profile. Basil reads pizza-friendly and fresh, especially if added near the end. Dried oregano in heavy doses can taste dusty against soft sugar — the tannic, herbaceous notes are stronger when the rest of the sauce is mellow. Finish delicate herbs at the very end so their volatile aromas (the lightest molecules, the ones that smell most distinctly like the fresh leaf) survive onto the plate. Allow long-cooked alliums — onion, garlic, leek — to sweeten the base honestly through patient heat, which builds depth that no last-minute spoonful of sugar can replicate."
      ]
    }
  ],
  "faqs": [
    {
      "q": "My sweet sauce tastes like candy — how do I fix it?",
      "a": "Dilute with unsalted tomato or stock to lower the sugar concentration, increase the savory and umami notes (a parmesan rind, a splash of fish sauce, a teaspoon of soy sauce — any of these add depth without much volume), add a small careful acid hit to cut through the sweetness, and rebuild the salt at the end. Sugar is not the only roundness tool, and once you have over-sugared, you have to lean on the other axes to bring the sauce back to balance."
    },
    {
      "q": "Why add sugar if the onions are already sweet?",
      "a": "Onions add complexity and a gentle, well-rounded sweetness that comes from cooking down their natural sugars over time. Refined sugar — added at the end — targets sharp acid edges quickly and surgically, where slow onion sweetness builds depth but does not pinpoint a specific sour spike. Many cooks use both, with the onions providing the structural sweetness and a final pinch of sugar smoothing any harsh edges from the tomatoes."
    },
    {
      "q": "Is this the same thing as ketchup?",
      "a": "No. Ketchup is its own preserved category — heavily sweetened, heavily seasoned, vinegared, cooked down to a paste-like consistency designed for shelf stability and condiment use. A sweet marinara should still read primarily as tomato with supportive sugar in the background — sweet enough to feel kind, not so sweet that you taste sugar before you taste tomato. If your marinara has crossed into ketchup territory, the cure is more savor and less sweet."
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
    "sauceId": "tomato-sauce-sweet"
  }
};

export default function SweetTomatoSauce() {
  return <ScienceArticlePage spec={SPEC} />;
}
