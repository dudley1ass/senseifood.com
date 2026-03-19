import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesCrackOnTop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />Back to Articles
        </Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Why Cookies Crack on Top</h1>
          <p className="text-xl text-muted-foreground">Learn why some cookies develop surface cracks during baking — and when those cracks are intentional versus a problem to fix.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Beginner Friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🍪</span></div>
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🍪</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Surface cracks happen when the crust sets before the interior finishes expanding. For intentional cracks (crinkles): chill thoroughly + roll in powdered sugar. To prevent: lower oven temp 25°F.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Surface cracks on cookies like crinkles and snickerdoodles are a signature feature — deliberately engineered. On other cookies, they signal a structure problem. Understanding the mechanism lets you control it either way.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">The Cracking Mechanism</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">Cracking happens when the outer surface of a cookie sets and dries into a crust before the interior has finished expanding. As steam and CO₂ push outward from within, they rupture the set surface layer — creating the characteristic crack pattern. The same physics that cause cake tops to crack apply here, just on a smaller scale.</p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl mb-3">Intentional Cracks</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Chocolate crinkle cookies</li>
                <li>• Snickerdoodles</li>
                <li>• Brownie cookies</li>
                <li>• Molasses cookies</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-xl mb-3">Problematic Cracks</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Deep fissures on smooth cookies</li>
                <li>• Uneven crack patterns</li>
                <li>• Cracks with dry, crumbly edges</li>
                <li>• Cookies that split apart</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">What Causes Cracks</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🌡️ High Oven Temperature</h3>
              <p className="text-sm text-muted-foreground mb-3">A hot oven rapidly sets the surface before the interior finishes expanding. The rising center ruptures through the hardened top crust.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Reduce oven temp by 25°F and extend bake time slightly for smoother tops.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🌾 Too Much Flour or Leavening</h3>
              <p className="text-sm text-muted-foreground mb-3">Excess flour creates a stiff dough that sets hard on the surface fast. Too much baking powder or soda creates aggressive CO₂ that erupts through the crust.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Measure flour by weight (120g per cup). Use level teaspoons of leavening.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🧊 Dough Too Cold</h3>
              <p className="text-sm text-muted-foreground mb-3">Very cold dough has a rigid exterior that sets almost instantly in the oven. The still-expanding cold interior forces through the brittle surface.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Let dough balls temper at room temperature for 10–15 minutes before baking.</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">💡 Pro Tip: How to Engineer Cracks on Purpose</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">For crinkle cookies, chill the dough thoroughly, roll balls in powdered sugar, then bake at a slightly higher temp (375°F). The cold interior expands aggressively against the set sugary exterior, creating dramatic, even cracks.</p>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why do crinkle cookies have cracks?</h3>
                <p className="text-muted-foreground text-sm">By design — the dough ball is chilled so the sugar coating sets hard while the interior is still cold and dense. In the oven, the cold, expanding interior ruptures through the set exterior coating, creating the signature crack pattern.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does my shortbread crack?</h3>
                <p className="text-muted-foreground text-sm">Unlike other cookies, shortbread cracking usually indicates too little fat or too much flour — the dough is too dry and crumbles rather than holding together. Also, not chilling before cutting or using a too-thin cut.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">How do I make bigger cracks on crinkle cookies?</h3>
                <p className="text-muted-foreground text-sm">Chill the dough more thoroughly, roll in powdered sugar generously (double coating helps), and bake at 375°F. The greater the temperature contrast between frozen interior and hot oven, the more dramatic the crack.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why do my sugar cookies crack when rolling?</h3>
                <p className="text-muted-foreground text-sm">Dough too cold or too dry. Let chilled dough temper at room temperature for 5–10 minutes before rolling. If it still cracks, knead in 1 teaspoon of milk or water to increase moisture.</p>
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

          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Engineer Your Perfect Cookie</h2>
            <p className="text-lg text-white/90 mb-6">Use CookieSensei to predict texture and surface behavior before you bake.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
