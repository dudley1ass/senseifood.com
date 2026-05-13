import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-tastes-under-extracted",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Tastes Under-Extracted",
  "subtitle": "Sour, salty, thin, or \"green\" cups often mean the brew stopped while the grounds still had plenty of pleasant stuff left on the table—early acids showed up, but the sweet balancing act never did.",
  "readTime": "8 min read",
  "emoji": "🍋",
  "fixRecipe": {
    "category": "coffee",
    "problem": "sour"
  },
  "quickAnswer": "Under-extracted coffee is the \"stopped reading early\" version of the story: plenty of bright acids dissolve fast, but sugars and deeper flavor compounds never get a fair shot, so the cup skews sour, sometimes almost salty, and often thin. You can nudge the curve with a finer grind, longer brew time, hotter water within a sensible band, or better saturation so there are fewer dry hideouts in the bed.",
  "intro": "Under-extraction is not the same thing as \"I bought a light roast and it is bright.\" It is closer to an incomplete job: the balance point never arrived because water did not pull enough of the good later solubles, or because a chunk of the bed never really participated. Water that is too cool for your method, grind that is too coarse for your contact time, or accidental bypass (water sneaking around the bed) all land here. Chlorogenic acids and other early actors dissolve readily; sugars and the Maillard-forward molecules that make coffee taste like coffee need more convincing. You are not trying to sound like a textbook at breakfast—just enough of this mental model to pick a lever that matches what you actually tasted.",
  "sections": [
    {
      "heading": "Acids first",
      "paragraphs": [
        "Acids tend to show up early in the brew because many of them are eager to jump into water. Sugars and the bigger brown, roasty molecules (melanoidins, broadly) need more time, heat, and contact to taste like balance instead of background noise. That is why the same bean can read \"sparkling\" in one recipe and \"unfinished\" in another—nothing mystical, just where you stopped on the curve."
      ]
    },
    {
      "heading": "Channeling masquerading as under",
      "paragraphs": [
        "Some water can bypass the bed through cracks or along filter walls, tasting weak and sour-ish even while another part of the puck would have been fine if it had gotten its share. That is channeling’s cousin: uneven extraction wearing an under-extracted costume. Before you declare the beans \"too acidic,\" look for dry cliffs, hollow centers, or pour habits that always miss the same compass point."
      ]
    },
    {
      "heading": "Dose and ratio",
      "paragraphs": [
        "Very high brew ratios—lots of water per gram of coffee—can taste dilute and sour-adjacent if extraction yield stays low, because you are spreading a thin story across a big cup. That is different from true brightness from a complete extraction. A scale keeps you honest about whether you changed strength, extraction, or both at once."
      ]
    },
    {
      "heading": "Use the tool",
      "paragraphs": [
        "SenseiFood’s sour and weak pathways are written to match real equipment: pourover, immersion, espresso. Pair the debugger with a tiny tasting note—one sentence after each cup—so you are not trying to remember three mornings ago while the grinder setting drifted in your head."
      ]
    },
    {
      "heading": "Yield window",
      "paragraphs": [
        "A practical sequence for many brewers: adjust grind in small steps first, because surface area is the big lever; then explore temperature in small ±2°F (about ±1°C) nudges if grind alone hits a wall; then ratio. In pour-over, respect the bloom and the pour pattern—dry pockets are under-extraction factories. If every cup is sour no matter what, verify your grinder is not clogged with fines, your water is not ice-cold from the pipes, and your \"two minutes\" timer actually matches your real draw-down time."
      ]
    },
    {
      "heading": "Freshness and CO₂",
      "paragraphs": [
        "Very fresh coffee is still burping carbon dioxide; that gas can disrupt early wetting in espresso and make the first moments of the shot behave oddly until you adjust grind, yield, or preinfusion to match. The defect reads like under-extraction even when your math looks normal, because physics got in the way of contact. Resting beans a short while, improving puck prep, or lengthening yield slightly are everyday fixes—pick the one that matches what you see in the cup and in the bottomless basket if you use one."
      ]
    },
    {
      "heading": "What to measure so \"sour\" leads to a real fix",
      "paragraphs": [
        "For manual filter brewing, many recipes start around 195–205°F (about 90–96°C) off the kettle, then taste-tune for roast and altitude. Cooler water can leave acids loud while never waking sugars enough; hotter water can overshoot into harshness if you are already fine on grind. Espresso adds pressure: channeling can give sour thinness alongside bitter pockets in the same shot, which is confusing until you treat it as unevenness, not \"light roast problems.\"",
        "If you prefer Celsius, translate your usual kettle band once and tape it inside a cupboard. Small grind steps usually move the cup more than dramatic temperature jumps, because grind changes how much coffee surface water can even talk to. Log dose, water or yield, total time, and one taste phrase—enough pattern to steer without turning breakfast into paperwork.",
        "Altitude lowers boiling point, so \"just off boil\" is not a universal temperature. Kitchen humidity and whether your kettle fully reheats between pours also change how the slurry behaves. You are allowed to care about those details without becoming a person who brings a clipboard to brunch."
      ]
    },
    {
      "heading": "Extra variables that swing results",
      "paragraphs": [
        "Purge a few grams from the grinder after it sits idle so yesterday’s retained grounds do not silently dilute today’s recipe. Water that is extremely soft or extremely hard changes extraction and mouthfeel without you touching the dial—if your city water swings seasonally, your taste might swing with it. For espresso, grams out matter as much as seconds on the clock; yield changes strength even when extraction is similar, and confusing those two makes debugging feel like superstition."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Coffee Tastes Sour",
      "path": "/coffee-science/why-coffee-tastes-sour"
    },
    {
      "title": "Coffee Extraction Science",
      "path": "/coffee-science/coffee-extraction-science"
    },
    {
      "title": "How to Debug Your Coffee",
      "path": "/coffee-science/how-to-debug-your-coffee"
    }
  ],
  "faqs": [
    {
      "q": "If it tastes sour, is it always under-extracted?",
      "a": "Often, yes—but roast level, grind quality, and water alkalinity (bicarbonate buffering) also change how acids read. Under-extraction is the \"unfinished\" story; some beans are simply citrus-forward when extracted well. Taste for sweetness and depth, not only pucker."
    },
    {
      "q": "What about cold brew—can that be under-extracted too?",
      "a": "Time replaces heat as the persuader. A 12-hour steep is not the same curve as 18 hours at the same grind; if your cold brew tastes thin and sour-leaning, stretch time, tighten grind slightly, or stir occasionally—pick one change, then taste, instead of doing all three at once."
    }
  ]
};

export default function WhyCoffeeTastesUnderExtracted() {
  return <ScienceArticlePage spec={SPEC} />;
}
