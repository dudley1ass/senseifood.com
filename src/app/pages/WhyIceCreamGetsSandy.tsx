import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-ice-cream-gets-sandy',
  segment: 'ice-cream-science',
  categoryLabel: 'Ice Cream Science',
  title: 'Why Ice Cream Gets Sandy',
  subtitle:
    'If the grit is not big ice, it is often lactose—milk’s natural sugar—falling out of the cold syrup because the mix carried more milk solids than that syrup could quietly hold.',
  readTime: '8 min read',
  emoji: '🏖️',
  fixRecipe: {
    category: 'iceCream',
    problem: 'icy',
  },
  quickAnswer:
    'Sandy mouthfeel usually means tiny lactose crystals. Heavy milk powder, evaporated milk, or very dairy-forward bases push lactose past what the cold liquid can keep dissolved—especially after slow freezing or a warm refreeze. Ease milk powder, swap part of the table sugar for corn syrup or glucose, rest the cold base overnight before churning, and keep the freezer steady.',
  intro:
    'People call two different textures “grainy.” Big ice feels like crunch; lactose sand feels like fine polenta on the tongue and often shows up a few days in, not at the dasher. Same freezer, same recipe, new texture—that timeline is the hint. Once you know which grit you have, the fixes stop fighting each other.',
  sections: [
    {
      heading: 'How lactose sand sneaks in',
      paragraphs: [
        'Milk sugar does not dissolve as willingly in cold water as table sugar does. When you concentrate dairy—dry milk, cooked-down bases, lots of skim solids—the leftover liquid between ice crystals cannot hide all of that lactose anymore. Crystals form, and your tongue reads them as sand.',
        'A partial thaw concentrates the syrup further, which is why a pint can feel smooth on Saturday and sandy by Thursday. Corn syrup or glucose shares the workload with sucrose and keeps lactose more comfortable in solution—small swaps, not a bucket of extra white sugar.',
      ],
      tip: 'If sand appears only after life in the door shelf, suspect temperature swings before you rewrite the whole formula.',
    },
    {
      heading: 'Freezing path matters as much as ingredients',
      paragraphs: [
        'Slow freezing grows fewer, larger ice pockets and squeezes the syrup between them, which nudges lactose toward crystallizing. A warm draw from the machine plus a weak hardening step sets that story in motion. Harden deep and cold, then leave the door closed.',
      ],
    },
    {
      heading: 'Stabilizers, yolks, and a night’s rest',
      paragraphs: [
        'Yolks, starch, and tiny amounts of gum slow crystal growth and hold water so the syrup stays calmer. Aging the base overnight lets powders fully hydrate so chalkiness does not masquerade as sand on day one.',
      ],
    },
    {
      heading: 'What Fix My Recipe highlights',
      paragraphs: [
        'When grams show a lot of non-fat dairy solids compared with sugars, sandy complaints are common. Adjust one lever per test—milk powder, glucose swap, or hardening temperature—and taste blind with a friend; sand is easier to agree on than “too rich.”',
      ],
    },
  ],
  related: [
    { title: 'Why Ice Cream Tastes Icy', path: '/ice-cream-science/why-ice-cream-tastes-icy' },
    { title: 'Why Ice Cream Gets Icy', path: '/ice-cream-science/why-ice-cream-gets-icy' },
    { title: 'Why Ice Cream Develops Ice Layers Over Time', path: '/ice-cream-science/why-ice-cream-develops-ice-layers-over-time' },
  ],
  faqs: [
    {
      q: 'Is this the same as fat bloom?',
      a: 'Fat issues often feel waxy or greasy; lactose sand feels crystalline and dry. If you are unsure, note whether milk powder or heavy dairy loading changed recently.',
    },
    {
      q: 'Will vodka fix sand?',
      a: 'It softens texture generally but does not target lactose. Fix the sugar spectrum and milk solids first.',
    },
  ],
};

export default function WhyIceCreamGetsSandy() {
  return <ScienceArticlePage spec={SPEC} />;
}
