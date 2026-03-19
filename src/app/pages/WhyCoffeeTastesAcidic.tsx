import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeTastesAcidic() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-amber-700 text-white px-4 py-2 rounded-full text-sm mb-6">Coffee Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-yellow-700 to-amber-700 bg-clip-text text-transparent">Why Coffee Tastes Acidic</h1>
          <p className="text-xl text-muted-foreground">Learn the difference between pleasant brightness and harsh acidity — and which organic acids in coffee contribute to each.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>7 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-yellow-200 to-amber-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🍋</span></div>
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🍋</span>
            <div>
              <p className="font-bold text-yellow-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Coffee acidity comes from organic acids in the bean. Pleasant brightness = citric/malic acid. Harsh sourness = under-extraction or acetic acid. Brew hotter and longer to balance it.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Coffee is naturally acidic — pH 4.5–6.0 depending on roast and brew method. This acidity isn't a flaw; it's responsible for much of coffee's brightness and complexity. The key is distinguishing desirable acids from problematic ones.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-yellow-700 to-amber-700 bg-clip-text text-transparent">The Acids in Coffee</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200 my-8">
            <table className="w-full text-sm">
              <thead><tr className="border-b-2 border-yellow-200"><th className="text-left py-3 text-yellow-800">Acid</th><th className="text-left py-3 text-green-700">Character</th><th className="text-left py-3 text-muted-foreground">Notes</th></tr></thead>
              <tbody className="divide-y divide-yellow-100">
                <tr><td className="py-3 font-medium">Citric acid</td><td className="py-3 text-green-700">✓ Desirable</td><td className="py-3 text-muted-foreground">Bright, lemony, refreshing. More in light roasts and high-altitude beans.</td></tr>
                <tr><td className="py-3 font-medium">Malic acid</td><td className="py-3 text-green-700">✓ Desirable</td><td className="py-3 text-muted-foreground">Apple-like, smooth tartness. Rounds out flavor.</td></tr>
                <tr><td className="py-3 font-medium">Phosphoric acid</td><td className="py-3 text-green-700">✓ Desirable</td><td className="py-3 text-muted-foreground">Clean, mineral brightness. Common in Kenyan beans.</td></tr>
                <tr><td className="py-3 font-medium">Acetic acid</td><td className="py-3 text-red-600">✗ Problematic</td><td className="py-3 text-muted-foreground">Vinegary, harsh. Produced by under-extraction or fermentation defects.</td></tr>
                <tr><td className="py-3 font-medium">Chlorogenic acid</td><td className="py-3 text-amber-600">⚠ Neutral</td><td className="py-3 text-muted-foreground">Breaks down during roasting. Contributes to bitterness when present.</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-yellow-700 to-amber-700 bg-clip-text text-transparent">What Makes Coffee More or Less Acidic</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <h3 className="text-xl mb-3">🫘 Roast Level</h3>
              <p className="text-sm text-muted-foreground mb-3">Light roasts retain more organic acids — especially citric and malic — and taste noticeably brighter. Dark roasts destroy most of these acids through pyrolysis, tasting less acidic but also less complex. If coffee is too acidic, try a medium-dark roast.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🌡️ Brew Temperature</h3>
              <p className="text-sm text-muted-foreground mb-3">Lower water temperatures extract acids preferentially over sugars. Under-extracted coffee (too-cool water, too-short brew time) is sour because only the light, acidic compounds have extracted — none of the balancing sugars and oils.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix for excess acidity:</strong> Increase water temperature to 200–205°F. Brew longer. Grind finer.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <h3 className="text-xl mb-3">🌍 Bean Origin</h3>
              <p className="text-sm text-muted-foreground mb-3">High-altitude grown beans (Ethiopian, Kenyan, Colombian) naturally develop more organic acids due to slower maturation. Low-altitude beans (Brazilian, Indonesian) produce fewer acids and taste flatter but smoother. Choose origin based on your acidity preference.</p>
            </div>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Is acidic coffee bad for you?</h3>
                <p className="text-muted-foreground text-sm">For most people, no. Some people with acid reflux do better with low-acid coffees (dark roast, cold brew, or low-altitude origins like Brazilian or Sumatran beans).</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">How do I make coffee less acidic?</h3>
                <p className="text-muted-foreground text-sm">Choose a darker roast, use cold brew method, try low-altitude beans (Brazil, Sumatra), or use slightly coarser grind and cooler water. Each reduces acid extraction.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does cold brew have less acid?</h3>
                <p className="text-muted-foreground text-sm">Yes — cold water extracts less citric and malic acid than hot water. Cold brew typically has 60–70% less acidity than hot-brewed coffee from the same beans.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">What coffee is least acidic?</h3>
                <p className="text-muted-foreground text-sm">Dark roast coffees from low-altitude growing regions (Brazilian, Sumatran) brewed as cold brew are the least acidic options. These beans naturally develop fewer acids and cold brewing extracts even less.</p>
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

          <div className="bg-gradient-to-r from-yellow-600 to-amber-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Dial In Your Acidity</h2>
            <p className="text-lg text-white/90 mb-6">Use BeanSensei to find your perfect balance of brightness and body.</p>
            <a href="https://beansensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-yellow-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Try BeanSensei →<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
