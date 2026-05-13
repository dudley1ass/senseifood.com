import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesSpreadUnevenly() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cookie science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
            Why cookies spread unevenly
          </h1>
          <p className="text-xl text-muted-foreground">
            Lopsided ovals usually mean heat or shape was not symmetric — the dough follows the easy path out.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>5 min read</span>
            <span>•</span>
            <span>Beginner friendly</span>
          </div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🍪</span>
        </div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🍪</span>
            <div>
              <p className="font-bold text-yellow-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">
                Map two culprits: your oven&apos;s hot spots and your scoop geometry. Rotate the sheet 180° halfway through, use a level heavy pan, and roll portions into smooth balls without flat facets so melt starts evenly on every side.
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Cookies are tiny fluid dynamics experiments — any tilt, extra heat on one wall, or a dough ball with a “corner” becomes an arrow showing which way the puddle ran first.
          </p>

          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-amber-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">
              If one cheek of the cookie faces the oven&apos;s sunburn zone while the other faces mild air, the sunny cheek melts first — you get an oval. A warped sheet is a shallow ramp; butter quietly slides downhill.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
            Heat maps and dough geometry
          </h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-5">
            A cheap “toast test” on a blank sheet shows brown patterns for your specific oven. Edge cookies always see more side radiation — leaving outer ring positions empty can help uniformity on crowded trays.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-8">
            Consistent scoop weight matters less than consistent shape: a taller lopsided lump spreads toward the low shoulder first.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Perfect rounds every time?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Round balls, even spacing, one rotation per bake — boring and effective.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Fan convection?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Asymmetric air can help or hurt; note rack position and rotate earlier if one side races.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <div className="space-y-2 text-base">
              <Link to="/cookie-science/why-cookies-spread" className="block text-amber-700 hover:underline font-medium">
                Why cookies spread
              </Link>
              <Link to="/cookie-science/why-cookies-spread-too-much" className="block text-amber-700 hover:underline font-medium">
                Why cookies spread too much
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">See spread before you bake</h2>
            <p className="text-lg text-white/90 mb-6">CookieSensei helps when you are chasing symmetry, not just size.</p>
            <a
              href="https://cookiesensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-yellow-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Open CookieSensei
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
