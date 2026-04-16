import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "umami-axis-beyond-salt-acid-fat-sweet",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Umami: The Missing Fifth Axis",
  "subtitle": "Balanced sauces can still feel empty without savory depth compounds.",
  "readTime": "8 min read",
  "emoji": "🍄",
  "quickAnswer": "If sauce is balanced but hollow, add umami (soy, mushroom, parmesan, tomato paste, Worcestershire).",
  "intro": "Salt, acid, fat, and sweet explain a lot, but not everything. Umami adds persistent savory depth that makes sauces taste complete rather than merely balanced.",
  "sections": [
    {
      "heading": "Why balanced can still feel empty",
      "paragraphs": [
        "A sauce can hit structural balance yet lack glutamate and nucleotide-driven savoriness. The result is clean but unsatisfying flavor.",
        "Umami sources increase perceived depth and length without necessarily increasing acidity or sweetness."
      ]
    },
    {
      "heading": "Practical umami additions",
      "paragraphs": [
        "Use small doses and retaste: soy sauce, mushroom concentrates, parmesan, tomato paste, anchovy, or Worcestershire can all add backbone."
      ],
      "tip": "Still missing something? Add UMAMI."
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on umami: the missing fifth axis is easier to act on when you anchor numbers instead of vibes. Ice cream hardness depends on ice phase fraction, sugar depression of freezing point, fat network, and air (overrun). Typical home freezers sit near 0°F (-18°C); serving slightly warmer—around 6–10°F (-14 to -12°C) for hard-pack—improves scoopability. Pasteurizing custard bases to roughly 175–180°F (79–82°C) without boiling sets proteins safely; boiling risks curdling emulsions. Rapid freezing forms smaller ice crystals; slow freezing and partial thaw cycles grow crystals and feel icy. Total solids (fat + MSNF + sugar + stabilizers) set body; water-only bases freeze harder. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    },
    {
      "heading": "Extra variables that swing results",
      "paragraphs": [
        "When a symptom persists, compare two batches on consecutive days with the same flour bag and yeast lot—raw ingredient drift is real. Keep a kitchen thermometer calibrated yearly if you bake weekly; five degrees at the oven cavity is enough to change set time materially."
      ]
    }
  ],
  "related": [
    {
      "title": "Salt Is an Amplifier",
      "path": "/sauce-science/salt-as-amplifier-not-only-salty"
    },
    {
      "title": "Emulsion vs Non-Emulsion",
      "path": "/sauce-science/emulsion-vs-non-emulsion-sauces"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  }
};

export default function UmamiAxisBeyondSaltAcidFatSweet() {
  return <ScienceArticlePage spec={SPEC} />;
}
