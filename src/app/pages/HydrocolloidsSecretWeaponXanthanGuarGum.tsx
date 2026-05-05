import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function HydrocolloidsSecretWeaponXanthanGuarGum() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white px-4 py-2 rounded-full text-sm mb-6">Baking Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Hydrocolloids: The Secret Weapon (Xanthan and Guar Gum)</h1>
          <p className="text-xl text-muted-foreground">Hydrocolloids are the backbone of modern gluten-free texture. Used correctly, they improve binding, gas retention, and sliceability. Used carelessly, they create gummy or slimy results.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>8 min read</span><span>•</span><span>Intermediate</span><span>????</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-violet-200 to-fuchsia-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">??</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-violet-50 border-l-4 border-violet-400 p-5 rounded-xl mb-8 flex items-start gap-4"><span className="text-3xl flex-shrink-0">??</span><div><p className="font-bold text-violet-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p><p className="text-foreground/80 leading-relaxed">Xanthan and guar bind water and increase viscosity, helping gluten-free batters hold gas and resist crumbling. Xanthan is often better for elastic products like bread. Guar is often softer for cakes. Too much of either can turn texture gummy.</p></div></div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Hydrocolloids do not replace gluten directly, but they improve water management and bubble stability. In practical terms, they make the difference between a loaf that rises and slices cleanly versus one that crumbles or collapses.</p>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">What They Do</h2>
          <ul className="text-sm text-muted-foreground"><li>Increase viscosity to reduce gas loss.</li><li>Stabilize batter microstructure during bake.</li><li>Bind free water to improve cohesion.</li><li>Improve cutting and handling quality.</li></ul>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-violet-200"><h3 className="text-xl mb-3">Xanthan Gum</h3><p className="text-sm text-muted-foreground">A microbial polysaccharide with strong thickening at low levels. Usually preferred for dough-like systems that need elastic behavior and better gas retention.</p></div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-fuchsia-200"><h3 className="text-xl mb-3">Guar Gum</h3><p className="text-sm text-muted-foreground">Derived from guar beans, hydrates quickly and often gives softer crumb in cakes and muffins where tenderness matters most.</p></div>
          </div>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Rule-of-Thumb Dosing</h2>
          <p className="text-sm text-muted-foreground">Bread: about 0.5-1.0% gum by total flour weight. Cakes: about 0.2-0.5%. Cookies usually need lower levels, especially when eggs are present. Always weigh, because teaspoon error can be huge at low percentages.</p>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500"><h4 className="text-lg mb-2 text-cyan-800">?? Science Note: More Gum Is Not More Better</h4><p className="text-sm text-muted-foreground leading-relaxed">Past the optimum zone, hydrocolloids create false stability: batters look thick and controlled, but baked crumb becomes sticky, dense, and rubbery because water mobility is over-restricted.</p></div>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Common Troubleshooting Patterns</h2>
          <p className="text-sm text-muted-foreground">Gummy center often means too much gum, too much elastic starch, or under-baking. Crumbling often means too little binder or low hydration. Dense texture can result from high viscosity that blocks expansion. Adjust in small steps and test one variable at a time.</p>
          <p className="text-sm text-muted-foreground">A useful strategy is to pair gum changes with hydration review. If you lower gum and texture becomes dry, hydration or humectants may need compensation. If you increase gum and loaf gets tight, proof and viscosity may be limiting expansion. The right answer is almost always a matrix adjustment, not a single-ingredient fix.</p>
          <p className="text-sm text-muted-foreground">Psyllium can complement or partially replace gums in some bread systems by adding fibrous gel structure. However, psyllium changes flavor, color, and water demand. For this reason, treat psyllium as its own structural choice and benchmark it against your xanthan/guar baseline rather than swapping blindly.</p>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10"><h2 className="text-3xl mb-6">Frequently Asked Questions</h2><div className="space-y-6"><div><h3 className="text-xl mb-2">Can xanthan and guar be combined?</h3><p className="text-muted-foreground text-sm">Yes, many formulas combine them for balanced elasticity and softness.</p></div><div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Is psyllium a direct replacement?</h3><p className="text-muted-foreground text-sm">Not 1:1. It changes hydration and crumb behavior, so formula retesting is required.</p></div><div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Why does batter thicken during rest?</h3><p className="text-muted-foreground text-sm">Hydrocolloids continue hydrating over time, increasing viscosity.</p></div></div></div>
          <div className="bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white rounded-2xl p-8 my-12"><h2 className="text-3xl mb-4">Dial In Binder Percentage</h2><p className="text-lg text-white/90 mb-6">Use Fix My Recipe to compare structure outcomes when adjusting xanthan, guar, and hydration in controlled steps.</p><Link to="/fix-recipe" className="inline-flex items-center gap-2 bg-white text-violet-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open Fix My Recipe<ArrowLeft className="w-4 h-4 rotate-180" /></Link></div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
