import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyPieCrustGetsTough() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-4 py-2 rounded-full text-sm mb-6">
            Pie Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
            Why Pie Crust Gets Tough
          </h1>
          <p className="text-xl text-muted-foreground">
            Understand why pie crust turns hard and chewy instead of tender and flaky — and how gluten control is the key to fixing it.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>7 min read</span>
            <span>•</span>
            <span>Intermediate</span>
            <span>🥧</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">💪</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Tough pie crust is almost always a gluten problem. When gluten develops too much during mixing, the dough becomes elastic and rigid — baking into a hard, chewy shell instead of a tender, crumbly, flaky crust. The good news: gluten development is entirely controllable.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
            Why Gluten Makes Crust Tough
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Gluten forms when two wheat proteins — glutenin and gliadin — bond together in the presence of water. The more you mix and work the dough, the more bonds form and the stronger and more elastic the gluten network becomes. In bread, this elasticity is desirable. In pie crust, it's the enemy. A strong gluten network creates a tough, rubbery crust that shrinks during baking and has none of the delicate crumbliness you want.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-xl mb-6">Tender vs. Tough Crust: What Changes</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-amber-200">
                  <th className="text-left py-3 text-amber-800">Factor</th>
                  <th className="text-left py-3 text-green-700">Tender Crust</th>
                  <th className="text-left py-3 text-red-700">Tough Crust</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100">
                <tr>
                  <td className="py-3 font-medium">Mixing</td>
                  <td className="py-3 text-muted-foreground">Just until combined</td>
                  <td className="py-3 text-muted-foreground">Over-worked, smooth</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Water</td>
                  <td className="py-3 text-muted-foreground">Minimum needed</td>
                  <td className="py-3 text-muted-foreground">Too much added</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Fat temperature</td>
                  <td className="py-3 text-muted-foreground">Cold, in chunks</td>
                  <td className="py-3 text-muted-foreground">Warm, fully blended</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Resting</td>
                  <td className="py-3 text-muted-foreground">30–60 min chilled</td>
                  <td className="py-3 text-muted-foreground">Rolled immediately</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Rolling</td>
                  <td className="py-3 text-muted-foreground">Minimal passes</td>
                  <td className="py-3 text-muted-foreground">Rolled repeatedly</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
            Top Causes of Tough Pie Crust
          </h2>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">🥄 Over-Mixing the Dough</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                This is the single most common cause. Every time you squeeze, press, or fold the dough, more gluten bonds form. Professional pastry chefs mix pie crust in seconds — not minutes. The moment the dough just barely holds together, you stop. There should still be visible butter chunks and the mixture shouldn't look completely smooth.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Use a light hand and stop mixing the moment the dough comes together. Rough and shaggy is correct. Smooth and supple means over-worked.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4">💧 Too Much Water</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Water is what activates gluten. Every extra tablespoon you add beyond what's strictly necessary creates more opportunity for gluten to form. Over-watered dough also becomes sticky, which leads to more flour added to the work surface, which leads to more gluten — a vicious cycle.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Add ice water one tablespoon at a time, stopping as soon as the dough holds together when pinched. Use ice water — cold temperature slows gluten formation as you add it.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">🌡️ Warm Fat</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Cold fat coats flour proteins in a physical barrier that prevents them from hydrating and forming gluten. Warm or room-temperature fat blends smoothly into the flour instead of staying as separate pieces — removing that protective barrier and leaving flour proteins free to bond into gluten when water is added.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Cube butter and freeze for 15 minutes before using. Work quickly — if the dough warms during rolling, refrigerate it for 10 minutes before continuing.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4">⏩ Not Resting the Dough</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Even with minimal mixing, some gluten will form. Fresh dough has tight, tense gluten strands. Rolling it immediately stretches those tense strands even further. Resting the dough in the refrigerator for 30–60 minutes allows gluten to relax — so it rolls out more easily without developing further, and shrinks less in the oven.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Always rest dough wrapped in plastic in the fridge for at least 30 minutes before rolling. Overnight is even better.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-yellow-200">
            <h3 className="text-2xl mb-4">🔄 Re-Rolling Scraps</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Every time you gather and re-roll scraps, you work the dough again — developing more gluten. Scraps that have been rolled twice are noticeably tougher than first-roll crust. This is why the top crust or decorative cutouts from re-rolled scraps often taste noticeably harder.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Stack and press scraps together gently rather than kneading them. Chill before re-rolling. Accept that scrap-rolled crust will be slightly tougher — use it for the top or decorations where texture matters less.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">🌾 Too Much Flour on the Work Surface</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Flour dusted onto the work surface gets incorporated into the dough as you roll. Extra flour means extra protein — which bonds into more gluten. Sticky dough that requires heavy flouring is itself a sign the dough has too much water or is too warm.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Use the minimum flour needed. Roll between two sheets of parchment paper to eliminate the need for surface flour entirely.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-xl mb-6">Quick Fix Guide — If Your Crust Is Coming Out Tough:</h3>
            <div className="space-y-3">
              {[
                'Use cold butter — freeze cubed butter for 15 min before mixing',
                'Stop mixing earlier — the dough should still look shaggy, not smooth',
                'Add less water — tablespoon by tablespoon until dough just holds',
                'Rest the dough — 30–60 min in the fridge before rolling',
                'Roll between parchment — eliminates excess flour incorporation',
                'Chill again after fitting — refrigerate the fitted crust 30 min before baking',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-700 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <p className="text-sm text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Acid Inhibits Gluten</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Adding 1 teaspoon of apple cider vinegar or lemon juice to your ice water inhibits gluten formation at the molecular level — acid interferes with the disulfide bonds that strengthen gluten networks. This is a pastry chef trick for extra-tender crust with no flavor impact at these quantities. Vodka (which is 60% water, 40% ethanol) works similarly — alcohol doesn't activate gluten the way water does, so you can add more liquid for workability without developing more gluten.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Can I fix over-worked pie crust dough?</h3>
                <p className="text-muted-foreground text-sm">Partially. Once gluten has developed you can't reverse it, but resting the dough in the fridge for 1–2 hours allows gluten strands to relax significantly. The crust won't be as tender as properly handled dough, but it will be noticeably better than baking it immediately.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does my pie crust shrink when blind baking?</h3>
                <p className="text-muted-foreground text-sm">Shrinkage is gluten contracting under heat — the same problem as toughness. The fixes are identical: less mixing, less water, cold fat, and resting. Also chill the fitted crust in the pan for 30 minutes before blind baking, and use pie weights to hold the sides in place.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does using cake flour make pie crust more tender?</h3>
                <p className="text-muted-foreground text-sm">Yes. Cake flour has lower protein content (8% vs 10–12% for all-purpose), which means less potential gluten formation. Replacing 25–50% of all-purpose flour with cake flour noticeably increases tenderness. Some bakers also add cornstarch to all-purpose flour for a similar effect.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Is tough pie crust still edible?</h3>
                <p className="text-muted-foreground text-sm">Absolutely — it's a texture issue, not a safety issue. Tough crust tastes fine; it just won't have that delicate, crumbly snap. Some people actually prefer a sturdier crust for deep-dish pies where the filling is very heavy or wet.</p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Pie Science</h3>
            <div className="space-y-3">
              <Link to="/pie-science/why-pie-crust-is-flaky" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Pie Crust Is Flaky — the science of layers and steam</Link>
              <Link to="/pie-science/why-pie-crust-shrinks" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Pie Crust Shrinks — gluten tension and how to prevent it</Link>
              <Link to="/pie-science/butter-vs-shortening-in-crust" className="block text-amber-700 hover:underline text-sm font-medium">→ Butter vs Shortening in Pie Crust — which fat makes the best crust</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Pie Crust Science</h2>
            <p className="text-lg text-white/90 mb-6">
              Explore all our pie and baking science articles to nail every technique.
            </p>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Browse All Articles
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
