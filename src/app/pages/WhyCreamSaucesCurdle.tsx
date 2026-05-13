import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cream-sauces-curdle",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Why Cream Sauces Curdle",
  "subtitle": "Protein tightening, acid shock, and overheating destabilize dairy emulsions into grainy curds.",
  "readTime": "8 min read",
  "emoji": "🥛",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Cream sauces curdle when dairy proteins denature and aggregate faster than fat and emulsifiers can keep them suspended—often from boiling, acidic additions at high heat, or insufficient starch or lecithin support. Use gentle sub-simmer heat, temper acids, add starch slurry early enough to hydrate, and finish fat off-heat when possible. If the surface already films, pull off heat before the boil returns: carryover heat in heavy pans is a common silent accomplice. Low-fat dairy tightens faster than heavy cream, so expect a narrower heat window.",
  "intro": "Curdled cream is not mysterious spoilage mid-pan; it is a race between protein aggregation and emulsion repair capacity. Wine reductions, tomato acidity, and lemon can be gorgeous if introduced with thermal respect. This article walks pH, heat flux, starch roles, and recovery options that actually work when you catch the break early enough. Sauce logs should capture pan metal, burner setting, and time-to-first-bubble after dairy addition. If you use wine, record reduction volume visually because syrup thickness predicts shock. When recovering breaks, note whether heat was lowered first—order matters. For cheese additions, log moisture and age because aged cheeses behave differently in emulsions. Photograph surface sheen versus oil slicks; they imply different failure stages. Pair reads with Sauce Sensei timing articles so heat paths become repeatable craft instead of hope. Most curdle stories start the same way: the pan was louder than the cook, acid arrived like a plot twist during a boil, or skim dairy was asked to behave like heavy cream. When you narrate the failure in plain heat-and-timing language, the fix path stops feeling random. Gentle sub-simmer, tempered acid, and starch that had time to hydrate are the boring heroes that keep dinner creamy instead of grainy.",
  "sections": [
    {
      "heading": "Heat and protein denaturation kinetics",
      "paragraphs": [
        "Boiling cream crosses stability thresholds quickly; the surface film is the early warning. Carryover heat in thick pans continues cooking off-flame. Reheating yesterday’s sauce repeats the risk window."
      ]
    },
    {
      "heading": "Acid, salt, and alcohol timing",
      "paragraphs": [
        "Acid tightens proteins; add in tempered streams while whisking on lowered heat. Alcohol can thin phases temporarily then spike boil intensity as ethanol leaves. Salt concentration shifts protein isoelectric behavior subtly but meaningfully."
      ]
    },
    {
      "heading": "Starch, lecithin, and fat phase help",
      "paragraphs": [
        "Roux or slurry starch catches free water and reduces aggregation collisions. Egg yolk lecithin and commercial lecithin add interfacial area for fat droplets to protect proteins. Butter finish adds cooled fat crystals that can help re-suspend if heat is controlled."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "General baking mode still rewards logging dairy-to-acid ratios when your sauces pair with doughs. Treat sauce batches like experiments: one variable per pan."
      ]
    },
    {
      "heading": "Curdle as a cautionary tale",
      "paragraphs": [
        "A smooth cream sauce wants gentle heat and respect for dairy proteins; boil is the villain, acid timing is the tricky supporting actor, and cold butter off heat is often the redemption beat. When it splits, write heat level, when acid joined, and whether the dairy was low-fat. Those three beats replay in almost every kitchen tragedy."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can I blend a broken sauce?",
      "a": "Sometimes with immersion blender if fat has not fully separated; strain if gritty proteins dominate."
    },
    {
      "q": "Is low-fat cream safer?",
      "a": "Often more prone; fat helps buffer proteins—choose cook technique before trimming fat."
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
