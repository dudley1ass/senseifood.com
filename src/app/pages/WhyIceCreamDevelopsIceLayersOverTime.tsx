import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-ice-cream-develops-ice-layers-over-time',
  segment: 'ice-cream-science',
  categoryLabel: 'Ice Cream Science',
  title: 'Why Ice Cream Develops Ice Layers Over Time',
  subtitle:
    'Frost rings and crusty lids are diary entries: the pint warmed a little, moisture moved to the coldest surface, and froze again as a sheet.',
  readTime: '7 min read',
  emoji: '❄️',
  fixRecipe: {
    category: 'iceCream',
    problem: 'icy',
  },
  quickAnswer:
    'Ice layers follow temperature swings and air gaps. Press wrap to the surface, shrink headspace, keep the pint away from the door, and avoid microwaving one face of the tub. Stabilizers buy time but cannot veto a wobbly freezer.',
  intro:
    'Uniform iciness is one problem; stripes and lids are another. Layers track where the surface briefly melted and where vapor decided to land. Every door opening and frost-free thaw is a tiny weather event inside the carton. Learn those habits and the layers calm down.',
  sections: [
    {
      heading: 'Small warm-ups write big frost lines',
      paragraphs: [
        'You do not need a full melt—a soft edge is enough for water to move and refreeze as a visible band. Repeated swings stack those stories until the lid looks like a winter field.',
      ],
    },
    {
      heading: 'Headspace is a mini weather system',
      paragraphs: [
        'Air above the ice cream exchanges moisture; wide surfaces frost faster. Smooth the top like frosting, press film to it, then lid. Shorter, wider tubs help.',
      ],
    },
    {
      heading: 'Serving habits leave rings',
      paragraphs: [
        'The softened rim where you scooped refreezes as a collar because that ring saw more heat than the core. Smooth it before you put it back, or temper in the fridge instead of nuking corners.',
      ],
      tip: 'A cheap freezer thermometer for a day tells you if “mystery layers” are really a thermostat story.',
    },
    {
      heading: 'Layers versus general iciness',
      paragraphs: [
        'If the whole pint is crunchy, look at churn and solids. If it is mostly the lid or one side, look at storage and packaging first.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is this freezer burn?',
      a: 'Close cousins. Burn is dry, gray, flavorless surface; layers can be pure ice from moisture moving without full desiccation.',
    },
    {
      q: 'Will a colder freezer always help?',
      a: 'Steady beats extreme—huge swings with a deep-cold average can still layer. Aim for calm cold.',
    },
  ],
  related: [
    { title: 'Why Ice Cream Gets Freezer Burn', path: '/ice-cream-science/why-ice-cream-gets-freezer-burn' },
    { title: 'Why Ice Cream Gets Icy', path: '/ice-cream-science/why-ice-cream-gets-icy' },
    { title: 'Why Ice Cream Melts Fast', path: '/ice-cream-science/why-ice-cream-melts-fast' },
  ],
};

export default function WhyIceCreamDevelopsIceLayersOverTime() {
  return <ScienceArticlePage spec={SPEC} />;
}
