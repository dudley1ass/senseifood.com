import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-tastes-hollow",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Tastes Hollow",
  "subtitle": "When the cup is thin, when the water has cheated its way around the bed of grounds, or when the beans are stale, the coffee ends up with an empty middle—the surrounding flavors are there but the heart is missing.",
  "readTime": "8 min read",
  "emoji": "🕳️",
  "fixRecipe": {
    "category": "coffee",
    "problem": "weak"
  },
  "quickAnswer": "“Hollow” usually means a thin cup without the pleasant acidity that should sit next to it—often caused by an under-dose of coffee, a shot that ran too fast, channeling (water finding a fast path through the grounds rather than passing evenly through), or coffee that has gone stale. The fix is carefully increasing the actual extraction yield (the percentage of the grounds that made it into the water), or fixing the grinder and the puck preparation. Be careful to distinguish a hollow cup from a true sour, under-extracted cup; the symptoms overlap a little.",
  "intro": "“Hollow” is a metaphor coffee tasters use for a cup that is missing its middle body and its sweetness: the coffee is wet, but nothing actually sings in your mouth. It sits next to “weak” and “sour” on the diagnostic tree, which is exactly why fixing it requires separating strength (how concentrated the cup is) from extraction quality (how completely you pulled the soluble flavor out of the grounds). A hollow cup often has thin mouthfeel together with a sour–bitter imbalance—an extraction yield in the 16–18% range can taste weak in TDS (total dissolved solids, the percentage of the beverage that is dissolved coffee) while still showing the acid notes prominently. That setup is common when the grind is too coarse or when water has bypassed the bed of grounds. For espresso, the temperature of the puck (the compacted disc of grounds in the basket) typically wants to be around 195–205°F (90–96°C) at the moment of brewing; filter brews peak at slightly different temperatures depending on the method.",
  "sections": [
    {
      "heading": "Strength versus extraction",
      "paragraphs": [
        "Strength is just the concentration of the cup. Extraction is the percentage of the dry grounds you actually managed to dissolve into the water. You can pull a high-strength cup that still feels hollow on the palate, because you only dissolved the easy early compounds and never went deeper into the more complex middle compounds. Or you can have a low-strength cup with decent balance if the extraction itself was fine but you simply diluted it too much."
      ]
    },
    {
      "heading": "Channeling and uneven flow",
      "paragraphs": [
        "Water finds the path of least resistance through the puck of grounds, which means it under-extracts the zones of the puck where it skipped over and over-extracts the zones where it dwelled. The resulting cup can taste sharp and empty at the same time—a flavor profile that mystifies people until they realize the extraction was uneven, not actually weak everywhere."
      ]
    },
    {
      "heading": "Staling and roast",
      "paragraphs": [
        "Very stale coffee loses the volatile aromatics that normally fill the middle of the palate, leaving a flat wireframe where the flavor used to live. The cup might still register acidity and some bitterness, but the warm, sweet, complex middle has evaporated."
      ],
      "tip": "Lock the recipe and change just one variable—dose, yield, or grind size—and taste before you go buying any new equipment. Most hollow cups can be fixed without spending a dollar."
    },
    {
      "heading": "Fix My Recipe coffee mode",
      "paragraphs": [
        "Walk the extraction-balance and weak profiles in the debugger with your actual numbers in hand. The tool frames ratio thinking the same way it does for baking: change one lever, observe what happens, log the result before moving on."
      ]
    },
    {
      "heading": "Strength versus extraction, applied",
      "paragraphs": [
        "Total dissolved solids (the rough strength measure) can be low while the extraction percentage is high—a cup that is simultaneously bitter and weak. Fix the brew ratio (the coffee-to-water ratio) before you chase a finer grind. Channeling in espresso creates local over-extraction in some parts of the puck and local under-extraction in others, which produces the classic hollow, confusing cup."
      ]
    },
    {
      "heading": "Water chemistry",
      "paragraphs": [
        "Very soft water (low mineral content) under-extracts aromatics because the minerals are part of how extraction chemistry works. Very hard water (high mineral content, especially calcium carbonate) can flatten acids and mute the brightness. Both extremes can read as “flat” or hollow even when your dose and time look right."
      ]
    },
    {
      "heading": "Dialing the next session without chasing every knob",
      "paragraphs": [
        "Coffee rewards boring notes: dose, grind, water temperature, pour pattern or pressure, and total brew time. Filter brews are often happiest somewhere in the 195–205°F (90–96°C) neighborhood depending on roast, but taste still beats the sticker on the kettle. For espresso, watch for channeling—holes in the puck that let water sneak through—because it mixes bitter and thin in the same cup.",
        "Change one variable per session and write a single line about the cup (sweet, sour, hollow, muddy). SenseiFood’s Fix My Recipe coffee checks are useful when you want to confirm your ratio bands, but your tongue on a steady recipe tells you faster than retuning six things at once."
      ]
    }
  ],
  "related": [
    {
      "title": "Coffee Extraction Science",
      "path": "/coffee-science/coffee-extraction-science"
    },
    {
      "title": "How to Debug Your Coffee",
      "path": "/coffee-science/how-to-debug-your-coffee"
    }
  ],
  "faqs": [
    {
      "q": "Why does my light roast taste hollow?",
      "a": "Light roasts often have high acidity but lower easily-soluble compounds, so the cup can feel acid-forward and thin at the same time. Try slightly hotter water or a slightly finer grind, staying within a balanced extraction window—small steps, not big jumps."
    },
    {
      "q": "Does my paper filter make the cup hollow?",
      "a": "Sometimes. Paper filters can let water bypass the bed if the slurry is not even, and different paper grades (bleached versus natural, thick versus thin) flow at different speeds. Adjust the grind to match the filter your brewer expects, and make sure the water is hitting the bed evenly rather than splashing through one channel."
    }
  ]
};

export default function WhyCoffeeTastesHollow() {
  return <ScienceArticlePage spec={SPEC} />;
}
