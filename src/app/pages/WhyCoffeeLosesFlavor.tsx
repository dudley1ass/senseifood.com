import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-loses-flavor',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Loses Flavor',
  subtitle:
    'Flavor fades when volatile aromatics escape, oils oxidize, and solubles extract unevenly from stale cells—time, oxygen, heat, and moisture are the thieves.',
  readTime: '6 min read',
  emoji: '📉',
  fixRecipe: { category: 'coffee', problem: 'general' },
  quickAnswer:
    'Buy amounts you finish within a couple of weeks, store airtight away from light, grind fresh, and clean gear so old oils do not ghost into the cup. If extraction suddenly feels impossible to dial, stale is a prime suspect.',
  intro:
    'Losing flavor is rarely one dramatic moment; it is tiny exits every day after roast. The cup goes from lively to cardboard-ish while you blame the grinder. This page names the main routes out so you can slow the leak.',
  sections: [
    {
      heading: 'Staling versus brewing',
      paragraphs: [
        'Stale beans offer less gas, less aroma, and uneven extraction even when your numbers look the same. Fix storage and rest windows before chasing micro grind steps.',
      ],
    },
    {
      heading: 'Oxygen and surface area',
      paragraphs: [
        'Whole bean exposes less than ground coffee. Each grind multiplies surface area and accelerates loss. Single-dose jars beat leaving a hopper full in sunlight.',
      ],
    },
    {
      heading: 'Heat and moisture damage',
      paragraphs: [
        'Steamy kitchens and fridge storage (condensation cycles) harm beans. Room-temp airtight is usually kinder than the fridge door.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Can I freeze beans?',
      a: 'Yes in truly airtight small portions; avoid repeated temperature swings that frost the beans.',
    },
    {
      q: 'Why does my pour-over taste dull at 3 weeks?',
      a: 'Light roasts fade aromatics first; try fresher coffee before changing technique.',
    },
  ],
  related: [
    { title: 'Why Coffee Stales', path: '/coffee-science/why-coffee-stales' },
    { title: 'Why Coffee Tastes Flat', path: '/coffee-science/why-coffee-tastes-flat' },
    { title: 'Why Coffee Oxidizes', path: '/coffee-science/why-coffee-oxidizes' },
  ],
};

export default function WhyCoffeeLosesFlavor() {
  return <ScienceArticlePage spec={SPEC} />;
}
