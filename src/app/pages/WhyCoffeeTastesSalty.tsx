import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-tastes-salty',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Tastes Salty',
  subtitle:
    'True saltiness is rare in black coffee—often it is sourness, minerally water, or even blood pressure and perception playing tricks next to a very bright cup.',
  readTime: '5 min read',
  emoji: '🧂',
  fixRecipe: { category: 'coffee', problem: 'general' },
  quickAnswer:
    'Taste filtered water alone; cup a bypass sample on batch brewers; reassess under-extracted sour shots that read “salty.” If only one person tastes salt, consider palate context and medications when appropriate.',
  intro:
    'Coffee contains potassium and other minerals but usually not enough to taste like seawater. When someone says salty, dig for sour under-extraction, hard water, or sensory crossover with savory roast notes.',
  sections: [
    {
      heading: 'Sour masked as salty',
      paragraphs: [
        'High chlorogenic acids and thin body can register like brine to some tasters, especially next to dairy. Fix extraction before you chase salt literally.',
      ],
    },
    {
      heading: 'Water minerals',
      paragraphs: [
        'High sodium or TDS water can add a saline edge; soft water might instead flatten sweetness and make acids feel sharper—not salty, but confusing.',
      ],
    },
    {
      heading: 'Gear and milk',
      paragraphs: [
        'Residue from cleaning products or salty steam wands is real-world salt—rinse thoroughly. Curdling issues can also read oddly on the tongue.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Does adding salt to grounds work?',
      a: 'Tiny pinches are used by some to reduce perceived bitterness via taste interaction—not the same as fixing salty water.',
    },
    {
      q: 'Decaf salty?',
      a: 'Some processes leave different mineral mouthfeel; still check water and extraction first.',
    },
  ],
  related: [
    { title: 'Why Coffee Water Chemistry Matters', path: '/coffee-science/why-coffee-water-quality-matters' },
    { title: 'Why Coffee Tastes Sour', path: '/coffee-science/why-coffee-tastes-sour' },
    { title: 'Coffee Extraction Science', path: '/coffee-science/coffee-extraction-science' },
  ],
};

export default function WhyCoffeeTastesSalty() {
  return <ScienceArticlePage spec={SPEC} />;
}
