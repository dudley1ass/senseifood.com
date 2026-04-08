import type { DiagnosticRule } from '../types';

export const iceCreamRules: DiagnosticRule[] = [
  {
    id: 'ice-icy',
    problems: ['icy', 'general'],
    title: 'Large ice crystals—solids or process',
    explanation:
      'Low sugar/fat solids or slow freezing grows visible ice. Cycling temperature makes it worse.',
    confidence: 'high',
    suggestedChanges: [
      {
        ingredient: 'Sugar',
        deltaPct: 5,
        direction: 'increase',
        rationale: 'Small sugar bump lowers freezing point—balance sweetness.',
      },
      {
        ingredient: 'Churn + freeze speed',
        deltaPct: 0,
        direction: 'increase',
        rationale: 'Churn cold and harden fast; minimize melt/refreeze.',
      },
    ],
    predictedEffect: 'Smoother texture with smaller crystals.',
    relatedArticlePath: '/ice-cream-science/why-ice-cream-gets-icy',
    priority: 76,
  },
  {
    id: 'ice-melts-fast',
    problems: ['melts-fast'],
    title: 'Low solids or warm service temp',
    explanation:
      'Melt speed ties to fat/sugar/protein network and overrun.',
    confidence: 'low',
    suggestedChanges: [
      {
        ingredient: 'Solids balance',
        deltaPct: 5,
        direction: 'increase',
        rationale: 'Slightly more fat or milk solids can slow melt on some bases.',
      },
    ],
    predictedEffect: 'Slower puddle on the plate; check serving temp too.',
    relatedArticlePath: '/ice-cream-science/why-ice-cream-melts-fast',
    priority: 55,
  },
];
