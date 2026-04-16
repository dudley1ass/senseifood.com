import { Link } from 'react-router';
import { Cookie, Cake, Coffee, IceCream, PieChart, Wheat, Soup } from 'lucide-react';
import { Hero } from '../components/Hero';
import { ToolCard } from '../components/ToolCard';
import { HowItWorks } from '../components/HowItWorks';
import { WhatCanIMake } from '../components/WhatCanIMake';
import { FeaturedExperiments } from '../components/FeaturedExperiments';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SAUCE_SENSEI_APP_URL } from '../config/publicUrls';
import { trackCTAClick, trackClicksToFixRecipe, trackToolStart } from '../utils/analytics';

export default function Home() {
  const handleFooterCtaClick = () => {
    trackCTAClick('home_footer', 'try_cookie_sensei', 'https://cookiesensei.senseifood.com');
    trackToolStart('CookieSensei', 'home_footer');
  };

  const handleBakeQuickLink = (label: string, toolName: string, linkTarget: string) => {
    trackCTAClick('home_bake_quick', label, linkTarget);
    trackToolStart(toolName, 'home_bake_quick');
  };

  const tools = [
    {
      outcome: 'Fix or design a cookie (or brownie) recipe',
      name: 'CookieSensei',
      icon: Cookie,
      description: 'Dial in spread, texture, and ratios before you preheat the oven.',
      url: 'https://cookiesensei.senseifood.com',
      color: 'from-amber-500 to-orange-600'
    },
    {
      outcome: 'Stabilize structure, crumb, and moisture in cakes',
      name: 'CakeSensei',
      icon: Cake,
      description: 'Layer cakes, doming, dryness — turn guesses into adjustments you can bake.',
      url: 'https://cakesensei.senseifood.com',
      color: 'from-pink-500 to-rose-600'
    },
    {
      outcome: 'Shape lean-to-enriched dough with targets & nutrition',
      name: 'Bread Sensei',
      icon: Wheat,
      description: 'Ten bread families, baker’s %, per-slice nutrition, and bake steps — on SenseiFood.',
      url: '/bread-sensei',
      color: 'from-amber-600 to-yellow-700'
    },
    {
      outcome: 'Nail flaky crusts and fillings that set clean',
      name: 'PieSensei',
      icon: PieChart,
      description: 'Crust chemistry and thickener math so slices hold their shape.',
      url: 'https://piesensei.senseifood.com',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      outcome: 'Beat iciness and dial in creamy texture',
      name: 'IceCreamSensei',
      icon: IceCream,
      description: 'Formulation, overrun, and stabilizers — scoopable, not icy.',
      url: 'https://icecreamsensei.senseifood.com',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      outcome: 'Build sauces, gravies, and pan finishes with confidence',
      name: 'Sauce Sensei',
      icon: Soup,
      description: 'Balance wheel + practical recovery rules for split, thin, or flat sauces.',
      url: SAUCE_SENSEI_APP_URL,
      color: 'from-rose-600 to-orange-600'
    },
    {
      outcome: 'Fix bitter, sour, weak, or watery coffee',
      name: 'BeanSensei',
      icon: Coffee,
      description: 'Grind, ratio, time, and temperature — extraction you can repeat.',
      url: 'https://beansensei.senseifood.com',
      color: 'from-stone-600 to-amber-800'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      <Navigation />

      <Hero />

      <section className="px-4 sm:px-6 py-6 sm:py-8 bg-gradient-to-r from-violet-100/95 via-fuchsia-50/80 to-pink-100/90 border-y border-purple-200/40">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-purple-950 mb-2">Something turned out weird?</h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl leading-relaxed">
              We&apos;ll help you figure out what likely went wrong and what to change next time. Open{' '}
              <strong>Fix My Recipe</strong>, or browse <strong>Fix it</strong> guides in the science library.
            </p>
            <p className="text-sm text-purple-900/85 max-w-xl leading-relaxed mt-3 border-l-4 border-purple-400/70 pl-3">
              <strong className="text-purple-950">Mystery measurements:</strong> got an old recipe and not sure what that
              line means? Type it in and switch between tablespoons and teaspoons—we flag amounts that look off before they
              ruin the batch.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 shrink-0">
            <Link
              to="/fix-recipe"
              onClick={() => {
                trackClicksToFixRecipe('home_fix_strip');
                trackCTAClick('home_fix_strip', 'fix_my_recipe', '/fix-recipe');
              }}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-6 py-3 text-sm shadow-md hover:opacity-95 transition-opacity text-center"
            >
              Open Fix My Recipe
            </Link>
            <Link
              to="/articles?tab=fix-it"
              onClick={() => trackCTAClick('home_fix_strip', 'fix_it_articles_tab', '/articles?tab=fix-it')}
              className="inline-flex items-center justify-center rounded-xl border-2 border-purple-400 bg-white text-purple-900 font-semibold px-6 py-3 text-sm hover:bg-purple-50 transition-colors text-center"
            >
              Fix it articles →
            </Link>
          </div>
        </div>
      </section>

      <WhatCanIMake />

      <section
        id="pick-starting-point"
        className="py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-50/90 via-sky-50/40 to-purple-50/30 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Pick a starting point
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each tool is built around a real outcome — not a generic calculator.
            </p>
          </div>

          <div
            id="home-bake"
            className="scroll-mt-24 mb-14 rounded-2xl border-2 border-amber-200/80 bg-gradient-to-br from-amber-50/90 to-orange-50/90 p-6 md:p-8 shadow-sm"
          >
            <h3 className="text-lg font-bold text-amber-900 mb-1">Baking?</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-2xl">
              Cookies, cake, bread, or brownies — jump straight to the builder that matches what you’re fixing.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/bread-sensei"
                onClick={() => handleBakeQuickLink('bread', 'BreadSensei', '/bread-sensei')}
                className="inline-flex items-center gap-2 rounded-xl bg-white border-2 border-yellow-300 px-4 py-2.5 text-sm font-semibold text-yellow-950 hover:shadow-md transition-all"
              >
                Bread → Bread Sensei
              </Link>
              <a
                href={SAUCE_SENSEI_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleBakeQuickLink('sauces', 'SauceSensei', SAUCE_SENSEI_APP_URL)}
                className="inline-flex items-center gap-2 rounded-xl bg-white border-2 border-rose-300 px-4 py-2.5 text-sm font-semibold text-rose-900 hover:shadow-md transition-all"
              >
                Sauces → Sauce Sensei
              </a>
              <a
                href="https://cookiesensei.senseifood.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleBakeQuickLink('cookies', 'CookieSensei', 'https://cookiesensei.senseifood.com')}
                className="inline-flex items-center gap-2 rounded-xl bg-white border-2 border-amber-300 px-4 py-2.5 text-sm font-semibold text-amber-900 hover:shadow-md transition-all"
              >
                Cookies → CookieSensei
              </a>
              <a
                href="https://cakesensei.senseifood.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleBakeQuickLink('cakes', 'CakeSensei', 'https://cakesensei.senseifood.com')}
                className="inline-flex items-center gap-2 rounded-xl bg-white border-2 border-pink-200 px-4 py-2.5 text-sm font-semibold text-pink-900 hover:shadow-md transition-all"
              >
                Cakes → CakeSensei
              </a>
              <a
                href="https://cookiesensei.senseifood.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleBakeQuickLink('brownies', 'CookieSensei', 'https://cookiesensei.senseifood.com')}
                className="inline-flex items-center gap-2 rounded-xl bg-white border-2 border-stone-300 px-4 py-2.5 text-sm font-semibold text-stone-900 hover:shadow-md transition-all"
              >
                Brownies → CookieSensei
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {tools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            More specialties are on the way — pickling, fermentation, and beyond. Sauce Sensei is now live in the hub.
          </p>
        </div>
      </section>

      <HowItWorks />

      <FeaturedExperiments />

      <section
        className="py-20 md:py-28 px-4 sm:px-6 text-white relative overflow-hidden"
        style={{
          background: 'linear-gradient(105deg, #6d28d9 0%, #db2777 45%, #ea580c 100%)',
        }}
      >
        <div className="absolute top-0 right-0 w-[min(100%,28rem)] h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[min(100%,28rem)] h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight mb-5 drop-shadow-sm">
            Solve the next recipe problem
          </h2>
          <p className="text-lg sm:text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
            Fix a failed batch with <strong className="text-white font-semibold">Fix My Recipe</strong>, go deep in the
            library, or open a Sensei tool when you want sliders and numbers.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link
              to="/fix-recipe"
              onClick={() => {
                trackClicksToFixRecipe('home_purple_cta');
                trackCTAClick('home_purple_cta', 'fix_my_recipe', '/fix-recipe');
              }}
              className="inline-flex items-center justify-center gap-2 bg-white text-violet-700 px-8 py-4 rounded-xl hover:shadow-2xl transition-all hover:scale-[1.02] font-bold text-base shadow-lg"
            >
              Fix My Recipe →
            </Link>
            <a
              href="https://cookiesensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleFooterCtaClick}
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/85 px-8 py-4 rounded-xl hover:bg-white/15 transition-all font-bold text-base"
            >
              Try CookieSensei →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
