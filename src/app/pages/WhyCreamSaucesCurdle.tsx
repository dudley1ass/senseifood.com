import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cream-sauces-curdle",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Why Cream Sauces Curdle",
  "subtitle": "A silky cream sauce is a temporary peace treaty between water, milk proteins, and fat. Curdling is the treaty breaking: proteins tighten into little grains faster than the emulsion can keep them suspended—usually because of too much heat, acid added at the wrong moment, or not enough stabilizing starch.",
  "readTime": "8 min read",
  "emoji": "🥛",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Cream sauces curdle when dairy proteins denature (unfold) and then clump together faster than fat droplets and emulsifiers can keep them smoothly dispersed—think tiny curds instead of silk. Boiling is the classic trigger; lemon, wine, or tomato added while the pan is screaming hot can do it too. Gentle sub-simmer heat, tempering acid (adding it slowly while whisking off the boil), and a starch slurry that has time to hydrate give you guardrails. If a skin starts forming on the surface, pull the pan off heat before a full boil returns: thick pans keep cooking from stored heat (carryover), which is a sneaky repeat offender. Low-fat dairy has less fat to buffer proteins, so it often curdles faster than heavy cream—same recipe, narrower safety lane.",
  "intro": "Curdled cream is not mysterious spoilage mid-pan; it is a race between protein clumping and your ability to keep everything emulsified—fat and water mixed into one glossy phase. Wine reductions, tomato acidity, and lemon can be gorgeous if they meet dairy with thermal respect. This article walks pH (acidity), heat flux, starch’s bodyguard role, and recovery moves that work when you catch the split early. In plain terms: if you would not sprint a marathon in dress shoes, do not boil cream like it owes you money. Most curdle stories start the same way: the pan was louder than the cook, acid arrived like a plot twist during a boil, or skim milk was asked to behave like heavy cream. When you narrate the failure in heat-and-timing language, the fix path stops feeling random. Gentle sub-simmer, tempered acid, and starch that had time to hydrate are the boring heroes that keep dinner creamy instead of grainy.",
  "sections": [
    {
      "heading": "Heat and protein denaturation kinetics",
      "paragraphs": [
        "“Kinetics” here just means speed: boiling cream crosses a stability line quickly, and the first warning is often a skin on the surface or a grainy streak when you drag a spoon. Carryover heat in heavy pans keeps cooking even after you turn the burner off, which is why moving the pan aside a beat earlier matters. Reheating yesterday’s sauce repeats the same risk window—gentle rewarming with a splash of liquid and constant whisking is the home-cook version of damage control."
      ]
    },
    {
      "heading": "Acid, salt, and alcohol timing",
      "paragraphs": [
        "Acid tightens dairy proteins—useful in cheese making, scary in a cream sauce if the acid hits while heat is high. Add acidic ingredients in a thin stream while whisking, and do it when the dairy is warm but not at a rolling boil. Alcohol can loosen the sauce briefly, then leave as steam, which can suddenly spike bubbling—so treat wine like a guest who needs a seat before you introduce the cream. Salt matters in small chemistry ways (it shifts how proteins pack), but the big practical lesson is balance: seasoned sauce still needs gentle heat."
      ]
    },
    {
      "heading": "Starch, lecithin, and fat phase help",
      "paragraphs": [
        "A roux or cornstarch slurry does two helpful jobs: it thickens slightly and ties up free water so protein molecules bump each other less often—fewer bumps means fewer curds. Egg yolk lecithin (and commercial lecithin) acts like a matchmaker between fat and water, increasing the surface area where fat droplets can shield proteins. Finishing with cold butter off heat can help re-suspend fat and smooth mouthfeel, but only if you stop adding energy at the right moment—butter cannot fix a sauce that is already fully split into oil slicks and gritty water."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "When sauces pair with baking projects, ratios still matter: SenseiFood’s tools reward writing down what you actually did—cream volume, acid amount, and whether you thickened before dairy—so the next batch is a tweak, not a guess. Treat each pan as one variable at a time: heat first, acid second, starch timing third."
      ]
    },
    {
      "heading": "Curdle as a cautionary tale",
      "paragraphs": [
        "A smooth cream sauce wants gentle heat and respect for dairy proteins; boil is the villain, acid timing is the tricky supporting actor, and cold butter off heat is often the redemption beat. When it splits, remember three plain facts: how hot the pan was, when acid joined, and whether you used low-fat dairy. Those three beats replay in almost every kitchen tragedy—and they also replay in almost every rescue story."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can I blend a broken sauce?",
      "a": "Sometimes, yes—an immersion blender can re-suspend proteins if the fat has not fully separated into a slick on top. If it is gritty with big curds, strain first, then blend; texture may be softer, but dinner is saved."
    },
    {
      "q": "Is low-fat cream safer?",
      "a": "Usually the opposite: less fat means less buffering for proteins, so low-fat dairy curdles faster. If you need a lighter sauce, adjust technique before you strip all the fat out."
    }
  ],
  "related": [
    {
      "title": "Temperature: The Silent Killer of Sauces",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "Emulsion vs Non-Emulsion Sauces",
      "path": "/sauce-science/emulsion-vs-non-emulsion-sauces"
    }
  ]
};

export default function WhyCreamSaucesCurdle() {
  return <ScienceArticlePage spec={SPEC} />;
}
