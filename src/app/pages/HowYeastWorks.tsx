import { ArrowLeft, Thermometer, Clock, Sparkles, FlaskRound } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function HowYeastWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Fermentation science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            How yeast works in baking
          </h1>
          <p className="text-xl text-muted-foreground">
            The same organism powers sandwich bread and croissants — here is what it is eating, what it is exhaling, and why temperature is the boss.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>5 min read</span>
            <span>•</span>
            <span>Beginner friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-green-200 to-emerald-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🧫</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-emerald-50 border-l-4 border-emerald-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🦠</span>
            <div>
              <p className="font-bold text-emerald-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">
                Baker&apos;s yeast is a living fungus that ferments sugars into carbon dioxide and ethanol. The CO₂ inflates gluten; the ethanol mostly bakes off but leaves its mark on aroma. Treat it like a pet: feed it sugar, keep it warm but not scalding — water much above about 140°F (60°C) is lethal.
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Most home bakers use <em>Saccharomyces cerevisiae</em>, literally a sugar-eating yeast. You will never see individual cells without a microscope, but you taste their work in every airy crumb and in the subtle tang of a long ferment.
          </p>

          <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-emerald-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">
              Think of yeast as billions of tiny cooks exhaling into your dough. If the kitchen is comfortable for you in a T-shirt, they are usually busy. If you pour boiling water on them, the shift ends immediately.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            What yeast is actually doing in the bowl
          </h2>

          <p className="text-base leading-relaxed text-foreground/80 mb-6">
            Flour brings starch, which enzymes break into simpler sugars over time; you might also add sugar, honey, or milk that feed yeast directly. As those sugars are consumed, fermentation produces gas for lift and a soup of organic acids and esters for flavor — the longer and calmer the ferment (within reason), the more interesting that soup tends to get.
          </p>

          <div className="bg-white rounded-2xl p-8 my-8 shadow-lg border-2 border-green-200">
            <h3 className="text-xl mb-4 flex items-center gap-3">
              <FlaskRound className="w-6 h-6 text-green-600" />
              Why the Latin name is on the bag
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              <strong className="text-green-700">Saccharomyces cerevisiae</strong> is the workhorse of bread and most beer because it is reliable at dough pH and temperature. Different strains and preparations (fresh, active dry, instant) change how fast it wakes up, not the basic chemistry story.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            The three outputs you should care about
          </h2>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💨</span>
              </div>
              <h3 className="text-xl mb-3">Carbon dioxide</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                This is mechanical rise: gas dissolves and nucleates in the dough until gluten traps it as visible bubbles.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🍷</span>
              </div>
              <h3 className="text-xl mb-3">Ethanol</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                A normal byproduct of fermentation; most leaves as vapor during baking. Before that, it contributes to aroma alongside other volatiles.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Flavor chemistry</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Organic acids and other trace molecules are why a 24-hour cold dough tastes richer than a 45-minute rush job at the same recipe weight.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Time builds flavor, not just size
          </h2>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Clock className="w-7 h-7 text-amber-600" />
              Slow vs fast ferments
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Sourdough and long-fermented lean doughs get their depth partly from bacteria and acids, but even straight commercial-yeast doughs change character when you park them in the fridge overnight: yeast activity slows, enzymes keep working, and flavors mingle instead of racing to CO₂ alone. Pizza makers cold-ferment for days for the same reason — not because the dough forgot how to be dough, but because time stacks nuance.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Temperature is the throttle (and the kill switch)
          </h2>

          <p className="text-base leading-relaxed text-foreground/80 mb-6">
            Yeast is a chemical machine whose reaction rate depends on heat. Cold mostly slows it; a warm counter speeds it; too hot and you denature the cells before they pay rent in the form of gas.
          </p>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-red-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Thermometer className="w-7 h-7 text-red-600" />
              Reading the zones without a spreadsheet
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Below about 50°F (10°C), yeast is sleepy — perfect for slowing things down in the fridge. Roughly 75–95°F (24–35°C) is the enthusiastic home-baker band where dough doubles at a pace you can plan around. Approaching body temperature, fermentation can get noisy and a little sloppy: lots of gas, less finesse. Once dough passes about 140°F (60°C) in the oven, yeast is done — which is why oven spring is a sprint that ends when the interior sets.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Active dry, instant, and fresh — same yeast, different packaging
          </h2>

          <p className="text-base leading-relaxed text-foreground/80 mb-6">
            Manufacturers process the same species into granules with different moisture levels and coatings. Active dry traditionally likes blooming in liquid; instant is milled finer and is usually happy mixed straight into flour. Fresh yeast is perishable but some bakers swear by its flavor in certain formulas. Follow your packet for substitution ratios rather than eyeballing volume one-for-one.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl mb-3">Active dry</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Often bloomed first to prove viability; dissolving in lukewarm water wakes the cells evenly.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl mb-3">Instant</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Convenient and quick; can be mixed dry with flour. Still obeys the same temperature rules.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-teal-200">
              <div className="text-4xl mb-4">🧊</div>
              <h3 className="text-xl mb-3">Fresh (cake)</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Soft blocks kept cold; crumble and dissolve or cream per recipe. Check dates — it fades faster than dry.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">What does yeast do in bread?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  It ferments sugars to CO₂ and ethanol; the gas is trapped by gluten and leavens the loaf. Aromas evolve throughout proofing and baking.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does dough need to rest?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Time lets yeast produce enough gas for volume, lets gluten relax so the dough does not spring back when shaped, and gives enzymes space to create more fermentable sugar from starch.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">What kills yeast?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Very hot liquid, prolonged oven heat, and sometimes careless salt contact in a concentrated pile. Old or improperly stored yeast may simply be inactive from age.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Active dry vs instant?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Mostly particle size and whether the manufacturer expects a bloom step. Both are S. cerevisiae; follow the brand&apos;s hydration instructions when converting recipes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <Link
              to="/bread-science/why-bread-rises"
              className="block text-amber-700 hover:underline text-base font-medium"
            >
              Why bread rises
            </Link>
          </div>

          <p className="text-base leading-relaxed text-foreground/80 my-12">
            If you remember one thing: yeast is alive, sugar is fuel, temperature is the gas pedal, and the oven is the off switch. Everything else is tuning those four knobs.
          </p>

          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-10 text-white my-16 shadow-2xl">
            <h3 className="text-3xl mb-4">Play with time and warmth</h3>
            <p className="text-white/90 mb-6 text-lg">
              Same formula, different proofing temperature, is one of the clearest experiments you can run in your own kitchen.
            </p>
            <a
              href="https://beansensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Explore more tools →
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
