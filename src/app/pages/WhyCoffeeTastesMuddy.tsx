import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-tastes-muddy",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Tastes Muddy",
  "subtitle": "Fine fines, over-extraction, and poor filtration smear clarity and leave a heavy finish.",
  "readTime": "8 min read",
  "emoji": "🫗",
  "fixRecipe": {
    "category": "coffee",
    "problem": "extraction-balance"
  },
  "quickAnswer": "Muddy coffee usually combines too many ultrafines in the cup, over-extracted colloids from channeling or excessive contact time, and paper or metal filtration that passes silty particles. Coarsen slightly, reduce agitation, improve evenness, and clean burrs; for immersion, skim or decant before the last drops.",
  "intro": "Muddy is the opposite of bright clarity; it is a texture on your tongue that reads as silty, heavy, and blurred in flavor separation. It is not exactly bitterness, though bitter compounds often ride along. This guide maps muddy to grind distribution, brew hydraulics, water chemistry extremes, and roast solubility so you stop blaming “the beans” when the process is smearing them. Cup clarity improves when you log grinder model, burr age, and water alkalinity from municipal reports or home tests. Record pour spiral and pulse count if you brew by hand because agitation moves fines. For espresso, photograph puck tops before tamp to catch obvious density faults. When cupping, use identical vessels; shape changes mud perception. Pair sensory notes with TDS if you own a refractometer, but do not chase numbers without taste. Fix My Recipe coffee mode is a reminder that ratio tools complement, not replace, brewer skill. Muddy cups read like a choir where half the singers are sharp and half are flat: some grounds over-extract while neighbors under-extract, and the blend lands as smear instead of melody. Grind evenness, water quality, and pour discipline matter more than chasing the next gadget. Change one lever at a time and describe the cup in a sentence; boring logs beat expensive guesses.",
  "sections": [
    {
      "heading": "Fines and particle load",
      "paragraphs": [
        "Cheap or dull burrs produce bimodal grind with a tail of fines that over-extract even when the macro setting looks coarse. Static in grinding causes clumping that creates channel paths and localized over-extraction. Sifting is extreme but diagnostic: if clarity jumps, fines were the villain."
      ]
    },
    {
      "heading": "Hydraulics and channeling",
      "paragraphs": [
        "Uneven wetting in pour-over yields pockets of over-extracted slurry that taste murky when averaged into the carafe. Espresso channeling smears high and low extraction into one cup profile. Agitation without timing discipline increases colloid release from fines."
      ]
    },
    {
      "heading": "Filtration and roast solubility",
      "paragraphs": [
        "Thin paper or metal mesh can pass silty loads that paper taste tests mask until you switch filters. Very dark roasts dissolve faster; muddy can be solubles overload more than fines alone. Hard water with high alkalinity can flatten acids while leaving heavy mineral mouthfeel."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Coffee mode pairs ratio checks with symptom tags; muddy cups benefit from logging grind setting, brew time, and pour pattern. Change one dial per cup: grind, temperature, or agitation."
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
      "a": "Very close; silty emphasizes particles, muddy emphasizes blurred flavor plus mouthfeel."
    },
    {
      "q": "Does cold brew avoid muddy?",
      "a": "Long contact can still over-extract fines; clarity needs grind control and filtration."
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
