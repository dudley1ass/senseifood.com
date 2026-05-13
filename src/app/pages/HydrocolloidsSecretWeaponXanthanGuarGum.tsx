import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'hydrocolloids-secret-weapon-xanthan-guar-gum',
  segment: 'baking-science',
  categoryLabel: 'Baking Science',
  title: 'Hydrocolloids: The Secret Weapon (Xanthan and Guar Gum)',
  subtitle:
    'A pinch of gum is not magic dust—it is a way to thicken batters, slow water migration, and help fragile gluten-free bubbles survive long enough to set.',
  readTime: '8 min read',
  emoji: '??',
  fixRecipe: {
    category: 'baking',
    problem: 'general',
  },
  quickAnswer:
    'Xanthan and guar increase viscosity so gluten-free mixes hold air and slice more cleanly. Xanthan often suits doughy, elastic systems; guar can feel softer in cakes. Too much of either creates gummy, dense crumbs—measure small amounts by weight.',
  intro:
    'Hydrocolloids sound clinical, but in practice they are the pinch that stops a sandwich loaf from crater-cooling into sand. They bind free water, slow large crystal or bubble collapse, and buy time for starch and protein to set. They do not replace gluten’s spring outright; they change the flow of the batter so other ingredients can finish the job. Respect the dose: past a sweet spot, texture turns ropey because water cannot move where it needs to during baking.',
  sections: [
    {
      heading: 'What xanthan is good at',
      paragraphs: [
        'Xanthan builds strong viscosity at low use levels and tolerates acid and salt swings better than many gums. Bakers often reach for it when they need dough-like elasticity or better gas retention in bread-style mixes.',
      ],
    },
    {
      heading: 'Where guar shines',
      paragraphs: [
        'Guar hydrates quickly and can yield a softer mouthfeel in tender cakes and muffins. Many formulas blend a little of each to split the difference between elasticity and softness.',
      ],
    },
    {
      heading: 'Dosing without drama',
      paragraphs: [
        'Think in tenths of a percent of flour weight for rough planning, but always follow a tested recipe until you have a baseline. Teaspoon volume is noisy at these levels; a scale with one-gram resolution is enough for most home batches.',
      ],
      tip: 'If the center is gummy but edges set early, look at gum plus elastic starch together before you raise oven temperature—both tighten viscosity.',
    },
    {
      heading: 'Psyllium and other partners',
      paragraphs: [
        'Psyllium can add a fibrous gel network in some breads. It changes water demand and flavor, so treat it as its own design choice rather than a 1:1 swap for xanthan.',
      ],
    },
    {
      heading: 'How Fix My Recipe helps',
      paragraphs: [
        'When structure feels random run to run, logging binder and hydration changes alongside bake times turns hunches into a short list of what actually moved.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Can I omit gums entirely?',
      a: 'Sometimes, if eggs, starch ratios, and hydration are already strong for that style—but expect a narrower success window and faster staling in many breads.',
    },
    {
      q: 'Why did my batter thicken while it rested?',
      a: 'Hydrocolloids keep hydrating; viscosity climbs over time. That is expected—stir gently and bake with the timing you practiced.',
    },
  ],
  related: [
    { title: 'Why Gluten Matters (and What You Are Replacing)', path: '/baking-science/why-gluten-matters-and-what-youre-replacing' },
    { title: 'Moisture Management in Gluten-Free Baking', path: '/baking-science/moisture-management-why-gluten-free-food-dries-out-faster' },
    { title: 'Leavening Without Gluten', path: '/baking-science/leavening-without-gluten-why-rise-is-harder' },
  ],
};

export default function HydrocolloidsSecretWeaponXanthanGuarGum() {
  return <ScienceArticlePage spec={SPEC} />;
}
