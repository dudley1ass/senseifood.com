import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-pie-crust-is-too-pale",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Pie Crust Is Too Pale",
  "subtitle": "Egg wash, sugar, time, and temperature finish color; pale means one of them is missing.",
  "readTime": "7 min read",
  "emoji": "🤍",
  "fixRecipe": {
    "category": "pie",
    "problem": "general"
  },
  "quickAnswer": "Pale pie crusts often bake at too low a temperature, are shielded too long, or lack wash/sugar for Maillard. Move to a hotter finish, uncover, or brush with egg or milk.",
  "intro": "Double-crust pies especially hide the edge from direct heat. Color is not vanity; it is flavor and textural set. Maillard on pastry needs surface dehydration and roughly 300°F+ (149°C+) local crust temp; soggy fillings steaming the underside keep bottom pale. Egg wash adds proteins and sugars for browning.",
  "sections": [
    {
      "heading": "Heat and time",
      "paragraphs": [
        "Bottom crust needs conductive heat from a metal pan or stone; tops need radiant heat."
      ]
    },
    {
      "heading": "Washes",
      "paragraphs": [
        "Egg yolk browns deeply; milk soft-browns; cream sits between. Sugar on the lid increases caramelization."
      ]
    },
    {
      "heading": "Blind bake carryover",
      "paragraphs": [
        "Parbaked shells can finish pale if final bake is short. Plan combined thermal budget."
      ]
    },
    {
      "heading": "Debugger",
      "paragraphs": [
        "If dough enriches with sugar and still stays blond, oven story dominates. Ratios still help compare butter-heavy vs lean crusts."
      ]
    },
    {
      "heading": "Bake sequence",
      "paragraphs": [
        "Blind bake bottom until golden before wet filling, or use bottom heat strategies (stone, lower rack).",
        "Brush milk vs egg vs sugar—each shifts browning rate."
      ]
    },
    {
      "heading": "Sugar in dough",
      "paragraphs": [
        "A teaspoon sugar in dough increases browning without sweetness spike."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why pie crust is too pale is easier to act on when you anchor numbers instead of vibes. Pie dough stays workable around 50–60°F (10–16°C); warmer butter smears, colder dough cracks. Blind-bake until the shell reaches golden where it contacts filling—pale bottoms often mean soggy interfaces even when fruit reads hot. Fruit fillings commonly need to exceed roughly 200°F (93°C) in the bubbling center for starch thickeners to fully activate, but edges can scorch above 350°F (177°C) local surface—foil shields help. Glass and ceramic pans change bottom heat paths versus metal; adjust rack and time, not only temperature. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    },
    {
      "heading": "Extra variables that swing results",
      "paragraphs": [
        "Egg washes brown at different rates: whole egg vs yolk vs milk—pick one per series of tests. Docking and pie weights change steam escape during blind bake; note weight amount and bake minutes. Fruit pH affects starch set; very acid fillings may need adjusted thickener percentages from generic charts."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Pie Crust Is Flaky",
      "path": "/pie-science/why-pie-crust-is-flaky"
    },
    {
      "title": "Why Pie Crust Burns Before Filling Cooks",
      "path": "/pie-science/why-pie-crust-burns-before-filling-cooks"
    }
  ],
  "faqs": [
    {
      "q": "Glass pan pale bottom?",
      "a": "Often slower brown—move lower or longer."
    },
    {
      "q": "Soggy blocking brown?",
      "a": "Brush egg mid-bake after docking—careful with weights."
    }
  ]
};

export default function WhyPieCrustIsTooPale() {
  return <ScienceArticlePage spec={SPEC} />;
}
