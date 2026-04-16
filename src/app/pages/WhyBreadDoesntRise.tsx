import { ScienceArticlePage } from '../components/ScienceArticlePage';
import { getScienceArticleByPath } from '../data/newScienceArticles';

const ARTICLE_PATH = 'bread-science/why-bread-doesnt-rise' as const;

/** Article content is defined in `src/app/data/newScienceArticles` — this file exists so every route has a dedicated page module like other science articles. */
export default function WhyBreadDoesntRise() {
  const spec = getScienceArticleByPath(ARTICLE_PATH);
  if (!spec) {
    throw new Error(`Missing science article spec for path: ${ARTICLE_PATH}`);
  }
  return <ScienceArticlePage spec={spec} />;
}
