import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-shrink-after-baking",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Shrink After Baking",
  "subtitle": "Steam escapes from the crumb, the proteins tighten as they cool, and the starch fully sets while the pan cools down—so the edges pull inward away from the pan wall.",
  "readTime": "8 min read",
  "emoji": "📉",
  "fixRecipe": {
    "category": "cake",
    "problem": "sink"
  },
  "quickAnswer": "All cakes shrink slightly away from the pan as they cool—the set crumb contracts a little, trapped steam vents out, and the pan releases at different rates around the perimeter. Excessive shrink or a sharp inward pull at the sides usually means over-mixing, over-baking, too much sugar for the structure, or a sudden temperature shock when cooling. Grease and parchment help the cake release cleanly; do not chill a hot cake while it is still in the pan if you notice the sides seizing and tearing.",
  "intro": "A modest pull-away from the pan wall is normal physics, not a sign of failure. The trouble starts when the collar of the cake collapses inward unevenly, or when the top of the cake falls along with the sides as it cools. That pattern is tied to how the gas cells (the tiny air pockets) stabilized during baking, how much moisture was still in the crumb when you pulled it out, and how quickly the crust set relative to the interior. This guide ties shrink to mixing, the bake curve, how much sugar the recipe uses, and the cooling workflow—with a photographer’s mindset: look closely at the shape of the gap between the cake and the pan, because the shape tells you the story. Shrink forensics get a lot easier if you grease only half of a test pan once and bake; the differential release teaches you more than any theory. Note the pan metal and color, and whether you used insulating baking strips around the outside, because the sidewall set rate dominates differential shrink. If you bake in silicone, the flexibility of the pan hides the early release cues, so factor that in. For high-sugar formulas, also log how dark the crust got—caramelized bands mechanically lock to the pan differently than pale sides do. Fix My Recipe helps you anchor whether your shrink is coupled to dryness in the crumb (over-bake) or to wet bands that later evaporated (under-bake plus moisture migration).",
  "sections": [
    {
      "heading": "Cooling curve and steam loss",
      "paragraphs": [
        "A hot cake interior is genuinely pressurized with water vapor. As the temperature falls, the internal pressure drops, the crumb contracts slightly, and the edges that were steam-stuck to the pan release. Rapid cooling on something cold (like a stone counter) can set the skin of the cake while the center is still moving, which produces those wrinkly side pleats. Drafts across a thin layer cake can over-dry just the surface while the core continues shrinking inward, and you end up with a sunken-looking belt around the cake."
      ]
    },
    {
      "heading": "Structure from eggs and gluten",
      "paragraphs": [
        "Over-developed gluten (the elastic protein network that forms when wheat flour meets water and gets mixed) in a cake-style batter tightens the network so much that it relaxes unevenly as it cools, pulling the cake inward. An under-baked center finishes collapsing outward as residual moisture redistributes through the crumb. And too much chemical leavening (baking powder or baking soda) leaves big voids in the structure that mechanically collapse during cooling even when the oven spring looked fine while the cake was rising."
      ]
    },
    {
      "heading": "Pan, grease, and sugar caramelization",
      "paragraphs": [
        "Sugar at the sidewall caramelizes during baking and can lock the cake to the pan early; if that lock is uneven, one side will shrink cleanly while another sticks and tears. Dark pans speed up how fast the sides set compared with the centers, which amplifies differential shrink between the rim and the middle. A leaky springform pan can dry out the edges asymmetrically, again changing how symmetrically the cake shrinks."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Cake mode compares your flour, fat, sugar, egg, and leavening against bands that predict doming, dryness, and collapse. Shrink paired with a dry crumb points back to the bake curve (too long, too hot). Shrink paired with wet bands in the crumb points back to structure timing (the gluten or starch did not set in time). Next bake, try cooling one cake in the pan and one on a rack out of the pan, and compare side-by-side photos of the gap."
      ]
    },
    {
      "heading": "Shrinkage as the last chapter, not a twist ending",
      "paragraphs": [
        "A cake pulls away from the pan when the structure has finally set and steam stops pushing it outward; too much shrink usually means over-baked sides, weak structure that could not anchor the rise, or a formula that promised more rise than it could keep. Describe the sides to yourself in words—are they vertical, concave (curved inward), or dry-rimmed? Did the center sink right after the oven door opened? Those plain-English notes will help you more next time than a folder full of photos you will never search."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is a small gap between the cake and the pan normal?",
      "a": "Yes. A uniform 2–3 mm pull-away from the pan wall is normal for a well-greased pan and actually makes the cake easier to release cleanly. It is only a problem when the gap is wide, uneven, or accompanied by visible wrinkling on the sides."
    },
    {
      "q": "Why did my bundt cake stick and tear in spots?",
      "a": "A bundt’s complex geometry has lots of little corners and ridges, and any spot that was under-greased becomes a sticking pocket. The tears that result can look like random shrink, but they are really differential release—the well-greased zones pulled away cleanly while the under-greased zones stayed locked to the pan."
    }
  ],
  "related": [
    {
      "title": "Why Cakes Sink",
      "path": "/cake-science/why-cakes-sink"
    },
    {
      "title": "Why Cakes Fall After Baking",
      "path": "/cake-science/why-cakes-fall-after-baking"
    }
  ]
};

export default function WhyCakesShrinkAfterBaking() {
  return <ScienceArticlePage spec={SPEC} />;
}
