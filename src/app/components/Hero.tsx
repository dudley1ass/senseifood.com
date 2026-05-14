import { Apple, ArrowRight, BookOpen, FlaskConical, ScanSearch, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { articlesIndexHref } from '../constants/articleLibraryNav';
import { trackCTAClick, trackClicksToFixRecipe, trackHomePath, trackToolStart } from '../utils/analytics';

const BEANSENSEI = 'https://beansensei.senseifood.com';
const ICECREAM_URL = 'https://icecreamsensei.senseifood.com';

const FOOD_SCIENCE_HREF = articlesIndexHref('all');
const NUTRITION_HREF = articlesIndexHref('nutrition');
const HUMAN_APPETITE_HREF = articlesIndexHref('human-brain');

/** Rotating “curiosity hooks” — biology, brain, chemistry, evolution (not recipe SEO). */
const CURIOSITY_QUESTIONS = [
  'Why do humans crave junk food more than broccoli?',
  'Why does pizza hit harder than a salad—for your brain?',
  'Why is fried food so hard to stop eating once you start?',
  'Why did sweetness mean “safe calories” for most of human history?',
  'Why does stress send you to the snack cabinet?',
  'Why do ultra-processed foods feel almost unfairly delicious?',
  'Why does salt make chocolate and caramel taste deeper—not just saltier?',
  'Why does crunch change how satisfying a bite feels?',
  'Why do comfort foods actually comfort (it is not only nostalgia)?',
  'Why does modern food hijack instincts meant for scarcity?',
] as const;

const ROTATE_MS = 4200;

export function Hero() {
  const [curiosityIndex, setCuriosityIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCuriosityIndex((i) => (i + 1) % CURIOSITY_QUESTIONS.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  const curiosity = CURIOSITY_QUESTIONS[curiosityIndex];
  const handlePillarScience = () => {
    trackCTAClick('home_pillar', 'food_science', FOOD_SCIENCE_HREF);
  };

  const handlePillarNutrition = () => {
    trackCTAClick('home_pillar', 'nutrition', NUTRITION_HREF);
  };

  const handlePillarRecipeIntel = () => {
    trackCTAClick('home_pillar', 'recipe_intelligence', '/fix-recipe');
    trackClicksToFixRecipe('home_pillar');
  };

  const handleBakeClick = () => {
    trackHomePath('bake', 'home_hero');
    trackCTAClick('home_hero', 'path_bake', '#pick-starting-point');
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
    <section className="relative overflow-hidden py-4 sm:py-6 md:py-8 px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 -z-10" />

      <div className="absolute top-12 left-6 w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-12 right-6 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-5 sm:mb-6 md:mb-7">
          <h1 className="text-[1.65rem] leading-snug sm:text-4xl md:text-5xl font-semibold tracking-tight text-purple-950 mb-3 sm:mb-4">
            Learn why food works
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
            Your brain still runs code written for scarcity—while modern food is loud on purpose. SenseiFood connects
            neuroscience, chemistry, evolution, and nutrition so cravings feel less like a character flaw and more like
            biology meeting the supermarket.
          </p>

          <div className="max-w-2xl mx-auto mb-5 rounded-2xl border border-indigo-200/90 bg-white/85 px-4 py-3.5 shadow-sm backdrop-blur-sm">
            <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600 mb-1.5">
              Questions we keep coming back to
            </p>
            <p
              className="text-[1.05rem] sm:text-xl font-semibold text-indigo-950 leading-snug min-h-[3.25rem] sm:min-h-[2.85rem] flex items-center justify-center text-center px-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {curiosity}
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] sm:text-xs text-muted-foreground">
              <span>New library tabs: Brain &amp; eating · Flavor chemistry · Evolution</span>
            </div>
            <Link
              to={HUMAN_APPETITE_HREF}
              onClick={() => trackCTAClick('home_curiosity', 'browse_human_appetite', HUMAN_APPETITE_HREF)}
              className="mt-2.5 inline-flex items-center justify-center gap-1 text-xs sm:text-sm font-semibold text-indigo-700 hover:text-indigo-900"
            >
              Read the human-appetite series
              <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full mb-5 sm:mb-6 shadow-md shadow-purple-500/20">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" aria-hidden />
          <span className="text-xs sm:text-sm leading-tight">Food science, nutrition &amp; recipe intelligence—free, no account</span>
        </div>

        {/* Three pillars — nav anchor #learn-pillars (phase 1.5) */}
        <div id="learn-pillars" className="scroll-mt-24">
          <div className="grid sm:grid-cols-3 gap-3 max-w-4xl mx-auto mb-6 sm:mb-7 text-left">
          <Link
            to={FOOD_SCIENCE_HREF}
            onClick={handlePillarScience}
            className="group flex flex-col rounded-xl border-2 border-violet-200/90 bg-gradient-to-br from-violet-50/95 to-purple-50/80 p-3.5 sm:p-4 shadow-sm transition-all hover:border-violet-400 hover:shadow-md hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
          >
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-violet-700 shrink-0" aria-hidden>
                <FlaskConical className="h-4 w-4" />
              </span>
              <span className="font-bold text-violet-950 text-[13px] leading-tight sm:text-base">Food science</span>
            </div>
            <p className="text-[11px] sm:text-sm text-muted-foreground leading-snug mb-2 sm:mb-3 flex-1">
              <span className="sm:hidden">Bread, emulsions, ice cream, sugar &amp; texture—explained clearly.</span>
              <span className="hidden sm:inline">
                Why bread rises, how emulsions hold, why ice cream gets icy, how sugar changes texture—readable deep dives.
              </span>
            </p>
            <span className="text-xs font-semibold text-violet-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
              Explore articles <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
            </span>
          </Link>

          <Link
            to={NUTRITION_HREF}
            onClick={handlePillarNutrition}
            className="group flex flex-col rounded-xl border-2 border-emerald-200/90 bg-gradient-to-br from-emerald-50/95 to-teal-50/80 p-3.5 sm:p-4 shadow-sm transition-all hover:border-emerald-400 hover:shadow-md hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
          >
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 shrink-0" aria-hidden>
                <Apple className="h-4 w-4" />
              </span>
              <span className="font-bold text-emerald-950 text-[13px] leading-tight sm:text-base">Nutrition</span>
            </div>
            <p className="text-[11px] sm:text-sm text-muted-foreground leading-snug mb-2 sm:mb-3 flex-1">
              <span className="sm:hidden">Protein, fiber, satiety &amp; meals—evidence, not hype.</span>
              <span className="hidden sm:inline">
                Protein, fiber, satiety, glycemic patterns, and family eating—evidence explained without hype.
              </span>
            </p>
            <span className="text-xs font-semibold text-emerald-800 flex items-center gap-1 group-hover:gap-1.5 transition-all">
              Browse nutrition <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
            </span>
          </Link>

          <Link
            to="/fix-recipe"
            onClick={handlePillarRecipeIntel}
            className="group flex flex-col rounded-xl border-2 border-orange-200/90 bg-gradient-to-br from-orange-50/95 to-amber-50/80 p-3.5 sm:p-4 shadow-sm transition-all hover:border-orange-400 hover:shadow-md hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-800 shrink-0" aria-hidden>
                <ScanSearch className="h-4 w-4" />
              </span>
              <span className="font-bold text-orange-950 text-[13px] leading-tight sm:text-base">Recipe intelligence</span>
            </div>
            <p className="text-[11px] sm:text-sm text-muted-foreground leading-snug mb-2 sm:mb-3 flex-1">
              <span className="sm:hidden">Texture, spread, rise, extraction—causes &amp; what to try next.</span>
              <span className="hidden sm:inline">
                Rule-based debugger: odd texture, spread, rise, extraction—likely causes and what to try next.
              </span>
            </p>
            <span className="text-xs font-semibold text-orange-800 flex items-center gap-1 group-hover:gap-1.5 transition-all">
              Open Fix My Recipe <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
            </span>
          </Link>
          </div>
        </div>

        <div className="h-px max-w-md mx-auto bg-gradient-to-r from-transparent via-purple-200 to-transparent mb-4 sm:mb-5" aria-hidden />

        <p className="text-sm text-muted-foreground mb-2 max-w-xl mx-auto">
          Something just went wrong in the kitchen? Jump straight into the debugger—same science, faster path.
        </p>

        <Link
          to="/fix-recipe"
          onClick={handleFixRecipeClick}
          className="group mx-auto mb-4 sm:mb-5 flex max-w-md flex-col items-center gap-1 rounded-xl border border-purple-200/90 bg-white/70 px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm backdrop-blur-sm transition-all hover:border-purple-300 hover:bg-white/95 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
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
          Ready to build or dial something in? Pick a path—we&apos;ll send you to the right Sensei tool.
        </p>

        <div className="grid sm:grid-cols-3 gap-2 sm:gap-3 max-w-3xl mx-auto mb-2 sm:mb-3">
          <a
            href="#pick-starting-point"
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
