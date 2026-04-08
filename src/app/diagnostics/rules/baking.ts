import type { DiagnosticRule } from '../types';

export const bakingRules: DiagnosticRule[] = [
  {
    id: 'baking-low-egg-vs-fat-binding',
    problems: ['recipes-fail', 'butter-temp', 'general'],
    whenAllSignals: ['low_egg_vs_fat_binding'],
    title: 'Check egg vs fat for cookie-style doughs',
    explanation:
      'Your table looks like a sweet, butter-heavy, low-liquid mix. Egg mass is low relative to fat—common when a recipe is scaled or an egg was dropped. That mismatch often reads as greasy, crumbly, or structurally weak before you blame oven or chill time.',
    confidence: 'high',
    suggestedChanges: [
      {
        ingredient: 'Eggs',
        deltaPct: 0,
        direction: 'increase',
        rationale: 'Restore egg count toward typical drop-cookie bands (~more egg per cup of butter) on a test batch.',
      },
      {
        ingredient: 'Fat',
        deltaPct: 12,
        direction: 'decrease',
        rationale: 'Or reduce butter slightly so binding and emulsification catch up.',
      },
    ],
    predictedEffect: 'Better cohesion and less greasy breakdown—clearer diagnosis than fat/sugar spread alone.',
    relatedArticlePath: '/baking-science/why-recipes-fail',
    priority: 82,
  },
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
