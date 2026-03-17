import { ArrowLeft, TrendingDown, ThermometerSnowflake, Clock, Scale } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCakesCollapse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cake Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Why Cakes Collapse
          </h1>
          <p className="text-xl text-muted-foreground">
            Understand the science behind cake structure and how to prevent sinking, falling, or collapsing.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>7 min read</span>
            <span>•</span>
            <span>Intermediate</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-pink-200 to-rose-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🎂</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            A collapsed cake is heartbreaking—especially after investing time in baking. But cake collapse isn't random. It's always caused by structural failure during or after baking, and it's almost always preventable.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            How Cake Structure Works
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Cake is essentially a delicate foam held up by a protein-starch network. Eggs provide protein structure, flour provides starch structure, and leavening creates gas bubbles. When this network is too weak or disrupted, the cake collapses.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
              <h3 className="text-xl mb-3 text-pink-700">Protein (Eggs)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Egg proteins coagulate when heated, forming a solid structure that traps air bubbles.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3 text-rose-700">Starch (Flour)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Flour starches gelatinize and create a rigid framework that supports the cake's weight.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
              <h3 className="text-xl mb-3 text-purple-700">Gas (Leavening)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Baking powder/soda create bubbles that expand in heat, making the cake rise and become light.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            The 7 Main Causes of Cake Collapse
          </h2>

          <div className="space-y-6 my-10">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">1. Underbaking</h3>
                  <p className="text-muted-foreground mb-4">
                    This is the #1 cause. If the protein and starch structures haven't fully set, the cake can't support its own weight and collapses when removed from the oven.
                  </p>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm mb-2"><strong className="text-red-700">Signs of underbaking:</strong></p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Center is gooey or wet</li>
                      <li>• Toothpick comes out with wet batter</li>
                      <li>• Cake jiggles when gently shaken</li>
                      <li>• Sinks in the middle immediately after removal</li>
                    </ul>
                  </div>
                  <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-200">
                    <p className="text-sm mb-2"><strong className="text-green-700">How to fix it:</strong></p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>→ Bake until toothpick comes out clean or with dry crumbs</li>
                      <li>→ Internal temp should reach 205-210°F</li>
                      <li>→ Cake should spring back when touched</li>
                      <li>→ Edges should pull away from pan slightly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border-2 border-pink-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">2. Too Much Leavening</h3>
                  <p className="text-muted-foreground mb-4">
                    Excess baking powder or baking soda creates too many gas bubbles. The cake rises rapidly, but the structure can't support the expansion, causing collapse.
                  </p>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm mb-3"><strong className="text-pink-700">Proper Leavening Ratios:</strong></p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg">
                        <span className="text-muted-foreground">Baking Powder:</span>
                        <span className="font-medium text-green-700">1-1.25 tsp per cup of flour</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg">
                        <span className="text-muted-foreground">Baking Soda:</span>
                        <span className="font-medium text-green-700">¼ tsp per cup of flour (if acidic ingredients present)</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-200">
                    <p className="text-sm mb-2"><strong className="text-green-700">How to fix it:</strong></p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>→ Measure leavening precisely (level, not heaping)</li>
                      <li>→ Check expiration dates (old leavening is weak)</li>
                      <li>→ Don't double leavening when doubling recipe</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ThermometerSnowflake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">3. Oven Temperature Too Low</h3>
                  <p className="text-muted-foreground mb-4">
                    If oven temp is too low, the cake rises before the structure sets. The weak structure can't hold the weight and collapses.
                  </p>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm mb-3"><strong className="text-purple-700">Oven Temperature Guide:</strong></p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="border-l-4 border-green-500 pl-3 py-2">
                        <strong>Most cakes:</strong> 325-350°F
                      </div>
                      <div className="border-l-4 border-blue-500 pl-3 py-2">
                        <strong>Dense cakes (pound cake):</strong> 325°F
                      </div>
                      <div className="border-l-4 border-purple-500 pl-3 py-2">
                        <strong>Light cakes (chiffon):</strong> 350°F
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-200">
                    <p className="text-sm mb-2"><strong className="text-green-700">How to fix it:</strong></p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>→ Use an oven thermometer to verify temperature</li>
                      <li>→ Preheat oven fully (15-20 min minimum)</li>
                      <li>→ Calibrate oven if consistently off</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">4. Opening Oven Door Too Early</h3>
                  <p className="text-muted-foreground mb-4">
                    Opening the oven causes temperature to drop rapidly. This thermal shock can cause the delicate structure to collapse before it's fully set.
                  </p>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm text-muted-foreground">
                      Every time you open the oven, temperature drops 25-50°F instantly. The fragile cake structure can't handle this sudden change during critical setting phase.
                    </p>
                  </div>
                  <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-200">
                    <p className="text-sm mb-2"><strong className="text-green-700">How to fix it:</strong></p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>→ Don't open oven for first 75% of bake time</li>
                      <li>→ Use oven light and window to check progress</li>
                      <li>→ Only open to test doneness near end</li>
                      <li>→ Close door gently (don't slam)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border-2 border-cyan-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">5. Too Much Liquid or Fat</h3>
                  <p className="text-muted-foreground mb-4">
                    Excess moisture or fat weakens the protein-starch network. The structure becomes too soft to support itself and collapses.
                  </p>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm mb-3"><strong className="text-cyan-700">Common culprits:</strong></p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Adding extra milk or water "to make it moister"</li>
                      <li>• Adding extra butter or oil</li>
                      <li>• Using ingredients that are too wet (e.g., overly ripe bananas)</li>
                      <li>• Inaccurate measuring (using volume instead of weight)</li>
                    </ul>
                  </div>
                  <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-200">
                    <p className="text-sm mb-2"><strong className="text-green-700">How to fix it:</strong></p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>→ Follow recipe ratios precisely</li>
                      <li>→ Measure by weight, not volume</li>
                      <li>→ Don't substitute ingredients without adjusting ratios</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">6. Overmixing the Batter</h3>
                  <p className="text-muted-foreground mb-4">
                    Overmixing develops too much gluten, which makes the cake tough and creates large air pockets that collapse during baking.
                  </p>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm mb-3"><strong className="text-yellow-700">Mixing Guidelines:</strong></p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="border-l-4 border-green-500 pl-3 py-2">
                        <strong>Creaming butter & sugar:</strong> 3-5 minutes until fluffy
                      </div>
                      <div className="border-l-4 border-blue-500 pl-3 py-2">
                        <strong>Adding eggs:</strong> Mix just until incorporated (30 sec each)
                      </div>
                      <div className="border-l-4 border-orange-500 pl-3 py-2">
                        <strong>Adding flour:</strong> Mix ONLY until no dry streaks remain (15-30 sec)
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-200">
                    <p className="text-sm mb-2"><strong className="text-green-700">How to fix it:</strong></p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>→ Mix flour on lowest speed or by hand</li>
                      <li>→ Stop as soon as ingredients are combined</li>
                      <li>→ A few small lumps are OK</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ThermometerSnowflake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">7. Cooling Improperly</h3>
                  <p className="text-muted-foreground mb-4">
                    Removing cake from pan too soon or cooling too quickly can cause collapse. The structure is still setting as it cools and needs support.
                  </p>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm mb-3"><strong className="text-green-700">Proper Cooling Method:</strong></p>
                    <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                      <li>Cool in pan on wire rack for 10-15 minutes</li>
                      <li>Run knife around edges to loosen</li>
                      <li>Invert onto wire rack</li>
                      <li>Cool completely before frosting (1-2 hours)</li>
                    </ol>
                  </div>
                  <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-200">
                    <p className="text-sm mb-2"><strong className="text-green-700">What NOT to do:</strong></p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✗ Don't invert immediately (cake is too fragile)</li>
                      <li>✗ Don't put in fridge to cool faster (uneven cooling)</li>
                      <li>✗ Don't leave in pan for hours (creates moisture)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Prevention Checklist
          </h2>

          <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-8 my-8">
            <div className="bg-white rounded-xl p-6">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Oven preheated to correct temperature (verified with thermometer)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>All ingredients at room temperature</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Leavening measured precisely (not expired)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Flour mixed just until combined (not overmixed)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Pan prepared properly (greased & floured)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Oven door not opened for first 3/4 of bake time</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Toothpick test shows done (clean or dry crumbs)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50">
                  <input type="checkbox" className="w-5 h-5" />
                  <span>Cooled in pan 10-15 min before inverting</span>
                </div>
              </div>
            </div>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">What causes a cake to collapse in the middle?</h3>
                <p className="text-muted-foreground text-sm">Most commonly: under-baking (structure not fully set), too much leavening (over-expansion then collapse), or opening the oven too early (temperature drop pops bubbles before structure sets).</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can I save a collapsed cake?</h3>
                <p className="text-muted-foreground text-sm">If it's underbaked, return it to the oven immediately. If it collapsed after cooling, the structure has failed — the cake can't be saved structurally. You can repurpose it as a trifle layer or cake pops.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does my cake look done on the outside but collapse?</h3>
                <p className="text-muted-foreground text-sm">The exterior browns and sets faster than the interior. A golden top is not a reliable doneness indicator. Always test with a toothpick (moist crumbs, not wet batter) and check that internal temperature reaches 200–210°F.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does high altitude affect cake collapsing?</h3>
                <p className="text-muted-foreground text-sm">Yes — at high altitude, lower air pressure means leavening gases expand more aggressively. Cakes can over-expand and collapse. Reduce baking powder by 25% and consider adding extra flour to strengthen structure.</p>
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
              <Link to="/cake-science/why-cakes-dry-out" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Dry Out</Link>
              <Link to="/cake-science/why-cakes-crack-on-top" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Crack on Top</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Build Perfect Cake Recipes</h2>
            <p className="text-lg text-white/90 mb-6">
              Design structurally sound cakes with CakeSensei. Balance moisture, structure, and leavening for cakes that rise beautifully and stay tall.
            </p>
            <a 
              href="https://cakesensei.senseifood.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Open CakeSensei
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}