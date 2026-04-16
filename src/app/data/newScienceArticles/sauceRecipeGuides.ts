import type { ScienceArticleSpec } from '../scienceArticleTypes';

const DEFAULT_RELATED: { title: string; path: string }[] = [
  { title: 'Temperature: The Silent Killer of Sauces', path: '/sauce-science/temperature-silent-killer-sauces' },
  { title: 'Order of Operations: Timing Changes Everything', path: '/sauce-science/order-of-operations-sauce-timing' },
];

type GuideSeed = {
  slug: string;
  sauceId: string;
  title: string;
  subtitle: string;
  emoji: string;
  quickAnswer: string;
  intro: string;
  sections: ScienceArticleSpec['sections'];
  related?: { title: string; path: string }[];
};

function specFrom(seed: GuideSeed): ScienceArticleSpec {
  return {
    slug: seed.slug,
    segment: 'sauce-science',
    categoryLabel: 'Sauce Science',
    title: seed.title,
    subtitle: seed.subtitle,
    readTime: '8 min read',
    level: 'Recipe guide',
    emoji: seed.emoji,
    quickAnswer: seed.quickAnswer,
    intro: seed.intro,
    sections: seed.sections,
    related: seed.related ?? DEFAULT_RELATED,
    fixRecipe: { category: 'baking', problem: 'general' },
    sauceSensei: { sauceId: seed.sauceId },
  };
}

const SEEDS: GuideSeed[] = [
  {
    slug: 'brown-gravy-stock-based',
    sauceId: 'simple-gravy',
    title: 'Brown Gravy (Stock-Based Roux): Recipe & Balance Guide',
    subtitle: 'Roux-thickened gravy from drippings or butter + flour + stock — how to read salt vs fat and avoid a thin finish.',
    emoji: '🍲',
    quickAnswer:
      'Equal tablespoons of butter and flour are classic by volume (~1.5–1.9:1 by weight). Simmer until the body matches the plate, then season at the end.',
    intro:
      'Brown gravy is a small set of moves done in the right order: toast the roux, add warm stock in stages, simmer to thicken, then salt and pepper to taste. The Sauce Sensei model treats this build as fat-forward once the roux carries butter or drippings, with salt coming from stock and your finish — so tasting late matters more than nailing grams on paper.',
    sections: [
      {
        heading: 'Roux first, liquid second',
        paragraphs: [
          'Cook the roux until it smells toasty and the raw flour note is gone — usually a few minutes at gentle heat. Pale roux thickens; deeply browned roux adds flavor but reduces thickening power, so pick your toast level for the dish.',
          'Add stock warm and in increments, whisking out lumps before more liquid goes in. If the gravy is thin, simmer to reduce; if it is tight, thin with more stock before you chase salt.',
        ],
        tip: 'Season after the gravy is close to final thickness — reduction concentrates salt.',
      },
      {
        heading: 'Balance on the wheel',
        paragraphs: [
          'Stock-forward gravies dilute perceived salt until they reduce; fat from roux rounds mouthfeel. If the dot on the wheel reads very fat-heavy, a touch more salt or a splash of acid (wine, vinegar) can restore contrast without turning the sauce sharp.',
          'Use the interactive builder to scale the batch and watch how butter + flour + stock grams move the modeled pulls — then trust your spoon at the stove.',
        ],
      },
    ],
  },
  {
    slug: 'white-gravy-southern',
    sauceId: 'white-gravy',
    title: 'White Gravy (Southern Cream Gravy): Recipe & Balance Guide',
    subtitle: 'Roux + milk, aggressive pepper — dairy-forward comfort sauce for biscuits and fried chicken.',
    emoji: '🤠',
    quickAnswer:
      'Milk proteins scorch fast: keep a gentle bubble, not a rolling boil. Pepper is part of the flavor identity, not just garnish.',
    intro:
      'White gravy is roux-thickened milk with a pepper-forward personality. It should be creamy, lightly savory, and spoonable — not a loose béchamel and not a paste. Because milk dilutes salt perception differently than stock gravies, seasoning checks happen after the sauce has tightened.',
    sections: [
      {
        heading: 'Heat discipline',
        paragraphs: [
          'After the roux, add milk in stages while whisking. A vigorous boil can break emulsion and scorch dairy on the pan floor; you want a steady, gentle bubble while thickening.',
          'Black pepper is traditional; add in layers so heat and aroma stay balanced with salt.',
        ],
      },
      {
        heading: 'What “done” feels like',
        paragraphs: [
          'The sauce should coat a spoon and pool slowly on a plate — if it is runny, reduce a bit longer before adding more fat. If it is gluey, thin with a splash of milk and re-season.',
          'Open the Sauce Sensei build for this variant to align grams with the wheel’s style target band for white gravy.',
        ],
      },
    ],
  },
  {
    slug: 'lemon-pan-sauce',
    sauceId: 'pan-sauce-lemon',
    title: 'Lemon Pan Sauce: Recipe & Balance Guide',
    subtitle: 'Stock + lemon + butter finish — bright acid with emulsified fat.',
    emoji: '🍋',
    quickAnswer: 'Add lemon off heat so you keep volatile top notes; boil hard and citrus can turn harsh or metallic.',
    intro:
      'Lemon pan sauce is a classic finish for chicken and fish: build fond, deglaze or reduce stock, then lift with cold butter and a controlled hit of lemon. Acid at the end preserves brightness; fat at the end carries aroma without overcooking fragile dairy fat.',
    sections: [
      {
        heading: 'Acid timing',
        paragraphs: [
          'If you need reduction, do it before the lemon goes in. Late acid gives you a clear “lift” that reads on the palate; early acid becomes part of the background chord.',
          'Whisk cold butter off heat or at a bare simmer to reduce split risk while still emulsifying.',
        ],
      },
      {
        heading: 'Serving and balance',
        paragraphs: [
          'This build skews acid-forward by design — balance with salt and fat using the wheel as a map, not a scoreboard. If it tastes great but looks extreme on the model, verify your grams match what is in the pan.',
        ],
      },
    ],
  },
  {
    slug: 'mustard-pan-sauce',
    sauceId: 'pan-sauce-mustard',
    title: 'Mustard Pan Sauce: Recipe & Balance Guide',
    subtitle: 'Dijon + cream + stock + butter — emulsifier-assisted pan sauce with savory depth.',
    emoji: '🟡',
    quickAnswer:
      'Mustard helps stabilize fat-in-water emulsions; still finish gently — dairy plus acid loads can curdle if boiled hard.',
    intro:
      'Mustard brings emulsifying help and sharpness in one ingredient, which is why it appears in creamy pan sauces. Cream rounds heat and body; butter at the end adds gloss. The sequence is the recipe: aromatics, mustard cook-in, stock reduction, cream simmer, butter off heat.',
    sections: [
      {
        heading: 'Why this sequence',
        paragraphs: [
          'Reducing stock before cream concentrates savory notes without flooding the sauce with dairy volume too early. Cream added to an already-flavorful base needs less reduction time, which protects texture.',
          'Finish butter off heat to keep the emulsion silky rather than oily.',
        ],
      },
      {
        heading: 'Debugging',
        paragraphs: [
          'If the sauce breaks, lower heat, add a splash of warm stock, and whisk. Mustard can mask salt needs — taste after the sauce is smooth.',
        ],
      },
    ],
  },
  {
    slug: 'mushroom-cream-sauce',
    sauceId: 'cream-sauce-mushroom',
    title: 'Mushroom Cream Sauce: Recipe & Balance Guide',
    subtitle: 'Cream + butter + mushrooms — umami-forward cream sauce for pasta and chicken.',
    emoji: '🍄',
    quickAnswer:
      'Brown mushrooms properly first; watery mushrooms dilute the sauce and steal Maillard flavor.',
    intro:
      'Mushroom cream sauce succeeds when mushrooms are cooked to color and the cream simmers gently. Mushrooms release water early — that water is flavor-diluting until it cooks off, so patience in the sauté step pays off in the finished sauce body.',
    sections: [
      {
        heading: 'Build savor first',
        paragraphs: [
          'Give mushrooms room in the pan, avoid crowding on the first pass, and let moisture evaporate until fond forms. Only then does cream have a concentrated base to thicken against.',
          'Garlic and butter are easy to burn at high heat; use the fat phase to extract flavor without charring.',
        ],
      },
      {
        heading: 'Cream behavior',
        paragraphs: [
          'Heavy cream tolerates simmering better than lower-fat dairy, but aggressive boiling still risks breaking. Reduce until the sauce coats a spoon; parmesan (if used) tightens and adds umami.',
        ],
      },
    ],
  },
  {
    slug: 'sweet-tomato-sauce',
    sauceId: 'tomato-sauce-sweet',
    title: 'Sweet Tomato Sauce: Recipe & Balance Guide',
    subtitle: 'Tomato + butter + extra sugar balance — kid-friendly marinara-style sauce.',
    emoji: '🍅',
    quickAnswer:
      'Sugar fights harsh acid from canned tomatoes; add in small pinches and taste after simmering.',
    intro:
      'Sweet tomato sauce is still tomato-forward, but sugar shifts perception from sharp to round. Fat (often olive oil or butter) carries aroma and softens the bite. The wheel helps separate “acid-led” from “sweet-led” so you do not fix the wrong axis.',
    sections: [
      {
        heading: 'Simmer with a plan',
        paragraphs: [
          'Long simmer integrates aromatics and mellows harsh notes. Sugar should solve bitterness or sharpness, not turn the sauce into dessert — taste after each pinch.',
          'If the sauce is thin, reduce before sweetening harder; concentration changes every perception gate.',
        ],
      },
      {
        heading: 'Salt last',
        paragraphs: [
          'Tomato products vary wildly in baseline salt and acid. Season near the end of cooking for predictable results.',
        ],
      },
    ],
  },
  {
    slug: 'spicy-tomato-sauce',
    sauceId: 'tomato-sauce-spicy',
    title: 'Spicy Tomato Sauce: Recipe & Balance Guide',
    subtitle: 'Tomato + chili + vinegar — heat and acid in the same build.',
    emoji: '🌶️',
    quickAnswer:
      'Capsaicin heat and vinegar acid stack — balance with fat, a touch of sweet, and careful salt.',
    intro:
      'Spicy tomato sauces walk a tightrope: chili adds heat, vinegar adds brightness, and tomatoes bring acid and body. Fat helps carry flavor and round heat; sugar is sometimes the bridge between sharp and pleasant.',
    sections: [
      {
        heading: 'Layer heat',
        paragraphs: [
          'Bloom dried chiles or cook fresh chiles to develop flavor, not just raw burn. Add vinegar in controlled doses — you can always add more, but you cannot easily subtract.',
        ],
      },
      {
        heading: 'Serving',
        paragraphs: [
          'This profile pairs with rich proteins; if the sauce reads too sharp on the wheel, consider a little fat or sweet before more salt.',
        ],
      },
    ],
  },
  {
    slug: 'balsamic-glaze',
    sauceId: 'reduction-balsamic',
    title: 'Balsamic Glaze: Recipe & Balance Guide',
    subtitle: 'Vinegar-forward reduction — intense, syrupy, easy to overshoot.',
    emoji: '🍇',
    quickAnswer:
      'Reduction concentrates sugar and acid together; the last third moves fastest — taste often.',
    intro:
      'Balsamic glaze is a concentration game. As water leaves, sweetness and acidity both rise, and bitter notes can appear. The Sauce Sensei reduction control is there to remind you that nonlinear concentration is real — not just a metaphor.',
    sections: [
      {
        heading: 'Watch the tail',
        paragraphs: [
          'Early bubbling removes water; late bubbling changes flavor aggressively. If it becomes tacky and harsh, you have gone too far — dilute carefully and rebuild.',
        ],
      },
      {
        heading: 'Uses',
        paragraphs: [
          'Drizzle finishes reward tiny amounts. Make more than you need only if you enjoy reheating chemistry experiments.',
        ],
      },
    ],
  },
  {
    slug: 'stock-reduction-demi',
    sauceId: 'reduction-stock',
    title: 'Stock Reduction (Demi-Style): Recipe & Balance Guide',
    subtitle: 'Long-simmered stock until glossy — foundation sauce, not a quick weeknight splash.',
    emoji: '🥘',
    quickAnswer:
      'Skim, strain, and reduce patiently — solids that burn on the pot walls become bitter notes in the final gloss.',
    intro:
      'A serious stock reduction is kitchen time converted into flavor density. The wheel’s salt and acid pulls climb as water leaves, which is why large-batch reductions are seasoned late and tasted constantly.',
    sections: [
      {
        heading: 'Clarity and patience',
        paragraphs: [
          'Impurities concentrate too. Clarifying steps and gentle simmering reduce off flavors. If the surface looks muddy, strain and continue with clean equipment.',
        ],
      },
      {
        heading: 'Finishing',
        paragraphs: [
          'Optional mounts (butter, cream) change the final emulsion — add them when the base is where you want it volumetrically.',
        ],
      },
    ],
  },
  {
    slug: 'teriyaki-glaze',
    sauceId: 'soy-teriyaki',
    title: 'Teriyaki Glaze: Recipe & Balance Guide',
    subtitle: 'Soy + sugar + mirin — high-umami, sweet-salty glaze.',
    emoji: '🍯',
    quickAnswer:
      'Sugar caramelizes as water leaves — pull the pan before blackening; bitter is one step past glossy.',
    intro:
      'Teriyaki-style glazes combine soy umami, sweeteners, and often mirin’s gentle acid and aroma. The wheel helps separate salt pull from umami depth — they stack, but they are not the same fix.',
    sections: [
      {
        heading: 'Heat and sheen',
        paragraphs: [
          'You are aiming for a sticky glaze that still flows; overheated sugar goes from caramel to acrid quickly. Keep moving the pan or control burner output.',
        ],
      },
      {
        heading: 'Balance',
        paragraphs: [
          'If it tastes flat, consider a tiny acid touch (rice vinegar) after salt threshold is correct — not before.',
        ],
      },
    ],
  },
  {
    slug: 'garlic-soy-sauce',
    sauceId: 'soy-garlic',
    title: 'Garlic Soy Sauce: Recipe & Balance Guide',
    subtitle: 'Soy + garlic + oil — fast umami condiment and finishing drizzle.',
    emoji: '🧄',
    quickAnswer:
      'Garlic burns faster than most aromatics; sweat gently before adding soy so you do not sear bitterness into the oil.',
    intro:
      'This build is umami-dominant with a strong salt channel from soy. Fat carries garlic aromatics; acid may be minimal. The wheel is useful for seeing how far “left” (salt) you are versus how deep (umami glow) the sauce reads.',
    sections: [
      {
        heading: 'Aromatics',
        paragraphs: [
          'Infuse oil with garlic without browning hard unless that is intentional — brown garlic turns sharply bitter quickly in small volumes.',
        ],
      },
      {
        heading: 'Dilution',
        paragraphs: [
          'If it is too salty for the dish, dilute with water or stock and re-reduce gently, or balance with a little sweet and fat at service.',
        ],
      },
    ],
  },
  {
    slug: 'nacho-cheese-sauce',
    sauceId: 'cheese-nacho',
    title: 'Nacho Cheese Sauce: Recipe & Balance Guide',
    subtitle: 'Cheddar + milk + spices — starch-stabilized cheese systems for dip and pour.',
    emoji: '🧀',
    quickAnswer:
      'Low heat and patient melting beat aggressive boiling — cheese proteins + dairy can break into oily pools.',
    intro:
      'Nacho-style cheese sauces are emulsion-like even when starch helps: you want smooth flow without graininess. Acid sources (tomato, pickled jalapeño brine) can tighten or curdle if added at the wrong time or at too high heat.',
    sections: [
      {
        heading: 'Process',
        paragraphs: [
          'Melt cheese into a stabilized base (often starch-thickened dairy) rather than dumping cheese into plain boiling milk. Whisk continuously in the danger zone.',
        ],
      },
      {
        heading: 'Fixes',
        paragraphs: [
          'If broken: lower heat, add a splash of warm milk, whisk. If bland: salt before more spice heat.',
        ],
      },
    ],
  },
  {
    slug: 'mornay-sauce',
    sauceId: 'cheese-mornay',
    title: 'Mornay Sauce: Recipe & Balance Guide',
    subtitle: 'Béchamel + Gruyère + mustard — classic cheese sauce for vegetables and gratins.',
    emoji: '🫕',
    quickAnswer:
      'Mustard and cheese both bring acid load — add mustard gradually and taste as Gruyère melts in.',
    intro:
      'Mornay is a cheese sauce built on a white sauce backbone. The flour stabilizes and thickens; cheese introduces fat, protein, and savoriness. Finish consistency before chasing salt, because cheese carries its own salinity.',
    sections: [
      {
        heading: 'Texture first',
        paragraphs: [
          'Smooth béchamel makes smooth mornay. Strain if needed, especially for fine dining finishes.',
        ],
      },
      {
        heading: 'Cheese incorporation',
        paragraphs: [
          'Add cheese off heat or at gentle heat, stirring until melted. Boiling after cheese is in invites graininess.',
        ],
      },
    ],
  },
  {
    slug: 'basil-pesto',
    sauceId: 'herb-pesto',
    title: 'Basil Pesto: Recipe & Balance Guide',
    subtitle: 'Oil + basil + nuts + cheese — emulsion-like herb sauce with salt from cheese.',
    emoji: '🌿',
    quickAnswer:
      'Pulse, don’t obliterate — heat from over-processing bruises basil and dulls aroma.',
    intro:
      'Pesto is oil-forward with herb solids and cheese providing salt and umami. Acid is usually subtle (sometimes lemon). The “wheel” framing still helps when you adjust cheese or nuts — those moves change salt and fat dominance quickly.',
    sections: [
      {
        heading: 'Technique',
        paragraphs: [
          'Traditional mortar or careful food-processor pulses preserve brighter green flavor. Stream oil to emulsify partially; a little water can help emulsion without adding more oil.',
        ],
      },
      {
        heading: 'Storage',
        paragraphs: [
          'Surface oil limits oxidation; pesto darkens with air contact — press plastic to the surface if holding overnight.',
        ],
      },
    ],
  },
];

export const sauceRecipeGuideArticles: ScienceArticleSpec[] = SEEDS.map(specFrom);
