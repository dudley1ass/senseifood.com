import type { DiagnosticRule } from '../types';

export const bakingRules: DiagnosticRule[] = [
  {
    id: 'baking-butter-temp',
    problems: ['butter-temp', 'general'],
    title: 'Butter temperature changes structure and spread',
    explanation:
      'Cold vs room-temp butter changes creaming, gluten formation, and how fast fat liquefies.',
    confidence: 'high',
    suggestedChanges: [
      {
        ingredient: 'Butter temp',
        deltaPct: 0,
        direction: 'decrease',
        rationale: 'For less spread/cleaner edges in cookies, err colder; for aeration in cakes, follow recipe band.',
      },
    ],
    predictedEffect: 'More predictable texture when temperature matches the method.',
    relatedArticlePath: '/baking-science/why-butter-temperature-matters',
    priority: 70,
  },
  {
    id: 'baking-fail-generic',
    problems: ['recipes-fail', 'general'],
    title: 'When recipes fail, isolate variables',
    explanation:
      'Scale, mixing order, and oven calibration beat random tweaks.',
    confidence: 'low',
    suggestedChanges: [
      {
        ingredient: 'One variable',
        deltaPct: 0,
        direction: 'decrease',
        rationale: 'Change a single major input per bake or brew.',
      },
    ],
    predictedEffect: 'Clearer attribution of what actually fixed the issue.',
    relatedArticlePath: '/baking-science/why-recipes-fail',
    priority: 40,
  },
];
