import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-aroma-doesnt-match-taste",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Aroma Doesn't Match Taste",
  "subtitle": "What you smell in coffee is a cloud of evaporating aroma molecules; what you taste is a different set of dissolved compounds on your tongue—and changes in temperature can split the experience in two.",
  "readTime": "7 min read",
  "level": "Sensory mismatch",
  "emoji": "👃",
  "fixRecipe": {
    "category": "coffee",
    "problem": "general"
  },
  "quickAnswer": "Smell is built from thousands of volatile aroma molecules (compounds that easily evaporate at room temperature and float to your nose), while taste is mainly the non-volatile balance of acids, sugars, and bitter compounds your tongue can detect. The result is that a coffee can smell intensely roasty while the cup tastes hollow—usually because the extraction is sour or weak, or because you let the cup cool too far before sipping.",
  "intro": "Every cup of coffee tells two stories at the same time. There is the volatile cloud you smell before you sip, dominated by the chemistry of roasting and grinding (which releases hundreds of those aromatic molecules into the air). And there is the dissolved solid material on your tongue—the acids, the bitter compounds, the sweet carbohydrates, and the small amount of salts—that defines the actual balance of the drink. A mismatch happens when the aroma promises a depth that the cup itself never delivers. That is most common when the extraction is uneven, when water has bypassed the puck (channeled around the bed of grounds instead of through it), when the roast style and the brew recipe disagree, or when the temperature is dropping faster than you are recalibrating your tasting. This guide walks through serving temperature, extraction yield versus roast color, holding and grinding practices, and practical alignment steps—without telling you to chase grind changes randomly.",
  "sections": [
    {
      "heading": "Serve temperature and how you sense it",
      "paragraphs": [
        "Hot coffee throws more of those volatile aromatics into the air toward your nose; as the cup cools, you smell less, and at the same time the non-volatile sour and bitter compounds start reading louder relative to the sweetness on your tongue. That is why the same cup can feel fruity at the start and sour two minutes later, or roasty up front and hollow once the smell has faded. Retronasal perception (the aroma you sense from behind your palate while drinking, which is technically still smell rather than taste) still carries aroma through the sip, but the balance shifts with temperature and with how much dissolved material is in the cup to support the texture in your mouth. If you serve coffee too cold without adjusting the extraction, the aroma memory from the dry fragrance can be left unmatched by any actual structure on your palate."
      ],
      "bullets": [
        {
          "title": "Cupping versus drinking",
          "text": "Breaking the crust on a cupping bowl (the formal coffee tasting protocol where you push the floating layer of grounds aside to release aromatics) is an aroma event; your brew still needs to taste good in the mug an hour later, not only at the moment of break."
        },
        {
          "title": "Thermometers",
          "text": "If you actually care about consistency, track the temperatures of your brew water and your cup—not just the recipe name—because the same dial setting on different setups gives different results."
        }
      ]
    },
    {
      "heading": "Extraction yield versus roast color",
      "paragraphs": [
        "A dark roast can smell intensely roasty and chocolatey while the cup itself tastes thin or sour, if it was under-extracted (not enough soluble material made it from the grounds into the water). You picked up the aromatics in the nose from the dry grounds and the roast chemistry but did not pull out enough soluble mass for the cup to feel like a coffee. A light roast can smell floral and tea-like while the cup tastes sharp or salty-sour, if the extraction yield was low or there was channeling (water finding a fast path through the bed instead of evenly through it).",
        "Adjusting grind size, brew ratio (the weight of coffee compared to the weight of water), brew time, and pour technique changes both the TDS (total dissolved solids—how strong the cup is) and the extraction percentage at the same time. Fixing a mismatch is almost always a structured adjustment, not just throwing more coffee at the problem for its own sake."
      ]
    },
    {
      "heading": "Holding, grinding, and freshness mismatches",
      "paragraphs": [
        "An uncovered carafe is constantly losing volatile aromatics to the air, even when the taste seems stable minute to minute. Cover the carafe between pours when you are evaluating quality. Stale whole bean can lose its aroma faster than it loses its extractable acids, which produces a different kind of smell–taste split: the cup smells like nothing in particular but still tastes sharp. Grinder retention (where some of the previous shot’s grounds sit in the burrs and chute and come out in the next dose) and uneven particle distribution can create cups that smell like one setting and taste like another—some sips sweet, some sharp, all from the same brewer. Purge old grounds, keep burrs clean, and taste several sips before forming a judgment."
      ],
      "tip": "If the aroma and taste diverge right after you changed your grinder setting, finish your dial-in (the iterative tuning of grind, dose, and time until the cup is balanced) before you blame it on the roast character."
    },
    {
      "heading": "Water, bypass, and managing expectations",
      "paragraphs": [
        "Hard or very mineral-heavy water can flatten the acidity you perceive on the tongue while the dry aromatics still read lively to your nose. Bypass (where water flows past the bed of grounds instead of through it) and clogged sprayers on batch brewers create weak extractions that come out looking the right color. Line up your sensory expectations with the actual contact time and evenness of the extraction—not just with the color of the brew. Sometimes the mismatch is just preference, too: intensely aromatic natural-process coffees (coffees dried with the fruit still attached to the bean, which builds up wild fruity and fermenty aromas) can smell like ripe berries while the cup itself tastes winey-acidic. Learning to separate aroma hype from the actual solubility balance in the cup is part of calibrating your own taste."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Should I use more coffee if the cup tastes weak but smells great?",
      "a": "Increasing the dose changes both the strength and the ratio of the cup, so it does not directly fix an extraction problem. If the weakness is really under-extraction (not enough soluble material made it into the water), fix the grind or time first—that gets you more sweetness and balance, not just more intensity."
    },
    {
      "q": "Does adding milk hide this mismatch?",
      "a": "Yes. Milk masks some bitterness and adds its own sweetness, which can make the aroma and the perceived taste of the drink feel more aligned even when an espresso pulled the same way would taste hollow on its own."
    },
    {
      "q": "Why does my pour-over smell better than it tastes?",
      "a": "Almost always channeling or an uneven pour. The aromatics get released forcefully from the bloom (the initial small wet of the grounds, which releases trapped carbon dioxide) and from the wet grounds along the way, but the cup itself does not reflect a full, even extraction across the whole bed of coffee."
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
