import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "stock-reduction-demi",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Stock Reduction (Demi-Style): Recipe & Balance Guide",
  "subtitle": "Long-simmered stock until glossy — foundation sauce, not a quick weeknight splash.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🥘",
  "quickAnswer": "Skim, strain, and reduce patiently — solids that burn on the pot walls become bitter notes in the final gloss. Season late; salt concentrates nonlinearly.",
  "intro": "A serious stock reduction is kitchen time converted into flavor density. As water leaves, gelatin, salts, and aromatic compounds concentrate—and so do impurities if you carry them along. The Sauce Sensei salt and acid pulls climb with reduction, which is why large-batch reductions are seasoned late and tasted constantly. Demi-style gloss is not only viscosity; it is integrated savoriness that clings without tasting harsh. Respect the pot edges: protein films and caramelized specks that look harmless can teach bitterness to the whole batch. When you taste, ask three questions in order: Is the body right for how it will cling to food? Is the savoriness deep without harsh salt or burnt edge? Does the finish linger cleanly instead of grabbing the throat? Writing a one-line answer after a good batch trains your eye for the next reduction curve. If the surface looks still but steam rises steadily, you are still reducing—do not confuse quiet liquid with finished flavor.",
  "sections": [
    {
      "heading": "Clarity, skimming, and patience",
      "paragraphs": [
        "Impurities concentrate too. Skim foam and fat thoughtfully—fat can protect from evaporation but also hide boiling behavior; clarify goals for your use case. Restaurant demi often chases clarity and sheen; rustic home jus may tolerate more texture.",
        "Gentle simmering reduces harsh volatile notes compared with violent boiling that throws solids against hot metal."
      ]
    },
    {
      "heading": "Straining and clean equipment",
      "paragraphs": [
        "If the surface looks muddy or you see specks sticking and darkening on the walls, strain and continue in clean gear. One scorched corner can dominate a small remaining volume.",
        "Fine mesh for service-grade finishes; cheesecloth if you demand polish."
      ]
    },
    {
      "heading": "Body: gelatin, reduction, and mouthfeel",
      "paragraphs": [
        "Gelatin from bones gives richness that viscosity alone cannot fake. If your reduction is thick but thin-tasting, stock quality—not more boil—may be the issue.",
        "Watch the nonlinear curve: late reduction jumps in intensity faster than early reduction. Taste more often as volume shrinks."
      ],
      "tip": "If edge film darkens, wipe the rim down and reduce heat slightly—prevention beats rescue."
    },
    {
      "heading": "Finishing mounts and liaison choices",
      "paragraphs": [
        "Optional mounts—butter, cream—change emulsion and sheen. Add them when the base is volumetrically where you want it; mounting can mask slight harshness but will not fix burnt notes.",
        "Arrowroot versus cornstarch versus pure reduction: pick based on clarity needs and holding conditions."
      ]
    },
    {
      "heading": "Storage, gel set, and reuse",
      "paragraphs": [
        "Gelatin-rich reductions set in the fridge; reheat gently to avoid breaking fat. Slice off solid fat cap if you want leaner sauce flavor in the reheated batch.",
        "Label date—reduced bases are not immortal; off aromas mean discard."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why does my reduced stock taste bitter at the end?",
      "a": "Over-reduction, scorched solids on the pot, or poor initial stock with bitter vegetable notes (overcooked brassicas). Dilute, strain, and rebuild on lower heat; fix the pot, not only the liquid."
    },
    {
      "q": "Can I reduce straight from cloudy stock?",
      "a": "You can, but cloudiness often concentrates too. For pristine sauces, clarify earlier or accept rustic flavor with humbler presentation."
    },
    {
      "q": "How salty should stock be before reduction?",
      "a": "Usually lightly seasoned or unsalted until near final volume—unless you use salt for extraction in specific traditions and account for it mathematically."
    }
  ],
  "related": [
    {
      "title": "Temperature: The Silent Killer of Sauces",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "Order of Operations: Timing Changes Everything",
      "path": "/sauce-science/order-of-operations-sauce-timing"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "sauceSensei": {
    "sauceId": "reduction-stock"
  }
};

export default function StockReductionDemi() {
  return <ScienceArticlePage spec={SPEC} />;
}
