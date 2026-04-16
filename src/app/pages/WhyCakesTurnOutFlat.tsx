import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-turn-out-flat",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Turn Out Flat",
  "subtitle": "Lost leavening, collapsed foam, or heavy batter limits vertical rise.",
  "readTime": "7 min read",
  "emoji": "🥞",
  "fixRecipe": {
    "category": "cake",
    "problem": "too-dense"
  },
  "quickAnswer": "Flat cakes usually lack aeration (under-cream, under-beat eggs), dead leavening, or oven too cool so gas escapes before set. Verify creaming time, fresh baking powder, and accurate temperature.",
  "intro": "Height is trapped gas in a setting matrix. Anything that reduces gas, releases it early, or fails to set in time yields short cakes. Oven spring depends on gas expanding while the batter viscosity is still dropping—roughly between room temperature and the point where the crumb sets, often starting meaningful structure around 140°F (60°C) for eggs and much later for starch firmness. If your oven is 25°F cool, that window lasts longer and bubbles coalesce and escape instead of staying trapped.",
  "sections": [
    {
      "heading": "Mechanical leavening",
      "paragraphs": [
        "Creaming and egg aeration are not optional decorative steps; they are volume sources."
      ]
    },
    {
      "heading": "Chemical leavening",
      "paragraphs": [
        "Old baking powder, wrong acidity for soda, or massive batter sitting pre-bake depletes CO₂."
      ]
    },
    {
      "heading": "Thermal",
      "paragraphs": [
        "Low oven temperature extends time to set, allowing bubbles to coalesce and escape."
      ]
    },
    {
      "heading": "Tooling",
      "paragraphs": [
        "Fix My Recipe compares your leavening-friendly ratios to norms and nudges you toward one change per bake."
      ]
    },
    {
      "heading": "Leavening chemistry and clock time",
      "paragraphs": [
        "Double-acting baking powder releases at wet mix and again with heat; letting batter sit 30 minutes on the counter can exhaust the first reaction. Baking soda needs acid; if pH is wrong, CO₂ is weak or fast and uncontrolled.",
        "Creaming aerates mechanically—under-creamed butter leaves less nucleation for oven spring, especially in recipes that lean on chemical leavening only lightly."
      ]
    },
    {
      "heading": "Altitude and temperature",
      "paragraphs": [
        "At elevation, water boils lower and rises evaporate faster; you may need slightly higher bake temp or more liquid retention strategies. Document your oven’s actual temperature with a thermometer; “350°F” on the dial is often 330°F or 370°F in reality."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why cakes turn out flat is easier to act on when you anchor numbers instead of vibes. Butter cakes commonly finish between 200–210°F (93–99°C) at the geometric center, though chocolate and very moist formulas can mislead thermometers—pair probe results with spring-back and clean skewer. Edge-to-center gradients matter: a reading “done” only at the top center can still leave wet bands near the pan floor—check an inch above the bottom in thick layers. Convection and dark pans shift effective heat; if edges race, lower the set temperature about 25°F (14°C) and extend time. Cooling until crumb structure stabilizes—often below 100°F (38°C) internally for large layers—reduces tearing and sticky knife drag. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cakes Rise",
      "path": "/cake-science/why-cakes-rise"
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
      "q": "Does overmixing make flat cakes?",
      "a": "It can deflate foam or build excess gluten in egg-leavened styles—mix until just combined unless the recipe wants strong structure."
    },
    {
      "q": "Old baking powder—how to test?",
      "a": "Stir a teaspoon into hot water; vigorous bubbling means viable; flat means replace."
    }
  ]
};

export default function WhyCakesTurnOutFlat() {
  return <ScienceArticlePage spec={SPEC} />;
}
