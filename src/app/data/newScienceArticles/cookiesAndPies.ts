import type { ScienceArticleSpec } from '../scienceArticleTypes';

export const cookieGapScienceArticles: ScienceArticleSpec[] = [
  {
    slug: 'why-cookies-taste-too-sweet',
    segment: 'cookie-science',
    categoryLabel: 'Cookie Science',
    title: 'Why Cookies Taste Too Sweet',
    subtitle: 'Sugar load, salt balance, browning, and acid all set perceived sweetness—not just cup measurements.',
    readTime: '7 min read',
    emoji: '🍬',
    fixRecipe: { category: 'cookie', problem: 'general' },
    quickAnswer:
      'Cookies taste cloying when sucrose dominates without salt, acid, or bitter notes from browning to frame it. Reduce sugar slightly, add salt, brown butter, or a trace of acid; verify bake for real Maillard, not pale sugar.',
    intro:
      'Sweetness is contrast. A cookie that reads “too sweet” on paper may actually be under-salted, under-baked for browning, or missing the tiny bitter and caramel compounds that make sugar taste like dessert instead of syrup. This guide walks the sensory stack so you adjust the right lever.',
    sections: [
      {
        heading: 'Salt as a frame',
        paragraphs: [
          'Salt suppresses perceived sweetness slightly while increasing overall flavor intensity. Many home recipes under-salt; a small bump (especially fine salt distributed evenly) can make the same sugar feel less aggressive.',
          'Weigh salt. Volume measures of coarse vs fine salt scatter wildly.',
        ],
      },
      {
        heading: 'Browning and bitterness (the good kind)',
        paragraphs: [
          'Maillard products add complexity that balances sucrose. Pale, thick cookies with white sugar can taste one-note. A longer bake at moderate heat, brown sugar, or milk powder can deepen flavor without adding sucrose.',
        ],
        tip: 'Try 5–10% sugar reduction paired with one extra minute of bake for color—often sweeter on paper, less cloying in the mouth.',
      },
      {
        heading: 'Acid and dairy',
        paragraphs: [
          'A touch of cream of tartar, a little yogurt, or cultured butter can brighten perception. Fat coats the tongue and rounds harsh edges.',
        ],
      },
      {
        heading: 'Use Fix My Recipe on the ratio',
        paragraphs: [
          'Cookie mode compares sugar, flour, fat, and salt bands. If you are above typical sugar for your target texture, the debugger suggests where to trade sugar for brown sugar, or how salt sits relative to sugar.',
        ],
      },
    ],
    faqs: [
      { q: 'Will cutting sugar ruin spread?', a: 'Often slightly; compensate with a bit more brown sugar or tweak butter temp and chill, testing one variable at a time.' },
    ],
    related: [
      { title: 'Brown Sugar vs White Sugar', path: '/cookie-science/brown-sugar-vs-white-sugar' },
      { title: 'Why Cookies Taste Bland', path: '/cookie-science/why-cookies-taste-bland' },
    ],
  },
  {
    slug: 'why-cookies-spread-in-oven-but-not-before',
    segment: 'cookie-science',
    categoryLabel: 'Cookie Science',
    title: 'Why Cookies Spread in the Oven But Not Before',
    subtitle: 'Cold fat, flour hydration, and delayed structure set explain the oven-only spread phase.',
    readTime: '7 min read',
    emoji: '🧊➡️🔥',
    fixRecipe: { category: 'cookie', problem: 'spreads-too-much' },
    quickAnswer:
      'Chilled dough holds solid fat crystals so room-temperature balls look tall; oven heat melts fat and releases free water, slackening dough and letting spread happen late. Flour also hydrates over time, changing viscosity.',
    intro:
      'This pattern confuses people who expect dough to “look ready” on the sheet. Cookies are time-release systems: temperature, fat crystal state, and hydrated starch networks control when flow starts. Seeing no spread cold does not predict no spread hot.',
    sections: [
      {
        heading: 'Fat phase change',
        paragraphs: [
          'Butter is a mix of fat crystals and water-in-fat emulsion. Cold keeps crystals solid; heat melts them, lowering viscosity so dough flows.',
        ],
      },
      {
        heading: 'Hydration kinetics',
        paragraphs: [
          'During chill, flour continues absorbing water. That changes how quickly the dough sets in the oven versus how much it flows early.',
        ],
      },
      {
        heading: 'Leavening timing',
        paragraphs: [
          'CO₂ from baking soda/powder expands when batter softens; if acid-base reactions start late, lift and spread coincide visually.',
        ],
      },
      {
        heading: 'Debug spread deliberately',
        paragraphs: [
          'If oven spread overshoots, cookie mode in Fix My Recipe checks sugar and butter-heavy ratios, and you pair that with one change: slightly more flour, shorter chill, or lower oven for slower set.',
        ],
      },
    ],
    related: [
      { title: 'Why Cookies Spread', path: '/cookie-science/why-cookies-spread' },
      { title: 'Why Chilling Cookie Dough Matters', path: '/cookie-science/why-chilling-cookie-dough-matters' },
    ],
  },
  {
    slug: 'why-cookies-turn-out-different-each-batch',
    segment: 'cookie-science',
    categoryLabel: 'Cookie Science',
    title: 'Why Cookies Turn Out Different Each Batch',
    subtitle: 'Temperature paths, measurement error, and mixer variance swamp tiny “feel” differences.',
    readTime: '8 min read',
    emoji: '🎲',
    fixRecipe: { category: 'cookie', problem: 'general' },
    quickAnswer:
      'Batch variance is usually butter temperature, flour measurement, oven preheat quality, and pan temperature—not fate. Weigh everything, sheet pan temperature, and log oven thermometer + time-to-set.',
    intro:
      'Humans underestimate noise in home baking. Two batches that “felt the same” can diverge because butter was 58°F once and 68°F another time, or because the second sheet went onto a hot pan. Reliability is a systems problem: grams, thermometers, and written notes.',
    sections: [
      {
        heading: 'Ingredient state',
        paragraphs: [
          'Butter and egg temperature change emulsion behavior and spread. Flour packs in cups. Even “the same” brand can vary seasonally.',
        ],
      },
      {
        heading: 'Equipment state',
        paragraphs: [
          'Dark pans vs light pans, convection on/off, rack height, and whether the oven fully recovered between sheets all move outcomes.',
        ],
        tip: 'Cool pans between batches with a cold-water rinse and towel dry for consistent starting temperature.',
      },
      {
        heading: 'Mixing variance',
        paragraphs: [
          'Creaming for three vs six minutes changes aeration. Use timer and visual cues (pale, fluffy) every time.',
        ],
      },
      {
        heading: 'Fix My Recipe as a batch log',
        paragraphs: [
          'Enter grams each bake. When something drifts, you have a frozen record instead of memory. Pair with photos of dough balls pre-bake.',
        ],
      },
    ],
    related: [
      { title: 'How to Debug Cookie Batch Issues', path: '/cookie-science/how-to-debug-cookie-batch-issues' },
      { title: 'Fix Recipes One Variable at a Time', path: '/baking-science/fix-recipes-one-variable-at-a-time' },
    ],
  },
  {
    slug: 'why-chilling-cookie-dough-matters',
    segment: 'cookie-science',
    categoryLabel: 'Cookie Science',
    title: 'Why Chilling Cookie Dough Matters',
    subtitle: 'Solid fat, hydrated flour, and relaxed gluten change spread, thickness, and flavor.',
    readTime: '8 min read',
    emoji: '❄️',
    fixRecipe: { category: 'cookie', problem: 'spreads-too-much' },
    quickAnswer:
      'Chilling firms butter, lets flour hydrate, and can reduce spread while concentrating flavor as dough dries slightly at the surface. It is not mandatory for all recipes but is a powerful knob for high-butter formulas.',
    intro:
      'Chill is mislabeled as a “trick.” It is slow chemistry and physics. The dough you scoop immediately is not the same material after resting cold—even if ingredients on paper never changed.',
    sections: [
      {
        heading: 'Fat rheology',
        paragraphs: [
          'Cold butter crystals limit flow until the oven provides melt energy. That delays spread so edges set before the center fully flattens, yielding thicker cookies.',
        ],
      },
      {
        heading: 'Hydration and gluten',
        paragraphs: [
          'Rest allows even water distribution and some gluten relaxation, changing chew and surface cracking patterns.',
        ],
      },
      {
        heading: 'Flavor',
        paragraphs: [
          'Longer rests can increase perceived complexity as flour enzymes snip starches and proteins, freeing sugars for browning.',
        ],
      },
      {
        heading: 'Pair with the debugger',
        paragraphs: [
          'If chilling fixes spread but creates dryness, your sugar–flour balance may be aggressive. Cookie mode helps you see the trade space.',
        ],
      },
    ],
    related: [
      { title: 'Why Cookies Spread Too Much', path: '/cookie-science/why-cookies-spread-too-much' },
      { title: 'Why Cookies Flatten', path: '/cookie-science/why-cookies-flatten' },
    ],
  },
  {
    slug: 'why-cookies-stick-together',
    segment: 'cookie-science',
    categoryLabel: 'Cookie Science',
    title: 'Why Cookies Stick Together',
    subtitle: 'Thermal mass, steam, and cooling phase fuse edges when spacing or timing fails.',
    readTime: '6 min read',
    emoji: '🫂',
    fixRecipe: { category: 'cookie', problem: 'spreads-too-much' },
    quickAnswer:
      'Cookies weld when spread places edges in contact while still soft and steam-hot. Increase spacing, use cooler dough, smaller scoop, or lower temp for slower spread; cool fully before stacking.',
    intro:
      'Kiss cookies can be intentional; fused mega-cookies usually are not. The fix is geometry and heat transfer, not a mystery “nonstick” spray alone.',
    sections: [
      {
        heading: 'Contact while plastic',
        paragraphs: [
          'Sugar–fat matrices stay viscous until cooled. Touching edges fuse like hot caramel.',
        ],
      },
      {
        heading: 'Pan loading',
        paragraphs: [
          'Crowded pans trap steam, slowing crust set and encouraging lateral flow.',
        ],
        tip: 'One sheet per rack position for airflow unless your recipe specifies otherwise.',
      },
      {
        heading: 'Spread prediction',
        paragraphs: [
          'If dough always reaches neighbors, reduce scoop size or increase spacing rather than fighting geometry each bake.',
        ],
      },
      {
        heading: 'Ratios',
        paragraphs: [
          'Fix My Recipe flags high sugar and butter relative to flour—classic spread drivers. Fix ratios before buying a larger pan.',
        ],
      },
    ],
    related: [
      { title: 'Why Cookies Spread', path: '/cookie-science/why-cookies-spread' },
      { title: 'Why Cookies Spread Unevenly', path: '/cookie-science/why-cookies-spread-unevenly' },
    ],
  },
];

export const pieGapScienceArticles: ScienceArticleSpec[] = [
  {
    slug: 'why-pie-crust-cracks-when-rolling',
    segment: 'pie-science',
    categoryLabel: 'Pie Science',
    title: 'Why Pie Crust Cracks When Rolling',
    subtitle: 'Temperature, hydration, and gluten brittleness make dough chip instead of stretch.',
    readTime: '7 min read',
    emoji: '💔',
    fixRecipe: { category: 'pie', problem: 'tough-crust' },
    quickAnswer:
      'Cracking while rolling usually means dough is too cold and brittle, too dry, or over-worked. Let it temper slightly, patch with wet finger, or rehydrate with a few drops of water worked in gently.',
    intro:
      'Pie dough is a fat-laminated paste pretending to be a solid. Too cold, it shatters like chocolate; too dry, it lacks cohesion; too warm, it sticks. Cracks during rolling sit in the brittle zone.',
    sections: [
      {
        heading: 'Thermal window',
        paragraphs: [
          'Fridge-cold dough needs a few minutes at room temperature to become pliable without turning greasy.',
        ],
      },
      {
        heading: 'Hydration balance',
        paragraphs: [
          'Dry edges crack first. Even absorption varies by flour; a teaspoon of water can change roll behavior.',
        ],
      },
      {
        heading: 'Gluten and toughness',
        paragraphs: [
          'Over-mixed dough is elastic and also prone to tearing. Rests relax gluten; do not skip them.',
        ],
      },
      {
        heading: 'Pie mode debugging',
        paragraphs: [
          'Fix My Recipe pie category highlights fat–flour balance extremes. If dough always feels dry, ratios may sit low on water for your flour.',
        ],
      },
    ],
    related: [
      { title: 'Why Pie Crust Gets Tough', path: '/pie-science/why-pie-crust-gets-tough' },
      { title: 'Butter vs Shortening in Pie Crust', path: '/pie-science/butter-vs-shortening-in-crust' },
    ],
  },
  {
    slug: 'why-pie-crust-falls-apart',
    segment: 'pie-science',
    categoryLabel: 'Pie Science',
    title: 'Why Pie Crust Falls Apart',
    subtitle: 'Not enough water, not enough cohesion, or too much fat weakens the matrix.',
    readTime: '7 min read',
    emoji: '🍂',
    fixRecipe: { category: 'pie', problem: 'general' },
    quickAnswer:
      'Short, crumbly dough that will not transfer to the pan needs slightly more water, gentler mixing, or a rest so moisture distributes. Extreme fat ratios can prevent any gluten continuity.',
    intro:
      'Tender and fragile share a border. You want tender flakes, not sand. Falling apart signals insufficient continuous gluten network for handling—even if baked texture would have been fine.',
    sections: [
      {
        heading: 'Hydration for cohesion',
        paragraphs: [
          'Pie dough should come together with a squeeze but still look marbled. Totally dry crumb cannot sheet.',
        ],
      },
      {
        heading: 'Fat pieces too small',
        paragraphs: [
          'Over-processing butter removes discrete fat pockets needed for flakes and can yield mealy dough that fractures.',
        ],
      },
      {
        heading: 'Handling',
        paragraphs: [
          'Fold dough, do not knead like bread. Use bench scraper to fraisage if needed.',
        ],
        tip: 'Roll between parchment for transfer instead of forcing a fragile round.',
      },
      {
        heading: 'Tool support',
        paragraphs: [
          'Pie problems in Fix My Recipe map to crust texture categories; compare your fat–flour ratio to norms while you adjust water by teaspoons.',
        ],
      },
    ],
    related: [
      { title: 'Why Pie Crust Is Flaky', path: '/pie-science/why-pie-crust-is-flaky' },
      { title: 'Why Pie Crust Shrinks', path: '/pie-science/why-pie-crust-shrinks' },
    ],
  },
  {
    slug: 'why-pie-filling-bubbles-over',
    segment: 'pie-science',
    categoryLabel: 'Pie Science',
    title: 'Why Pie Filling Bubbles Over',
    subtitle: 'Steam, expansion, and under-set starch send filling over the rim during bake.',
    readTime: '7 min read',
    emoji: '🌋',
    fixRecipe: { category: 'pie', problem: 'general' },
    quickAnswer:
      'Bubbling over is boil-over: filling heats, expands, and boils before the crust edge contains it. Deep dish, foil ring, venting, and correct starch/thickener prevent mess and soggy rims.',
    intro:
      'Pie filling is a viscous fluid becoming a gel. While still fluid, it pumps steam and swells. If volume exceeds containment, it exits—usually over the prettiest crimp you made.',
    sections: [
      {
        heading: 'Volume and depth',
        paragraphs: [
          'Overfilled shells lack headspace. Fruit releases juice; cream fillings foam.',
        ],
      },
      {
        heading: 'Thickener timing',
        paragraphs: [
          'Too little starch yields runny, energetic boiling. Precook fruit fillings when recipes call for it.',
        ],
      },
      {
        heading: 'Heat shielding',
        paragraphs: [
          'Foil on the rim slows crust darkening so you can bake long enough to set filling without burning.',
        ],
      },
      {
        heading: 'Systems',
        paragraphs: [
          'Fix My Recipe helps you think about sugar and liquid relative to solids for fruit fillings—runny filling and boil-over often correlate.',
        ],
      },
    ],
    related: [
      { title: 'Why Pie Filling Is Runny', path: '/pie-science/why-pie-filling-is-runny' },
      { title: 'Why Pie Crust Gets Soggy', path: '/pie-science/why-pie-crust-gets-soggy' },
    ],
  },
  {
    slug: 'why-pie-crust-is-too-pale',
    segment: 'pie-science',
    categoryLabel: 'Pie Science',
    title: 'Why Pie Crust Is Too Pale',
    subtitle: 'Egg wash, sugar, time, and temperature finish color; pale means one of them is missing.',
    readTime: '7 min read',
    emoji: '🤍',
    fixRecipe: { category: 'pie', problem: 'general' },
    quickAnswer:
      'Pale pie crusts often bake at too low a temperature, are shielded too long, or lack wash/sugar for Maillard. Move to a hotter finish, uncover, or brush with egg or milk.',
    intro:
      'Double-crust pies especially hide the edge from direct heat. Color is not vanity; it is flavor and textural set.',
    sections: [
      {
        heading: 'Heat and time',
        paragraphs: [
          'Bottom crust needs conductive heat from a metal pan or stone; tops need radiant heat.',
        ],
      },
      {
        heading: 'Washes',
        paragraphs: [
          'Egg yolk browns deeply; milk soft-browns; cream sits between. Sugar on the lid increases caramelization.',
        ],
      },
      {
        heading: 'Blind bake carryover',
        paragraphs: [
          'Parbaked shells can finish pale if final bake is short. Plan combined thermal budget.',
        ],
      },
      {
        heading: 'Debugger',
        paragraphs: [
          'If dough enriches with sugar and still stays blond, oven story dominates. Ratios still help compare butter-heavy vs lean crusts.',
        ],
      },
    ],
    related: [
      { title: 'Why Pie Crust Is Flaky', path: '/pie-science/why-pie-crust-is-flaky' },
      { title: 'Why Pie Crust Burns Before Filling Cooks', path: '/pie-science/why-pie-crust-burns-before-filling-cooks' },
    ],
  },
  {
    slug: 'why-pie-crust-burns-before-filling-cooks',
    segment: 'pie-science',
    categoryLabel: 'Pie Science',
    title: 'Why Pie Crust Burns Before Filling Cooks',
    subtitle: 'Edges see more heat than centers; shield, lower temperature, and set filling faster.',
    readTime: '7 min read',
    emoji: '⚠️',
    fixRecipe: { category: 'pie', problem: 'general' },
    quickAnswer:
      'Rim and top crust brown faster than deep filling sets. Use foil or silicone shields, bake on a lower rack with stone heat, or start hotter then finish gently—match recipe style.',
    intro:
      'Pies are two thermal problems in one shell: pastry sets quickly while interior fluid needs time to gel. The crust always wins the race unless you engineer the handicap.',
    sections: [
      {
        heading: 'Geometry of heat',
        paragraphs: [
          'Edges are thin and exposed; centers are insulated by filling volume.',
        ],
      },
      {
        heading: 'Sugar and dairy',
        paragraphs: [
          'Egg and sugar in custard pies brown quickly; foil buys minutes for interior set.',
        ],
      },
      {
        heading: 'Fruit juices',
        paragraphs: [
          'Water-heavy fruit needs time to boil off enough to thicken; premature high heat chars lattice first.',
        ],
        tip: 'Tent with loose foil dome, not tight plastic-like wrap that steams the crust soggy.',
      },
      {
        heading: 'Holistic fixes',
        paragraphs: [
          'Fix My Recipe can highlight unusually high sugar fillings that brown aggressively; pair ratio insight with foil discipline.',
        ],
      },
    ],
    related: [
      { title: 'Why Pie Crust Gets Soggy', path: '/pie-science/why-pie-crust-gets-soggy' },
      { title: 'Why Pie Filling Bubbles Over', path: '/pie-science/why-pie-filling-bubbles-over' },
    ],
  },
];
