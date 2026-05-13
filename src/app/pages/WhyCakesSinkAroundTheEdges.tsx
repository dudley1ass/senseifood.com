import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-sink-around-the-edges",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Sink Around the Edges",
  "subtitle": "The edges of the cake set fast while the center is still moving, or the gas pockets in the batter collapse unevenly—either way you get that telltale ring-shaped dip.",
  "readTime": "8 min read",
  "emoji": "🕳️",
  "fixRecipe": {
    "category": "cake",
    "problem": "sink"
  },
  "quickAnswer": "Edge sinking usually points to an oven running too hot (the outside sets before the inside is done, and then the inside subsides), an under-baked center, or a batter that was over-leavened and collapsed asymmetrically. Lower the temperature, bake longer, and double-check that you measured the baking powder or baking soda correctly.",
  "intro": "An asymmetric collapse means the rim of the cake and the core of the cake lived through different mechanical histories during baking. Heat gradients (the way temperature changes across the cake) and timing usually explain the donut-shaped dip. In a metal pan, the edge regions reach gel temperature and crust formation 15–30°F ahead of the center—they set first. If the chemical leavening (baking powder or baking soda, which produce carbon dioxide gas) creates a fast burst of bubbles between 120–160°F (49–71°C) but the center cannot polymerize (turn from liquid to set network) fast enough to trap the gas, the middle subsides after the rim has already locked shape. That is the moment that creates the trough.",
  "sections": [
    {
      "heading": "Thermal gradients",
      "paragraphs": [
        "Metal pans heat the edges first because metal moves heat well and the sides have direct contact. If the center is still liquidy at that point, it can quietly pull downward as the steam later escapes, while the now-rigid rim holds its shape. Glass and ceramic pans are gentler on the edges, but they have the opposite problem—they can leave a wet bottom because the floor heats so slowly."
      ]
    },
    {
      "heading": "Leavening spikes",
      "paragraphs": [
        "Too much baking powder produces a fast, dramatic rise that the protein and starch structure simply cannot sustain. The cake puffs up impressively in the first ten minutes and then collapses, with the dip localizing wherever the structure was weakest—often at the edges where the rim set first and the middle had to fall toward someplace."
      ]
    },
    {
      "heading": "Opening the oven",
      "paragraphs": [
        "Opening the oven door early slams a wave of cool air against the rising edges and causes them to set in an uneven, premature way. Wait until the dome is clearly established—usually past the halfway mark of the recommended bake time—before opening the door for any reason."
      ]
    },
    {
      "heading": "Next bake",
      "paragraphs": [
        "Write down the temperatures and times for each test, and run the recipe through Fix My Recipe to flag leavening-heavy formulas before you bake them again. A surprisingly common cause of edge sinking is a recipe that simply asks for too much leavening for its flour."
      ]
    },
    {
      "heading": "Oven temperature and leavening balance",
      "paragraphs": [
        "Try 325°F (163°C) for a longer, gentler bake if your oven runs hot at the perimeter—you can verify the actual zone temperature with a small thermometer on the rack (many ovens set to 325°F are actually 340°F at the cake zone). Double-check that your baking powder is still fresh (stale baking powder loses lift and behaves unpredictably), and measure by weight rather than volume; an accidental double dose makes a bubble storm that outruns the structure."
      ]
    },
    {
      "heading": "Pan size and thermal mass",
      "paragraphs": [
        "A thicker, deeper batter takes longer for the center to set, and during that time the edges can keep cooking and oversetting. Match your batter volume to pan-volume charts from tested sources when possible—running a single batter in a pan one inch larger or smaller than the recipe expected can completely change the edge-to-center timing."
      ]
    },
    {
      "heading": "What to try on the next bake",
      "paragraphs": [
        "Most layer-cake headaches get clearer when you treat the oven and the cool-down as part of the recipe, not background noise. Many butter cakes finish somewhere near 200–210°F (93–99°C) in the center, but chocolate and very wet batters can lie to a probe—pair numbers with spring-back and a skewer, and check an inch above the pan floor on thick layers so you do not get a dry top hiding a damp belt.",
        "Change one variable at a time—rack height, pan color, convection on or off, or the temperature curve—and photograph the crumb after the cake is fully cool. SenseiFood’s Fix My Recipe cake mode still helps when you suspect sugar, fat, or flour ratios have drifted from what the writer assumed."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cakes Sink in the Middle",
      "path": "/cake-science/why-cakes-sink"
    },
    {
      "title": "How to Debug Cake Problems",
      "path": "/cake-science/how-to-debug-cake-problems"
    },
    {
      "title": "Why Cakes Are Dense",
      "path": "/cake-science/why-cakes-are-dense"
    }
  ],
  "faqs": [
    {
      "q": "Why is the dip a donut shape instead of one big middle sink?",
      "a": "Because the collapse is asymmetric. The edges had already set hard while the center was still soft and stretchy (viscoelastic), so the dip localizes as a ring right where the firm rim and the not-yet-firm middle meet."
    },
    {
      "q": "Does opening the oven really matter that much?",
      "a": "Yes—an early opening can shock the rising foam, and a delicate sponge can sink right where it was rising. Wait until the dome is clearly established, usually well past the halfway mark of the recommended bake time, before you check on the cake."
    }
  ]
};

export default function WhyCakesSinkAroundTheEdges() {
  return <ScienceArticlePage spec={SPEC} />;
}
