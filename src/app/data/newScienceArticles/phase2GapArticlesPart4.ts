import type { ScienceArticleSpec } from '../scienceArticleTypes';

const COFFEE_REL = [
  { title: 'Coffee Extraction Science', path: '/coffee-science/coffee-extraction-science' },
  { title: 'How to Debug Your Coffee', path: '/coffee-science/how-to-debug-your-coffee' },
];

export const phase2GapArticlesPart4: ScienceArticleSpec[] = [
  {
    slug: 'why-coffee-tastes-thin-but-bitter',
    segment: 'coffee-science',
    categoryLabel: 'Coffee Science',
    title: 'Why Coffee Tastes Thin But Bitter (Split Extraction Problem)',
    subtitle: 'Channeling and uneven wetting yield sour/weak zones and bitter zones in the same cup.',
    readTime: '8 min read',
    level: 'Extraction physics',
    emoji: '⚖️',
    fixRecipe: { category: 'coffee', problem: 'extraction-balance' },
    quickAnswer:
      'Thin + bitter usually means uneven extraction: some grounds over-yielded tannins, others under-yielded solids. Fix grind distribution, reduce channeling, and align bloom/pour sequence before chasing ratio.',
    intro:
      'A cup is an average of many micro-paths through the bed. If water races through some channels, you get both dilute under-extracted liquid and over-extracted bitter liquid at once—your tongue reads the contradiction as “weak but harsh.”',
    sections: [
      {
        heading: 'Time, temperature, and pressure across the puck',
        paragraphs: [
          'Espresso amplifies channel sensitivity because pressure follows least resistance. Even pourover beds punish uneven particle sizes with the same split.',
        ],
      },
      {
        heading: 'Sequence: bloom and pulse pours',
        paragraphs: [
          'Bloom exists to wet all surfaces before driving flow. Skipping or rushing it seeds dry pockets and micro-channels.',
        ],
      },
      {
        heading: 'Holding after brew',
        paragraphs: [
          'Bitter polymerization continues hot in a carafe; cooling masks some bitterness but leaves thin body if solids were never there.',
        ],
      },
    ],
    related: [
      { title: 'Why Coffee Strength vs Extraction Matters', path: '/coffee-science/why-coffee-strength-vs-extraction-matters' },
      { title: 'Why Coffee Tastes Over-Extracted', path: '/coffee-science/why-coffee-tastes-over-extracted' },
      ...COFFEE_REL,
    ],
  },
  {
    slug: 'why-coffee-aroma-doesnt-match-taste',
    segment: 'coffee-science',
    categoryLabel: 'Coffee Science',
    title: "Why Coffee Aroma Doesn't Match Taste",
    subtitle: 'Volatiles dominate nose; dissolved solids dominate palate—temperature splits the experience.',
    readTime: '7 min read',
    level: 'Sensory mismatch',
    emoji: '👃',
    fixRecipe: { category: 'coffee', problem: 'general' },
    quickAnswer:
      'Smell is thousands of volatiles; taste is mainly non-volatile balance. Roasty aroma can sit over a hollow cup if extraction skews sour/weak, or if you drink too cold.',
    intro:
      'We say “this smells amazing but tastes flat” when the volatile phase over-promises relative to the extractive phase. Fixing it is about aligning grind, yield, and serve temperature—not adding more beans to the grinder blindly.',
    sections: [
      {
        heading: 'Serve temperature sequence',
        paragraphs: [
          'Aromatics flash off faster when hot; cooling shifts which volatiles reach orthonasal vs retronasal pathways.',
        ],
      },
      {
        heading: 'Extraction yield vs roast color',
        paragraphs: [
          'Dark roasts smell smoky while cup can be hollow if under-extracted; light roasts smell floral while cup can be sharp if under-developed in brew.',
        ],
      },
      {
        heading: 'Holding in open carafes',
        paragraphs: [
          'Aroma loss to air is real; cover between pours if judging quality.',
        ],
      },
    ],
    related: [
      { title: 'Why Coffee Smells Good', path: '/coffee-science/why-coffee-smells-good' },
      { title: 'Why Coffee Tastes Hollow', path: '/coffee-science/why-coffee-tastes-hollow' },
      ...COFFEE_REL,
    ],
  },
  {
    slug: 'why-coffee-tastes-better-at-certain-temperatures',
    segment: 'coffee-science',
    categoryLabel: 'Coffee Science',
    title: 'Why Coffee Tastes Better at Certain Temperatures',
    subtitle: 'Sweet–sour–bitter balance moves as solubility and volatility change down the cooling curve.',
    readTime: '8 min read',
    level: 'Temperature curve',
    emoji: '🌡️',
    fixRecipe: { category: 'coffee', problem: 'general' },
    quickAnswer:
      'Many coffees “open up” between 120–150°F where acids integrate with sugars; too hot masks detail, too cold exposes ash and tannin. Taste the same cup across a 10-minute window.',
    intro:
      'There is no single best temperature—there is a best window for a given roast and extraction. Brewing is only half; drinking is a time–temperature experiment.',
    sections: [
      {
        heading: 'Cooling as part of recipe design',
        paragraphs: [
          'Cupping uses standardized cooling on purpose: flavor is a trajectory.',
        ],
      },
      {
        heading: 'Milk drinks shift the window',
        paragraphs: [
          'Lactose sweetness and protein binding change perceived acidity peaks vs black coffee.',
        ],
      },
      {
        heading: 'Holding and reheating',
        paragraphs: [
          'Microwave reheating spikes uneven volatiles; gentle thermal mix preserves balance longer.',
        ],
      },
    ],
    related: [
      { title: 'Why Coffee Tastes Different Cold', path: '/coffee-science/why-coffee-tastes-different-cold' },
      { title: 'Why Coffee Tastes Flat', path: '/coffee-science/why-coffee-tastes-flat' },
      ...COFFEE_REL,
    ],
  },
  {
    slug: 'why-coffee-water-chemistry-matters',
    segment: 'coffee-science',
    categoryLabel: 'Coffee Science',
    title: 'Why Coffee Water Chemistry Matters',
    subtitle: 'Hardness, alkalinity, and filter solids change extraction efficiency and sensory balance.',
    readTime: '8 min read',
    level: 'Water chemistry',
    emoji: '💧',
    fixRecipe: { category: 'coffee', problem: 'general' },
    quickAnswer:
      'Magnesium extracts differently than calcium; high bicarbonate buffers acid and dulls brightness; chlorinated tap adds off-notes. Match water to roast or use calibrated packets.',
    intro:
      'Coffee is mostly water. If your H₂O is a moving target, every dial on the grinder becomes a moving target too. Water is not neutral—it is an active reagent.',
    sections: [
      {
        heading: 'Ion profile vs flavor axis',
        paragraphs: [
          'Magnesium tends to promote sharp fruit extraction; calcium can emphasize heavier body. Both need sane total hardness.',
        ],
      },
      {
        heading: 'Temperature interaction with minerals',
        paragraphs: [
          'Boilers scale and drift delivery; maintenance is a taste issue.',
        ],
      },
      {
        heading: 'Holding water in tanks',
        paragraphs: [
          'Stagnant RO without remineralization leaches flat cups; remineralize to a spec, not zero TDS forever.',
        ],
      },
    ],
    related: [
      { title: 'Why Coffee Tastes Metallic', path: '/coffee-science/why-coffee-tastes-metallic' },
      { title: 'Why Coffee Tastes Salty', path: '/coffee-science/why-coffee-tastes-salty' },
      ...COFFEE_REL,
    ],
  },
  {
    slug: 'why-espresso-channels',
    segment: 'coffee-science',
    categoryLabel: 'Coffee Science',
    title: 'Why Espresso Channels (Extraction Path Failure)',
    subtitle: 'Density gradients, edge effects, and uneven prep create least-resistance rivers.',
    readTime: '8 min read',
    level: 'Pressure bed physics',
    emoji: '🌀',
    fixRecipe: { category: 'coffee', problem: 'extraction-balance' },
    quickAnswer:
      'Channeling is water cheating past grounds. Fix distribution (WDT), level tamp, align basket/screen, match dose to basket depth, and avoid cracked pucks from impact.',
    intro:
      'At 9 bar, tiny cracks are Grand Canyons. The shot timer can look “fine” while the cup is simultaneously sour and bitter—classic channel signature.',
    sections: [
      {
        heading: 'Prep sequence: distribute before compress',
        paragraphs: [
          'Tamping cannot fix vertical density stripes. Weiss distribution techniques exist because fingers lie.',
        ],
      },
      {
        heading: 'Temperature and flow profiling',
        paragraphs: [
          'Some machines reduce early channel risk with gentle preinfusion; long dry preheat of puck can change viscosity.',
        ],
      },
      {
        heading: 'Holding puck integrity between prep and pull',
        paragraphs: [
          'Delayed shots after prep can settle micro-fissures—or create them if bumped. Lock in calmly.',
        ],
      },
    ],
    related: [
      { title: 'Why Coffee Grind Size Matters', path: '/coffee-science/why-coffee-grind-size-matters' },
      { title: 'Why Coffee Brewing Time Matters', path: '/coffee-science/why-coffee-brewing-time-matters' },
      ...COFFEE_REL,
    ],
  },
];
