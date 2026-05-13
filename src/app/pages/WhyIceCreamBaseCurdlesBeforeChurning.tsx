import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-ice-cream-base-curdles-before-churning',
  segment: 'ice-cream-science',
  categoryLabel: 'Ice Cream Science',
  title: 'Why Ice Cream Base Curdles Before Churning',
  subtitle:
    'Curdled base is usually gentle custard pushed too hot too fast, or acid meeting dairy before the mix had enough fat and sugar to buffer the shock.',
  readTime: '7 min read',
  emoji: '🥚',
  fixRecipe: {
    category: 'iceCream',
    problem: 'general',
  },
  quickAnswer:
    'Cook yolk bases like slow stories: steady heat, constant scraping, and stopping when the spoon leaves a track—then move the pan off the burner because metal keeps cooking. Temper eggs into hot dairy, add acidic fruit once things are cool and stable, and save big chocolate or wine hits for moments when proteins are not fragile.',
  intro:
    'French-style bases are thin custards. Heat thickens them until they coat a spoon; a little more heat turns silk into scrambled micro-bits. Acid from fruit, chocolate, or wine can do the same job faster if it hits a hot yolk mixture unwelcome. Sequencing fixes most drama before the churn ever starts.',
  sections: [
    {
      heading: 'Heat spikes hide in corners',
      paragraphs: [
        'The film at the bottom of the pan runs hotter than the average thermometer read. Stir across the entire floor, use a heavy pot or double boiler on fierce burners, and pull early—carryover heat finishes the set.',
      ],
    },
    {
      heading: 'Acid loves to surprise dairy',
      paragraphs: [
        'Citrus and bright purées tighten proteins quickly when poured into a hot yolk mix. Add them cooler, in smaller waves, or thicken the base lightly first. Chocolate carries tannins and pH swings—melt it in gently off a violent boil.',
      ],
      tip: 'If you see grain but no burned smell, strain and blend once, then taste before you restart the clock.',
    },
    {
      heading: 'Alcohol timing',
      paragraphs: [
        'Boiling booze aggressively can unsettle proteins and blow off aroma. Add off heat when possible and expect to adjust freeze time.',
      ],
    },
    {
      heading: 'Recovery versus restart',
      paragraphs: [
        'Light grain sometimes smooths with blending and fine straining if flavor is still clean. Chalky, eggy, or burned bases are kinder to remake than to force through the machine.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is slightly curdled base unsafe?',
      a: 'If it reached pasteurization and was handled cleanly, it is usually a texture issue—but gritty frozen dessert is rarely worth the churn.',
    },
    {
      q: 'Why only lemon batches curdle?',
      a: 'Acid crossed the threshold for your yolk and sugar buffer. Add acid later, cooler, or with more fat and sugar in solution first.',
    },
  ],
  related: [
    { title: 'Why Ice Cream Separates', path: '/ice-cream-science/why-ice-cream-separates' },
    { title: 'Why Ice Cream Tastes Better After Resting Overnight', path: '/ice-cream-science/why-ice-cream-tastes-better-after-resting-overnight' },
    { title: 'Why Ice Cream Gets Icy', path: '/ice-cream-science/why-ice-cream-gets-icy' },
  ],
};

export default function WhyIceCreamBaseCurdlesBeforeChurning() {
  return <ScienceArticlePage spec={SPEC} />;
}
