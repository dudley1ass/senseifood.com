import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesTurnOily() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Why Cookies Turn Oily</h1>
          <p className="text-xl text-muted-foreground">Find out why cookies come out greasy and leave an oily residue — and how fat balance and mixing technique fix it.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">💧</span></div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Greasy, oily cookies happen when fat separates from the dough during baking instead of being properly absorbed. This is a mixing or ratio problem — the fat never fully emulsified into the batter, so it pools and weeps out as the cookie bakes.</p>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Why Fat Separates</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">In a properly emulsified dough, fat is distributed as microscopic droplets held in suspension by lecithin from eggs and proteins from flour. If that emulsion breaks — due to too much fat, cold butter curdling with eggs, or insufficient flour to absorb the fat — the fat pools out during baking, creating a greasy result.</p>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🧈 Too Much Butter</h3>
              <p className="text-sm text-muted-foreground mb-3">More fat than the flour and eggs can absorb will always leak out. Even a slightly heavy hand measuring butter can cause visible oiliness.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Measure butter by weight, not volume. 1 stick = 113g. Don't eyeball it.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🌡️ Butter Too Warm When Mixed</h3>
              <p className="text-sm text-muted-foreground mb-3">Very soft or near-melted butter can't properly cream with sugar. The fat stays in large pools rather than dispersing into fine droplets, and those pools weep out during baking.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Butter should be 65–68°F — soft enough to indent with a finger but not shiny or greasy. If it's too warm, refrigerate the mixed dough for 30 minutes before baking.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🌾 Not Enough Flour</h3>
              <p className="text-sm text-muted-foreground mb-3">Flour absorbs fat during mixing and baking. If there isn't enough, the excess fat has nowhere to go and pools out of the cookie onto the pan.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Weigh flour — 1 cup = 120–125g. Add 2 tablespoons more flour if cookies consistently come out greasy.</div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Get Your Cookie Balance Right</h2>
            <p className="text-lg text-white/90 mb-6">Use CookieSensei to nail fat-to-flour ratios every time.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
