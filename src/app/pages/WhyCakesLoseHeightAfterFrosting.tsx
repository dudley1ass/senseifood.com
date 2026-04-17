import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-lose-height-after-frosting",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Lose Height After Frosting",
  "subtitle": "Compression, temperature shock, and moisture migration from frosting into a delicate crumb.",
  "readTime": "8 min read",
  "level": "Assembly mechanics",
  "emoji": "📉",
  "fixRecipe": {
    "category": "cake",
    "problem": "collapse"
  },
  "quickAnswer": "Height drops when soft layers compress under heavy or warm frosting, or when syrup soaks and collapses cell walls. Chill layers, use boards for support, and match frosting temperature to crumb strength.",
  "intro": "Cake height is partly illusion: a tall dome is fragile aerated structure waiting for a load. Frosting applies normal force when you spread, stack, and slice—even soft buttercream is heavy compared to sponge. Warm layers yield; chilled layers resist but can condense at interfaces if temperatures clash. Soaks and syrups add mass and plasticize starch, weakening vertical walls. Professional workflows chill components, use boards and dowels for tall stacks, and time moisture so the crumb can absorb support without turning to paste. This article separates mechanical compression from moisture collapse so you can tell which failure mode matches your bake.",
  "sections": [
    {
      "heading": "Temperature when frosting meets cake",
      "paragraphs": [
        "Warm cake is mechanically weak and can also steam-condense against cooler frosting, creating a tacky band that squishes under later layers. Hot frosting can melt fat-set structure in the crumb’s cell walls, turning a firm layer into something that spreads sideways instead of holding height.",
        "Pair temperatures: cool cakes to workable chill, bring buttercream to spreadable but not melty, and avoid microwaving fillings between steps. Think of assembly as warm-enough for plasticity, cold-enough for strength."
      ],
      "bullets": [
        {
          "title": "Room temperature myths",
          "text": "Room temp is not universal—72°F buttercream on a 62°F kitchen cake behaves differently than on an 80°F party kitchen."
        },
        {
          "title": "Ganache and whipped cream",
          "text": "These add shear-sensitive loads; softer frostings need firmer crumbs or internal supports."
        }
      ]
    },
    {
      "heading": "Sequence: syrup, soak, and wait",
      "paragraphs": [
        "Soaks improve flavor but add water activity at cut surfaces. Heavy-handed brushing weakens the very planes that must bear the next tier. If using syrup, brush in thin passes and let surfaces equilibrate—often with a short chill—before stacking.",
        "Jam or fruit layers release moisture over time; damming helps, but time-and-temperature still rule."
      ]
    },
    {
      "heading": "Holding under wrap",
      "paragraphs": [
        "Plastic wrap pressed on a domed cake before the frosting crusts can imprint and squash. Tall chilled cakes need headspace in containers; otherwise the crown becomes a pancake overnight.",
        "Cardboard rounds under each layer spread load across the crumb instead of focusing force at the center."
      ],
      "tip": "If height loss appears overnight rather than during frosting, suspect wrap pressure or a soft filling migrating—not your initial crumb coat technique alone."
    },
    {
      "heading": "Structural boards and dowels",
      "paragraphs": [
        "Gravity is patient. Multi-layer cakes transfer weight through the weakest sponge. A board under each major tier and vertical dowels convert soft stacks into engineered columns; without them, even good recipes sag over hours.",
        "For home tiers, scale expectations: three modest layers often survive without engineering; six with heavy buttercream may not."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why does my cake look fine until the next day?",
      "a": "Creep: viscous fillings and emulsions slowly flow; moisture migrates from wetter to drier regions. Chill and stabilize before transport, and support tall builds."
    },
    {
      "q": "Is trimming domes mandatory?",
      "a": "Domes stack stress oddly; leveling often yields more stable height even if you lose a little crown volume."
    },
    {
      "q": "Does gluten-free behave worse?",
      "a": "Often different cell structure and moisture retention—same principles apply, but thresholds for soak and load are usually tighter."
    }
  ],
  "related": [
    {
      "title": "Why Cakes Sink",
      "path": "/cake-science/why-cakes-sink"
    },
    {
      "title": "Why Cakes Collapse",
      "path": "/cake-science/why-cakes-collapse"
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

export default function WhyCakesLoseHeightAfterFrosting() {
  return <ScienceArticlePage spec={SPEC} />;
}
