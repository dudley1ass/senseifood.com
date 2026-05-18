import { ArrowRight, BookOpen, Wrench } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { trackCTAClick, trackClicksToFixRecipe } from '../utils/analytics';

const HOW_TO_PROMPTS = [
  'How to fix cookies that spread too much',
  'How to make ice cream that is not icy',
  'How to bake bread with a better rise',
  'How to build a balanced plate without counting every calorie',
  'How to correct a cake that sinks in the middle',
  'How to dial in coffee that tastes sour or bitter',
  'How to understand why your recipe failed',
  'How to eat well on busy weeknights',
] as const;

const ROTATE_MS = 4200;

export function Hero() {
  const [promptIndex, setPromptIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPromptIndex((i) => (i + 1) % HOW_TO_PROMPTS.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  const prompt = HOW_TO_PROMPTS[promptIndex];

  const scrollToCreate = () => {
    trackCTAClick('home_hero', 'create_food', '#create-food');
    document.getElementById('create-food')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', '#create-food');
  };

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 pt-10 sm:pt-14 pb-12 sm:pb-16 bg-[#faf3e8]">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,rgba(217,119,6,0.22),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_100%_80%,rgba(180,83,9,0.08),transparent)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f3e6d4_0%,#faf3e8_50%,#faf3e8_100%)]"
        aria-hidden
      />

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#9a3412]/90 mb-4">
          Food science · nutrition · how-to
        </p>

        <h1 className="font-serif text-[1.85rem] leading-tight sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-[#3d2914] mb-4">
          Where food meets how-to
        </h1>

        <p className="text-base sm:text-lg text-[#5c4535] leading-relaxed max-w-2xl mx-auto mb-6">
          Discover how to correct recipe failures, bake better bread, make smoother ice cream, and build balanced
          meals—with deep science articles and free Sensei tools to apply what you learn.
        </p>

        <div className="max-w-2xl mx-auto mb-8 rounded-xl bg-[#f5e8d6]/70 border border-amber-200/60 px-4 py-4 sm:px-6 sm:py-5">
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9a3412]/80 mb-2 text-center">
            Start here
          </p>
          <p
            className="font-serif text-lg sm:text-2xl text-[#3d2914] leading-snug min-h-[3rem] sm:min-h-[2.75rem] flex items-center justify-center text-center"
            aria-live="polite"
            aria-atomic="true"
          >
            {prompt}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6">
          <Link
            to="/articles"
            onClick={() => trackCTAClick('home_hero', 'browse_articles', '/articles')}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#9a3412] text-[#faf3e8] px-6 py-3 text-sm font-semibold shadow-md shadow-amber-900/15 hover:bg-[#7c2d12] transition-colors"
          >
            <BookOpen className="h-4 w-4 shrink-0" aria-hidden />
            Browse articles
          </Link>
          <Link
            to="/fix-recipe"
            onClick={() => {
              trackClicksToFixRecipe('home_hero');
              trackCTAClick('home_hero', 'fix_recipe', '/fix-recipe');
            }}
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#9a3412] bg-[#faf3e8]/80 text-[#7c2d12] px-6 py-3 text-sm font-semibold hover:bg-[#f5e8d6] transition-colors"
          >
            <Wrench className="h-4 w-4 shrink-0" aria-hidden />
            Fix a recipe
          </Link>
          <button
            type="button"
            onClick={scrollToCreate}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-amber-300/80 bg-[#fff7ed] text-[#7c2d12] px-6 py-3 text-sm font-semibold hover:border-amber-400 hover:bg-[#ffedd5] transition-colors"
          >
            Create your own food
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#7a5c44] font-medium">Free tools and articles. No signup required.</p>
      </div>
    </section>
  );
}
