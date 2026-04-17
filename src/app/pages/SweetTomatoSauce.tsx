import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "sweet-tomato-sauce",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Sweet Tomato Sauce: Recipe & Balance Guide",
  "subtitle": "Tomato + butter + extra sugar balance — kid-friendly marinara-style sauce.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🍅",
  "quickAnswer": "Sugar fights harsh acid from canned tomatoes; add in small pinches and taste after simmering. Reduce for body before sweetening harder—concentration changes nearly every perception gate.",
  "intro": "Sweet tomato sauce is still tomato-forward, but sugar shifts perception from sharp to round. Fat—often olive oil or butter—carries aroma and softens bite. The Sauce Sensei wheel helps separate acid-led fixes from sweet-led fixes so you do not chase the wrong axis. This profile is common in family cooking where bitterness and aggressive acid are unwelcome; the craft is to add enough sugar for kindness without crossing into ketchup land. Salt still matters: sweetness without salt reads flat and sugary. If you are scaling up for a crowd, remember that restaurant portions dilute sauce on the plate differently than a spoon taste from the pot—adjust sugar and salt against the pasta or protein you actually serve. Leftovers often taste sweeter cold—reheat gently and re-taste before serving again.",
  "sections": [
    {
      "heading": "Simmer with a plan",
      "paragraphs": [
        "Long simmer integrates aromatics and mellows harsh notes from canned tomatoes. Sugar should solve bitterness or sharpness, not turn the sauce into dessert—taste after each pinch and log what you add once you find the band you like.",
        "If the sauce is thin, reduce before sweetening harder; concentration changes acid perception, salt perception, and sweetness perception together."
      ]
    },
    {
      "heading": "Salt late and deliberately",
      "paragraphs": [
        "Tomato products vary wildly in baseline salt and acid; season near the end of cooking for predictable results when possible. If you must salt early for sweating aromatics, under-target finishing salt.",
        "Cheese finishes (parmesan) bring salt—account for them before final adjustment."
      ],
      "tip": "Taste at service temperature; cold sauce reads less sweet and more acid than hot."
    },
    {
      "heading": "Fat choice and mouthfeel",
      "paragraphs": [
        "Butter adds roundness and a soft finish; olive oil adds fruit and pepper notes. Blending both is common for complexity. Enough fat helps sugar feel integrated rather than granular on the palate.",
        "If the sauce feels watery-sweet, you may need body from reduction or a small starch route—not more sugar."
      ],
      "bullets": [
        {
          "title": "Onion and carrot",
          "text": "Natural sweetness from vegetables can reduce reliance on refined sugar—cook them in patiently."
        }
      ]
    },
    {
      "heading": "Acid without harshness",
      "paragraphs": [
        "Sometimes a small lemon pinch or wine reduction adds depth without reading sharp—add after sugar and salt are close, because acid last moves the whole picture.",
        "Baking soda pinches can mellow very acidic cans—use sparingly and taste; it can muddy flavor if overdone."
      ]
    },
    {
      "heading": "Herbs, alliums, and finishing",
      "paragraphs": [
        "Basil and oregano behave differently with sweet profiles—basil reads pizza-friendly; too much dried herb can taste dusty against soft sugar.",
        "Finish delicate herbs at the end; allow long-cooked alliums to sweeten the base honestly."
      ]
    }
  ],
  "faqs": [
    {
      "q": "My sweet sauce tastes like candy—how do I fix it?",
      "a": "Dilute with unsalted tomato or stock, increase savory notes (umami), add acid carefully, and rebuild salt. Sugar is not the only roundness tool."
    },
    {
      "q": "Why add sugar if onions are already sweet?",
      "a": "Onions add complexity and gentler sweetness; sugar targets sharp acid edges quickly. Many cooks use both; measure intentionally."
    },
    {
      "q": "Is this the same as ketchup?",
      "a": "No—ketchup is its own preserved, heavily sweetened category. Sweet marinara should still read as tomato with supportive sugar, not dessert condiment."
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
