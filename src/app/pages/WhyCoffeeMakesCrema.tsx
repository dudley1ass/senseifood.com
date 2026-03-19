import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeMakesCrema() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-stone-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-4 py-2 rounded-full text-sm mb-6">Coffee Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Why Coffee Makes Crema</h1>
          <p className="text-xl text-muted-foreground">Discover the physics and chemistry behind espresso crema — what it is, why it forms, and what it tells you about your shot quality.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>6 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-amber-300 to-orange-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">☕</span></div>
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">☕</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Crema forms when CO₂ trapped in fresh beans dissolves under espresso pressure, then releases as millions of tiny bubbles. Use beans 1–3 weeks post-roast for best crema.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Crema is the golden-brown foam that sits on top of a well-pulled espresso shot. It's not just a visual indicator — it's a complex emulsion of CO₂ bubbles, coffee oils, and dissolved compounds that directly influences flavor and mouthfeel.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">How Crema Forms</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">During espresso extraction, water is forced through finely ground coffee at 9 bars of pressure (about 130 psi). At this pressure, CO₂ that was trapped in the roasted bean dissolves into the water. When the pressurized water exits the portafilter and hits normal atmospheric pressure, the CO₂ comes out of solution as millions of tiny bubbles — exactly like opening a carbonated drink. These bubbles are stabilized by coffee oils and proteins into a persistent foam: crema.</p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">✅ Good Crema Signs</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Hazelnut to dark amber color</li>
                <li>• 2–4mm thick layer</li>
                <li>• Lasts 1–2 minutes before dissipating</li>
                <li>• Tiger-stripe pattern (reddish streaks)</li>
                <li>• Springs back when disturbed</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">⚠️ Problem Crema Signs</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Very pale or white — under-extracted</li>
                <li>• Very dark / black center — over-extracted</li>
                <li>• Disappears in under 30 seconds — stale beans</li>
                <li>• Excessively thick and foamy — over-pressure</li>
                <li>• Large bubbles — channeling in the puck</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">What Crema Requires</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🌡️ High Pressure (9 bars)</h3>
              <p className="text-sm text-muted-foreground">Crema only forms at espresso pressures. Regular drip coffee, French press, and pour-over don't generate enough pressure to dissolve CO₂ into solution — so they produce no crema. This is why only espresso machines (and Moka pots, partially) produce crema.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🫘 Fresh Beans (CO₂ Source)</h3>
              <p className="text-sm text-muted-foreground">Crema depends on CO₂ in the bean. Beans lose CO₂ progressively after roasting — very fresh beans (under 3 days) produce excessive, unstable crema; beans over 3–4 weeks old produce thin or no crema. The ideal window is 1–3 weeks post-roast.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">⚙️ Fine, Even Grind</h3>
              <p className="text-sm text-muted-foreground">A consistent, fine espresso grind creates resistance that forces water to build pressure. Uneven grinds cause channeling — water finds paths of least resistance and bypasses most grounds, producing thin, pale, quickly-dissipating crema.</p>
            </div>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why doesn't my espresso have crema?</h3>
                <p className="text-muted-foreground text-sm">Most commonly: beans are too old (CO₂ depleted), grind is too coarse (insufficient pressure), or machine pressure is too low. Use beans 1–3 weeks post-roast, grind fine enough to create resistance, and ensure machine reaches 9 bars.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Is crema necessary for good espresso?</h3>
                <p className="text-muted-foreground text-sm">Not strictly — crema is an indicator of freshness and proper extraction, but the quality of what's underneath matters most. Old beans can be extracted beautifully without much crema, and fresh beans can produce crema with poor extraction.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does crema disappear quickly?</h3>
                <p className="text-muted-foreground text-sm">Very fresh beans (under 3 days post-roast) have excess CO₂ that produces unstable, quick-dissipating crema. Stale beans have little CO₂ and make thin crema that vanishes fast. The sweet spot is 1–3 weeks post-roast.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does crema color indicate quality?</h3>
                <p className="text-muted-foreground text-sm">Yes. Hazelnut to dark amber with tiger-stripe patterns indicates well-extracted espresso. Very pale/white crema suggests under-extraction. Very dark/black center suggests over-extraction or excessively dark roast beans.</p>
              </div>
            </div>
          </div>
          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/coffee-science/coffee-extraction-science" className="block text-amber-700 hover:underline text-sm font-medium">→ Coffee Extraction Science</Link>
              <Link to="/coffee-science/why-coffee-tastes-bitter" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Tastes Bitter</Link>
              <Link to="/coffee-science/why-coffee-tastes-sour" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Tastes Sour</Link>
              <Link to="/coffee-science/why-coffee-grind-size-matters" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Grind Size Matters</Link>
              <Link to="/coffee-science/why-coffee-brewing-time-matters" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Brewing Time Matters</Link>
              <Link to="/coffee-science/why-coffee-stales" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Stales</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Perfect Your Espresso</h2>
            <p className="text-lg text-white/90 mb-6">Dial in extraction time, grind, and dose with BeanSensei.</p>
            <a href="https://beansensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Try BeanSensei →<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
