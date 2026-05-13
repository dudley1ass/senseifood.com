import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesBrown() {
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
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Why cookies brown</h1>
          <p className="text-xl text-muted-foreground">Golden is not decoration — it is hundreds of new flavor compounds from Maillard and caramelization working the edges first.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>6 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🟤</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🟤</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">Browning pairs proteins with reducing sugars (Maillard) and drives sucrose toward caramel notes where it is hottest and driest — usually edges and bottoms. Brown sugar, milk solids in butter, baking soda (higher pH), and higher heat all speed color. Pull when you like the flavor band, not only when the timer dings.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">If you only ever bake pale, you may be leaving flavor in the oven untapped — not wrong for style, but know what you are trading.</p>
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-amber-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">Brown butter in the dough is a head start on the same party the oven throws for the crust — nuttier, deeper, faster color.</p>
          </div>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">What moves color fastest</h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">Alkaline dough with soda, thin cookies, white sugar forward formulas, and 375°F+ finishes.</p>
          <p className="text-base leading-relaxed text-foreground/80 mb-8">To slow color, drop temp, shorten exposure, lighten sugar mix, or shield with a second sheet if tops race.</p>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Pale but baked through?</h3><p className="text-muted-foreground text-base leading-relaxed">Check oven temp truth, sugar mix, and soda — also humidity in unusual climates.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Edges bitter, center pale?</h3><p className="text-muted-foreground text-base leading-relaxed">Heat gradient — smaller scoop, lower temp, or move rack.</p></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <div className="space-y-2 text-base">
              <Link to="/cookie-science/why-cookies-change-color" className="block text-amber-700 hover:underline font-medium">Why cookies change color</Link>
              <Link to="/cookie-science/brown-sugar-vs-white-sugar" className="block text-amber-700 hover:underline font-medium">Brown sugar vs white sugar</Link>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Tune browning in CookieSensei</h2>
            <p className="text-lg text-white/90 mb-6">See how soda and sugar swing the bake band.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-800 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
