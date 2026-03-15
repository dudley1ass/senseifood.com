import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCakesStickToPan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cake Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
            Why Cakes Stick to the Pan
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn why cakes refuse to release from the pan and how proper preparation guarantees a clean release every time.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>5 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-rose-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">😩</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Few things are more disheartening than watching a beautifully baked cake tear itself apart as you try to remove it from the pan. Sticking happens when the batter makes direct contact with bare metal and the sugars caramelize and bond to the surface during baking.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
            Why Cakes Bond to Metal
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            At baking temperatures, the sugars and proteins in cake batter undergo the Maillard reaction and caramelization at the point of contact with the pan. These reactions create molecular bonds between the baked cake and the metal surface. Without a barrier — fat, flour, or parchment — these bonds are strong enough to tear the cake apart on removal.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
            Causes & Fixes
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3">🫙 Pan Not Properly Greased</h3>
              <p className="text-sm text-muted-foreground mb-3">
                A thin or patchy layer of grease leaves gaps where batter contacts bare metal. These spots bond and tear. The most common mistake is using too little fat or missing the pan sides.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Use softened butter or shortening (not spray alone) and coat every surface including the sides. Then dust with flour for a double barrier, tapping out the excess.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">📄 No Parchment Paper</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Even well-greased pans can stick if the recipe is high in sugar. Parchment paper creates a physical barrier that no amount of batter bonds can overcome.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Grease the pan, lay a parchment circle in the bottom, then grease the parchment too. This is the gold standard for layer cakes.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">⏰ Removed Too Early (Before Cooling)</h3>
              <p className="text-sm text-muted-foreground mb-3">
                A hot cake hasn't fully contracted from the pan walls yet. The structure is still fragile. Trying to unmold a hot cake almost always results in sticking and tearing.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Cool the cake in the pan for 10–15 minutes on a wire rack. Then run a thin knife around the edges before inverting. The cake will have contracted slightly from the sides.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3">🍰 High Sugar Recipes</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Sugar-heavy batters (like carrot cake, banana cake, or any recipe with molasses or honey) are especially prone to sticking because of the intense caramelization that occurs at the pan surface.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Always use parchment for high-sugar cakes. Consider using a release spray with flour (like Baker's Joy) in addition to parchment.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🍳 Old, Worn, or Dark Non-Stick Pans</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Non-stick coatings lose effectiveness over time. Dark pans also absorb more heat at the edges, causing faster, stronger caramelization bonds at the sides and bottom.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Still grease and line non-stick pans for important cakes. Replace pans with flaking or scratched coatings. For dark pans, reduce oven temp by 25°F.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-rose-200 my-10">
            <h3 className="text-xl mb-6 text-center">The Perfect Pan Prep Method</h3>
            <div className="space-y-3">
              {[
                'Grease the entire interior with softened butter (not spray)',
                'Add 2 tbsp flour, tilt to coat all surfaces, tap out excess',
                'Cut a parchment circle for the bottom and press it in',
                'Grease the parchment lightly',
                'Pour in batter and bake',
                'Cool 10–15 min before running a knife around edges and inverting',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-gradient-to-br from-rose-500 to-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <p className="text-sm text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Cake Baking</h2>
            <p className="text-lg text-white/90 mb-6">
              Learn the science behind every cake problem and solve it before it happens.
            </p>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 bg-white text-rose-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Browse All Cake Science
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
