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
  "intro": "Hot pie crust is a temporary texture: fat is fluid enough to separate layers, water is vapor, and your teeth feel shatter. Cold pie is a different material: fat firms, moisture equilibrates, and proteins reorganize. This article explains the moisture bridge from filling to shell, the role of hydration at mix time, and why resting and rolling discipline still matter after the bake. Slice timing experiments matter: cut at room temperature versus straight from the fridge and note chew separately from flavor. If you brush milk washes, log browning because protein browning changes hydration paths. For lattice pies, record weave tightness and vent count alongside humidity on bake day. When using thickeners, write brand and cook minutes at boil because identical names gel differently. SenseiFood pie debugging rewards photos of the filling-crust interface after chill; the hydrated band width is your scorecard for moisture migration fixes. Toughness after cooling is usually gluten that kept working after the dough already said its lines—warm handling, thirsty rerolls, or restless rolling pin energy. Rest is not laziness; it is part of the recipe’s pacing. When you compare flake versus chew the next day, you learn whether the fix belongs to hydration, folding technique, or bake color—not to a mystery “bad day.”",
  "sections": [
    {
      "heading": "Moisture migration from filling to rim",
      "paragraphs": [
        "Fruit and custard fillings are wet reservoirs. Over hours, water moves along concentration gradients into drier crust regions, especially bottom and seal lines. Double crusts trap more steam at the center vent; under-vented pies hydrate the inner lid from the inside out. Cooling in a deep pan without air under the base steams the bottom back into toughness."
      ]
    },
    {
      "heading": "Gluten memory from mixing and rolling",
      "paragraphs": [
        "Overworked dough carries more aligned gluten that tightens as it hydrates further post-bake. Patching with heavy re-roll adds new stressed zones that read tough after cooling. Bench rest reduces springback but cannot erase excessive development from the start."
      ]
    },
    {
      "heading": "Sugar, starch, and mechanical set",
      "paragraphs": [
        "Sugar competes for water and can keep crust tender when balanced; excess syrup layers can plasticize proteins into chew. Thickeners that overset near the interface can create a gummy-tough band after refrigeration. Refrigeration accelerates starch retrogradation in any gelatinized flour patches."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Pie mode compares hydration and fat levels to targets for your style. Tough-after-cool paired with soggy base is a different fix than tough rim only. Slice and photograph the interface after chill; the hydrated band width tells the story."
      ]
    },
    {
      "heading": "Tough crust after the curtain falls",
      "paragraphs": [
        "Toughness is often gluten that kept working after the dough had already said its lines—warm handling, too much water, or aggressive rerolls. Rest helps the dough forget the stress. Describe flakes versus chew after a night in the fridge; that single contrast tells you whether to change hydration or handling next time."
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
