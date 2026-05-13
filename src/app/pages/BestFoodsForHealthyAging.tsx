import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'best-foods-for-healthy-aging',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Best Foods for Healthy Aging',
  subtitle:
    'No superfood saves the week—rotation does: protein anchors, colorful plants, yogurt or beans for fiber, and fats that make meals worth eating again on Wednesday.',
  readTime: '7 min read',
  emoji: '🥗',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Aim for fish or beans a few times a week, leafy greens most days, nuts for crunch, olive oil for cooking, and berries when you can. Frozen and canned count.',
  intro:
    'Healthy aging is mostly boring good habits: enough protein to protect muscle, enough fiber for blood sugar and bathroom peace, enough color for the small compounds we lump together as antioxidants, and enough joy that the pattern survives real life.',
  sections: [
    {
      heading: 'A week you can repeat',
      paragraphs: [
        'Two seafood meals, a lentil soup, a yogurt breakfast, a big salad template, and a handful of nuts in the snack drawer cover a lot without a spreadsheet religion.',
      ],
    },
    {
      heading: 'Budget and teeth',
      paragraphs: [
        'Canned fish, frozen produce, and long-cooked stews respect wallets and jaws. Citrus and herbs brighten lower-sodium plates.',
      ],
    },
  ],
  faqs: [
    { q: 'Supplements?', a: 'Food first; targeted supplements belong between you and your clinician based on labs and diet gaps.' },
    { q: 'Is salt always the enemy?', a: 'Some people need less; others lose appetite without enough flavor—personalize with guidance.' },
  ],
  related: [
    { title: 'Why Protein Matters More After 50', path: '/nutrition-science/why-protein-matters-more-after-50' },
    { title: 'Cooking for Aging Parents: Nutrition That Matters', path: '/nutrition-science/cooking-for-aging-parents-nutrition-that-matters' },
  ],
};

export default function BestFoodsForHealthyAging() {
  return <ScienceArticlePage spec={SPEC} />;
}
