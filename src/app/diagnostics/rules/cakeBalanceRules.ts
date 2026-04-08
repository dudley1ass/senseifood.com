import type { DiagnosticRule } from '../types';

/** Ratio-based cake balance — merged into cookie / cake / baking packs so findings match “Making”. */

const weakStructureRule = (
  id: string,
  problems: string[],
  priority: number,
  relatedArticlePath: string
): DiagnosticRule => ({
  id,
  problems,
  whenAllSignals: ['cake_weak_structure_risk'],
  title: 'Sugar and liquid are high versus flour and butter — weak crumb risk',
  explanation:
    'Your lines read like cake batter, but sugar meets or exceeds flour by weight with a lot of free liquid and only moderate fat. That pattern weakens structure, delays setting, and can read as a soft center, slight slump, or uneven rise—not just “moist and tender.”',
  confidence: 'high',
  suggestedChanges: [
    {
      ingredient: 'Sugar',
      deltaPct: 8,
      direction: 'decrease',
      rationale: 'Small sugar trim on a test bake restores setting and crumb strength.',
    },
    {
      ingredient: 'Flour',
      deltaPct: 5,
      direction: 'increase',
      rationale: 'A little more flour absorbs excess water and supports the matrix.',
    },
    {
      ingredient: 'Egg yolk / egg',
      deltaPct: 0,
      direction: 'increase',
      rationale: 'An extra yolk or egg adds emulsifiers and protein without as much water as whites alone.',
    },
  ],
  predictedEffect: 'More reliable structure with less greasiness or collapse in the center.',
  relatedArticlePath,
  priority,
});

const denseRiskRule = (
  id: string,
  problems: string[],
  priority: number,
  relatedArticlePath: string
): DiagnosticRule => ({
  id,
  problems,
  whenAllSignals: ['cake_dense_risk'],
  title: 'Wet batter with modest creaming fat — dense crumb risk',
  explanation:
    'Liquid is fairly high versus butter, and chemical leavening is only moderate. Without enough aeration from creaming (or enough lift), the crumb can set heavy or tight in the middle.',
  confidence: 'medium',
  suggestedChanges: [
    {
      ingredient: 'Creaming (butter + sugar)',
      deltaPct: 0,
      direction: 'increase',
      rationale: 'Beat butter and sugar until visibly light before wet ingredients.',
    },
    {
      ingredient: 'Baking powder',
      deltaPct: 15,
      direction: 'increase',
      rationale: 'Small bump on a test layer if leavening is fresh and flavor stays balanced.',
    },
  ],
  predictedEffect: 'More open, even crumb with less “wet dense” center.',
  relatedArticlePath,
  priority,
});

const dryRiskRule = (
  id: string,
  problems: string[],
  priority: number,
  relatedArticlePath: string
): DiagnosticRule => ({
  id,
  problems,
  whenAllSignals: ['cake_dry_risk'],
  title: 'Lean on sugar, fat, and liquid versus flour — dry crumb risk',
  explanation:
    'Flour carries most of the structure here; tenderizers are modest. That often bakes firm or dry if time or temperature run long.',
  confidence: 'medium',
  suggestedChanges: [
    {
      ingredient: 'Fat or liquid',
      deltaPct: 6,
      direction: 'increase',
      rationale: 'Small increases in butter, oil, or milk improve tenderness.',
    },
    {
      ingredient: 'Bake time',
      deltaPct: 8,
      direction: 'decrease',
      rationale: 'Pull slightly earlier; crumb should still moisten on cooling.',
    },
  ],
  predictedEffect: 'Softer eat with better moisture retention.',
  relatedArticlePath,
  priority,
});

export const cakeBalanceCookieRules: DiagnosticRule[] = [
  weakStructureRule(
    'cake-balance-weak-cookie',
    [
      'general',
      'cakey',
      'rise-then-fall',
      'stay-thick',
      'spreads-too-much',
      'too-dry',
      'too-chewy',
      'too-hard',
      'wont-spread',
      'too-crispy',
      'burn-bottom',
    ],
    92,
    '/cookie-science/why-cookies-turn-cakey'
  ),
  denseRiskRule(
    'cake-balance-dense-cookie',
    ['general', 'cakey', 'stay-thick', 'too-hard', 'too-chewy'],
    78,
    '/cake-science/why-cakes-are-dense'
  ),
  dryRiskRule(
    'cake-balance-dry-cookie',
    ['general', 'too-dry', 'too-hard', 'too-crispy'],
    74,
    '/cake-science/why-cakes-taste-dry'
  ),
];

export const cakeBalanceCakeRules: DiagnosticRule[] = [
  weakStructureRule(
    'cake-balance-weak-cake',
    ['collapse', 'sink', 'too-dense', 'dry', 'general'],
    93,
    '/cake-science/why-cakes-collapse'
  ),
  denseRiskRule(
    'cake-balance-dense-cake',
    ['too-dense', 'dense', 'general', 'collapse', 'sink'],
    79,
    '/cake-science/why-cakes-are-dense'
  ),
  dryRiskRule('cake-balance-dry-cake', ['dry', 'too-dry', 'general', 'too-dense'], 75, '/cake-science/why-cakes-taste-dry'),
];

export const cakeBalanceBakingRules: DiagnosticRule[] = [
  weakStructureRule(
    'cake-balance-weak-baking',
    ['recipes-fail', 'butter-temp', 'general'],
    90,
    '/baking-science/why-recipes-fail'
  ),
  denseRiskRule('cake-balance-dense-baking', ['recipes-fail', 'general'], 76, '/cake-science/why-cakes-are-dense'),
  dryRiskRule('cake-balance-dry-baking', ['recipes-fail', 'general'], 72, '/cake-science/why-cakes-taste-dry'),
];
