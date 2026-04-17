import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-taste-floury",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Taste Floury",
  "subtitle": "Raw starch perception when hydration, bake time, or mixing order leaves flour ungelatinized.",
  "readTime": "7 min read",
  "level": "Hydration & bake",
  "emoji": "🌾",
  "fixRecipe": {
    "category": "cookie",
    "problem": "general"
  },
  "quickAnswer": "Floury taste means starch granules never fully hydrated or gelatinized—under-mixed dry pockets, very thick dough baked too pale, or flour not coated by fat/sugar before liquids. Your tongue is detecting intact granules or undercooked starch gel in localized spots, not imaginary dryness.",
  "intro": "Wheat flour brings starch packed in granules that must hydrate and heat through before they lose their chalky, cereal edge. In cookies, sugar and fat compete with water for access to those granules; if water never reaches some pockets, or heat never holds long enough at the center, you get the sensory signature people call “raw flour” even when the dough was technically safe to eat. Mixing order matters because creamed fat and sugar can disperse flour more evenly, delaying excessive gluten formation while still allowing hydration. Bake profile matters because a golden rim can mislead you: the edge may be fully set while a thick dome’s core never crossed gelatinization long enough. Fixing floury cookies is almost always about water path, thermal path, or both—not about adding more vanilla on top.",
  "sections": [
    {
      "heading": "Mixing sequence and fat coating",
      "paragraphs": [
        "Classic creaming creates a fat phase that can partially coat starch before bulk hydration, reducing free-water channels that clump dry flour. Dumping liquid into loose flour, by contrast, risks uneven paste formation and tiny dry nodules that survive mixing visually intact until the bake exposes them.",
        "Under-mixing after flour addition leaves visible streaks; even if streaks vanish, micro-layers of under-hydrated starch can remain. The fix is thorough but gentle incorporation—enough revolutions to homogenize, not so much that you breadify the dough unless the recipe intends it."
      ],
      "bullets": [
        {
          "title": "Sift or whisk drys",
          "text": "Even distribution of leaveners and salt prevents localized chemistry that changes set time and masks underbaked centers."
        },
        {
          "title": "Scrape the bowl",
          "text": "Dry flour hides under the beater; pause once to scrape so nothing rides through unmixed."
        }
      ]
    },
    {
      "heading": "Bake temperature, thickness, and spread",
      "paragraphs": [
        "Thick mounds set tops fast while interiors lag in temperature. Lowering oven temperature slightly and extending time gives the center a chance to finish gelatinizing without scorching the rim. Pressing dough disks flatter increases heat penetration per bite depth—a practical lever for persistent floury centers.",
        "Convection can help even heating but also accelerate surface set; rotate trays and watch color on both top and bottom because pale bottoms can correlate with undercooked cores on insulated mats."
      ],
      "tip": "If edges are dark and centers still taste floury, thickness is the prime suspect—geometry beat your bake, not the clock alone."
    },
    {
      "heading": "Chilling, hydration time, and flour age",
      "paragraphs": [
        "Cold rest allows moisture to migrate into starch more evenly; baking too soon after mixing can leave dry cores in high-sugar doughs where osmotic competition held water back from flour. Overnight rests are not mandatory for every recipe, but they are a reliable fix when flavor development and hydration evenness both help.",
        "Old flour can taste stale or musty and be misread as “floury,” but true raw-starch perception still tracks cook-through. If the problem is musty pantry notes, replace flour; if chalky paste in the center, fix thermal delivery."
      ]
    },
    {
      "heading": "Differentiating floury from starchy-thick or dry",
      "paragraphs": [
        "Cakey cookies can feel moist yet still carry cereal notes if structure set via egg foam rather than full starch cook in the thickest region—taste carefully. Dry cookies crumble and feel low moisture everywhere; floury cookies often feel oddly pasty in the middle while edges are fine.",
        "Chocolate-heavy doughs can hide visual cues; break a cookie open and look at crumb color and sheen near the center. Uniform color and no gray raw streaks are good signs that starch reached gelatinization."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Does bleached versus unbleached flour change floury taste?",
      "a": "Bleaching changes starch and protein slightly and can affect spread, but raw-starch perception is still about cook-through and hydration. Choose flour for the recipe’s intended texture, then ensure bake and mixing support even gelatinization."
    },
    {
      "q": "Can I fix floury centers by microwaving baked cookies?",
      "a": "Microwaves heat unevenly and can ruin texture, but a brief gentle warm-through sometimes finishes underbaked centers in a pinch. Better to rebake at low temperature briefly or adjust future batches—microwave is a bandage, not a process."
    },
    {
      "q": "Why does my gluten-free blend still taste gritty?",
      "a": "Different starches gelatinize differently; grit can be particle size or insufficient hydration and bake time for that blend. It is a related but distinct problem from wheat floury notes—follow blend-specific hydration and rest guidance."
    }
  ],
  "related": [
    {
      "title": "Why Cookies Turn Cakey",
      "path": "/cookie-science/why-cookies-turn-cakey"
    },
    {
      "title": "Why Cookies Stay Thick",
      "path": "/cookie-science/why-cookies-stay-thick"
    },
    {
      "title": "Why Cookies Spread",
      "path": "/cookie-science/why-cookies-spread"
    },
    {
      "title": "How to Debug Cookie Batch Issues",
      "path": "/cookie-science/how-to-debug-cookie-batch-issues"
    }
  ]
};

export default function WhyCookiesTasteFloury() {
  return <ScienceArticlePage spec={SPEC} />;
}
