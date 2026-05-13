import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'how-to-build-balanced-family-meals',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'How to Build Balanced Family Meals',
  subtitle:
    'Think halves and quarters: half the plate plants, a quarter protein, a quarter starch, plus a thumb of fats you enjoy—flexible scaffolding, not a math exam.',
  readTime: '7 min read',
  emoji: '🍽️',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Start with protein and produce, then add a whole grain or potatoes. Let kids choose portions from what you serve—same plate system, less negotiation.',
  intro:
    'Balanced eating is not aesthetic Instagram bowls; it is steady energy and enough fiber that everyone’s digestion stays friends with them. The plate method survives busy weeks because it is forgiving.',
  sections: [
    {
      heading: 'A template you can repeat',
      paragraphs: [
        'Sheet-pan protein + two vegetables + one starch feeds different appetites without five separate meals. Sauces on the side keep picky eaters calmer.',
      ],
    },
    {
      heading: 'Cultural foods count',
      paragraphs: [
        'Rice, tortillas, dal, noodles, and stews all fit the same idea—swap labels for what your table actually eats.',
      ],
    },
  ],
  faqs: [
    { q: 'Picky eaters?', a: 'Include a safe food every night; exposure without pressure beats short-order cooking.' },
    { q: 'Budget?', a: 'Beans, eggs, frozen vegetables, and canned fish stretch plates without a lecture.' },
  ],
  related: [
    { title: 'Why Meal Prep Actually Works', path: '/nutrition-science/why-meal-prep-actually-works' },
    { title: 'Why Family Dinners Matter', path: '/nutrition-science/why-family-dinners-matter' },
  ],
};

export default function HowToBuildBalancedFamilyMeals() {
  return <ScienceArticlePage spec={SPEC} />;
}
