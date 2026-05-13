import { ArrowLeft, Thermometer, Droplet, Beaker, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesSpread() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50">
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
            Cookie science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Why cookies spread
          </h1>
          <p className="text-xl text-muted-foreground">
            Spread is not a moral failing — it is butter going liquid, sugar melting, and structure setting on a timer. Once you see the race, you can steer it.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>5 min read</span>
            <span>•</span>
            <span>Beginner friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🍪</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🍪</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">
                Cookies spread because fat melts and flows before the flour proteins and starches firm up enough to stop the flow. Chilling the dough — often half an hour to an hour for scooped dough — is the simplest way to delay that melt so the cookie sets thicker.
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Whether you want a paper-thin lace cookie or a tall bakery-style disk, you are really tuning how fast the dough liquefies versus how fast it sets. Same oven, same scoop — butter temperature and sugar behavior usually explain the difference batch to batch.
          </p>

          <div className="bg-orange-50/80 border border-orange-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-orange-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">
              Picture hot butter on a skillet: it runs. A cookie is that skillet moment happening in miniature. Your job is to either keep the butter solid longer (chill, cold butter) or accept the flow and lean into a thin, snappy cookie (melted butter, more white sugar).
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Three moments in the oven
          </h2>

          <p className="text-base leading-relaxed text-foreground/80 mb-6">
            Spread is not one switch flipping; it is a sequence. Fat softens first, then leavening and steam push the dough outward, then proteins coagulate and starches gelatinize so the footprint freezes. Recipes that spread too far usually have the first phase winning by too much.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Melting and flow</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                As the dough crosses warm-cookie territory, solid fat becomes liquid fat. That is when the circle on the sheet starts widening.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Lift and push</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Steam and leavening gases swell pockets in the still-soft dough, which can read as puff or as outward creep depending on how strong the gluten matrix is.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Beaker className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Setting</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Once proteins set and the crumb structure firms, the cookie stops slumping. Higher heat often sets the edges earlier, which can cap spread compared with a long, cool bake.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            What moves the needle most
          </h2>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Droplet className="w-7 h-7 text-amber-600" />
              Butter temperature and texture
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Cold butter pieces melt later, so structure has a head start. Room-temperature creamed butter traps air and still flows — expect more spread than a chilled disk recipe. Fully melted butter coats flour differently and often yields the thinnest, widest cookies in a given formula because there is no solid fat left to delay the puddle phase.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-0">
              If your goal is thick and chewy, err colder; if you want lacy edges, lean melted and accept the footprint.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Beaker className="w-7 h-7 text-orange-600" />
              Sugar is not just sweet — it is a melting dial
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Brown sugar brings molasses and holds onto water, which tends to keep cookies moister and can modestly rein in spread compared with an all-white-sugar batch at the same fat level. White sucrose dissolves and participates in spread and crispness differently; swapping ratios is one of the fastest ways to change diameter without touching oven temp.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-0">
              Think of brown sugar as a brake pedal on pure liquidity, not a magic wall — if butter is hot enough long enough, anything spreads.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 my-8 border-2 border-pink-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-pink-600" />
              Leavening and pH tweak the set time
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Baking soda raises pH, which can encourage faster browning and sometimes more spread because the dough sets a little differently under alkaline conditions. Baking powder brings its own acids and often behaves more “lift then hold” in many drop-cookie formulas, though the exact effect depends on the rest of the recipe.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-0">
              If you change leavening to fix color, expect footprint to come along for the ride — adjust flour or chill if the spread overshoots.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Flour, eggs, pan, and heat — secondary levers
          </h2>

          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            More flour (or a higher-protein flour) builds structure that resists flow. Egg whites set firmer than yolks alone; extra yolk fat can read as tenderness with a different spread curve. A greased pan is slipperier than parchment; silicone mats can reduce spread slightly versus bare metal depending on the dough.
          </p>

          <p className="text-base leading-relaxed text-foreground/80 mb-8">
            Oven temperature nudges how quickly the edges set: a hotter bake can lock the rim while the center is still soft, which sometimes looks like “less spread” on the sheet even though chemistry is the same — you simply froze the outline earlier.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            At a glance: wider vs thicker
          </h2>

          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 my-8">
            <table className="w-full text-base">
              <thead>
                <tr className="border-b-2 border-amber-300">
                  <th className="text-left py-3 text-amber-800">More spread</th>
                  <th className="text-left py-3 text-orange-800">Less spread</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-200 text-muted-foreground">
                <tr>
                  <td className="py-3">Melted or very soft butter</td>
                  <td className="py-3">Chilled dough; cooler butter</td>
                </tr>
                <tr>
                  <td className="py-3">More white sugar</td>
                  <td className="py-3">More brown sugar</td>
                </tr>
                <tr>
                  <td className="py-3">Less flour / softer dough</td>
                  <td className="py-3">A touch more flour (measure consistently)</td>
                </tr>
                <tr>
                  <td className="py-3">Greased metal</td>
                  <td className="py-3">Parchment or mat</td>
                </tr>
                <tr>
                  <td className="py-3">Lower temp, longer bake</td>
                  <td className="py-3">Slightly higher temp to set edges</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why did my cookies merge into one lake?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Usually butter was too warm, dough was not chilled, or the portion size is large for the spacing on the pan. Chill scooped dough and leave more air between mounds before baking.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why uneven spread?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Oven hot spots, uneven scooping, or a domed ball with a flat side all start flowing from different shapes. Rotate the sheet halfway through if your oven maps unevenly.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does parchment change spread?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  It can — less slip than a greased pan, and heat transfer differs slightly from bare aluminum. Track results with one variable at a time.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Same recipe, different spread each week?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Butter temperature is the usual culprit. A few degrees changes how fast the fat phase becomes fully liquid. Aim for a consistent softening method and room temp if you need repeatability.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <div className="space-y-2 text-base">
              <Link to="/cookie-science/why-cookies-are-chewy" className="block text-amber-700 hover:underline font-medium">
                Why cookies are chewy
              </Link>
              <Link to="/cookie-science/why-cookies-get-crispy" className="block text-amber-700 hover:underline font-medium">
                Why cookies get crispy
              </Link>
              <Link to="/cookie-science/why-cookies-flatten" className="block text-amber-700 hover:underline font-medium">
                Why cookies flatten
              </Link>
              <Link to="/cookie-science/brown-sugar-vs-white-sugar" className="block text-amber-700 hover:underline font-medium">
                Brown sugar vs white sugar
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Try it in CookieSensei</h2>
            <p className="text-lg text-white/90 mb-6">
              Adjust butter, sugars, and leavening in a sandbox before you preheat — useful when you are chasing a specific diameter or thickness.
            </p>
            <a
              href="https://cookiesensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
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
