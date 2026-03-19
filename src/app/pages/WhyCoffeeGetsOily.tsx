import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeGetsOily() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-stone-700 to-amber-800 text-white px-4 py-2 rounded-full text-sm mb-6">Coffee Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-stone-800 to-amber-800 bg-clip-text text-transparent">Why Coffee Gets Oily</h1>
          <p className="text-xl text-muted-foreground">Learn why dark roast coffee beans develop a shiny, oily surface — and what that oil means for flavor and freshness.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Beginner Friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-stone-300 to-amber-600 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">✨</span></div>
        <div className="prose prose-lg max-w-none">

          {/* Quick Answer */}
          <div className="bg-stone-50 border-l-4 border-stone-500 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">✨</span>
            <div>
              <p className="font-bold text-stone-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Oily beans = dark roast. Extended roasting forces the bean's internal lipids to the surface. Surface oils oxidize faster, so consume dark roast within 2–3 weeks of opening.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Oily coffee beans are a sign of a dark roast. The shiny surface isn't added oil — it's the bean's own internal lipids being forced to the surface by extended roasting heat. Whether that's good or bad depends entirely on context.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-stone-800 to-amber-800 bg-clip-text text-transparent">Why Roasting Pushes Oil to the Surface</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">Coffee beans contain 10–17% lipids (oils) locked inside their cell structure. During roasting, as heat increases and the bean undergoes pyrolysis, CO₂ pressure builds inside the bean and the cell walls break down. In dark roasts (above 430°F for extended periods), this pressure forces lipids through the cracked cell walls to the bean's surface, creating the characteristic shiny coating.</p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-stone-200">
              <h3 className="text-xl mb-3">🫘 Light/Medium Roast</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Dry, matte surface</li>
                <li>• Oils remain inside bean cells</li>
                <li>• More acidic, complex flavor</li>
                <li>• Stays fresh longer</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🌑 Dark Roast</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Shiny, oily surface</li>
                <li>• Oils forced out by heat and pressure</li>
                <li>• Lower acidity, heavier body</li>
                <li>• Surface oils go rancid faster</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-stone-200">
              <h3 className="text-xl mb-3">⚠️ The Rancidity Problem</h3>
              <p className="text-sm text-muted-foreground mb-3">Surface oils oxidize faster than oils sealed inside the bean. A dark roast bean with surface oil exposure will go rancid — producing bitter, acrid, unpleasant flavors — faster than a light roast with intact cell walls. This is why dark roast coffee has a shorter shelf life once the bag is opened.</p>
              <div className="bg-amber-50 rounded-lg p-3 text-xs"><strong>Storage note:</strong> Dark roast beans need airtight storage more urgently than light roasts. Use within 2–3 weeks of opening.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">⚙️ Oily Beans and Grinders</h3>
              <p className="text-sm text-muted-foreground mb-3">Surface oils from dark roast beans coat grinder burrs and accumulate over time. This oil buildup goes rancid and adds off-flavors to every subsequent grind — even lighter roasts. Dark roast fans should clean their grinders more frequently (weekly) than those who primarily brew light roasts.</p>
            </div>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Is oily coffee bad?</h3>
                <p className="text-muted-foreground text-sm">Not inherently — it just means dark roast. The issue is that surface oils oxidize faster, so dark roast beans have a shorter shelf life once the bag is opened. Consume within 2–3 weeks of opening.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why do oily beans clog my grinder?</h3>
                <p className="text-muted-foreground text-sm">Surface oils coat burrs and accumulate over time, eventually gumming up the grinding mechanism. Dark roast fans should clean their grinders more frequently (weekly) than those primarily grinding lighter roasts.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Can oily beans damage an espresso machine?</h3>
                <p className="text-muted-foreground text-sm">Yes over time. Oils from dark roast beans can build up in the portafilter, group head, and brewing chamber. Regular backflushing and cleaning is especially important with dark roast beans.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">What roast level is oiliest?</h3>
                <p className="text-muted-foreground text-sm">French roast and Italian roast (the darkest levels) are the oiliest. The extended roast time pushes more lipids to the bean surface. Medium and light roasts have dry surfaces with oils intact inside the bean.</p>
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

          <div className="bg-gradient-to-r from-stone-700 to-amber-800 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Coffee Science</h2>
            <p className="text-lg text-white/90 mb-6">Understand every variable in your brew with BeanSensei.</p>
            <a href="https://beansensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-stone-800 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Try BeanSensei →<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
