import { Sparkles, ArrowRight, FlaskConical } from 'lucide-react';
import { Link } from 'react-router';
import { trackCTAClick, trackHomePath, trackToolStart } from '../utils/analytics';

const BEANSENSEI = 'https://beansensei.senseifood.com';
const ICECREAM_URL = 'https://icecreamsensei.senseifood.com';

export function Hero() {
  const handleBakeClick = () => {
    trackHomePath('bake', 'home_hero');
    trackCTAClick('home_hero', 'path_bake');
  };

  const handleBrewClick = () => {
    trackHomePath('brew', 'home_hero');
    trackCTAClick('home_hero', 'path_brew');
    trackToolStart('BeanSensei', 'home_hero_brew');
  };

  const handleCreateClick = () => {
    trackHomePath('create', 'home_hero');
    trackCTAClick('home_hero', 'path_create');
    trackToolStart('IceCreamSensei', 'home_hero_create');
  };

  const handleIngredientsClick = () => {
    trackHomePath('ingredients', 'home_hero');
    trackCTAClick('home_hero', 'start_with_ingredients');
  };

  const handleFixRecipeClick = () => {
    trackCTAClick('home_hero', 'fix_my_recipe');
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 -z-10" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full mb-8 shadow-lg shadow-purple-500/20">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">Food science tools — free, no account</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8 font-semibold tracking-tight bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
          What Do You Want To Make Today?
        </h1>

        <div className="flex items-center gap-3 sm:gap-4 mb-6 max-w-lg mx-auto px-2">
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
          className="group mx-auto mb-10 flex max-w-md flex-col items-center gap-1.5 rounded-2xl border border-purple-200/90 bg-white/70 px-6 py-4 shadow-sm backdrop-blur-sm transition-all hover:border-purple-300 hover:bg-white/95 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
        >
          <span className="flex items-center gap-2 text-sm font-semibold text-purple-900 md:text-[0.95rem]">
            <FlaskConical
              className="h-4 w-4 shrink-0 text-purple-600 opacity-90 group-hover:opacity-100"
              aria-hidden
            />
            Fix my recipe
          </span>
          <span className="text-center text-xs leading-relaxed text-muted-foreground md:max-w-[32ch]">
            Something turned out weird? We&apos;ll help you figure out what likely went wrong and what to change next time.
          </span>
          <span className="text-center text-[11px] leading-snug text-purple-800/75 md:max-w-[36ch]">
            Got an old recipe with a mystery measurement? Type it in and switch between tablespoons and teaspoons—we&apos;ll
            flag amounts that look off before they ruin the batch.
          </span>
          <span className="mt-0.5 text-[11px] font-medium text-purple-600 opacity-90 group-hover:opacity-100">
            Open debugger →
          </span>
        </Link>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Pick one path. We’ll point you to the right tool so you can fix a recipe or build something new — with chemistry you can actually use.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          <a
            href="#home-bake"
            onClick={handleBakeClick}
            className="group flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 px-6 py-8 shadow-md hover:shadow-xl hover:border-amber-400 hover:scale-[1.02] transition-all text-center min-h-[140px]"
          >
            <span className="text-4xl" aria-hidden>
              🍪
            </span>
            <span className="text-lg font-bold text-amber-900">Bake</span>
            <span className="text-xs text-muted-foreground leading-snug">Cookies, cakes &amp; brownies</span>
            <span className="text-xs font-medium text-amber-700 flex items-center gap-1 mt-1 opacity-80 group-hover:opacity-100">
              Pick a baking tool <ArrowRight className="w-3 h-3" />
            </span>
          </a>

          <a
            href={BEANSENSEI}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleBrewClick}
            className="group flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-stone-200 bg-gradient-to-br from-stone-50 to-amber-50 px-6 py-8 shadow-md hover:shadow-xl hover:border-stone-400 hover:scale-[1.02] transition-all text-center min-h-[140px]"
          >
            <span className="text-4xl" aria-hidden>
              ☕
            </span>
            <span className="text-lg font-bold text-stone-900">Brew</span>
            <span className="text-xs text-muted-foreground leading-snug">Coffee &amp; extraction</span>
            <span className="text-xs font-medium text-stone-700 flex items-center gap-1 mt-1 opacity-80 group-hover:opacity-100">
              Open BeanSensei <ArrowRight className="w-3 h-3" />
            </span>
          </a>

          <a
            href={ICECREAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCreateClick}
            className="group flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 px-6 py-8 shadow-md hover:shadow-xl hover:border-cyan-400 hover:scale-[1.02] transition-all text-center min-h-[140px]"
          >
            <span className="text-4xl" aria-hidden>
              🍨
            </span>
            <span className="text-lg font-bold text-cyan-900">Create</span>
            <span className="text-xs text-muted-foreground leading-snug">Ice cream &amp; frozen desserts</span>
            <span className="text-xs font-medium text-cyan-800 flex items-center gap-1 mt-1 opacity-80 group-hover:opacity-100">
              Open IceCreamSensei <ArrowRight className="w-3 h-3" />
            </span>
          </a>
        </div>

        <div className="max-w-xl mx-auto rounded-2xl border-2 border-purple-200 bg-white/90 backdrop-blur-sm p-6 shadow-lg">
          <p className="text-sm font-medium text-purple-900 mb-1">Tell us what you have</p>
          <p className="text-sm text-muted-foreground mb-4">
            We’ll suggest what you can make — then you can jump into a tool with real controls.
          </p>
          <a
            href="#ingredient-picker"
            onClick={handleIngredientsClick}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02]"
          >
            Start with ingredients
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground mt-10">
          All tools are 100% free. No signup required.
        </p>
      </div>
    </section>
  );
}
