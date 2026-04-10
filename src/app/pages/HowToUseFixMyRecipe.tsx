import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { trackClicksToFixRecipe } from '../utils/analytics';

export default function HowToUseFixMyRecipe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Baking Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
            How to Use Fix My Recipe
          </h1>
          <p className="text-xl text-muted-foreground">
            SenseiFood&apos;s built-in recipe debugger: what it does, how to read the results, and how to turn suggestions into a real test batch.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>All levels</span>
          </div>
        </header>

        <div className="w-full h-72 bg-gradient-to-br from-violet-200 to-pink-200 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl" aria-hidden>
            🔧
          </span>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-violet-50 border-l-4 border-violet-500 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">⚡</span>
            <div>
              <p className="font-bold text-violet-900 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 leading-relaxed">
                Choose your category and the problem that best matches what you saw, add grams if you have them, tap{' '}
                <strong>Diagnose</strong>, then change <strong>one variable</strong> on the next bake. The tool is
                rule-based (no chatbot)—every line should map to something you can actually adjust.
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Fix My Recipe is the bridge between reading science articles and changing your formula. It won&apos;t replace
            your judgment or your oven—but it gives you a structured first pass when you&apos;re tired, frustrated, or
            staring at a flat tray of cookies wondering what moved.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
            The four steps
          </h2>
          <div className="space-y-5 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-violet-100">
              <h3 className="text-xl mb-2">1. Pick the category</h3>
              <p className="text-sm text-muted-foreground">
                Cookies, cake, coffee, and the others load different rule packs. If you&apos;re between two, choose the one
                that matches the <em>main</em> thing you were making—not the side dish.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100">
              <h3 className="text-xl mb-2">2. Pick the closest problem</h3>
              <p className="text-sm text-muted-foreground">
                Think in outcomes: too much spread, won&apos;t spread, bitter cup, dense crumb. You don&apos;t need the
                &quot;right&quot; word—pick what <em>looks</em> closest. Optional grams unlock ratio hints (e.g. fat vs
                flour) when they matter.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-fuchsia-100">
              <h3 className="text-xl mb-2">3. Read findings like a checklist</h3>
              <p className="text-sm text-muted-foreground">
                Each card is a hypothesis plus suggested levers. Confidence is relative: <strong>high</strong> means the
                pattern is common; <strong>low</strong> still might be useful when you&apos;re out of ideas. Follow the
                related article links when you want the full chemistry story.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-violet-100">
              <h3 className="text-xl mb-2">4. Use sliders as a sanity preview</h3>
              <p className="text-sm text-muted-foreground">
                The what-if sliders don&apos;t call a server—they narrate typical tradeoffs (flour vs spread, sugar vs
                browning). Use them to rehearse a direction before you commit butter and time.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
            Where Fix My Recipe fits in your workflow
          </h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm mb-8">
            <li>
              <strong>Before</strong> you rewrite the whole recipe, run one diagnosis and verify measurement and temperature
              basics (scale, oven thermometer, butter temp).
            </li>
            <li>
              <strong>After</strong> a failed bake, jot what you saw <em>first</em>, then open the tool—memory fades fast.
            </li>
            <li>
              <strong>With</strong> CookieSensei or other Sensei apps: use Fix My Recipe for language and first principles;
              use the calculators when you want numeric prediction.
            </li>
          </ul>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 my-12 text-center">
            <h2 className="text-2xl mb-3">Open the debugger</h2>
            <p className="text-white/90 mb-6 text-sm max-w-xl mx-auto">
              Article pages on this site link here with problem context prefilled—start from the bar at the bottom or go
              straight in.
            </p>
            <Link
              to="/fix-recipe"
              onClick={() => trackClicksToFixRecipe('article_how_to_use_fix_my_recipe')}
              className="inline-flex items-center justify-center rounded-xl bg-white text-purple-800 font-semibold px-8 py-3 hover:shadow-lg transition-shadow"
            >
              Go to Fix My Recipe →
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Is this AI?</h3>
                <p className="text-muted-foreground text-sm">
                  No. Rules and signals live in the codebase so results stay explainable and consistent. You can read the
                  science articles to verify the reasoning.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Do I have to enter grams?</h3>
                <p className="text-muted-foreground text-sm">
                  No. Grams only sharpen a subset of rules (mostly cookie ratios). You can still get value from
                  problem-only diagnosis.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why only one change per retest?</h3>
                <p className="text-muted-foreground text-sm">
                  If you move five variables, you won&apos;t know what fixed it. See our companion article on the
                  one-variable rule below.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-violet-100 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <div className="space-y-3 text-sm font-medium">
              <Link to="/baking-science/fix-recipes-one-variable-at-a-time" className="block text-violet-700 hover:underline">
                → Fix recipes one variable at a time
              </Link>
              <Link to="/baking-science/why-recipes-fail" className="block text-violet-700 hover:underline">
                → Why recipes fail — the big picture
              </Link>
              <Link to="/cookie-science/how-to-debug-cookie-batch-issues" className="block text-violet-700 hover:underline">
                → How to debug cookie batch issues
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
