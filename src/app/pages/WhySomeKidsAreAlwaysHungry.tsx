import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-some-kids-are-always-hungry',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Some Kids Are "Always Hungry"',
  subtitle:
    'Growth spurts, sleep debt, very active days, and ultraprocessed snacks that vanish before fullness all mimic endless hunger—context matters more than labels.',
  readTime: '6 min read',
  emoji: '🍎',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Offer structured meals plus planned snacks with protein and fiber. If thirst, sleep, or growth concerns are off, check in with your pediatrician.',
  intro:
    '“Mom, I am starving” five minutes after crackers is often fast-digesting food plus a busy body—not a broken appetite meter. Patterns beat panic.',
  sections: [
    {
      heading: 'Common drivers',
      paragraphs: [
        'Sports seasons, adolescent growth, short nights, and skipping breakfast all raise honest hunger. Liquids and crunchy air-filled snacks can also blur cues.',
      ],
    },
    {
      heading: 'Snack design that satisfies',
      paragraphs: [
        'Apple plus peanut butter, cheese and crackers, yogurt with granola, or a turkey roll-up last longer than chips alone.',
      ],
    },
  ],
  faqs: [
    { q: 'Constant hunger with weight loss?', a: 'Medical causes belong on a clinician’s list—do not wait on internet lists.' },
    { q: 'Emotional eating?', a: 'Sometimes hunger words mean boredom or worry—naming feelings still pairs with regular fuel.' },
  ],
  related: [
    { title: 'Why Kids Love Processed Foods', path: '/nutrition-science/why-kids-love-processed-foods' },
    { title: 'Why Breakfast Affects School Performance', path: '/nutrition-science/why-breakfast-affects-school-performance' },
  ],
};

export default function WhySomeKidsAreAlwaysHungry() {
  return <ScienceArticlePage spec={SPEC} />;
}
