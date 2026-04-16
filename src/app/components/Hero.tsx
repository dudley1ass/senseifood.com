import { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, FlaskConical } from 'lucide-react';
import { Link } from 'react-router';
import { trackCTAClick, trackClicksToFixRecipe, trackHomePath, trackToolStart } from '../utils/analytics';

const BEANSENSEI = 'https://beansensei.senseifood.com';
const ICECREAM_URL = 'https://icecreamsensei.senseifood.com';

const ROTATING_WORDS = [
  'Burn',
  'Overcook',
  'Undercook',
  'Dry out',
  'Ruin',
  'Mess up',
  'Screw up',
  'Curdle',
  'Over-salt',
  'Under-season',
  'Scorch',
  'Over-reduce',
  'Water down',
  'Toughen',
  'Flatten',
] as const;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  const word = ROTATING_WORDS[index];

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
    <section className="relative overflow-hidden py-4 sm:py-6 md:py-7 px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 -z-10" />

      <div className="absolute top-12 left-6 w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-12 right-6 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Opening beat: rotating word + your line (same idea, cleaned grammar). */}
        <div className="mb-5 sm:mb-6 md:mb-7">
          <h1 className="text-[1.65rem] leading-snug sm:text-4xl md:text-5xl font-semibold tracking-tight text-purple-950 mb-3 sm:mb-4">
            What did you{' '}
            <span
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent inline-block min-h-[1.2em]"
              aria-live="polite"
              aria-atomic="true"
            >
              {word}
            </span>{' '}
            today?
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We are here to help. We have more than 70 science-based articles to explain what went wrong, and a recipe
            builder to help you prevent it in the future. Where do you want to start?
          </p>
        </div>

        <div className="h-px max-w-md mx-auto bg-gradient-to-r from-transparent via-purple-200 to-transparent mb-4 sm:mb-5" aria-hidden />

        <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full mb-2 sm:mb-3 shadow-md shadow-purple-500/20">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" aria-hidden />
          <span className="text-xs sm:text-sm leading-tight">Food science tools—free, no account</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3 max-w-lg mx-auto px-2">
          <div
            className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300/70 to-purple-200/40"
            aria-hidden
          />
          <span className="shrink-0 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-purple-500/90 uppercase">
            or
          </span>
          <div
            className="h-px flex-1 bg-gradient-to-l from-transparent via-purple-300/70 to-purple-200/40"
            aria-hidden
          />
        </div>

        <Link
          to="/fix-recipe"
          onClick={handleFixRecipeClick}
          className="group mx-auto mb-2 sm:mb-3 flex max-w-md flex-col items-center gap-1 rounded-xl border border-purple-200/90 bg-white/70 px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm backdrop-blur-sm transition-all hover:border-purple-300 hover:bg-white/95 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
        >
          <span className="flex items-center gap-2 text-sm font-semibold text-purple-900">
            <FlaskConical
              className="h-4 w-4 shrink-0 text-purple-600 opacity-90 group-hover:opacity-100"
              aria-hidden
            />
            Fix my recipe
          </span>
          <span className="text-center text-[11px] sm:text-xs leading-snug text-muted-foreground">
            Something off? We narrow likely causes and what to try next.
          </span>
          <span className="hidden sm:block text-center text-[11px] leading-snug text-purple-800/75">
            We flag suspicious amounts (like tbsp vs. tsp) before you bake.
          </span>
          <span className="text-[11px] font-medium text-purple-600 opacity-90 group-hover:opacity-100">
            Open debugger →
          </span>
        </Link>

        <p className="text-sm md:text-base text-muted-foreground mb-2 sm:mb-3 max-w-2xl mx-auto leading-snug">
          Pick a path—we&apos;ll send you to the right tool, with science you can actually use.
        </p>

        <div className="grid sm:grid-cols-3 gap-2 sm:gap-3 max-w-3xl mx-auto mb-2 sm:mb-3">
          <a
            href="#home-bake"
            onClick={handleBakeClick}
            className="group flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 px-3 py-4 sm:py-5 shadow-md hover:shadow-lg hover:border-amber-400 hover:scale-[1.02] transition-all text-center min-h-[112px] sm:min-h-[118px]"
          >
            <span className="text-2xl sm:text-3xl leading-none" aria-hidden>
              🍪
            </span>
            <span className="text-base sm:text-lg font-bold text-amber-900">Bake</span>
            <span className="text-[11px] sm:text-xs text-muted-foreground leading-tight px-0.5">
              Bread, cookies, cakes &amp; brownies
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-amber-700 flex items-center gap-0.5 mt-0.5 opacity-80 group-hover:opacity-100">
              Pick a baking tool <ArrowRight className="w-3 h-3 shrink-0" aria-hidden />
            </span>
          </a>

          <a
            href={BEANSENSEI}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleBrewClick}
            className="group flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-stone-200 bg-gradient-to-br from-stone-50 to-amber-50 px-3 py-4 sm:py-5 shadow-md hover:shadow-lg hover:border-stone-400 hover:scale-[1.02] transition-all text-center min-h-[112px] sm:min-h-[118px]"
          >
            <span className="text-2xl sm:text-3xl leading-none" aria-hidden>
              ☕
            </span>
            <span className="text-base sm:text-lg font-bold text-stone-900">Brew</span>
            <span className="text-[11px] sm:text-xs text-muted-foreground leading-tight">Coffee &amp; extraction</span>
            <span className="text-[11px] sm:text-xs font-medium text-stone-700 flex items-center gap-0.5 mt-0.5 opacity-80 group-hover:opacity-100">
              Open BeanSensei <ArrowRight className="w-3 h-3 shrink-0" aria-hidden />
            </span>
          </a>

          <a
            href={ICECREAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCreateClick}
            className="group flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 px-3 py-4 sm:py-5 shadow-md hover:shadow-lg hover:border-cyan-400 hover:scale-[1.02] transition-all text-center min-h-[112px] sm:min-h-[118px]"
          >
            <span className="text-2xl sm:text-3xl leading-none" aria-hidden>
              🍨
            </span>
            <span className="text-base sm:text-lg font-bold text-cyan-900">Create</span>
            <span className="text-[11px] sm:text-xs text-muted-foreground leading-tight">Ice cream &amp; frozen desserts</span>
            <span className="text-[11px] sm:text-xs font-medium text-cyan-800 flex items-center gap-0.5 mt-0.5 opacity-80 group-hover:opacity-100">
              Open IceCreamSensei <ArrowRight className="w-3 h-3 shrink-0" aria-hidden />
            </span>
          </a>
        </div>

        <div className="max-w-xl mx-auto rounded-xl border-2 border-purple-200 bg-white/90 backdrop-blur-sm p-3 sm:p-4 shadow-md">
          <p className="text-xs sm:text-sm font-medium text-purple-900 mb-0.5">Tell us what you have</p>
          <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 leading-snug">
            We&apos;ll suggest a match, then open a tool with real controls.
          </p>
          <a
            href="#ingredient-picker"
            onClick={handleIngredientsClick}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg transition-all hover:scale-[1.02]"
          >
            Start with ingredients
            <ArrowRight className="w-4 h-4" aria-hidden />
          </a>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3 font-medium">
          All tools are free. No signup required.
        </p>
      </div>
    </section>
  );
}
