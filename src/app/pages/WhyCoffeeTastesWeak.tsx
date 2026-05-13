import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-tastes-weak',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Tastes Weak',
  subtitle:
    'Weak is usually “not enough coffee in the water,” not “mysteriously bad beans.” Fix dose and yield before you chase exotic water recipes—then check grind if the cup is both thin and sour.',
  readTime: '6 min read',
  emoji: '🫗',
  fixRecipe: { category: 'coffee', problem: 'weak' },
  quickAnswer:
    'Use a scale: raise dose or use less water to increase strength. If raising dose makes the cup sour, you may need a slightly finer grind or longer contact so extraction keeps pace with concentration.',
  intro:
    'Tea-like coffee is almost always a ratio issue first. Home recipes often eyeball scoops while the kettle pours extra splash “to top off.” Strength is grams of coffee per grams of water (or espresso yield); extraction is a different knob. Get strength in range, then fine-tune flavor.',
  sections: [
    {
      heading: 'Start with the ratio, not the myth',
      paragraphs: [
        'Weigh beans in, weigh water—or espresso yield—out. Small ratio shifts move perceived “weak” faster than micro grind tweaks when you were simply dilute.',
      ],
    },
    {
      heading: 'When weak comes with sour',
      paragraphs: [
        'You increased water or lowered dose and now the cup is thin and sharp—that is under-extraction at a low strength. Nudge grind or time after you anchor dose.',
      ],
    },
    {
      heading: 'Gear gotchas',
      paragraphs: [
        'Bypass in automatic drippers, sneaky losses in grinder chutes, and baskets that do not fit your dose all steal strength quietly. Purge the grinder; verify basket size; preheat so you are not compensating with longer shots that taste hollow.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Will darker roast fix weak?',
      a: 'Darker roasts extract differently and can taste “bigger,” but if the ratio is wrong you will still have thin coffee—just thinner brown coffee.',
    },
    {
      q: 'Why does my iced coffee taste weak?',
      a: 'Ice dilutes. Brew concentrate, use ice as part of your recipe water, or chill a double-strength batch intentionally.',
    },
  ],
  related: [
    { title: 'Why Coffee Strength vs Extraction Matters', path: '/coffee-science/why-coffee-strength-vs-extraction-matters' },
    { title: 'Coffee Extraction Science', path: '/coffee-science/coffee-extraction-science' },
    { title: 'How to Debug Your Coffee', path: '/coffee-science/how-to-debug-your-coffee' },
  ],
};

export default function WhyCoffeeTastesWeak() {
  return <ScienceArticlePage spec={SPEC} />;
}
