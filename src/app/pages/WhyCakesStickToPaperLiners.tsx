import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCakesStickToPaperLiners() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm mb-6">Cake Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Why Cakes Stick to Paper Liners</h1>
          <p className="text-xl text-muted-foreground">Learn why cupcakes and cakes cling to paper liners and how to get clean, easy release every time.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Beginner Friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-rose-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🧁</span></div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Paper liners that peel away half the cupcake are a frustrating but common problem. Sticking happens when moisture from the batter soaks into the paper during baking and creates a bond between the paper fibers and the cake's starch-sugar matrix.</p>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Why Paper Liners Stick</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">Paper is porous. During baking, steam and moisture from the batter migrate outward and saturate the paper. As the cake cools, this moisture-laden paper dries and contracts against the cake surface, bonding to the sugar and starch in the outer crust. The wetter the batter and the thinner/cheaper the liner, the worse the sticking.</p>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3">📄 Low-Quality Liners</h3>
              <p className="text-sm text-muted-foreground mb-3">Thin, uncoated paper liners have no barrier layer. Moisture soaks straight through and creates a strong paper-to-cake bond.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Use foil liners, grease-resistant parchment liners, or high-quality tulip liners. These have a non-stick coating that prevents moisture bonding.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🌡️ Not Fully Cooled Before Peeling</h3>
              <p className="text-sm text-muted-foreground mb-3">Warm cakes are still moist and soft. The paper is still damp from baking. Peeling now tears the cake. Fully cooled cakes have a drier surface that releases more cleanly.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Wait until cupcakes are completely cool — at least 45–60 minutes. The paper and cake surface will have dried enough for clean separation.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-100">
              <h3 className="text-xl mb-3">💧 Very Moist or Oil-Heavy Batter</h3>
              <p className="text-sm text-muted-foreground mb-3">Oil-based cakes (carrot, zucchini, banana) release more moisture during baking than butter cakes. This extra moisture saturates the liner more aggressively.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> For very moist batters, spray the inside of the liner lightly with cooking spray before filling, or switch to foil liners.</div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Bake Perfect Cupcakes</h2>
            <p className="text-lg text-white/90 mb-6">Browse all our cake science articles for more fixes.</p>
            <Link to="/articles" className="inline-flex items-center gap-2 bg-white text-rose-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Browse Cake Science<ArrowLeft className="w-4 h-4 rotate-180" /></Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
