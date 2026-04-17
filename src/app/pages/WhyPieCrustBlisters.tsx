import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-pie-crust-blisters",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Pie Crust Blisters",
  "subtitle": "Steam pockets under thin dough sheets before lamination-like layers set.",
  "readTime": "6 min read",
  "level": "Steam & dock",
  "emoji": "🫧",
  "fixRecipe": {
    "category": "pie",
    "problem": "general"
  },
  "quickAnswer": "Blisters are localized steam lifts. Under-docked shells, trapped air, or uneven lamination let water vapor push a bubble before the structure bonds to the pan.",
  "intro": "A pie shell is a thin starch–fat composite trying to set before water turns to vapor and pushes outward. When steam wins locally, you get a blister: a lifted dome of dough separated from the metal by a pocket of pressure. It is not random puff pastry—it is usually a docking, contact, or timing problem in blind baking, or uneven flake structure that creates weak planes. This guide walks through how to sequence docking and weights, how pan contact and temperature gradients steer steam, how mixing style changes internal channels, and how to tell blisters you can live with from ones that signal a fixable process slip.",
  "sections": [
    {
      "heading": "Docking and weights as a time sequence",
      "paragraphs": [
        "Dock before weights so the fork holes are not sealed shut by foil or beans. The classic blind-bake failure is skipping the weighted phase: the bottom puffs in the first minutes while the sides are still flexible. Bake with weights through the steam-release window your recipe describes, then remove weights and finish exposed so the interior dries and colors without re-inflating as a single sheet.",
        "If you dock only the center and ignore the sidewall curve, steam can still lift along the transition radius where dough is thicker. Use a pattern that reaches the corners and the crease where bottom meets wall; for sloped pans, bias extra docking toward the shoulder where bubbles love to start."
      ],
      "bullets": [
        {
          "title": "Two-stage timing",
          "text": "Treat blind bake as set-structure first, color second. Rushing to pull weights while the matrix is still elastic invites rebound blisters."
        },
        {
          "title": "Bean depth",
          "text": "Insufficient weight lets the floor dome slightly even when docked—fill to the rim so pressure is even."
        }
      ],
      "tip": "If blisters appear only after you remove weights, the shell was not structurally set; extend the weighted phase a few minutes rather than fighting with extra docking holes alone."
    },
    {
      "heading": "Temperature and pan contact",
      "paragraphs": [
        "Air gaps between dough and metal become steam pillows on heating. Press the dough firmly into the corners, chase bubbles with a dough tamper, and check for lifted bridges over fluted edges. Glass and dull metal conduct differently; a cold dough on a hot pan surface can seal late, trapping vapor between layers that have not yet adhered.",
        "Oven hot spots matter: a blister often tracks to the zone that hits set temperature first. Rotate halfway through blind bake if your oven has a known hot corner, and avoid stacking multiple shells vertically without airflow between pans."
      ]
    },
    {
      "heading": "Lamination versus shortcut mixing",
      "paragraphs": [
        "Rough, visible butter disks make dramatic flake but also irregular voids where steam can channel during an early bake. That can be delicious in a top crust and frustrating in a blind shell that must stay flat. For single-crust pies that blister, consider slightly more even fat distribution—not necessarily less fat, but more uniform pea-size pieces and consistent hydration.",
        "Overworking can also backfire: excessive gluten forms elastic membranes that balloon instead of cracking to release steam. Match mixing to the style: tender shortcrust for shells, more laminated behavior when you want lift on purpose."
      ]
    },
    {
      "heading": "Filling timing and moisture load",
      "paragraphs": [
        "Sometimes the shell looks fine after blind baking, then blisters under filling when the matrix softens and trapped micro-layers re-open. Hot fruit fillings dump steam upward; wet custards hydrate starch unevenly at the interface. Partially cooling fillings, using a crumb or chocolate seal, or baking at a gentler stage can reduce sudden steam pulses at the dough boundary.",
        "Egg washes and sugar on the rim change local set and browning; a very wet brush application can add surface moisture that steams before browning. Aim for thin, even wash and consistent trim thickness so one zone does not race ahead of the rest."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Are small blisters always a problem?",
      "a": "Not always. Tiny irregularities may be cosmetic. Problems are large domes that lift filling, thin spots that leak, or a bottom that never crisps because a pocket trapped moisture."
    },
    {
      "q": "Does docking make the crust leak?",
      "a": "Proper docking creates tiny vents, not holes. If you see leakage, the issue is usually an actual tear, an unbaked crack, or filling viscosity—not normal fork pricks."
    },
    {
      "q": "Why do I get one giant bubble instead of many small ones?",
      "a": "A single void usually means one weak plane carried most of the pressure—often poor corner contact, one thick fold, or an undocked island. Fix contact and docking pattern before changing the whole recipe."
    }
  ],
  "related": [
    {
      "title": "Why Pie Crust Is Flaky",
      "path": "/pie-science/why-pie-crust-is-flaky"
    },
    {
      "title": "Why Pie Crust Gets Soggy",
      "path": "/pie-science/why-pie-crust-gets-soggy"
    },
    {
      "title": "Why Pie Filling Is Runny",
      "path": "/pie-science/why-pie-filling-is-runny"
    },
    {
      "title": "Why Pie Crust Gets Soggy",
      "path": "/pie-science/why-pie-crust-gets-soggy"
    }
  ]
};

export default function WhyPieCrustBlisters() {
  return <ScienceArticlePage spec={SPEC} />;
}
