import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-crumble-when-cut",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Crumble When Cut",
  "subtitle": "Dry crumb, weak structure, or wrong knife technique shreds instead of slicing.",
  "readTime": "7 min read",
  "emoji": "🧩",
  "fixRecipe": {
    "category": "cake",
    "problem": "dry"
  },
  "quickAnswer": "Crumbling is low cohesion: over-bake dryness, too little fat/egg binder, or cutting cold cake with a dull saw. Use serrated knife, room temp cake, and fix moisture.",
  "intro": "Cohesion comes from moisture plasticizing starch and proteins holding crumbs together. Without it, the matrix fractures under shear. The crumb fails in shear when tensile strength between starch gel and protein network is low—often below about 12–15% moisture in the free phase for lean sponges, though enriched cakes tolerate wider bands. Refrigerated butter cakes firm fat and can feel crumbly when cold even when moist.",
  "sections": [
    {
      "heading": "Moisture",
      "paragraphs": [
        "Over-baked or low-fat formulas shed free water; crumbs separate."
      ]
    },
    {
      "heading": "Gluten and structure",
      "paragraphs": [
        "Too little structure for height yields fragile cakes; too much can oddly chunk—know your style."
      ]
    },
    {
      "heading": "Cutting physics",
      "paragraphs": [
        "Serrated, gentle sawing with minimal downward crush. Clean blade between slices for neat layers."
      ]
    },
    {
      "heading": "Systems",
      "paragraphs": [
        "Fix My Recipe flags dry-side ratios; pair with internal temperature logs."
      ]
    },
    {
      "heading": "Temperature at slicing",
      "paragraphs": [
        "Buttercream cakes slice cleaner at 65–70°F (18–21°C) than straight from the fridge at 38°F (3°C) where fat is rock-hard and starch is firm. For naked cakes, a brief sit reduces fracture.",
        "Frozen-then-thawed layers can be extra fragile if ice crystals damaged cell walls—crumb coat to catch debris."
      ]
    },
    {
      "heading": "Structural balance",
      "paragraphs": [
        "Too little egg or fat for the flour mass yields a short, sandy break (sometimes desirable for shortbread, wrong for genoise). Too much leavening can leave voids that collapse into crumbs when cut."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why cakes crumble when cut is easier to act on when you anchor numbers instead of vibes. Butter cakes commonly finish between 200–210°F (93–99°C) at the geometric center, though chocolate and very moist formulas can mislead thermometers—pair probe results with spring-back and clean skewer. Edge-to-center gradients matter: a reading “done” only at the top center can still leave wet bands near the pan floor—check an inch above the bottom in thick layers. Convection and dark pans shift effective heat; if edges race, lower the set temperature about 25°F (14°C) and extend time. Cooling until crumb structure stabilizes—often below 100°F (38°C) internally for large layers—reduces tearing and sticky knife drag. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cakes Dry Out",
      "path": "/cake-science/why-cakes-dry-out"
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
      "q": "Serrated vs chef’s knife?",
      "a": "Serrated saws with lower compression; long thin chef’s strokes work on cold dense cakes with a hot blade."
    },
    {
      "q": "Why crumb coat?",
      "a": "It glues stray crumbs so final frosting stays smooth—also reduces crumb loss on the cutting board."
    }
  ]
};

export default function WhyCakesCrumbleWhenCut() {
  return <ScienceArticlePage spec={SPEC} />;
}
