import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesTasteBitter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-600 to-amber-700 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-stone-700 to-amber-700 bg-clip-text text-transparent">Why cookies taste bitter</h1>
          <p className="text-xl text-muted-foreground">Bitter is almost never “mystery spice” — it is usually carbonized sugar, too much chemical leavener, or stale baking soda.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Beginner friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-stone-200 to-amber-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🫤</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-stone-100 border-l-4 border-amber-500 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🫤</span>
            <div>
              <p className="font-bold text-stone-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">Check for over-baked edges (carbon bitter), double-measured baking soda or powder (soapy bitter), or cocoa and coffee notes pushed too far by high heat. Weigh leaveners, pull cookies when centers still look a touch under, and replace open boxes of soda stored above the stove.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Your tongue is good at calling out alkalinity and burn — both show up in cookies when timing or measuring slips.</p>
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-amber-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">Soap-flavor bitter usually means “too much white powder.” Ash-bitter usually means “brown too long on thin edges.”</p>
          </div>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-700 to-amber-700 bg-clip-text text-transparent">Where to look first</h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-4"><strong>Leavening math.</strong> Teaspoon vs tablespoon errors are unforgettable on the palate.</p>
          <p className="text-base leading-relaxed text-foreground/80 mb-4"><strong>Bake color.</strong> Thin cookies go from golden to acrid fast — lower temp, shorter time, or smaller scoop.</p>
          <p className="text-base leading-relaxed text-foreground/80 mb-8"><strong>Dutch cocoa + soda synergy.</strong> Some pairings brown aggressively; watch the same tray more closely when you change cocoa type.</p>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Bitter next day only?</h3><p className="text-muted-foreground text-base leading-relaxed">Staling chemistry shifts perception; if it is truly bitter not bland, still suspect leavening or scorch.</p></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <div className="space-y-2 text-base">
              <Link to="/cookie-science/why-cookies-brown" className="block text-amber-700 hover:underline font-medium">Why cookies brown</Link>
              <Link to="/cookie-science/why-cookies-change-color" className="block text-amber-700 hover:underline font-medium">Why cookies change color</Link>
            </div>
          </div>
          <div className="bg-gradient-to-r from-stone-700 to-amber-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Check ratios in CookieSensei</h2>
            <p className="text-lg text-white/90 mb-6">Bitter from soda is one of the fastest fixes once you see the grams.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-stone-900 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
