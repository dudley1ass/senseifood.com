import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCakesBrown() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm mb-6">Cake Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">Why Cakes Brown</h1>
          <p className="text-xl text-muted-foreground">Understand the Maillard reaction and caramelization in cakes — why the crust forms, what drives color depth, and how to control it.</p>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why is my cake browning too fast on top?</h3>
                <p className="text-muted-foreground text-sm">Oven too hot, cake positioned too high (closer to top element), or dark pan absorbing too much heat. Tent with foil after the first 30 minutes of baking, reduce temp by 25°F, or move to middle rack.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can I make my cake crust less brown?</h3>
                <p className="text-muted-foreground text-sm">Yes — reduce oven temperature by 25°F and extend bake time slightly. Using a lighter-colored pan reduces radiant heat absorption. Covering with foil for the last portion of baking prevents further darkening.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does my chocolate cake look done on top but raw inside?</h3>
                <p className="text-muted-foreground text-sm">Chocolate and cocoa mask the visual browning cue. Don't rely on color with chocolate cakes — always use a toothpick and temperature check. Dark cakes look "done" far earlier than they actually are.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does the type of sugar affect how much cakes brown?</h3>
                <p className="text-muted-foreground text-sm">Yes. Brown sugar promotes deeper browning through its molasses content. Honey and maple syrup also brown faster than white sugar. Cakes with these sweeteners may need lower temperatures or foil tenting.</p>
              </div>
            </div>
          </div>
          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/cake-science/why-cakes-sink" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Sink in the Middle</Link>
              <Link to="/cake-science/why-cakes-rise" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Rise</Link>
              <Link to="/cake-science/why-cakes-are-dense" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Are Dense</Link>
              <Link to="/cake-science/why-cakes-collapse" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Collapse</Link>
              <Link to="/cake-science/why-cakes-dry-out" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Dry Out</Link>
              <Link to="/cake-science/why-cakes-crack-on-top" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Crack on Top</Link>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>6 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-rose-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🎂</span></div>
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🟤</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Cake browning = Maillard reaction on the exterior only. The interior stays pale because water caps internal temp at 212°F. Too-fast browning = tent with foil after 30 minutes.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">The golden-brown crust on a cake is both visual and flavor chemistry. Two reactions — the Maillard reaction and caramelization — produce the hundreds of flavor compounds that make a cake taste complex and toasty.</p>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">The Two Browning Reactions</h2>
          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🔬 Maillard Reaction</h3>
              <p className="text-sm text-muted-foreground">Proteins + sugars at 280°F+. Creates nutty, toasty flavor compounds. Responsible for the brown exterior crust. Accelerated by baking soda (raises alkalinity).</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3">🍬 Caramelization</h3>
              <p className="text-sm text-muted-foreground">Sugar alone at 320°F+. Creates butterscotch and toffee flavors. More prominent in high-sugar recipes and on exposed surfaces. Both reactions deepen with temperature and time.</p>
            </div>
          </div>
          <div className="space-y-4 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🛡️ Why the Crust Browns but Not the Interior</h3>
              <p className="text-sm text-muted-foreground mb-3">The interior of a cake never reaches browning temperatures (280°F+) because water in the batter keeps the internal temperature capped at 212°F (water's boiling point) until the cake is fully cooked. Only the surface, where moisture has evaporated, climbs high enough for Maillard reactions.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3">🌡️ Controlling Browning</h3>
              <p className="text-sm text-muted-foreground mb-3">If your cake browns too fast: tent it with foil after the first 30 minutes. Reduce oven temp by 25°F. Use a light-colored pan. If it doesn't brown enough: increase temp slightly for the last 10 minutes, or add a tablespoon of brown sugar to the batter.</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Cake Baking Science</h2>
            <p className="text-lg text-white/90 mb-6">Browse all our cake science articles.</p>
            <Link to="/articles" className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Browse Cake Science<ArrowLeft className="w-4 h-4 rotate-180" /></Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
