import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesFlatten() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cookie Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Why Cookies Flatten
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn why cookies come out flat and thin — and how to fix it with simple adjustments to fat, flour, and temperature.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-amber-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🫓</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Flat cookies are one of the most common baking frustrations. You expect puffy, thick rounds and pull out pancake-thin wafers instead. Almost always, this comes down to fat melting before the cookie structure has a chance to set.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Why Cookies Spread and Flatten
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Cookie dough is a balance between spreading forces (fat melting, sugar dissolving) and setting forces (proteins coagulating, starches gelatinizing). If fat melts before the structure sets — due to warm dough, too much fat, or wrong flour ratio — the cookie collapses outward into a flat disc.
          </p>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4">The Flatness Race</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🏃</span>
                  <h4 className="font-medium text-red-700">Spreading forces (cause flattening)</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-9">Fat melting outward • Sugar dissolving and flowing • Warm dough temperature</p>
              </div>
              <div className="text-center text-2xl font-bold text-orange-400">VS</div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🛡️</span>
                  <h4 className="font-medium text-green-700">Setting forces (prevent flattening)</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-9">Proteins coagulating • Starches absorbing fat • Leavening creating lift</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Top Causes of Flat Cookies
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🧈 Butter Too Warm or Melted</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Room-temperature butter should still hold its shape — if it's greasy or melted, it flows immediately in the oven before the dough sets. This is the #1 cause of flat cookies.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Use butter that's 65–68°F — slightly cool to the touch, holds a fingerprint but doesn't smear. If butter melted, refrigerate the dough for 30 min before baking.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🌡️ Dough Not Chilled</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Warm dough goes into the oven already in a softened state. The fat starts melting immediately rather than allowing any structure to form first.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Chill portioned dough balls for at least 1 hour (or overnight) before baking. Cold dough spreads slower, allowing structure to set.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <h3 className="text-xl mb-3">🌾 Too Little Flour</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Flour provides the structure that holds cookies up. Under-measuring flour (especially by scooping rather than spooning into the cup) means not enough protein and starch to support the fat — the cookie collapses.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Spoon flour into the measuring cup and level off, or weigh it (1 cup = 120–125g). Don't scoop directly from the bag.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🥚 Too Much Fat or Sugar</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Excess butter or white sugar both increase spread. Sugar dissolves and flows; fat melts and lubricates. Too much of either overwhelms the flour's structural capacity.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Follow the recipe ratios carefully. If still flat, reduce butter by 1–2 tablespoons or add 2–4 tablespoons extra flour.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-100">
              <h3 className="text-xl mb-3">🍳 Greased or Warm Baking Sheet</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Greasing a non-stick pan adds extra fat at the base, promoting spreading. Reusing a hot baking sheet from a previous batch starts the melting process before the oven even heats the dough.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Use parchment paper instead of greasing. Always cool baking sheets fully between batches (run cold water over the underside if in a hurry).
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🔴 Expired or Missing Leavening</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Old baking soda or powder that's lost potency can't create the CO₂ bubbles that lift cookies upward. Without upward loft, the cookie only spreads sideways.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Test baking soda by adding to hot water — it should fizz vigorously. Test baking powder with hot water — should bubble immediately. Replace if old.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Oven Temperature Matters</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A too-low oven temperature gives fat more time to melt before structure sets, resulting in flatter cookies. A properly preheated oven (325–375°F) sets the outer structure quickly while the interior is still spreading, halting excessive flatness. Always preheat for at least 15–20 minutes.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Fix Flat Cookies for Good</h2>
            <p className="text-lg text-white/90 mb-6">
              Use CookieSensei to adjust your recipe and predict spread before you bake.
            </p>
            <a
              href="https://cookiesensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
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
