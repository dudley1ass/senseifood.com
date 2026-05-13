import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-tastes-better-at-certain-temperatures",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Tastes Better at Certain Temperatures",
  "subtitle": "The balance of sweet, sour, and bitter in a cup shifts as the coffee cools, because the chemistry of solubility and the way aromas evaporate both change with temperature.",
  "readTime": "8 min read",
  "level": "Temperature curve",
  "emoji": "🌡️",
  "fixRecipe": {
    "category": "coffee",
    "problem": "general"
  },
  "quickAnswer": "A lot of coffees “open up” somewhere between roughly 120–150°F (about 49–66°C), where the acidity finally feels like it is sitting nicely next to the sweetness. Hotter than that and the heat masks the detail; colder than that and ashy or tannic notes can start showing up. Try tasting the same cup three or four times across a 10-minute window. Temperature changes how easily the aroma molecules float up to your nose, so the perceived balance shifts even when the dissolved solids in the cup are exactly the same.",
  "intro": "Coffee flavor is not a fixed label written on the bag—it is whatever actually reaches your nose and tongue at the moment you sip, and that depends strongly on temperature. Near-boiling coffee can throw so many volatile aromatics (the easily-evaporating compounds that build smell) at your nose that they crowd out subtle floral or fruit notes; painful heat also limits how well your taste buds can pick out detail. As the cup cools, different families of compounds become more or less obvious. Acids may first read as sharp, then integrate with the perceived sweetness, while bitter and astringent notes that were hidden behind the heat can quietly emerge later if the extraction was uneven. Light roasts with prominent acids and delicate aromatics often have a sweet spot where the brightness is lively but not shrill; darker roasts may taste their most balanced where bitterness and roast-derived sweetness meet at a comfortably drinkable warmth. Milk modifies the cooling curve because the lactose (milk sugar) sweetness, the milk proteins, and the milk fat coat your palate differently at different temperatures. So treat cooling as part of the recipe: the same brew can be “too sour” at minute two and “just right” at minute eight, and that is not inconsistency—it is physics and your sensory physiology working exactly as designed.",
  "sections": [
    {
      "heading": "Cooling as part of how a coffee actually tastes",
      "paragraphs": [
        "Professional cupping bowls (the formal evaluation cups used by tasters to score coffees) cool on purpose, because flavor is a trajectory across time, not a single snapshot. What you taste at 160°F (71°C) is not what you taste at 130°F (54°C), and evaluators often wait for the heat to drop before scoring acidity and aftertaste. Home drinkers can use the same idea: if a coffee feels flat or one-dimensional while it is still scalding hot, just wait—complexity often arrives later.",
        "Volatility (how easily molecules evaporate) drops as the cup cools, which can paradoxically make specific aromas easier to name because your nose is not overwhelmed. The reverse is also true: defects like rubbery, phenolic (a medicinal, plastic-like aroma), or stale cardboard notes may be hidden under heat and only reveal themselves as the cup cools—so cooling is both a way of revealing more flavor and a useful diagnostic tool for figuring out what is going on."
      ],
      "bullets": [
        {
          "title": "Sip twice",
          "text": "Take a small sip while the coffee is hot to assess mouthfeel and texture, then revisit after five minutes for acidity, and again after ten for overall balance—your brain is comparing different sensory mixes each time."
        },
        {
          "title": "Same brew, different story",
          "text": "If a coffee only really tastes good after it has cooled a bit, your extraction and roast match are probably fine; you simply prefer the aroma profile in a cooler window."
        }
      ]
    },
    {
      "heading": "Sweetness, acidity, and bitterness as the cup cools",
      "paragraphs": [
        "How sweet you perceive coffee to be is partly a function of temperature, but coffee sweetness is also tied to aromatics and viscosity (how thick the cup feels in your mouth). Cooling can make sucrose-like sweet impressions more obvious if the acidity relaxes relative to the sugars, or it can expose sourness if the acids remain dominant and the bitterness is low. Bitter and astringent sensations from chlorogenic acid breakdown products and tannins (astringent compounds that grip the tongue like over-steeped tea) can become more noticeable in lukewarm coffee, especially if the brew involved channeling or over-extraction. That is why a coffee that tastes “great hot but unpleasant cold” sometimes signals a process issue with the extraction itself, not just personal preference."
      ],
      "tip": "If a coffee turns harsh once it cools, fix the extraction and roast match first—serving it hotter only masks problems; cooling rearranges what is already in the cup but cannot remove anything that should not be there."
    },
    {
      "heading": "Milk drinks shift the whole window",
      "paragraphs": [
        "Cappuccinos and lattes mix the coffee’s acidity against milk’s lactose sweetness and the mouthfeel from milk fat. The perceived peak sweetness for a milk-based coffee often lives in a narrower temperature band than for black coffee, because overheated milk tastes cooked and sulfurous while underheated milk tastes thin and watery. The foam acts as insulation: a thick microfoam (the dense, paint-like milk foam used in latte art) keeps the liquid hotter for longer, delaying the moment where the acidity integrates. That can make the exact same espresso shot read as brighter in a wet flat white timing (more steamed milk, less foam) than in a dry cappuccino timing (more foam, less liquid)."
      ]
    },
    {
      "heading": "Holding, reheating, and service pitfalls",
      "paragraphs": [
        "Burners and hot plates keep extracting the coffee (yes, even after the brew is done) and continuously drive off the volatile aromatics. A coffee that has been held on heat for hours tastes stale even when the beans were freshly ground, because time plus heat causes oxidation and aromatic evaporation. A thermal carafe slows that path but does not stop the chemistry—drink within a reasonable window. Microwave reheating can leave uneven hot spots in the cup that spike both volatility and bitterness; a gentle swirl after microwaving helps even things out. For iced transitions, rapid chilling changes which acids dominate the cup—cold brew (coffee brewed for many hours with cold water) and flash-chilled coffee (hot-brewed coffee chilled over ice in seconds) exist partly because they let you engineer a different balance of acids and sugars than you would get by simply letting hot coffee cool slowly."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is there one ideal serving temperature for the best taste?",
      "a": "Not universally. Use ranges as guides: most people prefer black filter coffee somewhere below truly scalding and above room temperature, but the exact sweet spot depends on the roast, the grind, and your water recipe. Taste the same cup at multiple temperatures and note where you enjoy it the most—that is your number."
    },
    {
      "q": "Why does my espresso only taste sour once it cools down?",
      "a": "As the cup cools, the heat is no longer masking the acidity, and your perception of the balance between acid and bitterness shifts toward the acid side. If sourness really only dominates when the espresso is cold, it is worth revisiting the yield (the weight of liquid in the shot), the water temperature, and how evenly the puck extracted."
    },
    {
      "q": "Do light roasts need hotter brewing than dark roasts?",
      "a": "Roast level changes the solubility of the bean and how dense the cell walls are, so brewing recipes do legitimately differ, but the temperature at which you actually drink the coffee is still about sensory balance. Light roasts are not required to be sipped piping hot—they often show more fruit as they cool, as long as the extraction was clean."
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
