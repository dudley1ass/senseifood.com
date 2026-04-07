import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';
import { getRouteSeo } from '../seo/routeMeta';

/**
 * React Router–aware <title>, meta description, canonical, Open Graph, and JSON-LD.
 */
export function DocumentMeta() {
  const { pathname } = useLocation();
  const seo = getRouteSeo(pathname);
  const normalized = pathname.replace(/\/$/, '') || '/';
  const ogType =
    normalized === '/' || normalized === '/articles' ? 'website' : 'article';

  return (
    <Helmet prioritizeSeoTags>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.canonical} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="SenseiFood" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />

      {seo.jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(seo.jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
