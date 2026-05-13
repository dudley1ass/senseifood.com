import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-ice-cream-gets-icy',
  segment: 'ice-cream-science',
  categoryLabel: 'Ice Cream Science',
  title: 'Why Ice Cream Gets Icy',
  subtitle:
    'When a spoonful feels like fine sand or tiny pebbles, you are mostly feeling ice crystals that grew too large. The story is usually about time in the cold, how much water was free to freeze, and whether the pint ever took a warm detour on the way home.',
  readTime: '7 min read',
  emoji: '🧊',
  fixRecipe: {
    category: 'iceCream',
    problem: 'icy',
  },
  quickAnswer:
    'Icy ice cream means the crystals in the pint are big enough that your tongue notices them as crunch or grit. That almost always comes from freezing too slowly, letting the carton warm and refreeze (heat shock), or using a base that is too light on sugar, fat, and milk solids to hold water in a smoother way. Churn cold, harden in the coldest part of the freezer, press wrap onto the surface, and avoid the freezer door for long-term storage.',
  intro:
    'Smooth ice cream is really a race: you want many tiny ice crystals locked in place before they find each other and merge into fewer, bigger ones. Home machines and home freezers are kinder to the merge story than the lock story, which is why the same recipe can feel glorious on day one and tired by week two. Sugar, milk solids, and fat are not only flavor—they change how much water freezes hard and how fast crystals can grow. Stabilizers and eggs nudge that same balance from the side. This article walks through what your freezer and your formula are doing together so the fixes feel like kitchen choices, not lab homework.',
  sections: [
    {
      heading: 'What “icy” is actually telling you',
      paragraphs: [
        'Tiny crystals read as cream; large ones read as crunch or cold water on the teeth. You do not need a microscope to care about this—your mouth is already the instrument. When something feels icy, picture a few big ice chunks carrying the load instead of countless small ones sharing it.',
      ],
    },
    {
      heading: 'Heat shock and the refreeze cycle',
      paragraphs: [
        'Each time the pint warms a little and goes cold again, small crystals melt first and their water refreezes onto whatever crystals are left. That is why the texture coarsens even when you never “fully” melted the carton. The door shelf, a long car ride, or a half-open lid is enough drama for crystal growth.',
      ],
      tip: 'After every scoop, press plastic wrap flat against the surface before the lid goes back on. It is the cheapest insurance against air gaps that encourage frost and coarse texture.',
    },
    {
      heading: 'Water, solids, and balance',
      paragraphs: [
        'Water is going to become ice; the question is how much stays tied up in syrup with sugar and dairy solids, and how much is free to stack into big crystals. Lean bases—skimpy on sugar or dairy solids—tend to freeze harder and icier no matter how careful you are with the machine.',
      ],
    },
    {
      heading: 'Churn, harden, and patience',
      paragraphs: [
        'Draw the mix when it still looks like thick soft-serve, then let it finish in the coldest, calmest corner of the freezer. Skipping a real hardening step leaves water to freeze slowly in the carton, which is exactly when crystals sneak upward in size.',
      ],
    },
    {
      heading: 'How Fix My Recipe helps',
      paragraphs: [
        'Ice cream mode compares your sugar and dairy-solid ranges to reference patterns so a lean base shows up before you churn another gallon. Pair that with a simple kitchen log—churn time, hardening spot, and any warm episodes—and you stop guessing which run was different.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Does alcohol make ice cream icier?',
      a: 'Usually the opposite: a modest amount lowers the freezing point so the base stays a bit softer in the freezer. Push it too far and the mix may never firm up, which is a different problem entirely.',
    },
    {
      q: 'Why does store ice cream sometimes feel smoother than mine?',
      a: 'Commercial plants freeze faster and stabilize formulas for long distribution. At home you win with balanced solids, quick churn, gentle storage, and accepting that week-three texture will not match day one unless you add stabilizers or adjust sugar.',
    },
  ],
  related: [
    { title: 'Why Ice Cream Is Creamy', path: '/ice-cream-science/why-ice-cream-is-creamy' },
    { title: 'Why Ice Cream Melts Fast', path: '/ice-cream-science/why-ice-cream-melts-fast' },
    { title: 'Why Ice Cream Gets Freezer Burn', path: '/ice-cream-science/why-ice-cream-gets-freezer-burn' },
  ],
};

export default function WhyIceCreamGetsIcy() {
  return <ScienceArticlePage spec={SPEC} />;
}
