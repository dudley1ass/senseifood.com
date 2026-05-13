import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-lose-freshness-overnight",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Lose Freshness Overnight",
  "subtitle": "Moisture migration, sucrose crystallization, and starch retrogradation stack overnight—storage only changes the rate curve, not the chemistry.",
  "readTime": "8 min read",
  "emoji": "🌙",
  "fixRecipe": {
    "category": "cookie",
    "problem": "too-hard"
  },
  "quickAnswer": "Cookies stale overnight when water leaves the crumb toward dry air or packaging headspace, dissolved sugars recrystallize into harder phases, and gelatinized starch begins retrograding into a firmer network. Invert sugars and syrups slow crystal growth; airtight and freezer storage slow moisture loss; cooling completely before sealing avoids trapped steam that makes edges tacky.",
  "intro": "Day-two cookies are usually safe to eat yet feel like a different formula than day one. Freshness is not a single knob; it is the sum of moisture fields, sugar phase behavior, and starch gel aging read through your teeth and nose. This article separates humid staling from dry staling, explains why the freezer beats the counter for weeks-long holds, and gives a fix order that treats the container as part of the recipe. If you only change one thing after reading, log relative humidity and lid seal quality for three batches—you will see patterns faster than chasing mystical “humectants.” Practical logging makes the invisible obvious: weigh cookies at cool-down, note package type, and photograph the gap between cookie and pan edge at twelve and twenty-four hours. If you ship cookies, record transit temperature swings because distribution centers behave like aggressive mini ovens. SenseiFood is built for one-variable science—change only storage this week, only sugar spectrum next week. When you freeze, label draw temperature and whether you tempered before tasting, because cold suppresses aroma and can hide staling you will only feel after thaw. Cross-link your notes with Fix My Recipe cookie ratios so you see whether high butter loads accelerated crystal growth independent of bake color.",
  "sections": [
    {
      "heading": "Moisture migration and water activity",
      "paragraphs": [
        "A warm cookie is a humid object in drier room air. Vapor pressure gradients push water outward through the porous crumb and across any set crust. If the lid leaks, absolute moisture exits the batch and the crumb tightens measurably by morning.",
        "Brown sugar formulas bind more plasticizing water than pale shortbreads; they can feel softer at hour six yet dense at hour thirty-six when syrups localize along chip surfaces or pan contact zones.",
        "Frost-free refrigerators micro-dry edges through defrost cycles; uncovered plates in the fridge are a classic way to accelerate dry staling while mistakenly thinking “cold equals preserved.”"
      ],
      "bullets": [
        {
          "title": "Match container to target texture",
          "text": "Chewy cookies want minimal oxygen exchange; crisp cookies tolerate more headroom—same physics, opposite packaging."
        }
      ],
      "tip": "Cool fully before sealing so you do not recycle steam onto surfaces where sugar glasses and tack form."
    },
    {
      "heading": "Sugar crystallization and snap",
      "paragraphs": [
        "Sucrose can renucleate when local water activity drops, producing interlocking crystals that read as sudden hardness or sandy break compared with tender day-one bite.",
        "Glucose and fructose interfere with sucrose packing; modest syrup swaps often improve shelf more than extra bake time.",
        "Chocolate bloom and nut oil migration change mouthfeel overnight even when the dough matrix is unchanged."
      ]
    },
    {
      "heading": "Starch retrogradation and aroma fade",
      "paragraphs": [
        "Amylopectin reorders below gelatinization temperature, tightening crumb and slowing volatile release so sweetness feels flatter even when grams of sugar are unchanged.",
        "Egg-rich cookies set more protein gel; when moisture leaves, chalkiness can arrive faster than in pure butter-sugar shortbreads.",
        "Maillard products remain, but top notes tied to warm esters fade quickly; gentle rewarming can partially reopen aroma even when texture cannot fully reset."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Cookie mode compares sugar, fat, and flour bands to reference patterns correlated with softer shelf outcomes. When overnight staling dominates your notes, log sugar type, bake color, and container strategy across three batches.",
        "Photograph cross-sections at twenty-four hours for tin versus zip bag versus freezer splits—visual crumb density tells the truth faster than memory."
      ]
    },
    {
      "heading": "Debugging field notes",
      "paragraphs": [
        "Tag \"why-cookies-lose-freshness-overnight\" at the top of your kitchen log for this project so PDF exports and screenshots stay searchable across seasons.",
        "List equipment IDs that mattered that day: scale model, mixer speed used, oven rack height, and burr grinder zero point if coffee-adjacent—all drift over years.",
        "State one falsifiable hypothesis before the run and record whether results supported or rejected it; negative evidence prevents repeating expensive guesses."
      ]
    },
    {
      "heading": "Photographic evidence checklist",
      "paragraphs": [
        "Photograph Why Cookies Lose Freshness Overnight under consistent lighting: one top-down frame and one cross-section whenever you change a variable tied to why-cookies-lose-freshness-overnight.",
        "Include a reference object in frame—a ruler edge or coin—so zoom crops do not fool you about spread thickness or bubble size later.",
        "Store images in a dated folder alongside gram weights; future comparisons become obvious instead of debated from memory."
      ]
    },
    {
      "heading": "Results vocabulary that travels",
      "paragraphs": [
        "When you write notes for why-cookies-lose-freshness-overnight, cap texture adjectives at three per bake—chewy, sandy, spongy—and flavor adjectives at three so comparisons week-to-week stay comparable.",
        "Note finish temperature and resting minutes beside taste descriptors; many off-notes are phase-dependent especially for dairy, chocolate, and coffee oils.",
        "If a friend tastes blind, record their words verbatim; fresh language catches patterns you normalized away."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Does a bread slice in the tin help?",
      "a": "Short-term humidity donor, but it adds starch and odor cross-talk—fine for casual snacking, not ideal for pristine benchmarks."
    },
    {
      "q": "Is freezing always better?",
      "a": "For weeks, yes. For same-day service, a sealed tin at room temperature is fine if the bake was not over-dried."
    }
  ],
  "related": [
    {
      "title": "Why Cookies Turn Hard",
      "path": "/cookie-science/why-cookies-turn-hard"
    },
    {
      "title": "Why Cookies Taste Better the Next Day",
      "path": "/cookie-science/why-cookies-taste-better-the-next-day"
    }
  ]
};

export default function WhyCookiesLoseFreshnessOvernight() {
  return <ScienceArticlePage spec={SPEC} />;
}
