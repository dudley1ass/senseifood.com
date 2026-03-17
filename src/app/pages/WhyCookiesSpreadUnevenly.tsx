import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesSpreadUnevenly() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Why Cookies Spread Unevenly</h1>
          <p className="text-xl text-muted-foreground">Discover why cookies spread into lopsided ovals instead of round circles — and how to get perfectly symmetrical results.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Beginner Friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🍪</span></div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Uneven spreading is almost always caused by uneven heat, uneven dough shaping, or inconsistent pan surfaces. The cookie spreads in the direction of least resistance — which is wherever heat or lubrication is greatest.</p>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <h3 className="text-xl mb-3">♨️ Hot Spots in the Oven</h3>
              <p className="text-sm text-muted-foreground mb-3">Most home ovens have hot spots — areas that run hotter than others. Cookies near a hot spot spread faster on that side, creating an asymmetric shape.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Rotate your baking sheet 180° halfway through baking. This exposes all cookies equally to hot and cooler zones.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🔵 Unevenly Shaped Dough Balls</h3>
              <p className="text-sm text-muted-foreground mb-3">A dough ball that's taller on one side or has a flat spot will spread differently in each direction, producing an oval or D-shape.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Roll each dough portion between your palms into a smooth, perfectly round ball before placing on the pan.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <h3 className="text-xl mb-3">📐 Pan Not Level</h3>
              <p className="text-sm text-muted-foreground mb-3">A warped or tilted baking sheet causes melting fat to pool on one side, pulling the cookie toward the low point.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Use a heavy, flat half-sheet pan. Warped thin pans are a leading cause of uneven spread — replace them.</div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">How do I make perfectly round cookies?</h3>
                <p className="text-muted-foreground text-sm">Roll each dough portion into a smooth ball between your palms, ensuring there are no flat spots. Use a cookie scoop for consistent sizing. Also rotate your pan 180° halfway through baking.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why do my cookies spread into ovals?</h3>
                <p className="text-muted-foreground text-sm">Usually oven hot spots combined with uneven dough balls. Map your oven's hot spots (toast test), rotate pans, and ensure dough balls are perfectly round.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does a warped pan cause uneven spreading?</h3>
                <p className="text-muted-foreground text-sm">Yes — a warped pan causes melting fat to pool toward the low side. Invest in a heavy, flat half-sheet pan. This is one of the most impactful equipment upgrades for cookie baking.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why do edge cookies bake differently than center cookies?</h3>
                <p className="text-muted-foreground text-sm">Edge cookies are exposed to radiant heat from the oven walls, causing faster browning and spreading. Rotate the pan and consider leaving the outer positions on the pan empty for more uniform results.</p>
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
              <Link to="/cookie-science/why-cookies-spread-too-much" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Spread Too Much</Link>
              <Link to="/cookie-science/brown-sugar-vs-white-sugar" className="block text-amber-700 hover:underline text-sm font-medium">→ Brown Sugar vs White Sugar</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Get Perfectly Round Cookies</h2>
            <p className="text-lg text-white/90 mb-6">Use CookieSensei to master your spread every time.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-yellow-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
