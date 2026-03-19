import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyButterTemperatureMatters() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm mb-6">Baking Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Why Butter Temperature Matters in Baking</h1>
          <p className="text-xl text-muted-foreground">The single variable that changes everything — from cookie spread to cake texture. Here's the exact science behind butter temperature in every application.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>8 min read</span><span>•</span><span>Intermediate</span><span>🧈🌡️</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-yellow-200 to-amber-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🧈</span></div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-xl mb-8 flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🧈</span>
            <div>
              <p className="font-bold text-yellow-800 text-sm uppercase tracking-wide mb-1">Quick Answer</p>
              <p className="text-foreground/80 leading-relaxed">Butter temperature controls how fat is distributed in your batter. Cold butter = flaky layers (pie crust). Room temp (65–68°F) = creamed air bubbles (cakes, cookies). Melted butter = dense, chewy structure. The right temperature depends entirely on what you're making.</p>
            </div>
          </div>
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Butter is 80% fat, 18% water, and 2% milk solids — and its physical state changes completely across a temperature range of just 40°F. Cold butter is solid and plastic. Room temperature butter is soft and airable. Melted butter is liquid. Each state distributes fat through batter in a fundamentally different way, producing dramatically different results in the finished bake.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">The Four States of Butter in Baking</h2>

          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <h3 className="text-xl mb-3">🧊 Cold Butter (Below 60°F) — For Flaky Pastry</h3>
              <p className="text-sm text-muted-foreground mb-3">Cold butter stays in discrete, solid chunks when cut into flour. These chunks don't dissolve — they coat flour particles and create physical barriers. When heat hits them in the oven, they melt and release steam, pushing dough layers apart. This is the mechanism of flakiness in pie crust, biscuits, croissants, and scones. Cold butter must stay cold throughout mixing — the moment it warms enough to become greasy, it blends into the flour and the lamination (layering) is lost.</p>
              <div className="bg-yellow-50 rounded-lg p-3 text-xs"><strong>Target temp:</strong> 35–55°F. Cube and freeze for 15 minutes before using. Work quickly. If dough warms during rolling, refrigerate 15 minutes before continuing.</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🌡️ Room Temperature Butter (65–68°F) — For Creaming</h3>
              <p className="text-sm text-muted-foreground mb-3">At 65–68°F, butter has just the right plasticity for creaming with sugar. The fat is soft enough to deform and trap air bubbles as sugar crystals cut through it, but firm enough that those bubbles hold their shape rather than collapsing. A properly creamed butter-sugar mixture traps thousands of tiny air bubbles that expand in the oven, giving cakes and some cookies their light, tender crumb. Too cold (below 60°F) and the butter can't incorporate air. Too warm (above 72°F) and it becomes greasy, the air bubbles collapse, and the emulsion breaks.</p>
              <div className="bg-amber-50 rounded-lg p-3 text-xs"><strong>Target temp:</strong> 65–68°F. Should hold a thumbprint without smearing. Leave out for 30–60 minutes at room temp (varies by kitchen temperature). Don't microwave — it warms unevenly.</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">💧 Melted Butter — For Dense, Chewy Texture</h3>
              <p className="text-sm text-muted-foreground mb-3">Melted butter mixes into batter as a liquid, distributing fat as a coating on flour proteins rather than as discrete air-trapping droplets. No air is incorporated during mixing. The result is a denser, more compact crumb with a chewy, fudgy texture — ideal for brownies, dense cookies, and certain quick breads. Melted butter also allows more gluten development (fat doesn't inhibit gluten as much in liquid form), which adds to the chew.</p>
              <div className="bg-orange-50 rounded-lg p-3 text-xs"><strong>Best for:</strong> Brownies, dense chocolate chip cookies, fudgy bars, banana bread. Produces flat cookies that spread — intentional in many recipes.</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🔥 Browned Butter — For Maximum Flavor</h3>
              <p className="text-sm text-muted-foreground mb-3">Browning butter goes beyond temperature into chemistry. As butter is heated past its melting point, water evaporates and milk solids undergo the Maillard reaction — turning golden and producing nutty pyrazines, caramel notes, and dozens of new flavor compounds absent in plain butter. Browned butter has the same function as melted butter in baking (liquid fat, no aeration) but with dramatically enhanced flavor. It's the single highest-impact technique upgrade available to home bakers.</p>
              <div className="bg-amber-50 rounded-lg p-3 text-xs"><strong>Technique:</strong> Melt over medium heat, swirling constantly, until foam subsides and milk solids turn golden and smell nutty (5–7 minutes). Pour into bowl immediately — residual pan heat continues cooking it. Cool to room temperature before using.</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-xl mb-6 text-center">Butter Temperature Quick Reference</h3>
            <table className="w-full text-sm">
              <thead><tr className="border-b-2 border-amber-200"><th className="text-left py-3 text-amber-800">What You're Making</th><th className="text-left py-3">Butter State</th><th className="text-left py-3">Target Temp</th></tr></thead>
              <tbody className="divide-y divide-amber-100 text-muted-foreground">
                <tr><td className="py-3 font-medium text-foreground">Pie crust, biscuits, scones</td><td className="py-3">Cold, solid chunks</td><td className="py-3">35–55°F</td></tr>
                <tr><td className="py-3 font-medium text-foreground">Layer cakes, cupcakes</td><td className="py-3">Room temp, plastic</td><td className="py-3">65–68°F</td></tr>
                <tr><td className="py-3 font-medium text-foreground">Chewy cookies (classic)</td><td className="py-3">Room temp or slightly soft</td><td className="py-3">65–72°F</td></tr>
                <tr><td className="py-3 font-medium text-foreground">Dense/fudgy cookies</td><td className="py-3">Melted</td><td className="py-3">Liquid</td></tr>
                <tr><td className="py-3 font-medium text-foreground">Brownies, bars</td><td className="py-3">Melted</td><td className="py-3">Liquid</td></tr>
                <tr><td className="py-3 font-medium text-foreground">Maximum flavor in anything</td><td className="py-3">Browned, then cooled</td><td className="py-3">Room temp after cooling</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Why "Room Temperature" Is Imprecise</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Recipe instructions saying "room temperature butter" assume a room temperature of around 68°F. In a warm summer kitchen at 80°F, leaving butter out for an hour produces butter at 76–78°F — too soft for optimal creaming. In a cold kitchen at 60°F, it may still be too firm. Use your finger as the test: butter at the right temperature holds a thumbprint that forms with gentle pressure but doesn't leave behind a greasy smear. That physical test is more reliable than any timer.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl mb-2">Can I use the microwave to soften butter quickly?</h3><p className="text-muted-foreground text-sm">Technically yes, but it's risky. Microwaves heat unevenly — the outside may be correct while the center is still cold, or parts may melt while others are solid. If you must use it, microwave in 5-second bursts at 30% power, checking after each. The safer quick-method: grate cold butter on a box grater — the fine shreds warm to room temperature in 5–10 minutes.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">What happens if butter is too warm when I cream it?</h3><p className="text-muted-foreground text-sm">The fat becomes greasy and separates from the sugar rather than forming a stable foam. The mixture looks curdled and shiny rather than pale and fluffy. Air bubbles that do form immediately collapse. The resulting cake or cookie will be dense, possibly greasy, and lacking the lightness that proper creaming provides.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Is European butter better for baking?</h3><p className="text-muted-foreground text-sm">European-style butter (82–84% fat) produces slightly more tender and flavorful results than standard American butter (80% fat) because the extra fat reduces the amount of water in the recipe — less water = less gluten = more tender crumb. The difference is real but subtle. The technique (temperature, creaming time) matters more than the brand.</p></div>
              <div className="border-t border-stone-100 pt-6"><h3 className="text-xl mb-2">Can browned butter replace regular butter in any recipe?</h3><p className="text-muted-foreground text-sm">Yes, as melted butter (not for creaming applications). Because some water evaporates during browning, use about 15% more browned butter by weight than the recipe calls for in regular melted butter. In creaming recipes, cool the browned butter to solid, re-refrigerate, then bring to room temperature before creaming.</p></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Baking Science</h3>
            <div className="space-y-3">
              <Link to="/cookie-science/why-cookies-flatten" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Flatten — butter temperature is the #1 cause</Link>
              <Link to="/cookie-science/why-cookies-are-chewy" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Are Chewy — melted vs creamed butter comparison</Link>
              <Link to="/cake-science/why-cakes-are-dense" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cakes Are Dense — under-creamed butter loses air</Link>
              <Link to="/pie-science/why-pie-crust-is-flaky" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Pie Crust Is Flaky — cold butter is everything</Link>
              <Link to="/cookie-science/why-cookies-taste-bland" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Taste Bland — browned butter is the fix</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Apply the Science</h2>
            <p className="text-lg text-white/90 mb-6">Use CookieSensei and PieSensei to see how butter state affects your specific recipe.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
