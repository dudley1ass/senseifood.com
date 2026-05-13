import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-fruit-pies-leak-juice",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Fruit Pies Leak Juice",
  "subtitle": "Under-set thickeners, burst cells, and steam pressure push mobile syrup through vents and seams.",
  "readTime": "8 min read",
  "emoji": "🫐",
  "fixRecipe": {
    "category": "pie",
    "problem": "soggy-crust"
  },
  "quickAnswer": "Fruit pies leak when free juice exceeds what starch or pectin can immobilize before the crust sets vents, when filling boils too violently, or when lattice gaps channel syrup outward. Macerate and drain, balance sugar and acid, cook filling to true gel for starch rules, and vent enough—but not so much that boil-over races the lattice.",
  "intro": "Juice is not betrayal; it is fruit doing osmosis under heat. Leaking is the accounting error between juice generation and juice binding. This guide walks maceration, thickener choice, boil intensity, and top-crust engineering so the pie holds its syrup through cool-down and slicing. You will also learn why “extra cornstarch” without reaching gel temperature makes paste pockets instead of stability. Juice audits are geeky but fast: collect drained maceration liquid volume in milliliters and compare across fruit lots. Note pH with inexpensive strips because acid shifts starch gel windows. If you blind bake, record dock pattern and weights because steam escape changes later boil intensity. For top crusts, log egg wash thickness; thick washes can seal vents you thought were open. When freezing unbaked pies, document ice crystal damage to cell walls that shows up as extra juice on bake day. Pair these notes with Fix My Recipe pie hydration bands to stop guessing thickeners.",
  "sections": [
    {
      "heading": "Cell rupture and osmotic juice",
      "paragraphs": [
        "Heat collapses cell walls in berries and stone fruit, dumping water, acids, and sugars simultaneously.",
        "Sugar pulls additional water osmotically during maceration; skipping drain steps overloads the shell.",
        "Frozen fruit adds ice melt variables that skew timing if not accounted for."
      ]
    },
    {
      "heading": "Thickener kinetics and gel temperature",
      "paragraphs": [
        "Cornstarch needs full gelation near boil in the correct acid window; undercooked starch weeps later.",
        "Tapioca and modified starches have different clarity and break points; mixing types without testing invites separation.",
        "Too little thickener reads as soup; too much reads as pasty pockets if not fully dispersed."
      ]
    },
    {
      "heading": "Steam paths and crust seams",
      "paragraphs": [
        "Steam lifts lids; weak crimps blow out first. Egg wash cannot seal pressure faults.",
        "Lattice spacing trades aesthetics for vent area; tight weaves trap more pressure.",
        "Par-baking bottoms for wet fruits buys time before saturation."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Pie mode compares water and sugar loads to structural cues. Log pre-bake filling volume and post-bake set jiggle.",
        "Change one thickener or one cook curve per test batch until the slice holds on a warm plate."
      ]
    },
    {
      "heading": "Debugging field notes",
      "paragraphs": [
        "Tag \"why-fruit-pies-leak-juice\" at the top of your kitchen log for this project so PDF exports and screenshots stay searchable across seasons.",
        "List equipment IDs that mattered that day: scale model, mixer speed used, oven rack height, and burr grinder zero point if coffee-adjacent—all drift over years.",
        "State one falsifiable hypothesis before the run and record whether results supported or rejected it; negative evidence prevents repeating expensive guesses."
      ]
    },
    {
      "heading": "Photographic evidence checklist",
      "paragraphs": [
        "Photograph Why Fruit Pies Leak Juice under consistent lighting: one top-down frame and one cross-section whenever you change a variable tied to why-fruit-pies-leak-juice.",
        "Include a reference object in frame—a ruler edge or coin—so zoom crops do not fool you about spread thickness or bubble size later.",
        "Store images in a dated folder alongside gram weights; future comparisons become obvious instead of debated from memory."
      ]
    },
    {
      "heading": "Results vocabulary that travels",
      "paragraphs": [
        "When you write notes for why-fruit-pies-leak-juice, cap texture adjectives at three per bake—chewy, sandy, spongy—and flavor adjectives at three so comparisons week-to-week stay comparable.",
        "Note finish temperature and resting minutes beside taste descriptors; many off-notes are phase-dependent especially for dairy, chocolate, and coffee oils.",
        "If a friend tastes blind, record their words verbatim; fresh language catches patterns you normalized away."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why did it leak after cooling?",
      "a": "Syneresis from under-hydrated starch gels or broken pectin networks can squeeze juice overnight."
    },
    {
      "q": "Is flour okay as thickener?",
      "a": "It clouds and can taste raw if not cooked through; fine for some styles, not for glossy fruit."
    }
  ],
  "related": [
    {
      "title": "Why Pie Filling Bubbles Over",
      "path": "/pie-science/why-pie-filling-bubbles-over"
    },
    {
      "title": "Why Fruit Pies Turn Grainy",
      "path": "/pie-science/why-fruit-pies-turn-grainy"
    }
  ]
};

export default function WhyFruitPiesLeakJuice() {
  return <ScienceArticlePage spec={SPEC} />;
}
