import { ArrowLeft, Clock, Droplet, Thermometer, Cookie } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesHard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cookie Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Why Cookies Turn Hard
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover the science behind hard cookies and learn how to keep them soft and chewy for days.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        {/* Hero Image Placeholder */}
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🍪💎</span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🪨</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Hard cookies have lost moisture — either over-baked or stored in air. Use all brown sugar, pull cookies 1–2 minutes early, and store immediately in an airtight container with a slice of bread.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Hard cookies are one of the most common baking disappointments. Whether they come out of the oven hard or turn hard after a day or two, understanding moisture loss is key to solving this problem.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            The Two Types of Hard Cookies
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Overbaked (Immediate)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cookies that are hard straight from the oven were baked too long or at too high a temperature, evaporating too much moisture.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Stale (Over Time)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cookies that harden after baking have lost moisture to the air through a process called moisture migration and evaporation.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Why Cookies Lose Moisture
          </h2>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 my-8 border-2 border-blue-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Droplet className="w-7 h-7 text-blue-600" />
              Moisture Migration Science
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cookies contain water molecules that want to reach equilibrium with the surrounding air. In dry environments, water molecules move from the cookie (high moisture) to the air (low moisture), leaving the cookie hard and dry.
            </p>
            <div className="bg-white rounded-xl p-4 text-sm">
              <strong className="text-blue-600">Scientific Principle:</strong> This process is called "moisture equilibrium" and happens naturally over time unless prevented.
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Top Causes of Hard Cookies
          </h2>

          <div className="space-y-4 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
              <h4 className="font-bold mb-2 text-lg">1. Overbaking</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Baking cookies too long drives out moisture. Cookies continue baking on the hot pan after removal from the oven.
              </p>
              <div className="bg-orange-50 rounded-lg p-3 text-xs">
                <strong className="text-orange-700">Solution:</strong> Remove cookies when edges are set but centers look slightly underdone. They'll finish baking on the pan.
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-500">
              <h4 className="font-bold mb-2 text-lg">2. Too Much Flour</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Excess flour absorbs moisture and creates a dry, crumbly texture that hardens quickly.
              </p>
              <div className="bg-yellow-50 rounded-lg p-3 text-xs">
                <strong className="text-yellow-700">Solution:</strong> Measure flour by spooning into the cup and leveling off, never scooping directly from the bag.
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500">
              <h4 className="font-bold mb-2 text-lg">3. Not Enough Fat</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Butter and other fats create tenderness. Low-fat cookies turn hard and dry.
              </p>
              <div className="bg-red-50 rounded-lg p-3 text-xs">
                <strong className="text-red-700">Solution:</strong> Don't reduce butter in recipes unless you want a crispy cookie.
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-amber-500">
              <h4 className="font-bold mb-2 text-lg">4. Using Only White Sugar</h4>
              <p className="text-muted-foreground text-sm mb-3">
                White sugar creates crispy cookies. Brown sugar contains molasses that holds moisture.
              </p>
              <div className="bg-amber-50 rounded-lg p-3 text-xs">
                <strong className="text-amber-700">Solution:</strong> Use at least some brown sugar (50/50 ratio or more) for chewy, soft cookies.
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
              <h4 className="font-bold mb-2 text-lg">5. Improper Storage</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Leaving cookies uncovered or in poorly sealed containers allows moisture to escape into the air.
              </p>
              <div className="bg-blue-50 rounded-lg p-3 text-xs">
                <strong className="text-blue-700">Solution:</strong> Store in airtight containers within 2 hours of cooling completely.
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
              <h4 className="font-bold mb-2 text-lg">6. Low Humidity Environment</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Dry climates or winter heating accelerate moisture loss from baked goods.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs">
                <strong className="text-green-700">Solution:</strong> Add a slice of bread to the cookie container to maintain humidity.
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            How to Keep Cookies Soft
          </h2>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why are my cookies hard right after baking?</h3>
                <p className="text-muted-foreground text-sm">Over-baking drives out all moisture, leaving a rigid sugar-starch structure. Try removing cookies 1–2 minutes earlier — they continue cooking on the hot pan after the oven.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">How do I soften hard cookies?</h3>
                <p className="text-muted-foreground text-sm">Place in a sealed container with a slice of fresh bread overnight. The moisture from the bread migrates into the cookies and softens them. Alternatively, 8–10 seconds in the microwave softens them temporarily.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why do brown sugar cookies stay softer than white sugar cookies?</h3>
                <p className="text-muted-foreground text-sm">Brown sugar contains molasses, which is hygroscopic — it actively attracts and holds moisture from the air. This prevents the staling that makes cookies hard.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can the type of flour make cookies harder?</h3>
                <p className="text-muted-foreground text-sm">Higher-protein bread flour develops more gluten, which sets into a firmer, harder structure. For softer cookies, use all-purpose flour or add 1–2 tsp of cornstarch per cup of flour to inhibit gluten development.</p>
              </div>
            </div>
          </div>
          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/cookie-science/why-cookies-spread" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Spread</Link>
              <Link to="/cookie-science/why-cookies-are-chewy" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Are Chewy</Link>
              <Link to="/cookie-science/why-cookies-get-crispy" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Get Crispy</Link>
              <Link to="/cookie-science/why-cookies-flatten" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Flatten</Link>
              <Link to="/cookie-science/why-cookies-spread-too-much" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Spread Too Much</Link>
              <Link to="/cookie-science/brown-sugar-vs-white-sugar" className="block text-amber-700 hover:underline text-sm font-medium">→ Brown Sugar vs White Sugar</Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 my-8 border-2 border-green-200">
            <h3 className="text-2xl mb-6">Storage Methods That Work</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold mb-3 text-lg flex items-center gap-2">
                  <Cookie className="w-5 h-5 text-green-600" />
                  The Bread Slice Trick
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Place a slice of fresh white bread in the container with your cookies. The bread releases moisture that the cookies absorb, staying soft while the bread hardens. Replace the bread slice every 2-3 days.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold mb-3 text-lg flex items-center gap-2">
                  <Cookie className="w-5 h-5 text-green-600" />
                  Airtight Containers
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Use containers with tight-sealing lids. Glass or plastic containers with rubber gaskets work best. Avoid containers that "breathe" or have loose-fitting lids.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold mb-3 text-lg flex items-center gap-2">
                  <Cookie className="w-5 h-5 text-green-600" />
                  Layer with Parchment
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Place parchment paper between cookie layers to prevent sticking while maintaining moisture inside the sealed container.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold mb-3 text-lg flex items-center gap-2">
                  <Cookie className="w-5 h-5 text-green-600" />
                  Freeze for Long-Term
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Cookies freeze beautifully for up to 3 months. Freeze in airtight containers or freezer bags, then thaw at room temperature. They'll taste freshly baked!
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            How to Soften Hard Cookies
          </h2>

          <p className="leading-relaxed text-foreground/80 mb-6">
            Already have hard cookies? Try these rescue methods:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold mb-3">Microwave Method (Quick)</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Place a damp paper towel over cookies and microwave for 10-15 seconds. The steam softens them temporarily.
              </p>
              <span className="text-xs text-amber-600">⏱️ Best for eating immediately</span>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold mb-3">Bread Method (Overnight)</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Store hard cookies in a container with fresh bread overnight. Cookies will absorb moisture from the bread.
              </p>
              <span className="text-xs text-green-600">✓ Lasts longer than microwave</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 my-12 border-2 border-amber-300">
            <h3 className="text-2xl mb-4">Key Takeaways</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">→</span>
                <span>Hard cookies result from moisture loss—either during baking or storage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">→</span>
                <span>Underbake slightly and use brown sugar for softer cookies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">→</span>
                <span>Store in airtight containers within 2 hours of baking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">→</span>
                <span>The bread slice trick works amazingly well to keep cookies soft</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-10 text-white my-16 shadow-2xl">
            <h3 className="text-3xl mb-4">Perfect Your Cookie Texture</h3>
            <p className="text-white/90 mb-6 text-lg">
              Want to engineer cookies with the exact texture you want? Try our interactive cookie calculator.
            </p>
            <a 
              href="https://cookiesensei.senseifood.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-amber-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Try CookieSensei →
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
