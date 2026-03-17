import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesChewy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
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
            Why Cookies Are Chewy
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover the ingredients and techniques that create that perfect soft, chewy cookie texture every time.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>7 min read</span>
            <span>•</span>
            <span>Intermediate</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🍪</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Chewy cookies have a satisfying pull and soft interior that keeps you coming back for more. Achieving that texture is all about controlling moisture, gluten development, and fat — through deliberate ingredient choices.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            The Science of Chewiness
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Chewiness comes from two sources: <strong>moisture retention</strong> and <strong>gluten structure</strong>. Cookies that hold onto water stay soft and pliable. Moderate gluten development creates a slight elasticity — that satisfying resistance when you pull the cookie apart.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <div className="text-4xl mb-4">🍪</div>
              <h3 className="text-xl mb-3">Makes Cookies Chewy</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ More brown sugar (hygroscopic)</li>
                <li>✓ Extra egg yolks (fat + emulsifiers)</li>
                <li>✓ Melted butter (denser structure)</li>
                <li>✓ Bread flour (more protein/gluten)</li>
                <li>✓ Cornstarch (traps moisture)</li>
                <li>✓ Under-baking slightly</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <div className="text-4xl mb-4">🥠</div>
              <h3 className="text-xl mb-3">Makes Cookies Crispy</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✗ More white sugar (dries out)</li>
                <li>✗ Extra egg whites (drying effect)</li>
                <li>✗ Creamed/softened butter (airy)</li>
                <li>✗ Cake flour (less gluten)</li>
                <li>✗ Thinner dough shape</li>
                <li>✗ Full bake or slightly over</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            The Key Ingredients
          </h2>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">🍬 Brown Sugar — Your #1 Tool</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Brown sugar contains molasses, which is <strong>hygroscopic</strong> — it actively attracts and holds moisture from the environment. This keeps cookies soft and chewy even days after baking. The more brown sugar in the ratio, the chewier the cookie.
              </p>
              <div className="bg-amber-50 rounded-lg p-3 text-xs">
                <strong>Pro tip:</strong> Dark brown sugar has more molasses (6.5%) than light brown sugar (3.5%), giving a chewier, more intense result.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4">🧈 Melted Butter Over Creamed</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Creaming butter incorporates air, making cookies lighter and cakier. Melted butter skips the aeration, so cookies spread less and turn out denser and chewier. The melted fat also coats flour proteins differently, limiting gluten uniformity and adding elasticity.
              </p>
              <div className="bg-orange-50 rounded-lg p-3 text-xs">
                <strong>Pro tip:</strong> Brown your butter first for extra nutty, caramel depth that amplifies chewiness.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-yellow-200">
            <h3 className="text-2xl mb-4">🥚 Extra Egg Yolks</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Egg yolks are rich in fat and lecithin (an emulsifier) that add moisture and richness. Egg whites are mostly water and protein — they dry out cookies as they bake. Replacing one whole egg with two yolks dramatically increases chewiness.
              </p>
              <div className="bg-yellow-50 rounded-lg p-3 text-xs">
                <strong>Pro tip:</strong> Try 1 whole egg + 1 extra yolk in your standard recipe and taste the difference.
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Technique Tips
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-8">
            <div className="space-y-6">
              <div className="border-l-4 border-amber-500 pl-6 py-2">
                <h4 className="font-medium mb-2">🧊 Chill the Dough (24–72 hours)</h4>
                <p className="text-sm text-muted-foreground">Resting dough in the fridge lets moisture redistribute evenly, reduces spreading, and concentrates flavor. The result: thicker, chewier cookies with more complex taste.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6 py-2">
                <h4 className="font-medium mb-2">🌡️ Pull Cookies Out Early</h4>
                <p className="text-sm text-muted-foreground">Remove cookies when the center looks underdone — about 2 minutes before the recipe says. They continue cooking on the hot pan and set up to perfectly chewy as they cool to room temperature.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-6 py-2">
                <h4 className="font-medium mb-2">📏 Make Them Thicker</h4>
                <p className="text-sm text-muted-foreground">Roll dough into tall, fat balls rather than flat discs. Thicker cookies have more interior mass that stays moist, giving you that chewy core surrounded by slightly crispy edges.</p>
              </div>
              <div className="border-l-4 border-amber-700 pl-6 py-2">
                <h4 className="font-medium mb-2">🌾 Add Cornstarch to the Flour</h4>
                <p className="text-sm text-muted-foreground">1–2 teaspoons of cornstarch per cup of flour inhibits gluten overdevelopment while trapping moisture, producing a soft, tender, chewy interior without affecting flavor.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Maillard Reaction & Chewiness</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The brown crust on a cookie forms via the Maillard reaction (proteins + sugars reacting to heat). Under-baking means less Maillard on the interior — which is exactly why under-baked cookies are chewier. The interior stays moist and gel-like rather than setting into a stiff crumb.
            </p>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">What makes cookies chewy instead of crispy?</h3>
                <p className="text-muted-foreground text-sm">Brown sugar (hygroscopic moisture retention), melted butter (denser structure), extra egg yolks (fat and emulsifiers), and under-baking by 1–2 minutes. All four together produce maximum chewiness.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">How long do chewy cookies stay chewy?</h3>
                <p className="text-muted-foreground text-sm">With all-brown-sugar recipes stored in an airtight container, 5–7 days. Add a slice of bread to the container — it donates moisture and extends softness significantly.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why are my cookies chewy when warm but hard when cold?</h3>
                <p className="text-muted-foreground text-sm">Normal — this is caramelized sugar behavior. Sugar is semi-liquid when warm and rigid when cold. The key is having enough brown sugar (hygroscopic) and moisture to stay soft even when cold.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does chilling dough make cookies chewier?</h3>
                <p className="text-muted-foreground text-sm">Yes. Chilling for 24–72 hours allows moisture to redistribute through the dough, reduces spreading (keeping cookies thicker), and concentrates flavor. Thicker cookies have more moist interior mass and stay chewier.</p>
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

          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Engineer Your Perfect Cookie</h2>
            <p className="text-lg text-white/90 mb-6">
              Want to dial in exactly the chewiness you're after? Use CookieSensei to adjust ratios and predict texture before you bake.
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
