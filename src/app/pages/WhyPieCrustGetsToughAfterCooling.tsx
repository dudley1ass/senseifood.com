import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-pie-crust-gets-tough-after-cooling",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Pie Crust Gets Tough After Cooling",
  "subtitle": "Moisture migrates from filling to laminated layers; gluten tightens as temperature falls and retrogradation sets in.",
  "readTime": "8 min read",
  "emoji": "🥧",
  "fixRecipe": {
    "category": "pie",
    "problem": "tough-crust"
  },
  "quickAnswer": "Flaky crust can turn leathery after cooling because steam redistributes into formerly dry layers, sugar syrups plasticize proteins, and amylopectin retrogrades in gelatinized zones. Blind-bake fruit pies enough, vent well, brush bottoms when needed, and cool on a rack so bottoms do not steam themselves.",
  "intro": "Hot pie crust is a temporary texture: fat is fluid enough to separate layers, water is vapor, and your teeth feel shatter. Cold pie is a different material: fat firms, moisture equilibrates, and proteins reorganize. This article explains the moisture bridge from filling to shell, the role of hydration at mix time, and why resting and rolling discipline still matter after the bake. Slice timing experiments matter: cut at room temperature versus straight from the fridge and note chew separately from flavor. If you brush milk washes, log browning because protein browning changes hydration paths. For lattice pies, record weave tightness and vent count alongside humidity on bake day. When using thickeners, write brand and cook minutes at boil because identical names gel differently. SenseiFood pie debugging rewards photos of the filling-crust interface after chill; the hydrated band width is your scorecard for moisture migration fixes.",
  "sections": [
    {
      "heading": "Moisture migration from filling to rim",
      "paragraphs": [
        "Fruit and custard fillings are wet reservoirs. Over hours, water moves along concentration gradients into drier crust regions, especially bottom and seal lines.",
        "Double crusts trap more steam at the center vent; under-vented pies hydrate the inner lid from the inside out.",
        "Cooling in a deep pan without air under the base steams the bottom back into toughness."
      ]
    },
    {
      "heading": "Gluten memory from mixing and rolling",
      "paragraphs": [
        "Overworked dough carries more aligned gluten that tightens as it hydrates further post-bake.",
        "Patching with heavy re-roll adds new stressed zones that read tough after cooling.",
        "Bench rest reduces springback but cannot erase excessive development from the start."
      ]
    },
    {
      "heading": "Sugar, starch, and mechanical set",
      "paragraphs": [
        "Sugar competes for water and can keep crust tender when balanced; excess syrup layers can plasticize proteins into chew.",
        "Thickeners that overset near the interface can create a gummy-tough band after refrigeration.",
        "Refrigeration accelerates starch retrogradation in any gelatinized flour patches."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Pie mode compares hydration and fat levels to targets for your style. Tough-after-cool paired with soggy base is a different fix than tough rim only.",
        "Slice and photograph the interface after chill; the hydrated band width tells the story."
      ]
    },
    {
      "heading": "Debugging field notes",
      "paragraphs": [
        "Tag \"why-pie-crust-gets-tough-after-cooling\" at the top of your kitchen log for this project so PDF exports and screenshots stay searchable across seasons.",
        "List equipment IDs that mattered that day: scale model, mixer speed used, oven rack height, and burr grinder zero point if coffee-adjacent—all drift over years.",
        "State one falsifiable hypothesis before the run and record whether results supported or rejected it; negative evidence prevents repeating expensive guesses."
      ]
    },
    {
      "heading": "Photographic evidence checklist",
      "paragraphs": [
        "Photograph Why Pie Crust Gets Tough After Cooling under consistent lighting: one top-down frame and one cross-section whenever you change a variable tied to why-pie-crust-gets-tough-after-cooling.",
        "Include a reference object in frame—a ruler edge or coin—so zoom crops do not fool you about spread thickness or bubble size later.",
        "Store images in a dated folder alongside gram weights; future comparisons become obvious instead of debated from memory."
      ]
    },
    {
      "heading": "Results vocabulary that travels",
      "paragraphs": [
        "When you write notes for why-pie-crust-gets-tough-after-cooling, cap texture adjectives at three per bake—chewy, sandy, spongy—and flavor adjectives at three so comparisons week-to-week stay comparable.",
        "Note finish temperature and resting minutes beside taste descriptors; many off-notes are phase-dependent especially for dairy, chocolate, and coffee oils.",
        "If a friend tastes blind, record their words verbatim; fresh language catches patterns you normalized away."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Does reheating fix it?",
      "a": "Gentle reheat can soften fat layers briefly but will not reverse protein tightening; prevention beats repair."
    },
    {
      "q": "Is all-butter more prone?",
      "a": "Butter is flavorful but plasticizes when hydrated; technique matters more than fat type alone."
    }
  ],
  "related": [
    {
      "title": "Why Pie Crust Gets Tough",
      "path": "/pie-science/why-pie-crust-gets-tough"
    },
    {
      "title": "Why Pie Crust Gets Soggy",
      "path": "/pie-science/why-pie-crust-gets-soggy"
    }
  ]
};

export default function WhyPieCrustGetsToughAfterCooling() {
  return <ScienceArticlePage spec={SPEC} />;
}
