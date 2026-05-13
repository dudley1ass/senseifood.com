import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-ice-cream-tastes-better-after-resting-overnight",
  "segment": "ice-cream-science",
  "categoryLabel": "Ice Cream Science",
  "title": "Why Ice Cream Tastes Better After Resting Overnight",
  "subtitle": "Aged bases hydrate proteins and stabilizers; hardened ice cream tempers for smoother flavor release.",
  "readTime": "8 min read",
  "emoji": "✨",
  "fixRecipe": {
    "category": "iceCream",
    "problem": "general"
  },
  "quickAnswer": "Overnight rest improves ice cream because hydrocolloids fully hydrate, fat globules partially crystallize in a controlled window, and volatile flavors redistribute through the serum. Hardening near proper sub-freezer temps rounds harsh ice notes and lets sweetness read correctly at eating temperature.",
  "intro": "“Rest the base” is not chef mysticism; it is waiting for proteins and gums to finish their slow jobs and for fat crystal populations to become more uniform. Churning immediately after a hot cook can work, but the texture and flavor window often tightens. This article explains aging chemistry, tempering for serving, and why tasting warm base misleads sweetness judgment for cold dessert. Aging studies are simple: split a base, churn half same-day and half after twenty-four hours blind, with identical draw temperature. Record viscosity with a cheap funnel timing test if you lack lab gear. Note vanilla extract brand and alcohol percent because volatiles partition differently over time. If you use fruit purees, log fiber content from nutrition labels; fiber changes water binding during rest. When scaling, write dairy fat percent from carton math—small label drift shifts mouthfeel. SenseiFood rewards boring data because ice cream is a sum of small physical states.",
  "sections": [
    {
      "heading": "Protein hydration and emulsion polish",
      "paragraphs": [
        "Dairy proteins need time to fully hydrate after heat; under-hydrated proteins churn unevenly.",
        "Egg yolk lecithin benefits from time to adsorb at fat-water interfaces before freezing shear.",
        "Straining removes lumps that would become textural noise after churn."
      ]
    },
    {
      "heading": "Hydrocolloid maturation",
      "paragraphs": [
        "Locust bean gum and guar continue thickening the serum overnight in ways a five-minute mix cannot replicate.",
        "Over-gum feels slimy; aging reveals balance errors clearly before expensive dairy is frozen.",
        "Uniform viscosity entering the barrel improves air incorporation consistency."
      ]
    },
    {
      "heading": "Flavor integration and cold perception",
      "paragraphs": [
        "Vanilla and spice volatiles partition between fat and water phases over time; the tongue reads a more cohesive profile.",
        "Cold suppresses sweetness; rested bases often need slightly less sugar adjustment than same-day tasting suggests.",
        "Hardening temp sets crystal populations that change how quickly flavor releases on the palate."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Ice cream mode compares solids and water to targets for body and scoop.",
        "A/B churn same base with and without overnight age on a small batch scale."
      ]
    },
    {
      "heading": "Debugging field notes",
      "paragraphs": [
        "Tag \"why-ice-cream-tastes-better-after-resting-overnight\" at the top of your kitchen log for this project so PDF exports and screenshots stay searchable across seasons.",
        "List equipment IDs that mattered that day: scale model, mixer speed used, oven rack height, and burr grinder zero point if coffee-adjacent—all drift over years.",
        "State one falsifiable hypothesis before the run and record whether results supported or rejected it; negative evidence prevents repeating expensive guesses."
      ]
    },
    {
      "heading": "Photographic evidence checklist",
      "paragraphs": [
        "Photograph Why Ice Cream Tastes Better After Resting Overnight under consistent lighting: one top-down frame and one cross-section whenever you change a variable tied to why-ice-cream-tastes-better-after-resting-overnight.",
        "Include a reference object in frame—a ruler edge or coin—so zoom crops do not fool you about spread thickness or bubble size later.",
        "Store images in a dated folder alongside gram weights; future comparisons become obvious instead of debated from memory."
      ]
    },
    {
      "heading": "Results vocabulary that travels",
      "paragraphs": [
        "When you write notes for why-ice-cream-tastes-better-after-resting-overnight, cap texture adjectives at three per bake—chewy, sandy, spongy—and flavor adjectives at three so comparisons week-to-week stay comparable.",
        "Note finish temperature and resting minutes beside taste descriptors; many off-notes are phase-dependent especially for dairy, chocolate, and coffee oils.",
        "If a friend tastes blind, record their words verbatim; fresh language catches patterns you normalized away."
      ]
    }
  ],
  "faqs": [
    {
      "q": "How long is too long?",
      "a": "Most bases are fine 12–48 hours refrigerated; beyond that watch for dairy off flavors in ultra-rich mixes."
    },
    {
      "q": "Does aging fix sandy texture?",
      "a": "Lactose sand is a different chemistry; aging helps hydration and emulsion, not supersaturated lactose alone."
    }
  ],
  "related": [
    {
      "title": "Why Ice Cream Lacks Flavor",
      "path": "/ice-cream-science/why-ice-cream-lacks-flavor"
    },
    {
      "title": "Why Ice Cream Gets Sandy",
      "path": "/ice-cream-science/why-ice-cream-gets-sandy"
    }
  ]
};

export default function WhyIceCreamTastesBetterAfterRestingOvernight() {
  return <ScienceArticlePage spec={SPEC} />;
}
