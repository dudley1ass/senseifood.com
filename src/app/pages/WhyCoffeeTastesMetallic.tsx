import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeTastesMetallic() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50">
      <Navigation />

      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-600 to-stone-700 text-white px-4 py-2 rounded-full text-sm mb-6">
            Coffee Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-slate-700 to-stone-700 bg-clip-text text-transparent">
            Why Coffee Tastes Metallic
          </h1>
          <p className="text-xl text-muted-foreground">
            If your coffee tastes like pennies, it's not the beans. Here's exactly what's causing that metallic taste and how to eliminate it.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
            <span>☕🪙</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-slate-300 to-stone-500 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🪙</span>
        </div>

        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-slate-50 border-l-4 border-slate-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🪙</span>
            <div>
              <p className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Metallic coffee taste is almost always your water source (pipes, minerals, chlorine) or dirty equipment with rancid oils. Start by trying bottled filtered water — if the metallic taste disappears, your water is the problem.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            A metallic or penny-like taste in coffee is jarring and deeply unpleasant — and it's also one of the most googled coffee problems. The good news is that metallic coffee taste almost always has a very specific, fixable cause. It's rarely the beans themselves.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-slate-700 to-stone-700 bg-clip-text text-transparent">
            Where Metallic Taste Comes From
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Metallic flavors in food and drink come from metal ions — specifically iron, copper, zinc, and manganese — interacting with taste receptors on the tongue. These ions are electrically charged and trigger the same receptors that detect actual metal contact. In coffee, there are four main pathways for metal ions to enter your cup: your water supply, your equipment, the brewing process itself, or certain chemical compounds produced during over-extraction.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-slate-700 to-stone-700 bg-clip-text text-transparent">
            Causes & Fixes
          </h2>

          <div className="bg-gradient-to-br from-slate-50 to-stone-50 rounded-2xl p-8 my-8 border-2 border-slate-200">
            <h3 className="text-2xl mb-4">💧 Water Source — Most Common Cause</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Tap water travels through metal pipes — often copper, galvanized steel, or old iron. As water sits in pipes overnight, metal ions leach into it from corrosion. First-of-the-morning water is noticeably higher in dissolved metals than water that has been running for 30 seconds. Additionally, municipal water that contains chlorine or chloramine (added for sanitation) reacts with coffee compounds to produce chlorophenols — which have a distinctly medicinal, metallic flavor.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Water with very high iron or manganese content (common in well water or older municipal systems) is an especially common culprit. Even at concentrations that are technically safe to drink, iron in water creates a distinctly metallic coffee cup.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Run the tap for 30 seconds before filling your kettle. Use a carbon filter (removes chlorine/chloramine) or switch to filtered water. Test with bottled water — if metallic taste disappears, your water is definitively the cause.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-50 to-slate-50 rounded-2xl p-8 my-8 border-2 border-stone-200">
            <h3 className="text-2xl mb-4">⚙️ Dirty Equipment — Rancid Oils</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Coffee oils coat the inside of grinders, brewers, carafes, and portafilters. When these oils go rancid — which happens quickly with heat and air exposure — they create short-chain fatty acid compounds that taste metallic and bitter. This is especially common in espresso machine portafilters that are rinsed but never scrubbed, and in blade or burr grinders that haven't been cleaned in weeks.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The metallic flavor from rancid oils is particularly stubborn because it coats every new batch of coffee with the same off-taste regardless of bean quality or brew technique. The only fix is thorough cleaning.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Wash carafe and filter basket with dish soap after every use — not just a rinse. Clean portafilter baskets with a backflush cycle and dedicated espresso cleaner weekly. Clean grinder burrs with a brush every 1–2 weeks.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-stone-50 rounded-2xl p-8 my-8 border-2 border-slate-200">
            <h3 className="text-2xl mb-4">📄 Cheap Paper Filters</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Low-quality paper filters that haven't been bleached or pre-rinsed can impart a papery, slightly metallic taste. This is especially noticeable with pour-over methods where water spends significant time in contact with the filter. Unbleached (brown) filters tend to have more of this issue than white bleached filters, though both benefit from pre-rinsing.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Always rinse paper filters with hot water before adding grounds — this removes paper taste and pre-heats the dripper simultaneously. Use quality filters from reputable brands.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-50 to-slate-50 rounded-2xl p-8 my-8 border-2 border-stone-200">
            <h3 className="text-2xl mb-4">⏱️ Over-Extraction</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                When coffee is over-extracted — too fine a grind, too long a brew, or too hot water — certain polyphenol compounds (specifically chlorogenic acid lactones and phenylindanes) are pulled from the grounds in large quantities. At high concentrations, these compounds produce a harsh, almost metallic astringency on the back of the tongue that people often describe as "metallic" or "pennies."
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Grind coarser, shorten brew time, or lower water temperature slightly. For espresso, a shot running beyond 35 seconds is a reliable indicator of over-extraction.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-slate-200">
            <h3 className="text-2xl mb-4">🫙 Metal Brewing Equipment</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Some metal carafes, moka pots, and cheap travel mugs are made from low-quality stainless steel or aluminum that can leach metallic flavors — especially when coffee sits in them for extended periods or the metal has been scratched. Acidic coffee is particularly effective at drawing metal ions out of reactive surfaces.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Use high-quality food-grade stainless steel (18/8 or 18/10 grade). Don't leave coffee sitting in metal containers for more than 20 minutes. Replace scratched or pitted metal equipment.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200 my-10">
            <h3 className="text-xl mb-6">Metallic Taste Diagnosis — Try This Order:</h3>
            <div className="space-y-3">
              {[
                'Brew with bottled filtered water — if metallic taste disappears, your water is the problem',
                'Deep-clean all equipment with soap (not just rinse) — rancid oils are the #2 cause',
                'Pre-rinse your paper filter before brewing — eliminates papery metallic notes',
                'Check your grind and brew time — over-extraction creates metallic astringency',
                'Inspect metal equipment for scratches or pitting — replace if damaged',
                'Run your tap 30 seconds before filling the kettle — flushes pipe deposits',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-gradient-to-br from-slate-600 to-stone-700 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <p className="text-sm text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Chlorophenols and Chlorine</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chlorine in tap water reacts with phenolic compounds in coffee during brewing to form chlorophenols — molecules with a distinctly medicinal, antiseptic, metallic taste detectable at very low concentrations (parts per billion). This is why a simple carbon filter (which removes chlorine) can completely transform the taste of coffee made with chlorinated tap water. The coffee beans haven't changed — the water chemistry has.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Can the coffee beans themselves taste metallic?</h3>
                <p className="text-muted-foreground text-sm">Rarely, but possible. Defective beans with certain processing faults or very old beans with significant oxidation can produce metallic notes. But this is uncommon — if your beans are fresh and from a reputable roaster, suspect your water or equipment first.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does only my morning coffee taste metallic?</h3>
                <p className="text-muted-foreground text-sm">Water that has sat in metal pipes overnight absorbs significantly more metal ions than water that has been running. Run the cold tap for 30 seconds before filling your kettle in the morning — this consistently eliminates morning-only metallic taste.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does a metal filter cause metallic taste?</h3>
                <p className="text-muted-foreground text-sm">High-quality stainless steel mesh filters (like those used in AeroPress or pour-over) don't typically impart metallic flavor if they're clean. However, they do pass more coffee oils than paper filters — which actually makes coffee taste richer, not metallic. Clean your metal filter after every use.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Is metallic-tasting coffee safe to drink?</h3>
                <p className="text-muted-foreground text-sm">Yes — the concentrations of metal ions that cause taste issues are well below health-harmful levels in normal municipal water systems. The metallic taste is unpleasant but not dangerous. If you have concerns about your water quality, a home water test kit provides peace of mind.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Coffee Science</h3>
            <div className="space-y-3">
              <Link to="/coffee-science/why-coffee-tastes-flat" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Tastes Flat — when all the good chemistry disappears</Link>
              <Link to="/coffee-science/why-coffee-tastes-bitter" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Tastes Bitter — over-extraction and metallic astringency</Link>
              <Link to="/coffee-science/why-coffee-grind-size-matters" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Grind Size Matters — prevent over-extraction at the source</Link>
              <Link to="/coffee-science/why-coffee-gets-oily" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Gets Oily — how rancid oils develop and ruin your cup</Link>
              <Link to="/coffee-science/why-coffee-stales" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Stales — oxidation and the flavors it creates</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-600 to-stone-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Coffee Brewing</h2>
            <p className="text-lg text-white/90 mb-6">Dial in every variable and fix your coffee for good with BeanSensei.</p>
            <a href="https://beansensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-slate-800 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">
              Try BeanSensei →<ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
