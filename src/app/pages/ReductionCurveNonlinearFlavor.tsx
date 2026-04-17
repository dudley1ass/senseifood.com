import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "reduction-curve-nonlinear-flavor",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Reduction Curve: Flavor Is Not Linear",
  "subtitle": "Why late-stage reduction can rapidly overshoot saltiness and bitterness.",
  "readTime": "8 min read",
  "emoji": "📉",
  "quickAnswer": "Flavor concentration accelerates late in reduction; each boil-off step removes a larger fraction of the remaining water. If too intense, add liquid and rebuild—do not fight harshness with only sugar.",
  "intro": "Early reduction often improves flavor: aromas integrate, proteins and sugars mingle, and water that carried nothing useful leaves. Late reduction can push a sauce from rich to harsh in minutes because concentration effects are nonlinear. Salt does not rise in a straight line with time; perceptual bitterness and astringency can spike once certain thresholds cross. The Sauce Sensei mental model is a curve, not a slider: small changes in volume late produce big changes in taste. Respect the tail of the curve and you stop treating reduction like a countdown timer.",
  "sections": [
    {
      "heading": "The late-stage acceleration effect",
      "paragraphs": [
        "At lower remaining volume, each additional boil-off step creates bigger jumps in dissolved solids. Salt and bitter compounds cross perceptual thresholds quickly—not because you added more, but because the solvent left.",
        "This explains why a sauce can go from perfect to overdone in a short window. The pan is not being dramatic; the math of shrinking denominator is."
      ]
    },
    {
      "heading": "Reading the pan: bubbles, sound, and sheen",
      "paragraphs": [
        "Early simmer sounds wet; late simmer sounds thicker, pops smaller, and leaves trails on a spoon that hold longer. Learn those cues so you reduce heat before harshness arrives, not after.",
        "Color darkens faster at the end too—Maillard and caramel notes concentrate alongside salt. Visual brown is not automatically delicious brown."
      ],
      "tip": "If flavor is too strong, you reduced too far — add liquid."
    },
    {
      "heading": "Recovering over-reduction",
      "paragraphs": [
        "Dilute with stock or water, then retune seasoning gradually. You are rebuilding a curve, not erasing a mistake—expect to re-reduce slightly if you overshot dilution.",
        "Avoid masking harshness with sugar alone, which can produce cloying imbalance. Fat, gentle acid, or a small amount of dairy sometimes rounds more honestly than sweetness, depending on the build."
      ]
    },
    {
      "heading": "Salt timing versus reduction goals",
      "paragraphs": [
        "Highly reduced finishes often taste best when significant salt arrives late, after you know the final volume. Early salting a long reduction is how people discover their demi tastes like a salt lick at the end.",
        "If you must salt early for ingredient osmosis reasons, under-target deliberately and finish at the end."
      ]
    },
    {
      "heading": "Heat control on the home stove",
      "paragraphs": [
        "Wide pans reduce faster with more surface evaporation; tall pots protect you a little. Matching vessel to goal prevents accidental sprint finishes on a powerful burner.",
        "Stir and scrape corners where solids concentrate and burn. Those dark bits can add complexity in deglazing; in long reduction they can become bitter anchors."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why does my sauce taste great mid-reduction but harsh at the end?",
      "a": "You crossed the nonlinear part of the curve: bitter and salt signals amplified as water left. Dilute back to a mid-point and reduce more gently, salting later."
    },
    {
      "q": "Is there a target percent reduction?",
      "a": "Professional kitchens sometimes track by weight or volume, but home cooks should track by taste and sheen. If you want numbers, weigh your starting liquid once to learn how far you usually go before harshness."
    },
    {
      "q": "Does a lid change the reduction curve?",
      "a": "A lid traps steam and slows reduction; partial lid or tilted lid gives a middle path. For predictable reduction rate, control heat and surface area more than guessing time."
    }
  ],
  "related": [
    {
      "title": "Hidden Water Content",
      "path": "/sauce-science/water-content-hidden-dilution"
    },
    {
      "title": "One Change Rule",
      "path": "/sauce-science/one-change-rule-sauce-debugging"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  }
};

export default function ReductionCurveNonlinearFlavor() {
  return <ScienceArticlePage spec={SPEC} />;
}
