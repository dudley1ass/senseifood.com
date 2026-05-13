import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-bake-unevenly",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Bake Unevenly",
  "subtitle": "How the air moves inside your oven, the color of your pan, where you set the rack, and how deep the batter sits all create hot and cool spots that show up in the finished cake.",
  "readTime": "7 min read",
  "emoji": "📶",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "An uneven bake is really just heat that is not evenly distributed inside the oven. Rotate the pan halfway through, do not crowd the oven (heat needs room to move), park an oven thermometer on the rack you actually use, match your pan size to your batter volume, and consider wrapping the pan in damp baking strips to slow the edges down so the center can catch up.",
  "intro": "A cake is really a temperature field changing over time—every spot in the batter is heating up on its own little schedule. If that field is tilted, with one side hotter than the other, one corner taller than the rest, or one face closer to the oven door, you end up with a dome, dark corners, or wet patches. Three things bias the field most: radiant heat from the oven walls (the heat that travels in straight lines from hot surfaces), the direct blast of a convection fan (which can pile up extra heat on whichever face is closest), and the color of your pan—dark pans soak up radiant heat much more aggressively than light ones, so the same air temperature gives darker, faster-set edges in a dark pan. A common home oven might say 350°F (177°C) on the panel while the back-left corner is actually cycling hotter every time the heating element kicks on. Your cake quietly records that asymmetry as darker crust on one side or a diagonal dome.",
  "sections": [
    {
      "heading": "What your oven is actually doing",
      "paragraphs": [
        "Calibration errors plus convection airflow patterns dominate uneven bakes. A cheap oven thermometer sitting on the rack you actually use beats whatever number is glowing on the digital control panel almost every single time. If the thermometer says 325°F when the dial says 350°F, you now have actionable information."
      ]
    },
    {
      "heading": "Pan and batter math",
      "paragraphs": [
        "Too little batter in a wide pan overbakes the edges before the center even sets, because there is not enough batter mass to absorb the heat slowly. Too much batter in a small pan does the opposite: the center stays underbaked because heat cannot creep all the way through before the edges go too far."
      ]
    },
    {
      "heading": "Rotation timing",
      "paragraphs": [
        "Rotate the pan 180° at the earliest safe moment—usually after the initial rise has stabilized and the structure has set enough that opening the door will not collapse a fragile foam. Rotating too early can deflate a delicate sponge; waiting too long means the asymmetry is already baked in."
      ]
    },
    {
      "heading": "Quantify the problem",
      "paragraphs": [
        "Fix My Recipe tells you whether your batter is unusually thick or unusually loose for the pan volume you have chosen. Pan geometry and ingredient ratio interact, and what looks like “my oven hates me” is sometimes just a batter that was 30% too tall for the pan."
      ]
    },
    {
      "heading": "Air temperature versus set temperature",
      "paragraphs": [
        "Preheat until your oven thermometer reads stable on your actual rack—often a full 15–25 minutes after the oven beeps that it is ready. Convection modes (where a fan circulates air around the oven) typically run hotter at the same set temperature because the moving air transfers heat into the cake faster, so when you switch between convection and conventional, reduce the set temperature by about 25°F (14°C) or shorten the time. Dark pans absorb infrared radiation much more aggressively than light pans, so the same 350°F air sets the edges of a dark pan faster. Even external quirks—an oven sitting against an outside wall with afternoon sun hitting one side—can matter for very sensitive sponges."
      ]
    },
    {
      "heading": "Rotation and rack position",
      "paragraphs": [
        "Aim to rotate 180° at roughly two-thirds of the way through the bake—after the structure has risen but before the crumb has fully set—so you do not collapse a fragile foam. Set the pan so the cake’s mass sits centered vertically in the oven; too high and the top browns long before the middle is cooked, too low and the bottom dominates and you get a dark base with a pale top."
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
      "title": "Why Cakes Rise Unevenly",
      "path": "/cake-science/why-cakes-rise-unevenly"
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
      "q": "Are baking strips actually worth using?",
      "a": "Yes, especially for big layer cakes. Wet fabric strips wrapped around the outside of the pan slow the heating of the edges (the wet fabric stays cool while it evaporates), which reduces the dome on top and helps the cake rise more evenly. They are most useful when your edges keep racing ahead of the center."
    },
    {
      "q": "My oven runs hot on the right—what should I do?",
      "a": "Bias the pan toward the cooler (left) side of the oven, rotate halfway through the bake, and if you need real symmetry for a competition cake or wedding cake, bake one layer at a time on the most reliable rack position you have."
    }
  ]
};

export default function WhyCakesBakeUnevenly() {
  return <ScienceArticlePage spec={SPEC} />;
}
