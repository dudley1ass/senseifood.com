import type { DiagnosticInput, RecipeCharacterization } from '../types';
import { buildRatioContext } from './context';
import { SENSEI_CHARACTERIZERS } from './senseis';

export type { RatioContext, StructuralKind } from './context';
export {
  LARGE_EGG_G,
  attachMeta,
  buildRatioContext,
  CAKE_REFERENCE_PROFILES,
  COOKIE_REFERENCE_PROFILES,
  categoryMismatchHint,
  closestProfileMatch,
  cakeStyleRead,
  cookieStyleRead,
  flourBasedStructureRead,
  inferStructuralKind,
} from './context';
export { SENSEI_CHARACTERIZERS, type SenseiCharacterizer } from './senseis';

/**
 * Plain-language “what this tends to read like” — one handler per `RecipeCategory`.
 * To add a Sensei: extend `RecipeCategory` in `types.ts`, add a row in `SENSEI_CHARACTERIZERS`.
 */
export function deriveRecipeCharacterization(input: DiagnosticInput): RecipeCharacterization | null {
  const ctx = buildRatioContext(input);
  const handler = SENSEI_CHARACTERIZERS[input.category] ?? SENSEI_CHARACTERIZERS.baking;
  return handler(ctx);
}
