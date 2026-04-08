import type { RecipeCategory } from './types';

const SEGMENT_TO_CATEGORY: Record<string, RecipeCategory> = {
  'cookie-science': 'cookie',
  'cake-science': 'cake',
  'bread-science': 'bread',
  'pie-science': 'pie',
  'ice-cream-science': 'iceCream',
  'coffee-science': 'coffee',
  'baking-science': 'baking',
};

function cookieSlugToProblem(slug: string): string {
  if (slug.includes('how-to-debug')) return 'general';
  if (
    slug.includes('spread-too-much') ||
    slug === 'why-cookies-spread' ||
    slug.includes('flatten') ||
    slug.includes('spread-unevenly')
  ) {
    return 'spreads-too-much';
  }
  if (slug.includes('dont-spread') || slug.includes('stay-thick')) return 'wont-spread';
  if (slug.includes('hard') || slug.includes('dry')) return 'too-hard';
  if (slug.includes('chewy')) return 'too-chewy';
  if (slug.includes('crispy') || slug.includes('crisp')) return 'too-crispy';
  if (slug.includes('burn') && slug.includes('bottom')) return 'burn-bottom';
  if (slug.includes('cakey')) return 'cakey';
  if (slug.includes('rise-then-fall')) return 'rise-then-fall';
  if (slug.includes('oily')) return 'general';
  if (slug.includes('bitter') || slug.includes('bland')) return 'general';
  return 'general';
}

function cakeSlugToProblem(slug: string): string {
  if (slug.includes('how-to-debug')) return 'general';
  if (slug.includes('collapse') || slug.includes('fall-after')) return 'collapse';
  if (slug.includes('sink')) return 'sink';
  if (slug.includes('dense')) return 'too-dense';
  if (slug.includes('dry')) return 'dry';
  if (slug.includes('dome') || slug.includes('crack')) return 'general';
  return 'general';
}

function coffeeSlugToProblem(slug: string): string {
  if (slug.includes('how-to-debug')) return 'extraction-balance';
  if (slug.includes('bitter') || slug.includes('burnt')) return 'bitter';
  if (slug.includes('sour') || slug.includes('acidic')) return 'sour';
  if (slug.includes('weak') || slug.includes('watery')) return 'weak';
  if (slug.includes('extraction')) return 'extraction-balance';
  return 'general';
}

function breadSlugToProblem(_slug: string): string {
  return 'wont-rise';
}

function pieSlugToProblem(slug: string): string {
  if (slug.includes('tough')) return 'tough-crust';
  if (slug.includes('soggy')) return 'soggy-crust';
  if (slug.includes('shrink')) return 'general';
  if (slug.includes('runny') && slug.includes('filling')) return 'general';
  return 'general';
}

function iceCreamSlugToProblem(slug: string): string {
  if (slug.includes('icy') || slug.includes('freezer-burn')) return 'icy';
  if (slug.includes('melt')) return 'melts-fast';
  return 'general';
}

function bakingSlugToProblem(slug: string): string {
  if (slug.includes('how-to-use-fix')) return 'general';
  if (slug.includes('one-variable')) return 'recipes-fail';
  if (slug.includes('butter-temperature')) return 'butter-temp';
  if (slug.includes('recipes-fail')) return 'recipes-fail';
  return 'general';
}

export function getFixContextFromPath(pathname: string): {
  category: RecipeCategory;
  problemId: string;
} | null {
  const n = pathname.replace(/\/+$/, '') || '/';
  const m = n.match(/^\/((?:cookie|cake|bread|pie|ice-cream|coffee|baking)-science)\/([^/]+)$/);
  if (!m) return null;
  const segment = m[1];
  const slug = m[2];
  const category = SEGMENT_TO_CATEGORY[segment];
  if (!category) return null;

  let problemId = 'general';
  switch (category) {
    case 'cookie':
      problemId = cookieSlugToProblem(slug);
      break;
    case 'cake':
      problemId = cakeSlugToProblem(slug);
      break;
    case 'coffee':
      problemId = coffeeSlugToProblem(slug);
      break;
    case 'bread':
      problemId = breadSlugToProblem(slug);
      break;
    case 'pie':
      problemId = pieSlugToProblem(slug);
      break;
    case 'iceCream':
      problemId = iceCreamSlugToProblem(slug);
      break;
    case 'baking':
      problemId = bakingSlugToProblem(slug);
      break;
    default:
      problemId = 'general';
  }

  return { category, problemId };
}
