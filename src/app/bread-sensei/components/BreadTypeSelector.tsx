import { useRef } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Wheat, ArrowRight, Sparkles } from 'lucide-react';
import { BreadType, BreadRecipe } from '../types/breadTypes';

interface BreadTypeSelectorProps {
  breadTypes: BreadType[];
  hubBackHref?: string;
  onSelectType: (breadType: BreadType) => void;
  onSelectRecipe: (breadType: BreadType, recipe: BreadRecipe) => void;
}

function BreadTypeCard({
  type,
  onStart,
}: {
  type: BreadType;
  onStart: () => void;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md border-2 border-transparent hover:border-amber-400 hover:shadow-lg transition-all duration-300 p-6 flex flex-col h-full group">
      <div className="flex items-start justify-between mb-3">
        <div className="text-4xl">{type.emoji}</div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-amber-50 text-amber-800">{type.category}</span>
          <Sparkles className="w-4 h-4 text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-1">{type.name}</h3>
      <p className="text-sm font-medium text-amber-900 mb-2 leading-snug">
        <span className="text-gray-500 font-normal">Best for: </span>
        {type.bestFor}
      </p>
      <p className="text-sm text-gray-600 mb-3 flex-grow">{type.description}</p>

      <div className="mb-3 grid grid-cols-2 gap-2 text-xs text-gray-600">
        <div>
          <span className="font-semibold text-amber-800">Hydration</span>
          <div>{type.hydrationRange.min}–{type.hydrationRange.max}%</div>
        </div>
        <div>
          <span className="font-semibold text-amber-800">Fat / sugar</span>
          <div>{type.fatRange.min}–{type.fatRange.max}% / {type.sugarRange.min}–{type.sugarRange.max}%</div>
        </div>
        <div className="col-span-2">
          <span className="font-semibold text-amber-800">Process</span>
          <div>{type.processStyle} · {type.fermentationTime}</div>
        </div>
        <div className="col-span-2">
          <span className="font-semibold text-amber-800">Crumb / crust</span>
          <div>{type.textureOutput} · {type.crust}</div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-3 mb-4">
        <div className="text-xs text-gray-500 italic">🔬 {type.scienceNote}</div>
      </div>

      <button
        type="button"
        onClick={onStart}
        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm text-white transition-all shadow-md hover:shadow-lg"
        style={{ background: 'linear-gradient(135deg, #92400e, #d97706)' }}
      >
        Start with {type.name}
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export function BreadTypeSelector({ breadTypes, hubBackHref, onSelectType, onSelectRecipe }: BreadTypeSelectorProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="bread-sensei-tool min-h-screen print:hidden"
      style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fde68a 100%)' }}
    >
      <header className="text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #78350f, #b45309, #d97706)' }}>
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-wrap items-center gap-3">
            {hubBackHref ? (
              <Link
                to={hubBackHref}
                className="flex items-center gap-1.5 text-sm text-white/90 hover:text-white transition-colors shrink-0"
              >
                <ArrowLeft className="w-4 h-4" />
                SenseiFood
              </Link>
            ) : null}
            <span className="text-3xl">🍞</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>Bread Sensei</h1>
              <p className="text-amber-100 text-sm">Formulas, baker’s %, and style targets — from lean to enriched</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-amber-800 font-semibold text-sm uppercase tracking-wide mb-2">Ten bread families</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Pick a bread type. Tune hydration & enrichment. See the numbers.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each style includes target hydration, fat, and sugar (as % of flour), plus process and fermentation cues — aligned with classic baker’s charts.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            <Wheat className="w-6 h-6 text-amber-700" />
            <h2 className="text-2xl font-bold text-gray-900">Choose a bread style</h2>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {breadTypes.map((type) => (
              <div key={type.id} className="flex flex-col gap-3">
                <BreadTypeCard type={type} onStart={() => onSelectType(type)} />
                {type.recipes.length > 0 && (
                  <div className="bg-white/80 rounded-xl border border-amber-100 p-4">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Load a preset</div>
                    <div className="flex flex-wrap gap-2">
                      {type.recipes.map((r) => (
                        <button
                          key={r.name}
                          type="button"
                          onClick={() => onSelectRecipe(type, r)}
                          className="text-left text-xs px-3 py-2 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition-colors"
                        >
                          <span className="mr-1">{r.emoji}</span>
                          {r.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
