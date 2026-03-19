import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyPieCrustGetsSoggy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Navigation />

      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-4 py-2 rounded-full text-sm mb-6">
            Pie Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
            Why Pie Crust Gets Soggy
          </h1>
          <p className="text-xl text-muted-foreground">
            Flaky on top, mush on the bottom — here's the moisture science behind soggy pie crust and how to prevent it every time.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>7 min read</span>
            <span>•</span>
            <span>Intermediate</span>
            <span>🥧💧</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">😩</span>
        </div>

        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🥧</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Soggy pie crust is caused by moisture migrating from the filling into the raw dough. Blind bake the crust before adding filling, brush with egg wash to create a moisture barrier, and start baking at high heat (425°F) to set the crust before moisture can penetrate.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            A soggy pie bottom is one of baking's most frustrating failures — especially because the top can look perfect while the base is completely underbaked. This is a moisture science problem, and once you understand how water moves through pie dough, you can prevent it reliably.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
            The Physics of Soggy Crust: Moisture Migration
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Pie crust becomes soggy through a process called moisture migration — liquid from the filling moves into the porous, starchy dough structure before or during baking. Raw pie dough is particularly vulnerable because its starches haven't gelatinized yet and its proteins haven't coagulated. The dough acts like a sponge, absorbing moisture from anything it contacts. Once moisture penetrates the dough, the bottom layer steams rather than bakes — producing a pale, dense, gummy texture instead of a crisp, flaky one.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-xl mb-6">Why the Bottom Crust Suffers Most</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="text-xl">⬇️</span>
                <p>Filling sits directly on the bottom crust — constant moisture contact during the entire bake</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🫙</span>
                <p>The pie dish insulates the bottom crust from oven heat, making it harder to bake through</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">💧</span>
                <p>Steam from the filling condenses against the cooler crust base, adding more moisture</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🌡️</span>
                <p>Top crust has direct oven air exposure and browns easily — bottom crust does not</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
            Causes & Fixes
          </h2>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">🚫 No Blind Baking</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Blind baking — baking the crust partially or fully before adding filling — is the single most effective prevention for soggy bottom crust. It gives the dough time to set its structure (proteins coagulate, starches gelatinize) before moisture from the filling can penetrate. A pre-baked crust has a sealed, rigid surface that resists moisture migration far better than raw dough.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                For custard and cream pies, blind bake fully (until golden). For fruit pies, partial blind baking (until set but not fully browned) before adding filling gives the base a head start without over-baking it during the second bake.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Line crust with parchment and fill with pie weights or dried beans. Bake at 375°F for 20–25 minutes until set and lightly golden. Remove weights, prick the base, bake 5 more minutes to dry out the bottom.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4">🥚 No Moisture Barrier (Egg Wash)</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Brushing the inside of the blind-baked crust with egg wash and returning it to the oven briefly creates a protein film that seals the crust surface. Egg proteins coagulate at 160°F into a flexible, water-resistant barrier that significantly slows moisture migration from the filling. This is a professional technique used by pastry chefs specifically to prevent soggy bottoms.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Alternatively, brushing the raw crust with melted butter, chocolate, or a thin layer of jam before adding fruit filling creates a fat-based barrier that moisture cannot easily penetrate.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> After removing pie weights, brush blind-baked crust with beaten egg or egg yolk. Return to oven for 3–4 minutes until egg sets into a glossy seal. Then add filling and continue baking.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">🌡️ Starting Temperature Too Low</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Starting a filled pie at too low a temperature gives moisture time to penetrate the bottom crust before it has set. The filling heats slowly, releasing liquid gradually, and the crust soaks it up before the oven temperature has built enough to bake the crust through. Starting hot (425°F) immediately creates radiant heat from the oven floor that hits the pie dish base and begins baking the bottom crust from beneath — racing the moisture to the set point.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Start fruit pies at 425°F for the first 20–25 minutes to set and partially brown the crust, then reduce to 375°F to cook the filling through without over-browning the top.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4">💧 Filling Too Wet or Added Too Hot</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Fruit fillings that haven't been properly thickened release excessive liquid during baking — there's simply too much moisture for the crust to resist. Adding a very hot filling to a raw or partially baked crust also accelerates moisture migration because hot liquid has lower viscosity and penetrates dough more easily.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Use adequate thickener (2–3 tablespoons cornstarch per 4 cups of fruit). Toss fruit with sugar and let it macerate 30 minutes, then drain the released juice before adding to the crust — this removes a significant portion of the free liquid. Always add cooled, not hot, fillings to blind-baked crusts.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">🫙 Wrong Pie Dish</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Glass and ceramic pie dishes are poor heat conductors — they absorb heat slowly and don't transfer it efficiently to the crust base. Metal pie pans, especially dark ones, conduct heat much faster, baking the bottom crust more aggressively and creating the crisp result you want. A glass dish can produce a perfectly browned top with a raw bottom because the glass itself is blocking heat from reaching the crust.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Use a dark metal pie pan for the crispest bottom crust. If using glass, place the pie dish directly on the oven's lowest rack or on a preheated baking stone/sheet to boost bottom heat.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-xl mb-6">Complete Soggy Crust Prevention Checklist:</h3>
            <div className="space-y-3">
              {[
                'Blind bake the crust before adding any filling — even for fruit pies, partial blind baking helps',
                'Brush blind-baked crust with egg wash and return to oven 3–4 minutes to seal it',
                'Start filled pies at 425°F for the first 20–25 minutes to blast-set the bottom',
                'Macerate fruit and drain excess liquid before adding to the crust',
                'Use a dark metal pan — not glass or ceramic — for maximum bottom heat',
                'Place pie on the lowest oven rack to maximize heat from below',
                'Never add a hot filling to an unbaked or still-warm crust',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-700 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <p className="text-sm text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Starch Gelatinization</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pie crust becomes crisp when its starch granules gelatinize and its proteins coagulate under dry oven heat. Starch gelatinization in wheat flour occurs at 140–160°F. If the crust reaches this temperature in a dry environment (oven heat), it sets into a rigid, crisp structure. If it reaches this temperature in a wet environment (filling moisture), the starch gelatinizes while saturated with water — producing a gummy, dense, "undercooked" texture. The race between setting the crust dry vs. the filling making it wet is the entire physics of soggy bottom prevention.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why is only my bottom crust soggy but the top is perfect?</h3>
                <p className="text-muted-foreground text-sm">The bottom crust sits in direct contact with the wet filling throughout the entire bake, while the top crust only has steam contact. The bottom also receives less direct oven heat because the pie dish blocks radiant heat from below. Blind baking the bottom crust and using a dark metal pan on the lowest rack solves both problems.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can I fix a soggy pie crust after baking?</h3>
                <p className="text-muted-foreground text-sm">Partially. Return the pie to a 375°F oven for 10–15 minutes uncovered. The continued dry heat will drive some moisture out of the bottom crust and crisp it slightly. It won't be as good as a properly baked crust, but it's significantly better than leaving it as-is.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does blind baking work for fruit pies?</h3>
                <p className="text-muted-foreground text-sm">Yes — partial blind baking (10–15 minutes until set but not browned) gives the bottom crust a structural head start before the filling goes in. Full blind baking for fruit pies risks over-baking during the second bake with filling. For custard and cream pies, always blind bake fully.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does the type of fat in the crust affect sogginess?</h3>
                <p className="text-muted-foreground text-sm">Yes. Shortening-based crusts resist sogginess slightly better than all-butter crusts because shortening has no water content and creates a more water-resistant fat barrier. Butter's water content (18%) means a small amount of moisture is built into the dough itself, which can soften the crust faster when combined with filling moisture.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Pie Science</h3>
            <div className="space-y-3">
              <Link to="/pie-science/why-pie-crust-is-flaky" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Pie Crust Is Flaky — the steam and layers science</Link>
              <Link to="/pie-science/why-pie-crust-shrinks" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Pie Crust Shrinks — gluten tension and how to prevent it</Link>
              <Link to="/pie-science/why-pie-crust-gets-tough" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Pie Crust Gets Tough — gluten control guide</Link>
              <Link to="/pie-science/why-pie-filling-is-runny" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Pie Filling Is Runny — the other half of the soggy problem</Link>
              <Link to="/pie-science/butter-vs-shortening-in-crust" className="block text-amber-700 hover:underline text-sm font-medium">→ Butter vs Shortening in Pie Crust — which fat resists sogginess better</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Pie Science</h2>
            <p className="text-lg text-white/90 mb-6">Build perfect pies with crisp, flaky crusts using PieSensei.</p>
            <a href="https://piesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">
              Try PieSensei →<ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
