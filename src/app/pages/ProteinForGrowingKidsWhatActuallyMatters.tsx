import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'protein-for-growing-kids-what-actually-matters',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Protein for Growing Kids: What Actually Matters',
  subtitle:
    'Most kids in wealthy countries meet protein totals; the gap is often distribution, whole foods, and pairing protein with energy for busy days—not another shake.',
  readTime: '6 min read',
  emoji: '🥛',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Spread protein through meals and snacks—eggs, yogurt, milk, beans, tofu, chicken—rather than one giant dinner. Growth spurts increase appetite; feed the hunger with real food first.',
  intro:
    'Parents worry about grams; kids care if it tastes good and if they are actually hungry. Whole foods bring chewing, micronutrients, and steady energy that powders can miss. Save supplements for gaps your pediatrician names.',
  sections: [
    {
      heading: 'What growing bodies use protein for',
      paragraphs: [
        'Tissue repair, immune work, enzymes—not only biceps. Kids rebuild constantly between playground and growth spurts.',
      ],
    },
    {
      heading: 'Practical snacks that count',
      paragraphs: [
        'Cheese sticks, hummus with crackers, edamame, nut butter on fruit, and bean quesadillas all stack without a spreadsheet.',
      ],
    },
  ],
  faqs: [
    { q: 'Powder for athletes?', a: 'Food first; pediatric guidance matters for teen athletes with high needs or allergies.' },
    { q: 'Vegetarian kids?', a: 'Combine legumes, grains, dairy or soy—patterns over single heroic ingredients.' },
  ],
  related: [
    { title: 'Why Some Kids Are Always Hungry', path: '/nutrition-science/why-some-kids-are-always-hungry' },
    { title: 'Why Breakfast Affects School Performance', path: '/nutrition-science/why-breakfast-affects-school-performance' },
  ],
};

export default function ProteinForGrowingKidsWhatActuallyMatters() {
  return <ScienceArticlePage spec={SPEC} />;
}
