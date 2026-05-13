import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'coffee-extraction-science',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Coffee Extraction Science',
  subtitle:
    'Brewing is moving flavor out of grounds with water: how long, how hot, how fine, and how much turbulence decide whether the cup lands bright, sweet, harsh, or hollow—without needing a lab coat to use the idea.',
  readTime: '8 min read',
  emoji: '☕',
  fixRecipe: { category: 'coffee', problem: 'extraction-balance' },
  quickAnswer:
    'Extraction is the amount of coffee solids dissolved into your cup; strength is how concentrated that liquid is. You can have a strong cup that is under-extracted (sour, thin) or a weak cup that is over-extracted (bitter, drying). Grind, time, temperature, and ratio are the levers—move one at a time while you dial in.',
  intro:
    'Every method—from espresso to French press—is the same story told at different speeds. Early in contact, acids arrive first; sugars follow; later pulls add heavier bitters and drying compounds. Your taste buds are already reading that timeline; this article names the knobs so adjustments feel intentional instead of random.',
  sections: [
    {
      heading: 'Strength versus extraction',
      paragraphs: [
        'Strength is mostly how much water you used per gram of coffee. Extraction is how much of the bean you chose to dissolve. Confusing the two is why people chase finer grind to fix sourness and accidentally land in harsh town.',
      ],
    },
    {
      heading: 'The big four levers',
      paragraphs: [
        'They interact, so change one per session when debugging.',
      ],
      bullets: [
        {
          title: 'Grind size',
          text: 'Finer pieces expose more surface area, speeding extraction at a fixed time—espresso and pourover both obey this.',
        },
        {
          title: 'Contact time',
          text: 'Longer brews pull farther along the curve; very short shots can still over-extract if grind is too fine or the puck channels.',
        },
        {
          title: 'Temperature',
          text: 'Hotter water moves chemistry faster; dark roasts often need gentler heat because they give up solubles quickly.',
        },
        {
          title: 'Agitation and evenness',
          text: 'Pour patterns, stirring, and channeling change who gets over-worked and who stays under-extracted in the same bed.',
        },
      ],
    },
    {
      heading: 'Reading the cup like a timeline',
      paragraphs: [
        'Sour or sharp often means the early chapter dominated; bitter, dry, or hollow often means the late chapter ran long. Water quality and stale beans masquerade as extraction issues too—see the dedicated articles when fixing grind does nothing.',
      ],
      tip: 'A simple log—dose, water or yield, time, one taste word—beats memorizing curves. Patterns show up fast when notes match what you actually did.',
    },
  ],
  faqs: [
    {
      q: 'Do I need a refractometer?',
      a: 'Helpful for benchmarking, not required. Taste plus one-variable changes get most home brewers where they want to be.',
    },
    {
      q: 'Why does the same recipe taste different at altitude?',
      a: 'Boiling point drops as elevation rises, so kettle-off-boil is cooler; extraction pace shifts. Adjust grind or time slightly and expect to re-tune.',
    },
  ],
  related: [
    { title: 'Why Coffee Strength vs Extraction Matters', path: '/coffee-science/why-coffee-strength-vs-extraction-matters' },
    { title: 'Why Coffee Grind Size Matters', path: '/coffee-science/why-coffee-grind-size-matters' },
    { title: 'How to Debug Your Coffee', path: '/coffee-science/how-to-debug-your-coffee' },
  ],
};

export default function CoffeeExtractionScience() {
  return <ScienceArticlePage spec={SPEC} />;
}
