import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesTurnCakey() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-amber-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />Back to Home
        </Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-pink-600 to-amber-600 bg-clip-text text-transparent">Why Cookies Turn Cakey</h1>
          <p className="text-xl text-muted-foreground">Find out why your cookies bake up soft and cake-like instead of dense and chewy — and which ingredient swaps fix it.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>6 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-pink-200 to-amber-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🎂</span></div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Cakey cookies are tall, soft, and airy — more like little cakes than proper cookies. This isn't a flaw if that's what you want, but if you're aiming for dense and chewy, it means too much lift and too little moisture retention.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-amber-600 bg-clip-text text-transparent">Why Cookies Go Cakey</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">Cakey texture comes from excess air in the dough combined with ingredients that add lift without adding moisture retention. The three main culprits are over-creamed butter, too many egg whites, and too much leavening — all of which inflate the dough more than they enrich it.</p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200 my-10">
            <h3 className="text-xl mb-6">Cakey vs. Chewy: The Key Variables</h3>
            <table className="w-full text-sm">
              <thead><tr className="border-b-2 border-pink-200"><th className="text-left py-3 text-pink-800">Variable</th><th className="text-left py-3 text-red-700">Makes Cakey</th><th className="text-left py-3 text-green-700">Makes Chewy</th></tr></thead>
              <tbody className="divide-y divide-pink-100">
                <tr><td className="py-3 font-medium">Butter method</td><td className="py-3 text-muted-foreground">Creamed (aerated)</td><td className="py-3 text-muted-foreground">Melted (dense)</td></tr>
                <tr><td className="py-3 font-medium">Eggs</td><td className="py-3 text-muted-foreground">Extra whites</td><td className="py-3 text-muted-foreground">Extra yolks</td></tr>
                <tr><td className="py-3 font-medium">Leavening</td><td className="py-3 text-muted-foreground">More baking powder</td><td className="py-3 text-muted-foreground">Less or none</td></tr>
                <tr><td className="py-3 font-medium">Sugar</td><td className="py-3 text-muted-foreground">More white sugar</td><td className="py-3 text-muted-foreground">More brown sugar</td></tr>
                <tr><td className="py-3 font-medium">Flour</td><td className="py-3 text-muted-foreground">Cake flour</td><td className="py-3 text-muted-foreground">Bread flour</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-amber-600 bg-clip-text text-transparent">Main Causes & Fixes</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
              <h3 className="text-xl mb-3">🧈 Over-Creamed Butter</h3>
              <p className="text-sm text-muted-foreground mb-3">Beating butter and sugar for too long incorporates excessive air. All those tiny air bubbles expand in the oven, puffing the cookie up like a cake.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Cream for only 2–3 minutes until just combined, or switch to melted butter entirely for maximum density.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🧂 Too Much Baking Powder</h3>
              <p className="text-sm text-muted-foreground mb-3">Excess leavening produces abundant CO₂ that lifts the cookie dramatically upward, creating a dome and cake-like crumb rather than spread.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Reduce baking powder by half, or switch to baking soda (which causes less lift and more spread).</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
              <h3 className="text-xl mb-3">🥚 Too Many Egg Whites</h3>
              <p className="text-sm text-muted-foreground mb-3">Egg whites are mostly water and protein. They set into a firm, dry, airy structure — exactly what you want in a cake, exactly what you don't want in a chewy cookie.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Replace one whole egg with 2 yolks only. Yolks add fat and richness without the dry lift of whites.</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-amber-500 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Engineer Your Perfect Cookie Texture</h2>
            <p className="text-lg text-white/90 mb-6">Use CookieSensei to adjust ratios and predict cakey vs. chewy before you bake.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
