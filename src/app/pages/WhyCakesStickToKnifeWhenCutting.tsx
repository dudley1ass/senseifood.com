import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-stick-to-knife-when-cutting",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Stick to Knife When Cutting",
  "subtitle": "Gummy starch, tacky crumb, and frosting suction grab blades.",
  "readTime": "6 min read",
  "emoji": "🔪",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "Knife stickiness means moist crumb or gum-like under-bake, warm cake, or adhesive frosting. Cool completely, clean blade, heat knife slightly for dense layers, finish bake if tacky.",
  "intro": "A clean slice requires the blade to fracture the crumb cleanly. Anything rubbery or thermally soft smears instead of shearing. Sticking is friction plus adhesion: tacky starch above roughly 180°F (82°C) interior can smear on a blade; chilled ganache near 60°F (16°C) fractures while buttercream near 70°F (21°C) smears. The knife sees different rheology in each layer—composite behavior, not one temperature.",
  "sections": [
    {
      "heading": "Thermal state",
      "paragraphs": [
        "Warm cake is softer; ganache and buttercream remelt against hot metal."
      ]
    },
    {
      "heading": "Crumb set",
      "paragraphs": [
        "Gummy interiors smear—verify bake, especially in humid batters."
      ]
    },
    {
      "heading": "Technique",
      "paragraphs": [
        "Wipe blade; dip in hot water for fudgy layers; use long strokes."
      ]
    },
    {
      "heading": "Debug",
      "paragraphs": [
        "If tackiness is chronic, cake mode helps compare hydration and sugar levels to successful baselines."
      ]
    },
    {
      "heading": "Heat the blade, not the cake",
      "paragraphs": [
        "Dip a thin blade in hot water (not boiling), wipe dry, slice in one long draw. The transient heat shears chocolate and buttercream cleanly without melting the whole wedge. Repeat every slice for show-quality portions.",
        "For gummy under-baked interiors, no knife technique fixes incomplete set—reassess bake until probe temps align with your formula style."
      ]
    },
    {
      "heading": "Humidity and hygroscopic sugar",
      "paragraphs": [
        "High humidity days make frostings tackier on the surface; cornstarch-dusted bench or slightly cooler AC can help during assembly. Fondant sweats when moved cold-to-warm—different stick mechanism."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why cakes stick to knife when cutting is easier to act on when you anchor numbers instead of vibes. Butter cakes commonly finish between 200–210°F (93–99°C) at the geometric center, though chocolate and very moist formulas can mislead thermometers—pair probe results with spring-back and clean skewer. Edge-to-center gradients matter: a reading “done” only at the top center can still leave wet bands near the pan floor—check an inch above the bottom in thick layers. Convection and dark pans shift effective heat; if edges race, lower the set temperature about 25°F (14°C) and extend time. Cooling until crumb structure stabilizes—often below 100°F (38°C) internally for large layers—reduces tearing and sticky knife drag. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cakes Turn Gummy",
      "path": "/cake-science/why-cakes-turn-gummy"
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
      "q": "Cheese knife with holes—does it help?",
      "a": "Less surface contact reduces drag on soft cheeses; for cake, thin hot blade usually wins."
    },
    {
      "q": "Why does my knife get frosting buildup?",
      "a": "Wipe every pass; buildup is adhesive frosting re-depositing, not usually the crumb."
    }
  ]
};

export default function WhyCakesStickToKnifeWhenCutting() {
  return <ScienceArticlePage spec={SPEC} />;
}
