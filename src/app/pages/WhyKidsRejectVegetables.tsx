import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-kids-reject-vegetables',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Kids Reject Vegetables',
  subtitle:
    'Bitter notes, unfamiliar textures, and a cautious brain often read “vegetable” as “unknown”—biology and novelty, not a verdict on your cooking.',
  readTime: '6 min read',
  emoji: '🥦',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Offer tiny tastes without pressure, pair with dips kids already like, and keep modeling calm eating. Roasting sweetens edges; dips add familiarity.',
  intro:
    'Picky phases are normal. Vegetables bring bitter compounds and fibrous crunch that can feel loud to sensitive tasters. Lower the stakes: one pea is still data for a curious brain learning what is safe.',
  sections: [
    {
      heading: 'Taste and texture, not attitude',
      paragraphs: [
        'Some kids taste bitter more intensely. Slime vs crunch matters as much as flavor. Neutral language beats “just try it” showdowns.',
      ],
    },
    {
      heading: 'What helps acceptance',
      paragraphs: [
        'Repeated low-pressure exposure, eating together, and letting hunger do gentle teaching at predictable meal times.',
      ],
    },
  ],
  faqs: [
    { q: 'Hide veggies in sauces?', a: 'Fine for nutrients, but kids also need honest exposure to learn long-term acceptance.' },
    { q: 'When to get help?', a: 'If growth falters or the safe-food list shrinks fast, ask a pediatric feeding specialist.' },
  ],
  related: [
    { title: 'How to Introduce New Foods to Kids', path: '/nutrition-science/how-to-introduce-new-foods-to-kids' },
    { title: 'How to Build Healthier Kids Meals Without Food Fights', path: '/nutrition-science/how-to-build-healthier-kids-meals-without-food-fights' },
  ],
};

export default function WhyKidsRejectVegetables() {
  return <ScienceArticlePage spec={SPEC} />;
}
