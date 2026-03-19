import { ArrowLeft, Snowflake, Droplet, Zap, Thermometer } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyIceCreamGetsIcy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Ice Cream Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Why Ice Cream Gets Icy
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn about ice crystal formation, fat content, and stabilizers to create perfectly smooth frozen desserts.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Intermediate</span>
          </div>
        </header>

        {/* Hero Image Placeholder */}
        <div className="w-full h-80 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🍦</span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-cyan-50 border-l-4 border-cyan-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🧊</span>
            <div>
              <p className="font-bold text-cyan-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Icy ice cream has ice crystals larger than 40–50 micrometers — detectable on the tongue. Temperature fluctuations cause recrystallization. Press plastic wrap directly onto the surface before closing the lid.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Nothing ruins great ice cream faster than icy texture. Understanding why ice crystals form and how to control them is the key to creating smooth, creamy frozen desserts that rival premium brands.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            The Science of Ice Crystals
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Ice cream isn't just frozen—it's a complex frozen foam structure containing ice crystals, air bubbles, fat globules, and a concentrated sugar solution. When ice crystals grow too large, you feel them on your tongue as "icy" texture.
          </p>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 my-8 border-2 border-cyan-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Snowflake className="w-7 h-7 text-cyan-600" />
              Crystal Size Matters
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The human tongue can detect ice crystals larger than about 50 micrometers. Premium ice cream has crystals around 25-30 micrometers. Icy ice cream can have crystals over 100 micrometers.
            </p>
            <div className="bg-white rounded-xl p-4 text-sm">
              <strong className="text-cyan-600">The Goal:</strong> Keep ice crystals small through rapid freezing, proper formulation, and temperature control.
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Major Causes of Icy Texture
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-cyan-200">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Temperature Fluctuation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                When ice cream melts and refreezes, small crystals melt and refreeze onto larger crystals—a process called "heat shock." This is the #1 cause of iciness.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Too Much Water</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Water freezes into ice crystals. More water = more crystals. Formulas need proper balance of fat, solids, and sugar to limit free water.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Slow Freezing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Slow freezing allows large crystals to form. Fast churning and quick hardening create many small crystals instead of fewer large ones.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                <Snowflake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Low Fat Content</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fat provides creamy mouthfeel and disrupts ice crystal networks. Low-fat ice creams are more prone to iciness.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            How to Prevent Icy Texture
          </h2>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 my-8 border-2 border-blue-200">
            <h3 className="text-2xl mb-4">1. Optimize Fat Content</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fat (from cream, milk, egg yolks) makes ice cream smooth and rich. It physically separates ice crystals and creates a creamy mouthfeel.
            </p>
            <div className="bg-white rounded-xl p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Premium ice cream:</span>
                <span className="font-medium text-blue-600">14-18% fat</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Standard ice cream:</span>
                <span className="font-medium text-blue-600">10-14% fat</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Low-fat ice cream:</span>
                <span className="font-medium text-blue-600">3-7% fat</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 my-8 border-2 border-purple-200">
            <h3 className="text-2xl mb-4">2. Use Sugar Strategically</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sugar lowers the freezing point of water, meaning less water freezes into ice at typical freezer temperatures. Different sugars have different effects.
            </p>
            <div className="bg-white rounded-xl p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-purple-200">
                    <th className="text-left py-2 text-purple-700">Sugar Type</th>
                    <th className="text-left py-2 text-purple-700">Sweetness</th>
                    <th className="text-left py-2 text-purple-700">Freezing Effect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-100">
                  <tr>
                    <td className="py-2">Sucrose (table sugar)</td>
                    <td className="py-2">100%</td>
                    <td className="py-2">Standard</td>
                  </tr>
                  <tr>
                    <td className="py-2">Glucose/Corn Syrup</td>
                    <td className="py-2">70%</td>
                    <td className="py-2">Strong</td>
                  </tr>
                  <tr>
                    <td className="py-2">Honey</td>
                    <td className="py-2">130%</td>
                    <td className="py-2">Very Strong</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-muted-foreground mt-3">
                Combining sugars helps control sweetness while maximizing anti-freeze effect.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-pink-200">
            <h3 className="text-2xl mb-4">3. Add Stabilizers</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Stabilizers are ingredients that control ice crystal growth by binding water and thickening the unfrozen portion of the mix.
            </p>
            <div className="space-y-3 mt-4">
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-medium text-pink-700 mb-2">Egg Yolks (Traditional)</h4>
                <p className="text-sm text-muted-foreground">
                  Lecithin in egg yolks acts as emulsifier and stabilizer. Classic French-style ice cream uses 6-8 yolks per quart.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-medium text-pink-700 mb-2">Guar Gum / Xanthan Gum</h4>
                <p className="text-sm text-muted-foreground">
                  Modern stabilizers used in tiny amounts (0.1-0.3%). Very effective at preventing iciness without affecting flavor.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-medium text-pink-700 mb-2">Milk Powder</h4>
                <p className="text-sm text-muted-foreground">
                  Non-fat milk solids improve texture and reduce iciness by adding milk proteins and lactose.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 my-8 border-2 border-cyan-200">
            <h3 className="text-2xl mb-4">4. Freeze Quickly & Store Properly</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The freezing process and storage conditions dramatically affect texture.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-medium text-cyan-700 mb-2">✓ Do This</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Chill base to 40°F before churning</li>
                  <li>• Churn until thick (soft-serve consistency)</li>
                  <li>• Freeze immediately in coldest part of freezer</li>
                  <li>• Store at 0°F or below</li>
                  <li>• Use airtight containers</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h4 className="font-medium text-red-700 mb-2">✗ Avoid This</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Churning warm base</li>
                  <li>• Opening freezer repeatedly</li>
                  <li>• Storing in freezer door</li>
                  <li>• Letting it soften, then refreeze</li>
                  <li>• Using containers with air gaps</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            The Perfect Formula
          </h2>

          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 my-8">
            <h3 className="text-xl mb-4 text-blue-900">Balanced Ice Cream Base</h3>
            <div className="bg-white rounded-xl p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="border-r border-blue-200 last:border-0">
                  <div className="text-3xl text-cyan-600 mb-1">14-16%</div>
                  <div className="text-xs text-muted-foreground">Fat</div>
                </div>
                <div className="border-r border-blue-200 last:border-0">
                  <div className="text-3xl text-blue-600 mb-1">14-16%</div>
                  <div className="text-xs text-muted-foreground">Sugar</div>
                </div>
                <div className="border-r border-blue-200 last:border-0">
                  <div className="text-3xl text-purple-600 mb-1">9-12%</div>
                  <div className="text-xs text-muted-foreground">Milk Solids</div>
                </div>
                <div>
                  <div className="text-3xl text-pink-600 mb-1">60%</div>
                  <div className="text-xs text-muted-foreground">Water</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                This balance creates smooth, scoopable ice cream with minimal iciness.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">💡 Pro Tip: The Alcohol Trick</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Adding 1-2 tablespoons of alcohol (vodka, rum, liqueur) per quart prevents ice cream from freezing rock-hard. Alcohol doesn't freeze, so it keeps the texture scoopable even at very low temperatures. Don't add too much or it won't freeze at all!
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Perfect Your Ice Cream Formula</h2>
            <p className="text-lg text-white/90 mb-6">
              Ready to create ultra-smooth ice cream? Use IceCreamSensei to balance fat, sugar, and stabilizers for the perfect scoop every time.
            </p>
            <a 
              href="https://icecreamsensei.senseifood.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-cyan-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Open IceCreamSensei
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </div>
      
          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why does homemade ice cream get icy?</h3>
                <p className="text-muted-foreground text-sm">Homemade ice cream typically lacks stabilizers and has fewer fat emulsifiers than commercial versions. Without these, ice crystals grow larger over time. Churning faster, using more fat, and adding a small amount of stabilizer all help.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">What causes ice crystals in store-bought ice cream?</h3>
                <p className="text-muted-foreground text-sm">Temperature fluctuations during storage cause partial thaw-refreeze cycles. Each cycle allows small ice crystals to melt and refreeze onto larger ones (recrystallization), progressively making the texture icier.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does sugar prevent ice cream from getting icy?</h3>
                <p className="text-muted-foreground text-sm">Yes — sugar lowers the freezing point of the mix, keeping more water in an unfrozen liquid state at serving temperature. This syrup lubricates the texture and slows ice crystal growth.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">How do I fix icy ice cream?</h3>
                <p className="text-muted-foreground text-sm">Once ice crystals have formed, you can't reverse them. Prevention is the only fix: store at consistent 0°F or below, minimize temperature swings, press plastic wrap directly onto the surface before closing the lid.</p>
              </div>
            </div>
          </div>
          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/ice-cream-science/why-ice-cream-gets-icy" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Ice Cream Gets Icy</Link>
              <Link to="/ice-cream-science/why-ice-cream-is-creamy" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Ice Cream Is Creamy</Link>
              <Link to="/ice-cream-science/why-ice-cream-melts-fast" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Ice Cream Melts Fast</Link>
              <Link to="/ice-cream-science/why-ice-cream-gets-freezer-burn" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Ice Cream Gets Freezer Burn</Link>
            </div>
          </div>

      </article>

      <Footer />
    </div>
  );
}