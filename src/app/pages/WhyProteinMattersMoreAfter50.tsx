import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-protein-matters-more-after-50',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Protein Matters More After 50',
  subtitle:
    'After midlife, the same meal does not always send as strong a “build and repair” signal to muscle. Spreading protein through the day matters more than one giant dinner.',
  readTime: '7 min read',
  emoji: '🍳',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Aim for a protein anchor at breakfast and lunch, not only dinner. Pair it with walking or simple strength work—food and movement share the job of keeping muscle.',
  intro:
    'Muscle is what makes stairs, groceries, and recovery from illness feel manageable. With age, researchers talk about “anabolic resistance”—a softer response to the same protein dose. That is not doom; it is a nudge to stop skipping breakfast and to take resistance training seriously, even in small doses.',
  sections: [
    {
      heading: 'What changes in the body',
      paragraphs: [
        'Digestion and hormone patterns shift; chronic inflammation from old injuries or joint pain can quietly raise protein needs after illness. None of this requires perfection—just fewer “toast-only” mornings.',
      ],
    },
    {
      heading: 'Simple plate patterns',
      paragraphs: [
        'Greek yogurt, eggs, fish, tofu, lentils, and cottage cheese all count. If chewing is harder, softer high-protein foods still move the needle.',
      ],
      tip: 'If you track nothing else, notice whether afternoons feel steadier when lunch had a fist-sized protein portion.',
    },
    {
      heading: 'Talk with your clinician',
      paragraphs: [
        'Kidney disease and some medications change safe protein targets—personal beats generic on the internet.',
      ],
    },
  ],
  faqs: [
    { q: 'Do I need powder?', a: 'Usually not if meals are intentional. Powders help busy weeks, not replace food forever.' },
    { q: 'How much per meal?', a: 'A common band is roughly 20–40 g per meal depending on size and goals—roughly a deck of cards of meat or a cup of Greek yogurt as a visual anchor.' },
  ],
  related: [
    { title: 'Why Muscle Loss Happens as You Age', path: '/nutrition-science/why-muscle-loss-happens-as-you-age' },
    { title: 'Easy High-Protein Meals for Older Adults', path: '/nutrition-science/easy-high-protein-meals-for-older-adults' },
  ],
};

export default function WhyProteinMattersMoreAfter50() {
  return <ScienceArticlePage spec={SPEC} />;
}
