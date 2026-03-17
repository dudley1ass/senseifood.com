import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCakesDryOut() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-pink-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cake Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
            Why Cakes Dry Out
          </h1>
          <p className="text-xl text-muted-foreground">
            Understand what causes dry, crumbly cake and how to keep your cakes moist from oven to last slice.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-rose-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🏜️</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            A dry cake is a sad cake. Whether it comes out of the oven dry or dries out over a couple of days, the cause is the same: moisture has escaped the crumb. Keeping cake moist requires both good baking technique and proper storage.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
            What Holds Moisture in Cake?
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Moisture in cake comes from multiple sources: water in eggs, milk, butter, and any liquid ingredients. These are bound by <strong>fat</strong> (which coats proteins and slows evaporation) and <strong>sugar</strong> (which is hygroscopic — it attracts and holds water). A moist cake has enough fat and sugar to keep water trapped in the crumb structure even after baking.
          </p>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">How do I keep cake moist for several days?</h3>
                <p className="text-muted-foreground text-sm">Wrap tightly in plastic wrap pressed directly against cut surfaces. A layer of buttercream or ganache seals in moisture. Store at room temperature for up to 3 days; refrigerate only if filling requires it (and wrap very well).</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can I add moisture back to a dry cake?</h3>
                <p className="text-muted-foreground text-sm">Yes — brush each layer with simple syrup (equal parts sugar and water, simmered until dissolved) while the cake is still slightly warm. The syrup soaks in and restores moisture. Professional bakeries do this routinely.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does refrigerating cake make it dry?</h3>
                <p className="text-muted-foreground text-sm">Refrigerators are low-humidity environments that actively pull moisture from food. An unprotected cake dries out much faster in the fridge than at room temperature. Always wrap tightly before refrigerating.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why is my cake dry even though I followed the recipe?</h3>
                <p className="text-muted-foreground text-sm">Most likely: too much flour (common when scooping rather than spooning into the measuring cup), over-baking by even a few minutes, or ingredients at different temperatures that prevented proper emulsification.</p>
              </div>
            </div>
          </div>
          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/cake-science/why-cakes-sink" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Sink in the Middle</Link>
              <Link to="/cake-science/why-cakes-rise" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Rise</Link>
              <Link to="/cake-science/why-cakes-are-dense" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Are Dense</Link>
              <Link to="/cake-science/why-cakes-collapse" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Collapse</Link>
              <Link to="/cake-science/why-cakes-crack-on-top" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Crack on Top</Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-xl mb-6">Moisture Retention: Key Ingredients</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center p-4 bg-amber-50 rounded-xl">
                <div className="text-3xl mb-2">🧈</div>
                <h4 className="font-medium mb-1">Fat</h4>
                <p className="text-muted-foreground text-xs">Coats proteins, slows moisture loss, adds richness</p>
              </div>
              <div className="text-center p-4 bg-rose-50 rounded-xl">
                <div className="text-3xl mb-2">🍬</div>
                <h4 className="font-medium mb-1">Sugar</h4>
                <p className="text-muted-foreground text-xs">Hygroscopic — draws and holds water molecules</p>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-xl">
                <div className="text-3xl mb-2">🥛</div>
                <h4 className="font-medium mb-1">Dairy/Liquid</h4>
                <p className="text-muted-foreground text-xs">Provides water and emulsifiers (buttermilk is especially good)</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
            Why Cakes Dry Out: The Causes
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">⏱️ Over-Baking</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The most common cause. Every extra minute in the oven drives more moisture out of the crumb. Cake continues to bake on the hot pan after you remove it from the oven too — by the time it's cooled, it's overdone.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Start checking 5–10 minutes before the recipe says. A toothpick should come out with a few moist crumbs, not completely clean. Remove and let carryover cooking finish the job.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3">🌾 Too Much Flour</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Excess flour absorbs the moisture from the batter during mixing and baking, leaving the finished cake crumbly and dry. More flour also means more starch, which absorbs water during baking and holds less after it sets.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Weigh flour: 1 cup = 120–125g. Scooping directly from the bag packs flour and can add 30% more than the recipe intends.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
              <h3 className="text-xl mb-3">🧈 Not Enough Fat</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Reducing butter or oil to cut calories removes the very ingredient that lubricates the crumb and keeps moisture from evaporating. Low-fat cakes dry out faster and feel drier even when fresh.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Don't reduce fat below what the recipe calls for. If you want a "lighter" cake, use oil instead of butter — oil stays liquid at room temperature and keeps cakes moister longer.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🌬️ Improper Storage (Air Exposure)</h3>
              <p className="text-sm text-muted-foreground mb-3">
                A perfectly moist cake dries out rapidly when exposed to air. Exposed cut surfaces dry out in hours. An uncovered cake can lose significant moisture overnight, even without refrigeration.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Wrap cut cakes tightly in plastic wrap, press wrap directly against cut surfaces. Store whole frosted cakes under a dome or in an airtight container. Frosting seals in moisture.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3">❄️ Refrigeration Without Protection</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Refrigerators are dry environments that actively pull moisture from food. An unprotected cake dries out dramatically faster in the fridge than at room temperature.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Only refrigerate cake when necessary (cream cheese frosting, fillings). Always wrap tightly first. A thick layer of buttercream or ganache acts as a moisture seal.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">💡 Pro Tip: Simple Syrup Rescue</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If your cake came out dry, brush each layer with a simple syrup (equal parts sugar and water, simmered until dissolved) while still warm. The syrup soaks in and adds moisture back. Professional bakeries do this routinely to keep multi-day cakes moist.
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Bake Moist Cakes Every Time</h2>
            <p className="text-lg text-white/90 mb-6">
              Browse all our cake science articles to master the variables that matter.
            </p>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
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
