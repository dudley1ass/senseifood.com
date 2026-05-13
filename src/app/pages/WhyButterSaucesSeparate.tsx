import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-butter-sauces-separate",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Why Butter Sauces Separate",
  "subtitle": "Butterfat breaks away when water activity, temperature, and emulsifier load move outside stability windows.",
  "readTime": "8 min read",
  "emoji": "🧈",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Butter sauces separate when heat drives water and milk solids past the emulsion capacity of butterfat, when acid tightens proteins unexpectedly, or when cold butter is added too fast without mechanical suspension. Mount butter off heat in beurre monté style, keep liquid phase warm not boiling, and whisk continuously. A splash of warm water or thin cream can reopen a tight emulsion while you whisk; finishing with acid only after lowering heat keeps proteins from seizing into a grainy film that reads as failure even when the flavor underneath is still salvageable.",
  "intro": "Butter is three things at once: fat, water, and milk solids. A butter sauce is a negotiation to keep those phases married while still tasting rich. Breakage is the divorce: oil slicks, grainy solids, and thin watery liquor. This article explains beurre monté mechanics, mounting order, and how carryover heat silently finishes the job after you walk away. Butter work logs should include cube temperature going in, whisk speed, and whether you finished off heat. If you mount onto reduced wine, record pH strips and final volume because both move stability. When using cultured butter, note higher solids that can thicken faster but also break faster if overheated. Photograph sheen at finish; dullness often precedes visible oil. Pair experiments with emulsion primers on SenseiFood so vocabulary matches what your eyes see in the pan. A broken butter sauce is less “you failed chemistry” and more “heat moved faster than the emulsion could rearrange.” Water phase, butterfat, and whisking rhythm need to stay in the same conversation; cold butter off heat can close the loop if you catch the split early. Think in scenes—sheen versus oil slicks, tight gloss versus greasy pools—and the next batch gets calmer without buying new equipment.",
  "sections": [
    {
      "heading": "Phase map of butter in warm liquids",
      "paragraphs": [
        "Too little continuous water phase cannot suspend added fat; butter pools. Too hot continuous phase strips the emulsion before new fat crystals can integrate. Whisking creates temporary suspensions; temperature decides if they last."
      ]
    },
    {
      "heading": "Acid, wine, and reduction level",
      "paragraphs": [
        "Highly acidic reduced liquids need mellowing or dilution before fat mounting. Salinity shifts boiling point and perceived thickness. Deglazing cold pans shocks emulsions if butter goes in immediately."
      ]
    },
    {
      "heading": "Milk solids browning versus burning",
      "paragraphs": [
        "Browned milk solids taste great until they aggregate into visible specks that read as broken. Clarified butter removes solids for stability at cost of some flavor. Cold cubed butter added in waves beats one hot dump."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Use sauce science articles plus Sauce Sensei for structured builds when butter is the spine. Log pan temperature with an IR thermometer for repeatability."
      ]
    },
    {
      "heading": "When fat walks out on you",
      "paragraphs": [
        "Butter sauces break when emulsion confidence collapses—too hot, too little water phase, or shocked with cold ingredients. The fix is usually patience and a splash of water or cream, not a new pan model. Describe the sheen: greasy pools versus tight gloss. Future you remembers that language better than a photo rubric."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can I fix separated butter sauce?",
      "a": "Sometimes with splash of water, off-heat whisk, or immersion blender if not overheated to true break."
    },
    {
      "q": "Is ghee the same?",
      "a": "Ghee lacks water; it behaves like pure fat and needs different technique."
    }
  ],
  "related": [
    {
      "title": "Temperature: The Silent Killer of Sauces",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "Water Content: Hidden Dilution",
      "path": "/sauce-science/water-content-hidden-dilution"
    }
  ]
};

export default function WhyButterSaucesSeparate() {
  return <ScienceArticlePage spec={SPEC} />;
}
