import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-smells-yeasty",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Smells Yeasty (Fermentation Imbalance)",
  "subtitle": "Fast ferment, warm bulk, and high yeast fraction spike esters before flavor matures.",
  "readTime": "8 min read",
  "level": "Fermentation time",
  "emoji": "🫧",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Yeasty aroma usually means fermentation ran hot or short—esters dominate before organic acids and alcohols mellow. Slow cold proof, less yeast, and full bake color fix the profile.",
  "intro": "Yeast is a microorganism, not a spice—you taste its chemistry. In a rushed ferment, the volatile top notes (often described as yeasty, beery, or banana-like depending on strain and temperature) do not have time to integrate with the slower acids and alcohols that round flavor. Warm bulk fermentation accelerates CO₂ production and pushes ester formation while gluten may still be catching up, which also changes how aromas volatilize in the oven. A pale crust finishes the story: without adequate Maillard depth, green, fermenty aldehydes survive in the crumb aroma profile. This article connects time, temperature, yeast quantity, and bake color so you can steer dough away from “fresh foam” smell toward balanced bread.",
  "sections": [
    {
      "heading": "Temperature control in bulk and proof",
      "paragraphs": [
        "Microbial activity is highly temperature sensitive: small kitchen swings can change fermentation pace dramatically, especially in small dough masses that equilibrate quickly to room air. Warm corners near ovens, laptops, or sunlit counters create a fast lane where yeast outruns bacterial acid development.",
        "Track dough temperature, not just room temperature. A few degrees in the mass changes the balance of congeners you will smell tomorrow morning. When in doubt, slow down: cooler bulk or a short cold retardation gives complexity time to catch up with gas production."
      ],
      "bullets": [
        {
          "title": "Yeast quantity",
          "text": "High inoculation shortens timeline but can leave unmistakable yeast character if flavor development does not lengthen elsewhere."
        },
        {
          "title": "Hydration and sugar",
          "text": "Sugars feed rapid early fermentation; enriched doughs can smell sweeter and more fermenty if timing is not adjusted."
        }
      ]
    },
    {
      "heading": "Sequence: preferment vs straight dough",
      "paragraphs": [
        "Preferments (poolish, biga, levain builds) shift flavor formation earlier in the process so the final proof can be shorter without smelling like a lab culture. Even a short autolyse can help hydration uniformity so yeast does not create localized hot spots of activity.",
        "Straight doughs are not wrong—they simply need either cooler timelines or smaller yeast percentages if your kitchen runs warm. If you keep seeing yeasty loaves in summer, preferment or cold bulk is often the first lever, not a different brand of flour."
      ]
    },
    {
      "heading": "Holding shaped dough",
      "paragraphs": [
        "Over-proofed dough can smell strongly yeasty after collapse because alcohols accumulate while structure fails—your nose notices the volatiles even if the loaf looks merely “relaxed.” Under-mixed dough can also ferment unevenly, with pockets that spike esters.",
        "Final proof should end when the dough is aerated but still elastic; finger-poke tests are guides, not laws—learn your flour’s tell."
      ]
    },
    {
      "heading": "Bake color as flavor finish",
      "paragraphs": [
        "Crust color is not vanity. Adequate Maillard and caramelization produce aromatics that mask or transform aldehydic green notes from the crumb. Pale bread often smells more yeasty even when fermentation was acceptable because the crust did not complete the aromatic stack.",
        "Steam early for expansion, then ensure drying and browning phases match your loaf size—large miches need time for inner moisture to stop steaming the crust soggy and pale."
      ],
      "tip": "If aroma improves dramatically on toast, suspect incomplete crust finish more than bad yeast."
    }
  ],
  "faqs": [
    {
      "q": "Is yeasty smell a sign of too much yeast?",
      "a": "Often it is too much yeast for the time allowed, or too warm—same grams behave differently at 68°F bulk versus 78°F. Reduce yeast or lengthen cold time before changing brands."
    },
    {
      "q": "Does sourdough avoid yeasty smell?",
      "a": "Not automatically. Young or warm levain builds can still smell beery; maturity and acidity balance those notes. Commercial yeast in hybrid doughs still needs time discipline."
    },
    {
      "q": "Can stale flour cause this?",
      "a": "Weak gluten from aged flour can change proof timing—dough may seem sluggish so you warm it, then yeast races. Always connect sensory changes to process logs."
    }
  ],
  "related": [
    {
      "title": "Why Dough Rises Too Fast",
      "path": "/bread-science/why-dough-rises-too-fast"
    },
    {
      "title": "Why Bread Is Pale",
      "path": "/bread-science/why-bread-is-pale"
    },
    {
      "title": "Why Bread Rises",
      "path": "/bread-science/why-bread-rises"
    },
    {
      "title": "How Yeast Works",
      "path": "/bread-science/how-yeast-works"
    }
  ]
};

export default function WhyBreadSmellsYeasty() {
  return <ScienceArticlePage spec={SPEC} />;
}
