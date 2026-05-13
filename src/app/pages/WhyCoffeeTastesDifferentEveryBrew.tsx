import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-tastes-different-every-brew",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Tastes Different Every Brew",
  "subtitle": "The grounds left behind in your grinder, the temperature of your water, how you bloom and pour, and a fair amount of human variation all swamp out the idea of “the same recipe” every morning.",
  "readTime": "8 min read",
  "emoji": "🌀",
  "fixRecipe": {
    "category": "coffee",
    "problem": "general"
  },
  "quickAnswer": "Inconsistency in your cup almost always comes from the same handful of places: how many grind steps your grinder shifts when it gets bumped, drift in the water temperature, your pour pattern, and how stale or fresh the puck of grounds is. Purge a few grams of stale grounds through the grinder before you brew, weigh your inputs, use a kettle that holds a stable pour, and track the mineral content of your water.",
  "intro": "Coffee is more sensitive than most baking because you are completing the “reaction”—the extraction from grounds into water—right at service time, with no oven margin to forgive you. So small noise in the inputs becomes much bigger noise in the flavor. The most common sources of variance are grinder retention (grounds from the previous dose that linger in the burrs and chute, then come out with today’s dose), water temperature drift between pours, changes in your pour pattern, how vigorously the coffee blooms (the initial foamy rise when fresh water meets the carbon dioxide trapped in fresh grounds), and the age of the beans, which keeps changing how much CO₂ is escaping during the brew. Even something as quiet as room humidity can change how fast a kettle cools between pours.",
  "sections": [
    {
      "heading": "Grinder purge and retention",
      "paragraphs": [
        "Whatever you ground yesterday at yesterday’s setting is sitting in the burrs and the chute, and it will quietly mix into today’s dose unless you discard a few grams (a “single dose purge”) before measuring your real dose. A clean dose is the cheapest consistency upgrade most home brewers can make."
      ]
    },
    {
      "heading": "Water as an ingredient, not just a solvent",
      "paragraphs": [
        "The minerals in your water (collectively called the water’s alkalinity and total dissolved solids) actually participate in coffee extraction—they pull out certain flavor compounds more effectively than pure water does. Filter bypass (where some water sneaks past the filter media) and changes in alkalinity will shift your extraction noticeably. Reverse-osmosis water with no remineralization (totally stripped water with no minerals added back) tastes very different than typical tap, even at the same brew recipe."
      ]
    },
    {
      "heading": "Technique drift",
      "paragraphs": [
        "How high you hold the kettle, how fast you spiral the pour, and how aggressively you swirl the slurry all change agitation (how much the water and grounds physically mix), and agitation moves extraction. Once in a while, record yourself brewing on your phone—it is genuinely revealing how much your technique drifts when you are not paying attention."
      ]
    },
    {
      "heading": "Debugger habit",
      "paragraphs": [
        "When the taste of your daily coffee swings unexpectedly, log three numbers before tweaking anything: your dose (the dry coffee weight), your yield or total water weight, and your brew time. Plug those into Fix My Recipe before you change two variables at once and lose track of what fixed it."
      ]
    },
    {
      "heading": "Checklist",
      "paragraphs": [
        "Same dose to the nearest 0.1 g, the same water temperature measured at the kettle spout (not at the heating element), the same pour cadence—remove variables systematically. And clean your burrs: old, oily fines (the smallest particles produced by grinding, which can clump up) silently change the effective dose because they shift how much coffee actually flows out of the grinder."
      ]
    },
    {
      "heading": "Bean state",
      "paragraphs": [
        "Most beans are at their most stable somewhere between days 4 and 14 post-roast—they have degassed enough that the brew is predictable, but they have not lost their aromatic peak yet. Very fresh beans (right after roasting) bloom aggressively and can come out under-extracted. Very stale beans (weeks past roast) lose their nuanced aromatics and trend bitter."
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
        "Grinder retention can silently change your dose, so purge stale grounds after the grinder has been idle. Water with about 75–150 ppm TDS (parts per million of dissolved minerals; you can read this off a water filter spec sheet) is a common specialty-coffee starting band; extremely soft or extremely hard tap water will shift your extraction even when you have not touched the grinder. For espresso, track the yield (the weight of liquid in the cup) alongside the time, because changing your ratio changes the strength independently of how the extraction itself is going."
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
      "q": "Why does the same recipe taste different with different baristas?",
      "a": "Because in any manual brewing method, the human pour rate—the height of the pour, the timing of each pour, the swirl after pouring—dominates the agitation and therefore the extraction. Two careful baristas using the same equipment and the same recipe will still produce slightly different cups."
    },
    {
      "q": "Does my electric kettle’s mode really matter?",
      "a": "Yes. A hold-temp mode keeps the water at a steady temperature for every pour, while a boil-then-wait setup means your first pour and your last pour can be 5–10°F apart. That difference alone is enough to swing extraction between pours, which shows up as different flavor in different parts of the brew."
    }
  ]
};

export default function WhyCoffeeTastesDifferentEveryBrew() {
  return <ScienceArticlePage spec={SPEC} />;
}
