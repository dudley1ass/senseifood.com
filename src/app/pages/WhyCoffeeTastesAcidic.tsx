import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-tastes-acidic',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Tastes Acidic',
  subtitle:
    'Acidity can be the sparkle in a great light roast—or a sharp edge when extraction stopped early, water is soft, or your stomach reads sour as “acid burn.”',
  readTime: '6 min read',
  emoji: '🧪',
  fixRecipe: { category: 'coffee', problem: 'acidic' },
  quickAnswer:
    'If the cup is sour-thin, treat it like under-extraction: slightly finer grind or longer brew. If it is tangy but balanced, you may simply be tasting origin acids—try a touch higher extraction or a different water recipe before abandoning the bean.',
  intro:
    'Acids are part of coffee’s personality: citric, malic, phosphoric, and more. “Too acidic” usually means either brightness without sweetness or a personal sensitivity to low pH and high perceived sourness. Split those cases before you “fix” coffee that is actually well brewed.',
  sections: [
    {
      heading: 'Bright versus harsh',
      paragraphs: [
        'Balanced acidity lifts fruit notes. Harsh acidity often rides with thin body and fast finish—signals to extend extraction or reassess roast age.',
      ],
    },
    {
      heading: 'Water and perception',
      paragraphs: [
        'Very soft water can make cups read sharper; high bicarbonate can flatten acids but muddy flavor. If every coffee tastes oddly sharp at home, taste your water once.',
      ],
    },
    {
      heading: 'Temperature and milk',
      paragraphs: [
        'Hot black coffee can read more sour; cooling reveals sweetness. Milk can curdle or taste off with very acidic shots—dial extraction before blaming the dairy.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is decaf less acidic?',
      a: 'Not reliably; process and roast level matter more than caffeine for perceived acid.',
    },
    {
      q: 'Does cold brew remove acid?',
      a: 'Cold brew often tastes mellower because different compounds extract at cold temperatures—it is not the same as "low acid" medically.',
    },
  ],
  related: [
    { title: 'Why Coffee Tastes Sour', path: '/coffee-science/why-coffee-tastes-sour' },
    { title: 'Why Coffee Water Chemistry Matters', path: '/coffee-science/why-coffee-water-quality-matters' },
    { title: 'Coffee Extraction Science', path: '/coffee-science/coffee-extraction-science' },
  ],
};

export default function WhyCoffeeTastesAcidic() {
  return <ScienceArticlePage spec={SPEC} />;
}
