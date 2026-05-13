import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-tastes-bitter',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Tastes Bitter',
  subtitle:
    'Bitterness in the cup usually means late-extraction compounds arrived too loud—often from grind, time, or uneven flow—but roast level and bean quality still get a vote.',
  readTime: '8 min read',
  emoji: '☕',
  fixRecipe: { category: 'coffee', problem: 'bitter' },
  quickAnswer:
    'Coarsen slightly, shorten contact time, or reduce turbulence before you stack more changes. Dark roasts go harsh faster; channeling in espresso can mix thin sour lanes with bitter pockets. Log one lever per brew so you know what moved.',
  intro:
    'Bitter is not a moral failing; it is chemistry past the sweet spot. Coffee always carries bittering alkaloids and polyphenols—the question is whether your brew pulled them to the front of the stage. This page lines up the usual suspects so you stop thrashing and start sequencing fixes.',
  sections: [
    {
      heading: 'Over-extraction is the headline, not the whole newspaper',
      paragraphs: [
        'Fine grind, long immersion, very hot water, or aggressive stirring all extend how much dissolves from the grounds. Espresso adds pressure: a puck that channels lets water race through cracks while other zones get over-worked.',
      ],
    },
    {
      heading: 'Roast and bean health',
      paragraphs: [
        'Darker roasts shed carbon-forward and smoky notes sooner than light roasts at the same recipe. Old, stale beans can taste papery or ashy in ways people label bitter. Screen those before you rewrite your whole pourover ritual.',
      ],
    },
    {
      heading: 'Gear and habits that hide in the background',
      paragraphs: [
        'Burnt-on oils in a portafilter, a dirty carafe, or scorched milk can taste “bitter” even when extraction was fine. Rinse, purge, and smell the dry grounds before blaming the grinder.',
      ],
      tip: 'If bitterness arrived right after you changed only the grinder setting, odds are high the grind path moved extraction—coarsen a notch and repeat before touching temperature.',
    },
  ],
  faqs: [
    {
      q: 'Is bitter the same as strong?',
      a: 'No. Strength is concentration; bitterness is flavor chemistry. You can brew a weak cup that still tastes harsh if channels or fines over-extract locally.',
    },
    {
      q: 'Why does my dark roast always taste ashy?',
      a: 'It may be roasted very dark, or you are using light-roast habits—try slightly coarser grind, a little less contact, or cooler water and see if sweetness returns.',
    },
  ],
  related: [
    { title: 'Coffee Extraction Science', path: '/coffee-science/coffee-extraction-science' },
    { title: 'Why Coffee Tastes Over-Extracted', path: '/coffee-science/why-coffee-tastes-over-extracted' },
    { title: 'How to Debug Your Coffee', path: '/coffee-science/how-to-debug-your-coffee' },
  ],
};

export default function WhyCoffeeTastesBitter() {
  return <ScienceArticlePage spec={SPEC} />;
}
