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
          <p className="text-xl text-muted-foreground">You can eat better tomorrow without installing a food-scale religion. A visual plate—roughly half plants, a quarter protein, a quarter starch, plus a little fat for flavor—captures most of what diet science keeps repeating: combine protein and fiber with your carbs so meals feel longer and blood sugar swings softer.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>8 min read</span><span>•</span><span>Beginner Friendly</span><span>🍽️⚖️</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-teal-200 to-cyan-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🍽️</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-teal-50 border-l-4 border-teal-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🧭</span>
            <div>
              <p className="font-bold text-teal-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Picture a dinner plate: about half covered with vegetables (mostly non-starchy if you are managing energy), about a quarter with protein, about a quarter with starch, and a drizzle of oil, nuts, avocado, or dressing so fat carries flavor and helps absorb fat-soluble vitamins. That shape naturally stacks protein with fiber, slows gastric emptying (how fast food leaves the stomach), and usually produces gentler glucose curves than a plate that is mostly white flour and lonely butter.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Calorie counting is a tool, not a personality. For many people it works until travel, holidays, or exhaustion break the habit. A plate template survives those weeks because you can eyeball a cafeteria tray or a restaurant plate the same way you eyeball your own kitchen. You are trading spreadsheet precision for something that might actually still be there in February.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">What the template is doing for your body</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-teal-200">
              <h3 className="text-xl mb-3">Half the plate: vegetables as the volume knob</h3>
              <p className="text-base text-foreground/80 leading-relaxed">Non-starchy vegetables add potassium, magnesium, and fiber without stacking energy density the way oil or pastry does. They also add chew time, which matters for fullness even when you are not thinking about hormones.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-cyan-200">
              <h3 className="text-xl mb-3">A quarter protein: the anchor</h3>
              <p className="text-base text-foreground/80 leading-relaxed">Protein shifts the hormone conversation after you eat—signals like PYY and GLP-1 often rise—while digestion burns a little more energy per calorie than fat or starch alone (the thermic effect of food). Translation: chicken next to the rice, not chicken buried under a mountain of rice.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-teal-200">
              <h3 className="text-xl mb-3">A quarter starch plus sensible fat: fuel and flavor</h3>
              <p className="text-base text-foreground/80 leading-relaxed">Carbohydrates are not villains; they are the fast fuel your brain and muscles like when portions match your day. Fat carries taste and helps you absorb vitamins A, D, E, and K from plants. The plate method nudges you toward enough of each without turning dinner into a math exam.</p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Why this tends to beat “white-knuckle restriction”</h2>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">Mixed meals—protein plus fiber plus starch—usually produce smaller glucose spikes than carb-alone meals for many people, because fiber thickens stomach contents and protein slows the rush of starch to enzymes. You still eat potatoes; you just do not eat potatoes as the entire story.</p>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">The hidden win is adherence. Decision fatigue is the silent reason diets fail. When the default is “half plants, quarter protein, quarter starch,” you can order at a counter or build a lunchbox without opening an app.</p>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">In plain kitchen terms</h4>
            <p className="text-base text-foreground/80 leading-relaxed">If energy crashes after lunch, slide more protein and vegetables onto the plate before you blame “carbs” as a whole. If training feels flat, put a little more starch near workouts while keeping the protein anchor. The plate is a starting shape, not a law carved in stone.</p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">How to bend the template without breaking it</h2>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">Heavy training days can grow the starch quarter; low-appetite days might shrink it while keeping protein steady. Older adults sometimes need a larger protein share per meal to support muscle maintenance. One-bowl meals still count—mentally separate the chicken, the veg pile, and the noodles rather than pretending a cream-drenched pasta is secretly a salad.</p>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">When progress stalls, you can borrow counting temporarily as a diagnostic, then return to the plate when you know what was missing. Structure first, precision when needed.</p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Do I still need to count calories?</h3><p className="text-foreground/80 text-base leading-relaxed">Not always. Many people improve a lot from composition alone. If weight or energy plateaus, a short logging phase can show whether portions crept up while the shape of the plate stayed pretty.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">What about pasta bowls and stir-fries?</h3><p className="text-foreground/80 text-base leading-relaxed">Mentally unpack the bowl: identify your protein chunk, your vegetable volume, and where the dense carbs live. Add a side salad or extra veg instead of pretending the sprinkle of parsley was the vegetable course.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Does this work for families?</h3><p className="text-foreground/80 text-base leading-relaxed">Yes—kids and adults can share the same plate idea even if serving sizes differ. You are teaching proportion, not running separate macro kitchens for every person.</p></div>
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
