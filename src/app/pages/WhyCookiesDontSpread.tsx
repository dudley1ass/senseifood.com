import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesDontSpread() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <Navigation />

      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cookie Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
            Why Cookies Don't Spread
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover why cookies stay as stiff balls in the oven and how to get them spreading and settling into proper rounds.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🧱</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Cookies that bake into dense, domed balls instead of flattening into rounds are the opposite problem from spreading too much — but they're just as frustrating. The dough is too stiff or too cold for the fat to flow, so the cookie holds its mounded shape throughout baking.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
            Why Spreading Matters
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Some spreading is desirable — it's what creates that thin, slightly crispy edge and gives cookies their classic round shape. Spreading also indicates the fat has melted and distributed through the cookie, contributing to flavor and texture. A cookie that doesn't spread at all stays cakey, dense, and under-developed in flavor.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
            Causes & Fixes
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🌾 Too Much Flour</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Excess flour absorbs all the fat before it can melt and flow. The dough is too stiff to spread — there's simply more structure than the fat can overcome. This is the most common cause of non-spreading cookies.
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="bg-red-50 rounded-lg p-3 text-red-800">
                  <strong>❌ Cause:</strong> Scooping flour directly packs in 20–30% more than measured. One cup can become 150g+ instead of 120g.
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-green-800">
                  <strong>✓ Fix:</strong> Spoon flour into the measuring cup and level. Better yet, weigh it: 1 cup = 120–125g.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <h3 className="text-xl mb-3">🧊 Dough Over-Chilled</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Chilling dough slows spreading — which is usually good — but rock-solid frozen dough can be too stiff to spread at all during normal bake times. The outside sets before the fat has warmed enough to flow.
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="bg-red-50 rounded-lg p-3 text-red-800">
                  <strong>❌ Cause:</strong> Baking frozen dough balls straight from freezer, or leaving portioned dough in the fridge for days.
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-green-800">
                  <strong>✓ Fix:</strong> Let dough balls sit at room temperature for 10–15 minutes before baking. Or flatten them slightly before putting in the oven.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🧈 Butter Cold or Under-Creamed</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Cold butter doesn't incorporate air properly when creamed. Under-creamed butter creates a dense, stiff dough where fat particles don't distribute evenly, limiting their ability to lubricate and flow during baking.
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="bg-red-50 rounded-lg p-3 text-red-800">
                  <strong>❌ Cause:</strong> Butter straight from the fridge, or rushing the creaming step.
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-green-800">
                  <strong>✓ Fix:</strong> Cream butter and sugar for 3–5 minutes until light and fluffy. Butter should be 65–68°F before starting.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🌡️ Oven Temperature Too High</h3>
              <p className="text-sm text-muted-foreground mb-3">
                A very hot oven sets the exterior structure almost instantly — before the interior fat has time to melt and flow outward. The cookie "freezes" in its ball shape with a domed, bready exterior.
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="bg-red-50 rounded-lg p-3 text-red-800">
                  <strong>❌ Cause:</strong> Oven set above 375°F, or oven runs hot (common in many home ovens).
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-green-800">
                  <strong>✓ Fix:</strong> Use an oven thermometer to verify temp. Try reducing oven temp by 25°F and baking a minute or two longer.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <h3 className="text-xl mb-3">⚪ Too Much Brown Sugar or Leavening</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Brown sugar retains moisture and resists spreading — too much limits how far the cookie flows. Excess baking powder or soda also creates too much upward lift, causing the cookie to puff rather than spread.
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="bg-red-50 rounded-lg p-3 text-red-800">
                  <strong>❌ Cause:</strong> Recipes with 100% brown sugar and extra leavening.
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-green-800">
                  <strong>✓ Fix:</strong> Swap some brown sugar for white. Reduce baking soda/powder slightly if cookies are too puffy.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-xl mb-4 text-center">Emergency Fix: Flatten Before Baking</h3>
            <p className="text-sm text-muted-foreground text-center mb-4">
              If you suspect your dough won't spread, simply press each ball down gently with your palm or a flat-bottomed glass to about ¾ of its original height before baking. This gives the spreading process a head start.
            </p>
            <div className="text-center text-4xl">👋→🍪</div>
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Dial In Your Spread</h2>
            <p className="text-lg text-white/90 mb-6">
              Use CookieSensei to predict and control cookie spread before you bake.
            </p>
            <a
              href="https://cookiesensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
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
