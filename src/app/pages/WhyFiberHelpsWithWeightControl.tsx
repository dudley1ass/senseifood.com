import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-fiber-helps-with-weight-control',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Fiber Helps With Weight Control',
  subtitle:
    'Fiber slows digestion, adds chew time, and feeds gut bacteria that talk back to appetite—not a magic pill, but a steady everyday brake on graziness.',
  readTime: '6 min read',
  emoji: '🌾',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Build plates around beans, lentils, oats, vegetables, fruit with skins, and whole grains. Increase gradually so your digestion stays friends with you.',
  intro:
    'Weight is not only calories; it is how full you feel per calorie. Fiber raises the fullness dividend—especially when paired with protein—so Tuesday afternoon stops feeling like a vending machine emergency.',
  sections: [
    {
      heading: 'Viscous fiber and slowing glucose',
      paragraphs: [
        'Soluble fibers thicken digesta and blunt glucose swings that can trigger rebound hunger.',
      ],
    },
    {
      heading: 'Volume and chewing',
      paragraphs: [
        'High-fiber foods often take more bites, giving your brain time to notice satiety.',
      ],
    },
  ],
  faqs: [
    { q: 'Supplements instead of food?', a: 'Whole foods bring micronutrients and chewing; supplements are a patch, not the foundation.' },
    { q: 'Gas when increasing fiber?', a: 'Ramp slowly and drink fluids—sudden jumps surprise your gut.' },
  ],
  related: [
    { title: 'Why Fiber Matters for Blood Sugar', path: '/nutrition-science/why-fiber-matters-for-blood-sugar' },
    { title: 'Why High-Protein Diets Feel Easier', path: '/nutrition-science/why-high-protein-diets-feel-easier' },
  ],
};

export default function WhyFiberHelpsWithWeightControl() {
  return <ScienceArticlePage spec={SPEC} />;
}
