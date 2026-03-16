import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeSmellsGood() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-yellow-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-600 to-amber-700 text-white px-4 py-2 rounded-full text-sm mb-6">Coffee Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-stone-700 to-amber-700 bg-clip-text text-transparent">Why Coffee Smells Good</h1>
          <p className="text-xl text-muted-foreground">Discover the volatile aromatic compounds released during roasting and brewing that make coffee one of the most complex scents in the world.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>6 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-stone-300 to-amber-500 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">😍</span></div>
        <div className="prose prose-lg max-w-none">
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
