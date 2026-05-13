import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-tastes-muddy",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Tastes Muddy",
  "subtitle": "“Muddy” is how people describe coffee that feels silty on the tongue and blurred in flavor—less “bright fruit,” more “smear.” That mouthfeel usually comes from too many ultra-fine coffee particles (fines), uneven brewing that over-extracts some grounds while under-extracting neighbors, or filters that let silt through.",
  "readTime": "8 min read",
  "emoji": "🫗",
  "fixRecipe": {
    "category": "coffee",
    "problem": "extraction-balance"
  },
  "quickAnswer": "Muddy coffee usually stacks a few problems: a tail of fines that over-extract even when the main grind looks reasonable, channeling (water finding a fast path) that smears high and low extraction into one cup, and filtration that passes silty stuff paper would catch. Practical moves: grind a touch coarser if you also see slow drain and bitterness, reduce aggressive swirling unless you mean it, improve even wetting, clean burrs, and for immersion brews consider skimming or decanting before the last gritty drops. Water that is extremely hard can also flatten acids while leaving a heavy mineral feel—so taste and water are part of the same story.",
  "intro": "Muddy is the opposite of bright clarity; it is a texture on your tongue that reads as silty, heavy, and blurred in flavor separation. It is not exactly bitterness, though bitter compounds often ride along because some of the slurry is over-extracted while other grounds never gave up their good acids. This guide maps muddy to grind distribution, brew evenness, filtration, and roast solubility so you stop blaming “the beans” when the process is smearing them. You do not need a lab—just change one lever at a time (grind, pour pattern, filter, water) and write one sentence per cup; boring notes beat buying a new bag to fix a brewing habit. Fix My Recipe coffee mode is a reminder that ratio tools complement, not replace, steady hands. Muddy cups read like a choir where half the singers are sharp and half are flat: some grounds over-extract while neighbors under-extract, and the blend lands as smear instead of melody. Grind evenness, water quality, and pour discipline matter more than chasing the next gadget.",
  "sections": [
    {
      "heading": "Fines and particle load",
      "paragraphs": [
        "A grind is never one uniform size—there is always a dusting of fines. Cheap or dull burrs can make a bimodal grind with a bigger fines tail, and those fines over-extract quickly even when the macro setting looks coarse. Static can make grounds clump in the basket, which encourages channeling and localized over-extraction. Sifting is extreme for daily brewing, but it is a great diagnostic: if clarity jumps after removing fines, you found a big part of the villain."
      ]
    },
    {
      "heading": "Hydraulics and channeling",
      "paragraphs": [
        "In pour-over, uneven wetting creates pockets of over-extracted slurry that taste murky when they average into the carafe. In espresso, channeling is water cheating through a fast path, smearing high extraction and low extraction into one shot profile. Agitation can help evenness when controlled, but wild swirling can also wash more colloidal stuff out of fines—so “more motion” is not a free upgrade."
      ]
    },
    {
      "heading": "Filtration and roast solubility",
      "paragraphs": [
        "Thin paper or coarse metal mesh can pass more silt than you taste in a quick sip test until you switch filters and notice the difference. Very dark roasts dissolve faster; muddy can be “too much solubles” more than fines alone. Hard water with high alkalinity can flatten acids while leaving a heavy mineral mouthfeel—so water is not separate from clarity, it is part of the texture story."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Coffee mode pairs ratio checks with symptom tags; muddy cups benefit from logging grind setting, brew time, and pour pattern so the next cup is a deliberate tweak, not a dice roll. Change one dial per session: grind, temperature, or agitation—otherwise you will not know what moved."
      ]
    },
    {
      "heading": "What muddy cups are trying to say",
      "paragraphs": [
        "Muddiness is the taste of disagreement in the cup: some grounds gave up everything bitter while neighbors refused to give anything bright, so the story lands as a smear. Grind, water, and evenness of pour are the usual narrators—not the serial number on your grinder. Pick one lever per morning—slightly coarser, a cleaner filter, or a more even bloom—and describe the cup in a sentence. Negative runs matter; they stop you from buying another bag when the plot problem was extraction all along."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is muddy the same as silty?",
      "a": "Very close: silty emphasizes particles you feel, muddy emphasizes blurred flavor plus that heavy finish—often they show up together."
    },
    {
      "q": "Does cold brew avoid muddy?",
      "a": "Not automatically—long contact can still over-extract fines. Clarity still needs grind control and good filtration, even in the fridge."
    }
  ],
  "related": [
    {
      "title": "Why Coffee Tastes Over-Extracted",
      "path": "/coffee-science/why-coffee-tastes-over-extracted"
    },
    {
      "title": "Why Espresso Channels",
      "path": "/coffee-science/why-espresso-channels"
    }
  ]
};

export default function WhyCoffeeTastesMuddy() {
  return <ScienceArticlePage spec={SPEC} />;
}
