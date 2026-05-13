import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-eggs-matter-in-baking',
  segment: 'baking-science',
  categoryLabel: 'Baking Science',
  title: 'Why Eggs Matter in Baking',
  subtitle:
    'A whole egg is a quiet multitasker: it sets structure, carries water and fat, bridges fat and water, and can even lift a batter when beaten. Change the ratio of white to yolk and you change the personality of the bake.',
  readTime: '8 min read',
  emoji: '🥚',
  fixRecipe: {
    category: 'baking',
    problem: 'general',
  },
  quickAnswer:
    'Eggs set crumb through proteins that firm with heat, add moisture, emulsify fat and water with yolk lecithin, enrich with yolk fat, and can foam for lift when whipped. Cold eggs dropped into creamed butter can shock the emulsion; room-temperature eggs blend cleanly. Extra yolks lean chewy and rich; extra whites lean pale and springy but drier.',
  intro:
    'Bakers talk about flour and sugar first, but eggs are often the glue that decides whether a cake feels plush or rubbery and whether cookies stay tender or turn cakey. Whites bring water and protein that firm up; yolks bring fat and emulsifiers that soften and flavor. Whole eggs split the difference. Once you see eggs as several jobs instead of one ingredient, substitutions stop feeling like roulette and start feeling like swaps you can explain to a friend at the table.',
  sections: [
    {
      heading: 'Structure without drama',
      paragraphs: [
        'As batters bake, egg proteins unfold and link into a mesh that holds the crumb. More egg can mean more support; too much white without balancing fat and sugar can read as tough or egg-forward.',
      ],
    },
    {
      heading: 'Moisture in a neat package',
      paragraphs: [
        'Each egg brings real water along with everything else. That water hydrates flour, activates leaveners, and becomes steam in the oven. Skip or reduce eggs without adjusting liquids and you usually tell a drier story than you meant to.',
      ],
    },
    {
      heading: 'Yolks for richness and emulsion',
      paragraphs: [
        'Yolk fat tenderizes by interfering with long gluten sheets, and lecithin helps fat and water stay mixed when the batter would rather split. That stability is why room-temperature eggs matter in creamed cakes: you are protecting a fat-and-sugar foam, not just ticking a box on the recipe card.',
      ],
    },
    {
      heading: 'Whites for lift and a cleaner bite',
      paragraphs: [
        'Foamed whites hold air that expands in heat—think angel food and chiffon. Even without a meringue, whites still set firmer than yolks alone, which is why white-heavy tweaks can feel springy or dry if you do not compensate with fat or sugar.',
      ],
      tip: 'If a batter curdles when eggs go in, temperature mismatch is the usual suspect. Let eggs warm slightly and add them in smaller additions next time.',
    },
    {
      heading: 'How Fix My Recipe helps',
      paragraphs: [
        'When cookies or cakes feel "almost right" on paper but odd in the bowl, egg-to-fat balance is a common signal in the debugger. Pairing those hints with how you added eggs closes the loop faster than guessing at flour alone.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Can I replace one whole egg with two yolks?',
      a: 'Often yes for richness and chew, but you change moisture and protein. Expect a softer, more tender crumb and adjust baking time slightly.',
    },
    {
      q: 'Why add eggs one at a time?',
      a: 'Smaller additions give the fat phase time to emulsify each portion before the next hits. Dumping all at once can overwhelm a delicate creamed mixture.',
    },
  ],
  related: [
    { title: 'Why Butter Temperature Matters', path: '/baking-science/why-butter-temperature-matters' },
    { title: 'Why Cakes Are Dense', path: '/cake-science/why-cakes-are-dense' },
    { title: 'Why Cookies Turn Cakey', path: '/cookie-science/why-cookies-turn-cakey' },
  ],
};

export default function WhyEggsMatterInBaking() {
  return <ScienceArticlePage spec={SPEC} />;
}
