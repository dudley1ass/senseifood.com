import { BookOpen, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { trackArticleClick, trackCTAClick, trackToolStart } from '../utils/analytics';

export function FeaturedExperiments() {
  const handleFeaturedArticleClick = (articleTitle: string) => {
    trackArticleClick(articleTitle);
    trackCTAClick('home_featured_articles', 'read_article');
  };

  const handleApplyClick = (articleTitle: string, label: string, toolName?: string) => {
    trackCTAClick('home_featured_articles_apply', `${label}:${articleTitle}`);
    if (toolName) trackToolStart(toolName, 'home_featured_articles');
  };

  const experiments = [
    {
      title: 'Why Cookies Spread',
      description: 'Discover how butter temperature, sugar ratios, and leavening agents control cookie spread and texture.',
      category: 'Cookie Science',
      readTime: '5 min read',
      color: 'from-amber-500 to-orange-600',
      url: '/cookie-science/why-cookies-spread',
      applyHref: 'https://cookiesensei.senseifood.com',
      applyLabel: 'Try this in CookieSensei',
      applyExternal: true,
      toolName: 'CookieSensei' as const
    },
    {
      title: 'Why Bread Rises',
      description: 'Understand the biological and chemical processes that turn dense dough into light, airy bread.',
      category: 'Bread Science',
      readTime: '6 min read',
      color: 'from-amber-500 to-yellow-600',
      url: '/bread-science/why-bread-rises',
      applyHref: '/bread-sensei',
      applyLabel: 'Open Bread Sensei',
      applyExternal: false,
      toolName: 'BreadSensei' as const
    },
    {
      title: 'Why Ice Cream Gets Icy',
      description: 'Learn about ice crystal formation, fat content, and stabilizers that prevent icy texture.',
      category: 'Ice Cream Science',
      readTime: '6 min read',
      color: 'from-cyan-500 to-blue-600',
      url: '/ice-cream-science/why-ice-cream-gets-icy',
      applyHref: 'https://icecreamsensei.senseifood.com',
      applyLabel: 'Try this in IceCreamSensei',
      applyExternal: true,
      toolName: 'IceCreamSensei' as const
    }
  ];

  return (
    <section id="experiments" className="py-24 px-6 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm">Learn the Science (Then Apply It)</span>
          </div>
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Featured articles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read the why — then open a tool and change something on purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((experiment) => (
            <div
              key={experiment.title}
              className="bg-white border-2 border-transparent rounded-2xl p-8 hover:shadow-2xl hover:border-cyan-200 transition-all flex flex-col h-full"
            >
              <Link
                to={experiment.url}
                onClick={() => handleFeaturedArticleClick(experiment.title)}
                className="group flex-1 flex flex-col cursor-pointer rounded-xl -m-2 p-2 hover:bg-gray-50/80 transition-colors"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span className={`px-4 py-1.5 bg-gradient-to-r ${experiment.color} text-white rounded-full shadow-md`}>
                    {experiment.category}
                  </span>
                  <span>•</span>
                  <span>{experiment.readTime}</span>
                </div>

                <h3 className={`text-2xl mb-3 bg-gradient-to-r ${experiment.color} bg-clip-text text-transparent`}>
                  {experiment.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {experiment.description}
                </p>

                <div className={`flex items-center gap-2 text-sm group-hover:gap-3 transition-all bg-gradient-to-r ${experiment.color} bg-clip-text text-transparent`}>
                  <span>Read article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <div className="mt-6 pt-6 border-t border-gray-100">
                {experiment.applyExternal ? (
                  <a
                    href={experiment.applyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      handleApplyClick(experiment.title, experiment.applyLabel, experiment.toolName)
                    }
                    className={`inline-flex items-center justify-center gap-2 w-full rounded-xl px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r ${experiment.color} hover:opacity-95 shadow-md hover:shadow-lg transition-all`}
                  >
                    {experiment.applyLabel}
                    <ExternalLink className="w-4 h-4 opacity-90" />
                  </a>
                ) : (
                  <Link
                    to={experiment.applyHref}
                    onClick={() =>
                      handleApplyClick(experiment.title, experiment.applyLabel, experiment.toolName)
                    }
                    className={`inline-flex items-center justify-center gap-2 w-full rounded-xl px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r ${experiment.color} hover:opacity-95 shadow-md hover:shadow-lg transition-all`}
                  >
                    {experiment.applyLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/articles?tab=fix-it"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <BookOpen className="w-5 h-5" />
            See all articles
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Deep dives on cookies, cakes, coffee, ice cream &amp; more
          </p>
        </div>
      </div>
    </section>
  );
}
