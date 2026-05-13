import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-tastes-watery',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Tastes Watery',
  subtitle:
    'Watery is low strength: too much water for the dose, bypass stealing contact, or a grind so coarse the bed never gave up solubles even while the cup stayed thin.',
  readTime: '6 min read',
  emoji: '💧',
  fixRecipe: { category: 'coffee', problem: 'watery' },
  quickAnswer:
    'Weigh coffee in and water out; raise dose or cut total water until the cup has body. If it is still hollow, tighten grind or brew longer so extraction matches the new ratio.',
  intro:
    'People say “watery” when there is no middle to the sip—just thin brown liquid. That is almost always fixable with scales. Extraction tweaks matter, but they ride on top of a ratio that actually carries flavor.',
  sections: [
    {
      heading: 'Fix the math first',
      paragraphs: [
        'Pick a target ratio for your method, dose to it, and pour to it. Eyeballing scoops while the kettle wanders is how watery happens on repeat.',
      ],
    },
    {
      heading: 'When the ratio looks right but the cup is still thin',
      paragraphs: [
        'Check bypass on batch brewers, channeling in espresso, or grind so coarse that flow is fast and pale. Thin plus sour usually means under-extraction; thin plus bitter can mean channeling next to weak zones.',
      ],
    },
    {
      heading: 'Cold brew and iced edge cases',
      paragraphs: [
        'Ice counts as water unless you designed for it. Cold brew needs time and enough coffee contact—diluting concentrate too far reads as watery instantly.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Does a bigger basket help?',
      a: 'Only if you fill it appropriately. An under-dosed triple basket can taste weaker and less balanced than a well-dosed double.',
    },
    {
      q: 'Why does my pod machine taste watery?',
      a: 'Default recipes prioritize volume; try smaller cup sizes, stronger pods if available, or run a “strong” cycle that pre-wets longer.',
    },
  ],
  related: [
    { title: 'Why Coffee Tastes Weak', path: '/coffee-science/why-coffee-tastes-weak' },
    { title: 'Why Coffee Tastes Flat', path: '/coffee-science/why-coffee-tastes-flat' },
    { title: 'Coffee Extraction Science', path: '/coffee-science/coffee-extraction-science' },
  ],
};

export default function WhyCoffeeTastesWatery() {
  return <ScienceArticlePage spec={SPEC} />;
}
