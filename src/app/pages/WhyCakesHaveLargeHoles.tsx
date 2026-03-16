import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCakesHaveLargeHoles() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cake Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Why Cakes Have Large Holes</h1>
          <p className="text-xl text-muted-foreground">Discover why cakes develop large tunnels and air pockets in the crumb — and how mixing technique prevents them.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-purple-200 to-pink-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🕳️</span></div>
        <div className="prose prose-lg max-w-none">
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
