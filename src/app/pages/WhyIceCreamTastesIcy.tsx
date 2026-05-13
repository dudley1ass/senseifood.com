import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-ice-cream-tastes-icy',
  segment: 'ice-cream-science',
  categoryLabel: 'Ice Cream Science',
  title: 'Why Ice Cream Tastes Icy',
  subtitle:
    'This is the mouthfeel story: your tongue notices when ice crystals grew large enough to crunch, or when too much water froze without enough sugar, fat, and air in the way.',
  readTime: '7 min read',
  emoji: '🧊',
  fixRecipe: {
    category: 'iceCream',
    problem: 'icy',
  },
  quickAnswer:
    'Icy means crystals got big or free water dominated the bite—usually from slow freezing, skipping a good hardening step, heat shock in storage, or a base that is light on sugar and dairy solids. Churn cold, harden deep in the freezer, keep the pint away from warm swings, and rebalance the mix if the problem persists.',
  intro:
    '“Icy” is not the same as “cold.” Cold is temperature; icy is texture—little bits of ice you can almost hear. Smooth ice cream hides its water in countless tiny crystals and in syrupy liquid between them. When something warms and refreezes, small crystals donate water to bigger ones. When a base is too lean, there is not enough in the way to stop those mergers. This piece connects what you feel on the spoon to what likely happened in the machine and in the freezer door.',
  sections: [
    {
      heading: 'Big crystals read louder than small ones',
      paragraphs: [
        'While churning, the dasher keeps shaving and redistributing ice so it stays fine. If freezing finishes slowly in the carton—especially in the door shelf—crystals find neighbors and stack. A partial thaw on the ride home does the same damage: the smallest crystals melt first and their water refreezes onto whatever is left.',
      ],
    },
    {
      heading: 'Lean bases have less to stand in the way',
      paragraphs: [
        'Sugar, milk solids, and fat all interrupt how cleanly water can form one solid sheet. A water-heavy, sugar-shy mix tends toward crunch no matter how carefully you stir. Corn syrup or glucose can help alongside sucrose because they change how the syrup behaves in the cold.',
      ],
    },
    {
      heading: 'Harden like you mean it',
      paragraphs: [
        'The soft swirl coming off the machine still has water to lock up. Give it several quiet hours in the coldest, steadiest part of the freezer before you judge texture. Skipping that step invites coarse ice later.',
      ],
      tip: 'Press wrap to the surface after scooping so the next freeze does not grow frost and crunchy layers for free.',
    },
    {
      heading: 'Eggs and stabilizers buy time, not miracles',
      paragraphs: [
        'Yolks and small doses of starch or gum slow crystal growth and hold water, but they cannot erase bad storage. Match expectations to what your freezer actually does.',
      ],
    },
    {
      heading: 'What to log once, then move on',
      paragraphs: [
        'Note churn finish, harden location, and any warm episodes. If you use grams, Fix My Recipe’s icy pathway highlights lean sugar–dairy patterns that often ride along with this mouthfeel.',
      ],
    },
  ],
  related: [
    { title: 'Why Ice Cream Gets Icy', path: '/ice-cream-science/why-ice-cream-gets-icy' },
    { title: 'Why Ice Cream Is Creamy', path: '/ice-cream-science/why-ice-cream-is-creamy' },
    { title: 'Why Ice Cream Gets Sandy', path: '/ice-cream-science/why-ice-cream-gets-sandy' },
  ],
  faqs: [
    {
      q: 'Does alcohol make it icier?',
      a: 'Usually no—it keeps more water liquid, so the scoop tends softer, not crunchier, until you add so much that the base will not set.',
    },
    {
      q: 'Why is sorbet icier than ice cream?',
      a: 'It has little fat to interrupt ice; sugar and fruit solids are doing almost all the smoothing. A little icy edge is normal.',
    },
  ],
};

export default function WhyIceCreamTastesIcy() {
  return <ScienceArticlePage spec={SPEC} />;
}
