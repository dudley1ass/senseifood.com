import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-pie-crust-is-flaky',
  segment: 'pie-science',
  categoryLabel: 'Pie Science',
  title: 'Why Pie Crust Is Flaky',
  subtitle:
    'Flaky crust is not magic—it is cold fat left in real pieces, a little water to bind, and enough oven heat to turn water and butter moisture into steam that pushes layers apart before the dough sets.',
  readTime: '7 min read',
  emoji: '🥧',
  fixRecipe: { category: 'pie', problem: 'general' },
  quickAnswer:
    'You need visible chunks of cold fat in the dough. In the oven they melt, water flashes to steam, and that steam lifts sheets of dough apart. Keep ingredients cold, mix until shaggy—not smooth—and rest before rolling so butter stays solid and gluten relaxes.',
  intro:
    'Flaky pie crust is the moment when the fork meets resistance, then a clean break into thin leaves. That texture comes from separating layers of dough, not from extra sugar or a secret brand of flour. Your job is to protect fat as discrete islands, use only enough water to hydrate, and let the oven do the puffing drama.',
  sections: [
    {
      heading: 'How the layers actually form',
      paragraphs: [
        'Solid fat coats flour and blocks some gluten so the dough stays tender. Where fat sits in bigger pieces, the surrounding dough can lift as a sheet. Heat melts the fat, trapped water becomes steam, and the expanding gas pushes those sheets apart until proteins set and starch firms—locking the air pockets in place.',
      ],
    },
    {
      heading: 'Three habits that matter more than the recipe card',
      paragraphs: [
        'Most flaky failures are temperature and handling, not ratios written in tiny print.',
      ],
      bullets: [
        {
          title: 'Cold fat, cold hands, cold counter',
          text: 'If butter smears into the flour like lotion, you have moved toward a shortbread or mealy crust—still tasty, but not tall flakes. Chill butter, use ice water, and pause in the fridge whenever the dough feels greasy.',
        },
        {
          title: 'Stop while it still looks wrong',
          text: 'Pea-sized butter pieces and streaks are a feature. A smooth, uniform ball is a red flag: more gluten, less steam, fewer distinct layers.',
        },
        {
          title: 'Water as little as honesty allows',
          text: 'Every splash hydrates proteins. Add water slowly until the mass just holds a squeeze; extra spoonfuls buy toughness.',
        },
      ],
    },
    {
      heading: 'Flaky versus mealy—both are real crusts',
      paragraphs: [
        'Finer fat particles make a tender, sandy bottom that resists sogginess; larger pieces make shattery top crust. Many bakers use slightly different techniques for bottom versus lid once they know the tradeoff.',
      ],
      tip: 'A short rest in the fridge relaxes gluten so the dough rolls with fewer “snap back” fights—and keeps butter from disappearing during the roll.',
    },
    {
      heading: 'Where people lose the flake',
      paragraphs: [
        'Overworking, warm kitchens, skipping the chill, or rolling paper-thin all collapse the architecture. If the rim slumps, pair this read with the shrink article; if the bottom is wet, read the soggy crust guide.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Why did my crust turn tough instead of flaky?',
      a: 'Too much mixing or stretching builds a strong gluten network. That bakes into chew and shrink instead of shatter. Mix less, rest more, drape the dough into the pan instead of tugging it.',
    },
    {
      q: 'Can I make dough ahead?',
      a: 'Yes. A tight wrap and a few hours—or days—in the fridge redistributes moisture and relaxes gluten. Bring toward workable coldness before rolling so the fat does not smear.',
    },
    {
      q: 'Does vodka really help?',
      a: 'Some bakers replace part of the water with vodka because ethanol limits gluten formation while still wetting the flour. It is optional, not required; cold butter and a light hand get you most of the way.',
    },
  ],
  related: [
    { title: 'Why Pie Crust Gets Tough', path: '/pie-science/why-pie-crust-gets-tough' },
    { title: 'Why Pie Crust Shrinks', path: '/pie-science/why-pie-crust-shrinks' },
    { title: 'Butter vs Shortening in Crust', path: '/pie-science/butter-vs-shortening-in-crust' },
  ],
};

export default function WhyPieCrustFlaky() {
  return <ScienceArticlePage spec={SPEC} />;
}
