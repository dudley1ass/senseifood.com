import type { DiagnosticRule } from '../types';

export const cakeRules: DiagnosticRule[] = [
  {
    id: 'cake-collapse',
    problems: ['collapse', 'sink', 'general'],
    title: 'Structure released before the crumb set',
    explanation:
      'Underbake, early oven opening, or weak foam can make cakes fall once steam pressure drops.',
    confidence: 'high',
    suggestedChanges: [
      {
        ingredient: 'Doneness',
        deltaPct: 0,
        direction: 'increase',
        rationale: 'Bake to internal ~200–210°F; avoid opening the oven in the first 20 minutes.',
      },
    ],
    predictedEffect: 'More reliable rise with stable centers.',
    relatedArticlePath: '/cake-science/why-cakes-collapse',
    priority: 80,
  },
  {
    id: 'cake-dense',
    problems: ['too-dense', 'dense'],
    title: 'Under-aerated batter or collapsed foam',
    explanation:
      'Overmixing after flour, weak creaming, or excessive structure can read as dense and heavy.',
    confidence: 'medium',
    suggestedChanges: [
      {
        ingredient: 'Mixing (after flour)',
        deltaPct: 0,
        direction: 'decrease',
        rationale: 'Stop mixing once flour disappears; fold gently.',
      },
      {
        ingredient: 'Liquid / fat aeration',
        deltaPct: 5,
        direction: 'increase',
        rationale: 'Better creaming or slightly more liquid can open crumb on dense batches.',
      },
    ],
    predictedEffect: 'Lighter crumb with more even porosity.',
    relatedArticlePath: '/cake-science/why-cakes-are-dense',
    priority: 70,
  },
  {
    id: 'cake-dry',
    problems: ['too-dry', 'dry'],
    title: 'Bake loss or low tenderizers',
    explanation:
      'Overbaking pulls moisture; low fat or sugar can amplify dryness.',
    confidence: 'medium',
    suggestedChanges: [
      {
        ingredient: 'Bake time',
        deltaPct: 8,
        direction: 'decrease',
        rationale: 'Pull earlier; sides should barely pull from pan when ready.',
      },
      {
        ingredient: 'Fat or syrup',
        deltaPct: 6,
        direction: 'increase',
        rationale: 'Small bump in oil, butter, or simple syrup keeps crumb tender.',
      },
    ],
    predictedEffect: 'Moister eat with better keeping.',
    relatedArticlePath: '/cake-science/why-cakes-taste-dry',
    priority: 68,
  },
];
