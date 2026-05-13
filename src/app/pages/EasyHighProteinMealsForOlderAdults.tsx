import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'easy-high-protein-meals-for-older-adults',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Easy High-Protein Meals for Older Adults',
  subtitle:
    'High protein does not have to mean dry chicken breasts. Older adults often do better with tender, saucy, familiar foods that reheat without fuss—egg bites, lentil soup, tuna melts, Greek yogurt parfaits, rotisserie chicken pulled into grain bowls. Convenience is not laziness; it is adherence when energy is low or chewing hurts.',
  readTime: '9 min read',
  emoji: '🍲',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Batch one protein on a calmer day, pair with frozen vegetables and microwave grains. Use sauces and broth for moisture if chewing is hard—nutrition only counts if it gets eaten. Keep a short list of ten-minute dinners for low-spoon days: eggs, canned bean soup, fish cakes, yogurt bowls. Involve choices so meals feel dignified.',
  intro:
    "Protein supports muscle repair, immune work, and steadier energy between meals. After illness or during pain flares, needs can rise while appetite falls—so texture and flavor become part of the prescription.\n\nThis article is a practical list dressed as narrative: soft, savory, reheatable, and forgiving. It respects budgets—canned fish, eggs, lentils—and respects teeth—stews over tough steaks when needed.\n\nIf swallowing is unsafe or weight is falling unintentionally, stop reading blogs and call the care team.",
  sections: [
    {
      heading: 'Breakfast anchors that beat toast-only mornings',
      paragraphs: [
        'Greek yogurt with fruit, peanut butter on whole grain, egg muffins with cheese, or savory oatmeal with an egg stirred in all start the day with less evening catch-up pressure.',
      ],
    },
    {
      heading: 'Lunch and dinner shortcuts that still feel like meals',
      paragraphs: [
        'Canned salmon cakes, bean chili, silken tofu soups, shredded chicken in broth, and lentil dal with rice hit protein without marathon cooking. Rotisserie chicken is a legitimate kitchen tool.',
      ],
    },
    {
      heading: 'Soft textures without baby food vibes',
      paragraphs: [
        'Meatballs in sauce, flaky fish, mashed beans, and finely shredded meats respect sore jaws. Add olive oil or yogurt for moisture instead of dry grilling everything.',
      ],
      tip: 'Warm food often smells stronger—helpful when smell is dull and appetite is quiet.',
    },
    {
      heading: 'Snacks that count when meals shrink',
      paragraphs: [
        'Cottage cheese with fruit, cheese and crackers, kefir, and peanut butter on toast can bridge low-appetite days without turning life into only supplements.',
      ],
    },
    {
      heading: 'Batching without identical leftovers fatigue',
      paragraphs: [
        'Cook a neutral protein and rotate sauces—barbecue, curry, lemon—so the fridge feels less like Groundhog Day.',
      ],
    },
    {
      heading: 'When to loop in professionals',
      paragraphs: [
        'Speech therapy for swallowing, dietitians for cancer recovery or kidney limits, and dentists for pain—all change what “easy” means.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Dental pain?',
      a: 'Slow cookers, ground meats, and smoothies with yogurt can help—dentistry matters too.',
    },
    {
      q: 'Low appetite?',
      a: 'Small plates more often beat giant intimidating servings; fortify soups instead of only nagging.',
    },
    {
      q: 'Diabetes?',
      a: 'Pair protein with fiber-rich sides and follow clinician guidance—patterns beat fear.',
    },
    {
      q: 'Lactose intolerance?',
      a: 'Lactose-free dairy, hard cheeses, and lactase tablets can keep yogurt and milk in play for some people.',
    },
  ],
  related: [
    { title: 'Cooking for Aging Parents: Nutrition That Matters', path: '/nutrition-science/cooking-for-aging-parents-nutrition-that-matters' },
    { title: 'Why Protein Matters More After 50', path: '/nutrition-science/why-protein-matters-more-after-50' },
  ],
};

export default function EasyHighProteinMealsForOlderAdults() {
  return <ScienceArticlePage spec={SPEC} />;
}
