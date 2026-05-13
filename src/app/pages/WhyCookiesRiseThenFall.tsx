import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesRiseThenFall() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Why cookies rise then fall</h1>
          <p className="text-xl text-muted-foreground">A puff that collapses is usually gas leaving faster than the crumb could set — leavening, temperature, or under-bake at the center.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-amber-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">📉</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">📉</span>
            <div>
              <p className="font-bold text-orange-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">Too much leavening or a hot oven can dome the cookie quickly, then the foam deflates when proteins have not finished setting. Under-measured flour, very soft butter, or opening the oven door during the rise can do the same. Try less chemical leavening, slightly more structure (flour or chill), or a gentler bake until the centers set.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Cookies are not soufflés, but they still obey foam rules: if the walls are thin when steam escapes, the middle sinks.</p>
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-amber-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">You inflated a balloon before the rubber cured — it pops inward instead of holding the puff.</p>
          </div>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Levers to test one at a time</h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">Reduce baking soda/powder slightly on the next test sheet. Verify oven with a thermometer. Add chill if the dough is warm.</p>
          <p className="text-base leading-relaxed text-foreground/80 mb-8">Check mixing: under-mixed pockets can steam-burst oddly; over-mixed dough can set tough then wrinkle.</p>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Only some cookies fall?</h3><p className="text-muted-foreground text-base leading-relaxed">Scoop size or oven hot spots — rotate and standardize portions.</p></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <div className="space-y-2 text-base">
              <Link to="/cookie-science/why-cookies-puff-up-too-much" className="block text-amber-700 hover:underline font-medium">Why cookies puff up too much</Link>
              <Link to="/cookie-science/why-cookies-turn-cakey" className="block text-amber-700 hover:underline font-medium">Why cookies turn cakey</Link>
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Stabilize the puff in CookieSensei</h2>
            <p className="text-lg text-white/90 mb-6">See how leavening and flour move the structure band.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-orange-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
