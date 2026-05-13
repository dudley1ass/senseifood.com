import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'nutrition-for-busy-families',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Nutrition for Busy Families',
  subtitle:
    'Good enough beats perfect: rotisserie chicken, frozen vegetables, canned beans, and a repeating weekly rhythm feed real schedules without shame.',
  readTime: '6 min read',
  emoji: '⏱️',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Pick two “emergency” dinners everyone tolerates, keep washed fruit visible, and let one weekend hour handle washing produce. Consistency beats novelty.',
  intro:
    'Soccer, shifts, homework, and tiny humans do not care about your Pinterest meal plan. Nutrition for busy families is logistics: fewer decisions at witching hour, more defaults that still include protein and plants.',
  sections: [
    {
      heading: 'The emergency short list',
      paragraphs: [
        'Breakfast-for-dinner, bean quesadillas, stir-fry kits, and soup from the freezer are honorable meals.',
      ],
    },
    {
      heading: 'Kids and adults eat the same base',
      paragraphs: [
        'Sauce on the side, deconstructed plates, and one safe food keep peace without short-order cooking.',
      ],
    },
  ],
  faqs: [
    { q: 'Is frozen worse?', a: 'Frozen produce is often more consistent than sad wilted “fresh” abandoned in the drawer.' },
    { q: 'Takeout balance?', a: 'Choose veg-heavy sides and protein; label it part of the plan, not failure.' },
  ],
  related: [
    { title: 'Why Meal Prep Actually Works', path: '/nutrition-science/why-meal-prep-actually-works' },
    { title: 'Why Family Dinners Matter', path: '/nutrition-science/why-family-dinners-matter' },
  ],
};

export default function NutritionForBusyFamilies() {
  return <ScienceArticlePage spec={SPEC} />;
}
