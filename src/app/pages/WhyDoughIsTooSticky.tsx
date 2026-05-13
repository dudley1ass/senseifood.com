import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-dough-is-too-sticky",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Dough Is Too Sticky",
  "subtitle": "Sticky usually means high hydration for your flour, gluten still organizing, or hands/tools grabbing the surface—not automatically \"you added too much water\" in a simple way.",
  "readTime": "7 min read",
  "emoji": "🖐️",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Tacky dough is often a phase: early mixing looks like glue until gluten aligns, or your hydration is high for this bag of flour, or your dry hands are tearing the surface. Wait through a rest, use wet hands and a bench scraper, and adjust hydration next bake if stickiness survives full development.",
  "intro": "\"Sticky\" is the word beginners reach for when professionals would say \"highly hydrated\" or \"under-developed.\" Many artisan formulas are supposed to feel tacky; technique—folds, scraper work, timed rests—carries you across the ugly stage. True problems show up when tackiness never resolves after development, or when the loaf spreads instead of holding tension. Flour absorption, dough temperature, and even amylase activity in some grains can make slack dough. Finished dough near 75–80°F (24–27°C) feels sticker than the same dough colder because water and fat move more freely. You are not failing because it clings; you are learning what your flour asked for.",
  "sections": [
    {
      "heading": "Development timeline",
      "paragraphs": [
        "In the first minutes after combining flour and water, the mass shreds and sticks. After rest and mechanical work, proteins align and the dough becomes smoother and less clingy. If you add flour during the ugly phase, you permanently change the formula. Try a 20–30 minute autolyse (flour and water only) before adding salt and yeast on the next attempt; many sticky complaints vanish."
      ]
    },
    {
      "heading": "Hydration vs flour absorption",
      "paragraphs": [
        "An 80% hydration recipe written for one mill can feel like soup with another bag because protein level, damaged starch, and milling style all change how water binds. That is not you \"doing it wrong\"; it is two flours having different opinions about the same number.",
      ],
      "tip": "Reserve 5% water; add only if the dough genuinely refuses to hydrate after folds."
    },
    {
      "heading": "Technique: friction and temperature",
      "paragraphs": [
        "Cold, dry hands mechanically grab and tear the dough surface, which feels like extra stickiness that is not really extra water. Wet hands and a bench scraper let you fold without shredding. Temperature is a texture knob: warm dough is softer, cold dough is firmer at the same hydration.",
      ]
    },
    {
      "heading": "When to change the recipe",
      "paragraphs": [
        "If stickiness persists after full development and the loaf spreads in proof, lower hydration 3–4% or increase strength with a short knead or extra fold series. Fix My Recipe helps compare your ratio to typical bands for sandwich vs artisan styles."
      ]
    },
    {
      "heading": "Absorption and autolyse",
      "paragraphs": [
        "Resting flour and water allows hydration without kneading—less sticky feel after 20–60 minutes. Salt added late in autolyse preserves enzyme control. Different wheat crops absorb differently—same recipe, new bag of flour may need ±2% water."
      ]
    },
    {
      "heading": "Handling technique",
      "paragraphs": [
        "Wet hands and a bench scraper beat reflexively dusting flour into the dough, which silently rewrites your formula and then confuses every later step.",
      ]
    },
    {
      "heading": "What to measure when stickiness is the whole mood",
      "paragraphs": [
        "Sticky dough often improves once gluten finishes organizing, but while you are in the messy middle, temperature still matters: finished dough around 75–80°F (24–27°C) feels tackier than the same hydration at 65°F (18°C) because fat and water move more freely. For baked loaves, internal doneness for many lean doughs lands near 200–208°F (93–97°C) in the thickest part; enriched breads may finish a few degrees lower while still being safe—those numbers help you separate \"sticky dough problem\" from \"underbaked crumb problem\" when troubleshooting.",
        "If you prefer Celsius, translate your common bands once and tape them inside a cupboard: 24–27°C is a familiar bulk-fermentation comfort zone for many straight doughs; 93–97°C is the usual internal finish neighborhood for lean loaves. Altitude lowers water’s boiling point, so crust set and stovetop evaporation behave differently in mountain kitchens—lean on internal temperature and crumb look more than the clock alone.",
        "Humidity changes how flour behaves from the bag and how fast dough skins on the counter; rainy-week flour can feel thirstier without you changing the recipe text. For ovens, remember the beep often lies: many units drift another 10–20°F after preheat. None of this requires a lab coat—just enough notes that \"Wednesday sticky\" can find Wednesday’s actual culprit."
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
      "q": "Sticky vs wet?",
      "a": "Wet usually means free water pooling; sticky can be normal tack or enzyme-softened dough that still has the right hydration for an open crumb. Taste the process: if it smooths after folds, trust the folds.",
    },
    {
      "q": "Fix with more flour always?",
      "a": "Last resort—bench flour permanently changes the formula. Better folds, time, wet hands, and adjusting hydration on the next bake beat panic-scooping dry flour into a finished dough.",
    }
  ]
};

export default function WhyDoughIsTooSticky() {
  return <ScienceArticlePage spec={SPEC} />;
}
