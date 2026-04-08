import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function HowToDebugCookieBatchIssues() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cookie Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            How to Debug Cookie Batch Issues
          </h1>
          <p className="text-xl text-muted-foreground">
            When the tray comes out wrong—too thin, too thick, uneven, or weirdly textured—use this decision tree before you throw out the formula.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>7 min read</span>
            <span>•</span>
            <span>Practical</span>
          </div>
        </header>

        <div className="w-full h-72 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl" aria-hidden>
            🍪
          </span>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🔍</span>
            <div>
              <p className="font-bold text-amber-900 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 leading-relaxed">
                Split cookie failures into <strong>spread</strong>, <strong>structure</strong>, <strong>browning</strong>, and{' '}
                <strong>mouthfeel</strong>. Note butter temp, chill, and whether the whole sheet failed the same way. Then
                open <Link to="/fix-recipe" className="text-amber-800 font-medium underline">Fix My Recipe</Link> on
                Cookie + the closest problem and add grams if you can.
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Cookies are honest: they show fat mobility, sugar behavior, and gluten development in one thin disk. Debugging
            is faster when you name the <em>family</em> of symptom first, then read deep-dives only for that branch.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Symptom → what usually moved
          </h2>
          <div className="space-y-4 my-8">
            {[
              [
                'Spreads like a pancake',
                'Warm dough or soft butter, high sugar mobility, low structure—chill and/or slightly more flour on the next test.',
              ],
              [
                'Barely moves / hockey pucks',
                'Low fat vs flour, over-flour measure, or dough too cold to flow before set.',
              ],
              [
                'Edges done, center raw',
                'Pan/oven coupling—try smaller scoop, lighter pan, or longer gentler bake.',
              ],
              [
                'Uniform disappointment across the sheet',
                'Measurement or temperature (oven or butter)—not “bad luck.” Verify scale and thermometer.',
              ],
            ].map(([title, body]) => (
              <div key={title} className="bg-white rounded-xl p-5 border border-amber-100 shadow-sm">
                <h3 className="font-semibold text-amber-900 mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Tie-in with Fix My Recipe
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Enter flour, butter, and total sugars in grams if your recipe lists them. The debugger flags{' '}
            <em>low vs high fat vs flour</em> style ratios that often explain spread surprises—then pairs them with the
            same rules you&apos;d reason through by hand, only faster.
          </p>

          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl p-8 my-12 text-center">
            <p className="mb-4 text-white/95">Debug this batch in the app</p>
            <Link to="/fix-recipe?category=cookie" className="inline-flex rounded-xl bg-white text-amber-900 font-semibold px-8 py-3">
              Open Fix My Recipe — Cookies →
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">One cookie weird or the whole sheet?</h3>
                <p className="text-muted-foreground text-sm">
                  Singles point to scoop shape or oven hot spots; uniform issues point to formula or process temperature.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Do I need a scale?</h3>
                <p className="text-muted-foreground text-sm">
                  Highly recommended for repeatability. Volume flour is the #1 silent variable between “your” cookie and the
                  author&apos;s.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <div className="space-y-3 text-sm font-medium">
              <Link to="/cookie-science/why-cookies-spread" className="block text-amber-800 hover:underline">
                → Why cookies spread
              </Link>
              <Link to="/cookie-science/why-cookies-spread-too-much" className="block text-amber-800 hover:underline">
                → Why cookies spread too much
              </Link>
              <Link to="/cookie-science/why-cookies-dont-spread" className="block text-amber-800 hover:underline">
                → Why cookies don&apos;t spread
              </Link>
              <Link to="/baking-science/how-to-use-fix-my-recipe" className="block text-amber-800 hover:underline">
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
