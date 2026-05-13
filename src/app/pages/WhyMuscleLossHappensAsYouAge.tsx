import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-muscle-loss-happens-as-you-age',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Muscle Loss Happens as You Age',
  subtitle:
    'Sarcopenia is the gradual loss of muscle and strength—not a moral score, but biology responding to how we move, eat, and recover.',
  readTime: '7 min read',
  emoji: '💪',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Combine protein across meals with resistance work a few times weekly. Bed rest and skipping meals accelerate loss fastest—protect both during illness.',
  intro:
    'Muscle is expensive tissue. When steps drop or pain keeps you still, the body trims what it thinks you will not need. You can send kinder signals without living at the gym: bands, stairs, groceries, and protein when you eat.',
  sections: [
    {
      heading: 'What you feel at home',
      paragraphs: [
        'Slower stairs, softer grip, or fatigue after chores you used to breeze through can be early hints. Catching drift early means gentler fixes than after a fall.',
      ],
    },
    {
      heading: 'Food as teammate',
      paragraphs: [
        'Dairy, soy, eggs, fish, and meat bring leucine-rich proteins that flip the repair switch. Vitamin D status matters for many—another reason routine care beats guessing.',
      ],
    },
  ],
  faqs: [
    { q: 'Is walking enough?', a: 'Walking is wonderful for heart and mood; add bands or bodyweight for muscle directly. Both beat either alone.' },
    { q: 'Illness spikes?', a: 'After infections or surgery, prioritize protein and rehab as tolerated—losses can snowball quietly.' },
  ],
  related: [
    { title: 'Why Protein Matters More After 50', path: '/nutrition-science/why-protein-matters-more-after-50' },
    { title: 'Why Recovery Takes Longer After 50', path: '/nutrition-science/why-recovery-takes-longer-after-50' },
  ],
};

export default function WhyMuscleLossHappensAsYouAge() {
  return <ScienceArticlePage spec={SPEC} />;
}
