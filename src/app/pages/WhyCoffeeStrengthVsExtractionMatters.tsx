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
      "heading": "Benchmark temperatures and a simple repeatable test",
      "paragraphs": [
        "This guide is easier to act on when you anchor numbers instead of going by vibes. Water temperature for manual filter brewing is most often discussed around 195–205°F (90–96°C) just off the boil, and the right end of that range shifts a few degrees based on the roast and your altitude—cooler water can leave you under-extracting acids, while hotter water can pull out more bitter compounds than you want. For espresso, the temperature of the puck (the compacted disc of grounds in the basket) interacts with the pressure and the flow: channeling (water finding a fast path through the puck rather than going through it evenly) produces a cup that has both under-extracted and over-extracted spots in the same shot. Grind size changes surface area exponentially in practice—a small twist on the grinder shifts the extraction more than a big change in temperature would. Record your dose, yield, time, and taste notes together, and change only one variable per session, so you can actually isolate cause and effect.",
        "Write down your kitchen’s ambient temperature, the brewer or espresso machine setting, and—when it makes sense—an internal probe reading. Change one input per trial: grind size, water temperature, ratio, or technique. Photograph the cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs those observations with ratio checks for your category so the next brew is a measured step, not a guess.",
        "If you cook in Celsius, write a small cheat sheet and tape it inside a cabinet: 200°F is about 93°C, 212°F is 100°C (where water boils at sea level), and classic espresso shot times are often discussed in the 25–35 second range for a classic 9-bar shot (9-bar is the pressure that traditional espresso machines aim for, with “bar” being a unit of pressure roughly equal to atmospheric pressure)—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; brewers at elevation should lean more on temperature measurements and taste than on the clock alone. Humidity changes how grounds clump in the burrs of the grinder—note the weather when results swing for no obvious reason."
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
