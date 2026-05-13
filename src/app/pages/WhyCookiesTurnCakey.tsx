import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesTurnCakey() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">Why cookies turn cakey</h1>
          <p className="text-xl text-muted-foreground">Cakey means too much air and moisture trapped in a fine crumb — closer to muffin batter than to a short, rich disk.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>6 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🍰</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🍰</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">Cakey cookies usually come from over-creamed butter and sugar (too much air), extra egg white, too much leavening, or a flour-heavy mix that bakes like tiny cakes. Melted-butter or brown-sugar-forward recipes read chewier; cutting creaming time, pulling an egg white, or slightly lowering chemical leavening nudges you back toward cookie territory.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">If the cross-section looks like cupcake crumb with chocolate chips, you are not imagining it — the process was closer to cake batter than to short dough.</p>
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-amber-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">You invited muffin physics to a cookie party — lots of foam, lots of water set in a fine sponge.</p>
          </div>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">What to adjust first</h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-4"><strong>Creaming.</strong> Light and fluffy is not “infinite” — stop when color lightens and texture is even.</p>
          <p className="text-base leading-relaxed text-foreground/80 mb-4"><strong>Eggs.</strong> Try one fewer white or an extra yolk swap toward chew.</p>
          <p className="text-base leading-relaxed text-foreground/80 mb-8"><strong>Leavening.</strong> Halve-teaspoon experiments beat random doubling “for puff.”</p>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Cakey and thick?</h3><p className="text-muted-foreground text-base leading-relaxed">Often the same air + structure story — see stay-thick and don&apos;t-spread if footprint is also tiny.</p></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <div className="space-y-2 text-base">
              <Link to="/cookie-science/why-cookies-are-chewy" className="block text-amber-700 hover:underline font-medium">Why cookies are chewy</Link>
              <Link to="/cookie-science/why-cookies-puff-up-too-much" className="block text-amber-700 hover:underline font-medium">Why cookies puff up too much</Link>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Try your next tweaks in CookieSensei</h2>
            <p className="text-lg text-white/90 mb-6">Model fat style and leavening before another cakey tray.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-800 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
