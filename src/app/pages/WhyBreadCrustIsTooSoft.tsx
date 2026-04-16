import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-crust-is-too-soft",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Crust Is Too Soft",
  "subtitle": "Soft crust means the surface never dried and browned enough—or steam never left the microclimate.",
  "readTime": "7 min read",
  "emoji": "🧽",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Soft crusts usually mean insufficient final bake drying, baking entirely enclosed without venting, or high humidity storage right after bake. Finish the loaf uncovered until the crust audibly crackles when cooling.",
  "intro": "A crust that feels leathery or spongy lost the race between interior set and surface dehydration. Steam is essential early, but the second half of the bake is about letting the crust actually become crust. Soft crust often means insufficient surface dehydration—internal steam kept crust hydrated—or baking in a humid pocket without a final dry phase. Steam injection needs venting later for crackly crust.",
  "sections": [
    {
      "heading": "Steam too long",
      "paragraphs": [
        "If the loaf stays in a sealed humid environment for the entire bake, browning and crisping stall. Vent Dutch ovens; remove lids partway through according to your formula’s style."
      ]
    },
    {
      "heading": "Oven temperature",
      "paragraphs": [
        "Very low temperatures dry the surface slowly and can yield pale, soft skins, especially on egg-washed rolls."
      ]
    },
    {
      "heading": "Oil washes and butter brushing",
      "paragraphs": [
        "Fat on the surface softens perceived crunch. For a crackly baguette, skip post-bake butter; for dinner rolls, softness may be the goal."
      ]
    },
    {
      "heading": "Systems approach",
      "paragraphs": [
        "Note lid-off time and final 5 minutes of convection if available. Cross-check hydration: extremely wet doughs need longer post-steam drying."
      ]
    },
    {
      "heading": "Finish dry",
      "paragraphs": [
        "Last 5–10 minutes without steam, optionally convection, drives off surface moisture for caramelization. Internal temp should already be near done before this phase.",
        "Oil-brushed crusts stay softer—choose finish for style."
      ]
    },
    {
      "heading": "Humidity and cooling",
      "paragraphs": [
        "Cooling in sealed bags traps moisture—crust softens. Open rack cool for crisp crust breads."
      ]
    },
    {
      "heading": "Benchmark temperatures and a repeatable test protocol",
      "paragraphs": [
        "This guide on why bread crust is too soft is easier to act on when you anchor numbers instead of vibes. For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning. Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.",
        "If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.",
        "Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Bread Rises",
      "path": "/bread-science/why-bread-rises"
    },
    {
      "title": "How Yeast Works in Baking",
      "path": "/bread-science/how-yeast-works"
    }
  ],
  "faqs": [
    {
      "q": "Soft sandwich goal?",
      "a": "Butter-top buns want soft—different target than baguette."
    },
    {
      "q": "Egg wash soft?",
      "a": "Can keep surface tender; omit for crackly."
    }
  ]
};

export default function WhyBreadCrustIsTooSoft() {
  return <ScienceArticlePage spec={SPEC} />;
}
