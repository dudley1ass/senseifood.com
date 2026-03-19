import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyEggsMatterInBaking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm mb-6">Baking Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Why Eggs Matter in Baking</h1>
          <p className="text-xl text-muted-foreground">Eggs do five completely different jobs simultaneously. Understanding each one explains why you can't just leave them out — and how to control texture by changing yolk-to-white ratios.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>8 min read</span><span>•</span><span>Intermediate</span><span>🥚🔬</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🥚</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🥚</span>
            <div>
              <p className="font-bold text-yellow-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Eggs provide structure (protein), moisture, richness (fat from yolks), emulsification, and leavening all at once. Extra yolks = richer, chewier, more tender. Extra whites = drier, firmer, lighter. Temperature matters — cold eggs can break an emulsion; always use room temperature eggs in baking.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">A single egg is simultaneously doing five distinct jobs in your batter. It's providing structure, moisture, fat, an emulsifier, and leavening — all from one ingredient. Understanding each role separately is what allows you to manipulate egg ratios to produce specific textures and explains why substituting eggs is so genuinely difficult.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">The Five Jobs Eggs Do in Baking</h2>

          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <h3 className="text-xl mb-3">🏗️ 1. Structure (Protein Coagulation)</h3>
              <p className="text-sm text-muted-foreground mb-3">Egg proteins — ovalbumin (white) and vitellogenin (yolk) — are long, folded chains that unwind and bond together when heated above 140–180°F. This coagulation creates the rigid, set structure that holds a cake, cookie, or custard in shape after baking. Without eggs, most baked goods collapse or fail to hold any shape at all. More eggs = firmer structure. Fewer eggs = more delicate, crumbly structure.</p>
              <div className="bg-yellow-50 rounded-lg p-3 text-xs"><strong>Practical impact:</strong> This is why custards and cheesecakes have such specific egg requirements — the ratio of proteins to liquid determines whether you get silky cream or scrambled eggs.</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">💧 2. Moisture</h3>
              <p className="text-sm text-muted-foreground mb-3">A large egg contains about 3 tablespoons of liquid — predominantly water (75% of the white, 50% of the yolk). This moisture hydrates flour proteins (forming gluten), activates baking powder, and converts to steam during baking which contributes to rise. Reducing eggs in a recipe reduces moisture, producing drier, denser results. Adding eggs beyond the recipe amount adds moisture and can make textures too wet or wet-dense.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <h3 className="text-xl mb-3">🧈 3. Fat and Richness (Yolk Only)</h3>
              <p className="text-sm text-muted-foreground mb-3">Egg yolks are approximately 30% fat — primarily in the form of phospholipids and triglycerides. This fat lubricates the batter, coats gluten strands to reduce toughness, and contributes a rich, tender mouthfeel. It also carries fat-soluble flavor compounds and contributes to a golden color through carotenoid pigments. This is why yolk-heavy recipes (egg yolk pasta, custard, French buttercream) taste dramatically richer than white-heavy ones.</p>
              <div className="bg-orange-50 rounded-lg p-3 text-xs"><strong>Cookie application:</strong> Replace one whole egg with 2 yolks for noticeably richer, chewier, more tender cookies. The yolks add fat and richness without the drying effect of the white's protein.</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🔗 4. Emulsification (Lecithin)</h3>
              <p className="text-sm text-muted-foreground mb-3">Egg yolks contain lecithin — one of the most effective natural emulsifiers known. Lecithin molecules have one end that's attracted to fat and another end attracted to water, allowing them to bridge the two phases and create a stable, homogeneous mixture. Without emulsification, fat and water in a batter separate during baking, producing greasy, uneven texture. This is why adding cold eggs to warm, creamed butter can cause the emulsion to "break" and the mixture to curdle.</p>
              <div className="bg-yellow-50 rounded-lg p-3 text-xs"><strong>Always:</strong> Use room temperature eggs in any recipe where you're creaming butter and sugar. Cold eggs shock the fat and break the emulsion, producing dense, potentially greasy results.</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <h3 className="text-xl mb-3">💨 5. Leavening (Air Incorporation)</h3>
              <p className="text-sm text-muted-foreground mb-3">Beaten eggs, especially whites, trap significant amounts of air in a foam stabilized by protein films. This mechanical aeration contributes lift in cakes, soufflés, meringues, and chiffon cakes. Whole eggs beaten with sugar (genoise method) can triple in volume, providing the sole leavening in some recipes. Egg white foams, when properly stabilized, can support their own weight and the weight of other ingredients added to them.</p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Yolks vs. Whites: What Each Does</h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200 my-8">
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-yellow-700 mb-3">🟡 Extra Yolks Give You...</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Richer, more complex flavor</li>
                  <li>• Tender, chewy, fudgy texture</li>
                  <li>• Deep golden color</li>
                  <li>• More stable emulsion</li>
                  <li>• Slower staling (fat retains moisture)</li>
                  <li>• Denser, moister crumb</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-orange-600 mb-3">⚪ Extra Whites Give You...</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Lighter, airier texture</li>
                  <li>• Firmer, drier structure</li>
                  <li>• Less richness, cleaner flavor</li>
                  <li>• More lift and leavening</li>
                  <li>• Faster staling (less fat)</li>
                  <li>• Paler color</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: The Maillard Reaction and Egg Yolks</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Egg yolks contain reducing sugars and amino acids that actively participate in the Maillard reaction during baking. Yolk-rich batters brown faster and more deeply than white-heavy ones, producing more complex flavor compounds at equivalent baking times. This is why custard-based ice creams, pasta, and cakes have distinctly richer, more caramelized flavors than their egg-white or whole-egg counterparts.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Why do recipes specify room temperature eggs?</h3><p className="text-muted-foreground text-sm">Cold eggs shock warm, creamed butter and break the fat emulsion — you can see this as a curdled, separated appearance in the batter. Broken emulsions produce greasy, dense baked goods. Room temperature eggs (68°F) incorporate smoothly and maintain the stable emulsion that creaming worked to create.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">What happens if I use too many eggs?</h3><p className="text-muted-foreground text-sm">Excess egg proteins produce rubbery, firm, or eggy-tasting results. Cakes become dense and almost custardy. Cookies become cakey. The flavors that should be sweet and complex get overwhelmed by the sulfur compounds in egg whites. Follow recipe ratios carefully — eggs are not a "more is better" ingredient.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Can I use just yolks or just whites instead of whole eggs?</h3><p className="text-muted-foreground text-sm">Yes, with adjustments. Generally: 2 yolks = 1 whole egg (for richness without the drying white). 2 tablespoons beaten white = 1 whole egg (for structure without the fat). Always adjust other liquids accordingly since you're changing the water content of the recipe.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Why do some recipes call for eggs at different stages?</h3><p className="text-muted-foreground text-sm">Adding eggs gradually allows each addition to emulsify properly before the next is added. Dumping all eggs in at once can overwhelm the emulsion capacity of the fat, causing separation. Cake recipes that add whole eggs one at a time are protecting against this — each egg has time to incorporate before the next challenges the emulsion.</p></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Baking Science</h3>
            <div className="space-y-3">
              <Link to="/cookie-science/why-cookies-are-chewy" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Are Chewy — extra yolks for maximum chew</Link>
              <Link to="/cookie-science/why-cookies-turn-cakey" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Turn Cakey — too many whites, not enough yolks</Link>
              <Link to="/cake-science/why-cakes-are-dense" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Are Dense — cold eggs breaking the emulsion</Link>
              <Link to="/cake-science/why-cakes-turn-rubbery" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Turn Rubbery — over-developed egg proteins</Link>
              <Link to="/baking-science/why-butter-temperature-matters" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Butter Temperature Matters — the emulsion partner to eggs</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Apply the Egg Science</h2>
            <p className="text-lg text-white/90 mb-6">Experiment with yolk ratios in CookieSensei to see how it changes texture predictions.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-yellow-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
