import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-tastes-thin-but-bitter",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Tastes Thin But Bitter (Split Extraction Problem)",
  "subtitle": "When water cheats through the bed in rivers instead of visiting every ground evenly, you can get thin, sour-ish patches and harsh, bitter patches in the same sip—like two bad coffees sharing one mug.",
  "readTime": "8 min read",
  "level": "Extraction physics",
  "emoji": "⚖️",
  "fixRecipe": {
    "category": "coffee",
    "problem": "extraction-balance"
  },
  "quickAnswer": "If the cup feels thin yet still bites you with dryness or bitterness, think \"split extraction\" before you crank the grinder in circles. Some grounds got hammered along fast-flow paths—pulling tannins and other harsh polyphenols—while other pockets never fully gave up their sugars and solids, so the average reads weak. Fix how water meets the bed first: break clumps, even the pour, stop obvious channeling, then revisit ratio and grind once the bed physics behave.",
  "intro": "What you taste is always an average of tiny stories happening inside the slurry. When water finds easy highways—what coffee people call channeling—it races through those lanes, over-working the surfaces it touches while skipping neighbors that stay comparatively under-extracted. Your brain does not receive a neat label for each zone; it blends them into the uncanny combo people describe as \"weak but bitter,\" or \"hollow then harsh.\" That contradiction sends a lot of home brewers toward random grind clicks and ratio panic, because neither \"more coffee\" nor \"less coffee\" fixes a geography problem. This article stays in plain language: wetting, distribution, and flow come first; temperature and ratio are the second act once the bed stops cheating.",
  "sections": [
    {
      "heading": "Time, temperature, and pressure across the bed",
      "paragraphs": [
        "In a pourover, channeling might be a literal hole in the bed, a dry clump that never saw water, or a pour that drilled one side harder than the other. In espresso, nine bars of pressure turns tiny weak spots into high-speed jets that strip bitter compounds from the puck walls while the rest of the cake barely contributes dissolved stuff to the cup. Grind uniformity matters because fines (dust-sized particles) move and pack differently than larger \"boulder\" pieces; a huge spread of particle sizes makes it almost impossible for every particle to finish extracting at the same time. Chasing fancy mineral packets before you fix bed physics is usually backwards—distribution is the boring hero."
      ],
      "bullets": [
        {
          "title": "Signs in the cup",
          "text": "A hollow body with a drying, grippy finish often tracks split extraction better than \"uniform\" over-extraction, which tends to feel heavy and cooked all the way through."
        },
        {
          "title": "Signs in the puck",
          "text": "Blond jets, early drips on one side, or soupy pockets after a pourover point to flow issues, not only grind size."
        }
      ]
    },
    {
      "heading": "Sequence: bloom and pulse pours",
      "paragraphs": [
        "The bloom is not theater; it is carbon dioxide leaving the grounds so later water can actually touch coffee instead of bubbling off the surface. Skip it, under-wet it, or slam the bed so hard you collapse it, and you invite dry pockets that only wake up late in the brew—usually in a lumpy, uneven way. Pulse pouring should match your grinder and filter: faster pours need a calmer, more even bed; finer grinds punish heavy center jets that drill holes. Gentle stirring can help—or can make fines migrate—so treat agitation like a sharp tool, not a default panic button."
      ]
    },
    {
      "heading": "Holding after brew",
      "paragraphs": [
        "If coffee sits on the grounds—especially fine silty stuff at the bottom of a carafe—it keeps extracting in a sneaky immersion mode, which can add harshness while you are still calling it \"the same batch.\" Heat also keeps volatile aromatics shifting, so the cup changes as it cools. Cooling sometimes hides a little bitterness while leaving the thin body untouched if the dissolved solids were never there in the first place—another fingerprint of split extraction. For guests, decanting off the grounds or choosing a server that does not keep fines in suspension can make the story kinder without rewriting your recipe."
      ]
    },
    {
      "heading": "Espresso-specific jets",
      "paragraphs": [
        "Preinfusion (a soft, low-pressure soak before full pressure) can help water saturate the puck before nine bar shoves it around. Still, nothing replaces tidy puck prep: even density, level tamp, and a dose that fits your basket so you are not cracking the cake against the screen. A donut-shaped blond ring or a jet from one sector is basically split extraction with the volume turned up. Fix distribution and tamp repeatability before you chase another quarter-notch finer that might clog a different part of the bed."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Should I grind finer or coarser first when the cup is thin and bitter?",
      "a": "If you can see or infer channeling—blond jets, obvious holes, wildly uneven wetting—coarser grind with better prep often beats finer grind with the same sloppy bed. Finer grind only helps evenness when water is already visiting the whole puck like a polite guest, not sprinting through one door."
    },
    {
      "q": "Does water hardness matter for this \"thin but bitter\" thing?",
      "a": "Water minerals change extraction and mouthfeel in real ways, but split extraction is mostly a plumbing problem inside the coffee bed. Fix how water moves first; once the cup is coherent, you can taste-tune filtered, remineralized, or bottled water like seasoning."
    },
    {
      "q": "Can a dark roast hide channeling?",
      "a": "Roast bitterness can camouflage some harshness, but thin, bypassed flavors often remain—you just blame the bean. If the shot pattern looks uneven on a bottomless portafilter or the pourover bed has obvious dry cliffs, trust the physics over the bag label."
    }
  ],
  "related": [
    {
      "title": "Why Coffee Strength vs Extraction Matters",
      "path": "/coffee-science/why-coffee-strength-vs-extraction-matters"
    },
    {
      "title": "Why Coffee Tastes Over-Extracted",
      "path": "/coffee-science/why-coffee-tastes-over-extracted"
    },
    {
      "title": "Coffee Extraction Science",
      "path": "/coffee-science/coffee-extraction-science"
    },
    {
      "title": "How to Debug Your Coffee",
      "path": "/coffee-science/how-to-debug-your-coffee"
    }
  ]
};

export default function WhyCoffeeTastesThinButBitter() {
  return <ScienceArticlePage spec={SPEC} />;
}
