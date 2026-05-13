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
          <p className="text-xl text-muted-foreground">Persistent hunger is usually a meal-design problem dressed up as a willpower problem. Your gut and brain talk through hormones, stretch, texture, and how fast the stomach empties—so two meals with similar calories can land completely differently an hour later.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>8 min read</span><span>•</span><span>All Levels</span><span>🍽️🧠</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-amber-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🍽️</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🧬</span>
            <div>
              <p className="font-bold text-orange-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">If you feel hungry soon after eating, the meal was often light on protein and fiber, heavy on refined starch or liquid calories, or gone so fast your mouth and stomach barely registered it. Ghrelin (often called the hunger hormone) rises before meals and usually falls after eating, but a low-protein, fast-digesting plate may not keep it quiet for long. Leptin is more about longer-term energy storage signals; the immediate “why am I starving at 4 p.m.” story is usually the last meal’s structure, not your moral fiber.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Blame feels satisfying; biology is less personal. Satiety is an output of protein, fiber, water volume, chew time, and how sharply blood sugar rises and falls. Ultra-palatable snacks add another layer—easy to swallow, hard to satiate—because reward signals can outrun fullness signals when texture disappears in a hurry.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">What your body is actually measuring</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">Hormones you have heard of—and what they do in plain English</h3>
              <p className="text-base text-foreground/80 leading-relaxed">Ghrelin nudges you toward the fridge before meals; food—especially protein—usually trims that signal. Insulin rises when carbohydrates enter the bloodstream; that is normal metabolism, not a villain, but a sharp spike from sugary drinks or solo pastries can set up a faster return of hunger for some people when blood sugar falls again. You do not need to memorize the whole cast list to fix breakfast.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">Leptin and the long game</h3>
              <p className="text-base text-foreground/80 leading-relaxed">Leptin talks to the brain about stored energy. It matters for long-term regulation, but it will not rescue a lunch that was mostly refined starch. Think of leptin as the quarterly budget review and meal structure as this afternoon’s cash flow.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">Stretch, texture, and “oral processing”</h3>
              <p className="text-base text-foreground/80 leading-relaxed">Your mouth and stomach use time and bulk as part of the “enough” conversation. Creamy milkshakes and crunchy snacks can disappear before stretch receptors and gut hormones have much to say. That is not weakness; it is how fast-eating, low-fiber meals behave.</p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">High-satiety meals versus the ones that vanish</h2>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">A high-satiety lunch might be beans, greens, olive oil, and chicken with a piece of fruit—protein and fiber together, chew time, and a gentler glucose curve for many people. A lower-satiety pattern is the classic cereal-plus-juice morning: refined carbs, little protein, little fiber, lots of speed. The calories can look similar on paper; the afternoon story rarely does.</p>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">Liquid calories deserve a side-eye in this conversation. They skip chewing cues and can stack energy without the brake that often comes from a slower meal.</p>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">In plain kitchen terms</h4>
            <p className="text-base text-foreground/80 leading-relaxed">If you are always hungry, rebuild breakfast and lunch first. Add a protein anchor, add a fiber source you will actually eat, slow down for five minutes, and notice whether the 3 p.m. snack hunt quiets down before you rewrite your entire identity.</p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">How to rebuild meals without turning life into a diet</h2>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">You do not have to ban favorite foods. You do have to stop letting them be the foundation. Start meals from protein and plants, then decide how much bread, pasta, or dessert fits the day you actually lived—training day versus desk day versus sick day.</p>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">Sleep loss, stress, medications, and heavy training all raise appetite noise too. Meal structure is the first lever because you control the grocery list; the other levers still deserve honesty when you have addressed the basics and hunger remains loud.</p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Why am I hungry after cereal or pastries?</h3><p className="text-foreground/80 text-base leading-relaxed">Those meals are often low in protein and fiber and digest quickly, so ghrelin comes back sooner and blood sugar can fall faster after a spike. Add Greek yogurt, nuts, eggs, or fruit with the peel still in play; swap some refined grain for a higher-fiber option when you can.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Do fats help satiety too?</h3><p className="text-foreground/80 text-base leading-relaxed">Yes—fat carries flavor and slows emptying a little—but protein and fiber are the most reliable twin engines for “I forgot to snack.” Fat on a low-protein meal can still feel snacky rather than settling.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Is hunger always about food choices?</h3><p className="text-foreground/80 text-base leading-relaxed">No. Poor sleep, anxiety, some medications, and growth or healing can all crank appetite. Fix the obvious meal gaps first; if hunger stays extreme, loop in a clinician so you are not self-blaming for something medical.</p></div>
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
