import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { trackClicksToFixRecipe } from '../utils/analytics';

export default function FixRecipesOneVariableAtATime() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Baking Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent">
            Fix Recipes One Variable at a Time
          </h1>
          <p className="text-xl text-muted-foreground">
            The habit that separates guessing from engineering—and the reason Fix My Recipe nudges you toward single-lever tests.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>All levels</span>
          </div>
        </header>

        <div className="w-full h-72 bg-gradient-to-br from-teal-200 to-cyan-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl" aria-hidden>
            🎚️
          </span>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-teal-50 border-l-4 border-teal-500 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🎯</span>
            <div>
              <p className="font-bold text-teal-900 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 leading-relaxed">
                Changing one meaningful variable per bake (flour, fat, sugar, chill time, oven temp, mix time—but only{' '}
                <em>one</em> per run) tells you what actually moved the outcome. Multi-variable tweaks feel faster; they
                nearly always waste flour.
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Your brain wants to &quot;fix everything&quot; after a bad batch. Kitchen chemistry doesn&apos;t reward that
            impulse: two overlapping changes can cancel each other out or create a new problem. Fix My Recipe is built to
            suggest a short list so you can <strong>sequence</strong> experiments instead of stacking them.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent">
            What counts as one variable?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="bg-white rounded-xl p-5 border border-teal-100 shadow-sm">
              <h3 className="font-semibold mb-2">Good single-lever tests</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>+6% flour only (scale everything else)</li>
                <li>Chill dough 45 min vs none—same scoop weight</li>
                <li>Oven +15°F only, same time window</li>
                <li>Cream 90 seconds longer only</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
              <h3 className="font-semibold mb-2">Accidental multi-variable</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>New flour brand + new pan + new temp</li>
                <li>&quot;I added flour and sugar and an egg&quot;</li>
                <li>Different creaming time <em>and</em> warmer butter</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent">
            A simple notebook pattern
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-sm text-muted-foreground mb-8">
            <li>Baseline batch name + date + photo of crumb or shape.</li>
            <li>Hypothesis in one sentence (&quot;structure set too late&quot;).</li>
            <li>One numbered change and the measurement you used.</li>
            <li>Outcome vs baseline—only then add the next hypothesis.</li>
          </ol>

          <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-6 my-8">
            <p className="text-sm text-cyan-900">
              <strong>Pair with Fix My Recipe:</strong> run a diagnosis, pick the top suggestion that you can isolate, bake
              a half batch if you can, then re-run with optional grams filled in if the first pass was vague.
            </p>
          </div>

          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl p-8 my-12 text-center">
            <p className="text-lg mb-4">Put the habit into practice</p>
            <Link
              to="/fix-recipe"
              onClick={() => trackClicksToFixRecipe('article_fix_one_variable_at_a_time')}
              className="inline-flex rounded-xl bg-white text-teal-800 font-semibold px-8 py-3 hover:shadow-lg transition-shadow"
            >
              Open Fix My Recipe →
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">How small should a change be?</h3>
                <p className="text-muted-foreground text-sm">
                  Small enough to stay safe (especially leavening), large enough to see—often 5–10% around flour, fat, or
                  sugar in cookies, or 15°F on oven when structure is the issue.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can I ever change two things?</h3>
                <p className="text-muted-foreground text-sm">
                  After you know what each lever does alone, you can combine—engineers compose controls, they don&apos;t
                  start there.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-teal-100 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <div className="space-y-3 text-sm font-medium">
              <Link to="/baking-science/how-to-use-fix-my-recipe" className="block text-teal-700 hover:underline">
                → How to use Fix My Recipe
              </Link>
              <Link to="/baking-science/why-recipes-fail" className="block text-teal-700 hover:underline">
                → Why recipes fail
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
