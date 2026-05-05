import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function LeaveningWithoutGlutenWhyRiseIsHarder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm mb-6">Baking Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Leavening Without Gluten: Why Rise Is Harder</h1>
          <p className="text-xl text-muted-foreground">Gluten-free leavening has an asymmetry: gas can be produced easily, but retaining it is difficult. The solution is to pair leavening chemistry with stronger retention systems.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>8 min read</span><span>•</span><span>Intermediate</span><span>????</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-rose-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">??</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-rose-50 border-l-4 border-rose-400 p-5 rounded-xl mb-8 flex items-start gap-4"><span className="text-3xl flex-shrink-0">??</span><div><p className="font-bold text-rose-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p><p className="text-foreground/80 leading-relaxed">Leavening needs gas production and gas retention. Gluten-free formulas usually produce enough gas but lose volume because structure cannot hold expanding bubbles. Improve retention with eggs, hydrocolloids, psyllium, and corrected viscosity.</p></div></div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">When gluten-free breads bake low, many bakers add more leavening. That can worsen collapse if matrix strength is the actual limiter. Rise is chemistry plus mechanics. You need both.</p>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Two-Part Model of Rise</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-rose-200 my-8"><div className="space-y-4 text-sm text-muted-foreground"><p><strong>Part 1:</strong> Gas generation from yeast or chemical leavening.</p><p><strong>Part 2:</strong> Gas retention in a matrix that stretches, then sets.</p></div></div>
          <p className="text-sm text-muted-foreground">In wheat systems, gluten handles both. In gluten-free systems, those responsibilities are distributed among starches, proteins, and binders. If gas generation outruns retention, bubbles coalesce and escape before structure sets.</p>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Retention Tools</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200"><h3 className="text-xl mb-3">Eggs</h3><p className="text-sm text-muted-foreground">Protein coagulation builds support around gas cells; whipped whites can add early lift.</p></div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200"><h3 className="text-xl mb-3">Xanthan/Guar</h3><p className="text-sm text-muted-foreground">Increase viscosity and improve bubble-wall stability.</p></div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200"><h3 className="text-xl mb-3">Psyllium Gel</h3><p className="text-sm text-muted-foreground">Adds a fiber-gel network that can mimic some gluten-like retention behavior.</p></div>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500"><h4 className="text-lg mb-2 text-cyan-800">?? Advanced Trick: Pre-Gel Psyllium</h4><p className="text-sm text-muted-foreground leading-relaxed">Hydrating psyllium before mixing improves consistency and can produce more uniform gas distribution during proof and early bake.</p></div>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Failure Patterns</h2>
          <p className="text-sm text-muted-foreground">Rise-then-collapse usually indicates weak retention or over-proofing. Very little rise can reflect inactive leavening, but often it is viscosity mismatch: too stiff prevents expansion, too fluid allows early gas loss. Large holes suggest bubble coalescence from uneven matrix strength.</p>
          <p className="text-sm text-muted-foreground">The most effective optimization method is one-variable testing. Change only binder percentage, hydration, proof time, or leavening dose per bake and log outcomes. This mirrors engineering test design and quickly identifies causal levers. Random multi-variable changes can occasionally stumble into a better loaf, but they do not produce repeatable control.</p>
          <p className="text-sm text-muted-foreground">For product design platforms and adaptive recipe tools, this is where real-time diagnostics can be valuable. If a user reports "good initial rise but collapse after cooling," the system can prioritize retention suggestions over extra leavening. That distinction saves failed iterations and builds user trust.</p>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10"><h2 className="text-3xl mb-6">Frequently Asked Questions</h2><div className="space-y-6"><div><h3 className="text-xl mb-2">Should I add more baking powder if my loaf is short?</h3><p className="text-muted-foreground text-sm">Only after checking retention. Extra gas in a weak matrix can worsen collapse.</p></div><div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Is yeast still useful in gluten-free baking?</h3><p className="text-muted-foreground text-sm">Yes, for both gas and flavor development, but retention remains the limiting factor.</p></div><div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Can psyllium replace xanthan?</h3><p className="text-muted-foreground text-sm">Sometimes in bread-like systems, but not universally across cakes and cookies.</p></div></div></div>
          <div className="bg-gradient-to-r from-rose-500 to-orange-600 text-white rounded-2xl p-8 my-12"><h2 className="text-3xl mb-4">Engineer Better Rise</h2><p className="text-lg text-white/90 mb-6">Use Fix My Recipe to tune gas production and retention separately so your gluten-free bakes rise higher and hold shape.</p><Link to="/fix-recipe" className="inline-flex items-center gap-2 bg-white text-rose-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open Fix My Recipe<ArrowLeft className="w-4 h-4 rotate-180" /></Link></div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
