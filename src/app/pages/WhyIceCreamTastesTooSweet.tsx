import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-ice-cream-tastes-too-sweet',
  segment: 'ice-cream-science',
  categoryLabel: 'Ice Cream Science',
  title: 'Why Ice Cream Tastes Too Sweet',
  subtitle:
    'Cold turns the volume down on aroma faster than it turns down plain sugar, so the same scoop can feel bluntly sweet even when the pot tasted perfect.',
  readTime: '7 min read',
  emoji: '🍬',
  fixRecipe: {
    category: 'iceCream',
    problem: 'general',
  },
  quickAnswer:
    'Blunt sweetness usually means there is not enough else in the bite—salt, cocoa, coffee, dairy depth, or fruit—to share the stage once the cold hushes the smells. Slashing sugar alone often makes the pint icy; better fixes are contrast, a warmer tasting spoon, or swapping part of the sucrose for glucose so sweetness reads softer without wrecking freeze.',
  intro:
    'You are not imagining it: a base that felt balanced warm can read sugary frozen because your nose gets less help at freezer temperatures. Vanilla, spice, and roast notes need to be a touch louder in the pot than instinct says. Salt is not cheating—it is the knob that lets sugar feel rounded. When you adjust, taste cool, not just hot, and remember that sugar is also holding texture; bring a friend like corn syrup along if you cut sucrose.',
  sections: [
    {
      heading: 'Cold changes the whole mix tape',
      paragraphs: [
        'Warm tastings are still useful for catching scorch, but they under-report how loud sugar will be on a frozen spoon. Chill a sample in the fridge before you lock the formula.',
      ],
    },
    {
      heading: 'Contrast beats brute-force sugar cuts',
      paragraphs: [
        'Cocoa, espresso, toasted nuts, caramel, and a pinch of salt all give sucrose something to lean on. Vanilla quality matters more than vanilla volume when the goal is aroma, not extra sweetness.',
      ],
    },
    {
      heading: 'Listen to the whole bite, not only the first second',
      paragraphs: [
        'Sweetness can shout early and calm down as the scoop melts and aromas catch up. Let the bite sit on the tongue before you decide.',
      ],
      tip: 'Judge final sweetness after an overnight harden—fresh churn reads softer because of warmth and air.',
    },
    {
      heading: 'Fruit acids need a gentle hand',
      paragraphs: [
        'Acid can balance sugar on paper but can also threaten the dairy emulsion if added hot and fast. Build fruit in stages on small tests.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Why does store ice cream feel less sweet?',
      a: 'Different air, solids, emulsifiers, and serving temperature all move the needle. Compare at the same firmness and temperature for a fair fight.',
    },
    {
      q: 'If I cut sugar, will it get icy?',
      a: 'Often yes—sugar keeps water from freezing into one hard block. Replace with a thought-out mix of glucose or dextrose, or accept a firmer scoop.',
    },
  ],
  related: [
    { title: 'Why Ice Cream Lacks Flavor', path: '/ice-cream-science/why-ice-cream-lacks-flavor' },
    { title: 'Why Ice Cream Is Creamy', path: '/ice-cream-science/why-ice-cream-is-creamy' },
    { title: 'Why Ice Cream Gets Icy', path: '/ice-cream-science/why-ice-cream-gets-icy' },
  ],
};

export default function WhyIceCreamTastesTooSweet() {
  return <ScienceArticlePage spec={SPEC} />;
}
