import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-tastes-better-at-certain-temperatures",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Tastes Better at Certain Temperatures",
  "subtitle": "Sweet–sour–bitter balance moves as solubility and volatility change down the cooling curve.",
  "readTime": "8 min read",
  "level": "Temperature curve",
  "emoji": "🌡️",
  "fixRecipe": {
    "category": "coffee",
    "problem": "general"
  },
  "quickAnswer": "Many coffees “open up” between roughly 120–150°F where acids integrate with sugars; too hot masks detail, too cold exposes ash and tannin. Taste the same cup across a 10-minute window. Temperature changes volatility, so aroma intensity and perceived balance shift even when dissolved solids stay the same.",
  "intro": "Coffee flavor is not a static label on a bag—it is what reaches your nose and tongue at the moment of sipping, and that depends strongly on temperature. Near boiling, volatile aromatics can be so abundant that they crowd out subtle floral or fruit notes, while painful heat also limits taste bud discrimination. As the cup cools, different compound classes become more or less obvious: acids may first read sharp, then integrate with perceived sweetness, while bitter and astringent notes that were hidden behind heat can emerge late if extraction was uneven. Light roasts with prominent acids and delicate aromatics often show a sweet spot where brightness is lively but not shrill; darker roasts may taste most balanced when bitterness and roast-derived sweetness meet at a drinkable warmth. Milk modifies the curve because lactose sweetness, protein texture, and fat coat the palate differently across temperatures. Treat cooling as part of the recipe: the same brew can be “too sour” at minute two and “just right” at minute eight, which is not inconsistency—it is physics and sensory physiology working as designed.",
  "sections": [
    {
      "heading": "Cooling as part of recipe design",
      "paragraphs": [
        "Professional cupping cups cool on purpose because flavor is a trajectory, not a snapshot. What you taste at 160°F is not what you taste at 130°F, and evaluators often wait for heat to fall before scoring acidity or aftertaste. Home drinkers can use the same idea: if a coffee seems one-dimensional hot, wait—complexity may arrive later.",
        "Volatility drops as temperature falls, which can paradoxically make specific notes easier to name because the nose is not overwhelmed. Conversely, defects like rubber, phenolic, or stale cardboard may hide under heat and show only as the cup cools—cooling is both a reveal and a diagnostic."
      ],
      "bullets": [
        {
          "title": "Sip twice",
          "text": "Take a small sip while hot for mouthfeel, then revisit after five minutes for acidity and after ten for balance—your brain is comparing different sensory mixes."
        },
        {
          "title": "Same brew, different story",
          "text": "If flavor only improves with cooling, extraction or roast pairing may be fine; you simply prefer the volatile profile in a cooler window."
        }
      ]
    },
    {
      "heading": "Sweetness, acidity, and bitterness on the curve",
      "paragraphs": [
        "Human sweetness perception interacts with temperature, but coffee sweetness is also tied to aromatics and viscosity. Cooling can make sucrose-like impressions more obvious if acids relax relative to sugars, or can expose sourness if acids remain dominant and bitter compounds were low.",
        "Bitter and astringent sensations from chlorogenic derivatives and tannins can become more noticeable in lukewarm coffee, especially if the shot or brew carried channeling or over-extraction. That is why “great hot, unpleasant cold” sometimes flags process issues, not preference."
      ],
      "tip": "If coffee is harsh when cool, fix extraction and roast fit before chasing hotter serving—temperature only rearranges what is already in the cup."
    },
    {
      "heading": "Milk drinks shift the window",
      "paragraphs": [
        "Cappuccinos and lattes integrate acidity against lactose sweetness and fat-mediated mouthfeel. The perceived peak sweetness for milk coffees often sits in a narrower band than black coffee because overheated milk tastes cooked and underheated milk tastes thin.",
        "Foam insulation changes cooling rate: thick microfoam keeps the liquid hotter longer, delaying the window where acidity integrates. That can make the same espresso read brighter in a wet flat white timing versus a dry cappuccino timing even with identical shots."
      ]
    },
    {
      "heading": "Holding, reheating, and service pitfalls",
      "paragraphs": [
        "Burners and hot plates continue extraction and drive off volatiles; long-held coffee tastes stale even from a fresh grind because time and heat oxidize and evaporate desirable aromatics. Thermal carafes slow that path but do not freeze chemistry—drink within a reasonable window.",
        "Microwave reheating can reintroduce uneven hot spots that spike volatility and bitterness perception; gentle swirling after microwaving helps. For iced transitions, rapid chilling changes which acids dominate—cold brew and flash-chilled coffee exist partly to engineer a different balance than slow-cooled hot coffee."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is there an ideal thermometer number for best taste?",
      "a": "Not universally. Use ranges as guides: many people prefer black filter coffee coolest below scalding and above room temperature. Your roast, grind, and water recipe determine whether sweetness peaks early or late on the curve—taste across time and note where you enjoy it."
    },
    {
      "q": "Why does my espresso taste sour only after it cools?",
      "a": "Cooling reduces masking by heat and high-temperature aromatics, so under-extracted acids can stand out. It can also change how you perceive balance against bitterness. If sourness dominates only when cold, revisit yield, temperature, and evenness of extraction."
    },
    {
      "q": "Do light roasts need hotter brewing than dark roasts?",
      "a": "Roast level changes solubility and bean structure, so recipes differ, but drinking temperature is still about sensory balance. Light roasts are not obligated to be consumed hotter; they often show more fruit as they cool if extraction is clean."
    }
  ],
  "related": [
    {
      "title": "Why Coffee Tastes Different Cold",
      "path": "/coffee-science/why-coffee-tastes-different-cold"
    },
    {
      "title": "Why Coffee Tastes Flat",
      "path": "/coffee-science/why-coffee-tastes-flat"
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

export default function WhyCoffeeTastesBetterAtCertainTemperatures() {
  return <ScienceArticlePage spec={SPEC} />;
}
