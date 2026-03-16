import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesStickToPan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />Back to Home
        </Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Why Cookies Stick to the Pan</h1>
          <p className="text-xl text-muted-foreground">Learn why cookies bond to baking sheets and how parchment paper, pan choice, and cooling time prevent tearing.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Beginner Friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-red-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">😩</span></div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Cookies that tear apart when you try to lift them have bonded to the pan through caramelized sugar. The fix is always about creating a barrier or removing that bond before it fully sets.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Why Cookies Bond to Metal</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">Cookie dough contains sugar that caramelizes directly on the hot pan surface during baking. This creates a sticky, then hardened, molecular bond between the cookie base and the metal. The bond is weakest when the cookie is just removed from the oven (sugar still slightly liquid) and when fully cooled (sugar contracted). It's strongest in the window between — partially cooled but still warm.</p>

          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200">
              <h3 className="text-xl mb-3">📄 No Parchment Paper</h3>
              <p className="text-sm text-muted-foreground mb-3">Bare metal pan + sugary dough = direct caramel bond. This is the #1 cause of sticking.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Always use parchment paper or a silicone mat. Never bake cookies on a bare unlined pan.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">⏰ Removing Cookies Too Soon</h3>
              <p className="text-sm text-muted-foreground mb-3">Hot cookies fresh from the oven are fragile — the structure hasn't set yet. Attempting to lift them immediately causes them to break and stick.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Leave cookies on the hot pan for 3–5 minutes after removing from the oven. They continue setting during this time and release cleanly.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-100">
              <h3 className="text-xl mb-3">🍬 High Sugar Recipes</h3>
              <p className="text-sm text-muted-foreground mb-3">Recipes with honey, molasses, or a very high sugar ratio produce intense caramelization at the base. This sticky, hardened layer is what fuses the cookie to the pan.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> For high-sugar recipes, parchment is non-negotiable. Let cool fully on the pan — caramelized sugar becomes brittle and releases when cold.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🍳 Worn Non-Stick Coating</h3>
              <p className="text-sm text-muted-foreground mb-3">Non-stick coatings lose their effectiveness with use and scratching. An old or damaged non-stick pan can stick worse than a regular pan because the coating creates an uneven surface that traps sugar.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix:</strong> Use parchment on all pans regardless of coating. Replace pans with flaking or visibly damaged non-stick surfaces.</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Perfect Cookie Release Every Time</h2>
            <p className="text-lg text-white/90 mb-6">Dial in your recipe and technique with CookieSensei.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
