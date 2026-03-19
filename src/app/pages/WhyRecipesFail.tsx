import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyRecipesFail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm mb-6">Food Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Why Recipes Fail</h1>
          <p className="text-xl text-muted-foreground">It's almost never the recipe. Here are the 10 universal reasons baking goes wrong — and the systematic way to diagnose and fix any recipe failure.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>10 min read</span><span>•</span><span>All Levels</span><span>🔬❌</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-rose-200 to-orange-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">❌</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-rose-50 border-l-4 border-rose-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🔬</span>
            <div>
              <p className="font-bold text-rose-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">90% of recipe failures come from 4 causes: wrong ingredient temperature, inaccurate measurement, wrong oven temperature, and substitutions that changed the chemistry. Understanding which one applies to your specific failure tells you exactly what to fix.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">When a recipe fails, the instinct is to blame the recipe. But recipes — especially well-tested ones from established sources — almost never have fundamental errors. What fails is the execution, and execution failures almost always fall into a small number of predictable, identifiable categories. Learning to diagnose which category applies is the difference between a baker who improves and one who keeps having the same failures.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">The 10 Universal Reasons Recipes Fail</h2>

          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3">📏 1. Measurement Errors — Most Common</h3>
              <p className="text-sm text-muted-foreground mb-3">Baking is chemistry, and chemistry requires precise ratios. Scooping flour directly from the bag packs in 20–30% extra. A tablespoon that's heaped rather than level can double the amount of a strong ingredient like baking soda. Brown sugar loosely packed vs. firmly packed is a 30% difference in volume. Most home bakers measure imprecisely and don't realize it because the results are often close enough that they attribute failures to other causes.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix system:</strong> Use a kitchen scale for all ingredients. Spoon flour into measuring cups and level. Always use "level" when measuring small amounts of leavening, salt, and spices.</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🌡️ 2. Ingredient Temperature Wrong</h3>
              <p className="text-sm text-muted-foreground mb-3">Butter temperature controls whether you get flakiness (cold), airiness (room temp), or density (melted). Cold eggs break emulsions. Warm yeast water kills yeast. Cold milk in a sauce causes lumps. The phrase "room temperature" in recipes means 65–68°F — not the 78°F summer kitchen most people work in. Temperature is not "approximately" — it has specific, dramatic effects on the chemistry of your bake.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix system:</strong> Read the recipe in full 30–60 minutes before starting. Take ingredients out of the fridge when instructed. Own an instant-read thermometer — use it.</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3">🔥 3. Oven Temperature Inaccurate</h3>
              <p className="text-sm text-muted-foreground mb-3">Studies have shown that the majority of home ovens have calibration errors of 25–75°F. An oven set to 350°F may be running at 375°F or 325°F — both of which produce completely different results than the intended temperature. This is the single most common invisible variable in home baking, and it explains why "I followed the recipe exactly" still produces failures.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix system:</strong> Buy a $10 oven thermometer and put it in your oven permanently. Always preheat for at least 20 minutes. Learn your oven's hot spots (bread test: lay slices of bread across the rack and toast — the pattern shows exactly where your oven runs hot).</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🔄 4. Unauthorized Substitutions</h3>
              <p className="text-sm text-muted-foreground mb-3">Every ingredient in a recipe is doing specific chemistry. Substituting based on similarity (Greek yogurt for sour cream, oil for butter, honey for sugar) changes that chemistry in ways that cascade through the entire recipe. Brown sugar for white sugar changes moisture content, spread, and pH. Oil for butter changes emulsification and texture. Almond flour for all-purpose flour completely changes gluten structure, moisture absorption, and starch behavior. Substitutions require understanding the chemistry — not just the similarity.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix system:</strong> If you must substitute, understand WHY the original ingredient is in the recipe (what job it does). Then find a substitute that does the same job, not just one that seems similar.</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3">⏱️ 5. Wrong Timing (Over or Under Baking)</h3>
              <p className="text-sm text-muted-foreground mb-3">Oven times in recipes are guidelines based on standard conditions — a calibrated oven, sea level altitude, ingredients at the specified temperature, and the recipe's specific pan size. None of these are guaranteed to match your conditions. A dark pan bakes cookies faster than a light one. A glass dish bakes cake slower than a metal one. High altitude changes both leavening and evaporation rates. Visual and temperature cues are more reliable than timers.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix system:</strong> Learn the doneness cues for what you're baking — not just the time. For cakes: internal temp 200–210°F + toothpick test. For cookies: edges set, center still soft. For bread: internal temp 190–210°F + hollow sound when tapped.</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🥣 6. Mixing Errors</h3>
              <p className="text-sm text-muted-foreground mb-3">Under-creaming butter doesn't incorporate enough air. Over-mixing after flour develops too much gluten. Folding too aggressively deflates beaten eggs. Not mixing enough leaves unincorporated pockets of flour or fat. Mixing is not "stir until combined" — it has specific goals at each stage that determine the final texture of the bake.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix system:</strong> Understand what you're trying to achieve at each mixing stage: creaming (incorporating air), folding (preserving air), final mixing after flour (developing just enough structure without over-developing gluten). Match technique to goal.</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3">📅 7. Old or Expired Ingredients</h3>
              <p className="text-sm text-muted-foreground mb-3">Baking powder loses potency within 6–12 months of opening. Yeast dies. Spices go flat. Baking soda absorbs ambient odors and loses effectiveness. Old vanilla smells faint. Stale flour can impart off-flavors. Any of these in a recipe produces results that look right but taste wrong or don't rise correctly. These failures are particularly frustrating because the technique was correct — the ingredient simply couldn't do its job.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Test before using:</strong> Baking powder: 1 tsp in hot water — should bubble vigorously. Baking soda: 1 tsp in vinegar — should fizz immediately. Yeast: proof in warm water with a pinch of sugar — should foam in 5–10 minutes.</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🫙 8. Wrong Pan Size or Material</h3>
              <p className="text-sm text-muted-foreground mb-3">A recipe written for an 8-inch round pan produces completely different results in a 9-inch pan (25% more surface area, thinner batter, faster baking, different texture) or a glass pan (lower heat conductivity, slower bottom baking, longer total time). Dark pans absorb more heat and brown faster. Thin pans have hot spots. These are not minor variations — they fundamentally change the bake.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix system:</strong> Use the pan size specified. If you must substitute, adjust time and temperature accordingly. Generally: moving to a larger pan requires less time. Glass or ceramic requires lower temp (reduce by 25°F) or longer time than metal.</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3">💧 9. Humidity and Altitude</h3>
              <p className="text-sm text-muted-foreground mb-3">High humidity adds moisture to flour (hygroscopic) and can make doughs sticky, cookies spread more, and caramels refuse to set. Low humidity dries out dough and can make bread crust too thick. High altitude (above 3,500 feet) changes both leavening gas behavior (gases expand more, causing over-rising then collapse) and the boiling point of water (lower BP means baked goods cook at lower internal temperatures, affecting both timing and structure).</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>High altitude fixes:</strong> Reduce baking powder by 25%. Reduce sugar by 1–2 tbsp. Increase liquid by 1–2 tbsp. Increase oven temp by 15–25°F. Watch baking carefully — things move faster at altitude.</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">📖 10. Misreading the Recipe</h3>
              <p className="text-sm text-muted-foreground mb-3">"1 cup chopped pecans" vs. "1 cup pecans, chopped" — the first is measured after chopping (more), the second is measured whole then chopped (less). "Softened butter" vs. "melted butter." "Packed brown sugar" vs. "brown sugar." "Sifted flour" vs. "flour, sifted." "1 lemon, juiced" vs. "1 tablespoon lemon juice." Every one of these produces different results. Recipes are precise documents that require careful reading.</p>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-green-800"><strong>Fix system:</strong> Read the entire recipe before starting. Make a note of every qualifier ("packed," "softened," "room temperature," "sifted"). Never assume you know what an instruction means — verify it.</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-rose-200 my-10">
            <h3 className="text-xl mb-6">Recipe Failure Diagnosis Framework</h3>
            <p className="text-sm text-muted-foreground mb-6">When something goes wrong, work through these questions in order:</p>
            <div className="space-y-3">
              {[
                ['Did I measure everything precisely?', 'Weigh vs. volume, packed vs. loose, level vs. heaped'],
                ['Were ingredients at the right temperature?', 'Butter, eggs, dairy — all make a difference'],
                ['Is my oven actually at the right temperature?', 'Check with thermometer, adjust and note difference'],
                ['Did I make any substitutions?', 'Even "small" ones change the chemistry'],
                ['Did I bake long enough / not too long?', 'What were the visual cues telling me?'],
                ['Are my leavening agents still active?', 'Test before next attempt'],
                ['Did I use the right pan?', 'Size and material both matter significantly'],
              ].map(([q, a], i) => (
                <div key={i} className="flex items-start gap-4 p-3 bg-rose-50 rounded-lg">
                  <span className="font-bold text-rose-600 text-sm flex-shrink-0">{i + 1}.</span>
                  <div><p className="font-medium text-sm">{q}</p><p className="text-xs text-muted-foreground mt-1">{a}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Why Understanding the Science Helps</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">A baker who knows why butter temperature matters can look at a flat, dense cake and immediately identify "the butter was too warm" as the likely cause. A baker who only knows procedures has to guess. Food science education transforms failure diagnosis from guesswork into engineering. Every article on this site is designed to give you that diagnostic ability for a specific problem — so that when something goes wrong, you know exactly which variable to change.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">How do I know which of the 10 reasons caused my specific failure?</h3><p className="text-muted-foreground text-sm">The symptom tells you. Dense cake = usually wrong fat temperature or too much flour. Flat cookies = butter too warm or too little flour. Sunken center = under-baked or too much leavening. Tough texture = over-mixed. Dry result = too much flour or over-baked. Each failure mode has characteristic symptoms that point to specific causes.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Should I modify a recipe that keeps failing, or find a different one?</h3><p className="text-muted-foreground text-sm">Diagnose first. If you can identify the specific execution failure (measurement, temperature, timing), fix that and retry the same recipe. Only consider changing recipes if you've eliminated all execution variables and the recipe itself produces an undesirable result even when followed precisely.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Why do professional bakers rarely have these failures?</h3><p className="text-muted-foreground text-sm">Professionals weigh everything, have calibrated ovens, work at controlled temperatures, use standardized procedures, and have made each recipe dozens of times so they understand exactly what the batter should look, feel, and smell like at each stage. Mimicking even one of these habits — weighing ingredients — eliminates the most common failure category immediately.</p></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Diagnose Your Specific Problem</h3>
            <div className="space-y-3">
              <Link to="/cookie-science/why-cookies-flatten" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Flatten — butter temperature diagnosis</Link>
              <Link to="/cake-science/why-cakes-sink" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Sink — leavening and underbaking diagnosis</Link>
              <Link to="/cake-science/why-cakes-are-dense" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Are Dense — mixing and measurement diagnosis</Link>
              <Link to="/pie-science/why-pie-filling-is-runny" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Pie Filling Is Runny — starch and timing diagnosis</Link>
              <Link to="/coffee-science/why-coffee-tastes-flat" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Coffee Tastes Flat — extraction and freshness diagnosis</Link>
              <Link to="/baking-science/why-salt-makes-food-taste-better" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Salt Makes Food Taste Better — the seasoning fix</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-rose-500 to-orange-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Apply the Science Before You Bake</h2>
            <p className="text-lg text-white/90 mb-6">Use our food science tools to understand exactly what each ingredient does before it goes in the bowl.</p>
            <Link to="/articles" className="inline-flex items-center gap-2 bg-white text-rose-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Browse All Articles<ArrowLeft className="w-4 h-4 rotate-180" /></Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
