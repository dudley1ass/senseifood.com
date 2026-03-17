import { ArrowLeft, Wind, Thermometer, FlaskConical, Wheat } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyBreadRises() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Bread Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Why Bread Rises
          </h1>
          <p className="text-xl text-muted-foreground">
            Understand the biological and chemical processes that turn dense dough into light, airy bread.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        {/* Hero Image Placeholder */}
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🍞</span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Bread rising looks like magic, but it's actually a simple biological and chemical process. When dough rises, tiny organisms called yeast eat sugars and release gas that expands the dough.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            What Happens Inside Bread Dough
          </h2>

          <p className="leading-relaxed text-foreground/80">
            Bread dough contains four key ingredients that work together:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                <Wheat className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Flour</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Contains proteins (glutenin and gliadin) that form gluten when mixed with water, creating a stretchy network.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl mb-3">Water</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Activates the proteins in flour and hydrates yeast, enabling fermentation to begin.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Yeast</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Living microorganisms that consume sugars and produce carbon dioxide gas and flavor compounds.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🧂</span>
              </div>
              <h3 className="text-xl mb-3">Salt</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Controls yeast activity, strengthens gluten, and enhances flavor development.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            The Fermentation Process
          </h2>

          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-yellow-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Wind className="w-7 h-7 text-yellow-600" />
              What Yeast Produces
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              During fermentation, yeast consumes sugars in the flour and produces three key outputs:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold text-lg">•</span>
                <span><strong>Carbon dioxide gas</strong> — Forms tiny bubbles that expand the dough</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold text-lg">•</span>
                <span><strong>Alcohol</strong> — Evaporates during baking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold text-lg">•</span>
                <span><strong>Flavor compounds</strong> — Create the characteristic taste of bread</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            How Gluten Traps the Gas
          </h2>

          <p className="leading-relaxed text-foreground/80 mb-6">
            The gluten network acts like thousands of tiny balloons. As yeast produces carbon dioxide, these balloons trap the gas and expand. The more gas produced, the more the dough rises in volume.
          </p>

          <div className="bg-white rounded-2xl p-8 my-8 shadow-lg border-2 border-amber-200">
            <h3 className="text-xl mb-4">The Gluten Structure</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When flour proteins (glutenin and gliadin) mix with water, they bond together forming long, elastic strands of gluten. This stretchy network is essential for:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Trapping carbon dioxide bubbles</li>
              <li>✓ Giving bread its chewy texture</li>
              <li>✓ Maintaining structure as the dough rises</li>
            </ul>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Oven Spring: The Final Rise
          </h2>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why did my bread not rise?</h3>
                <p className="text-muted-foreground text-sm">Most commonly: yeast was killed by water that was too hot (above 140°F), yeast was old and no longer active, or the dough didn't have enough time to proof. Always test yeast by proofing it in warm water first.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can bread rise too much?</h3>
                <p className="text-muted-foreground text-sm">Yes — this is called over-proofing. Over-proofed dough collapses during baking because the gluten network has weakened and can't hold the gas. The crust can blister and the crumb becomes dense.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does salt affect bread rising?</h3>
                <p className="text-muted-foreground text-sm">Yes. Salt slows yeast activity, which is actually desirable — slower fermentation develops more flavor. However, adding salt directly to yeast can kill it. Always mix salt into flour before combining with yeast.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does bread rise more in a warm place?</h3>
                <p className="text-muted-foreground text-sm">Yeast is more metabolically active at warmer temperatures (75–80°F is ideal for most breads). Warmer environments accelerate CO₂ production, speeding the rise. Too hot and yeast dies; too cold and it barely activates.</p>
              </div>
            </div>
          </div>
          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/bread-science/how-yeast-works" className="block text-amber-700 hover:underline text-sm font-medium">→ How Yeast Works in Baking</Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Thermometer className="w-7 h-7 text-orange-600" />
              What Happens in the Oven
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When bread enters the oven, several rapid changes occur:
            </p>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li><strong>Yeast becomes very active</strong> at warm temperatures and produces more gas</li>
              <li><strong>Gas expands rapidly</strong> from the heat (Charles's Law in action)</li>
              <li><strong>Water turns to steam</strong>, adding even more pressure</li>
              <li><strong>Dough rises dramatically</strong> in the first 10-15 minutes</li>
            </ol>
            <div className="bg-white rounded-xl p-4 text-sm mt-4">
              <strong className="text-orange-600">Fun Fact:</strong> This rapid expansion is called "oven spring" and can increase bread volume by 30-50%!
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Why Bread Stops Rising
          </h2>

          <p className="leading-relaxed text-foreground/80 mb-6">
            Eventually the bread stops rising because the structure solidifies. Three key changes happen:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500">
              <h4 className="font-bold mb-2 text-lg">Yeast Dies</h4>
              <p className="text-muted-foreground text-sm">
                At about 140°F (60°C), yeast cells die and stop producing gas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-500">
              <h4 className="font-bold mb-2 text-lg">Gluten Sets</h4>
              <p className="text-muted-foreground text-sm">
                Heat causes gluten proteins to coagulate into a firm, permanent structure.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-amber-500">
              <h4 className="font-bold mb-2 text-lg">Crust Forms</h4>
              <p className="text-muted-foreground text-sm">
                The dough transforms into solid bread with trapped air pockets creating the soft, airy crumb.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8 my-12 border-2 border-amber-300">
            <h3 className="text-2xl mb-4">Key Takeaways</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold text-xl">→</span>
                <span>Yeast fermentation produces CO₂ gas that makes dough rise</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold text-xl">→</span>
                <span>Gluten forms a network that traps gas bubbles like balloons</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold text-xl">→</span>
                <span>Oven spring causes dramatic final expansion from heat</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold text-xl">→</span>
                <span>Heat eventually kills yeast and sets the structure permanently</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-amber-600 to-yellow-600 rounded-3xl p-10 text-white my-16 shadow-2xl">
            <h3 className="text-3xl mb-4">Ready to Master Bread Baking?</h3>
            <p className="text-white/90 mb-6 text-lg">
              Understanding the science is just the beginning. Try different techniques and see how fermentation time, temperature, and ingredients affect your results.
            </p>
            <a 
              href="https://beansensei.senseifood.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-amber-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Explore More Science →
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
