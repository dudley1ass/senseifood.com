import { BreadMetrics, RecipeIngredient } from '../types/bread';
import { BreadType } from '../types/breadTypes';
import { compareToBreadType, computeBakersPercents, getScoreColor, getScoreLabel } from '../utils/breadCalculations';

interface BreadMetricsDisplayProps {
  metrics: BreadMetrics;
  breadType: BreadType;
  recipe: RecipeIngredient[];
  measurementMode: 'metric' | 'imperial' | 'volumetric';
}

function ScoreBar({ label, score, emoji }: { label: string; score: number; emoji: string }) {
  const color = getScoreColor(score);
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{emoji} {label}</span>
        <span className="text-sm font-bold text-gray-900">
          {score}/100 <span className="text-gray-400 font-normal text-xs">({getScoreLabel(score)})</span>
        </span>
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${score}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

export function BreadMetricsDisplay({ metrics, breadType, recipe, measurementMode }: BreadMetricsDisplayProps) {
  const formatWeight = (grams: number) => {
    if (measurementMode === 'imperial') {
      if (grams >= 453.592) return `${(grams / 453.592).toFixed(2)} lb`;
      return `${(grams / 28.3495).toFixed(2)} oz`;
    }
    return `${grams.toFixed(0)} g`;
  };

  const baker = computeBakersPercents(recipe);

  const matches = compareToBreadType(
    metrics.hydrationBakerPct,
    metrics.fatBakerPct,
    metrics.sugarBakerPct,
    breadType,
  );

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-5">
        <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wide mb-3">How your recipe compares to {breadType.name}</h3>
        <p className="text-xs text-gray-600 mb-4">
          We count water, milk, buttermilk, and most of the water inside eggs as &ldquo;liquids&rdquo; compared to your flour. Butter, oil, and sugar are compared the same way — all as a percent of the flour weight (how bread recipes are usually written).
        </p>
        <div className="space-y-3">
          {matches.map((m) => (
            <div
              key={m.label}
              className={`print-avoid-split rounded-xl px-4 py-3 border ${m.inRange ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-semibold text-gray-800">{m.label}</span>
                <span className={`text-sm font-bold ${m.inRange ? 'text-green-700' : 'text-amber-800'}`}>
                  {m.actual.toFixed(1)}% {m.inRange ? '✓' : '○'}
                </span>
              </div>
              <div className="text-xs text-gray-500 mb-1">
                Usual range for this bread: {m.min === 0 && m.max === 0 ? 'roughly none (about 0%)' : `${m.min}–${m.max}%`}
              </div>
              <div className="text-xs text-gray-700">{m.note}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-700 mb-2">Every ingredient as % of flour</h3>
        <p className="text-xs text-gray-500 mb-2">100% here means {formatWeight(baker.baseGrams)} of flour — every other ingredient is shown compared to that (or to the whole batch if there’s no flour).</p>
        <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-left">
                <th className="px-3 py-2 font-semibold text-gray-700">Ingredient</th>
                <th className="px-3 py-2 font-semibold text-gray-700 text-right">Weight</th>
                <th className="px-3 py-2 font-semibold text-gray-700 text-right">%</th>
              </tr>
            </thead>
            <tbody>
              {baker.rows.map((row, i) => (
                <tr key={`${row.name}-${i}`} className="border-b border-gray-100 last:border-0">
                  <td className="px-3 py-1.5 text-gray-800">{row.name}</td>
                  <td className="px-3 py-1.5 text-right text-gray-600 tabular-nums">{formatWeight(row.grams)}</td>
                  <td className="px-3 py-1.5 text-right font-medium tabular-nums">{row.bakerPct.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-sm font-bold text-gray-700 mb-3">Liquids, fat, and sugar at a glance</h3>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-white rounded-xl border border-gray-200 p-3">
            <div className="text-xs text-gray-500">Liquids</div>
            <div className="text-xl font-bold text-sky-700">{metrics.hydrationBakerPct.toFixed(1)}%</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-3">
            <div className="text-xs text-gray-500">Butter and oil</div>
            <div className="text-xl font-bold text-amber-700">{metrics.fatBakerPct.toFixed(1)}%</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-3">
            <div className="text-xs text-gray-500">Sweetener</div>
            <div className="text-xl font-bold text-rose-700">{metrics.sugarBakerPct.toFixed(1)}%</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-700 mb-3">Style reference</h3>
        <div className="text-sm text-gray-600 space-y-1 bg-gray-50 rounded-xl p-4 border border-gray-100">
          <p><span className="font-semibold text-gray-800">Process:</span> {breadType.processStyle}</p>
          <p><span className="font-semibold text-gray-800">Fermentation:</span> {breadType.fermentationTime}</p>
          <p><span className="font-semibold text-gray-800">Texture:</span> {breadType.textureOutput}</p>
          <p><span className="font-semibold text-gray-800">Crust:</span> {breadType.crust}</p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-700 mb-3">Rough dough &ldquo;vibe&rdquo; (not exact science)</h3>
        <ScoreBar label="How wet the mix acts" score={metrics.moistureScore} emoji="💧" />
        <ScoreBar label="Softness from fat and sugar" score={metrics.tendernessScore} emoji="🧈" />
        <ScoreBar label="How rich it might taste" score={metrics.richnessScore} emoji="✨" />
        <ScoreBar label="How fast yeast might work" score={metrics.lightnessScore} emoji="⬆️" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-500">Flour share of the batch</div>
          <div className="font-semibold">{metrics.glutenDevelopment}</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-500">Yeast</div>
          <div className="font-semibold">{metrics.leavenType}</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-500">Likely crumb</div>
          <div className="font-semibold">{metrics.predictedCrumb}</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-500">Oven temperature hint</div>
          <div className="font-semibold">{metrics.bakingTemp}</div>
        </div>
      </div>

      {metrics.tasteWarnings.length > 0 && (
        <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-4">
          <div className="text-xs font-bold text-amber-900 uppercase mb-2">Worth a look</div>
          <ul className="text-sm text-amber-950 space-y-1">
            {metrics.tasteWarnings.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="text-xs text-gray-400">
        Whole batch weighs about {formatWeight(metrics.totalWeight)}. These tips are ballpark only — your flour, kitchen, and hands still decide the loaf.
      </div>
    </div>
  );
}
