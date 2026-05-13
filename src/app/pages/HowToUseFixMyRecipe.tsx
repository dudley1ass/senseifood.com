import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'how-to-use-fix-my-recipe',
  segment: 'baking-science',
  categoryLabel: 'Baking Science',
  title: 'How to Use Fix My Recipe',
  subtitle:
    "SenseiFood's built-in debugger: what it does, how to read the cards, and how to turn a diagnosis into one clear change on your next bake or brew.",
  readTime: '6 min read',
  emoji: '🔧',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Pick the category that matches what you were making, choose the problem that looks closest to what you saw, add grams if you have them, tap Diagnose, then change one variable on the next run. The tool is rule-based—every line should map to something you can actually adjust.',
  intro:
    'Fix My Recipe sits between reading a science article and rewriting a card from scratch. It will not taste the bake for you or calibrate your oven, but it gives you a structured first pass when you are tired, frustrated, or staring at a tray that did not match what you pictured. Think of it as a checklist written in kitchen language, with links back to the longer reads when you want the chemistry story.',
  sections: [
    {
      heading: 'Four steps that stay the same every time',
      paragraphs: [
        'You do not need the “right” jargon—only the closest match to what happened.',
      ],
      bullets: [
        {
          title: 'Pick the category',
          text: 'Cookies, cake, coffee, and the other modes load different rule packs. If you are between two, choose the one that matches the main thing you were making, not the side dish.',
        },
        {
          title: 'Pick the closest problem',
          text: 'Think in outcomes: too much spread, will not spread, bitter cup, dense crumb. Optional grams unlock ratio hints when they matter.',
        },
        {
          title: 'Read findings like a checklist',
          text: 'Each card is a hypothesis plus suggested levers. High confidence means the pattern is common; low confidence can still help when you are out of ideas. Follow related article links when you want the full picture.',
        },
        {
          title: 'Use sliders as a sanity preview',
          text: 'The what-if sliders do not call a server—they narrate typical tradeoffs so you can rehearse a direction before you commit butter and time.',
        },
      ],
    },
    {
      heading: 'Where it fits in your workflow',
      paragraphs: [
        'Before you rewrite the whole recipe, run one diagnosis and verify measurement and temperature basics: scale, oven thermometer, butter temp.',
        'After a failed bake, jot what you saw first, then open the tool—memory fades fast.',
        'Alongside CookieSensei or other Sensei apps: use Fix My Recipe for language and first principles; use calculators when you want numeric prediction.',
      ],
    },
    {
      heading: 'What it is not',
      paragraphs: [
        'There is no black-box model behind the curtain. Rules and signals live in the codebase so results stay explainable. If a line does not make sense, skip it and lean on the articles—or rerun with grams filled in so ratio checks can speak.',
      ],
      tip: 'Article pages on this site can send you here with context prefilled; you can also start from the bar at the bottom of a science article or go straight to Fix My Recipe from the nav.',
    },
  ],
  faqs: [
    {
      q: 'Is this AI?',
      a: 'No. You get the same reasoning patterns each time, tied to the rules we ship in the app. That is intentional: you can cross-check against the science articles.',
    },
    {
      q: 'Do I have to enter grams?',
      a: 'No. Grams sharpen a subset of rules (especially cookie ratios). Problem-only diagnosis still helps when you are not sure of weights.',
    },
    {
      q: 'Why only one change per retest?',
      a: 'If you move five levers at once, you will not know what fixed it. Pair this tool with the one-variable habit in the companion article below.',
    },
  ],
  related: [
    { title: 'Fix Recipes One Variable at a Time', path: '/baking-science/fix-recipes-one-variable-at-a-time' },
    { title: 'Why Recipes Fail', path: '/baking-science/why-recipes-fail' },
    { title: 'How to Debug Cookie Batch Issues', path: '/cookie-science/how-to-debug-cookie-batch-issues' },
  ],
};

export default function HowToUseFixMyRecipe() {
  return <ScienceArticlePage spec={SPEC} />;
}
