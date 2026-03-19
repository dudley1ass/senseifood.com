import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeGrindSizeMatters() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-yellow-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-stone-600 text-white px-4 py-2 rounded-full text-sm mb-6">Coffee Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-stone-700 bg-clip-text text-transparent">Why Coffee Grind Size Matters</h1>
          <p className="text-xl text-muted-foreground">Understand how grind size controls extraction rate, flavor balance, and why matching grind to brew method is the single most impactful variable in coffee.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>7 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-stone-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">⚙️</span></div>
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">⚙️</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Grind size controls extraction rate. Too fine = over-extracted (bitter). Too coarse = under-extracted (sour/weak). Match grind to brew method — espresso needs fine, French press needs coarse.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Grind size is the single most controllable variable in coffee brewing. It determines surface area, which controls extraction rate, which controls flavor. Get it wrong and nothing else you adjust will fix the cup.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-stone-700 bg-clip-text text-transparent">The Surface Area Principle</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">Grinding breaks a whole bean into smaller particles, dramatically increasing the surface area in contact with water. More surface area = faster extraction. Finer grind = more surface area = extracts faster. Coarser grind = less surface area = extracts slower. This is why you must match grind to brew time — if water contact time is short (espresso: 25–30 sec), you need a fine grind to extract enough flavor. If contact time is long (French press: 4 min), a coarse grind prevents over-extraction.</p>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">What happens if coffee grind is too fine?</h3>
                <p className="text-muted-foreground text-sm">Over-extraction: the cup tastes bitter, harsh, and astringent. For espresso, shots run too slowly or not at all (choked). The solution is always to grind coarser.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">What happens if coffee grind is too coarse?</h3>
                <p className="text-muted-foreground text-sm">Under-extraction: the cup tastes sour, weak, and watery. For espresso, shots run too fast and appear pale. The solution is to grind finer.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does grind size affect caffeine?</h3>
                <p className="text-muted-foreground text-sm">Marginally. Finer grinds extract slightly more caffeine due to increased surface area and extraction efficiency. The difference is small — grind size has far more impact on flavor than on caffeine content.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why is a burr grinder better than a blade grinder?</h3>
                <p className="text-muted-foreground text-sm">Burr grinders produce consistent particle sizes, enabling even extraction. Blade grinders create wildly inconsistent sizes — some powder-fine, some boulder-coarse — producing simultaneous over- and under-extraction in the same cup.</p>
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
              <Link to="/coffee-science/why-coffee-brewing-time-matters" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Brewing Time Matters</Link>
              <Link to="/coffee-science/why-coffee-stales" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Stales</Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-xl mb-6 text-center">Grind Size Guide by Brew Method</h3>
            <div className="space-y-3">
              {[
                ['Extra Fine', 'Turkish coffee', 'Powder-like, finer than flour'],
                ['Fine', 'Espresso', 'Like table salt — very fine'],
                ['Medium-Fine', 'Pour Over (V60)', 'Like granulated sugar'],
                ['Medium', 'Drip coffee, AeroPress', 'Like coarse sand'],
                ['Medium-Coarse', 'Chemex', 'Like rough sea salt'],
                ['Coarse', 'French Press, Cold Brew', 'Like coarse ground pepper'],
              ].map(([size, method, desc]) => (
                <div key={size} className="border-l-4 border-amber-400 pl-4 py-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{size}</span>
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">{method}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-stone-700 bg-clip-text text-transparent">What Wrong Grind Size Tastes Like</h2>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200">
              <h3 className="text-xl mb-3 text-red-700">Too Fine → Over-Extracted</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Bitter, harsh, astringent</li>
                <li>• Hollow, dry aftertaste</li>
                <li>• Flow too slow (espresso)</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <h3 className="text-xl mb-3 text-blue-700">Too Coarse → Under-Extracted</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Sour, weak, watery</li>
                <li>• Thin body, no sweetness</li>
                <li>• Flow too fast (espresso)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Particle Size Distribution</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Blade grinders produce wildly inconsistent particle sizes — some powder-fine, some boulder-large. This means the fine particles over-extract while the coarse ones under-extract simultaneously, producing a muddled cup that's simultaneously bitter and sour. Burr grinders (conical or flat) produce consistent particle sizes, enabling controlled, even extraction — the reason specialty coffee insists on them.</p>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-stone-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Dial In Your Grind</h2>
            <p className="text-lg text-white/90 mb-6">Find your perfect grind setting with BeanSensei.</p>
            <a href="https://beansensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Try BeanSensei →<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
