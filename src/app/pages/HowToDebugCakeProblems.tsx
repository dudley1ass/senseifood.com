import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'how-to-debug-cake-problems',
  segment: 'cake-science',
  categoryLabel: 'Cake Science',
  title: 'How to Debug Cake Problems',
  subtitle:
    'Dense layers, sunk centers, dryness, and gummy streaks—learn to read the crumb like a photo of foam, set, and moisture so the next bake is a targeted fix.',
  readTime: '7 min read',
  emoji: '🎂',
  fixRecipe: { category: 'cake', problem: 'general' },
  quickAnswer:
    'Cakes fail in foam, structure set, or moisture balance. Cut a slice: gummy bands often mean mixing or temperature; tunnels or collapse mean the structure released too early; dry crumbs often mean bake loss or formula. Fix My Recipe on Cake plus the closest symptom lines up levers with the long articles.',
  intro:
    'Unlike cookies, cake problems often announce themselves in the cross-section. Your eyes are already doing half the diagnosis; this page gives plain names to what you are seeing so you stop thrashing. When in doubt, confirm the oven, match the pan the writer assumed, and change one variable on the retest.',
  sections: [
    {
      heading: 'Four patterns bakers see most',
      paragraphs: [
        'Use the labels in Fix My Recipe that sound closest—the tool and the articles use the same vocabulary.',
      ],
      bullets: [
        {
          title: 'Collapsed or sunk middle',
          text: 'Structure released before the crumb finished setting—underbake, early cooling shock, or a foam too weak for the leavening load. Try collapse or sink in the debugger and confirm internal temperature next bake.',
        },
        {
          title: 'Heavy or dense',
          text: 'Under-aerated batter, deflated foam from overmixing after flour, or insufficient liquid mobility. Try too-dense; audit creaming and folding before you add random flour.',
        },
        {
          title: 'Dry mouthfeel',
          text: 'Overbaking, low fat or sugar for the flour load, or a pan that speeds evaporation. Try dry; pull earlier and check pan size and material.',
        },
        {
          title: 'Gummy layer at the bottom',
          text: 'Often temperature stratification or an underbaked core in a tall pan—do not assume more flour first.',
        },
      ],
    },
    {
      heading: 'Before you rebake',
      paragraphs: [
        'Cakes feel fussy because early oven behavior matters: confirm temperature with a thermometer and remember surface area changes timing in a nonlinear way.',
      ],
      bullets: [
        { text: 'Match pan size and material to the recipe card.' },
        { text: 'One variable next round—see Fix Recipes One Variable at a Time in Baking Science.' },
      ],
    },
    {
      heading: 'How this hub fits CakeSensei',
      paragraphs: [
        'Here you get language and first-pass levers. CakeSensei is for deeper ratio play when you want numeric iteration. Same kitchen, different zoom level.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Toothpick clean but still sunk—how?',
      a: 'Carryover continues outside the oven. Opening the door early or pulling from a too-hot edge can make centers fall while still testing done.',
    },
    {
      q: 'Does Fix My Recipe replace CakeSensei?',
      a: 'No—use this hub and the debugger for direction; use CakeSensei when you want to explore ratios with more numeric scaffolding.',
    },
  ],
  related: [
    { title: 'Why Cakes Collapse', path: '/cake-science/why-cakes-collapse' },
    { title: 'Why Cakes Are Dense', path: '/cake-science/why-cakes-are-dense' },
    { title: 'Why Cakes Taste Dry', path: '/cake-science/why-cakes-taste-dry' },
    { title: 'How to Use Fix My Recipe', path: '/baking-science/how-to-use-fix-my-recipe' },
  ],
};

export default function HowToDebugCakeProblems() {
  return <ScienceArticlePage spec={SPEC} />;
}
