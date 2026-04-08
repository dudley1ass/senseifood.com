import { getRouteSeo } from './routeMeta';

function escAttr(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Static <head> fragment for build-time prerender (matches DocumentMeta fields).
 */
export function getStaticHeadMarkupForPath(pathname: string): string {
  const seo = getRouteSeo(pathname);
  const normalized = pathname.replace(/\/$/, '') || '/';
  const ogType =
    normalized === '/' || normalized === '/articles' ? 'website' : 'article';

  const lines = [
    `<title>${escAttr(seo.title)}</title>`,
    `<meta name="description" content="${escAttr(seo.description)}" />`,
    `<link rel="canonical" href="${escAttr(seo.canonical)}" />`,
    `<meta property="og:title" content="${escAttr(seo.title)}" />`,
    `<meta property="og:description" content="${escAttr(seo.description)}" />`,
    `<meta property="og:url" content="${escAttr(seo.canonical)}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:site_name" content="SenseiFood" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${escAttr(seo.title)}" />`,
    `<meta name="twitter:description" content="${escAttr(seo.description)}" />`,
  ];

  if (seo.jsonLd) {
    lines.push(
      `<script type="application/ld+json">${JSON.stringify(seo.jsonLd).replace(/</g, '\\u003c')}</script>`
    );
  }

  return lines.join('\n    ');
}
