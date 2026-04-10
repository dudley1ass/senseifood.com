export type IngredientCategory =
  | 'flour' | 'sugar' | 'fat' | 'liquid' | 'egg' | 'leavening'
  | 'dairy' | 'flavoring' | 'spice' | 'other';

export type MeasurementMode = 'metric' | 'imperial' | 'volumetric';

export interface Ingredient {
  id: string;
  name: string;
  category: IngredientCategory;
  calories: number;
  protein: number;
  fat: number;
  saturatedFat?: number;
  transFat?: number;
  polyunsaturatedFat?: number;
  monounsaturatedFat?: number;
  cholesterol?: number;
  carbs: number;
  sugar: number;
  fiber: number;
  sodium: number;
  moisture: number;
  defaultAmount: number;
}

export interface RecipeIngredient extends Ingredient {
  recipeId: string;
  amount: number;
}

/** Shared numeric scores with CakeSensei-style metrics; bread view emphasizes baker’s %. */
export interface BreadMetrics {
  totalWeight: number;
  calories: number;
  protein: number;
  fat: number;
  saturatedFat: number;
  transFat: number;
  polyunsaturatedFat: number;
  monounsaturatedFat: number;
  cholesterol: number;
  carbs: number;
  sugar: number;
  fiber: number;
  sodium: number;
  moistureScore: number;
  tendernessScore: number;
  sweetnessScore: number;
  richnessScore: number;
  lightnessScore: number;
  flourRatio: number;
  fatRatio: number;
  sugarRatio: number;
  liquidRatio: number;
  glutenDevelopment: string;
  leavenType: string;
  predictedCrumb: string;
  shelfLife: string;
  bakingTemp: string;
  flavorProfile: string[];
  dominantFlavor: string;
  tasteNotes: string;
  bitternessScore: number;
  tartScore: number;
  nuttinessScore: number;
  spiceScore: number;
  fruitinessScore: number;
  chocolateScore: number;
  tasteWarnings: string[];
  /** Baker’s %: hydrating liquids ÷ structural flour × 100 */
  hydrationBakerPct: number;
  fatBakerPct: number;
  sugarBakerPct: number;
}

export interface RangeMatch {
  label: string;
  actual: number;
  min: number;
  max: number;
  inRange: boolean;
  note: string;
}
