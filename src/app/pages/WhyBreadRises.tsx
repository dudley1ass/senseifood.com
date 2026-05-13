import { ArrowLeft, Wind, Thermometer, FlaskConical, Wheat } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyBreadRises() {
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Bread Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Why Bread Rises
          </h1>
          <p className="text-xl text-muted-foreground">
            From a shaggy lump to a tall loaf: what yeast, gluten, and heat are actually doing while you wait.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Beginner friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🍞</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-green-50 border-l-4 border-green-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">⬆️</span>
            <div>
              <p className="font-bold text-green-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">
                Yeast eats sugars in the dough and releases carbon dioxide. That gas inflates tiny pockets inside a stretchy gluten web, like blowing up a net of rubber bands. In the oven, heat makes the gas expand even more (oven spring) until the proteins set and the loaf holds its shape.
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            You do not need a biology degree to bake good bread. If you picture three players — yeast making gas, gluten holding it, and heat locking the shape — most rise problems suddenly feel less mysterious.
          </p>

          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-amber-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">
              Think of gluten as bubble wrap around microscopic balloons. Yeast keeps adding air to the balloons. If the wrap is strong and elastic, the loaf puffs up evenly. If the wrap is weak or torn, gas escapes and you get a dense crumb or a collapsed middle.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            What the dough is made of (and why it matters)
          </h2>

          <p className="text-base leading-relaxed text-foreground/80 mb-6">
            Flour and water are doing more than “sticking things together.” Water wakes up two proteins in wheat — glutenin and gliadin — which link into long, elastic gluten strands. Salt tightens that network and reins in yeast so fermentation does not run away. Yeast is alive: it snacks on sugars from flour and any sweetener you add, and its waste products are exactly what bakers want.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                <Wheat className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Flour</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Those wheat proteins, once hydrated and kneaded, form the stretchy gluten that traps gas. Without enough development or rest, the dough cannot hold a good rise.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl mb-3">Water</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Hydration starts gluten formation and keeps yeast comfortable enough to work. Too dry and fermentation crawls; too wet can be harder to shape but often yields an open crumb.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Yeast</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                These single-celled fungi turn sugars into CO₂, a little alcohol, and a pile of flavor molecules you taste as “bready” or tangy, depending on time and temperature.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🧂</span>
              </div>
              <h3 className="text-xl mb-3">Salt</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Salt strengthens gluten and slows yeast slightly, which usually means better flavor because the dough ferments on a calmer timeline. It belongs in the mix, not sprinkled straight onto dry yeast.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Fermentation: where the bubbles come from
          </h2>

          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-yellow-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Wind className="w-7 h-7 text-yellow-600" />
              What yeast leaves behind
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              As yeast ferments, carbon dioxide collects in the gluten matrix — that is the mechanical rise you see in the bowl. Alcohol forms too; most of it bakes off, but it still shapes aroma during proofing. Alongside those, organic acids and esters build the difference between a bland same-day loaf and something that tastes like it had time to think.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            How gluten holds the rise
          </h2>

          <p className="text-base leading-relaxed text-foreground/80 mb-6">
            Gluten is not a single ingredient you pour from a bag; it is a structure you develop by mixing and time. A well-developed dough feels smooth and elastic: it can stretch without tearing immediately, which is exactly what you want so expanding gas does not find weak spots and burst through.
          </p>

          <div className="bg-white rounded-2xl p-8 my-8 shadow-lg border-2 border-amber-200">
            <h3 className="text-xl mb-4">Why “strong” gluten feels different</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Strong gluten traps more gas before the walls thin out, which usually means taller bread and a chewier bite. If gluten is underdeveloped or over-oxidized from endless machine mixing, you can get poor volume or a tight crumb — opposite problems, same underlying idea: the network and the gas have to stay in balance.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Oven spring: the last big puff
          </h2>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Thermometer className="w-7 h-7 text-orange-600" />
              What happens in the first minutes of baking
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Heat wakes yeast up one last time, so CO₂ production spikes right as the gas inside each pocket also expands from temperature — that one-two punch is oven spring. Steam in the dough adds pressure too. In a good loaf you can sometimes see a visible jump in height early in the bake before the crust sets.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-0">
              That early burst can add a surprising amount of volume — often cited on the order of a third or more for some breads — which is why under-proofed dough sometimes still looks okay until it stalls, and why scoring gives steam a planned escape route instead of a random blowout.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Why rising eventually stops
          </h2>

          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            Around roughly 140°F (60°C), yeast dies, so fermentation stops. Meanwhile heat sets the protein structure: gluten coagulates, starches gelatinize, and the crumb firms enough to keep its holes. The outside dries and browns into a crust that holds the loaf’s shape. After that point, you are not “rising” anymore — you are finishing texture and flavor.
          </p>

          <p className="text-base leading-relaxed text-foreground/80 mb-10">
            Over-proofed dough can still collapse because the gluten network stretches past its elastic limit before the oven sets it — so more time is not always more rise. It is a race between gas production, gluten strength, and heat.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why did my bread not rise?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Most often the yeast never really got going: liquid that was too hot killed it, the yeast was old, or the dough sat somewhere too cold to ferment in a reasonable window. If you are unsure, blooming active dry yeast in lukewarm water with a pinch of sugar tells you quickly whether the culture is alive.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can bread rise too much?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Yes — over-proofing weakens the gluten so it cannot hold gas. The loaf may deflate in the oven, look flat, or have a coarse, uneven crumb. When the dough feels fragile and smells very sharp, you are often past the sweet spot.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does salt affect rising?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Salt slows yeast a bit, which is usually good for flavor. What hurts is dumping salt directly onto concentrated yeast; mix salt evenly into flour first so it is diluted before it meets the organisms.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does dough rise faster in a warm spot?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Yeast runs its chemistry faster in a comfortable band — often quoted around the mid-70s to low 80s °F for many breads. Too warm and you risk off-flavors or dying yeast; too cold and you wait forever for the same CO₂ budget.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <Link
              to="/bread-science/how-yeast-works"
              className="block text-amber-700 hover:underline text-base font-medium"
            >
              How yeast works in baking
            </Link>
          </div>

          <p className="text-base leading-relaxed text-foreground/80 my-12">
            Once you see rise as trapped gas inside a timed gluten clock, troubleshooting gets easier: feed the yeast, strengthen the web, give it a warm-enough stage, then hit it with enough heat to spring before you set the crumb.
          </p>

          <div className="bg-gradient-to-br from-amber-600 to-yellow-600 rounded-3xl p-10 text-white my-16 shadow-2xl">
            <h3 className="text-3xl mb-4">Keep experimenting</h3>
            <p className="text-white/90 mb-6 text-lg">
              Small changes to fermentation time and dough temperature show up clearly in the loaf — that is half the fun of bread baking.
            </p>
            <a
              href="https://beansensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-amber-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Explore more science →
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
