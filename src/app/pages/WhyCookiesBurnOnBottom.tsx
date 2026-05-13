import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesBurnOnBottom() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-amber-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cookie science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Why cookies burn on the bottom
          </h1>
          <p className="text-xl text-muted-foreground">
            The underside touches metal first and hardest — conduction runs circles around hot air, so bottoms can scorch while the top still looks shy.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>5 min read</span>
            <span>•</span>
            <span>Beginner friendly</span>
          </div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-red-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🔥</span>
        </div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🔥</span>
            <div>
              <p className="font-bold text-orange-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">
                Dark thin pans and the bottom rack pour heat into the base. Move to the middle rack, bake on parchment, favor light heavy-gauge aluminum or an insulated sheet, and verify the oven with a thermometer — many home units run hot. Dropping the set temp by 25°F is a fair first experiment if only the soles char.
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            This is rarely a mystery flavor from the gods of baking; it is contact physics. Fix the contact layer and you usually fix the burn.
          </p>

          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-amber-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">
              The sheet is a skillet you forgot you preheated. Parchment is a thin buffer; a lighter pan is a gentler skillet; the middle rack is farther from the bottom element throwing infrared at your feet.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Why the base races ahead
          </h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-5">
            Metal conducts heat into the dough in seconds; the top browns mostly from air and radiant heat from above — a slower lane. Dark finishes absorb more radiant energy than shiny aluminum. Thin pans spike and wobble; heavier pans smooth the ride.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-8">
            Greasing can sometimes worsen hot-foot behavior by changing how the dough sits and fries against the metal — parchment is usually the kinder default for drop cookies.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            What to try next bake
          </h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            <strong>Rack position.</strong> Middle, not bottom — especially in electric ovens with exposed lower elements.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            <strong>Pan choice.</strong> Light aluminum half-sheet; insulated if you chronically char bases on otherwise good recipes.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            <strong>Temperature truth.</strong> An inexpensive oven thermometer beats trusting a dial from 1998.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-8">
            <strong>Double up.</strong> Stacking two identical sheets with an air gap can mimic a thicker pan in a pinch — not perfect, but a useful hack.
          </p>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">Conduction vs convection</h4>
            <p className="text-base text-muted-foreground leading-relaxed mb-0">
              Anything that slows conductive heat into the first millimeter of crumb — parchment, lighter metal, slightly lower sugar at the contact zone from even scooping — buys the top time to catch up visually.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Burnt bottom, pale top?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Classic conduction lead. Lower temp or move rack; do not only blast broil hoping the top catches up.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Silicone mat vs parchment?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Both buffer; mats can change spread slightly. Pick one and learn its timing on your pan.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Convection fan?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Moving air can even browning but also shift heat map — rotate pans and watch first batch closely when you switch modes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related</h3>
            <div className="space-y-2 text-base">
              <Link to="/cookie-science/why-cookies-bake-faster-on-edges" className="block text-amber-700 hover:underline font-medium">
                Why cookies bake faster on the edges
              </Link>
              <Link to="/cookie-science/why-cookies-change-color" className="block text-amber-700 hover:underline font-medium">
                Why cookies change color
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Try your next tweaks in CookieSensei</h2>
            <p className="text-lg text-white/90 mb-6">Pair pan and temperature changes with ratio checks when bottoms are the only red flag.</p>
            <a
              href="https://cookiesensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-orange-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
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
