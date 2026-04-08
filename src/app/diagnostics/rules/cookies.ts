import type { DiagnosticRule } from '../types';

export const cookieRules: DiagnosticRule[] = [
  {
    id: 'cookie-spread-fat-melt',
    problems: ['spreads-too-much', 'general'],
    title: 'Fat is melting before the dough structure sets',
    explanation:
      'Warm dough or high fat/sugar relative to flour lets butter flow early, so cookies race outward before proteins and starch lock in shape.',
    confidence: 'high',
    suggestedChanges: [
      {
        ingredient: 'Chill time',
        deltaPct: 0,
        direction: 'increase',
        rationale: 'Chill scooped dough 30–60 minutes (or overnight) so fat stays solid longer in the oven.',
      },
      {
        ingredient: 'Flour',
        deltaPct: 5,
        direction: 'increase',
        rationale: 'A slightly higher flour load adds structure to resist early spread (small test: +5–8%).',
      },
    ],
    predictedEffect: 'Expect thicker centers, less pooling, and a slower, more even spread.',
    relatedArticlePath: '/cookie-science/why-cookies-spread',
    priority: 80,
  },
  {
    id: 'cookie-spread-sugar',
    problems: ['spreads-too-much'],
    whenAnySignals: ['high_sugar_vs_flour'],
    title: 'Sugar is promoting melt and spread',
    explanation:
      'Dissolved sugars act as a syrup phase—especially with more white sugar—so the dough stays fluid longer and spreads farther.',
    confidence: 'medium',
    suggestedChanges: [
      {
        ingredient: 'Brown sugar',
        deltaPct: 15,
        direction: 'increase',
        rationale: 'Swap some white sugar to brown for chew and slightly less aggressive spread (keep totals similar).',
      },
      {
        ingredient: 'White sugar',
        deltaPct: 10,
        direction: 'decrease',
        rationale: 'Trim white sugar if the cookie is uncontrollably thin.',
      },
    ],
    predictedEffect: 'Usually less extreme spread with chewier texture and deeper caramel notes.',
    relatedArticlePath: '/cookie-science/brown-sugar-vs-white-sugar',
    priority: 70,
  },
  {
    id: 'cookie-wont-spread',
    problems: ['wont-spread'],
    whenAnySignals: ['low_fat_vs_flour', 'low_sugar_vs_flour'],
    title: 'Low fat or sugar vs flour can stall spread',
    explanation:
      'Spread needs enough mobile fat and dissolved sugar to flow. High-flour or low-fat doughs can set before they widen.',
    confidence: 'medium',
    suggestedChanges: [
      {
        ingredient: 'Fat (butter)',
        deltaPct: 8,
        direction: 'increase',
        rationale: 'Small bump in fat helps the phase melt and advance spread (test on a 3–4 cookie batch).',
      },
      {
        ingredient: 'Sugar',
        deltaPct: 6,
        direction: 'increase',
        rationale: 'Slightly more sugar improves dissolution and spread if flavor still balances.',
      },
    ],
    predictedEffect: 'Wider cookies with softer bite; watch sweetness and browning.',
    relatedArticlePath: '/cookie-science/why-cookies-dont-spread',
    priority: 72,
  },
  {
    id: 'cookie-wont-spread-cold',
    problems: ['wont-spread', 'stay-thick'],
    title: 'Dough may be too cold or dry to flow',
    explanation:
      'Over-chilled dough or a drier mix can read as “won’t spread” even when ratios look normal.',
    confidence: 'medium',
    suggestedChanges: [
      {
        ingredient: 'Temper',
        deltaPct: 0,
        direction: 'increase',
        rationale: 'Let portioned dough warm 5–10 minutes if it went straight from a hard chill to a hot oven.',
      },
      {
        ingredient: 'Liquid / egg',
        deltaPct: 5,
        direction: 'increase',
        rationale: 'A touch more egg white or water can mobilize the matrix without large sweetness shifts.',
      },
    ],
    predictedEffect: 'More predictable spread with fewer “hockey puck” centers.',
    priority: 65,
  },
  {
    id: 'cookie-hard-dry',
    problems: ['too-hard', 'too-dry'],
    title: 'Over-baking or low moisture retention',
    explanation:
      'Cookies firm as water leaves and sugars concentrate. Small time/temp errors or low hygroscopic sugar push them hard.',
    confidence: 'high',
    suggestedChanges: [
      {
        ingredient: 'Bake time',
        deltaPct: 10,
        direction: 'decrease',
        rationale: 'Pull when edges set but centers still look slightly under—they carry over.',
      },
      {
        ingredient: 'Brown sugar',
        deltaPct: 10,
        direction: 'increase',
        rationale: 'More brown sugar holds moisture and chew.',
      },
    ],
    predictedEffect: 'Softer centers and longer keeping without tooth-break edges.',
    relatedArticlePath: '/cookie-science/why-cookies-turn-hard',
    priority: 75,
  },
  {
    id: 'cookie-chewy',
    problems: ['too-chewy'],
    title: 'High moisture + sugar network = chew',
    explanation:
      'Chew comes from moisture retention and sugar interferes with snap. Balance structure vs sugar/fat to move toward your target texture.',
    confidence: 'medium',
    suggestedChanges: [
      {
        ingredient: 'White sugar',
        deltaPct: 8,
        direction: 'increase',
        rationale: 'A bit more white sugar encourages crisp snap vs pure chew.',
      },
      {
        ingredient: 'Fat',
        deltaPct: 5,
        direction: 'increase',
        rationale: 'Slightly more fat can shorten bite for some formulas.',
      },
    ],
    predictedEffect: 'Moves the texture window toward crisp-tender rather than heavy chew.',
    relatedArticlePath: '/cookie-science/why-cookies-are-chewy',
    priority: 60,
  },
  {
    id: 'cookie-crispy',
    problems: ['too-crispy'],
    title: 'Thin dough + sugar drivers + full bake',
    explanation:
      'Thin cookies with high sugar and full bake drive shatter. Thicker dough and softer pull solve most cases.',
    confidence: 'medium',
    suggestedChanges: [
      {
        ingredient: 'Flour',
        deltaPct: 6,
        direction: 'increase',
        rationale: 'Slightly more flour raises thickness and slows full dehydration.',
      },
      {
        ingredient: 'Bake temp',
        deltaPct: 0,
        direction: 'decrease',
        rationale: 'If edges burn before centers set, drop ~15°F and extend a minute.',
      },
    ],
    predictedEffect: 'Less snap, more thickness, more forgiving window.',
    relatedArticlePath: '/cookie-science/why-cookies-get-crispy',
    priority: 58,
  },
  {
    id: 'cookie-burn-bottom',
    problems: ['burn-bottom'],
    title: 'Bottom heat is too aggressive or dough too thin',
    explanation:
      'Dark pans, oven hotspots, or very low dough height put the bottom in the heat blast zone first.',
    confidence: 'high',
    suggestedChanges: [
      {
        ingredient: 'Pan insulation',
        deltaPct: 0,
        direction: 'increase',
        rationale: 'Double-pan or bake on a lighter sheet; rotate halfway.',
      },
      {
        ingredient: 'Oven rack',
        deltaPct: 0,
        direction: 'increase',
        rationale: 'Move up one rack to reduce radiant bottom browning.',
      },
    ],
    predictedEffect: 'More even brown without tar bottoms.',
    relatedArticlePath: '/cookie-science/why-cookies-burn-on-the-bottom',
    priority: 78,
  },
  {
    id: 'cookie-cakey',
    problems: ['cakey'],
    title: 'Too much structure / leavening for what you want',
    explanation:
      'Extra flour, eggs, or leavening can push a cakelike crumb in cookies.',
    confidence: 'medium',
    suggestedChanges: [
      {
        ingredient: 'Leavening',
        deltaPct: 15,
        direction: 'decrease',
        rationale: 'Trim baking soda/powder slightly on a test batch.',
      },
      {
        ingredient: 'Flour',
        deltaPct: 5,
        direction: 'decrease',
        rationale: 'If the dough feels stiff, a small flour reduction restores spread.',
      },
    ],
    predictedEffect: 'Denser, more cookie-like chew with fewer open crumbs.',
    relatedArticlePath: '/cookie-science/why-cookies-turn-cakey',
    priority: 62,
  },
  {
    id: 'cookie-rise-fall',
    problems: ['rise-then-fall'],
    title: 'Early lift, late collapse—structure didn’t hold',
    explanation:
      'Gas expands before the cookie sets; too much leavening, very soft butter, or under-flour can show this pattern.',
    confidence: 'medium',
    suggestedChanges: [
      {
        ingredient: 'Chill',
        deltaPct: 0,
        direction: 'increase',
        rationale: 'Chill to slow early expansion so edges set on time.',
      },
      {
        ingredient: 'Leavening',
        deltaPct: 10,
        direction: 'decrease',
        rationale: 'Slight reduction reduces explosive early rise.',
      },
    ],
    predictedEffect: 'Flatter, more stable shape with fewer collapsed centers.',
    relatedArticlePath: '/cookie-science/why-cookies-rise-then-fall',
    priority: 68,
  },
  {
    id: 'cookie-general',
    problems: ['general'],
    title: 'CookieSensei models spread and texture quantitatively',
    explanation:
      'For sliders and predicted texture, CookieSensei pairs better than guesswork when you want to see variable tradeoffs.',
    confidence: 'low',
    suggestedChanges: [
      {
        ingredient: 'Next step',
        deltaPct: 0,
        direction: 'increase',
        rationale: 'Open CookieSensei with your baseline recipe and iterate there.',
      },
    ],
    predictedEffect: 'Faster convergence when you can simulate before baking.',
    priority: 10,
  },
];
