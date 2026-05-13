import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-appetite-changes-after-50',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Appetite Changes After 50',
  subtitle:
    'Hunger is not a single switch. Hormones, medications, mood, smell, and pain all rewrite how food looks and tastes—often quietly.',
  readTime: '7 min read',
  emoji: '🥣',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Rule out thirst and dry mouth, medication side effects, and low mood before blaming willpower. Small, regular meals with strong aroma and color often beat nagging.',
  intro:
    'Skipping lunch because nothing sounds good, then raiding the pantry at night, is a pattern—not a character flaw. Midlife can dull smell, dry the mouth, or make rich food sit heavy. The goal is reliable fuel without turning the table into a debate club.',
  sections: [
    {
      heading: 'Common real-world drivers',
      paragraphs: [
        'Thyroid shifts, pain, grief, and sleep debt all nudge appetite. Some drugs blunt taste or cause nausea. Oral health matters more than people admit.',
      ],
    },
    {
      heading: 'Gentle structure helps',
      paragraphs: [
        'Pick three-ish meal times and keep a “good enough” option stocked—soup, eggs, smoothies—so low motivation still meets nutrition.',
      ],
    },
  ],
  faqs: [
    { q: 'When should I worry?', a: 'Sudden appetite loss with unintentional weight loss deserves a clinician visit.' },
    { q: 'Liquids instead of solids?', a: 'Short-term bridges are fine; keep protein and fiber in the blend so blood sugar stays kind.' },
  ],
  related: [
    { title: 'Why Hydration Gets Harder With Age', path: '/nutrition-science/why-hydration-gets-harder-with-age' },
    { title: 'Best Foods for Healthy Aging', path: '/nutrition-science/best-foods-for-healthy-aging' },
  ],
};

export default function WhyAppetiteChangesAfter50() {
  return <ScienceArticlePage spec={SPEC} />;
}
