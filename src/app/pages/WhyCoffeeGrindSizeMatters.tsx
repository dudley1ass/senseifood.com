import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-coffee-grind-size-matters',
  segment: 'coffee-science',
  categoryLabel: 'Coffee Science',
  title: 'Why Coffee Grind Size Matters',
  subtitle:
    'Grind is surface area: it sets how fast water can pull flavor, how flow moves through a puck, and whether you land bright, sweet, or harsh for a given recipe.',
  readTime: '7 min read',
  emoji: '⚙️',
  fixRecipe: { category: 'coffee', problem: 'extraction-balance' },
  quickAnswer:
    'Too coarse and water races—under-extracted, sour, weak. Too fine and water stalls or channels—bitter, astringent, muddy. Adjust grind in small steps, keep dose steady, and watch time and taste move together.',
  intro:
    'If brewing were music, grind size is the tempo marking. Everything else—temperature, ratio, pour—plays at that tempo. People reach for grind first because it is the biggest practical dial on flavor without always changing how much coffee you own.',
  sections: [
    {
      heading: 'Surface area in plain terms',
      paragraphs: [
        'Smaller pieces mean more coffee touches water at once, so extraction speeds up. Boulders leave insides untouched until you overcompensate with time and get weirdness at the edges.',
      ],
    },
    {
      heading: 'Uniformity matters as much as average size',
      paragraphs: [
        'A spread of fines and boulders sends water through the easy paths and over-extracts dust while boulders under-extract. Better grinders tighten that spread; WDT and sifting are hacks that acknowledge unevenness.',
      ],
    },
    {
      heading: 'Method-specific landmarks',
      paragraphs: [
        'Espresso wants fine enough to resist flow for dozens of seconds; French press wants coarse enough to keep silty fines from dominating; pourover sits between and still depends on your pour rate.',
      ],
      tip: 'Change grind, not dose, when you are chasing flavor balance at a fixed ratio—then retune time if needed.',
    },
  ],
  faqs: [
    {
      q: 'Why did one notch finer choke my shot?',
      a: 'Espresso is nonlinear; small grind changes massively alter resistance. Step half-notches if your grinder allows, or adjust dose slightly with the new grind.',
    },
    {
      q: 'Blade grinder?',
      a: 'It makes a wide mix of sizes; expect muddier cups. Pulse, shake, and accept limits or upgrade when you are ready.',
    },
  ],
  related: [
    { title: 'Why Coffee Brewing Time Matters', path: '/coffee-science/why-coffee-brewing-time-matters' },
    { title: 'Coffee Extraction Science', path: '/coffee-science/coffee-extraction-science' },
    { title: 'Why Espresso Channels', path: '/coffee-science/why-espresso-channels' },
  ],
};

export default function WhyCoffeeGrindSizeMatters() {
  return <ScienceArticlePage spec={SPEC} />;
}
