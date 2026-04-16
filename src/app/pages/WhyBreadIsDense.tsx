import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-is-dense",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Is Dense",
  "subtitle": "Dense crumb usually means under-development, under-proofing, too much flour, or a collapsed structure—not “bad luck.”",
  "readTime": "8 min read",
  "emoji": "🧱",
  "fixRecipe": {
    "category": "bread",
    "problem": "dense"
  },
  "quickAnswer": "Dense bread most often comes from insufficient gas retention (weak gluten or tight shaping), under-proofing, or excess flour tightening the matrix. Verify fermentation cues—poke test, jiggle, volume—not just clock time.",
  "intro": "Density is how bakers describe a crumb with few evenly distributed alveoli and a heavy chew. It can be pleasant in some rye or whole-grain styles, but when your goal was an open sandwich loaf, density signals that structure set before the crumb could expand. Understanding whether the problem happened during mixing, fermentation, or baking tells you which lever to pull next. Internal finish temperatures for lean pan loaves often land near 200–208°F (93–97°C); pulling at 190°F (88°C) can leave a gummy layer that reads as dense once cooled. Enriched doughs with sugar and fat may finish a few degrees lower on the thermometer while still acceptable—always compare to your target crumb photo, not only numbers.",
  "sections": [
    {
      "heading": "Under-proofing vs true “tight mixing”",
      "paragraphs": [
        "An under-proofed loaf bakes with a tight, shiny crumb and a seam of denser dough near the center. The oven spring is weak because there was not enough total gas inflation before the crust set. The fix is longer bulk or final proof next time, sometimes with a slightly warmer environment.",
        "True tight mixing is rarer in hand mixing but common when a stand mixer runs too long on high speed for a lean dough, shredding extensibility. The loaf rises oddly and the crumb looks fine-grained everywhere, not just at the center."
      ]
    },
    {
      "heading": "Hydration and flour measurement",
      "paragraphs": [
        "Hydration changes how far gluten can stretch. A drier dough than the formula intended feels stiff, tears when stretched, and traps fewer bubbles. Measuring flour by scoop almost always adds extra mass and lowers effective hydration.",
        "If you must use cups, fluff the flour, spoon into the cup without packing, and level. Prefer grams: write your successful hydration percentage on the recipe card once you find the sweet spot for your flour brand."
      ],
      "tip": "For one diagnostic bake, drop hydration by 2–3% if the dough is impossible to shape; raise it if the dough spreads and refuses to hold tension."
    },
    {
      "heading": "Collapsed alveoli from over-proofing",
      "paragraphs": [
        "Over-proofed dough can fool you: it looks huge, then collapses in the oven and bakes into a dense, gummy layer under a thick crust. The gluten network exhausted its elasticity and cannot hold gas during oven spring.",
        "If your loaf spreads sideways, smells very alcoholic, and the poke test leaves a deep dent that does not spring back, shorten proof next time or cold-retard to slow fermentation."
      ]
    },
    {
      "heading": "Systematic debugging",
      "paragraphs": [
        "Use Fix My Recipe in bread mode with your gram weights to see whether your loaf sits in a plausible flour–water–yeast–salt band for the style you want. Pair that with photos: uniform tight crumb points to mixing or flour; central dense line points to shaping or under-proof; bottom gumminess can be bake temperature or cutting hot.",
        "Change one variable per bake—hydration, proof time, or oven steam—and label your dough tubs. Bread rewards boring note-taking more than heroic intuition."
      ]
    },
    {
      "heading": "Dough temperature through the process",
      "paragraphs": [
        "Bulk fermentation around 75–78°F (24–26°C) is a common target for straight doughs; much colder slows yeast enough to mimic “no activity,” while warmer pushes alcohol and acidity that can weaken gluten over time. For every 9°F (5°C) change, fermentation rate roughly doubles or halves—rough rule of thumb from Arrhenius-style kinetics in kitchen terms.",
        "Final proof skin temperature matters: drafts below 65°F (18°C) can form a dry skin that restricts oven spring; overly humid proofer air above 85°F (29°C) can overproof before you notice."
      ]
    },
    {
      "heading": "Hydration and flour protein",
      "paragraphs": [
        "Protein near 11–12% (typical AP) vs 12–14% (bread flour) changes water binding and mixing time. High hydration without adequate folding yields a slack dough that bakes dense if shape does not hold tension."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is dense bread always “bad”?",
      "a": "No—100% rye and some whole-wheat formulas are naturally closer textured. Compare to your intent, not Instagram sourdough."
    },
    {
      "q": "Does oil make bread denser?",
      "a": "Fat lubricates gluten, which can reduce maximum volume in lean breads but improves softness and shelf life in enriched breads."
    },
    {
      "q": "Does vitamin C help density?",
      "a": "A tiny amount can strengthen gluten oxidatively; not a substitute for correct fermentation."
    },
    {
      "q": "Dense rye vs wheat?",
      "a": "Rye pentosans behave differently—dense can be normal; compare to style."
    }
  ],
  "related": [
    {
      "title": "Why Bread Rises",
      "path": "/bread-science/why-bread-rises"
    },
    {
      "title": "How Yeast Works in Baking",
      "path": "/bread-science/how-yeast-works"
    }
  ]
};

export default function WhyBreadIsDense() {
  return <ScienceArticlePage spec={SPEC} />;
}
