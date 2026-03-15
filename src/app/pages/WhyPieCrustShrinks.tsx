import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyPieCrustShrinks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Pie Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
            Why Pie Crust Shrinks
          </h1>
          <p className="text-xl text-muted-foreground">
            Find out why pie crust pulls away from the pan during baking and how resting, chilling, and handling prevent it.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Intermediate</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🥧</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            A pie crust that pulls back from the pan edges, slides down the sides, or loses its crimped shape is one of the most frustrating baking problems. Shrinkage is a gluten issue — and once you understand gluten's elastic behavior, it's completely preventable.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
            Why Gluten Causes Shrinkage
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Gluten is a network of elastic proteins that forms when wheat flour is mixed with water. Like a stretched rubber band, gluten under tension wants to snap back to its original position. When you roll out pie dough and stretch it to fit the pan, gluten strands are under stress. When heat hits them in the oven, they contract — pulling the crust away from the pan sides and down from the rim.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-xl mb-4">The Gluten Snap-Back Effect</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="text-2xl">1️⃣</span>
                <p className="text-sm text-muted-foreground">Water + flour → gluten strands form and become elastic</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">2️⃣</span>
                <p className="text-sm text-muted-foreground">Rolling and fitting to pan → strands stretch and are held under tension</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">3️⃣</span>
                <p className="text-sm text-muted-foreground">Oven heat → gluten proteins set and contract, snapping back to shorter length</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">4️⃣</span>
                <p className="text-sm text-muted-foreground">Result → crust slides down pan sides, rim shrinks inward</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
            Causes & Fixes
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">⏩ Dough Not Rested Before Rolling</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Freshly made dough has tight, tense gluten strands. Rolling it immediately stretches those tense strands even further. Resting the dough (even 30 minutes) allows gluten to relax — so when you roll it out, the strands are longer and less likely to snap back aggressively.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Rest dough in the fridge for a minimum of 30 minutes, ideally 1–2 hours. Overnight resting gives the most relaxed, pliable dough.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🥄 Over-Mixing the Dough</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The more you work pie dough, the more gluten develops. Over-worked dough has a dense, elastic gluten network that contracts severely in the oven — producing both a tough texture and dramatic shrinkage.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Mix just until the dough comes together — some visible butter chunks are fine. Use a light hand or food processor on pulse. Stop as soon as it holds when pressed.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <h3 className="text-xl mb-3">💧 Too Much Water</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Water is required for gluten to form. Adding too much water creates more gluten development during mixing, resulting in a stronger elastic network that contracts more aggressively.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Add ice water one tablespoon at a time, stopping as soon as the dough holds together. Ice water keeps fat cold (important for flakiness) and slows gluten development.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🌡️ Dough Not Chilled After Fitting</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Even if you rest the dough before rolling, fitting it into the pan re-stresses the gluten. Baking immediately gives no time for the newly stretched strands to relax. They contract as soon as heat hits.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> After fitting the dough into the pan and crimping, refrigerate the whole pan for 30–60 minutes before baking. This is the single most effective fix for shrinkage.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">📏 Dough Stretched Into Pan Rather Than Draped</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Stretching and pulling the dough to make it fit puts the gluten under maximum tension. When heat relaxes the gluten, it contracts back to its unstretched length — taking the crust with it.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Roll dough 2 inches larger than the pan diameter. Lift and drape it in gently — let gravity settle it into the corners. Never stretch or press it into shape.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Fat Inhibits Gluten</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fat coats flour proteins and physically blocks them from hydrating and bonding into gluten networks. This is why pie dough with more butter (or lard) has less shrinkage than lean doughs. Keeping fat cold and in visible chunks maximizes this protective effect.
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Pie Crust Science</h2>
            <p className="text-lg text-white/90 mb-6">
              Read our full guide to flaky pie crust to understand every technique that creates the perfect base.
            </p>
            <Link
              to="/pie-science/why-pie-crust-is-flaky"
              className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Why Pie Crust Is Flaky →
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
