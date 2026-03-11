import { ArrowLeft, Snowflake, Layers, Droplet, ChefHat } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyPieCrustFlaky() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Pie Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Why Pie Crust Is Flaky
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover the science behind creating layers of buttery, flaky pie crust that shatters perfectly.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>7 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        {/* Hero Image Placeholder */}
        <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-amber-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🥧</span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Flaky pie crust is the gold standard for pies and pastries. The secret lies in creating distinct layers of fat and dough that separate during baking, producing those delicate, crispy sheets that shatter with each bite.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            The Science of Flakiness
          </h2>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 my-8 border-2 border-blue-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Layers className="w-7 h-7 text-blue-600" />
              How Layers Form
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Flaky pie crust is all about creating <strong>steam pockets</strong> between layers of fat-coated flour. When cold butter hits the hot oven:
            </p>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>Butter melts and releases water trapped inside it</li>
              <li>Water turns to steam, expanding rapidly</li>
              <li>Steam pushes dough layers apart, creating space</li>
              <li>Dough sets in these separated layers, creating flakes</li>
            </ol>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            The Three Keys to Flakiness
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Snowflake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">1. Cold Butter (or Fat)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Cold fat doesn't mix into the flour—it stays in distinct pieces. These pieces create pockets that turn into flaky layers when baked.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-4 mb-4">
                    <p className="text-sm"><strong className="text-blue-700">Temperature Matters:</strong> Butter should be 60°F or colder. Some bakers freeze butter for 15 minutes before using.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                    <p className="text-sm font-semibold mb-2">What happens if butter is too warm?</p>
                    <p className="text-xs text-muted-foreground">Warm butter blends into flour instead of creating distinct layers, resulting in mealy, crumbly crust instead of flaky.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">2. Proper Mixing Technique</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Keep butter in visible pieces—don't fully incorporate it. Aim for pea-sized chunks of butter throughout the flour mixture.
                  </p>
                  <div className="bg-purple-50 rounded-xl p-4 mb-4">
                    <p className="text-sm"><strong className="text-purple-700">The Rule:</strong> Mix just until the dough comes together. Visible butter streaks = future flaky layers!</p>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-green-50 rounded-lg p-3 text-sm">
                      ✓ <strong>Good:</strong> Butter pieces visible, ranging from pea-size to dime-size
                    </div>
                    <div className="bg-red-50 rounded-lg p-3 text-sm">
                      ✗ <strong>Bad:</strong> Uniform, smooth dough with no visible butter
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Droplet className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">3. Minimal Water, Maximum Care</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Water hydrates the flour to form dough, but too much water develops gluten, making crust tough. Ice water keeps butter cold while binding dough.
                  </p>
                  <div className="bg-green-50 rounded-xl p-4 mb-4">
                    <p className="text-sm"><strong className="text-green-700">Pro Tip:</strong> Add water gradually, 1 tablespoon at a time. Stop when dough just holds together when squeezed.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                    <p className="text-sm font-semibold mb-2">The vodka trick</p>
                    <p className="text-xs text-muted-foreground">Some recipes replace half the water with vodka. Vodka doesn't develop gluten but still binds dough, creating ultra-flaky crust!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Flaky vs. Mealy: Two Different Textures
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200">
              <div className="text-4xl mb-4">🍃</div>
              <h3 className="text-xl mb-3 text-orange-700">Flaky Crust</h3>
              <p className="text-muted-foreground text-sm mb-4">
                <strong>Large butter pieces</strong> create distinct layers that shatter when eaten.
              </p>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Pea-sized butter chunks</li>
                <li>• Visible layers and sheets</li>
                <li>• Crispy, shattering texture</li>
                <li>• Best for top crusts</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200">
              <div className="text-4xl mb-4">🧈</div>
              <h3 className="text-xl mb-3 text-amber-700">Mealy Crust</h3>
              <p className="text-muted-foreground text-sm mb-4">
                <strong>Small butter pieces</strong> create a more uniform, tender texture.
              </p>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Sand-sized butter particles</li>
                <li>• Even, crumbly texture</li>
                <li>• More resistant to sogginess</li>
                <li>• Best for bottom crusts</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Common Flakiness Mistakes
          </h2>

          <div className="space-y-4 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500">
              <h4 className="font-bold mb-2 text-lg">Overworking the Dough</h4>
              <p className="text-muted-foreground text-sm">
                Excessive mixing develops gluten, making crust tough. Handle dough gently and minimally.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
              <h4 className="font-bold mb-2 text-lg">Using Warm Ingredients</h4>
              <p className="text-muted-foreground text-sm">
                Warm butter, warm water, or warm hands melt the butter before baking, eliminating layers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-500">
              <h4 className="font-bold mb-2 text-lg">Skipping the Chill</h4>
              <p className="text-muted-foreground text-sm">
                Refrigerating dough for 30+ minutes re-solidifies butter and relaxes gluten for easier rolling.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
              <h4 className="font-bold mb-2 text-lg">Rolling Too Thin</h4>
              <p className="text-muted-foreground text-sm">
                Ultra-thin crust doesn't have enough structure to hold layers. Aim for 1/8 to 1/4 inch thickness.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            The Perfect Flaky Crust Checklist
          </h2>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">✓</span>
                <span>Use cold butter (60°F or colder) cut into small cubes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">✓</span>
                <span>Add ice water gradually—just enough to hold dough together</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">✓</span>
                <span>Keep visible butter pieces (pea-sized to dime-sized)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">✓</span>
                <span>Handle dough minimally—overworking = tough crust</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">✓</span>
                <span>Refrigerate dough for at least 30 minutes before rolling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">✓</span>
                <span>Roll to 1/8-inch thickness for optimal layer structure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">✓</span>
                <span>Bake at high temperature (375-425°F) for maximum steam</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 my-12 border-2 border-orange-300">
            <h3 className="text-2xl mb-4">Key Takeaways</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">→</span>
                <span>Flakiness comes from distinct layers of fat and dough separating in the oven</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">→</span>
                <span>Cold butter is the #1 factor—it creates steam pockets that separate layers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">→</span>
                <span>Gentle handling and minimal mixing preserve butter pieces and prevent toughness</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">→</span>
                <span>Chilling the dough is essential for maintaining cold butter temperature</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-3xl p-10 text-white my-16 shadow-2xl">
            <h3 className="text-3xl mb-4">Perfect Your Pie Baking</h3>
            <p className="text-white/90 mb-6 text-lg">
              Master the science of flaky pie crust and create bakery-quality pies at home. Our pie calculator helps you nail the ratios every time.
            </p>
            <a 
              href="https://piesensei.senseifood.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Try PieSensei →
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
