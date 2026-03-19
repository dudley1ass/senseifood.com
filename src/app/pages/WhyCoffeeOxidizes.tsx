import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeOxidizes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-red-50 to-amber-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-600 to-red-700 text-white px-4 py-2 rounded-full text-sm mb-6">Coffee Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-stone-700 to-red-700 bg-clip-text text-transparent">Why Coffee Oxidizes</h1>
          <p className="text-xl text-muted-foreground">Learn how oxygen degrades coffee's aromatic compounds, creating stale and rancid flavors — and how to minimize oxidation at every stage.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>6 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-stone-200 to-red-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🌫️</span></div>
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-stone-50 border-l-4 border-stone-500 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🌫️</span>
            <div>
              <p className="font-bold text-stone-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Coffee oxidizes when oxygen reacts with aromatic oils, creating stale, cardboard flavors. Ground coffee oxidizes 40–50x faster than whole beans. Grind immediately before brewing.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Coffee oxidation is the enemy of freshness. From the moment roasting ends, oxygen begins reacting with coffee's aromatic oils and compounds, progressively replacing bright, complex flavors with stale, cardboard, and rancid notes.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-700 to-red-700 bg-clip-text text-transparent">The Oxidation Process</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">Oxidation is the reaction between oxygen molecules and coffee's lipids (oils) and aromatic compounds. In lipid oxidation, oxygen attacks the double bonds in unsaturated fatty acids, creating hydroperoxides that break down into short-chain aldehydes and ketones — the molecules responsible for rancid, cardboard, and stale flavors. In aromatic compound oxidation, the volatile molecules that give coffee its pleasant scent break down into less volatile, less pleasant compounds.</p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-8">
            <h3 className="text-xl mb-6">Oxidation Rate by Stage</h3>
            <div className="space-y-3">
              {[
                { stage: 'Whole beans, sealed bag', rate: 'Very slow', color: 'bg-green-100 text-green-800', note: 'One-way valve bag protects against incoming oxygen' },
                { stage: 'Whole beans, opened bag', rate: 'Slow', color: 'bg-yellow-100 text-yellow-800', note: 'Surface oxidation begins; use within 2–4 weeks' },
                { stage: 'Ground coffee, sealed', rate: 'Fast', color: 'bg-orange-100 text-orange-800', note: '40–50x surface area vs whole beans' },
                { stage: 'Ground coffee, open air', rate: 'Very fast', color: 'bg-red-100 text-red-800', note: 'Noticeable staling within 15–30 minutes' },
                { stage: 'Brewed coffee, open air', rate: 'Extremely fast', color: 'bg-red-200 text-red-900', note: 'Flat, stale, metallic within 30 minutes' },
              ].map(item => (
                <div key={item.stage} className="flex items-start gap-4">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ${item.color}`}>{item.rate}</span>
                  <div><p className="text-sm font-medium">{item.stage}</p><p className="text-xs text-muted-foreground">{item.note}</p></div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-700 to-red-700 bg-clip-text text-transparent">How to Minimize Oxidation</h2>
          <div className="space-y-4 my-8">
            {[
              ['Grind immediately before brewing', 'Pre-grinding exposes massive surface area to oxygen. Grind only what you need, right before you brew.'],
              ['Store beans in airtight containers', 'Oxygen exposure is cumulative. Minimize air contact at all times. Vacuum-sealed containers are ideal.'],
              ['Use one-way valve bags', 'CO₂ from fresh beans needs to escape but oxygen shouldn\'t enter. One-way valve bags solve this exactly.'],
              ['Buy smaller quantities more frequently', 'The freshest possible beans means less cumulative oxidation time.'],
              ['Transfer brewed coffee to a thermos', 'Open carafes expose brewed coffee to air. A sealed thermal container dramatically slows oxidation.'],
            ].map(([tip, detail]) => (
              <div key={tip} className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200">
                <h4 className="font-medium mb-1 text-sm">{tip}</h4>
                <p className="text-xs text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">How do I prevent coffee oxidation?</h3>
                <p className="text-muted-foreground text-sm">Minimize oxygen exposure at every stage: store beans in an airtight container, grind only before brewing, use beans within 2–4 weeks of opening the bag, and transfer brewed coffee to a sealed thermal carafe immediately.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does coffee oxidize after brewing?</h3>
                <p className="text-muted-foreground text-sm">Yes, very rapidly. Brewed coffee exposed to air goes flat and stale within 20–30 minutes. The dissolved aromatic compounds continue reacting with oxygen and evaporating after brewing stops.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">What does oxidized coffee taste like?</h3>
                <p className="text-muted-foreground text-sm">Flat, cardboard-like, papery, or rancid. The pleasant volatile aromatics have either evaporated or reacted into less pleasant compounds. There's a noticeable absence of brightness and complexity.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does vacuum sealing coffee prevent oxidation?</h3>
                <p className="text-muted-foreground text-sm">Significantly — removing oxygen slows oxidation dramatically. One-way valve bags (which let CO₂ out but keep oxygen out) are ideal for fresh roasted beans. Vacuum-sealed canisters work well for beans you've already opened.</p>
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

          <div className="bg-gradient-to-r from-stone-600 to-red-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Keep Coffee Fresh Longer</h2>
            <p className="text-lg text-white/90 mb-6">Master every freshness variable with BeanSensei.</p>
            <a href="https://beansensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-stone-800 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Try BeanSensei →<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
