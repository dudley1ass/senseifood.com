import type { ScienceArticleSpec } from '../scienceArticleTypes';

const ICE_REL = [
  { title: 'Why Ice Cream Is Creamy', path: '/ice-cream-science/why-ice-cream-is-creamy' },
  { title: 'Why Ice Cream Gets Icy', path: '/ice-cream-science/why-ice-cream-gets-icy' },
];

const SAUCE_REL = [
  { title: 'Temperature: The Silent Killer of Sauces', path: '/sauce-science/temperature-silent-killer-sauces' },
  { title: 'Emulsion vs Non-Emulsion Sauces', path: '/sauce-science/emulsion-vs-non-emulsion-sauces' },
];

export const phase2GapArticlesPart2: ScienceArticleSpec[] = [
  {
    slug: 'why-ice-cream-tastes-too-sweet',
    segment: 'ice-cream-science',
    categoryLabel: 'Ice Cream Science',
    title: 'Why Ice Cream Tastes Too Sweet (Cold Suppression Curve)',
    subtitle: 'Sweetness perception shifts with temperature; cold hides bitterness but can leave sucrose loud.',
    readTime: '7 min read',
    level: 'Serving temperature',
    emoji: '🍬',
    fixRecipe: { category: 'iceCream', problem: 'general' },
    quickAnswer:
      'At freezer temperature, volatile aromatics are quieter while sucrose still reads strong. Balance with salt, dairy solids, and bitterness (cocoa, coffee) or serve slightly warmer for tastings.',
    intro:
      'Sweetness is not a single number on a label—it is perceived intensity that changes with temperature and aroma context. Ice cream is eaten cold, so the “cold suppression curve” shifts the whole flavor mix.',
    sections: [
      {
        heading: 'Temperature vs perceived sweetness',
        paragraphs: [
          'Colder samples mute some aromatics faster than they mute simple sweetness, so sugar can dominate. A base that tastes perfect at 40°F may taste blunt at 0°F.',
        ],
      },
      {
        heading: 'Solids and water activity sequence',
        paragraphs: [
          'MSNF and egg yolk add buffering and cooked notes that compete with sugar. Building solids before final sugar lock reduces “one-note sweet.”',
        ],
      },
      {
        heading: 'Holding in the mouth',
        paragraphs: [
          'As a bite warms on the tongue, aromatics return—formulators taste temper, not only frozen nibs.',
        ],
      },
    ],
    related: [
      { title: 'Why Ice Cream Lacks Flavor', path: '/ice-cream-science/why-ice-cream-lacks-flavor' },
      { title: 'Why Ice Cream Gets Freezer Burn', path: '/ice-cream-science/why-ice-cream-gets-freezer-burn' },
      ...ICE_REL,
    ],
  },
  {
    slug: 'why-ice-cream-doesnt-scoop-smoothly',
    segment: 'ice-cream-science',
    categoryLabel: 'Ice Cream Science',
    title: "Why Ice Cream Doesn't Scoop Smoothly",
    subtitle: 'Hardness is tied to freezing point depression, ice fraction, and temper time—not “bad luck.”',
    readTime: '7 min read',
    level: 'Freezing & temper',
    emoji: '🍨',
    fixRecipe: { category: 'iceCream', problem: 'general' },
    quickAnswer:
      'Rock-hard pints usually mean low sugar/alcohol, very low freezer temp, or high water fraction. Let temper 5–10 minutes; if still chippy, adjust solids and freezing curve.',
    intro:
      'Scoopability is rheology at a narrow temperature band. Too much water freezes as rigid ice; too little sugar raises the freezing point. Your freezer thermostat sets the final experience as much as the formula.',
    sections: [
      {
        heading: 'Freezer temperature as part of the recipe',
        paragraphs: [
          '0°F vs −10°F changes scoop effort dramatically. Store serve tubs slightly warmer than long-hold storage if possible.',
        ],
      },
      {
        heading: 'Temper sequence before service',
        paragraphs: [
          'Surface micro-thaw lubricates the scoop path. Cutting straight from deep cold fractures ice lamellae into powdery shards.',
        ],
      },
      {
        heading: 'Holding after scooping',
        paragraphs: [
          'Pre-scooped balls recrystallize edges if held uncovered in a blast freezer. Covered pan, steady cold.',
        ],
      },
    ],
    related: [
      { title: 'Why Ice Cream Is Too Hard', path: '/ice-cream-science/why-ice-cream-is-too-hard' },
      { title: 'Why Ice Cream Melts Fast', path: '/ice-cream-science/why-ice-cream-melts-fast' },
      ...ICE_REL,
    ],
  },
  {
    slug: 'why-ice-cream-loses-air-overrun-collapse',
    segment: 'ice-cream-science',
    categoryLabel: 'Ice Cream Science',
    title: 'Why Ice Cream Loses Air (Overrun Collapse)',
    subtitle: 'Dasher time, viscosity, and cold chain breaks determine how much air stays trapped.',
    readTime: '8 min read',
    level: 'Process & churn',
    emoji: '💨',
    fixRecipe: { category: 'iceCream', problem: 'general' },
    quickAnswer:
      'Air whipped in at churn must be imprisoned by partially frozen serum. Warm breaks, thin bases, or stopping churn too early let bubbles coalesce and escape on hardening.',
    intro:
      'Overrun is a foam frozen in time. If the continuous phase stiffens too slowly—or reliquefies later—bubbles drain and the pint feels dense and short.',
    sections: [
      {
        heading: 'Churn temperature path',
        paragraphs: [
          'The dasher introduces air while crystals nucleate. If draw temperature is too warm, bubbles collapse before the matrix locks.',
        ],
      },
      {
        heading: 'Viscosity before freeze',
        paragraphs: [
          'Ageing base hydrates stabilizers; skipping rest yields weepy foam that cannot hold air.',
        ],
      },
      {
        heading: 'Holding cold chain through hardening',
        paragraphs: [
          'Partial thaw-refreeze cycles collapse structure; air pockets shrink as ice reorganizes.',
        ],
      },
    ],
    related: [
      { title: 'Why Ice Cream Separates', path: '/ice-cream-science/why-ice-cream-separates' },
      { title: 'Why Ice Cream Is Too Soft', path: '/ice-cream-science/why-ice-cream-is-too-soft' },
      ...ICE_REL,
    ],
  },
  {
    slug: 'why-ice-cream-develops-ice-layers-over-time',
    segment: 'ice-cream-science',
    categoryLabel: 'Ice Cream Science',
    title: 'Why Ice Cream Develops Ice Layers Over Time',
    subtitle: 'Temperature oscillation drives water vapor to refreeze at the coldest interface.',
    readTime: '8 min read',
    level: 'Storage degradation',
    emoji: '❄️',
    fixRecipe: { category: 'iceCream', problem: 'icy' },
    quickAnswer:
      'Ice layers form when the pint warms slightly then refreezes—water migrates and plates out on the container wall or surface. Limit air headspace, keep steady cold, and press parchment to surface.',
    intro:
      'Your freezer is a climate system, not a constant. Every door opening is a mini heat cycle. Ice layers are the macroscopic signature of recrystallization at interfaces.',
    sections: [
      {
        heading: 'Temperature cycling math in plain language',
        paragraphs: [
          'Small repeated warmings increase average ice crystal size and create visible sheets. Steadier −5°F band beats swinging 10°F around a setpoint.',
        ],
      },
      {
        heading: 'Headspace and surface area',
        paragraphs: [
          'Air exchanges moisture with the product. Fill containers, surface-cover, and avoid tall skinny voids.',
        ],
      },
      {
        heading: 'Holding after partial serve',
        paragraphs: [
          'Softened rim refreezes as a crust ring. Smooth the surface before returning to freezer.',
        ],
      },
    ],
    related: [
      { title: 'Why Ice Cream Gets Icy', path: '/ice-cream-science/why-ice-cream-gets-icy' },
      { title: 'Why Ice Cream Gets Freezer Burn', path: '/ice-cream-science/why-ice-cream-gets-freezer-burn' },
      ...ICE_REL,
    ],
  },
  {
    slug: 'why-ice-cream-base-curdles-before-churning',
    segment: 'ice-cream-science',
    categoryLabel: 'Ice Cream Science',
    title: 'Why Ice Cream Base Curdles Before Churning',
    subtitle: 'Egg yolk + heat + acid without enough buffering crosses the tight curd line.',
    readTime: '7 min read',
    level: 'Cook step',
    emoji: '🥚',
    fixRecipe: { category: 'iceCream', problem: 'general' },
    quickAnswer:
      'Curdled bases come from cooking custard too hot or too fast, or acid added before proteins are protected by enough fat/sugar. Temper, lower heat, strain if needed.',
    intro:
      'French-style bases are thin custards. The same egg chemistry as sauce hollandaise applies: gentle thickening, constant motion, and respecting the narrow band between silky and grainy.',
    sections: [
      {
        heading: 'Temperature ramp for yolk set',
        paragraphs: [
          'Stay in the 170–180°F zone with patience; spikes past 185°F can seize even with cream present.',
        ],
      },
      {
        heading: 'Sequence: acid and chocolate',
        paragraphs: [
          'High-acid fruit bases need staged addition after some fat and sugar are incorporated, or use fruit compote off-heat.',
        ],
      },
      {
        heading: 'Holding hot bases',
        paragraphs: [
          'Residual pan heat continues cooking off burner. Transfer promptly or float bowl on ice at nappe.',
        ],
      },
    ],
    related: [
      { title: 'Why Ice Cream Separates', path: '/ice-cream-science/why-ice-cream-separates' },
      { title: 'Why Ice Cream Is Creamy', path: '/ice-cream-science/why-ice-cream-is-creamy' },
      ...ICE_REL,
    ],
  },
  {
    slug: 'why-sauces-break-when-reheated',
    segment: 'sauce-science',
    categoryLabel: 'Sauce Science',
    title: 'Why Sauces Break When Reheated',
    subtitle: 'Second-pass heat exceeds the emulsion’s stability window; fat coalesces and water weeps.',
    readTime: '8 min read',
    level: 'Service-stage heat',
    emoji: '🔁',
    fixRecipe: { category: 'baking', problem: 'general' },
    quickAnswer:
      'Reheat gently with a splash of water or stock, whisk constantly, and never boil a finished dairy emulsion. Microwave hotspots are a common breaker—use stove or low oven with foil.',
    intro:
      'The first cook built an emulsion under controlled shear and temperature. Reheating is a new experiment: uneven microwaves, higher local heat on pan bottoms, and less available surfactant after storage.',
    sections: [
      {
        heading: 'Temperature ceiling on rethermalization',
        paragraphs: [
          'Treat reheat as finishing heat, not reduction heat. If you need to reduce, do it before emulsifying fat in.',
        ],
      },
      {
        heading: 'Sequence: loosen, then thicken',
        paragraphs: [
          'Add liquid to break the rubbery matrix gently, warm until smooth, then adjust—never the reverse on a seized pan.',
        ],
      },
      {
        heading: 'Holding for service',
        paragraphs: [
          'Bain-marie holds below simmer; direct flame even on “low” can exceed break point at the pan floor.',
        ],
      },
    ],
    related: [
      { title: 'Order of Operations in Sauces', path: '/sauce-science/order-of-operations-sauce-timing' },
      { title: 'Water Content: Hidden Dilution', path: '/sauce-science/water-content-hidden-dilution' },
      ...SAUCE_REL,
    ],
  },
  {
    slug: 'why-sauces-taste-good-hot-but-flat-cold',
    segment: 'sauce-science',
    categoryLabel: 'Sauce Science',
    title: 'Why Sauces Taste Good Hot but Flat Cold',
    subtitle: 'Volatility, fat solidification, and salt perception shift with temperature and time off heat.',
    readTime: '7 min read',
    level: 'Serving temperature',
    emoji: '🧊',
    fixRecipe: { category: 'baking', problem: 'general' },
    quickAnswer:
      'Aromatics evaporate faster when hot; cold fat coats the tongue and hides sharp notes. Adjust acid/salt at service temp, finish volatile herbs at the last hot moment, or re-temper gently.',
    intro:
      'Hot sauce is a cloud of volatiles over a liquid matrix. Cold sauce is a semi-solid fat network with trapped water. They are not the same sensory object.',
    sections: [
      {
        heading: 'Volatility and the first bite',
        paragraphs: [
          'Esters and aldehydes that read “bright” at 150°F are nearly silent at 40°F. Plan cold service with different acid architecture.',
        ],
      },
      {
        heading: 'Fat phase change',
        paragraphs: [
          'Butter and cream firm up, coating receptors and rounding sharpness—sometimes into blandness.',
        ],
      },
      {
        heading: 'Holding window before plating',
        paragraphs: [
          'Long steam-table holds drive off top notes; taste after hold, not only at completion.',
        ],
      },
    ],
    related: [
      { title: 'Reduction Curve: Nonlinear Flavor', path: '/sauce-science/reduction-curve-nonlinear-flavor' },
      { title: 'Salt as Amplifier, Not Only Salty', path: '/sauce-science/salt-as-amplifier-not-only-salty' },
      ...SAUCE_REL,
    ],
  },
  {
    slug: 'why-sauces-separate-on-the-plate',
    segment: 'sauce-science',
    categoryLabel: 'Sauce Science',
    title: 'Why Sauces Separate on the Plate (Holding Failure)',
    subtitle: 'Carry time, plate heat, and oil-water relaxation undo what the pan achieved.',
    readTime: '8 min read',
    level: 'Holding & plating',
    emoji: '🍽️',
    fixRecipe: { category: 'baking', problem: 'general' },
    quickAnswer:
      'Separation on the plate is usually broken emulsion plus low sheer stress: sauce sits, fat rises, water sinks. Thicken slightly, mount with cold butter at pickup, and sauce closer to pass.',
    intro:
      'The pass is a physics lab. Thin emulsions relax under gravity; warm plates accelerate oil mobility; long walks from kitchen to table finish the break your pan fought.',
    sections: [
      {
        heading: 'Time under gravity',
        paragraphs: [
          'Even stable emulsions can bleed if viscosity is too low. A touch of starch or longer reduction buys time.',
        ],
      },
      {
        heading: 'Plate temperature sequence',
        paragraphs: [
          'Scorching plates flash-separate fat; ice-cold plates set fat too fast in clumps. Warm plate, not pizza-stone hot.',
        ],
      },
      {
        heading: 'Pick-up vs expo timing',
        paragraphs: [
          'Sauce last, protein first—or brush with hot butter at the window to revive emulsion sheen.',
        ],
      },
    ],
    related: [
      { title: 'Emulsion vs Non-Emulsion Sauces', path: '/sauce-science/emulsion-vs-non-emulsion-sauces' },
      { title: 'One-Change Rule for Sauce Debugging', path: '/sauce-science/one-change-rule-sauce-debugging' },
      ...SAUCE_REL,
    ],
  },
  {
    slug: 'why-sauces-taste-metallic',
    segment: 'sauce-science',
    categoryLabel: 'Sauce Science',
    title: 'Why Sauces Taste Metallic',
    subtitle: 'Reactive pans, long wine reduction, and certain spices release metal ions or perceptions.',
    readTime: '7 min read',
    level: 'Equipment & reduction',
    emoji: '🔩',
    fixRecipe: { category: 'baking', problem: 'general' },
    quickAnswer:
      'Metallic taste often traces to unlined copper or aluminum contact with acids, long reduced wine, or iron-rich water. Switch to stainless or enamel, shorten aggressive acid cooks, and filter aggressively reduced liquids.',
    intro:
      'Sauces are aggressive solvents. Low pH + heat + bare reactive metal is a recipe for perceptible metal notes, sometimes confused with “blood” or “tin.”',
    sections: [
      {
        heading: 'Time–temperature with acid in reactive pans',
        paragraphs: [
          'Short deglazes are fine; long simmers extract ions. Match pan to task.',
        ],
      },
      {
        heading: 'Sequence: wine reduction depth',
        paragraphs: [
          'Over-reduced wine concentrates trace metals and bitter polyphenolics. Stop earlier, strain, polish with fresh fat.',
        ],
      },
      {
        heading: 'Holding in metal bains',
        paragraphs: [
          'Long holds in aluminum hotel pans can pick up notes—transfer to neutral vessels.',
        ],
      },
    ],
    related: [
      { title: 'Why Coffee Tastes Metallic', path: '/coffee-science/why-coffee-tastes-metallic' },
      { title: 'Water Content: Hidden Dilution', path: '/sauce-science/water-content-hidden-dilution' },
      ...SAUCE_REL,
    ],
  },
  {
    slug: 'why-sauces-clash-with-protein',
    segment: 'sauce-science',
    categoryLabel: 'Sauce Science',
    title: 'Why Sauces Clash With Protein (Pairing Science)',
    subtitle: 'Intensity, fat level, and Maillard spectrum need to align across the bite timeline.',
    readTime: '8 min read',
    level: 'Pairing physics',
    emoji: '🥩',
    fixRecipe: { category: 'baking', problem: 'general' },
    quickAnswer:
      'Clash is often contrast without bridge: seared bitter crust + sharp acid + sweet glaze overloads sequence. Match weight, bridge with shared brown notes, and stagger peaks of salt/acid.',
    intro:
      'Pairing is temporal. The same sauce that loves a poached protein can fight a char-heavy crust because the palate timeline stacks peaks instead of alternating them.',
    sections: [
      {
        heading: 'Maillard load on protein vs acid in sauce',
        paragraphs: [
          'Heavy sear brings bitter melanoidins; sharp sauce adds another peak. Reduce one dimension or add fat/sweet bridge.',
        ],
      },
      {
        heading: 'Temperature at contact',
        paragraphs: [
          'Cold sauce on screaming-hot meat flashes volatile aromatics away while fat reads heavy. Temper sauce closer to protein surface temp.',
        ],
      },
      {
        heading: 'Sequence in composed bites',
        paragraphs: [
          'Thin sauce under slices reads integrated; thick glaze on top reads separate—design for fork behavior.',
        ],
      },
    ],
    related: [
      { title: 'Umami Axis Beyond Salt, Acid, Fat, Sweet', path: '/sauce-science/umami-axis-beyond-salt-acid-fat-sweet' },
      { title: 'Salt as Amplifier, Not Only Salty', path: '/sauce-science/salt-as-amplifier-not-only-salty' },
      ...SAUCE_REL,
    ],
  },
];
