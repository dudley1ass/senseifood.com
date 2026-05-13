import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-base-curdles-before-churning",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Base Curdles Before Churning",
  "subtitle": "Curdled base before the churn usually means yolk proteins hit their tight-curd zone too fast—too much heat, too little tempering, or acid joining the party before the emulsion was stable.",
  "readTime": "7 min read",
  "level": "Cook step",
  "emoji": "🥚",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "general"
  },
  "quickAnswer": "French-style bases are thin custards: heat thickens yolks by unfolding proteins into a network, but push too hard and the same proteins clump into grains. Cook gently to nappe, temper acids, and move the pan off heat early—heavy metal keeps writing checks after the burner stops.",
  "intro": "Ice cream base curdle is the same family as scrambled eggs in a tuxedo: dairy plus yolk plus heat, with sugar and fat trying to keep proteins smooth. Winey reductions, bright citrus, and some chocolates all move the pH and tannin chess pieces. This guide is about ramps and sequencing—double boiler when your stove runs hot, constant scraping at corners, and catching grain while straining still helps—so you churn silk instead of sand.",
  "sections": [
    {
      "heading": "Temperature ramp for yolk set",
      "paragraphs": [
        "Stay in the roughly 170–180°F band with gentle, even heat and constant agitation until the base coats the back of a spoon. Spikes past the mid-180s can seize proteins even when cream is present, because local hot spots at the pan bottom exceed the average reading on your thermometer. Use a heavy pan or double boiler if your burner runs hot; scrape corners where laminar flow leaves stagnant hotter liquid. Temper yolks if you incorporate them into near-boiling dairy—adding a thin stream while whisking prevents shock-coagulation on contact."
      ],
      "bullets": [
        {
          "title": "Thermometer placement",
          "text": "Stir, then measure; stagnant pockets read cooler than the film against metal."
        },
        {
          "title": "Scale effects",
          "text": "Thicker batches hold heat longer off flame; larger volumes need earlier transfer off heat at nappe."
        }
      ]
    },
    {
      "heading": "Sequence: acid, fruit, chocolate, and alcohol",
      "paragraphs": [
        "High-acid fruit purées tighten proteins fast if added to hot, yolk-rich liquid early. Stage acid after some fat, sugar, and hydration are unified, or build fruit as a cold swirl-in after base cools. Chocolate introduces solids and sometimes lecithin-like behavior, but also tannins and pH effects—melt and incorporate off violent heat.",
        "Alcohol lowers freezing point and can denature proteins if boiled aggressively; add off heat or after partial cool if your formula allows, and expect to adjust churn time."
      ],
      "tip": "If a fruit base tastes right but looks grainy, strain through fine mesh; sometimes you salvage texture even when proteins began to flocculate."
    },
    {
      "heading": "Holding hot bases and carryover cooking",
      "paragraphs": [
        "Residual pan heat continues thickening after you kill the burner. Transfer to a bowl promptly when approaching nappe, or float the bowl on an ice bath to arrest cooking if you are at risk of overshoot. Film on the surface can indicate overcooked edges; press plastic to the surface during chill if you need to prevent a skin that traps heat."
      ]
    },
    {
      "heading": "Recovery, blending, and when to restart",
      "paragraphs": [
        "Slight grain sometimes smooths with high-shear blending and then fine straining, if flavor is not burned. Severe curd is often a full redo: blended curds may still feel chalky after freeze. Document whether grain appeared before or after adding an ingredient—that drives the fix next batch. Cornstarch or other stabilizers in Philadelphia-style bases change the failure mode; curdling is less common but scorching still is. Match troubleshooting to the family of recipe you actually use."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is it safe to eat slightly curdled base?",
      "a": "If it reached pasteurization temperature and was handled safely, it is usually a texture problem, not a safety one—but gritty ice cream is rarely worth churning."
    },
    {
      "q": "Why does my base curdle only with lemon?",
      "a": "pH crossed the threshold where yolk proteins aggregate quickly. Add acid later, dilute, or increase sugar and fat buffering before acid hits hot yolk."
    },
    {
      "q": "Does non-dairy milk behave the same?",
      "a": "Different protein sets and stabilizers shift curdling and scorching; many plant bases use starch or gums partly because eggless heatset is a different chemistry."
    }
  ],
  "related": [
    {
      "title": "Why Ice Cream Separates",
      "path": "/ice-cream-science/why-ice-cream-separates"
    },
    {
      "title": "Why Ice Cream Is Creamy",
      "path": "/ice-cream-science/why-ice-cream-is-creamy"
    },
    {
      "title": "Why Ice Cream Is Creamy",
      "path": "/ice-cream-science/why-ice-cream-is-creamy"
    },
    {
      "title": "Why Ice Cream Gets Icy",
      "path": "/ice-cream-science/why-ice-cream-gets-icy"
    }
  ]
};

export default function WhyIceCreamBaseCurdlesBeforeChurning() {
  return <ScienceArticlePage spec={SPEC} />;
}
