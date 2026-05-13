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
          <p className="text-xl text-muted-foreground">Vegetables are not wallpaper for your plate—they are fiber, water, minerals, and thousands of plant compounds that change how fast a meal digests, how your gut microbes earn their rent, and how full you feel an hour later. Quantity and variety beat chasing one “superfood” headline.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>8 min read</span><span>•</span><span>All Levels</span><span>🥦🌈</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-green-200 to-lime-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🥦</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-green-50 border-l-4 border-green-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🌱</span>
            <div>
              <p className="font-bold text-green-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">When you eat more vegetables—especially a mix of colors—you stack fiber, potassium, magnesium, and polyphenols (plant antioxidants) into the same bite. Fiber thickens the stomach’s contents and slows how quickly starch breaks down; in the colon, microbes ferment some of that fiber into short-chain fatty acids like butyrate, which researchers study for gut lining health and signaling. None of that shows up if vegetables are only a garnish.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Nutrition talk often shrinks vegetables down to “vitamins and low calories.” That misses the lived experience of a meal: chew time, plate volume, and the slow-release chemistry that makes the same dinner feel steadier than a beige, low-fiber version. This is why adding real vegetable mass often changes energy and digestion more than micro-tweaking a supplement.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">Why volume and repetition beat one heroic salad</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
              <h3 className="text-xl mb-3">Fiber feeds the neighborhood in your colon</h3>
              <p className="text-base text-foreground/80 leading-relaxed">Some fiber dissolves into a gel and slows digestion; some stays rougher and adds bulk to stool. What reaches your large intestine mostly intact becomes food for bacteria that return the favor with short-chain fatty acids—small molecules your gut cells can use as fuel. You do not need to name every strain of bacteria; you need enough plants, regularly, that the ecosystem has something to work with.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-lime-200">
              <h3 className="text-xl mb-3">Color is shorthand for chemistry</h3>
              <p className="text-base text-foreground/80 leading-relaxed">Red tomatoes, purple cabbage, orange carrots, and deep green leaves do not share the same pigment kit. “Eat a rainbow” sounds like kindergarten advice; in practice it is a cheap way to diversify polyphenols and carotenoids without turning lunch into a spreadsheet. Frozen mixes count—consistency beats rare perfection.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
              <h3 className="text-xl mb-3">High volume helps appetite without a lecture</h3>
              <p className="text-base text-foreground/80 leading-relaxed">Vegetables bring water and structure, so your jaw and stomach register a meal before you have leaned entirely on dense starch and fat. That is not moral superiority over carbs; it is physics and sensory biology working in your favor when you want steady energy.</p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">Targets that work in real kitchens</h2>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">A durable default is roughly half the plate in vegetables at lunch and dinner when you can, and roughly five to nine total servings across the day depending on appetite—where a serving is closer to a fist of cooked greens or a cup of salad than a single lonely cherry tomato. If that sounds huge, add one serving per week until your grocery cart looks different, not until your stomach rebels.</p>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">Frozen vegetables, bagged salad, pre-cut slaw, and canned tomatoes are all honorable paths. The enemy is usually friction: wilted produce in the drawer you feel guilty about. Make the easy version the default and you will eat more plants without summoning extra willpower.</p>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">In plain kitchen terms</h4>
            <p className="text-base text-foreground/80 leading-relaxed">If your week is light on vegetables, your fiber, potassium, and phytochemical intakes tend to fall together—not one missing vitamin you can patch with a pill. Build systems: a bag of frozen broccoli in the freezer, a jar of roasted peppers in the fridge, one soup night, one “big salad” lunch. Small rails beat inspiration.</p>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">Raising the bar without the bloat</h2>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">Jumping from almost no fiber to a mountain of raw kale is how people convince themselves vegetables “hurt.” Raise fiber gradually, drink water like a grown-up, and lean on cooking methods that soften cell walls—roasting, stewing, stir-frying—when your gut is sensitive. Gas often means your microbes are finally getting fed; gentler ramps keep that news polite.</p>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">Texture pickiness is real. If raw salads feel like punishment, try roasted carrots, miso-glazed eggplant, corn tortillas with peppers and onions, or blended soups that hide volume without hiding flavor. The goal is more plants you will actually repeat, not a purity score.</p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Do frozen vegetables count?</h3><p className="text-foreground/80 text-base leading-relaxed">Yes. Freezing pauses nutrient loss and cuts spoilage guilt, which often means you eat more vegetables in real life—not just on the day you felt ambitious at the farmers market.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Is juice the same as vegetables?</h3><p className="text-foreground/80 text-base leading-relaxed">Usually not. Juicing strips most of the fiber and the slow chew, so sugar from produce can hit faster. Whole fruit still has fiber wrapped around the sweetness; juice is closer to a sweet drink with vitamins.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">What if I do not like many vegetables?</h3><p className="text-foreground/80 text-base leading-relaxed">Start with textures you tolerate—roasted, crispy, sauced—then widen the circle. Dips, spice mixes, and high-heat browning (Maillard reactions) make bitter notes taste like intent instead of punishment.</p></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-lime-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Build the Plate Around Plants</h2>
            <p className="text-lg text-white/90 mb-6">Use a simple plate template so high-vegetable eating becomes automatic instead of a daily negotiation with yourself.</p>
            <Link to="/nutrition-science/balanced-plates-without-counting-calories" className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Read Balanced Plates<ArrowLeft className="w-4 h-4 rotate-180" /></Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
