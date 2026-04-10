import { RecipeIngredient, BreadMetrics, RangeMatch } from '../types/bread';
import { ingredientsDatabase } from '../data/ingredients';
import { BreadType } from '../types/breadTypes';

export function getFlourBaseGrams(recipe: RecipeIngredient[]): number {
  return recipe.reduce((sum, ri) => (ri.category === 'flour' ? sum + ri.amount : sum), 0);
}

/** Liquids + dairy + approximate water from eggs (enriched doughs). */
function hydratingGrams(recipe: RecipeIngredient[]): number {
  let h = 0;
  recipe.forEach((ri) => {
    const w = ri.amount;
    if (ri.category === 'liquid') h += w;
    if (ri.category === 'dairy') h += w;
    if (ri.category === 'egg') {
      const n = ri.name.toLowerCase();
      if (n.includes('white')) h += w * 0.88;
      else if (n.includes('yolk')) h += w * 0.48;
      else h += w * 0.73;
    }
  });
  return h;
}

function inZeroRange(actual: number): boolean {
  return actual <= 0.6;
}

type RangeKind = 'hydration' | 'fat' | 'sugar';

const RANGE_LABELS: Record<RangeKind, string> = {
  hydration: 'Water & liquids (vs flour)',
  fat: 'Butter & oil (vs flour)',
  sugar: 'Sugar & sweeteners (vs flour)',
};

export function matchPercentRange(
  actual: number,
  min: number,
  max: number,
  kind: RangeKind,
): RangeMatch {
  const label = RANGE_LABELS[kind];

  if ((kind === 'fat' || kind === 'sugar') && min === 0 && max === 0) {
    const ok = inZeroRange(actual);
    const note = ok
      ? kind === 'fat'
        ? 'No real butter or oil for the amount of flour — that fits plain breads like baguettes, ciabatta, or pizza dough.'
        : 'Hardly any sugar in the dough — that’s normal for many crusty breads and pizza.'
      : kind === 'fat'
        ? `This bread type is usually made without butter or oil. Yours shows about ${actual.toFixed(1)}% fat compared to the flour — use less butter or oil if you want it to match.`
        : `This style usually skips sugar in the dough. You’re around ${actual.toFixed(1)}% sweetener vs flour — cut the sugar (or honey, etc.) if you want it closer.`;
    return { label, actual, min, max, inRange: ok, note };
  }

  const inRange = actual >= min - 0.5 && actual <= max + 0.5;
  let note: string;

  if (kind === 'hydration') {
    if (inRange) {
      note = `Your water and other liquids line up with what this bread usually needs (${min}–${max}% compared to the flour).`;
    } else if (actual < min) {
      note = `A little dry for this style — bakers often use ${min}–${max}% liquid vs flour. Try a bit more water or milk if the dough feels stiff.`;
    } else {
      note = `Wetter than usual for this style (${min}–${max}% is more typical). The dough will be stickier — only keep pushing liquids if you’re comfortable with wet dough.`;
    }
  } else if (kind === 'fat') {
    if (inRange) {
      note = `Butter and oil look about right for this bread (${min}–${max}% compared to the flour).`;
    } else if (actual < min) {
      note = `Less fat than people usually use here (${min}–${max}% is common). The bread may be a bit less soft — add butter or oil if you want it richer.`;
    } else {
      note = `More butter or oil than this style usually gets (${min}–${max}% is typical). Expect a softer, richer loaf — closer to dinner rolls or brioche.`;
    }
  } else {
    if (inRange) {
      note = `Sugar or honey lines up with what this bread usually has (${min}–${max}% vs flour).`;
    } else if (actual < min) {
      note = `Not as sweet as usual for this style (${min}–${max}% is typical). Add a little sugar or honey if you want that softer, sweeter sandwich-bread feel.`;
    } else {
      note = `Sweeter than usual for this bread (${min}–${max}% is more common). Lots of sugar can slow yeast — you’re heading toward soft, sweet bread territory.`;
    }
  }

  return { label, actual, min, max, inRange, note };
}

export function compareToBreadType(
  hydrationPct: number,
  fatPct: number,
  sugarPct: number,
  breadType: BreadType,
): RangeMatch[] {
  return [
    matchPercentRange(hydrationPct, breadType.hydrationRange.min, breadType.hydrationRange.max, 'hydration'),
    matchPercentRange(fatPct, breadType.fatRange.min, breadType.fatRange.max, 'fat'),
    matchPercentRange(sugarPct, breadType.sugarRange.min, breadType.sugarRange.max, 'sugar'),
  ];
}

export function calculateBreadMetrics(recipeIngredients: RecipeIngredient[]): BreadMetrics {
  let totalWeight = 0;
  let totalCalories = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalSaturatedFat = 0;
  let totalTransFat = 0;
  let totalPolyFat = 0;
  let totalMonoFat = 0;
  let totalCholesterol = 0;
  let totalCarbs = 0;
  let totalSugar = 0;
  let totalFiber = 0;
  let totalSodium = 0;

  let flourWeight = 0;
  let fatWeight = 0;
  let sugarWeight = 0;
  let liquidWeight = 0;
  let eggWeight = 0;
  let leavenChemical = 0;
  let leavenEgg = 0;
  let leavenMechanical = 0;
  let yeastWeight = 0;

  recipeIngredients.forEach((ri) => {
    const ing = ingredientsDatabase.find((i) => i.id === ri.id);
    if (!ing) return;
    const w = ri.amount;
    totalWeight += w;
    const f = w / 100;
    totalCalories += ing.calories * f;
    totalProtein += ing.protein * f;
    totalFat += ing.fat * f;
    totalSaturatedFat += (ing.saturatedFat ?? 0) * f;
    totalTransFat += (ing.transFat ?? 0) * f;
    totalPolyFat += (ing.polyunsaturatedFat ?? 0) * f;
    totalMonoFat += (ing.monounsaturatedFat ?? 0) * f;
    totalCholesterol += (ing.cholesterol ?? 0) * f;
    totalCarbs += ing.carbs * f;
    totalSugar += ing.sugar * f;
    totalFiber += ing.fiber * f;
    totalSodium += ing.sodium * f;

    if (ing.category === 'flour') flourWeight += w;
    if (ing.category === 'fat') fatWeight += w;
    if (ing.category === 'sugar') sugarWeight += w;
    if (ing.category === 'liquid' || ing.category === 'dairy') liquidWeight += w;
    if (ing.category === 'egg') {
      eggWeight += w;
      if (ing.name.toLowerCase().includes('white')) leavenEgg += w;
    }
    if (ing.category === 'leavening') {
      leavenChemical += w;
      if (ing.name.toLowerCase().includes('yeast')) yeastWeight += w;
    }
    if (ing.category === 'fat' && ing.name.toLowerCase().includes('butter')) leavenMechanical += w;
  });

  const per100 = totalWeight > 0 ? 100 / totalWeight : 0;
  const flourRatio = totalWeight > 0 ? (flourWeight / totalWeight) * 100 : 0;
  const fatRatio = totalWeight > 0 ? (fatWeight / totalWeight) * 100 : 0;
  const sugarRatio = totalWeight > 0 ? (sugarWeight / totalWeight) * 100 : 0;
  const liquidRatio = totalWeight > 0 ? (liquidWeight / totalWeight) * 100 : 0;

  const flourBase = getFlourBaseGrams(recipeIngredients);
  const divisor = flourBase > 0 ? flourBase : 1;
  const hydrationBakerPct = (hydratingGrams(recipeIngredients) / divisor) * 100;
  const fatBakerPct = (fatWeight / divisor) * 100;
  const sugarBakerPct = (sugarWeight / divisor) * 100;

  const moistureScore = Math.min(100, Math.max(0, Math.round(liquidRatio * 1.2 + (eggWeight / Math.max(1, totalWeight)) * 30 + 10)));
  const tendernessScore = Math.min(100, Math.max(0, Math.round(fatRatio * 1.5 + sugarRatio * 0.5 - flourRatio * 0.3 + 20)));
  const sweetnessScore = Math.min(100, Math.max(0, Math.round(sugarRatio * 1.6)));
  const richnessScore = Math.min(100, Math.max(0, Math.round(fatRatio * 1.8 + totalFat * per100 * 0.3)));
  const lightnessScore = Math.min(100, Math.max(0, Math.round(
    (yeastWeight / Math.max(1, flourWeight)) * 8000 + (leavenEgg / Math.max(1, totalWeight)) * 100 + 15,
  )));

  const tasteWarnings: string[] = [];
  if (flourBase < 1 && totalWeight > 50) {
    tasteWarnings.push('Add flour to the list — we need flour in the recipe to show those “percent of flour” numbers.');
  }
  if (hydrationBakerPct > 95) {
    tasteWarnings.push('This is a very wet, sticky dough — totally doable, but it’s harder to shape unless you’ve practiced.');
  }
  if (hydrationBakerPct < 50 && flourWeight > 100) {
    tasteWarnings.push('Pretty firm dough — that’s normal for bagels; for soft sandwich bread you’d usually add more liquid.');
  }
  if (yeastWeight > 0 && yeastWeight / flourWeight > 0.03) {
    tasteWarnings.push('That’s a lot of yeast — it’ll puff up fast but won’t taste as deep. Many bakers use less yeast and wait longer.');
  }
  if (sugarWeight / divisor > 15) {
    tasteWarnings.push('Sugar is high for bread — yeast can get sluggish, and you’re getting into sweet-roll / pastry territory.');
  }

  let glutenDevelopment = 'Average strength';
  if (flourRatio < 25) glutenDevelopment = 'Lighter dough (less flour in the mix)';
  else if (flourRatio > 55) glutenDevelopment = 'Heavier on flour (stronger, chewier tendency)';

  let leavenType = 'Yeast';
  if (yeastWeight < 0.5 && flourWeight > 100) {
    leavenType = 'Tiny bit of yeast (slow rise / overnight style)';
  }

  let predictedCrumb = 'Fairly even crumb';
  if (hydrationBakerPct > 72 && fatBakerPct < 5) {
    predictedCrumb = 'Big, uneven holes — typical of wet, crusty breads';
  } else if (fatBakerPct > 25) {
    predictedCrumb = 'Soft, tight crumb — more like rolls or brioche';
  } else if (hydrationBakerPct < 58) {
    predictedCrumb = 'Dense and chewy — like bagels or firm loaves';
  }

  let shelfLife = '2–3 days';
  if (fatRatio > 8) shelfLife = '3–4 days (richer dough keeps a bit longer)';
  if (sugarRatio > 8) shelfLife = '3–5 days';

  let bakingTemp = 'Around 425°F / 220°C for crusty loaves, or 375°F / 190°C if there’s a lot of butter or eggs';
  if (fatBakerPct > 20) bakingTemp = 'Cooler oven — about 350–375°F / 175–190°C — so the outside doesn’t burn before the middle is done';

  return {
    totalWeight,
    calories: totalCalories * per100,
    protein: totalProtein * per100,
    fat: totalFat * per100,
    saturatedFat: totalSaturatedFat * per100,
    transFat: totalTransFat * per100,
    polyunsaturatedFat: totalPolyFat * per100,
    monounsaturatedFat: totalMonoFat * per100,
    cholesterol: totalCholesterol * per100,
    carbs: totalCarbs * per100,
    sugar: totalSugar * per100,
    fiber: totalFiber * per100,
    sodium: totalSodium * per100,
    moistureScore,
    tendernessScore,
    sweetnessScore,
    richnessScore,
    lightnessScore,
    flourRatio,
    fatRatio,
    sugarRatio,
    liquidRatio,
    glutenDevelopment,
    leavenType,
    predictedCrumb,
    shelfLife,
    bakingTemp,
    flavorProfile: [],
    dominantFlavor: 'Wheat-forward',
    tasteNotes: 'Tweak water, butter, and sugar until the checks above match the bread you’re aiming for.',
    bitternessScore: 0,
    tartScore: 0,
    nuttinessScore: 0,
    spiceScore: 0,
    fruitinessScore: 0,
    chocolateScore: 0,
    tasteWarnings,
    hydrationBakerPct,
    fatBakerPct,
    sugarBakerPct,
  };
}

export function getScoreLabel(score: number): string {
  if (score < 20) return 'Very Low';
  if (score < 40) return 'Low';
  if (score < 60) return 'Medium';
  if (score < 80) return 'High';
  return 'Very High';
}

export function getScoreColor(score: number): string {
  if (score < 25) return '#60a5fa';
  if (score < 50) return '#34d399';
  if (score < 75) return '#fbbf24';
  return '#f87171';
}

export interface BakerPercentRow {
  name: string;
  grams: number;
  bakerPct: number;
}

export function computeBakersPercents(recipe: RecipeIngredient[]): { rows: BakerPercentRow[]; baseGrams: number } {
  const baseGrams = getFlourBaseGrams(recipe);
  const div = baseGrams > 0 ? baseGrams : recipe.reduce((s, r) => s + r.amount, 0) || 1;
  const rows = recipe
    .map((ri) => ({ name: ri.name, grams: ri.amount, bakerPct: (ri.amount / div) * 100 }))
    .sort((a, b) => b.bakerPct - a.bakerPct);
  return { rows, baseGrams: baseGrams > 0 ? baseGrams : div };
}
