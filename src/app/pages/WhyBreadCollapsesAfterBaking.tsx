import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-collapses-after-baking",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Collapses After Baking",
  "subtitle": "Structure buckles when the gluten gets overstretched, the proofing runs too long, or the crust cannot hold the internal pressure of expanding steam.",
  "readTime": "8 min read",
  "emoji": "🥞",
  "fixRecipe": {
    "category": "bread",
    "problem": "wont-rise"
  },
  "quickAnswer": "A loaf that collapses after baking usually traces to over-proofed dough (the gluten exhausted its elasticity, like a balloon stretched once too many times), gluten that was too weak for the hydration you used, or oven spring that inflated the loaf faster than the crust could harden into a load-bearing shell. Score deep enough to control expansion, and match the proof time to the dough you actually have.",
  "intro": "A loaf that looks heroic in the oven but sinks into a wrinkled, deflated top is a classic mismatch between gas production and structural integrity. Sometimes the collapse is visible the moment you pull the loaf out — the dome falls before your eyes. Sometimes it is subtle: a flattened top and a slightly compressed crumb that you only notice when you slice. Either way, the fix is to align fermentation, shaping tension, and scoring with the dough you actually have in front of you, not the dough you imagined when you read the recipe. Structurally, the gluten network (the stretchy mesh of proteins that traps gas bubbles) has to withstand the pressure of expanding steam until the crust sets — and that crust-setting moment is when the loaf's internal temperature climbs through roughly 180 to 205°F (82 to 96°C), where starches gelatinize (the starch granules absorb water and lock into a firmer structure) and the loaf can finally hold its own shape. Over-proofed dough has already exhausted its gluten elasticity by the time the loaf goes into the oven: the dome peaks beautifully on the first burst of oven spring, then falls when the crust cannot resist the natural shrinkage of cooling gas inside.",
  "sections": [
    {
      "heading": "Over-proofing and gluten fatigue",
      "paragraphs": [
        "As fermentation continues, the gluten network stretches and eventually weakens. Small gas bubbles merge into fewer, larger pockets that rupture easily during oven spring — that initial rapid rise in the first ten minutes of baking. The loaf might mushroom sideways instead of upward, or deflate visibly when cooling. Temperature swings amplify this problem: a long warm autolyse (a resting period where flour and water sit together to fully hydrate before active mixing) plus a hot kitchen can push a dough past its peak while you are not watching. Doubling time on bulk fermentation in a 70°F kitchen can be twice as long as in an 80°F kitchen — the same recipe in different rooms behaves like two different recipes."
      ]
    },
    {
      "heading": "Insufficient surface tension",
      "paragraphs": [
        "Shaping creates a taut skin on the outside of the loaf that helps it expand upward rather than sideways. That skin is essentially a tightened layer of gluten that holds tension across the surface, the way a stretched balloon holds its shape. Slack shaping yields a loaf that spreads sideways and has uneven oven spring, which later settles into a collapsed silhouette as the loaf cools and the internal gas contracts. Practice bench tension pulls — drawing the dough gently across the work surface so the underside tightens — without tearing the skin. If the dough does tear during shaping, rest it five minutes covered and try again; tearing means the gluten was not yet ready to be pulled that hard."
      ]
    },
    {
      "heading": "Scoring and steam",
      "paragraphs": [
        "Steam in the early minutes of baking delays the crust from hardening, which lets the loaf finish expanding before its walls become rigid. Without steam, the crust sets early while the inside is still full of pressure, and expansion has to find a weak point — usually a random seam that tears unpredictably. With steam but without a score (a deliberate slash in the surface that gives the steam a planned exit route), the pressure can burst the weakest seam anywhere it likes. Scores are functional valves, not decoration. They should be deep enough to actually open under expansion — for weak dough, shallower scores; for strong, well-developed dough, more confident depth. A confident slash on a strong loaf opens dramatically and earns the dough its character; a timid slash on the same loaf just lets the dough burst somewhere else."
      ]
    },
    {
      "heading": "Debugging workflow",
      "paragraphs": [
        "If collapse correlates with very long proof times, shorten your bulk or final proof by 15 to 25 percent next bake. If it correlates with slack dough (dough that spreads rather than holds shape), lower the hydration slightly or add more stretch-and-folds during bulk to build structure. Fix My Recipe can sanity-check whether your formula is unusually wet or unusually low in structural flour for the bread style you are targeting. The point of the diagnostic is not to give you a magic answer, but to highlight which lever is most likely the culprit so you do not waste a bake testing the wrong variable."
      ]
    },
    {
      "heading": "Oven spring window",
      "paragraphs": [
        "Maximum expansion typically happens in the first 5 to 10 minutes of baking, while the crust is still flexible. Too low an oven temperature delays the crust set and can yield a loaf that spreads laterally instead of springing upward, because the dough has time to relax under gravity before the structure locks in. Steam in those first minutes keeps the crust extensible (able to stretch without tearing); removing the steam too late traps excess moisture in the crumb and can lead to gummy interiors. A typical hearth-bread bake starts at high heat (around 450 to 475°F / 232 to 246°C) with steam for ten minutes, then transitions to lower heat without steam for the remainder."
      ]
    },
    {
      "heading": "Scoring depth",
      "paragraphs": [
        "Too shallow a score and the loaf still bursts somewhere random, defeating the purpose. Too deep on weak dough and the cut actually deflates the loaf at the moment of slashing. The right depth depends on the dough strength and the proof state: well-developed gluten can take a confident deep slash; tender or over-proofed dough wants a shallower, more careful cut. Practice on familiar recipes so you learn what depth your dough handles before experimenting on a new bake."
      ]
    },
    {
      "heading": "Internal temperature as the honest finish marker",
      "paragraphs": [
        "Different styles of bread finish at different internal temperatures, but for most lean wheat loaves, doneness lands around 200 to 208°F (93 to 97°C) at the thickest point. Pulling too early — say at 190°F (88°C) — leaves the starches partially gelatinized, which can lead to a gummy band right above the bottom crust that looks like a collapse but is actually undercooked dough. Enriched doughs with high sugar or fat content sometimes finish a few degrees lower because their higher solid content slows moisture loss; check both internal temperature and visual cues (deep golden color, hollow sound when tapped on the bottom) before pulling.",
        "Bulk fermentation temperature also matters more than people expect. Most straight doughs do best around 75 to 80°F (24 to 27°C); colder slows yeast activity exponentially, warmer accelerates the production of alcohols and acids that can weaken gluten over time. If your kitchen runs cold in winter and warm in summer, the same recipe can collapse one season and triumph the next without any change in technique — temperature shifts are doing the work."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why did my sandwich loaf crater in the middle?",
      "a": "Most often, it is over-proofed in the pan — the dough rose past its peak and the gluten exhausted its elasticity before the loaf went into the oven. The dough is also sometimes too soft for the pan height: the structure cannot support its own dome and the center collapses inward as it cools. Check the dough's strength against the pan dimensions next time, and pull the final proof slightly earlier."
    },
    {
      "q": "Why does the collapse happen only in the center?",
      "a": "Usually an under-proofed surface meeting an over-proofed core — the outside of the dough rose enough to look right but the inside kept fermenting past its peak. Check your shaping tension, since a tight skin can hide what is happening underneath. Also check whether your final proof environment had hot spots that warmed parts of the dough faster than others."
    },
    {
      "q": "Why does my pan bread collapse?",
      "a": "Lid removal timing on pullman loaves (closed-lid pan breads) matters significantly. Pulling the lid too early traps steam and pressure inside the loaf without giving the crust time to set, and the loaf can collapse when the pressure releases. Pulling too late means the crust hardens against the lid and the loaf has nowhere to vent. Each pullman pan has its own sweet spot — usually the lid comes off in the last 10 to 15 minutes of baking."
    }
  ],
  "related": [
    {
      "title": "Why Bread Rises",
      "path": "/bread-science/why-bread-rises"
    },
    {
      "title": "How Yeast Works in Baking",
      "path": "/bread-science/how-yeast-works"
    }
  ]
};

export default function WhyBreadCollapsesAfterBaking() {
  return <ScienceArticlePage spec={SPEC} />;
}
