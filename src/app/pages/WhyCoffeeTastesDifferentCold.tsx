import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeTastesDifferentCold() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-amber-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm mb-6">Coffee Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-cyan-700 bg-clip-text text-transparent">Why Coffee Tastes Different Cold</h1>
          <p className="text-xl text-muted-foreground">Discover the sensory science behind why coffee flavor changes as it cools — and why cold brew tastes nothing like hot-brewed coffee left to chill.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>6 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🧊</span></div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Cold coffee tastes fundamentally different from the same coffee served hot — and it's not just temperature. Temperature affects aroma volatility, taste receptor sensitivity, and the chemical balance of flavor compounds in ways that completely transform the experience.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-blue-600 to-cyan-700 bg-clip-text text-transparent">Why Temperature Changes Flavor</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <h3 className="text-xl mb-3">💨 Aroma Volatility Drops</h3>
              <p className="text-sm text-muted-foreground mb-3">Aroma compounds evaporate at higher temperatures, reaching your nose easily. Cold coffee releases far fewer volatiles — aroma stays dissolved in the liquid rather than rising to your nose. Since 70–80% of "flavor" is actually aroma, cold coffee tastes significantly less complex and aromatic than the same cup served hot.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-cyan-200">
              <h3 className="text-xl mb-3">👅 Taste Receptor Sensitivity Changes</h3>
              <p className="text-sm text-muted-foreground mb-3">Cold temperatures suppress sweetness perception and amplify bitterness. Your tongue's sweet receptors (TRPM5 ion channels) function optimally near body temperature. At cold temperatures, they're less responsive — so the same coffee tastes less sweet and more bitter when cold than when hot.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <h3 className="text-xl mb-3">🔬 Acid Perception Increases</h3>
              <p className="text-sm text-muted-foreground mb-3">Cold temperature makes organic acids in coffee taste more pronounced. A coffee that's pleasantly bright when hot can taste sharply acidic when cold. This is why light roast coffees often taste more aggressively sour when cooled.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200 my-8">
            <h3 className="text-xl mb-6">Hot Brew Chilled vs. Cold Brew: What's Different</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-blue-700 mb-3">🌡️ Hot Brew, Then Chilled</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Higher acidity (hot extraction efficient)</li>
                  <li>• More bitter compounds extracted</li>
                  <li>• Tastes sharper and less sweet cold</li>
                  <li>• Volatile aroma lost to air during cooling</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-cyan-700 mb-3">🧊 True Cold Brew</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Lower acidity (cold extracts fewer acids)</li>
                  <li>• Fewer bitter compounds</li>
                  <li>• Naturally sweeter tasting</li>
                  <li>• Smoother, chocolate/caramel notes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Brew for Temperature</h2>
            <p className="text-lg text-white/90 mb-6">Use BeanSensei to choose the right method for how you'll serve your coffee.</p>
            <a href="https://beansensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Try BeanSensei →<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
