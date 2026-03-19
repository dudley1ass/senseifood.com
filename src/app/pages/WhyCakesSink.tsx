import { ArrowLeft, AlertCircle, Thermometer, Timer, Scale } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCakesSink() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      <Navigation />
      
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Back button */}
        <Link 
          to="/articles" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        {/* Header */}
        <header className="mb-12">

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why does my cake sink every time?</h3>
                <p className="text-muted-foreground text-sm">The most likely cause is under-baking — the structure hasn't set enough to hold the risen shape when removed from the oven. Check internal temperature (should reach 200–210°F) and test with a toothpick in the center.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can too much sugar cause a cake to sink?</h3>
                <p className="text-muted-foreground text-sm">Yes. Excess sugar weakens gluten structure and holds moisture that prevents the crumb from setting properly. Always measure sugar by weight, and don't add more than the recipe specifies.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does opening the oven cause cakes to sink?</h3>
                <p className="text-muted-foreground text-sm">Yes, especially in the first 20 minutes. Cold air lowers oven temperature, which can collapse delicate CO₂ bubbles before the structure has set. Wait until at least 75% of the bake time has passed before opening.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does my cake sink after coming out of the oven?</h3>
                <p className="text-muted-foreground text-sm">The structure wasn't fully set when removed. The center is still partly liquid and collapses under its own weight as it cools. The internal temperature should reach 200–210°F before removal.</p>
              </div>
            </div>
          </div>
          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/cake-science/why-cakes-rise" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Rise</Link>
              <Link to="/cake-science/why-cakes-are-dense" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Are Dense</Link>
              <Link to="/cake-science/why-cakes-collapse" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Collapse</Link>
              <Link to="/cake-science/why-cakes-dry-out" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Dry Out</Link>
              <Link to="/cake-science/why-cakes-crack-on-top" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Crack on Top</Link>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cake Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Why Cakes Sink in the Middle
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn the common causes of sinking cakes and how to prevent this frustrating baking problem.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>7 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        {/* Hero Image Placeholder */}
        <div className="w-full h-80 bg-gradient-to-br from-pink-200 to-rose-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">😔🎂</span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">😔</span>
            <div>
              <p className="font-bold text-pink-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Sinking cakes = under-baked center, too much leavening, or oven opened too early. Test with a toothpick in the very center — moist crumbs are fine, wet batter means more time needed.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            A cake that sinks in the middle is one of the most common—and frustrating—baking problems. The good news? It's almost always preventable once you understand the science behind cake structure.
          </p>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-red-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <AlertCircle className="w-7 h-7 text-red-600" />
              The Science of Sinking
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Cakes sink when the structure isn't strong enough to support the weight of the batter. This happens when the cake hasn't set properly before external forces (like temperature changes or physical movement) cause it to collapse.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Top 6 Reasons Cakes Sink
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Underbaking</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The most common cause. If you remove the cake from the oven before the structure has fully set, it will collapse under its own weight.
                  </p>
                  <div className="bg-red-50 rounded-xl p-4">
                    <p className="text-sm"><strong className="text-red-700">Fix:</strong> Always use the toothpick test. Insert a toothpick in the center—it should come out clean or with just a few moist crumbs, never wet batter.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-orange-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Too Much Leavening Agent</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Excess baking powder or baking soda causes the cake to rise too quickly and too high, creating air pockets that can't support the structure.
                  </p>
                  <div className="bg-orange-50 rounded-xl p-4">
                    <p className="text-sm"><strong className="text-orange-700">Fix:</strong> Measure leavening agents precisely with measuring spoons, not by eye. Level off spoons for accuracy.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Opening the Oven Door Too Early</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A sudden temperature drop from opening the oven causes the cake to contract before it's fully set.
                  </p>
                  <div className="bg-yellow-50 rounded-xl p-4">
                    <p className="text-sm"><strong className="text-yellow-700">Fix:</strong> Don't open the oven door for at least the first 25-30 minutes of baking. Use the oven light to check progress.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Incorrect Oven Temperature</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    An oven that's too hot causes rapid rising and setting on the outside while the inside remains raw. Too cool means the structure never sets properly.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <p className="text-sm"><strong className="text-blue-700">Fix:</strong> Use an oven thermometer to verify your oven's actual temperature. Many ovens run 25°F hotter or cooler than the dial indicates.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">5</span>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Overmixing the Batter</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Overmixing develops too much gluten, creating a tough structure that can collapse. It also incorporates too much air that escapes during baking.
                  </p>
                  <div className="bg-purple-50 rounded-xl p-4">
                    <p className="text-sm"><strong className="text-purple-700">Fix:</strong> Mix just until ingredients are combined. A few small lumps are okay—better than overmixing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-pink-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">6</span>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Too Much Liquid or Fat</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Excess moisture or fat creates a batter that's too heavy to support itself, even when fully baked.
                  </p>
                  <div className="bg-pink-50 rounded-xl p-4">
                    <p className="text-sm"><strong className="text-pink-700">Fix:</strong> Follow recipe measurements exactly. Use measuring cups designed for liquids (with a spout) for wet ingredients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            The Cake Structure Triangle
          </h2>

          <p className="leading-relaxed text-foreground/80 mb-6">
            A successful cake depends on three elements working in perfect balance:
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Heat</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Proper temperature causes proteins to coagulate and starches to gelatinize, creating structure.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <Timer className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Time</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sufficient baking time allows the structure to fully set before removing from heat.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Balance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Correct ratios of flour, eggs, fat, sugar, and leavening create a stable structure.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Quick Prevention Checklist
          </h2>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 my-8 border-2 border-green-200">
            <h3 className="text-2xl mb-6">Before You Bake</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>Preheat your oven fully (15-20 minutes)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>Use an oven thermometer to verify temperature</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>Measure ingredients precisely with proper tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>Mix batter just until combined—don't overmix</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>Don't open the oven door for the first 30 minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>Test doneness with a toothpick before removing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>Let cake cool gradually—avoid sudden temperature changes</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-8 my-12 border-2 border-pink-300">
            <h3 className="text-2xl mb-4">Key Takeaways</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold text-xl">→</span>
                <span>Most sinking is caused by underbaking or removing the cake too early</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold text-xl">→</span>
                <span>Opening the oven door causes temperature drops that collapse structure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold text-xl">→</span>
                <span>Precise measurements and gentle mixing prevent structural problems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold text-xl">→</span>
                <span>An oven thermometer is one of the best investments for consistent baking</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-3xl p-10 text-white my-16 shadow-2xl">
            <h3 className="text-3xl mb-4">Perfect Your Cake Baking</h3>
            <p className="text-white/90 mb-6 text-lg">
              Understanding why cakes sink helps you troubleshoot and create consistently perfect cakes every time.
            </p>
            <a 
              href="https://cakesensei.senseifood.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Try CakeSensei →
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
