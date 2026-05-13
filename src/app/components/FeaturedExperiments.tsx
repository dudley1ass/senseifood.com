import { BookOpen, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { trackArticleClick, trackCTAClick, trackToolStart } from '../utils/analytics';

const NEW_ARTICLE_IMAGES = {
  /** Custom art (Pinterest batch) — keep files under `public/images/new-articles/`. */
  cookiePuff: '/images/new-articles/why-cookies-puff-up-too-much.png',
  breadSplit:
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
  nutritionProcessed: '/images/new-articles/why-processed-foods-easy-to-overeat.png',
} as const;

/** Landing page spotlight — keep in sync with newest long-form science drops. */
const NEW_ARTICLES = [
  {
    title: 'Why Cookies Puff Up Too Much',
    description:
      'Trapped steam, aggressive leavening, or over-aerated butter can balloon cookies before they finish spreading—learn the fix order.',
    category: 'Cookie Science',
    readTime: '8 min read',
    color: 'from-orange-500 to-amber-600',
    titleClass: 'from-orange-600 to-amber-700',
    url: '/cookie-science/why-cookies-puff-up-too-much',
    applyHref: '/fix-recipe?category=cookie&problem=rise-then-fall',
    applyLabel: 'Debug in Fix My Recipe',
    applyExternal: false,
    image: NEW_ARTICLE_IMAGES.cookiePuff,
  },
  {
    title: 'Why Bread Splits on the Side',
    description:
      'Weak scoring, uneven shaping tension, and early crust set force oven spring through sidewalls instead of your score.',
    category: 'Bread Science',
    readTime: '8 min read',
    color: 'from-amber-600 to-yellow-600',
    titleClass: 'from-amber-700 to-yellow-700',
    url: '/bread-science/why-bread-splits-on-the-side',
    applyHref: '/fix-recipe?category=bread&problem=general',
    applyLabel: 'Debug in Fix My Recipe',
    applyExternal: false,
    image: NEW_ARTICLE_IMAGES.breadSplit,
  },
  {
    title: 'Why Processed Foods Are Easy to Overeat',
    description:
      'Energy density, rapid oral processing, and engineered salt–sugar–fat loops can push intake before fullness cues catch up—here is the science in plain terms.',
    category: 'Nutrition',
    readTime: '8 min read',
    color: 'from-teal-500 to-green-600',
    titleClass: 'from-teal-600 to-green-700',
    url: '/nutrition-science/why-processed-foods-are-easy-to-overeat',
    applyHref: '/articles?tab=nutrition',
    applyLabel: 'Browse nutrition articles',
    applyExternal: false,
    image: NEW_ARTICLE_IMAGES.nutritionProcessed,
  },
] as const;

export function FeaturedExperiments() {
  const handleNewArticleClick = (articleTitle: string, articleUrl: string) => {
    trackArticleClick(articleTitle);
    trackCTAClick('home_new_articles', 'read_article', articleUrl);
  };

  const handleApplyClick = (articleTitle: string, label: string, applyHref: string, toolName?: string) => {
    trackCTAClick('home_new_articles_apply', `${label}:${articleTitle}`, applyHref);
    if (toolName) trackToolStart(toolName, 'home_new_articles');
  };

  return (
    <section id="experiments" className="pt-12 pb-20 md:pt-14 md:pb-24 px-4 sm:px-6 bg-gradient-to-b from-[#fff7f5] via-purple-50/40 to-pink-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base text-purple-600/90 font-medium mb-3 max-w-2xl mx-auto">
            Read the why — then open Fix My Recipe for baking tweaks, or the nutrition library for appetite science.
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full mb-5 shadow-md">
            <BookOpen className="w-4 h-4 shrink-0" />
            <span className="text-sm font-semibold">New on SenseiFood</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">New articles</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {NEW_ARTICLES.map((article) => (
            <div
              key={article.title}
              className="bg-white rounded-2xl border border-stone-100 shadow-lg hover:shadow-xl hover:border-purple-100/80 transition-all flex flex-col overflow-hidden h-full"
            >
              <Link
                to={article.url}
                onClick={() => handleNewArticleClick(article.title, article.url)}
                className="group block flex-1 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                    <span
                      className={`px-3 py-1 text-xs font-semibold text-white rounded-full shadow-md bg-gradient-to-r ${article.color}`}
                    >
                      {article.category}
                    </span>
                    <span className="px-2.5 py-1 text-xs font-medium bg-white/95 text-stone-700 rounded-full shadow-sm">
                      {article.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h3
                    className={`text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r ${article.titleClass} bg-clip-text text-transparent`}
                  >
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{article.description}</p>
                  <div
                    className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${article.color} bg-clip-text text-transparent`}
                  >
                    <span>Read article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <div className="px-6 md:px-7 pb-6 md:pb-7 -mt-1">
                {article.applyExternal ? (
                  <a
                    href={article.applyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      handleApplyClick(article.title, article.applyLabel, article.applyHref, undefined)
                    }
                    className={`inline-flex items-center justify-center gap-2 w-full rounded-xl px-4 py-3.5 text-sm font-semibold text-white bg-gradient-to-r ${article.color} hover:opacity-95 shadow-md hover:shadow-lg transition-all`}
                  >
                    {article.applyLabel}
                    <ExternalLink className="w-4 h-4 opacity-90" />
                  </a>
                ) : (
                  <Link
                    to={article.applyHref}
                    onClick={() => handleApplyClick(article.title, article.applyLabel, article.applyHref, undefined)}
                    className={`inline-flex items-center justify-center gap-2 w-full rounded-xl px-4 py-3.5 text-sm font-semibold text-white bg-gradient-to-r ${article.color} hover:opacity-95 shadow-md hover:shadow-lg transition-all`}
                  >
                    {article.applyLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-14">
          <Link
            to="/articles?tab=fix-it"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <BookOpen className="w-5 h-5 shrink-0" />
            See all articles
            <ArrowRight className="w-5 h-5 shrink-0" />
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Deep dives on cookies, bread, nutrition, coffee, ice cream &amp; more
          </p>
        </div>
      </div>
    </section>
  );
}
