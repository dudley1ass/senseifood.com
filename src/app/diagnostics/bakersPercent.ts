import type { RatioContext } from './recipeCharacterization/context';

export type CakeBakersTier = 'weak' | 'dense' | 'dry';

/** Flour = 100% — industry-standard baker’s percentages. */
export type FlourBakersPct = {
  sugar: number;
  fat: number;
  egg: number;
  liquid: number;
};

export function flourBakersPct(ctx: RatioContext): FlourBakersPct | null {
  if (ctx.flourG <= 0) return null;
  const f = ctx.flourG;
  return {
    sugar: (ctx.sugarG / f) * 100,
    fat: (ctx.fatG / f) * 100,
    egg: ((ctx.eggCount * 50) / f) * 100,
    liquid: (ctx.liquidG / f) * 100,
  };
}

/** Butter-cake style bands (flour = 100%). */
export const CAKE_BAKERS_BANDS = {
  sugar: [90, 110] as const,
  fat: [60, 100] as const,
  egg: [40, 80] as const,
  liquid: [60, 100] as const,
};

/** Drop-cookie style bands. */
export const COOKIE_BAKERS_BANDS = {
  sugar: [80, 120] as const,
  fat: [60, 100] as const,
  egg: [20, 40] as const,
};

/** Shortcrust-style crust (flour = 100%). */
export const PIE_CRUST_BANDS = {
  fat: [60, 80] as const,
  hydration: [30, 50] as const,
};

/** Frozen base as % of total logged mass (no flour). */
export const ICE_CREAM_BANDS = {
  fat: [10, 20] as const,
  sugar: [12, 18] as const,
  water: [55, 65] as const,
};

export function formatFlourBakersSummary(ctx: RatioContext): string | null {
  const b = flourBakersPct(ctx);
  if (!b) return null;
  return `Baker’s % (flour = 100%): sugar ${b.sugar.toFixed(0)}%, fat ${b.fat.toFixed(0)}%, egg ${b.egg.toFixed(0)}%, liquid ${b.liquid.toFixed(0)}%.`;
}

/**
 * Cake balance from baker’s % vs typical butter-cake bands (replaces raw ratio-only gates).
 */
export function classifyCakeFromBakers(ctx: RatioContext): CakeBakersTier | null {
  if (ctx.flourG <= 0 || ctx.yeastG > 0.5 || ctx.structuralKind !== 'cake') return null;
  const b = flourBakersPct(ctx)!;

  if (b.sugar > 115) return 'weak';
  if (b.sugar >= 94 && b.liquid >= 85 && b.fat < 58) return 'weak';
  if (b.egg < 38 && b.sugar >= 88 && b.liquid >= 70) return 'weak';

  if (b.liquid > 100 && b.fat < 60) return 'dense';

  if (b.fat < 55 && b.sugar < 88 && b.liquid < 58) return 'dry';
  if (b.fat < 52 && b.sugar < 92) return 'dry';

  return null;
}

export function cookieBakersSignals(ctx: RatioContext): string[] {
  if (ctx.flourG <= 0 || ctx.structuralKind !== 'cookie') return [];
  const b = flourBakersPct(ctx)!;
  const s: string[] = [];
  if (b.sugar > 120) s.push('cookie_bakers_sugar_high');
  if (b.fat > 100) s.push('cookie_bakers_fat_high');
  if (b.egg < 25) s.push('cookie_bakers_egg_low');
  if (b.egg > 42) s.push('cookie_bakers_egg_high');
  if (b.sugar < 80 && b.fat < 62) s.push('cookie_bakers_lean');
  return s;
}

/** Hydration for pie: prefer plain water grams; else fall back to all logged liquids. */
export function pieHydrationPctOfFlour(ctx: RatioContext): { pct: number; usedWaterOnly: boolean } {
  if (ctx.flourG <= 0) return { pct: 0, usedWaterOnly: false };
  if (ctx.waterG > 0) {
    return { pct: (ctx.waterG / ctx.flourG) * 100, usedWaterOnly: true };
  }
  return { pct: (ctx.liquidG / ctx.flourG) * 100, usedWaterOnly: false };
}

export function pieCrustBakersSignals(ctx: RatioContext): string[] {
  if (ctx.input.category !== 'pie' || ctx.flourG <= 0) return [];
  if (ctx.structuralKind !== 'pastry' && ctx.sugarRatio >= 0.32) return [];
  const b = flourBakersPct(ctx)!;
  const { pct: hydPct, usedWaterOnly } = pieHydrationPctOfFlour(ctx);
  const s: string[] = [];

  if (b.fat < 58) s.push('pie_bakers_fat_low');
  if (b.fat > 82) s.push('pie_bakers_fat_high');
  if (hydPct > 52) s.push(usedWaterOnly ? 'pie_bakers_hydration_high' : 'pie_bakers_hydration_high_proxy');
  if (hydPct > 0 && hydPct < 28) s.push('pie_bakers_hydration_low');

  return s;
}

export type IceCreamMixPct = { fat: number; sugar: number; water: number; totalG: number };

export function iceCreamMixPct(ctx: RatioContext): IceCreamMixPct | null {
  if (ctx.flourG > 0) return null;
  const eggG = ctx.eggCount * 50;
  const total = ctx.sugarG + ctx.fatG + ctx.liquidG + eggG;
  if (total < 12) return null;
  return {
    fat: (ctx.fatG / total) * 100,
    sugar: (ctx.sugarG / total) * 100,
    water: (ctx.liquidG / total) * 100,
    totalG: total,
  };
}

export function iceCreamBakersSignals(ctx: RatioContext): string[] {
  if (ctx.input.category !== 'iceCream') return [];
  const m = iceCreamMixPct(ctx);
  if (!m) return [];
  const s: string[] = [];
  if (m.fat < 9) s.push('ice_bakers_fat_low');
  if (m.fat > 21) s.push('ice_bakers_fat_high');
  if (m.sugar < 11) s.push('ice_bakers_sugar_low');
  if (m.sugar > 19) s.push('ice_bakers_sugar_high');
  if (m.water < 52) s.push('ice_bakers_water_low');
  if (m.water > 68) s.push('ice_bakers_water_high');
  return s;
}

export function cookieBakersNarrative(ctx: RatioContext): string | null {
  if (ctx.flourG <= 0 || ctx.structuralKind !== 'cookie') return null;
  const b = flourBakersPct(ctx)!;
  const parts: string[] = [];
  const [sLo, sHi] = COOKIE_BAKERS_BANDS.sugar;
  const [fLo, fHi] = COOKIE_BAKERS_BANDS.fat;
  const [eLo, eHi] = COOKIE_BAKERS_BANDS.egg;

  if (b.sugar > sHi) {
    parts.push(
      `STRUCTURE / SPREAD: Sugar is ~${b.sugar.toFixed(0)}% flour (typical drop-cookie band ~${sLo}–${sHi}%)—expect more spread, browning, and structure softening.`
    );
  }
  if (b.fat > fHi) {
    parts.push(
      `GREASY / FLAT: Fat is ~${b.fat.toFixed(0)}% flour (band ~${fLo}–${fHi}%)—often reads greasy or very flat without chill or extra flour.`
    );
  }
  if (b.egg < eLo) {
    parts.push(
      `STRUCTURE: Egg solids are ~${b.egg.toFixed(0)}% flour (band ~${eLo}–${eHi}%)—binding can feel weak or crumbly vs the fat load.`
    );
  }
  if (b.egg > eHi) {
    parts.push(
      `PUFFY / CAKEY: Eggs ~${b.egg.toFixed(0)}% flour (above ~${eHi}%) nudge toward cakey or puffed bars, not thin chew.`
    );
  }
  if (b.sugar < sLo && b.fat < 62) {
    parts.push(
      `DRY / THICK: Sugar and fat are both on the low side vs flour—cookies may bake dry, thick, or slow to spread.`
    );
  }

  if (!parts.length) return null;
  return `${parts.join(' ')} `;
}

export function pieBakersNarrative(ctx: RatioContext): string | null {
  if (ctx.input.category !== 'pie' || ctx.flourG <= 0) return null;
  if (ctx.structuralKind !== 'pastry' && ctx.sugarRatio >= 0.32) return null;
  const b = flourBakersPct(ctx)!;
  const { pct: h, usedWaterOnly } = pieHydrationPctOfFlour(ctx);
  const parts: string[] = [];
  const [fLo, fHi] = PIE_CRUST_BANDS.fat;
  const [hLo, hHi] = PIE_CRUST_BANDS.hydration;

  if (b.fat < fLo) {
    parts.push(`STRUCTURE: Fat ~${b.fat.toFixed(0)}% flour (shortcrust band ~${fLo}–${fHi}%)—crust can run tough without enough fat for tenderness.`);
  }
  if (b.fat > fHi) {
    parts.push(`TEXTURE: Fat ~${b.fat.toFixed(0)}% flour is high—crumbly shell or hard to handle is common; chill and gentle rolling help.`);
  }
  if (h > hHi) {
    parts.push(
      `${usedWaterOnly ? 'GLUTEN / TOUGH' : 'HYDRATION (proxy)'}: ${usedWaterOnly ? 'Water' : 'Liquid'} hydration ~${h.toFixed(0)}% flour (often ~${hLo}–${hHi}% water)—risk of excess gluten and chew if overworked.`
    );
  }
  if (h > 0 && h < hLo) {
    parts.push(`DRY / CRACK: Hydration ~${h.toFixed(0)}% flour is low—dough may crack when rolling; add cold water in tiny increments.`);
  }

  if (!parts.length) return null;
  return `Baker’s % read (crust): ${parts.join(' ')} Process still matters—cold fat, minimal mix, rest. `;
}

export function iceCreamBakersNarrative(ctx: RatioContext): string | null {
  if (ctx.input.category !== 'iceCream') return null;
  const m = iceCreamMixPct(ctx);
  if (!m) return null;
  const parts: string[] = [];
  const { fat: fB, sugar: sB, water: wB } = ICE_CREAM_BANDS;

  if (m.fat < fB[0]) {
    parts.push(`ICY / HARD: Fat is ~${m.fat.toFixed(0)}% of logged mix (typical ~${fB[0]}–${fB[1]}%)—often reads icy or hard without enough fat solids.`);
  }
  if (m.fat > fB[1]) {
    parts.push(`GREASY: Fat ~${m.fat.toFixed(0)}% of mix is high—heavy or greasy mouthfeel if balance is off.`);
  }
  if (m.sugar < sB[0]) {
    parts.push(`HARD FREEZE: Sugar ~${m.sugar.toFixed(0)}% of mix (band ~${sB[0]}–${sB[1]}%)—lower sugar raises freezing point; scoop can feel rock-hard.`);
  }
  if (m.sugar > sB[1]) {
    parts.push(`SOFT / MELT: Sugar ~${m.sugar.toFixed(0)}% of mix is high—softer scoop and faster melt are common.`);
  }
  if (m.water < wB[0]) {
    parts.push(`SOLIDS-HEAVY: Aqueous phase ~${m.water.toFixed(0)}% (often ~${wB[0]}–${wB[1]}% water in simple models)—check that dairy + water lines reflect your real base.`);
  }
  if (m.water > wB[1]) {
    parts.push(`WATER-HEAVY: Aqueous share ~${m.water.toFixed(0)}% is high—iciness risk if solids and fat do not catch up.`);
  }

  if (!parts.length) return null;
  return `Mix % of total logged mass (~${m.totalG.toFixed(0)} g): ${parts.join(' ')} `;
}
