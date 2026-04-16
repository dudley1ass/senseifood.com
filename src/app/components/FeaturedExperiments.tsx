import { BookOpen, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { SAUCE_SENSEI_APP_URL } from '../config/publicUrls';
import { trackArticleClick, trackCTAClick, trackToolStart } from '../utils/analytics';

const EXPERIMENT_IMAGES = {
  /** Placeholder — swap when you have final art */
  cake:
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
  icecream:
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
  sauce:
    'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80',
} as const;

export function FeaturedExperiments() {
  const handleFeaturedArticleClick = (articleTitle: string, articleUrl: string) => {
    trackArticleClick(articleTitle);
    trackCTAClick('home_featured_articles', 'read_article', articleUrl);
  };

  const handleApplyClick = (articleTitle: string, label: string, applyHref: string, toolName?: string) => {
    trackCTAClick('home_featured_articles_apply', `${label}:${articleTitle}`, applyHref);
    if (toolName) trackToolStart(toolName, 'home_featured_articles');
  };

  const experiments = [
    {
      title: 'Why Cakes Oil Out (Fat Separation in Batter)',
      description:
        'Emulsion timing, fat temperature, and mixing sequence—plus bake set—decide whether fat stays suspended or weeps from the crumb.',
      category: 'Cake Science',
      readTime: '8 min read',
      color: 'from-pink-500 to-purple-600',
      titleClass: 'from-pink-600 to-purple-600',
      url: '/cake-science/why-cakes-oil-out',
      applyHref: 'https://cakesensei.senseifood.com',
      applyLabel: 'Open CakeSensei',
      applyExternal: true,
      toolName: 'CakeSensei' as const,
      image: EXPERIMENT_IMAGES.cake,
    },
    {
      title: 'Why Ice Cream Develops Ice Layers Over Time',
      description:
        'Temperature swings in the freezer drive moisture to plate out as visible ice. Steady cold, headspace, and surface cover change the timeline.',
      category: 'Ice Cream Science',
      readTime: '8 min read',
      color: 'from-cyan-500 to-blue-600',
      titleClass: 'from-cyan-600 to-blue-700',
      url: '/ice-cream-science/why-ice-cream-develops-ice-layers-over-time',
      applyHref: 'https://icecreamsensei.senseifood.com',
      applyLabel: 'Try this in IceCreamSensei',
      applyExternal: true,
      toolName: 'IceCreamSensei' as const,
      image: EXPERIMENT_IMAGES.icecream,
    },
    {
      title: 'Why Sauces Break When Reheated',
      description:
        'Reheating is a second thermal pass: emulsions need gentle heat, motion, and often a splash of liquid—microwave hotspots are a common culprit.',
      category: 'Sauce Science',
      readTime: '8 min read',
      color: 'from-rose-600 to-orange-600',
      titleClass: 'from-rose-700 to-orange-600',
      url: '/sauce-science/why-sauces-break-when-reheated',
      applyHref: SAUCE_SENSEI_APP_URL,
      applyLabel: 'Open Sauce Sensei',
      applyExternal: true,
      toolName: 'SauceSensei' as const,
      image: EXPERIMENT_IMAGES.sauce,
    },
  ];

  return (
    <section id="experiments" className="py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#fff7f5] via-purple-50/40 to-pink-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base text-purple-600/90 font-medium mb-3 max-w-2xl mx-auto">
            Read the why — then open a tool and change something on purpose.
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full mb-5 shadow-md">
            <BookOpen className="w-4 h-4 shrink-0" />
            <span className="text-sm font-semibold">Learn the Science (Then Apply It)</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Featured articles
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {experiments.map((experiment) => (
            <div
              key={experiment.title}
              className="bg-white rounded-2xl border border-stone-100 shadow-lg hover:shadow-xl hover:border-purple-100/80 transition-all flex flex-col overflow-hidden h-full"
            >
              <Link
                to={experiment.url}
                onClick={() => handleFeaturedArticleClick(experiment.title, experiment.url)}
                className="group block flex-1 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={experiment.image}
                    alt={experiment.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                    <span
                      className={`px-3 py-1 text-xs font-semibold text-white rounded-full shadow-md bg-gradient-to-r ${experiment.color}`}
                    >
                      {experiment.category}
                    </span>
                    <span className="px-2.5 py-1 text-xs font-medium bg-white/95 text-stone-700 rounded-full shadow-sm">
                      {experiment.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h3
                    className={`text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r ${experiment.titleClass} bg-clip-text text-transparent`}
                  >
                    {experiment.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{experiment.description}</p>
                  <div
                    className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${experiment.color} bg-clip-text text-transparent`}
                  >
                    <span>Read article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <div className="px-6 md:px-7 pb-6 md:pb-7 -mt-1">
                {experiment.applyExternal ? (
                  <a
                    href={experiment.applyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      handleApplyClick(
                        experiment.title,
                        experiment.applyLabel,
                        experiment.applyHref,
                        experiment.toolName
                      )
                    }
                    className={`inline-flex items-center justify-center gap-2 w-full rounded-xl px-4 py-3.5 text-sm font-semibold text-white bg-gradient-to-r ${experiment.color} hover:opacity-95 shadow-md hover:shadow-lg transition-all`}
                  >
                    {experiment.applyLabel}
                    <ExternalLink className="w-4 h-4 opacity-90" />
                  </a>
                ) : (
                  <Link
                    to={experiment.applyHref}
                    onClick={() =>
                      handleApplyClick(
                        experiment.title,
                        experiment.applyLabel,
                        experiment.applyHref,
                        experiment.toolName
                      )
                    }
                    className={`inline-flex items-center justify-center gap-2 w-full rounded-xl px-4 py-3.5 text-sm font-semibold text-white bg-gradient-to-r ${experiment.color} hover:opacity-95 shadow-md hover:shadow-lg transition-all`}
                  >
                    {experiment.applyLabel}
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
            Deep dives on cookies, cakes, coffee, ice cream &amp; more
          </p>
        </div>
      </div>
    </section>
  );
}
