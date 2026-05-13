import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-tastes-muddy",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Tastes Muddy",
  "subtitle": "“Muddy” is how people describe a coffee that feels silty on the tongue and blurred in flavor—less “bright fruit,” more “smear.” That mouthfeel almost always comes from too many ultra-fine particles in the brew (bakers and brewers call them fines), uneven brewing that over-extracts some grounds while under-extracting their neighbors, or filters that let silty bits through.",
  "readTime": "8 min read",
  "emoji": "🫗",
  "fixRecipe": {
    "category": "coffee",
    "problem": "extraction-balance"
  },
  "quickAnswer": "Muddy coffee usually stacks a few problems together: a tail of fines (dust-sized particles from grinding) that over-extract quickly even when the rest of the grind looks reasonable, channeling (water finding a fast path through the bed rather than passing evenly) that smears high and low extraction into a single confusing cup, and filtration that lets silty material slip through that a different filter would have caught. Practical moves: grind a touch coarser if you also see slow drain and bitterness; do not over-swirl the slurry unless you really mean it; improve even wetting at the bloom; clean your burrs; and for immersion brews like a French press, consider skimming or decanting before the last gritty drops at the bottom of the brewer hit the cup. Very hard water can also flatten the acids while leaving a heavy mineral feel on the tongue, so taste and water chemistry belong to the same story.",
  "intro": "Muddy is the opposite of bright clarity. It is a texture on your tongue that reads as silty, heavy, and blurred when you try to pick out individual flavors. It is not exactly bitterness, though bitter compounds often ride along because some of the slurry is over-extracted while other grounds never gave up their good acids. This guide maps the muddy character back to grind distribution (the spread of particle sizes in your grind), brew evenness, filtration, and roast solubility, so you stop blaming “the beans” when the process is actually smearing them. You do not need a lab—just change one lever at a time (grind size, pour pattern, filter, water) and write one sentence per cup. Boring notes will beat buying a new bag every time the brewing was the problem. Fix My Recipe’s coffee mode is a reminder that ratio tools complement, not replace, steady hands at the kettle. A muddy cup reads like a choir where half the singers are sharp and half are flat: some grounds over-extracted while their neighbors under-extracted, and the blend lands in your mouth as smear instead of melody. Grind evenness, water quality, and pour discipline matter more than chasing the next gadget.",
  "sections": [
    {
      "heading": "Fines and particle load",
      "paragraphs": [
        "A grind is never one perfectly uniform size—there is always a dusting of fines (the very smallest particles). Cheap or dull burrs (the cutting parts of a coffee grinder) can produce a bimodal grind, where you get a mountain of medium particles and a separate, taller mountain of dust. Those fines over-extract very fast even when the main setting looks coarse, because their surface area is huge relative to their mass. Static electricity in the grinder can also make grounds clump together in the basket, which encourages channeling and localized over-extraction. Sifting your grind through a series of sieves is extreme for daily brewing, but it is a great diagnostic experiment: if clarity jumps when you sift the fines out once, you have found a big part of the villain."
      ]
    },
    {
      "heading": "Hydraulics and channeling",
      "paragraphs": [
        "In a pour-over, uneven wetting creates little pockets of over-extracted slurry that taste murky when they get averaged into the carafe. In espresso, channeling is water cheating its way through a fast path in the puck, smearing high extraction and low extraction together into one confused shot profile. Agitation (swirling, stirring, or moving the slurry) can help evenness when it is controlled, but wild, aggressive swirling can also wash more colloidal material (very small particles suspended in the liquid) out of the fines—so “more motion” is not a free upgrade."
      ]
    },
    {
      "heading": "Filtration and roast solubility",
      "paragraphs": [
        "Thin paper filters or a coarse metal mesh can let more silt through than you notice on a quick sip test, until you swap to a different filter type and the difference is immediately obvious. Very dark roasts also dissolve faster (their cell walls are more broken down from the roast), so a muddy cup from a dark roast is sometimes “too much soluble material in the cup” more than it is a fines problem. Hard water with high alkalinity (the water’s buffering capacity against acid, often shown alongside total mineral content) can flatten the acids while leaving a heavy mineral mouthfeel—so the water itself is not separate from clarity, it is part of the texture story."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Coffee mode pairs ratio checks with symptom tags. Muddy cups benefit from logging the grind setting, the brew time, and the pour pattern so the next cup is a deliberate tweak rather than a dice roll. Change one dial per session—grind, water temperature, or agitation—because otherwise you will not know what moved."
      ]
    },
    {
      "heading": "What a muddy cup is trying to tell you",
      "paragraphs": [
        "Muddiness is the taste of disagreement inside the cup: some grounds gave up everything bitter while their neighbors refused to give up anything bright, and the story lands as smear in your mouth. The usual narrators are the grind distribution, the water chemistry, and how even your pour is—not the serial number on your grinder. Pick one lever per morning (slightly coarser grind, a cleaner filter, or a more even bloom), and describe the cup to yourself in a sentence. Even negative runs matter; they keep you from buying another bag of beans when the plot problem was extraction all along."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is muddy the same as silty?",
      "a": "They are very close. Silty emphasizes the particles you can physically feel on your tongue; muddy emphasizes the blurred flavor plus that heavy, lingering finish. They almost always show up together, but a French press might read silty without being muddy if the brewing was even, and a pour-over might read muddy without being noticeably silty if the issue is mostly over-extraction."
    },
    {
      "q": "Does cold brew avoid muddy character?",
      "a": "Not automatically. Long contact time (cold brew sits with water for many hours) can still over-extract fines and silty material, especially with a metal mesh filter. Clarity in cold brew still needs grind control and good filtration—usually a paper or cloth filter after the steep—even when the coffee never goes anywhere near hot water."
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
