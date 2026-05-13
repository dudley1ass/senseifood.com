import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'how-to-build-healthier-kids-meals-without-food-fights',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'How to Build Healthier Kids Meals Without Food Fights',
  subtitle:
    'Calm structure beats showdowns: you choose what and when; they choose how much from what is served—no second restaurant opening at 7 pm.',
  readTime: '7 min read',
  emoji: '🍽️',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Serve a safe food with a small portion of something new. Turn screens off, sit together, and skip dessert-as-bribe loops that teach sweets are trophies.',
  intro:
    'Food fights train everyone to dig in harder. Division of responsibility sounds simple because it is: predictable meals, kind boundaries, and trust that bodies know fullness when adults stop negotiating every bite.',
  sections: [
    {
      heading: 'Plate design that lowers stakes',
      paragraphs: [
        'Include something they usually eat beside a thumb-sized taste of something newer. Hunger at mealtime is a fine teacher when timing is steady.',
      ],
    },
    {
      heading: 'Environment beats lectures',
      paragraphs: [
        'Chairs that fit, grown-ups eating the same foods, and calm conversation signal “this is normal life,” not a test.',
      ],
    },
  ],
  faqs: [
    { q: 'Dessert if they finish veggies?', a: 'It can teach that sweets are morally “better” than vegetables; neutral dessert timing often works better.' },
    { q: 'Growth worries?', a: 'Your pediatrician reads trends on a chart—bring concerns early instead of guessing online.' },
  ],
  related: [
    { title: 'Why Kids Reject Vegetables', path: '/nutrition-science/why-kids-reject-vegetables' },
    { title: 'Why Breakfast Affects School Performance', path: '/nutrition-science/why-breakfast-affects-school-performance' },
  ],
};

export default function HowToBuildHealthierKidsMealsWithoutFoodFights() {
  return <ScienceArticlePage spec={SPEC} />;
}
