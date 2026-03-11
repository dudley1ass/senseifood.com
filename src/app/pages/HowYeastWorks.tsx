import { ArrowLeft, Thermometer, Clock, Sparkles, FlaskRound } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function HowYeastWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Navigation />
      
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Fermentation Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            How Yeast Works in Baking
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn about the living microorganisms that transform simple dough into flavorful, risen bread.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>5 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        {/* Hero Image Placeholder */}
        <div className="w-full h-80 bg-gradient-to-br from-green-200 to-emerald-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🧫</span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Yeast is a living microorganism that powers many breads and baked goods. It belongs to a group of fungi called <em>Saccharomyces cerevisiae</em>, and understanding how it works is key to mastering bread baking.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            What Is Yeast?
          </h2>

          <p className="leading-relaxed text-foreground/80 mb-6">
            Yeast is a single-celled fungus—a living organism that's invisible to the naked eye. When you add yeast to dough, you're introducing billions of these tiny organisms that will eat, reproduce, and transform your ingredients.
          </p>

          <div className="bg-white rounded-2xl p-8 my-8 shadow-lg border-2 border-green-200">
            <h3 className="text-xl mb-4 flex items-center gap-3">
              <FlaskRound className="w-6 h-6 text-green-600" />
              The Scientific Name
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-green-700">Saccharomyces cerevisiae</strong> translates to "sugar-eating fungus." The name perfectly describes what yeast does—it consumes sugars and produces useful byproducts for baking.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            How Yeast Feeds on Sugar
          </h2>

          <p className="leading-relaxed text-foreground/80 mb-6">
            Yeast consumes sugars found in flour and any added sweeteners. Through a process called fermentation, yeast breaks down these sugars and produces three important outputs:
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💨</span>
              </div>
              <h3 className="text-xl mb-3">Carbon Dioxide Gas</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                CO₂ gas forms bubbles in the dough, causing it to rise and creating the airy texture of bread.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🍷</span>
              </div>
              <h3 className="text-xl mb-3">Alcohol</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ethanol is produced during fermentation but evaporates during baking, leaving no alcoholic content.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Flavor Molecules</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Complex organic compounds create the characteristic rich, slightly tangy flavor of fermented bread.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Fermentation Builds Flavor
          </h2>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Clock className="w-7 h-7 text-amber-600" />
              Time = Flavor
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Longer fermentation produces more complex, developed flavors. This is why artisan breads that ferment slowly taste so much better than quick breads.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold text-lg">•</span>
                <span><strong>Sourdough</strong> — Ferments for 12-24 hours, creating deep tangy flavors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold text-lg">•</span>
                <span><strong>Artisan loaves</strong> — Ferment for 4-8 hours for complex taste</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold text-lg">•</span>
                <span><strong>Pizza dough</strong> — Cold fermentation for 24-72 hours develops exceptional flavor</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Temperature Matters
          </h2>

          <p className="leading-relaxed text-foreground/80 mb-6">
            Yeast is highly sensitive to temperature. The right temperature range keeps yeast active and healthy, while extreme temperatures can slow it down or kill it completely.
          </p>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-red-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Thermometer className="w-7 h-7 text-red-600" />
              Yeast Temperature Zones
            </h3>
            <div className="space-y-4 mt-6">
              <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-blue-500">
                <h4 className="font-bold mb-2">Below 50°F (10°C)</h4>
                <p className="text-muted-foreground text-sm">
                  Yeast becomes dormant and nearly inactive. Good for long, slow fermentation in the fridge.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-green-500">
                <h4 className="font-bold mb-2">75-95°F (24-35°C) — Ideal Range</h4>
                <p className="text-muted-foreground text-sm">
                  Yeast works most efficiently, producing CO₂ gas and flavor at the optimal rate.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-yellow-500">
                <h4 className="font-bold mb-2">95-110°F (35-43°C)</h4>
                <p className="text-muted-foreground text-sm">
                  Yeast still works but becomes stressed. Activity increases but flavor development suffers.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-red-500">
                <h4 className="font-bold mb-2">Above 140°F (60°C)</h4>
                <p className="text-muted-foreground text-sm">
                  Yeast dies completely. This happens in the oven, stopping all fermentation.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Types of Yeast
          </h2>

          <p className="leading-relaxed text-foreground/80 mb-6">
            Different types of yeast work at different speeds and have unique characteristics:
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl mb-3">Active Dry Yeast</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Needs to be dissolved in warm water before use. Slower to activate but shelf-stable.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl mb-3">Instant Yeast</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Can be mixed directly with flour. Works fastest and is the most popular for home baking.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-teal-200">
              <div className="text-4xl mb-4">🧊</div>
              <h3 className="text-xl mb-3">Fresh Yeast</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Also called cake yeast. Requires refrigeration and has a shorter shelf life but produces excellent flavor.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 my-12 border-2 border-green-300">
            <h3 className="text-2xl mb-4">Key Takeaways</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">→</span>
                <span>Yeast is a living fungus that consumes sugars and produces CO₂, alcohol, and flavor</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">→</span>
                <span>Longer fermentation creates more complex, developed flavors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">→</span>
                <span>Yeast works best between 75-95°F and dies above 140°F</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">→</span>
                <span>Instant yeast is the easiest and most commonly used for home baking</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-10 text-white my-16 shadow-2xl">
            <h3 className="text-3xl mb-4">Master Fermentation Science</h3>
            <p className="text-white/90 mb-6 text-lg">
              Understanding yeast is the foundation of great bread baking. Experiment with different temperatures and fermentation times to see how it affects your results.
            </p>
            <a 
              href="https://beansensei.senseifood.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Explore More Tools →
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
