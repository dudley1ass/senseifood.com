import { ArrowLeft, Clock, Droplet, Thermometer } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesHard() {
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
            Cookie science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Why cookies turn hard
          </h1>
          <p className="text-xl text-muted-foreground">
            Rock-hard cookies are almost always a moisture story — either you drove water out in the oven, or the air stole it afterward.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Beginner friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🍪</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🪨</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">
                Cookies go hard when too little water stays bound in the crumb — from over-baking, low brown sugar, heavy flour, or dry storage. Pull the tray when centers still look a shade underdone, favor some brown sugar for hygroscopic molasses, and seal cooled cookies quickly; a slice of bread in the tub really does help.
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Staling is not “spoiled”; it is mostly moisture moving toward equilibrium with your kitchen. A cookie that felt perfect at noon can audition as a hockey puck by morning if it sat uncovered on the counter.
          </p>

          <div className="bg-orange-50/80 border border-orange-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-orange-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">
              Think of softness as water trapped in sugar and starch. Baking too long boils that water off; leaving the lid off lets the desert air pull it out. Your job is to keep a little water on the payroll, then guard it in a sealed box.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Two different “hard,” two different fixes
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Hard right out of the oven</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                That is over-baking or an oven that runs hot. Sugar sets glassy, proteins firm, and there is not enough residual water for a tender chew. Remember carryover: the sheet keeps cooking after you open the door.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Crisped up overnight</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                That is moisture migration — vapor leaves the cookie for dry air. White-sugar-heavy recipes and thin cookies lose water faster. A tight lid slows the loss dramatically.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            What usually pulls the moisture out
          </h2>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 my-8 border-2 border-blue-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Droplet className="w-7 h-7 text-blue-600" />
              Bakers’ levers you can actually turn
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Over-measured flour is a classic hidden dryness source — packed cups hydrate “dry” and set firm. Too little fat for the sugar load also reads as brittle. All-white sugar bakes crisp by design; brown sugar’s molasses hangs onto water so the crumb stays bendy longer. Winter heat and low humidity accelerate staling even when the bake was perfect.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-0">
              If you want insurance on texture, a spoon or scale for flour and at least partial brown sugar beats guessing every time.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Keeping batches tender
          </h2>

          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            Cool cookies fully before sealing — warm cookies steam inside a tub and can turn oddly wet-then-tough. Once cool, move them to a container that actually seals. A slice of sandwich bread sacrifices itself so the cookies stay pliant; swap the bread when it goes rock hard.
          </p>

          <p className="text-base leading-relaxed text-foreground/80 mb-8">
            For longer storage, freeze in a bag with air pressed out; room-temp staling basically pauses in the freezer. Thaw uncovered on a rack so condensation does not glue the tops.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Rescuing cookies that already went hard
          </h2>

          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            The bread-in-container trick overnight moves moisture back into the crumb gently. A very short microwave with a damp towel on top trades texture for immediacy — great for eating now, not for keeping.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why are they hard immediately after baking?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  You likely baked past the window where the center still had movable moisture. Edges can look “right” while the middle is already setting firm — start checking a minute or two early next batch.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does flour type matter?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Higher protein can mean a firmer set. All-purpose is the usual choice; a touch of cornstarch with AP can soften the bite in some formulas without changing flavor much.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why do brown-sugar cookies stay softer?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Molasses is hygroscopic — it binds water the way salt pulls it on a smaller scale — so the crumb resists drying compared with pure white sugar at the same bake.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Will bread in the container make them taste like bread?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  No flavor swap if you do not stack them touching; the water vapor moves, not the bread crust. Use plain white bread without strong seeds or herbs if you are picky.
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
              <Link to="/cookie-science/why-cookies-are-chewy" className="block text-amber-700 hover:underline font-medium">
                Why cookies are chewy
              </Link>
              <Link to="/cookie-science/why-cookies-get-crispy" className="block text-amber-700 hover:underline font-medium">
                Why cookies get crispy
              </Link>
              <Link to="/cookie-science/brown-sugar-vs-white-sugar" className="block text-amber-700 hover:underline font-medium">
                Brown sugar vs white sugar
              </Link>
            </div>
          </div>

          <p className="text-base leading-relaxed text-foreground/80 my-12">
            Softer cookies are less about one secret ingredient and more about guarding water — in the dough, through the bake, and on the counter afterward.
          </p>

          <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-10 text-white my-16 shadow-2xl">
            <h3 className="text-3xl mb-4">Dial in texture with CookieSensei</h3>
            <p className="text-white/90 mb-6 text-lg">
              Tweak sugar ratios, bake targets, and hydration before you commit another stick of butter.
            </p>
            <a
              href="https://cookiesensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-amber-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Try CookieSensei →
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
