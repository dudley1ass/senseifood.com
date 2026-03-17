import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeTastesBurnt() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-700 to-amber-900 text-white px-4 py-2 rounded-full text-sm mb-6">
            Coffee Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-stone-800 to-amber-900 bg-clip-text text-transparent">
            Why Coffee Tastes Burnt
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn what causes burnt-tasting coffee and how to prevent it through proper roasting and brewing.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Intermediate</span>
            <span>☕🔥</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-stone-300 to-amber-800 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🔥</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Burnt coffee has a harsh, acrid, almost ashy flavor that overwhelms every other taste. It's one of the most common coffee complaints — and nearly always preventable once you understand what's causing it.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-700 to-amber-900 bg-clip-text text-transparent">
            The Chemistry of Burnt Coffee
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            When coffee is overheated — whether during roasting or brewing — delicate aromatic compounds break down and transform into harsh molecules called <strong>furans</strong> and <strong>pyrazines</strong>. These are the same compounds produced when any food chars. The result is that distinctive acrid, smoky, flat taste that signals heat damage has occurred.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl mb-3">Burnt Taste</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Acrid, ashy, charred flavor</li>
                <li>• Flat and one-dimensional</li>
                <li>• Lingers unpleasantly</li>
                <li>• Caused by heat damage to aromatics</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-xl mb-3">Bitter Taste (Different!)</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Sharp, strong, over-extracted</li>
                <li>• Has some flavor complexity</li>
                <li>• More upfront on the palate</li>
                <li>• Caused by over-extraction, not heat</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-700 to-amber-900 bg-clip-text text-transparent">
            Top Causes of Burnt Coffee
          </h2>

          <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-stone-200">
            <h3 className="text-2xl mb-4">🌡️ Water Too Hot</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Water above 205°F (96°C) scorches coffee grounds, extracting harsh compounds and destroying delicate aromatics before they can reach your cup. Boiling water at 212°F is too hot for brewing.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs">
                <strong>Fix:</strong> Use water at 195–205°F. Let boiling water rest off heat for 30–45 seconds, or use a variable-temperature kettle set to the correct range.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">⏱️ Coffee Left on Heat Too Long</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Leaving brewed coffee on a warming plate continues cooking it. Within 20–30 minutes, even good coffee develops harsh, burnt characteristics as heat breaks down compounds and drives off volatile aromatics.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs">
                <strong>Fix:</strong> Transfer brewed coffee to a thermal carafe immediately. Never leave coffee on a warming plate for more than 15–20 minutes.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-stone-200">
            <h3 className="text-2xl mb-4">🫘 Dark Over-Roasted Beans</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Some commercial dark roasts are pushed to the point of carbonization. The beans taste burnt before water ever touches them — no brewing technique can fix roasting damage that happened before the bag was sealed.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs">
                <strong>Fix:</strong> Choose medium-dark roasts from quality roasters with a roast date on the bag. Beans roasted 1–3 weeks ago are ideal. Avoid pre-ground canned coffee.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">⚙️ Dirty Equipment</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Rancid coffee oils build up in grinders, brewers, and carafes over time. These stale oils coat every new batch with a burnt, bitter undertone that's nearly impossible to identify without cleaning as the culprit.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs">
                <strong>Fix:</strong> Wash carafe and filter basket with dish soap after every use. Run a full descaling cycle monthly. Clean your grinder burrs every 1–2 weeks.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-stone-200">
            <h3 className="text-2xl mb-4">☕ Espresso Over-Extracted</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Espresso shots running longer than 30–35 seconds extract harsh, burnt compounds that dominate the cup. Signs include a thin, pale, blond stream at the end of the shot and a noticeably bitter aftertaste.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-xs">
                <strong>Fix:</strong> Aim for 25–30 second extraction. Grind coarser if shots run too long. Keep dose consistent at 18–20g for double shots.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h3 className="text-xl mb-6">Quick Fix Guide — If Your Coffee Tastes Burnt, Try This (In Order):</h3>
            <div className="space-y-3">
              {[
                'Lower your water temperature — target 195–205°F, never boiling',
                'Move brewed coffee to a thermal carafe immediately after brewing',
                'Clean all equipment — grinder, brewer, carafe',
                'Check bean roast level — switch from very dark to medium-dark',
                'For espresso: grind coarser and target a 25–30 sec extraction',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-gradient-to-br from-stone-700 to-amber-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <p className="text-sm text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Pyrazines and Furans</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The "burnt" flavor compounds in overheated coffee are largely pyrazines and furans — the same ring compounds that form when any food chars. At low concentrations they contribute desirable roasted notes. At high concentrations from over-roasting or overheating, they become the dominant, overwhelming flavor — masking everything pleasant in the cup.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Can dark roast coffee taste burnt?</h3>
                <p className="text-muted-foreground text-sm">Yes. Some commercial dark roasts are pushed far enough during roasting that carbonized, acrid flavors dominate the cup before brewing even begins. Switching to a medium-dark roast from a quality roaster is the only fix.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can water temperature make coffee taste burnt?</h3>
                <p className="text-muted-foreground text-sm">Yes. Water above 205°F scorches the grounds on contact, extracting bitter pyrazines and furans instead of the pleasant aromatic compounds. Always brew between 195–205°F.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does my coffee taste burnt after sitting on the warmer?</h3>
                <p className="text-muted-foreground text-sm">Warming plates continue applying heat to brewed coffee, breaking down aromatic compounds and creating harsh, burnt flavors. Even 20–30 minutes on a burner noticeably degrades quality. Always use a thermal carafe instead.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does a dirty coffee maker cause a burnt taste?</h3>
                <p className="text-muted-foreground text-sm">Absolutely. Rancid oils that build up inside grinders, brewers, and carafes go rancid and add a burnt, bitter undertone to every new batch. Regular cleaning is essential — weekly for the carafe and filter basket, monthly for descaling.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Coffee Science</h3>
            <div className="space-y-3">
              <Link to="/coffee-science/coffee-extraction-science" className="block text-amber-700 hover:underline text-sm font-medium">→ Coffee Extraction Science — master the full brewing process</Link>
              <Link to="/coffee-science/why-coffee-tastes-bitter" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Tastes Bitter — bitter vs. burnt: what's the difference</Link>
              <Link to="/coffee-science/why-coffee-tastes-sour" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Tastes Sour — the opposite problem: under-extraction</Link>
              <Link to="/coffee-science/why-coffee-tastes-watery" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Tastes Watery — fix thin, flavorless coffee</Link>
              <Link to="/coffee-science/why-coffee-grind-size-matters" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Grind Size Matters — control extraction at the source</Link>
              <Link to="/coffee-science/why-coffee-stales" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Stales — keep your beans tasting fresh longer</Link>
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

          <div className="bg-gradient-to-r from-stone-700 to-amber-900 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Coffee Brewing</h2>
            <p className="text-lg text-white/90 mb-6">
              Get the perfect extraction every time with our coffee brewing calculator. Dial in your ideal ratios, temperatures, and times.
            </p>
            <a
              href="https://beansensei.senseifood.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-stone-800 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
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
