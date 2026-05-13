import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-tastes-different-cold',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Tastes Different Cold',
  subtitle:
    'Temperature changes what your nose catches, how acids read, and which aromatics stay dissolved—so the same brew can feel bright hot and dull or sharp when chilled.',
  readTime: '6 min read',
  emoji: '🧊',
  fixRecipe: { category: 'coffee', problem: 'general' },
  quickAnswer:
    'Volatile aromatics hide when cold; bitterness can linger while sweetness feels quieter—brew a touch sweeter or brighter on purpose for iced, cool concentrate before diluting, and drink soon after chilling to avoid oxidation flatness.',
  intro:
    'Iced coffee is not hot coffee with ice hiding in the corner of the glass. Cooling shifts solubility and volatility; chlorogenic relatives and caffeine still register while floral top notes ghost away. Design the recipe for the temperature you will actually serve.',
  sections: [
    {
      heading: 'What temperature does to perception',
      paragraphs: [
        'Warm liquid lifts aromatics to your nose; cold keeps them in the cup. Acidity can read sharper when sweetness is muted, even if the chemistry set is unchanged.',
      ],
    },
    {
      heading: 'Brewing for ice',
      paragraphs: [
        'Account for melt: either stronger concentrate, less ice as “water,” or ice as a measured part of the recipe. Flash-chill (ice bath) preserves more aromatics than slow fridge oxidizing.',
      ],
    },
    {
      heading: 'Staling accelerates once diluted',
      paragraphs: [
        'More oxygen contact in a tall iced drink plus time on the bar counter pushes cardboard notes. Same story as staling—just faster drama.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Why does cold brew taste less sour?',
      a: 'Cold extraction pulls a different mix of compounds; lower temperature softens some acids while oils still carry body.',
    },
    {
      q: 'Milk behaves oddly in iced lattes?',
      a: 'Acid plus cold can highlight curdling risk with some milks; dial shot extraction and milk freshness.',
    },
  ],
  related: [
    { title: 'Why Coffee Tastes Better at Certain Temperatures', path: '/coffee-science/why-coffee-tastes-better-at-certain-temperatures' },
    { title: 'Why Coffee Oxidizes', path: '/coffee-science/why-coffee-oxidizes' },
    { title: 'Coffee Extraction Science', path: '/coffee-science/coffee-extraction-science' },
  ],
};

export default function WhyCoffeeTastesDifferentCold() {
  return <ScienceArticlePage spec={SPEC} />;
}
