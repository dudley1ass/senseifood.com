import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { trackClicksToFixRecipe } from '../utils/analytics';

export default function HowToDebugCakeProblems() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cake Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            How to Debug Cake Problems
          </h1>
          <p className="text-xl text-muted-foreground">
            Dense layers, sunk centers, dryness, and gummy streaks—map symptoms to structure and moisture so your next bake is a targeted fix.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>7 min read</span>
            <span>•</span>
            <span>Practical</span>
          </div>
        </header>

        <div className="w-full h-72 bg-gradient-to-br from-pink-200 to-rose-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl" aria-hidden>
            🎂
          </span>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🧪</span>
            <div>
              <p className="font-bold text-rose-900 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 leading-relaxed">
                Cakes fail in <strong>foam</strong>, <strong>structure set</strong>, or <strong>moisture balance</strong>.
                Tell which by cutting: gummy bands often mean mixing or temp; tunnels mean collapsed; dry crumbs mean bake
                loss or formula. Use Fix My Recipe → Cake + closest symptom to line up levers with articles.
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Unlike cookies, cake problems often show up in the crumb cross-section. Your eyes are already doing half the
            diagnosis—this page names what you&apos;re seeing in baking terms.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Four common patterns
          </h2>
          <div className="grid gap-4 my-8">
            <div className="bg-white rounded-xl p-5 border border-pink-100">
              <h3 className="font-semibold text-pink-900 mb-2">Collapsed or sunk middle</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Structure released before the crumb finished setting—underbake, early cooling shock, or too-weak foam for
                the amount of leavening.
              </p>
              <p className="text-xs text-rose-700">
                Fix My Recipe: try <em>collapse</em> or <em>sink</em>; confirm internal temp next bake.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-rose-100">
              <h3 className="font-semibold text-rose-900 mb-2">Heavy or dense</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Under-aerated batter, deflated foam from overmixing after flour, or insufficient liquid mobility.
              </p>
              <p className="text-xs text-rose-700">Fix My Recipe: <em>too-dense</em>; audit creaming and folding.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-purple-100">
              <h3 className="font-semibold text-purple-900 mb-2">Dry mouthfeel</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Overbaking, low fat or sugar for the flour load, or pan size speeding evaporation.
              </p>
              <p className="text-xs text-rose-700">Fix My Recipe: <em>dry</em>; pull earlier; check pan specs.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-pink-100">
              <h3 className="font-semibold text-pink-900 mb-2">Gummy layer at bottom</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Often temperature stratification or underbaked core in a tall pan—don&apos;t assume more flour first.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Before you rebake
          </h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-8">
            <li>Confirm oven with a thermometer; cakes are sensitive to early spike temps.</li>
            <li>Match pan size and material to the recipe—surface area changes timing nonlinearly.</li>
            <li>One variable next round (see the one-variable guide in Baking Science).</li>
          </ul>

          <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-8 my-12 text-center">
            <p className="mb-4 text-white/95">Run cake mode in the debugger</p>
            <Link
              to="/fix-recipe?category=cake"
              onClick={() => trackClicksToFixRecipe('article_how_to_debug_cake_cta')}
              className="inline-flex rounded-xl bg-white text-rose-900 font-semibold px-8 py-3"
            >
              Open Fix My Recipe — Cake →
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Toothpick clean but still sunk—how?</h3>
                <p className="text-muted-foreground text-sm">
                  Carryover continues outside the oven; if you opened the door early or pulled from a too-hot oven edge,
                  centers can fall while still “testing done.”
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does Fix My Recipe replace CakeSensei?</h3>
                <p className="text-muted-foreground text-sm">
                  Here you get language + first-pass levers; CakeSensei is for deeper ratio play when you want numeric
                  iteration.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <div className="space-y-3 text-sm font-medium">
              <Link to="/cake-science/why-cakes-collapse" className="block text-pink-700 hover:underline">
                → Why cakes collapse
              </Link>
              <Link to="/cake-science/why-cakes-are-dense" className="block text-pink-700 hover:underline">
                → Why cakes are dense
              </Link>
              <Link to="/cake-science/why-cakes-taste-dry" className="block text-pink-700 hover:underline">
                → Why cakes taste dry
              </Link>
              <Link to="/baking-science/how-to-use-fix-my-recipe" className="block text-pink-700 hover:underline">
                → How to use Fix My Recipe
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
