import { ArrowLeft, Thermometer, TrendingUp, Layers, Target } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCakesDome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
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
                <h3 className="text-xl mb-2">Why do cakes dome more on top than the sides?</h3>
                <p className="text-muted-foreground text-sm">The edges of the pan absorb heat and set first, while the center is still liquid. As the center batter continues to rise after the edges have set, it can only go upward — creating the dome.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can I prevent cake doming?</h3>
                <p className="text-muted-foreground text-sm">Yes. Lower your oven temperature by 25°F and bake longer. Use baking strips (wet fabric strips wrapped around the pan) to slow edge cooking. Or level the dome with a serrated knife after cooling.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Is cake doming a sign of over-leavening?</h3>
                <p className="text-muted-foreground text-sm">Not always — doming happens even in well-balanced recipes. However, excess baking powder amplifies doming because extra CO₂ pushes the center up more aggressively before it sets.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does baking two pans at once affect doming?</h3>
                <p className="text-muted-foreground text-sm">Yes — two pans can block airflow and heat, causing uneven baking that makes doming worse. Rotate pans halfway through baking and ensure there's at least 2 inches of space between pans.</p>
              </div>
            </div>
          </div>
          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/cake-science/why-cakes-sink" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Sink in the Middle</Link>
              <Link to="/cake-science/why-cakes-rise" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Rise</Link>
              <Link to="/cake-science/why-cakes-are-dense" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Are Dense</Link>
              <Link to="/cake-science/why-cakes-collapse" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Collapse</Link>
              <Link to="/cake-science/why-cakes-dry-out" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Dry Out</Link>
              <Link to="/cake-science/why-cakes-crack-on-top" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Crack on Top</Link>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cake Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Why Cakes Dome in the Middle
          </h1>
          <p className="text-xl text-muted-foreground">
            Understand why cakes rise higher in the center and learn techniques to achieve perfectly flat tops.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>5 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        {/* Hero Image Placeholder */}
        <div className="w-full h-80 bg-gradient-to-br from-pink-200 to-purple-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🎂</span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Many cakes rise higher in the center than the edges, creating a domed top. This happens because heat reaches the outside of the cake first, causing the edges to set while the center continues to rise.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Heat Distribution in Cake Batter
          </h2>

          <p className="leading-relaxed text-foreground/80 mb-6">
            When you place a cake pan in the oven, heat doesn't reach all parts of the batter at the same time. The metal pan conducts heat from the bottom and sides, while the top receives radiant heat from the oven element.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Step 1: Edges Heat First</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The batter touching the hot pan heats up quickly and begins to set, forming a rigid structure.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Step 2: Center Stays Liquid</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The center of the batter remains soft and fluid longer because it's insulated by the surrounding batter.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Step 3: Center Rises</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                While edges stop rising, the soft center continues expanding upward, creating the dome.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 my-8 border-2 border-purple-200">
            <h3 className="text-2xl mb-4">Why This Happens</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The fundamental cause is <strong>uneven heat distribution</strong>. Metal cake pans are excellent conductors, meaning they transfer heat quickly to the batter that touches them.
            </p>
            <div className="bg-white rounded-xl p-4 text-sm">
              <strong className="text-purple-600">Physics in Action:</strong> The edges of your cake batter can be 50-70°F hotter than the center during the first 15 minutes of baking!
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            How Leavening Agents Work
          </h2>

          <p className="leading-relaxed text-foreground/80 mb-6">
            Cakes rise because of leavening agents that release gas bubbles throughout the batter. These gases expand when heated, pushing the batter upward.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-500">
              <h4 className="font-bold mb-2 text-lg">Baking Powder</h4>
              <p className="text-muted-foreground text-sm">
                Releases CO₂ gas when it gets wet and again when heated, creating a double-acting rise.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
              <h4 className="font-bold mb-2 text-lg">Baking Soda</h4>
              <p className="text-muted-foreground text-sm">
                Requires an acid (like buttermilk or lemon juice) to activate and release CO₂ gas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
              <h4 className="font-bold mb-2 text-lg">Whipped Air</h4>
              <p className="text-muted-foreground text-sm">
                Air incorporated during mixing expands when heated, contributing to rise.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            How to Prevent Cake Domes
          </h2>

          <p className="leading-relaxed text-foreground/80 mb-6">
            Professional bakers use several techniques to ensure cakes bake flat and level:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Lower Baking Temperature</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Reduce oven temperature by 25°F (about 15°C) to slow down edge setting.
              </p>
              <div className="bg-blue-50 rounded-lg p-3 text-xs text-blue-900">
                Instead of 350°F, try 325°F for more even baking.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎀</span>
              </div>
              <h3 className="text-xl mb-3">Cake Strips</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Wrap wet fabric strips around the outside of the pan to insulate edges.
              </p>
              <div className="bg-purple-50 rounded-lg p-3 text-xs text-purple-900">
                This keeps edges from heating too quickly and setting early.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Leveling After Baking</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Use a long serrated knife to slice off the dome once cooled.
              </p>
              <div className="bg-pink-50 rounded-lg p-3 text-xs text-pink-900">
                The easiest method but wastes some cake (or creates snack time!).
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🕐</span>
              </div>
              <h3 className="text-xl mb-3">Longer Baking Time</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Bake at a lower temperature for longer to ensure even heat penetration.
              </p>
              <div className="bg-amber-50 rounded-lg p-3 text-xs text-amber-900">
                Slow and steady wins the race for flat cakes!
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-rose-200">
            <h3 className="text-2xl mb-4">Professional Baker's Secret</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most professional bakeries use <strong>baking strips</strong> (also called cake strips) around their pans. These are strips of fabric soaked in water that wrap around the outside of the pan.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-rose-600 font-bold text-lg">•</span>
                <span>The wet fabric insulates the pan edges</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-600 font-bold text-lg">•</span>
                <span>Edges bake at the same rate as the center</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-600 font-bold text-lg">•</span>
                <span>Result: perfectly flat, level cakes every time</span>
              </li>
            </ul>
            <div className="bg-white rounded-xl p-4 text-sm mt-4">
              <strong className="text-rose-600">Pro Tip:</strong> You can buy commercial cake strips or make your own from aluminum foil and wet paper towels!
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            When Domes Are Actually Good
          </h2>

          <p className="leading-relaxed text-foreground/80 mb-6">
            Not all cakes need to be flat! Some cake styles actually benefit from a natural dome:
          </p>

          <div className="space-y-3 mb-8">
            <div className="bg-white rounded-xl p-5 shadow-md">
              <h4 className="font-bold mb-2">Single-Layer Bundt Cakes</h4>
              <p className="text-muted-foreground text-sm">
                The dome adds to the rustic, homemade appearance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-md">
              <h4 className="font-bold mb-2">Cupcakes</h4>
              <p className="text-muted-foreground text-sm">
                A nice dome on top makes cupcakes look full and appealing.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-md">
              <h4 className="font-bold mb-2">Casual Layer Cakes</h4>
              <p className="text-muted-foreground text-sm">
                For informal occasions, a slight dome adds character.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 my-12 border-2 border-pink-300">
            <h3 className="text-2xl mb-4">Key Takeaways</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold text-xl">→</span>
                <span>Cakes dome because edges heat and set faster than the center</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold text-xl">→</span>
                <span>The center stays liquid longer and continues rising upward</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold text-xl">→</span>
                <span>Cake strips insulate pan edges for more even baking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold text-xl">→</span>
                <span>Lower temperature and longer baking time also help prevent doming</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-3xl p-10 text-white my-16 shadow-2xl">
            <h3 className="text-3xl mb-4">Perfect Your Cake Baking</h3>
            <p className="text-white/90 mb-6 text-lg">
              Now that you understand why cakes dome, you can control your results with precision. Try different techniques and see what works best for your recipes!
            </p>
            <a 
              href="https://cakesensei.senseifood.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Explore CakeSensei →
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
