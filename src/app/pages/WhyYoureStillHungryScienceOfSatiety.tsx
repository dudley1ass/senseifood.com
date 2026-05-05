import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyYoureStillHungryScienceOfSatiety() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm mb-6">Nutrition</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Why You’re Still Hungry: The Science of Satiety</h1>
          <p className="text-xl text-muted-foreground">Persistent hunger is often a meal design issue, not a discipline issue. Satiety is regulated by hormones, food structure, and meal composition.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>8 min read</span><span>•</span><span>All Levels</span><span>🍽️🧠</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-amber-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🍽️</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🧬</span>
            <div>
              <p className="font-bold text-orange-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">If you feel hungry soon after eating, meals are often low in protein and fiber, high in refined carbs, and low in volume. Hunger hormones respond to meal composition and timing, not just calories.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Many people blame themselves for constant hunger. In reality, satiety is a physiological output. Hormonal signaling, gastric emptying speed, food texture, and nutrient mix all influence whether a meal keeps you full for hours or only minutes.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">The Core Satiety Signals</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">Ghrelin: hunger signaling</h3>
              <p className="text-sm text-muted-foreground">Ghrelin rises before meals and tends to fall after eating. Meals that are protein-poor or highly refined may not suppress hunger for long.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">Leptin: longer-term energy status</h3>
              <p className="text-sm text-muted-foreground">Leptin relates to stored energy and interacts with appetite regulation, but short-term meal satisfaction is still heavily influenced by immediate meal structure.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">Gut-derived fullness cues</h3>
              <p className="text-sm text-muted-foreground">Protein, fiber, and meal volume trigger mechanical and chemical signals that improve fullness and reduce rebound hunger.</p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">High vs Low Satiety Meal Patterns</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200 my-8">
            <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <h4 className="font-bold text-orange-700 mb-2">Higher satiety pattern</h4>
                <ul className="space-y-1">
                  <li>Protein source in each meal</li>
                  <li>High-fiber vegetables and legumes</li>
                  <li>Moderate minimally processed carbs</li>
                  <li>Adequate chewing and meal volume</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-amber-700 mb-2">Lower satiety pattern</h4>
                <ul className="space-y-1">
                  <li>Refined carbs as meal base</li>
                  <li>Low protein breakfast/lunch</li>
                  <li>Sugary snack replacement for meals</li>
                  <li>Liquid calories without fiber</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">This is why two meals with similar calories can feel completely different. Meal A (protein + fiber + volume) can keep hunger low for hours. Meal B (refined carbs + low protein) can produce rapid return of appetite.</p>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Key Takeaway</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">If you are always hungry, your meals are usually underbuilt, not your willpower. Strengthen meal architecture first: protein anchor, fiber-rich plants, and stable carbohydrate quality.</p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">How to Rebuild Meals for Better Fullness</h2>
          <ul className="text-sm text-muted-foreground">
            <li>Add a reliable protein source to breakfast and lunch.</li>
            <li>Include at least one high-fiber vegetable or legume component in each main meal.</li>
            <li>Replace snack-only meals with structured plates when possible.</li>
            <li>Prefer whole-food carbohydrates over ultra-refined options for steadier appetite response.</li>
          </ul>

          <p className="text-sm text-muted-foreground">Hunger management is not about eliminating favorite foods forever. It is about base construction. When a meal starts from protein and fiber, flexibility for enjoyment foods improves because the biological foundation is stronger.</p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Why am I hungry after cereal or pastries?</h3><p className="text-muted-foreground text-sm">These meals are often low in protein and fiber and can digest quickly, leading to shorter satiety and stronger rebound hunger.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Do fats help satiety too?</h3><p className="text-muted-foreground text-sm">Yes, fats support fullness and meal satisfaction, but protein and fiber are usually the most consistent high-leverage satiety drivers.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Is frequent hunger always a nutrition issue?</h3><p className="text-muted-foreground text-sm">Not always. Sleep debt, stress, medications, and activity load can also influence appetite signaling. Meal structure is still the best first lever.</p></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Fix Hunger at the Meal Level</h2>
            <p className="text-lg text-white/90 mb-6">Start with protein and fiber, then build the rest of the plate around your day.</p>
            <Link to="/nutrition-science/protein-plus-fiber-for-health-and-weight-control" className="inline-flex items-center gap-2 bg-white text-orange-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Read Protein + Fiber<ArrowLeft className="w-4 h-4 rotate-180" /></Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

