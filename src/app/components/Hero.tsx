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
    <section className="relative overflow-hidden px-4 sm:px-6 pt-10 sm:pt-14 pb-12 sm:pb-16 bg-[#faf8f5]">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(180,120,60,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.35] bg-[linear-gradient(180deg,#f5f0e8_0%,#faf8f5_45%,#faf8f5_100%)]"
        aria-hidden
      />

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-amber-900/70 mb-4">
          Food science · nutrition · how-to
        </p>

        <h1 className="font-serif text-[1.85rem] leading-tight sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-stone-900 mb-4">
          Where food meets how-to
        </h1>

        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto mb-6">
          Discover how to correct recipe failures, bake better bread, make smoother ice cream, and build balanced
          meals—with deep science articles and free Sensei tools to apply what you learn.
        </p>

        <div className="max-w-2xl mx-auto mb-8 border-l-2 border-amber-800/40 pl-4 sm:pl-5 text-left sm:text-center sm:border-l-0 sm:pl-0">
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500 mb-2 sm:text-center">
            Start here
          </p>
          <p
            className="font-serif text-lg sm:text-2xl text-stone-900 leading-snug min-h-[3rem] sm:min-h-[2.75rem] flex items-center sm:justify-center"
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
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-stone-900 text-[#faf8f5] px-6 py-3 text-sm font-semibold shadow-md hover:bg-stone-800 transition-colors"
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
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-stone-800 bg-transparent text-stone-900 px-6 py-3 text-sm font-semibold hover:bg-stone-900/5 transition-colors"
          >
            <Wrench className="h-4 w-4 shrink-0" aria-hidden />
            Fix a recipe
          </Link>
          <button
            type="button"
            onClick={scrollToCreate}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white text-stone-800 px-6 py-3 text-sm font-semibold hover:border-stone-400 hover:bg-stone-50 transition-colors"
          >
            Create your own food
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-stone-500 font-medium">Free tools and articles. No signup required.</p>
      </div>
    </section>
  );
}
