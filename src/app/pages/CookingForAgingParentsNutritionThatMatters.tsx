import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'cooking-for-aging-parents-nutrition-that-matters',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Cooking for Aging Parents: Nutrition That Matters',
  subtitle:
    'Prioritize protein they will actually eat, fluids that taste good, textures that respect dental pain, and joy—food is care, not only grams.',
  readTime: '7 min read',
  emoji: '👵',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Serve smaller portions more often if appetite is low; fortify soups with lentils; keep hydration visible. Involve them in choices so meals feel dignified, not infantilized.',
  intro:
    'Aging shifts taste, thirst, chewing, and sometimes interest in cooking. The goal is steady nourishment without turning dinner into a lecture. Small upgrades—softer cuts, brighter seasoning, favorite bowls—often beat “healthier” swaps nobody eats.',
  sections: [
    {
      heading: 'Protein and strength',
      paragraphs: [
        'Muscle protects independence. If steak is tiring, try fish, eggs, tofu, yogurt, or bean soups that reheat well.',
      ],
    },
    {
      heading: 'Hydration and medications',
      paragraphs: [
        'Pill schedules are natural water anchors. Broth, fruit, and tea count—especially when plain water feels boring.',
      ],
    },
  ],
  faqs: [
    { q: 'Swallowing trouble?', a: 'Speech therapists evaluate dysphagia—texture changes are safety issues, not stubbornness.' },
    { q: 'Weight loss?', a: 'Unintentional loss needs medical evaluation—do not “just add cream” without a plan.' },
  ],
  related: [
    { title: 'Easy High-Protein Meals for Older Adults', path: '/nutrition-science/easy-high-protein-meals-for-older-adults' },
    { title: 'Why Hydration Gets Harder With Age', path: '/nutrition-science/why-hydration-gets-harder-with-age' },
  ],
};

export default function CookingForAgingParentsNutritionThatMatters() {
  return <ScienceArticlePage spec={SPEC} />;
}
