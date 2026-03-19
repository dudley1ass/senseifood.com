import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeTastesWeak() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-yellow-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Coffee Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-stone-600 to-amber-700 bg-clip-text text-transparent">
            Why Coffee Tastes Weak
          </h1>
          <p className="text-xl text-muted-foreground">
            Fix weak, watery coffee by mastering brew ratios, extraction time, and water temperature.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>5 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-stone-200 to-amber-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">😞</span>
        </div>

        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">😞</span>
            <div>
              <p className="font-bold text-amber-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Weak coffee means you're not extracting enough flavor — most likely too little coffee or too coarse a grind. Dose 60g per liter and grind one notch finer.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Weak coffee lacks boldness, caffeine kick, and satisfying depth. Unlike watery coffee (thin and flavorless), weak coffee may have some taste — just not enough of it. Both trace back to under-extraction, but the causes and fixes differ.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-600 to-amber-700 bg-clip-text text-transparent">
            Strength vs. Extraction: The Key Distinction
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Coffee <strong>strength</strong> refers to concentration — how much flavor per unit of water. <strong>Extraction</strong> refers to efficiency — how much flavor was pulled from the grounds. You can have well-extracted but weak coffee (right technique, too much water) or strong but poorly extracted coffee (too little water, bad technique). Fixing weak coffee means addressing both.
          </p>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Why does my coffee taste weak even when I use a lot?</h3>
                <p className="text-muted-foreground text-sm">Grind size is likely too coarse. Even with a generous dose, water rushes through large particles without extracting enough flavor. Grind finer and you'll notice an immediate improvement in strength.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">What is the right coffee-to-water ratio?</h3>
                <p className="text-muted-foreground text-sm">The SCA recommends 1g coffee per 15–16g water, or 60g per liter. Weigh your coffee — volume measurements like tablespoons are unreliable because grind size changes how much fits in a spoon.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can stale beans make coffee taste weak?</h3>
                <p className="text-muted-foreground text-sm">Yes. Beans that are weeks or months past their roast date have lost their CO₂ and volatile aromatics. Even brewed perfectly, they produce a flat, weak cup because the flavor compounds aren't there to extract.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does drip machine coffee taste weak?</h3>
                <p className="text-muted-foreground text-sm">Most drip machines don't reach optimal brewing temperature (195–205°F). They also often have a short contact time. Use freshly ground coffee, a medium grind, and verify your machine reaches proper temperature.</p>
              </div>
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

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h3 className="text-xl mb-6">Strength vs. Extraction Matrix</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="font-bold text-blue-800 mb-1">Weak + Under-extracted</p>
                <p className="text-blue-700 text-xs">Sour, thin, hollow. Most common problem.</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <p className="font-bold text-green-800 mb-1">Strong + Well-extracted</p>
                <p className="text-green-700 text-xs">Bold, balanced, satisfying. The goal.</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-4">
                <p className="font-bold text-yellow-800 mb-1">Weak + Well-extracted</p>
                <p className="text-yellow-700 text-xs">Flat, diluted. Too much water for the dose.</p>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <p className="font-bold text-red-800 mb-1">Strong + Over-extracted</p>
                <p className="text-red-700 text-xs">Bitter, harsh, intense. Too concentrated.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-600 to-amber-700 bg-clip-text text-transparent">
            Top Causes of Weak Coffee
          </h2>

          <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-stone-200">
            <h3 className="text-2xl mb-4">⚖️ Wrong Coffee-to-Water Ratio</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                This is the #1 cause. Most people use too little coffee. A standard ratio of 1g coffee to 15–16g water (about 60g per liter) gives a well-balanced, full-strength brew. Eyeballing it almost always results in under-dosing.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs">
                <strong>Fix:</strong> Weigh your coffee. A kitchen scale eliminates guesswork — start at 1:15 and adjust to taste.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">⚙️ Grind Too Coarse</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Large grind particles have less surface area for water to extract from. Water moves through quickly, taking only the lightest, most soluble compounds and leaving most of the flavor behind in the grounds.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs">
                <strong>Fix:</strong> Grind finer, one step at a time, until strength improves. Don't go so fine that bitterness develops.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-stone-200">
            <h3 className="text-2xl mb-4">⏱️ Insufficient Brew Time</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Contact time between water and grounds is critical. Too short, and only quick-extracting acids come through — none of the body-building sugars and oils that give coffee its strength and richness.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs">
                <strong>Fix:</strong> French Press: 4 min, Pour Over: 3–4 min, Drip: 5–6 min, AeroPress: 2–3 min. Don't rush.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">🌡️ Low Water Temperature</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Water cooler than 195°F doesn't have enough energy to dissolve coffee's heavier flavor molecules. You get a diluted result even with the right ratio and grind size.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs">
                <strong>Fix:</strong> Target 195–205°F. Let boiling water cool 30 seconds, or use a variable-temp kettle.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-stone-200">
            <h3 className="text-2xl mb-4">🫘 Stale or Pre-Ground Beans</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Pre-ground coffee or beans roasted months ago have lost most of their volatile aromatics. Even brewed perfectly, they can't deliver full-strength flavor — the compounds aren't there to extract.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs">
                <strong>Fix:</strong> Buy whole beans roasted within the last 2–4 weeks. Grind immediately before brewing for maximum flavor.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Bloom Your Coffee</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fresh coffee releases CO₂ gas when it contacts hot water — a process called "blooming." If you don't bloom (pre-wet grounds for 30 seconds before brewing), CO₂ bubbles create barriers that prevent even extraction, leading to weak, uneven flavor. Pour a small amount of water over grounds, wait 30 seconds, then continue brewing.
            </p>
          </div>

          <div className="bg-gradient-to-r from-stone-500 to-amber-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Coffee Brewing</h2>
            <p className="text-lg text-white/90 mb-6">
              Dial in your perfect brew with our coffee strength and extraction calculator.
            </p>
            <a
              href="https://beansensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-stone-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
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
