import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'how-to-introduce-new-foods-to-kids',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'How to Introduce New Foods to Kids',
  subtitle:
    'Repeated calm exposure beats bribery: tiny tastes, neutral words, and the same food showing up on different days teach safety faster than lectures.',
  readTime: '6 min read',
  emoji: '✨',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Serve a pea-sized taste beside sure foods. Let them touch, sniff, or lick without pressure. Ten to twenty gentle exposures is a normal learning curve.',
  intro:
    'Novelty is scary on purpose—young humans are built to avoid unknown plants. Your job is to be the calm tour guide: “This is cucumber; it is cool and crunchy,” not the food police.',
  sections: [
    {
      heading: 'The low-pressure ladder',
      paragraphs: [
        'Seeing food on the table counts. Helping cook counts. A single bite counts. Progress is nonlinear—Tuesday’s no can be May’s yes.',
      ],
    },
    {
      heading: 'What to skip',
      paragraphs: [
        'Cleaning the plate for dessert teaches that vegetables are the price of joy. Separate moral value from food when you can.',
      ],
    },
  ],
  faqs: [
    { q: 'Gagging?', a: 'Texture issues are real—slow down, try smaller pieces, or a different preparation (roasted vs raw).' },
    { q: 'Allergies?', a: 'Follow clinician guidance for introducing allergens—this article is not a medical protocol.' },
  ],
  related: [
    { title: 'Why Kids Reject Vegetables', path: '/nutrition-science/why-kids-reject-vegetables' },
    { title: 'Why Kids Love Processed Foods', path: '/nutrition-science/why-kids-love-processed-foods' },
  ],
};

export default function HowToIntroduceNewFoodsToKids() {
  return <ScienceArticlePage spec={SPEC} />;
}
