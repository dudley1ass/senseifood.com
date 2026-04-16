import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-double-crust-pies-trap-steam",
  "segment": "pie-science",
  "categoryLabel": "Pie Science",
  "title": "Why Double Crust Pies Trap Steam",
  "subtitle": "A sealed lid raises internal pressure until vents or edge leaks become the only escape.",
  "readTime": "8 min read",
  "level": "Steam dynamics",
  "emoji": "💨",
  "fixRecipe": {
    "category": "pie",
    "problem": "general"
  },
  "quickAnswer": "Steam from filling and from dough water has nowhere to go under a sealed top. Without vents—and sometimes even with them—pressure lifts the lid or turns filling soupy. Vent geometry and bake temperature rhythm matter.",
  "intro": "Double crust is a small pressure cooker. The filling phase change releases water; dough dehydrates. If outflow is slower than generation, you get dome lifts, blowouts, or soggy pockets as steam recondenses.",
  "sections": [
    {
      "heading": "Venting as engineered mass flow",
      "paragraphs": [
        "Several small cuts beat one big X for even pressure relief. Center vents help mid-thickness steam escape, not just edge."
      ]
    },
    {
      "heading": "Temperature: start hot vs steady moderate",
      "paragraphs": [
        "High start sets edge structure to resist lift; too aggressive without vents tears. Match your recipe’s staged temps to fruit water load."
      ]
    },
    {
      "heading": "Holding after bake",
      "paragraphs": [
        "Cooling traps remaining steam as liquid inside fruit cells—normal—but cutting too soon releases under-set juice. Rest until internal vapor pressure equalizes."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Pie Filling Bubbles Over",
      "path": "/pie-science/why-pie-filling-bubbles-over"
    },
    {
      "title": "Why Pie Crust Cracks When Rolling",
      "path": "/pie-science/why-pie-crust-cracks-when-rolling"
    },
    {
      "title": "Why Pie Filling Is Runny",
      "path": "/pie-science/why-pie-filling-is-runny"
    },
    {
      "title": "Why Pie Crust Gets Soggy",
      "path": "/pie-science/why-pie-crust-gets-soggy"
    }
  ]
};

export default function WhyDoubleCrustPiesTrapSteam() {
  return <ScienceArticlePage spec={SPEC} />;
}
