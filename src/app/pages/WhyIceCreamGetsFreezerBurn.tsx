import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyIceCreamGetsFreezerBurn() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navigation />

      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Ice Cream Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-slate-600 to-blue-700 bg-clip-text text-transparent">
            Why Ice Cream Gets Freezer Burn
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn what causes those icy, grayish patches on your ice cream and how to prevent freezer burn for good.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>5 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-slate-200 to-blue-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🥶</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Freezer burn is that grayish, crusty, flavorless layer that ruins ice cream stored too long or improperly. It's not a safety issue — it's a moisture migration problem. And it's almost entirely preventable.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-slate-600 to-blue-700 bg-clip-text text-transparent">
            What Is Freezer Burn?
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Freezer burn occurs when moisture from the surface of food sublimates — converts directly from ice to water vapor — and escapes into the dry freezer air. The surface left behind is dehydrated, oxidized, and flavorless. In ice cream, this means the fat and sugar remain but the water is gone, leaving a gritty, desiccated crust with no creamy texture.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200 my-10">
            <h3 className="text-xl mb-4">The Sublimation Process</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">1️⃣</span>
                <p className="text-sm text-muted-foreground">Ice cream surface is exposed to dry freezer air (or temperature fluctuations)</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">2️⃣</span>
                <p className="text-sm text-muted-foreground">Ice crystals on the surface sublimate (ice → vapor, bypassing liquid state)</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">3️⃣</span>
                <p className="text-sm text-muted-foreground">Water vapor either escapes the container or re-deposits as ice elsewhere (frost inside the lid)</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">4️⃣</span>
                <p className="text-sm text-muted-foreground">Dehydrated surface left behind: gritty, flavorless, discolored — classic freezer burn</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-slate-600 to-blue-700 bg-clip-text text-transparent">
            Why It Happens: Causes
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <h3 className="text-xl mb-3">🌡️ Temperature Fluctuations</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Every time ice cream warms slightly (fridge door opens, power fluctuation, holding the container) and re-freezes, surface moisture migrates. Repeated cycles cause progressive dehydration of the surface even inside a sealed container.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Store ice cream at the back of the freezer where temperature is most stable. Avoid the door shelf — it experiences the most temperature swings.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-200">
              <h3 className="text-xl mb-3">🫙 Air Exposure</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The air space between the ice cream surface and the container lid is the pathway for moisture loss. The larger this headspace, the faster freezer burn develops. An opened half-empty container accelerates the process dramatically.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Press a piece of plastic wrap directly onto the ice cream surface before replacing the lid. This eliminates the air gap entirely.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-cyan-200">
              <h3 className="text-xl mb-3">📦 Thin or Poor-Quality Container</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Cardboard or thin plastic containers are somewhat permeable to moisture vapor. Over time, even a sealed container lets water vapor migrate outward through the packaging material itself.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Transfer homemade or bulk ice cream to a rigid, airtight container with a well-sealed lid. Tupperware-style plastic or stainless steel containers work best.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <h3 className="text-xl mb-3">⏳ Long Storage Time</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Even in ideal conditions, ice cream slowly develops freezer burn over time. Commercial ice cream typically has a shelf life of 2–4 months before quality noticeably degrades.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800">
                <strong>Fix:</strong> Buy and consume ice cream within 1–2 months. Don't buy in bulk if you won't finish it quickly.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200 my-10">
            <h3 className="text-xl mb-6 text-center">Complete Freezer Burn Prevention</h3>
            <div className="space-y-3">
              {[
                'Press plastic wrap directly onto ice cream surface after every scoop',
                'Replace the lid and store at the back of the freezer',
                'Keep freezer at a consistent 0°F (−18°C) or colder',
                'Avoid repeatedly partially thawing and refreezing',
                'Use within 1–2 months of purchase',
                'For homemade: use airtight containers with minimal headspace',
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <p className="text-sm text-muted-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-500 to-blue-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">More Ice Cream Science</h2>
            <p className="text-lg text-white/90 mb-6">
              Explore what makes ice cream creamy, why it gets icy, and how to make it at home.
            </p>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Browse Ice Cream Science
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
