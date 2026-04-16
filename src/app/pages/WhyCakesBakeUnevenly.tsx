import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-bake-unevenly",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Bake Unevenly",
  "subtitle": "Oven airflow, pan color, rack position, and batter depth create hot and cold zones.",
  "readTime": "7 min read",
  "emoji": "📶",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "Uneven bake is spatial heat variance. Rotate halfway, avoid crowding, use an oven thermometer, match pan size to batter volume, and consider baking strips for edge-to-center timing.",
  "intro": "A cake is a temperature field evolving in time. If the field is tilted—one side hotter, one taller, one nearer the door—you get domes, dark corners, or wet triangles. Radiant heat from oven walls, convection fan impingement, and pan color shift local surface temperature by tens of degrees. A common home oven might read 350°F (177°C) on the thermostat while the back-left corner cycles hotter during the burner or element phase—your cake records that asymmetry as darker crust or a diagonal dome.",
  "sections": [
    {
      "heading": "Oven truth",
      "paragraphs": [
        "Calibration errors plus convection patterns dominate. A thermometer on the rack you actually use beats the digital panel."
      ]
    },
    {
      "heading": "Pan and batter",
      "paragraphs": [
        "Too little batter in a wide pan overbakes edges; too much in a small pan underbakes centers."
      ]
    },
    {
      "heading": "Rotation",
      "paragraphs": [
        "Rotate at the oven’s minimum safe window—usually past initial rise—to avoid lopsided collapse."
      ]
    },
    {
      "heading": "Quantify",
      "paragraphs": [
        "Fix My Recipe contextualizes whether your batter is unusually thick or lean for the pan volume you chose—geometry and ratio interact."
      ]
    },
    {
      "heading": "Target air temperature vs. set temperature",
      "paragraphs": [
        "Preheat until an oven thermometer on your actual rack reads stable—often 15–25 minutes after the beep. Convection modes typically run effective heat faster at the same set point; reduce 25°F (14°C) or time when switching modes mid-recipe testing.",
        "Dark pans absorb infrared more aggressively than light pans; the same 350°F air produces faster edge set on dark metal. If one side of your kitchen faces a window of afternoon sun on the oven, even insulation quirks can matter on sensitive sponges."
      ]
    },
    {
      "heading": "Rotation and rack position",
      "paragraphs": [
        "Rotate 180° at roughly two-thirds through the bake—after structure has risen but before the crumb fully sets—so you do not collapse a fragile foam. Center mass in the oven vertically: too high and the top browns before the center cooks; too low and bottom heat dominates."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why cakes bake unevenly is easier to act on when you anchor numbers instead of vibes. Butter cakes commonly finish between 200–210°F (93–99°C) at the geometric center, though chocolate and very moist formulas can mislead thermometers—pair probe results with spring-back and clean skewer. Edge-to-center gradients matter: a reading “done” only at the top center can still leave wet bands near the pan floor—check an inch above the bottom in thick layers. Convection and dark pans shift effective heat; if edges race, lower the set temperature about 25°F (14°C) and extend time. Cooling until crumb structure stabilizes—often below 100°F (38°C) internally for large layers—reduces tearing and sticky knife drag. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
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
      "q": "Is a baking strip worth it?",
      "a": "Wet fabric strips slow edge heat, reducing the dome and helping even rise—useful when edges race ahead of centers."
    },
    {
      "q": "My oven runs hot on the right—what do I do?",
      "a": "Bias the pan left, rotate halfway, or bake one layer at a time for competitions where symmetry matters."
    }
  ]
};

export default function WhyCakesBakeUnevenly() {
  return <ScienceArticlePage spec={SPEC} />;
}
