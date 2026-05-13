import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-recovery-takes-longer-after-50',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Recovery Takes Longer After 50',
  subtitle:
    'Sleep architecture shifts, inflammation settles slower, and tissue remodeling is not instant—basics usually beat exotic shakes.',
  readTime: '6 min read',
  emoji: '🛌',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Prioritize sleep, protein at meals, gentle movement as your clinician clears, and hydration. Sharp pain or new swelling belongs to professionals, not blog comments.',
  intro:
    'Feeling beat up longer after yard work or a workout is common. Food cannot microwave healing, but skipping protein or skimping on sleep definitely borrows from tomorrow.',
  sections: [
    {
      heading: 'What is actually repairing',
      paragraphs: [
        'Muscles need amino acids; tendons remodel slowly; nerves like calm nights. Pushing through sharp pain usually taxes the next week.',
      ],
    },
    {
      heading: 'Food supports the background hum',
      paragraphs: [
        'Colorful plants and fish for many people support inflammation settling—not overnight miracles, but steady habits.',
      ],
    },
  ],
  faqs: [
    { q: 'Ice baths?', a: 'Trends vary; sleep, nutrition, and guided rehab usually move the needle more predictably.' },
    { q: 'When to call a doctor?', a: 'Fever, chest pain, swelling, or pain that worsens instead of easing needs real evaluation.' },
  ],
  related: [
    { title: 'Why Muscle Loss Happens as You Age', path: '/nutrition-science/why-muscle-loss-happens-as-you-age' },
    { title: 'Best Foods for Healthy Aging', path: '/nutrition-science/best-foods-for-healthy-aging' },
  ],
};

export default function WhyRecoveryTakesLongerAfter50() {
  return <ScienceArticlePage spec={SPEC} />;
}
