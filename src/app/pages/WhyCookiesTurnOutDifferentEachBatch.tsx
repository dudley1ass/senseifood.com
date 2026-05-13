import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-turn-out-different-each-batch",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Turn Out Different Each Batch",
  "subtitle": "Tiny shifts in butter temperature, flour measurement, oven recovery, and pan heat swamp the recipe card that \"looked identical\" in your head.",
  "readTime": "8 min read",
  "emoji": "🎲",
  "fixRecipe": {
    "category": "cookie",
    "problem": "general"
  },
  "quickAnswer": "Batch variance is usually invisible noise: butter a few degrees warmer, flour scooped heavier, the second tray going onto a still-hot pan, or the oven lying about \"preheated.\" Weigh ingredients, match dough temperature scoop to scoop, and verify the oven with a thermometer instead of the beep alone.",
  "intro": "Human memory smooths rough edges; two batches that \"felt the same\" can diverge because butter was 58°F once and 68°F another time, or because the second sheet started on a pan that was still warm from batch one. Reliability is boring systems: grams, a thermometer, and a one-line note. Aim for consistent dough temperature at scoop time when a recipe is sensitive—many drop cookies behave around room temperature—and remember that many home ovens swing above and below the setpoint, which changes spread and browning even when your timer is perfect.",
  "sections": [
    {
      "heading": "Ingredient state",
      "paragraphs": [
        "Butter and egg temperature change how creaming emulsifies and how fast dough spreads; flour packs in cups even when you swear you spoon-and-level the same way. Even the same brand can mill slightly differently season to season—grams reveal what cups hide.",
      ]
    },
    {
      "heading": "Equipment state",
      "paragraphs": [
        "Dark versus light pans, convection on or off, rack height, and whether the oven truly recovered between trays all move heat into the cookie. If batch two always looks different, batch two might be starting hotter.",
      ],
      "tip": "Cool pans between batches with a cold-water rinse and towel dry for consistent starting temperature."
    },
    {
      "heading": "Mixing variance",
      "paragraphs": [
        "Three minutes versus six minutes of creaming changes how much air you trap; timers and consistent visual cues beat \"I mixed until it felt right\" when you are chasing repeatability.",
      ]
    },
    {
      "heading": "Fix My Recipe as a batch log",
      "paragraphs": [
        "Entering weights into Fix My Recipe gives you a frozen snapshot when something drifts—better than trusting Tuesday-you’s memory. Pair numbers with one photo of dough balls pre-bake; spread starts before the oven if butter and hydration differ.",
      ]
    },
    {
      "heading": "Measurements and tools",
      "paragraphs": [
        "A scale for flour and sugar removes the biggest cup error; spooned cups can swing double-digit percentages in mass. Same rack height and a thermometer check after preheat—not the beep—matter more than superstition about foil.",
      ]
    },
    {
      "heading": "Butter and mixing",
      "paragraphs": [
        "Creaming time changes air cell count; butter temperature changes emulsion before flour ever arrives. If those drift, the rest of the recipe is not the same recipe.",
      ]
    },
    {
      "heading": "What to write down so variance stops feeling personal",
      "paragraphs": [
        "Cookie spread is fat softening, sugar dissolving, and structure setting—edges often run hotter than centers, so tray position and rotation are real variables. Chewy versus crisp is mostly final moisture and edge Maillard, not moral fiber. Chilling near refrigerator cold slows early fat flow when you need less spread; pan color changes bottom heat even at the same dial.",
        "If you keep a note, keep it human: dough temp, scoop size, pan type, rack, set temp, and whether the oven had recovered between trays. A single photo at eight minutes tells you more than a rant in the family group chat.",
        "SenseiFood’s Fix My Recipe debugger pairs those observations with ratio checks so you are not debugging blind."
      ]
    }
  ],
  "related": [
    {
      "title": "How to Debug Cookie Batch Issues",
      "path": "/cookie-science/how-to-debug-cookie-batch-issues"
    },
    {
      "title": "Fix Recipes One Variable at a Time",
      "path": "/baking-science/fix-recipes-one-variable-at-a-time"
    }
  ],
  "faqs": [
    {
      "q": "Why do humid days change my cookies?",
      "a": "Flour can pick up ambient moisture and behave like a slightly wetter dough without you adding a visible splash—sometimes that means a touch less flour or a shorter bake, but test one change because humidity is rarely the only variable in the kitchen that day."
    },
    {
      "q": "Why does my dark sheet behave differently?",
      "a": "Dark metal absorbs and radiates heat differently than light aluminum, so edges set faster and bottoms brown sooner—often worth dropping the oven about 25°F or shortening the bake slightly when switching pans, then retesting."
    }
  ]
};

export default function WhyCookiesTurnOutDifferentEachBatch() {
  return <ScienceArticlePage spec={SPEC} />;
}
