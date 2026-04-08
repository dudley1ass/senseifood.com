import type { DiagnosticInput } from './types';
import { shouldFlagLowEggVsFatBinding } from './structureBinding';

/**
 * Cheap ratio flags from typed grams. Only meaningful when flour is present.
 * Baseline assumes typical drop-cookie–ish ratios near butter+ sugar ~0.45–0.55 × flour each.
 */
export function deriveSignals(input: DiagnosticInput): string[] {
  const flour = input.flourG;
  if (flour == null || flour <= 0) return [];

  const fat = input.butterG ?? 0;
  const sugar = input.sugarG ?? 0;
  const signals: string[] = [];

  const fatRatio = fat / flour;
  const sugarRatio = sugar / flour;

  if (fatRatio > 0 && fatRatio < 0.38) signals.push('low_fat_vs_flour');
  if (fatRatio >= 0.58) signals.push('high_fat_vs_flour');
  if (sugarRatio > 0 && sugarRatio < 0.38) signals.push('low_sugar_vs_flour');
  if (sugarRatio >= 0.62) signals.push('high_sugar_vs_flour');

  if (shouldFlagLowEggVsFatBinding(input)) {
    signals.push('low_egg_vs_fat_binding');
  }

  return signals;
}
