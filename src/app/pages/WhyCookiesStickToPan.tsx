import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesStickToPan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cookie science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Why cookies stick to the pan
          </h1>
          <p className="text-xl text-muted-foreground">
            Hot sugar at the interface is basically glue until it cools — parchment buys you forgiveness; patience buys you clean lifts.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>5 min read</span>
            <span>•</span>
            <span>Beginner friendly</span>
          </div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-red-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">😩</span>
        </div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">😩</span>
            <div>
              <p className="font-bold text-red-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">
                Caramelized sugars and proteins bond to bare metal while everything is still molten-hot. Line with parchment or a good silicone mat, and let cookies rest on the sheet a few minutes after baking so the base firms before you pry — that rest window is when the bond weakens enough to slide a thin spatula cleanly.
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            If you lift in the first thirty seconds you often get half a cookie; if you fight a high-sugar bake on bare dark steel you can get crumbs no matter how brave your spatula is.
          </p>

          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-amber-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">
              Think of the bottom as wet lacquer drying into varnish on the pan. While it is cooling from liquid to brittle, it is maximally grabby. A liner keeps most of the lacquer on the liner, not on the steel.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            What makes the bond worse
          </h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-5">
            High honey or brown-sugar formulas lay down stickier bases. Worn non-stick can be uneven enough to trap sugar in scratches. Extra grease sometimes increases spread so edges paper-thin weld to metal.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-8">
            Cheap parchment that browns to brittle can lose release — replace when it looks tired between batches.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            When they are already stuck
          </h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-8">
            Gentle heat from a turned-off oven can re-soften the interface enough to slide a spatula without chiseling. Never muscle through — you will split the cookie before you convince the sugar to let go.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Parchment and still stuck?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Under-baked goo through the paper can fuse — give another minute of bake or a longer on-pan rest. Check that parchment is rated for your oven temp.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Reuse parchment?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  A few rounds if it stays flat and lightly colored; deep brown brittle paper is done.
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
              <Link to="/cookie-science/why-cookies-burn-on-the-bottom" className="block text-amber-700 hover:underline font-medium">
                Why cookies burn on the bottom
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Line, rest, lift</h2>
            <p className="text-lg text-white/90 mb-6">CookieSensei can help when stickiness pairs with spread issues from the same formula.</p>
            <a
              href="https://cookiesensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
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
