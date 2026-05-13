import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-gets-oily',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Gets Oily',
  subtitle:
    'Oil on bean surfaces is mostly lipids pushed out by roasting—darker roasts look shinier—and over time those same oils oxidize and taste rancid if left exposed.',
  readTime: '5 min read',
  emoji: '🛢️',
  fixRecipe: { category: 'coffee', problem: 'general' },
  quickAnswer:
    'Shiny beans are normal for many dark roasts. Rancid smells are oxidation: store airtight, buy smaller bags, and wipe grinder chutes. Oily beans can clog super-automatic grinders—dial cleaning frequency up, not denial.',
  intro:
    'Oil is not a defect by itself; it is part of coffee’s flavor carrying system. Problems start when that oil sits on hot metal or in hopper corners for weeks, turning paint-thinner nasty. Learn to read shine versus age.',
  sections: [
    {
      heading: 'Roast pushes lipids outward',
      paragraphs: [
        'Cell walls break down in the roaster; darker profiles migrate more oil to the surface quickly. Light roasts can look matte for weeks, then show spots as they age.',
      ],
    },
    {
      heading: 'When oil means stale',
      paragraphs: [
        'If shine comes with flat cardboard aroma and fast fading crema, oxygen has been working. Fresh dark roast can be glossy and still vibrant; old glossy beans can taste tired.',
      ],
    },
    {
      heading: 'Housekeeping for equipment',
      paragraphs: [
        'Oils stick in burrs and screens, turning the next dozen shots funky. Regular brushing and factory-recommended deep cleans keep oily beans from becoming rancid seasoning.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Are oily beans harder to grind?',
      a: 'They can clump more; WDT-style stirring for espresso and frequent cleaning reduce static and clumping issues.',
    },
    {
      q: 'Does freezing stop oil?',
      a: 'Freezing slows oxidation if beans are sealed and not temperature-cycled; it does not suck oil back in.',
    },
  ],
  related: [
    { title: 'Why Coffee Stales', path: '/coffee-science/why-coffee-stales' },
    { title: 'Why Coffee Loses Flavor', path: '/coffee-science/why-coffee-loses-flavor' },
    { title: 'Why Coffee Makes Crema', path: '/coffee-science/why-coffee-makes-crema' },
  ],
};

export default function WhyCoffeeGetsOily() {
  return <ScienceArticlePage spec={SPEC} />;
}
