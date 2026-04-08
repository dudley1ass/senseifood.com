/**
 * Ingredient options across Sensei domains + conversion to grams for ratio signals.
 * Densities are approximate (home baking variance is large).
 */

export type IngredientBucket = 'flour' | 'fat' | 'sugar' | 'none';

export type IngredientDef = {
  id: string;
  label: string;
  sensei: string;
  bucket: IngredientBucket;
  /** Grams per US cup when measured by volume (scooped & leveled where relevant) */
  gPerCup?: number;
  /** Grams per US tablespoon */
  gPerTbsp?: number;
  /** Grams per US teaspoon */
  gPerTsp?: number;
  /** For ml → grams (liquids); water = 1 */
  gPerMl?: number;
};

export const INGREDIENT_CATALOG: IngredientDef[] = [
  // CookieSensei / general baking — flours
  { id: 'flour-ap', label: 'All-purpose flour', sensei: 'Cookie / cake / general', bucket: 'flour', gPerCup: 120, gPerTbsp: 7.8, gPerTsp: 2.6 },
  { id: 'flour-bread', label: 'Bread flour', sensei: 'Bread / general', bucket: 'flour', gPerCup: 127, gPerTbsp: 8, gPerTsp: 2.7 },
  { id: 'flour-cake', label: 'Cake flour', sensei: 'Cake', bucket: 'flour', gPerCup: 114, gPerTbsp: 7.5, gPerTsp: 2.5 },
  { id: 'flour-ww', label: 'Whole wheat flour', sensei: 'Bread / general', bucket: 'flour', gPerCup: 120, gPerTbsp: 7.8, gPerTsp: 2.6 },
  { id: 'flour-almond', label: 'Almond flour', sensei: 'Cookie / cake', bucket: 'flour', gPerCup: 96, gPerTbsp: 6, gPerTsp: 2 },
  { id: 'cornstarch', label: 'Cornstarch', sensei: 'Pie / general', bucket: 'flour', gPerCup: 128, gPerTbsp: 8, gPerTsp: 2.7 },
  // Fats
  { id: 'butter', label: 'Butter', sensei: 'Cookie / cake / pie', bucket: 'fat', gPerCup: 227, gPerTbsp: 14.2, gPerTsp: 4.7 },
  { id: 'oil-veg', label: 'Vegetable / canola oil', sensei: 'Cookie / cake', bucket: 'fat', gPerCup: 224, gPerTbsp: 14, gPerTsp: 4.7, gPerMl: 0.92 },
  { id: 'oil-coconut', label: 'Coconut oil (melted)', sensei: 'Cookie / ice cream', bucket: 'fat', gPerCup: 218, gPerTbsp: 13.6, gPerTsp: 4.5, gPerMl: 0.92 },
  { id: 'shortening', label: 'Shortening', sensei: 'Pie / cookie', bucket: 'fat', gPerCup: 205, gPerTbsp: 12.8, gPerTsp: 4.3 },
  { id: 'cream-heavy', label: 'Heavy cream', sensei: 'Ice cream / cake', bucket: 'fat', gPerCup: 238, gPerTbsp: 15, gPerTsp: 5, gPerMl: 0.99 },
  // Sugars
  { id: 'sugar-white', label: 'Granulated sugar', sensei: 'Cookie / cake / ice cream', bucket: 'sugar', gPerCup: 200, gPerTbsp: 12.5, gPerTsp: 4.2 },
  { id: 'sugar-brown', label: 'Brown sugar (packed)', sensei: 'Cookie / cake', bucket: 'sugar', gPerCup: 220, gPerTbsp: 13.8, gPerTsp: 4.6 },
  { id: 'sugar-powder', label: 'Powdered sugar', sensei: 'Cookie / cake', bucket: 'sugar', gPerCup: 120, gPerTbsp: 7.5, gPerTsp: 2.5 },
  { id: 'honey', label: 'Honey', sensei: 'Cookie / bread', bucket: 'sugar', gPerCup: 340, gPerTbsp: 21, gPerTsp: 7, gPerMl: 1.42 },
  { id: 'maple', label: 'Maple syrup', sensei: 'Cookie / general', bucket: 'sugar', gPerCup: 322, gPerTbsp: 20, gPerTsp: 6.7, gPerMl: 1.37 },
  { id: 'corn-syrup', label: 'Corn syrup', sensei: 'Pie / candy', bucket: 'sugar', gPerCup: 328, gPerTbsp: 20.5, gPerTsp: 6.8, gPerMl: 1.4 },
  // Liquids (no sugar/flour bucket — optional future)
  { id: 'water', label: 'Water', sensei: 'Bread / coffee / general', bucket: 'none', gPerCup: 237, gPerTbsp: 14.8, gPerTsp: 4.9, gPerMl: 1 },
  { id: 'milk-whole', label: 'Milk (whole)', sensei: 'Cake / ice cream', bucket: 'none', gPerCup: 244, gPerTbsp: 15.3, gPerTsp: 5.1, gPerMl: 1.03 },
  { id: 'milk-plant', label: 'Plant milk (oat, almond, etc.)', sensei: 'Cake / general', bucket: 'none', gPerCup: 240, gPerTbsp: 15, gPerTsp: 5, gPerMl: 1.01 },
  { id: 'coffee-brewed', label: 'Brewed coffee (liquid)', sensei: 'BeanSensei / cake', bucket: 'none', gPerMl: 1 },
  { id: 'espresso', label: 'Espresso (liquid)', sensei: 'BeanSensei', bucket: 'none', gPerMl: 1 },
  // Coffee solids
  { id: 'coffee-beans', label: 'Coffee beans (whole or ground)', sensei: 'BeanSensei', bucket: 'none', gPerCup: 120, gPerTbsp: 7.5, gPerTsp: 2.5 },
  // Eggs / dairy / leavening (shown for completeness; bucket none for ratios)
  { id: 'egg-whole', label: 'Eggs (count — large, ~50 g each)', sensei: 'Cookie / cake', bucket: 'none' },
  { id: 'yogurt', label: 'Greek yogurt', sensei: 'Cake / bread', bucket: 'none', gPerCup: 227, gPerTbsp: 14, gPerTsp: 4.7, gPerMl: 1.05 },
  { id: 'sour-cream', label: 'Sour cream', sensei: 'Cake / pie', bucket: 'none', gPerCup: 242, gPerTbsp: 15, gPerTsp: 5, gPerMl: 1.02 },
  { id: 'cream-cheese', label: 'Cream cheese', sensei: 'Cake / pie', bucket: 'fat', gPerCup: 227, gPerTbsp: 14.2, gPerTsp: 4.7 },
  { id: 'baking-powder', label: 'Baking powder', sensei: 'Cookie / cake', bucket: 'none', gPerTsp: 4 },
  { id: 'baking-soda', label: 'Baking soda', sensei: 'Cookie / cake', bucket: 'none', gPerTsp: 4.6 },
  { id: 'salt', label: 'Salt (table / fine)', sensei: 'All', bucket: 'none', gPerTsp: 6, gPerTbsp: 18 },
  { id: 'vanilla', label: 'Vanilla extract', sensei: 'Cookie / cake', bucket: 'none', gPerTsp: 4.2, gPerTbsp: 13, gPerCup: 208, gPerMl: 0.88 },
  // Ice cream base
  { id: 'sugar-ice-cream', label: 'Sugar (ice cream base)', sensei: 'IceCreamSensei', bucket: 'sugar', gPerCup: 200, gPerTbsp: 12.5, gPerTsp: 4.2 },
  { id: 'milk-ice', label: 'Milk (ice cream)', sensei: 'IceCreamSensei', bucket: 'none', gPerCup: 244, gPerMl: 1.03 },
  // Yeast
  { id: 'yeast-dry', label: 'Instant dry yeast', sensei: 'Bread', bucket: 'none', gPerTsp: 3.1 },
  // Pie
  { id: 'shortening-pie', label: 'Shortening (pie crust)', sensei: 'PieSensei', bucket: 'fat', gPerCup: 205, gPerTbsp: 12.8, gPerTsp: 4.3 },
];

export function getIngredientDef(id: string): IngredientDef | undefined {
  return INGREDIENT_CATALOG.find((i) => i.id === id);
}

export type MeasurementSystem = 'metric' | 'us';

export type MetricUnit = 'g' | 'kg' | 'ml';
export type UsUnit = 'cup' | 'tbsp' | 'tsp' | 'oz';

/** Convert one line to grams contributed to flour / fat / sugar buckets. */
export function gramsFromRow(
  ingredientId: string,
  amount: number,
  system: MeasurementSystem,
  unit: MetricUnit | UsUnit
): { flour: number; fat: number; sugar: number } {
  const empty = { flour: 0, fat: 0, sugar: 0 };
  if (!Number.isFinite(amount) || amount <= 0) return empty;
  const def = getIngredientDef(ingredientId);
  if (!def) return empty;

  // Eggs: count only — not used in flour/fat/sugar ratio flags today
  if (ingredientId === 'egg-whole') {
    return empty;
  }

  const gPerTbsp = def.gPerTbsp ?? (def.gPerCup != null ? def.gPerCup / 16 : 0);
  const gPerTsp = def.gPerTsp ?? (gPerTbsp ? gPerTbsp / 3 : 0);
  const gPerCup = def.gPerCup ?? (gPerTbsp ? gPerTbsp * 16 : 0);

  let g = 0;
  if (system === 'metric') {
    if (unit === 'kg') g = amount * 1000;
    else if (unit === 'g') g = amount;
    else if (unit === 'ml') g = amount * (def.gPerMl ?? 1);
  } else {
    const u = unit as UsUnit;
    if (u === 'oz') g = amount * 28.35;
    else if (u === 'cup') g = amount * gPerCup;
    else if (u === 'tbsp') g = amount * gPerTbsp;
    else if (u === 'tsp') g = amount * gPerTsp;
  }

  if (!Number.isFinite(g) || g <= 0) return empty;

  const out = { ...empty };
  if (def.bucket === 'flour') out.flour = g;
  else if (def.bucket === 'fat') out.fat = g;
  else if (def.bucket === 'sugar') out.sugar = g;
  return out;
}

export function aggregateRecipeRows(
  rows: { ingredientId: string; amount: string; system: MeasurementSystem; unit: string }[]
): { flourG: number; butterG: number; sugarG: number } {
  let flour = 0;
  let fat = 0;
  let sugar = 0;
  for (const row of rows) {
    const amt = parseFloat(row.amount);
    const u = row.unit as MetricUnit | UsUnit;
    const { flour: f, fat: fa, sugar: s } = gramsFromRow(row.ingredientId, amt, row.system, u);
    flour += f;
    fat += fa;
    sugar += s;
  }
  return {
    flourG: flour > 0 ? Math.round(flour * 10) / 10 : 0,
    butterG: fat > 0 ? Math.round(fat * 10) / 10 : 0,
    sugarG: sugar > 0 ? Math.round(sugar * 10) / 10 : 0,
  };
}

export const METRIC_UNITS: { value: MetricUnit; label: string }[] = [
  { value: 'g', label: 'g' },
  { value: 'kg', label: 'kg' },
  { value: 'ml', label: 'ml' },
];

export const US_UNITS: { value: UsUnit; label: string }[] = [
  { value: 'cup', label: 'cup' },
  { value: 'tbsp', label: 'tbsp' },
  { value: 'tsp', label: 'tsp' },
  { value: 'oz', label: 'oz (weight)' },
];

export function defaultUnitForSystem(system: MeasurementSystem): MetricUnit | UsUnit {
  return system === 'metric' ? 'g' : 'cup';
}
