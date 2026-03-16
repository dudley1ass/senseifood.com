import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesChangeColor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-red-500 text-white px-4 py-2 rounded-full text-sm mb-6">Cookie Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">Why Cookies Change Color</h1>
          <p className="text-xl text-muted-foreground">Understand what drives color changes in cookies — from pale gold to deep brown — and how to control it precisely.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>5 min read</span><span>•</span><span>Beginner Friendly</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-red-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">🎨</span></div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">Cookie color is a direct read-out of temperature, time, and ingredient chemistry. A pale cookie and a dark golden cookie are chemically very different — different flavor compounds, different textures, different moisture levels.</p>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">The Color-to-Chemistry Map</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-8">
            <div className="space-y-3">
              {[
                { color: 'bg-yellow-100', label: 'Pale Gold', desc: 'Minimal Maillard. Soft, moist interior. Low flavor complexity. Under-done in most recipes.' },
                { color: 'bg-amber-200', label: 'Light Golden', desc: 'Early Maillard. Soft with slight chew. Sweet, mild flavor. Ideal for delicate cookies.' },
                { color: 'bg-amber-400', label: 'Golden Brown', desc: 'Full Maillard + early caramelization. Crispy edges, chewy center. Rich, nutty flavor. Classic target.' },
                { color: 'bg-amber-700', label: 'Deep Brown', desc: 'Heavy caramelization. Crispy throughout. Intense, slightly bitter edge notes. Intentional for some cookies.' },
                { color: 'bg-stone-700', label: 'Dark / Burnt', desc: 'Carbonization. Acrid, bitter, unpleasant. Loss of all desirable flavor. Discard.' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className={`w-12 h-8 rounded-lg flex-shrink-0 ${item.color}`}></div>
                  <div><p className="font-medium text-sm">{item.label}</p><p className="text-xs text-muted-foreground">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">What Controls Cookie Color</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-8">
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 pl-6 py-2"><h4 className="font-medium mb-1">Baking soda (alkaline)</h4><p className="text-sm text-muted-foreground">Raises dough pH, which dramatically accelerates the Maillard reaction. Even a small amount creates noticeably deeper color.</p></div>
              <div className="border-l-4 border-orange-500 pl-6 py-2"><h4 className="font-medium mb-1">Brown vs. white sugar</h4><p className="text-sm text-muted-foreground">Brown sugar's molasses promotes deeper browning than white sugar. More molasses = darker cookie.</p></div>
              <div className="border-l-4 border-red-500 pl-6 py-2"><h4 className="font-medium mb-1">Oven temperature</h4><p className="text-sm text-muted-foreground">Higher temp accelerates both browning reactions. 375°F produces noticeably darker cookies than 325°F in the same time.</p></div>
              <div className="border-l-4 border-amber-700 pl-6 py-2"><h4 className="font-medium mb-1">Pan color</h4><p className="text-sm text-muted-foreground">Dark pans absorb more radiant heat and brown cookie bases faster. Light pans give a more even, controlled color.</p></div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-red-500 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Control Your Cookie Color</h2>
            <p className="text-lg text-white/90 mb-6">Use CookieSensei to predict color and browning based on your recipe.</p>
            <a href="https://cookiesensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Open CookieSensei<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
