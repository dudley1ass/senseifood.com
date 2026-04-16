import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-stick-to-pans-even-when-greased",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Stick to Pans Even When Greased",
  "subtitle": "Sugar caramelization, timing, pan material, and cooling bonds beat a thin grease film.",
  "readTime": "8 min read",
  "emoji": "🍳",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "Sticking happens when sugar proteins bond to metal despite grease, or when cakes cool in the pan and steam recondenses into tacky layers. Use parchment, flour-spray combo, correct release time, and proper cool-down.",
  "intro": "Greasing is not magic; it is friction reduction until structural release occurs. High-sugar batters weld to bare metal through caramelized films that oil cannot erase. This is why commercial kitchens lean on parchment circles and standardized cooling protocols. Temperature plays a quiet role: sugar films become tacky in a band roughly between 300–350°F (149–177°C) at the pan interface—exactly where thin batter meets hot metal longest. Oil does not dissolve caramel; it only buys time until structure lifts away. Parchment interrupts that chemistry entirely by keeping batter off bare aluminum or steel.",
  "sections": [
    {
      "heading": "Thermal bonding",
      "paragraphs": [
        "Maillard products and caramelized sugars are adhesive. A “well greased” pan with no parchment still exposes batter to hot metal chemistry."
      ]
    },
    {
      "heading": "Release timing",
      "paragraphs": [
        "Too early: cake tears because crumb is fragile. Too late: steam locks the base. Follow style: many sponges invert after a short rest; heavier cakes need edge release while warm then finish cooling."
      ],
      "tip": "Run a thin offset around edges while still slightly warm; do not stab downward through crumb."
    },
    {
      "heading": "Pan surface",
      "paragraphs": [
        "Nonstick degrades; micro-scratches increase stick. Light-colored pans reduce over-browned bases that glue."
      ]
    },
    {
      "heading": "Debugger",
      "paragraphs": [
        "Cake mode compares sugar and fat levels; sticky bases often pair with high sugar and long pan contact. Fix My Recipe helps you see if your formula sits at that edge."
      ]
    },
    {
      "heading": "Internal temperature and “set” across the crumb",
      "paragraphs": [
        "Most butter-based layer cakes finish when the geometric center reaches about 200–210°F (93–99°C) on an instant-read thermometer, though very moist formulas or those with chocolate or fruit can read a little lower while still safe. The critical idea is even set: if the sidewalls hit 212°F (100°C) steam pressure while the center lags 15°F behind, the outer crumb can shrink onto the pan while the middle is still moving—mechanical sticking even when chemically released.",
        "For chiffon or sponge cakes baked in ungreased tube pans, the recipe depends on climbing the sides; greasing those would defeat the design. For butter cakes in round pans, parchment rounds plus a light grease-under-parchment strategy beats grease-alone almost every time."
      ]
    },
    {
      "heading": "Cooling curves and steam",
      "paragraphs": [
        "Between 140–180°F (60–82°C), starch retrogrades and moisture migrates. Steam that condenses between crumb and metal can glue the cake if you invert too late—or tear it if you invert too early. Ten to fifteen minutes on a rack before depanning is a common compromise for butter cakes; sponges often need full cool upside-down per recipe."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why cakes stick to pans even when greased is easier to act on when you anchor numbers instead of vibes. Butter cakes commonly finish between 200–210°F (93–99°C) at the geometric center, though chocolate and very moist formulas can mislead thermometers—pair probe results with spring-back and clean skewer. Edge-to-center gradients matter: a reading “done” only at the top center can still leave wet bands near the pan floor—check an inch above the bottom in thick layers. Convection and dark pans shift effective heat; if edges race, lower the set temperature about 25°F (14°C) and extend time. Cooling until crumb structure stabilizes—often below 100°F (38°C) internally for large layers—reduces tearing and sticky knife drag. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cakes Stick to the Pan",
      "path": "/cake-science/why-cakes-stick-to-pan"
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
      "q": "Does flouring the pan help after greasing?",
      "a": "A thin fat-plus-flour paste can help for some bundts, but for flat rounds, parchment is more reliable than flour alone for high-sugar batters."
    },
    {
      "q": "Why does my nonstick still stick?",
      "a": "Worn coatings micro-scratch; sugar still reaches metal in spots. Replace pans or use parchment for problem recipes."
    }
  ]
};

export default function WhyCakesStickToPansEvenWhenGreased() {
  return <ScienceArticlePage spec={SPEC} />;
}
