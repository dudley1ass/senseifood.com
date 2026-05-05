import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function PowerOfVegetablesWhyQuantityMatters() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-lime-600 text-white px-4 py-2 rounded-full text-sm mb-6">Nutrition</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">The Power of Vegetables: Why Quantity Matters More Than You Think</h1>
          <p className="text-xl text-muted-foreground">Vegetables are not just low-calorie fillers. They are fiber and phytochemical systems that influence gut health, inflammation biology, and appetite regulation.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>8 min read</span><span>•</span><span>All Levels</span><span>🥦🌈</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-green-200 to-lime-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🥦</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-green-50 border-l-4 border-green-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🌱</span>
            <div>
              <p className="font-bold text-green-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Vegetables deliver fiber, micronutrients, water, and phytochemicals that shape metabolic and immune signaling. The quantity and diversity you eat each day matter more than one “superfood” choice.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Nutrition conversations often reduce vegetables to vitamins and calories. That misses the bigger biological effect. A high-vegetable pattern influences digestion speed, gut microbiome composition, inflammatory signaling, and satiety. This is why consistent vegetable intake has outsized impact relative to its calorie load.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">Why Volume and Consistency Matter</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
              <h3 className="text-xl mb-3">Fiber feeds your gut ecosystem</h3>
              <p className="text-sm text-muted-foreground">Fiber reaches the colon where microbes ferment it and produce short-chain fatty acids (SCFAs) like butyrate. These compounds support gut barrier function and beneficial immune and metabolic pathways.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-lime-200">
              <h3 className="text-xl mb-3">Phytochemicals provide signaling benefits</h3>
              <p className="text-sm text-muted-foreground">Polyphenols, carotenoids, glucosinolates, and other plant compounds influence oxidative stress and inflammatory processes. They are not magic cures, but their cumulative effect over time is meaningful.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
              <h3 className="text-xl mb-3">High-volume foods improve appetite control</h3>
              <p className="text-sm text-muted-foreground">Vegetables add chew time, bulk, and water content, helping meals feel larger and more satisfying at a lower energy density.</p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">Practical Targets That Work</h2>
          <ul className="text-sm text-muted-foreground">
            <li>Aim for roughly <strong>half your plate</strong> from vegetables at main meals.</li>
            <li>Target about <strong>5-9 servings/day</strong> depending on appetite and context.</li>
            <li>Use a <strong>color diversity rule</strong>: green, red, orange/yellow, purple/blue, white/tan over the week.</li>
          </ul>

          <p className="text-sm text-muted-foreground">Color variety matters because different pigments correlate with different phytochemical families. Green cruciferous vegetables differ from red tomatoes and berries, which differ again from orange carotenoid-rich foods. Eating a “rainbow” is not just visual advice. It is shorthand for biochemical diversity.</p>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Sensei Insight</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Vegetables are less about calorie math and more about biological signaling. If your meal pattern is low in vegetables, your micronutrient density, fiber intake, and gut-supportive compounds all tend to underperform together.</p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">How to Increase Intake Without Burnout</h2>
          <p className="text-sm text-muted-foreground">The best strategy is systems-based, not motivation-based. Keep prepared vegetables visible and easy to use. Add frozen options for speed and consistency. Build one reliable default per meal (for example: lunch always includes one raw and one cooked vegetable component). This reduces decision fatigue and increases adherence.</p>

          <p className="text-sm text-muted-foreground">If appetite is low or you are transitioning from a low-vegetable pattern, start with one additional serving per day for 1-2 weeks, then scale gradually. Sudden very high fiber increases can cause GI discomfort in some people. Steady progression usually works better than dramatic jumps.</p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Do frozen vegetables count?</h3><p className="text-muted-foreground text-sm">Yes. Frozen vegetables are nutritionally useful and often improve consistency because they reduce spoilage and prep friction.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Are vegetable juices equal to whole vegetables?</h3><p className="text-muted-foreground text-sm">Not usually. Juicing often removes much of the fiber and chew-related satiety effects that make vegetables so effective in meal design.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">What if I do not like many vegetables?</h3><p className="text-muted-foreground text-sm">Start with acceptable textures and cooking methods first. Roasting, stir-frying, and blended soups can dramatically improve palatability while preserving the core benefits.</p></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-lime-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Build the Plate Around Plants</h2>
            <p className="text-lg text-white/90 mb-6">Use the balanced plate method to make high-vegetable eating automatic instead of effortful.</p>
            <Link to="/nutrition-science/balanced-plates-without-counting-calories" className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Read Balanced Plates<ArrowLeft className="w-4 h-4 rotate-180" /></Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

