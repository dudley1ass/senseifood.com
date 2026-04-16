import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-espresso-channels",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Espresso Channels (Extraction Path Failure)",
  "subtitle": "Density gradients, edge effects, and uneven prep create least-resistance rivers.",
  "readTime": "8 min read",
  "level": "Pressure bed physics",
  "emoji": "🌀",
  "fixRecipe": {
    "category": "coffee",
    "problem": "extraction-balance"
  },
  "quickAnswer": "Channeling is water cheating past grounds. Fix distribution (WDT), level tamp, align basket/screen, match dose to basket depth, and avoid cracked pucks from impact.",
  "intro": "At 9 bar, tiny cracks are Grand Canyons. The shot timer can look “fine” while the cup is simultaneously sour and bitter—classic channel signature.",
  "sections": [
    {
      "heading": "Prep sequence: distribute before compress",
      "paragraphs": [
        "Tamping cannot fix vertical density stripes. Weiss distribution techniques exist because fingers lie."
      ]
    },
    {
      "heading": "Temperature and flow profiling",
      "paragraphs": [
        "Some machines reduce early channel risk with gentle preinfusion; long dry preheat of puck can change viscosity."
      ]
    },
    {
      "heading": "Holding puck integrity between prep and pull",
      "paragraphs": [
        "Delayed shots after prep can settle micro-fissures—or create them if bumped. Lock in calmly."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Coffee Grind Size Matters",
      "path": "/coffee-science/why-coffee-grind-size-matters"
    },
    {
      "title": "Why Coffee Brewing Time Matters",
      "path": "/coffee-science/why-coffee-brewing-time-matters"
    },
    {
      "title": "Coffee Extraction Science",
      "path": "/coffee-science/coffee-extraction-science"
    },
    {
      "title": "How to Debug Your Coffee",
      "path": "/coffee-science/how-to-debug-your-coffee"
    }
  ]
};

export default function WhyEspressoChannels() {
  return <ScienceArticlePage spec={SPEC} />;
}
