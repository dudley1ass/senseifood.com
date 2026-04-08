import type { DiagnosticRule } from '../types';

export const pieRules: DiagnosticRule[] = [
  {
    id: 'pie-tough-crust',
    problems: ['tough-crust', 'general'],
    title: 'Gluten developed too much or not enough fat layers',
    explanation:
      'Overworking after water adds, or warm butter, makes crust tough instead of tender.',
    confidence: 'medium',
    suggestedChanges: [
      {
        ingredient: 'Mixing',
        deltaPct: 0,
        direction: 'decrease',
        rationale: 'Stop as soon as dough holds together; keep fat cold and in chunks.',
      },
    ],
    predictedEffect: 'More tender bite; less chew-out.',
    relatedArticlePath: '/pie-science/why-pie-crust-gets-tough',
    priority: 70,
  },
  {
    id: 'pie-soggy',
    problems: ['soggy-crust', 'general'],
    title: 'Moisture migration into the shell',
    explanation:
      'Blind bake, thickeners, and cooling strategy affect soggy bottoms.',
    confidence: 'medium',
    suggestedChanges: [
      {
        ingredient: 'Par-bake / seal',
        deltaPct: 0,
        direction: 'increase',
        rationale: 'Par-bake shell or brush with egg white; consider thicker filling cook.',
      },
    ],
    predictedEffect: 'Crisper base that holds slices.',
    relatedArticlePath: '/pie-science/why-pie-crust-gets-soggy',
    priority: 68,
  },
];
