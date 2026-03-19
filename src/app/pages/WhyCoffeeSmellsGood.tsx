import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeSmellsGood() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-yellow-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-600 to-amber-700 text-white px-4 py-2 rounded-full text-sm mb-6">Coffee Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-stone-700 to-amber-700 bg-clip-text text-transparent">Why Coffee Smells Good</h1>
          <p className="text-xl text-muted-foreground">Discover the volatile aromatic compounds released during roasting and brewing that make coffee one of the most complex scents in the world.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>6 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-stone-300 to-amber-500 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">😍</span></div>
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">😍</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Coffee's incredible aroma comes from 800+ volatile compounds created during roasting. Grinding releases them all at once — grind fresh for maximum aroma every time.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Coffee contains over 800 identified aroma compounds — more than wine or chocolate. When you smell fresh coffee, you're detecting dozens of volatile molecules simultaneously: pyrazines (earthy, roasted), furans (caramel, sweet), and thiols (fruity, wine-like) — all created during roasting via the Maillard reaction.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-700 to-amber-700 bg-clip-text text-transparent">Where the Aroma Comes From</h2>

          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-stone-200">
              <h3 className="text-xl mb-3">🔥 Roasting Creates the Aroma</h3>
              <p className="text-sm text-muted-foreground mb-3">Green coffee beans have very little aroma. The Maillard reaction and pyrolysis during roasting (400–450°F) create hundreds of new volatile aromatic molecules that are responsible for all of coffee's characteristic scent. The longer and hotter the roast, the more these compounds transform — lighter roasts retain more fruity, floral volatiles; darker roasts produce more smoky, caramelized, and bitter aroma molecules.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">💨 Grinding Releases the Aroma</h3>
              <p className="text-sm text-muted-foreground mb-3">Whole beans preserve aromatics locked inside their cellular structure. Grinding creates millions of new surfaces simultaneously, releasing the volatile compounds all at once. This is why freshly ground coffee smells dramatically more intense than whole beans, and why pre-ground coffee goes stale in days rather than weeks.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-stone-200">
              <h3 className="text-xl mb-3">🌊 The Bloom Amplifies Aroma</h3>
              <p className="text-sm text-muted-foreground mb-3">When hot water first hits fresh coffee grounds, trapped CO₂ escapes rapidly — carrying aromatic compounds upward in a burst. This is why the "bloom" step in pour-over brewing creates such an intense, fragrant cloud. It's a rapid venting of aromatics. The more off-gassing (CO₂), the fresher the beans.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Why Brewed Coffee Smells Better Than It Tastes</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Many of coffee's most pleasant aroma compounds (like 2-furfurylthiol) are present at extremely low concentrations in the cup but highly detectable by smell. The nose can detect these molecules at parts-per-trillion. When you drink coffee, you lose direct access to these volatiles — they evaporate too quickly. This is why coffee aroma often exceeds its flavor complexity.</p>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why does coffee smell better than it tastes?</h3>
                <p className="text-muted-foreground text-sm">Many of coffee's most pleasant aroma compounds are present at extremely low concentrations but highly detectable by smell. When you drink, volatile aromatics evaporate quickly. Smell also captures compounds from the surface while drinking only delivers dissolved ones.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does freshly ground coffee smell stronger?</h3>
                <p className="text-muted-foreground text-sm">Grinding creates millions of new surfaces simultaneously, releasing the volatile aromatic compounds all at once. The same beans whole have these aromatics locked inside their cellular structure.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does coffee from a cafe smell better than home coffee?</h3>
                <p className="text-muted-foreground text-sm">Commercial espresso machines extract at higher pressure and temperature, releasing more aromatics. High-volume cafes also use very fresh beans (often daily deliveries) and burr grinders with precise settings.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does coffee smell change with roast level?</h3>
                <p className="text-muted-foreground text-sm">Yes dramatically. Light roasts have floral, fruity, citrus-forward aromas. Dark roasts have smoky, chocolatey, caramelized aromas. The roasting process creates and destroys different aromatic compounds at each temperature stage.</p>
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

          <div className="bg-gradient-to-r from-stone-600 to-amber-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Coffee Brewing</h2>
            <p className="text-lg text-white/90 mb-6">Get the most aroma and flavor from your beans with BeanSensei.</p>
            <a href="https://beansensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-stone-800 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Try BeanSensei →<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
