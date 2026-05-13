import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-tastes-burnt',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Tastes Burnt',
  subtitle:
    'Burnt can be actual char from roast or heating, or the brain lumping harsh bitterness with smoke—sorting which saves you from “fixing” beans that only needed a gentler brew.',
  readTime: '6 min read',
  emoji: '🔥',
  fixRecipe: { category: 'coffee', problem: 'burnt-taste' },
  quickAnswer:
    'If the beans are very dark, brew cooler and shorter before blaming the grinder. If only one cup scorches, check for dry boils in moka pots, left-on hot plates, or reheating microwaves that cook coffee instead of warming it.',
  intro:
    'True burnt sugar and carbon notes come from roast development or surfaces that got too hot. Bitter-astringent extraction can read “burnt” even when nothing charred. Name which world you are in before you change twelve variables.',
  sections: [
    {
      heading: 'Roast-level smoke versus brew-level harshness',
      paragraphs: [
        'Very dark roasts carry roast carbon flavors by design. Light roasts rarely taste burnt unless something in the chain—water too hot for a tiny yield, choked shots—pushed extraction into harsh ash.',
      ],
    },
    {
      heading: 'Heat after the brew',
      paragraphs: [
        'Hot plates and aggressive microwaves continue cooking volatile aromatics away and can create scorched edges in the pot. Thermal carafes and gentle warming preserve sweetness.',
      ],
    },
    {
      heading: 'Moka pot and espresso edges',
      paragraphs: [
        'Dry boiling an empty lower chamber, or running water through too long after blonding, pulls smoky notes fast. Keep chambers filled, stop shots when intended, and clean oils that carbonize on metal.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Why does my French press taste burnt?',
      a: 'Long steep plus fine fines can over-extract; plunging and waiting too hot also cooks the brew. Coarser grind, shorter steep, or decanting off grounds helps.',
    },
    {
      q: 'Are oily beans burnt?',
      a: 'Oil on surface often means darker roast or age—not necessarily defect. Taste for smoke versus bitterness before deciding.',
    },
  ],
  related: [
    { title: 'Why Coffee Tastes Bitter', path: '/coffee-science/why-coffee-tastes-bitter' },
    { title: 'Why Coffee Stales', path: '/coffee-science/why-coffee-stales' },
    { title: 'Coffee Extraction Science', path: '/coffee-science/coffee-extraction-science' },
  ],
};

export default function WhyCoffeeTastesBurnt() {
  return <ScienceArticlePage spec={SPEC} />;
}
