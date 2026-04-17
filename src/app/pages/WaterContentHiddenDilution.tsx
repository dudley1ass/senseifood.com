import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "water-content-hidden-dilution",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Hidden Water Content: The Dilution Variable",
  "subtitle": "Why sauces go thin when proteins and vegetables release unexpected moisture.",
  "readTime": "8 min read",
  "emoji": "💧",
  "quickAnswer": "Unexpectedly thin sauce is usually a water-load problem first; reduce before re-seasoning or you will chase salt and acid through a moving target.",
  "intro": "Food releases water during cooking. Chicken, vegetables, mushrooms, and thawed ingredients can dump liquid into your pan after the sauce looked perfect, weakening body and washing flavor intensity. Recipes rarely spell out exactly how much purge to expect because raw ingredient state varies. SenseiFood treats hidden water as a first-class variable: notice it, drive it off or drain it, then tune seasoning. If you salt aggressively to a thin sauce, you may fix loudness while leaving the dilute mouthfeel—and when concentration returns, salt becomes too much. Sheet-pan roasting before saucing is one practical way to pay water upfront so the pan sauce starts closer to finished body. A tilted lid can help evaporation without total boil-over when you need to drive water off gently.",
  "sections": [
    {
      "heading": "Where extra water comes from",
      "paragraphs": [
        "Protein purge shows up after salt contacts muscle; vegetables release osmotic water once heat damages cell structure; mushrooms shed surprising volume; thawed frozen items carry meltwater you forgot to pat away.",
        "If you season before this release stabilizes, final sauce often lands underpowered—not because your palate is wrong, but because the flavor-per-spoonful ratio dropped."
      ]
    },
    {
      "heading": "Corrective sequence: reduce, then reassess",
      "paragraphs": [
        "Do not immediately add more salt, acid, and fat. First reduce to your target consistency, or remove excess liquid deliberately, then reassess seasoning. This avoids over-seasoning a sauce that only needed water removal.",
        "If body is still wrong after concentration, switch tools: starch slurry, liaison, or mounting butter—match technique to the sauce family."
      ],
      "tip": "Unexpected thin? Reduce first before adjusting."
    },
    {
      "heading": "Vegetable and mushroom loads",
      "paragraphs": [
        "Water-heavy vegetables can flood a pan faster than evaporation keeps up on medium heat. Sometimes partial pre-cooking or salting-and-draining for a few minutes buys a drier start.",
        "Mushrooms benefit from high initial heat to drive steam off before saucing; otherwise you simmer mushrooms in their own puddle longer than intended."
      ],
      "bullets": [
        {
          "title": "Frozen spinach",
          "text": "Squeeze aggressively—its water is a classic hidden diluter in cream-style builds."
        }
      ]
    },
    {
      "heading": "Thawed proteins and brines",
      "paragraphs": [
        "Brined or injected meats release different liquid than dry-cured pieces. Account for extra water when deglazing and reducing.",
        "If you sear wet protein, you steam more and build fond differently—another hidden water pathway affecting sauce timing."
      ]
    },
    {
      "heading": "Reading “thin” versus “weak flavor”",
      "paragraphs": [
        "Thin sauces can still taste salty if salt concentration rose in a small volume of free water—confusing to debug. Taste for both viscosity and intensity. Sometimes you need body without more reduction (starch), sometimes more reduction without more salt.",
        "Document one success: note starting weights of wet ingredients once if you repeat a dish often—patterns emerge quickly."
      ]
    }
  ],
  "faqs": [
    {
      "q": "My pan sauce was perfect, then got thin—what happened?",
      "a": "Resting meat returned juices, or vegetables continued to release water into the sauce off heat. Swirl in cold butter for temporary body or reduce briefly; adjust salt only after volume stabilizes."
    },
    {
      "q": "Is cornstarch cheating?",
      "a": "It is a tool. Use it when reduction would overcook delicate ingredients but you still need cling. Label it honestly in your notes so you know what stabilized the batch."
    },
    {
      "q": "Does stock concentration matter here?",
      "a": "Absolutely—weak stock starts you closer to the dilution cliff. If hidden water meets weak stock, you get volume without flavor."
    }
  ],
  "related": [
    {
      "title": "Reduction Curve Is Nonlinear",
      "path": "/sauce-science/reduction-curve-nonlinear-flavor"
    },
    {
      "title": "Salt as Amplifier",
      "path": "/sauce-science/salt-as-amplifier-not-only-salty"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  }
};

export default function WaterContentHiddenDilution() {
  return <ScienceArticlePage spec={SPEC} />;
}
