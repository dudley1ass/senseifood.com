import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-smells-yeasty",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Smells Yeasty",
  "subtitle": "A fast, warm rise with a lot of yeast pumps out beery, fruity aroma compounds before the slower, mellower flavors have time to catch up.",
  "readTime": "8 min read",
  "level": "Fermentation time",
  "emoji": "🫧",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "A loaf that smells aggressively yeasty almost always means the fermentation ran too hot or too short, so the fast, fruity aroma compounds (chemists call these esters) ended up dominating the flavor before the slower organic acids and alcohols got a chance to mellow everything out. Slow the rise down with a cold proof in the fridge, use less yeast in the recipe, and bake the crust to a fuller color so the cooked aromas take over from the raw fermentation aromas.",
  "intro": "Yeast is a living microorganism, not a flavorless ingredient like flour or salt—you are literally tasting its chemistry. In a rushed fermentation, the volatile top-notes (those bright, fruity, beery, sometimes banana-like aromas, depending on the yeast strain and temperature) never get the time they need to integrate with the slower-forming acids and alcohols that round out flavor. Warm bulk fermentation (the first rise after mixing, where the bulk of the dough develops both gas and flavor) speeds up carbon dioxide production and pushes the yeast to make more of those quick fruity esters even while the gluten is still catching up. That mismatch also changes how aromas evaporate during baking. A pale crust finishes the unfortunate picture: without enough Maillard browning (the cooked, toasted reactions between sugars and amino acids), the green, raw-smelling aldehydes from the crumb stick around in the finished loaf instead of being overwritten by deep crust aromas. This article lines up time, temperature, how much yeast you used, and how brown the crust gets, so you can steer a loaf away from “fresh foam” smell toward balanced, bready aroma.",
  "sections": [
    {
      "heading": "Temperature control in bulk and proof",
      "paragraphs": [
        "Microbes are extremely temperature sensitive—even small swings in your kitchen can change how fast the dough is fermenting, especially in a small batch where the dough takes on the air temperature quickly. Warm corners near a running oven, a sunny window, or even a laptop create little fast lanes where the yeast races ahead of the slower bacteria that build acid and depth. The number you actually want to track is the temperature of the dough itself, not just the room. A few degrees inside the dough mass changes the balance of aroma compounds (bakers and brewers call these congeners) that you will smell the next morning. When in doubt, slow down: a cooler bulk rise, or a short stretch in the fridge during the final proof, gives the complex flavors time to catch up with all that gas production."
      ],
      "bullets": [
        {
          "title": "Yeast quantity",
          "text": "Using a lot of yeast shortens your schedule, but it can leave that unmistakable yeasty character if you do not stretch out flavor development somewhere else—like using a preferment or a long cold rest."
        },
        {
          "title": "Hydration and sugar",
          "text": "Sugars in the dough feed a fast early fermentation; enriched doughs (with milk, butter, sugar) can smell sweeter and noticeably more fermenty if you do not give them extra time to mature."
        }
      ]
    },
    {
      "heading": "Preferment versus straight dough",
      "paragraphs": [
        "A preferment is a small portion of flour, water, and a tiny amount of yeast that you mix the day before and let sit for many hours. Poolish (a wet, batter-like preferment), biga (a stiffer Italian preferment), and a sourdough levain build (a portion of active sourdough starter that you have fed and ripened on a timer) all do the same job—they shift flavor formation earlier in the process so the final proof can be shorter without smelling like a lab culture. Even a short autolyse (just mixing flour and water and letting it rest before adding salt and yeast) helps the water spread evenly through the flour, so the yeast does not create localized hot spots of activity. Straight doughs (where everything is mixed at once with no preferment) are not wrong—they simply need cooler timelines or smaller amounts of yeast if your kitchen runs warm. If you keep ending up with yeasty loaves in the summer, switching to a preferment or doing a cold bulk rise is usually a better first move than swapping flour brands."
      ]
    },
    {
      "heading": "Holding shaped dough",
      "paragraphs": [
        "An over-proofed loaf (one that fermented too long after shaping) often smells very yeasty after it collapses, because alcohols and esters keep piling up while the structure quietly fails. Your nose notices those volatiles even when the dough looks merely “relaxed” to the eye. Under-mixed dough can also ferment unevenly, with pockets of dough that go faster than others and spike those fruity-yeasty notes locally. The final proof should end when the dough is aerated but still has some spring left—the classic finger-poke test (poke the dough gently; if it springs back slowly and partway, it is ready) is a guide, not a law. Learn what your particular flour and recipe look and feel like at that point."
      ]
    },
    {
      "heading": "Crust color is part of the flavor",
      "paragraphs": [
        "Crust color is not just vanity. Proper Maillard and caramelization on the surface produce aromas that either mask or transform the raw, green notes from the crumb. A pale loaf will smell more yeasty than a properly browned loaf even when the fermentation was perfectly fine, simply because the crust never finished building its share of the aroma. Steam early in the bake for expansion, and then make sure the drying and browning phase matches the size of your loaf—a big country miche needs more time for the inner moisture to stop steaming the outside and finally let the crust crisp and brown."
      ],
      "tip": "If your loaf smells dramatically better once you toast a slice, the problem is almost certainly an underdone crust, not bad yeast."
    }
  ],
  "faqs": [
    {
      "q": "Does a yeasty smell mean I used too much yeast?",
      "a": "Often it means too much yeast for the time you gave the dough, or too warm a fermentation—the same gram of yeast behaves very differently at 68°F bulk versus 78°F. Try reducing the yeast or letting the dough spend more time in the fridge before you change brands or recipes."
    },
    {
      "q": "Does sourdough automatically avoid the yeasty smell?",
      "a": "Not automatically. A young or warm levain build (where the starter has not had time to ripen and balance acid with alcohol) can still smell beery and yeasty. Maturity and acidity are what mellow those notes. And if you are doing a hybrid dough with commercial yeast plus a starter, you still need to discipline the timing."
    },
    {
      "q": "Can old or stale flour cause a yeasty smell?",
      "a": "Indirectly, yes. Weak gluten from aged flour can change how the dough rises—it may feel sluggish, so you instinctively move it to a warmer spot, and then the yeast races ahead. Tie any sensory change back to your actual process log: temperatures, times, and weights, rather than guessing."
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
