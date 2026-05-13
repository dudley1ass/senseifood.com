import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-ice-cream-is-too-soft',
  segment: 'ice-cream-science',
  categoryLabel: 'Ice Cream Science',
  title: 'Why Ice Cream Is Too Soft',
  subtitle:
    'A pint that never really firms up is usually asking whether the base had too much “antifreeze” in the form of sugar or booze, whether it left the machine still too warm, or whether the freezer is running shy of cold.',
  readTime: '7 min read',
  emoji: '🍦',
  fixRecipe: {
    category: 'iceCream',
    problem: 'melts-fast',
  },
  quickAnswer:
    'Soft right from the freezer often means the mix never finished freezing in the bowl, the recipe carries so much sugar or alcohol that your freezer cannot reach its real freezing point, or the cold box is warmer than you think. Churn until the mix looks like thick soft-serve, harden in the coldest spot for several hours, then check the actual air temperature inside the freezer before you rewrite the cream.',
  intro:
    'There is a difference between “soft by design” and “soup that never set.” Gelato and some homemade styles are meant to feel plush. A hard-pack recipe that stays squishy in the back of the freezer is telling a different story—usually about balance, draw temperature, or how the cold was applied. Start by deciding which story you have, then change one thing on the next batch so the answer stays honest.',
  sections: [
    {
      heading: 'Sugar and alcohol can outrun your freezer',
      paragraphs: [
        'Both keep more water liquid at freezer temperatures. A generous pour of liqueur or a syrup-heavy base can drop the freezing point below what a typical home freezer reaches, so the pint stays tender no matter how long you wait. If that is the case, ease the alcohol or swap some invert syrup back toward plain sugar until the texture meets the cold you actually have.',
      ],
    },
    {
      heading: 'Stopping the machine too early',
      paragraphs: [
        'If the mix is still loose when it goes into the carton, the remaining water freezes slowly and unevenly without the dasher breaking crystals. You get soft pockets, icy pockets, and a generally unset feel. Aim for a soft-serve body that holds a curl, then harden undisturbed.',
      ],
    },
    {
      heading: 'Door openings and a tired thermostat',
      paragraphs: [
        'Warm air sneaks in every time the door swings. Over days that gentle yo-yo keeps a pint from ever feeling fully set. A thermometer in the ice cream zone ends a lot of arguments about “it used to work.”',
      ],
      tip: 'If the base tastes great but stays soupy, fix cold and balance before you blame the machine brand.',
    },
    {
      heading: 'Home churn reality check',
      paragraphs: [
        'Domestic machines usually fold in less air than commercial lines, so your texture may be denser and softer than a pint from the shop—that is normal. What you do not want is whey weeping, a greasy sheen, or a mix that never leaves the puddle stage. Those are different problems with different fixes.',
      ],
    },
    {
      heading: 'What to try next time',
      paragraphs: [
        'Log draw texture, harden time, freezer temperature, and any big recipe swings (extra syrup, new cream brand). Change one variable—sweetness, alcohol, churn endpoint, or freezer placement—and retaste. Fix My Recipe can flag sugar and dairy bands that sit outside typical smooth-freeze windows when you enter grams.',
      ],
    },
  ],
  related: [
    { title: 'Why Ice Cream Melts Fast', path: '/ice-cream-science/why-ice-cream-melts-fast' },
    { title: 'Why Ice Cream Is Too Hard', path: '/ice-cream-science/why-ice-cream-is-too-hard' },
    { title: 'Why Ice Cream Separates', path: '/ice-cream-science/why-ice-cream-separates' },
  ],
  faqs: [
    {
      q: 'Why did it firm up after a week?',
      a: 'Water slowly migrated and crystals grew; texture can feel different even when the formula is unchanged. Compare at the same temper time for a fair read.',
    },
    {
      q: 'Is gelato supposed to be softer?',
      a: 'Yes—many gelato styles are eaten warmer and churned with less air on purpose. That softness is the point, not a defect.',
    },
  ],
};

export default function WhyIceCreamIsTooSoft() {
  return <ScienceArticlePage spec={SPEC} />;
}
