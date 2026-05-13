import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-brewing-time-matters',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Brewing Time Matters',
  subtitle:
    'Time is how long water gets to work on the grounds—paired with grind and temperature it decides whether you stop in the sweet window or slide into harsh late extraction.',
  readTime: '6 min read',
  emoji: '⏱️',
  fixRecipe: { category: 'coffee', problem: 'extraction-balance' },
  quickAnswer:
    'Longer contact pulls more solubles; too long without adjusting grind or temperature reads as bitter and dry. Too short reads sour and thin. Track total contact time for your method and change one variable when you adjust it.',
  intro:
    'Espresso measures time in tens of seconds; cold brew in hours. Same chemistry clock, different gears. If you only ever change grind but ignore how long water actually stayed with the bed, you are driving with one eye closed.',
  sections: [
    {
      heading: 'What longer time does',
      paragraphs: [
        'Adds extraction at almost any grind: more sugars at first, then more bittering compounds. Diminishing returns turn into active harm if you never stop the brew.',
      ],
    },
    {
      heading: 'Shot time versus bloom time versus steep',
      paragraphs: [
        'Espresso: pre-infusion plus main flow defines contact differently than immersion, where everything soaks together. Pourover splits time into pulses—each adds energy and agitation, not just seconds on a stopwatch.',
      ],
    },
    {
      heading: 'Pairing time with grind',
      paragraphs: [
        'Finer grind speeds chemistry; you may need less time than before for the same taste target. Coarser grind often asks for more time unless you widen ratio instead.',
      ],
    },
  ],
  faqs: [
    {
      q: 'My auto drip is always weak—time?',
      a: 'Check bypass, batch size versus basket, and whether the machine short-cycles. If water flies through, grind finer within manufacturer guidance or reduce batch.',
    },
    {
      q: 'Does stirring change effective time?',
      a: 'Yes—agitation accelerates extraction similar to more clock time. Keep stirring consistent between brews.',
    },
  ],
  related: [
    { title: 'Why Coffee Grind Size Matters', path: '/coffee-science/why-coffee-grind-size-matters' },
    { title: 'Coffee Extraction Science', path: '/coffee-science/coffee-extraction-science' },
    { title: 'Why Coffee Tastes Over-Extracted', path: '/coffee-science/why-coffee-tastes-over-extracted' },
  ],
};

export default function WhyCoffeeBrewingTimeMatters() {
  return <ScienceArticlePage spec={SPEC} />;
}
