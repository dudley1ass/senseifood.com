import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "emulsion-vs-non-emulsion-sauces",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Emulsion vs Non-Emulsion: Two Sauce Worlds",
  "subtitle": "How to diagnose oily separation vs normal concentration behavior.",
  "readTime": "9 min read",
  "emoji": "🧈",
  "quickAnswer": "If it looks oily and separated, treat it as emulsion failure: lower heat, add warm liquid, whisk. Reduction sauces usually intensify rather than split—different fixes.",
  "intro": "Not all sauces are built on the same physics. Emulsified sauces depend on dispersed fat droplets stabilized by emulsifiers and motion; they can break into oil and water phases. Non-emulsified sauces—many reductions and thin glazes—generally concentrate as water evaporates rather than “splitting” in the technical sense. Correct diagnosis determines the right fix: whisking warm liquid into a broken butter sauce is sensible; doing the same to a perfectly good soy reduction may just dilute flavor. SenseiFood wants you to look at the pan like an engineer: stable dispersion versus simple solute concentration. If you are unsure, let a spoonful rest thirty seconds: reappearing oil rings suggest emulsion trouble; steady sheen without separating lenses suggests concentration tuning instead.",
  "sections": [
    {
      "heading": "What breaks and what concentrates",
      "paragraphs": [
        "Pan sauces with mounted butter, mayonnaise-family builds, and many cheese sauces depend on small fat droplets staying suspended. When emulsifiers fail or heat shears them, you see oil slicks and watery separation.",
        "Reductions and soy-forward glazes typically do not break the same way; they intensify as water evaporates. Their failure modes are more often harshness, salt spikes, or burning—not classic split emulsions."
      ]
    },
    {
      "heading": "Visual triage at the spoon",
      "paragraphs": [
        "Glossy cohesion usually signals stable structure—light should scatter evenly across the surface. Persistent oil pools that reform after stirring suggest broken emulsions or free fat from protein-laden reductions that were pushed too hard.",
        "Sheen from butter finish is not the same as an oil slick—finish sheen should integrate when stirred."
      ],
      "tip": "If oily and separated after resting, emulsion diagnosis strengthens—reductions may thicken but should not form distinct oil lenses unless fat was added and not incorporated."
    },
    {
      "heading": "Fixing broken emulsions",
      "paragraphs": [
        "Lower heat first—thermal stress is the usual trigger. Add a small amount of warm liquid (water, stock, cream depending on context) and whisk to rebuild interfaces. Sometimes a fresh yolk or mustard (acting as emulsifier) rescues specific families—match tradition.",
        "Re-emulsifying is iterative: thin slightly, whisk, re-tighten with heat control rather than one heroic blob of butter."
      ]
    },
    {
      "heading": "When not to emulsion-fix",
      "paragraphs": [
        "If the sauce is simply too salty or too reduced, dilution helps—but label the problem correctly. You are adjusting concentration, not rebuilding droplets.",
        "If oil floats because you finished with a fat cap intentionally (some chili oils), that is not a broken emulsion—it is design."
      ]
    },
    {
      "heading": "Hybrid sauces: cheese plus reduction",
      "paragraphs": [
        "Many real-world sauces blend paradigms—tomato cream, peppercorn with brandy reduction then cream. Debug the dominant risk first: emulsion stability when dairy is involved; concentration curve when long reducing.",
        "Sequence matters: mount fat off heat after reduction stabilizes volume."
      ]
    }
  ],
  "faqs": [
    {
      "q": "My pan sauce looks oily—was the butter bad?",
      "a": "Usually heat or incorporation order, not butter quality. Off butter tastes rancid; broken emulsion looks oily but may smell fine. Lower heat and rebuild with warm liquid."
    },
    {
      "q": "Does a blender fix everything?",
      "a": "Blenders can re-suspend temporary splits, but they can also over-aerate or change texture. For service-critical sauces, manual whisking with controlled heat teaches more."
    },
    {
      "q": "Why does my cheese sauce separate but my soy glaze never does?",
      "a": "Cheese sauces are emulsion-like protein-fat-water systems; soy glazes are mostly solute concentration in water. Different chemistry, different failure modes."
    }
  ],
  "related": [
    {
      "title": "Temperature: The Silent Killer",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "Reduction Curve",
      "path": "/sauce-science/reduction-curve-nonlinear-flavor"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  }
};

export default function EmulsionVsNonEmulsionSauces() {
  return <ScienceArticlePage spec={SPEC} />;
}
