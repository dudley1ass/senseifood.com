import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesRiseThenFall() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Why Cookies Rise Then Fall</h1>
          <p className="text-xl text-muted-foreground">Understand why cookies puff up beautifully in the oven then collapse flat as they cool — and what it means for structure.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-amber-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">📉</span></div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Cookies that puff up during baking then deflate as they cool are experiencing a structural collapse — the air and gas that inflated them escapes before the cookie's protein and starch network is strong enough to hold the shape.</p>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">The Rise and Fall Cycle</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200 my-8">
            <div className="space-y-3">
              <div className="flex items-start gap-4"><span className="text-2xl">⬆️</span><div><h4 className="font-medium">Rise Phase</h4><p className="text-sm text-muted-foreground">Heat expands air bubbles and activates leavening (CO₂). Cookie puffs up. Fat is still liquid, supporting the expanded structure temporarily.</p></div></div>
              <div className="flex items-start gap-4"><span className="text-2xl">⬇️</span><div><h4 className="font-medium">Fall Phase</h4><p className="text-sm text-muted-foreground">Oven door opens or cookies leave the oven. CO₂ escapes. If structure hasn't set (too much fat, underbaked, too much leavening), cookie collapses under its own weight.</p></div></div>
            </div>
          </div>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🧂 Too Much Leavening</h3>
              <p className="text-sm text-muted-foreground mb-3">Excess baking powder creates more gas than the structure can hold. The overinflated cookie collapses as soon as CO₂ escapes on cooling.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Reduce baking powder — use exact recipe amounts with level measures.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🧈 Too Much Fat</h3>
              <p className="text-sm text-muted-foreground mb-3">Excess butter creates a weak structure. The fat-to-flour ratio is out of balance — there's not enough gluten and starch to hold the risen shape once gas leaves.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Measure butter precisely by weight. If collapse persists, add 2 tablespoons of flour to strengthen the structure.</div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why do my cookies look perfect in the oven then deflate?</h3>
                <p className="text-muted-foreground text-sm">The CO₂ structure that inflated them escaped before the protein/starch network set firmly enough to hold the shape. Usually caused by too much leavening or too much fat relative to flour.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Is it normal for cookies to deflate a little?</h3>
                <p className="text-muted-foreground text-sm">A small amount of settling is normal as the fat re-solidifies and steam escapes on cooling. Dramatic collapse back to flat indicates a structural failure from too much leavening or too little flour.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why do meringue cookies deflate?</h3>
                <p className="text-muted-foreground text-sm">Humidity is the enemy of meringue. Even small amounts of moisture prevent the meringue from fully drying out and setting, causing collapse. Bake in a dry environment and let cool completely in the oven with the door ajar.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">How do I keep my peanut butter cookies from deflating?</h3>
                <p className="text-muted-foreground text-sm">Peanut butter cookies have a high fat ratio. Use room temperature (not warm) peanut butter, ensure eggs are at room temperature, and avoid over-leavening. Adding a tablespoon of flour firms the structure.</p>
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

          <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Build Structural Integrity</h2>
            <p className="text-lg text-white/90 mb-6">Use CookieSensei to balance your recipe ratios.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
