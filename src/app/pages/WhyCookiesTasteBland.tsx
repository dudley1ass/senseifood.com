import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesTasteBland() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <Navigation />

      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cookie Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Why Cookies Taste Bland
          </h1>
          <p className="text-xl text-muted-foreground">
            If your cookies taste "meh," you're missing one key ingredient. Here's the flavor science behind cookies that actually excite.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
            <span>🍪😐</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">😐</span>
        </div>

        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🍪</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Bland cookies are almost always under-salted. Salt doesn't make cookies salty — it suppresses bitterness and amplifies all other flavors. If your cookies taste flat, add ¼ teaspoon more salt to your next batch before anything else.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Bland cookies are a quiet failure — they're edible, they look fine, but they have no particular reason to exist. They lack the complex interplay of sweet, salty, nutty, and caramelized that makes a great cookie crave-worthy. Every single element of that flavor profile has a specific scientific cause, and you can engineer all of them.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            The Flavor Architecture of a Great Cookie
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            A flavorful cookie has multiple flavor layers working simultaneously: sweetness from sugar, savoriness from salt and browned butter, complexity from the Maillard reaction on the surface, depth from caramelized sugars, and aromatic richness from vanilla. Remove or weaken any of these elements and the entire profile collapses into blandness. Most bland cookie problems are missing one specific element — and once you identify which one, the fix is straightforward.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Causes & Fixes
          </h2>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">🧂 Not Enough Salt — The #1 Cause</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Salt's most important role in baking is not to add saltiness — it's to suppress bitterness. Baked goods naturally contain bitter compounds from browned starches, egg proteins, and certain fats. Salt blocks bitter taste receptors on the tongue, which effectively amplifies sweetness, aroma, and every other flavor that was being masked by background bitterness. Under-salted cookies taste flat because the bitterness suppression isn't working, which dulls everything else.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Most recipes call for ½–1 teaspoon of salt. Many home bakers skip or reduce this, thinking it will make cookies taste "healthier" or less salty. The opposite is true: less salt = less flavor everywhere. Restaurant and professional bakery cookies typically have more salt than home recipes.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Follow recipe salt quantities exactly. Try adding a pinch of flaky sea salt on top of each cookie before baking — the contrast between the sweet cookie and the salt crystal is one of the most effective flavor techniques in baking.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4">🟤 No Browning — Missing the Maillard Reaction</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The Maillard reaction is the single biggest contributor to cookie flavor complexity. It occurs when amino acids and reducing sugars react at temperatures above 280°F, producing hundreds of new flavor compounds — nutty, caramel, toasted, and complex notes that are impossible to replicate any other way. Cookies that are baked at too low a temperature, or pulled too early, or made in pale-colored pans that don't brown the base, miss this flavor layer entirely.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Pale, underbaked cookies — even if technically cooked through — taste bland because the Maillard compounds never formed. The browning IS the flavor.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Bake until the edges are genuinely golden brown (not just set). Brown your butter before adding it to the dough — this triggers the Maillard reaction in the fat itself, creating nutty pyrazines that layer on top of whatever browning happens in the oven.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">🌿 Low-Quality or Old Vanilla</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Vanilla extract contains over 200 flavor compounds — primarily vanillin but also hundreds of supporting aromatics. Imitation vanilla contains only synthetic vanillin, a single molecule. The difference in complexity is not subtle. Additionally, opened bottles of vanilla extract lose potency over time as the volatile aromatics evaporate. Old vanilla smells faint; fresh vanilla smells intensely floral and complex.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Use pure vanilla extract (not imitation). Double the vanilla quantity — most recipes under-dose it. Or use vanilla bean paste for even more intensity and the visible specks of real bean. Replace bottles older than 2–3 years.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4">⚪ All White Sugar — No Depth</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                White sugar tastes like one thing: sweetness. Brown sugar contains molasses, which contributes over 50 distinct flavor compounds — caramel, butterscotch, toffee, slight bitterness, and mineral depth. A cookie made entirely with white sugar has one-dimensional sweetness. A cookie with brown sugar has complexity and what bakers describe as "depth" — a flavor that keeps evolving as you chew.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Replace at least 50% of white sugar with dark brown sugar. Dark brown has twice the molasses content of light brown and contributes significantly more flavor. The color difference is visible and the flavor improvement is dramatic.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">🧈 Low-Quality Butter</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                European-style butters have higher fat content (82–84% vs American butter's 80%) and more complex flavor from different feed and churning processes. The difference between a cookie made with generic store-brand butter and high-quality European butter is genuinely noticeable — more richness, more depth, more of that dairy complexity that makes a cookie satisfying.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Browning any butter before using it in cookies is the highest-impact butter upgrade available. Brown butter (beurre noisette) has had its milk solids toasted via the Maillard reaction, creating nutty, caramel-like compounds that are absent in regular melted butter.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Brown your butter. Melt over medium heat, swirling constantly, until milk solids turn golden and smell nutty — about 5–7 minutes. Cool before using. This single technique elevates any cookie recipe.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-yellow-200">
            <h3 className="text-2xl mb-4">⏰ Not Resting the Dough</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Resting cookie dough in the refrigerator for 24–72 hours produces dramatically more flavorful cookies through enzymatic breakdown. Enzymes in the flour break down proteins and starches into simpler sugars and amino acids. These smaller molecules are more available for Maillard reactions during baking — producing more browning, more complex flavor, and a noticeably deeper taste profile than freshly made dough.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Rest your dough in the fridge for at least 24 hours before baking. The difference between day-1 and day-3 dough is the difference between a good cookie and an outstanding one.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-xl mb-6">Bland Cookie Fix Guide — Biggest Impact First:</h3>
            <div className="space-y-3">
              {[
                'Add ¼ tsp more salt — taste the dough and see if flavors sharpen',
                'Add flaky sea salt on top before baking — the contrast is dramatic',
                'Brown your butter — 5 minutes on the stove, transformative results',
                'Swap white sugar for dark brown sugar — at least 50% of the total',
                'Double your vanilla and use pure extract, not imitation',
                'Rest the dough 24–72 hours in the fridge before baking',
                'Bake until genuinely golden — pale cookies taste as pale as they look',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <p className="text-sm text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: How Salt Amplifies Flavor</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sodium ions (Na⁺) from salt directly interact with taste receptors in a phenomenon called "lateral inhibition." Salt selectively suppresses the signal from bitter taste receptors while leaving sweet, savory, and aromatic receptors unaffected — effectively turning down the background noise of bitterness while turning up the signal of everything else. This is why properly salted food tastes more intensely of itself: the salt isn't adding flavor, it's removing a flavor that was suppressing everything else.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why do bakery cookies taste so much better than homemade?</h3>
                <p className="text-muted-foreground text-sm">Professional bakeries typically use more salt, more vanilla, higher-quality butter, browned butter or clarified butter, and have their dough aged (rested) for extended periods. They also bake to a deeper golden color than most home bakers dare. The formula is the same — the technique differences are significant.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does using salted vs unsalted butter matter for flavor?</h3>
                <p className="text-muted-foreground text-sm">Yes — but not dramatically. Unsalted butter gives you precise control over salt content (recommended). Salted butter adds roughly ¼ tsp salt per ½ cup butter — if you use salted butter, reduce added salt accordingly. Either way, don't reduce the total salt in the recipe.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why do cookies taste better the next day?</h3>
                <p className="text-muted-foreground text-sm">Moisture continues to redistribute through the cookie after baking, softening crispy edges and allowing flavors to meld and develop. Aromatics also concentrate as some volatile compounds evaporate, leaving the heavier flavor molecules behind in a more intense profile. Day-2 cookies are usually superior to day-1.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can I fix bland cookies after baking?</h3>
                <p className="text-muted-foreground text-sm">Somewhat — sprinkle with flaky sea salt immediately after removing from the oven (salt adheres better when cookies are warm). You can also drizzle with browned butter while warm. But the structural flavor improvements (browned butter in dough, rested dough, more brown sugar) can only be done before baking.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Cookie Science</h3>
            <div className="space-y-3">
              <Link to="/cookie-science/why-cookies-brown" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Brown — the Maillard reaction and flavor creation</Link>
              <Link to="/cookie-science/brown-sugar-vs-white-sugar" className="block text-amber-700 hover:underline text-sm font-medium">→ Brown Sugar vs White Sugar — the flavor depth difference</Link>
              <Link to="/cookie-science/why-cookies-are-chewy" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Are Chewy — texture and flavor go together</Link>
              <Link to="/cookie-science/why-cookies-get-hard-after-baking" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Get Hard After Baking — storage affects flavor too</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Engineer Your Perfect Cookie</h2>
            <p className="text-lg text-white/90 mb-6">Use CookieSensei to dial in every flavor variable before you bake.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">
              Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
