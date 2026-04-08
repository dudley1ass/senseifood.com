import type { DiagnosticRule } from '../types';

export const coffeeRules: DiagnosticRule[] = [
  {
    id: 'coffee-bitter',
    problems: ['bitter', 'burnt-taste', 'general'],
    title: 'Over-extraction or very dark roast',
    explanation:
      'Bitterness often stacks from long contact time, fine grind, high temperature—or naturally in darker roasts.',
    confidence: 'high',
    suggestedChanges: [
      {
        ingredient: 'Grind',
        deltaPct: 10,
        direction: 'increase',
        rationale: 'Coarsen slightly to shorten effective extraction (Espresso: tiny steps).',
      },
      {
        ingredient: 'Brew time / yield',
        deltaPct: 8,
        direction: 'decrease',
        rationale: 'Cut contact time or stop shot earlier to reduce dry/distillate notes.',
      },
    ],
    predictedEffect: 'More sweetness and clarity; less harsh dry bitterness.',
    relatedArticlePath: '/coffee-science/why-coffee-tastes-bitter',
    priority: 78,
  },
  {
    id: 'coffee-sour',
    problems: ['sour', 'acidic'],
    title: 'Under-extraction highlights acids',
    explanation:
      'Sourness can be under-extraction (yield too low) or a light roast profile read as sharp without balance.',
    confidence: 'medium',
    suggestedChanges: [
      {
        ingredient: 'Extraction',
        deltaPct: 8,
        direction: 'increase',
        rationale: 'Finer grind or longer brew slightly to reach balance (track TDS if you can).',
      },
    ],
    predictedEffect: 'Rounder cup with acid integrated into sweetness.',
    relatedArticlePath: '/coffee-science/why-coffee-tastes-sour',
    priority: 72,
  },
  {
    id: 'coffee-weak',
    problems: ['weak', 'watery'],
    title: 'Low strength vs water',
    explanation:
      'High ratio of water to coffee or channeling yields thin cups.',
    confidence: 'high',
    suggestedChanges: [
      {
        ingredient: 'Coffee dose',
        deltaPct: 10,
        direction: 'increase',
        rationale: 'Increase dose or use less water at the same dose.',
      },
    ],
    predictedEffect: 'Higher intensity and body without changing roast.',
    relatedArticlePath: '/coffee-science/why-coffee-tastes-weak',
    priority: 74,
  },
  {
    id: 'coffee-extraction',
    problems: ['extraction-balance', 'general'],
    title: 'Dial grind, time, and temperature together',
    explanation:
      'Extraction is a system—adjust one lever at a time and taste between changes.',
    confidence: 'medium',
    suggestedChanges: [
      {
        ingredient: 'One lever',
        deltaPct: 0,
        direction: 'decrease',
        rationale: 'Change grind OR time OR temperature per session—not all three.',
      },
    ],
    predictedEffect: 'Cleaner learning loop and fewer “mystery” swings.',
    relatedArticlePath: '/coffee-science/coffee-extraction-science',
    priority: 40,
  },
];
