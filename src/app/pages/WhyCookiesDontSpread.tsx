import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesDontSpread() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cookie science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
            Why cookies don&apos;t spread
          </h1>
          <p className="text-xl text-muted-foreground">
            Domed knobs that never settle usually mean the dough never got liquid enough, fast enough — flour, cold, or heat set the outside before fat could flow.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Beginner friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🧱</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🧱</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">
                No spread almost always means too much structure for the available melt — packed flour is the classic, rock-hard chilled dough is the second, and a screaming-hot oven that skins the outside before the middle warms is the third. Weigh flour (~120 g per cup AP), let frozen scoops temper a few minutes, or gently press balls flat before baking to cheat the first mile of flow.
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Spread is how drop cookies announce that butter and sugar did their job. When nothing moves, flavor and texture often stay stuck in “muffin top audition” territory — fine if you wanted cakey, frustrating if you wanted a classic disk.
          </p>

          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-amber-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">
              The cookie has to go soft before it goes wide. If flour is a brick wall or the oven armor-plates the outside in sixty seconds, the middle never reaches the “okay, flow now” chapter.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
            Why a little spread is part of the design
          </h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-8">
            Even half an inch of outward motion builds the thin edge that crisps and concentrates flavor. Zero spread often reads as under-browned, tall, and oddly dense — not because you failed morally, but because the timeline never reached the melt-and-set dance.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
            What to change, in order of likelihood
          </h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            <strong>Flour weight.</strong> If you scoop from the bag, you may be running 20–30% heavy without noticing. A scale ends the argument.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            <strong>Cold vs strategy.</strong> Long fridge rests are great for flavor and controlled spread, but baking from ice-cold centers can freeze the footprint. Temper slightly or flatten.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            <strong>Creaming and butter temp.</strong> Under-creamed cold butter can leave dense streaks; you still need workable plasticity so sugar can punch air pockets for lift. Follow the recipe’s intended butter style — melted-dough and creamed-dough spread differently by design.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            <strong>Oven too hot at the start.</strong> A crust that sets instantly hides a cold interior — lower the temp 25°F and add a minute rather than chasing color with blast heat.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-8">
            <strong>Brown sugar and leavening.</strong> Very brown-sugar-heavy doughs resist flow; excess chemical leavening puffs upward instead of outward. Adjust in small steps, one variable per bake.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-xl mb-3 text-center">Gentle nudge: press before bake</h3>
            <p className="text-base text-muted-foreground leading-relaxed text-center mb-0">
              If you are mid-batch and suspicious, slightly flatten each mound — you are manually starting the spread the oven was not going to finish in time.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Still domes after fixing flour?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Look at oven temp and leavening next — then fat style (melted vs creamed). Bread flour slightly resists spread versus AP but is rarely the main character.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can I add liquid to force spread?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  A spoon of milk can help in some formulas, but it is easy to over-soften. Prefer measured flour correction first.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Frozen dough balls — rule of thumb?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Let the outside wake up enough to bake evenly; the center can still be cold, but the edges should not be ice.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why balls even after full bake time?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Exterior set too fast for interior flow — lower temp, thinner pre-press, or less flour.
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
              <Link to="/cookie-science/why-chilling-cookie-dough-matters" className="block text-amber-700 hover:underline font-medium">
                Why chilling cookie dough matters
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Dial spread before the oven</h2>
            <p className="text-lg text-white/90 mb-6">
              CookieSensei helps when you are bouncing between “puddle” and “golf ball” and want a middle ground.
            </p>
            <a
              href="https://cookiesensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
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
