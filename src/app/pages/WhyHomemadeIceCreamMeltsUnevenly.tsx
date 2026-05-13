import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-homemade-ice-cream-melts-unevenly",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Homemade Ice Cream Melts Unevenly",
  "subtitle": "Poor overrun, weak emulsions, and ice phase gradients create puddles while solids still feel cold.",
  "readTime": "8 min read",
  "emoji": "🍨",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "melts-fast"
  },
  "quickAnswer": "Uneven melt comes from inconsistent air distribution, localized low solids, broken emulsions that let butterfat churn out, and heat-shocked crystals that melt faster in pockets. Aim smooth viscous base before churn, proper hardening, and minimize thaw-refreeze; small glucose solids can even out meltdown.",
  "intro": "Commercial ice cream engineers meltdown; home churns often ignore it until the first puddle on the cone. Uneven melting means your microstructure is heterogeneous: some lamellae are water-rich, some fat-rich, some air-depleted. This guide connects dasher shear, emulsifier choice, draw temperature, and hardening path to what your eyes see as rivulets versus standing cream. Meltdown tests belong in your notebook: scoop onto a preheated ceramic plate at a defined temperature and time-lapse the puddle radius. Record dasher speed if your machine exposes it, and note freezer display temp versus a probe on a shelf. When adding mix-ins, log particle size because chocolate shavings melt faster than chunks and create local rivers. If you use alcohol, record proof and grams because small errors move freezing point nonlinearly. Pair results with Fix My Recipe ice cream solids checks so emulsion fixes happen before you buy another pint of cream.",
  "sections": [
    {
      "heading": "Overrun and air channeling",
      "paragraphs": [
        "Air is an ingredient; uneven incorporation leaves dense bands that melt at different rates.",
        "High water, low solids bases melt aggressively where air is absent.",
        "Warm draw temperatures leave unfrozen water to collapse unevenly on first contact with heat."
      ]
    },
    {
      "heading": "Emulsion stability and fat churn",
      "paragraphs": [
        "Lecithin and proteins keep fat dispersed; when emulsions fail, oil pools appear while ice lingers.",
        "Over-churning separates butter particles that melt instantly in hot spots.",
        "Alcohol and sugar shift freezing curves; random slugs of high-proof liqueur create local soft zones."
      ]
    },
    {
      "heading": "Heat shock and refreeze bands",
      "paragraphs": [
        "Partial melts create layers that refreeze into different crystal sizes and solute concentrations.",
        "Door openings in frost-free freezers create micro bands of heat shock visible as ripples in pints.",
        "Serving from a warm scoop rewets surface microstructure for the next scoop session."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Ice cream mode compares sugar, dairy, and water bands to smooth meltdown references.",
        "Record draw temp, hardening temp, and time-to-first-drip on a warm plate test."
      ]
    },
    {
      "heading": "Debugging field notes",
      "paragraphs": [
        "Tag \"why-homemade-ice-cream-melts-unevenly\" at the top of your kitchen log for this project so PDF exports and screenshots stay searchable across seasons.",
        "List equipment IDs that mattered that day: scale model, mixer speed used, oven rack height, and burr grinder zero point if coffee-adjacent—all drift over years.",
        "State one falsifiable hypothesis before the run and record whether results supported or rejected it; negative evidence prevents repeating expensive guesses."
      ]
    },
    {
      "heading": "Photographic evidence checklist",
      "paragraphs": [
        "Photograph Why Homemade Ice Cream Melts Unevenly under consistent lighting: one top-down frame and one cross-section whenever you change a variable tied to why-homemade-ice-cream-melts-unevenly.",
        "Include a reference object in frame—a ruler edge or coin—so zoom crops do not fool you about spread thickness or bubble size later.",
        "Store images in a dated folder alongside gram weights; future comparisons become obvious instead of debated from memory."
      ]
    },
    {
      "heading": "Results vocabulary that travels",
      "paragraphs": [
        "When you write notes for why-homemade-ice-cream-melts-unevenly, cap texture adjectives at three per bake—chewy, sandy, spongy—and flavor adjectives at three so comparisons week-to-week stay comparable.",
        "Note finish temperature and resting minutes beside taste descriptors; many off-notes are phase-dependent especially for dairy, chocolate, and coffee oils.",
        "If a friend tastes blind, record their words verbatim; fresh language catches patterns you normalized away."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is uneven melt the same as icy?",
      "a": "Related but distinct; icy is crystal sensation, uneven melt is phase layout and air defects."
    },
    {
      "q": "Does more fat fix it?",
      "a": "Sometimes, but broken emulsion high fat still pools; fix state before chasing grams."
    }
  ],
  "related": [
    {
      "title": "Why Ice Cream Is Too Soft",
      "path": "/ice-cream-science/why-ice-cream-is-too-soft"
    },
    {
      "title": "Why Ice Cream Separates",
      "path": "/ice-cream-science/why-ice-cream-separates"
    }
  ]
};

export default function WhyHomemadeIceCreamMeltsUnevenly() {
  return <ScienceArticlePage spec={SPEC} />;
}
