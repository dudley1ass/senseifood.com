import { ArrowLeft, BookOpen, Search, Wrench } from 'lucide-react';
import { Link, useSearchParams } from 'react-router';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { useMemo, useState } from 'react';
import { trackArticleClick, trackCTAClick, trackClicksToFixRecipe, trackToolStart } from '../../utils/analytics';
import {
  ARTICLE_TABS,
  FIX_IT_URLS,
  getAllArticleCards,
  parseTabParam,
  type TabId,
} from './articleLibrary';

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  const activeTab = parseTabParam(searchParams.get('tab'));

  const articles = useMemo(() => getAllArticleCards(), []);

  const setActiveTab = (id: TabId) => {
    setSearchParams({ tab: id }, { replace: true });
    trackCTAClick('articles_tab', id, `/articles?tab=${id}`);
    if (id === 'sauces') {
      trackToolStart('SauceSensei', 'articles_tab');
    }
  };

  const handleArticleClick = (articleTitle: string, source: string, articleUrl: string) => {
    trackArticleClick(articleTitle);
    trackCTAClick(source, 'read_article', articleUrl);
  };

  const handleToolCtaClick = (location: string) => {
    trackCTAClick(location, 'try_cookie_sensei', 'https://cookiesensei.senseifood.com');
    trackToolStart('CookieSensei', location);
  };

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
  }, [activeTab, searchQuery, articles]);

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

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
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
            <div className="rounded-2xl border-2 border-rose-200 bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50 p-6 shadow-md md:col-span-2 lg:col-span-1">
              <div className="text-xs font-semibold uppercase tracking-wide text-rose-800 mb-2">Sauces</div>
              <p className="text-sm text-stone-700 leading-relaxed mb-4">
                Sauce science deep-dives and per-recipe guides live here too — same card style as other topics. Open the
                interactive wheel on Sauce Sensei when you are ready to dial in grams.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link
                  to="/sauce-sensei"
                  onClick={() => trackCTAClick('articles_header', 'sauce_sensei_hub', '/sauce-sensei')}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-orange-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-95 transition-opacity"
                >
                  Sauce Sensei hub
                </Link>
                <Link
                  to="/articles?tab=sauces"
                  className="inline-flex items-center justify-center border-2 border-rose-300 bg-white text-rose-900 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-rose-50"
                >
                  Browse sauce articles
                </Link>
              </div>
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
                state={
                  searchQuery.trim()
                    ? undefined
                    : ({ articlesTab: activeTab } satisfies { articlesTab: TabId })
                }
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
                  <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-medium">{article.senseiPei}</span>
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
