import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesChangeColor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-red-500 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">Why Cookies Change Color</h1>
          <p className="text-xl text-muted-foreground">Understand what drives color changes in cookies — from pale gold to deep brown — and how to control it precisely.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Beginner Friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-red-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🎨</span></div>
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🎨</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Cookie color = Maillard reaction depth. Baking soda (alkaline) dramatically accelerates browning. More brown sugar = darker. Higher temp = darker. Golden brown = ideal flavor. Dark brown = bitter.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Cookie color is a direct read-out of temperature, time, and ingredient chemistry. A pale cookie and a dark golden cookie are chemically very different — different flavor compounds, different textures, different moisture levels.</p>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">The Color-to-Chemistry Map</h2>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why do my cookies look pale even when the bottom is done?</h3>
                <p className="text-muted-foreground text-sm">The top of the cookie heats only by convection (hot air), which is much less efficient than the conduction heating the bottom. Switch to convection mode if available, which circulates hot air more efficiently around the tops.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">What is the perfect cookie color to aim for?</h3>
                <p className="text-muted-foreground text-sm">For most chocolate chip cookies: golden brown edges with a slightly lighter center. The center should look set but not as dark as the edges. This produces crispy edges with a chewy center.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can I use egg wash to get browner cookies?</h3>
                <p className="text-muted-foreground text-sm">Yes — brushing with egg yolk wash before baking accelerates browning via Maillard reaction. Used on cookies like shortbread or cutout cookies for a glossy, deep golden finish.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why did my cookies come out much darker than last time?</h3>
                <p className="text-muted-foreground text-sm">Most likely the oven was hotter (common with convection mode left on accidentally), butter was darker/more browned than usual, or brown sugar ratio was higher. Check your oven temp with a thermometer.</p>
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

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-8">
            <div className="space-y-3">
              {[
                { color: 'bg-yellow-100', label: 'Pale Gold', desc: 'Minimal Maillard. Soft, moist interior. Low flavor complexity. Under-done in most recipes.' },
                { color: 'bg-amber-200', label: 'Light Golden', desc: 'Early Maillard. Soft with slight chew. Sweet, mild flavor. Ideal for delicate cookies.' },
                { color: 'bg-amber-400', label: 'Golden Brown', desc: 'Full Maillard + early caramelization. Crispy edges, chewy center. Rich, nutty flavor. Classic target.' },
                { color: 'bg-amber-700', label: 'Deep Brown', desc: 'Heavy caramelization. Crispy throughout. Intense, slightly bitter edge notes. Intentional for some cookies.' },
                { color: 'bg-stone-700', label: 'Dark / Burnt', desc: 'Carbonization. Acrid, bitter, unpleasant. Loss of all desirable flavor. Discard.' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className={`w-12 h-8 rounded-lg flex-shrink-0 ${item.color}`}></div>
                  <div><p className="font-medium text-sm">{item.label}</p><p className="text-xs text-muted-foreground">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">What Controls Cookie Color</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-8">
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 pl-6 py-2"><h4 className="font-medium mb-1">Baking soda (alkaline)</h4><p className="text-sm text-muted-foreground">Raises dough pH, which dramatically accelerates the Maillard reaction. Even a small amount creates noticeably deeper color.</p></div>
              <div className="border-l-4 border-orange-500 pl-6 py-2"><h4 className="font-medium mb-1">Brown vs. white sugar</h4><p className="text-sm text-muted-foreground">Brown sugar's molasses promotes deeper browning than white sugar. More molasses = darker cookie.</p></div>
              <div className="border-l-4 border-red-500 pl-6 py-2"><h4 className="font-medium mb-1">Oven temperature</h4><p className="text-sm text-muted-foreground">Higher temp accelerates both browning reactions. 375°F produces noticeably darker cookies than 325°F in the same time.</p></div>
              <div className="border-l-4 border-amber-700 pl-6 py-2"><h4 className="font-medium mb-1">Pan color</h4><p className="text-sm text-muted-foreground">Dark pans absorb more radiant heat and brown cookie bases faster. Light pans give a more even, controlled color.</p></div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-red-500 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Control Your Cookie Color</h2>
            <p className="text-lg text-white/90 mb-6">Use CookieSensei to predict color and browning based on your recipe.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
