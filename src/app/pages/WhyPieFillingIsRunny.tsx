import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyPieFillingIsRunny() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Navigation />

      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-700 text-white px-4 py-2 rounded-full text-sm mb-6">
            Pie Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">
            Why Pie Filling Is Runny
          </h1>
          <p className="text-xl text-muted-foreground">
            Your pie didn't fail — your starch did. Learn the thickener science behind perfectly set pie filling that slices cleanly every time.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>7 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
            <span>🥧💦</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-amber-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">💦</span>
        </div>

        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🥧</span>
            <div>
              <p className="font-bold text-orange-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Runny pie filling is caused by insufficient thickener, underbaking (starch never fully activates), or cutting the pie before it cools. Let the pie cool completely for 2–4 hours — the filling thickens significantly as it cools.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Runny pie filling is one of those problems that feels like a complete failure but is almost entirely fixable with a better understanding of how starch thickeners work. The good news: the filling in your pie is doing exactly what physics tells it to — you just need to adjust the variables.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">
            How Pie Filling Thickens: The Starch Science
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Fruit pie fillings are thickened by starch — cornstarch, tapioca, arrowroot, or flour. All of these work through the same mechanism: <strong>starch gelatinization</strong>. Raw starch granules are dense, crystalline structures that don't dissolve in liquid. When heated in liquid, they absorb water, swell dramatically, and eventually burst — releasing amylose molecules that form a gel network trapping the liquid. This is what turns watery fruit juice into a thick, sliceable filling.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            The critical insight: starch gelatinization is temperature-dependent and time-dependent. If the filling doesn't get hot enough, or doesn't stay hot long enough, the starch never fully activates. And because starch gels are significantly firmer when cool than when hot, cutting into a pie too soon — before the gel has cooled and set — produces the illusion of a runny filling even when the starch has done its job.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200 my-10">
            <h3 className="text-xl mb-6">Thickener Comparison Guide</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-orange-200">
                  <th className="text-left py-3 text-orange-800">Thickener</th>
                  <th className="text-left py-3">Amount per 4 cups fruit</th>
                  <th className="text-left py-3">Sets at</th>
                  <th className="text-left py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-100 text-muted-foreground">
                <tr>
                  <td className="py-3 font-medium text-foreground">Cornstarch</td>
                  <td className="py-3">2–3 tbsp</td>
                  <td className="py-3">203°F</td>
                  <td className="py-3">Clear, glossy — most common choice</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-foreground">Tapioca starch</td>
                  <td className="py-3">2–3 tbsp</td>
                  <td className="py-3">149–176°F</td>
                  <td className="py-3">Sets at lower temp, stays clear when frozen</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-foreground">All-purpose flour</td>
                  <td className="py-3">4–5 tbsp</td>
                  <td className="py-3">212°F</td>
                  <td className="py-3">Opaque, less glossy, old-fashioned</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-foreground">Arrowroot</td>
                  <td className="py-3">2 tbsp</td>
                  <td className="py-3">158–176°F</td>
                  <td className="py-3">Very clear, but breaks down if overcooked</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">
            Causes & Fixes
          </h2>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4">🥄 Not Enough Thickener</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The most straightforward cause. Different fruits release wildly different amounts of liquid during baking — high-moisture fruits like strawberries, peaches, and cherries need significantly more thickener than drier fruits like apples or pears. Many recipes are written for average fruit, but fresh-picked, very ripe, or frozen-and-thawed fruit releases much more juice.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A useful rule: toss your fruit with sugar and let it macerate for 30 minutes. The juice that pools at the bottom of the bowl is what your thickener must handle. If there's a lot, you need more thickener than a standard recipe calls for.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Use 2.5–3 tablespoons of cornstarch per 4 cups of juicy fruit. For very wet fruit (frozen cherries, very ripe peaches), go up to 4 tablespoons. When in doubt, err on the side of more thickener — slightly over-thickened filling is still good.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">🌡️ Starch Never Fully Activated (Underbaking)</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Cornstarch requires the filling to reach at least 203°F to fully gelatinize. If the pie is removed from the oven before the filling reaches this temperature — which is common when the crust browns before the filling is fully hot — the starch activates only partially, producing a filling that's thick when hot but thins out as it cools because the starch gel hasn't fully formed.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Look for visual cues: fruit pie filling is ready when you can see the filling bubbling actively (not just at the edges — in the center). Those visible bubbles confirm the center has reached boiling temperature and the starch has had a chance to fully activate. Tent the crust with foil if it's browning too fast while the filling catches up.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Bake until filling bubbles actively through the vents or around the edges — not just a gentle simmer, but visible bubbling. If crust is browning too fast, cover edges with foil and continue baking until you see active bubbles.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4">⏰ Cutting the Pie Too Early</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                This is the most common cause of apparently runny filling — and the filling isn't actually runny, it just hasn't cooled enough to set. Starch gels are dramatically firmer when cold. A cornstarch-thickened filling at 200°F looks almost liquid. The same filling at room temperature holds a clean slice. At refrigerator temperature, it cuts like firm jam.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A fruit pie cut at the table straight from the oven will run. The same pie cut 4 hours later will hold its shape perfectly. This is not a failure — it's thermodynamics.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Let fruit pies cool completely at room temperature for a minimum of 2–4 hours before cutting. Overnight is even better. For serving at dinner, bake in the morning. Resist the urge to cut into a warm pie if you need clean slices.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">🍓 High Water Content Fruit</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Some fruits release extraordinary amounts of liquid when heated and sugared. Strawberries, blackberries, and very ripe peaches are notorious. Frozen fruit has already had its cell walls broken by the freezing process and releases even more liquid when thawed and baked. This excess liquid overwhelms a standard thickener quantity.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Macerate the fruit with sugar for 30 minutes, then drain and reduce the released juice in a saucepan by half before adding back to the filling. This concentrates flavor and dramatically reduces excess liquid. Or switch to tapioca starch which handles wet fruit better than cornstarch.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200 my-10">
            <h3 className="text-xl mb-6">Runny Filling Fix Guide (In Order of Impact):</h3>
            <div className="space-y-3">
              {[
                'Wait — let the pie cool completely 2–4 hours before cutting (most "runny" pies are just hot)',
                'Confirm filling was bubbling actively before you pulled it from the oven',
                'Next pie: add 1 extra tablespoon of cornstarch to your recipe',
                'Macerate fruit and drain excess juice before filling the crust',
                'Try tapioca starch instead of cornstarch for very juicy fruit',
                'Never use flour as your only thickener — it requires much more and clouds the filling',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-gradient-to-br from-orange-600 to-amber-700 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <p className="text-sm text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Cornstarch vs. Tapioca</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cornstarch gelatinizes at a higher temperature (203°F) than tapioca (149–176°F), which means cornstarch needs the filling to get very hot to fully activate. Tapioca activates at lower temperatures and maintains its gel strength better when frozen and reheated — making it the professional's choice for fruit pies that might be frozen or served reheated. However, large tapioca pearls need 15–30 minutes to hydrate before baking; instant tapioca or tapioca starch can be used directly. Both produce clearer, glossier fillings than flour.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Can I fix a runny pie filling after baking?</h3>
                <p className="text-muted-foreground text-sm">If it's still warm, wait — it may set as it cools. If it's fully cooled and still runny, you can scoop out the filling, heat it on the stove with an additional tablespoon of cornstarch mixed with cold water, then return it to the baked crust. Not ideal, but it works.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does my apple pie run but my blueberry pie doesn't?</h3>
                <p className="text-muted-foreground text-sm">Apples have higher water content and release significant steam during baking. Blueberries contain natural pectin that helps the filling gel on its own. Use more thickener for apple pie (2.5–3 tbsp cornstarch per 6 cups apples) than recipes typically call for.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does my pumpkin pie filling crack?</h3>
                <p className="text-muted-foreground text-sm">Custard-based pies like pumpkin crack from over-baking — the egg proteins over-coagulate and contract, pulling the filling apart. Pull pumpkin pie when the edges are set but the center still jiggles slightly. It sets fully as it cools.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does altitude affect pie filling thickness?</h3>
                <p className="text-muted-foreground text-sm">Yes — at high altitude, water boils at a lower temperature, which means cornstarch thickeners may not fully activate. Increase thickener by about 25% at elevations above 3,500 feet, and ensure the filling is visibly and actively bubbling before removing from the oven.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Pie Science</h3>
            <div className="space-y-3">
              <Link to="/pie-science/why-pie-crust-gets-soggy" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Pie Crust Gets Soggy — the moisture migration problem</Link>
              <Link to="/pie-science/why-pie-crust-is-flaky" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Pie Crust Is Flaky — mastering the crust while fixing the filling</Link>
              <Link to="/pie-science/why-pie-crust-shrinks" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Pie Crust Shrinks — gluten control for better structure</Link>
              <Link to="/pie-science/why-pie-crust-gets-tough" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Pie Crust Gets Tough — avoid this while fixing the filling</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-amber-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Pie Science</h2>
            <p className="text-lg text-white/90 mb-6">Build perfectly thickened pies every time with PieSensei.</p>
            <a href="https://piesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-orange-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">
              Try PieSensei →<ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
