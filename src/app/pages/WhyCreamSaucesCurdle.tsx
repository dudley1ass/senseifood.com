import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cream-sauces-curdle",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Why Cream Sauces Curdle",
  "subtitle": "Protein tightening, acid shock, and overheating destabilize dairy emulsions into grainy curds.",
  "readTime": "8 min read",
  "emoji": "🥛",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Cream sauces curdle when dairy proteins denature and aggregate faster than fat and emulsifiers can keep them suspended—often from boiling, acidic additions at high heat, or insufficient starch or lecithin support. Use gentle sub-simmer heat, temper acids, add starch slurry early enough to hydrate, and finish fat off-heat when possible.",
  "intro": "Curdled cream is not mysterious spoilage mid-pan; it is a race between protein aggregation and emulsion repair capacity. Wine reductions, tomato acidity, and lemon can be gorgeous if introduced with thermal respect. This article walks pH, heat flux, starch roles, and recovery options that actually work when you catch the break early enough. Sauce logs should capture pan metal, burner setting, and time-to-first-bubble after dairy addition. If you use wine, record reduction volume visually because syrup thickness predicts shock. When recovering breaks, note whether heat was lowered first—order matters. For cheese additions, log moisture and age because aged cheeses behave differently in emulsions. Photograph surface sheen versus oil slicks; they imply different failure stages. Pair reads with Sauce Sensei timing articles so heat paths become repeatable craft instead of hope.",
  "sections": [
    {
      "heading": "Heat and protein denaturation kinetics",
      "paragraphs": [
        "Boiling cream crosses stability thresholds quickly; the surface film is the early warning.",
        "Carryover heat in thick pans continues cooking off-flame.",
        "Reheating yesterday’s sauce repeats the risk window."
      ]
    },
    {
      "heading": "Acid, salt, and alcohol timing",
      "paragraphs": [
        "Acid tightens proteins; add in tempered streams while whisking on lowered heat.",
        "Alcohol can thin phases temporarily then spike boil intensity as ethanol leaves.",
        "Salt concentration shifts protein isoelectric behavior subtly but meaningfully."
      ]
    },
    {
      "heading": "Starch, lecithin, and fat phase help",
      "paragraphs": [
        "Roux or slurry starch catches free water and reduces aggregation collisions.",
        "Egg yolk lecithin and commercial lecithin add interfacial area for fat droplets to protect proteins.",
        "Butter finish adds cooled fat crystals that can help re-suspend if heat is controlled."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "General baking mode still rewards logging dairy-to-acid ratios when your sauces pair with doughs.",
        "Treat sauce batches like experiments: one variable per pan."
      ]
    },
    {
      "heading": "Debugging field notes",
      "paragraphs": [
        "Tag \"why-cream-sauces-curdle\" at the top of your kitchen log for this project so PDF exports and screenshots stay searchable across seasons.",
        "List equipment IDs that mattered that day: scale model, mixer speed used, oven rack height, and burr grinder zero point if coffee-adjacent—all drift over years.",
        "State one falsifiable hypothesis before the run and record whether results supported or rejected it; negative evidence prevents repeating expensive guesses."
      ]
    },
    {
      "heading": "Photographic evidence checklist",
      "paragraphs": [
        "Photograph Why Cream Sauces Curdle under consistent lighting: one top-down frame and one cross-section whenever you change a variable tied to why-cream-sauces-curdle.",
        "Include a reference object in frame—a ruler edge or coin—so zoom crops do not fool you about spread thickness or bubble size later.",
        "Store images in a dated folder alongside gram weights; future comparisons become obvious instead of debated from memory."
      ]
    },
    {
      "heading": "Results vocabulary that travels",
      "paragraphs": [
        "When you write notes for why-cream-sauces-curdle, cap texture adjectives at three per bake—chewy, sandy, spongy—and flavor adjectives at three so comparisons week-to-week stay comparable.",
        "Note finish temperature and resting minutes beside taste descriptors; many off-notes are phase-dependent especially for dairy, chocolate, and coffee oils.",
        "If a friend tastes blind, record their words verbatim; fresh language catches patterns you normalized away."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can I blend a broken sauce?",
      "a": "Sometimes with immersion blender if fat has not fully separated; strain if gritty proteins dominate."
    },
    {
      "q": "Is low-fat cream safer?",
      "a": "Often more prone; fat helps buffer proteins—choose cook technique before trimming fat."
    }
  ],
  "related": [
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

export default function WhyCreamSaucesCurdle() {
  return <ScienceArticlePage spec={SPEC} />;
}
