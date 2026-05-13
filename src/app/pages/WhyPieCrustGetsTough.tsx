import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-pie-crust-gets-tough',
  segment: 'pie-science',
  categoryLabel: 'Pie Science',
  title: 'Why Pie Crust Gets Tough',
  subtitle:
    'Tough crust is almost always too much gluten: too much mixing, too much water, too warm a fat, or too many passes with the pin. Tender pastry is the art of stopping early.',
  readTime: '7 min read',
  emoji: '💪',
  fixRecipe: { category: 'pie', problem: 'tough-crust' },
  quickAnswer:
    'Gluten networks love to turn elastic when flour meets water and then gets worked. For pie, you want just enough structure to hold shape—mix until the dough barely holds, keep butter cold, add water by the spoon, rest before rolling, and avoid rerolling scraps over and over.',
  intro:
    'Bread wants strong gluten; pie crust does not. When the shell chews like a bagel, the dough was stressed: mixed to smoothness, hydrated past necessity, or rolled warm until the fat disappeared into the flour. The good news is that toughness is behavior-driven—you can reset habits faster than you can change humidity.',
  sections: [
    {
      heading: 'What changed between tender and tire rubber',
      paragraphs: [
        'Glutenin and gliadin link up in water and form sheets that get stronger with motion. Bread kneading aligns those sheets for chew; pie mixing should stop while the matrix is still patchy and interrupted by fat.',
      ],
    },
    {
      heading: 'The usual suspects',
      paragraphs: [
        'Most tough crusts trace to one or two stacked mistakes.',
      ],
      bullets: [
        {
          title: 'Over-mixing',
          text: 'Food processors are fast—pulse, do not cruise. Visible butter and a shaggy look are the target, not a smooth ball.',
        },
        {
          title: 'Too much water',
          text: 'Extra water activates more gluten and often leads to sticky dough, which tempts you to flour the bench heavily—another gluten boost.',
        },
        {
          title: 'Warm or fully worked-in fat',
          text: 'When butter smears, you lose the shortening effect between flour particles and the flake-stopping chill that slows gluten.',
        },
        {
          title: 'Aggressive rolling',
          text: 'Every pass aligns proteins. Roll directionally, quarter-turn, and chill if the dough fights you.',
        },
      ],
    },
    {
      heading: 'Tender habits in order',
      paragraphs: [
        'Cold fat, minimal water, short mix, rest, gentle roll, chill the fitted shell. If you need insurance on the bottom, partial blind bake plus a thin egg seal before wet filling buys crispness without extra muscle in the dough.',
      ],
      tip: 'Re-rolling trimmages over and over stacks gluten in those pieces—use them for lattice strips or crackers, not another full bottom.',
    },
  ],
  faqs: [
    {
      q: 'Does vinegar or vodka help tenderness?',
      a: 'They can limit gluten a bit and make the dough easier to roll, but they do not fix a dough that was overworked. Start with cold fat and a light hand first.',
    },
    {
      q: 'Is all-butter harder than shortening?',
      a: 'Butter is softer at room temperature, so warm kitchens show up faster. Shortening is more forgiving, which is why blends exist—see the butter versus shortening article.',
    },
  ],
  related: [
    { title: 'Why Pie Crust Is Flaky', path: '/pie-science/why-pie-crust-is-flaky' },
    { title: 'Butter vs Shortening in Crust', path: '/pie-science/butter-vs-shortening-in-crust' },
    { title: 'Why Pie Crust Shrinks', path: '/pie-science/why-pie-crust-shrinks' },
  ],
};

export default function WhyPieCrustGetsTough() {
  return <ScienceArticlePage spec={SPEC} />;
}
