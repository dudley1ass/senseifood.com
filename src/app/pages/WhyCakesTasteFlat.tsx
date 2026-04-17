import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-taste-flat",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Taste Flat (Flavor Layering Failure)",
  "subtitle": "Maillard timing, salt, acid, and aromatic volatility stack—or cancel—depending on bake curve and cooling.",
  "readTime": "8 min read",
  "level": "Flavor & heat curve",
  "emoji": "😐",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "Flat flavor is rarely one missing spice. It is usually weak browning (time/temperature), low salt, no acid contrast, or aromas that baked off because they were added too early or cooled under a tight seal that trapped steam.",
  "intro": "Flavor in cake is layered: base sweetness, browned notes from the crust, volatile aromatics from extracts and zest, and the finishing perception after swallowing. Flatness is what happens when that stack never assembles—either because browning stayed shy, because salt never reached the threshold where sweetness tastes dimensional, or because top notes left with the steam. If your thermal sequence mutes Maillard or drives volatiles out too early, the crumb reads as “sweet cardboard” no matter how expensive your vanilla was. Cooling behavior matters too: trapping hot steam can dull aroma perception even when the crumb is moist. SenseiFood debugging treats cake flavor like a signal chain: strengthen each stage in order instead of chasing one mythical ingredient.",
  "sections": [
    {
      "heading": "Time and temperature create depth",
      "paragraphs": [
        "Pale cakes often taste flat because Maillard and caramel notes are under-developed relative to sugar. You do not need a burnt top; you need enough sustained heat for reducing sugars and amino acids to contribute complexity. A slightly longer crust phase at a controlled temperature—not a blast that desiccates the interior—often does more than extra extract.",
        "If you bake only until the center barely passes safe temperature but pull at the first clean toothpick, you may be stopping before aromatic browning has done its job on the surfaces that matter. Learn your recipe’s visual cues: color, smell, and spring—not only a stick."
      ],
      "bullets": [
        {
          "title": "Pan and color",
          "text": "Metal finishes and sugar level change how much browning you get at the same dial setting; pale pans may need a touch more time or a slightly higher temperature to develop flavor."
        }
      ]
    },
    {
      "heading": "Sequence of volatile ingredients",
      "paragraphs": [
        "Alcohols and citrus oils flash off quickly in a hot batter. Adding them only at the very end of mixing—or even brushing a cooled cake—preserves top notes that oven heat would erase. If your process boils off volatiles in the bowl, the label on the bottle stops mattering.",
        "Water-soluble aromatics and emulsified flavors behave differently than neat oils. Match technique to compound: heat-tolerant brown butter notes survive differently than delicate floral extracts."
      ]
    },
    {
      "heading": "Holding and cooling change perception",
      "paragraphs": [
        "Trapping steam right after bake with an airtight lid can dull aroma perception; you smell hot moisture more than vanilla. Vent until just warm, then wrap for moisture retention if staling protection is the goal. The goal is aroma you notice when chewing, not only when opening a tub.",
        "Cold cake reads less sweet and less aromatic than warm cake. If you serve chilled, bump salt and acid slightly at mixing or add a finishing layer that carries volatile aroma at the teeth—citrus, zest, ganache with contrast."
      ],
      "tip": "Smell the kitchen at the ten-minute mark after removing from the oven; if there is no browning aroma, flavor depth may be underbuilt."
    },
    {
      "heading": "Salt and acid as amplifiers",
      "paragraphs": [
        "Salt lifts sweetness perception and helps separate sugar monotony from “dessert tastes like something.” Measure salt by weight; small changes move perceived flavor more than people expect. A trace of acid—buttermilk, yogurt, a pinch of citrate—gives the tongue contrast so sweetness can register as rounded instead of blunt.",
        "If you chase flatness with more sugar, you often make the problem worse. Fix salt and acid first, then evaluate extracts and browning."
      ]
    },
    {
      "heading": "Fat type, emulsion quality, and flavor carry",
      "paragraphs": [
        "Fat carries fat-soluble aroma compounds; water carries others. A broken or weak emulsion can change which volatiles survive baking and which read in the mouth. Oil-out and gummy crumb are different articles, but they share a family with flat flavor: the texture signal is wrong, so the brain pays less attention to taste.",
        "When flavor feels uniformly dull, taste a pinch of crumb with a tiny extra salt on your tongue. If it suddenly “wakes up,” you were under-salted, not under-vanilla’d."
      ]
    }
  ],
  "faqs": [
    {
      "q": "I doubled the vanilla and it still tastes flat—why?",
      "a": "Vanilla is not a volume knob for a missing browning-and-salt framework. More extract can even read bitter or boozy without adding depth. Develop crust flavor, fix salt, and protect volatile additions; then reassess vanilla."
    },
    {
      "q": "Does my tap water matter for “flat” flavor?",
      "a": "Extremely chlorinated water or very hard water can affect yeast cakes and some chemical leavening interactions, but flatness in butter cakes is more often salt, browning, or volatiles. If you suspect water, try a side-by-side with filtered water once."
    },
    {
      "q": "Why does the same cake taste better at the bakery?",
      "a": "Commercial ovens often achieve more even browning; formulas may include slightly different salt, emulsifiers, or finishes. Match process: even heat, measured salt, and a cooling protocol that preserves aroma."
    }
  ],
  "related": [
    {
      "title": "Why Cakes Brown",
      "path": "/cake-science/why-cakes-brown"
    },
    {
      "title": "Why Cakes Are Too Sweet",
      "path": "/cake-science/why-cakes-are-too-sweet"
    },
    {
      "title": "How to Debug Cake Problems",
      "path": "/cake-science/how-to-debug-cake-problems"
    },
    {
      "title": "Why Cakes Turn Gummy",
      "path": "/cake-science/why-cakes-turn-gummy"
    }
  ]
};

export default function WhyCakesTasteFlat() {
  return <ScienceArticlePage spec={SPEC} />;
}
