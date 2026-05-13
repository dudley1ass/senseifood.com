import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-smells-good',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Smells So Good',
  subtitle:
    'Roasting builds hundreds of volatile aromatics; brewing lifts them into the air. Your nose gets a fuller preview than your tongue will—heat, humidity, and saliva change which molecules you notice.',
  readTime: '6 min read',
  emoji: '👃',
  fixRecipe: { category: 'coffee', problem: 'general' },
  quickAnswer:
    'Aroma compounds are tiny, volatile, and numerous—esters, aldehydes, sulfur notes, roast-derived pyrazines—so a fresh grind floods the room while only part of that survives into the cup. Fresh beans and a clean grinder keep the good volatiles and drop the stale ones.',
  intro:
    'Walking into a cafe hits you before the first sip because smell is direct chemistry to the brain. Coffee’s roast and origin signature lives largely in those flying molecules; taste is aroma plus dissolved solids plus temperature. Understanding the split helps when the cup does not match the perfume.',
  sections: [
    {
      heading: 'What roasting adds',
      paragraphs: [
        'Green coffee is grassy; heat drives Maillard and caramelization pathways that create nutty, chocolatey, fruity, and roasty families of aroma. Darker roasts trade some origin florals for bigger roast volatiles.',
      ],
    },
    {
      heading: 'Why smell outshines taste in the moment',
      paragraphs: [
        'Orthonasal sniffing (nose to cup) is rich; retronasal aroma during sipping is different because temperature and saliva filter what reaches receptors. That is why “it smells better than it tastes” is a normal sensory report, not always a brew failure.',
      ],
    },
    {
      heading: 'Keeping aroma honest',
      paragraphs: [
        'Grind right before brewing, store beans airtight away from oxygen, and clean rancid oils from equipment. Stale coffee can still smell brown-sweet while tasting flat—see staling and hollow-cup articles.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Why does ground coffee smell weaker after an hour?',
      a: 'Volatiles escape fast once cell structure is opened. Grind fresh for peak aroma.',
    },
    {
      q: 'Do light roasts smell more acidic?',
      a: 'They often present brighter volatile acids and florals; darker roasts push smoke and spice forward.',
    },
  ],
  related: [
    { title: 'Why Coffee Aroma Does Not Match Taste', path: '/coffee-science/why-coffee-aroma-doesnt-match-taste' },
    { title: 'Why Coffee Stales', path: '/coffee-science/why-coffee-stales' },
    { title: 'Coffee Extraction Science', path: '/coffee-science/coffee-extraction-science' },
  ],
};

export default function WhyCoffeeSmellsGood() {
  return <ScienceArticlePage spec={SPEC} />;
}
