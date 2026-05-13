import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-high-protein-diets-feel-easier',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why High-Protein Diets Feel Easier',
  subtitle:
    'Protein helps meals linger, nudges fullness hormones, and protects muscle when calories drop—so many people feel less “white-knuckling” than on starch-only cuts.',
  readTime: '6 min read',
  emoji: '🥚',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Anchor each meal with a protein source and still add vegetables for fiber. If kidneys or other conditions matter, personalize targets with your clinician.',
  intro:
    '“Easier” here means fewer between-meal crashes for many—not effortless. Protein is not magic; it is a lever that pairs well with sleep, training, and realistic grocery lists.',
  sections: [
    {
      heading: 'Satiety without theatrics',
      paragraphs: [
        'Protein slows gastric emptying and shifts hormone signals toward satisfaction compared with refined carbs alone.',
      ],
    },
    {
      heading: 'Muscle preservation',
      paragraphs: [
        'In a deficit, protein is the friend of strength and daily energy—losing muscle makes everything feel harder.',
      ],
    },
  ],
  faqs: [
    { q: 'How much is too much?', a: 'Very high intakes are not better linearly—food variety still matters for micronutrients.' },
    { q: 'Vegetarians?', a: 'Soy, legumes, dairy, eggs, and combining plant sources across the day work well.' },
  ],
  related: [
    { title: 'Why Protein Keeps You Full Longer', path: '/nutrition-science/why-protein-keeps-you-full-longer' },
    { title: 'Why Crash Diets Fail', path: '/nutrition-science/why-crash-diets-fail' },
  ],
};

export default function WhyHighProteinDietsFeelEasier() {
  return <ScienceArticlePage spec={SPEC} />;
}
