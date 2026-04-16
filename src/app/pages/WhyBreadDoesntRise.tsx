import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-doesnt-rise",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Doesn't Rise",
  "subtitle": "Dead yeast, cold dough, salt clashes, weak gluten, and timing mistakes—ranked by how often they show up in home kitchens.",
  "readTime": "8 min read",
  "emoji": "📉",
  "fixRecipe": {
    "category": "bread",
    "problem": "wont-rise"
  },
  "quickAnswer": "Bread fails to rise when yeast never gets going, gas leaks out of a weak gluten cage, or the dough is too cold to ferment in a reasonable window. Check yeast vitality, dough temperature (roughly 75–80°F for most lean doughs), and whether you're measuring flour by weight.",
  "intro": "A loaf that stubbornly stays flat is one of the most demoralizing bakes because rise is the first promise bread makes. In practice, \"no rise\" is rarely one mysterious villain; it is usually a chain of small errors that add up to little gas production, poor gas retention, or both. This guide separates the biology (yeast and bacteria), the physics (temperature and pressure), and the structure (gluten development) so you can fix the actual bottleneck instead of guessing.",
  "sections": [
    {
      "heading": "Yeast health and food supply",
      "paragraphs": [
        "Yeast needs live cells, available sugars, and time. Instant yeast can be mixed straight into flour, but if your yeast is old or stored hot, viable cell count drops and fermentation crawls. A simple vitality check is dissolving a pinch of yeast in lukewarm water with a little sugar: within ten minutes you should see foam. If the surface stays flat, replace the yeast before chasing other variables.",
        "Sugar isn't always the limiting nutrient; flour supplies starch that enzymes break into fermentable sugars during autolyse and bulk fermentation. A dough that is extremely low in available sugar—some ultra-short formulas—can feel sluggish early, but most home failures are not \"starvation\" as much as temperature shock or salt/yeast contact issues."
      ],
      "bullets": [
        {
          "title": "Water too hot",
          "text": "Roughly above 120°F can shock or kill yeast; aim for pleasantly warm, not hot-tap scald."
        },
        {
          "title": "Salt directly on yeast",
          "text": "Mix salt into flour first, or add salt after a short mix so it is not concentrated on the yeast pellet."
        }
      ],
      "tip": "Buy fresh yeast in small packs, store sealed in the fridge or freezer, and date the bag when you open it."
    },
    {
      "heading": "Temperature and timing",
      "paragraphs": [
        "Fermentation speed doubles and halves with modest temperature changes. A dough parked at 62°F can look \"dead\" compared to the same dough at 78°F even though nothing is wrong—only slow. Conversely, parking dough on a radiator or in a hot car can push fermentation so fast that alcohol and acidity spike, gluten weakens, and the loaf later collapses.",
        "Give lean doughs at least one honest bulk fermentation window where you see real volume change—often 1.5× to 2× depending on formula—before assuming failure. Enriched doughs with butter, eggs, or milk move on a different clock because fat coats flour and slows gluten alignment."
      ]
    },
    {
      "heading": "Gluten strength and gas retention",
      "paragraphs": [
        "Gas is useless if the dough cannot hold it. Under-mixed dough can ferment \"okay\" yet never trap bubbles in a network, yielding a tight, heavy crumb. Mix to a smooth windowpane-friendly state for the style you want: sandwich bread tolerates more development than an open ciabatta, but both need enough structure to cage CO₂.",
        "Flour choice matters: all-purpose can work for many loaves, but very low-protein flour makes a slack dough that relaxes and spreads instead of springing. If your dough spreads like pancake batter during proof, strengthen with a fold series or adjust hydration downward slightly on the next bake."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "When you are juggling hydration, yeast, salt, and enrichments, ratios reveal whether you are accidentally running a cold, salty, or under-yeasted dough relative to common successful bands. SenseiFood's bread mode is designed to highlight those mismatches with transparent rules—not a black-box answer.",
        "After you adjust one variable, rebake and compare crumb shots side by side. Bread improves fastest when you treat each bake as an experiment with a written hypothesis: what single change are you testing, and what outcome would falsify your theory?"
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can too much salt stop rise?",
      "a": "Yes—salt tightens gluten and slows yeast. A badly mis-measured tablespoon instead of a teaspoon can make bulk fermentation crawl. Always weigh salt."
    },
    {
      "q": "Does sugar always speed rise?",
      "a": "A little sugar can help osmotically stressed yeast get rolling, but very sweet doughs can invert the effect and slow fermentation; enriched formulas often need more yeast or longer time."
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
