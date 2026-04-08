/**
 * Ingredient options + conversion to grams for ratio signals.
 * Dropdown groups are by food type (flour, sugar, dairy…), not by Sensei product.
 * Densities are approximate (home baking variance is large).
 */

export type IngredientBucket = 'flour' | 'fat' | 'sugar' | 'none';

/** Optgroup labels in the Fix Recipe ingredient picker (order in catalog is preserved within each group). */
export const INGREDIENT_GROUP_ORDER = [
  'Flours & starches',
  'Sugars & sweeteners',
  'Fats & oils',
  'Dairy & eggs',
  'Liquids',
  'Coffee',
  'Leavening & yeast',
  'Salt & extracts',
] as const;

export type IngredientGroup = (typeof INGREDIENT_GROUP_ORDER)[number];

export type IngredientDef = {
  id: string;
  label: string;
  group: IngredientGroup;
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
  // Flours & starches
  { id: 'flour-ap', label: 'All-purpose flour', group: 'Flours & starches', bucket: 'flour', gPerCup: 120, gPerTbsp: 7.8, gPerTsp: 2.6 },
  { id: 'flour-bread', label: 'Bread flour', group: 'Flours & starches', bucket: 'flour', gPerCup: 127, gPerTbsp: 8, gPerTsp: 2.7 },
  { id: 'flour-cake', label: 'Cake flour', group: 'Flours & starches', bucket: 'flour', gPerCup: 114, gPerTbsp: 7.5, gPerTsp: 2.5 },
  { id: 'flour-ww', label: 'Whole wheat flour', group: 'Flours & starches', bucket: 'flour', gPerCup: 120, gPerTbsp: 7.8, gPerTsp: 2.6 },
  { id: 'flour-almond', label: 'Almond flour', group: 'Flours & starches', bucket: 'flour', gPerCup: 96, gPerTbsp: 6, gPerTsp: 2 },
  { id: 'cornstarch', label: 'Cornstarch', group: 'Flours & starches', bucket: 'flour', gPerCup: 128, gPerTbsp: 8, gPerTsp: 2.7 },
  // Sugars & sweeteners
  { id: 'sugar', label: 'Sugar (granulated / white)', group: 'Sugars & sweeteners', bucket: 'sugar', gPerCup: 200, gPerTbsp: 12.5, gPerTsp: 4.2 },
  { id: 'sugar-brown', label: 'Brown sugar (packed)', group: 'Sugars & sweeteners', bucket: 'sugar', gPerCup: 220, gPerTbsp: 13.8, gPerTsp: 4.6 },
  { id: 'sugar-powder', label: 'Powdered sugar', group: 'Sugars & sweeteners', bucket: 'sugar', gPerCup: 120, gPerTbsp: 7.5, gPerTsp: 2.5 },
  { id: 'sugar-ice-cream', label: 'Sugar (for ice cream & frozen desserts)', group: 'Sugars & sweeteners', bucket: 'sugar', gPerCup: 200, gPerTbsp: 12.5, gPerTsp: 4.2 },
  { id: 'honey', label: 'Honey', group: 'Sugars & sweeteners', bucket: 'sugar', gPerCup: 340, gPerTbsp: 21, gPerTsp: 7, gPerMl: 1.42 },
  { id: 'maple', label: 'Maple syrup', group: 'Sugars & sweeteners', bucket: 'sugar', gPerCup: 322, gPerTbsp: 20, gPerTsp: 6.7, gPerMl: 1.37 },
  { id: 'corn-syrup', label: 'Corn syrup', group: 'Sugars & sweeteners', bucket: 'sugar', gPerCup: 328, gPerTbsp: 20.5, gPerTsp: 6.8, gPerMl: 1.4 },
  // Fats & oils
  { id: 'butter', label: 'Butter', group: 'Fats & oils', bucket: 'fat', gPerCup: 227, gPerTbsp: 14.2, gPerTsp: 4.7 },
  { id: 'oil-veg', label: 'Vegetable / canola oil', group: 'Fats & oils', bucket: 'fat', gPerCup: 224, gPerTbsp: 14, gPerTsp: 4.7, gPerMl: 0.92 },
  { id: 'oil-coconut', label: 'Coconut oil (melted)', group: 'Fats & oils', bucket: 'fat', gPerCup: 218, gPerTbsp: 13.6, gPerTsp: 4.5, gPerMl: 0.92 },
  { id: 'shortening', label: 'Shortening', group: 'Fats & oils', bucket: 'fat', gPerCup: 205, gPerTbsp: 12.8, gPerTsp: 4.3 },
  { id: 'shortening-pie', label: 'Shortening (pie crust)', group: 'Fats & oils', bucket: 'fat', gPerCup: 205, gPerTbsp: 12.8, gPerTsp: 4.3 },
  { id: 'cream-heavy', label: 'Heavy cream', group: 'Fats & oils', bucket: 'fat', gPerCup: 238, gPerTbsp: 15, gPerTsp: 5, gPerMl: 0.99 },
  // Dairy & eggs (cream cheese counts toward fat in ratio signals)
  { id: 'milk-whole', label: 'Milk (whole)', group: 'Dairy & eggs', bucket: 'none', gPerCup: 244, gPerTbsp: 15.3, gPerTsp: 5.1, gPerMl: 1.03 },
  { id: 'milk-plant', label: 'Plant milk (oat, almond, etc.)', group: 'Dairy & eggs', bucket: 'none', gPerCup: 240, gPerTbsp: 15, gPerTsp: 5, gPerMl: 1.01 },
  { id: 'milk-ice', label: 'Milk (for ice cream base)', group: 'Dairy & eggs', bucket: 'none', gPerCup: 244, gPerMl: 1.03 },
  { id: 'yogurt', label: 'Greek yogurt', group: 'Dairy & eggs', bucket: 'none', gPerCup: 227, gPerTbsp: 14, gPerTsp: 4.7, gPerMl: 1.05 },
  { id: 'sour-cream', label: 'Sour cream', group: 'Dairy & eggs', bucket: 'none', gPerCup: 242, gPerTbsp: 15, gPerTsp: 5, gPerMl: 1.02 },
  { id: 'cream-cheese', label: 'Cream cheese', group: 'Dairy & eggs', bucket: 'fat', gPerCup: 227, gPerTbsp: 14.2, gPerTsp: 4.7 },
  { id: 'egg-whole', label: 'Eggs (count — large, ~50 g each)', group: 'Dairy & eggs', bucket: 'none' },
  // Liquids
  { id: 'water', label: 'Water', group: 'Liquids', bucket: 'none', gPerCup: 237, gPerTbsp: 14.8, gPerTsp: 4.9, gPerMl: 1 },
  { id: 'coffee-brewed', label: 'Brewed coffee (liquid)', group: 'Liquids', bucket: 'none', gPerMl: 1 },
  { id: 'espresso', label: 'Espresso (liquid)', group: 'Liquids', bucket: 'none', gPerMl: 1 },
  // Coffee (solids)
  { id: 'coffee-beans', label: 'Coffee beans (whole or ground)', group: 'Coffee', bucket: 'none', gPerCup: 120, gPerTbsp: 7.5, gPerTsp: 2.5 },
  // Leavening & yeast
  { id: 'baking-powder', label: 'Baking powder', group: 'Leavening & yeast', bucket: 'none', gPerTsp: 4 },
  { id: 'baking-soda', label: 'Baking soda', group: 'Leavening & yeast', bucket: 'none', gPerTsp: 4.6 },
  { id: 'yeast-dry', label: 'Instant dry yeast', group: 'Leavening & yeast', bucket: 'none', gPerTsp: 3.1 },
  // Salt & extracts
  { id: 'salt', label: 'Salt (table / fine)', group: 'Salt & extracts', bucket: 'none', gPerTsp: 6, gPerTbsp: 18 },
  { id: 'vanilla', label: 'Vanilla extract', group: 'Salt & extracts', bucket: 'none', gPerTsp: 4.2, gPerTbsp: 13, gPerCup: 208, gPerMl: 0.88 },
];

/** Optgroups for `<select>`: stable order, items in same order as `INGREDIENT_CATALOG`. */
export const INGREDIENT_GROUPS: { group: string; items: IngredientDef[] }[] = (() => {
  const map = new Map<string, IngredientDef[]>();
  for (const ing of INGREDIENT_CATALOG) {
    const arr = map.get(ing.group);
    if (arr) arr.push(ing);
    else map.set(ing.group, [ing]);
  }
  const ordered: { group: string; items: IngredientDef[] }[] = [];
  for (const g of INGREDIENT_GROUP_ORDER) {
    const items = map.get(g);
    if (items?.length) ordered.push({ group: g, items });
  }
  for (const [group, items] of map) {
    if (!INGREDIENT_GROUP_ORDER.includes(group as IngredientGroup)) {
      ordered.push({ group, items });
    }
  }
  return ordered;
})();

export function getIngredientDef(id: string): IngredientDef | undefined {
  return INGREDIENT_CATALOG.find((i) => i.id === id);
}

export type MeasurementSystem = 'metric' | 'us';

export type MetricUnit = 'g' | 'kg' | 'ml';
export type UsUnit = 'cup' | 'tbsp' | 'tsp' | 'oz';

/** Total grams for one line (any ingredient). Eggs return 0 — use row count for eggs. */
export function ingredientGrams(
  ingredientId: string,
  amount: number,
  system: MeasurementSystem,
  unit: MetricUnit | UsUnit
): number {
  if (!Number.isFinite(amount) || amount <= 0) return 0;
  const def = getIngredientDef(ingredientId);
  if (!def) return 0;
  if (ingredientId === 'egg-whole') return 0;

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

  return Number.isFinite(g) && g > 0 ? g : 0;
}

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

  if (ingredientId === 'egg-whole') {
    return empty;
  }

  const g = ingredientGrams(ingredientId, amount, system, unit);
  if (g <= 0) return empty;

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

const LIQUID_IDS = new Set<string>([
  'water',
  'milk-whole',
  'milk-plant',
  'milk-ice',
  'vanilla',
]);

/** Flour / fat / sugar buckets plus eggs, chemical leaveners, yeast, and rough liquids for characterization. */
export function aggregateRecipeRowsExtended(
  rows: { ingredientId: string; amount: string; system: MeasurementSystem; unit: string }[]
): {
  flourG: number;
  butterG: number;
  sugarG: number;
  eggCount: number;
  bakingPowderG: number;
  bakingSodaG: number;
  yeastG: number;
  liquidG: number;
  waterG: number;
  coffeeBeanG: number;
  coffeeLiquorG: number;
} {
  const base = aggregateRecipeRows(rows);
  let eggCount = 0;
  let bakingPowderG = 0;
  let bakingSodaG = 0;
  let yeastG = 0;
  let liquidG = 0;
  let waterG = 0;
  let coffeeBeanG = 0;
  let coffeeLiquorG = 0;

  for (const row of rows) {
    const amt = parseFloat(row.amount);
    if (!Number.isFinite(amt) || amt <= 0) continue;
    const id = row.ingredientId;
    const u = row.unit as MetricUnit | UsUnit;

    if (id === 'egg-whole') {
      eggCount += Math.max(0, Math.round(amt));
      continue;
    }

    const g = ingredientGrams(id, amt, row.system, u);
    if (g <= 0) continue;

    if (id === 'baking-powder') bakingPowderG += g;
    else if (id === 'baking-soda') bakingSodaG += g;
    else if (id === 'yeast-dry') yeastG += g;
    else if (id === 'coffee-beans') coffeeBeanG += g;
    else if (id === 'coffee-brewed' || id === 'espresso') {
      liquidG += g;
      coffeeLiquorG += g;
    } else if (id === 'water') {
      liquidG += g;
      waterG += g;
    } else if (LIQUID_IDS.has(id)) liquidG += g;
  }

  const r = (x: number) => (x > 0 ? Math.round(x * 10) / 10 : 0);
  return {
    ...base,
    eggCount,
    bakingPowderG: r(bakingPowderG),
    bakingSodaG: r(bakingSodaG),
    yeastG: r(yeastG),
    liquidG: r(liquidG),
    waterG: r(waterG),
    coffeeBeanG: r(coffeeBeanG),
    coffeeLiquorG: r(coffeeLiquorG),
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
