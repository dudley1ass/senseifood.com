import type { DiagnosticRule } from '../types';

function rule(
  id: string,
  signal: string,
  problems: string[],
  title: string,
  explanation: string,
  priority: number,
  relatedArticlePath: string,
  changes: DiagnosticRule['suggestedChanges']
): DiagnosticRule {
  return {
    id,
    problems,
    whenAllSignals: [signal],
    title,
    explanation,
    confidence: 'high',
    suggestedChanges: changes,
    predictedEffect: 'Brings the formula closer to typical baker’s-% bands for that style.',
    relatedArticlePath,
    priority,
  };
}

export const bakersCookieRules: DiagnosticRule[] = [
  rule(
    'bakers-cookie-sugar-high',
    'cookie_bakers_sugar_high',
    ['general', 'spreads-too-much', 'too-crispy', 'burn-bottom', 'cakey'],
    'Baker’s %: sugar high vs flour',
    'Sugar is above a common drop-cookie band (~80–120% of flour). Expect more spread, browning, and structure softening unless you chill or add flour.',
    86,
    '/cookie-science/why-cookies-spread',
    [
      { ingredient: 'Sugar', deltaPct: 8, direction: 'decrease', rationale: 'Small trim on a test batch to see spread and set.' },
      { ingredient: 'Chill', deltaPct: 0, direction: 'increase', rationale: 'Cold dough slows sugar dissolution and spread.' },
    ]
  ),
  rule(
    'bakers-cookie-fat-high',
    'cookie_bakers_fat_high',
    ['general', 'spreads-too-much', 'too-chewy', 'burn-bottom'],
    'Baker’s %: fat high vs flour',
    'Fat is above a typical ~60–100% flour band—often greasy, very flat, or pool-y without chill/extra structure.',
    84,
    '/cookie-science/why-cookies-spread',
    [
      { ingredient: 'Butter / fat', deltaPct: 10, direction: 'decrease', rationale: 'Test a slightly leaner batch.' },
      { ingredient: 'Flour', deltaPct: 5, direction: 'increase', rationale: 'Small flour bump resists spread.' },
    ]
  ),
  rule(
    'bakers-cookie-egg-low',
    'cookie_bakers_egg_low',
    ['general', 'too-dry', 'too-hard', 'cakey', 'stay-thick'],
    'Baker’s %: low egg vs flour',
    'Egg solids are below a common ~20–40% flour band for drop cookies—binding and emulsification can feel weak vs fat and sugar.',
    88,
    '/cookie-science/why-cookies-turn-cakey',
    [
      { ingredient: 'Egg', deltaPct: 0, direction: 'increase', rationale: 'Add a yolk or half an egg on a test batch.' },
    ]
  ),
  rule(
    'bakers-cookie-egg-high',
    'cookie_bakers_egg_high',
    ['general', 'cakey', 'stay-thick', 'rise-then-fall'],
    'Baker’s %: high egg vs flour',
    'Eggs are high vs flour for a cookie—crumb tends cakey or puffed rather than thin and chewy.',
    78,
    '/cookie-science/why-cookies-turn-cakey',
    [
      { ingredient: 'Flour', deltaPct: 5, direction: 'increase', rationale: 'Slight structure bump if dough feels loose.' },
    ]
  ),
  rule(
    'bakers-cookie-lean',
    'cookie_bakers_lean',
    ['general', 'wont-spread', 'too-hard', 'too-dry'],
    'Baker’s %: lean sugar + fat',
    'Sugar and fat are both on the low side vs flour—cookies may be dry, thick, or slow to spread.',
    76,
    '/cookie-science/why-cookies-dont-spread',
    [
      { ingredient: 'Fat', deltaPct: 8, direction: 'increase', rationale: 'Small fat bump helps flow and tenderness.' },
      { ingredient: 'Sugar', deltaPct: 6, direction: 'increase', rationale: 'A touch more sugar improves spread and color.' },
    ]
  ),
];

export const bakersPieRules: DiagnosticRule[] = [
  rule(
    'bakers-pie-fat-low',
    'pie_bakers_fat_low',
    ['tough-crust', 'general'],
    'Baker’s %: low fat for shortcrust',
    'Fat is below a common ~60–80% flour band for flaky/short crust—toughness risk without enough fat for tenderness.',
    87,
    '/pie-science/why-pie-crust-gets-tough',
    [
      { ingredient: 'Fat', deltaPct: 10, direction: 'increase', rationale: 'Bring fat toward band on a test dough; keep it cold.' },
    ]
  ),
  rule(
    'bakers-pie-fat-high',
    'pie_bakers_fat_high',
    ['general', 'tough-crust'],
    'Baker’s %: very high fat in crust',
    'Fat is above ~80% flour—crumbly, hard-to-roll, or slumpy shell is common.',
    80,
    '/pie-science/why-pie-crust-gets-tough',
    [
      { ingredient: 'Fat', deltaPct: 8, direction: 'decrease', rationale: 'Slight fat trim; chill well before rolling.' },
    ]
  ),
  rule(
    'bakers-pie-hydration-high',
    'pie_bakers_hydration_high',
    ['tough-crust', 'general'],
    'Baker’s %: high water vs flour',
    'Water hydration is above a rough ~30–50% flour band—gluten can develop fast if overworked.',
    85,
    '/pie-science/why-pie-crust-gets-tough',
    [
      { ingredient: 'Water', deltaPct: 10, direction: 'decrease', rationale: 'Use minimal cold water; add by teaspoon.' },
      { ingredient: 'Mixing', deltaPct: 0, direction: 'decrease', rationale: 'Stop as soon as dough holds together.' },
    ]
  ),
  rule(
    'bakers-pie-hydration-high-proxy',
    'pie_bakers_hydration_high_proxy',
    ['tough-crust', 'general'],
    'Baker’s %: liquids look high vs flour (water not isolated)',
    'Total logged liquids vs flour are high; if much is milk rather than water, gluten behavior still trends tough when overworked—log water separately when you can.',
    82,
    '/pie-science/why-pie-crust-gets-tough',
    [
      { ingredient: 'Water line', deltaPct: 0, direction: 'increase', rationale: 'Split water from milk in the table for a clearer hydration read.' },
    ]
  ),
  rule(
    'bakers-pie-hydration-low',
    'pie_bakers_hydration_low',
    ['tough-crust', 'general'],
    'Baker’s %: low hydration vs flour',
    'Hydration looks low vs flour—cracking when rolling or dry edges.',
    79,
    '/pie-science/why-pie-crust-gets-tough',
    [
      { ingredient: 'Cold water', deltaPct: 0, direction: 'increase', rationale: 'Add a teaspoon at a time until dough just holds.' },
    ]
  ),
];

export const bakersIceCreamRules: DiagnosticRule[] = [
  rule(
    'bakers-ice-fat-low',
    'ice_bakers_fat_low',
    ['icy', 'general'],
    'Mix %: fat low vs total',
    'Fat share of logged mix is below a rough ~10–20% band—often icy or very hard without enough fat solids.',
    88,
    '/ice-cream-science/why-ice-cream-gets-icy',
    [
      { ingredient: 'Cream / fat', deltaPct: 8, direction: 'increase', rationale: 'Small fat bump on a test base.' },
    ]
  ),
  rule(
    'bakers-ice-fat-high',
    'ice_bakers_fat_high',
    ['melts-fast', 'general', 'icy'],
    'Mix %: fat high vs total',
    'Fat is above ~20% of logged mix—greasy or heavy mouthfeel if balance is off.',
    78,
    '/ice-cream-science/why-ice-cream-melts-fast',
    [
      { ingredient: 'Fat', deltaPct: 8, direction: 'decrease', rationale: 'Trim fat slightly; balance with milk/water phase.' },
    ]
  ),
  rule(
    'bakers-ice-sugar-low',
    'ice_bakers_sugar_low',
    ['icy', 'general'],
    'Mix %: sugar low vs total',
    'Sugar is below ~12–18% of mix—freezing point stays high; scoop can feel rock-hard.',
    86,
    '/ice-cream-science/why-ice-cream-gets-icy',
    [
      { ingredient: 'Sugar', deltaPct: 5, direction: 'increase', rationale: 'Small sugar bump lowers freezing point—taste-test.' },
    ]
  ),
  rule(
    'bakers-ice-sugar-high',
    'ice_bakers_sugar_high',
    ['melts-fast', 'general'],
    'Mix %: sugar high vs total',
    'Sugar is above ~18% of mix—softer scoop and faster melt are common.',
    80,
    '/ice-cream-science/why-ice-cream-melts-fast',
    [
      { ingredient: 'Sugar', deltaPct: 6, direction: 'decrease', rationale: 'Slight reduction on a test batch.' },
    ]
  ),
  rule(
    'bakers-ice-water-low',
    'ice_bakers_water_low',
    ['icy', 'general'],
    'Mix %: aqueous phase low vs total',
    'Water/milk share looks low vs a simple ~55–65% band—solids-heavy bases can skew texture; verify all dairy/water lines are logged.',
    74,
    '/ice-cream-science/why-ice-cream-gets-icy',
    [
      { ingredient: 'Milk / water', deltaPct: 5, direction: 'increase', rationale: 'Ensure liquids reflect the real base.' },
    ]
  ),
  rule(
    'bakers-ice-water-high',
    'ice_bakers_water_high',
    ['icy', 'general'],
    'Mix %: aqueous phase high vs total',
    'Watery share is high—iciness risk if solids and fat do not match.',
    77,
    '/ice-cream-science/why-ice-cream-gets-icy',
    [
      { ingredient: 'Solids (sugar / fat / dairy)', deltaPct: 5, direction: 'increase', rationale: 'Balance water phase with solids on a test.' },
    ]
  ),
];
