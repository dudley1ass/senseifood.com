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
  "intro": "Crust is where the cake meets the oven’s radiation and convection first. If heat arrives faster than moisture can migrate inward, the surface dries, browns deeply, and keeps reacting while the crumb is still setting. That differential is the physics of a tough rim: the exterior crosses from set to overbaked while the interior is still climbing toward done. Sugar accelerates browning; dark metal and glass change how quickly the sidewall heats; a too-hot oven or an aggressive top element can form a dome crust before the center firms. Thick crust is not a moral failure—it is usually a timing and heat-flux mismatch. The SenseiFood move is to slow the edge, shorten the overheated tail, and choose pans and temperatures that let the center and crust finish in the same window.",
  "sections": [
    {
      "heading": "Temperature: oven versus local pan microclimate",
      "paragraphs": [
        "Oven dials lie politely. The number on the glass is a rough guide; the cake experiences the air around it, the radiant heat from elements cycling on, and the conductive heat from the pan itself. Dark metal and glass accelerate surface set at the contact zone. If edges crust before the dome sets, drop the set point 15–25°F and extend time slightly, or use baking strips to slow edge heat so the rim does not race.",
        "Rack position matters: too close to the top element can tan the surface while the middle is still wet. If you see a dark band just under the top crust but a pale ring near the pan wall, you are looking at mixed heat sources, not one mysterious “bad recipe.”"
      ],
      "bullets": [
        {
          "title": "Pan color",
          "text": "Light pans generally give gentler sidewall browning than dark nonstick; glass often needs a lower temperature because sides heat aggressively."
        },
        {
          "title": "Strip or wrap",
          "text": "Insulated strips reduce the temperature gap between edge and center, which is exactly what thick-crust complaints are made of."
        }
      ]
    },
    {
      "heading": "Sugar and Maillard on the rim",
      "paragraphs": [
        "High sugar formulas brown aggressively where heat concentrates. The rim is a thin geometry with more surface-area-to-volume, so it is the first place Maillard and caramelization outrun interior moisture migration. Lowering average oven temperature without lowering edge heat often fails; lowering pan-side heat succeeds more often than chasing a single magic number on the dial.",
        "If you reduce sugar for health or preference, crust behavior changes too—sometimes for the better, sometimes exposing dryness elsewhere. Track the whole curve, not only color."
      ]
    },
    {
      "heading": "Sequence: doneness checks without punishing the edge",
      "paragraphs": [
        "Repeated door openings change the heat rhythm and can overdry edges while you hunt for center doneness. Probe temperature once you see meaningful visual cues—spring, pull-away, color—instead of opening early out of anxiety. Early openings favor uneven set: the edges reheat faster on recovery than the deep center.",
        "Rotate only if your oven has a known hot spot; random rotation can do more harm than good in an even cavity. Log one bake with minimal door time and compare."
      ],
      "tip": "A thermometer is a kindness to the crust: fewer pokes, fewer “just checking” moments, less edge overcooking."
    },
    {
      "heading": "Holding after bake: carryover keeps cooking the shell",
      "paragraphs": [
        "Leaving a cake in a switched-off but still-hot oven continues crust formation via retained heat and steam redistribution. If the crumb is already at target, the exterior can march into leathery territory. Remove to a rack when your internal temperature and spring targets are met, not when habit says so.",
        "If you need hold time for scheduling, pull earlier by a small margin knowing carryover will finish the center—but do not park the pan in a heat trap that keeps browning the top."
      ]
    },
    {
      "heading": "Pan volume, batter depth, and scaling",
      "paragraphs": [
        "A recipe written for two eight-inch rounds may behave like a crust factory in a single deep nine-inch because the center takes longer while the exposed top and sidewalls keep receiving energy. Scaling up without lowering temperature or protecting edges is a classic thick-crust trigger.",
        "Cupcakes and sheet cakes brown differently than thick layers; copy timings across shapes at your own risk. Match pan size, batter depth, and temperature as a set."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why is only the edge thick and dark while the middle is fine?",
      "a": "That pattern is almost always excess heat at the sidewall relative to the center. Use lighter pans, baking strips, a slightly lower temperature with longer time, or reduce contact heat until the edge stops racing."
    },
    {
      "q": "Does egg wash or sugar topping make the crust thicker?",
      "a": "Toppings can accelerate browning on the surface they touch, which can feel like a harder shell. If the crust is thick all around, fix heat flux first; if only the sprinkled top overbrowns, shield or lower top heat and add shine after bake."
    },
    {
      "q": "Can I trim a thick crust after baking?",
      "a": "You can shave a dry rim for presentation, but the texture underneath may still be dry. Better to solve heat for the next bake. Trimming is cosmetic; strips and temperature are structural."
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
