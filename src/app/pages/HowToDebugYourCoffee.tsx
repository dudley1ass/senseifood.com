import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function HowToDebugYourCoffee() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-yellow-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-600 to-amber-800 text-white px-4 py-2 rounded-full text-sm mb-6">
            Coffee Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-stone-800 to-amber-800 bg-clip-text text-transparent">
            How to Debug Your Coffee
          </h1>
          <p className="text-xl text-muted-foreground">
            Bitter, sour, weak, and hollow cups usually come from a small set of extraction mistakes. Here&apos;s how to name what you taste and what to move first.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>7 min read</span>
            <span>•</span>
            <span>Practical</span>
          </div>
        </header>

        <div className="w-full h-72 bg-gradient-to-br from-stone-200 to-amber-200 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl" aria-hidden>
            ☕
          </span>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-600 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">📉</span>
            <div>
              <p className="font-bold text-amber-950 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 leading-relaxed">
                Classify the cup: <strong>bitter/dry</strong> usually means push too hard on extraction;{' '}
                <strong>sour/thin</strong> often means not enough; <strong>weak</strong> is dose vs water. Change one brew
                lever per session (grind, time, temperature, or ratio). Fix My Recipe&apos;s coffee mode matches those
                buckets to starter moves.
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Espresso, pour-over, and immersion share the same vocabulary: strength (TDS) and extraction yield. You don&apos;t
            need lab gear to debug—taste already points left or right on those axes.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-800 to-amber-800 bg-clip-text text-transparent">
            Taste map → first lever
          </h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-amber-200 text-left text-amber-950">
                  <th className="py-3 pr-4">You taste</th>
                  <th className="py-3 pr-4">Likely direction</th>
                  <th className="py-3">Try first</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground divide-y divide-amber-100">
                <tr>
                  <td className="py-3 font-medium text-foreground">Harsh bitter / dry finish</td>
                  <td className="py-3">Over-extracting or too-fine grind</td>
                  <td className="py-3">Coarsen slightly or shorten contact</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-foreground">Sour / sharp / salty acidity</td>
                  <td className="py-3">Under-extracting</td>
                  <td className="py-3">Finer grind or longer brew within reason</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-foreground">Weak / tea-like</td>
                  <td className="py-3">Low strength</td>
                  <td className="py-3">More dose or less water</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-foreground">Flat / cardboard</td>
                  <td className="py-3">Staling or water—outside pure extraction</td>
                  <td className="py-3">Fresh grind, check bypass and filter water</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-800 to-amber-800 bg-clip-text text-transparent">
            Use Fix My Recipe as a tasting translator
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Select Coffee → the problem that matches your vocabulary. The findings restate the same physics our extraction
            articles cover—use them when you want a checklist instead of scrolling.
          </p>

          <div className="bg-gradient-to-r from-stone-700 to-amber-800 text-white rounded-2xl p-8 my-12 text-center">
            <p className="mb-4 text-white/95">Debug in coffee mode</p>
            <Link to="/fix-recipe?category=coffee" className="inline-flex rounded-xl bg-white text-amber-950 font-semibold px-8 py-3">
              Open Fix My Recipe — Coffee →
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Change grind and dose together—bad idea?</h3>
                <p className="text-muted-foreground text-sm">
                  For debugging, yes. Move grind OR dose, taste, log it, then compose later once you know each lever&apos;s
                  signature.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">My machine is locked in—what then?</h3>
                <p className="text-muted-foreground text-sm">
                  Use yield/time as your lever on espresso; bloom and pour rate on manual brew—still one variable at a time.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <div className="space-y-3 text-sm font-medium">
              <Link to="/coffee-science/coffee-extraction-science" className="block text-amber-900 hover:underline">
                → Coffee extraction science
              </Link>
              <Link to="/coffee-science/why-coffee-tastes-bitter" className="block text-amber-900 hover:underline">
                → Why coffee tastes bitter
              </Link>
              <Link to="/coffee-science/why-coffee-tastes-sour" className="block text-amber-900 hover:underline">
                → Why coffee tastes sour
              </Link>
              <Link to="/coffee-science/why-coffee-tastes-weak" className="block text-amber-900 hover:underline">
                → Why coffee tastes weak
              </Link>
              <Link to="/baking-science/how-to-use-fix-my-recipe" className="block text-amber-900 hover:underline">
                → How to use Fix My Recipe
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
