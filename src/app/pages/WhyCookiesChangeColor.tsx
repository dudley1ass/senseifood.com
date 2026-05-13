import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesChangeColor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-red-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">Why cookies change color</h1>
          <p className="text-xl text-muted-foreground">Browning is chemistry with a clock — Maillard and caramelization paint the surface as heat and pH line up.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>6 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-red-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🎨</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🎨</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">Color shifts when proteins and reducing sugars react (Maillard) and when sucrose caramelizes at hotter, drier edges. More alkaline dough (baking soda), more brown sugar or dairy solids, thinner cookies, and higher heat all deepen color faster. If color races ahead of doneness, lower the temp or shield the tops.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Your eyes are reading temperature, moisture, and pH at once — not just “time in oven.”</p>
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-amber-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">Golden is flavor building; black is flavor leaving. The dial is heat plus sugar chemistry, not just minutes.</p>
          </div>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">Why the same timer looks different</h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-8">Sheet position, fan, dough thickness, and yesterday’s chilled vs today’s room-temp dough all change the browning curve. Note variables in the margin of your recipe card like a lab notebook — boring, effective.</p>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Pale but dry?</h3><p className="text-muted-foreground text-base leading-relaxed">Sugar type or low pH — try a touch more brown sugar or a shorter higher finish after centers are nearly set.</p></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <div className="space-y-2 text-base">
              <Link to="/cookie-science/why-cookies-brown" className="block text-amber-700 hover:underline font-medium">Why cookies brown</Link>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-600 to-red-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Tune color with CookieSensei</h2>
            <p className="text-lg text-white/90 mb-6">Shift soda and sugar on paper before you chase shade in the oven.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-900 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
