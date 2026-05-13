import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'fix-recipes-one-variable-at-a-time',
  segment: 'baking-science',
  categoryLabel: 'Baking Science',
  title: 'Fix Recipes One Variable at a Time',
  subtitle:
    'The habit that turns lucky guesses into repeatable learning—and why Fix My Recipe keeps nudging you toward single-lever tests instead of kitchen chaos.',
  readTime: '6 min read',
  emoji: '🎚️',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Change one meaningful variable per bake—flour load, fat, sugar, chill time, oven temp, or mix time, but only one per run—and you learn what actually moved the outcome. Stacking tweaks feels faster; it nearly always wastes flour.',
  intro:
    'Your brain wants to fix everything after a bad batch. Kitchen chemistry rarely rewards that impulse: two overlapping changes can hide what actually helped. Fix My Recipe is built to suggest a short list so you can sequence experiments instead of stacking them. This page is the short version of the notebook habit pros use without thinking.',
  sections: [
    {
      heading: 'What counts as one variable',
      paragraphs: [
        'A good test names one lever, keeps the rest of the card stable, and writes down the result before you touch the next lever.',
      ],
      bullets: [
        {
          title: 'Good single-lever tests',
          text: 'Add about six percent flour only (scale everything else the same). Chill dough forty-five minutes versus none with the same scoop weight. Raise or lower the oven fifteen degrees only, same time window. Cream thirty seconds longer only.',
        },
        {
          title: 'Accidental multi-variable',
          text: 'New flour brand plus new pan plus new temp. “I added flour and sugar and an egg.” Different creaming time and warmer butter at the same time.',
        },
      ],
    },
    {
      heading: 'A notebook pattern you can actually keep',
      paragraphs: [
        'You do not need a lab book—four lines per bake is enough.',
      ],
      bullets: [
        { title: 'Baseline', text: 'Batch name, date, and a quick photo of shape or crumb.' },
        { title: 'Hypothesis', text: 'One sentence in plain English (“structure set too late”).' },
        { title: 'Change', text: 'One numbered adjustment and the measurement you used.' },
        { title: 'Outcome', text: 'Compared to baseline only—then, and only then, pick the next hypothesis.' },
      ],
    },
    {
      heading: 'Pairing with Fix My Recipe',
      paragraphs: [
        'Run a diagnosis, pick the top suggestion you can isolate, bake a half batch if you can, then rerun with optional grams if the first pass was vague.',
      ],
      tip: 'Small enough to stay safe (especially leavening), large enough to see—often five to ten percent around flour, fat, or sugar in cookies, or fifteen degrees on the oven when structure is the story.',
    },
  ],
  faqs: [
    {
      q: 'How small should a change be?',
      a: 'Small enough to stay safe, large enough to read in the finished product. Five to ten percent on flour, fat, or sugar in cookies, or a modest oven shift when structure is the issue, are common starting bands.',
    },
    {
      q: 'Can I ever change two things?',
      a: 'Once you know what each lever does alone, you can combine on purpose. Start simple; layer complexity only after each change has earned a line in your notes.',
    },
  ],
  related: [
    { title: 'How to Use Fix My Recipe', path: '/baking-science/how-to-use-fix-my-recipe' },
    { title: 'Why Recipes Fail', path: '/baking-science/why-recipes-fail' },
  ],
};

export default function FixRecipesOneVariableAtATime() {
  return <ScienceArticlePage spec={SPEC} />;
}
