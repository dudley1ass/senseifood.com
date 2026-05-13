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
      "heading": "Benchmark temperatures and a simple repeatable test",
      "paragraphs": [
        "Butter cakes usually finish between 200–210°F (93–99°C) at the center, though chocolate and very moist formulas can fool a thermometer—pair the probe with a spring-back test (press the center gently; if it springs back, it is set) and a clean skewer test. Edge-to-center gradients matter: a reading “done” only at the top center can still leave wet bands near the pan floor—check about an inch above the bottom on thick layers. Convection and dark pans both speed up heating, so if your edges race ahead of the center, lower the set temperature by about 25°F (14°C) and extend the time. Let big layers cool to below about 100°F (38°C) internally before slicing or stacking.",
        "Write down your kitchen’s ambient temperature, the oven set point, and your probe reading. Change one input at a time—oven temperature, leavening percentage, pan size, or rack position—and photograph the crumb side-by-side. SenseiFood’s Fix My Recipe debugger pairs those observations with ratio checks for your category so the next bake is a measured step, not a guess.",
        "If you cook in Celsius, write a small cheat sheet and tape it inside a cabinet: 200°F is about 93°C (the cake and bread finish zone), 350°F is about 177°C (a common cake and cookie air temperature), and 212°F is 100°C (sea-level water boiling). Humidity changes how icings dry and how cakes stale overnight—jot the weather when results swing for no obvious reason. Many ovens keep drifting 10–20°F after they beep done preheating, so an extra few minutes of preheat saves a lot of guessing."
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
