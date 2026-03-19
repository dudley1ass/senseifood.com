import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesBakeFasterOnEdges() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Why Cookies Bake Faster on the Edges</h1>
          <p className="text-xl text-muted-foreground">Learn the physics behind crispy edges and soft centers — and how to use this to your advantage.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Beginner Friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🍪</span></div>
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🍪</span>
            <div>
              <p className="font-bold text-yellow-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Edge cookies are exposed to heat on 3 sides vs 1 for the center — conduction is 20x faster than convection. Pull when edges are golden and center looks underdone; carryover heat finishes the middle.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Crispy edges with a soft center is arguably the ideal cookie texture — and it's not a mistake. It's the natural result of physics. The edges of a cookie experience more heat exposure than the center, causing them to set, brown, and crisp first.</p>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">The Physics of Edge Baking</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">Cookie edges are exposed to hot oven air on three sides (top, outer edge, and bottom via the pan). The center of a cookie is only exposed from the top and bottom — the surrounding dough insulates it. Additionally, moisture released from the interior travels outward toward the edges and evaporates there, carrying heat with it and accelerating edge drying.</p>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200 my-10">
            <h3 className="text-xl mb-6">Edge vs. Center Heat Exposure</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-orange-50 rounded-xl"><h4 className="font-medium text-orange-800 mb-2">🌊 Cookie Edge</h4><p className="text-muted-foreground text-xs">Hot air on 3 sides + direct pan conduction + moisture evaporation = sets faster, dries out, crisps</p></div>
              <div className="p-4 bg-yellow-50 rounded-xl"><h4 className="font-medium text-yellow-800 mb-2">🎯 Cookie Center</h4><p className="text-muted-foreground text-xs">Insulated by surrounding dough + only top/bottom exposure = stays moist and soft longer</p></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">💡 Use This to Your Advantage</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Pull cookies from the oven when edges are golden and set but the center still looks underdone. The center will continue cooking from residual heat while the edges stop browning. This is the secret to the perfect crispy-edge, gooey-center cookie.</p>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">How do I get more even baking across the whole cookie?</h3>
                <p className="text-muted-foreground text-sm">Rotate the pan halfway through, bake on the middle rack, use an oven thermometer to verify temperature, and ensure cookies are all the same thickness so edges and centers have similar thermal mass.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can I make the center bake as fast as the edges?</h3>
                <p className="text-muted-foreground text-sm">Somewhat — press dough balls flatter so the center is thinner, or lower the oven temp and bake longer for more even heat penetration. But some differential will always exist due to the physics of edge exposure.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why do thin cookies bake more evenly than thick ones?</h3>
                <p className="text-muted-foreground text-sm">Thin cookies have less thermal mass in the center, so heat penetrates more quickly and evenly. The thinner the cookie, the less difference between edge and center temperature at any given moment.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why do cookies on the outer edges of the pan bake faster?</h3>
                <p className="text-muted-foreground text-sm">Outer cookies receive additional radiant heat from the oven walls. Use the center positions of your pan rather than the edges, and always rotate the pan halfway through.</p>
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

          <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Edge vs. Center Texture</h2>
            <p className="text-lg text-white/90 mb-6">Use CookieSensei to dial in the perfect bake.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-yellow-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
