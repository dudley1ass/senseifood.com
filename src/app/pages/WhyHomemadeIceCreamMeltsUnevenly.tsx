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
  "intro": "Commercial ice cream engineers meltdown; home churns often ignore it until the first puddle on the cone. Uneven melting means your microstructure is heterogeneous: some lamellae are water-rich, some fat-rich, some air-depleted. This guide connects dasher shear, emulsifier choice, draw temperature, and hardening path to what your eyes see as rivulets versus standing cream. Meltdown tests belong in your notebook: scoop onto a preheated ceramic plate at a defined temperature and time-lapse the puddle radius. Record dasher speed if your machine exposes it, and note freezer display temp versus a probe on a shelf. When adding mix-ins, log particle size because chocolate shavings melt faster than chunks and create local rivers. If you use alcohol, record proof and grams because small errors move freezing point nonlinearly. Pair results with Fix My Recipe ice cream solids checks so emulsion fixes happen before you buy another pint of cream. Uneven melt is often the epilogue of air, sugar, and fat disagreeing: some zones never froze as hard, overrun collapsed, or the scoop hit a warm edge first. The spoon feels the subplot before your eyes name it. When you connect melt behavior to base style, churn time, and freezer load, homemade ice cream stops feeling like a lottery and starts feeling like a process you can steer.",
  "sections": [
    {
      "heading": "Overrun and air channeling",
      "paragraphs": [
        "Air is an ingredient; uneven incorporation leaves dense bands that melt at different rates. High water, low solids bases melt aggressively where air is absent. Warm draw temperatures leave unfrozen water to collapse unevenly on first contact with heat."
      ]
    },
    {
      "heading": "Emulsion stability and fat churn",
      "paragraphs": [
        "Lecithin and proteins keep fat dispersed; when emulsions fail, oil pools appear while ice lingers. Over-churning separates butter particles that melt instantly in hot spots. Alcohol and sugar shift freezing curves; random slugs of high-proof liqueur create local soft zones."
      ]
    },
    {
      "heading": "Heat shock and refreeze bands",
      "paragraphs": [
        "Partial melts create layers that refreeze into different crystal sizes and solute concentrations. Door openings in frost-free freezers create micro bands of heat shock visible as ripples in pints. Serving from a warm scoop rewets surface microstructure for the next scoop session."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Ice cream mode compares sugar, dairy, and water bands to smooth meltdown references. Record draw temp, hardening temp, and time-to-first-drip on a warm plate test."
      ]
    },
    {
      "heading": "Reading melt like a narrative, not a spec sheet",
      "paragraphs": [
        "Uneven melt is often the epilogue of air, sugar, and fat not agreeing: some zones were never as frozen, or overrun collapsed so water pooled beside butterfat rivers. The spoon feels the subplot before your eyes see it. Note base style, churn time, and how hard the freezer was working that week—plain language, not equipment IDs. Two batches with one intentional change tell the story faster than a folder of identical top-down photos."
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
