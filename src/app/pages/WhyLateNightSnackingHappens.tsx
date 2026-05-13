import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-late-night-snacking-happens',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Late-Night Snacking Happens',
  subtitle:
    'Short sleep, stress, skipped daytime meals, and ultracrunchy TV snacks all nudge the kitchen after dark—biology plus habit, not just “lack of discipline.”',
  readTime: '6 min read',
  emoji: '🌙',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Front-load protein at breakfast and lunch, dim the kitchen after a planned snack, and move screens away from the pantry. If sleep is broken, treat sleep as the nutrition lever.',
  intro:
    'Night hunger is sometimes real hunger from an underfed day; sometimes it is comfort after hard news. Naming which night you are having helps you pick a kind fix instead of spiraling.',
  sections: [
    {
      heading: 'Sleep and hormones',
      paragraphs: [
        'Short sleep nudges ghrelin up and makes ultrapalatable food louder. Fixing sleep even a little can quiet the pantry pull.',
      ],
    },
    {
      heading: 'If you are going to snack',
      paragraphs: [
        'Pair carbs with protein or yogurt, pre-portion bowls, and brush teeth after to mark the end—small rituals reduce autopilot.',
      ],
    },
  ],
  faqs: [
    { q: 'Stop eating after 7 pm?', a: 'Rules that ignore shift work or family dinner are not universal—design around your real schedule.' },
    { q: 'Medications?', a: 'Some drugs affect appetite timing—ask your clinician if nights suddenly changed.' },
  ],
  related: [
    { title: 'Why Healthy Eating Feels Hard', path: '/nutrition-science/why-healthy-eating-feels-hard' },
    { title: 'How to Eat Better Without Giving Up Comfort Food', path: '/nutrition-science/how-to-eat-better-without-giving-up-comfort-food' },
  ],
};

export default function WhyLateNightSnackingHappens() {
  return <ScienceArticlePage spec={SPEC} />;
}
