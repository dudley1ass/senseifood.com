import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCakesAreDense() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cake Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why Cakes Are Dense
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover what causes heavy, dense cake texture and how to get the light, airy crumb you're aiming for.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>7 min read</span>
            <span>•</span>
            <span>Intermediate</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-purple-200 to-pink-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🎂</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            A dense, heavy cake that sits like a brick is one of the most disappointing baking outcomes. Light, airy cakes depend on a precise balance of trapped air, proper leavening, and correct gluten development — knock any of these off and density follows.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Where Lightness Comes From
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Cake texture is built on air. Air is introduced in three ways: <strong>creaming fat and sugar</strong> (mechanical aeration), <strong>leavening reactions</strong> (CO₂ from baking powder/soda), and <strong>eggs</strong> (trapping air when beaten). The resulting air bubbles expand in the oven's heat. Any disruption to these three systems leads to a denser crumb.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200 my-10">
            <h3 className="text-xl mb-6">The Three Pillars of Cake Lightness</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-6 py-2 bg-purple-50 rounded-r-lg">
                <h4 className="font-medium mb-1">1. Mechanical Air (Creaming)</h4>
                <p className="text-sm text-muted-foreground">Creaming butter and sugar for 3–5 minutes creates thousands of tiny air pockets in the fat. This is the structural foundation of a light cake.</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-6 py-2 bg-pink-50 rounded-r-lg">
                <h4 className="font-medium mb-1">2. Chemical Air (Leavening)</h4>
                <p className="text-sm text-muted-foreground">Baking powder and soda release CO₂ gas when activated. These bubbles expand existing air pockets, inflating the crumb during baking.</p>
              </div>
              <div className="border-l-4 border-rose-500 pl-6 py-2 bg-rose-50 rounded-r-lg">
                <h4 className="font-medium mb-1">3. Egg Proteins (Structure)</h4>
                <p className="text-sm text-muted-foreground">Eggs trap and hold air when beaten. When baked, proteins set and lock the expanded air structure in place — preventing collapse.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Top Causes of Dense Cake
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
              <h3 className="text-xl mb-3">⏱️ Under-Creaming Butter and Sugar</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Rushing the creaming step is the #1 cause of dense cakes. You need a full 3–5 minutes of beating to properly aerate the fat. Under-creamed butter looks lumpy or yellow instead of pale and fluffy.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Beat butter and sugar until the mixture is pale, very light in color, and visibly fluffy. It should roughly double in volume. Don't skip this step.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
              <h3 className="text-xl mb-3">🌾 Too Much Flour</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Excess flour adds too much structure, weighing down the air pockets and preventing the batter from rising properly. The result is a tight, heavy crumb with no lift.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Weigh flour for accuracy (1 cup = 120–125g). Never scoop directly from the bag — this packs in 20–30% extra flour.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3">🧂 Not Enough Leavening (or Old Leavening)</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Too little baking powder/soda means insufficient CO₂ to inflate the batter. Old leavening that's lost its potency has the same effect — the cake rises very little and remains dense.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Test baking powder by adding 1 tsp to hot water — it should bubble vigorously. Replace leavening every 6–12 months.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
              <h3 className="text-xl mb-3">🥚 Cold Ingredients</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Cold eggs or milk added to creamed butter cause the fat to seize and curdle, breaking the emulsion. This collapses the trapped air and produces a dense, sometimes greasy batter.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Bring all ingredients to room temperature before mixing. This takes about 30–60 minutes out of the fridge.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
              <h3 className="text-xl mb-3">🥣 Over-Mixing After Adding Flour</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Once flour is added, gluten develops with every stroke. Over-mixing creates a tight, elastic gluten network that traps less air and gives the cake a tough, dense, bread-like texture.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Fold flour in gently with a spatula, or mix on low speed just until the flour disappears — usually 20–30 seconds. A few small streaks of flour are fine.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3">🌡️ Oven Too Cool</h3>
              <p className="text-sm text-muted-foreground mb-3">
                A too-cool oven means the batter takes too long to set. CO₂ bubbles escape before the protein and starch structure is firm enough to hold them in place — the cake deflates as it bakes.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Always preheat the oven for at least 20 minutes. Verify temperature with an oven thermometer.
              </div>
            </div>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">What makes a cake dense instead of fluffy?</h3>
                <p className="text-muted-foreground text-sm">Most commonly: under-creamed butter and sugar (not enough air incorporation), too much flour, cold ingredients, or over-mixing after adding flour (builds too much gluten).</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can I fix a dense cake after baking?</h3>
                <p className="text-muted-foreground text-sm">No — texture is set once baked. But you can improve it: brush with simple syrup to add moisture, or serve with whipped cream to create a textural contrast.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does oil make cakes denser than butter?</h3>
                <p className="text-muted-foreground text-sm">Oil-based cakes are actually moister and more tender than butter cakes, but they can feel denser because they lack the air incorporated by creaming. They're not structurally dense — they're fudgier.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why is my cake dense in the middle but fine on the edges?</h3>
                <p className="text-muted-foreground text-sm">Under-baking. The edges cook first and set properly; the center is still partially liquid or under-set. Use a toothpick test in the very center and ensure oven temperature is accurate with a thermometer.</p>
              </div>
            </div>
          </div>
          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/cake-science/why-cakes-sink" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Sink in the Middle</Link>
              <Link to="/cake-science/why-cakes-rise" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Rise</Link>
              <Link to="/cake-science/why-cakes-collapse" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Collapse</Link>
              <Link to="/cake-science/why-cakes-dry-out" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Dry Out</Link>
              <Link to="/cake-science/why-cakes-crack-on-top" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Crack on Top</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Bake Lighter Cakes</h2>
            <p className="text-lg text-white/90 mb-6">
              Explore all our cake science articles to master every variable.
            </p>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Browse All Cake Science
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
