import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-has-large-holes",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Has Large Holes (Gas Coalescence)",
  "subtitle": "Uneven bubble distribution merges into chambers when gluten films are uneven.",
  "readTime": "8 min read",
  "level": "Gas dynamics",
  "emoji": "🕳️",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Random caverns often come from uneven hydration, late uneven yeast pockets, or shaping that trapped mega-bubbles. Pre-shape, bench rest, and gentle tension even the field.",
  "intro": "Small, even holes are many stable gas cells that stayed separate through proof and bake. One giant hole—or a few huge ones—is different: it is coalescence, where neighboring bubbles merged because the gluten wall between them thinned and failed. That can be desirable in an open crumb ciabatta and frustrating in a sandwich loaf. This guide explains how mixing, fermentation temperature, degassing, and shaping steer you toward even alveoli versus accidental caverns, and when large holes are a feature instead of a bug.",
  "sections": [
    {
      "heading": "Mixing uniformity",
      "paragraphs": [
        "Dry flour clumps or pockets of undissolved salt can hide yeast sanctuaries that wake up later than the rest of the dough. Those late bloomers inflate aggressively in bulk or in the oven, swallowing neighbors and leaving a void. Fully hydrate before bulk: scrape the bowl, check the bottom for dry bits, and consider a short autolyse if your flour is thirsty.",
        "Uneven incorporation also means uneven gluten development. Some regions become extensible while others stay tight, so gas migrates toward the softer lanes—another path to merged bubbles. For lean doughs, mix to a consistent windowpane-friendly state for the style you want; for very wet doughs, use timed stretch-and-folds so structure builds evenly instead of only at the edges of the tub."
      ],
      "bullets": [
        {
          "title": "Check the corners",
          "text": "Stand-mixer bowls often hide dry flour under the hook until late—pause and scrape once or twice during the mix."
        },
        {
          "title": "Salt timing",
          "text": "Salt tightens gluten; sprinkling it late onto a wet patch can create locally stiff zones next to slack ones."
        }
      ],
      "tip": "If you always see one huge hole in the same spot of the loaf, suspect shaping or a hot spot in your proofer—not random chance."
    },
    {
      "heading": "Degassing and lamination choices",
      "paragraphs": [
        "Ciabatta and some artisan loaves want a degree of coalescence: gentle handling preserves large alveoli. Sandwich bread and soft rolls usually want finer, more uniform cells, which means more controlled degassing—pressing or rolling—to redistribute gas before final proof.",
        "Over-degassing a dough that still has strong yeast activity can backfire: you reset the bubble field, then new gas packs into fewer nucleation sites. Match your punch-down or fold strategy to the formula and timeline. Enriched doughs with fat often need gentler degassing because fat lubricates gluten and changes how bubbles coarsen."
      ]
    },
    {
      "heading": "Proof temperature gradients",
      "paragraphs": [
        "Dough near a radiator, window, or metal tray edge proofs faster on one side. The fast side produces more CO₂ earlier; when the loaf joins in the oven, you get an uneven gas field that can merge into one dominant cavity. Rotate tubs during bulk, avoid drafty corners for final proof, and keep the dough covered so the skin does not dry into a stiff membrane that traps pressure unevenly.",
        "Cold retardation reduces this risk by slowing everything uniformly—but remember to temper dough slightly before final shaping if it is too cold to stretch without tearing, because torn surfaces can create weak zones where bubbles escape sideways."
      ]
    },
    {
      "heading": "Oven spring and the last merge",
      "paragraphs": [
        "Steam in the first minutes keeps the crust extensible so internal pressure can finish expanding cells evenly. If the crust sets early on one face—often the top or the side facing the element—gas can redirect and carve a single large pocket just under that crust. Venting too late can do the opposite: pressure builds until something gives.",
        "Scoring gives steam a planned exit; an unscored or under-scored tight skin can force lateral blowouts that read as one big hole when you slice."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Are large holes always a mistake?",
      "a": "No. Open-crumb styles celebrate irregular alveoli. Problems are context: a sandwich loaf with one tunnel is usually uneven fermentation or shaping; an artisan batard with an open crumb may be exactly what you wanted."
    },
    {
      "q": "Can over-proofing cause giant holes?",
      "a": "Yes—weak gluten from excessive fermentation can let bubbles coalesce and collapse into irregular voids, sometimes with a tight ring of denser crumb around them."
    },
    {
      "q": "Does hydration level matter?",
      "a": "Higher hydration can yield a more extensible dough that coarsens more easily if handling is rough; lower hydration can hide mixing issues but still show uneven gas if yeast distribution is poor."
    }
  ],
  "related": [
    {
      "title": "Why Bread Is Dense",
      "path": "/bread-science/why-bread-is-dense"
    },
    {
      "title": "Why Dough Wont Hold Shape",
      "path": "/bread-science/why-dough-wont-hold-shape"
    },
    {
      "title": "Why Bread Rises",
      "path": "/bread-science/why-bread-rises"
    },
    {
      "title": "How Yeast Works",
      "path": "/bread-science/how-yeast-works"
    }
  ]
};

export default function WhyBreadHasLargeHoles() {
  return <ScienceArticlePage spec={SPEC} />;
}
