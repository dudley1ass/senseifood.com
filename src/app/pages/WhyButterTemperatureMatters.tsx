import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-butter-temperature-matters',
  segment: 'baking-science',
  categoryLabel: 'Baking Science',
  title: 'Why Butter Temperature Matters in Baking',
  subtitle:
    'Butter is the same ingredient whether it is cold, soft, or melted—but the way it mingles with flour, sugar, and eggs changes so much that temperature often matters more than brand.',
  readTime: '8 min read',
  emoji: '🧈',
  fixRecipe: {
    category: 'baking',
    problem: 'butter-temp',
  },
  quickAnswer:
    'Cold butter stays in flecks that steam apart into layers—think pie dough and biscuits. Soft butter creams with sugar to trap air for cakes and many cookies. Melted butter coats flour without that air cushion, steering you toward dense, chewy, or fudgy. Match the temperature to the story the recipe is trying to tell.',
  intro:
    'Roughly four parts fat, a little water, and a whisper of milk solids—that is butter on the label. In the bowl it behaves like a mood ring. Cold butter is plastic and shardable; room-temperature butter is squeezable but not greasy; melted butter is a liquid that paints every flour particle. Each mood routes fat differently, which means gluten forms differently, air pockets survive differently, and spread on a sheet pan changes. Recipes rarely say “we chose this temperature so gluten would develop like X”; they just say softened or chilled. This article gives those words a kitchen translation so you can improvise without guessing.',
  sections: [
    {
      heading: 'Cold butter for flaky and layered bakes',
      paragraphs: [
        'When butter stays solid through mixing, it leaves discrete pockets in dough. Heat converts the water in butter to steam, those pockets expand, and you get separation between layers. If the butter warms into the flour, you lose the pockets and gain something closer to shortbread—still tasty, no longer flaky.',
      ],
      tip: 'If the dough starts to feel greasy while you work, chill it. You are not being fussy; you are putting the butter back in the state where it can do its job.',
    },
    {
      heading: 'Soft butter for creaming and aeration',
      paragraphs: [
        'Creaming beats tiny air cells into fat that is soft enough to fold but not so warm that the bubbles collapse. That trapped air is part of the rise in many cakes and lighter cookies. Too cold and the mixer just knocks the butter around; too warm and the mix slumps and can look curdled.',
      ],
    },
    {
      heading: 'Melted butter for dense, tender, or chewy paths',
      paragraphs: [
        'Liquid fat coats flour evenly and skips the air-trapping creaming stage. Brownies, some chocolate chip styles, and many quick breads lean on melted butter for chew and a compact crumb. Expect different spread and a different “snap” compared with a creamed batch at the same sugar weight.',
      ],
    },
    {
      heading: 'Brown butter: flavor first',
      paragraphs: [
        'Cooking butter until the milk solids toast builds nutty notes and drives off a little water. It behaves like melted butter structurally but tastes bigger. Account for the water loss if you swap it one-for-one into delicate formulas.',
      ],
    },
    {
      heading: '"Room temperature" is really about feel',
      paragraphs: [
        'Kitchens vary. A thumbprint that holds without the butter turning shiny and slick is a better cue than a stopwatch. Warm summer counters shorten the wait; cool rooms lengthen it.',
      ],
    },
    {
      heading: 'How Fix My Recipe helps',
      paragraphs: [
        'When texture is off but weights look normal, butter temperature is a frequent hidden lever. Logging what you actually did—cold shards versus fully creamed—turns the next bake into a fair test instead of a rerun of the same slip.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Can I microwave butter to soften it?',
      a: 'Only in cautious bursts; edges melt while the center stays cold, which is the worst of both worlds. Grating cold butter or cutting small cubes warms it evenly in minutes.',
    },
    {
      q: 'Is European-style butter "better"?',
      a: 'It carries a bit more fat and slightly less water, which can nudge tenderness. Technique still beats brand: the right temperature for the method matters more.',
    },
  ],
  related: [
    { title: 'Why Cookies Flatten', path: '/cookie-science/why-cookies-flatten' },
    { title: 'Why Cookies Are Chewy', path: '/cookie-science/why-cookies-are-chewy' },
    { title: 'Why Pie Crust Is Flaky', path: '/pie-science/why-pie-crust-is-flaky' },
    { title: 'Why Cakes Are Dense', path: '/cake-science/why-cakes-are-dense' },
  ],
};

export default function WhyButterTemperatureMatters() {
  return <ScienceArticlePage spec={SPEC} />;
}
