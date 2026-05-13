import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'leavening-without-gluten-why-rise-is-harder',
  segment: 'baking-science',
  categoryLabel: 'Baking Science',
  title: 'Leavening Without Gluten: Why Rise Is Harder',
  subtitle:
    'Yeast and baking powder still make gas without gluten—the hard part is keeping that gas inside a bubble wall that will not tear while the oven finishes the story.',
  readTime: '8 min read',
  emoji: '??',
  fixRecipe: {
    category: 'baking',
    problem: 'general',
  },
  quickAnswer:
    'Gluten-free rises fail more often on retention than on gas production. Weak walls let bubbles coalesce and escape before the crumb sets. Eggs, hydrocolloids, psyllium gels, and viscosity tuned to the proof all help the matrix stretch without popping. Adding more leavening without fixing walls often worsens collapse.',
  intro:
    'Picture two jobs: make gas, then keep it. Wheat dough hands both jobs to gluten for long-rise breads. Gluten-free doughs split the work: starches gelatinize, proteins from eggs set, gums thicken the liquid enough that bubbles slow down and stay put. If you only celebrate gas—extra yeast, extra powder—you can outrun the structure that was supposed to cage it. This article names that asymmetry so your next fix aims at walls, not just bubbles.',
  sections: [
    {
      heading: 'Gas shows up; walls decide the height',
      paragraphs: [
        'Bubbles are lazy: they merge when walls are thin or uneven. Gluten-free mixes often need higher viscosity so those walls survive proofing and the first minutes of oven spring.',
      ],
    },
    {
      heading: 'Eggs and gums as scaffolding',
      paragraphs: [
        'Eggs set into protein networks around expanding bubbles. Xanthan or guar increases the batter’s resistance to flow so pressure from gas stretches the mix instead of tearing it. Psyllium can add a gel strand network in some breads when used thoughtfully.',
      ],
    },
    {
      heading: 'Proofing patience vs over-proofing',
      paragraphs: [
        'If the dough creeps upward then falls, you may have plenty of yeast activity but not enough strength to finish. Extending proof without strengthening binders is like inviting more guests without adding chairs.',
      ],
      tip: 'If you see a fast rise then a sink, try shorter proof or stronger binder support before you reach for another teaspoon of baking powder.',
    },
    {
      heading: 'Reading common failure shapes',
      paragraphs: [
        'Tight, dense loaves with little oven spring can be under-hydrated or too viscous to expand. Large tunnels suggest localized tearing—uneven mixing or late gas bursts. Rise-then-collapse points to retention or over-proofing more often than “weak yeast.”',
      ],
    },
    {
      heading: 'How Fix My Recipe helps',
      paragraphs: [
        'Logging binder, hydration, and proof changes one at a time gives the debugger enough signal to suggest whether gas or walls were the real limiter.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Should I double the baking powder?',
      a: 'Only after you are sure retention is solid; extra gas in a weak matrix can accelerate collapse.',
    },
    {
      q: 'Is yeast still worth it gluten-free?',
      a: 'Yes—for flavor and moderate lift—but pair it with retention tools or you will keep fighting the same short loaf.',
    },
  ],
  related: [
    { title: 'Why Gluten Matters (and What You Are Replacing)', path: '/baking-science/why-gluten-matters-and-what-youre-replacing' },
    { title: 'Hydrocolloids: Xanthan and Guar Gum', path: '/baking-science/hydrocolloids-secret-weapon-xanthan-guar-gum' },
    { title: 'Moisture Management in Gluten-Free Baking', path: '/baking-science/moisture-management-why-gluten-free-food-dries-out-faster' },
  ],
};

export default function LeaveningWithoutGlutenWhyRiseIsHarder() {
  return <ScienceArticlePage spec={SPEC} />;
}
