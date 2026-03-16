import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesSpreadUnevenly() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Why Cookies Spread Unevenly</h1>
          <p className="text-xl text-muted-foreground">Discover why cookies spread into lopsided ovals instead of round circles — and how to get perfectly symmetrical results.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Beginner Friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🍪</span></div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Uneven spreading is almost always caused by uneven heat, uneven dough shaping, or inconsistent pan surfaces. The cookie spreads in the direction of least resistance — which is wherever heat or lubrication is greatest.</p>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <h3 className="text-xl mb-3">♨️ Hot Spots in the Oven</h3>
              <p className="text-sm text-muted-foreground mb-3">Most home ovens have hot spots — areas that run hotter than others. Cookies near a hot spot spread faster on that side, creating an asymmetric shape.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Rotate your baking sheet 180° halfway through baking. This exposes all cookies equally to hot and cooler zones.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🔵 Unevenly Shaped Dough Balls</h3>
              <p className="text-sm text-muted-foreground mb-3">A dough ball that's taller on one side or has a flat spot will spread differently in each direction, producing an oval or D-shape.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Roll each dough portion between your palms into a smooth, perfectly round ball before placing on the pan.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <h3 className="text-xl mb-3">📐 Pan Not Level</h3>
              <p className="text-sm text-muted-foreground mb-3">A warped or tilted baking sheet causes melting fat to pool on one side, pulling the cookie toward the low point.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Use a heavy, flat half-sheet pan. Warped thin pans are a leading cause of uneven spread — replace them.</div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Get Perfectly Round Cookies</h2>
            <p className="text-lg text-white/90 mb-6">Use CookieSensei to master your spread every time.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-yellow-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
