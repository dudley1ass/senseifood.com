import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesTasteBitter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-600 to-amber-700 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-stone-700 to-amber-700 bg-clip-text text-transparent">Why Cookies Taste Bitter</h1>
          <p className="text-xl text-muted-foreground">Learn what causes an unpleasant bitter aftertaste in cookies — from excess leavening to burnt sugars and cocoa issues.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Beginner Friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-stone-300 to-amber-500 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">😖</span></div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">A bitter aftertaste in cookies has a small number of specific causes — all identifiable and fixable. The most common culprit is leavening you can actually taste.</p>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-stone-200">
              <h3 className="text-xl mb-3">🧂 Too Much Baking Soda or Powder</h3>
              <p className="text-sm text-muted-foreground mb-3">Baking soda has a strongly metallic, soapy, bitter flavor when used in excess. Even ¼ teaspoon too much is detectable. Baking powder is milder but still causes bitterness in large amounts.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Measure leavening precisely with level teaspoons — never heaped. If using baking soda, ensure there's enough acid in the recipe (brown sugar, buttermilk, cocoa) to neutralize it.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🍫 Natural Cocoa Powder</h3>
              <p className="text-sm text-muted-foreground mb-3">Natural (non-Dutched) cocoa is highly acidic and intensely bitter on its own. Without enough sugar and fat to balance it, cookies taste harshly bitter.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Use Dutch-process cocoa for a smoother, less bitter result. Or ensure your recipe has enough sugar, butter, and possibly vanilla to balance natural cocoa's acidity.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-stone-200">
              <h3 className="text-xl mb-3">🔥 Over-Baked or Burnt Edges</h3>
              <p className="text-sm text-muted-foreground mb-3">Caramelization beyond the golden stage creates bitter, acrid compounds — the same reason burnt sugar tastes unpleasant. Dark edges aren't just cosmetic; they add real bitterness to each bite.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Remove cookies when edges are golden (not dark brown). They continue cooking on the hot pan for several minutes after removal.</div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-stone-600 to-amber-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Perfect Your Cookie Flavor</h2>
            <p className="text-lg text-white/90 mb-6">Use CookieSensei to balance your recipe before baking.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-stone-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
