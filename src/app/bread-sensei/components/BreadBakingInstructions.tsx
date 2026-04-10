import { Flame, Clock, Layers } from 'lucide-react';

interface BreadBakingInstructionsProps {
  breadTypeId: string;
  totalWeight: number;
  servings: number;
  measurementMode: 'metric' | 'imperial' | 'volumetric';
}

interface StepBlock {
  title: string;
  ovenF: string;
  ovenC: string;
  timeRange: string;
  pan: string;
  steps: string[];
  tips: string[];
}

const DATA: Record<string, StepBlock> = {
  'lean-white': {
    title: 'Lean white loaf',
    ovenF: '425°F then 400°F',
    ovenC: '220°C then 205°C',
    timeRange: '28–38 min (depends on shape)',
    pan: 'Banneton + Dutch oven, or loaf pan lined with parchment',
    steps: [
      'Mix until no dry flour; rest 15–30 min (autolyse optional).',
      'Add salt and yeast; knead to moderate gluten (windowpane starting to form).',
      'Bulk ferment until ~50–75% rise; shape tight for even crumb.',
      'Final proof until poke springs back slowly; score deeply.',
      'Steam first 10–15 min if open bake; lid on if Dutch oven.',
    ],
    tips: ['Lean dough benefits from strong flour and full gluten.', 'Short bulk = milder flavor.'],
  },
  artisan: {
    title: 'Artisan / high hydration',
    ovenF: '450°F',
    ovenC: '230°C',
    timeRange: '40–50 min covered, then uncovered to color',
    pan: 'Preheated Dutch oven or combo cooker',
    steps: [
      'Wet mix; rest. Stretch-and-fold every 30–45 min during bulk instead of heavy kneading.',
      'Bulk until bubbly and jiggly; pre-shape and bench rest.',
      'Shape gently; final proof in banneton (fridge overnight optional).',
      'Bake covered for steam; uncover for crust color.',
    ],
    tips: ['Wet dough sticks — wet hands and bench scraper are essential.', 'Time builds flavor more than yeast amount.'],
  },
  sourdough: {
    title: 'Sourdough-style (long ferment)',
    ovenF: '450°F',
    ovenC: '230°C',
    timeRange: '45–55 min (Dutch oven)',
    pan: 'Dutch oven; or stone with steam tray',
    steps: [
      'Build structure with coil or letter folds during long bulk.',
      'Cold proof optional for blistered crust and tang.',
      'Score to control expansion; bake with steam.',
    ],
    tips: ['Replace instant yeast with ripe levain at ~20% of flour (baker’s %) as a starting point.', 'Acid strengthens dough differently — expect chew.'],
  },
  sandwich: {
    title: 'Sandwich / pan bread',
    ovenF: '350°F',
    ovenC: '175°C',
    timeRange: '30–40 min in pan',
    pan: 'Greased or parchment-lined loaf pan (9×5 in typical)',
    steps: [
      'Knead to smooth; dough should pass windowpane with enrichments.',
      'First rise until doubled; punch, shape for pan, seam down.',
      'Proof until crown is ~1 in above pan rim in center.',
      'Bake until internal temp ~190–200°F (88–93°C).',
    ],
    tips: ['Milk and butter soften crumb — don’t under-bake or it will be gummy.', 'Brush with butter after bake for soft crust.'],
  },
  brioche: {
    title: 'Brioche',
    ovenF: '325–350°F',
    ovenC: '165–175°C',
    timeRange: '25–40 min (rolls vs loaf)',
    pan: 'Pans or molds depending on shape; egg wash before bake',
    steps: [
      'Develop gluten before adding most butter; add butter in stages on medium speed.',
      'Dough should clear bowl but stay tacky; chill if very soft.',
      'Proof until puffy; egg wash for color.',
    ],
    tips: ['Over-mixing early with all fat can kill gluten — stages matter.', 'Dark crust quickly — tent foil if needed.'],
  },
  focaccia: {
    title: 'Focaccia',
    ovenF: '425–450°F',
    ovenC: '220–230°C',
    timeRange: '22–30 min sheet',
    pan: 'Oiled half sheet or quarter sheet; dimple aggressively',
    steps: [
      'High hydration; minimal degassing when transferring to oiled pan.',
      'Stretch to corners in stages; dimple and pool olive oil.',
      'Top after dimple so toppings don’t sink.',
    ],
    tips: ['Oil in the pan is part of the recipe, not just anti-stick.', 'Don’t rush corner stretch — rest between stretches.'],
  },
  ciabatta: {
    title: 'Ciabatta',
    ovenF: '450°F',
    ovenC: '230°C',
    timeRange: '18–25 min depending on size',
    pan: 'Baking steel or stone; couche or floured linen for proof',
    steps: [
      'Extremely wet dough; use slap-and-fold or long fold series.',
      'Divide with floured bench scraper; transfer gently to parchment.',
      'Steam oven or pan of water for spring.',
    ],
    tips: ['Ciabatta is mostly technique — flour your hands, not the dough surface heavily.', 'Large irregular holes need gentle handling.'],
  },
  bagel: {
    title: 'Bagels',
    ovenF: '425°F',
    ovenC: '220°C',
    timeRange: '18–24 min after boil',
    pan: 'Parchment-lined sheet; optional bagel boards',
    steps: [
      'Stiff dough; knead until very smooth.',
      'Shape rings; proof until puffy.',
      'Boil 30–60 s per side in malted water; seed while wet.',
      'Bake until deeply golden; cool on rack.',
    ],
    tips: ['Boil sets the chew — skipping it makes soft rolls, not bagels.', 'Under-proofed bagels sink in the boil.'],
  },
  pizza: {
    title: 'Pizza dough',
    ovenF: 'As hot as your oven allows (500–550°F+ if possible)',
    ovenC: '260°C+',
    timeRange: '6–12 min home oven; 90 s–2 min very hot deck',
    pan: 'Steel, stone, or pan as appropriate',
    steps: [
      'Mix to moderate development; long cold ferment improves flavor.',
      'Bring to room temp before stretching if cold-proofed.',
      'Top lightly for even bake; launch quickly onto hot surface.',
    ],
    tips: ['Small amount of oil aids stretch in home ovens.', 'Don’t overload sauce or center stays wet.'],
  },
  'whole-wheat': {
    title: 'Whole wheat',
    ovenF: '375–400°F',
    ovenC: '190–205°C',
    timeRange: '35–50 min loaf',
    pan: 'Loaf pan or free-form with steam',
    steps: [
      'Higher hydration than white; longer autolyse helps bran hydrate.',
      'Knead to windowpane — bran makes it harder to feel.',
      'Proof fully; WW can feel dense if under-proofed.',
    ],
    tips: ['A little fat or honey softens bran edges.', 'Internal temp ~200°F (93°C) common for enriched WW loaves.'],
  },
};

const DEFAULT = DATA['lean-white']!;

export function BreadBakingInstructions({
  breadTypeId,
  totalWeight,
  servings,
  measurementMode,
}: BreadBakingInstructionsProps) {
  const block = DATA[breadTypeId] ?? DEFAULT;
  const perSlice = servings > 0 ? totalWeight / servings : totalWeight;
  const w =
    measurementMode === 'imperial'
      ? perSlice >= 28.3495
        ? `${(perSlice / 28.3495).toFixed(1)} oz / slice`
        : `${perSlice.toFixed(0)} g / slice`
      : `${perSlice.toFixed(0)} g / slice`;

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 print-clean-panel space-y-5">
      <div className="flex items-start gap-3 print:break-inside-avoid">
        <Flame className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <h2 className="text-lg font-bold text-gray-900">{block.title}</h2>
          <p className="text-sm text-gray-600 mt-1">
            Batch ≈ {totalWeight.toFixed(0)} g · {w}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 print:break-inside-avoid">
        <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-100">
          <Layers className="w-5 h-5 text-amber-700" />
          <div>
            <div className="text-xs text-gray-500">Oven</div>
            <div className="text-sm font-semibold text-gray-800">{block.ovenF}</div>
            <div className="text-xs text-gray-500">{block.ovenC}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-100">
          <Clock className="w-5 h-5 text-amber-700" />
          <div>
            <div className="text-xs text-gray-500">Bake time</div>
            <div className="text-sm font-semibold text-gray-800">{block.timeRange}</div>
          </div>
        </div>
        <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
          <div className="text-xs text-gray-500 mb-1">Equipment</div>
          <div className="text-sm font-medium text-gray-800">{block.pan}</div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-700 mb-2">Process</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          {block.steps.map((s, i) => (
            <li key={i} className="leading-relaxed">{s}</li>
          ))}
        </ol>
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-700 mb-2">Tips</h3>
        <ul className="space-y-1.5 text-sm text-gray-600">
          {block.tips.map((t, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-amber-600 flex-shrink-0">•</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
