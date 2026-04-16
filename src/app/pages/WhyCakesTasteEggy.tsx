import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-taste-eggy",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Taste Eggy",
  "subtitle": "Sulfur notes, imbalance, and under-browning read as “too much egg” even at correct counts.",
  "readTime": "7 min read",
  "emoji": "🥚",
  "fixRecipe": {
    "category": "cake",
    "problem": "general"
  },
  "quickAnswer": "Eggy flavor often comes from overcooked egg proteins, high egg-to-sugar ratio without balancing flavors, or insufficient Maillard masking. Add salt, vanilla, brown sugar, or avoid over-bake.",
  "intro": "Eggs are mild but sulfur compounds amplify when proteins over-coagulate. Sometimes the recipe simply lacks contrast ingredients that hide egg’s clean but animal note. Egg white proteins denature across a wide band starting near 140°F (60°C) and finishing firming well past 180°F (82°C); yolk sets more gradually. Prolonged heat drives sulfur volatiles (hydrogen sulfide family) more than brief gentle sets—sheet cakes with thin edges often overexpose egg to browning heat relative to the interior.",
  "sections": [
    {
      "heading": "Heat and sulfur",
      "paragraphs": [
        "Long bakes at high heat for thin batters can over-set egg films at edges and tops."
      ]
    },
    {
      "heading": "Balance",
      "paragraphs": [
        "Sugar, salt, vanilla, citrus zest, and brown butter notes counteract plain egg."
      ]
    },
    {
      "heading": "Yolk-heavy formulas",
      "paragraphs": [
        "Extra yolks enrich but increase egg flavor load; compensate with aroma and browning."
      ]
    },
    {
      "heading": "Ratios",
      "paragraphs": [
        "Cake mode highlights egg weight relative to flour and sugar—use it before randomly removing an egg."
      ]
    },
    {
      "heading": "Maillard, sugar, and masking",
      "paragraphs": [
        "Browning reactions produce hundreds of aroma compounds that compete with egg’s mild sulfury notes. Under-browned, pale sponges with high egg ratio read “eggy” faster than well-caramelized surfaces. A few grams of brown sugar or milk powder can increase Maillard without rewriting the formula.",
        "Salt shifts flavor perception broadly; many “eggy” complaints disappear with ⅛–¼ tsp more salt in a test batch—measure by weight for repeatability."
      ]
    },
    {
      "heading": "Yolk-heavy and custard-style layers",
      "paragraphs": [
        "Yolks bring lipids and emulsifiers (lecithin) but also more egg flavor mass. Balancing with vanilla, citrus zest, or coffee in chocolate cakes keeps the profile complex rather than one-note."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why cakes taste eggy is easier to act on when you anchor numbers instead of vibes. Butter cakes commonly finish between 200–210°F (93–99°C) at the geometric center, though chocolate and very moist formulas can mislead thermometers—pair probe results with spring-back and clean skewer. Edge-to-center gradients matter: a reading “done” only at the top center can still leave wet bands near the pan floor—check an inch above the bottom in thick layers. Convection and dark pans shift effective heat; if edges race, lower the set temperature about 25°F (14°C) and extend time. Cooling until crumb structure stabilizes—often below 100°F (38°C) internally for large layers—reduces tearing and sticky knife drag. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Eggs Matter in Baking",
      "path": "/baking-science/why-eggs-matter-in-baking"
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
      "q": "Are farm eggs eggier tasting?",
      "a": "Often slightly richer; if it bothers you, use balanced recipes with enough sugar and aroma to mask."
    },
    {
      "q": "Does egg temperature matter for flavor?",
      "a": "Room-temp eggs emulsify better, reducing streaky overbaked pockets that concentrate sulfur notes."
    }
  ]
};

export default function WhyCakesTasteEggy() {
  return <ScienceArticlePage spec={SPEC} />;
}
