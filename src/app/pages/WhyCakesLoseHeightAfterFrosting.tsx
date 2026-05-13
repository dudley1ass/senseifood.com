import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-lose-height-after-frosting",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Lose Height After Frosting",
  "subtitle": "The frosting and filling pile on weight, the temperature mismatch shocks the crumb, and any soak you brushed on slowly migrates moisture into a delicate sponge that then squashes.",
  "readTime": "8 min read",
  "level": "Assembly mechanics",
  "emoji": "📉",
  "fixRecipe": {
    "category": "cake",
    "problem": "collapse"
  },
  "quickAnswer": "Height drops when soft layers get crushed under heavy or warm frosting, or when syrup soaks through and collapses the little air pockets in the crumb. The fixes are chilling the layers before stacking, placing cardboard cake boards between layers in tall builds, and matching the temperature of the frosting to how strong the crumb actually is.",
  "intro": "A cake’s tall, airy look is partly an illusion: a high domed sponge is a fragile aerated structure waiting for something to put weight on it. Frosting applies a real downward force as you spread it, stack it, and slice it—even a soft buttercream is genuinely heavy compared to the air-filled crumb below it. Warm layers yield easily under that load; chilled layers resist much better, but if you chill them and then slap warm frosting on, the temperature difference can cause condensation at the interface (water condensing out of the warmer frosting onto the cooler cake) and a tacky band that compresses under the next layer. Soaks and syrups add mass and plasticize the starch (keep it soft and bendy), which weakens the vertical walls of the crumb that are holding the cake’s height. Professional workflows chill components, use cardboard cake boards and wooden dowels for tall stacks, and time when each soak goes on so the crumb has time to absorb the syrup without turning into paste. This article separates mechanical compression from moisture collapse so you can tell which failure mode you actually have.",
  "sections": [
    {
      "heading": "Temperature when frosting meets cake",
      "paragraphs": [
        "A warm cake is mechanically weak, and it can also create a tacky condensation band against cooler frosting that squishes under the next layer. Hot frosting can actually melt the fat in the cell walls of the crumb, so a layer that looked firm a minute ago suddenly spreads sideways under load instead of holding height. The trick is pairing temperatures: cool the cakes to a workable chill, warm the buttercream to spreadable but not melty, and avoid microwaving fillings between steps. Think of assembly as warm enough for plasticity (the frosting can be spread without dragging the crumb) but cold enough for strength (the cake can support the weight stacked on top)."
      ],
      "bullets": [
        {
          "title": "“Room temperature” is not one thing",
          "text": "A 72°F buttercream on a 62°F kitchen cake behaves very differently than on a cake sitting in an 80°F party kitchen. Note what room temperature actually is when you are assembling, not just what the recipe assumes."
        },
        {
          "title": "Ganache and whipped cream",
          "text": "These are shear-sensitive loads (they deform easily under sideways force). A soft frosting like whipped cream needs either a firmer crumb underneath or internal supports (boards and dowels) to keep the stack standing."
        }
      ]
    },
    {
      "heading": "Syrup, soak, and wait",
      "paragraphs": [
        "Brushing a simple syrup soak between layers adds flavor and moisture, but it also adds water activity (a measure of how mobile the water in the food is, which affects both texture and microbial risk) right at the cut surface—exactly the plane that has to hold up the next tier. Heavy-handed brushing weakens those planes. Brush in thin passes and let each surface equilibrate—often with a short chill—before stacking. Jam and fruit layers slowly release more moisture over time, so even if the build looks fine when you finish, it can sag overnight; damming the perimeter with a piped buttercream ring helps, but time and temperature still rule the long game."
      ]
    },
    {
      "heading": "Holding under wrap",
      "paragraphs": [
        "If you press plastic wrap directly onto a frosted but not-yet-crusted cake, the wrap can imprint and squash the dome. Tall chilled cakes need real headspace in their storage container, otherwise the crown gets pressed flat overnight. A cardboard cake round placed under each major tier spreads the weight evenly across the crumb instead of focusing force right at the center where slices want to slump."
      ],
      "tip": "If you lose height overnight rather than during frosting, look at your wrap pressure or whether a soft filling is migrating sideways—not just at your initial crumb-coat technique."
    },
    {
      "heading": "Structural boards and dowels",
      "paragraphs": [
        "Gravity is patient. In a multi-layer cake, the weight of every tier above is being transferred down through the weakest sponge in the stack. A cardboard board under each major tier and vertical dowels (food-safe plastic or wooden rods that bear weight inside the cake) effectively turn a soft stack into an engineered column. Without supports, even excellent recipes will sag over a few hours. For a home cake, scale your expectations: three modest layers can usually stand on their own, while six layers with heavy buttercream will probably need real structural help."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why does my cake look fine, but then sag overnight?",
      "a": "What you are seeing is called creep—viscous fillings and emulsions slowly flow downward under gravity, and moisture migrates from wetter regions into drier ones. Chill and stabilize the cake before transport, and use real structural supports on anything tall."
    },
    {
      "q": "Do I really have to trim the domes off my layers?",
      "a": "Domes stack stress oddly—the cake is essentially balancing on a curve—so leveling each layer usually gives you more stable total height in the end, even if you lose a little volume off the top of each one."
    },
    {
      "q": "Are gluten-free cakes harder to stack?",
      "a": "Often yes. Gluten-free crumb has a different cell structure and holds moisture differently, so the same principles apply, but the thresholds for how much soak it can take and how much weight it can carry are usually tighter. Chill more aggressively and use boards more freely."
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
