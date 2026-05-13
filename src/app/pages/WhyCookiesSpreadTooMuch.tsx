import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesSpreadTooMuch() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cookie science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Why cookies spread too much
          </h1>
          <p className="text-xl text-muted-foreground">
            One giant lace sheet on the pan means the dough never found a wall in time — almost always temperature, sugar, flour, or the pan underneath.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Beginner friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-red-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">😱</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">😱</span>
            <div>
              <p className="font-bold text-red-800 text-sm uppercase tracking-wide mb-1">Quick answer</p>
              <p className="text-foreground/80 text-base leading-relaxed">
                Extreme spread is warm butter plus liquid sugar behavior running ahead of structure. Chill portioned dough, confirm butter was not greasy-soft, add a couple tablespoons of flour if the formula is loose, swap some white sugar for brown, and bake on parchment — not a freshly greased pan — on a cool sheet.
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            You cannot un-merge a baked sheet, but you can treat the last batch as data: the oven told you the fat phase won before proteins and starch locked the outline.
          </p>

          <div className="bg-orange-50/80 border border-orange-200 rounded-2xl p-6 my-10">
            <p className="font-semibold text-orange-900 mb-2">In plain kitchen terms</p>
            <p className="text-foreground/80 text-base leading-relaxed mb-0">
              Think of each cookie as a puddle waiting to happen. Your job is to keep butter solid long enough that the rim sets like a shoreline before the middle finishes sliding toward the neighbors.
            </p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Why it turns into one big cookie
          </h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-5">
            Heat melts fat and dissolves sugar; both lower viscosity. If that happens everywhere at once, disks touch while still liquid and weld together. Chilling raises the temperature you need before flow starts. Flour and eggs build the dam; if the dam is short on material or the flood is oversized, you get a lake.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-8">
            A warm baking sheet from batch one is an underrated accelerator — the bottom layer of butter hits liquid range on contact.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Fix order that matches most kitchens
          </h2>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            <strong>1. Chill.</strong> Fastest return for most drop cookies — even thirty minutes changes the first-minute story.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            <strong>2. Butter discipline.</strong> Soft should still feel like butter, not lotion. If the recipe used melted butter by design, expect width — that is not a bug for that style.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            <strong>3. Flour reality check.</strong> Two tablespoons can tame a known-loose dough; a scale ends the cup lottery.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-4">
            <strong>4. Sugar mix.</strong> Brown sugar binds water and often reins in spread versus white alone at the same fat level.
          </p>
          <p className="text-base leading-relaxed text-foreground/80 mb-8">
            <strong>5. Pan surface.</strong> Parchment or silicone vs grease changes slip — pick one and keep it consistent batch to batch.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Can I save a merged batch?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Not structurally — enjoy cookie brittle or trim shapes for ice cream sandwiches. Fix forward with chill and spacing.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Second tray spreads more — why?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Hot metal pre-melts the foot contact layer. Cool the sheet or rotate in a second cold pan.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does brown sugar “fix” spread?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Often yes, a partial swap thickens the melt curve. It also changes chew and color — track one variable at a time.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Tiny puff on the rack after a flat bake?</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Fat re-firms as it cools; a little lift is normal. That is not the same as good in-oven control, but it is not dangerous.
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
              <Link to="/cookie-science/why-cookies-flatten" className="block text-amber-700 hover:underline font-medium">
                Why cookies flatten
              </Link>
              <Link to="/cookie-science/brown-sugar-vs-white-sugar" className="block text-amber-700 hover:underline font-medium">
                Brown sugar vs white sugar
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Model the tray before you bake</h2>
            <p className="text-lg text-white/90 mb-6">
              CookieSensei is useful when you are tired of guessing which knob actually moved the footprint.
            </p>
            <a
              href="https://cookiesensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
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
