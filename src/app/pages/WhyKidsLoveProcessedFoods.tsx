import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-kids-love-processed-foods',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Kids Love Processed Foods',
  subtitle:
    'Crunchy, melty, salty-sweet combos hit reward pathways fast—kids are honest detectors of foods engineered to disappear before fullness shows up.',
  readTime: '6 min read',
  emoji: '🍪',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'You are not fighting your child; you are competing with products designed for crave. Keep ultraprocessed snacks boring at home and make simple whole foods easy to grab.',
  intro:
    'Puffs and boxed treats are built for rapid eating and repeat bites. That is the product doing its job. Your job is defaults: what is on the counter after school, and whether treats feel scarce or predictable.',
  sections: [
    {
      heading: 'Why they feel magical',
      paragraphs: [
        'Vanishing caloric density—melts before you notice—makes it easy to overshoot fullness cues. Kids respond to texture and marketing like anyone else.',
      ],
    },
    {
      heading: 'Boundaries without mythic bans',
      paragraphs: [
        'Sometimes serve treats with meals so they are not forbidden treasure. Pair very sweet snacks with protein or fruit to slow the roller coaster.',
      ],
    },
  ],
  faqs: [
    { q: 'Never sugar?', a: 'Rigid bans often backfire; predictable sweets teach regulation better than smuggling.' },
    { q: 'Is picky eating my fault?', a: 'No—biology and environment both matter. Focus on habits, not blame.' },
  ],
  related: [
    { title: 'Why Processed Foods Are Easy to Overeat', path: '/nutrition-science/why-processed-foods-are-easy-to-overeat' },
    { title: 'Why Some Kids Are Always Hungry', path: '/nutrition-science/why-some-kids-are-always-hungry' },
  ],
};

export default function WhyKidsLoveProcessedFoods() {
  return <ScienceArticlePage spec={SPEC} />;
}
