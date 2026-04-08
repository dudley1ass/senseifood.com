import type { DiagnosticInput } from './types';

/** Large eggs ≈ 50 g — keep in sync with recipe aggregation. */
export const STRUCTURE_LARGE_EGG_G = 50;

/**
 * Enriched, low-liquid doughs (typical drop cookies): high sugar + fat vs flour but not pourable-batter hydration.
 * Flags when egg mass is low vs fat — weak binding / emulsification vs a common Toll House–style band (~2 eggs per ~1 cup butter).
 */
export function shouldFlagLowEggVsFatBinding(input: DiagnosticInput): boolean {
  const flour = input.flourG;
  if (flour == null || flour <= 0) return false;

  const fat = input.butterG ?? 0;
  if (fat <= 0) return false;

  const liquidG = input.liquidG ?? 0;
  const liquidRatio = liquidG / flour;
  if (liquidRatio >= 0.42) return false;

  const sugar = input.sugarG ?? 0;
  const sugarRatio = sugar / flour;
  const fatRatio = fat / flour;
  if (sugarRatio < 0.38 || fatRatio < 0.36) return false;

  const eggMassG = (input.eggCount ?? 0) * STRUCTURE_LARGE_EGG_G;
  return eggMassG / fat < 0.38;
}

export function bindingDeficiencyExplanation(input: DiagnosticInput): string | undefined {
  if (!shouldFlagLowEggVsFatBinding(input)) return undefined;
  return (
    'Eggs supply protein binding and emulsification; with this much butter versus egg mass, the dough may bake greasy, fragile, or crumbly—not just “extra spread.” ' +
    'Many classic drop cookies carry more egg per gram of fat; try a second egg or a small butter reduction on a test batch.'
  );
}
