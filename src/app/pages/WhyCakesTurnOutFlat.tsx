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
      "heading": "Benchmark temperatures and a simple repeatable test",
      "paragraphs": [
        "Butter cakes usually finish between 200–210°F (93–99°C) at the center. Chocolate and very moist formulas can fool a thermometer, so pair the probe with a spring-back test (press the center gently; if it springs back, it is set) and a clean skewer test. Edge-to-center gradients matter: a “done” reading at the top center can still leave wet bands near the floor of the pan, so check about an inch above the bottom on thick layers. Convection and dark pans both speed up heating, so if your edges race ahead, lower the set temperature by about 25°F (14°C) and extend the time. Let big layers cool to below about 100°F (38°C) internally before slicing.",
        "Write down your kitchen’s ambient temperature, the oven set point, and the probe reading. Change one input per attempt—creaming time, leavening freshness, oven temperature, pan size—and photograph the cake’s rise side-by-side. SenseiFood’s Fix My Recipe debugger pairs those observations with ratio checks for your category so the next bake is a measured step, not a guess.",
        "If you cook in Celsius, write a small cheat sheet and tape it inside a cabinet: 200°F is about 93°C (the cake and bread finish zone), 350°F is about 177°C (a common cake and cookie air temperature), and 212°F is 100°C (sea-level water boiling). Many ovens keep drifting 10–20°F after they beep done preheating, so an extra few minutes of preheat saves a lot of guessing."
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
