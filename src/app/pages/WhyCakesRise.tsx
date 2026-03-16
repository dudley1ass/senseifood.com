import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCakesRise() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm mb-6">Cake Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Why Cakes Rise</h1>
          <p className="text-xl text-muted-foreground">Understand the three forces that lift a cake — leavening gases, steam, and trapped air — and how they work together to create a light, tall crumb.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>7 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-pink-200 to-purple-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">⬆️</span></div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">A cake rising in the oven is a carefully choreographed sequence of gas expansion, protein setting, and starch gelatinization. Three distinct mechanisms provide lift — and all three must work in harmony for a cake to rise properly.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">The Three Rising Forces</h2>
          <div className="space-y-6 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
              <h3 className="text-xl mb-3">🫧 1. Chemical Leavening (CO₂)</h3>
              <p className="text-sm text-muted-foreground mb-3">Baking powder and baking soda react with liquid and heat to produce carbon dioxide bubbles. These bubbles expand existing air pockets in the batter, inflating the cake from within.</p>
              <div className="bg-pink-50 rounded-lg p-3 text-xs"><strong>Baking soda:</strong> Reacts immediately with acid (buttermilk, brown sugar, cocoa). <strong>Baking powder:</strong> Two-stage — reacts on mixing then again in oven heat.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
              <h3 className="text-xl mb-3">💨 2. Mechanical Air (Creaming)</h3>
              <p className="text-sm text-muted-foreground mb-3">Beating butter and sugar traps hundreds of thousands of microscopic air bubbles in the fat. These bubbles expand significantly in oven heat and form the scaffold of the crumb structure.</p>
              <div className="bg-purple-50 rounded-lg p-3 text-xs"><strong>Key:</strong> Cream for 3–5 minutes until mixture is pale and doubled in volume. This step is irreplaceable — no amount of leavening compensates for under-creamed butter.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200">
              <h3 className="text-xl mb-3">💧 3. Steam</h3>
              <p className="text-sm text-muted-foreground mb-3">Water in eggs, milk, and butter converts to steam at 212°F and expands rapidly — to about 1,600 times its liquid volume. This steam contributes significant upward lift, especially important in chiffon and angel food cakes.</p>
              <div className="bg-rose-50 rounded-lg p-3 text-xs"><strong>Why room temp ingredients matter:</strong> Cold eggs and milk won't emulsify into the batter properly, reducing the steam lift they provide.</div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">What Sets the Rise in Place</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">Lift alone isn't enough — the structure must set while the cake is at maximum height. Egg proteins coagulate between 140–180°F, creating a rigid network. Starch granules absorb water and gelatinize between 140–160°F, adding further structure. The cake must stay in the oven long enough for both processes to complete — remove it too early and it collapses.</p>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Why Not to Open the Oven Early</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Opening the oven in the first 20 minutes causes a temperature drop that can pop CO₂ bubbles before the structure has set. The collapsed bubbles can't reinflate, leaving a sunken, dense cake. Wait until at least 80% of the bake time has passed before checking.</p>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Bake Taller, Lighter Cakes</h2>
            <p className="text-lg text-white/90 mb-6">Browse all our cake science articles to master every variable.</p>
            <Link to="/articles" className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Browse Cake Science<ArrowLeft className="w-4 h-4 rotate-180" /></Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
