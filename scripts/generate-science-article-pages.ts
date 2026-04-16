/**
 * One-off / maintenance: generate `src/app/pages/<PascalSlug>.tsx` for each entry in
 * ALL_NEW_SCIENCE_ARTICLES whose path is not already covered by a hand-authored page route.
 *
 * Run: npx tsx scripts/generate-science-article-pages.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ALL_NEW_SCIENCE_ARTICLES } from '../src/app/data/newScienceArticles/index.ts';
import { articlePath } from '../src/app/data/scienceArticleTypes.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendRoot = path.join(__dirname, '..');
const pagesDir = path.join(frontendRoot, 'src/app/pages');

/** Paths already registered with a dedicated TSX page in appRouteChildren (not generated). */
const LEGACY_ARTICLE_PATHS = new Set<string>([
  'cookie-science/how-to-debug-cookie-batch-issues',
  'cookie-science/why-cookies-spread',
  'cookie-science/brown-sugar-vs-white-sugar',
  'cookie-science/why-cookies-turn-hard',
  'cookie-science/why-cookies-are-chewy',
  'cookie-science/why-cookies-get-crispy',
  'cookie-science/why-cookies-flatten',
  'cookie-science/why-cookies-spread-too-much',
  'cookie-science/why-cookies-dont-spread',
  'cookie-science/why-cookies-burn-on-the-bottom',
  'cookie-science/why-cookies-crack-on-top',
  'cookie-science/why-cookies-turn-cakey',
  'cookie-science/why-cookies-brown',
  'cookie-science/why-cookies-stick-to-pan',
  'cookie-science/why-cookies-spread-unevenly',
  'cookie-science/why-cookies-turn-oily',
  'cookie-science/why-cookies-taste-bitter',
  'cookie-science/why-cookies-get-hard-after-baking',
  'cookie-science/why-cookies-rise-then-fall',
  'cookie-science/why-cookies-bake-faster-on-edges',
  'cookie-science/why-cookies-change-color',
  'cookie-science/why-cookies-taste-bland',
  'cookie-science/why-cookies-stay-thick',
  'bread-science/why-bread-rises',
  'bread-science/how-yeast-works',
  'cake-science/how-to-debug-cake-problems',
  'cake-science/why-cakes-dome',
  'cake-science/why-cakes-collapse',
  'cake-science/why-cakes-sink',
  'cake-science/why-cakes-crack-on-top',
  'cake-science/why-cakes-are-dense',
  'cake-science/why-cakes-stick-to-pan',
  'cake-science/why-cakes-dry-out',
  'cake-science/why-cakes-rise',
  'cake-science/why-cakes-brown',
  'cake-science/why-cakes-stick-to-paper-liners',
  'cake-science/why-cakes-have-large-holes',
  'cake-science/why-cakes-fall-after-baking',
  'cake-science/why-cakes-taste-dry',
  'cake-science/why-cakes-turn-gummy',
  'cake-science/why-cakes-rise-unevenly',
  'cake-science/why-cakes-turn-rubbery',
  'cake-science/why-cakes-stick-to-cooling-rack',
  'pie-science/why-pie-crust-is-flaky',
  'pie-science/why-pie-crust-shrinks',
  'pie-science/why-pie-crust-gets-tough',
  'pie-science/butter-vs-shortening-in-crust',
  'pie-science/why-pie-crust-gets-soggy',
  'pie-science/why-pie-filling-is-runny',
  'ice-cream-science/why-ice-cream-gets-icy',
  'ice-cream-science/why-ice-cream-melts-fast',
  'ice-cream-science/why-ice-cream-is-creamy',
  'ice-cream-science/why-ice-cream-gets-freezer-burn',
  'coffee-science/how-to-debug-your-coffee',
  'coffee-science/coffee-extraction-science',
  'coffee-science/why-coffee-tastes-bitter',
  'coffee-science/why-coffee-tastes-sour',
  'coffee-science/why-coffee-tastes-weak',
  'coffee-science/why-coffee-tastes-burnt',
  'coffee-science/why-coffee-tastes-watery',
  'coffee-science/why-coffee-smells-good',
  'coffee-science/why-coffee-loses-flavor',
  'coffee-science/why-coffee-tastes-acidic',
  'coffee-science/why-coffee-makes-crema',
  'coffee-science/why-coffee-gets-oily',
  'coffee-science/why-coffee-grind-size-matters',
  'coffee-science/why-coffee-brewing-time-matters',
  'coffee-science/why-coffee-tastes-different-cold',
  'coffee-science/why-coffee-oxidizes',
  'coffee-science/why-coffee-beans-expand-when-roasted',
  'coffee-science/why-coffee-tastes-salty',
  'coffee-science/why-coffee-stales',
  'coffee-science/why-coffee-tastes-flat',
  'coffee-science/why-coffee-tastes-metallic',
  'baking-science/how-to-use-fix-my-recipe',
  'baking-science/fix-recipes-one-variable-at-a-time',
  'baking-science/why-butter-temperature-matters',
  'baking-science/why-eggs-matter-in-baking',
  'baking-science/why-salt-makes-food-taste-better',
  'baking-science/why-recipes-fail',
]);

function slugToPascalCase(slug: string): string {
  return slug
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

const FILE_TEMPLATE = (componentName: string, pathLiteral: string) => `import { ScienceArticlePage } from '../components/ScienceArticlePage';
import { getScienceArticleByPath } from '../data/newScienceArticles';

const ARTICLE_PATH = '${pathLiteral}' as const;

/** Article content is defined in \`src/app/data/newScienceArticles\` — this file exists so every route has a dedicated page module like other science articles. */
export default function ${componentName}() {
  const spec = getScienceArticleByPath(ARTICLE_PATH);
  if (!spec) {
    throw new Error(\`Missing science article spec for path: \${ARTICLE_PATH}\`);
  }
  return <ScienceArticlePage spec={spec} />;
}
`;

function main() {
  const usedNames = new Map<string, string>();
  const routes: { path: string; importName: string; fileBase: string }[] = [];

  for (const spec of ALL_NEW_SCIENCE_ARTICLES) {
    const p = articlePath(spec);
    if (LEGACY_ARTICLE_PATHS.has(p)) continue;

    let baseName = slugToPascalCase(spec.slug);
    if (!baseName.match(/^[A-Za-z]/)) baseName = `Article${baseName}`;

    let componentName = baseName;
    let n = 2;
    while (usedNames.has(componentName) && usedNames.get(componentName) !== p) {
      componentName = `${baseName}${n}`;
      n += 1;
    }
    usedNames.set(componentName, p);

    const fileName = `${componentName}.tsx`;
    const filePath = path.join(pagesDir, fileName);

    fs.writeFileSync(filePath, FILE_TEMPLATE(componentName, p), 'utf8');
    routes.push({ path: p, importName: componentName, fileBase: fileName.replace(/\.tsx$/, '') });
  }

  const importLines = routes
    .map((r) => `import ${r.importName} from "./pages/${r.fileBase}";`)
    .join('\n');

  const routeLines = routes.map((r) => `  { path: "${r.path}", Component: ${r.importName} },`).join('\n');

  const out = `// AUTO-GENERATED by scripts/generate-science-article-pages.ts — do not edit by hand
${importLines}

export const generatedNewScienceArticleRoutes = [
${routeLines}
];
`;

  fs.writeFileSync(path.join(frontendRoot, 'src/app/generatedNewScienceArticleRoutes.ts'), out, 'utf8');

  console.log(`Wrote ${routes.length} page files under src/app/pages/`);
  console.log('Wrote src/app/generatedNewScienceArticleRoutes.ts');
}

main();
