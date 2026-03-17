import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeTastesWatery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-yellow-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-stone-700 text-white px-4 py-2 rounded-full text-sm mb-6">
            Coffee Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent">
            Why Coffee Tastes Watery
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover how to fix thin, watery coffee with better grind size, brewing time, and coffee-to-water ratios.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>5 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
            <span>☕💧</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-stone-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">💧</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Watery coffee lacks body, depth, and flavor. It looks like coffee but tastes like faintly colored water. This is almost always a sign of under-extraction — water moving through the grounds too quickly to pull out the compounds that give coffee its character.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent">
            What Makes Coffee Taste Full-Bodied?
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Coffee body and flavor come from dissolved solids — oils, sugars, proteins, and aromatic compounds extracted from the grounds. A properly brewed cup contains about 1.15–1.35% dissolved solids (Total Dissolved Solids, or TDS). When this drops below 1%, coffee tastes thin, flat, and watery.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-xl mb-6">Ideal Brew Strength (TDS)</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-400 pl-6 py-2 bg-blue-50 rounded-r-lg">
                <h4 className="font-medium text-blue-700 mb-1">Below 1.15% TDS</h4>
                <p className="text-sm text-muted-foreground">Watery / under-extracted — weak, hollow, thin. This is the problem.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6 py-2 bg-green-50 rounded-r-lg">
                <h4 className="font-medium text-green-700 mb-1">1.15–1.35% TDS</h4>
                <p className="text-sm text-muted-foreground">Ideal strength (SCA standard) — balanced, full, satisfying.</p>
              </div>
              <div className="border-l-4 border-amber-700 pl-6 py-2 bg-amber-50 rounded-r-lg">
                <h4 className="font-medium text-amber-800 mb-1">Above 1.35% TDS</h4>
                <p className="text-sm text-muted-foreground">Strong / over-concentrated — intense, potentially harsh.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent">
            Top Causes of Watery Coffee
          </h2>

          <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">⚖️ Too Little Coffee (Most Common)</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Using too few grounds for the amount of water is the #1 cause of watery coffee. Each gram of coffee can only give so much flavor — if there's not enough, the water comes out nearly empty no matter how long you brew.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs">
                <strong>Fix:</strong> Use the golden ratio — 1g coffee per 15–16g water (about 60g per liter). Use a kitchen scale; don't estimate by volume. A tablespoon of coffee weighs very differently depending on grind size.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-stone-200">
            <h3 className="text-2xl mb-4">⚙️ Grind Too Coarse</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Coarse grounds have less surface area. Water flows through quickly without extracting enough flavor compounds, resulting in a light, watery brew even with the right amount of coffee.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs">
                <strong>Fix:</strong> Grind finer — one notch at a time. For drip coffee, aim for medium grind (like coarse sand). Adjust until body improves without becoming bitter.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">⏱️ Brew Time Too Short</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Water needs enough contact time with the grounds to extract flavor. If it rushes through — especially with pour-over or French press — you get a thin result regardless of grind size or dose.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs">
                <strong>Fix:</strong> Target these times — Drip: 5–6 min, Pour Over: 3–4 min, French Press: 4 min, AeroPress: 2–3 min. Don't rush any of these.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-stone-200">
            <h3 className="text-2xl mb-4">🌡️ Water Not Hot Enough</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Cool water can't efficiently dissolve coffee's heavier oil and flavor compounds. The result is an under-extracted, thin cup — despite using the right ratio and grind size.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs">
                <strong>Fix:</strong> Use water at 195–205°F. A temperature-controlled kettle is the most reliable solution.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">🫘 Stale or Old Beans</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Coffee beans lose CO₂ and aromatic oils within weeks of roasting. Stale beans simply don't have the flavor compounds left to brew a full-bodied cup — no technique change can compensate.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs">
                <strong>Fix:</strong> Use beans roasted within the last 2–4 weeks. Look for a roast date on the bag (not a "best by" date).
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-xl mb-6">Quick Fix Guide — If Your Coffee Tastes Watery, Try This (In Order):</h3>
            <div className="space-y-3">
              {[
                'Add more coffee — increase dose by 10–15% and weigh it',
                'Grind finer — one notch at a time until body improves',
                'Check water temperature — should be 195–205°F',
                'Brew longer — extend contact time by 30 seconds',
                'Try fresher beans — roasted within the last 2–4 weeks',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-gradient-to-br from-amber-500 to-stone-700 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <p className="text-sm text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Extraction Yield</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Only 18–22% of coffee's dry weight is ideally extractable. Under-extraction pulls below 18% — capturing mostly light solubles (acids) and missing the heavier compounds (sugars, oils, melanoidins) that create body and sweetness. Watery coffee is usually extracting well below the 18% threshold. A combination of finer grind, hotter water, and longer brew time together push extraction into the ideal range.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why does my coffee taste like water even with a lot of grounds?</h3>
                <p className="text-muted-foreground text-sm">Grind size is likely too coarse. Even with plenty of coffee, water flows through large particles too quickly to extract body and flavor. Grind finer and you'll immediately notice more strength.</p>
              </div>
              <div className="border-t border-amber-100 pt-6">
                <h3 className="text-xl mb-2">Can old coffee beans make coffee taste watery?</h3>
                <p className="text-muted-foreground text-sm">Yes. Stale beans have lost their CO₂ and volatile aromatic compounds through off-gassing and oxidation. Even brewed perfectly, they can't deliver a full-bodied cup — the flavor compounds simply aren't there to extract.</p>
              </div>
              <div className="border-t border-amber-100 pt-6">
                <h3 className="text-xl mb-2">Does water temperature affect coffee strength?</h3>
                <p className="text-muted-foreground text-sm">Significantly. Water below 195°F can't efficiently dissolve the heavier flavor molecules in coffee — oils, sugars, and melanoidins — leaving you with a thin, weak result even at the right ratio and grind size.</p>
              </div>
              <div className="border-t border-amber-100 pt-6">
                <h3 className="text-xl mb-2">What is the ideal coffee-to-water ratio?</h3>
                <p className="text-muted-foreground text-sm">The SCA (Specialty Coffee Association) recommends 1g of coffee per 15–16g of water, or about 60g per liter. This produces a well-balanced cup at standard brew strength. Weigh your coffee — don't rely on volume measurements like tablespoons.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Coffee Science</h3>
            <div className="space-y-3">
              <Link to="/coffee-science/coffee-extraction-science" className="block text-amber-700 hover:underline text-sm font-medium">→ Coffee Extraction Science — master the full brewing process</Link>
              <Link to="/coffee-science/why-coffee-tastes-sour" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Tastes Sour — another sign of under-extraction</Link>
              <Link to="/coffee-science/why-coffee-tastes-weak" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Tastes Weak — watery vs. weak: the difference</Link>
              <Link to="/coffee-science/why-coffee-grind-size-matters" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Grind Size Matters — the most impactful variable</Link>
              <Link to="/coffee-science/why-coffee-brewing-time-matters" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Brewing Time Matters — contact time and flavor</Link>
              <Link to="/coffee-science/why-coffee-loses-flavor" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Loses Flavor — keep your beans fresh longer</Link>
            </div>
          </div>


          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/coffee-science/coffee-extraction-science" className="block text-amber-700 hover:underline text-sm font-medium">→ Coffee Extraction Science</Link>
              <Link to="/coffee-science/why-coffee-tastes-bitter" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Tastes Bitter</Link>
              <Link to="/coffee-science/why-coffee-tastes-sour" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Tastes Sour</Link>
              <Link to="/coffee-science/why-coffee-grind-size-matters" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Grind Size Matters</Link>
              <Link to="/coffee-science/why-coffee-brewing-time-matters" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Brewing Time Matters</Link>
              <Link to="/coffee-science/why-coffee-stales" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Stales</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-stone-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Coffee Brewing</h2>
            <p className="text-lg text-white/90 mb-6">
              Dial in your perfect ratio with our coffee brewing calculator.
            </p>
            <a
              href="https://beansensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Try BeanSensei →
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
