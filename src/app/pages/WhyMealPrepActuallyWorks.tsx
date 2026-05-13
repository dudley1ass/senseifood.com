import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-meal-prep-actually-works',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Meal Prep Actually Works',
  subtitle:
    'Meal prep wins less because you love Sunday containers and more because it removes hundreds of tiny decisions your tired brain hates at 6 pm.',
  readTime: '6 min read',
  emoji: '📦',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Batch one protein, one grain, and two vegetables you will actually eat. Label the fridge, keep sauces fun, and forgive imperfect weeks—partial prep still counts.',
  intro:
    'Discipline is overrated compared with design. When rice is cooked and chicken is sliced, Tuesday night does not require heroics—just assembly. That is why prep works: it lowers friction, not because you suddenly love spreadsheets.',
  sections: [
    {
      heading: 'Decision fatigue is the enemy',
      paragraphs: [
        'After work, brains choose easy defaults—delivery apps and cereal for dinner. Prep moves the decision to a calmer hour.',
      ],
    },
    {
      heading: 'Keep it boring on purpose',
      paragraphs: [
        'Two base proteins and rotating sauces beat twelve novel recipes you abandon by Wednesday. Boring systems beat exciting plans that quit.',
      ],
    },
  ],
  faqs: [
    { q: 'I hate leftovers', a: 'Prep ingredients, not finished plates—roast veg, cook beans, wash greens—then cook fresh nightly accents.' },
    { q: 'Freezer burn?', a: 'Airtight containers and dates on lids save money and flavor.' },
  ],
  related: [
    { title: 'How to Build Balanced Family Meals', path: '/nutrition-science/how-to-build-balanced-family-meals' },
    { title: 'Nutrition for Busy Families', path: '/nutrition-science/nutrition-for-busy-families' },
  ],
};

export default function WhyMealPrepActuallyWorks() {
  return <ScienceArticlePage spec={SPEC} />;
}
