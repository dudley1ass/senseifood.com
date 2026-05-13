import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-crash-diets-fail',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Crash Diets Fail',
  subtitle:
    'Extreme cuts wake up hunger hormones, trim muscle alongside fat, and teach your brain that restraint equals misery—so rebounds are biology meeting a harsh plan.',
  readTime: '7 min read',
  emoji: '⚖️',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Aim for modest deficits you can keep for months, protein at each meal, resistance training, and sleep. Slow change preserves muscle and sanity better than a dramatic two-week sprint.',
  intro:
    'Crash diets sell speed. Bodies respond with slower metabolism per pound lost, louder hunger, and cravings tuned to quick energy. That is not weakness; it is homeostasis doing its job. Gentler slopes stick.',
  sections: [
    {
      heading: 'What fights back',
      paragraphs: [
        'Leptin and ghrelin shift; NEAT (fidgeting and daily movement) drops when people are depleted. Muscle loss lowers the calories you burn at rest.',
      ],
    },
    {
      heading: 'What tends to work better',
      paragraphs: [
        'Protein plus fiber, strength training, realistic grocery lists, and enough sleep so appetite cues are not hijacked by fatigue.',
      ],
    },
  ],
  faqs: [
    { q: 'Is any fast loss okay?', a: 'Medically supervised plans exist for specific cases—self-prescribed extremes are the risky default.' },
    { q: 'Plateaus?', a: 'They are normal; adjust one lever at a time with patience rather than panic-cutting.' },
  ],
  related: [
    { title: 'Why High-Protein Diets Feel Easier', path: '/nutrition-science/why-high-protein-diets-feel-easier' },
    { title: 'Why Fiber Helps With Weight Control', path: '/nutrition-science/why-fiber-helps-with-weight-control' },
  ],
};

export default function WhyCrashDietsFail() {
  return <ScienceArticlePage spec={SPEC} />;
}
