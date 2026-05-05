import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function HowMuchProteinDoYouActuallyNeed() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm mb-6">Nutrition</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">How Much Protein Do You Actually Need? (And Why Most People Get It Wrong)</h1>
          <p className="text-xl text-muted-foreground">Protein targets are usually underestimated, especially for active adults and aging populations. The bigger mistake is not just total intake, but poor distribution across meals.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>9 min read</span><span>•</span><span>All Levels</span><span>🥩📊</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-emerald-200 to-green-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🥩</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-emerald-50 border-l-4 border-emerald-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🎯</span>
            <div>
              <p className="font-bold text-emerald-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">0.8 g/kg is a minimum survival threshold, not a performance or longevity target. Many adults do better around 1.2-1.6 g/kg, and up to ~2.2 g/kg can be useful for muscle gain phases. Distribution across meals matters as much as daily total.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Most people have heard one protein number and assume it applies to everyone. In practice, protein needs vary by age, training load, recovery goals, calorie intake, and health context. If your goal is to maintain lean mass, recover from training, or improve satiety while managing body weight, the common minimum target is often too low to be optimal.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">The Three Useful Protein Ranges</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-200">
              <h3 className="text-xl mb-3">1) Minimum baseline: ~0.8 g/kg</h3>
              <p className="text-sm text-muted-foreground">This level is designed to prevent deficiency in average adults, not to maximize strength, preserve muscle during dieting, or support high training volume. It is a floor.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
              <h3 className="text-xl mb-3">2) Health and body composition: ~1.2-1.6 g/kg</h3>
              <p className="text-sm text-muted-foreground">For many adults, this range supports better fullness, improved retention of lean mass, and stronger recovery than minimum-only intake. It is often the practical everyday target.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-200">
              <h3 className="text-xl mb-3">3) Muscle-building or high-demand phases: up to ~2.2 g/kg</h3>
              <p className="text-sm text-muted-foreground">Higher intake can be useful during aggressive training blocks, caloric deficits, or when trying to maximize muscle retention and adaptation.</p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Why Protein Matters Beyond Muscle</h2>
          <ul className="text-sm text-muted-foreground">
            <li><strong>Lean mass protection:</strong> critical for metabolic health and functional aging.</li>
            <li><strong>Satiety support:</strong> protein-rich meals reduce hunger rebound better than low-protein meals.</li>
            <li><strong>Recovery:</strong> amino acids support training adaptation and tissue repair.</li>
            <li><strong>Meal stability:</strong> helps reduce snack-driven energy swings in daily life.</li>
          </ul>

          <p className="text-sm text-muted-foreground">One frequent pattern in real diets: low-protein breakfast, moderate lunch, very high-protein dinner. Total may look acceptable on paper, but the distribution misses repeated opportunities for satiety and muscle-protein synthesis throughout the day. A more effective approach is to spread protein across 3-4 feeding windows.</p>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Sensei Insight</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Protein distribution matters more than most people realize. Hitting 120 g/day with one huge dinner is generally less useful than splitting intake into balanced meals with enough protein each time to drive fullness and recovery signals.</p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">A Practical Daily Framework</h2>
          <p className="text-sm text-muted-foreground">If you are unsure where to start, choose a midpoint target in the 1.2-1.6 g/kg band, then distribute intake over main meals. For example, a 75 kg adult targeting 1.4 g/kg lands near 105 g/day. That can look like ~30-35 g at breakfast, lunch, and dinner, with a smaller high-protein snack if needed.</p>

          <p className="text-sm text-muted-foreground">This method works well because it is behaviorally simple. Instead of chasing grams at the end of the day, each meal is built with a protein anchor first, then vegetables/fiber, then carbs and fats according to activity and preference.</p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Is high protein bad for healthy kidneys?</h3><p className="text-muted-foreground text-sm">In healthy individuals, typical higher-protein diets are generally well tolerated. People with diagnosed kidney disease should follow medical guidance specific to their condition.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Do I need protein powder?</h3><p className="text-muted-foreground text-sm">No. Whole-food protein sources can cover most needs. Powder is a convenience tool when schedule or appetite makes whole-food intake difficult.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Should protein targets change with age?</h3><p className="text-muted-foreground text-sm">Yes, often upward. Older adults frequently benefit from higher and better-distributed protein intake to support muscle retention and function.</p></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Build Better Protein Meals</h2>
            <p className="text-lg text-white/90 mb-6">Start each plate with a protein anchor, then add vegetables and smart carbs for better satiety and steady energy.</p>
            <Link to="/nutrition-science/balanced-plates-without-counting-calories" className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Read Balanced Plates<ArrowLeft className="w-4 h-4 rotate-180" /></Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

