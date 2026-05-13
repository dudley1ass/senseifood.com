import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'how-to-eat-better-without-giving-up-comfort-food',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'How to Eat Better Without Giving Up Comfort Food',
  subtitle:
    'Satisfaction is not the enemy of health—deprivation is. Pair favorites with protein and plants, adjust portions, and keep joy on the calendar so plans survive Friday.',
  readTime: '6 min read',
  emoji: '🍜',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Add instead of only subtract: salad with pizza night, fruit with ice cream, beans in chili. Planned treats beat random restriction that rebounds.',
  intro:
    'Comfort food carries memory, culture, and stress relief. Erasing it trains brains to binge later. Building meals that include comfort plus steadier sides is how kitchens stay kind long term.',
  sections: [
    {
      heading: 'The “add” frame',
      paragraphs: [
        'Keep the mac and cheese; add broccoli on the side. Keep the burger; pick a satisfying salad or slaw. Satisfaction plus fiber beats grim bowls you abandon.',
      ],
    },
    {
      heading: 'Portions without shame',
      paragraphs: [
        'Split entrees, box half automatically, or serve family style so seconds are a choice, not autopilot.',
      ],
    },
  ],
  faqs: [
    { q: 'Is “cheat day” bad?', a: 'All-or-nothing language often backfires; predictable joy beats chaotic restriction cycles.' },
    { q: 'Emotional eating?', a: 'Name feelings and still feed the body—skills overlap; consider counseling if food is the only tool.' },
  ],
  related: [
    { title: 'Why Late-Night Snacking Happens', path: '/nutrition-science/why-late-night-snacking-happens' },
    { title: 'Why Healthy Eating Feels Hard', path: '/nutrition-science/why-healthy-eating-feels-hard' },
  ],
};

export default function HowToEatBetterWithoutGivingUpComfortFood() {
  return <ScienceArticlePage spec={SPEC} />;
}
