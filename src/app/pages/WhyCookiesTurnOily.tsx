import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesTurnOily() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Why cookies turn oily</h1>
          <p className="text-xl text-muted-foreground">Shiny spots or grease pools mean fat left the dough matrix before it could stay bound — usually temperature, ratio, or mixing.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Beginner friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">💧</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">💧</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">Oil on the sheet is butter or shortening that separated because the dough got too warm, had too little flour or emulsifier for the fat load, or was overworked so it could not hold the fat in suspension. Chill the dough, check measurements on a scale, and avoid melting butter unless the recipe was written for it.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Fat is supposed to stay woven through sugar and flour until heat sets the crumb — if it squeezes out early, you see fried halos around the edges.</p>
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-amber-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">Think of dough as a sponge holding oil. Warmth makes the sponge leak; too much oil for the sponge size does the same.</p>
          </div>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Common drivers</h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-4"><strong>Heat before the oven.</strong> Soft butter in a hot kitchen or dough left in the sun mobilizes fat early.</p>
          <p className="text-base leading-relaxed text-foreground/80 mb-4"><strong>Ratio drift.</strong> Extra butter or less flour than the author tested shows up as shine.</p>
          <p className="text-base leading-relaxed text-foreground/80 mb-8"><strong>Mixing style.</strong> Some methods need emulsion from eggs; skipping steps can let fat weep under bake heat.</p>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Oily only on second tray?</h3><p className="text-muted-foreground text-base leading-relaxed">Warmer dough or hotter pan — treat batch two like batch one: cool the sheet.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Shortening vs butter?</h3><p className="text-muted-foreground text-base leading-relaxed">Different melting curves — do not swap one-for-one by eye without expecting texture changes.</p></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <div className="space-y-2 text-base">
              <Link to="/cookie-science/why-cookies-spread-too-much" className="block text-amber-700 hover:underline font-medium">Why cookies spread too much</Link>
              <Link to="/cookie-science/why-cookies-turn-cakey" className="block text-amber-700 hover:underline font-medium">Why cookies turn cakey</Link>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Balance fat in CookieSensei</h2>
            <p className="text-lg text-white/90 mb-6">When shine tracks ratio changes, modeling beats guessing.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
