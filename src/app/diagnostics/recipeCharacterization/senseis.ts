import type { DiagnosticInput, RecipeCategory, RecipeCharacterization } from '../types';
import { bindingDeficiencyExplanation } from '../structureBinding';
import {
  LARGE_EGG_G,
  attachMeta,
  CAKE_REFERENCE_PROFILES,
  COOKIE_REFERENCE_PROFILES,
  cookieStyleRead,
  flourBasedStructureRead,
  type RatioContext,
} from './context';

export type SenseiCharacterizer = (ctx: RatioContext) => RecipeCharacterization | null;

function mergeBindingIntoCharacterization(
  base: RecipeCharacterization,
  input: DiagnosticInput
): RecipeCharacterization {
  const note = bindingDeficiencyExplanation(input);
  if (!note) return base;
  return {
    ...base,
    headline: 'Weak binder risk: egg low vs butter',
    blurb: `${note} ${base.blurb}`,
  };
}

function cookieSensei(ctx: RatioContext): RecipeCharacterization | null {
  if (ctx.flourG <= 0) return null;
  const base = flourBasedStructureRead(ctx, 'cookie');
  return mergeBindingIntoCharacterization(
    attachMeta(base, ctx, 'cookie', COOKIE_REFERENCE_PROFILES),
    ctx.input
  );
}

function cakeSensei(ctx: RatioContext): RecipeCharacterization | null {
  if (ctx.flourG <= 0) {
    return {
      headline: 'Add flour for a CakeSensei structure read',
      blurb: 'Log flour, fat, sugar, eggs, and liquids so we can read this as cake batter—not from the problem dropdown alone.',
    };
  }
  const base = flourBasedStructureRead(ctx, 'cake');
  const profiles = ctx.structuralKind === 'cake' ? CAKE_REFERENCE_PROFILES : COOKIE_REFERENCE_PROFILES;
  return attachMeta(base, ctx, 'cake', profiles);
}

function pieSensei(ctx: RatioContext): RecipeCharacterization | null {
  if (ctx.flourG <= 0) {
    return {
      headline: 'Add crust ingredients for PieSensei',
      blurb: 'Crust math needs flour and fat in the table (sugar is usually low in classic pastry).',
    };
  }
  if (ctx.structuralKind === 'cookie') {
    const inner = cookieStyleRead('baking', ctx);
    return attachMeta(
      {
        headline: 'Sweet press-in or cookie-style crust',
        blurb: `${inner.blurb} PieSensei: high sugar vs flour often means a shortbread or press-in shell—not a low-sugar laminated crust.`,
      },
      ctx,
      'pie',
      COOKIE_REFERENCE_PROFILES
    );
  }
  const base = flourBasedStructureRead(ctx, 'pie');
  return attachMeta(base, ctx, 'pie', COOKIE_REFERENCE_PROFILES);
}

function iceCreamSensei(ctx: RatioContext): RecipeCharacterization | null {
  if (ctx.flourG > 0) {
    const inner = flourBasedStructureRead(ctx, 'baking');
    return attachMeta(
      {
        headline: `Mix-in / variegate flour detected: ${inner.headline}`,
        blurb: `IceCreamSensei: flour in the list usually means cake, cookie dough, or brownie chunks—not the dairy base itself. ${inner.blurb}`,
      },
      ctx,
      'iceCream',
      ctx.structuralKind === 'cake' ? CAKE_REFERENCE_PROFILES : COOKIE_REFERENCE_PROFILES
    );
  }

  const { sugarG, fatG, liquidG, eggCount } = ctx;
  const eggG = eggCount * LARGE_EGG_G;
  const mass = sugarG + fatG + liquidG + eggG;
  if (mass < 12) {
    return {
      headline: 'Log sugar, dairy, and eggs',
      blurb: 'IceCreamSensei reads frozen bases from sugar, butter or cream, milk, and eggs—no flour required for a plain custard-style mix.',
    };
  }

  const sShare = sugarG / mass;
  const fShare = fatG / mass;
  const lShare = liquidG / mass;

  let headline: string;
  let blurb: string;

  if (fShare >= 0.2 && sShare >= 0.12) {
    headline = 'Rich, custard-leaning ice cream base';
    blurb =
      'Fat and sugar both carry weight vs total mass—typical of egg-stabilized or high-cream bases before churn. Overrun and freezing still change mouthfeel.';
  } else if (lShare >= 0.52 && fShare < 0.18) {
    headline = 'Lighter, milk-forward base';
    blurb =
      'Liquids dominate the table—closer to milk ice or softer scoop styles if fat stays moderate. Stabilizers are not in this simple read.';
  } else if (sShare >= 0.22) {
    headline = 'Sweet-forward base';
    blurb =
      'Sugar is a large share of what you logged—expect pronounced sweetness and softer scoop when paired with enough fat and water control.';
  } else {
    headline = 'Middle-of-the-road frozen base';
    blurb =
      'Sugar, fat, and dairy liquids look balanced in the rough totals; fine-tune with IceCreamSensei for overrun and iciness.';
  }

  return { headline, blurb };
}

function coffeeSensei(ctx: RatioContext): RecipeCharacterization | null {
  const { coffeeBeanG, coffeeLiquorG, flourG } = ctx;

  if (flourG > 0) {
    const base = flourBasedStructureRead(ctx, 'baking');
    const decorated: RecipeCharacterization = {
      headline: base.headline,
      blurb: `${base.blurb} Coffee lines suggest a baked good with coffee (cake, tiramisu layer, etc.)—BeanSensei extraction rules apply to the brew itself.`,
    };
    return attachMeta(decorated, ctx, 'coffee', COOKIE_REFERENCE_PROFILES);
  }

  if (coffeeBeanG < 1 && coffeeLiquorG < 1) {
    return {
      headline: 'BeanSensei: add dose and water (or espresso)',
      blurb:
        'Coffee mode is light on structure math. Log whole bean or ground weight plus brewed coffee or espresso volume—even rough numbers—for a strength vs dilution read.',
    };
  }

  if (coffeeLiquorG > 0 && coffeeBeanG > 0) {
    const ratio = coffeeLiquorG / coffeeBeanG;
    let band = 'typical drip / immersion ballpark';
    if (ratio > 22) band = 'quite dilute vs dose—mild cup';
    if (ratio < 11) band = 'strong / low dilution—check bitterness';
    return {
      headline: 'Brew strength vs coffee dose (rough)',
      blurb: `About ${ratio.toFixed(0)} g liquid to 1 g coffee in the table. That reads as ${band}. Taste and grind still dominate.`,
    };
  }

  if (coffeeBeanG > 0) {
    return {
      headline: 'Dose logged; add brew volume',
      blurb: 'Pair bean weight with brewed coffee or espresso (g or ml) so we can estimate dilution vs BeanSensei-style ratios.',
    };
  }

  return {
    headline: 'Brew liquid without bean line',
    blurb: 'Add coffee beans (whole or ground) weight to match this liquid for a dose read.',
  };
}

function breadSensei(ctx: RatioContext): RecipeCharacterization | null {
  if (ctx.flourG <= 0) {
    return {
      headline: 'Add flour and liquid for bread ratios',
      blurb: 'BreadSensei-style hydration needs flour plus water or milk in the ingredient list.',
    };
  }

  const base = flourBasedStructureRead(ctx, 'bread');
  let blurb = base.blurb;
  const h = ctx.liquidRatio;
  if (h >= 0.62) {
    blurb += ' Hydration vs flour is on the high side—wetter dough, more extensibility if gluten develops.';
  } else if (h > 0 && h <= 0.42) {
    blurb += ' Hydration is modest—stiffer dough, good for shapes that need structure.';
  }

  return { headline: base.headline, blurb };
}

function generalBakingSensei(ctx: RatioContext): RecipeCharacterization | null {
  if (ctx.flourG <= 0) return null;
  const base = flourBasedStructureRead(ctx, 'baking');
  const profiles = ctx.structuralKind === 'cake' ? CAKE_REFERENCE_PROFILES : COOKIE_REFERENCE_PROFILES;
  return mergeBindingIntoCharacterization(attachMeta(base, ctx, 'baking', profiles), ctx.input);
}

/**
 * One handler per Sensei / “Making” option. Add a new `RecipeCategory` in `types.ts`, then add a function here.
 */
export const SENSEI_CHARACTERIZERS: Record<RecipeCategory, SenseiCharacterizer> = {
  cookie: cookieSensei,
  cake: cakeSensei,
  pie: pieSensei,
  iceCream: iceCreamSensei,
  coffee: coffeeSensei,
  bread: breadSensei,
  baking: generalBakingSensei,
};
