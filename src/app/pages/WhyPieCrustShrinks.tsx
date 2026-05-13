import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-pie-crust-shrinks',
  segment: 'pie-science',
  categoryLabel: 'Pie Science',
  title: 'Why Pie Crust Shrinks',
  subtitle:
    'When the sides slide down or the crimp disappears, gluten is doing what rubber bands do: snapping back after you stretched it. Resting, chilling, and draping—not tugging—keep the shape you worked for.',
  readTime: '6 min read',
  emoji: '📏',
  fixRecipe: { category: 'pie', problem: 'general' },
  quickAnswer:
    'Shrinking is gluten contraction under heat after the dough was stretched during roll-out or fitting. Rest dough before and after lining the pan, chill the fitted shell, and never stretch the disk to make it reach the rim—roll large enough to drape instead.',
  intro:
    'A pie shell that looked proud going into the oven but arrives shorter and slumped feels like betrayal. It is usually physics: gluten strands that were pulled tight relax and shorten as they set. The fixes are gentle handling, time for the dough to forget being rolled, and cold butter that still protects flour from bonding into a tight mat.',
  sections: [
    {
      heading: 'The snap-back story',
      paragraphs: [
        'Flour plus water makes elastic gluten. Rolling and pressing aligns those proteins under tension—like a pulled rubber band. Heat sets the proteins while they are still under tension, so they shorten and pull the crust away from the pan wall.',
      ],
    },
    {
      heading: 'Fixes that actually stick',
      paragraphs: [
        'Stack a few habits and shrinkage drops sharply.',
      ],
      bullets: [
        {
          title: 'Rest before you roll',
          text: 'Even thirty minutes in the fridge lets tense gluten loosen so the sheet rolls wider with less fight.',
        },
        {
          title: 'Chill after you line',
          text: 'Fitting the pan re-stretches the dough. Thirty to sixty minutes in the fridge before baking is the single most reliable shrink fix.',
        },
        {
          title: 'Drape, do not stretch',
          text: 'Roll two inches wider than the pan, lift the circle, and let it fall into the corners. Stretching to fit is how you preload the rubber band.',
        },
        {
          title: 'Mix and roll with a light hand',
          text: 'Extra kneading builds more elastic network—great for bread, wrong for pie.',
        },
      ],
    },
    {
      heading: 'Why fat still matters here',
      paragraphs: [
        'Fat coats flour and limits how much gluten can form. Cold, visible fat chunks keep that insurance intact; melted-in fat loses the protective layer and shrinkage gets worse.',
      ],
      tip: 'For custard pies, blind baking with weights holds the wall in place while the gluten sets—same shrink mechanism, different tool.',
    },
  ],
  faqs: [
    {
      q: 'Does egg wash stop shrink?',
      a: 'No. Egg wash changes color and sheen, not gluten tension. Fix handling, rest, and chill instead.',
    },
    {
      q: 'Should I blind bake?',
      a: 'For wet or no-bake fillings, yes—weights keep the sides from slumping while the shape sets. It is structural insurance, not just color.',
    },
  ],
  related: [
    { title: 'Why Pie Crust Is Flaky', path: '/pie-science/why-pie-crust-is-flaky' },
    { title: 'Why Pie Crust Gets Tough', path: '/pie-science/why-pie-crust-gets-tough' },
    { title: 'Why Pie Crust Gets Soggy', path: '/pie-science/why-pie-crust-gets-soggy' },
  ],
};

export default function WhyPieCrustShrinks() {
  return <ScienceArticlePage spec={SPEC} />;
}
