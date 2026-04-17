import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-sauces-taste-good-hot-but-flat-cold",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Why Sauces Taste Good Hot but Flat Cold",
  "subtitle": "Volatility, fat solidification, and salt perception shift with temperature and time off heat.",
  "readTime": "7 min read",
  "level": "Serving temperature",
  "emoji": "🧊",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Aromatics evaporate faster when hot; cold fat coats the tongue and hides sharp notes. Adjust acid/salt at service temp, finish volatile herbs at the last hot moment, or re-temper gently.",
  "intro": "A sauce judged from the sauté pan is a different dish than the same sauce after it has cooled on a plate. Heat lifts volatile aromatics into orthonasal smell; cooling suppresses evaporation and changes which molecules reach your nose during eating. Fat that flowed at service temperature can firm into a coating layer on the palate, muting salt perception and hiding bright acids. Starch-thickened bodies can gel or tighten, changing release of flavor. This article explains volatility and the first bite, fat phase behavior, service and holding effects, and how to tune formulas when cold tasting is the truth test.",
  "sections": [
    {
      "heading": "Volatility and the first bite",
      "paragraphs": [
        "Esters, aldehydes, and sulfur compounds that read bright or savory above roughly body temperature may read nearly silent straight from the fridge. That is not always under-seasoning; it is suppressed volatility plus retronasal differences as vapor pressure drops.",
        "Build cold sauces with explicit acid architecture—vinegars, citrus, fermented products—rather than assuming the same herb load will carry. Add fragile aromatics at the last hot second if they will be served hot; infuse carriers if they will be served cold."
      ],
      "bullets": [
        {
          "title": "Taste at temp",
          "text": "For cold apps, season after chilling a sample, not only while warm."
        },
        {
          "title": "MSG and nucleotides",
          "text": "Umami persists better across temperature than many top-note volatiles; balance can shift relative to aroma."
        }
      ]
    },
    {
      "heading": "Fat phase change and mouthfeel masking",
      "paragraphs": [
        "Butter and cream firm up, increasing coating and viscosity on the tongue. That rounds harsh edges but can also flatten perceived salt and sharpness into generic richness. Emulsified sauces may look stable yet eat heavier cold if fat crystals reorganize.",
        "Olive oil and some nut oils stiffen or wax in the cold; what felt fruity when warm can taste mute or greasy when cool. Choose finishing oils with cold-service intent."
      ]
    },
    {
      "heading": "Holding window before plating",
      "paragraphs": [
        "Long steam-table or bain-marie holds drive off top notes even when the sauce still looks fine. Taste after the hold window you actually use in service, not only at completion. Covered holding reduces evaporation but can also steam delicate herbs into gray flavor.",
        "Reheats concentrate solids as water evaporates; cold leftovers may then taste salt-forward or unbalanced relative to memory of the first pass."
      ],
      "tip": "If a sauce must do both hot line and cold prep, split batches and finish each path with appropriate acid and herb timing."
    },
    {
      "heading": "Starch, gelatin, and texture-driven flavor release",
      "paragraphs": [
        "Thickeners change how salt and acid distribute on the palate. A roux-thickened gravy that sings hot can taste pasty cold if starch retrogrades or sets tightly around flavor ions. Gelatin-rich reductions can jell, slowing flavor release until saliva warms the matrix.",
        "Thin slightly for cold service, or shift thickener choice, and validate with a chilled spoon test rather than only visual viscosity in the pan."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Should I just add more salt when cold tastes flat?",
      "a": "Sometimes, but check acid first—cold often needs brightness, not only NaCl. Taste small iterations."
    },
    {
      "q": "Why does vinaigrette taste fine on greens but dull in the fridge?",
      "a": "Emulsion instability, herb oxidation, and chilled oil aromatics all shift overnight. Re-whisk and re-taste."
    },
    {
      "q": "Does microwaving for family meals change this?",
      "a": "Uneven reheating drives off volatiles at hotspots; gentle stove reheating with a lid often preserves more aroma."
    }
  ],
  "related": [
    {
      "title": "Reduction Curve: Nonlinear Flavor",
      "path": "/sauce-science/reduction-curve-nonlinear-flavor"
    },
    {
      "title": "Salt as Amplifier, Not Only Salty",
      "path": "/sauce-science/salt-as-amplifier-not-only-salty"
    },
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

export default function WhySaucesTasteGoodHotButFlatCold() {
  return <ScienceArticlePage spec={SPEC} />;
}
