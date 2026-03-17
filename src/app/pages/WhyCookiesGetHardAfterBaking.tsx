import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesGetHardAfterBaking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-stone-700 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent">Why Cookies Get Hard After Baking</h1>
          <p className="text-xl text-muted-foreground">Understand why cookies that came out perfectly soft turn hard and rock-like the next day — and how to keep them soft for longer.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Beginner Friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-stone-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🪨</span></div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Cookies that harden overnight have lost moisture to the surrounding air. This is a storage and recipe problem — either the cookies weren't moist enough to begin with, or they weren't stored in a way that prevented moisture loss.</p>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent">Why Cookies Harden Over Time</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">Freshly baked cookies contain moisture in their sugar, fat, and starch network. When exposed to dry air, this moisture migrates outward through evaporation and the sugar network becomes increasingly rigid — a process called staling. Cookies with more hygroscopic ingredients (brown sugar, honey) resist this longer. Crispy cookies are simply the fully staled end state.</p>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🌬️ Improper Storage (Air Exposure)</h3>
              <p className="text-sm text-muted-foreground mb-3">Leaving cookies uncovered or in a loosely sealed container allows moisture to escape rapidly. Even overnight exposure to dry indoor air causes significant hardening.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Store in an airtight container immediately once fully cooled. Add a slice of bread to the container — it donates its moisture to the cookies and keeps them soft for days.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-stone-200">
              <h3 className="text-xl mb-3">⏱️ Over-Baked Originally</h3>
              <p className="text-sm text-muted-foreground mb-3">Cookies that were fully baked (completely dry interior) have no residual moisture to give them softness on day 2. They start hard and only get harder.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Under-bake by 1–2 minutes. Pull when centers look underdone — carryover cooking finishes them. They'll stay softer for longer.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">⚪ All White Sugar Recipe</h3>
              <p className="text-sm text-muted-foreground mb-3">White sugar doesn't attract moisture from the environment. Cookies made entirely with white sugar have no mechanism to stay soft — they become crunchy as soon as they cool.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Replace at least 50% of white sugar with brown sugar. Brown sugar's molasses is hygroscopic and actively keeps cookies moist.</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">💡 Rescue Tip: Soften Hard Cookies</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Place hard cookies in a sealed container with a damp paper towel (not touching the cookies) overnight. The moisture migrates into the cookies and softens them. Alternatively, 10 seconds in the microwave restores softness temporarily.</p>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why do my cookies harden within hours?</h3>
                <p className="text-muted-foreground text-sm">Either over-baked (no residual moisture) or stored in a container that's not airtight. Use all-brown-sugar recipes, pull cookies 1–2 minutes early, and store immediately in a sealed container with a bread slice.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can I save already-hard cookies?</h3>
                <p className="text-muted-foreground text-sm">Yes — place in a sealed container with a damp paper towel (not touching cookies) for several hours. Alternatively, 8–10 seconds in the microwave softens them temporarily.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why do snickerdoodles get hard so fast?</h3>
                <p className="text-muted-foreground text-sm">The cream of tartar in snickerdoodles makes them more prone to drying out. Store in an airtight container immediately. Adding 1–2 tsp cornstarch to the dough helps retain moisture.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does the cooling rack affect hardening?</h3>
                <p className="text-muted-foreground text-sm">Only slightly — prolonged cooling on a rack in dry air can remove some moisture. Cool for 5 minutes, then store in a container rather than leaving out.</p>
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

          <div className="bg-gradient-to-r from-amber-600 to-stone-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Keep Cookies Soft Longer</h2>
            <p className="text-lg text-white/90 mb-6">Use CookieSensei to engineer moisture retention into your recipe.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
