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
      "heading": "Benchmark temperatures and a simple repeatable test",
      "paragraphs": [
        "Butter cakes usually finish between 200–210°F (93–99°C) at the center, though chocolate and very moist formulas can fool a thermometer—pair the probe with a spring-back test (press the center gently; if it springs back, it is set) and a clean skewer test. Edge-to-center gradients matter: a probe reading “done” at the top center can still leave a wet band near the floor of the pan, so check about an inch above the bottom on thick layers. Convection and dark pans both speed up heating, so if your edges race ahead of the center, lower the set temperature by about 25°F (14°C) and extend the time. Letting big layers cool until the crumb structure has stabilized—often below 100°F (38°C) internally—reduces tearing and that sticky drag on the knife.",
        "Write down your kitchen’s ambient temperature, the oven set point, and your probe reading. Change one input per trial: flour brand, sugar percentage, chill time, pan color, or rack position. Photograph the crumb side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs those observations with ratio checks for your category so the next bake is a measured step, not a guess.",
        "If you cook in Celsius, write a small cheat sheet and tape it inside a cabinet: 200°F ≈ 93°C (the cake and bread finish zone), 350°F ≈ 177°C (a common cake and cookie air temperature), and 212°F = 100°C (sea-level water boiling). Humidity changes how icings behave and how a cake stales the next day—jot the weather when results swing for no obvious reason. Many ovens keep drifting 10–20°F after they beep that preheat is done, so an extra few minutes of preheat saves a lot of guessing."
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
