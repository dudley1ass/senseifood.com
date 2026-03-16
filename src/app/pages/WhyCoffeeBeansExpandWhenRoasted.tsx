import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeBeansExpandWhenRoasted() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-stone-50">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-4 py-2 rounded-full text-sm mb-6">Coffee Science</div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Why Coffee Beans Expand When Roasted</h1>
          <p className="text-xl text-muted-foreground">Discover the physics and chemistry behind coffee bean expansion during roasting — including the first and second crack phenomena.</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground"><span>6 min read</span><span>•</span><span>Intermediate</span></div>
        </header>
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl"><span className="text-8xl">💥</span></div>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">A green coffee bean roughly doubles in volume during roasting. This dramatic expansion is driven by water vaporization, CO₂ production, and pyrolysis reactions that fundamentally transform the bean's physical structure and chemical composition.</p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">The Roasting Stages</h2>
          <div className="space-y-4 my-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <h3 className="text-xl mb-3">🌱 Drying Phase (212–300°F)</h3>
              <p className="text-sm text-muted-foreground">Green beans contain 10–12% moisture. The first stage of roasting drives this water off. The bean softens, turns yellow, and starts to smell grassy. Little expansion occurs yet — the bean is just drying out.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <h3 className="text-xl mb-3">🔔 First Crack (385–400°F)</h3>
              <p className="text-sm text-muted-foreground mb-3">As the bean heats, steam and CO₂ build up inside. The internal pressure eventually exceeds the cell wall strength and the bean ruptures — producing a loud cracking sound, like popcorn. The bean expands 50–100% in volume as the cell structure opens up. This is when light roasts are finished.</p>
              <div className="bg-amber-50 rounded-lg p-3 text-xs"><strong>Chemical significance:</strong> The Maillard reaction accelerates dramatically here, creating hundreds of new flavor and aroma compounds.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-stone-200">
              <h3 className="text-xl mb-3">🔔🔔 Second Crack (430–450°F)</h3>
              <p className="text-sm text-muted-foreground mb-3">Continued roasting triggers a second, quieter crack as the bean's cell walls literally fracture and shatter under pyrolysis. The bean expands further, oils migrate to the surface, and the bean becomes noticeably darker. This is where dark roasts live.</p>
              <div className="bg-stone-50 rounded-lg p-3 text-xs"><strong>Beyond second crack:</strong> Continuing to roast past second crack risks carbonization — the bean begins to char, and the characteristic "French Roast" smoky character develops.</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Why Density Matters</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Roasted beans are significantly less dense than green beans because the expansion creates a porous, cellular structure full of tiny air pockets. This porous structure is what makes coffee grindable and allows water to penetrate and extract flavor compounds during brewing. The more open and porous the bean (darker roast), the faster extraction happens — which is why dark roast coffee often needs a slightly coarser grind to avoid over-extraction.</p>
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Understand Your Roast</h2>
            <p className="text-lg text-white/90 mb-6">Use BeanSensei to match your roast level to your ideal brew.</p>
            <a href="https://beansensei.senseifood.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">Try BeanSensei →<ArrowLeft className="w-4 h-4 rotate-180" /></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
