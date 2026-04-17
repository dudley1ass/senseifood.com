import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "spicy-tomato-sauce",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Spicy Tomato Sauce: Recipe & Balance Guide",
  "subtitle": "Tomato + chili + vinegar — heat and acid in the same build.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🌶️",
  "quickAnswer": "Capsaicin heat and vinegar acid stack — balance with fat, a touch of sweet, and careful salt. Add vinegar in doses you can walk back.",
  "intro": "Spicy tomato sauces walk a tightrope: chili adds heat, vinegar adds brightness, and tomatoes bring acid and body. Fat helps carry flavor and round heat; sugar is sometimes the bridge between sharp and pleasant. The Sauce Sensei wheel keeps you from fixing the wrong axis—more salt will not cure brutal acid if the real issue is unbalanced vinegar, and more sugar will not fix missing savoriness if umami is thin. Layer chiles for flavor, not only Scoville; bloom dried chiles, toast spices, and add acids late enough to keep top notes. Resting overnight often melds heat and acid, but volatile top notes fade—plan a fresh herb or citrus finish at service if brightness matters as much as burn. Taste with your protein: heat reads hotter on delicate fish than on fatty pork.",
  "sections": [
    {
      "heading": "Layer heat: flavor burn versus dumb burn",
      "paragraphs": [
        "Bloom dried chiles or cook fresh chiles to develop flavor, not only raw burn. Toasted chile notes read complex; raw powder dumped late reads harsh and one-dimensional.",
        "Capsaicin heat and acid both climb with reduction—taste often as water leaves, especially if you started with aggressive vinegar."
      ]
    },
    {
      "heading": "Vinegar discipline",
      "paragraphs": [
        "Add vinegar in controlled doses—you can always add more, but dilution costs time and dilutes everything else. Different vinegars carry different aromatics; match vinegar to cuisine context.",
        "If the sauce is already tomato-acid forward, total acid budget may be tight—lemon versus vinegar behaves differently with tomato’s own malic and citric notes."
      ],
      "tip": "If heat and acid both feel loud, try fat and a small sweet touch before more salt."
    },
    {
      "heading": "Tomato product choice",
      "paragraphs": [
        "Canned tomatoes vary in acidity, salt, and texture; whole peeled versus puree changes cook time and body. Taste your can before building the whole plan around one brand.",
        "Paste browning in fat before liquids can add savory depth; raw paste can read tinny if not cooked through."
      ],
      "bullets": [
        {
          "title": "Sugar",
          "text": "A pinch rounds harsh acid; tablespoons turn the profile sweet-hot—decide intentionally."
        }
      ]
    },
    {
      "heading": "Fat, protein pairing, and service",
      "paragraphs": [
        "This profile pairs with rich proteins; if the sauce reads too sharp on the wheel, fat at finish (olive oil, butter) or sweet in tiny increments often lands better than extra salt.",
        "Serve with cooling contrasts—crema, cheese, herbs—when heat is intentionally high."
      ]
    },
    {
      "heading": "Simmer time, body, and finishing",
      "paragraphs": [
        "Long simmer integrates aromatics and concentrates solids; thin sauce plus raw heat reads like hot vinegar. Reduce to a spoon-coating body before final acid adjustments.",
        "Finish herbs that are delicate at the end; oregano-like herbs tolerate more simmer than basil."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why is my spicy tomato sauce more hot than tasty?",
      "a": "Heat without supporting aromatics—add toasted chile, alliums, or umami (anchovy, fish sauce, parmesan rind) in small amounts, and build depth before raising Scoville again."
    },
    {
      "q": "Can I cut acidity without sugar?",
      "a": "Sometimes—fat, dairy, or a pinch of baking soda (carefully, tasting) shifts perception. Dilution with good stock also helps if body allows."
    },
    {
      "q": "How do I reheat without losing freshness?",
      "a": "Gently; long microwave boils can volatilize aromatics. Refresh with a tiny vinegar or herbs at the end."
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
    "sauceId": "tomato-sauce-spicy"
  }
};

export default function SpicyTomatoSauce() {
  return <ScienceArticlePage spec={SPEC} />;
}
