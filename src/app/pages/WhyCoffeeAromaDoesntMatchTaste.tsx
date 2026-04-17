import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-aroma-doesnt-match-taste",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Aroma Doesn't Match Taste",
  "subtitle": "Volatiles dominate nose; dissolved solids dominate palate—temperature splits the experience.",
  "readTime": "7 min read",
  "level": "Sensory mismatch",
  "emoji": "👃",
  "fixRecipe": {
    "category": "coffee",
    "problem": "general"
  },
  "quickAnswer": "Smell is thousands of volatiles; taste is mainly non-volatile balance. Roasty aroma can sit over a hollow cup if extraction skews sour/weak, or if you drink too cold.",
  "intro": "Coffee breaks into two simultaneous stories: the volatile cloud you smell before sipping, dominated by roasting and grinding chemistry, and the dissolved solids on your tongue—acids, bitter compounds, sweet carbohydrates, and salts—that define balance. A mismatch happens when aroma suggests depth the cup does not deliver: common when extraction is uneven, water bypasses puck, roast style and brew recipe disagree, or temperature changes faster than you adjust tasting. This guide walks serve temperature effects, extraction yield versus roast color, holding and grinding practices, and practical alignment steps without chasing grind changes at random.",
  "sections": [
    {
      "heading": "Serve temperature and sensory pathways",
      "paragraphs": [
        "Hot coffee throws more volatile aromatics toward your nose; as it cools, orthonasal intensity drops while sour and bitter non-volatiles can read louder relative to sweetness. That shift is why the same cup can feel fruity early and sour later, or roasty early and hollow once volatiles fade.",
        "Retronasal perception still carries aroma while drinking, but the balance changes with temperature and with how much dissolved material is present to support mouthfeel. Serving too cold without adjusting extraction can leave aroma memory from the dry fragrance unmatched by palate structure."
      ],
      "bullets": [
        {
          "title": "Cupping versus drinking",
          "text": "Breaking crust is an aroma event; your brew may need to taste good in the mug, not only at break."
        },
        {
          "title": "Thermometers",
          "text": "If you chase consistency, track actual brew and cup temperatures rather than only recipe names."
        }
      ]
    },
    {
      "heading": "Extraction yield versus roast color",
      "paragraphs": [
        "Dark roasts can smell intensely roasty and chocolatey while the cup reads thin or sour if under-extracted: you captured aromatics in the nose from grounds and roast chemistry but not enough soluble mass in the liquid. Light roasts can smell floral and tea-like while the cup is sharp or salty-sour if yield is low or channeling occurred.",
        "Dialing grind, ratio, time, and technique changes TDS and extraction percentage together; fixing mismatch is usually a structured adjustment, not more dose for its own sake."
      ]
    },
    {
      "heading": "Holding, grinding, and freshness splits",
      "paragraphs": [
        "Open carafes lose volatile aromatics to the air even when taste seems stable minute to minute. Cover between pours when evaluating quality. Stale whole bean can lose aroma faster than it loses extractable acids, producing smell–taste divergence of a different kind.",
        "Grinder retention and uneven particle distribution create cups that smell like one setting and taste like another: some sips sweet, some sharp. Purge and maintain burrs; taste multiple sips before judging."
      ],
      "tip": "If aroma and taste diverge right after a grinder change, finish the dial-in before attributing it to roast character."
    },
    {
      "heading": "Water, bypass, and sensory expectations",
      "paragraphs": [
        "Hard or high-mineral water can flatten perceived acidity while aromatics still read lively from dry fragrance. Bypass and batch brewer spray issues create weak extraction with normal-looking color. Align your sensory expectations with the actual contact time and evenness of extraction.",
        "Sometimes the mismatch is simply preference: intensely aromatic naturals can smell like berries while the cup remains winey-acidic. Learning to separate aroma hype from solubility balance is part of calibration."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Should I use more coffee if the cup tastes weak but smells great?",
      "a": "Higher dose changes strength and ratio; if weakness is under-extraction, fix grind or time first so you increase sweet balance, not only intensity."
    },
    {
      "q": "Does milk hide this mismatch?",
      "a": "Milk masks some bitterness and adds sweetness, which can make aroma–taste feel more aligned even when espresso alone was hollow."
    },
    {
      "q": "Why does my pour-over smell better than it tastes?",
      "a": "Often channeling or uneven pour: aromatics release from bloom and wet grounds while the cup under-represents full-bed extraction."
    }
  ],
  "related": [
    {
      "title": "Why Coffee Smells Good",
      "path": "/coffee-science/why-coffee-smells-good"
    },
    {
      "title": "Why Coffee Tastes Hollow",
      "path": "/coffee-science/why-coffee-tastes-hollow"
    },
    {
      "title": "Coffee Extraction Science",
      "path": "/coffee-science/coffee-extraction-science"
    },
    {
      "title": "How to Debug Your Coffee",
      "path": "/coffee-science/how-to-debug-your-coffee"
    }
  ]
};

export default function WhyCoffeeAromaDoesntMatchTaste() {
  return <ScienceArticlePage spec={SPEC} />;
}
