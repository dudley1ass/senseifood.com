import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-doesnt-rise",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Doesn't Rise",
  "subtitle": "Dead yeast, cold dough, salt clashing with yeast, weak gluten, and timing mistakes — ranked roughly by how often each one shows up in home kitchens.",
  "readTime": "8 min read",
  "emoji": "📉",
  "fixRecipe": {
    "category": "bread",
    "problem": "wont-rise"
  },
  "quickAnswer": "Bread fails to rise when the yeast never gets going, when the gas yeast does produce leaks out through a weak gluten cage, or when the dough is so cold that fermentation crawls along too slowly to see. Check your yeast vitality (is it still alive?), your dough temperature (roughly 75 to 80°F / 24 to 27°C for most lean doughs), and whether you are measuring flour by weight instead of by scoop.",
  "intro": "A loaf that stubbornly stays flat is one of the most demoralizing bakes, because the rise is the first promise that bread makes — it is what tells you the yeast and the gluten are doing their jobs. In practice, \"no rise\" is rarely one mysterious villain; it is usually a chain of small errors that add up to either too little gas production, too little gas retention, or both. This guide separates the biology (the yeast cells and the bacteria they sometimes share the dough with), the physics (temperature and pressure dynamics in the dough), and the structure (gluten development that traps the gas) so you can fix the actual bottleneck instead of guessing.",
  "sections": [
    {
      "heading": "Yeast health and food supply",
      "paragraphs": [
        "Yeast needs three things: live cells, available sugars to ferment, and time. Instant yeast can be mixed straight into the flour without proofing first, but if your yeast is old or has been stored hot (in a warm cabinet near a stove, for example), the count of viable cells drops dramatically and fermentation crawls. A simple vitality check: dissolve a pinch of yeast in lukewarm water with a little sugar in a small bowl. Within ten minutes you should see clear foam forming on the surface. If the surface stays flat and still after fifteen minutes, the yeast is dead or nearly dead, and you should replace it before chasing any other variable. This single check eliminates the most common cause of total rise failure.",
        "Sugar is not always the limiting nutrient for yeast. Flour itself supplies starch that enzymes (small biological catalysts that speed up specific chemical reactions) gradually break into fermentable sugars during the autolyse (a resting period where flour and water sit together before mixing) and the bulk fermentation. A dough that is extremely low in available sugar — some ultra-short formulas with very little time — can feel sluggish at the start, but most home failures are not actually starvation; they are temperature shock or salt-on-yeast contact issues."
      ],
      "bullets": [
        {
          "title": "Water too hot",
          "text": "Water above roughly 120°F (49°C) can shock or kill yeast cells outright — yeast is just a living organism, and it dies in heat the same way other small organisms do. Aim for pleasantly warm water, not hot-tap-scald."
        },
        {
          "title": "Salt directly on yeast",
          "text": "Salt draws water out of yeast cells through osmosis (the natural movement of water from regions of low salt concentration to regions of high salt concentration), which damages or kills them. Mix the salt into the flour first, or add salt after a short initial mix so it does not sit concentrated on top of a yeast pellet."
        }
      ],
      "tip": "Buy fresh yeast in small packs rather than enormous bulk containers, store the sealed pack in the fridge or freezer, and write the open date on the bag the moment you break the seal."
    },
    {
      "heading": "Temperature and timing",
      "paragraphs": [
        "Fermentation speed roughly doubles or halves with modest temperature changes. A dough parked at 62°F (17°C) can look completely dead compared to the same dough at 78°F (26°C), even though nothing is actually wrong — it is just running much slower. Conversely, parking dough on a radiator or in a sunny hot car can push fermentation so fast that alcohols and acids spike, the gluten weakens from over-fermentation, and the loaf collapses later in the bake. The sweet spot for most lean doughs is around 75 to 80°F (24 to 27°C).",
        "Give lean doughs at least one honest bulk fermentation window where you see real volume change — often 1.5× to 2× the starting size, depending on the formula — before assuming failure. Enriched doughs with butter, eggs, or milk operate on a different clock: the fat coats the gluten strands and slows their alignment, the sugar can osmotically stress the yeast, and the milk proteins compete with gluten for water. All of that means enriched doughs ferment more slowly even at the same temperature."
      ]
    },
    {
      "heading": "Gluten strength and gas retention",
      "paragraphs": [
        "Gas is useless if the dough cannot hold it. Under-mixed dough can ferment perfectly well — yeast produces plenty of carbon dioxide — and still produce a tight, heavy crumb because the gluten network was never built strongly enough to trap the bubbles. Mix to a smooth, windowpane-friendly state for the style you want: a sandwich loaf tolerates more development than a delicate open ciabatta, but both need enough gluten structure to cage the carbon dioxide as it tries to expand the dough.",
        "Flour choice matters as much as mix time. All-purpose flour works for many loaves, but a very low-protein flour produces a slack dough that relaxes and spreads sideways instead of springing upward when proofed. If your dough is spreading like pancake batter during the proof, your next bake should either strengthen the dough with a series of folds during bulk or reduce the hydration slightly to give the dough more structural backbone."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "When you are juggling hydration, yeast quantity, salt, and enrichments, the ratios in your formula reveal whether you are accidentally running a cold, salty, or under-yeasted dough compared to the bands where most successful recipes live. SenseiFood's bread mode highlights those mismatches with transparent rules, not a black-box answer — it tells you which percentages are unusual and lets you decide whether the recipe is intentional or off. After you adjust one variable, bake again and compare the crumb shots side by side. Bread improves fastest when you treat each bake as a small experiment with a written hypothesis: what is the one variable you are changing this time, and what outcome would prove your theory wrong?"
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can too much salt stop the rise?",
      "a": "Yes. Salt tightens the gluten network (which is actually useful in moderation) and slows yeast activity through osmotic stress. A badly mis-measured tablespoon of salt instead of a teaspoon can make bulk fermentation crawl to near-zero. Always weigh salt by grams, because the volume measurement of salt varies dramatically between brands — Diamond Crystal kosher salt weighs about half what fine table salt weighs in the same teaspoon."
    },
    {
      "q": "Does sugar always speed up rise?",
      "a": "A little sugar can help yeast that is feeling osmotically stressed (low water activity) get rolling, by giving it readily available food. But very sweet doughs can actually invert the effect and slow fermentation — the high sugar content draws water out of yeast cells, just like high salt does, and the cells struggle. Enriched and sweet formulas often need more yeast and longer fermentation time to compensate."
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

export default function WhyBreadDoesntRise() {
  return <ScienceArticlePage spec={SPEC} />;
}
