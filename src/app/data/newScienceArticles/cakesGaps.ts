import type { ScienceArticleSpec } from '../scienceArticleTypes';

const C_REL = [
  { title: 'How to Debug Cake Problems', path: '/cake-science/how-to-debug-cake-problems' },
  { title: 'Why Cakes Are Dense', path: '/cake-science/why-cakes-are-dense' },
];

export const cakeGapScienceArticles: ScienceArticleSpec[] = [
  {
    slug: 'why-cakes-stick-to-pans-even-when-greased',
    segment: 'cake-science',
    categoryLabel: 'Cake Science',
    title: 'Why Cakes Stick to Pans Even When Greased',
    subtitle: 'Sugar caramelization, timing, pan material, and cooling bonds beat a thin grease film.',
    readTime: '8 min read',
    emoji: '🍳',
    fixRecipe: { category: 'cake', problem: 'general' },
    quickAnswer:
      'Sticking happens when sugar proteins bond to metal despite grease, or when cakes cool in the pan and steam recondenses into tacky layers. Use parchment, flour-spray combo, correct release time, and proper cool-down.',
    intro:
      'Greasing is not magic; it is friction reduction until structural release occurs. High-sugar batters weld to bare metal through caramelized films that oil cannot erase. This is why commercial kitchens lean on parchment circles and standardized cooling protocols.',
    sections: [
      {
        heading: 'Thermal bonding',
        paragraphs: [
          'Maillard products and caramelized sugars are adhesive. A “well greased” pan with no parchment still exposes batter to hot metal chemistry.',
        ],
      },
      {
        heading: 'Release timing',
        paragraphs: [
          'Too early: cake tears because crumb is fragile. Too late: steam locks the base. Follow style: many sponges invert after a short rest; heavier cakes need edge release while warm then finish cooling.',
        ],
        tip: 'Run a thin offset around edges while still slightly warm; do not stab downward through crumb.',
      },
      {
        heading: 'Pan surface',
        paragraphs: [
          'Nonstick degrades; micro-scratches increase stick. Light-colored pans reduce over-browned bases that glue.',
        ],
      },
      {
        heading: 'Debugger',
        paragraphs: [
          'Cake mode compares sugar and fat levels; sticky bases often pair with high sugar and long pan contact. Fix My Recipe helps you see if your formula sits at that edge.',
        ],
      },
    ],
    related: [
      { title: 'Why Cakes Stick to the Pan', path: '/cake-science/why-cakes-stick-to-pan' },
      ...C_REL,
    ],
  },
  {
    slug: 'why-cakes-bake-unevenly',
    segment: 'cake-science',
    categoryLabel: 'Cake Science',
    title: 'Why Cakes Bake Unevenly',
    subtitle: 'Oven airflow, pan color, rack position, and batter depth create hot and cold zones.',
    readTime: '7 min read',
    emoji: '📶',
    fixRecipe: { category: 'cake', problem: 'general' },
    quickAnswer:
      'Uneven bake is spatial heat variance. Rotate halfway, avoid crowding, use an oven thermometer, match pan size to batter volume, and consider baking strips for edge-to-center timing.',
    intro:
      'A cake is a temperature field evolving in time. If the field is tilted—one side hotter, one taller, one nearer the door—you get domes, dark corners, or wet triangles.',
    sections: [
      {
        heading: 'Oven truth',
        paragraphs: [
          'Calibration errors plus convection patterns dominate. A thermometer on the rack you actually use beats the digital panel.',
        ],
      },
      {
        heading: 'Pan and batter',
        paragraphs: [
          'Too little batter in a wide pan overbakes edges; too much in a small pan underbakes centers.',
        ],
      },
      {
        heading: 'Rotation',
        paragraphs: [
          'Rotate at the oven’s minimum safe window—usually past initial rise—to avoid lopsided collapse.',
        ],
      },
      {
        heading: 'Quantify',
        paragraphs: [
          'Fix My Recipe contextualizes whether your batter is unusually thick or lean for the pan volume you chose—geometry and ratio interact.',
        ],
      },
    ],
    related: [
      { title: 'Why Cakes Rise Unevenly', path: '/cake-science/why-cakes-rise-unevenly' },
      ...C_REL,
    ],
  },
  {
    slug: 'why-cakes-have-a-wet-layer-at-the-bottom',
    segment: 'cake-science',
    categoryLabel: 'Cake Science',
    title: 'Why Cakes Have a Wet Layer at the Bottom',
    subtitle: 'Sinking emulsions, sugar syrup pockets, and under-baked bases leave a gummy band.',
    readTime: '8 min read',
    emoji: '🌊',
    fixRecipe: { category: 'cake', problem: 'general' },
    quickAnswer:
      'A wet bottom layer often means batter split, sugar pooled, or the lowest zone never reached set temperature. Emulsify fully, avoid cold butter clumps, bake longer with correct rack, and check pan conductivity.',
    intro:
      'That slick, dense seam is not “extra moisture” in a good way—it is a zone where structure did not set uniformly. Think in layers: emulsion integrity before baking, heat path during baking, cooling after.',
    sections: [
      {
        heading: 'Broken emulsions',
        paragraphs: [
          'If fat and water separate, dense liquid can settle. Proper creaming temperature and gradual egg addition keep a stable suspension.',
        ],
      },
      {
        heading: 'Sugar and density',
        paragraphs: [
          'Heavy sugar syrups can sink in unstable batters, creating sweet, wet strata.',
        ],
      },
      {
        heading: 'Bake path',
        paragraphs: [
          'Glass and ceramic slow bottom heat; metal speeds it. A wet bottom on dark pans might be under-bake in center while top looks done.',
        ],
        tip: 'Probe temperature 1 inch above pan floor, not only top center.',
      },
      {
        heading: 'Debugger alignment',
        paragraphs: [
          'Cake mode shows fat–liquid–sugar balance. Pair unusual ratios with emulsion checks next bake.',
        ],
      },
    ],
    related: [
      { title: 'Why Cakes Turn Gummy', path: '/cake-science/why-cakes-turn-gummy' },
      ...C_REL,
    ],
  },
  {
    slug: 'why-cakes-turn-out-flat',
    segment: 'cake-science',
    categoryLabel: 'Cake Science',
    title: 'Why Cakes Turn Out Flat',
    subtitle: 'Lost leavening, collapsed foam, or heavy batter limits vertical rise.',
    readTime: '7 min read',
    emoji: '🥞',
    fixRecipe: { category: 'cake', problem: 'too-dense' },
    quickAnswer:
      'Flat cakes usually lack aeration (under-cream, under-beat eggs), dead leavening, or oven too cool so gas escapes before set. Verify creaming time, fresh baking powder, and accurate temperature.',
    intro:
      'Height is trapped gas in a setting matrix. Anything that reduces gas, releases it early, or fails to set in time yields short cakes.',
    sections: [
      {
        heading: 'Mechanical leavening',
        paragraphs: [
          'Creaming and egg aeration are not optional decorative steps; they are volume sources.',
        ],
      },
      {
        heading: 'Chemical leavening',
        paragraphs: [
          'Old baking powder, wrong acidity for soda, or massive batter sitting pre-bake depletes CO₂.',
        ],
      },
      {
        heading: 'Thermal',
        paragraphs: [
          'Low oven temperature extends time to set, allowing bubbles to coalesce and escape.',
        ],
      },
      {
        heading: 'Tooling',
        paragraphs: [
          'Fix My Recipe compares your leavening-friendly ratios to norms and nudges you toward one change per bake.',
        ],
      },
    ],
    related: [
      { title: 'Why Cakes Rise', path: '/cake-science/why-cakes-rise' },
      ...C_REL,
    ],
  },
  {
    slug: 'why-cakes-taste-eggy',
    segment: 'cake-science',
    categoryLabel: 'Cake Science',
    title: 'Why Cakes Taste Eggy',
    subtitle: 'Sulfur notes, imbalance, and under-browning read as “too much egg” even at correct counts.',
    readTime: '7 min read',
    emoji: '🥚',
    fixRecipe: { category: 'cake', problem: 'general' },
    quickAnswer:
      'Eggy flavor often comes from overcooked egg proteins, high egg-to-sugar ratio without balancing flavors, or insufficient Maillard masking. Add salt, vanilla, brown sugar, or avoid over-bake.',
    intro:
      'Eggs are mild but sulfur compounds amplify when proteins over-coagulate. Sometimes the recipe simply lacks contrast ingredients that hide egg’s clean but animal note.',
    sections: [
      {
        heading: 'Heat and sulfur',
        paragraphs: [
          'Long bakes at high heat for thin batters can over-set egg films at edges and tops.',
        ],
      },
      {
        heading: 'Balance',
        paragraphs: [
          'Sugar, salt, vanilla, citrus zest, and brown butter notes counteract plain egg.',
        ],
      },
      {
        heading: 'Yolk-heavy formulas',
        paragraphs: [
          'Extra yolks enrich but increase egg flavor load; compensate with aroma and browning.',
        ],
      },
      {
        heading: 'Ratios',
        paragraphs: [
          'Cake mode highlights egg weight relative to flour and sugar—use it before randomly removing an egg.',
        ],
      },
    ],
    related: [
      { title: 'Why Eggs Matter in Baking', path: '/baking-science/why-eggs-matter-in-baking' },
      ...C_REL,
    ],
  },
  {
    slug: 'why-cakes-are-too-sweet',
    segment: 'cake-science',
    categoryLabel: 'Cake Science',
    title: 'Why Cakes Are Too Sweet',
    subtitle: 'Frosting stacks on sweet crumb; salt and acid shrink perceived sweetness.',
    readTime: '7 min read',
    emoji: '🍯',
    fixRecipe: { category: 'cake', problem: 'general' },
    quickAnswer:
      'Reduce sugar slightly in crumb or frosting—not both at once—add salt, coffee or cocoa bitterness, citrus, or yogurt tang. Ensure adequate browning for complexity.',
    intro:
      'Sweetness sums across layers. A balanced crumb under cloying buttercream still reads “too sweet.” Debug the stack, not only the sponge.',
    sections: [
      {
        heading: 'Layer accounting',
        paragraphs: [
          'Tally sugar from simple syrup brushes, fillings, and frosting before blaming the cake.',
        ],
      },
      {
        heading: 'Contrast',
        paragraphs: [
          'Salt is the cheapest flavor fix. Acid from fruit curd cuts sugar perception.',
        ],
      },
      {
        heading: 'Style goals',
        paragraphs: [
          'American buttercream is sucrose-forward; consider meringue styles if you need less cloying finish.',
        ],
      },
      {
        heading: 'Debugger',
        paragraphs: [
          'Enter components separately if you test half batches; Fix My Recipe helps keep sugar changes structurally safe.',
        ],
      },
    ],
    related: [
      { title: 'Why Cakes Taste Dry', path: '/cake-science/why-cakes-taste-dry' },
      ...C_REL,
    ],
  },
  {
    slug: 'why-cakes-crumble-when-cut',
    segment: 'cake-science',
    categoryLabel: 'Cake Science',
    title: 'Why Cakes Crumble When Cut',
    subtitle: 'Dry crumb, weak structure, or wrong knife technique shreds instead of slicing.',
    readTime: '7 min read',
    emoji: '🧩',
    fixRecipe: { category: 'cake', problem: 'dry' },
    quickAnswer:
      'Crumbling is low cohesion: over-bake dryness, too little fat/egg binder, or cutting cold cake with a dull saw. Use serrated knife, room temp cake, and fix moisture.',
    intro:
      'Cohesion comes from moisture plasticizing starch and proteins holding crumbs together. Without it, the matrix fractures under shear.',
    sections: [
      {
        heading: 'Moisture',
        paragraphs: [
          'Over-baked or low-fat formulas shed free water; crumbs separate.',
        ],
      },
      {
        heading: 'Gluten and structure',
        paragraphs: [
          'Too little structure for height yields fragile cakes; too much can oddly chunk—know your style.',
        ],
      },
      {
        heading: 'Cutting physics',
        paragraphs: [
          'Serrated, gentle sawing with minimal downward crush. Clean blade between slices for neat layers.',
        ],
      },
      {
        heading: 'Systems',
        paragraphs: [
          'Fix My Recipe flags dry-side ratios; pair with internal temperature logs.',
        ],
      },
    ],
    related: [
      { title: 'Why Cakes Dry Out', path: '/cake-science/why-cakes-dry-out' },
      ...C_REL,
    ],
  },
  {
    slug: 'why-cakes-stick-to-knife-when-cutting',
    segment: 'cake-science',
    categoryLabel: 'Cake Science',
    title: 'Why Cakes Stick to Knife When Cutting',
    subtitle: 'Gummy starch, tacky crumb, and frosting suction grab blades.',
    readTime: '6 min read',
    emoji: '🔪',
    fixRecipe: { category: 'cake', problem: 'general' },
    quickAnswer:
      'Knife stickiness means moist crumb or gum-like under-bake, warm cake, or adhesive frosting. Cool completely, clean blade, heat knife slightly for dense layers, finish bake if tacky.',
    intro:
      'A clean slice requires the blade to fracture the crumb cleanly. Anything rubbery or thermally soft smears instead of shearing.',
    sections: [
      {
        heading: 'Thermal state',
        paragraphs: [
          'Warm cake is softer; ganache and buttercream remelt against hot metal.',
        ],
      },
      {
        heading: 'Crumb set',
        paragraphs: [
          'Gummy interiors smear—verify bake, especially in humid batters.',
        ],
      },
      {
        heading: 'Technique',
        paragraphs: [
          'Wipe blade; dip in hot water for fudgy layers; use long strokes.',
        ],
      },
      {
        heading: 'Debug',
        paragraphs: [
          'If tackiness is chronic, cake mode helps compare hydration and sugar levels to successful baselines.',
        ],
      },
    ],
    related: [
      { title: 'Why Cakes Turn Gummy', path: '/cake-science/why-cakes-turn-gummy' },
      ...C_REL,
    ],
  },
  {
    slug: 'why-cakes-dry-out-after-one-day',
    segment: 'cake-science',
    categoryLabel: 'Cake Science',
    title: 'Why Cakes Dry Out After One Day',
    subtitle: 'Starch retrogradation and moisture migration to air or frosting steal tenderness.',
    readTime: '8 min read',
    emoji: '📅',
    fixRecipe: { category: 'cake', problem: 'dry' },
    quickAnswer:
      'Next-day dryness is mostly staling: amylopectin reorganizes and frees water that then evaporates. Simple syrup, fat choice, airtight storage, and freezing slow it.',
    intro:
      'Cakes do not only “lose moisture”; they reorganize how water is bound. Understanding staling separates hopeless recipes from normal physics you can manage.',
    sections: [
      {
        heading: 'Retrogradation',
        paragraphs: [
          'Cooked starch crystals slowly reorder; texture feels firmer even at same total water.',
        ],
      },
      {
        heading: 'Storage',
        paragraphs: [
          'Cut faces expose crumb; refrigerator accelerates perceived staling for many cakes though mold risk drops.',
        ],
        tip: 'Press plastic directly to cut surfaces; room temp for butter cakes when safe.',
      },
      {
        heading: 'Formulation',
        paragraphs: [
          'Sugar and fat retain moisture; oil cakes often stale slower than pure butter cakes.',
        ],
      },
      {
        heading: 'Debugger',
        paragraphs: [
          'Compare sugar–fat–liquid bands; if you are lean, staling wins fast.',
        ],
      },
    ],
    related: [
      { title: 'Why Cakes Dry Out', path: '/cake-science/why-cakes-dry-out' },
      ...C_REL,
    ],
  },
  {
    slug: 'why-cakes-sink-around-the-edges',
    segment: 'cake-science',
    categoryLabel: 'Cake Science',
    title: 'Why Cakes Sink Around the Edges',
    subtitle: 'Edges set fast while centers still move, or structural collapse follows uneven gas coalescence.',
    readTime: '8 min read',
    emoji: '🕳️',
    fixRecipe: { category: 'cake', problem: 'sink' },
    quickAnswer:
      'Edge sinking often couples to oven too hot (outside sets, inside subsides), under-bake in center, or over-leavened batters that collapse asymmetrically. Lower temp, longer bake, verify leavening.',
    intro:
      'Asymmetric collapse means the rim and core experienced different mechanical histories. Heat gradients and timing usually explain the donut-shaped dip.',
    sections: [
      {
        heading: 'Thermal gradients',
        paragraphs: [
          'Metal pans heat edges first. If the center is still liquid-ish, it can pull downward as steam escapes later.',
        ],
      },
      {
        heading: 'Leavening spikes',
        paragraphs: [
          'Too much baking powder yields a rapid rise that cannot be sustained; collapse localizes where structure was weakest.',
        ],
      },
      {
        heading: 'Opening the oven',
        paragraphs: [
          'Early door openings slam cool air onto rising edges and cause uneven set.',
        ],
      },
      {
        heading: 'Next bake',
        paragraphs: [
          'Log temps and times; run Fix My Recipe to check leavening-heavy formulas.',
        ],
      },
    ],
    related: [
      { title: 'Why Cakes Sink in the Middle', path: '/cake-science/why-cakes-sink' },
      ...C_REL,
    ],
  },
];
