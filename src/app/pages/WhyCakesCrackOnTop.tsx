import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCakesCrackOnTop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
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
            Why Cakes Crack on Top
          </h1>
          <p className="text-xl text-muted-foreground">
            Understand why your cake crust splits during baking and when it's a problem versus a feature.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Intermediate</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-pink-200 to-rose-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🎂</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            A cracked top on a cake can be alarming — or completely intentional. Pound cakes and banana breads are expected to crack; a delicate layer cake is not. Understanding why it happens lets you control it.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            The Cracking Mechanism
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Cracking happens when the exterior of the cake sets and forms a crust before the interior has finished expanding. As the interior continues to rise — pushed by steam, CO₂ from leavening, and expanding air — it has nowhere to go but through the crust, splitting it open. The crack is literally the interior forcing its way out.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200 my-10">
            <h3 className="text-xl mb-6">Cracking: Problem or Feature?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-green-700 mb-3">✓ Normal / Desirable</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pound cakes (expected center crack)</li>
                  <li>• Banana bread and quick breads</li>
                  <li>• Loaf cakes baked in a pan</li>
                  <li>• Any cake with high sugar content</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-red-700 mb-3">✗ Problematic</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Layer cakes (affects stacking)</li>
                  <li>• Cheesecakes (structural failure)</li>
                  <li>• Presentation cakes</li>
                  <li>• Deep, uneven cracks with doming</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Causes of Unwanted Cracking
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
              <h3 className="text-xl mb-3">🌡️ Oven Too Hot</h3>
              <p className="text-sm text-muted-foreground mb-3">
                A high oven temperature forms a hard crust on the exterior very quickly — before the interior has finished rising. As the batter inside continues to push upward, it ruptures the set crust, creating large cracks.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Reduce oven temp by 25°F and extend bake time slightly. Use an oven thermometer — most home ovens run 25–50°F hot.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3">🏔️ Batter Placed Too High in Oven</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The top heating element is closer to the top rack. More direct radiant heat sets the surface crust faster, while the bottom of the batter is still wet and rising.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Always bake cakes on the middle rack for even heat distribution.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100">
              <h3 className="text-xl mb-3">🧂 Too Much Leavening</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Excess baking powder or soda creates rapid, aggressive CO₂ production. The batter expands too fast and too forcefully, pushing through the surface crust before it's had time to set properly.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Measure leavening precisely — use level teaspoons, not heaped. Even ¼ teaspoon too much baking soda can cause cracking.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3">🌾 Too Much Flour</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Excess flour creates a stiffer batter that sets hard on the surface quickly. Combined with the rising interior, this rigidity makes cracking more likely and more severe.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Spoon and level flour when measuring, or weigh it. A stiff batter is a sign of too much flour.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
              <h3 className="text-xl mb-3">🫙 Pan Too Small</h3>
              <p className="text-sm text-muted-foreground mb-3">
                When batter fills more than ⅔ of the pan, the extra volume has to go somewhere. It rises above the rim and, with no room to spread, forces through the top crust dramatically.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Never fill cake pans more than ⅔ full. Use a larger pan or divide batter across two pans.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Intentional Cracking</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Many bakers intentionally score a line down the center of pound cake batter before baking — this guides the crack to form in a straight, attractive line rather than randomly. The scored line is a weak point in the forming crust, so the rising batter breaks through there predictably.
            </p>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Is a crack on top of a cake normal?</h3>
                <p className="text-muted-foreground text-sm">It depends on the cake. Pound cakes and loaf cakes are expected to crack — it's a natural part of their bake. Layer cakes and cheesecakes should not crack. The crack means the interior forced through the set crust.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">How do I prevent cake from cracking on top?</h3>
                <p className="text-muted-foreground text-sm">Lower oven temperature by 25°F, move to middle rack, ensure leavening is measured precisely, and don't overfill the pan (maximum ⅔ full). For pound cakes, you can guide the crack by scoring a line of softened butter down the center.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why do pound cakes crack on top?</h3>
                <p className="text-muted-foreground text-sm">Pound cakes are designed to crack — the high sugar, high fat batter sets a hard crust quickly while the interior continues rising. Some bakers enhance this by scoring butter down the center before baking to control where the crack forms.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can the wrong size pan cause cake cracking?</h3>
                <p className="text-muted-foreground text-sm">Yes. A too-small pan forces batter above ⅔ full, and the excess rise has nowhere to go but through the crust. Always use the pan size specified in the recipe.</p>
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
              <Link to="/cake-science/why-cakes-dry-out" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Dry Out</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Bake Perfect Cakes</h2>
            <p className="text-lg text-white/90 mb-6">
              Understand every variable in your cake before it goes into the oven with our science guides.
            </p>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
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
