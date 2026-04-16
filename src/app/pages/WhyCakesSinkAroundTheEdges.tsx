import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-sink-around-the-edges",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Sink Around the Edges",
  "subtitle": "Edges set fast while centers still move, or structural collapse follows uneven gas coalescence.",
  "readTime": "8 min read",
  "emoji": "🕳️",
  "fixRecipe": {
    "category": "cake",
    "problem": "sink"
  },
  "quickAnswer": "Edge sinking often couples to oven too hot (outside sets, inside subsides), under-bake in center, or over-leavened batters that collapse asymmetrically. Lower temp, longer bake, verify leavening.",
  "intro": "Asymmetric collapse means the rim and core experienced different mechanical histories. Heat gradients and timing usually explain the donut-shaped dip. Edge regions reach gelation and crust formation earlier—often 15–30°F ahead of center on the timeline in metal pans. If leavening produces a rapid CO₂ pulse between 120–160°F (49–71°C) but the center cannot polymerize fast enough to trap it, the middle subsides after the rim has locked shape—creating a trough.",
  "sections": [
    {
      "heading": "Thermal gradients",
      "paragraphs": [
        "Metal pans heat edges first. If the center is still liquid-ish, it can pull downward as steam escapes later."
      ]
    },
    {
      "heading": "Leavening spikes",
      "paragraphs": [
        "Too much baking powder yields a rapid rise that cannot be sustained; collapse localizes where structure was weakest."
      ]
    },
    {
      "heading": "Opening the oven",
      "paragraphs": [
        "Early door openings slam cool air onto rising edges and cause uneven set."
      ]
    },
    {
      "heading": "Next bake",
      "paragraphs": [
        "Log temps and times; run Fix My Recipe to check leavening-heavy formulas."
      ]
    },
    {
      "heading": "Oven temp and leavening balance",
      "paragraphs": [
        "Try 325°F (163°C) instead of 350°F (177°C) for longer, gentler rise if your oven runs hot at the perimeter. Verify with a thermometer—many “325” bakes are actually 340°F at the cake zone.",
        "Double-check baking powder freshness and measure by weight; an accidental double dose creates a bubble storm that outruns structure."
      ]
    },
    {
      "heading": "Pan size and thermal mass",
      "paragraphs": [
        "Thicker batters in deeper pans take longer for center set; edges can overset. Match batter volume to pan charts from tested sources when possible."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why cakes sink around the edges is easier to act on when you anchor numbers instead of vibes. Butter cakes commonly finish between 200–210°F (93–99°C) at the geometric center, though chocolate and very moist formulas can mislead thermometers—pair probe results with spring-back and clean skewer. Edge-to-center gradients matter: a reading “done” only at the top center can still leave wet bands near the pan floor—check an inch above the bottom in thick layers. Convection and dark pans shift effective heat; if edges race, lower the set temperature about 25°F (14°C) and extend time. Cooling until crumb structure stabilizes—often below 100°F (38°C) internally for large layers—reduces tearing and sticky knife drag. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
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
      "q": "Why donut dip not full middle sink?",
      "a": "Asymmetric collapse—edges set, center still viscoelastic—localizes the dip as a ring."
    },
    {
      "q": "Does opening the oven matter?",
      "a": "Early openings shock rising foam; wait until dome is established per recipe guidance."
    }
  ]
};

export default function WhyCakesSinkAroundTheEdges() {
  return <ScienceArticlePage spec={SPEC} />;
}
