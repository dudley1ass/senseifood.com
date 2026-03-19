import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyIceCreamIsCreamy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Navigation />

      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm mb-6">
            Ice Cream Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Why Ice Cream Is Creamy
          </h1>
          <p className="text-xl text-muted-foreground">
            Understand the science of ice cream creaminess — why crystal size, fat content, and churning speed determine whether your ice cream is silky smooth or unpleasantly icy.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>7 min read</span>
            <span>•</span>
            <span>Intermediate</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-pink-200 to-purple-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🍨</span>
        </div>

        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🍨</span>
            <div>
              <p className="font-bold text-pink-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Creaminess = ice crystals smaller than 40 micrometers. Rapid churning, high fat content, egg yolk emulsifiers, and stabilizers all keep crystals microscopic and the texture silky smooth.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            The difference between creamy, luxurious ice cream and icy, grainy frozen disappointment comes down to one thing: ice crystal size. Creaminess is achieved by keeping ice crystals microscopic — small enough that your tongue can't detect individual crystals.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            The Crystal Size Rule
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Human tongues can detect ice crystals larger than about 40–50 micrometers. Anything smaller feels smooth. Premium ice cream maintains crystals below this threshold through rapid freezing, constant agitation during churning, and proper stabilization. Any process that allows crystals to grow larger — slow freezing, temperature fluctuations, insufficient fat — produces icy, gritty texture.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200 my-10">
            <h3 className="text-xl mb-6">Crystal Size vs. Texture</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                <span className="font-bold text-green-700 w-24 text-sm">&lt;40 μm</span>
                <span className="text-sm text-muted-foreground">Smooth, creamy — feels silky on the tongue</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-yellow-50 rounded-lg">
                <span className="font-bold text-yellow-700 w-24 text-sm">40–80 μm</span>
                <span className="text-sm text-muted-foreground">Slightly grainy — detectable but still acceptable</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-red-50 rounded-lg">
                <span className="font-bold text-red-700 w-24 text-sm">&gt;80 μm</span>
                <span className="text-sm text-muted-foreground">Icy, crunchy — clearly unpleasant crystal texture</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            What Creates Creaminess
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
              <h3 className="text-xl mb-3">🧊 Rapid Freezing During Churning</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The faster the base freezes, the smaller the initial ice crystals. When liquid freezes slowly, water molecules have time to join existing large crystals. Fast freezing nucleates millions of tiny new crystals simultaneously, producing a fine, smooth texture.
              </p>
              <div className="bg-pink-50 rounded-lg p-3 text-xs">
                <strong>Why churners matter:</strong> An ice cream maker freezes the base while agitating it, breaking up forming crystals and incorporating air at the same time.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
              <h3 className="text-xl mb-3">🧈 High Fat Content</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Fat physically interferes with crystal growth. Fat globules cluster between ice crystals and block water molecules from migrating and adding to existing crystals. More fat = more barriers = smaller crystals = creamier texture. This is why gelato (higher egg yolk fat) and premium ice cream feel so much smoother than low-fat alternatives.
              </p>
              <div className="bg-purple-50 rounded-lg p-3 text-xs">
                <strong>Numbers:</strong> Regular ice cream ≥10% fat. Premium ice cream 14–18% fat. Full-fat heavy cream used as a base = 36% fat. Each step up in fat = noticeably creamier.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-indigo-200">
              <h3 className="text-xl mb-3">🥚 Egg Yolks (Emulsification)</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Egg yolks contain lecithin, a powerful emulsifier that helps fat and water form a stable mixture. Emulsified ice cream has better body, smoother texture, and a slower melt rate. French-style (custard-based) ice cream uses egg yolks for this reason.
              </p>
              <div className="bg-indigo-50 rounded-lg p-3 text-xs">
                <strong>Philadelphia-style:</strong> Uses no eggs (just cream, milk, sugar). Lighter, icier, fresher-tasting but less creamy than custard base.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
              <h3 className="text-xl mb-3">🧪 Stabilizers and Sugar</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Sugar lowers the freezing point of the mix, keeping more water unfrozen (as a syrup) at serving temperature. This syrup lubricates the texture. Stabilizers (guar gum, locust bean gum) bind free water molecules, preventing them from migrating and forming large crystals over time.
              </p>
              <div className="bg-pink-50 rounded-lg p-3 text-xs">
                <strong>Home tip:</strong> Adding 1–2 tablespoons of vodka to homemade ice cream lowers the freezing point slightly, reducing iciness without affecting flavor.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Recrystallization</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Even perfectly creamy ice cream develops larger crystals over time in storage — a process called recrystallization. When ice cream warms and re-cools (e.g. left out and refrozen), small crystals dissolve and water re-freezes onto larger existing crystals. This is why repeatedly thawed ice cream becomes progressively icier and less creamy.
            </p>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">What makes ice cream smooth and creamy?</h3>
                <p className="text-muted-foreground text-sm">Crystal size is everything. Ice crystals smaller than 40–50 micrometers feel smooth. Rapid freezing during churning, high fat content, egg yolk emulsifiers, and stabilizers all work to keep crystals microscopic.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why is gelato creamier than regular ice cream?</h3>
                <p className="text-muted-foreground text-sm">Gelato uses more egg yolks (natural emulsifiers), less air (lower overrun), and is served at a slightly warmer temperature (-11°C vs -18°C for ice cream). The warmer serving temp keeps it softer and more pliable on the tongue.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does more fat make ice cream creamier?</h3>
                <p className="text-muted-foreground text-sm">Yes — fat physically blocks ice crystal growth and adds richness. Premium ice cream at 16–18% fat tastes dramatically creamier than regular ice cream at 10% fat, even with identical crystal sizes.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does ice cream get grainy after being refrozen?</h3>
                <p className="text-muted-foreground text-sm">This is recrystallization. When ice cream partially melts and refreezes, small crystals dissolve and water migrates to existing larger crystals. Each thaw-refreeze cycle produces progressively larger, detectable crystals.</p>
              </div>
            </div>
          </div>
          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/ice-cream-science/why-ice-cream-gets-icy" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Ice Cream Gets Icy</Link>
              <Link to="/ice-cream-science/why-ice-cream-melts-fast" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Ice Cream Melts Fast</Link>
              <Link to="/ice-cream-science/why-ice-cream-gets-freezer-burn" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Ice Cream Gets Freezer Burn</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">More Ice Cream Science</h2>
            <p className="text-lg text-white/90 mb-6">
              Explore what causes icy texture, fast melting, and freezer burn in our full ice cream science series.
            </p>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
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
