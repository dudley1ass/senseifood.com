import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-family-dinners-matter',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Family Dinners Matter',
  subtitle:
    'Shared meals teach pacing, vocabulary, and food variety—and they are one of the few daily screens-off anchors left in many homes.',
  readTime: '6 min read',
  emoji: '👪',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Aim for frequency over fantasy: four calm fifteen-minute sit-downs beat one stressed banquet. Phones in a bowl, chairs pulled in, conversation optional but present.',
  intro:
    'Dinner is not only nutrients; it is modeling. Kids who see adults eat vegetables usually try more eventually. Adults who slow down often notice fullness sooner. The table is a small social technology.',
  sections: [
    {
      heading: 'What kids pick up',
      paragraphs: [
        'Manners, language, and exposure to new foods all ride along with the casserole. No lecture required—curiosity copies calm.',
      ],
    },
    {
      heading: 'When schedules fight back',
      paragraphs: [
        'Late shifts make “dinner” a moving target—shared breakfast or weekend lunch counts the same if the rhythm is real.',
      ],
    },
  ],
  faqs: [
    { q: 'Forced conversation?', a: 'Silence is fine; pressure ruins the anchor. Keep the bar humane.' },
    { q: 'Teens disappear?', a: 'Even occasional overlap preserves connection—persist gently without turning meals into trials.' },
  ],
  related: [
    { title: 'How to Build Balanced Family Meals', path: '/nutrition-science/how-to-build-balanced-family-meals' },
    { title: 'Nutrition for Busy Families', path: '/nutrition-science/nutrition-for-busy-families' },
  ],
};

export default function WhyFamilyDinnersMatter() {
  return <ScienceArticlePage spec={SPEC} />;
}
