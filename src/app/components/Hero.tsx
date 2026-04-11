import { Sparkles, ArrowRight, FlaskConical } from 'lucide-react';
import { Link } from 'react-router';
import { trackCTAClick, trackClicksToFixRecipe, trackHomePath, trackToolStart } from '../utils/analytics';

const BEANSENSEI = 'https://beansensei.senseifood.com';
const ICECREAM_URL = 'https://icecreamsensei.senseifood.com';

/** Warm kitchen / baking hero — Unsplash (photo-1556910103) */
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=80';

export function Hero() {
  const handleBakeClick = () => {
    trackHomePath('bake', 'home_hero');
    trackCTAClick('home_hero', 'path_bake', '#home-bake');
  };

  const handleBrewClick = () => {
    trackHomePath('brew', 'home_hero');
    trackCTAClick('home_hero', 'path_brew', BEANSENSEI);
    trackToolStart('BeanSensei', 'home_hero_brew');
  };

  const handleCreateClick = () => {
    trackHomePath('create', 'home_hero');
    trackCTAClick('home_hero', 'path_create', ICECREAM_URL);
    trackToolStart('IceCreamSensei', 'home_hero_create');
  };

  const handleIngredientsClick = () => {
    trackHomePath('ingredients', 'home_hero');
    trackCTAClick('home_hero', 'start_with_ingredients', '#ingredient-picker');
  };

  const handleFixRecipeClick = () => {
    trackClicksToFixRecipe('home_hero');
    trackCTAClick('home_hero', 'fix_my_recipe', '/fix-recipe');
  };

  return (
    <section className="relative overflow-hidden bg-[#F8F7FF] px-4 sm:px-6 pt-6 pb-10 md:pt-10 md:pb-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-12 xl:gap-16 items-center">
        <div className="text-center lg:text-left min-w-0">
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full mb-4 shadow-md shadow-purple-500/15">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="text-xs sm:text-sm font-medium leading-tight">
              Food science tools — free, no account
            </span>
          </div>

          <h1 className="text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-[2.75rem] font-semibold tracking-tight bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-4">
            What Do You Want To Make Today?
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
            Pick a path — we&apos;ll send you to the right tool, with science you can use. Design recipes,
            experiment with ingredients, and understand the chemistry behind cooking.
          </p>

          <Link
            to="/fix-recipe"
            onClick={handleFixRecipeClick}
            className="group mx-auto lg:mx-0 mb-6 flex max-w-md lg:max-w-none flex-col items-center lg:items-start gap-1 rounded-2xl border-2 border-purple-200/90 bg-white px-4 py-3 sm:px-5 sm:py-3.5 shadow-sm transition-all hover:border-purple-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
          >
            <span className="flex items-center gap-2 text-sm font-semibold text-purple-900">
              <FlaskConical className="h-4 w-4 shrink-0 text-purple-600" aria-hidden />
              Fix my recipe
            </span>
            <span className="text-center lg:text-left text-[11px] sm:text-xs text-muted-foreground leading-snug">
              Something weird? We&apos;ll narrow causes and what to try next.
            </span>
            <span className="text-[11px] font-medium text-purple-600 group-hover:text-purple-700">
              Open debugger →
            </span>
          </Link>

          <div className="grid sm:grid-cols-3 gap-2 sm:gap-3 max-w-3xl mx-auto lg:mx-0 mb-6">
            <a
              href="#home-bake"
              onClick={handleBakeClick}
              className="group flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 px-3 py-4 sm:py-5 shadow-sm hover:shadow-md hover:border-amber-400 hover:scale-[1.02] transition-all text-center min-h-[112px] sm:min-h-[118px]"
            >
              <span className="text-2xl sm:text-3xl leading-none" aria-hidden>
                🍪
              </span>
              <span className="text-base sm:text-lg font-bold text-amber-900">Bake</span>
              <span className="text-[11px] sm:text-xs text-muted-foreground leading-tight px-0.5">
                Bread, cookies, cakes &amp; brownies
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-amber-700 flex items-center gap-0.5 mt-0.5 opacity-80 group-hover:opacity-100">
                Pick a baking tool <ArrowRight className="w-3 h-3 shrink-0" />
              </span>
            </a>

            <a
              href={BEANSENSEI}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleBrewClick}
              className="group flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-stone-200 bg-gradient-to-br from-stone-50 to-amber-50 px-3 py-4 sm:py-5 shadow-sm hover:shadow-md hover:border-stone-400 hover:scale-[1.02] transition-all text-center min-h-[112px] sm:min-h-[118px]"
            >
              <span className="text-2xl sm:text-3xl leading-none" aria-hidden>
                ☕
              </span>
              <span className="text-base sm:text-lg font-bold text-stone-900">Brew</span>
              <span className="text-[11px] sm:text-xs text-muted-foreground leading-tight">Coffee &amp; extraction</span>
              <span className="text-[11px] sm:text-xs font-medium text-stone-700 flex items-center gap-0.5 mt-0.5 opacity-80 group-hover:opacity-100">
                Open BeanSensei <ArrowRight className="w-3 h-3 shrink-0" />
              </span>
            </a>

            <a
              href={ICECREAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCreateClick}
              className="group flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 px-3 py-4 sm:py-5 shadow-sm hover:shadow-md hover:border-cyan-400 hover:scale-[1.02] transition-all text-center min-h-[112px] sm:min-h-[118px]"
            >
              <span className="text-2xl sm:text-3xl leading-none" aria-hidden>
                🍨
              </span>
              <span className="text-base sm:text-lg font-bold text-cyan-900">Create</span>
              <span className="text-[11px] sm:text-xs text-muted-foreground leading-tight">Ice cream &amp; frozen desserts</span>
              <span className="text-[11px] sm:text-xs font-medium text-cyan-800 flex items-center gap-0.5 mt-0.5 opacity-80 group-hover:opacity-100">
                Open IceCreamSensei <ArrowRight className="w-3 h-3 shrink-0" />
              </span>
            </a>
          </div>

          <div className="max-w-xl mx-auto lg:mx-0 rounded-2xl border-2 border-purple-200 bg-white p-4 shadow-sm">
            <p className="text-xs sm:text-sm font-medium text-purple-900 mb-0.5">Tell us what you have</p>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-snug">
              We&apos;ll suggest a match — then open a tool with real controls.
            </p>
            <a
              href="#ingredient-picker"
              onClick={handleIngredientsClick}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              Start with ingredients
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground mt-4 font-medium">
            All tools are 100% free. No signup required.
          </p>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <img
              src={HERO_IMAGE}
              alt="Kitchen workspace with baking ingredients and tools"
              className="w-full h-[min(420px,55vw)] sm:h-[min(480px,50vw)] lg:h-auto lg:min-h-[380px] object-cover"
              width={1400}
              height={1050}
              loading="eager"
              decoding="async"
            />
            <div className="absolute bottom-4 right-4 z-10">
              <div className="bg-white rounded-2xl shadow-xl border border-stone-100/80 px-4 py-3 flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-lg font-bold text-white shadow-md">
                  6
                </span>
                <div className="text-left">
                  <p className="text-sm font-bold text-stone-900 leading-tight">Sensei Tools</p>
                  <p className="text-xs text-muted-foreground">Ready to use</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
