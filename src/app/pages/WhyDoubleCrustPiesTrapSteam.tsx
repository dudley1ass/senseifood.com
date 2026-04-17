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
  "intro": "A double-crust pie is a small steam engine. Heat drives water from fruit, from any added liquids, and from the dough itself; vapor expands and seeks exit paths. With a pastry lid crimped shut, the easiest outs are engineered vents, leaky crimps, or blowouts where dough tears. Until steam leaves, internal pressure can dome the top crust, separate layers, or force juice through weak seams—sometimes violently. After baking, trapped vapor recondenses as the pie cools, which changes how filling sets and how soggy the interior feels. Understanding mass flow (where steam goes) and timing (when the crust sets) helps you choose vent patterns, temperatures, and resting behavior that avoid surprise eruptions.",
  "sections": [
    {
      "heading": "Venting as engineered mass flow",
      "paragraphs": [
        "One decorative slash is often insufficient for high-moisture fillings; several modest openings distribute pressure relief so the center does not balloon. Think about area and placement: fruit near the middle releases plenty of vapor that needs a path before the top skin sets into a rigid shell.",
        "Lattice designs vent by definition but still need edge integrity—gaps help only if steam can reach them before the matrix seals with starch and sugar."
      ],
      "bullets": [
        {
          "title": "Crimp quality",
          "text": "A loose crimp vents accidentally; an overly tight crimp with no other outlets invites lifts or side jets."
        },
        {
          "title": "Egg wash timing",
          "text": "Heavy wash can glue vent lips shut early—brush after cutting vents or keep openings clear."
        }
      ]
    },
    {
      "heading": "Temperature: start hot vs steady moderate",
      "paragraphs": [
        "A hot start can set edge structure before the filling drives maximum steam, reducing lid lift; too aggressive without relief tears the top. Staged baking—blasting early then moderating—matches recipes with different fruit water loads and dough thickness.",
        "Glass and metal pans change edge heat flux; darker metal accelerates bottom set, which shifts internal steam timing relative to the lid."
      ]
    },
    {
      "heading": "Holding after bake",
      "paragraphs": [
        "Cooling continues internal movement: vapor condenses, filling thickens, and juices redistribute. Cutting too soon releases under-set liquid that looks like trapped steam escaped all at once—resting lets internal pressure equalize gently.",
        "Covering while hot can return steam to the crust; vent the space if you tent foil to protect color."
      ],
      "tip": "If you always see lift at one compass point, suspect uneven fruit mound or oven hot spot—not random bad luck."
    },
    {
      "heading": "Thickeners and bubble behavior",
      "paragraphs": [
        "Starch and other thickeners change how juice boils inside—viscous fillings can burp steam in pulses. That affects when blowouts occur; a filling that geled too early on top can seal a steam pocket underneath."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why did my pie erupt through the vents anyway?",
      "a": "Vents limit flow rate; a rapid boil can still push juice if viscosity is low or if steam nucleates under a surface skin. Smaller distributed vents plus controlled temperature ramps reduce geysers."
    },
    {
      "q": "Does docking the bottom help steam?",
      "a": "Docking addresses dough pockets under blind bakes; fruit pies still need top or edge relief for filling steam—do not confuse the two mechanisms."
    },
    {
      "q": "Is a soggy top always steam trapping?",
      "a": "Not always—condensation from tenting, humidity, or underbaking can mimic it. Combine visual cues with rest time and crust color."
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
