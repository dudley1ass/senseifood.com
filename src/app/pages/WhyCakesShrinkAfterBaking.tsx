import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-shrink-after-baking",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Shrink After Baking",
  "subtitle": "Steam escapes, proteins contract, and starch sets while the pan cools—edges pull inward when structure unlocks from the wall.",
  "readTime": "8 min read",
  "emoji": "📉",
  "fixRecipe": {
    "category": "cake",
    "problem": "sink"
  },
  "quickAnswer": "Cakes shrink slightly from the pan as they cool because the set crumb contracts, trapped steam vents, and the pan releases differentially. Excess shrink or pulling from the sides often signals over-mixing, over-baking, high sugar, or cooling shock. Grease and parchment help release; do not chill a hot cake in the pan if sides seize then tear.",
  "intro": "A modest pull-away from the pan wall is normal physics, not failure. Problems start when the collar collapses inward unevenly or the top falls with the sides. That pattern ties to how gas cells stabilized, how much moisture remained at pull, and how quickly the crust set versus the interior. This guide connects shrink to mixing, bake curve, sugar load, and cooling workflow with a photographer’s mindset: look at the gap shape. Shrink forensics improve when you grease only half a test pan once—seeing differential release teaches more than theory. Record pan metal, color, and whether you used a baking strip because sidewall set rate dominates differential shrink. If you use silicone, note flexibility that hides early release cues. For high-sugar formulas, log crust color because caramelized bands mechanically lock differently than pale sides. When collaborating, share internal temperature traces so everyone means the same doneness word. Fix My Recipe helps anchor whether shrink is coupled to dryness or to wet bands that later evaporated.",
  "sections": [
    {
      "heading": "Cooling curve and steam loss",
      "paragraphs": [
        "Hot cake interior is pressurized with water vapor. As temperature falls, internal pressure drops and the crumb contracts slightly; edges that were steam-stuck release.",
        "Rapid cooling on a cold stone can set a skin while the center still moves, producing side wrinkles.",
        "Drafts across a thin layer cake can over-dry the surface while the core shrinks, reading as a sunk belt."
      ]
    },
    {
      "heading": "Structure from eggs and gluten",
      "paragraphs": [
        "Over-developed gluten in cake-style mixing tightens the network that later relaxes unevenly during cooling.",
        "Under-baked centers finish collapsing outward as residual moisture redistributes.",
        "Too much leavening can leave voids that mechanically collapse during cooling even when the oven spring looked fine."
      ]
    },
    {
      "heading": "Pan, grease, and sugar caramelization",
      "paragraphs": [
        "Sugar at the sidewall caramelizes and can lock early; uneven release makes one side shrink while another sticks.",
        "Dark pans accelerate side set relative to centers, amplifying differential shrink.",
        "Springform leaks can dry edges and change shrink symmetry."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Cake mode compares flour, fat, sugar, egg, and leavening to bands that predict doming, dryness, and collapse. Shrink paired with dryness points to bake curve; shrink paired with wet bands points to structure timing.",
        "Cool one cake in the pan and one out on a rack next time—compare side gap photos."
      ]
    },
    {
      "heading": "Debugging field notes",
      "paragraphs": [
        "Tag \"why-cakes-shrink-after-baking\" at the top of your kitchen log for this project so PDF exports and screenshots stay searchable across seasons.",
        "List equipment IDs that mattered that day: scale model, mixer speed used, oven rack height, and burr grinder zero point if coffee-adjacent—all drift over years.",
        "State one falsifiable hypothesis before the run and record whether results supported or rejected it; negative evidence prevents repeating expensive guesses."
      ]
    },
    {
      "heading": "Photographic evidence checklist",
      "paragraphs": [
        "Photograph Why Cakes Shrink After Baking under consistent lighting: one top-down frame and one cross-section whenever you change a variable tied to why-cakes-shrink-after-baking.",
        "Include a reference object in frame—a ruler edge or coin—so zoom crops do not fool you about spread thickness or bubble size later.",
        "Store images in a dated folder alongside gram weights; future comparisons become obvious instead of debated from memory."
      ]
    },
    {
      "heading": "Results vocabulary that travels",
      "paragraphs": [
        "When you write notes for why-cakes-shrink-after-baking, cap texture adjectives at three per bake—chewy, sandy, spongy—and flavor adjectives at three so comparisons week-to-week stay comparable.",
        "Note finish temperature and resting minutes beside taste descriptors; many off-notes are phase-dependent especially for dairy, chocolate, and coffee oils.",
        "If a friend tastes blind, record their words verbatim; fresh language catches patterns you normalized away."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is a little gap normal?",
      "a": "Yes—uniform 2–3 mm pull-away is common for well-greased pans."
    },
    {
      "q": "Why did my bundt stick and tear?",
      "a": "Complex geometry hides under-greased pockets; tears look like random shrink."
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
