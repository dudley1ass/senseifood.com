import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-ice-cream-gets-freezer-burn',
  segment: 'ice-cream-science',
  categoryLabel: 'Ice Cream Science',
  title: 'Why Ice Cream Gets Freezer Burn',
  subtitle:
    'That gray, dry lid on the pint is not mold running ahead of you—it is mostly water that walked away from the surface into the cold, dry air of the freezer, leaving fat and sugar behind in a chalky layer.',
  readTime: '6 min read',
  emoji: '🥶',
  fixRecipe: {
    category: 'iceCream',
    problem: 'general',
  },
  quickAnswer:
    'Freezer burn on ice cream is surface dehydration: ice sublimates straight to vapor in cold, dry air, especially when a big air pocket sits under the lid. Press wrap directly on the surface, keep the pint toward the back of the freezer, avoid slow partial thaws, and eat within a reasonable window so you are not giving moisture weeks to escape.',
  intro:
    'Think of the ice cream surface as a slow-moving puddle trying to evaporate upward even while it is frozen. Every time the air above it is drier than the mix—and especially when the temperature wobbles—water leaves as vapor and the top layer stops tasting like dessert and starts tasting like cold cardboard. It is safe but sad. The fixes are boring and effective: remove headspace air, stabilize temperature, and pick containers that actually seal.',
  sections: [
    {
      heading: 'What you are seeing on the lid',
      paragraphs: [
        'Moisture left first; fat and sugar stayed concentrated. That is why freezer-burned spots feel waxy or gritty and taste flat. Scraping the top quarter inch often reveals perfectly good ice cream underneath if the rest of the pint was protected.',
      ],
    },
    {
      heading: 'Air pockets and the door shelf',
      paragraphs: [
        'Half-empty cartons accelerate burn because there is more dry air cycling across the surface. The freezer door is the warmest, swingiest real estate in the box. Back-of-the-freezer storage is quieter for both temperature and texture.',
      ],
      tip: 'After every scoop, smooth the top like frosting, press plastic wrap to it, then add the lid. You are trying to delete the air gap, not just “cover” the pint.',
    },
    {
      heading: 'Temperature swings stack damage',
      paragraphs: [
        'Frost-free cycles gently warm the cavity on a schedule. Each micro-thaw gives surface ice a chance to leave as vapor or re-deposit as frost on the lid. Over weeks the dessert quality slides even if nobody left the carton on the counter.',
      ],
    },
    {
      heading: 'Containers and timelines',
      paragraphs: [
        'Rigid, tight lids beat thin paper for long holds. Homemade especially benefits from shallow containers that reduce surface area per volume. Aim to finish opened pints within a few weeks—not because they become unsafe, but because quality is a clock.',
      ],
    },
    {
      heading: 'How Fix My Recipe helps',
      paragraphs: [
        'Burn is storage-first, but lean bases with extra free water can show damage sooner. When you log solids in the tool, you get a clearer picture of whether your formula also needs a richer balance—not only a better lid habit.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is freezer-burned ice cream unsafe?',
      a: 'No—it is a quality issue. Trim the affected layer if the underneath still tastes fine; toss if the whole pint smells off or has been temperature-abused beyond what you trust.',
    },
    {
      q: 'Why does ice cream burn faster than frozen peas?',
      a: 'Sugar and solids change freezing behavior and moisture mobility; the surface of ice cream is more “active” than dense vegetables, and we usually open the carton far more often.',
    },
  ],
  related: [
    { title: 'Why Ice Cream Gets Icy', path: '/ice-cream-science/why-ice-cream-gets-icy' },
    { title: 'Why Ice Cream Develops Ice Layers Over Time', path: '/ice-cream-science/why-ice-cream-develops-ice-layers-over-time' },
    { title: 'Why Ice Cream Is Creamy', path: '/ice-cream-science/why-ice-cream-is-creamy' },
  ],
};

export default function WhyIceCreamGetsFreezerBurn() {
  return <ScienceArticlePage spec={SPEC} />;
}
