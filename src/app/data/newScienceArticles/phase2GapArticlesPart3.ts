import type { ScienceArticleSpec } from '../scienceArticleTypes';

const BREAD_REL = [
  { title: 'Why Bread Rises', path: '/bread-science/why-bread-rises' },
  { title: 'How Yeast Works', path: '/bread-science/how-yeast-works' },
];

const COOKIE_REL = [
  { title: 'Why Cookies Spread', path: '/cookie-science/why-cookies-spread' },
  { title: 'How to Debug Cookie Batch Issues', path: '/cookie-science/how-to-debug-cookie-batch-issues' },
];

export const phase2GapArticlesPart3: ScienceArticleSpec[] = [
  {
    slug: 'why-bread-smells-yeasty',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Bread Smells Yeasty (Fermentation Imbalance)',
    subtitle: 'Fast ferment, warm bulk, and high yeast fraction spike esters before flavor matures.',
    readTime: '8 min read',
    level: 'Fermentation time',
    emoji: '🫧',
    fixRecipe: { category: 'bread', problem: 'general' },
    quickAnswer:
      'Yeasty aroma usually means fermentation ran hot or short—esters dominate before organic acids and alcohols mellow. Slow cold proof, less yeast, and full bake color fix the profile.',
    intro:
      'Yeast smell is not “too much yeast” alone; it is timing. Given enough time at cool temperatures, yeast character integrates into complex notes. Rushed dough smells like the lab.',
    sections: [
      {
        heading: 'Temperature control in bulk and proof',
        paragraphs: [
          'Every 10°F roughly doubles activity until stress. Warm kitchens produce fast CO₂ and strong ester top notes.',
        ],
      },
      {
        heading: 'Sequence: preferment vs straight dough',
        paragraphs: [
          'Preferments shift flavor development earlier in the timeline so final proof can be shorter without raw yeast smell.',
        ],
      },
      {
        heading: 'Holding shaped dough',
        paragraphs: [
          'Over-proofed dough still smells yeasty after collapse because alcohols remain while structure failed.',
        ],
      },
      {
        heading: 'Bake color as flavor finish',
        paragraphs: [
          'Pale crust correlates with green, yeasty crumb aroma persisting. Adequate crust Maillard masks aldehydes.',
        ],
      },
    ],
    related: [
      { title: 'Why Dough Rises Too Fast', path: '/bread-science/why-dough-rises-too-fast' },
      { title: 'Why Bread Is Pale', path: '/bread-science/why-bread-is-pale' },
      ...BREAD_REL,
    ],
  },
  {
    slug: 'why-bread-has-no-flavor',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Bread Has No Flavor (Underdeveloped Fermentation)',
    subtitle: 'Short autolyse, no preferment, and rush to oven starve complexity.',
    readTime: '8 min read',
    level: 'Flavor development',
    emoji: '🍞',
    fixRecipe: { category: 'bread', problem: 'general' },
    quickAnswer:
      'Flat bread flavor is usually too little time for enzymes and yeast to generate acids and alcohols, or flour that never hydrated. Extend bulk, add preferment, and salt on schedule—not dead last in a dry corner.',
    intro:
      'Flavor in lean bread is mostly fermentation products plus crust chemistry. If your timeline is “mix → shape → bake” in two hours, you chose speed over depth.',
    sections: [
      {
        heading: 'Time is an ingredient',
        paragraphs: [
          'Cold retard 12–24h transforms flavor more than any single spice.',
        ],
      },
      {
        heading: 'Temperature and enzyme activity',
        paragraphs: [
          'Autolyse at cool temps improves protease action without runaway yeast; warm autolyse can over-soften before salt locks structure.',
        ],
      },
      {
        heading: 'Salt timing',
        paragraphs: [
          'Salt late can slow fermentation unpredictably; uniform distribution matters for even flavor maturation.',
        ],
      },
    ],
    related: [
      { title: 'Why Dough Rises Too Slow', path: '/bread-science/why-dough-rises-too-slow' },
      { title: 'Why Hydration Matters in Bread', path: '/bread-science/why-hydration-matters-in-bread' },
      ...BREAD_REL,
    ],
  },
  {
    slug: 'why-bread-crumb-is-too-tight',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Bread Crumb Is Too Tight (Cell Structure Failure)',
    subtitle: 'Under-proofing, heavy degassing, or weak oven spring limit cell expansion.',
    readTime: '8 min read',
    level: 'Structure mechanics',
    emoji: '🧽',
    fixRecipe: { category: 'bread', problem: 'wont-rise' },
    quickAnswer:
      'Tight crumb means cells never expanded enough before set—often under-proof, aggressive shaping, too much flour on bench, or early crust lock from low steam.',
    intro:
      'Open crumb is controlled failure of cell walls at the right moment: gas stretches gluten films until heat sets starch. If you degas the matrix or set the crust too early, expansion stops.',
    sections: [
      {
        heading: 'Proofing time vs dough temperature',
        paragraphs: [
          'Finger poke test is a timeline check, not a superstition. Under-proofed dough springs back instantly = cells not inflated.',
        ],
      },
      {
        heading: 'Shaping sequence and surface tension',
        paragraphs: [
          'Tight skin helps oven spring, but crushing the interior erases alveoli. Fold, don’t compress.',
        ],
      },
      {
        heading: 'Oven temperature and steam phase',
        paragraphs: [
          'Steam delays crust set; without it, the lid forms while interior pressure is still low.',
        ],
      },
    ],
    related: [
      { title: 'Why Oven Spring Happens', path: '/bread-science/why-oven-spring-happens' },
      { title: 'Why Bread Needs Steam', path: '/bread-science/why-bread-needs-steam' },
      ...BREAD_REL,
    ],
  },
  {
    slug: 'why-bread-has-large-holes',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Bread Has Large Holes (Gas Coalescence)',
    subtitle: 'Uneven bubble distribution merges into chambers when gluten films are uneven.',
    readTime: '7 min read',
    level: 'Gas dynamics',
    emoji: '🕳️',
    fixRecipe: { category: 'bread', problem: 'general' },
    quickAnswer:
      'Random caverns often come from uneven hydration, late uneven yeast pockets, or shaping that trapped mega-bubbles. Pre-shape, bench rest, and gentle tension even the field.',
    intro:
      'Small even holes are many stable cells. One giant hole is coalescence: two bubbles became one because the wall between them failed locally.',
    sections: [
      {
        heading: 'Mixing uniformity',
        paragraphs: [
          'Dry flour clumps hide yeast sanctuaries that blow out later. Fully hydrate before bulk.',
        ],
      },
      {
        heading: 'Degassing and lamination choices',
        paragraphs: [
          'Ciabatta wants coalescence; sandwich loaf does not. Match technique to target cell count.',
        ],
      },
      {
        heading: 'Proof temperature gradients',
        paragraphs: [
          'Dough near a radiator proofs faster on one side, creating uneven gas field.',
        ],
      },
    ],
    related: [
      { title: 'Why Bread Is Dense', path: '/bread-science/why-bread-is-dense' },
      { title: 'Why Dough Wont Hold Shape', path: '/bread-science/why-dough-wont-hold-shape' },
      ...BREAD_REL,
    ],
  },
  {
    slug: 'why-bread-dough-tears-instead-of-stretching',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Bread Dough Tears Instead of Stretching',
    subtitle: 'Under-hydrated gluten, cold fat, or insufficient rest limits extensibility.',
    readTime: '7 min read',
    level: 'Gluten rheology',
    emoji: '✂️',
    fixRecipe: { category: 'bread', problem: 'general' },
    quickAnswer:
      'Tearing means the gluten network is too tight or too dry for the stretch you demand. Autolyse, warmer rest, or small water additions improve extensibility; do not fight tears with more aggressive pulls.',
    intro:
      'Stretching is viscoelastic flow. Tearing is brittle fracture. The crossover happens when relaxation time is longer than your shaping motion.',
    sections: [
      {
        heading: 'Rest time as the hidden variable',
        paragraphs: [
          'Bench relax allows glutenins to rearrange. Immediate shaping after cold retard often tears.',
        ],
      },
      {
        heading: 'Temperature of dough and butter chunks',
        paragraphs: [
          'Cold solid fat creates discontinuities that tear under sheet stress.',
        ],
      },
      {
        heading: 'Sequence in high-hydration doughs',
        paragraphs: [
          'Stretch-and-fold in the bowl builds extensibility before free shaping on the bench.',
        ],
      },
    ],
    related: [
      { title: 'Why Dough Springs Back When Shaping', path: '/bread-science/why-dough-springs-back-when-shaping' },
      { title: 'Why Dough Is Too Sticky', path: '/bread-science/why-dough-is-too-sticky' },
      ...BREAD_REL,
    ],
  },
  {
    slug: 'why-cookies-taste-floury',
    segment: 'cookie-science',
    categoryLabel: 'Cookie Science',
    title: 'Why Cookies Taste Floury',
    subtitle: 'Raw starch perception when hydration, bake time, or mixing order leaves flour ungelatinized.',
    readTime: '7 min read',
    level: 'Hydration & bake',
    emoji: '🌾',
    fixRecipe: { category: 'cookie', problem: 'general' },
    quickAnswer:
      'Floury taste means starch granules never fully hydrated or gelatinized—under-mixed dry pockets, very thick dough baked too pale, or flour not coated by fat/sugar before liquids.',
    intro:
      'Palate detects raw wheat notes when amylose/amylopectin is not cooked enough in the micro-regions you bite. Time, temperature, and fat coating are the fixers.',
    sections: [
      {
        heading: 'Mixing sequence and fat coating',
        paragraphs: [
          'Creaming fat with sugar before flour limits free water racing to clump starch.',
        ],
      },
      {
        heading: 'Bake temperature and spread',
        paragraphs: [
          'Pale thick cookies center can stay floury while edges look done. Lower temp slightly longer or flatten dough.',
        ],
      },
      {
        heading: 'Holding dough',
        paragraphs: [
          'Long cold rest evens hydration; baking straight from incomplete rest leaves dry floury cores.',
        ],
      },
    ],
    related: [
      { title: 'Why Cookies Turn Cakey', path: '/cookie-science/why-cookies-turn-cakey' },
      { title: 'Why Cookies Stay Thick', path: '/cookie-science/why-cookies-stay-thick' },
      ...COOKIE_REL,
    ],
  },
  {
    slug: 'why-cookies-have-no-depth-of-flavor',
    segment: 'cookie-science',
    categoryLabel: 'Cookie Science',
    title: 'Why Cookies Have No Depth of Flavor',
    subtitle: 'Single-note sugar without Maillard contrast, salt, brown butter, or aged dough.',
    readTime: '8 min read',
    level: 'Flavor chemistry',
    emoji: '🎵',
    fixRecipe: { category: 'cookie', problem: 'general' },
    quickAnswer:
      'Depth needs contrast: browned butter or longer bake edges, salt, acid (molasses, brown sugar), and time for flavor precursor reactions. Resting dough redistributes aromatics.',
    intro:
      'Depth is stacked peaks across time as you chew: caramel, salt, roast, vanilla. A fast pale bake of white sugar dough is one peak—sweet.',
    sections: [
      {
        heading: 'Maillard timing vs thickness',
        paragraphs: [
          'Thicker dough needs a thermal path that still browns edges without drying centers—use temperature steps.',
        ],
      },
      {
        heading: 'Chill sequence',
        paragraphs: [
          'Rest hydrates flour, mellows leavening harshness, and allows lipid oxidation notes to develop subtly.',
        ],
      },
      {
        heading: 'Salt and acid micro-adjustments',
        paragraphs: [
          'A few extra tenths percent salt and a trace of acid lift caramel perception.',
        ],
      },
    ],
    related: [
      { title: 'Why Chilling Cookie Dough Matters', path: '/cookie-science/why-chilling-cookie-dough-matters' },
      { title: 'Why Cookies Brown', path: '/cookie-science/why-cookies-brown' },
      ...COOKIE_REL,
    ],
  },
  {
    slug: 'why-cookies-stick-to-each-other-after-baking',
    segment: 'cookie-science',
    categoryLabel: 'Cookie Science',
    title: 'Why Cookies Stick to Each Other After Baking',
    subtitle: 'Edges stay thermoplastic until cooled; steam and sugar bridges fuse contact patches.',
    readTime: '6 min read',
    level: 'Cooling phase',
    emoji: '🤝',
    fixRecipe: { category: 'cookie', problem: 'general' },
    quickAnswer:
      'Cookies fuse when placed touching while edges are still soft and releasing steam. Space on the sheet, cool on rack with airflow, and don’t stack until room temperature.',
    intro:
      'Post-bake is part of the recipe. Sugar–fat films on hot edges are adhesive. Contact area × time × temperature predicts whether you get one mega-cookie.',
    sections: [
      {
        heading: 'Cooling curve on the pan vs rack',
        paragraphs: [
          'Pan holds heat and steam longer than a rack. Move sooner for thin cookies.',
        ],
      },
      {
        heading: 'Stacking sequence for storage',
        paragraphs: [
          'Even “cool” cookies can cold-flow under weight in a tin. Parchment between layers.',
        ],
      },
      {
        heading: 'Humidity holding',
        paragraphs: [
          'Airtight while still warm traps moisture on surfaces—sticky interfaces.',
        ],
      },
    ],
    related: [
      { title: 'Why Cookies Stick Together', path: '/cookie-science/why-cookies-stick-together' },
      { title: 'Why Cookies Spread Too Much', path: '/cookie-science/why-cookies-spread-too-much' },
      ...COOKIE_REL,
    ],
  },
  {
    slug: 'why-cookies-puff-instead-of-spread',
    segment: 'cookie-science',
    categoryLabel: 'Cookie Science',
    title: 'Why Cookies Puff Instead of Spread',
    subtitle: 'Cold fat, high flour, strong leavening, and short bake set a dome before flow.',
    readTime: '7 min read',
    level: 'Spread mechanics',
    emoji: '☁️',
    fixRecipe: { category: 'cookie', problem: 'wont-spread' },
    quickAnswer:
      'Puff without spread means structure set before viscous flow—cold butter, strong flour, too much BP/BS, or oven too hot on top. Warm dough slightly, reduce leavening, or knock air before bake.',
    intro:
      'Spread is a race between fat melting, dough softening, and proteins setting. Puff wins when leavening gas expands in a matrix that stiffens before flow starts.',
    sections: [
      {
        heading: 'Starting dough temperature',
        paragraphs: [
          'Chilled is good for flavor; excessively cold prevents early spread phase.',
        ],
      },
      {
        heading: 'Leavening sequence',
        paragraphs: [
          'Double-action powder can create mid-bake bubbles that set as domes if fat has not lubricated flow paths.',
        ],
      },
      {
        heading: 'Pan temperature and top heat',
        paragraphs: [
          'Dark sheets and broiler-adjacent racks set tops fast—skin locks shape.',
        ],
      },
    ],
    related: [
      { title: "Why Cookies Don't Spread", path: '/cookie-science/why-cookies-dont-spread' },
      { title: 'Why Cookies Spread in the Oven But Not Before', path: '/cookie-science/why-cookies-spread-in-oven-but-not-before' },
      ...COOKIE_REL,
    ],
  },
  {
    slug: 'why-cookies-taste-better-the-next-day',
    segment: 'cookie-science',
    categoryLabel: 'Cookie Science',
    title: 'Why Cookies Taste Better the Next Day',
    subtitle: 'Moisture equilibrates, volatiles mellow, and crystalline sugar textures shift.',
    readTime: '7 min read',
    level: 'Time-based changes',
    emoji: '📅',
    fixRecipe: { category: 'cookie', problem: 'general' },
    quickAnswer:
      'Overnight rest equalizes water from center to edge, rounds harsh volatiles, and changes sugar crystal size for softer chew perception—even without formal “aging” dough.',
    intro:
      'A warm cookie is a dynamic system: steam redistributes, amorphous sugar regions crystallize slowly, and lipid oxidation adds background notes. Day two is a different product—in a good way.',
    sections: [
      {
        heading: 'Moisture migration timeline',
        paragraphs: [
          'Edges dry first out of the oven; center moisture migrates outward over hours, softening tooth-shatter edges.',
        ],
      },
      {
        heading: 'Temperature of storage',
        paragraphs: [
          'Room temp allows modest staling reactions; fridge speeds crystallization differently.',
        ],
      },
      {
        heading: 'Aroma mellowing',
        paragraphs: [
          'Very hot-off-sheet volatiles (vanillin, aldehydes) are intense; equilibrium overnight reads “rounder.”',
        ],
      },
    ],
    related: [
      { title: 'Why Cookies Get Hard After Baking', path: '/cookie-science/why-cookies-get-hard-after-baking' },
      { title: 'Why Cookies Are Chewy', path: '/cookie-science/why-cookies-are-chewy' },
      ...COOKIE_REL,
    ],
  },
];
