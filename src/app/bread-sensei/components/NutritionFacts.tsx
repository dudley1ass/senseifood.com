import { BreadMetrics } from '../types/bread';

interface NutritionFactsProps {
  metrics: BreadMetrics;
  servingSize: number;
  servingsPerRecipe: number;
}

function formatTransFatGrams(g: number): string {
  if (g <= 0) return '0g';
  if (g < 0.005) return '<0.01g';
  return `${g.toFixed(2)}g`;
}

export function NutritionFacts({ metrics, servingSize, servingsPerRecipe }: NutritionFactsProps) {
  const f = servingSize / 100;
  const calories = (metrics.calories ?? 0) * f;
  const fat = (metrics.fat ?? 0) * f;
  const saturated = (metrics.saturatedFat ?? 0) * f;
  const trans = (metrics.transFat ?? 0) * f;
  const poly = (metrics.polyunsaturatedFat ?? 0) * f;
  const mono = (metrics.monounsaturatedFat ?? 0) * f;
  const cholesterol = (metrics.cholesterol ?? 0) * f;
  const carbs = (metrics.carbs ?? 0) * f;
  const protein = (metrics.protein ?? 0) * f;
  const fiber = (metrics.fiber ?? 0) * f;
  const sugar = (metrics.sugar ?? 0) * f;
  const sodium = (metrics.sodium ?? 0) * f;
  const starch = Math.max(0, carbs - fiber - sugar);

  const fatDV = (fat / 78) * 100;
  const saturatedDV = (saturated / 20) * 100;
  const cholesterolDV = (cholesterol / 300) * 100;
  const sodiumDV = (sodium / 2300) * 100;
  const carbsDV = (carbs / 275) * 100;
  const fiberDV = (fiber / 28) * 100;
  const proteinDV = (protein / 50) * 100;

  return (
    <div className="space-y-4">
      <div className="print-nutrition-label bg-white border-2 border-black p-4 max-w-sm font-sans">
        <div className="border-b-8 border-black pb-1">
          <h2 className="text-3xl font-black">Nutrition Facts</h2>
          <p className="text-xs text-gray-500 mt-0.5">🍞 Dough (baked estimate)</p>
          <p className="text-xs font-semibold text-gray-800 mt-2 leading-snug">
            Values below are <span className="underline">per slice</span> — change &ldquo;Number of slices&rdquo; under the dough formula to match how you cut the loaf.
          </p>
        </div>

        <div className="border-b-4 border-black py-1 text-sm">
          <div>Servings per recipe: <span className="font-bold">{servingsPerRecipe}</span></div>
          <div className="font-bold text-lg">
            Serving size: {servingSize}g ({(servingSize * 0.035274).toFixed(2)} oz)
          </div>
        </div>

        <div className="border-b-8 border-black py-2">
          <div className="flex justify-between items-end">
            <span className="font-bold text-lg">Calories <span className="text-xs font-semibold text-gray-600">(per serving)</span></span>
            <span className="text-4xl font-black">{calories.toFixed(0)}</span>
          </div>
        </div>

        <div className="border-b-4 border-black py-1 text-right">
          <div className="text-sm font-bold">% Daily Value*</div>
        </div>

        <div className="space-y-0.5 text-sm">
          <NutrRow label="Total Fat" amount={`${fat.toFixed(1)}g`} dv={fatDV} />
          <NutrSub label="Saturated Fat" amount={`${saturated.toFixed(1)}g`} dv={saturatedDV} />
          <NutrSub label="Trans Fat" amount={formatTransFatGrams(trans)} />
          {poly > 0.05 && <NutrSub label="Polyunsaturated Fat" amount={`${poly.toFixed(1)}g`} />}
          {mono > 0.05 && <NutrSub label="Monounsaturated Fat" amount={`${mono.toFixed(1)}g`} />}
          <NutrRow label="Cholesterol" amount={`${cholesterol.toFixed(0)}mg`} dv={cholesterolDV} />
          <NutrRow label="Sodium" amount={`${sodium.toFixed(0)}mg`} dv={sodiumDV} />
          <NutrRow label="Total Carbohydrate" amount={`${carbs.toFixed(1)}g`} dv={carbsDV} />
          <NutrSub label="Dietary Fiber" amount={`${fiber.toFixed(1)}g`} dv={fiberDV} />
          <NutrSub label="Total Sugars" amount={`${sugar.toFixed(1)}g`} />
          {starch > 0.5 && <NutrSub label="Starch" amount={`${starch.toFixed(1)}g`} />}
          <NutrRow label="Protein" amount={`${protein.toFixed(1)}g`} dv={proteinDV} />
        </div>

        <div className="border-t-8 border-black mt-2 pt-2 text-xs space-y-1">
          <p>* % Daily Values based on a 2,000 calorie diet.</p>
        </div>

        <div className="mt-3 text-xs text-gray-600 border-t border-gray-300 pt-2 space-y-0.5">
          <div className="font-semibold mb-1">Per 100g (whole batch average):</div>
          <div>Calories: {metrics.calories.toFixed(0)} kcal · Protein: {metrics.protein.toFixed(1)}g</div>
          <div>Fat: {metrics.fat.toFixed(1)}g · Carbs: {metrics.carbs.toFixed(1)}g · Sodium: {metrics.sodium.toFixed(0)}mg</div>
        </div>
      </div>
    </div>
  );
}

function NutrRow({ label, amount, dv }: { label: string; amount: string; dv?: number }) {
  return (
    <div className="flex justify-between border-b border-gray-400 py-1 font-bold">
      <span>{label} <span className="font-normal">{amount}</span></span>
      {dv !== undefined && <span>{dv.toFixed(0)}%</span>}
    </div>
  );
}

function NutrSub({ label, amount, dv }: { label: string; amount: string; dv?: number }) {
  return (
    <div className="flex justify-between border-b border-gray-300 py-0.5 pl-4">
      <span>{label} <span className="text-gray-600">{amount}</span></span>
      {dv !== undefined && <span className="font-bold">{dv.toFixed(0)}%</span>}
    </div>
  );
}
