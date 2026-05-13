import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-breakfast-affects-school-performance',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Breakfast Affects School Performance',
  subtitle:
    'Brains run on glucose and steady blood sugar; skipping breakfast often means attention and mood ride a rougher roller coaster until lunch.',
  readTime: '6 min read',
  emoji: '📚',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Pair protein with fiber-rich carbs—eggs and fruit, yogurt and oats, peanut butter on whole grain—instead of sweets alone. Not fancy; just steadier fuel.',
  intro:
    'Teachers can spot the difference between “hangry” and fed. Kids are not small adults; their glycogen tanks are smaller and burn faster. A workable breakfast beats a perfect one that never happens.',
  sections: [
    {
      heading: 'What changes in the classroom',
      paragraphs: [
        'Attention, working memory, and irritability all track with blood sugar swings. Ultra-refined breakfasts spike and crash; mixed plates soften the curve.',
      ],
    },
    {
      heading: 'Real-life wins',
      paragraphs: [
        'Leftovers, smoothies with protein, frozen burritos with fruit, or school breakfast programs all count when time is tight.',
      ],
    },
  ],
  faqs: [
    { q: 'Not hungry early?', a: 'Try a small first bite and a packed mid-morning snack; some kids wake slowly.' },
    { q: 'ADHD overlap?', a: 'Medication timing and appetite interact—coordinate with your care team.' },
  ],
  related: [
    { title: 'How to Build Healthier Kids Meals Without Food Fights', path: '/nutrition-science/how-to-build-healthier-kids-meals-without-food-fights' },
    { title: 'Why Some Kids Are Always Hungry', path: '/nutrition-science/why-some-kids-are-always-hungry' },
  ],
};

export default function WhyBreakfastAffectsSchoolPerformance() {
  return <ScienceArticlePage spec={SPEC} />;
}
