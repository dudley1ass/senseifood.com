import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeTastesFlat() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-yellow-50">
      <Navigation />

      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-600 to-amber-700 text-white px-4 py-2 rounded-full text-sm mb-6">
            Coffee Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-stone-700 to-amber-700 bg-clip-text text-transparent">
            Why Coffee Tastes Flat
          </h1>
          <p className="text-xl text-muted-foreground">
            Flat coffee isn't weak — it's missing its chemistry. Discover why your cup has lost its vibrancy and how to bring it back.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>7 min read</span>
            <span>•</span>
            <span>Intermediate</span>
            <span>☕😶</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-stone-300 to-amber-500 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">😶</span>
        </div>

        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-stone-50 border-l-4 border-stone-500 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">☕</span>
            <div>
              <p className="font-bold text-stone-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Flat coffee is caused by stale beans, water that's too cool, or over- and under-extraction canceling each other out. Check your beans first — if they're more than 4 weeks past roast, no technique will save them.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            "Flat" is different from "weak" or "bitter." Flat coffee has a sort of deadness to it — like all the interesting chemistry has been switched off. It's not unpleasant exactly, it's just thoroughly uninspiring. This is one of the most common complaints from home brewers, and it has several distinct causes that are worth understanding separately.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-700 to-amber-700 bg-clip-text text-transparent">
            What "Flat" Actually Means Chemically
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            A vibrant cup of coffee is a complex mixture of acids, sugars, oils, and hundreds of volatile aromatic compounds all working together. Brightness comes from organic acids. Sweetness comes from caramelized sugars. Complexity comes from volatile aromatics. Body comes from dissolved oils and melanoidins. When coffee tastes flat, it means one or more of these chemical families is absent — either it was never there (stale beans, wrong temp) or it was present and then masked (over/under extraction canceling each other).
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h3 className="text-xl mb-6">What a Vibrant Cup Has vs. a Flat Cup</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-green-700 mb-3">✅ Vibrant Coffee</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Bright acidity on the front palate</li>
                  <li>• Sweet caramel or chocolate mid-notes</li>
                  <li>• Rich aromatic complexity on the nose</li>
                  <li>• Clean, lasting finish</li>
                  <li>• Full body that coats the mouth</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-stone-600 mb-3">😶 Flat Coffee</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• No brightness, no acidity</li>
                  <li>• Sweet and bitter notes cancel out</li>
                  <li>• Minimal aroma — smells like nothing</li>
                  <li>• Short finish, disappears immediately</li>
                  <li>• Thin or hollow mouthfeel</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-700 to-amber-700 bg-clip-text text-transparent">
            The Main Causes of Flat Coffee
          </h2>

          <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-stone-200">
            <h3 className="text-2xl mb-4">🫘 Stale Beans — The #1 Culprit</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Fresh coffee beans are saturated with hundreds of volatile aromatic compounds created during roasting. These aromatics are responsible for virtually all of coffee's complexity and liveliness. They begin off-gassing from the moment roasting ends and are largely gone within 4–6 weeks. Stale beans simply don't have the chemical inventory to brew a vibrant cup — no technique, no equipment, no water quality fix will compensate.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The test is simple: open your bag of beans and smell them. Fresh beans smell intensely of whatever flavor notes the roaster describes. Stale beans smell like cardboard, dust, or faintly of old coffee. If the smell is weak, the cup will be flat.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Buy beans roasted within the last 2 weeks. Look for a roast date (not a best-by date) on the bag. Grind immediately before brewing — pre-ground coffee loses aromatics 40–50x faster than whole beans.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">🌡️ Water Temperature Too Low</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Coffee extraction is thermally driven. Hot water has the energy to dissolve the full range of flavor compounds — from light volatile acids to heavier oils and melanoidins. Water below 195°F lacks the energy to dissolve the heavier compounds efficiently, which means you extract the light acids (sour, thin) but miss the sugars and oils that create sweetness, body, and complexity. The result: a sour-but-also-dull cup that reads as flat because the interesting parts never made it into the cup.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Use water at 195–205°F. If you don't have a thermometer, let boiling water sit off the heat for exactly 45 seconds. A variable-temperature kettle eliminates the guesswork permanently.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-stone-200">
            <h3 className="text-2xl mb-4">⚖️ Over- and Under-Extraction Canceling Out</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                This is the sneakiest cause of flat coffee. It happens most often with blade grinders that produce wildly inconsistent particle sizes — some powder-fine, some boulder-coarse. The fine particles over-extract (adding bitterness) while the coarse particles under-extract (adding sourness). Bitterness and sourness cancel each other out on the palate, leaving a cup that is neither clearly bitter nor clearly sour — just dead and flat.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The same thing can happen when you over-extract a weak ratio — too long a brew time with too little coffee. You pull bitter compounds from over-extraction, but there aren't enough other flavor compounds to balance or contrast them, so everything just tastes muted.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Switch to a burr grinder — even an inexpensive hand grinder produces dramatically more consistent particles than a blade grinder. Consistent grind = even extraction = balanced flavor.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">💧 Water Chemistry — The Hidden Variable</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Water is 98–99% of your cup, and its mineral content dramatically affects extraction efficiency and flavor perception. Completely soft or distilled water lacks the minerals that help extract flavor compounds from coffee — particularly magnesium, which actively assists in pulling aromatic compounds from the grounds. Brewing with distilled water produces flat, cardboard-tasting coffee even with excellent beans and perfect technique.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                On the other end, very hard water (high calcium carbonate) coats brewing equipment with scale, raises the effective pH of the brew, and causes certain organic acids to precipitate out of solution — removing the brightness that prevents flatness.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Use filtered water, not distilled. Target 75–150 ppm total dissolved solids with a good mineral balance. If tap water tastes flat or heavily chlorinated, a simple carbon filter (Brita-style) dramatically improves it. Avoid softened water — the sodium from ion exchange doesn't help extraction.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-stone-200">
            <h3 className="text-2xl mb-4">🧹 Dirty Equipment</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Rancid coffee oils coat the inside of grinders, brewers, and carafes. These oils go stale and create a background off-flavor that suppresses the brighter, more delicate notes in fresh coffee. The effect is exactly flatness — a dull, slightly unpleasant film of old flavor that mutes everything new you put through the machine.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Wash carafe and filter basket with dish soap after every use. Descale monthly. Clean grinder burrs every 1–2 weeks. This single habit change has rescued more "bad coffee" situations than any equipment upgrade.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h3 className="text-xl mb-6">Quick Fix Guide — If Your Coffee Tastes Flat, Try This (In Order):</h3>
            <div className="space-y-3">
              {[
                'Smell your beans — if the bag smells faint, buy fresh beans roasted within 2 weeks',
                'Check water temperature — use 195–205°F, not boiling',
                'Switch from blade to burr grinder for consistent particle size',
                'Use filtered tap water — not distilled, not softened',
                'Clean all equipment — grinder, brewer, carafe, with soap',
                'Try a slightly finer grind to increase extraction of flavor compounds',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-gradient-to-br from-stone-600 to-amber-700 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <p className="text-sm text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: The Bloom and CO₂</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fresh beans off-gas CO₂ when they contact hot water — this is the bloom you see in pour-over brewing. CO₂ carries aromatic compounds out of the grounds and into the air above the cup. If your beans are very fresh (under 3 days post-roast), excess CO₂ actually blocks water from extracting properly, causing a different kind of flatness. The bloom step (pre-wetting grounds for 30 seconds) allows CO₂ to escape before full extraction begins, dramatically improving flavor clarity and liveliness.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why does my coffee taste flat even with fresh beans?</h3>
                <p className="text-muted-foreground text-sm">Water temperature or grind consistency is most likely the culprit. Even excellent beans will taste flat if brewed below 195°F or with an inconsistent grind (blade grinder) that causes simultaneous over- and under-extraction.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does distilled water make coffee taste flat?</h3>
                <p className="text-muted-foreground text-sm">Yes — dramatically. Distilled water has no minerals, and magnesium in particular is essential for extracting aromatic compounds from coffee. Brewing with distilled water produces noticeably flat, cardboard-tasting coffee. Use filtered tap water instead.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does my coffee taste flat after sitting for 20 minutes?</h3>
                <p className="text-muted-foreground text-sm">Aromatic compounds evaporate rapidly from brewed coffee exposed to air. The bright, complex notes disappear first, leaving behind the heavier, flatter flavor profile. Transfer brewed coffee to a thermal carafe immediately and drink within 20–30 minutes for best flavor.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can over-roasted beans cause flat coffee?</h3>
                <p className="text-muted-foreground text-sm">Yes. Very dark roasts have had most of their fruity, acidic, and floral aromatic compounds destroyed by extended heat. The remaining flavor profile is dominated by roasty, smoky compounds that, without the counterpoint of brightness, read as flat and one-dimensional.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Coffee Science</h3>
            <div className="space-y-3">
              <Link to="/coffee-science/why-coffee-tastes-watery" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Tastes Watery — flat vs. thin: understanding the difference</Link>
              <Link to="/coffee-science/why-coffee-loses-flavor" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Loses Flavor — the staling science behind dead beans</Link>
              <Link to="/coffee-science/why-coffee-grind-size-matters" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Grind Size Matters — consistent extraction is everything</Link>
              <Link to="/coffee-science/why-coffee-brewing-time-matters" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Brewing Time Matters — the extraction timeline</Link>
              <Link to="/coffee-science/why-coffee-stales" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Stales — the four processes killing your beans</Link>
              <Link to="/coffee-science/coffee-extraction-science" className="block text-amber-700 hover:underline text-sm font-medium">→ Coffee Extraction Science — master the full brewing chemistry</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-stone-600 to-amber-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Coffee Brewing</h2>
            <p className="text-lg text-white/90 mb-6">Dial in every variable and bring your coffee back to life with BeanSensei.</p>
            <a href="https://beansensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-stone-800 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">
              Try BeanSensei →<ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
