import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-tastes-metallic',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Tastes Metallic',
  subtitle:
    'Metal flavor is often actual metal ions from water or equipment, but dryness from over-extraction or certain roasts can also read “penny-like” on the tongue.',
  readTime: '5 min read',
  emoji: '🪙',
  fixRecipe: { category: 'coffee', problem: 'general' },
  quickAnswer:
    'Cup your tap water alone; descale kettles and espresso boilers; replace suspect burrs or chipped ceramics; rule out aluminum moka pots if you taste only there. If water is clean and taste persists medically, check in with a clinician when appropriate.',
  intro:
    'True metallic notes often trace to plumbing, old machine scale, or reactive kettles—not the Ethiopian you just bought. Still, harshness from over-extraction can mimic metal for some tasters, so run a clean water control before declaring the beans guilty.',
  sections: [
    {
      heading: 'Water first',
      paragraphs: [
        'Copper lines, high iron, or old house pipes can add metallic ions that survive brewing. Filter or bottled tests isolate this fast.',
      ],
    },
    {
      heading: 'Equipment and maintenance',
      paragraphs: [
        'Scale in boilers, aluminum oxidation, and chipped ceramic burrs shedding dust have all shown up in real kitchens. Clean, descale, replace worn parts on schedule.',
      ],
    },
    {
      heading: 'Roast and extraction masquerades',
      paragraphs: [
        'Some roasty-bitter profiles plus dryness hit the same receptors for certain people. Try a gentler recipe on a fresh bag before replacing plumbing.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Only espresso tastes metallic?',
      a: 'Check group gaskets, shower screens, and portafilter cleanliness; brass paths can contribute if neglected.',
    },
    {
      q: 'Can anemia make coffee taste metallic?',
      a: 'Some medical conditions alter taste perception; if it is every food and drink, consider professional advice.',
    },
  ],
  related: [
    { title: 'Why Coffee Water Chemistry Matters', path: '/coffee-science/why-coffee-water-quality-matters' },
    { title: 'Why Coffee Tastes Bitter', path: '/coffee-science/why-coffee-tastes-bitter' },
    { title: 'Coffee Extraction Science', path: '/coffee-science/coffee-extraction-science' },
  ],
};

export default function WhyCoffeeTastesMetallic() {
  return <ScienceArticlePage spec={SPEC} />;
}
