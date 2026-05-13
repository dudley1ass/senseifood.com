import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-tastes-sour',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Tastes Sour',
  subtitle:
    'Sharp, lemony, or “salty” sourness usually means the early acids showed up without enough sweetness and body behind them—classic under-extraction—or the bean is very bright and your water never opened it up.',
  readTime: '7 min read',
  emoji: '🍋',
  fixRecipe: { category: 'coffee', problem: 'sour' },
  quickAnswer:
    'Try a slightly finer grind, a longer brew, or a touch hotter water—one change at a time—until sweetness balances the acids. If sourness is grassy or peanutty, check roast date and rest; if it is thin and salty, extraction likely ended early.',
  intro:
    'Sour is not always “bad coffee.” Light roasts can be joyfully tart when sweetness follows. The problem is sour alone, or sour with hollow body—that is when water did not pick up enough of the mid-palette before you stopped the brew.',
  sections: [
    {
      heading: 'Under-extraction in plain language',
      paragraphs: [
        'Water did not spend enough effective time on enough surface area. The acids dissolved first; sugars and colloids that round the cup lagged behind.',
      ],
    },
    {
      heading: 'Dial moves that usually help',
      paragraphs: [
        'Pick the lever that matches your method; do not move them all at once.',
      ],
      bullets: [
        { title: 'Grind finer', text: 'Increases surface area at the same clock time—often the first fix for pourover and immersion.' },
        { title: 'Brew longer or slower pour', text: 'Extends contact if grind is already reasonable.' },
        { title: 'Check temperature', text: 'Water that is truly too cool slows extraction—especially on big batches.' },
        { title: 'Evenness', text: 'Dry clumps or channeling let water bypass grounds; some zones sour, others bitter.' },
      ],
    },
    {
      heading: 'When it is not extraction',
      paragraphs: [
        'Very fresh light roast can taste sharp until degassing settles. Under-dosed espresso can be sour and weak at once. Hard water or odd mineral balance can flatten sweetness—compare with filtered water once.',
      ],
      tip: 'Taste at drinking temperature; scorching hot cups hide sweetness and exaggerate perceived sourness.',
    },
  ],
  faqs: [
    {
      q: 'Why did finer grind make it worse?',
      a: 'You may have sped flow unevenly, caused channeling, or pushed into bitter-astringent territory. Back up one step and change time instead.',
    },
    {
      q: 'Is sour the same as acidic on the bag?',
      a: 'Acidity is a flavor category (like malic or citric). Sour is how it reads when balance is off. Bright can be good; sharp alone is the warning.',
    },
  ],
  related: [
    { title: 'Why Coffee Tastes Under-Extracted', path: '/coffee-science/why-coffee-tastes-under-extracted' },
    { title: 'Coffee Extraction Science', path: '/coffee-science/coffee-extraction-science' },
    { title: 'Why Coffee Tastes Bitter', path: '/coffee-science/why-coffee-tastes-bitter' },
  ],
};

export default function WhyCoffeeSour() {
  return <ScienceArticlePage spec={SPEC} />;
}
