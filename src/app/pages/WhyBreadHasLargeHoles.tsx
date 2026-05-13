import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-has-large-holes",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Has Large Holes (Gas Coalescence)",
  "subtitle": "Uneven bubble distribution merges into chambers when the gluten films between cells are too thin or too uneven to hold the boundaries.",
  "readTime": "8 min read",
  "level": "Gas dynamics",
  "emoji": "🕳️",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Random cavernous holes usually come from uneven hydration, pockets of late-blooming yeast that woke up after the rest of the dough, or shaping that trapped a few mega-bubbles where there should have been many smaller ones. Pre-shape the dough, give it a bench rest, and use gentle even tension during final shaping to spread the gas field evenly.",
  "intro": "Small, even holes in a crumb are many stable gas cells that stayed separate through the proof and through the bake. One giant hole — or a few huge ones — is different. That is coalescence, where neighboring bubbles merged because the gluten wall between them thinned and failed. The two bubbles became one, the new bubble joined a third, and you end up with a cavern. Coalescence can be a feature: a great open-crumb ciabatta is essentially controlled large-hole bread, and bakers chase that look on purpose. Coalescence can also be a frustrating bug: a sandwich loaf with a tunnel running through it ruins clean slicing. This guide explains how mixing uniformity, fermentation temperature, degassing technique, and shaping steer you toward even bubbles versus accidental caverns — and when those big holes are exactly what you wanted.",
  "sections": [
    {
      "heading": "Mixing uniformity",
      "paragraphs": [
        "Dry flour clumps or pockets of undissolved salt can create yeast sanctuaries — small zones where the yeast wakes up later than the rest of the dough because the local water or sugar availability was different. Those late bloomers inflate aggressively during bulk fermentation or in the oven, swallowing their neighbors and leaving a single big void. Fully hydrate the dough before bulk fermentation: scrape the bowl down, check the bottom for dry bits of flour, and consider a short autolyse (resting flour and water together before active mixing) if your flour is thirsty.",
        "Uneven incorporation also means uneven gluten development. Some regions become extensible (stretchy) while others stay tight, so gas migrates toward the softer lanes — yet another path to merged bubbles. For lean doughs, mix to a consistent windowpane-friendly state for the style you want. For very wet doughs, use timed stretch-and-folds during bulk so structure builds evenly throughout the dough mass rather than only at the bowl edges."
      ],
      "bullets": [
        {
          "title": "Check the corners",
          "text": "Stand-mixer bowls often hide a layer of dry flour under the dough hook until late in the mix. Pause the mixer once or twice during the mix to scrape the bowl walls and reincorporate any dry pockets."
        },
        {
          "title": "Salt timing",
          "text": "Salt tightens the gluten network locally. Sprinkling salt late onto a wet patch of dough can create a tight, stiff zone right next to slack zones, which is one path to large holes forming along the boundary between them."
        }
      ],
      "tip": "If you always see one huge hole in the same spot of every loaf, suspect a shaping habit or a hot spot in your proofer — not random chance. Consistency means there is a consistent cause."
    },
    {
      "heading": "Degassing and lamination choices",
      "paragraphs": [
        "Ciabatta and some artisan loaves want a degree of coalescence — gentle handling preserves the large alveoli (the gas cells in the dough) that give the bread its signature open look. Sandwich bread and soft rolls usually want finer, more uniform cells, which means more controlled degassing during shaping. Degassing is pressing or rolling the dough to redistribute gas before final proof, and the technique you use depends on the bread you want.",
        "Over-degassing a dough that still has strong yeast activity can backfire. You reset the bubble field, then new gas packs into fewer nucleation sites (the spots where new bubbles form) because the now-tighter dough only allows bubbles to start in fewer places. Match your punch-down or fold strategy to the formula and timeline. Enriched doughs with fat often need gentler degassing because the fat lubricates the gluten and changes how bubbles coarsen (merge) over time."
      ]
    },
    {
      "heading": "Proof temperature gradients",
      "paragraphs": [
        "Dough sitting near a radiator, a sunny window, or one edge of a hot metal tray proofs faster on the warm side. The warm side produces more carbon dioxide earlier; when the loaf joins together in the oven, you have an uneven gas field that can merge into one dominant cavity. Rotate dough tubs during bulk fermentation, avoid drafty or warm corners for final proof, and keep the dough covered so the skin does not dry into a stiff membrane that traps pressure unevenly.",
        "Cold retardation (proofing in the fridge over many hours) reduces this risk because it slows the whole dough uniformly to fridge temperature, and uniformly slow is more even than \"slow on one side, fast on the other.\" But remember to temper the dough — let it warm slightly before shaping — if it is too cold to stretch without tearing, because torn surfaces during shaping create weak zones where bubbles can escape sideways and leave large empty pockets."
      ]
    },
    {
      "heading": "Oven spring and the last merge",
      "paragraphs": [
        "Steam during the first minutes of the bake keeps the crust extensible (stretchy) so the internal pressure can finish expanding the cells evenly. If the crust sets early on one face of the loaf — often the top or the side closest to the heating element — the gas can be redirected and carve out a single large pocket just under that crust as it expands sideways instead of upward. Venting the steam too late can do the opposite: pressure keeps building until something gives suddenly, and the result is a torn surface and an irregular crumb.",
        "Scoring gives steam a planned exit route. An unscored loaf, or one that is under-scored relative to a tight skin, can force a lateral blowout that reads as one big hole when you slice the cooled loaf. Match the score depth to how proofed the dough was — strong well-developed dough takes a confident deep slash; tender dough needs a shallower cut."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Are large holes always a mistake?",
      "a": "No. Open-crumb styles like ciabatta, focaccia, and certain artisan breads celebrate irregular, hole-filled crumb structure. Whether large holes are a feature or a flaw depends entirely on context — a sandwich loaf with a tunnel through it is usually a sign of uneven fermentation or shaping, but an artisan batard with a beautiful open crumb may be exactly what you were going for."
    },
    {
      "q": "Can over-proofing cause giant holes?",
      "a": "Yes. Weak gluten from excessive fermentation lets bubbles coalesce more easily, and the over-proofed dough can collapse into irregular voids surrounded by a denser ring of compressed crumb. The pattern is often distinctive: a single big cavity with a tight collar around it, sometimes a slightly gummy texture in the dense zones."
    },
    {
      "q": "Does hydration level matter?",
      "a": "Yes. Higher-hydration doughs are more extensible, so they can produce a more open crumb but also coarsen (merge bubbles) more easily if you handle them roughly. Lower hydration can hide mixing problems because the stiffer dough is more forgiving, but you can still get uneven gas distribution if the yeast distribution itself is uneven. Hydration interacts with technique; it does not override it."
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
