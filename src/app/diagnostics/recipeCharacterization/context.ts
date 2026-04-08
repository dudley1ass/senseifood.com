import type { DiagnosticInput, RecipeCategory, RecipeCharacterization } from '../types';

export const LARGE_EGG_G = 50;

export type StructuralKind = 'yeast_bread' | 'pastry' | 'cake' | 'cookie' | 'other';

export type RatioContext = {
  input: DiagnosticInput;
  flourG: number;
  fatG: number;
  sugarG: number;
  liquidG: number;
  coffeeBeanG: number;
  coffeeLiquorG: number;
  eggCount: number;
  bakingPowderG: number;
  bakingSodaG: number;
  yeastG: number;
  fatRatio: number;
  sugarRatio: number;
  eggToFlour: number;
  liquidRatio: number;
  tspPerCup: number;
  structuralKind: StructuralKind;
};

export const COOKIE_REFERENCE_PROFILES: {
  id: string;
  label: string;
  fatRatio: number;
  sugarRatio: number;
  eggToFlour: number;
}[] = [
  {
    id: 'chewy-sugar-cookie',
    label: 'Chewy / rolled sugar cookie (high butter & sugar vs flour)',
    fatRatio: 0.68,
    sugarRatio: 0.9,
    eggToFlour: 0.15,
  },
  {
    id: 'drop-chocolate-chip',
    label: 'Classic drop cookie (chocolate chip–style balance)',
    fatRatio: 0.55,
    sugarRatio: 0.72,
    eggToFlour: 0.18,
  },
  {
    id: 'toll-adjacent',
    label: 'High spread, high sugar drop cookie',
    fatRatio: 0.62,
    sugarRatio: 0.85,
    eggToFlour: 0.2,
  },
  {
    id: 'shortbread',
    label: 'Shortbread / low-egg slice cookie',
    fatRatio: 0.52,
    sugarRatio: 0.3,
    eggToFlour: 0,
  },
];

export const CAKE_REFERENCE_PROFILES: {
  label: string;
  fatRatio: number;
  sugarRatio: number;
  eggToFlour: number;
}[] = [
  { label: 'Butter cake / American layer cake (balanced)', fatRatio: 0.45, sugarRatio: 0.85, eggToFlour: 0.45 },
  { label: 'Pound-cake–ish (rich fat & egg)', fatRatio: 0.55, sugarRatio: 0.7, eggToFlour: 0.55 },
  { label: 'Sponge-leaning (lighter fat, more egg structure)', fatRatio: 0.25, sugarRatio: 0.65, eggToFlour: 0.65 },
];

export function inferStructuralKind(p: {
  fatRatio: number;
  sugarRatio: number;
  eggToFlour: number;
  tspPerCup: number;
  liquidRatio: number;
  yeastG: number;
}): StructuralKind {
  const { fatRatio, sugarRatio, eggToFlour, tspPerCup, liquidRatio, yeastG } = p;

  if (yeastG > 0.5) return 'yeast_bread';

  if (sugarRatio < 0.28 && fatRatio >= 0.35 && fatRatio <= 0.95) {
    return 'pastry';
  }

  if (liquidRatio >= 0.42) return 'cake';
  if (eggToFlour >= 0.45) return 'cake';
  if (tspPerCup >= 2.2 && liquidRatio >= 0.2) return 'cake';
  if (eggToFlour >= 0.32 && liquidRatio >= 0.35) return 'cake';

  if (fatRatio >= 0.38 && sugarRatio >= 0.42 && liquidRatio < 0.38) {
    return 'cookie';
  }

  if (fatRatio >= 0.42 && sugarRatio >= 0.35 && liquidRatio < 0.3) {
    return 'cookie';
  }

  return 'other';
}

export function buildRatioContext(input: DiagnosticInput): RatioContext {
  const flourG = input.flourG ?? 0;
  const fatG = input.butterG ?? 0;
  const sugarG = input.sugarG ?? 0;
  const liquidG = input.liquidG ?? 0;
  const coffeeBeanG = input.coffeeBeanG ?? 0;
  const coffeeLiquorG = input.coffeeLiquorG ?? 0;
  const eggCount = input.eggCount ?? 0;
  const bakingPowderG = input.bakingPowderG ?? 0;
  const bakingSodaG = input.bakingSodaG ?? 0;
  const yeastG = input.yeastG ?? 0;

  const fatRatio = flourG > 0 ? fatG / flourG : 0;
  const sugarRatio = flourG > 0 ? sugarG / flourG : 0;
  const eggToFlour = flourG > 0 ? (eggCount * LARGE_EGG_G) / flourG : 0;
  const liquidRatio = flourG > 0 ? liquidG / flourG : 0;

  const cupsEq = flourG / 120;
  const tspChem = bakingPowderG / 4 + bakingSodaG / 4.6;
  const tspPerCup = cupsEq > 0 ? tspChem / cupsEq : 0;

  const structuralKind =
    flourG > 0
      ? inferStructuralKind({
          fatRatio,
          sugarRatio,
          eggToFlour,
          tspPerCup,
          liquidRatio,
          yeastG,
        })
      : 'other';

  return {
    input,
    flourG,
    fatG,
    sugarG,
    liquidG,
    coffeeBeanG,
    coffeeLiquorG,
    eggCount,
    bakingPowderG,
    bakingSodaG,
    yeastG,
    fatRatio,
    sugarRatio,
    eggToFlour,
    liquidRatio,
    tspPerCup,
    structuralKind,
  };
}

export function closestProfileMatch(
  profiles: { label: string; fatRatio: number; sugarRatio: number; eggToFlour: number }[],
  fatRatio: number,
  sugarRatio: number,
  eggToFlour: number
): string | undefined {
  let best: { label: string; d2: number } | undefined;
  for (const ref of profiles) {
    const df = fatRatio - ref.fatRatio;
    const ds = sugarRatio - ref.sugarRatio;
    const de = eggToFlour - ref.eggToFlour;
    const d2 = df * df * 1.2 + ds * ds * 1.0 + de * de * 2.5;
    if (!best || d2 < best.d2) best = { label: ref.label, d2 };
  }
  if (best && best.d2 < 0.12) return best.label;
  if (best && best.d2 < 0.22) return `${best.label} (rough ballpark)`;
  return undefined;
}

export function categoryMismatchHint(category: RecipeCategory, kind: StructuralKind): string | undefined {
  if (kind === 'cookie' && category === 'cake') {
    return 'You chose Cakes, but these numbers read like cookie dough (high fat & sugar, little liquid). Switch Making to Cookies & bars for problem tips that match.';
  }
  if (kind === 'cake' && category === 'cookie') {
    return 'You chose Cookies, but eggs and/or liquid vs flour look more like cake batter. Switch Making to Cakes if you are baking a cake or cupcake.';
  }
  if (kind === 'cookie' && category === 'pie') {
    return 'You chose Pie, but fat/sugar vs flour look like cookie or bar dough, not a low-sugar crust.';
  }
  if (kind === 'pastry' && (category === 'cookie' || category === 'cake')) {
    return 'Ratios look like low-sugar pastry dough; if you meant a sweet cookie, check sugar amounts in the table.';
  }
  if (kind === 'pastry' && category === 'iceCream') {
    return 'Numbers look like pastry dough; for a frozen base, use cream, milk, and sugar lines without a crust formula.';
  }
  if (kind === 'cookie' && category === 'iceCream') {
    return 'Flour/fat/sugar read like cookie dough—fine for mix-ins; for plain ice cream base, remove flour and emphasize dairy + sugar.';
  }
  return undefined;
}

export function cakeStyleRead(ctx: RatioContext): RecipeCharacterization {
  const { eggToFlour, liquidRatio, tspPerCup } = ctx;
  if (eggToFlour >= 0.38 && liquidRatio > 0.55) {
    return {
      headline: 'Moist, tender cake-style batter',
      blurb: 'Eggs and liquids vs flour look like a classic cake: mix to combine once flour goes in to avoid a tough crumb.',
    };
  }
  if (tspPerCup >= 2.2) {
    return {
      headline: 'Well-leavened, light cake structure',
      blurb: 'Chemical leavening per cup of flour is fairly high—expect good lift if acid and leaver are in balance.',
    };
  }
  return {
    headline: 'Cake-style batter (liquid / egg–forward vs flour)',
    blurb: 'Free liquid and/or eggs vs flour read like a poured or creamed cake batter—not a low-moisture cookie dough.',
  };
}

export function cookieStyleRead(
  category: RecipeCategory,
  ctx: Pick<RatioContext, 'fatRatio' | 'sugarRatio' | 'eggToFlour' | 'tspPerCup' | 'eggCount'>
): RecipeCharacterization {
  const { fatRatio, sugarRatio, eggToFlour, tspPerCup, eggCount } = ctx;

  if (fatRatio < 0.32 && sugarRatio < 0.36 && eggCount === 0) {
    return {
      headline: 'Crisp, lean shortbread or slice-and-bake style',
      blurb: 'Low fat and sugar vs flour with no eggs usually bakes firm and crumbly—great for neat edges, not gooey centers.',
    };
  }

  if (tspPerCup >= 1.8 && eggToFlour >= 0.32) {
    return {
      headline: 'Soft, cakey cookie or bar',
      blurb: 'Plenty of egg and chemical leavening vs flour nudges the crumb toward cake: puffed and tender, less thin-and-chewy.',
    };
  }

  if (sugarRatio >= 0.54 && fatRatio >= 0.44) {
    return {
      headline: 'Thin, chewy cookie that spreads and browns',
      blurb: 'High sugar and fat vs flour weakens structure and drives spread and caramelization—think glossy sugar cookies unless the dough is chilled.',
    };
  }

  if (sugarRatio >= 0.4 && fatRatio >= 0.36 && fatRatio <= 0.58) {
    return {
      headline: 'Classic drop-cookie range (chewy / balanced)',
      blurb: 'Sugar and fat sit near familiar chocolate-chip territory: spread and texture still shift a lot with chill time, butter temp, and oven rack.',
    };
  }

  if (fatRatio > 0.58) {
    return {
      headline: 'Very rich, tender, spread-prone dough',
      blurb: 'Fat well above flour by weight makes a soft, often flat cookie unless you add flour, chill thoroughly, or bake from cold.',
    };
  }

  if (sugarRatio < 0.38 && fatRatio >= 0.36) {
    return {
      headline: 'Milder sweetness, more structured cookie',
      blurb: 'Lower sugar vs flour reins in spread and browning; cookies often stay thicker with a softer-not-ultra-chewy bite.',
    };
  }

  const scope = category === 'baking' ? 'cookie or bar' : 'cookie';
  return {
    headline: `General ${scope} dough`,
    blurb: 'Flour, fat, and sugar sit in a workable middle; eggs and leavening nudge cakey vs crisp. Oven temp and dough temperature finish the story.',
  };
}

/**
 * Shared flour-based structure read (CookieSensei / CakeSensei / Pie crust / etc.).
 * Uses ratio inference, not the dropdown—Sensei-specific framing is added by each handler.
 */
export function flourBasedStructureRead(ctx: RatioContext, category: RecipeCategory): RecipeCharacterization {
  const {
    structuralKind,
    yeastG,
    fatRatio,
    sugarRatio,
    eggToFlour,
    tspPerCup,
    eggCount,
    liquidRatio,
  } = ctx;

  if (yeastG > 0.5) {
    return {
      headline: 'Yeast-leavened dough',
      blurb: 'Yeast plus flour points to bread: rise and crumb come from gluten development and fermentation time—not just the numbers on the page.',
    };
  }

  if (category === 'bread' && yeastG <= 0.5 && structuralKind === 'other') {
    return {
      headline: 'Flour-heavy mix with little or no yeast listed',
      blurb: 'For real bread, add instant yeast to the table—or you may be closer to quick bread / soda bread if baking soda appears.',
    };
  }

  if (structuralKind === 'pastry') {
    return {
      headline: 'Pastry / pie crust–style fat-to-flour balance',
      blurb: 'Low sugar vs flour with meaningful fat is typical for flaky crust: keep fat cold and don’t overwork for layers.',
    };
  }

  if (structuralKind === 'cake') {
    return cakeStyleRead(ctx);
  }

  return cookieStyleRead(category === 'cake' ? 'baking' : category, {
    fatRatio,
    sugarRatio,
    eggToFlour,
    tspPerCup,
    eggCount,
  });
}

export function attachMeta(
  base: RecipeCharacterization,
  ctx: RatioContext,
  category: RecipeCategory,
  profiles: { label: string; fatRatio: number; sugarRatio: number; eggToFlour: number }[] = COOKIE_REFERENCE_PROFILES
): RecipeCharacterization {
  if (ctx.flourG <= 0) return base;
  const referenceMatch = closestProfileMatch(profiles, ctx.fatRatio, ctx.sugarRatio, ctx.eggToFlour);
  const categoryHint = categoryMismatchHint(category, ctx.structuralKind);
  return { ...base, referenceMatch, categoryHint };
}
