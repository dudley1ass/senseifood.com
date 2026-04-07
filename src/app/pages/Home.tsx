import { Cookie, Cake, Coffee, IceCream, PieChart, ArrowRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { ToolCard } from '../components/ToolCard';
import { HowItWorks } from '../components/HowItWorks';
import { WhatCanIMake } from '../components/WhatCanIMake';
import { FeaturedExperiments } from '../components/FeaturedExperiments';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { trackCTAClick, trackToolStart } from '../utils/analytics';

export default function Home() {
  const handleFooterCtaClick = () => {
    trackCTAClick('home_footer', 'try_cookie_sensei');
    trackToolStart('CookieSensei', 'home_footer');
  };

  const handleBakeQuickLink = (label: string, toolName: string) => {
    trackCTAClick('home_bake_quick', label);
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
      outcome: 'Fix bitter, sour, weak, or watery coffee',
      name: 'BeanSensei',
      icon: Coffee,
      description: 'Grind, ratio, time, and temperature — extraction you can repeat.',
      url: 'https://beansensei.senseifood.com',
      color: 'from-stone-600 to-amber-800'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Navigation />

      <Hero />

      <WhatCanIMake />

      <section id="pick-starting-point" className="py-24 px-6 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 scroll-mt-24">
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
              Cookies, cake, or brownies — jump straight to the builder that matches what you’re fixing.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://cookiesensei.senseifood.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleBakeQuickLink('cookies', 'CookieSensei')}
                className="inline-flex items-center gap-2 rounded-xl bg-white border-2 border-amber-300 px-4 py-2.5 text-sm font-semibold text-amber-900 hover:shadow-md transition-all"
              >
                Cookies → CookieSensei
              </a>
              <a
                href="https://cakesensei.senseifood.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleBakeQuickLink('cakes', 'CakeSensei')}
                className="inline-flex items-center gap-2 rounded-xl bg-white border-2 border-pink-200 px-4 py-2.5 text-sm font-semibold text-pink-900 hover:shadow-md transition-all"
              >
                Cakes → CakeSensei
              </a>
              <a
                href="https://cookiesensei.senseifood.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleBakeQuickLink('brownies', 'CookieSensei')}
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
            More specialties are on the way — bread, sauces, pickling, and beyond. For now, these five tools are ready to use.
          </p>
        </div>
      </section>

      <HowItWorks />

      <FeaturedExperiments />

      <section className="py-24 px-6 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl mb-6">Solve the next recipe problem</h2>
          <p className="text-xl text-white/90 mb-8">
            Start with CookieSensei or pick a path above — then use the science library when you want the &quot;why.&quot;
          </p>
          <a
            href="https://cookiesensei.senseifood.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleFooterCtaClick}
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            Try CookieSensei
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
