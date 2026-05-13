import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-dough-wont-hold-shape",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Dough Won't Hold Shape",
  "subtitle": "A loaf that puddles usually needs more gluten strength, a tighter proof window, or better surface tension—not a shame spiral about yeast brands.",
  "readTime": "8 min read",
  "emoji": "🫓",
  "fixRecipe": {
    "category": "bread",
    "problem": "dense"
  },
  "quickAnswer": "Slack dough spreads when the gluten net cannot hold the hydration you chose, when proof sailed past the peak, or when shaping never created real surface tension. Add folds, trim hydration a few percent, proof to the right jiggle, and finish with confident tensioning—not timid patting.",
  "intro": "Bread shape is stored elastic energy: if the gluten jacket is loose, gravity wins and you get a puddle. Over-hydration beyond your flour’s comfort zone, over-proofing that relaxes structure, or under-shaping that skips tension all read as \"won't hold shape\" in the banneton. Bench rest around comfortable room temperature lets gluten relax without collapse—too cold and it springs forever, too warm and it flows. This is alignment work: time, temperature, and strength have to agree.",
  "sections": [
    {
      "heading": "Hydration beyond flour strength",
      "paragraphs": [
        "Internet hydration brags are not universal. Your flour may not support 78% for a tall batard unless you have the folds, the fermentation control, and the shaping practice that recipe assumed—sometimes the author did not say the quiet part out loud."
      ]
    },
    {
      "heading": "Proofing past the peak",
      "paragraphs": [
        "Over-proofed dough relaxes; the skin you created disintegrates within minutes. Poke tests and volume cues beat the clock on the recipe card because your kitchen temperature is not the author's kitchen temperature."
      ]
    },
    {
      "heading": "Shaping skills",
      "paragraphs": [
        "Tension pulls align outer gluten strands so the loaf holds its spring in the oven. Under-shaped loaves flatten. Practice on a lower hydration dough if high hydration feels like wrestling an octopus.",
      ],
      "tip": "Cold final proof (retard) firms enriched dough for easier scoring and less spread on the flip."
    },
    {
      "heading": "Structured experiments",
      "paragraphs": [
        "Change hydration or proof time—not both in the same batch. Fix My Recipe can show if you already live at the extreme edge of strength bands for your style."
      ]
    },
    {
      "heading": "Strength building",
      "paragraphs": [
        "Letter folds during bulk add structure without tearing. Final shaping should create a skin that seals expansion. Banneton flour supports wet dough; too little sticks, too much lets the seam skate."
      ]
    },
    {
      "heading": "Timing",
      "paragraphs": [
        "Shape after strength exists: under-developed dough tears when you tension it, which feels like failure but is really \"not yet.\""
      ]
    },
    {
      "heading": "Hydration, proof, and heat in the same language",
      "paragraphs": [
        "This guide on why dough won't hold shape gets calmer when you connect slack dough to proof state and real temperatures, not vibes. Shaping works best when bulk fermentation actually happened—cold, under-proofed dough can be springy; over-proofed dough goes puddle. Finished lean loaves still often finish near 200–208°F (93–97°C) internally even when shaping felt dramatic.",
        "Celsius anchors help: mid-20s °C bulk is common for straight doughs; fridge retard is ~3–4°C depending on your drawer. Altitude changes crust behavior and evaporation; it does not remove the need for surface tension in shaping.",
        "Humidity and flour absorption change how the same percent hydration behaves in your hands. If the loaf spreads, write dough temperature at shaping and proof time—two numbers that prevent mythology."
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
      "q": "High hydration ciabatta?",
      "a": "Expected slack—different shaping tools."
    },
    {
      "q": "Pizza dough floppy?",
      "a": "Warm dough and gluten relaxation—cold re-tighten."
    }
  ]
};

export default function WhyDoughWontHoldShape() {
  return <ScienceArticlePage spec={SPEC} />;
}
