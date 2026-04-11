import type { ScienceArticleSpec } from '../scienceArticleTypes';
import type { ArticleEnrichment } from './articleEnrichmentTypes';
import { CAKE_ENRICHMENTS } from './enrichments/cakeEnrichments';
import { BREAD_ENRICHMENTS } from './enrichments/breadEnrichments';
import { COOKIE_PIE_ENRICHMENTS } from './enrichments/cookiePieEnrichments';
import { COFFEE_ICE_ENRICHMENTS } from './enrichments/coffeeIceEnrichments';

function mergeMaps(): Map<string, ArticleEnrichment> {
  const m = new Map<string, ArticleEnrichment>();
  for (const part of [CAKE_ENRICHMENTS, BREAD_ENRICHMENTS, COOKIE_PIE_ENRICHMENTS, COFFEE_ICE_ENRICHMENTS]) {
    for (const [slug, val] of Object.entries(part)) {
      m.set(slug, val);
    }
  }
  return m;
}

const ENRICH = mergeMaps();

export function applyEnrichments(specs: ScienceArticleSpec[]): ScienceArticleSpec[] {
  return specs.map((spec) => {
    const add = ENRICH.get(spec.slug);
    if (!add) return spec;
    return {
      ...spec,
      intro: `${spec.intro} ${add.introAppend}`.trim(),
      sections: [...spec.sections, ...add.sections],
      faqs: [...(spec.faqs ?? []), ...(add.faqs ?? [])],
    };
  });
}
