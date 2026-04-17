import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-tastes-too-sweet",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Tastes Too Sweet (Cold Suppression Curve)",
  "subtitle": "Sweetness perception shifts with temperature; cold hides bitterness but can leave sucrose loud.",
  "readTime": "7 min read",
  "level": "Serving temperature",
  "emoji": "🍬",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "general"
  },
  "quickAnswer": "At freezer temperature, volatile aromatics are quieter while sucrose still reads strong. Balance with salt, dairy solids, and bitterness (cocoa, coffee) or serve slightly warmer for tastings.",
  "intro": "Sweetness on a label is not the same as sweetness in the mouth—perception shifts with temperature, aroma context, and what else competes for attention. Ice cream is eaten very cold, which suppresses some volatile aromatics faster than it suppresses the simple taste of sucrose, so a base that tastes balanced at room temperature can read bluntly sweet frozen. Fat, milk solids, egg yolk, cocoa, coffee, and salt all modulate how sugar lands; water activity and freezing point depression change which notes release as a bite warms on the tongue. This article explains the cold suppression curve in practical terms and where to intervene in formulation or service when sweetness feels one-dimensional.",
  "sections": [
    {
      "heading": "Temperature vs perceived sweetness",
      "paragraphs": [
        "Formulators often taste bases warm for safety and sensory speed, but the eating experience happens near 0°F to 10°F depending on storage and temper. That gap means sugar must be judged in the context of cold, not just hot cookery.",
        "A practical fix for evaluation is to taste at multiple temperatures: spoon warm for fault finding, semi-frozen for approximate service, and fully tempered to mimic the last half of a bite when aromatics return as the matrix melts on the tongue."
      ],
      "bullets": [
        {
          "title": "Sucrose vs other sugars",
          "text": "Replacing part of sucrose with glucose or invert syrup changes sweetness shape and freezing—do not swap by weight without rechecking both taste and hardness."
        },
        {
          "title": "Vanilla and aroma",
          "text": "When volatiles are cold-muted, sugar can feel louder because there is less aromatic masking—bumping quality vanilla or complementary flavors often beats simply cutting sugar."
        }
      ]
    },
    {
      "heading": "Solids and water activity sequence",
      "paragraphs": [
        "MSNF, proteins, and fat add mouth-coating and savory depth that compete with sugar’s simplicity. Egg yolk brings cooked custard notes; cocoa brings bitterness; coffee extracts add roast. Building these elements before locking final sweetness helps avoid chasing a single dominant peak.",
        "Salt is not cheating—it is contrast. Tiny increments reduce the need for heroic sugar cuts that break texture."
      ]
    },
    {
      "heading": "Holding in the mouth",
      "paragraphs": [
        "A bite’s story unfolds: first cold shock, then melting, then late aromatics. Many people judge sweetness only on the first second. Train yourself to notice the finish—sometimes sugar reads quieter after melt when volatiles arrive.",
        "For kids’ palates vs adults’, expectations differ; label “too sweet” complaints alongside age and serving temperature when iterating recipes."
      ],
      "tip": "If tastings happen straight from the churn, remember overrun and warmth temporarily soften sweetness—freeze overnight before final judgments."
    },
    {
      "heading": "Acids and fruit",
      "paragraphs": [
        "Fruit purees bring acid that can balance sugar on paper yet still read sweet if aromatic esters are cold-suppressed. A touch more acid sometimes helps, but too much can throw emulsion stability—adjust on small batches and watch texture."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why does store-bought ice cream taste less sweet?",
      "a": "Different solids, overrun, emulsifiers, and serving temperature all shift perception. Comparing your home churn to a hardened pint at the same temperature is fairer than comparing to soft-serve texture."
    },
    {
      "q": "Will cutting sugar fix icy texture?",
      "a": "Not automatically—sugar lowers freezing point. Reduce sugar thoughtfully and compensate with other freezing-point and water-binders or accept firmer ice cream."
    },
    {
      "q": "Does lactose add sweetness?",
      "a": "Slightly—less than sucrose—but total dairy solids still change flavor balance and body, which indirectly affects how sugar reads."
    }
  ],
  "related": [
    {
      "title": "Why Ice Cream Lacks Flavor",
      "path": "/ice-cream-science/why-ice-cream-lacks-flavor"
    },
    {
      "title": "Why Ice Cream Gets Freezer Burn",
      "path": "/ice-cream-science/why-ice-cream-gets-freezer-burn"
    },
    {
      "title": "Why Ice Cream Is Creamy",
      "path": "/ice-cream-science/why-ice-cream-is-creamy"
    },
    {
      "title": "Why Ice Cream Gets Icy",
      "path": "/ice-cream-science/why-ice-cream-gets-icy"
    }
  ]
};

export default function WhyIceCreamTastesTooSweet() {
  return <ScienceArticlePage spec={SPEC} />;
}
