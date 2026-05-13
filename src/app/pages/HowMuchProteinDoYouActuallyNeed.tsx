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
          <p className="text-xl text-muted-foreground">The number on a government chart is a floor for “not deficient,” not the same thing as “feels strong, stays full, keeps muscle while life gets messy.” Most of us trip over the second problem: not enough protein early in the day, or plenty at dinner but almost none at breakfast and lunch.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>9 min read</span><span>•</span><span>All Levels</span><span>🥩📊</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-emerald-200 to-green-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🥩</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-emerald-50 border-l-4 border-emerald-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🎯</span>
            <div>
              <p className="font-bold text-emerald-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">About 0.8 grams of protein per kilogram of body weight per day is a classic minimum for average adults—think “avoid deficiency,” not “optimize muscle or appetite.” In real kitchens, many people feel and perform better closer to 1.2–1.6 g/kg, and short phases up toward roughly 2.2 g/kg can make sense for heavy training or when you are trying not to lose muscle in a steep calorie cut. The catch most charts skip: spreading protein across meals usually matters as much as the daily total.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Protein is the Lego brick your body uses to repair skin, enzymes, immune gear, and muscle. You are not “wasting” protein if you eat more than the minimum—you are buying insurance for recovery, steadier hunger, and the slow fight against losing strength as birthdays pile up. The confusing part is that one headline number ignores age, activity, injuries, dieting, and whether your breakfast was mostly toast.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Three bands that map to real life</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-200">
              <h3 className="text-xl mb-3">The survival floor: about 0.8 g/kg</h3>
              <p className="text-base text-foreground/80 leading-relaxed">This is the neighborhood public health math uses for “enough for many sedentary adults not to fall apart.” It is not tuned for someone lifting heavy, walking a physical job all day, healing from surgery, or trying to lose fat without giving up muscle. Treat it like the legal speed limit on a quiet street—not the speed you take on the highway when the wind picks up.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
              <h3 className="text-xl mb-3">The “this actually fits my week” zone: about 1.2–1.6 g/kg</h3>
              <p className="text-base text-foreground/80 leading-relaxed">Here is where a lot of people land once they stop under-eating protein by accident. Meals feel stickier through the afternoon, strength work recovers a little kinder, and weight-loss plans feel less like a hunger dare. You still eat normal food; you just stop building every plate like bread is the main character.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-200">
              <h3 className="text-xl mb-3">High-demand chapters: up toward about 2.2 g/kg</h3>
              <p className="text-base text-foreground/80 leading-relaxed">Aggressive training blocks, big caloric deficits, or older adults fighting “anabolic resistance” (a fancy way of saying muscles get a little quieter about growing) are the usual reasons to creep higher for a while—not forever as a personality trait. Kidneys are the usual worry people whisper about; in healthy adults, typical intakes in this range are broadly well tolerated, but medical kidney disease is a different conversation entirely.</p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Why protein is not only a gym story</h2>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">Muscle is the obvious poster child, but protein also backs everyday resilience—wound healing, immune chemistry, enzymes that run your metabolism—and it changes how loud your appetite talks an hour after lunch. When researchers study fullness, protein-rich meals often stretch satisfaction longer than carb-matched plates because of how slowly food leaves the stomach and how gut hormones like PYY and GLP-1 respond. You do not need to memorize those names; the kitchen translation is “chicken-and-beans lunch” versus “noodles-alone lunch.”</p>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">The pattern that quietly fails people is front-loading the day with refined starch and back-loading protein at dinner. The spreadsheet can still say “enough grams,” but your muscles and appetite only see what arrived in each window. A practical fix is boring on purpose: build breakfast and lunch with a clear protein anchor—eggs, Greek yogurt, tofu, fish, leftovers—then let dinner be flexible.</p>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">In plain kitchen terms</h4>
            <p className="text-base text-foreground/80 leading-relaxed">If you are guessing, aim near the middle band (1.2–1.6 g/kg), split it across three or four eating times, and adjust up when training ramps up or down when your clinician asks you to. Numbers are training wheels; the goal is meals that do not leave you prowling the pantry two hours later.</p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">A weekday framework you can repeat</h2>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">Pick a midpoint in the 1.2–1.6 g/kg band, multiply by your weight in kilograms, then divide across meals. Example: 75 kg × 1.4 g/kg ≈ 105 g for the day—that might look like 30–35 g at breakfast, the same at lunch, the same at dinner, and a yogurt or edamame snack if you are short. You are not married to the math; you are teaching your hands what a protein-forward plate feels like.</p>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">Behavior beats perfection. Anchor each meal with protein first, add vegetables or fruit for fiber, then decide how much rice, bread, or dessert fits the day you actually had. That order keeps blood sugar steadier for many people than doing the reverse and chasing protein as an afterthought.</p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Is high protein bad for healthy kidneys?</h3><p className="text-foreground/80 text-base leading-relaxed">For people with healthy kidneys, the intakes most athletes and coaches talk about are usually not the villain the internet makes them out to be. If you have kidney disease or have been told to limit protein, that is individualized medical territory—follow your care team, not a blog chart.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Do I need protein powder?</h3><p className="text-foreground/80 text-base leading-relaxed">No. Powder is a convenience tool for busy mornings or sketchy hotel rooms. Food-first still wins on micronutrients and chewing time, both of which matter for how satisfied you feel.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Should targets rise with age?</h3><p className="text-foreground/80 text-base leading-relaxed">Often, yes. Older adults sometimes need more per meal to overcome that quieter muscle-building response—same protein, but spread and portioned with intention beats one giant steak once a week.</p></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Build Better Protein Meals</h2>
            <p className="text-lg text-white/90 mb-6">Start each plate with a protein anchor, then add vegetables and smart carbs so fullness shows up without you micromanaging every calorie.</p>
            <Link to="/nutrition-science/balanced-plates-without-counting-calories" className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Read Balanced Plates<ArrowLeft className="w-4 h-4 rotate-180" /></Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
