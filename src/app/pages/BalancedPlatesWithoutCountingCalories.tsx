import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function BalancedPlatesWithoutCountingCalories() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm mb-6">Nutrition</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Balanced Plates: The Simplest Way to Eat Right Without Counting Calories</h1>
          <p className="text-xl text-muted-foreground">You can improve meal quality and metabolic stability without tracking every gram. A visual plate structure captures the highest-value nutrition principles in one repeatable habit.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>8 min read</span><span>•</span><span>Beginner Friendly</span><span>🍽️⚖️</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-teal-200 to-cyan-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🍽️</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-teal-50 border-l-4 border-teal-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🧭</span>
            <div>
              <p className="font-bold text-teal-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">A strong default plate is: half vegetables, one quarter protein, one quarter carbohydrate, plus a sensible fat source. This structure naturally improves fullness, energy stability, and nutrient density without requiring macro tracking.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Calorie tracking works for some people, but it can create friction and inconsistency for many. The plate method is a lower-friction system that still aligns with core physiology. It supports blood sugar control, satiety, and recovery by combining protein, fiber-rich foods, and strategic carbohydrate placement in one visual framework.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">The Plate Template</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-teal-200">
              <h3 className="text-xl mb-3">1/2 plate vegetables</h3>
              <p className="text-sm text-muted-foreground">High-volume, micronutrient-dense foods that increase fullness and improve fiber intake with minimal calorie burden.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-cyan-200">
              <h3 className="text-xl mb-3">1/4 plate protein</h3>
              <p className="text-sm text-muted-foreground">Supports satiety, lean mass, recovery, and metabolic health. Most meals benefit from a clear protein anchor.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-teal-200">
              <h3 className="text-xl mb-3">1/4 plate carbs + healthy fat</h3>
              <p className="text-sm text-muted-foreground">Carbohydrates fuel activity; fat improves flavor, absorption, and satiety. Portion and source quality matter more than elimination.</p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Why It Works Physiologically</h2>
          <ul className="text-sm text-muted-foreground">
            <li><strong>Protein + fiber:</strong> slows gastric emptying and improves fullness duration.</li>
            <li><strong>Mixed-macro meals:</strong> reduce sharp glucose spikes compared with refined-carb dominant meals.</li>
            <li><strong>Volume and chew time:</strong> increase meal satisfaction without needing strict calorie counting.</li>
            <li><strong>Repeatable structure:</strong> lowers decision fatigue and improves consistency over time.</li>
          </ul>

          <p className="text-sm text-muted-foreground">The biggest advantage is adherence. A simple visual rule can be applied at home, in cafeterias, at restaurants, and during travel. Precision tools are useful, but reliable systems usually outperform perfect plans that are hard to sustain.</p>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Sensei Feature Direction</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">A visual plate builder can turn this into an interactive score: users drag food portions and instantly see protein/fiber adequacy, balance quality, and likely satiety strength before they eat.</p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">How to Personalize the Template</h2>
          <p className="text-sm text-muted-foreground">The plate method is a framework, not a rigid prescription. Athletes in heavy training may use a larger carbohydrate quadrant around sessions. People in appetite-control phases may increase non-starchy vegetables and keep carbs targeted to activity windows. Older adults may need an intentionally larger protein share to support lean mass retention.</p>

          <p className="text-sm text-muted-foreground">Use the same structure at each meal, then adjust serving size to your context. If energy crashes occur, strengthen protein/fiber and reduce refined-carb dominance. If recovery feels poor, increase quality carbohydrates near training and confirm protein adequacy.</p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Do I still need to count calories?</h3><p className="text-muted-foreground text-sm">Not always. Many people improve outcomes substantially using plate structure alone. If progress stalls, temporary tracking can be added as a diagnostic tool.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">What if I eat mixed dishes like pasta bowls?</h3><p className="text-muted-foreground text-sm">Deconstruct mentally: identify protein amount, vegetable volume, and carb-heavy components. Then adjust side additions to restore plate balance.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Can this work for families?</h3><p className="text-muted-foreground text-sm">Yes. It scales well for household meals because it focuses on proportions and composition, not strict individualized macro calculations.</p></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Use the Plate as Your Default</h2>
            <p className="text-lg text-white/90 mb-6">Simple structure beats perfect math when consistency is the real goal.</p>
            <Link to="/nutrition-science/protein-plus-fiber-for-health-and-weight-control" className="inline-flex items-center gap-2 bg-white text-teal-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Read Protein + Fiber Guide<ArrowLeft className="w-4 h-4 rotate-180" /></Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

