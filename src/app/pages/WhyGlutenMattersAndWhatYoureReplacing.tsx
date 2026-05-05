import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyGlutenMattersAndWhatYoureReplacing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm mb-6">Baking Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Why Gluten Matters (and What You're Replacing)</h1>
          <p className="text-xl text-muted-foreground">Gluten is not just "something in flour". It is the mechanical framework that traps gas, defines chew, and prevents collapse. Gluten-free baking works only when you deliberately rebuild that framework.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>9 min read</span><span>•</span><span>Intermediate</span><span>????</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-emerald-200 to-cyan-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">??</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-emerald-50 border-l-4 border-emerald-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">??</span>
            <div>
              <p className="font-bold text-emerald-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Gluten is a structure system made from hydrated and developed wheat proteins. Remove it, and you lose elasticity, gas retention, and crumb stability. Good gluten-free baking is not subtraction. It is engineered replacement of structure, moisture control, and binding.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Most bakers first approach gluten-free recipes as a swap problem: remove wheat flour and insert a gluten-free flour. That almost always creates dry, dense, or crumbly results because wheat flour contributes more than starch. It contributes a dynamic protein network that changes during mixing and baking. If you understand that network, every gluten-free decision becomes more predictable.</p>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">What Gluten Actually Is</h2>
          <p className="text-sm text-muted-foreground">Gluten forms when two protein families in wheat flour meet water and mechanical energy: gliadin contributes extensibility and glutenin contributes elasticity. When flour is hydrated and mixed, these proteins unfold and bond into a continuous network.</p>
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-200 my-8">
            <h3 className="text-xl mb-3">Why This Network Matters</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p><strong>Gas retention:</strong> CO2 from yeast or baking powder can only lift batter if the matrix holds expanding bubbles.</p>
              <p><strong>Elastic rebound:</strong> good bread and many cakes need controlled spring, not fragile foam.</p>
              <p><strong>Crumb continuity:</strong> slices hold together because protein and starch are linked in a cohesive scaffold.</p>
              <p><strong>Chew and bite:</strong> the "pull" in bread comes from protein architecture, not only moisture.</p>
            </div>
          </div>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">What Breaks in Gluten-Free Baking</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-teal-200"><h3 className="text-xl mb-3">1) Collapse After Rise</h3><p className="text-sm text-muted-foreground">Leavening can still generate gas, but weak bubble walls fail and volume drops during cooling.</p></div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-200"><h3 className="text-xl mb-3">2) Dry, Sandy Crumb</h3><p className="text-sm text-muted-foreground">Many gluten-free starch systems hydrate differently and can feel gritty when under-gelled.</p></div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-teal-200"><h3 className="text-xl mb-3">3) Weak Slices and Crumbling</h3><p className="text-sm text-muted-foreground">No cohesive protein web means crumbs separate under knife pressure.</p></div>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">?? Science Note: Structure Is a Team, Not a Single Ingredient</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">In wheat baking, one protein system handles stretch and set. In gluten-free baking, that work is distributed across starches, proteins, hydrocolloids, eggs, and fats. This is why no single "magic" flour can replace wheat in every recipe category.</p>
          </div>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">How to Rebuild Gluten Function Intentionally</h2>
          <p className="text-sm text-muted-foreground">Think in functions instead of ingredients. Structure comes from whole-grain gluten-free flours. Elasticity comes from starches and hydrocolloids. Moisture retention comes from sugars and fats. Sliceability comes from proper bake endpoint and full cooldown so starch gels and proteins set.</p>
          <p className="text-sm text-muted-foreground">This framework explains why gluten-free formulas are hydration-sensitive. Small liquid changes can shift from dry and crumbly to gummy because the replacement structure has narrower tolerance windows than gluten dough.</p>
          <p className="text-sm text-muted-foreground">The practical workflow is simple: define desired texture first, then choose matrix components that produce it. If you want airy sandwich bread, prioritize gas retention and elastic support. If you want tender cake, prioritize soft crumb and moisture stability. If you want chewy cookies, balance starch elasticity with fat and sugar control. Function-first formulation is what turns gluten-free baking from trial-and-error into a repeatable process.</p>
          <p className="text-sm text-muted-foreground">For product builders and recipe tools, this is also where predictive UX becomes valuable. If users can see expected shifts when they swap flour types or binder levels, they can design outcomes faster and with fewer failed bakes. Gluten-free users do not need generic substitutions. They need structure-aware guidance tied to texture targets.</p>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">If gluten is removed, why does any gluten-free bread rise at all?</h3><p className="text-muted-foreground text-sm">Gas production still works. The challenge is retaining that gas long enough for structure to set.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Why are gluten-free batters often thicker or stickier?</h3><p className="text-muted-foreground text-sm">Hydrocolloids and starch systems increase viscosity by design to hold bubbles and reduce collapse.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Why does my gluten-free loaf crumble the next day?</h3><p className="text-muted-foreground text-sm">Starch retrogradation and moisture migration happen quickly without strong gluten support.</p></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-200 my-10">
            <h3 className="text-2xl mb-4">Continue the Gluten-Free Series</h3>
            <div className="space-y-3">
              <Link to="/baking-science/gluten-free-flour-matrix-why-one-flour-never-works" className="block text-emerald-700 hover:underline text-sm font-medium">? The Gluten-Free Flour Matrix</Link>
              <Link to="/baking-science/hydrocolloids-secret-weapon-xanthan-guar-gum" className="block text-emerald-700 hover:underline text-sm font-medium">? Hydrocolloids: Xanthan and Guar Gum</Link>
              <Link to="/baking-science/moisture-management-why-gluten-free-food-dries-out-faster" className="block text-emerald-700 hover:underline text-sm font-medium">? Moisture Management in Gluten-Free Baking</Link>
              <Link to="/baking-science/leavening-without-gluten-why-rise-is-harder" className="block text-emerald-700 hover:underline text-sm font-medium">? Leavening Without Gluten</Link>
            </div>
          </div>
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Build by Function, Not Guesswork</h2>
            <p className="text-lg text-white/90 mb-6">Use Fix My Recipe to test one variable at a time when adapting wheat recipes to gluten-free formulas.</p>
            <Link to="/fix-recipe" className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open Fix My Recipe<ArrowLeft className="w-4 h-4 rotate-180" /></Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
