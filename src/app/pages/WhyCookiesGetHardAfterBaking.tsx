import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesGetHardAfterBaking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-stone-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent">Why cookies get hard after baking</h1>
          <p className="text-xl text-muted-foreground">Soft from the oven then rock-like later is almost always moisture walking out the door — plus sugar crystallizing as it cools.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Beginner friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-stone-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🪨</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🪨</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">Cookies firm as they cool because sugar sets and water migrates. If they turn unpleasantly hard, you likely over-baked slightly, used mostly white sugar, or left them uncovered in dry air. Airtight storage with a little brown sugar in the formula — or a bread slice in the tub — keeps chew longer.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">This is the “stale fast” story more than the “burned” story — same word hard, different clock.</p>
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-amber-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">Think of the crumb as wet sugar glass. The oven drives off water; the room pulls more unless you put a lid on it.</p>
          </div>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent">What accelerates staling</h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">Thin cookies have less interior moisture bank. Low humidity days and fridge storage (without sealed wrap) both speed hardness.</p>
          <p className="text-base leading-relaxed text-foreground/80 mb-8">Pull a touch earlier next batch if edges are already crisp when warm.</p>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Hard immediately?</h3><p className="text-muted-foreground text-base leading-relaxed">That is bake-through, not staling — shorten time or lower temp.</p></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <div className="space-y-2 text-base">
              <Link to="/cookie-science/why-cookies-turn-hard" className="block text-amber-700 hover:underline font-medium">Why cookies turn hard</Link>
              <Link to="/cookie-science/why-cookies-lose-freshness-overnight" className="block text-amber-700 hover:underline font-medium">Why cookies lose freshness overnight</Link>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-600 to-stone-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Soften the formula in CookieSensei</h2>
            <p className="text-lg text-white/90 mb-6">Shift sugar and bake targets before another overnight disappointment.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-900 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
