import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-ice-cream-melts-fast',
  segment: 'ice-cream-science',
  categoryLabel: 'Ice Cream Science',
  title: 'Why Ice Cream Melts Fast',
  subtitle:
    'A scoop that turns into a puddle before you reach the couch is telling a story about air, fat, sugar, and how densely the mix was built—not about whether you “deserved” a slower melt.',
  readTime: '6 min read',
  emoji: '🍦',
  fixRecipe: {
    category: 'iceCream',
    problem: 'melts-fast',
  },
  quickAnswer:
    'Melting speed comes down to how much structure is holding cold in place: fat, dissolved sugars, proteins, and the tiny air bubbles you churned in all slow collapse. Very airy, low-fat, or low-sugar mixes have less scaffolding, so heat walks through them quickly. Serving temperature matters too—warmer scoops melt faster on the plate even when the formula is fine.',
  intro:
    'Ice cream is a frozen foam: ice, air, fat, and sweetened water sharing one spoon. Each part does real work. Fat and proteins wrap bubbles and crystals; air breaks up continuity so heat cannot march in a straight line; sugar ties up water so less of it freezes into rigid blocks. When any of those roles are missing—especially in budget pints with lots of overrun—melting looks dramatic. Homemade bases can melt oddly too if they are warm when served or low on total solids. Thinking in “structure per bite” usually explains what you are seeing faster than blaming the brand.',
  sections: [
    {
      heading: 'Air content and melt',
      paragraphs: [
        'Churning whips in air (overrun). A little air makes texture pleasant; a lot of air makes the pint feel light in the hand and fast to puddle, because bubbles collapse and release their water in a rush. Premium styles often sit in a moderate air band so the scoop holds a shape long enough to enjoy.',
      ],
    },
    {
      heading: 'Fat and solids buy time',
      paragraphs: [
        'Fat carries flavor, but it also insulates and networks around bubbles. Dairy solids and eggs add proteins that help emulsions hold. Skim the fat or skip the eggs without adjusting anything else, and you should expect a quicker melt even if the flavor still tastes good.',
      ],
    },
    {
      heading: 'Sugar, sorbet, and the no-fat case',
      paragraphs: [
        'Sugar lowers the freezing point, which changes how firm the pint is in the freezer and how fast it slackens in the bowl. Sorbet has no cream shield, so it often races toward liquid—sugar and fruit solids are doing almost all the structural work.',
      ],
    },
    {
      heading: 'Stabilizers and home tradeoffs',
      paragraphs: [
        'Small amounts of gums or starches slow water movement when crystals start melting, which buys seconds on the plate that feel like miles in dessert time. Gelato traditions lean more on eggs and lower air instead of a long gum list. Either path is valid; the goal is the same: keep water from sprinting away the moment the scoop warms.',
      ],
      tip: 'If homemade melts instantly, check draw temperature, hardening time, and sugar—not only fat. A base that is warm when it hits the pint will keep behaving badly even with extra cream.',
    },
    {
      heading: 'How Fix My Recipe helps',
      paragraphs: [
        'Run the ice cream pathway with your grams when you can. It highlights lean solids patterns that correlate with fast melt and icy texture together, so you can adjust sugar or dairy strength with a target instead of a shrug.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Why does cheap ice cream melt faster?',
      a: 'It is often higher in air and lower in fat and egg than premium lines. The scoop feels fluffy in the carton but has less material resisting heat on the plate.',
    },
    {
      q: 'Does gelato melt slower?',
      a: 'Often yes, because it is denser (less air) and may carry more egg yolk emulsion. Density and emulsion both slow the collapse compared with an airy, low-fat ice cream.',
    },
  ],
  related: [
    { title: 'Why Ice Cream Gets Icy', path: '/ice-cream-science/why-ice-cream-gets-icy' },
    { title: 'Why Ice Cream Is Creamy', path: '/ice-cream-science/why-ice-cream-is-creamy' },
    { title: 'Why Ice Cream Is Too Soft', path: '/ice-cream-science/why-ice-cream-is-too-soft' },
  ],
};

export default function WhyIceCreamMeltsFast() {
  return <ScienceArticlePage spec={SPEC} />;
}
