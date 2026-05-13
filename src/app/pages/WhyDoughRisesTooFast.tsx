import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-dough-rises-too-fast",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Dough Rises Too Fast",
  "subtitle": "Yeast does not read your calendar: warmer kitchens, extra yeast, or a small dough mass can double bulk before flavor and gluten have had a fair conversation.",
  "readTime": "7 min read",
  "emoji": "🚀",
  "fixRecipe": {
    "category": "bread",
    "problem": "wont-rise"
  },
  "quickAnswer": "Fast rise almost always tracks environment: dough sitting in the high-70s or 80s°F (mid-20s to low-30s°C), yeast weighed heavy-handed, or both. Cool the mass, mix with cooler water, use less yeast next mix, or park bulk in the fridge for part of the timeline so acids and alcohols develop without the dough collapsing.",
  "intro": "Rising fast feels like winning until you miss the peak and over-proof, or until the loaf tastes one-note because bacteria and slower yeast chemistry never got stage time. Controlled timing beats raw speed: exponential yeast growth in warm bands can blow through nutrients and leave alcohol sharpness or a fragile gluten frame. Track dough temperature, not just the timer on your phone—two hours at 62°F is not two hours at 82°F.",
  "sections": [
    {
      "heading": "Temperature dominates",
      "paragraphs": [
        "Moving dough from a cool kitchen into a warm proofing drawer can cut bulk time in half without you changing a single gram on paper. Ambient temperature, sunlight on the bowl, or a mixer that heated the dough all count. Build the habit of a quick dough thermometer probe: when bulk races, temperature is the usual narrator."
      ]
    },
    {
      "heading": "Yeast quantity",
      "paragraphs": [
        "Doubling yeast to \"save time\" usually buys panic later: narrower proof windows, easier over-proof, and sometimes harsh alcohol. Weigh yeast—small errors are large percentage errors when the mass is tiny.",
      ],
      "tip": "Cold autolyse (resting flour and water before salt/yeast) and refrigerated bulk are civilized ways to steal schedule back from a warm apartment."
    },
    {
      "heading": "Sugar and osmotic pressure",
      "paragraphs": [
        "Very sweet doughs tie water osmotically and can stress yeast early, then behave oddly later—but mildly sweet doughs that rise like rockets still usually trace back to warmth, not sugar alone. If sugar is extreme, treat it as its own fermentation design problem."
      ]
    },
    {
      "heading": "Tooling",
      "paragraphs": [
        "If your formula is yeast-heavy for the flour mass, Fix My Recipe will flag it against lean bread norms. Pair that read with an actual thermometer so you are not arguing with the dough about metaphysics."
      ]
    },
    {
      "heading": "Cooling control",
      "paragraphs": [
        "Fridge retard, a cooler corner, or less starter in sourdough all slow the clock. Salt near the usual 1.8–2.2% of flour weight nudges yeast speed a little—enough to matter at the margin, not enough to fix a steamy 85°F kitchen by itself."
      ]
    },
    {
      "heading": "Signals",
      "paragraphs": [
        "Beer-y smell, fragile bubbles, dough that climbs and then sighs—these are volume and aroma cues that beat the clock. When the dough doubles suspiciously fast, assume temperature first, yeast grams second."
      ]
    },
    {
      "heading": "Slowing the rise without turning off flavor",
      "paragraphs": [
        "This guide on why dough rises too fast makes more sense when you stop trusting the wall clock alone. Yeast is temperature-happy: many bakers find bulk fermentation calmer around 75–80°F (24–27°C) than in the low-80s°F where dough can double before flavor catches up. If you are retarding in the fridge, remember cold slows chemistry dramatically—not a punishment, a schedule tool.",
        "Translate your favorite bands once if you think in Celsius; altitude and kitchen warmth change how fast a \"warm corner\" actually is. Internal bread doneness for many lean loaves still lands near 200–208°F (93–97°C) even when bulk felt like a rocket—rise speed and bake finish are different chapters.",
        "Steam early in the bake keeps crust extensible for oven spring; venting later helps color. Humidity and oven recovery between loaves matter more than Instagram comments imply. One-line notes beat proud memory every time."
      ]
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
  ],
  "faqs": [
    {
      "q": "Instant vs active dry speed?",
      "a": "Instant skips blooming—can feel faster in same temp."
    },
    {
      "q": "Sugar rush?",
      "a": "High sugar osmotically stresses yeast initially then feeds—complex curve."
    }
  ]
};

export default function WhyDoughRisesTooFast() {
  return <ScienceArticlePage spec={SPEC} />;
}
