import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-sauces-taste-better-the-next-day",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Why Sauces Taste Better the Next Day",
  "subtitle": "Flavor diffusion, fat redistribution, and slow Maillard follow-ons continue long after you turn off the burner.",
  "readTime": "8 min read",
  "emoji": "🌙",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Sauces taste better overnight because large aromatic molecules continue diffusing through the matrix, emulsions homogenize as they cool slowly, and subtle Maillard and lipid oxidation products integrate without aggressive heat driving volatiles off. Reheat gently to preserve the win.",
  "intro": "Fresh-off-stove sauce can taste shouty; rested sauce tastes composed. That is not imagination—it is transport and chemistry continuing at refrigerator speeds. This article explains diffusion, emulsion relaxation, salt equilibration, and why tomato and meat sauces show the effect most dramatically while dairy sauces need careful reheating to keep the upside. Resting studies belong in tasting journals: score salt integration, acid brightness, and herb top notes at hour zero versus twenty-four in identical cups. Record chill cover type because plastic versus glass changes aromatic loss. For tomato sauces, log starting brix if you can; it predicts how much sweetness emerges overnight. When reheating, write gentle versus aggressive heat because re-frying aromatics changes outcomes. SenseiFood encourages linking rested sauces to bread or pasta builds with gram logs so flavor gains are not confounded by portion size changes.",
  "sections": [
    {
      "heading": "Diffusion and equilibrium of salt and acid",
      "paragraphs": [
        "Salt migrates into vegetable cells and protein surfaces over hours, reading as deeper savoriness.",
        "Acid integrates instead of sitting on top of the palate.",
        "Herb oils infuse more evenly than flash steeping achieves."
      ]
    },
    {
      "heading": "Lipid integration and particle suspension",
      "paragraphs": [
        "Fat droplets that looked separated can partially re-coalesce into smoother mouthfeel when gently resettled.",
        "Tiny particulates hydrate and swell, thickening slightly and carrying flavor farther.",
        "Starches complete retrogradation cycles that change viscosity perception."
      ]
    },
    {
      "heading": "Low-temperature chemistry without scorching",
      "paragraphs": [
        "Maillard pathways continue slowly in thick meaty sauces in the fridge—not like oven browning, but measurable.",
        "Alliums mellow their raw edges while still contributing sweetness.",
        "Capsaicin and piperine stabilize in fat phases, changing heat perception."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "When building multi-component plates, log rested versus immediate sauce scores blind.",
        "Pair sauce science articles with Sauce Sensei builds for gram discipline."
      ]
    },
    {
      "heading": "Debugging field notes",
      "paragraphs": [
        "Tag \"why-sauces-taste-better-the-next-day\" at the top of your kitchen log for this project so PDF exports and screenshots stay searchable across seasons.",
        "List equipment IDs that mattered that day: scale model, mixer speed used, oven rack height, and burr grinder zero point if coffee-adjacent—all drift over years.",
        "State one falsifiable hypothesis before the run and record whether results supported or rejected it; negative evidence prevents repeating expensive guesses."
      ]
    },
    {
      "heading": "Photographic evidence checklist",
      "paragraphs": [
        "Photograph Why Sauces Taste Better the Next Day under consistent lighting: one top-down frame and one cross-section whenever you change a variable tied to why-sauces-taste-better-the-next-day.",
        "Include a reference object in frame—a ruler edge or coin—so zoom crops do not fool you about spread thickness or bubble size later.",
        "Store images in a dated folder alongside gram weights; future comparisons become obvious instead of debated from memory."
      ]
    },
    {
      "heading": "Results vocabulary that travels",
      "paragraphs": [
        "When you write notes for why-sauces-taste-better-the-next-day, cap texture adjectives at three per bake—chewy, sandy, spongy—and flavor adjectives at three so comparisons week-to-week stay comparable.",
        "Note finish temperature and resting minutes beside taste descriptors; many off-notes are phase-dependent especially for dairy, chocolate, and coffee oils.",
        "If a friend tastes blind, record their words verbatim; fresh language catches patterns you normalized away."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is overnight always safe?",
      "a": "Follow standard rapid cool and storage times for protein-heavy sauces; flavor gains never justify unsafe holding."
    },
    {
      "q": "Why does cream sauce hate the fridge?",
      "a": "Emulsions tighten; reheat slowly with a splash of liquid and whisk."
    }
  ],
  "related": [
    {
      "title": "Order of Operations: Timing Changes Everything",
      "path": "/sauce-science/order-of-operations-sauce-timing"
    },
    {
      "title": "Reduction Curve: Nonlinear Flavor",
      "path": "/sauce-science/reduction-curve-nonlinear-flavor"
    }
  ]
};

export default function WhySaucesTasteBetterTheNextDay() {
  return <ScienceArticlePage spec={SPEC} />;
}
