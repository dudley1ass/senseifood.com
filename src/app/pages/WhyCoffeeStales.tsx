import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-stales',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Stales',
  subtitle:
    'Staling is degassing plus oxidation plus moisture migration—aromas leave, oils turn, and the puck stops behaving in the espresso machine you thought you knew.',
  readTime: '7 min read',
  emoji: '📆',
  fixRecipe: { category: 'coffee', problem: 'general' },
  quickAnswer:
    'Buy what you can finish fresh, store airtight at stable temperature, grind per cup, and clean oils from equipment. Rest very fresh coffee a few days for espresso if shots are fizzy; do not rest so long that cardboard arrives.',
  intro:
    'Coffee staling is not a single switch flipping off; it is a bundle of processes with different speeds. Your nose notices volatiles first; your refractometer might lag; your puck feels the gas leaving last. Good storage buys you mornings.',
  sections: [
    {
      heading: 'Degassing: CO2 leaves, shots change',
      paragraphs: [
        'Very fresh coffee is fizzy and resistant to even extraction; a few days off roast often calms espresso. Too many days and you lose aromatics that never come back.',
      ],
    },
    {
      heading: 'Oxidation and oils',
      paragraphs: [
        'Oxygen works on surface oils and delicate compounds—cardboard and rancid notes. Ground coffee ages in hours; whole bean in weeks if handled kindly.',
      ],
    },
    {
      heading: 'Moisture and grind quality',
      paragraphs: [
        'Humidity cycles soften beans and change how they fracture in the grinder. Fridge storage invites condensation unless packaging is perfect.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is the one-way valve enough?',
      a: 'It helps CO2 escape without burping the bag open constantly; still store cool and dark.',
    },
    {
      q: 'Nitrogen flushing at home?',
      a: 'Rare; focus on small purchases, airtight jars, and grinding fresh.',
    },
  ],
  related: [
    { title: 'Why Coffee Oxidizes', path: '/coffee-science/why-coffee-oxidizes' },
    { title: 'Why Coffee Loses Flavor', path: '/coffee-science/why-coffee-loses-flavor' },
    { title: 'Why Coffee Gets Oily', path: '/coffee-science/why-coffee-gets-oily' },
  ],
};

export default function WhyCoffeeStales() {
  return <ScienceArticlePage spec={SPEC} />;
}
