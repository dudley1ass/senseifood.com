import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-doesnt-rise",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Doesn't Rise",
  "subtitle": "At home, “no rise” is usually a short list of repeat offenders: yeast that is tired or shocked, dough that is too cold to wake up on a normal schedule, salt that landed too hard on the yeast, or gluten that never got strong enough to trap the gas the yeast is making.",
  "readTime": "8 min read",
  "emoji": "📉",
  "fixRecipe": {
    "category": "bread",
    "problem": "wont-rise"
  },
  "quickAnswer": "Bread fails to rise when yeast never really gets going, when gas leaks out because the gluten network is too weak to hold bubbles, or when the dough is so cold that fermentation crawls and you give up too early. Check that your yeast is alive (a foamy pinch test in warm water with a little sugar), aim for a dough-friendly temperature window (many lean doughs feel happiest around the mid-70s °F), and weigh flour and salt so you are not accidentally running a salty or thirsty dough.",
  "intro": "A loaf that stubbornly stays flat is one of the most demoralizing bakes because rise is the first promise bread makes. In practice, “no rise” is rarely one mysterious villain; it is usually a chain of small errors that add up to little gas production, poor gas retention, or both. This guide separates the biology (yeast and bacteria), the physics (temperature and time), and the structure (gluten development) so you can fix the actual bottleneck instead of guessing. You can keep the science words—fermentation, gluten network, CO₂—but the kitchen question is always the same: are you making enough gas, and are you holding it?",
  "sections": [
    {
      "heading": "Yeast health and food supply",
      "paragraphs": [
        "Yeast is a living culture: it needs viable cells, something to eat, and time to divide and burp CO₂ into your dough. Instant yeast can go straight into flour, but if the jar sat in a hot drawer for a year, the viable cell count can drop and fermentation crawls—your dough is not “stubborn,” it is under-staffed. A simple vitality check is dissolving a pinch of yeast in lukewarm water with a little sugar: within about ten minutes you should see foam. If the surface stays flat, buy fresh yeast before you chase hydration rabbit holes. Sugar is not always the limiting nutrient; flour starch gets broken into fermentable sugars as the dough rests (autolyse and bulk fermentation help). Most home failures are not “starvation” so much as temperature shock, salt/yeast contact issues, or flour measured loose versus tight.",
        "Salt strengthens gluten and also slows yeast—which is good in the right amount—but a badly placed pile of salt on wet yeast is like a cold shower: it can locally shock cells. Mix salt evenly into flour first, or add salt after a short mix so it is not concentrated on the yeast pellet."
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
        "Fermentation speed changes a lot with temperature—small shifts in °F change how fast yeast produces CO₂ and acids. A dough parked at 62°F can look “dead” compared to the same dough at 78°F even though nothing is wrong—only slow. Conversely, parking dough on a radiator or in a hot car can push fermentation so fast that alcohol and acidity spike, gluten weakens, and the loaf later collapses. Give lean doughs at least one honest bulk fermentation window where you see real volume change—often 1.5× to 2× depending on formula—before assuming failure. Enriched doughs with butter, eggs, or milk move on a different clock because fat coats flour particles and slows gluten alignment, which is why sweet doughs often need patience, not panic."
      ]
    },
    {
      "heading": "Gluten strength and gas retention",
      "paragraphs": [
        "Gas is useless if the dough cannot hold it. Under-mixed dough can ferment “okay” yet never trap bubbles in a stretchy network, yielding a tight, heavy crumb—think of gluten like a balloon material: you need enough stretch without tears. Mix to a smooth, appropriately developed dough for the style you want: sandwich bread tolerates more development than an open ciabatta, but both need enough structure to cage CO₂. Flour choice matters: all-purpose can work for many loaves, but very low-protein flour makes a slack dough that relaxes and spreads instead of springing. If your dough spreads like pancake batter during proof, strengthen with a fold series or adjust hydration slightly downward on the next bake."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "When you are juggling hydration, yeast, salt, and enrichments, ratios reveal whether you are accidentally running a cold, salty, or under-yeasted dough relative to common successful bands. SenseiFood’s bread mode is designed to highlight those mismatches with transparent rules—not a black-box answer. After you adjust one variable, rebake and compare crumb shots side by side. Bread improves fastest when each bake answers a simple question: what single change are you testing, and what would convince you that you were wrong about the cause?"
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can too much salt stop rise?",
      "a": "Yes—salt tightens gluten and slows yeast. A badly mis-measured tablespoon instead of a teaspoon can make bulk fermentation crawl. Weigh salt on a scale; volume teaspoons are how quiet errors sneak in."
    },
    {
      "q": "Does sugar always speed rise?",
      "a": "A little sugar can help yeast in some doughs, but very sweet doughs can slow fermentation instead; enriched formulas often need more yeast or more time, not more hope."
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
