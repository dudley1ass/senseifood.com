import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-homemade-ice-cream-melts-unevenly',
  segment: 'ice-cream-science',
  categoryLabel: 'Ice Cream Science',
  title: 'Why Homemade Ice Cream Melts Unevenly',
  subtitle:
    'One spoonful is soup while another is icy because the pint is not one uniform thing—air, ice, fat, and syrup landed in patches, and heat finds the easy paths first.',
  readTime: '7 min read',
  emoji: '🍨',
  fixRecipe: {
    category: 'iceCream',
    problem: 'melts-fast',
  },
  quickAnswer:
    'Uneven melt usually means air was folded in unevenly, the emulsion wobbled so butterfat pooled in places, or heat shock left bands of different crystal size and sugar concentration. Smooth, viscous bases, consistent churn, a real hardening step, and gentle storage keep the melt map calmer.',
  intro:
    'Commercial makers chase even meltdown on purpose; home churns often meet it for the first time at the cone. Think of the pint as neighborhoods: dense spots with little air melt slowly next to watery channels that rush to puddle. Your job is fewer neighborhoods—more even air, fewer broken emulsions, less thaw-and-refreeze drama.',
  sections: [
    {
      heading: 'Air that shows up in clumps',
      paragraphs: [
        'If some regions never got their share of churned-in air, they behave like a different dessert than the airy ribbon beside them. Finish churn at a consistent thickness and scrape the bowl so the last pint is the same story as the first.',
      ],
    },
    {
      heading: 'Broken emulsions make rivers',
      paragraphs: [
        'When fat separates, it melts fast in warm lines while ice lingers nearby. Over-churning, warm bowls, or too much booze in one corner of the base all invite that map.',
      ],
    },
    {
      heading: 'Heat shock leaves stripes',
      paragraphs: [
        'Softened rims and half-melted cores refreeze into visible bands with different crystal sizes. The melt looks like a weather front crossing the scoop. Keep the cold chain steady and smooth the surface before the lid goes back on.',
      ],
      tip: 'Try a “warm plate drip test”: note where the first puddle forms and how fast the center follows— that tells you whether the issue is air, emulsion, or storage bands.',
    },
    {
      heading: 'What to log on the next batch',
      paragraphs: [
        'Draw texture, harden time, freezer zone, and any fruit or alcohol spikes. Fix My Recipe can compare sugar, dairy, and water bands to smoother references so you are not guessing in the dark.',
      ],
    },
  ],
  related: [
    { title: 'Why Ice Cream Melts Fast', path: '/ice-cream-science/why-ice-cream-melts-fast' },
    { title: 'Why Ice Cream Separates', path: '/ice-cream-science/why-ice-cream-separates' },
    { title: 'Why Ice Cream Loses Air (Overrun Collapse)', path: '/ice-cream-science/why-ice-cream-loses-air-overrun-collapse' },
  ],
  faqs: [
    {
      q: 'Is uneven melt the same as icy?',
      a: 'Icy is crystal feel on the teeth; uneven melt is puddles next to cold solids. Related storage issues sometimes, different fixes.',
    },
    {
      q: 'Will more fat fix it?',
      a: 'Only if the emulsion is healthy. Extra cream in a split base still pools.',
    },
  ],
};

export default function WhyHomemadeIceCreamMeltsUnevenly() {
  return <ScienceArticlePage spec={SPEC} />;
}
