import { ArrowLeft, AlertCircle, ThermometerSun, Clock, Beaker } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeTastesBitter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-600 to-amber-800 text-white px-4 py-2 rounded-full text-sm mb-6">
            Coffee Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-stone-700 to-amber-800 bg-clip-text text-transparent">
            Why Coffee Tastes Bitter
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn what causes bitter coffee and how to fix it through better brewing technique.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>5 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-stone-300 to-amber-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">☕</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Bitter coffee is frustrating—especially when you've spent good money on quality beans. The good news? Bitterness is almost always fixable once you understand what's causing it.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-700 to-amber-800 bg-clip-text text-transparent">
            What Is Bitterness?
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Bitterness comes from specific chemical compounds in coffee—primarily caffeine, chlorogenic acids, and trigonelline. These compounds extract later in the brewing process, especially when conditions aren't optimal.
          </p>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <AlertCircle className="w-7 h-7 text-orange-600" />
              Good Bitter vs Bad Bitter
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                <h4 className="text-green-700 font-medium mb-3">✓ Good Bitterness</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Balanced, pleasant, adds complexity and depth. Complements sweetness and acidity. Tastes like dark chocolate or cocoa.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                <h4 className="text-red-700 font-medium mb-3">✗ Bad Bitterness</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Harsh, astringent, dry. Overpowers other flavors. Leaves unpleasant aftertaste. Tastes like burnt rubber or ash.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-700 to-amber-800 bg-clip-text text-transparent">
            The 5 Main Causes of Bitter Coffee
          </h2>

          <div className="space-y-6 my-10">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Beaker className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">1. Over-Extraction</h3>
                  <p className="text-muted-foreground mb-4">
                    This is the #1 cause. When you extract more than 22% of the coffee's soluble compounds, you're pulling out bitter tannins and heavy compounds.
                  </p>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm mb-2"><strong className="text-red-700">Signs of over-extraction:</strong></p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Harsh, dry, astringent taste</li>
                      <li>• Bitter aftertaste that lingers</li>
                      <li>• No sweetness or acidity</li>
                      <li>• Empty, hollow flavor</li>
                    </ul>
                  </div>
                  <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-200">
                    <p className="text-sm mb-2"><strong className="text-green-700">How to fix it:</strong></p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>→ Grind coarser</li>
                      <li>→ Brew for less time</li>
                      <li>→ Use cooler water (195-200°F)</li>
                      <li>→ Use less coffee or more water</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-stone-50 to-gray-100 rounded-2xl p-8 border-2 border-stone-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-stone-600 to-stone-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ThermometerSun className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">2. Dark Roast Beans</h3>
                  <p className="text-muted-foreground mb-4">
                    Dark roasting literally burns some of the bean's organic compounds, creating charred, bitter flavors. This isn't a defect—it's intentional for some styles—but it can overwhelm sweetness.
                  </p>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm text-muted-foreground">
                      Dark roasts already have strong bitter notes. If you over-extract dark roast, bitterness becomes overwhelming.
                    </p>
                  </div>
                  <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-200">
                    <p className="text-sm mb-2"><strong className="text-green-700">How to fix it:</strong></p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>→ Try medium or light roasts for less bitterness</li>
                      <li>→ Brew dark roasts with slightly cooler water (195-198°F)</li>
                      <li>→ Reduce brew time by 30 seconds</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ThermometerSun className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">3. Water Too Hot</h3>
                  <p className="text-muted-foreground mb-4">
                    Water above 205°F (96°C) extracts bitter compounds too quickly and can "scald" coffee, creating burnt flavors.
                  </p>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm mb-3"><strong className="text-orange-700">Temperature Guide:</strong></p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg">
                        <span className="text-muted-foreground">Optimal range:</span>
                        <span className="font-medium text-green-700">195-205°F (90-96°C)</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-red-50 rounded-lg">
                        <span className="text-muted-foreground">Too hot:</span>
                        <span className="font-medium text-red-700">Above 205°F (96°C)</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-200">
                    <p className="text-sm mb-2"><strong className="text-green-700">How to fix it:</strong></p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>→ Let boiling water rest 30 seconds before brewing</li>
                      <li>→ Use a thermometer to verify water temp</li>
                      <li>→ Adjust your kettle to 200°F if possible</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">4. Stale or Old Coffee</h3>
                  <p className="text-muted-foreground mb-4">
                    Coffee oxidizes over time. Stale coffee loses its aromatic oils and sugars, leaving mostly bitter compounds behind.
                  </p>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm mb-3"><strong className="text-blue-700">Coffee Freshness Timeline:</strong></p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="border-l-4 border-green-500 pl-3 py-2">
                        <strong>Week 1-2:</strong> Peak flavor, full aromatics
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-3 py-2">
                        <strong>Week 3-4:</strong> Good but declining
                      </div>
                      <div className="border-l-4 border-orange-500 pl-3 py-2">
                        <strong>Month 2+:</strong> Noticeably stale, mostly bitter
                      </div>
                      <div className="border-l-4 border-red-500 pl-3 py-2">
                        <strong>6+ months:</strong> Very bitter, no aromatics left
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-200">
                    <p className="text-sm mb-2"><strong className="text-green-700">How to fix it:</strong></p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>→ Buy fresh-roasted coffee (look for roast date)</li>
                      <li>→ Store in airtight container away from light/heat</li>
                      <li>→ Buy smaller amounts more frequently</li>
                      <li>→ Grind just before brewing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Beaker className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">5. Dirty Equipment</h3>
                  <p className="text-muted-foreground mb-4">
                    Coffee oils go rancid quickly. Old oils in your grinder, brewer, or carafe add stale, bitter flavors to fresh coffee.
                  </p>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm text-muted-foreground">
                      Even a few days of buildup can significantly impact taste. This is especially true for automatic drip machines and espresso machines.
                    </p>
                  </div>
                  <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-200">
                    <p className="text-sm mb-2"><strong className="text-green-700">How to fix it:</strong></p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>→ Wash all equipment after each use</li>
                      <li>→ Deep clean coffee maker weekly with vinegar or cleaner</li>
                      <li>→ Clean grinder burrs monthly</li>
                      <li>→ Never let old coffee sit in carafe</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-700 to-amber-800 bg-clip-text text-transparent">
            The Ultimate Fix: Proper Extraction
          </h2>

          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 my-8">
            <p className="text-lg text-muted-foreground mb-6">
              Most bitter coffee comes from over-extraction. Here's the definitive guide to avoiding it:
            </p>
            <div className="bg-white rounded-xl p-6">
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">1.</span>
                  <div>
                    <strong className="text-amber-800">Start with fresh, quality beans</strong>
                    <p className="text-muted-foreground">Roasted within the last 2-4 weeks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">2.</span>
                  <div>
                    <strong className="text-amber-800">Use correct grind size</strong>
                    <p className="text-muted-foreground">Match your brew method (coarse for French press, fine for espresso)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">3.</span>
                  <div>
                    <strong className="text-amber-800">Measure your coffee ratio</strong>
                    <p className="text-muted-foreground">Start with 1:16 (15g coffee to 240ml water)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">4.</span>
                  <div>
                    <strong className="text-amber-800">Control water temperature</strong>
                    <p className="text-muted-foreground">195-205°F (90-96°C) is ideal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">5.</span>
                  <div>
                    <strong className="text-amber-800">Time your brew</strong>
                    <p className="text-muted-foreground">Follow method guidelines (e.g., 2.5-4 min for pour over)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">6.</span>
                  <div>
                    <strong className="text-amber-800">Adjust based on taste</strong>
                    <p className="text-muted-foreground">If bitter → grind coarser or brew shorter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">💡 Pro Tip: Add a Pinch of Salt</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A tiny pinch of salt (just a few grains) in your grounds before brewing can reduce perceived bitterness. Salt blocks bitter receptors on your tongue without affecting the actual extraction. This is a trick used by coffee competitions worldwide.
            </p>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">What causes bitter coffee?</h3>
                <p className="text-muted-foreground text-sm">Bitterness is caused by over-extraction — too much contact time, water too hot, or grind too fine. The last compounds to extract (melanoidins and chlorogenic acids) are intensely bitter.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">How do I make my coffee less bitter?</h3>
                <p className="text-muted-foreground text-sm">Grind coarser, lower water temperature slightly (195°F instead of 205°F), shorten brew time, or reduce your coffee dose. Each change decreases extraction and pulls fewer bitter compounds.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Is bitterness normal in coffee?</h3>
                <p className="text-muted-foreground text-sm">A small amount of bitterness is normal and even pleasant — it adds complexity. The problem is when bitterness dominates and overwhelms all other flavors, which signals over-extraction.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does dark roast taste more bitter?</h3>
                <p className="text-muted-foreground text-sm">Dark roasts do tend toward bitterness because extended roasting degrades fruity and sweet compounds while creating more bitter ones. However, proper extraction of a dark roast should be balanced, not overwhelming.</p>
              </div>
            </div>
          </div>
          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/coffee-science/coffee-extraction-science" className="block text-amber-700 hover:underline text-sm font-medium">→ Coffee Extraction Science</Link>
              <Link to="/coffee-science/why-coffee-tastes-sour" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Tastes Sour</Link>
              <Link to="/coffee-science/why-coffee-grind-size-matters" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Grind Size Matters</Link>
              <Link to="/coffee-science/why-coffee-brewing-time-matters" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Brewing Time Matters</Link>
              <Link to="/coffee-science/why-coffee-stales" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Stales</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-stone-700 to-amber-800 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Your Coffee Brewing</h2>
            <p className="text-lg text-white/90 mb-6">
              Take the guesswork out of brewing. Use BeanSensei to calculate perfect ratios, track variables, and eliminate bitterness for good.
            </p>
            <a 
              href="https://beansensei.senseifood.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-stone-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
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