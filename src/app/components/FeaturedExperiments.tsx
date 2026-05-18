import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router';
import { trackArticleClick, trackCTAClick } from '../utils/analytics';

const NEW_ARTICLE_IMAGES = {
  cookiePuff: '/images/new-articles/why-cookies-puff-up-too-much.png',
  breadSplit:
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
  nutritionProcessed: '/images/new-articles/why-processed-foods-easy-to-overeat.png',
} as const;

const FEATURED_ARTICLES = [
  {
    title: 'Why Cookies Puff Up Too Much',
    description:
      'Trapped steam, aggressive leavening, or over-aerated butter can balloon cookies before they finish spreading.',
    category: 'Cookie Science',
    readTime: '8 min read',
    url: '/cookie-science/why-cookies-puff-up-too-much',
  },
  {
    title: 'Why Bread Splits on the Side',
    description:
      'Weak scoring, uneven shaping tension, and early crust set force oven spring through sidewalls instead of your score.',
    category: 'Bread Science',
    readTime: '8 min read',
    url: '/bread-science/why-bread-splits-on-the-side',
  },
  {
    title: 'Why Processed Foods Are Easy to Overeat',
    description:
      'Energy density, rapid oral processing, and engineered salt–sugar–fat loops—science in plain terms.',
    category: 'Nutrition',
    readTime: '8 min read',
    url: '/nutrition-science/why-processed-foods-are-easy-to-overeat',
  },
] as const;

export function FeaturedExperiments() {
  const handleArticleClick = (title: string, url: string) => {
    trackArticleClick(title);
    trackCTAClick('home_learn_why', 'read_article', url);
  };

  return (
    <section
      id="learn-why-food-works"
      className="scroll-mt-24 border-t border-stone-200/80 bg-[#f5f0e8] px-4 sm:px-6 pt-14 pb-20 md:pt-16 md:pb-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-amber-800/80 mb-3">
            Deep dives
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-3">
            Learn why food works
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Read the science first—then use the how-to paths above when you want to change something on the counter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURED_ARTICLES.map((article) => (
            <Link
              key={article.url}
              to={article.url}
              onClick={() => handleArticleClick(article.title, article.url)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-[#faf8f5] shadow-sm hover:shadow-md hover:border-stone-300 transition-all h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                <img
                  src={
                    article.url.includes('cookie')
                      ? NEW_ARTICLE_IMAGES.cookiePuff
                      : article.url.includes('bread')
                        ? NEW_ARTICLE_IMAGES.breadSplit
                        : NEW_ARTICLE_IMAGES.nutritionProcessed
                  }
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-stone-900/85 px-3 py-1 text-xs font-semibold text-[#faf8f5]">
                    {article.category}
                  </span>
                  <span className="rounded-full bg-white/95 px-2.5 py-1 text-xs font-medium text-stone-700">
                    {article.readTime}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 leading-snug group-hover:text-amber-950 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed flex-1 mb-4">{article.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-900">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-14">
          <Link
            to="/articles"
            onClick={() => trackCTAClick('home_learn_why', 'all_articles', '/articles')}
            className="inline-flex items-center gap-2 rounded-lg bg-stone-900 text-[#faf8f5] px-8 py-3.5 text-sm font-semibold shadow-md hover:bg-stone-800 transition-colors"
          >
            <BookOpen className="h-5 w-5 shrink-0" aria-hidden />
            Explore all articles
            <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
          </Link>
          <p className="text-sm text-stone-500 mt-4">
            Cookies, bread, nutrition, coffee, ice cream, sauces &amp; more
          </p>
        </div>
      </div>
    </section>
  );
}
