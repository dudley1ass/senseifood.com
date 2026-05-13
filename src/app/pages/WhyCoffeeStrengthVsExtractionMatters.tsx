import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-strength-vs-extraction-matters",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Strength vs Extraction Matters",
  "subtitle": "“Strength” and “extraction” describe two completely different things in a cup of coffee; mixing them up is what sends most home troubleshooting in the wrong direction.",
  "readTime": "9 min read",
  "emoji": "⚖️",
  "fixRecipe": {
    "category": "coffee",
    "problem": "extraction-balance"
  },
  "quickAnswer": "Strength is how concentrated the cup is (controlled by your brew ratio—the weight of coffee compared to the weight of water—and how much bypass water you add). Extraction is the percentage of the dry grounds you actually dissolved into the cup. The two are independent: a cup can be strong but under-extracted (too thick and sour) or weak but over-extracted (thin but bitter). The taste, not the strength, tells you which one to fix.",
  "intro": "This is the single most useful mental model for troubleshooting coffee. Baking has its parallel ideas—hydration versus mixing intensity, for example—where two things can sound similar and yet pull in different directions. Once you separate these two axes, your fixes stop fighting each other. Strength (often measured as TDS, total dissolved solids, the percentage of the beverage by mass that is dissolved coffee) is a concentration. Extraction is the percentage of the dry grounds that you have managed to dissolve into the water. You can brew a 1:10 ratio (very little water per gram of coffee) and still get a weak-tasting cup if it is under-extracted, or you can brew a 1:18 ratio (a lot of water per gram of coffee) and still get a cup that tastes strong if it is over-extracted. Treat them as two independent sliders.",
  "sections": [
    {
      "heading": "Definitions that behave themselves",
      "paragraphs": [
        "Strength moves with how much coffee you used relative to the final beverage mass—change the brew ratio or add bypass water and the strength changes. Extraction moves with the grind size (which controls the surface area exposed to water), the brew time, the water temperature, and the agitation (stirring, swirling, or pour pattern). Knowing which variable does which is the whole game."
      ]
    },
    {
      "heading": "Common mistakes",
      "paragraphs": [
        "Trying to fix a sour cup by adding more hot water just dilutes the strength without doing anything about the under-extraction that caused the sourness—the cup gets weaker and is still sour. Trying to fix bitterness only by adding more water hides the harshness but wastes the soluble flavor you already pulled. Both moves treat the symptom and ignore the cause."
      ]
    },
    {
      "heading": "Practical workflow",
      "paragraphs": [
        "First, dial in a reasonable brew ratio for your method (around 1:15 to 1:17 for filter pour-over is a sane starting band; espresso is much tighter, around 1:2 for a normal shot). Then adjust the grind and the brew time to land the flavor in a balanced window. Revisit the ratio only once your extraction is reasonable. Doing it in the other order is how people end up chasing their tails."
      ],
      "tip": "Write two columns in your tasting notes: one for changes that move strength (ratio, bypass water, yield), and one for changes that move extraction (grind size, time, temperature, agitation). It makes future you a lot smarter."
    },
    {
      "heading": "SenseiFood alignment",
      "paragraphs": [
        "The coffee mode’s extraction-balance entry in Fix My Recipe is built around exactly this strength-versus-extraction split. Baking users can practice the same discipline across categories—separating the structural inputs from the moisture inputs—because the underlying habit (which variable moves which axis?) is the same."
      ]
    },
    {
      "heading": "Dialing metaphor",
      "paragraphs": [
        "A useful shorthand: grind and time mainly move extraction; ratio mainly moves strength. Memorize that and most troubleshooting gets easier. A common target for filter coffee is roughly 18–22% extraction with a TDS of around 1.2–1.4%, although the ranges vary by personal preference and by roast style. Espresso lives in a different neighborhood entirely (higher TDS by a lot)."
      ]
    },
    {
      "heading": "Practical workflow, applied",
      "paragraphs": [
        "Get your extraction into the right window first by adjusting grind and time, then adjust the ratio if you want the cup heavier or lighter on your palate. Anytime you change roast or the bag is significantly older or fresher, re-measure both."
      ]
    },
    {
      "heading": "Dialing the next session without chasing every knob",
      "paragraphs": [
        "Coffee rewards boring notes: dose, grind, water temperature, pour pattern or pressure, and total brew time. Filter brews are often happiest somewhere in the 195–205°F (90–96°C) neighborhood depending on roast, but taste still beats the sticker on the kettle. For espresso, watch for channeling—holes in the puck that let water sneak through—because it mixes bitter and thin in the same cup.",
        "Change one variable per session and write a single line about the cup (sweet, sour, hollow, muddy). SenseiFood’s Fix My Recipe coffee checks are useful when you want to confirm your ratio bands, but your tongue on a steady recipe tells you faster than retuning six things at once."
      ]
    },
    {
      "heading": "Extra variables that swing results",
      "paragraphs": [
        "Grinder retention (where some of the previous dose stays in the burrs and chute and comes out later) can silently change your dose—purge stale grounds after the grinder has been idle for a while. Water with around 75–150 ppm TDS (parts per million of dissolved minerals, often shown as a number on a water filter spec sheet) is a common starting band for specialty coffee; extremely soft or extremely hard municipal water will shift your extraction even when nothing else changes. For espresso specifically, track yield (the weight of liquid in the cup) alongside the shot time, because changing the ratio changes the strength independently of how the extraction is going."
      ]
    }
  ],
  "related": [
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
      "q": "Do I need a refractometer to make good coffee?",
      "a": "No. A refractometer (a small optical instrument that measures the TDS of the cup by shining light through a drop of coffee) is helpful for precise dialing, but a structured tasting checklist gets you most of the way. Use one if you want repeatability across roasts and gear; skip it if a simple taste-then-adjust workflow is making you better cups."
    },
    {
      "q": "What is a reasonable TDS for espresso?",
      "a": "Espresso runs much higher than filter coffee—often around 8–12% TDS—because there is so much less water per gram of coffee. Compare your shot’s yield (final liquid weight) and time against a target, rather than trying to use filter-coffee TDS numbers, which live in a completely different neighborhood."
    }
  ]
};

export default function WhyCoffeeStrengthVsExtractionMatters() {
  return <ScienceArticlePage spec={SPEC} />;
}
