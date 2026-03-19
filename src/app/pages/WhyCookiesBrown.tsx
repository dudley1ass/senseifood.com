import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesBrown() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />Back to Articles
        </Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Why Cookies Brown</h1>
          <p className="text-xl text-muted-foreground">Understand the Maillard reaction and caramelization — the two chemical processes responsible for golden-brown color and rich cookie flavor.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>6 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🟤</span></div>
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🟤</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Cookie browning = Maillard reaction (proteins + sugars) + caramelization. More brown sugar, baking soda, and higher temp all deepen browning. Pull at golden — dark brown edges taste bitter.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Cookie browning isn't just cosmetic — it's the creation of hundreds of new flavor compounds that make cookies taste complex, nutty, and rich. Two distinct chemical reactions drive it, and understanding both lets you control exactly how brown your cookies get.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">The Two Browning Reactions</h2>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🔬 Maillard Reaction</h3>
              <p className="text-sm text-muted-foreground mb-3">Proteins + reducing sugars react at 280–330°F. Creates hundreds of flavor compounds: nutty, toasty, caramel notes. Responsible for the brown color on cookie tops and edges.</p>
              <div className="bg-amber-50 rounded-lg p-3 text-xs"><strong>Boosted by:</strong> Brown sugar, milk proteins (butter/milk), higher temp, longer bake time</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🍬 Caramelization</h3>
              <p className="text-sm text-muted-foreground mb-3">Sugars alone break down at 320–375°F. Creates butterscotch and toffee-like compounds. Primarily responsible for browning on the cookie base and edges where sugar concentration is highest.</p>
              <div className="bg-orange-50 rounded-lg p-3 text-xs"><strong>Boosted by:</strong> More sugar, white sugar (lower melting point), higher temp, thinner cookies</div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">What Controls Browning</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-8">
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 pl-6 py-2"><h4 className="font-medium mb-1">Sugar type</h4><p className="text-sm text-muted-foreground">Brown sugar browns faster than white (molasses accelerates Maillard). Honey and corn syrup also promote heavy browning.</p></div>
              <div className="border-l-4 border-orange-500 pl-6 py-2"><h4 className="font-medium mb-1">Baking temperature</h4><p className="text-sm text-muted-foreground">Higher temp = faster, darker browning. 375°F gives well-browned edges. 325°F gives pale, even color.</p></div>
              <div className="border-l-4 border-yellow-500 pl-6 py-2"><h4 className="font-medium mb-1">Baking soda vs. baking powder</h4><p className="text-sm text-muted-foreground">Baking soda raises pH, making the dough more alkaline — which dramatically accelerates the Maillard reaction and produces deeper browning.</p></div>
              <div className="border-l-4 border-amber-700 pl-6 py-2"><h4 className="font-medium mb-1">Cookie thickness</h4><p className="text-sm text-muted-foreground">Thin cookies brown more evenly and quickly. Thick cookies brown on the outside while staying pale in the center.</p></div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Why Brown Butter Works</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Browning butter before adding it to dough pre-triggers the Maillard reaction in the fat itself, creating nutty pyrazines and furanones. These compounds layer on top of whatever browning happens in the oven, giving cookies a noticeably deeper, more complex flavor than regular butter provides.</p>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why do my cookies come out pale even when fully baked?</h3>
                <p className="text-muted-foreground text-sm">Oven temperature may be low, or too much white sugar (which browns less than brown sugar). Try increasing oven temp by 25°F or replacing some white sugar with brown for more Maillard browning.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why do some cookies brown faster than others?</h3>
                <p className="text-muted-foreground text-sm">Higher sugar content, more brown sugar, more baking soda (alkaline = faster Maillard), and thinner cookies all brown faster. Different recipes can bake at the same temperature with very different browning rates.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does butter affect cookie browning?</h3>
                <p className="text-muted-foreground text-sm">Yes. Butter's milk proteins participate in the Maillard reaction. Browned butter (pre-Maillard) adds extra browning compounds. Shortening lacks milk proteins and produces paler cookies at the same temperature.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">How do I prevent cookies from over-browning on the edges?</h3>
                <p className="text-muted-foreground text-sm">Reduce oven temperature by 25°F and increase bake time slightly. Use a lighter-colored pan. Ensure cookies are equal thickness so edges and centers cook at the same rate.</p>
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
            <h2 className="text-3xl mb-4">Control Your Cookie Color</h2>
            <p className="text-lg text-white/90 mb-6">Use CookieSensei to predict browning based on your sugar ratio and bake temp.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
