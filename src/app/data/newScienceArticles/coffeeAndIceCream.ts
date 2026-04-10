import type { ScienceArticleSpec } from '../scienceArticleTypes';

const CO_REL = [
  { title: 'Coffee Extraction Science', path: '/coffee-science/coffee-extraction-science' },
  { title: 'How to Debug Your Coffee', path: '/coffee-science/how-to-debug-your-coffee' },
];

export const coffeeGapScienceArticles: ScienceArticleSpec[] = [
  {
    slug: 'why-coffee-tastes-hollow',
    segment: 'coffee-science',
    categoryLabel: 'Coffee Science',
    title: 'Why Coffee Tastes Hollow',
    subtitle: 'Low solubles, channeling, and stale beans produce empty mid-palate cups.',
    readTime: '8 min read',
    emoji: '🕳️',
    fixRecipe: { category: 'coffee', problem: 'weak' },
    quickAnswer:
      '“Hollow” usually means thin strength without pleasant acidity—under-dose, fast shot, channeling, or stale coffee. Increase effective extraction yield carefully or fix grinder and prep; distinguish from true sour under-extraction.',
    intro:
      'Hollow is a metaphor tasters use for missing mid-body and sweetness: the coffee is wet, but nothing sings. It sits next to weak and sour in the diagnostic tree, which is why fixing it requires separating strength from extraction quality.',
    sections: [
      {
        heading: 'Strength vs extraction',
        paragraphs: [
          'Strength is concentration; extraction is what percentage of the grounds dissolved. You can have high strength but hollow flavor if you only dissolved easy early compounds, or low strength with decent balance if ratios are off.',
        ],
      },
      {
        heading: 'Channeling and uneven flow',
        paragraphs: [
          'Water finds paths of least resistance, under-extracting some puck zones and over-extracting others. The cup can taste simultaneously sharp and empty.',
        ],
      },
      {
        heading: 'Staling and roast',
        paragraphs: [
          'Very stale coffee loses aromatics that fill the mid-palate, leaving a flat wireframe where flavor used to be.',
        ],
        tip: 'Taste at a fixed recipe with one variable changed—dose, yield, or grind—before buying new gear.',
      },
      {
        heading: 'Fix My Recipe coffee mode',
        paragraphs: [
          'Walk extraction-balance and weak profiles with your numbers in hand. The debugger frames ratio thinking the same way as baking: change one lever, observe, log.',
        ],
      },
    ],
    related: CO_REL,
  },
  {
    slug: 'why-coffee-tastes-over-extracted',
    segment: 'coffee-science',
    categoryLabel: 'Coffee Science',
    title: 'Why Coffee Tastes Over-Extracted',
    subtitle: 'Dry bitterness, astringency, and hollow finish when too much solid dissolves.',
    readTime: '8 min read',
    emoji: '⚗️',
    fixRecipe: { category: 'coffee', problem: 'bitter' },
    quickAnswer:
      'Over-extraction pulls more bitter, woody, and astringent compounds. Coarsen grind, shorten time, lower temperature slightly, or reduce agitation—pick the variable that matches your brew method.',
    intro:
      'Extraction is a curve: acids and sugars come early; heavier bitters later. Pushing too far along that curve is over-extraction in the cup, even if your TDS meter says something else.',
    sections: [
      {
        heading: 'The flavor curve',
        paragraphs: [
          'Espresso and pourover differ in mechanics but share the idea of contact time × surface area × temperature.',
        ],
      },
      {
        heading: 'Grind as the main dial',
        paragraphs: [
          'Finer grind increases surface area and usually pushes extraction upward. Coarsening is the first fix for harsh, dry cups when time is fixed.',
        ],
      },
      {
        heading: 'Temperature and roast',
        paragraphs: [
          'Hotter water extracts faster; dark roasts have more soluble ash and can taste harsh sooner.',
        ],
      },
      {
        heading: 'Debugger alignment',
        paragraphs: [
          'Coffee mode links bitter and burnt-taste clusters to practical levers. Use it after you log grind setting, time, and ratio.',
        ],
      },
    ],
    related: [
      { title: 'Why Coffee Tastes Bitter', path: '/coffee-science/why-coffee-tastes-bitter' },
      ...CO_REL,
    ],
  },
  {
    slug: 'why-coffee-tastes-under-extracted',
    segment: 'coffee-science',
    categoryLabel: 'Coffee Science',
    title: 'Why Coffee Tastes Under-Extracted',
    subtitle: 'Sour, salty, and thin cups when the brew stops too early on the curve.',
    readTime: '8 min read',
    emoji: '🍋',
    fixRecipe: { category: 'coffee', problem: 'sour' },
    quickAnswer:
      'Under-extracted coffee keeps a disproportionate share of early acids and lacks balancing sweetness. Finer grind, longer time, higher temperature within safe bounds, or better saturation fix it.',
    intro:
      'Under-extraction is not the same as “light roast bright.” It is an incomplete dissolution problem: the balance point never arrived.',
    sections: [
      {
        heading: 'Acids first',
        paragraphs: [
          'Chlorogenic and organic acids dissolve readily; sugars and melanoidins need more work.',
        ],
      },
      {
        heading: 'Channeling masquerading as under',
        paragraphs: [
          'Some liquid bypasses the bed, tasting weak-sour even when part of the puck is fine.',
        ],
      },
      {
        heading: 'Dose and ratio',
        paragraphs: [
          'Very high brew ratios can taste dilute and sour-ish if extraction yield stays low.',
        ],
      },
      {
        heading: 'Use the tool',
        paragraphs: [
          'Fix My Recipe’s sour and weak pathways list method-specific checks; pair with a simple tasting journal.',
        ],
      },
    ],
    related: [
      { title: 'Why Coffee Tastes Sour', path: '/coffee-science/why-coffee-tastes-sour' },
      ...CO_REL,
    ],
  },
  {
    slug: 'why-coffee-strength-vs-extraction-matters',
    segment: 'coffee-science',
    categoryLabel: 'Coffee Science',
    title: 'Why Coffee Strength vs Extraction Matters',
    subtitle: 'TDS and yield describe different axes; confusing them sends fixes in wrong directions.',
    readTime: '9 min read',
    emoji: '⚖️',
    fixRecipe: { category: 'coffee', problem: 'extraction-balance' },
    quickAnswer:
      'Strength is how concentrated the cup is (brew ratio, bypass water). Extraction is what fraction of grounds mass became beverage. Strong can be under-extracted; weak can be over-extracted—taste proves it.',
    intro:
      'This is the single most valuable mental model in coffee troubleshooting. Baking has parallel ideas: hydration vs mixing intensity. Once you separate axes, adjustments stop fighting each other.',
    sections: [
      {
        heading: 'Definitions that behave',
        paragraphs: [
          'Strength moves with dose relative to water and final beverage mass. Extraction moves with grind, time, temperature, and agitation.',
        ],
      },
      {
        heading: 'Common mistakes',
        paragraphs: [
          'Fixing sour by adding hot water weakens strength without fixing extraction. Fixing bitterness only by adding water hides harshness but wastes solubles.',
        ],
      },
      {
        heading: 'Practical workflow',
        paragraphs: [
          'First hit a reasonable ratio band for your method, then adjust grind/time to place flavor. Revisit ratio only after extraction sits in a sane window.',
        ],
        tip: 'Write two columns in your notes: “strength changes” vs “extraction changes.”',
      },
      {
        heading: 'SenseiFood alignment',
        paragraphs: [
          'Coffee mode’s extraction-balance entry is built for this dichotomy. Baking users can practice the same discipline in Fix My Recipe across categories.',
        ],
      },
    ],
    related: CO_REL,
  },
  {
    slug: 'why-coffee-tastes-different-every-brew',
    segment: 'coffee-science',
    categoryLabel: 'Coffee Science',
    title: 'Why Coffee Tastes Different Every Brew',
    subtitle: 'Grinder retention, water, bloom, and human variance swamp “the same recipe.”',
    readTime: '8 min read',
    emoji: '🌀',
    fixRecipe: { category: 'coffee', problem: 'general' },
    quickAnswer:
      'Inconsistency is grinder steps, temperature drift, pour pattern, and stale vs fresh puck. Purge grinder, weigh inputs, use kettle with stable pour, and track water minerals.',
    intro:
      'Coffee is more sensitive than most baking because you complete the “reaction” at service time. Small input noise becomes large sensory noise.',
    sections: [
      {
        heading: 'Grinder purge and retention',
        paragraphs: [
          'Yesterday’s grind setting mixes with today’s unless you discard a few grams.',
        ],
      },
      {
        heading: 'Water as ingredient',
        paragraphs: [
          'Filter bypass solids and alkalinity shift extraction. RO with no remineralization tastes different than tap.',
        ],
      },
      {
        heading: 'Technique drift',
        paragraphs: [
          'Pour height and spiral speed move agitation. Video yourself occasionally.',
        ],
      },
      {
        heading: 'Debugger habit',
        paragraphs: [
          'When taste swings, log three numbers: dose, yield or water, and time. Feed those into Fix My Recipe before changing two things at once.',
        ],
      },
    ],
    related: CO_REL,
  },
];

const IC_REL = [
  { title: 'Why Ice Cream Gets Icy', path: '/ice-cream-science/why-ice-cream-gets-icy' },
  { title: 'Why Ice Cream Is Creamy', path: '/ice-cream-science/why-ice-cream-is-creamy' },
];

export const iceCreamGapScienceArticles: ScienceArticleSpec[] = [
  {
    slug: 'why-ice-cream-is-too-hard',
    segment: 'ice-cream-science',
    categoryLabel: 'Ice Cream Science',
    title: 'Why Ice Cream Is Too Hard',
    subtitle: 'Low sugar, low alcohol, high water, and deep-freeze temps drive rock-solid scoops.',
    readTime: '7 min read',
    emoji: '🧊',
    fixRecipe: { category: 'iceCream', problem: 'general' },
    quickAnswer:
      'Hard ice cream usually means insufficient freezing-point depression (sugar, milk solids, alcohol) or storage far below scoopable range. Balance solids, add corn syrup or alcohol modestly, and store around 0°F, not -20°F.',
    intro:
      'Scoopability is colligative properties plus microstructure. Sugar is not only sweet; it is antifreeze. Ignoring that turns homemade bases into ingots.',
    sections: [
      {
        heading: 'Freezing point depression',
        paragraphs: [
          'Sugars and salts lower the temperature at which water freezes, leaving a softer phase.',
        ],
      },
      {
        heading: 'Air and fat',
        paragraphs: [
          'Overrun and fat globules interrupt ice continuity, softening scoop.',
        ],
      },
      {
        heading: 'Storage',
        paragraphs: [
          'Chest freezers run colder than ideal serving temps. Temper briefly before scooping.',
        ],
      },
      {
        heading: 'Ice cream mode',
        paragraphs: [
          'Fix My Recipe compares sugar and dairy solids bands; lean bases show up clearly.',
        ],
      },
    ],
    related: IC_REL,
  },
  {
    slug: 'why-ice-cream-is-too-soft',
    segment: 'ice-cream-science',
    categoryLabel: 'Ice Cream Science',
    title: 'Why Ice Cream Is Too Soft',
    subtitle: 'Too much sugar, alcohol, or warm freezers prevent proper firming.',
    readTime: '7 min read',
    emoji: '🍦',
    fixRecipe: { category: 'iceCream', problem: 'melts-fast' },
    quickAnswer:
      'Soft ice cream straight from the freezer signals high sugar or alcohol, incomplete freezing, or a warm freezer. Check dasher time, hardening step, and recipe balance.',
    intro:
      'Soft can be luscious—or unstable. Distinguish melt on the spoon from never setting in the first place.',
    sections: [
      {
        heading: 'Solids and alcohol',
        paragraphs: [
          'Extra cordials or syrup can suppress freezing enough that the base stays soupy.',
        ],
      },
      {
        heading: 'Machine draw temperature',
        paragraphs: [
          'Under-churned bases freeze more water later in the pan unevenly; follow hardening.',
        ],
      },
      {
        heading: 'Thermal abuse',
        paragraphs: [
          'Opening the freezer often drives temperature cycles that feel like “never hard.”',
        ],
      },
      {
        heading: 'Debugger',
        paragraphs: [
          'Ice cream mode highlights sugar-heavy formulas; pair with thermometer checks of your freezer.',
        ],
      },
    ],
    related: [
      { title: 'Why Ice Cream Melts Fast', path: '/ice-cream-science/why-ice-cream-melts-fast' },
      ...IC_REL,
    ],
  },
  {
    slug: 'why-ice-cream-tastes-icy',
    segment: 'ice-cream-science',
    categoryLabel: 'Ice Cream Science',
    title: 'Why Ice Cream Tastes Icy',
    subtitle: 'Large crystals and wet air pockets read as crunch and cold water on the tongue.',
    readTime: '8 min read',
    emoji: '🧊👅',
    fixRecipe: { category: 'iceCream', problem: 'icy' },
    quickAnswer:
      'Icy mouthfeel means large ice crystals or high free water—slow freezing, heat shock, low solids, or stabilizer issues. Freeze faster, minimize thaw cycles, balance sugar and MSNF.',
    intro:
      'This article complements “gets icy” storage physics with sensory framing: your tongue detects crystal size as texture.',
    sections: [
      {
        heading: 'Crystal growth',
        paragraphs: [
          'Small crystals feel smooth; large ones feel sandy. Heat shock melts and refreezes water into bigger crystals.',
        ],
      },
      {
        heading: 'Formulation',
        paragraphs: [
          'Dextrose, corn syrup, and milk solids interrupt ice continuity; too-lean bases crystallize eagerly.',
        ],
      },
      {
        heading: 'Process',
        paragraphs: [
          'Hardening after churn sets smaller crystals than skipping the step.',
        ],
      },
      {
        heading: 'Tooling',
        paragraphs: [
          'Fix My Recipe icy pathway pairs with your weights to show lean vs typical sugar–dairy ratios.',
        ],
      },
    ],
    related: [
      { title: 'Why Ice Cream Gets Icy', path: '/ice-cream-science/why-ice-cream-gets-icy' },
      ...IC_REL,
    ],
  },
  {
    slug: 'why-ice-cream-lacks-flavor',
    segment: 'ice-cream-science',
    categoryLabel: 'Ice Cream Science',
    title: 'Why Ice Cream Lacks Flavor',
    subtitle: 'Cold suppresses sweetness and aroma; fat mutes; dilution hides extracts.',
    readTime: '7 min read',
    emoji: '😐',
    fixRecipe: { category: 'iceCream', problem: 'general' },
    quickAnswer:
      'Flavor reads weaker frozen. Boost base before churn, use cooked concentrates, salt, acid, or alcohol carriers, and taste slightly over-strong warm knowing cold dulls perception.',
    intro:
      'Frozen dessert formulation is compensatory psychology plus chemistry: what tastes right hot is often timid cold.',
    sections: [
      {
        heading: 'Temperature and perception',
        paragraphs: [
          'Trigeminal cold masks volatile aromatics. Sweetness perception drops at low temperatures.',
        ],
      },
      {
        heading: 'Dilution math',
        paragraphs: [
          'Air and water from milk dilute infusions; steep stronger or reduce water elsewhere.',
        ],
      },
      {
        heading: 'Fat and vanilla',
        paragraphs: [
          'Fat carries fat-soluble aromatics but can blanket subtle notes if not balanced.',
        ],
      },
      {
        heading: 'Ratios',
        paragraphs: [
          'Ice cream mode shows whether you are maxing sugar space while starving flavor carriers—adjust holistically.',
        ],
      },
    ],
    related: IC_REL,
  },
  {
    slug: 'why-ice-cream-separates',
    segment: 'ice-cream-science',
    categoryLabel: 'Ice Cream Science',
    title: 'Why Ice Cream Separates',
    subtitle: 'Butterfat churn-out, unstable emulsions, and thaw-refreeze break smoothness.',
    readTime: '8 min read',
    emoji: '💧',
    fixRecipe: { category: 'iceCream', problem: 'general' },
    quickAnswer:
      'Separation means broken emulsion or churned butter: overwhipping, heat shock, acidic fruit without stabilization, or fat that coalesced. Emulsifiers, cornstarch, and gentler churn help.',
    intro:
      'Ice cream is a frozen emulsion foam. When fat globules irreversibly cluster, you see oily sheen, curdled texture, or watery whey pockets.',
    sections: [
      {
        heading: 'Churned butter',
        paragraphs: [
          'Too long or too fast in a warm machine smears fat on dasher walls.',
        ],
      },
      {
        heading: 'Acid and dairy',
        paragraphs: [
          'Fruit acids can curdle unless balanced with starch or careful incorporation timing.',
        ],
      },
      {
        heading: 'Thaw abuse',
        paragraphs: [
          'Partial melt lets fat rise; refreeze never fully re-emulsifies.',
        ],
        tip: 'Temper mix completely smooth before churn if you heated yolks or chocolate.',
      },
      {
        heading: 'Debugger',
        paragraphs: [
          'Compare fat and sugar levels to reference ranges; extreme ratios stress emulsions.',
        ],
      },
    ],
    related: [
      { title: 'Why Ice Cream Gets Freezer Burn', path: '/ice-cream-science/why-ice-cream-gets-freezer-burn' },
      ...IC_REL,
    ],
  },
];
