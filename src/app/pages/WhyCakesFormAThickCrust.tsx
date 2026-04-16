import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-form-a-thick-crust",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Form a Thick Crust",
  "subtitle": "Surface heat flux, sugar load, and bake time relative to pan size build a shell before the center finishes.",
  "readTime": "7 min read",
  "level": "Heat transfer",
  "emoji": "🧱",
  "fixRecipe": {
    "category": "cake",
    "problem": "dry"
  },
  "quickAnswer": "Thick crusts come from the outside spending too long at high heat while the center catches up—high sugar, dark pans, hot ovens, or long holds after doneness. Lower edge heat, shorten the “extra” bake window, and match pan volume.",
  "intro": "Crust is where the cake meets the oven’s radiation and convection first. If heat arrives faster than moisture can migrate inward, the surface dries, browns deeply, and keeps reacting while the crumb is still setting. That differential is the physics of a tough rim.",
  "sections": [
    {
      "heading": "Temperature: oven vs local pan microclimate",
      "paragraphs": [
        "Dark metal and glass accelerate surface set. If edges crust before the dome sets, drop temperature 15–25°F and extend time slightly, or use baking strips to slow edge heat."
      ]
    },
    {
      "heading": "Sugar and Maillard on the rim",
      "paragraphs": [
        "High sugar formulas brown aggressively at the contact zone. Lowering pan-side heat matters more than lowering average oven temperature."
      ]
    },
    {
      "heading": "Sequence: doneness checks",
      "paragraphs": [
        "Repeated door openings change the heat rhythm and can overdry edges while you hunt for center doneness. Probe temperature once you see visual cues instead of opening early."
      ]
    },
    {
      "heading": "Holding after bake",
      "paragraphs": [
        "Leaving a cake in a switched-off but still-hot oven continues crust formation via carryover. Remove to a rack when set targets are met."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cakes Bake Unevenly",
      "path": "/cake-science/why-cakes-bake-unevenly"
    },
    {
      "title": "Why Cakes Taste Dry",
      "path": "/cake-science/why-cakes-taste-dry"
    },
    {
      "title": "How to Debug Cake Problems",
      "path": "/cake-science/how-to-debug-cake-problems"
    },
    {
      "title": "Why Cakes Turn Gummy",
      "path": "/cake-science/why-cakes-turn-gummy"
    }
  ]
};

export default function WhyCakesFormAThickCrust() {
  return <ScienceArticlePage spec={SPEC} />;
}
