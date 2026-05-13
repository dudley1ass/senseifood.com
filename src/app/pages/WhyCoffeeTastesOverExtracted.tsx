import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-tastes-over-extracted",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Tastes Over-Extracted",
  "subtitle": "When the cup goes dry-bitter and almost \"hollow,\" you have usually pushed too many solids out of the grounds—especially the late-arriving harsh stuff, not just \"more coffee flavor.\"",
  "readTime": "8 min read",
  "emoji": "⚗️",
  "fixRecipe": {
    "category": "coffee",
    "problem": "bitter"
  },
  "quickAnswer": "Over-extraction means you kept dissolving stuff from the grounds after the nice acids and sugars had already shown up, and you invited the woody, drying crowd—think tannins (those mouth-drying polyphenols you know from strong tea) and bitter alkaloids alongside other heavy solubles. In plain terms: you squeezed the bean harder than your recipe wanted. Coarsen the grind a touch, shorten contact time, nudge temperature down a little, or calm the sloshing and turbulence—pick the lever that matches how you actually brew, then change one thing and taste again.",
  "intro": "Think of extraction as a story with an order, not a single switch. Early in the brew, water pulls bright acids and simple sugars; later, it starts hauling bigger, rougher molecules that read as bitterness, dryness, and that papery finish people call astringent. \"Over-extracted\" is what your tongue calls it when that late chapter runs too long—whether or not a refractometer would label the total dissolved solids (TDS) as \"high\" in the spreadsheet sense. Long contact, too-hot water, too fine a grind, or aggressive agitation all extend the late chapter. Espresso that runs very long on the same dose often picks up a woody tail; filter brews that wander past a gentle window can start to feel thin in the middle yet harsh at the end. The goal here is not lab precision for its own sake; it is enough causal language that you can adjust tomorrow morning without guessing.",
  "sections": [
    {
      "heading": "The flavor curve",
      "paragraphs": [
        "Espresso slams hot water through a tight puck in seconds; pourover or immersion bathes a bed for minutes. Different stagecraft, same math idea: how long water meets coffee, how much surface area you exposed by grinding, and how hot that water is. When any leg of that tripod gets aggressive, you slide farther along the flavor curve toward the bitter, drying side. You do not need to pretend you are designing jet engines—just notice that \"more of everything\" rarely fixes a cup that already tastes cooked."
      ]
    },
    {
      "heading": "Grind as the main dial",
      "paragraphs": [
        "Grinding finer cuts the beans into smaller pieces, which exposes more surface area to water and—everything else equal—tends to bump extraction up. That is why a harsh, drying cup with a fixed recipe and timer often gets kinder when you coarsen slightly: you shorten the late chapter without always needing a dramatic temperature swing. If you coarsen and the cup goes sour or weak, you have moved the other direction; that is useful information, not failure."
      ]
    },
    {
      "heading": "Temperature and roast",
      "paragraphs": [
        "Hotter water moves the chemistry faster, so the same grind and time can land farther along the curve. Darker roasts are more brittle and more soluble in practice—there is more roasted \"ash\" and broken-down cell material ready to jump into the cup—so they can cross from cozy-roasty into ashy-harsh sooner than a light roast at the same recipe. If your dark roast suddenly tastes like licking a charcoal pencil, temperature and time are prime suspects before you blame the bag."
      ]
    },
    {
      "heading": "Debugger alignment",
      "paragraphs": [
        "SenseiFood’s coffee debugger is built to connect \"this tastes bitter / burnt / hollow\" to the handful of knobs people actually own: grind step, brew time, ratio, and whether the problem shows up in one method but not another. You do not need a wall of charts—just one honest line after each cup: grind setting, water in, coffee out (for espresso), total brew time, and one taste phrase. Patterns show up fast when the notes match the real recipe, not the recipe you remember from last month."
      ]
    },
    {
      "heading": "Time, temperature, grind",
      "paragraphs": [
        "If you change two things at once—say, finer grind and hotter water—you can absolutely land on a harsh cup and have no idea which variable did the crime. Finer grind raises extraction at the same clock time; a tiny temperature bump does the same in a different way. Brew ratio (for example 1:15 versus 1:17 coffee-to-water) changes how concentrated the cup is even when extraction behaves similarly, which is why \"strong\" and \"over-extracted\" get conflated. A kitchen scale is the cheap therapist here: dose, water, and output in grams turn arguments into adjustments."
      ]
    },
    {
      "heading": "Dark roast sensitivity",
      "paragraphs": [
        "Dark roasts give up solubles quickly because roasting has already done a lot of cellular breakdown. That means the window between \"sweet and round\" and \"harsh and ashy\" can be short, especially if you keep the same habits you use for a dense, light-roasted bean. Shorter ratios, gentler temperatures, or slightly coarser grind often preserve the roast character you actually bought instead of turning it into a punishment."
      ]
    },
    {
      "heading": "Numbers that help without turning breakfast into a lab",
      "paragraphs": [
        "For manual filter brewing, many recipes live somewhere around 195–205°F (about 90–96°C) off the kettle, then taste-tune for roast and altitude. Cooler water tends to leave more of the bright, under-developed story on the table; hotter water can push you into harshness faster, especially if grind is already fine. Espresso adds pressure and puck physics: channeling (water sneaking through cracks or weak spots) can give you sour, thin pockets and bitter, over-worked pockets in the same shot, which feels confusing until you treat it as uneven extraction, not \"mysteriously bad beans.\"",
        "Small grind adjustments usually move the cup more than heroic 10°F temperature swings, because surface area is the rude lever. Pick one variable per morning—grind, time, or temperature—and write a single sentence about the cup. If you prefer Celsius, translate your usual kettle band once and tape it inside a cupboard so you are not doing mental math before caffeine.",
        "Altitude matters because water boils cooler high in the mountains, which changes how hot \"just off boil\" actually is. Room humidity shifts how fast your bed loses heat and how pour behavior feels day to day. None of this needs a spreadsheet fetish; it needs enough anchoring that \"I changed something\" is a real sentence instead of a vibe."
      ]
    },
    {
      "heading": "Extra variables that swing results",
      "paragraphs": [
        "Grinder retention means yesterday’s grounds can hide in the chute and become part of today’s dose unless you purge a bit—quiet recipe drift, loud flavor effects. Water hardness (roughly, how much calcium and magnesium you have) and overall mineral content (often discussed as TDS, total dissolved solids) change how aggressively water strips flavor; the specialty world often uses a moderate band as a starting place, but your tap might already be softer or harder than you assume. For espresso, always track yield in grams alongside time: a longer shot with more water out is a different drink than a short shot at the same seconds, because strength and extraction are not the same story."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Coffee Tastes Bitter",
      "path": "/coffee-science/why-coffee-tastes-bitter"
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
      "q": "Is \"bitter\" the same thing as over-extracted?",
      "a": "They overlap a lot in everyday language. Bitterness can also come from roast level, bean defects, or even your grinder burrs heating up. Over-extraction specifically points at too much of the late, harsh solubles for the style you wanted. Measuring strength (TDS) with a refractometer can separate \"strong\" from \"over-worked,\" but your tongue plus a simple brew log already gets you surprisingly far."
    },
    {
      "q": "Does stirring a pour-over help or hurt?",
      "a": "It depends what problem you actually have. Gentle, purposeful agitation can even out a crusty dry pocket; wild swirling can knock fine particles downward and create clogging or channeling that reads as harshness. If you stir, do it the same way every time so the experiment is fair."
    }
  ]
};

export default function WhyCoffeeTastesOverExtracted() {
  return <ScienceArticlePage spec={SPEC} />;
}
