import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-coffee-tastes-thin-but-bitter",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Coffee Tastes Thin But Bitter (Split Extraction Problem)",
  "subtitle": "Channeling and uneven wetting yield sour/weak zones and bitter zones in the same cup.",
  "readTime": "8 min read",
  "level": "Extraction physics",
  "emoji": "⚖️",
  "fixRecipe": {
    "category": "coffee",
    "problem": "extraction-balance"
  },
  "quickAnswer": "Thin + bitter usually means uneven extraction: some grounds over-yielded tannins, others under-yielded solids. Fix grind distribution, reduce channeling, and align bloom/pour sequence before chasing ratio.",
  "intro": "Coffee in the cup is an average of thousands of micro-paths through a bed of particles. When water finds highways—channels—it over-extracts surfaces along those paths while leaving dry pockets that under-extract. Your palate simultaneously gets dilute, sour-ish zones and harsh, tannic zones; blended together they read as “weak but bitter,” a contradiction that sends many brewers chasing grind fineness and ratio in circles. Fixing split extraction starts with wetting uniformity, particle distribution, and flow control; only after those are stable does tweaking temperature or ratio consistently help. This guide maps the failure mode to practical dial moves for pourover and espresso alike.",
  "sections": [
    {
      "heading": "Time, temperature, and pressure across the bed",
      "paragraphs": [
        "In pourover, channeling might be a accidental hole, a dry clump, or uneven agitation. In espresso, it is often least-resistance paths in a puck under pressure—tiny voids become high-velocity jets that strip bitter compounds while bypassing neighboring regions.",
        "Grind uniformity matters because fines migrate and pack differently than boulders; wide particle spread makes simultaneous even extraction nearly impossible. Invest in grinder quality and maintenance before exotic water recipes."
      ],
      "bullets": [
        {
          "title": "Signs in the cup",
          "text": "Hollow body plus astringent finish often tracks split extraction better than pure over-extraction, which tends to feel uniformly heavy."
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
        "Bloom exists to wet all surfaces and release CO₂ so later pulses extract predictably. Skipping, under-wetting, or collapsing the bed with aggressive pours seeds dry pockets that extract only late—usually unevenly.",
        "Pulse strategy should match grinder and filter: faster pours need more predictable beds; finer grinds need gentler insertion to avoid drilling holes. Agitation is a scalpel—sometimes helpful, sometimes a channel opener."
      ]
    },
    {
      "heading": "Holding after brew",
      "paragraphs": [
        "Hot holding continues extraction in immersion-like zones inside a carafe if fines remain in contact, and heat keeps volatile aromatics evolving. Cooling can mask some bitterness while leaving thin body if TDS was never there—another split-extraction fingerprint.",
        "Decanting off grounds or using an insulated server with minimal fines migration improves clarity when batching for groups."
      ]
    },
    {
      "heading": "Espresso-specific jets",
      "paragraphs": [
        "Preinfusion, puck prep, and basket quality interact. A donut extraction or side jet is split extraction with pressure amplification. Fix distribution and tamp consistency before chasing a second finer click that worsens clogging elsewhere."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Should I grind finer or coarser first?",
      "a": "If you see evidence of channeling, coarser with better prep often beats finer with the same sloppy bed. Finer can increase extraction uniformity only when flow is already even."
    },
    {
      "q": "Does water hardness matter here?",
      "a": "Yes for overall extraction yield and mouthfeel, but split extraction is primarily hydraulic. Fix bed physics first; then tune mineral content for taste."
    },
    {
      "q": "Can dark roasts hide this problem?",
      "a": "They can mask it with roast bitterness, but thin body from bypass remains. You might misattribute the issue to the bean instead of the shot."
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
