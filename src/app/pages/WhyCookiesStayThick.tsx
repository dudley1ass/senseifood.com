import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesStayThick() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />Back to Articles
        </Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Why Cookies Stay Thick</h1>
          <p className="text-xl text-muted-foreground">Thick cookies aren't always good — here's when staying puffy is a problem, and how to get that perfect settled, dense chew.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>6 min read</span><span>•</span><span>Beginner Friendly</span><span>🍪📏</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-amber-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">📏</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🍪</span>
            <div>
              <p className="font-bold text-orange-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Cookies stay thick because of too much flour, too-cold dough, too much leavening (which puffs without spreading), or too little fat. The fix depends on whether you want them thicker with better texture, or actually want them to spread more.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">There's a critical distinction between a thick cookie that's dense, chewy, and satisfying — and a thick cookie that's dry, cakey, and underbaked-feeling in the center. The first is a goal. The second is a problem. Understanding what's causing the thickness tells you whether to fix it or embrace it.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">When Thick Is a Problem vs. a Feature</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200 my-8">
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-green-700 mb-3">✅ Good Thick Cookie</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Dense, chewy, fudgy interior</li>
                  <li>• Crispy edges with soft center</li>
                  <li>• Fully baked through</li>
                  <li>• Intentionally tall with good texture</li>
                  <li>• Caused by: cold dough, high brown sugar ratio, melted butter</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-red-700 mb-3">❌ Problematic Thick Cookie</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Dry, cakey, bread-like interior</li>
                  <li>• Uniform texture edge to center</li>
                  <li>• Pale, raw-feeling bottom</li>
                  <li>• Puffy dome rather than settled shape</li>
                  <li>• Caused by: excess flour, excess leavening, cold fat</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Causes & Fixes</h2>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4">🌾 Too Much Flour — Most Common Cause</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">When flour is scooped directly from the bag, the cup can pack in 20–30% more flour than intended. All that extra flour creates more structure than the fat can overcome — the dough is too stiff to spread, baking into a tall, dense ball that stays exactly the shape it was placed in. The interior often feels slightly raw or cakey because the thick center takes much longer to bake through.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Weigh flour at 120–125g per cup. Spoon flour into the measuring cup and level if not weighing. This single change has the most dramatic effect on cookie spread.</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">🧂 Too Much Baking Powder</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">Excess baking powder creates aggressive upward lift — CO₂ pushes the cookie up rather than out. The result is a puffy, domed cookie that rises dramatically in the oven but never spreads, giving it a cakey texture and a shape that looks more like a muffin top than a cookie. This is distinct from "too much flour" because the texture is lighter and more airy rather than dense and dry.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Measure leavening with level teaspoons — never heaped. If cookies are consistently too puffy, reduce baking powder by ¼ teaspoon and see if shape improves.</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4">🧊 Dough Too Cold</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">Very cold dough has fat that is nearly solid. When placed in the oven, the exterior of the cookie sets from the heat before the center fat has warmed enough to melt and flow. The result is a cookie that stays in its ball shape — which produces a thick cookie. This is actually desirable if you want thick cookies, but problematic if you wanted the spread-and-settle shape.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix to get more spread:</strong> Let dough balls temper at room temperature for 15–20 minutes before baking. Or press each ball slightly flat with your palm before baking — this gives the spreading process a mechanical head start.</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">⚪ Wrong Sugar Ratio</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">Brown sugar is hygroscopic and retains moisture, which increases dough viscosity and reduces spread. All-brown-sugar recipes produce the thickest, least spreading cookies. White sugar melts and flows readily, promoting spread. If your recipe has a high brown sugar ratio and you want more spread, shifting toward white sugar changes the spreading dynamics directly.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix for more spread:</strong> Replace 25–50% of brown sugar with white sugar. <strong>Fix for intentional thickness:</strong> Use all brown sugar and chill the dough — you'll get a satisfying, dense, chewy thick cookie.</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4">🧈 Cold or Under-Creamed Butter</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">Butter that's too cold doesn't cream properly with sugar, so fat droplets remain large and don't distribute through the dough. When baked, this butter melts and pools rather than spreading smoothly through the dough — producing a thick, stiff cookie rather than a spreading one. Insufficiently creamed butter also means less incorporated air, so the cookie is denser rather than light.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Bring butter to 65–68°F before creaming (should hold a thumbprint but not be greasy). Cream for 3–5 minutes until pale and noticeably fluffier. For maximum spread, use melted (not creamed) butter.</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200 my-10">
            <h3 className="text-xl mb-6">Thick Cookie Troubleshooting:</h3>
            <div className="space-y-3">
              {[
                'Weigh flour — most thickness problems start with over-measured flour',
                'Check leavening amounts — use exact level teaspoons',
                'Let dough warm slightly before baking — 15 minutes at room temp',
                'Flatten dough balls slightly with palm before baking',
                'Shift some brown sugar to white sugar for more spread',
                'Try melted butter instead of creamed for a dense-but-spreading result',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <p className="text-sm text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Fat Melting Point and Spread</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Cookie spreading is controlled by the race between fat melting (which enables spread) and protein/starch setting (which stops spread). Butter melts at ≈95°F — relatively low. If the oven is very hot and the exterior sets before butter has time to fully melt and flow, cookies stay thick. A slightly lower baking temperature (325°F instead of 375°F) allows more time for butter to melt before the exterior sets, producing more spread in the same dough.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Are thick cookies supposed to be underbaked in the center?</h3><p className="text-muted-foreground text-sm">A very thick cookie that's pulled early will have a slightly underbaked center that sets as it cools on the hot pan — this is intentional and creates a fudgy texture. A cookie that feels raw and doughy in the center after cooling needs more time in the oven, not less.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Why do my cookies stay thick and pale?</h3><p className="text-muted-foreground text-sm">Pale and thick usually means too much flour and/or baking powder. The excess flour creates stiff structure that doesn't spread, and the surface never gets hot enough to brown because the cookie is too tall for heat to circulate effectively. Weigh your flour and reduce leavening.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">How do bakeries get those perfectly thick, dense cookies?</h3><p className="text-muted-foreground text-sm">The professional technique uses chilled dough balls (sometimes rolled and refrigerated overnight), melted browned butter (not creamed), high brown sugar ratio, and slightly lower oven temperature. The cookies spread just enough to settle but not flatten, producing that characteristically thick-but-not-cakey bakery texture.</p></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Cookie Science</h3>
            <div className="space-y-3">
              <Link to="/cookie-science/why-cookies-dont-spread" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Don't Spread — the complete no-spread guide</Link>
              <Link to="/cookie-science/why-cookies-flatten" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Flatten — the opposite problem</Link>
              <Link to="/cookie-science/why-cookies-are-chewy" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Are Chewy — how thick becomes chewy</Link>
              <Link to="/cookie-science/brown-sugar-vs-white-sugar" className="block text-amber-700 hover:underline text-sm font-medium">→ Brown Sugar vs White Sugar — spread and texture control</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Engineer Your Perfect Cookie</h2>
            <p className="text-lg text-white/90 mb-6">Use CookieSensei to dial in thickness, spread, and texture before you bake.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
