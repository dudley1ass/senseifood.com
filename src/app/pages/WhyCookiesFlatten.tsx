import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesFlatten() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cookie science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Why cookies flatten
          </h1>
          <p className="text-xl text-muted-foreground">
            Thin disks usually mean the butter race started too early — the dough flowed before the edges had anything firm to stand on.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Beginner friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-amber-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🫓</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🫓</span>
            <div>
              <p className="font-bold text-orange-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">
                Flat cookies almost always mean fat melted and sugar moved while the structure was still soft — warm butter, warm dough, or not quite enough flour for the fat load. Chill scooped dough at least half an hour, bake on parchment not extra grease, and measure flour by weight once so you know your “cup” is not secretly a brick.
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Spread is not a moral failure; it is physics on a sheet pan. When melting wins the first few minutes, you get a frisbee. When setting wins, you get a puck with a tender middle. Flattening is the melting team pulling ahead.
          </p>

          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-amber-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">
              Picture butter as a doorstop holding the dough up. Warm butter is a puddle — nothing props the cookie until too late. Cold butter buys you minutes so the rim can set while the center is still deciding what shape to be.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            What “flatten” is really measuring
          </h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-5">
            Two teams race: spreading forces (liquid fat, dissolved sugar) versus setting forces (egg and flour proteins firming, starch swelling). If the oven is slow to set the outside, or the dough entered already half-melted, you get a wide footprint. Leavening still adds pockets, but sideways flow dominates the look.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-8">
            A too-cool oven can paradoxically flatten as well — fat has more time to flow before the starches set — so “flat” is not only “too hot”; it is often “structure too slow for how fast the fat moved.”
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            The usual suspects (and what to try next bake)
          </h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            <strong>Butter temperature.</strong> Soft enough to leave a smear is usually too soft for thick drop cookies. Aim for cool room temp: still bends, still holds its shape when cubed. If you nuked it or the kitchen is tropical, rest the mixed dough in the fridge before scooping.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            <strong>Flour measure.</strong> Packed cups sneak in extra starch that should have read as “less spread,” but wildly mis-measured dough can also go slack if fat dominates — the honest fix is a scale: about 120–125 g per cup of AP for most formulas.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            <strong>Pan prep.</strong> Greasing adds slip and free fat under the cookie. Parchment or a mat adds a little friction and a cleaner bake. Never put dough on a hot sheet from the last batch unless you want instant puddle mode.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-8">
            <strong>Dead leavening</strong> steals upward puff; the same butter still flows sideways, so the cookie reads extra thin. If your soda is old, replace it — fizz in vinegar is a quick sanity check.
          </p>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">Oven heat is part of the story</h4>
            <p className="text-base text-muted-foreground leading-relaxed mb-0">
              Preheat fully so the edge sets while the middle still has options. If you are baking pale and wide, try a slightly higher temperature or a rack closer to the steady heat source — one change at a time, note the result.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why pancake cookies?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Almost always warm fat plus insufficient chill. Second place: greased pan and very white-sugar-heavy dough that liquefies early.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does more sugar make them flatter?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  White sugar loves to dissolve and flow. Brown sugar holds water and often thickens the party — swapping part of the white for brown is a classic fix when spread is the only complaint.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Center of the tray flattens more — why?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Thermal mass: middles stay warmer, edges radiate heat faster. Cool the sheet between batches or rotate front to back so every mound sees a similar timeline.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does baking soda flatten?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  It changes pH and set timing; in some doughs it increases spread and browning. Measure carefully and adjust flour or chill if soda is the only variable you touched.
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
              <Link to="/cookie-science/brown-sugar-vs-white-sugar" className="block text-amber-700 hover:underline font-medium">
                Brown sugar vs white sugar
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Preview spread in CookieSensei</h2>
            <p className="text-lg text-white/90 mb-6">
              Shift butter and sugar on paper before you spend another stick of butter finding the same puddle.
            </p>
            <a
              href="https://cookiesensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
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
