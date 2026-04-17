import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-sauces-break-when-reheated",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Why Sauces Break When Reheated",
  "subtitle": "Second-pass heat exceeds the emulsion’s stability window; fat coalesces and water weeps.",
  "readTime": "8 min read",
  "level": "Service-stage heat",
  "emoji": "🔁",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Reheat gently with a splash of water or stock, whisk constantly, and never boil a finished dairy emulsion. Microwave hotspots are a common breaker—use stove or low oven with foil.",
  "intro": "The first cook built an emulsion under controlled shear, gradual heat, and often a carefully sequenced fat addition. Reheating asks the same system to survive a second thermal excursion with less margin: proteins may have aged, starch may have retrograded, and water may have evaporated unevenly in storage. Microwaves create hotspots; direct flame superheats pan bottoms even when the surface looks calm; boiling drives off volatile emulsifiers like mustard aromatics. This guide sets a sensible temperature ceiling for rethermalization, a loosen-then-warm sequence for tight leftovers, holding practices for service, and how to recognize when to rebuild rather than rescue.",
  "sections": [
    {
      "heading": "Temperature ceiling on rethermalization",
      "paragraphs": [
        "Treat reheat as finishing heat, not a second reduction. Boiling a finished dairy emulsion invites fat coalescence and protein aggregation at the air–liquid interface you worked to stabilize. If you must concentrate flavor, reduce before emulsifying fat in, or reduce the non-fat foundation and re-emulsify fresh butter at service.",
        "Induction and gas on low can still create thin superheated layers at metal contact; use thicker pans, lower peak heat, and constant motion. Thermometers help when eyeballing simmer fails emulsions repeatedly."
      ],
      "bullets": [
        {
          "title": "Microwave strategy",
          "text": "Short pulses with stirring between beats hotspots; covered gentle oven reheating can be kinder to large batches."
        },
        {
          "title": "Add fat last again",
          "text": "Sometimes mounting fresh cold butter off heat after the body is fluid rescues sheen when stored sauces oil out on warm-up."
        }
      ]
    },
    {
      "heading": "Sequence: loosen, hydrate, then adjust",
      "paragraphs": [
        "Tight refrigerated sauces are often rubbery from gelled starch or chilled fat, not permanently broken. Add a small splash of water, stock, or milk and warm gently while whisking to re-fluidize before judging salt or thickness. Adding dry thickeners to a seized mass without hydrating first compounds grain.",
        "If solids separated in storage, re-blend or pass through a fine strainer after gentle recombination—texture memory can remain grainy if curds formed during the first break."
      ],
      "tip": "Taste after reheat, not only straight from the fridge; salt perception and acid brightness shift with temperature."
    },
    {
      "heading": "Holding for service after reheat",
      "paragraphs": [
        "Bain-marie holding below simmer reduces scorch risk versus direct flame. Stir on pickup; skin formation is both water loss and fat migration—press film or use narrow surface area for long holds.",
        "If the line requires long windows, choose sauces that tolerate hold—tomato-brown bases with stable emulsion anchors—or refresh in smaller batches rather than one steam-table marathon."
      ]
    },
    {
      "heading": "When to rebuild instead of whisk harder",
      "paragraphs": [
        "If repeated gentle reheats never restore gloss and you see free oil after straining, you may need a clean emulsion rebuild: separate phases, clarify the lean liquid, re-mount with controlled fat. Continuing to heat broken dairy can toast proteins into off flavors.",
        "Document whether break happened on storage, on first reheat, or only on second reheat—that pattern tells you if the issue is process or recipe solids loading."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why does my hollandaise break on reheat but not the first time?",
      "a": "Fresh emulsions have optimal droplet size and protein films; reheating crosses temperature thresholds that coalesce fat unless you add water, shear, and gentle heat together."
    },
    {
      "q": "Is the microwave ever okay?",
      "a": "For small portions with vigilance—low power, frequent stirring. It is riskier for large, uneven volumes."
    },
    {
      "q": "Does adding cornstarch always protect reheats?",
      "a": "It can stabilize some systems but changes mouthfeel and can retrograde oddly cold; match thickener to sauce class."
    }
  ],
  "related": [
    {
      "title": "Order of Operations in Sauces",
      "path": "/sauce-science/order-of-operations-sauce-timing"
    },
    {
      "title": "Water Content: Hidden Dilution",
      "path": "/sauce-science/water-content-hidden-dilution"
    },
    {
      "title": "Temperature: The Silent Killer of Sauces",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "Emulsion vs Non-Emulsion Sauces",
      "path": "/sauce-science/emulsion-vs-non-emulsion-sauces"
    }
  ]
};

export default function WhySaucesBreakWhenReheated() {
  return <ScienceArticlePage spec={SPEC} />;
}
