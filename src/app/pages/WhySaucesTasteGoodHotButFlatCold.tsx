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
  "intro": "Hot sauce is a cloud of volatiles over a liquid matrix. Cold sauce is a semi-solid fat network with trapped water. They are not the same sensory object.",
  "sections": [
    {
      "heading": "Volatility and the first bite",
      "paragraphs": [
        "Esters and aldehydes that read “bright” at 150°F are nearly silent at 40°F. Plan cold service with different acid architecture."
      ]
    },
    {
      "heading": "Fat phase change",
      "paragraphs": [
        "Butter and cream firm up, coating receptors and rounding sharpness—sometimes into blandness."
      ]
    },
    {
      "heading": "Holding window before plating",
      "paragraphs": [
        "Long steam-table holds drive off top notes; taste after hold, not only at completion."
      ]
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
