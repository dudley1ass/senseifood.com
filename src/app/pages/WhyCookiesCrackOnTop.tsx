import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesCrackOnTop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Why cookies crack on top</h1>
          <p className="text-xl text-muted-foreground">Surface cracks are the crust setting while the inside still wants to expand — a signature on some cookies, a bug on others.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Beginner friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">〰️</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">〰️</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">Tops crack when the outside dries and sets while steam and leavening still push from below. Sugar type, oven heat, dough temperature, and scoop shape all change crack pattern. For fewer cracks, slightly lower top heat or gentler mix; for prettier cracks on purpose, keep a cold center and a hot edge set.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Many chocolate chip recipes celebrate a few cracks — they signal chew under a thin crisp lid.</p>
          <div className="bg-cyan-50/90 border border-cyan-200 rounded-2xl p-6 my-10">
            <h4 className="text-lg mb-2 text-cyan-900">Pro tip: cracks on purpose</h4>
            <p className="text-base text-muted-foreground leading-relaxed mb-0">Chilled dough + hot oven start gives a set rim while the center still expands — the top opens in lines like a brownie skin.</p>
          </div>
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-amber-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">The surface is dry leather; the inside is still blowing up a balloon underneath — leather splits.</p>
          </div>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">When cracks signal a problem</h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-8">Deep canyons with dry crumb mean over-bake or too little fat for the sugar load. Shallow lightning on an otherwise moist cookie is usually just style.</p>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Cracks but raw centers?</h3><p className="text-muted-foreground text-base leading-relaxed">Hot oven skin — lower temp, smaller scoop, or longer gentler bake.</p></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <div className="space-y-2 text-base">
              <Link to="/cookie-science/why-cookies-change-color" className="block text-amber-700 hover:underline font-medium">Why cookies change color</Link>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Try your next tweaks in CookieSensei</h2>
            <p className="text-lg text-white/90 mb-6">Tie crack pattern to temperature and sugar in one place.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-800 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
