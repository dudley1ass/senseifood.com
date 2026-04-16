import { ARTICLE_LIBRARY_TAB_IDS, type ArticleLibraryTabId } from '../../constants/articleLibraryNav';
import { PHASE2_GAP_ARTICLE_CATALOG_ROWS } from './phase2GapArticleCatalog';

/** One card on the /articles grid — full roster is `ALL_ARTICLES_CATALOG` in this file only. */
export type ArticleLibraryCard = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  color: string;
  url: string;
  senseiPei: string;
};

/** Which Sensei or in-app hub this library article pairs with. */
export function senseiPeiForArticle(category: string, url: string): string {
  if (category === 'Sauce Science' || url.startsWith('/sauce-science/')) return 'Sauce Sensei';
  if (category === 'Cookie Science') return 'CookieSensei';
  if (category === 'Bread Science') return 'Bread Sensei';
  if (
    category === 'Baking Science' ||
    category === 'Cake Science' ||
    category === 'Pie Science' ||
    category === 'Ice Cream Science' ||
    category === 'Coffee Science'
  ) {
    return 'Fix My Recipe';
  }
  return 'SenseiFood';
}

type ArticleCardBase = Omit<ArticleLibraryCard, 'senseiPei'>;

/** Original hub cards (cookies through baking-science). */
const FOUNDATIONAL_ARTICLE_ROWS: ArticleCardBase[] = [
// Cookie Science (23 articles)
    {
      title: 'How to Debug Cookie Batch Issues',
      description:
        'Too thin, too thick, uneven, or weird texture—use this practical map, then open Fix My Recipe with cookie context.',
      category: 'Cookie Science',
      readTime: '7 min read',
      color: 'from-amber-500 to-orange-600',
      url: '/cookie-science/how-to-debug-cookie-batch-issues',
    },
    {
      title: 'Why Cookies Spread',
      description: 'Discover how butter temperature, sugar ratios, and leavening agents control cookie spread and texture.',
      category: 'Cookie Science',
      readTime: '5 min read',
      color: 'from-amber-500 to-orange-600',
      url: '/cookie-science/why-cookies-spread'
    },
    {
      title: 'Brown Sugar vs White Sugar',
      description: 'Compare how different sugars affect cookie texture, spread, flavor, and moisture retention.',
      category: 'Cookie Science',
      readTime: '6 min read',
      color: 'from-orange-500 to-amber-700',
      url: '/cookie-science/brown-sugar-vs-white-sugar'
    },
    {
      title: 'Why Cookies Turn Hard',
      description: 'Learn the science behind hard cookies and how to keep them soft and chewy for days.',
      category: 'Cookie Science',
      readTime: '6 min read',
      color: 'from-amber-600 to-orange-700',
      url: '/cookie-science/why-cookies-turn-hard'
    },
    {
      title: 'Why Cookies Are Chewy',
      description: 'Discover the perfect balance of moisture, fat, and sugar that creates irresistibly chewy cookies.',
      category: 'Cookie Science',
      readTime: '6 min read',
      color: 'from-amber-500 to-orange-500',
      url: '/cookie-science/why-cookies-are-chewy'
    },
    {
      title: 'Why Cookies Get Crispy',
      description: 'Learn how low moisture content, high sugar, and proper baking create perfectly crispy cookies.',
      category: 'Cookie Science',
      readTime: '5 min read',
      color: 'from-orange-600 to-amber-600',
      url: '/cookie-science/why-cookies-get-crispy'
    },
    {
      title: 'Why Cookies Flatten',
      description: 'Understand the science behind cookie spreading and how to control thickness and shape.',
      category: 'Cookie Science',
      readTime: '6 min read',
      color: 'from-amber-400 to-orange-500',
      url: '/cookie-science/why-cookies-flatten'
    },
    {
      title: 'Why Cookies Spread Too Much',
      description: 'Fix over-spreading cookies by understanding butter temperature, flour ratios, and chilling techniques.',
      category: 'Cookie Science',
      readTime: '6 min read',
      color: 'from-orange-500 to-red-500',
      url: '/cookie-science/why-cookies-spread-too-much'
    },
    {
      title: "Why Cookies Don't Spread",
      description: 'Discover what prevents cookies from spreading and how to achieve the perfect flat, wide cookie.',
      category: 'Cookie Science',
      readTime: '6 min read',
      color: 'from-amber-600 to-orange-800',
      url: '/cookie-science/why-cookies-dont-spread'
    },
    {
      title: 'Why Cookies Burn on the Bottom',
      description: 'Discover why cookie bottoms scorch while the tops stay pale — and the simple pan and temperature fixes that solve it.',
      category: 'Cookie Science',
      readTime: '5 min read',
      color: 'from-orange-600 to-red-600',
      url: '/cookie-science/why-cookies-burn-on-the-bottom'
    },
    {
      title: 'Why Cookies Crack on Top',
      description: 'Learn why some cookies develop surface cracks during baking and when those cracks are intentional versus a problem.',
      category: 'Cookie Science',
      readTime: '5 min read',
      color: 'from-amber-500 to-orange-600',
      url: '/cookie-science/why-cookies-crack-on-top'
    },
    {
      title: 'Why Cookies Turn Cakey',
      description: 'Find out why your cookies bake up soft and cake-like instead of dense and chewy — and which ingredient swaps fix it.',
      category: 'Cookie Science',
      readTime: '6 min read',
      color: 'from-pink-500 to-amber-500',
      url: '/cookie-science/why-cookies-turn-cakey'
    },
    {
      title: 'Why Cookies Brown',
      description: 'Understand the Maillard reaction and caramelization — the two chemical processes responsible for golden-brown cookie color and rich flavor.',
      category: 'Cookie Science',
      readTime: '6 min read',
      color: 'from-amber-600 to-orange-700',
      url: '/cookie-science/why-cookies-brown'
    },
    {
      title: 'Why Cookies Stick to the Pan',
      description: 'Learn why cookies bond to baking sheets and how parchment paper, pan choice, and cooling time prevent tearing.',
      category: 'Cookie Science',
      readTime: '5 min read',
      color: 'from-red-500 to-orange-500',
      url: '/cookie-science/why-cookies-stick-to-pan'
    },
    {
      title: 'Why Cookies Spread Unevenly',
      description: 'Discover why cookies spread into lopsided ovals instead of round circles — and how to get perfectly symmetrical results.',
      category: 'Cookie Science',
      readTime: '5 min read',
      color: 'from-yellow-500 to-amber-600',
      url: '/cookie-science/why-cookies-spread-unevenly'
    },
    {
      title: 'Why Cookies Turn Oily',
      description: 'Find out why cookies come out greasy and leave an oily residue — and how fat balance and mixing technique fix it.',
      category: 'Cookie Science',
      readTime: '5 min read',
      color: 'from-amber-500 to-orange-500',
      url: '/cookie-science/why-cookies-turn-oily'
    },
    {
      title: 'Why Cookies Taste Bitter',
      description: 'Learn what causes an unpleasant bitter aftertaste in cookies — from excess leavening to burnt sugars and cocoa issues.',
      category: 'Cookie Science',
      readTime: '5 min read',
      color: 'from-stone-600 to-amber-700',
      url: '/cookie-science/why-cookies-taste-bitter'
    },
    {
      title: 'Why Cookies Get Hard After Baking',
      description: 'Understand why cookies that came out perfectly soft turn hard and rock-like the next day — and how to keep them soft for longer.',
      category: 'Cookie Science',
      readTime: '5 min read',
      color: 'from-amber-600 to-stone-700',
      url: '/cookie-science/why-cookies-get-hard-after-baking'
    },
    {
      title: 'Why Cookies Rise Then Fall',
      description: 'Understand why cookies puff up beautifully in the oven then collapse flat as they cool — and what it means for structure.',
      category: 'Cookie Science',
      readTime: '5 min read',
      color: 'from-orange-500 to-amber-600',
      url: '/cookie-science/why-cookies-rise-then-fall'
    },
    {
      title: 'Why Cookies Bake Faster on the Edges',
      description: 'Learn the physics behind crispy edges and soft centers — and how to use this to your advantage.',
      category: 'Cookie Science',
      readTime: '5 min read',
      color: 'from-yellow-500 to-amber-600',
      url: '/cookie-science/why-cookies-bake-faster-on-edges'
    },
    {
      title: 'Why Cookies Change Color',
      description: 'Understand what drives color changes in cookies — from pale gold to deep brown — and how to control it precisely.',
      category: 'Cookie Science',
      readTime: '5 min read',
      color: 'from-amber-500 to-red-500',
      url: '/cookie-science/why-cookies-change-color'
    },
    {
      title: 'Why Cookies Taste Bland',
      description: 'If your cookies taste "meh," you\'re missing one key ingredient. Here\'s the flavor science behind cookies that actually excite — salt, browning, and brown butter.',
      category: 'Cookie Science',
      readTime: '6 min read',
      color: 'from-amber-500 to-orange-600',
      url: '/cookie-science/why-cookies-taste-bland'
    },
    {
      title: 'Why Cookies Stay Thick',
      description: 'Thick cookies aren\'t always good — here\'s when staying puffy is a problem, and how to get that perfect settled, dense chew every time.',
      category: 'Cookie Science',
      readTime: '6 min read',
      color: 'from-orange-500 to-amber-600',
      url: '/cookie-science/why-cookies-stay-thick'
    },
    // Bread Science (2 articles)
    {
      title: 'Why Bread Rises',
      description: 'Understand the biological and chemical processes that turn dense dough into light, airy bread.',
      category: 'Bread Science',
      readTime: '6 min read',
      color: 'from-amber-500 to-yellow-600',
      url: '/bread-science/why-bread-rises'
    },
    {
      title: 'How Yeast Works in Baking',
      description: 'Learn about the living microorganisms that transform simple dough into flavorful, risen bread.',
      category: 'Bread Science',
      readTime: '5 min read',
      color: 'from-green-500 to-emerald-600',
      url: '/bread-science/how-yeast-works'
    },
    // Cake Science (18 articles)
    {
      title: 'How to Debug Cake Problems',
      description:
        'Collapsed centers, dense crumb, dryness—name the pattern, then use Fix My Recipe’s cake mode with the right article links.',
      category: 'Cake Science',
      readTime: '7 min read',
      color: 'from-pink-500 to-rose-600',
      url: '/cake-science/how-to-debug-cake-problems',
    },
    {
      title: 'Why Cakes Dome in the Middle',
      description: 'Understand why cakes rise higher in the center and learn techniques to achieve perfectly flat tops.',
      category: 'Cake Science',
      readTime: '5 min read',
      color: 'from-pink-500 to-purple-600',
      url: '/cake-science/why-cakes-dome'
    },
    {
      title: 'Why Cakes Collapse',
      description: 'Understand the science behind cake structure and how to prevent sinking or collapsing.',
      category: 'Cake Science',
      readTime: '7 min read',
      color: 'from-pink-500 to-rose-600',
      url: '/cake-science/why-cakes-collapse'
    },
    {
      title: 'Why Cakes Sink in the Middle',
      description: 'Learn the common causes of sinking cakes and how to prevent this frustrating baking problem.',
      category: 'Cake Science',
      readTime: '7 min read',
      color: 'from-pink-600 to-red-600',
      url: '/cake-science/why-cakes-sink'
    },
    {
      title: 'Why Cakes Crack on Top',
      description: 'Discover why cakes develop cracks and how to prevent them with proper temperature and moisture control.',
      category: 'Cake Science',
      readTime: '6 min read',
      color: 'from-pink-500 to-rose-500',
      url: '/cake-science/why-cakes-crack-on-top'
    },
    {
      title: 'Why Cakes Are Dense',
      description: 'Learn what causes dense, heavy cakes and how to achieve light, fluffy texture every time.',
      category: 'Cake Science',
      readTime: '7 min read',
      color: 'from-rose-500 to-pink-600',
      url: '/cake-science/why-cakes-are-dense'
    },
    {
      title: 'Why Cakes Stick to the Pan',
      description: 'Understand the science of pan preparation and how to release cakes perfectly every time.',
      category: 'Cake Science',
      readTime: '5 min read',
      color: 'from-pink-400 to-rose-500',
      url: '/cake-science/why-cakes-stick-to-pan'
    },
    {
      title: 'Why Cakes Dry Out',
      description: 'Master the moisture balance and storage techniques that keep cakes tender and moist for days.',
      category: 'Cake Science',
      readTime: '6 min read',
      color: 'from-rose-600 to-red-500',
      url: '/cake-science/why-cakes-dry-out'
    },
    {
      title: 'Why Cakes Rise',
      description: 'Understand the three forces that lift a cake — leavening gases, steam, and trapped air — and how they work together.',
      category: 'Cake Science',
      readTime: '7 min read',
      color: 'from-pink-500 to-purple-600',
      url: '/cake-science/why-cakes-rise'
    },
    {
      title: 'Why Cakes Brown',
      description: 'Understand the Maillard reaction and caramelization in cakes — why the crust forms and how to control color depth.',
      category: 'Cake Science',
      readTime: '6 min read',
      color: 'from-amber-500 to-rose-500',
      url: '/cake-science/why-cakes-brown'
    },
    {
      title: 'Why Cakes Stick to Paper Liners',
      description: 'Learn why cupcakes and cakes cling to paper liners and how to get clean, easy release every time.',
      category: 'Cake Science',
      readTime: '5 min read',
      color: 'from-rose-500 to-orange-500',
      url: '/cake-science/why-cakes-stick-to-paper-liners'
    },
    {
      title: 'Why Cakes Have Large Holes',
      description: 'Discover why cakes develop large tunnels and air pockets in the crumb — and how mixing technique prevents them.',
      category: 'Cake Science',
      readTime: '5 min read',
      color: 'from-purple-500 to-pink-600',
      url: '/cake-science/why-cakes-have-large-holes'
    },
    {
      title: 'Why Cakes Fall After Baking',
      description: 'Discover why a perfectly risen cake collapses as it cools — and the structural fixes that keep it tall.',
      category: 'Cake Science',
      readTime: '5 min read',
      color: 'from-rose-500 to-red-600',
      url: '/cake-science/why-cakes-fall-after-baking'
    },
    {
      title: 'Why Cakes Taste Dry',
      description: 'Understand what strips moisture from cake crumb and how to bake moist, tender cakes every time.',
      category: 'Cake Science',
      readTime: '5 min read',
      color: 'from-amber-500 to-orange-600',
      url: '/cake-science/why-cakes-taste-dry'
    },
    {
      title: 'Why Cakes Turn Gummy',
      description: 'Find out why cakes develop a dense, gummy, sticky crumb — and the starch science behind fixing it.',
      category: 'Cake Science',
      readTime: '5 min read',
      color: 'from-pink-500 to-purple-600',
      url: '/cake-science/why-cakes-turn-gummy'
    },
    {
      title: 'Why Cakes Rise Unevenly',
      description: 'Learn why one side of your cake is higher than the other — and how pan prep, oven calibration, and mixing fix it.',
      category: 'Cake Science',
      readTime: '5 min read',
      color: 'from-teal-500 to-green-600',
      url: '/cake-science/why-cakes-rise-unevenly'
    },
    {
      title: 'Why Cakes Turn Rubbery',
      description: 'Discover why cakes develop a tough, rubbery texture instead of a tender crumb — and how mixing and fat control prevent it.',
      category: 'Cake Science',
      readTime: '5 min read',
      color: 'from-indigo-500 to-purple-600',
      url: '/cake-science/why-cakes-turn-rubbery'
    },
    {
      title: 'Why Cakes Stick to Cooling Racks',
      description: 'Find out why cakes bond to wire cooling racks and how to prevent tearing when transferring warm cakes.',
      category: 'Cake Science',
      readTime: '5 min read',
      color: 'from-orange-500 to-red-500',
      url: '/cake-science/why-cakes-stick-to-cooling-rack'
    },
    // Pie Science (6 articles)
    {
      title: 'Why Pie Crust Is Flaky',
      description: 'Discover the science behind creating layers of buttery, flaky pie crust that shatters perfectly.',
      category: 'Pie Science',
      readTime: '7 min read',
      color: 'from-orange-500 to-amber-600',
      url: '/pie-science/why-pie-crust-is-flaky'
    },
    {
      title: 'Why Pie Crust Shrinks',
      description: 'Learn what causes pie crust to shrink during baking and how to prevent it with proper technique.',
      category: 'Pie Science',
      readTime: '6 min read',
      color: 'from-amber-600 to-orange-700',
      url: '/pie-science/why-pie-crust-shrinks'
    },
    {
      title: 'Why Pie Crust Gets Tough',
      description: 'Learn why pie crust turns hard and chewy instead of tender and flaky — and how controlling gluten development fixes it.',
      category: 'Pie Science',
      readTime: '7 min read',
      color: 'from-amber-600 to-orange-700',
      url: '/pie-science/why-pie-crust-gets-tough'
    },
    {
      title: 'Butter vs Shortening in Pie Crust',
      description: 'Compare how butter and shortening affect flakiness, flavor, tenderness, and workability — and when to use each or combine both.',
      category: 'Pie Science',
      readTime: '7 min read',
      color: 'from-yellow-600 to-amber-700',
      url: '/pie-science/butter-vs-shortening-in-crust'
    },
    {
      title: 'Why Pie Crust Gets Soggy',
      description: 'Flaky on top, mush on the bottom — here\'s the moisture science behind soggy pie crust and how to prevent it every time.',
      category: 'Pie Science',
      readTime: '7 min read',
      color: 'from-amber-500 to-orange-600',
      url: '/pie-science/why-pie-crust-gets-soggy'
    },
    {
      title: 'Why Pie Filling Is Runny',
      description: 'Your pie didn\'t fail — your starch did. Learn the thickener science behind perfectly set pie filling that slices cleanly every time.',
      category: 'Pie Science',
      readTime: '7 min read',
      color: 'from-orange-600 to-amber-700',
      url: '/pie-science/why-pie-filling-is-runny'
    },
    // Ice Cream Science (4 articles)
    {
      title: 'Why Ice Cream Gets Icy',
      description: 'Learn about ice crystal formation, fat content, and stabilizers that prevent icy texture.',
      category: 'Ice Cream Science',
      readTime: '6 min read',
      color: 'from-cyan-500 to-blue-600',
      url: '/ice-cream-science/why-ice-cream-gets-icy'
    },
    {
      title: 'Why Ice Cream Melts Fast',
      description: 'Discover the science behind melting rates and how fat content, overrun, and stabilizers affect how long your scoop holds its shape.',
      category: 'Ice Cream Science',
      readTime: '5 min read',
      color: 'from-blue-400 to-cyan-500',
      url: '/ice-cream-science/why-ice-cream-melts-fast'
    },
    {
      title: 'Why Ice Cream Is Creamy',
      description: 'Learn how fat content, air incorporation, and stabilizers create smooth, creamy texture.',
      category: 'Ice Cream Science',
      readTime: '6 min read',
      color: 'from-cyan-400 to-blue-500',
      url: '/ice-cream-science/why-ice-cream-is-creamy'
    },
    {
      title: 'Why Ice Cream Gets Freezer Burn',
      description: 'Learn what causes those icy, grayish patches on your ice cream and how to prevent freezer burn for good.',
      category: 'Ice Cream Science',
      readTime: '5 min read',
      color: 'from-slate-500 to-blue-600',
      url: '/ice-cream-science/why-ice-cream-gets-freezer-burn'
    },
    // Coffee Science (21 articles)
    {
      title: 'How to Debug Your Coffee',
      description:
        'Bitter, sour, weak, or flat—map what you taste to extraction levers, then try Fix My Recipe in coffee mode.',
      category: 'Coffee Science',
      readTime: '7 min read',
      color: 'from-stone-600 to-amber-800',
      url: '/coffee-science/how-to-debug-your-coffee',
    },
    {
      title: 'Coffee Extraction Science',
      description: 'Master the chemistry of coffee extraction and learn how to control flavor by adjusting grind, temperature, and time.',
      category: 'Coffee Science',
      readTime: '8 min read',
      color: 'from-stone-600 to-amber-800',
      url: '/coffee-science/coffee-extraction-science'
    },
    {
      title: 'Why Coffee Tastes Bitter',
      description: 'Understand over-extraction and how grind size, water temperature, and brew time create bitter coffee.',
      category: 'Coffee Science',
      readTime: '6 min read',
      color: 'from-stone-700 to-amber-900',
      url: '/coffee-science/why-coffee-tastes-bitter'
    },
    {
      title: 'Why Coffee Tastes Sour',
      description: 'Learn what causes sour coffee and how to fix it through better brewing technique and bean selection.',
      category: 'Coffee Science',
      readTime: '6 min read',
      color: 'from-amber-600 to-yellow-700',
      url: '/coffee-science/why-coffee-tastes-sour'
    },
    {
      title: 'Why Coffee Tastes Weak',
      description: 'Fix weak, watery coffee by mastering brew ratios, extraction time, and water temperature.',
      category: 'Coffee Science',
      readTime: '5 min read',
      color: 'from-stone-500 to-amber-600',
      url: '/coffee-science/why-coffee-tastes-weak'
    },
    {
      title: 'Why Coffee Tastes Burnt',
      description: 'Learn what causes burnt-tasting coffee and how to prevent it through proper roasting and brewing.',
      category: 'Coffee Science',
      readTime: '6 min read',
      color: 'from-stone-700 to-amber-900',
      url: '/coffee-science/why-coffee-tastes-burnt'
    },
    {
      title: 'Why Coffee Tastes Watery',
      description: 'Discover how to fix thin, watery coffee with better grind size, brewing time, and coffee-to-water ratios.',
      category: 'Coffee Science',
      readTime: '5 min read',
      color: 'from-amber-500 to-stone-700',
      url: '/coffee-science/why-coffee-tastes-watery'
    },
    {
      title: 'Why Coffee Smells Good',
      description: 'Discover the volatile aromatic compounds released during roasting and brewing that make coffee one of the most complex scents in the world.',
      category: 'Coffee Science',
      readTime: '6 min read',
      color: 'from-stone-600 to-amber-700',
      url: '/coffee-science/why-coffee-smells-good'
    },
    {
      title: 'Why Coffee Loses Flavor',
      description: 'Understand why coffee goes stale so quickly after roasting and how to store beans to preserve peak flavor.',
      category: 'Coffee Science',
      readTime: '6 min read',
      color: 'from-amber-600 to-stone-700',
      url: '/coffee-science/why-coffee-loses-flavor'
    },
    {
      title: 'Why Coffee Tastes Acidic',
      description: 'Learn the difference between pleasant brightness and harsh acidity — and which organic acids in coffee contribute to each.',
      category: 'Coffee Science',
      readTime: '7 min read',
      color: 'from-yellow-600 to-amber-700',
      url: '/coffee-science/why-coffee-tastes-acidic'
    },
    {
      title: 'Why Coffee Makes Crema',
      description: 'Discover the physics and chemistry behind espresso crema — what it is, why it forms, and what it tells you about shot quality.',
      category: 'Coffee Science',
      readTime: '6 min read',
      color: 'from-amber-600 to-orange-700',
      url: '/coffee-science/why-coffee-makes-crema'
    },
    {
      title: 'Why Coffee Gets Oily',
      description: 'Learn why dark roast coffee beans develop a shiny, oily surface — and what that oil means for flavor and freshness.',
      category: 'Coffee Science',
      readTime: '5 min read',
      color: 'from-stone-700 to-amber-800',
      url: '/coffee-science/why-coffee-gets-oily'
    },
    {
      title: 'Why Coffee Grind Size Matters',
      description: 'Understand how grind size controls extraction rate and flavor balance — the single most impactful variable in coffee brewing.',
      category: 'Coffee Science',
      readTime: '7 min read',
      color: 'from-amber-500 to-stone-600',
      url: '/coffee-science/why-coffee-grind-size-matters'
    },
    {
      title: 'Why Coffee Brewing Time Matters',
      description: 'Learn how contact time between water and grounds controls which flavor compounds extract — and every brew method\'s ideal window.',
      category: 'Coffee Science',
      readTime: '6 min read',
      color: 'from-stone-600 to-amber-700',
      url: '/coffee-science/why-coffee-brewing-time-matters'
    },
    {
      title: 'Why Coffee Tastes Different Cold',
      description: 'Discover the sensory science behind why coffee flavor changes as it cools — and why cold brew tastes nothing like chilled hot coffee.',
      category: 'Coffee Science',
      readTime: '6 min read',
      color: 'from-blue-500 to-cyan-600',
      url: '/coffee-science/why-coffee-tastes-different-cold'
    },
    {
      title: 'Why Coffee Oxidizes',
      description: 'Learn how oxygen degrades coffee\'s aromatic compounds, creating stale and rancid flavors — and how to minimize oxidation at every stage.',
      category: 'Coffee Science',
      readTime: '6 min read',
      color: 'from-stone-600 to-red-700',
      url: '/coffee-science/why-coffee-oxidizes'
    },
    {
      title: 'Why Coffee Beans Expand When Roasted',
      description: 'Discover the physics and chemistry behind coffee bean expansion during roasting — including the first and second crack phenomena.',
      category: 'Coffee Science',
      readTime: '6 min read',
      color: 'from-amber-600 to-orange-700',
      url: '/coffee-science/why-coffee-beans-expand-when-roasted'
    },
    {
      title: 'Why Coffee Tastes Salty',
      description: 'Understand why some coffees have a noticeable salty edge — and why a tiny bit of salt can actually improve your cup.',
      category: 'Coffee Science',
      readTime: '5 min read',
      color: 'from-blue-600 to-stone-700',
      url: '/coffee-science/why-coffee-tastes-salty'
    },
    {
      title: 'Why Coffee Stales',
      description: 'Understand the complete science of coffee staling — the chemical processes that transform vibrant fresh coffee into flat, cardboard-tasting brew.',
      category: 'Coffee Science',
      readTime: '7 min read',
      color: 'from-stone-700 to-amber-800',
      url: '/coffee-science/why-coffee-stales'
    },
    {
      title: 'Why Coffee Tastes Flat',
      description: 'Flat coffee isn\'t weak — it\'s missing its chemistry. Discover why your cup has lost its vibrancy and how water quality, stale beans, and grind consistency fix it.',
      category: 'Coffee Science',
      readTime: '7 min read',
      color: 'from-stone-600 to-amber-700',
      url: '/coffee-science/why-coffee-tastes-flat'
    },
    {
      title: 'Why Coffee Tastes Metallic',
      description: 'If your coffee tastes like pennies, it\'s not the beans. Here\'s exactly what\'s causing that metallic taste — water pipes, dirty equipment, and over-extraction.',
      category: 'Coffee Science',
      readTime: '6 min read',
      color: 'from-slate-600 to-stone-700',
      url: '/coffee-science/why-coffee-tastes-metallic'
    },
    // Baking Science (6 articles)
    {
      title: 'How to Use Fix My Recipe',
      description:
        'Step-by-step for SenseiFood’s rule-based recipe debugger—categories, grams, findings, sliders, and how to retest.',
      category: 'Baking Science',
      readTime: '6 min read',
      color: 'from-violet-500 to-fuchsia-600',
      url: '/baking-science/how-to-use-fix-my-recipe',
    },
    {
      title: 'Fix Recipes One Variable at a Time',
      description:
        'The engineering habit that makes fixes stick—why one lever per bake beats “change everything,” with links to Fix My Recipe.',
      category: 'Baking Science',
      readTime: '6 min read',
      color: 'from-teal-500 to-cyan-600',
      url: '/baking-science/fix-recipes-one-variable-at-a-time',
    },
    {
      title: 'Why Butter Temperature Matters',
      description: 'The single variable that changes everything — from cookie spread to cake texture. The complete science of cold, room temp, melted, and browned butter.',
      category: 'Baking Science',
      readTime: '8 min read',
      color: 'from-yellow-500 to-amber-600',
      url: '/baking-science/why-butter-temperature-matters'
    },
    {
      title: 'Why Eggs Matter in Baking',
      description: 'Eggs do five completely different jobs simultaneously. Understanding each one explains why changing yolk-to-white ratios transforms texture.',
      category: 'Baking Science',
      readTime: '8 min read',
      color: 'from-yellow-500 to-orange-500',
      url: '/baking-science/why-eggs-matter-in-baking'
    },
    {
      title: 'Why Salt Makes Food Taste Better',
      description: 'Salt isn\'t just a flavor — it\'s a bitterness suppressor, flavor amplifier, and chemistry catalyst. Here\'s the complete science behind the most important ingredient in cooking.',
      category: 'Baking Science',
      readTime: '8 min read',
      color: 'from-blue-600 to-slate-700',
      url: '/baking-science/why-salt-makes-food-taste-better'
    },
    {
      title: 'Why Recipes Fail',
      description: 'It\'s almost never the recipe. Here are the 10 universal reasons baking goes wrong — and the systematic way to diagnose and fix any failure.',
      category: 'Baking Science',
      readTime: '10 min read',
      color: 'from-rose-500 to-orange-600',
      url: '/baking-science/why-recipes-fail'
    },
];

/** Topic-gap and sauce library cards (same titles/URLs as long-form specs under `src/app/data/newScienceArticles/`). */
const SCIENCE_GAP_AND_SAUCE_ARTICLE_ROWS: ArticleCardBase[] = [
{
      title: "Why Bread Doesn't Rise",
      description: "Dead yeast, cold dough, salt clashes, weak gluten, and timing mistakes—ranked by how often they show up in home kitchens.",
      category: "Bread Science",
      readTime: "8 min read",
      color: "from-amber-500 to-yellow-600",
      url: "/bread-science/why-bread-doesnt-rise",
    },
    {
      title: "Why Bread Is Dense",
      description: "Dense crumb usually means under-development, under-proofing, too much flour, or a collapsed structure—not “bad luck.”",
      category: "Bread Science",
      readTime: "8 min read",
      color: "from-yellow-600 to-orange-500",
      url: "/bread-science/why-bread-is-dense",
    },
    {
      title: "Why Bread Is Gummy Inside",
      description: "Gelatinized starch needs heat and time to set; under-baking and cutting too soon are classic culprits.",
      category: "Bread Science",
      readTime: "7 min read",
      color: "from-orange-500 to-amber-700",
      url: "/bread-science/why-bread-is-gummy-inside",
    },
    {
      title: "Why Bread Collapses After Baking",
      description: "Structure buckles when gluten is over-extended, proofing overshoots, or the crust cannot hold internal pressure.",
      category: "Bread Science",
      readTime: "8 min read",
      color: "from-amber-500 to-yellow-600",
      url: "/bread-science/why-bread-collapses-after-baking",
    },
    {
      title: "Why Bread Is Dry",
      description: "Bake time, flour absorption, storage, and enrichment levels all steal moisture from crumb.",
      category: "Bread Science",
      readTime: "7 min read",
      color: "from-yellow-600 to-orange-500",
      url: "/bread-science/why-bread-is-dry",
    },
    {
      title: "Why Bread Is Too Chewy",
      description: "Chew comes from gluten network density, low moisture, and long mixing—dial each back for a softer bite.",
      category: "Bread Science",
      readTime: "7 min read",
      color: "from-orange-500 to-amber-700",
      url: "/bread-science/why-bread-is-too-chewy",
    },
    {
      title: "Why Bread Crust Is Too Hard",
      description: "Steam, sugar, oven heat, and bake time build crust thickness and hardness.",
      category: "Bread Science",
      readTime: "7 min read",
      color: "from-amber-500 to-yellow-600",
      url: "/bread-science/why-bread-crust-is-too-hard",
    },
    {
      title: "Why Bread Crust Is Too Soft",
      description: "Soft crust means the surface never dried and browned enough—or steam never left the microclimate.",
      category: "Bread Science",
      readTime: "7 min read",
      color: "from-yellow-600 to-orange-500",
      url: "/bread-science/why-bread-crust-is-too-soft",
    },
    {
      title: "Why Bread Burns on the Bottom",
      description: "Conductive heat from stone, thin pans, and oven floor hot spots chars the base first.",
      category: "Bread Science",
      readTime: "7 min read",
      color: "from-orange-500 to-amber-700",
      url: "/bread-science/why-bread-burns-on-the-bottom",
    },
    {
      title: "Why Bread Is Pale",
      description: "Maillard needs surface dryness, heat, and reducing sugars; steam and low sugar slow color.",
      category: "Bread Science",
      readTime: "7 min read",
      color: "from-amber-500 to-yellow-600",
      url: "/bread-science/why-bread-is-pale",
    },
    {
      title: "Why Dough Is Too Sticky",
      description: "Stickiness is usually hydration, weak gluten early in mixing, or flour absorption—not necessarily “too much water.”",
      category: "Bread Science",
      readTime: "7 min read",
      color: "from-yellow-600 to-orange-500",
      url: "/bread-science/why-dough-is-too-sticky",
    },
    {
      title: "Why Dough Won't Hold Shape",
      description: "Slack dough is about strength, proof state, and hydration relative to protein—not “bad yeast.”",
      category: "Bread Science",
      readTime: "8 min read",
      color: "from-orange-500 to-amber-700",
      url: "/bread-science/why-dough-wont-hold-shape",
    },
    {
      title: "Why Dough Springs Back When Shaping",
      description: "Elastic snap means gluten is tight—often under-relaxed or too strong for immediate shaping.",
      category: "Bread Science",
      readTime: "7 min read",
      color: "from-amber-500 to-yellow-600",
      url: "/bread-science/why-dough-springs-back-when-shaping",
    },
    {
      title: "Why Dough Rises Too Fast",
      description: "Heat, high yeast, sugar, and small dough mass accelerate fermentation—sometimes past flavor and structure.",
      category: "Bread Science",
      readTime: "7 min read",
      color: "from-yellow-600 to-orange-500",
      url: "/bread-science/why-dough-rises-too-fast",
    },
    {
      title: "Why Dough Rises Too Slow",
      description: "Cold, tired yeast, salt errors, and extreme sweet or rich doughs stretch timelines.",
      category: "Bread Science",
      readTime: "7 min read",
      color: "from-orange-500 to-amber-700",
      url: "/bread-science/why-dough-rises-too-slow",
    },
    {
      title: "Why Bread Needs Steam",
      description: "Steam delays crust set, improves oven spring, and influences gloss and ear formation.",
      category: "Bread Science",
      readTime: "8 min read",
      color: "from-amber-500 to-yellow-600",
      url: "/bread-science/why-bread-needs-steam",
    },
    {
      title: "Why Oven Spring Happens",
      description: "Gas expands, yeast races until heat kills it, and steam pressure inflates cells before the crumb sets.",
      category: "Bread Science",
      readTime: "8 min read",
      color: "from-yellow-600 to-orange-500",
      url: "/bread-science/why-oven-spring-happens",
    },
    {
      title: "Why Bread Needs Scoring",
      description: "Scores channel expansion so the crust tears predictably instead of randomly.",
      category: "Bread Science",
      readTime: "7 min read",
      color: "from-orange-500 to-amber-700",
      url: "/bread-science/why-bread-needs-scoring",
    },
    {
      title: "Bread Flour vs All-Purpose Flour",
      description: "Protein drives gluten potential; choose flour for the structure your bread needs.",
      category: "Bread Science",
      readTime: "8 min read",
      color: "from-amber-500 to-yellow-600",
      url: "/bread-science/bread-flour-vs-all-purpose-flour",
    },
    {
      title: "Why Hydration Matters in Bread",
      description: "Water enables gluten, dissolves salts and sugars, and sets the crumb openness you can achieve.",
      category: "Bread Science",
      readTime: "8 min read",
      color: "from-yellow-600 to-orange-500",
      url: "/bread-science/why-hydration-matters-in-bread",
    },
    {
      title: "Why Cookies Taste Too Sweet",
      description: "Sugar load, salt balance, browning, and acid all set perceived sweetness—not just cup measurements.",
      category: "Cookie Science",
      readTime: "7 min read",
      color: "from-yellow-500 to-amber-600",
      url: "/cookie-science/why-cookies-taste-too-sweet",
    },
    {
      title: "Why Cookies Spread in the Oven But Not Before",
      description: "Cold fat, flour hydration, and delayed structure set explain the oven-only spread phase.",
      category: "Cookie Science",
      readTime: "7 min read",
      color: "from-amber-500 to-orange-600",
      url: "/cookie-science/why-cookies-spread-in-oven-but-not-before",
    },
    {
      title: "Why Cookies Turn Out Different Each Batch",
      description: "Temperature paths, measurement error, and mixer variance swamp tiny “feel” differences.",
      category: "Cookie Science",
      readTime: "8 min read",
      color: "from-orange-500 to-red-500",
      url: "/cookie-science/why-cookies-turn-out-different-each-batch",
    },
    {
      title: "Why Chilling Cookie Dough Matters",
      description: "Solid fat, hydrated flour, and relaxed gluten change spread, thickness, and flavor.",
      category: "Cookie Science",
      readTime: "8 min read",
      color: "from-yellow-500 to-amber-600",
      url: "/cookie-science/why-chilling-cookie-dough-matters",
    },
    {
      title: "Why Cookies Stick Together",
      description: "Thermal mass, steam, and cooling phase fuse edges when spacing or timing fails.",
      category: "Cookie Science",
      readTime: "6 min read",
      color: "from-amber-500 to-orange-600",
      url: "/cookie-science/why-cookies-stick-together",
    },
    {
      title: "Why Pie Crust Cracks When Rolling",
      description: "Temperature, hydration, and gluten brittleness make dough chip instead of stretch.",
      category: "Pie Science",
      readTime: "7 min read",
      color: "from-amber-600 to-yellow-700",
      url: "/pie-science/why-pie-crust-cracks-when-rolling",
    },
    {
      title: "Why Pie Crust Falls Apart",
      description: "Not enough water, not enough cohesion, or too much fat weakens the matrix.",
      category: "Pie Science",
      readTime: "7 min read",
      color: "from-yellow-600 to-orange-600",
      url: "/pie-science/why-pie-crust-falls-apart",
    },
    {
      title: "Why Pie Filling Bubbles Over",
      description: "Steam, expansion, and under-set starch send filling over the rim during bake.",
      category: "Pie Science",
      readTime: "7 min read",
      color: "from-orange-500 to-amber-600",
      url: "/pie-science/why-pie-filling-bubbles-over",
    },
    {
      title: "Why Pie Crust Is Too Pale",
      description: "Egg wash, sugar, time, and temperature finish color; pale means one of them is missing.",
      category: "Pie Science",
      readTime: "7 min read",
      color: "from-amber-600 to-yellow-700",
      url: "/pie-science/why-pie-crust-is-too-pale",
    },
    {
      title: "Why Pie Crust Burns Before Filling Cooks",
      description: "Edges see more heat than centers; shield, lower temperature, and set filling faster.",
      category: "Pie Science",
      readTime: "7 min read",
      color: "from-yellow-600 to-orange-600",
      url: "/pie-science/why-pie-crust-burns-before-filling-cooks",
    },
    {
      title: "Why Cakes Stick to Pans Even When Greased",
      description: "Sugar caramelization, timing, pan material, and cooling bonds beat a thin grease film.",
      category: "Cake Science",
      readTime: "8 min read",
      color: "from-pink-500 to-purple-600",
      url: "/cake-science/why-cakes-stick-to-pans-even-when-greased",
    },
    {
      title: "Why Cakes Bake Unevenly",
      description: "Oven airflow, pan color, rack position, and batter depth create hot and cold zones.",
      category: "Cake Science",
      readTime: "7 min read",
      color: "from-purple-500 to-rose-600",
      url: "/cake-science/why-cakes-bake-unevenly",
    },
    {
      title: "Why Cakes Have a Wet Layer at the Bottom",
      description: "Sinking emulsions, sugar syrup pockets, and under-baked bases leave a gummy band.",
      category: "Cake Science",
      readTime: "8 min read",
      color: "from-rose-500 to-pink-600",
      url: "/cake-science/why-cakes-have-a-wet-layer-at-the-bottom",
    },
    {
      title: "Why Cakes Turn Out Flat",
      description: "Lost leavening, collapsed foam, or heavy batter limits vertical rise.",
      category: "Cake Science",
      readTime: "7 min read",
      color: "from-pink-500 to-purple-600",
      url: "/cake-science/why-cakes-turn-out-flat",
    },
    {
      title: "Why Cakes Taste Eggy",
      description: "Sulfur notes, imbalance, and under-browning read as “too much egg” even at correct counts.",
      category: "Cake Science",
      readTime: "7 min read",
      color: "from-purple-500 to-rose-600",
      url: "/cake-science/why-cakes-taste-eggy",
    },
    {
      title: "Why Cakes Are Too Sweet",
      description: "Frosting stacks on sweet crumb; salt and acid shrink perceived sweetness.",
      category: "Cake Science",
      readTime: "7 min read",
      color: "from-rose-500 to-pink-600",
      url: "/cake-science/why-cakes-are-too-sweet",
    },
    {
      title: "Why Cakes Crumble When Cut",
      description: "Dry crumb, weak structure, or wrong knife technique shreds instead of slicing.",
      category: "Cake Science",
      readTime: "7 min read",
      color: "from-pink-500 to-purple-600",
      url: "/cake-science/why-cakes-crumble-when-cut",
    },
    {
      title: "Why Cakes Stick to Knife When Cutting",
      description: "Gummy starch, tacky crumb, and frosting suction grab blades.",
      category: "Cake Science",
      readTime: "6 min read",
      color: "from-purple-500 to-rose-600",
      url: "/cake-science/why-cakes-stick-to-knife-when-cutting",
    },
    {
      title: "Why Cakes Dry Out After One Day",
      description: "Starch retrogradation and moisture migration to air or frosting steal tenderness.",
      category: "Cake Science",
      readTime: "8 min read",
      color: "from-rose-500 to-pink-600",
      url: "/cake-science/why-cakes-dry-out-after-one-day",
    },
    {
      title: "Why Cakes Sink Around the Edges",
      description: "Edges set fast while centers still move, or structural collapse follows uneven gas coalescence.",
      category: "Cake Science",
      readTime: "8 min read",
      color: "from-pink-500 to-purple-600",
      url: "/cake-science/why-cakes-sink-around-the-edges",
    },
    {
      title: "Why Coffee Tastes Hollow",
      description: "Low solubles, channeling, and stale beans produce empty mid-palate cups.",
      category: "Coffee Science",
      readTime: "8 min read",
      color: "from-amber-600 to-yellow-800",
      url: "/coffee-science/why-coffee-tastes-hollow",
    },
    {
      title: "Why Coffee Tastes Over-Extracted",
      description: "Dry bitterness, astringency, and hollow finish when too much solid dissolves.",
      category: "Coffee Science",
      readTime: "8 min read",
      color: "from-stone-700 to-amber-900",
      url: "/coffee-science/why-coffee-tastes-over-extracted",
    },
    {
      title: "Why Coffee Tastes Under-Extracted",
      description: "Sour, salty, and thin cups when the brew stops too early on the curve.",
      category: "Coffee Science",
      readTime: "8 min read",
      color: "from-stone-600 to-amber-800",
      url: "/coffee-science/why-coffee-tastes-under-extracted",
    },
    {
      title: "Why Coffee Strength vs Extraction Matters",
      description: "TDS and yield describe different axes; confusing them sends fixes in wrong directions.",
      category: "Coffee Science",
      readTime: "9 min read",
      color: "from-amber-600 to-yellow-800",
      url: "/coffee-science/why-coffee-strength-vs-extraction-matters",
    },
    {
      title: "Why Coffee Tastes Different Every Brew",
      description: "Grinder retention, water, bloom, and human variance swamp “the same recipe.”",
      category: "Coffee Science",
      readTime: "8 min read",
      color: "from-stone-700 to-amber-900",
      url: "/coffee-science/why-coffee-tastes-different-every-brew",
    },
    {
      title: "Why Ice Cream Is Too Hard",
      description: "Low sugar, low alcohol, high water, and deep-freeze temps drive rock-solid scoops.",
      category: "Ice Cream Science",
      readTime: "7 min read",
      color: "from-cyan-500 to-blue-600",
      url: "/ice-cream-science/why-ice-cream-is-too-hard",
    },
    {
      title: "Why Ice Cream Is Too Soft",
      description: "Too much sugar, alcohol, or warm freezers prevent proper firming.",
      category: "Ice Cream Science",
      readTime: "7 min read",
      color: "from-blue-400 to-cyan-500",
      url: "/ice-cream-science/why-ice-cream-is-too-soft",
    },
    {
      title: "Why Ice Cream Tastes Icy",
      description: "Large crystals and wet air pockets read as crunch and cold water on the tongue.",
      category: "Ice Cream Science",
      readTime: "8 min read",
      color: "from-sky-500 to-blue-600",
      url: "/ice-cream-science/why-ice-cream-tastes-icy",
    },
    {
      title: "Why Ice Cream Lacks Flavor",
      description: "Cold suppresses sweetness and aroma; fat mutes; dilution hides extracts.",
      category: "Ice Cream Science",
      readTime: "7 min read",
      color: "from-cyan-500 to-blue-600",
      url: "/ice-cream-science/why-ice-cream-lacks-flavor",
    },
    {
      title: "Why Ice Cream Separates",
      description: "Butterfat churn-out, unstable emulsions, and thaw-refreeze break smoothness.",
      category: "Ice Cream Science",
      readTime: "8 min read",
      color: "from-blue-400 to-cyan-500",
      url: "/ice-cream-science/why-ice-cream-separates",
    },
    {
      title: "Temperature: The Silent Killer of Sauces",
      description: "Why heat control matters more than ingredient lists for stable, glossy sauces.",
      category: "Sauce Science",
      readTime: "9 min read",
      color: "from-orange-600 to-red-600",
      url: "/sauce-science/temperature-silent-killer-sauces",
    },
    {
      title: "Order of Operations: Timing Changes Everything",
      description: "Same ingredients, different sequence, completely different sauce.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-rose-600 to-orange-600",
      url: "/sauce-science/order-of-operations-sauce-timing",
    },
    {
      title: "Salt Is an Amplifier, Not Just “Salty”",
      description: "Why under-salted sauces read flat even when acid and fat are present.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-amber-600 to-rose-600",
      url: "/sauce-science/salt-as-amplifier-not-only-salty",
    },
    {
      title: "Hidden Water Content: The Dilution Variable",
      description: "Why sauces go thin when proteins and vegetables release unexpected moisture.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-orange-600 to-red-600",
      url: "/sauce-science/water-content-hidden-dilution",
    },
    {
      title: "Emulsion vs Non-Emulsion: Two Sauce Worlds",
      description: "How to diagnose oily separation vs normal concentration behavior.",
      category: "Sauce Science",
      readTime: "9 min read",
      color: "from-rose-600 to-orange-600",
      url: "/sauce-science/emulsion-vs-non-emulsion-sauces",
    },
    {
      title: "Reduction Curve: Flavor Is Not Linear",
      description: "Why late-stage reduction can rapidly overshoot saltiness and bitterness.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-amber-600 to-rose-600",
      url: "/sauce-science/reduction-curve-nonlinear-flavor",
    },
    {
      title: "The One Change Rule for Sauce Debugging",
      description: "How to stop over-correcting and make repeatable improvements.",
      category: "Sauce Science",
      readTime: "7 min read",
      color: "from-orange-600 to-red-600",
      url: "/sauce-science/one-change-rule-sauce-debugging",
    },
    {
      title: "Umami: The Missing Fifth Axis",
      description: "Balanced sauces can still feel empty without savory depth compounds.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-rose-600 to-orange-600",
      url: "/sauce-science/umami-axis-beyond-salt-acid-fat-sweet",
    },
    {
      title: "Brown Gravy (Stock-Based Roux): Recipe & Balance Guide",
      description: "Roux-thickened gravy from drippings or butter + flour + stock — how to read salt vs fat and avoid a thin finish.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-amber-600 to-rose-600",
      url: "/sauce-science/brown-gravy-stock-based",
    },
    {
      title: "White Gravy (Southern Cream Gravy): Recipe & Balance Guide",
      description: "Roux + milk, aggressive pepper — dairy-forward comfort sauce for biscuits and fried chicken.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-orange-600 to-red-600",
      url: "/sauce-science/white-gravy-southern",
    },
    {
      title: "Lemon Pan Sauce: Recipe & Balance Guide",
      description: "Stock + lemon + butter finish — bright acid with emulsified fat.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-rose-600 to-orange-600",
      url: "/sauce-science/lemon-pan-sauce",
    },
    {
      title: "Mustard Pan Sauce: Recipe & Balance Guide",
      description: "Dijon + cream + stock + butter — emulsifier-assisted pan sauce with savory depth.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-amber-600 to-rose-600",
      url: "/sauce-science/mustard-pan-sauce",
    },
    {
      title: "Mushroom Cream Sauce: Recipe & Balance Guide",
      description: "Cream + butter + mushrooms — umami-forward cream sauce for pasta and chicken.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-orange-600 to-red-600",
      url: "/sauce-science/mushroom-cream-sauce",
    },
    {
      title: "Sweet Tomato Sauce: Recipe & Balance Guide",
      description: "Tomato + butter + extra sugar balance — kid-friendly marinara-style sauce.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-rose-600 to-orange-600",
      url: "/sauce-science/sweet-tomato-sauce",
    },
    {
      title: "Spicy Tomato Sauce: Recipe & Balance Guide",
      description: "Tomato + chili + vinegar — heat and acid in the same build.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-amber-600 to-rose-600",
      url: "/sauce-science/spicy-tomato-sauce",
    },
    {
      title: "Balsamic Glaze: Recipe & Balance Guide",
      description: "Vinegar-forward reduction — intense, syrupy, easy to overshoot.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-orange-600 to-red-600",
      url: "/sauce-science/balsamic-glaze",
    },
    {
      title: "Stock Reduction (Demi-Style): Recipe & Balance Guide",
      description: "Long-simmered stock until glossy — foundation sauce, not a quick weeknight splash.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-rose-600 to-orange-600",
      url: "/sauce-science/stock-reduction-demi",
    },
    {
      title: "Teriyaki Glaze: Recipe & Balance Guide",
      description: "Soy + sugar + mirin — high-umami, sweet-salty glaze.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-amber-600 to-rose-600",
      url: "/sauce-science/teriyaki-glaze",
    },
    {
      title: "Garlic Soy Sauce: Recipe & Balance Guide",
      description: "Soy + garlic + oil — fast umami condiment and finishing drizzle.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-orange-600 to-red-600",
      url: "/sauce-science/garlic-soy-sauce",
    },
    {
      title: "Nacho Cheese Sauce: Recipe & Balance Guide",
      description: "Cheddar + milk + spices — starch-stabilized cheese systems for dip and pour.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-rose-600 to-orange-600",
      url: "/sauce-science/nacho-cheese-sauce",
    },
    {
      title: "Mornay Sauce: Recipe & Balance Guide",
      description: "Béchamel + Gruyère + mustard — classic cheese sauce for vegetables and gratins.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-amber-600 to-rose-600",
      url: "/sauce-science/mornay-sauce",
    },
    {
      title: "Basil Pesto: Recipe & Balance Guide",
      description: "Oil + basil + nuts + cheese — emulsion-like herb sauce with salt from cheese.",
      category: "Sauce Science",
      readTime: "8 min read",
      color: "from-orange-600 to-red-600",
      url: "/sauce-science/basil-pesto",
    },
];

function withSensei(row: ArticleCardBase): ArticleLibraryCard {
  return { ...row, senseiPei: senseiPeiForArticle(row.category, row.url) };
}

/** Every /articles card in one array. */
export const ALL_ARTICLES_CATALOG: ArticleLibraryCard[] = [
  ...FOUNDATIONAL_ARTICLE_ROWS.map(withSensei),
  ...SCIENCE_GAP_AND_SAUCE_ARTICLE_ROWS.map(withSensei),
  ...PHASE2_GAP_ARTICLE_CATALOG_ROWS.map(withSensei),
];

export const FIX_IT_URLS = new Set<string>([
  '/baking-science/how-to-use-fix-my-recipe',
  '/baking-science/fix-recipes-one-variable-at-a-time',
  '/baking-science/why-recipes-fail',
  '/cookie-science/how-to-debug-cookie-batch-issues',
  '/cake-science/how-to-debug-cake-problems',
  '/coffee-science/how-to-debug-your-coffee',
]);

export const TAB_IDS = ARTICLE_LIBRARY_TAB_IDS;
export type TabId = ArticleLibraryTabId;

export function parseTabParam(value: string | null): TabId {
  if (value && (TAB_IDS as readonly string[]).includes(value)) return value as TabId;
  return 'fix-it';
}

export const ARTICLE_TABS: { id: TabId; label: string; category: 'FIX_IT' | 'ALL' | string }[] = [
  { id: 'fix-it', label: 'Fix it', category: 'FIX_IT' },
  { id: 'cookies', label: 'Cookies', category: 'Cookie Science' },
  { id: 'cakes', label: 'Cakes', category: 'Cake Science' },
  { id: 'bread', label: 'Bread', category: 'Bread Science' },
  { id: 'pies', label: 'Pies', category: 'Pie Science' },
  { id: 'ice-cream', label: 'Ice cream', category: 'Ice Cream Science' },
  { id: 'coffee', label: 'Coffee', category: 'Coffee Science' },
  { id: 'sauces', label: 'Sauces', category: 'Sauce Science' },
  { id: 'baking', label: 'Baking science', category: 'Baking Science' },
  { id: 'all', label: 'All', category: 'ALL' },
];

export function getAllArticleCards(): ArticleLibraryCard[] {
  return ALL_ARTICLES_CATALOG;
}
