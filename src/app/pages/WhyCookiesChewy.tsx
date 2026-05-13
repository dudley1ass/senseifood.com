import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesChewy() {
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
            Why cookies are chewy
          </h1>
          <p className="text-xl text-muted-foreground">
            Chew is the feeling of moisture, fat, and a little gluten still willing to bend instead of snap — you build it on purpose, not by luck.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>7 min read</span>
            <span>•</span>
            <span>Intermediate</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🍪</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🍪</span>
            <div>
              <p className="font-bold text-orange-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">
                Chewy cookies hang onto water in the crumb (brown sugar and yolks help), use fat in a denser way (melted or browned butter instead of a super-aerated cream), and usually leave the oven while the center still looks shy. A little extra protein or cornstarch nudges structure without turning the whole thing into a biscuit.
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Crispy and chewy are not opposites on a dimmer switch — they are different balances of the same three forces: how much liquid stays inside, how much fat shortens the bite, and how far gluten and starch set during the bake.
          </p>

          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-amber-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">
              A chewy cookie is still a little bit of undercooked starch syrup in the middle, wrapped in enough fat and sugar that it stays flexible when cool. Push the bake until every shimmer disappears and you bought yourself crunch instead.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            What you are really tuning
          </h2>

          <p className="text-base leading-relaxed text-foreground/80 mb-6">
            <strong>Moisture retention</strong> keeps the matrix bendy; brown sugar’s molasses binds water so the crumb resists drying. <strong>Fat behavior</strong> matters because creamed butter traps air for a cakier, lighter crumb, while melted fat coats flour differently and often reads denser and more toffee-forward. <strong>Gluten level</strong> adds chew when there is enough protein to feel elastic but not so much that the cookie turns tough — bread flour or a touch of cornstarch moves that needle in opposite ways depending on the rest of the formula.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">Pushes toward chewy</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                More brown sugar, extra yolks, melted or browned butter, chilled dough for a thicker footprint, modest cornstarch, bread flour in small doses, and pulling the tray while centers are still glossy.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">Pushes toward crisp</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                More white sugar, extra egg white, well-creamed butter, cake flour or very low protein, thinner scoops, and baking until the last wet sheen is gone.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Ingredients that move the meter most
          </h2>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">Brown sugar is your humidity budget</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Molasses is hygroscopic — it holds onto water from the dough and even from the air in a sealed container — so the same bake time feels softer days later. Dark brown simply brings more molasses to the party than light brown; flavor deepens along with the moisture story.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4">Melted butter vs creamed</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Creaming whips in tiny air pockets that bake into loft; melted butter skips that aeration so the dough often settles into a denser, fudgier chew. Browned butter adds nutty Maillard notes on top of whatever happens in the oven — a cheat code for “ tastes like I tried harder.”
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-yellow-200">
            <h3 className="text-2xl mb-4">Yolks vs whites</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-0">
              Yolks bring fat and emulsifiers that read rich and pliable; whites set firmer and can lean dry. Swapping one whole egg for an extra yolk is a small change that shows up clearly in the snap-or-bend test.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Technique without the gadget worship
          </h2>

          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            <strong>Chill the dough</strong> if you want a taller disk with more soft middle — rest evens hydration and slows spread so the cookie spends less time as a thin pancake on the sheet. <strong>Pull early</strong> on purpose; carryover finishes the center. <strong>Taller scoops</strong> protect interior moisture longer than hockey pucks pressed flat. <strong>A spoon of cornstarch</strong> with all-purpose can soften the set the same way some bakery recipes do without announcing “science project.”
          </p>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">Why under-baking reads as “chewy”</h4>
            <p className="text-muted-foreground text-base leading-relaxed mb-0">
              The Maillard-brown crust is flavor; the pale center is still moisture-heavy starch and sugar that has not fully set. That gel phase is the chew. If you wait until the whole surface looks “done,” you often paid for it in lost bend.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Chewy vs crispy in one sentence?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Chewy keeps more water and fat flexible in the crumb; crispy drives water out and sets sugar harder. Brown sugar, yolks, and early pulls stack on the chewy side.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">How long will they stay chewy?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Depends on sugar mix and storage. Brown-sugar-forward cookies in a real seal can go most of a week still pleasant; a bread slice in the tub buys extra insurance.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Chewy warm, hard cold — bug or feature?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Sugar firms as it cools. If they go from bendy to brittle in the fridge, you may be low on hygroscopic sugar or over-baked relative to the thickness you scooped.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does long chill really matter?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Overnight (or longer) evens moisture, relaxes dough handling, and concentrates flavor — not mandatory for chew, but one of the highest ROI habits for texture and taste together.
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
            <h2 className="text-3xl mb-4">Preview tweaks in CookieSensei</h2>
            <p className="text-lg text-white/90 mb-6">
              Slide sugar and fat before you bake another test tray — faster than guessing from the same recipe card every time.
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
