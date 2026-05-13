import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cakes-turn-out-flat",
  "segment": "cake-science",
  "categoryLabel": "Cake Science",
  "title": "Why Cakes Turn Out Flat",
  "subtitle": "When the chemical leavening has lost its punch, when the egg foam collapses, or when the batter is just too heavy for the gas inside it, the cake never gets the height it should.",
  "readTime": "7 min read",
  "emoji": "🥞",
  "fixRecipe": {
    "category": "cake",
    "problem": "too-dense"
  },
  "quickAnswer": "A flat cake almost always means there was not enough air or gas trapped inside the batter—from under-creaming the butter and sugar, under-whipping the eggs, dead (expired) baking powder, or an oven so cool that the gas had time to escape before the structure could set around it. Check your creaming time, test that the baking powder is still alive, and verify that the oven is actually at the temperature you set.",
  "intro": "A cake’s height is just trapped gas held in a setting matrix. Anything that reduces the amount of gas, lets it escape too early, or fails to set the structure in time produces a short cake. The oven spring (the rise that happens once the cake hits the oven) depends on the gas inside the batter expanding while the batter’s viscosity is still dropping (it gets thinner before it sets). That window typically runs from room temperature up to the point where the structure firms—egg proteins start meaningfully setting around 140°F (60°C), and starch firming happens much later as the temperature climbs higher. If your oven is running 25°F cooler than it should be, that window stays open longer than designed, and your gas bubbles coalesce and escape instead of getting trapped in the crumb.",
  "sections": [
    {
      "heading": "Mechanical leavening",
      "paragraphs": [
        "Creaming butter and sugar together until light and fluffy is not a decorative step—it is a real source of volume. Same for whipping eggs into a foam. Both physically beat air bubbles into the batter, and those bubbles are the seeds that the chemical leavening later expands. Skip or shortchange creaming and you have less to work with."
      ]
    },
    {
      "heading": "Chemical leavening",
      "paragraphs": [
        "Old baking powder loses its punch—it really does have a shelf life. Baking soda needs an acidic ingredient in the recipe to react with; if the recipe has been tweaked away from its original acid balance, the soda either fizzes too fast or barely fizzes at all. And a heavy batter that sits on the counter for half an hour before going into the oven loses most of the initial carbon dioxide burst from double-acting baking powder before it ever sees heat."
      ]
    },
    {
      "heading": "Thermal",
      "paragraphs": [
        "A cool oven keeps the batter liquid for longer, which lets the gas bubbles meet up, merge into bigger bubbles, rise to the surface, and pop—so they escape instead of being locked into the crumb. A simple thermometer on the rack tells you the truth about whether your dial reading and your actual air temperature agree."
      ]
    },
    {
      "heading": "Tooling",
      "paragraphs": [
        "Fix My Recipe compares your leavening-friendly ratios to typical ranges and gently nudges you toward one change at a time per bake, so you can actually tell which lever moved the result."
      ]
    },
    {
      "heading": "Leavening chemistry and clock time",
      "paragraphs": [
        "Most baking powder sold in stores is double-acting—it releases some carbon dioxide when it gets wet and a second batch when it gets hot. If you let the mixed batter sit on the counter for 30 minutes, the first reaction has mostly exhausted itself before the cake hits the oven. Baking soda needs an acidic partner (buttermilk, yogurt, vinegar, lemon juice, brown sugar); if the pH is wrong, the carbon dioxide release is either weak or comes out in one fast, uncontrollable burst. Creaming aerates mechanically, building tiny bubble nuclei in the batter; an under-creamed butter has fewer of those nucleation sites for the gas to expand into during oven spring, which especially hurts recipes that rely only lightly on chemical leavening."
      ]
    },
    {
      "heading": "Altitude and temperature",
      "paragraphs": [
        "At elevation, water boils at a lower temperature and evaporation happens faster, so your rises evaporate the leavening gases faster than they would at sea level. You may need a slightly higher bake temperature or strategies to retain more moisture in the batter. Document your oven’s actual temperature with a separate thermometer; “350°F” on the dial is often 330°F or 370°F in reality, and that difference shows up as a flat cake."
      ]
    },
    {
      "heading": "What to try on the next bake",
      "paragraphs": [
        "Most layer-cake headaches get clearer when you treat the oven and the cool-down as part of the recipe, not background noise. Many butter cakes finish somewhere near 200–210°F (93–99°C) in the center, but chocolate and very wet batters can lie to a probe—pair numbers with spring-back and a skewer, and check an inch above the pan floor on thick layers so you do not get a dry top hiding a damp belt.",
        "Change one variable at a time—rack height, pan color, convection on or off, or the temperature curve—and photograph the crumb after the cake is fully cool. SenseiFood’s Fix My Recipe cake mode still helps when you suspect sugar, fat, or flour ratios have drifted from what the writer assumed."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cakes Rise",
      "path": "/cake-science/why-cakes-rise"
    },
    {
      "title": "How to Debug Cake Problems",
      "path": "/cake-science/how-to-debug-cake-problems"
    },
    {
      "title": "Why Cakes Are Dense",
      "path": "/cake-science/why-cakes-are-dense"
    }
  ],
  "faqs": [
    {
      "q": "Does overmixing make a cake flat?",
      "a": "Yes, it can. Overmixing can deflate a foam, especially in egg-leavened cakes like chiffons and sponges, and it can also build up excess gluten that traps air in tough, dense strands instead of light pockets. Mix only until combined unless the recipe specifically wants strong structure."
    },
    {
      "q": "How can I tell if my baking powder is still good?",
      "a": "Stir about a teaspoon of baking powder into a half cup of hot water. If it bubbles vigorously right away, it is still active. If you get only a weak fizz or nothing at all, it is time to replace the can."
    }
  ]
};

export default function WhyCakesTurnOutFlat() {
  return <ScienceArticlePage spec={SPEC} />;
}
