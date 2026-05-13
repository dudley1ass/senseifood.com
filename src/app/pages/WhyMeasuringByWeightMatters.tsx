import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-measuring-by-weight-matters",
  "segment": "baking-science",
  "categoryLabel": "Baking Science",
  "title": "Why Measuring by Weight Matters",
  "subtitle": "Volume cups encode air, humidity, and packing error into your formula while grams keep ratios honest.",
  "readTime": "8 min read",
  "emoji": "⚖️",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Weight removes packing variance for flour and sugar, makes hydration percentages meaningful, and lets you scale batches without drift. A five percent flour error changes spread, rise, and set in cookies and cakes more than most home ovens drift in a week.",
  "intro": "Baking is ratio chemistry executed through a timeline. Cups are a lossy compression algorithm for those ratios: the same scoop can differ ten percent by pack, humidity, and sifter habits. This article explains why flour is the worst offender, how water and dairy also benefit from grams, and how digital scales pay back on the first bag of chocolate you do not ruin. Scale discipline extends beyond flour: log water temperature for yeasted doughs and mass of sticky ingredients like honey and molasses that cups trap. When teaching, photograph wrong versus right cup packs for the same mass to build intuition. If you split batches, weigh dividers because eyeballing destroys proof timing parity. For salt across brands, record grain size because volume teaspoons lie even when mass is correct. SenseiFood tools assume honest grams; the earlier you adopt scales, the faster debugging articles pay off in your own bakes. Grams turn baking from a game of telephone into a straight line: the flour that arrived in the bowl is the flour the formula assumed. That matters because small volume errors stack across eggs, cocoa, and leaveners until the crumb tells a story you did not mean to write. A scale is less about precision theater and more about removing a whole class of silent variables.",
  "sections": [
    {
      "heading": "Flour density and structural ratios",
      "paragraphs": [
        "Protein networks, spread, and rise all key off flour mass relative to fat, sugar, and water. Stirred versus spooned versus dipped cups are different recipes wearing the same title. Whole grain and humidity change cup density seasonally."
      ]
    },
    {
      "heading": "Leavening, salt, and small-but-mighty ingredients",
      "paragraphs": [
        "Baking powder and soda errors are gram-small but chemistry-large. Salt mis-measurement is a flavor and fermentation lever, not a background pinch. Yeast scales nonlinearly with temperature; grams keep doubling sane."
      ]
    },
    {
      "heading": "Scaling, collaboration, and debugging",
      "paragraphs": [
        "Scaling by volume multiplies error; scaling by weight preserves proportions. Sharing recipes in grams is the closest thing to open-source baking. Fix My Recipe and Sensei tools assume grams for meaningful distance metrics."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Enter weights once and compare to reference bands instead of guessing which cup method the author used. Photograph failures with written gram log; patterns emerge quickly."
      ]
    },
    {
      "heading": "Why the scale is a storyteller, not a gadget catalog",
      "paragraphs": [
        "Volume cups turn baking into a game of telephone: a packed cup of flour is a different character than a sifted one, and the crumb knows the difference. Grams keep the cast consistent so when something goes wrong, you are arguing about process and temperature, not about whether the flour was shy. When you compare two batches, the plot is “same weights, one change”—not a list of model numbers. A short note on humidity or how long you creamed butter is enough for future you to recognize the twist."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Do I still need cups?",
      "a": "Use whatever you like for liquids; many bakers weigh water too for one scale workflow."
    },
    {
      "q": "What precision?",
      "a": "One-gram resolution is enough for most home baking; tenth-gram for some coffee and hydrocolloids."
    }
  ],
  "related": [
    {
      "title": "Fix Recipes One Variable at a Time",
      "path": "/baking-science/fix-recipes-one-variable-at-a-time"
    },
    {
      "title": "How to Use Fix My Recipe",
      "path": "/baking-science/how-to-use-fix-my-recipe"
    }
  ]
};

export default function WhyMeasuringByWeightMatters() {
  return <ScienceArticlePage spec={SPEC} />;
}
