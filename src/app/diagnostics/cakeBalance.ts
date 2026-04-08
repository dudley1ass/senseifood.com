import { classifyCakeFromBakers, flourBakersPct } from './bakersPercent';
import type { RecipeCharacterization } from './types';
import type { RatioContext } from './recipeCharacterization/context';

export type CakeBalanceKind = 'weak' | 'dense' | 'dry';

export function classifyCakeBalance(ctx: RatioContext): CakeBalanceKind | null {
  return classifyCakeFromBakers(ctx);
}

export function cakeBalanceSignals(ctx: RatioContext): string[] {
  const k = classifyCakeBalance(ctx);
  if (!k) return [];
  const id =
    k === 'weak' ? 'cake_weak_structure_risk' : k === 'dense' ? 'cake_dense_risk' : 'cake_dry_risk';
  return [id];
}

const RISK_COPY: Record<CakeBalanceKind, { tag: string; lead: string; tryLine: string }> = {
  weak: {
    tag: 'weak crumb / slight slump risk',
    lead:
      'Primary risk: STRUCTURE — soft crumb or center that sinks slightly. By baker’s % (flour = 100%), sugar is above the usual butter-cake band (~90–110%) with a lot of liquid and only moderate fat—sugar delays setting and competes for water.',
    tryLine: 'Try: trim sugar slightly, add a little flour, or an extra yolk/egg on a test bake.',
  },
  dense: {
    tag: 'dense-center risk',
    lead:
      'Primary risk: AERATION / SET — heavy or tight crumb. Liquid is high vs flour while fat sits below a typical creamed-cake band (~60–100% fat), so bubbles may not hold well before the crumb sets.',
    tryLine: 'Try: thorough creaming, fresh leavening, or a small bump in baking powder on a test.',
  },
  dry: {
    tag: 'dry / firm crumb risk',
    lead:
      'Primary risk: MOISTURE / TENDERNESS — lean on sugar, fat, and free liquid vs flour (baker’s %), so the matrix can bake firm or dry.',
    tryLine: 'Try: small increases in fat, sugar, or liquid—or pull the bake slightly earlier.',
  },
};

export function mergeCakeBalanceCharacterization(
  ctx: RatioContext,
  base: RecipeCharacterization
): RecipeCharacterization {
  const kind = classifyCakeBalance(ctx);
  if (!kind) return base;
  const copy = RISK_COPY[kind];
  const b = flourBakersPct(ctx);
  const pctLine = b
    ? ` Numbers: sugar ~${b.sugar.toFixed(0)}%, fat ~${b.fat.toFixed(0)}%, liquid ~${b.liquid.toFixed(0)}%, eggs ~${b.egg.toFixed(0)}% (flour = 100%).`
    : '';
  return {
    ...base,
    headline: `${base.headline} — ${copy.tag}`,
    blurb: `${copy.lead}${pctLine} ${copy.tryLine} ${base.blurb}`,
  };
}
