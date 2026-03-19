import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeTastesSalty() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-stone-50 to-amber-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-stone-700 text-white px-4 py-2 rounded-full text-sm mb-6">Coffee Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-700 to-stone-700 bg-clip-text text-transparent">Why Coffee Tastes Salty</h1>
          <p className="text-xl text-muted-foreground">Understand why some coffees have a noticeable salty edge — from water mineral content to roast chemistry — and why a tiny bit of salt can actually improve your cup.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-blue-200 to-stone-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🧂</span></div>
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🧂</span>
            <div>
              <p className="font-bold text-blue-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Salty coffee is usually caused by mineral-heavy water (especially softened water with high sodium) or under-extraction. Use filtered water with balanced minerals. A tiny pinch of salt also suppresses bitterness.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">A noticeably salty taste in coffee is unusual but has specific causes — most commonly mineral-heavy water, certain bean origins, or early extraction phases. Interestingly, a tiny, imperceptible amount of salt actually enhances coffee by suppressing bitterness.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-blue-700 to-stone-700 bg-clip-text text-transparent">Why Coffee Can Taste Salty</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <h3 className="text-xl mb-3">💧 Mineral-Heavy Brewing Water</h3>
              <p className="text-sm text-muted-foreground mb-3">Water minerals — particularly sodium, magnesium, and calcium — affect coffee flavor significantly. Sodium in brewing water directly contributes a salty taste. Softened water (water that has had calcium and magnesium replaced with sodium via ion exchange) can make coffee noticeably salty due to elevated sodium levels.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Use filtered water with balanced mineral content. Ideal: 75–150 ppm total dissolved solids, low sodium. Don't brew with softened water.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-stone-200">
              <h3 className="text-xl mb-3">🌍 Bean Origin and Processing</h3>
              <p className="text-sm text-muted-foreground mb-3">Some bean origins naturally produce saline notes. Certain Ethiopian and Kenyan coffees with specific mineral profiles can taste slightly savory or salty. Naturally processed (dry processed) coffees sometimes develop savory, complex notes including faint saltiness.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <h3 className="text-xl mb-3">⏱️ Under-Extraction</h3>
              <p className="text-sm text-muted-foreground mb-3">Salts and acids are among the first compounds to extract from coffee grounds. An under-extracted cup (too-short brew time, too-cool water) captures mainly these early-extracting salty and sour compounds without the sweetness and body that balance them.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Extend brew time, increase water temperature, or grind finer to improve extraction and balance out the saltiness.</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">💡 Science Note: Why a Pinch of Salt Works</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Adding a tiny pinch of salt (1/8 tsp per 12 cups) to coffee grounds before brewing is a legitimate trick — not a myth. Sodium ions suppress the perception of bitterness by blocking bitter taste receptors. The salt itself is imperceptible at these concentrations but measurably reduces harshness, particularly in over-extracted or stale coffee. It's why some high-end coffee shops add trace amounts of salt to their brew water.</p>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why does some coffee taste salty?</h3>
                <p className="text-muted-foreground text-sm">Most commonly: mineral-heavy brewing water (especially softened water with high sodium), under-extraction, or certain bean origins with naturally higher mineral content.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does adding salt to coffee work?</h3>
                <p className="text-muted-foreground text-sm">Yes — a tiny pinch (1/8 tsp per 12 cups) added to grounds before brewing suppresses bitterness perception without making the coffee taste salty. Sodium ions block bitter taste receptors at these trace concentrations.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">What water minerals affect coffee taste?</h3>
                <p className="text-muted-foreground text-sm">Magnesium enhances flavor extraction. Calcium provides balance. Sodium at low levels enhances sweetness; at high levels causes saltiness. Total hardness between 75–150 ppm is generally ideal for brewing.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does softened water make coffee taste salty?</h3>
                <p className="text-muted-foreground text-sm">Water softeners replace calcium and magnesium ions with sodium ions. This can dramatically increase sodium content, directly causing a salty taste. Use filtered water with balanced minerals, not softened water.</p>
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

          <div className="bg-gradient-to-r from-blue-600 to-stone-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Balance Your Coffee Flavor</h2>
            <p className="text-lg text-white/90 mb-6">Use BeanSensei to dial in extraction and water quality.</p>
            <a href="https://beansensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Try BeanSensei →<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
