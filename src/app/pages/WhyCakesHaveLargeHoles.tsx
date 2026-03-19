import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCakesHaveLargeHoles() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cake Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Why Cakes Have Large Holes</h1>
          <p className="text-xl text-muted-foreground">Discover why cakes develop large tunnels and air pockets in the crumb — and how mixing technique prevents them.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-purple-200 to-pink-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🕳️</span></div>
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-purple-50 border-l-4 border-purple-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🕳️</span>
            <div>
              <p className="font-bold text-purple-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Large holes = over-mixing after flour goes in. Overdeveloped gluten channels CO₂ into tunnels instead of fine bubbles. Fold flour in gently and stop the moment it disappears.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Large holes (tunneling) in cake crumb are a classic sign of over-mixing after the flour goes in. The irregular pockets form when gluten develops too strongly and CO₂ bubbles merge into large channels rather than remaining as fine, even bubbles throughout.</p>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">What Causes Tunneling</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
              <h3 className="text-xl mb-3">🥣 Over-Mixing After Adding Flour</h3>
              <p className="text-sm text-muted-foreground mb-3">Every stroke after flour is added builds gluten. Overdeveloped gluten creates a tight, elastic network that channels CO₂ into long tunnels rather than trapping it as small, uniform bubbles. Classic tunneling is always a mixing problem.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Fold flour in with a spatula just until no dry streaks remain. On a stand mixer, use lowest speed and stop immediately when combined.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
              <h3 className="text-xl mb-3">🌡️ Oven Too Hot</h3>
              <p className="text-sm text-muted-foreground mb-3">A very hot oven causes the exterior to set before internal CO₂ bubbles have distributed evenly. The gas rushes upward through the still-liquid center, creating vertical tunnels and holes.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Verify oven temperature with a thermometer. Reduce by 25°F if your cakes consistently tunnel. Bake slower and longer.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100">
              <h3 className="text-xl mb-3">🧂 Too Much Leavening</h3>
              <p className="text-sm text-muted-foreground mb-3">Excess leavening creates too many CO₂ bubbles at once. They merge and coalesce into large pockets rather than distributing as fine bubbles throughout the crumb.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Use exact, level measures for baking powder and soda. More is never better with leavening.</div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why does my cake have big air pockets?</h3>
                <p className="text-muted-foreground text-sm">The classic cause is over-mixing after adding flour — overdeveloped gluten creates tunnels that CO₂ follows as it rises. Can also be caused by too much leavening or oven temperature too high.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Are some holes normal in cake?</h3>
                <p className="text-muted-foreground text-sm">A small, even distribution of tiny holes is normal and desirable — it's the cell structure of a light crumb. Large irregular tunnels or pockets indicate a problem, usually mixing technique.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">How do I get an even crumb in my cake?</h3>
                <p className="text-muted-foreground text-sm">Fold flour in gently and stop immediately when just combined. Use room temperature ingredients so they emulsify properly. Measure leavening precisely.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can batter temperature cause holes?</h3>
                <p className="text-muted-foreground text-sm">Yes — cold butter or eggs added to creamed butter cause curdling that breaks the emulsion. The unevenly mixed batter creates pockets where water and fat separated, producing holes and uneven texture.</p>
              </div>
            </div>
          </div>
          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/cake-science/why-cakes-sink" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Sink in the Middle</Link>
              <Link to="/cake-science/why-cakes-rise" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Rise</Link>
              <Link to="/cake-science/why-cakes-are-dense" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Are Dense</Link>
              <Link to="/cake-science/why-cakes-collapse" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Collapse</Link>
              <Link to="/cake-science/why-cakes-dry-out" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Dry Out</Link>
              <Link to="/cake-science/why-cakes-crack-on-top" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Crack on Top</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Get a Perfect Crumb</h2>
            <p className="text-lg text-white/90 mb-6">Browse all our cake science articles.</p>
            <Link to="/articles" className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Browse Cake Science<ArrowLeft className="w-4 h-4 rotate-180" /></Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
