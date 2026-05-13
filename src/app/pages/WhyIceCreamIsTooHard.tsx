import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-ice-cream-is-too-hard',
  segment: 'ice-cream-science',
  categoryLabel: 'Ice Cream Science',
  title: 'Why Ice Cream Is Too Hard',
  subtitle:
    'When the spoon feels like it is fighting a brick, the pint is usually telling you that too much water froze solid, or your freezer is simply colder than the scoop shop where the recipe was imagined.',
  readTime: '7 min read',
  emoji: '🧊',
  fixRecipe: {
    category: 'iceCream',
    problem: 'general',
  },
  quickAnswer:
    'Sugar, milk solids, a little fat, and sometimes a splash of alcohol all keep part of the water from locking into a single ice block—that is what makes a scoop yield instead of snap. If the base is lean on those solids, or your freezer runs extra cold, the same formula can feel like concrete. Let the carton sit out briefly before scooping, then adjust sweetness or dairy strength on the next churn if tempering is not enough.',
  intro:
    'Parlor ice cream is often stored a few degrees warmer than the back of a home freezer. That small gap is huge in the hand: the same pint can feel friendly in one house and stubborn in another. Sugar is doing more than sweetening—it changes how much water freezes at your freezer’s temperature. Air from churning and fat from cream break up the ice so the scoop can shear. When something reads “too hard,” you are usually hearing that balance slip, not that you lack arm strength.',
  sections: [
    {
      heading: 'Sugar and solids are your softeners',
      paragraphs: [
        'Think of dissolved sugar and the natural solids in milk as guests sitting between water molecules so they cannot stack neatly into one big ice hotel. Skimp on them and water wins the game. A touch of corn syrup or invert sugar can soften scoop feel without tasting like candy if you swap thoughtfully.',
      ],
    },
    {
      heading: 'Air and cream change how cold “feels”',
      paragraphs: [
        'Churning folds in tiny bubbles that interrupt a solid wall of ice. Cream carries flavor but also adds body that bends instead of shattering. A dense, low-air home churn will always feel firmer than a fluffy pint—that is equipment, not failure.',
      ],
      tip: 'Five minutes on the counter before scooping is normal in shops too—you are not “cheating,” you are letting the surface reach a temperature where the scoop can glide.',
    },
    {
      heading: 'Freezer habits matter as much as the recipe',
      paragraphs: [
        'Frost-free cycles nudge temperature up and down on a timer. Over weeks those gentle swings let crystals grow and the pint can feel harder even when you did not change a gram. Store toward the back, away from the door, and avoid half-empty cartons with a big air gap under the lid.',
      ],
    },
    {
      heading: 'A little alcohol goes a long way',
      paragraphs: [
        'Spirits lower the freezing point, which softens texture, but they are easy to overpour. If the base never sets, you crossed from helper to saboteur. Taste the warm base with that in mind.',
      ],
    },
    {
      heading: 'What to change on the next batch',
      paragraphs: [
        'Pick one lever: a modest bump in sugar or corn syrup, a slightly richer dairy line, a longer harden in the coldest zone, or a documented temper time before serving. Note how the mix looked when you stopped churning—thick soft-serve, not soup—and where the pint lived in the freezer. Fix My Recipe’s ice cream mode can sanity-check your sugar and dairy bands when you plug in grams.',
      ],
    },
  ],
  related: [
    { title: "Why Ice Cream Doesn't Scoop Smoothly", path: '/ice-cream-science/why-ice-cream-doesnt-scoop-smoothly' },
    { title: 'Why Ice Cream Gets Icy', path: '/ice-cream-science/why-ice-cream-gets-icy' },
    { title: 'Why Ice Cream Is Creamy', path: '/ice-cream-science/why-ice-cream-is-creamy' },
  ],
  faqs: [
    {
      q: 'Does letting it sit out really help?',
      a: 'Yes. A short temper brings the surface into a range where the scoop glides without melting the whole pint. Professionals do it; home freezers are just colder than most display cases.',
    },
    {
      q: 'Should I buy glycerin?',
      a: 'You rarely need industrial tricks. Get sugar, dairy balance, storage, and tempering right first—they fix most rock-hard pints.',
    },
  ],
};

export default function WhyIceCreamIsTooHard() {
  return <ScienceArticlePage spec={SPEC} />;
}
