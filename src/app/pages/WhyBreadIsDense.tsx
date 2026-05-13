import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-is-dense",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Is Dense",
  "subtitle": "A dense crumb usually traces back to under-development of the gluten, under-proofing, too much flour worked in, or a collapsed structure — almost never to bad luck.",
  "readTime": "8 min read",
  "emoji": "🧱",
  "fixRecipe": {
    "category": "bread",
    "problem": "dense"
  },
  "quickAnswer": "Dense bread usually comes from one of three things. First, the gluten network was too weak to trap gas effectively (under-mixing, too much fat or whole grain). Second, the dough was under-proofed — pulled before fermentation could fully inflate the loaf. Third, too much flour was packed in (a common result of measuring by scoop instead of by weight), which tightened the dough and limited bubble expansion.",
  "intro": "Density is how bakers describe a crumb with few evenly distributed gas cells and a heavy chew. It can be pleasant in some rye or whole-grain styles, where dense and hearty is the goal. But when you were trying for an open sandwich loaf or a light artisan boule, density signals that the structure set before the crumb could fully expand. Understanding whether the problem happened during mixing, during fermentation, or in the bake itself tells you which lever to pull next. As a quick sanity check on doneness: internal finish temperatures for lean pan loaves usually land near 200 to 208°F (93 to 97°C). Pulling the loaf at 190°F (88°C) — too early — can leave a slightly gummy layer that reads as dense once the loaf cools. Enriched doughs (those with sugar and fat) often finish at a few degrees lower internal temperature while still being properly baked, because the fat and sugar slow moisture loss. Always compare to your target crumb photo or memory of the style, not just to a thermometer number.",
  "sections": [
    {
      "heading": "Under-proofing versus true tight mixing",
      "paragraphs": [
        "An under-proofed loaf bakes with a tight, shiny crumb and often shows a seam of denser dough running through the center where the structure compressed before it could expand. The oven spring (the rapid initial rise when the loaf hits the oven) is weak because there was not enough total gas inflation in the dough by the time the crust set. The fix is longer bulk fermentation or longer final proof next time, sometimes also a slightly warmer environment to encourage the yeast.",
        "True tight mixing is rarer when working by hand but common when a stand mixer runs too long on high speed for a lean dough. Excessive mixing shreds the gluten network — the strands break down rather than continuing to strengthen — and the loaf rises oddly with a fine-grained crumb everywhere, not just at the center. If your crumb is uniformly tight from edge to edge, the mixing is more likely to be the cause than the proof."
      ]
    },
    {
      "heading": "Hydration and flour measurement",
      "paragraphs": [
        "Hydration — the ratio of water to flour by weight — changes how far the gluten can stretch and how many gas bubbles it can trap. A drier dough than the recipe intended feels stiff, tears when you try to stretch it, and traps fewer bubbles. Measuring flour by scoop almost always adds extra mass to a recipe: pressing the cup into the flour bag compacts the flour, and you can easily end up 20 to 30 percent over what the recipe author meant. That extra flour drops your effective hydration percentage and produces dense bread.",
        "If you must use cups, fluff the flour first, spoon it into the cup without packing, and level the top with a knife. Better, switch to grams: weigh both your flour and water, and write down the successful hydration percentage on the recipe card once you find the sweet spot for your particular flour brand. That one number saves you from re-running the same experiment every time you bake."
      ],
      "tip": "For a single diagnostic bake, drop the hydration by 2 to 3 percent if the dough is impossible to shape; raise it by 2 to 3 percent if the dough spreads and refuses to hold tension."
    },
    {
      "heading": "Collapsed alveoli from over-proofing",
      "paragraphs": [
        "Over-proofed dough can fool you: it looks huge in the bowl, then collapses in the oven and bakes into a dense, gummy layer under a thick crust. The gluten network exhausted its elasticity during the long fermentation — it stretched too many times to bounce back — and cannot hold the gas during oven spring. If your loaf spreads sideways, smells strongly alcoholic (a sign the yeast produced a lot of ethanol during long fermentation), and the finger-poke test leaves a deep dent that does not spring back at all, then the proof was too long. Shorten the next proof or cold-retard the dough to slow the fermentation."
      ]
    },
    {
      "heading": "Systematic debugging",
      "paragraphs": [
        "Use Fix My Recipe in bread mode with your actual gram weights to see whether your loaf sits in a plausible flour-water-yeast-salt band for the style you want. Pair that ratio check with photos of the crumb. A uniform tight crumb across the whole slice points to mixing or flour as the problem. A central dense line points to shaping or under-proof. Bottom gumminess can be a bake temperature issue or simply slicing the loaf while it was still too hot — bread continues to set as it cools, and cutting in too early ruins the texture.",
        "Change one variable per bake — hydration, proof time, or oven steam, for example — and label your dough tubs so you remember which one was the experiment. Bread improves fastest when you keep boring written notes, not when you rely on heroic intuition that you cannot reconstruct three weeks later."
      ]
    },
    {
      "heading": "Dough temperature through the process",
      "paragraphs": [
        "Bulk fermentation around 75 to 78°F (24 to 26°C) is a common target for straight doughs. Much colder slows yeast activity enough to mimic \"no activity at all,\" while much warmer pushes the production of alcohols and acids that can weaken gluten over time. The rough rule of thumb (Arrhenius-style kinetics, the chemistry principle that says reaction rates roughly double for every 9°F / 5°C increase) means fermentation rate roughly doubles or halves with a 9°F / 5°C change.",
        "Final proof skin temperature matters too. Drafts below 65°F (18°C) can form a dry skin on the dough that restricts oven spring by acting like a tight outer shell. Overly humid proofer air above 85°F (29°C) can speed everything up enough to over-proof before you notice. A cool kitchen and a warm kitchen produce different breads from the same recipe."
      ]
    },
    {
      "heading": "Hydration and flour protein",
      "paragraphs": [
        "Flour protein content has a major effect on what hydration percentage works and how much mixing the dough can tolerate. All-purpose flour at around 11 to 12 percent protein binds less water and has a lower mixing ceiling than bread flour at 12 to 14 percent protein. High hydration without enough gluten development — too few folds during bulk fermentation, or simply mixing too briefly — yields a slack dough that bakes into a dense, spread-out loaf because the shape cannot hold tension. Match the hydration to the flour's gluten capacity, not just to what looks impressive in someone else's recipe video."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is dense bread always bad?",
      "a": "No. 100 percent rye and many whole-wheat formulas are naturally closer-textured because they have less gluten-forming protein and more bran that interferes with the gluten network. Compare to what you intended to make, not to the open-crumb sourdough on Instagram. Dense rye can be excellent rye."
    },
    {
      "q": "Does oil make bread denser?",
      "a": "Yes, in lean breads — fat lubricates the gluten strands and shortens them, which reduces the maximum volume the loaf can reach. In enriched breads, where fat is meant to be there, it improves softness and shelf life. Adding a tablespoon of oil to a lean ciabatta recipe will give you a denser, softer bread; that may or may not be what you wanted."
    },
    {
      "q": "Does vitamin C help with density?",
      "a": "A tiny amount of vitamin C (ascorbic acid) can strengthen the gluten oxidatively (it helps cross-link gluten proteins), which is why commercial doughs often include a pinch. But it is not a substitute for correct fermentation. If your bread is dense because of under-proofing, vitamin C will not fix it; the underlying timing is the problem."
    },
    {
      "q": "Dense rye versus dense wheat — same thing?",
      "a": "Not really. Rye contains pentosans (gummy soluble carbohydrates from the bran) that behave very differently from wheat gluten — they hold water aggressively and produce a moister, denser crumb by nature. Dense rye is often correct; dense wheat is often a sign of a problem to fix."
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
