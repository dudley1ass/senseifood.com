import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'easy-high-protein-meals-for-older-adults',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Easy High-Protein Meals for Older Adults',
  subtitle:
    'Think tender, saucy, and reheatable: egg bites, lentil soup, tuna melts, Greek yogurt parfaits, and rotisserie chicken pulled into grain bowls.',
  readTime: '6 min read',
  emoji: '🍲',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Batch one protein on Sunday, pair with frozen vegetables and microwave grains. Use sauces for moisture if chewing is hard—nutrition only counts if it gets eaten.',
  intro:
    'High protein does not have to mean dry chicken breasts. Older adults often do better with softer textures, familiar flavors, and meals that reheat without fuss. Convenience is not laziness; it is adherence.',
  sections: [
    {
      heading: 'Breakfast anchors',
      paragraphs: [
        'Greek yogurt with fruit, egg muffins with cheese, or peanut butter on toast all start the day with less evening catch-up pressure.',
      ],
    },
    {
      heading: 'Lunch and dinner shortcuts',
      paragraphs: [
        'Canned salmon cakes, bean chili, silken tofu soups, and shredded chicken in broth hit protein without marathon cooking.',
      ],
    },
  ],
  faqs: [
    { q: 'Dental pain?', a: 'Slow cookers, ground meats, and smoothies with protein can help—dentistry matters too.' },
    { q: 'Low appetite?', a: 'Small plates more often beat giant intimidating servings.' },
  ],
  related: [
    { title: 'Cooking for Aging Parents: Nutrition That Matters', path: '/nutrition-science/cooking-for-aging-parents-nutrition-that-matters' },
    { title: 'Why Protein Matters More After 50', path: '/nutrition-science/why-protein-matters-more-after-50' },
  ],
};

export default function EasyHighProteinMealsForOlderAdults() {
  return <ScienceArticlePage spec={SPEC} />;
}
