import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-hydration-matters-in-bread",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Hydration Matters in Bread",
  "subtitle": "Hydration is the quiet boss of open crumb, fermentation speed, and whether your dough feels impossible or magical in your hands.",
  "readTime": "8 min read",
  "emoji": "💧",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Hydration—water weight compared to flour weight—controls extensibility, how fast fermentation runs, and how open a crumb you can support before the loaf collapses. Too little water yields tight crumb; too much demands folds and timing. Learn baker’s percentages so recipes stop arguing in cups.",
  "intro": "Hydration is not \"how wet it feels today\"; it is how many grams of water ride along with every hundred grams of flour. That ratio decides whether folds do anything useful, whether shaping is possible, and how big alveoli can get before the roof caves. Baker’s percentage just means flour is always 100% and everything else is relative—700 g water to 1000 g flour is 70%. Sandwich breads often live around 60–65% for manageability; many open-crumb artisan formulas sit 75–85% when the baker knows how to handle them.",
  "sections": [
    {
      "heading": "Baker’s percentages",
      "paragraphs": [
        "Flour is 100%; water is relative. A 70% dough uses 700 g water per 1000 g flour. This language lets you scale and compare internet recipes without cup roulette—especially important because a \"cup\" of flour can swing hard."
      ]
    },
    {
      "heading": "Gluten and dilution",
      "paragraphs": [
        "Water lets gliadin and glutenin proteins move and link into gluten. At very high hydrations, kneading alone cannot \"press\" structure into place—you need timed folds to align strands in a wet matrix that would rather puddle."
      ]
    },
    {
      "heading": "Fermentation coupling",
      "paragraphs": [
        "Wetter doughs often ferment faster at the same temperature because enzymes and yeast move through solution more readily—but they also feel softer, which tempts people to under-proof because the dough \"does not look ready\" to an eye trained on firm dough."
      ]
    },
    {
      "heading": "Use the debugger intentionally",
      "paragraphs": [
        "Fix My Recipe rewards you for typing grams: it compares your hydration band to references for sandwich versus artisan styles. Move hydration in 2–3% steps—it is a coarse knob with fine effects, so impatience creates whiplash."
      ]
    },
    {
      "heading": "Starch and gluten competition",
      "paragraphs": [
        "Water hydrates starch for gelatinization inside the loaf and enables gluten formation in the dough—too little and dough tears; too much and you live by folds and fermentation control. Temperature changes how soft hydration feels: warm dough reads wetter than the same formula cold."
      ]
    },
    {
      "heading": "Adjusting safely",
      "paragraphs": [
        "Move 2–3% water at a time and note outcomes. Humidity in your flour bucket changes how the same recipe absorbs overnight—same numbers, different handshake."
      ]
    },
    {
      "heading": "Why hydration numbers need kitchen context",
      "paragraphs": [
        "This guide on why hydration matters in bread is easier to bake from when you remember hydration is a ratio, not a vibe. Baker’s percentage—water weight divided by flour weight, times one hundred—is how professionals compare recipes without cup noise. Bulk temperatures near 75–80°F (24–27°C) make fermentation predictable; dough temperature changes how sticky hydration feels in your hands the same way butter temperature changes cookies.",
        "Celsius-friendly anchors: 60% hydration feels firmer than 75% with the same flour; 80% can be gorgeous or impossible depending on protein and technique. Internal doneness for many lean loaves still lands near 200–208°F (93–97°C) regardless of whether the dough felt scary-sticky at mix.",
        "Humidity changes flour from the bag; winter vs summer kitchens silently change effective hydration. Preheat drift still exists—thermometer beats beep. Fix My Recipe bread mode helps you move hydration in small percent steps without losing the plot."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is higher hydration always better?",
      "a": "No—technique and flour must match. A failed 80% loaf is worse than a joyful 68% loaf."
    },
    {
      "q": "Same hydration different flour?",
      "a": "Absorption differs—feel and windowpane test beat numbers."
    },
    {
      "q": "Oil in hydration %?",
      "a": "Usually counted separately—fat lubricates gluten."
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

export default function WhyHydrationMattersInBread() {
  return <ScienceArticlePage spec={SPEC} />;
}
