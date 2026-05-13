import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-tastes-flat',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Tastes Flat',
  subtitle:
    'Flat is the absence of sparkle—stale beans, low extractions, very soft water, or brewing so timid that acids and sugars never show up to the party.',
  readTime: '6 min read',
  emoji: '📄',
  fixRecipe: { category: 'coffee', problem: 'general' },
  quickAnswer:
    'Check roast date first, then raise extraction slightly (grind, time, or temperature within safe bands) and compare water. Flat plus cardboard screams age; flat plus sour screams under-extraction.',
  intro:
    'Flat is not the same as weak. Weak is dilute; flat can be strong brown water with no highs or lows—like a song with the treble knob snapped off. Separate age issues from recipe issues before you buy another bag.',
  sections: [
    {
      heading: 'Stale versus under-extracted',
      paragraphs: [
        'Stale loses aromatics and sweetness first; under-extracted keeps some brightness but feels hollow and often sour. Taste side by side with a known-fresh control when possible.',
      ],
    },
    {
      heading: 'Water that hides flavor',
      paragraphs: [
        'Extremely soft or empty distilled profiles can taste blank; aggressive filtration can strip minerals that help extraction. See the water chemistry article for nuance.',
      ],
    },
    {
      heading: 'Brew habits',
      paragraphs: [
        'Cool water, fast bypass, or timid pourover pulses can all land shy of a full flavor curve. Push one lever, log it, taste again.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Why does my dark roast taste flat, not strong?',
      a: 'Dark roasts can lose origin nuance; if also stale, you get roasty brown without sweetness—try fresher batch or gentler brew to preserve sugars.',
    },
    {
      q: 'Paper filter flat?',
      a: 'Filters remove oils; that changes body and perceived depth versus metal. Not defect—preference.',
    },
  ],
  related: [
    { title: 'Why Coffee Tastes Hollow', path: '/coffee-science/why-coffee-tastes-hollow' },
    { title: 'Why Coffee Loses Flavor', path: '/coffee-science/why-coffee-loses-flavor' },
    { title: 'Why Coffee Water Chemistry Matters', path: '/coffee-science/why-coffee-water-quality-matters' },
  ],
};

export default function WhyCoffeeTastesFlat() {
  return <ScienceArticlePage spec={SPEC} />;
}
