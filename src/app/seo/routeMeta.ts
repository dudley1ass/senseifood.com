/**
 * Per-route title, description, canonical, and JSON-LD.
 *
 * GSC checklist (manual — run in Google Search Console):
 * - URL Inspection → live URL → "View crawled page" for /, /articles, and 2–3 articles.
 * - Compare indexed vs not indexed; fix coverage errors before chasing Lighthouse.
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

export function getRouteSeo(pathname: string): RouteSeo {
  const path = normalizePath(pathname);
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
