import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeLosesFlavor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-yellow-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-stone-700 text-white px-4 py-2 rounded-full text-sm mb-6">Coffee Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent">Why Coffee Loses Flavor</h1>
          <p className="text-xl text-muted-foreground">Understand why coffee goes stale so quickly after roasting and how to store beans to preserve peak flavor as long as possible.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>6 min read</span><span>•</span><span>Beginner Friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-stone-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">📦</span></div>
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-stone-50 border-l-4 border-stone-500 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">📦</span>
            <div>
              <p className="font-bold text-stone-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Coffee goes stale from CO₂ off-gassing, oxidation, and moisture absorption. Store in an airtight container and use within 2–4 weeks of roasting.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Coffee peaks in flavor 3–14 days after roasting and is noticeably stale by 4–6 weeks. Three processes drive staling: CO₂ off-gassing, oxidation, and moisture absorption — all happening simultaneously from the moment roasting ends.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent">The Three Staling Mechanisms</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">💨 CO₂ Off-Gassing</h3>
              <p className="text-sm text-muted-foreground mb-3">Freshly roasted beans are saturated with CO₂ produced during roasting. This gas slowly escapes over 2–4 weeks, and as it leaves it carries volatile aromatic compounds with it. The aroma molecules literally evaporate along with the gas. This is also why very fresh beans (under 3 days) can taste flat — too much CO₂ blocks extraction. The sweet spot is 3–14 days post-roast.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-stone-200">
              <h3 className="text-xl mb-3">🌬️ Oxidation</h3>
              <p className="text-sm text-muted-foreground mb-3">Oxygen reacts with coffee's aromatic oils and lipids, creating rancid, cardboard, and papery off-flavors. This is the main reason opened bags of coffee lose flavor quickly. Ground coffee oxidizes 40–50x faster than whole beans due to its vastly increased surface area — pre-ground coffee can go stale in 15–30 minutes in open air.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">💧 Moisture Absorption</h3>
              <p className="text-sm text-muted-foreground mb-3">Coffee is hygroscopic and readily absorbs moisture from the surrounding environment. Moisture triggers hydrolysis of flavor compounds and accelerates both oxidation and microbial activity, all of which degrade flavor. This is why storing coffee near a steam source (kettle, dishwasher) ruins it quickly.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-8">
            <h3 className="text-xl mb-6 text-center">Storage Best Practices</h3>
            <div className="space-y-3">
              {[
                ['✓', 'Airtight container — eliminates oxygen exposure after sealing'],
                ['✓', 'Cool, dark place — heat and light accelerate oxidation'],
                ['✓', 'Buy 2–4 weeks worth at a time — don\'t stock up'],
                ['✓', 'Grind only what you need immediately before brewing'],
                ['✗', 'Never store in the fridge — humidity and odor absorption'],
                ['✗', 'Avoid clear containers on the counter — light degrades flavor'],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-start gap-3">
                  <span className={icon === '✓' ? 'text-green-600 font-bold' : 'text-red-500 font-bold'}>{icon}</span>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">How long does coffee stay fresh after roasting?</h3>
                <p className="text-muted-foreground text-sm">Peak flavor is 3–14 days post-roast. Quality noticeably declines by 4–6 weeks. Most supermarket coffee is already weeks or months old. Always buy from roasters with a roast date, not a "best by" date.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does grinding coffee make it go stale faster?</h3>
                <p className="text-muted-foreground text-sm">Dramatically faster. Pre-ground coffee has 40–50x more surface area exposed to oxygen than whole beans. Noticeable flavor loss occurs within 15–30 minutes in open air. Grind only what you need, immediately before brewing.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Should I store coffee in the freezer?</h3>
                <p className="text-muted-foreground text-sm">Only for long-term storage (6+ weeks). Freeze once in a sealed container, then thaw completely and store at room temperature. Never repeatedly freeze and thaw — condensation destroys flavor.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does coffee in an open bag go stale so quickly?</h3>
                <p className="text-muted-foreground text-sm">Oxygen reacts with coffee oils and aromatics, creating rancid, cardboard-like compounds. An opened bag accelerates this exposure dramatically. Transfer to an airtight container immediately after opening.</p>
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

          <div className="bg-gradient-to-r from-amber-600 to-stone-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Coffee Freshness</h2>
            <p className="text-lg text-white/90 mb-6">Brew at peak flavor every time with BeanSensei.</p>
            <a href="https://beansensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Try BeanSensei →<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
