import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-oxidizes',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Oxidizes',
  subtitle:
    'Oxygen attacks volatile aromatics and delicate oils—freshly ground coffee is a wide-open wound compared with whole bean, which is why the clock starts loud after grinding.',
  readTime: '5 min read',
  emoji: '🌬️',
  fixRecipe: { category: 'coffee', problem: 'general' },
  quickAnswer:
    'Minimize oxygen exposure: airtight containers, single-dose grinding, and avoid leaving hot coffee simmering on a burner. Oxidation is one pillar of staling alongside CO2 loss and moisture.',
  intro:
    'Oxidation is the slow fade from vivid to cardboard. It partners with degassing and moisture migration to make yesterday’s hero taste tired. You cannot stop time, but you can stop pretending the hopper is a sealed vault.',
  sections: [
    {
      heading: 'What oxygen reaches first',
      paragraphs: [
        'Unsaturated lipids and sensitive aromatics are early victims—rancid notes and flatness follow. Ground coffee multiplies surface area, so oxidation races compared with whole bean.',
      ],
    },
    {
      heading: 'Heat and light as accelerants',
      paragraphs: [
        'Warm countertops and sunny jars speed reactions. Cool, dark, tight storage buys calendar days.',
      ],
    },
    {
      heading: 'In the cup, not just the bag',
      paragraphs: [
        'Leaving brewed coffee hot for hours continues chemistry—oxygen still meets liquid. Fresh pots beat marathon hot plates for flavor.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Do one-way valves help?',
      a: 'They let CO2 out without repeated oxygen bursts from opening—helpful if the bag is otherwise well sealed.',
    },
    {
      q: 'Nitro flush cans?',
      a: 'Reduced oxygen packaging slows staling; still track roast dates and storage after opening if applicable.',
    },
  ],
  related: [
    { title: 'Why Coffee Stales', path: '/coffee-science/why-coffee-stales' },
    { title: 'Why Coffee Loses Flavor', path: '/coffee-science/why-coffee-loses-flavor' },
    { title: 'Why Coffee Gets Oily', path: '/coffee-science/why-coffee-gets-oily' },
  ],
};

export default function WhyCoffeeOxidizes() {
  return <ScienceArticlePage spec={SPEC} />;
}
