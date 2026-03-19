import { ArrowLeft, Droplets, Thermometer, Clock, Beaker } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function CoffeeExtractionScience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-600 to-amber-800 text-white px-4 py-2 rounded-full text-sm mb-6">
            Coffee Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-stone-700 to-amber-800 bg-clip-text text-transparent">
            Coffee Extraction Science
          </h1>
          <p className="text-xl text-muted-foreground">
            Master extraction ratios, water temperature, and grind size for consistently perfect coffee brewing.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>7 min read</span>
            <span>•</span>
            <span>Intermediate</span>
          </div>
        </header>

        {/* Hero Image Placeholder */}
        <div className="w-full h-80 bg-gradient-to-br from-stone-300 to-amber-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">☕</span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🔬</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Coffee extraction pulls 18–22% of the bean's dry weight into your cup. Below 18% = sour and weak. Above 22% = bitter and harsh. Grind size, temperature, and time all control this precisely.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Great coffee isn't magic—it's science. Understanding extraction unlocks the ability to brew consistently delicious coffee, whether you're using a French press, pour-over, or espresso machine.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-700 to-amber-800 bg-clip-text text-transparent">
            What Is Coffee Extraction?
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Extraction is the process of dissolving soluble compounds from ground coffee into water. Coffee contains over 1,000 different compounds, but only about 30% of the coffee bean is soluble. Your goal is to extract the right amount of the right compounds.
          </p>

          <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-stone-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Beaker className="w-7 h-7 text-stone-600" />
              The Extraction Sweet Spot
            </h3>
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-center flex-1">
                  <div className="text-3xl text-red-600 mb-2">{"<18%"}</div>
                  <div className="text-sm text-muted-foreground">Under-extracted</div>
                  <div className="text-xs text-red-600 mt-1">Sour, weak, acidic</div>
                </div>
                <div className="text-center flex-1 bg-green-50 rounded-xl py-4 border-2 border-green-500">
                  <div className="text-3xl text-green-600 mb-2">18-22%</div>
                  <div className="text-sm font-medium text-green-700">Ideal</div>
                  <div className="text-xs text-green-600 mt-1">Balanced, sweet, complex</div>
                </div>
                <div className="text-center flex-1">
                  <div className="text-3xl text-orange-600 mb-2">{">22%"}</div>
                  <div className="text-sm text-muted-foreground">Over-extracted</div>
                  <div className="text-xs text-orange-600 mt-1">Bitter, harsh, dry</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Professional baristas target 18-22% extraction for optimal flavor balance.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-700 to-amber-800 bg-clip-text text-transparent">
            The Extraction Timeline
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Different flavor compounds extract at different rates. Understanding this sequence helps you diagnose brewing problems.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">First: Acids & Salts</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bright, fruity acids extract quickly (0-30 seconds). These give coffee its brightness and acidity.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Second: Sugars</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sweet compounds (30-90 seconds). These provide body, sweetness, and balance to the acidity.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-stone-200">
              <div className="w-12 h-12 bg-gradient-to-br from-stone-600 to-stone-800 rounded-xl flex items-center justify-center mb-4">
                <Beaker className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Last: Bitter Compounds</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Heavy, bitter tannins (90+ seconds). A little adds complexity; too much creates harsh bitterness.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 my-8 border-l-4 border-amber-500">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-amber-700">This is why brew time matters:</strong> Stop too early and you only get acids (sour). Brew too long and you get bitter compounds (harsh). The sweet spot extracts sugars to balance acids and add just enough bitterness for complexity.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-700 to-amber-800 bg-clip-text text-transparent">
            Four Variables That Control Extraction
          </h2>

          <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-stone-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Droplets className="w-7 h-7 text-stone-600" />
              1. Brew Ratio (Coffee to Water)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The ratio of coffee grounds to water determines strength (concentration), not extraction. But it affects taste significantly.
            </p>
            <div className="bg-white rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="text-left py-2 text-stone-700">Ratio</th>
                    <th className="text-left py-2 text-stone-700">Grams Coffee</th>
                    <th className="text-left py-2 text-stone-700">Water</th>
                    <th className="text-left py-2 text-stone-700">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr>
                    <td className="py-2">1:18</td>
                    <td className="py-2">20g</td>
                    <td className="py-2">360ml</td>
                    <td className="py-2 text-muted-foreground">Weak/light</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-2 font-medium">1:15-1:17</td>
                    <td className="py-2 font-medium">20g</td>
                    <td className="py-2 font-medium">300-340ml</td>
                    <td className="py-2 text-green-700">⭐ Balanced (Recommended)</td>
                  </tr>
                  <tr>
                    <td className="py-2">1:12</td>
                    <td className="py-2">20g</td>
                    <td className="py-2">240ml</td>
                    <td className="py-2 text-muted-foreground">Strong/bold</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-muted-foreground mt-4">
                Most specialty coffee professionals recommend starting with 1:16 (e.g., 15g coffee to 240ml water).
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Thermometer className="w-7 h-7 text-amber-600" />
              2. Water Temperature
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hotter water extracts faster and more completely. Cooler water extracts slower and more selectively.
            </p>
            <div className="bg-white rounded-xl p-6 space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 border border-blue-200">
                <div>
                  <div className="font-medium text-blue-800">195-205°F (90-96°C)</div>
                  <div className="text-xs text-blue-600">Ideal Range</div>
                </div>
                <div className="text-2xl">✓</div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 border border-red-200">
                <div>
                  <div className="font-medium text-red-800">Below 195°F (90°C)</div>
                  <div className="text-xs text-red-600">Under-extraction (sour, weak)</div>
                </div>
                <div className="text-2xl">✗</div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-orange-50 border border-orange-200">
                <div>
                  <div className="font-medium text-orange-800">Above 205°F (96°C)</div>
                  <div className="text-xs text-orange-600">Over-extraction (bitter, harsh)</div>
                </div>
                <div className="text-2xl">✗</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              💡 Light roasts need hotter water (200-205°F) to extract fully. Dark roasts extract easily, so use slightly cooler water (195-200°F) to avoid bitterness.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Beaker className="w-7 h-7 text-orange-600" />
              3. Grind Size
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Grind size controls surface area and therefore extraction speed. This is the most important variable to adjust when dialing in coffee.
            </p>
            <div className="bg-white rounded-xl p-6">
              <div className="space-y-4">
                <div className="border-l-4 border-stone-400 pl-4">
                  <div className="font-medium text-stone-700 mb-1">Coarse (French Press)</div>
                  <div className="text-sm text-muted-foreground">Like sea salt. Slower extraction, needs longer brew time (4-5 min).</div>
                </div>
                <div className="border-l-4 border-amber-500 pl-4">
                  <div className="font-medium text-amber-700 mb-1">Medium (Drip Coffee)</div>
                  <div className="text-sm text-muted-foreground">Like sand. Balanced extraction for most methods (3-4 min).</div>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <div className="font-medium text-orange-700 mb-1">Fine (Espresso)</div>
                  <div className="text-sm text-muted-foreground">Like table salt. Very fast extraction with pressure (25-30 sec).</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <strong className="text-amber-800 text-sm">The Golden Rule:</strong>
                <p className="text-xs text-muted-foreground mt-2">
                  If coffee tastes sour/weak → grind finer (increase extraction)<br/>
                  If coffee tastes bitter/harsh → grind coarser (decrease extraction)
                </p>
              </div>
            </div>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">What is the ideal coffee extraction percentage?</h3>
                <p className="text-muted-foreground text-sm">The Specialty Coffee Association recommends 18–22% extraction yield. Below 18% is under-extracted (sour, weak), above 22% is over-extracted (bitter, harsh).</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">How does grind size affect extraction?</h3>
                <p className="text-muted-foreground text-sm">Finer grinds extract faster because they have more surface area in contact with water. Coarser grinds extract more slowly. Matching grind to brew time is the core of dialing in any coffee.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">What is TDS in coffee?</h3>
                <p className="text-muted-foreground text-sm">TDS stands for Total Dissolved Solids — the concentration of extracted compounds in your brew. The ideal range is 1.15–1.35%. Below this tastes watery; above this tastes too strong.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does water temperature matter for extraction?</h3>
                <p className="text-muted-foreground text-sm">Water temperature controls how efficiently compounds dissolve. Below 195°F, heavier flavor molecules (sugars, oils) don't fully dissolve. Above 205°F, harsh compounds over-extract.</p>
              </div>
            </div>
          </div>
          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/coffee-science/why-coffee-tastes-bitter" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Tastes Bitter</Link>
              <Link to="/coffee-science/why-coffee-tastes-sour" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Tastes Sour</Link>
              <Link to="/coffee-science/why-coffee-grind-size-matters" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Grind Size Matters</Link>
              <Link to="/coffee-science/why-coffee-brewing-time-matters" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Brewing Time Matters</Link>
              <Link to="/coffee-science/why-coffee-stales" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Stales</Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 my-8 border-2 border-pink-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Clock className="w-7 h-7 text-pink-600" />
              4. Brew Time (Contact Time)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              How long water is in contact with coffee grounds determines how much is extracted. Different methods need different times.
            </p>
            <div className="bg-white rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-pink-200 rounded-lg p-4">
                  <h4 className="font-medium text-pink-700 mb-3">Quick Methods</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Espresso:</span>
                      <span className="font-medium">25-30 sec</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Aeropress:</span>
                      <span className="font-medium">1-2 min</span>
                    </li>
                  </ul>
                </div>
                <div className="border border-purple-200 rounded-lg p-4">
                  <h4 className="font-medium text-purple-700 mb-3">Slow Methods</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Pour Over:</span>
                      <span className="font-medium">2.5-4 min</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">French Press:</span>
                      <span className="font-medium">4-5 min</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Cold Brew:</span>
                      <span className="font-medium">12-24 hrs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-700 to-amber-800 bg-clip-text text-transparent">
            Troubleshooting Guide
          </h2>

          <div className="bg-gradient-to-br from-stone-100 to-amber-100 rounded-2xl p-8 my-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                <h4 className="text-lg text-red-700 mb-2">☹️ Coffee tastes sour, weak, or watery</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p><strong>Problem:</strong> Under-extraction</p>
                  <p><strong>Solutions:</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Grind finer</li>
                    <li>Use hotter water (200-205°F)</li>
                    <li>Increase brew time</li>
                    <li>Use more coffee (stronger ratio)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500">
                <h4 className="text-lg text-orange-700 mb-2">😖 Coffee tastes bitter, dry, or astringent</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p><strong>Problem:</strong> Over-extraction</p>
                  <p><strong>Solutions:</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Grind coarser</li>
                    <li>Use cooler water (195-200°F)</li>
                    <li>Decrease brew time</li>
                    <li>Use less coffee (weaker ratio)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                <h4 className="text-lg text-green-700 mb-2">😊 Coffee tastes balanced, sweet, and complex</h4>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Perfect!</strong> You've found the sweet spot. Write down your recipe: grind size, ratio, temperature, and time.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 my-8 border-l-4 border-amber-500">
            <h4 className="text-lg mb-2 text-amber-800">🔬 Advanced: Measuring TDS</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional baristas use a refractometer to measure Total Dissolved Solids (TDS). Combined with brew ratio, this calculates exact extraction percentage. A TDS of 1.15-1.35% typically indicates 18-22% extraction. This removes guesswork and allows precise repeatability.
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-700 to-stone-800 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Coffee Extraction</h2>
            <p className="text-lg text-white/90 mb-6">
              Ready to brew consistently excellent coffee? Use BeanSensei to dial in your ratios, track extraction variables, and achieve the perfect cup every time.
            </p>
            <a 
              href="https://beansensei.senseifood.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Open BeanSensei
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}