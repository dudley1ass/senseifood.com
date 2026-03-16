import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeStales() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-brown-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-700 to-amber-800 text-white px-4 py-2 rounded-full text-sm mb-6">Coffee Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-stone-800 to-amber-800 bg-clip-text text-transparent">Why Coffee Stales</h1>
          <p className="text-xl text-muted-foreground">Understand the complete science of coffee staling — the chemical processes that transform vibrant fresh coffee into flat, cardboard-tasting brew.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>7 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-stone-300 to-amber-600 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">😴</span></div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Coffee staling is not a single process — it's at least four simultaneous chemical reactions happening from the moment roasting ends. Understanding each one reveals exactly why coffee has such a short peak window and what you can do to slow each process.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-800 to-amber-800 bg-clip-text text-transparent">The Four Staling Processes</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-stone-200">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-stone-400">1</span>
                <div>
                  <h3 className="text-xl mb-2">CO₂ Off-Gassing & Aromatic Loss</h3>
                  <p className="text-sm text-muted-foreground mb-2">Roasted beans are saturated with CO₂. As this escapes over 2–4 weeks, volatile aromatic compounds escape with it. This is gradual but relentless — you can't stop it, only slow it (airtight containers, lower temperature).</p>
                  <div className="bg-stone-50 rounded-lg p-2 text-xs text-stone-700"><strong>Timeframe:</strong> Begins immediately post-roast. Most significant in first 2 weeks.</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-amber-400">2</span>
                <div>
                  <h3 className="text-xl mb-2">Lipid Oxidation (Rancidity)</h3>
                  <p className="text-sm text-muted-foreground mb-2">Oxygen attacks the unsaturated fatty acids in coffee oils, creating hydroperoxides that decompose into aldehyde and ketone compounds responsible for cardboard, rancid, and painty off-flavors. This is the most damaging staling process.</p>
                  <div className="bg-amber-50 rounded-lg p-2 text-xs text-amber-800"><strong>Accelerated by:</strong> Heat, light, oxygen, increased surface area (grinding).</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-stone-200">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-stone-500">3</span>
                <div>
                  <h3 className="text-xl mb-2">Aromatic Compound Degradation</h3>
                  <p className="text-sm text-muted-foreground mb-2">The hundreds of volatile aromatic compounds created during roasting are chemically unstable. They react with each other and with oxygen to form less volatile, less pleasant molecules. Furans and thiols — key pleasant-aroma contributors — are particularly unstable.</p>
                  <div className="bg-stone-50 rounded-lg p-2 text-xs text-stone-700"><strong>Result:</strong> Progressive flattening of aroma complexity. Fresh coffee → simple, flat smell.</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-amber-600">4</span>
                <div>
                  <h3 className="text-xl mb-2">Moisture Absorption & Hydrolysis</h3>
                  <p className="text-sm text-muted-foreground mb-2">Coffee absorbs moisture from the air, which triggers hydrolysis — water molecules breaking down flavor compounds. It also absorbs ambient odors (a major problem if stored near spices, garlic, or cleaning products) and accelerates all other staling reactions.</p>
                  <div className="bg-amber-50 rounded-lg p-2 text-xs text-amber-800"><strong>Prevention:</strong> Airtight container. Never store in the fridge (humid environment with many competing odors).</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-8">
            <h3 className="text-xl mb-6 text-center">Coffee Freshness Timeline</h3>
            <div className="space-y-3">
              {[
                { days: '0–3 days', state: 'Too fresh', desc: 'Excess CO₂ blocks extraction. Tastes flat, muddy.', color: 'bg-yellow-100' },
                { days: '3–14 days', state: '⭐ Peak', desc: 'CO₂ balanced, aromatics intact, full flavor.', color: 'bg-green-100' },
                { days: '2–4 weeks', state: 'Good', desc: 'Noticeable flattening but still enjoyable.', color: 'bg-blue-100' },
                { days: '4–8 weeks', state: 'Stale', desc: 'Flat, cardboard notes emerging. Drink soon.', color: 'bg-orange-100' },
                { days: '8+ weeks', state: 'Rancid', desc: 'Oxidized oils dominate. Papery, harsh, unpleasant.', color: 'bg-red-100' },
              ].map(item => (
                <div key={item.days} className={`flex items-start gap-4 p-3 rounded-lg ${item.color}`}>
                  <span className="font-medium text-sm w-24 flex-shrink-0">{item.days}</span>
                  <span className="font-bold text-sm w-20 flex-shrink-0">{item.state}</span>
                  <span className="text-sm text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-stone-700 to-amber-800 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Brew at Peak Freshness</h2>
            <p className="text-lg text-white/90 mb-6">Use BeanSensei to understand your beans and brew at the right time.</p>
            <a href="https://beansensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-stone-800 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Try BeanSensei →<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
