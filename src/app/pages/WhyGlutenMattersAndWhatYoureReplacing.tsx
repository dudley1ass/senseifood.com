import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'why-gluten-matters-and-what-youre-replacing',
  segment: 'baking-science',
  categoryLabel: 'Baking Science',
  title: "Why Gluten Matters (and What You're Replacing)",
  subtitle:
    'Gluten is the stretchy network wheat builds when flour meets water and movement. Take wheat away and you are not just deleting a protein—you are uninstalling the default scaffolding that held gas, chew, and slice in one piece.',
  readTime: '9 min read',
  emoji: '??',
  fixRecipe: {
    category: 'baking',
    problem: 'general',
  },
  quickAnswer:
    'Gluten forms when two wheat proteins hydrate and align into elastic sheets that trap carbon dioxide from yeast or chemical leaveners. Without it, batters and doughs need a new plan for stretch, gas walls, moisture, and crumb cohesion—usually a blend of flours, starches, binders, eggs, and careful hydration rather than a single swap flour.',
  intro:
    'People talk about gluten as if it were a single switch. In the bowl it behaves like a living spring: it stretches, rebounds, and sets when heat arrives. That spring is what lets bread hold a rise and lets a cake slice without crumbling apart. Gluten-free baking works when you rebuild those functions on purpose—structure from flours and starches, stretch from gums or psyllium, moisture from fats and sugars, and patience with narrower hydration windows than wheat forgives.',
  sections: [
    {
      heading: 'What gluten is doing while you mix',
      paragraphs: [
        'Water wakes gliadin and glutenin; movement lines them into sheets that can expand without popping early. That is gas retention and the pleasant chew in a baguette. Cakes use far less development—just enough to hold shape—while bread asks for a lot.',
      ],
    },
    {
      heading: 'What breaks first without gluten',
      paragraphs: [
        'Rises can collapse if bubble walls are weak. Crumbs can feel sandy if starch never fully gels, or gummy if hydration and binders disagree. Slices can fall apart when nothing replaces the cohesive protein web. These are different failures and they call for different levers.',
      ],
    },
    {
      heading: 'Replacement is a team sport',
      paragraphs: [
        'Starches bring tenderness and some stretch, whole-grain gluten-free flours bring body, eggs add protein set and emulsion, hydrocolloids thicken and stabilize bubbles, fats and sugars manage moisture and staling pace. One flour rarely covers every job wheat was covering.',
      ],
      tip: 'If a gluten-free batter looks “wrong,” resist the urge to keep adding flour until it feels like wheat dough; viscosity is doing structural work you cannot see yet.',
    },
    {
      heading: 'How Fix My Recipe helps',
      paragraphs: [
        'When you adapt wheat formulas, the debugger nudges you toward single-variable tests—binder, hydration, bake endpoint—instead of renaming the entire pantry after one dense loaf.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Why can gluten-free bread rise and still fall?',
      a: 'Gas may be fine; retention is not. Weak walls let bubbles merge and escape before the crumb sets. Strengthen binders or adjust proof time before you chase more yeast.',
    },
    {
      q: 'Why are gluten-free batters thicker?',
      a: 'Gums and starches raise viscosity on purpose so bubbles stay trapped. The texture in the bowl is not a mistake—it is part of the structure plan.',
    },
  ],
  related: [
    { title: 'The Gluten-Free Flour Matrix', path: '/baking-science/gluten-free-flour-matrix-why-one-flour-never-works' },
    { title: 'Hydrocolloids: Xanthan and Guar Gum', path: '/baking-science/hydrocolloids-secret-weapon-xanthan-guar-gum' },
    { title: 'Moisture Management in Gluten-Free Baking', path: '/baking-science/moisture-management-why-gluten-free-food-dries-out-faster' },
  ],
};

export default function WhyGlutenMattersAndWhatYoureReplacing() {
  return <ScienceArticlePage spec={SPEC} />;
}
