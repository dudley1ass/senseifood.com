import { ArrowLeft, Clock, User } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesChewy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cookie Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Why Cookies Are Chewy
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover the perfect balance of moisture, fat, and sugar that creates irresistibly chewy cookies.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>SenseiFood Team</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl mb-4 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">The Science of Chewy Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Chewy cookies are all about moisture retention and proper protein structure. The chewiness comes from high moisture content, brown sugar, and slightly underbaking. When you bite into a chewy cookie, you're experiencing the perfect balance of hydrated proteins and sugars that create that satisfying texture.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Unlike crispy cookies which have low moisture, chewy cookies maintain higher water content through specific ingredient ratios and baking techniques that preserve moisture while still setting the structure.
            </p>
          </section>

          <section className="mb-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
            <h2 className="text-3xl mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Key Factors for Chewy Cookies</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl mb-3 text-foreground">1. Brown Sugar Over White Sugar</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Brown sugar contains molasses which is hygroscopic (attracts and retains moisture). Using more brown sugar than white sugar, or all brown sugar, creates cookies that stay moist and chewy longer. The molasses also adds flavor depth and color.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl mb-3 text-foreground">2. Higher Moisture Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  More eggs (especially egg yolks), butter, and even adding a tablespoon of milk or cream increases the moisture that gets trapped in the cookie structure. This moisture is what gives you that chewy bite instead of a crispy snap.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl mb-3 text-foreground">3. Bread Flour or Higher Protein Flour</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bread flour has more protein than all-purpose flour, which develops more gluten when mixed. This gluten network provides structure and chewiness. The stronger protein matrix holds moisture better and creates that characteristic chewy texture.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl mb-3 text-foreground">4. Underbaking Slightly</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Removing cookies from the oven when they still look slightly underdone in the center ensures they retain maximum moisture. They'll continue to cook slightly as they cool on the baking sheet, resulting in a chewy center with set edges.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl mb-3 text-foreground">5. Melted Butter vs Softened Butter</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Melted butter creates denser, chewier cookies because it doesn't incorporate as much air during mixing. The lack of air pockets means a more compact, moist, chewy texture. Softened butter creates lighter, fluffier cookies.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl mb-3 text-foreground">6. Proper Storage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Storing cookies in an airtight container with a slice of bread helps maintain moisture. The cookies will absorb moisture from the bread, staying chewy for days. This is especially effective with cookies that have high brown sugar content.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">The Perfect Chewy Cookie Formula</h2>
            
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-6 mb-6">
              <h3 className="text-xl mb-4 text-foreground">Ideal Ratios:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 text-lg">•</span>
                  <span><strong>2:1 brown to white sugar ratio</strong> (or all brown sugar)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 text-lg">•</span>
                  <span><strong>1 whole egg + 1 egg yolk</strong> for extra richness and moisture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 text-lg">•</span>
                  <span><strong>Melted butter</strong> cooled to room temperature</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 text-lg">•</span>
                  <span><strong>Bread flour or 50/50 bread/AP flour mix</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 text-lg">•</span>
                  <span><strong>Bake at 350°F for 10-12 minutes</strong> (until edges are set but centers look slightly underdone)</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
            <h2 className="text-3xl mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Quick Tips</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-6">
                <p className="text-foreground mb-2"><strong>✓ Do:</strong></p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Use brown sugar liberally</li>
                  <li>• Melt your butter</li>
                  <li>• Add an extra egg yolk</li>
                  <li>• Underbake slightly</li>
                  <li>• Store airtight</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6">
                <p className="text-foreground mb-2"><strong>✗ Don't:</strong></p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Use all white sugar</li>
                  <li>• Overbake</li>
                  <li>• Overbeat the dough</li>
                  <li>• Use cold butter</li>
                  <li>• Store uncovered</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-10 text-white my-16 shadow-2xl">
            <h3 className="text-3xl mb-4">Design Your Perfect Chewy Cookies</h3>
            <p className="text-white/90 mb-6 text-lg">
              Use CookieSensei to experiment with different ratios and create your ultimate chewy cookie recipe with precise control over every ingredient.
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

          {/* Related Articles */}
          <section className="mt-16">
            <h3 className="text-2xl mb-6 text-foreground">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/articles/why-cookies-spread" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg mb-2 bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Why Cookies Spread</h4>
                <p className="text-sm text-muted-foreground">Control cookie spread and shape</p>
              </Link>
              <Link to="/articles/brown-sugar-vs-white-sugar" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg mb-2 bg-gradient-to-r from-orange-500 to-amber-700 bg-clip-text text-transparent">Brown vs White Sugar</h4>
                <p className="text-sm text-muted-foreground">Compare sugar types in cookies</p>
              </Link>
              <Link to="/articles/why-cookies-turn-hard" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">Why Cookies Turn Hard</h4>
                <p className="text-sm text-muted-foreground">Keep cookies soft and fresh</p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}
