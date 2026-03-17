import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesBurnOnBottom() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-amber-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />Back to Articles
        </Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Why Cookies Burn on the Bottom</h1>
          <p className="text-xl text-muted-foreground">Discover why cookie bottoms scorch while the tops stay pale — and the simple pan and temperature fixes that solve it.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Beginner Friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-red-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🔥</span></div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Burnt cookie bottoms are a direct result of too much direct heat hitting the base before the rest of the cookie has time to bake. The culprit is almost always your pan, your oven rack position, or your oven temperature.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Why the Bottom Burns First</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">Cookie dough sits directly on metal, which conducts heat far faster than air. The bottom of the cookie starts cooking immediately on contact with the hot pan, while the top only heats via hot air convection. Dark pans absorb and radiate more heat than light ones, and thin pans have no buffer — heat spikes instantly at the base.</p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200">
              <div className="text-4xl mb-4">🍳</div>
              <h3 className="text-xl mb-3">High-Risk Situations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Dark or non-stick pans</li>
                <li>• Thin single-layer pans</li>
                <li>• Bottom oven rack position</li>
                <li>• Oven temp too high</li>
                <li>• Greased pan (extra conductivity)</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl mb-3">Low-Risk Setup</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Light-colored aluminum pans</li>
                <li>• Double-layer insulated pans</li>
                <li>• Middle rack position</li>
                <li>• Correct oven temp (325–375°F)</li>
                <li>• Parchment paper barrier</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Causes & Fixes</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200">
              <h3 className="text-xl mb-3">🍳 Dark or Thin Baking Pan</h3>
              <p className="text-sm text-muted-foreground mb-3">Dark pans absorb radiant heat from oven walls and transfer it aggressively to the cookie base. Thin pans have no thermal mass to buffer temperature spikes.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Switch to a light-colored, heavy-gauge aluminum half-sheet pan. Double-insulated pans (air pocket between layers) are the best solution for chronic burning.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">📍 Wrong Rack Position</h3>
              <p className="text-sm text-muted-foreground mb-3">The bottom rack is closest to the heating element. Direct radiant heat from below scorches the pan and burns cookie bottoms before the top sets.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Always bake cookies on the middle rack. This provides equal distance from top and bottom heating elements.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-100">
              <h3 className="text-xl mb-3">🌡️ Oven Temperature Too High</h3>
              <p className="text-sm text-muted-foreground mb-3">High heat causes the pan to overheat quickly. The base cooks and burns before the cookie interior sets. Many home ovens run 25–50°F hotter than the dial says.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Use an oven thermometer to verify actual temperature. Reduce oven temp by 25°F if bottoms consistently burn.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">📄 No Parchment Paper</h3>
              <p className="text-sm text-muted-foreground mb-3">Direct contact between dough and bare metal maximizes heat transfer. Parchment acts as an insulating layer, slowing heat transfer to the cookie base.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Always line baking sheets with parchment paper. It's the single easiest way to prevent burned bottoms.</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Conduction vs. Convection</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Cookie bottoms heat by conduction (direct pan contact) while tops heat by convection (hot air). Conduction is 20–25x more efficient than convection in air — which is why bottoms always cook faster. Any setup that reduces conduction speed (parchment, insulated pan, lower temp) directly prevents burning.</p>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why do cookie bottoms burn but tops stay pale?</h3>
                <p className="text-muted-foreground text-sm">Metal conducts heat much faster than air. The bottom cooks by direct conduction while the top heats by convection (hot air). Parchment paper, a lighter pan, and middle rack position all reduce bottom burning.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does the type of pan affect cookie burning?</h3>
                <p className="text-muted-foreground text-sm">Significantly. Dark pans absorb and radiate more heat. Thin pans have no thermal buffer. Double-insulated pans are the best solution — the air pocket between layers slows bottom heat transfer dramatically.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why do my cookies burn on the bottom in a new oven?</h3>
                <p className="text-muted-foreground text-sm">New ovens often run hot and may not cycle as evenly as seasoned ovens. Use an oven thermometer to verify actual temperature and reduce by 25°F if consistently burning.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can I fix burnt cookie bottoms by adding parchment?</h3>
                <p className="text-muted-foreground text-sm">Yes — this is the single easiest fix. Parchment creates a thin insulating layer between the pan and the cookie, slowing direct heat transfer to the base.</p>
              </div>
            </div>
          </div>
          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/cookie-science/why-cookies-spread" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Spread</Link>
              <Link to="/cookie-science/why-cookies-are-chewy" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Are Chewy</Link>
              <Link to="/cookie-science/why-cookies-get-crispy" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Get Crispy</Link>
              <Link to="/cookie-science/why-cookies-flatten" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Flatten</Link>
              <Link to="/cookie-science/why-cookies-spread-too-much" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Spread Too Much</Link>
              <Link to="/cookie-science/brown-sugar-vs-white-sugar" className="block text-amber-700 hover:underline text-sm font-medium">→ Brown Sugar vs White Sugar</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Engineer Your Perfect Cookie</h2>
            <p className="text-lg text-white/90 mb-6">Use CookieSensei to dial in temperature and timing for your exact setup.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
