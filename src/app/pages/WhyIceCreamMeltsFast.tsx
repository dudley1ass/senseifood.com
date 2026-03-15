import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyIceCreamMeltsFast() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
      <Navigation />

      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm mb-6">
            Ice Cream Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Why Ice Cream Melts Fast
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover the science behind ice cream melting rate and how fat content, overrun, and stabilizers affect how long your scoop holds its shape.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🍦</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Ice cream that becomes a puddle before you finish your cone is both a physics problem and a recipe quality indicator. How fast ice cream melts is determined by its structure — specifically how much fat, air, and stabilizer it contains.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            What Is Ice Cream Made Of?
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Ice cream is a frozen foam — a complex emulsion of ice crystals, fat globules, air bubbles, and sugar-water solution, all held in a semi-stable matrix. Its melt rate is determined by how well this matrix resists heat transfer and maintains structure as ice crystals warm and melt.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200 my-10">
            <h3 className="text-xl mb-6">Ice Cream Structure at a Glance</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-blue-50 rounded-xl">
                <h4 className="font-medium text-blue-800 mb-2">🧊 Ice Crystals (30–70%)</h4>
                <p className="text-muted-foreground text-xs">Provide firmness. Smaller crystals = creamier texture. Melt first when heat is applied.</p>
              </div>
              <div className="p-4 bg-cyan-50 rounded-xl">
                <h4 className="font-medium text-cyan-800 mb-2">🌬️ Air (Overrun, 20–50%)</h4>
                <p className="text-muted-foreground text-xs">Whipped in during churning. More air = lighter texture, faster melting.</p>
              </div>
              <div className="p-4 bg-sky-50 rounded-xl">
                <h4 className="font-medium text-sky-800 mb-2">🧈 Fat Globules (10–18%)</h4>
                <p className="text-muted-foreground text-xs">Stabilize air bubbles, slow melt rate, add richness and body.</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <h4 className="font-medium text-blue-800 mb-2">🍬 Sugar Solution</h4>
                <p className="text-muted-foreground text-xs">Lowers freezing point, adds sweetness, affects scoopability and melt speed.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Why Some Ice Cream Melts Faster
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <h3 className="text-xl mb-3">🌬️ High Overrun (Too Much Air)</h3>
              <p className="text-sm text-muted-foreground mb-3">
                "Overrun" is the percentage of air whipped into ice cream. Cheap commercial ice cream can have up to 100% overrun — meaning it's half air by volume. High overrun ice cream melts extremely fast because the air bubbles collapse instantly and the remaining liquid has little structure to hold together.
              </p>
              <div className="bg-blue-50 rounded-lg p-3 text-xs">
                <strong>Quality indicator:</strong> Premium ice creams have 20–30% overrun. They're denser, heavier per volume, and melt noticeably slower.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-cyan-200">
              <h3 className="text-xl mb-3">🧈 Low Fat Content</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Fat does double duty: it carries flavor and it acts as a structural scaffold that slows melting. Fat globules cluster around air bubbles and ice crystals, forming a network that resists collapse. Low-fat or non-dairy ice creams lack this network and puddle much faster.
              </p>
              <div className="bg-cyan-50 rounded-lg p-3 text-xs">
                <strong>Standard:</strong> Ice cream must contain ≥10% milkfat by law (US). Premium brands use 16–18% for slower melt and richer texture.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-sky-200">
              <h3 className="text-xl mb-3">🧪 No Stabilizers</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Stabilizers (guar gum, locust bean gum, carrageenan) bind water and slow its movement when ice crystals melt. Without them, liquid from melting ice flows freely and the scoop loses shape immediately.
              </p>
              <div className="bg-sky-50 rounded-lg p-3 text-xs">
                <strong>Note:</strong> High-quality gelato achieves slow melting with higher egg yolk content (which acts as a natural emulsifier and stabilizer) rather than gums.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <h3 className="text-xl mb-3">🍬 High Sugar Concentration</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Sugar lowers the freezing point of ice cream. Very sweet ice cream stays softer at lower temperatures and begins melting faster when exposed to ambient air because its freeze point is already depressed.
              </p>
              <div className="bg-blue-50 rounded-lg p-3 text-xs">
                <strong>Effect:</strong> This is also why sorbet (no fat) melts incredibly fast — it relies entirely on sugar concentration and stabilizers.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: The Slow Melt Test</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leave a scoop of premium ice cream and a scoop of cheap store brand side by side at room temperature. The cheap brand will puddle first — its high overrun collapses immediately. Premium ice cream maintains its shape significantly longer thanks to denser fat networks and lower air content. This test is the clearest quality signal in ice cream.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">More Ice Cream Science</h2>
            <p className="text-lg text-white/90 mb-6">
              Explore the chemistry behind ice crystals, creaminess, and freezer burn.
            </p>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Browse Ice Cream Science
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
