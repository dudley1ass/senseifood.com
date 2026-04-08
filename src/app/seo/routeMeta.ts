/**
 * Per-route title, description, canonical, and JSON-LD.
 *
 * Hand-tuned titles/descriptions for high-traffic paths live in SEO_OVERRIDES below; everything
 * else uses the centralized slug/category rules in computeRouteSeo.
 *
 * --- Post-deploy & SEO ops (this repo = hub only) ---
 *
 * Google Search Console (one property for https://senseifood.com is enough to start):
 * - After each deploy: URL Inspection → enter live URL → Test live URL → confirm HTML shows
 *   expected <title> and meta description (prerendered pages).
 * - Spot-check /, /articles, and a few article URLs; fix Coverage issues before chasing Lighthouse.
 *
 * Tool repos (CookieSensei, etc.): add SSG/prerender only if those SPAs must rank in search;
 * many teams prioritize the hub + articles first.
 *
 * beansensei.com (apex) vs beansensei.senseifood.com: if the apex domain exists and duplicates
 * the subdomain, configure a 301 at the DNS/registrar or host (e.g. Render redirect rules) to
 * your chosen canonical—not in this static bundle unless that domain is served from the same host
 * as senseifood.com (see public/_redirects for same-origin redirects only).
 */

export const SITE_URL = 'https://senseifood.com';
export const SITE_NAME = 'SenseiFood';

const SMALL_WORDS = new Set([
  'a',
  'an',
  'the',
  'and',
  'or',
  'but',
  'in',
  'on',
  'at',
  'to',
  'for',
  'of',
  'as',
  'by',
  'is',
  'it',
]);

/** Path segment → display category + keyword for descriptions */
const CATEGORY_SEGMENT: Record<string, { label: string; keyword: string }> = {
  'cookie-science': { label: 'Cookie Science', keyword: 'cookies' },
  'cake-science': { label: 'Cake Science', keyword: 'cakes' },
  'bread-science': { label: 'Bread Science', keyword: 'bread' },
  'pie-science': { label: 'Pie Science', keyword: 'pies' },
  'ice-cream-science': { label: 'Ice Cream Science', keyword: 'ice cream' },
  'coffee-science': { label: 'Coffee Science', keyword: 'coffee' },
  'baking-science': { label: 'Baking Science', keyword: 'baking' },
};

export type RouteSeo = {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: Record<string, unknown>;
};

/** Optional title/description overrides for top URLs (paths must match normalizePath). */
type SeoOverride = Partial<Pick<RouteSeo, 'title' | 'description'>>;

const SEO_OVERRIDES: Record<string, SeoOverride> = {
  '/': {
    title: 'SenseiFood — food science tools, articles & free Sensei apps',
    description:
      'Free Sensei tools and articles: fix cookies, cakes, pie, ice cream, and coffee using real food science. Pick a topic, learn the why, then dial in recipes—no signup.',
  },
  '/articles': {
    title: 'Food science articles — baking, coffee & more | SenseiFood',
    description:
      'Readable deep dives on spread, extraction, rise, texture, and common failures. Read the science on SenseiFood, then use our free tools to apply it in your kitchen.',
  },
  '/cookie-science/why-cookies-spread': {
    title: 'Why cookies spread — butter, sugar, chill | SenseiFood',
    description:
      'Fat melts before the dough structure sets, so cookies spread—sugar, leavening, and flour still matter. Chill dough, tweak sugars, control butter temp.',
  },
  '/cookie-science/brown-sugar-vs-white-sugar': {
    title: 'Brown sugar vs white sugar in cookies | SenseiFood',
    description:
      'Brown vs white sugar in cookies: moisture, spread, chew, browning, and flavor differences. Choose ratios based on the texture and structure you want.',
  },
  '/cake-science/why-cakes-collapse': {
    title: 'Why cakes collapse: structure, steam, and timing',
    description:
      'Cakes collapse when structure sets too late or gas escapes too fast. Learn key causes—mixing, leavening, oven temp, and doneness checks—with practical fixes.',
  },
  '/ice-cream-science/why-ice-cream-gets-icy': {
    title: 'Why ice cream gets icy: crystals, sugar, storage',
    description:
      'Ice cream gets icy when water crystallizes from poor solids balance or warm storage cycles. Fix texture with sugar balance, stabilizers, and faster hardening.',
  },
  '/coffee-science/coffee-extraction-science': {
    title: 'Coffee extraction: balance strength & yield | SenseiFood',
    description:
      'How grind, dose, time, and temperature control extraction and flavor. Learn under- vs over-extracted coffee and how to adjust your brew for balance.',
  },
  '/coffee-science/why-coffee-tastes-bitter': {
    title: 'Why coffee tastes bitter: extraction and roast',
    description:
      'Bitter coffee usually means over-extraction, dark roast intensity, or high brew temp. Adjust grind, ratio, and contact time to bring back sweetness and balance.',
  },
  '/bread-science/why-bread-rises': {
    title: 'Why bread rises: yeast, gluten & trapped gas | SenseiFood',
    description:
      'How yeast produces CO₂, how gluten traps gas, and what makes a good rise vs a dense loaf. Practical cues for proofing, temperature, and structure.',
  },
  '/pie-science/why-pie-crust-is-flaky': {
    title: 'Why pie crust gets flaky: fat layers and steam',
    description:
      'Flaky crust comes from solid fat layers that melt into steam pockets in the oven. Learn mixing, lamination, and temperature control for tender, crisp layers.',
  },
};

function applySeoOverrides(path: string, seo: RouteSeo): RouteSeo {
  const o = SEO_OVERRIDES[path];
  if (!o) return seo;

  const title = o.title != null ? ensureTitleBand(o.title) : seo.title;
  const description = o.description != null ? ensureDescriptionBand(o.description) : seo.description;
  const merged: RouteSeo = { ...seo, title, description };

  if (merged.jsonLd && typeof merged.jsonLd === 'object' && merged.jsonLd['@type'] === 'Article') {
    const headline = title.split(/\s*\|\s*/)[0].trim();
    merged.jsonLd = {
      ...merged.jsonLd,
      headline,
      description,
    };
  }
  if (merged.jsonLd && typeof merged.jsonLd === 'object' && merged.jsonLd['@type'] === 'WebSite') {
    merged.jsonLd = { ...merged.jsonLd, description };
  }

  return merged;
}

function clampText(text: string, max: number): string {
  const t = text.trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  const base = (lastSpace > max * 0.5 ? cut.slice(0, lastSpace) : cut).trimEnd();
  return `${base}…`;
}

function ensureTitleBand(title: string, min = 45, max = 60): string {
  let t = title.trim();
  if (t.length > max) t = clampText(t, max);
  if (t.length < min && !t.includes('|')) {
    t = `${t} | ${SITE_NAME}`;
    if (t.length > max) t = clampText(t, max);
  }
  return t;
}

function ensureDescriptionBand(description: string, min = 120, max = 155): string {
  let d = description.trim();
  if (d.length > max) d = clampText(d, max);
  if (d.length < min) {
    d = `${d} Science-based guides and free tools on ${SITE_NAME}.`;
    if (d.length > max) d = clampText(d, max);
  }
  return d;
}

/** Turn URL slug into a readable headline (e.g. why-cookies-spread → Why Cookies Spread) */
export function slugToArticleTitle(slug: string): string {
  return slug
    .split('-')
    .map((word, i) => {
      const lower = word.toLowerCase();
      if (lower === 'vs') return 'vs';
      if (i > 0 && SMALL_WORDS.has(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(' ');
}

function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed || '/';
}

function articleJsonLd(params: {
  headline: string;
  description: string;
  canonical: string;
  categoryLabel: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.headline,
    description: params.description,
    url: params.canonical,
    articleSection: params.categoryLabel,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': params.canonical,
    },
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

function websiteJsonLd(description: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description,
  };
}

function computeRouteSeo(path: string): RouteSeo {
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;

  if (path === '/') {
    const title = ensureTitleBand(
      `What to Make Today — Food Science Tools | ${SITE_NAME}`
    );
    const description = ensureDescriptionBand(
      'Pick baking, coffee, or ice cream—then open free Sensei tools. Learn why recipes work and fix spread, texture, extraction, and more. No signup.'
    );
    return {
      title,
      description,
      canonical: `${SITE_URL}/`,
      jsonLd: websiteJsonLd(description),
    };
  }

  if (path === '/articles') {
    const title = ensureTitleBand(`Food Science Articles — Learn the Why | ${SITE_NAME}`);
    const description = ensureDescriptionBand(
      'Deep dives on cookies, cakes, coffee, ice cream, pie, and baking chemistry. Read the science, then apply it with Sensei tools.'
    );
    return {
      title,
      description,
      canonical: `${SITE_URL}/articles`,
    };
  }

  const segments = path.split('/').filter(Boolean);
  if (segments.length === 2) {
    const [segment, slug] = segments;
    const cat = CATEGORY_SEGMENT[segment];
    const headline = slugToArticleTitle(slug);
    const keyword = cat?.keyword ?? 'recipes';
    const categoryLabel = cat?.label ?? 'Food Science';

    let title = `${headline} | ${SITE_NAME}`;
    title = ensureTitleBand(title);

    const description = ensureDescriptionBand(
      `${headline}: causes, fixes, and food science for better ${keyword}. Free guide from ${SITE_NAME}.`
    );

    return {
      title,
      description,
      canonical,
      jsonLd: articleJsonLd({
        headline,
        description,
        canonical,
        categoryLabel,
      }),
    };
  }

  const fallbackTitle = ensureTitleBand(`${SITE_NAME} — Food science tools & articles`);
  const fallbackDesc = ensureDescriptionBand(
    `${SITE_NAME} helps you fix and design recipes using food science—cookies, cakes, pie, ice cream, and coffee.`
  );
  return {
    title: fallbackTitle,
    description: fallbackDesc,
    canonical,
  };
}

export function getRouteSeo(pathname: string): RouteSeo {
  const path = normalizePath(pathname);
  return applySeoOverrides(path, computeRouteSeo(path));
}
