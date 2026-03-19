import { ArrowLeft, Scale, Droplet, Snowflake } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function BrownSugarVsWhiteSugar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cookie Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Brown Sugar vs White Sugar in Cookies
          </h1>
          <p className="text-xl text-muted-foreground">
            Understand how different sugars affect cookie texture, spread, flavor, and moisture.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🍪</span>
        </div>

        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🍬</span>
            <div>
              <p className="font-bold text-orange-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Brown sugar makes cookies chewy (hygroscopic molasses retains moisture). White sugar makes cookies crispy (pure sucrose dries out). Mix both for the classic crispy-edge, chewy-center result.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            The type of sugar you use fundamentally changes your cookies. Brown and white sugar aren't interchangeable—they create completely different textures, flavors, and appearances.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            The Chemical Difference
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-gradient-to-br from-stone-400 to-stone-600 rounded-xl flex items-center justify-center mb-4 text-2xl">
                ⚪
              </div>
              <h3 className="text-xl mb-3">White Sugar</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Pure sucrose crystals. No molasses, neutral flavor, promotes crisp texture and spread.
              </p>
              <div className="bg-stone-50 rounded-lg p-3 text-xs">
                <strong>Composition:</strong> 99.9% sucrose
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-800 rounded-xl flex items-center justify-center mb-4 text-2xl">
                🟤
              </div>
              <h3 className="text-xl mb-3">Brown Sugar</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                White sugar + molasses. Contains moisture, minerals, acids. Creates chewier cookies.
              </p>
              <div className="bg-amber-50 rounded-lg p-3 text-xs">
                <strong>Composition:</strong> 92-96% sucrose + 3.5-6.5% molasses
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            How Each Sugar Affects Cookies
          </h2>

          <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Scale className="w-7 h-7 text-orange-600" />
              1. Cookie Spread
            </h3>
            <div className="bg-white rounded-xl p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">White Sugar → MORE Spread</h4>
                  <p className="text-sm text-muted-foreground">
                    White sugar has smaller crystals that melt more readily at lower temperatures. This allows cookies to spread thin before setting, creating crispy, flat cookies.
                  </p>
                </div>
                <div className="border-t border-orange-200 pt-4">
                  <h4 className="font-medium text-amber-700 mb-2">Brown Sugar → LESS Spread</h4>
                  <p className="text-sm text-muted-foreground">
                    Molasses is hygroscopic (attracts and holds water). This extra moisture keeps cookies puffy and limits spreading, creating thick, chewy cookies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 my-8 border-2 border-pink-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Droplet className="w-7 h-7 text-pink-600" />
              2. Texture & Moisture
            </h3>
            <div className="bg-white rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-pink-200">
                    <th className="text-left py-3 text-pink-800">Attribute</th>
                    <th className="text-left py-3 text-stone-700">White Sugar</th>
                    <th className="text-left py-3 text-amber-700">Brown Sugar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pink-100">
                  <tr>
                    <td className="py-3 font-medium">Texture</td>
                    <td className="py-3 text-muted-foreground">Crispy, crunchy</td>
                    <td className="py-3 text-muted-foreground">Soft, chewy</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Moisture</td>
                    <td className="py-3 text-muted-foreground">Drier</td>
                    <td className="py-3 text-muted-foreground">Moister</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Density</td>
                    <td className="py-3 text-muted-foreground">Lighter, airy</td>
                    <td className="py-3 text-muted-foreground">Denser, fudgier</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Shelf Life</td>
                    <td className="py-3 text-muted-foreground">Stays crispy longer</td>
                    <td className="py-3 text-muted-foreground">Stays soft longer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 my-8 border-2 border-purple-200">
            <h3 className="text-2xl mb-4">3. Flavor Profile</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-medium text-stone-700 mb-3">White Sugar</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pure sweetness, no competing flavors</li>
                  <li>• Lets other ingredients shine (vanilla, chocolate)</li>
                  <li>• Clean, simple taste</li>
                  <li>• Best for delicate flavors</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-medium text-amber-700 mb-3">Brown Sugar</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Complex, warm caramel notes</li>
                  <li>• Hints of toffee and butterscotch</li>
                  <li>• Slightly acidic depth</li>
                  <li>• Best for rich, spiced cookies</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 my-8 border-2 border-blue-200">
            <h3 className="text-2xl mb-4">4. Color & Browning</h3>
            <p className="text-muted-foreground mb-4">
              Brown sugar contains acids and amino acids from molasses that accelerate Maillard browning reactions.
            </p>
            <div className="bg-white rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-stone-100 rounded-lg">
                  <div className="text-3xl mb-2">⚪</div>
                  <p className="text-sm font-medium text-stone-700">White Sugar</p>
                  <p className="text-xs text-muted-foreground mt-1">Lighter, golden edges</p>
                </div>
                <div className="text-center p-4 bg-amber-100 rounded-lg">
                  <div className="text-3xl mb-2">🟤</div>
                  <p className="text-sm font-medium text-amber-700">Brown Sugar</p>
                  <p className="text-xs text-muted-foreground mt-1">Darker, deeper color</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Light vs Dark Brown Sugar
          </h2>

          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 my-8">
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-medium text-amber-600 mb-2">Light Brown Sugar (3.5% molasses)</h4>
                <p className="text-sm text-muted-foreground">
                  Subtle molasses flavor, slightly chewy texture. Best for cookies where you want a hint of caramel without overpowering other flavors.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-medium text-amber-800 mb-2">Dark Brown Sugar (6.5% molasses)</h4>
                <p className="text-sm text-muted-foreground">
                  Strong molasses flavor, very moist and chewy. Best for gingerbread, spice cookies, and when you want intense caramel flavor.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Sugar Ratio Strategies
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-8">
            <h3 className="text-xl mb-6 text-center">Cookie Texture by Sugar Ratio</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-stone-400 pl-6 py-3 bg-stone-50 rounded-r-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">100% White Sugar</h4>
                  <span className="text-xs bg-stone-200 px-3 py-1 rounded-full">Very Crispy</span>
                </div>
                <p className="text-sm text-muted-foreground">Thin, crispy, flat cookies with maximum spread. Think lace cookies or tuiles.</p>
              </div>

              <div className="border-l-4 border-amber-400 pl-6 py-3 bg-amber-50 rounded-r-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">75% White / 25% Brown</h4>
                  <span className="text-xs bg-amber-200 px-3 py-1 rounded-full">Crispy-Chewy</span>
                </div>
                <p className="text-sm text-muted-foreground">Crispy edges with slight chew in center. Balanced flavor.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6 py-3 bg-orange-50 rounded-r-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">50% White / 50% Brown</h4>
                  <span className="text-xs bg-orange-200 px-3 py-1 rounded-full">Classic</span>
                </div>
                <p className="text-sm text-muted-foreground">Traditional chocolate chip texture: crispy edges, chewy center. Most popular ratio.</p>
              </div>

              <div className="border-l-4 border-amber-600 pl-6 py-3 bg-amber-50 rounded-r-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">25% White / 75% Brown</h4>
                  <span className="text-xs bg-amber-200 px-3 py-1 rounded-full">Very Chewy</span>
                </div>
                <p className="text-sm text-muted-foreground">Thick, soft, very chewy with strong caramel notes.</p>
              </div>

              <div className="border-l-4 border-amber-800 pl-6 py-3 bg-amber-50 rounded-r-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">100% Brown Sugar</h4>
                  <span className="text-xs bg-amber-300 px-3 py-1 rounded-full">Ultra Chewy</span>
                </div>
                <p className="text-sm text-muted-foreground">Dense, fudgy, cake-like. Minimal spread, maximum moisture. Rich molasses flavor.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Acidity Matters</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Brown sugar is slightly acidic (pH ~5.5 vs white sugar's pH 7). This acidity affects leavening: if using brown sugar, cookies rise less with baking powder but spread more with baking soda (which reacts with acids).
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Quick Decision Guide
          </h2>

          <div className="bg-gradient-to-br from-stone-100 to-amber-100 rounded-2xl p-8 my-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-medium text-stone-700 mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚪</span>
                  Use White Sugar When...
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ You want crispy, crunchy cookies</li>
                  <li>✓ You prefer thin, flat cookies</li>
                  <li>✓ You want clean, simple sweetness</li>
                  <li>✓ You're highlighting delicate flavors (lemon, vanilla)</li>
                  <li>✓ You want cookies that stay crispy</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="font-medium text-amber-700 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🟤</span>
                  Use Brown Sugar When...
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ You want soft, chewy cookies</li>
                  <li>✓ You prefer thick, puffy cookies</li>
                  <li>✓ You want caramel/toffee notes</li>
                  <li>✓ You're making spiced cookies (ginger, cinnamon)</li>
                  <li>✓ You want cookies that stay soft</li>
                </ul>
              </div>
            </div>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Does brown sugar make cookies chewier?</h3>
                <p className="text-muted-foreground text-sm">Yes. Brown sugar contains molasses which is hygroscopic — it attracts and holds moisture, keeping cookies soft and chewy longer than white sugar.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can I substitute white sugar for brown sugar in cookies?</h3>
                <p className="text-muted-foreground text-sm">You can, but the texture will change. Cookies made with all white sugar spread more, bake thinner, and turn crispier. Expect less chew and a lighter color.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">What is the best sugar ratio for chewy cookies?</h3>
                <p className="text-muted-foreground text-sm">A 50/50 split of brown to white sugar is the classic balance — giving you chewy centers with slightly crispy edges. For maximum chewiness, use 75–100% brown sugar.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does brown sugar go hard in the bag?</h3>
                <p className="text-muted-foreground text-sm">Brown sugar hardens when moisture evaporates from the molasses. Store it in an airtight container with a piece of bread or a terra cotta sugar saver to keep it soft.</p>
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
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Experiment with Sugar Ratios</h2>
            <p className="text-lg text-white/90 mb-6">
              Ready to design your perfect cookie? Use CookieSensei to test different sugar ratios and see predicted texture, spread, and sweetness before you bake.
            </p>
            <a 
              href="https://cookiesensei.senseifood.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Open CookieSensei
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}