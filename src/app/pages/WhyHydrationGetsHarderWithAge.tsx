import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-hydration-gets-harder-with-age',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Hydration Gets Harder With Age',
  subtitle:
    'Thirst can quiet down even when you still need water—especially with heat, illness, or new prescriptions—so habits beat waiting for a loud signal.',
  readTime: '6 min read',
  emoji: '💧',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Tie drinks to routines you already have: pills, meals, and morning coffee. Shift more fluids earlier if nighttime bathroom trips are an issue.',
  intro:
    'Bodies carry a little less water and notice heat differently later in life. That does not mean fear every sip—it means keeping cups visible and flavors you enjoy on hand, especially when swallowing or mobility makes big glasses awkward.',
  sections: [
    {
      heading: 'Why the cue fades',
      paragraphs: [
        'The brain’s thirst signal can soften while sweat and breathing still lose water. Diuretics and some heart medicines add honest reasons to sip steadily, within your care plan.',
      ],
    },
    {
      heading: 'Flavor and temperature',
      paragraphs: [
        'Broth, fruit in water, tea, and sparkling water all count. Cold vs room temp is preference—compliance wins.',
      ],
      tip: 'Pale straw urine is a simple home check; very dark means catch up; perfectly clear all day may mean overdoing it without need.',
    },
  ],
  faqs: [
    { q: 'Does coffee dehydrate?', a: 'For regular drinkers it behaves like other fluids in balance studies—still pair with water if you like how that feels.' },
    { q: 'How much should I drink?', a: 'Targets vary with kidney or heart limits—ask your clinician if you have fluid restrictions.' },
  ],
  related: [
    { title: 'Why Appetite Changes After 50', path: '/nutrition-science/why-appetite-changes-after-50' },
    { title: 'Easy High-Protein Meals for Older Adults', path: '/nutrition-science/easy-high-protein-meals-for-older-adults' },
  ],
};

export default function WhyHydrationGetsHarderWithAge() {
  return <ScienceArticlePage spec={SPEC} />;
}
