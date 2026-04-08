import type { DiagnosticRule } from '../types';

export const breadRules: DiagnosticRule[] = [
  {
    id: 'bread-no-rise',
    problems: ['wont-rise', 'dense', 'general'],
    title: 'Yeast activity or gluten development',
    explanation:
      'Cold proof without time, dead yeast, or salt killing yeast are common; dense crumb can also be underproofed.',
    confidence: 'medium',
    suggestedChanges: [
      {
        ingredient: 'Proof time / temp',
        deltaPct: 0,
        direction: 'increase',
        rationale: 'Warm proof until dough passes poke test; extend bulk if kitchen is cool.',
      },
      {
        ingredient: 'Yeast freshness',
        deltaPct: 0,
        direction: 'increase',
        rationale: 'Confirm yeast blooms in warm water with a pinch of sugar when in doubt.',
      },
    ],
    predictedEffect: 'Better volume and more open, even crumb.',
    relatedArticlePath: '/bread-science/why-bread-rises',
    priority: 75,
  },
  {
    id: 'bread-yeast-how',
    problems: ['general'],
    title: 'How yeast works (baseline)',
    explanation:
      'Yeast makes CO₂; gluten traps it. Structure + timing beat heroic ingredient tweaks.',
    confidence: 'low',
    suggestedChanges: [
      {
        ingredient: 'Structure',
        deltaPct: 0,
        direction: 'increase',
        rationale: 'Adequate knead or folds for dough type—then patience.',
      },
    ],
    predictedEffect: 'More predictable ovenspring when fermentation aligns with strength.',
    relatedArticlePath: '/bread-science/how-yeast-works',
    priority: 30,
  },
];
