import { ArrowLeft, BookOpen, Search, Wrench } from 'lucide-react';
import { Link, useSearchParams } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useMemo, useState } from 'react';
import { trackArticleClick, trackCTAClick, trackClicksToFixRecipe, trackToolStart } from '../utils/analytics';
import { ALL_NEW_SCIENCE_ARTICLES } from '../data/newScienceArticles';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const NEW_ARTICLE_CARD_COLORS: Record<ScienceArticleSpec['categoryLabel'], [string, string, string]> = {
  'Bread Science': ['from-amber-500 to-yellow-600', 'from-yellow-600 to-orange-500', 'from-orange-500 to-amber-700'],
  'Cookie Science': ['from-amber-500 to-orange-600', 'from-orange-500 to-red-500', 'from-yellow-500 to-amber-600'],
  'Cake Science': ['from-pink-500 to-purple-600', 'from-purple-500 to-rose-600', 'from-rose-500 to-pink-600'],
  'Pie Science': ['from-orange-500 to-amber-600', 'from-amber-600 to-yellow-700', 'from-yellow-600 to-orange-600'],
  'Ice Cream Science': ['from-cyan-500 to-blue-600', 'from-blue-400 to-cyan-500', 'from-sky-500 to-blue-600'],
  'Coffee Science': ['from-stone-600 to-amber-800', 'from-amber-600 to-yellow-800', 'from-stone-700 to-amber-900'],
};

function cardsFromNewSpecs() {
  return ALL_NEW_SCIENCE_ARTICLES.map((spec, i) => {
    const palette = NEW_ARTICLE_CARD_COLORS[spec.categoryLabel];
    return {
      title: spec.title,
      description: spec.subtitle,
      category: spec.categoryLabel,
      readTime: spec.readTime,
      color: palette[i % palette.length],
      url: `/${spec.segment}/${spec.slug}`,
    };
  });
}

const FIX_IT_URLS = new Set<string>([
  '/baking-science/how-to-use-fix-my-recipe',
  '/baking-science/fix-recipes-one-variable-at-a-time',
  '/baking-science/why-recipes-fail',
  '/cookie-science/how-to-debug-cookie-batch-issues',
  '/cake-science/how-to-debug-cake-problems',
  '/coffee-science/how-to-debug-your-coffee',
]);

const TAB_IDS = ['fix-it', 'cookies', 'bread', 'cakes', 'pies', 'ice-cream', 'coffee', 'baking', 'all'] as const;
type TabId = (typeof TAB_IDS)[number];

function parseTabParam(value: string | null): TabId {
  if (value && (TAB_IDS as readonly string[]).includes(value)) return value as TabId;
  return 'fix-it';
}

const ARTICLE_TABS: { id: TabId; label: string; category: 'FIX_IT' | 'ALL' | string }[] = [
  { id: 'fix-it', label: 'Fix it', category: 'FIX_IT' },
  { id: 'cookies', label: 'Cookies', category: 'Cookie Science' },
  { id: 'cakes', label: 'Cakes', category: 'Cake Science' },
  { id: 'bread', label: 'Bread', category: 'Bread Science' },
  { id: 'pies', label: 'Pies', category: 'Pie Science' },
  { id: 'ice-cream', label: 'Ice cream', category: 'Ice Cream Science' },
  { id: 'coffee', label: 'Coffee', category: 'Coffee Science' },
  { id: 'baking', label: 'Baking science', category: 'Baking Science' },
  { id: 'all', label: 'All', category: 'ALL' },
];

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  const activeTab = parseTabParam(searchParams.get('tab'));

  const setActiveTab = (id: TabId) => {
    setSearchParams({ tab: id }, { replace: true });
    trackCTAClick('articles_tab', id, `/articles?tab=${id}`);
  };

  const handleArticleClick = (articleTitle: string, source: string, articleUrl: string) => {
    trackArticleClick(articleTitle);
    trackCTAClick(source, 'read_article', articleUrl);
  };

  const handleToolCtaClick = (location: string) => {
    trackCTAClick(location, 'try_cookie_sensei', 'https://cookiesensei.senseifood.com');
    trackToolStart('CookieSensei', location);
  };

  const articles = [
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
    ...cardsFromNewSpecs(),
  ];

  const visibleArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      return articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.url.toLowerCase().includes(q.replace(/\s+/g, '-'))
      );
    }
    if (activeTab === 'fix-it') return articles.filter((a) => FIX_IT_URLS.has(a.url));
    if (activeTab === 'all') return articles;
    const tab = ARTICLE_TABS.find((t) => t.id === activeTab);
    const cat = tab?.category;
    if (!cat || cat === 'FIX_IT' || cat === 'ALL') return articles;
    return articles.filter((a) => a.category === cat);
  }, [activeTab, searchQuery]);

  const handleFixRecipeOpen = () => {
    trackClicksToFixRecipe('articles_header');
    trackCTAClick('articles_header', 'fix_my_recipe', '/fix-recipe');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm mb-6">
            <BookOpen className="w-4 h-4" />
            Science Library
          </div>
          <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Food Science Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Use the tabs to jump straight to a topic—start with <strong>Fix it</strong> if something just went wrong, then
            open the rule-based debugger to see what to try next.
          </p>

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border-2 border-purple-300 bg-gradient-to-br from-purple-600 via-purple-600 to-pink-600 p-6 text-white shadow-lg">
              <div className="flex items-center gap-2 text-white/90 text-sm font-semibold uppercase tracking-wide mb-2">
                <Wrench className="w-4 h-4" aria-hidden />
                Fix My Recipe
              </div>
              <p className="text-white/95 text-sm leading-relaxed mb-4">
                Pick a problem, add optional gram weights, get clear causes and levers—no AI, no account.
              </p>
              <Link
                to="/fix-recipe"
                onClick={handleFixRecipeOpen}
                className="inline-flex items-center justify-center rounded-xl bg-white text-purple-800 font-bold px-6 py-3 text-sm hover:shadow-lg transition-shadow"
              >
                Open Fix My Recipe →
              </Link>
            </div>
            <div className="rounded-2xl border-2 border-cyan-200 bg-white/90 backdrop-blur-sm p-6 shadow-md">
              <p className="text-sm text-muted-foreground mb-4">
                Want numeric prediction for cookies? CookieSensei pairs well with these guides.
              </p>
              <a
                href="https://cookiesensei.senseifood.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleToolCtaClick('articles_header')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-sm"
              >
                Try CookieSensei
              </a>
            </div>
          </div>
        </header>

        {/* Search */}
        <div className="relative max-w-2xl mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          <input
            type="search"
            placeholder="Search all articles by title, topic, or keyword…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors text-base shadow-sm"
            aria-label="Search articles"
          />
          {searchQuery.trim() ? (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-purple-600 font-medium hover:underline"
            >
              Clear
            </button>
          ) : null}
        </div>
        {searchQuery.trim() ? (
          <p className="text-sm text-muted-foreground mb-4">
            Searching all articles. Tabs below are ignored until you clear the search.
          </p>
        ) : null}

        {/* Sticky tabs */}
        <div className="sticky top-[4.5rem] z-30 -mx-6 px-6 py-3 mb-8 bg-gradient-to-b from-purple-50/98 via-purple-50/95 to-purple-50/90 backdrop-blur-md border-y border-purple-200/80 shadow-sm">
          <p className="text-xs font-medium text-purple-800/80 uppercase tracking-wide mb-2 md:hidden">Categories</p>
          <div className="flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory">
            {ARTICLE_TABS.map((tab) => {
              const isActive = !searchQuery.trim() && activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`snap-start shrink-0 px-4 py-2.5 rounded-full text-sm font-semibold transition-all border-2 ${
                    isActive
                      ? tab.id === 'fix-it'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent shadow-md'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent shadow-md'
                      : 'bg-white text-gray-700 border-purple-100 hover:border-purple-300 hover:shadow-sm'
                  }`}
                >
                  {tab.id === 'fix-it' ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5" aria-hidden />
                      {tab.label}
                    </span>
                  ) : (
                    tab.label
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab title (no search) */}
        {!searchQuery.trim() ? (
          <div className="mb-6 flex flex-wrap items-baseline gap-2">
            <h2 className="text-2xl font-semibold text-foreground">
              {activeTab === 'fix-it'
                ? 'Fix it — guides & debugging'
                : activeTab === 'all'
                  ? 'All articles'
                  : ARTICLE_TABS.find((t) => t.id === activeTab)?.label}
            </h2>
            <span className="text-muted-foreground">
              ({visibleArticles.length} {visibleArticles.length === 1 ? 'article' : 'articles'})
            </span>
          </div>
        ) : (
          <div className="mb-6 text-muted-foreground">
            {visibleArticles.length} {visibleArticles.length === 1 ? 'result' : 'results'} for &quot;{searchQuery.trim()}&quot;
          </div>
        )}

        {/* Article grid */}
        {visibleArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {visibleArticles.map((article) => (
              <Link
                key={article.url}
                to={article.url}
                onClick={() =>
                  handleArticleClick(
                    article.title,
                    searchQuery.trim() ? 'articles_search_grid' : 'articles_tab_grid',
                    article.url
                  )
                }
                className="bg-white border-2 border-transparent rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:border-purple-200 transition-all group cursor-pointer hover:scale-[1.02] flex flex-col h-full min-h-[200px]"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-3">
                  <span className={`px-3 py-1 bg-gradient-to-r ${article.color} text-white rounded-full font-medium`}>
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                  {FIX_IT_URLS.has(article.url) ? (
                    <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 font-medium">Fix it</span>
                  ) : null}
                </div>
                <h3 className={`text-xl md:text-2xl mb-3 bg-gradient-to-r ${article.color} bg-clip-text text-transparent`}>
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">{article.description}</p>
              </Link>
            ))}
          </div>
        ) : null}

        {/* Empty State */}
        {visibleArticles.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-4">Try another search or switch tabs.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="text-purple-600 font-semibold hover:underline"
            >
              Show all articles
            </button>
          </div>
        ) : null}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-10 text-white mt-16 shadow-2xl">
          <h3 className="text-3xl mb-4">Want More Food Science?</h3>
          <p className="text-white/90 mb-6 text-lg max-w-2xl">
            We're constantly adding new articles covering cookies, cakes, pies, ice cream, coffee, and more. Bookmark this page and check back regularly!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/fix-recipe"
              onClick={() => {
                trackClicksToFixRecipe('articles_footer');
                trackCTAClick('articles_footer', 'fix_my_recipe', '/fix-recipe');
              }}
              className="inline-block bg-white text-purple-700 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-white/80"
            >
              Fix My Recipe →
            </Link>
            <Link 
              to="/"
              className="inline-block bg-white/15 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/25 transition-all duration-300 hover:-translate-y-1 border-2 border-white/40"
            >
              Back to Home
            </Link>
            <a 
              href="https://cookiesensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleToolCtaClick('articles_footer')}
              className="inline-block bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-white"
            >
              Try Our Tools →
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
