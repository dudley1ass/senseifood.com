import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeBrewingTimeMatters() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-600 to-amber-700 text-white px-4 py-2 rounded-full text-sm mb-6">Coffee Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-stone-700 to-amber-700 bg-clip-text text-transparent">Why Coffee Brewing Time Matters</h1>
          <p className="text-xl text-muted-foreground">Learn how contact time between water and grounds controls which flavor compounds extract — and why every brew method has its ideal window.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>6 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-stone-200 to-amber-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">⏱️</span></div>
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-stone-50 border-l-4 border-stone-500 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">⏱️</span>
            <div>
              <p className="font-bold text-stone-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Brew time controls which flavor compounds extract. Too short = sour (only acids). Too long = bitter (harsh compounds). French press: 4 min. Pour over: 3–4 min. Espresso: 25–30 sec.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Brewing time determines which flavor compounds have enough contact time with water to dissolve. Different compounds extract at different rates — and brewing time controls how many of them make it into your cup.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-700 to-amber-700 bg-clip-text text-transparent">The Extraction Timeline</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-8">
            <div className="space-y-4">
              <div className="border-l-4 border-red-400 pl-6 py-3 bg-red-50 rounded-r-lg">
                <div className="flex justify-between items-center mb-1"><h4 className="font-medium">Phase 1: Acids & Salts</h4><span className="text-xs bg-red-200 px-2 py-1 rounded-full">First to extract</span></div>
                <p className="text-sm text-muted-foreground">Highly soluble, extract almost immediately. Without these, coffee tastes flat. Too much = sour.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6 py-3 bg-green-50 rounded-r-lg">
                <div className="flex justify-between items-center mb-1"><h4 className="font-medium">Phase 2: Sugars & Aromatics</h4><span className="text-xs bg-green-200 px-2 py-1 rounded-full">Middle extraction</span></div>
                <p className="text-sm text-muted-foreground">The sweet spot. These create sweetness, body, and complexity. The goal of every brew.</p>
              </div>
              <div className="border-l-4 border-amber-700 pl-6 py-3 bg-amber-50 rounded-r-lg">
                <div className="flex justify-between items-center mb-1"><h4 className="font-medium">Phase 3: Bitter Compounds</h4><span className="text-xs bg-amber-200 px-2 py-1 rounded-full">Last to extract</span></div>
                <p className="text-sm text-muted-foreground">Melanoidins and bitter compounds. Some add depth. Too many = harsh, over-extracted bitterness.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-700 to-amber-700 bg-clip-text text-transparent">Ideal Brew Times by Method</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-8">
            <table className="w-full text-sm">
              <thead><tr className="border-b-2 border-amber-200"><th className="text-left py-3">Method</th><th className="text-left py-3">Ideal Time</th><th className="text-left py-3">Too Short</th><th className="text-left py-3">Too Long</th></tr></thead>
              <tbody className="divide-y divide-amber-100">
                <tr><td className="py-3 font-medium">Espresso</td><td className="py-3 text-green-700">25–30 sec</td><td className="py-3 text-muted-foreground">Sour, pale</td><td className="py-3 text-muted-foreground">Bitter, harsh</td></tr>
                <tr><td className="py-3 font-medium">Pour Over</td><td className="py-3 text-green-700">3–4 min</td><td className="py-3 text-muted-foreground">Weak, sour</td><td className="py-3 text-muted-foreground">Bitter, astringent</td></tr>
                <tr><td className="py-3 font-medium">French Press</td><td className="py-3 text-green-700">4 min</td><td className="py-3 text-muted-foreground">Weak, thin</td><td className="py-3 text-muted-foreground">Muddy, bitter</td></tr>
                <tr><td className="py-3 font-medium">AeroPress</td><td className="py-3 text-green-700">2–3 min</td><td className="py-3 text-muted-foreground">Sour</td><td className="py-3 text-muted-foreground">Bitter</td></tr>
                <tr><td className="py-3 font-medium">Cold Brew</td><td className="py-3 text-green-700">12–18 hours</td><td className="py-3 text-muted-foreground">Very weak</td><td className="py-3 text-muted-foreground">Bitter, over-steeped</td></tr>
              </tbody>
            </table>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">What happens if you brew coffee too long?</h3>
                <p className="text-muted-foreground text-sm">Over-extraction: bitter, harsh, astringent flavors from melanoidins and tannins dominate. The cup loses brightness and sweetness. For French press, leaving grounds in contact too long after the target time consistently causes this.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">What happens if you brew coffee too short?</h3>
                <p className="text-muted-foreground text-sm">Under-extraction: only the light, acidic compounds extract. The cup tastes sour, weak, and hollow — without the sweetness and body that come from longer extraction of sugars and oils.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does cold brew take 12–18 hours?</h3>
                <p className="text-muted-foreground text-sm">Cold water is far less efficient at dissolving flavor compounds than hot water. To achieve the same extraction yield that hot water achieves in 4 minutes, cold water needs 12–18 hours of contact time.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can I adjust brew time to fix bad coffee?</h3>
                <p className="text-muted-foreground text-sm">Yes — it's one of the primary tuning variables. Too bitter? Shorten brew time or grind coarser. Too sour/weak? Extend brew time or grind finer. Always change one variable at a time to identify the effect.</p>
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
              <Link to="/coffee-science/why-coffee-stales" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Stales</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-stone-600 to-amber-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Time Your Perfect Brew</h2>
            <p className="text-lg text-white/90 mb-6">Use BeanSensei to dial in your extraction window.</p>
            <a href="https://beansensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-stone-800 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Try BeanSensei →<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
