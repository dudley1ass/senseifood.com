import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesSpreadTooMuch() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cookie Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Why Cookies Spread Too Much
          </h1>
          <p className="text-xl text-muted-foreground">
            Find out why cookies merge into each other and run off the pan — and how to dial back the spread.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-red-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">😱</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Opening the oven to find your cookies have merged into one giant flat sheet is a baker's nightmare. Excessive spreading happens when the fat melts and the dough flows outward faster than the structure can set. Several small fixes can solve this completely.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            The Spreading Mechanism
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Cookie dough is held together by fat, flour, and eggs in a semi-solid suspension. When you put it in the oven, heat melts the fat and dissolves the sugar — both of which cause outward flow. If this happens before the egg proteins coagulate and flour starches absorb the fat and gelatinize, the cookie spreads unchecked. The goal is to slow the spread and speed the set.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Causes & Fixes
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200">
              <h3 className="text-xl mb-3">🧈 Butter Too Soft or Melted</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Butter that's too warm is already partially liquid. The moment it hits the oven, it flows immediately before any structure forms. This is the single most common cause of excessive spreading.
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="bg-red-50 rounded-lg p-3 text-red-800">
                  <strong>❌ Problem:</strong> Greasy, soft butter or accidentally melted butter in the recipe.
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-green-800">
                  <strong>✓ Fix:</strong> Butter at 65–68°F. Should hold a shape, not smear. Chill dough after mixing.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">⚪ Too Much White Sugar</h3>
              <p className="text-sm text-muted-foreground mb-3">
                White sugar liquefies readily in the oven's heat, lowering the dough's viscosity and promoting spread. A recipe heavy in white sugar will always spread more than one with brown sugar.
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="bg-red-50 rounded-lg p-3 text-red-800">
                  <strong>❌ Problem:</strong> Recipe calls for all or mostly white sugar.
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-green-800">
                  <strong>✓ Fix:</strong> Swap up to half the white sugar for brown sugar, which holds moisture and resists spreading.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🌾 Too Little Flour</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Flour is the backbone of cookie structure. Insufficient flour means not enough protein and starch to contain the fat as it melts — the dough simply can't hold its shape.
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="bg-red-50 rounded-lg p-3 text-red-800">
                  <strong>❌ Problem:</strong> Scooping flour compacts it, leading to over-measuring. Resulting in surprisingly under-floured dough.
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-green-800">
                  <strong>✓ Fix:</strong> Spoon flour into the cup and level. Or use a scale: 1 cup = 120–125g.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <h3 className="text-xl mb-3">🧊 Warm Dough Going into Hot Oven</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Dough at room temperature (or warmer) means the fat is already near its melting point. It reaches liquid state in seconds once inside the oven.
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="bg-red-50 rounded-lg p-3 text-red-800">
                  <strong>❌ Problem:</strong> Baking straight from mixing, or on a warm day.
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-green-800">
                  <strong>✓ Fix:</strong> Refrigerate portioned dough balls for 30 min–24 hours before baking.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-100">
              <h3 className="text-xl mb-3">🍳 Greased Baking Sheet</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Extra grease at the base of the cookie means zero friction — the dough slides and spreads freely as soon as the fat softens.
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="bg-red-50 rounded-lg p-3 text-red-800">
                  <strong>❌ Problem:</strong> Greasing non-stick pans or reusing pan without cleaning.
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-green-800">
                  <strong>✓ Fix:</strong> Use parchment paper or silicone mat — no grease needed, and they reduce spread.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200 my-10">
            <h3 className="text-xl mb-6 text-center">Quick Fix Priority Order</h3>
            <div className="space-y-3">
              {[
                { num: '1', text: 'Chill the dough — easiest, highest impact', color: 'border-red-500 bg-red-50' },
                { num: '2', text: 'Check butter temp — should be firm, not greasy', color: 'border-orange-500 bg-orange-50' },
                { num: '3', text: 'Add 2 tbsp more flour — raises the spread threshold', color: 'border-amber-500 bg-amber-50' },
                { num: '4', text: 'Swap some white sugar for brown sugar', color: 'border-yellow-500 bg-yellow-50' },
                { num: '5', text: 'Switch from greased pan to parchment', color: 'border-green-500 bg-green-50' },
              ].map(item => (
                <div key={item.num} className={`border-l-4 ${item.color} pl-6 py-3 rounded-r-lg`}>
                  <span className="font-bold text-lg mr-3">{item.num}.</span>
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Can I fix cookies that have already spread too much?</h3>
                <p className="text-muted-foreground text-sm">Not the current batch — once baked, the structure is set. For future batches: chill the dough, verify butter was at the right temperature, add 2 tablespoons more flour, and check that leavening is fresh.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why do cookies spread more on the second baking sheet?</h3>
                <p className="text-muted-foreground text-sm">The pan is still warm from the first batch, causing butter to melt immediately on contact. Always cool baking sheets completely between batches, or use multiple pans.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does brown sugar prevent spreading?</h3>
                <p className="text-muted-foreground text-sm">Yes — brown sugar is hygroscopic and retains moisture, which increases dough viscosity and reduces spreading. Replacing some white sugar with brown is an effective fix for over-spreading.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why do cookies spread in the oven but puff up on the cooling rack?</h3>
                <p className="text-muted-foreground text-sm">That's actually normal and desirable. In the oven, fat melts and the cookie spreads. As it cools, the fat re-solidifies and pulls the cookie up slightly. A small rise during cooling indicates good fat structure.</p>
              </div>
            </div>
          </div>
          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/cookie-science/why-cookies-are-chewy" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Are Chewy</Link>
              <Link to="/cookie-science/why-cookies-get-crispy" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Get Crispy</Link>
              <Link to="/cookie-science/why-cookies-flatten" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Flatten</Link>
              <Link to="/cookie-science/brown-sugar-vs-white-sugar" className="block text-amber-700 hover:underline text-sm font-medium">→ Brown Sugar vs White Sugar</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Stop the Spread</h2>
            <p className="text-lg text-white/90 mb-6">
              Use CookieSensei to predict how much your cookies will spread before you bake.
            </p>
            <a
              href="https://cookiesensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Open CookieSensei
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
