import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesBakeFasterOnEdges() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Why cookies bake faster on the edges</h1>
          <p className="text-xl text-muted-foreground">Edge cookies see the pan, the hot air ribbon, and sometimes the oven wall — three heat sources while the middle gets the gentler interior of the tray.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Beginner friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🌡️</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🌡️</span>
            <div>
              <p className="font-bold text-yellow-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">Perimeter cookies sit where conductive heat from the sheet meets moving hot air and side radiation from the oven walls. Rotate the pan halfway, leave outer ring positions empty if you need uniformity, or switch to a gentler temp with slightly longer time so centers catch up without edges scorching.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">This is why “one weird dark cookie” is often the corner seat — not your soul, just geometry.</p>
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-amber-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">Center mounds huddle for warmth; edge mounds sit by the campfire alone — they toast first.</p>
          </div>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Even out the tray</h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-8">Smaller scoops, insulated pans, or double stacking sheets can slow edge rush. Convection changes the map — relearn your oven when you toggle fan modes.</p>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">All edges dark?</h3><p className="text-muted-foreground text-base leading-relaxed">Oven too hot overall or sugar very high — lower temp 25°F.</p></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <div className="space-y-2 text-base">
              <Link to="/cookie-science/why-cookies-spread-unevenly" className="block text-amber-700 hover:underline font-medium">Why cookies spread unevenly</Link>
              <Link to="/cookie-science/why-cookies-burn-on-the-bottom" className="block text-amber-700 hover:underline font-medium">Why cookies burn on the bottom</Link>
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Match heat to scoop</h2>
            <p className="text-lg text-white/90 mb-6">CookieSensei helps when edge burn pairs with ratio questions.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-yellow-800 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
