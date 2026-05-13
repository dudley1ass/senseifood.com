import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-ice-cream-doesnt-scoop-smoothly',
  segment: 'ice-cream-science',
  categoryLabel: 'Ice Cream Science',
  title: "Why Ice Cream Doesn't Scoop Smoothly",
  subtitle:
    'Rough scoops are usually a mix of “too cold,” “too lean on sugar and solids,” and “not tempered”—arm strength is rarely the real hero.',
  readTime: '7 min read',
  emoji: '🍨',
  fixRecipe: {
    category: 'iceCream',
    problem: 'general',
  },
  quickAnswer:
    'Let the pint warm slightly so the surface yields; if it still shatters, look at sugar, dairy solids, and water balance, then at how cold your freezer really is. Dense, low-air home churns also feel firmer than grocery pints—that is normal, not a defect.',
  intro:
    'Scooping should feel like shearing through something that yields—not shattering a windshield. When the surface is rock and the center is softer, you are fighting geometry and temperature, not the recipe alone. Narrow pints hide a cold core; a warm scoop only masks the problem on the rim. Temper, measure your cold, and only then adjust the mix.',
  sections: [
    {
      heading: 'Temper like it is part of the recipe',
      paragraphs: [
        'Five to ten minutes on the counter (more in a hot kitchen, less under bright lights) lets the edge soften so the scoop can roll a ball instead of chipping shards. That is how many shops work around very cold storage.',
      ],
    },
    {
      heading: 'Know your freezer’s personality',
      paragraphs: [
        'Back corners and chest freezers often run colder than the number in your head. A simple thermometer ends debates about why last month felt easier.',
      ],
      tip: 'For party service, stage in the fridge door briefly—not so long that it melts—then scoop in waves.',
    },
    {
      heading: 'Balance still matters',
      paragraphs: [
        'Very lean on sugar and total solids, a pint freezes harder even at the “right” freezer temp. If tempering never helps, nudge sweetness or dairy strength rather than buying a bigger biceps.',
      ],
    },
    {
      heading: 'Shape of the container',
      paragraphs: [
        'Deep tubs hide a frozen core under a soft lid. Shallow wide tubs temper more evenly. Choose packaging that matches how you serve.',
      ],
    },
    {
      heading: 'Warm scoop, cool head',
      paragraphs: [
        'A hot scoop melts a ragged trench while the middle stays brick. Temper first; use warm metal as a polish, not a crutch.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Why was last week easier?',
      a: 'Freezer position, how full the freezer was, and crystal ripening all shift firmness. Note conditions when you win.',
    },
    {
      q: 'Is rock-hard “premium”?',
      a: 'Not necessarily—sometimes it is just cold storage or a lean base. Gelato-style desserts are softer on purpose.',
    },
  ],
  related: [
    { title: 'Why Ice Cream Is Too Hard', path: '/ice-cream-science/why-ice-cream-is-too-hard' },
    { title: 'Why Ice Cream Melts Fast', path: '/ice-cream-science/why-ice-cream-melts-fast' },
    { title: 'Why Ice Cream Is Creamy', path: '/ice-cream-science/why-ice-cream-is-creamy' },
  ],
};

export default function WhyIceCreamDoesntScoopSmoothly() {
  return <ScienceArticlePage spec={SPEC} />;
}
