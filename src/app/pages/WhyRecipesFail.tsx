import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-recipes-fail',
  segment: 'baking-science',
  categoryLabel: 'Baking Science',
  title: 'Why Recipes Fail',
  subtitle:
    'Most well-written recipes fail in the same handful of ways: the weights were not what the card assumed, the oven was not the temperature it claimed, the butter or eggs were a different temperature than the words implied, or a “small” swap rewrote the chemistry.',
  readTime: '10 min read',
  emoji: '❌',
  fixRecipe: {
    category: 'baking',
    problem: 'recipes-fail',
  },
  quickAnswer:
    'Recipes usually fail because execution drifted: flour measured by volume packed differently than the author’s cup, the oven ran hot or cold, butter was warmer than “softened” intended, eggs were straight from the fridge, a substitution changed water or acid, or the bake stopped on a timer instead of on a doneness cue. Fix the variable you can measure first; then change the formula.',
  intro:
    'It feels good to blame the card when a bake goes sideways. Often the card is doing its job and the kitchen quietly changed the inputs: a summer kitchen softened butter past creaming range, a dark pan sped the edges, a heaped cup of flour stole moisture from everything else. Professionals lean on scales, thermometers, and repeat runs so those silent shifts show up in the notebook. Home bakers can borrow the same habits a little at a time. This article groups the usual suspects so you can scan your last bake like a story with clues instead of a mystery with no ending.',
  sections: [
    {
      heading: 'Measurement: the flour cup lie',
      paragraphs: [
        'A cup of flour is a shape-shifter. Scooping packs more starch into the bowl than spoon-and-level, which changes spread, rise, and dryness. Leaveners and salt also punish teaspoon guesses when crystal sizes differ. A scale removes an entire class of arguments between you and the writer.',
      ],
    },
    {
      heading: 'Ingredient temperature is a character, not a detail',
      paragraphs: [
        '“Softened” butter is a narrow band: soft enough to cream, not so warm that the emulsion slumps. Cold eggs can curdle a creamed mixture on contact. Yeast water that is too hot goes quiet. These are not fussy footnotes—they are the same instructions recipes assume when they print timing for creaming or proofing.',
      ],
    },
    {
      heading: 'The oven dial is a polite fiction',
      paragraphs: [
        'Many home ovens miss their setpoint by double-digit degrees, and hot spots move the finish line on sheet pans and layer cakes. An inexpensive oven thermometer and a halfway rotation for large bakes buys honesty. Trust doneness cues—internal temperature, jiggle, color at the edge—more than a single chime.',
      ],
    },
    {
      heading: 'Substitutions rewrite more than the one line you changed',
      paragraphs: [
        'Oil is not butter, honey is not sugar, almond flour is not wheat flour. Each swap changes water, acidity, browning, and structure at once. If you must substitute, swap jobs, not names: what was the original ingredient doing for emulsion, liquid, or lift?',
      ],
    },
    {
      heading: 'Timing, mixing, pans, and the rest of the stagehands',
      paragraphs: [
        'Overbaking drives dryness; underbaking leaves collapse. Over-mixing after flour wakes gluten you might not want in a tender cake. Pan size and material change thickness and heat flow. Humidity and altitude nudge hydration and leavening. Old baking powder tests flat even when the batter looked perfect.',
      ],
      tip: 'Read the whole recipe before you preheat. Phrases like “packed” brown sugar, “sifted flour,” or “room temperature” are load-bearing.',
    },
    {
      heading: 'A compact post-mortem',
      paragraphs: [
        'When something fails, walk four questions in order: Did the weights match what the formula imagined? Were butter and eggs in the temperature band the method needs? Was the oven telling the truth? Did anything else change—pan, altitude, mixer time, brand of flour—in the same bake? Most honest answers land in the first two.',
      ],
    },
    {
      heading: 'How Fix My Recipe helps',
      paragraphs: [
        'The debugger is built to surface ratio and process patterns for the category you picked so you can rerun with one intentional change instead of five angry tweaks. Pair it with a short written note after each bake and the next batch stops feeling like superstition.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How do I know which cause hit my bake?',
      a: 'Let the symptom suggest the lever: greasy or dense cake often points to butter temperature or curdled emulsion; flat cookies to warm butter or flour load; sunk centers to underbaking or leavening imbalance; tough crumb to overmixing once flour hydrated.',
    },
    {
      q: 'Should I abandon a recipe after one failure?',
      a: 'If execution variables are uncontrolled, you have not tested the recipe yet—you tested your kitchen that day. Stabilize measurement and temperature, then retry once before rewriting the card.',
    },
  ],
  related: [
    { title: 'Why Measuring by Weight Matters', path: '/baking-science/why-measuring-by-weight-matters' },
    { title: 'Why Oven Calibration Matters', path: '/baking-science/why-oven-calibration-matters' },
    { title: 'Why Butter Temperature Matters', path: '/baking-science/why-butter-temperature-matters' },
    { title: 'Why Cakes Sink', path: '/cake-science/why-cakes-sink' },
  ],
};

export default function WhyRecipesFail() {
  return <ScienceArticlePage spec={SPEC} />;
}
