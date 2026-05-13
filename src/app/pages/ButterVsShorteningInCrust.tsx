import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'butter-vs-shortening-in-crust',
  segment: 'pie-science',
  categoryLabel: 'Pie Science',
  title: 'Butter vs Shortening in Pie Crust',
  subtitle:
    'Both fats make flakes through steam and separation, but butter brings water and flavor while shortening stays solid longer—each changes how forgiving the dough feels and how tall the layers stack.',
  readTime: '7 min read',
  emoji: '🧈',
  fixRecipe: { category: 'pie', problem: 'general' },
  quickAnswer:
    'Butter tastes rich and browns well thanks to milk solids, but it softens early and carries water that can toughen if you are not careful. Shortening is nearly flavorless yet stays solid to a higher temperature, so layers stay distinct in a warm kitchen. Many recipes split the difference with a blend by weight.',
  intro:
    'This is less a moral debate than a job interview: which fat is right for the pie you are making today? Butter is the charismatic candidate with a water content and a low melting point. Shortening is the stoic engineer that holds structure longer. Lard still shows up in old-school American pastry for a reason. Once you know what each fat is doing in the oven, you can pick—or blend—on purpose.',
  sections: [
    {
      heading: 'The shared job: interrupt gluten, hide steam',
      paragraphs: [
        'Fat coats flour, limits long gluten networks, and leaves pockets that can inflate when water turns to steam. Butter and shortening both do that; they differ in melting point, water content, and flavor chemistry.',
      ],
    },
    {
      heading: 'Butter: flavor first, fussy second',
      paragraphs: [
        'Butter brings water that converts to steam for lift and milk solids that brown through Maillard reactions. Its lower melting point means it smears quickly in a hot kitchen, which can erase layers if you are not chilling between steps.',
      ],
    },
    {
      heading: 'Shortening: structure first, whisper of flavor',
      paragraphs: [
        'With essentially no water and a higher melting point, shortening keeps discrete fat pockets longer in the oven—often taller, more even flakes and a dough that forgives a little extra handling. The tradeoff is neutral taste unless you borrow flavor from sugar, salt, or a browned top wash.',
      ],
    },
    {
      heading: 'Why bakers split the fat',
      paragraphs: [
        'A fifty-fifty blend by weight is a common pastry compromise: butter for aroma and color, shortening for insurance on layer height and warm-room stability. Lard can replace part of shortening when you want old-fashioned savoriness with similar plasticity.',
      ],
      tip: 'Match fat choice to the pie: all-butter shines when the crust is the headline; more shortening (or a blend) helps double-crust pies that need height and a long bake.',
    },
  ],
  faqs: [
    {
      q: 'Is coconut oil the same as shortening?',
      a: 'It is mostly fat with little water, but melting behavior and flavor differ. Treat it as its own fat with a narrow temperature window, not a one-to-one swap, unless a recipe was written for it.',
    },
    {
      q: 'Can I use oil instead?',
      a: 'Liquid oil coats flour differently and does not create the same discrete pockets; you will get tenderness more than flake. Different style of crust entirely.',
    },
  ],
  related: [
    { title: 'Why Pie Crust Is Flaky', path: '/pie-science/why-pie-crust-is-flaky' },
    { title: 'Why Pie Crust Gets Tough', path: '/pie-science/why-pie-crust-gets-tough' },
    { title: 'Why Pie Crust Gets Soggy', path: '/pie-science/why-pie-crust-gets-soggy' },
  ],
};

export default function ButterVsShorteningInCrust() {
  return <ScienceArticlePage spec={SPEC} />;
}
