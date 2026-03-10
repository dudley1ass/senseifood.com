import { ArrowLeft, Thermometer, Droplet, Beaker, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesSpread() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50">
      <Navigation />
      
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cookie Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Why Cookies Spread
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover the science behind cookie spreading and how to control it for perfect results every time.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>5 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        {/* Hero Image Placeholder */}
        <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🍪</span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Cookie spread is one of the most critical factors in cookie baking. Understanding the science behind spreading helps you achieve your desired texture—from thick and chewy to thin and crispy.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            The Three Stages of Cookie Spreading
          </h2>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Stage 1: Melting</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                As the dough heats up (90-110°F), fats begin to melt, causing initial spreading before the structure sets.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Stage 2: Expanding</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Leavening agents release gases (212°F+), creating air pockets that push the dough outward and upward.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Beaker className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Stage 3: Setting</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Proteins coagulate and starches gelatinize (300°F+), forming a rigid structure that stops spreading.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Key Factors That Control Spread
          </h2>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Droplet className="w-7 h-7 text-amber-600" />
              1. Butter Temperature
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cold butter = less spread. Room temperature butter = more spread. Melted butter = maximum spread.
            </p>
            <div className="bg-white rounded-xl p-4 text-sm">
              <strong className="text-amber-600">Pro Tip:</strong> For thick cookies, use cold butter (60°F). For thin, crispy cookies, use melted butter.
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Beaker className="w-7 h-7 text-orange-600" />
              2. Sugar Ratios
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Brown sugar contains molasses and is hygroscopic (attracts water), which keeps cookies moist and limits spread. White sugar promotes spreading because it melts more readily.
            </p>
            <div className="bg-white rounded-xl p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-orange-600">More Brown Sugar:</strong>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Thicker cookies</li>
                    <li>Chewier texture</li>
                    <li>Caramel flavor</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-orange-600">More White Sugar:</strong>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Thinner cookies</li>
                    <li>Crispier texture</li>
                    <li>More spread</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 my-8 border-2 border-pink-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-pink-600" />
              3. Leavening Agents
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Baking soda and baking powder affect spread differently through pH changes and gas production timing.
            </p>
            <div className="bg-white rounded-xl p-4 space-y-3 text-sm">
              <div>
                <strong className="text-pink-600">Baking Soda (Base):</strong>
                <p className="text-muted-foreground mt-1">Increases pH, weakens gluten structure, promotes MORE spread and browning.</p>
              </div>
              <div>
                <strong className="text-pink-600">Baking Powder (Acid + Base):</strong>
                <p className="text-muted-foreground mt-1">Releases gas early and late, creating more rise and LESS spread.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Additional Factors
          </h2>

          <div className="space-y-6 my-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-amber-200">
              <h4 className="text-xl mb-2 text-amber-700">Flour Amount</h4>
              <p className="text-muted-foreground text-sm">
                More flour = more structure = less spread. The proteins in flour (gluten) form a network that holds the cookie together.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-orange-200">
              <h4 className="text-xl mb-2 text-orange-700">Eggs</h4>
              <p className="text-muted-foreground text-sm">
                Egg whites add structure and reduce spread. Egg yolks add fat and tenderness, promoting slight spreading.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-pink-200">
              <h4 className="text-xl mb-2 text-pink-700">Oven Temperature</h4>
              <p className="text-muted-foreground text-sm">
                Higher temps = faster setting = less spread. Lower temps = slower setting = more spread. Most cookies bake best at 350-375°F.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-purple-200">
              <h4 className="text-xl mb-2 text-purple-700">Chilling the Dough</h4>
              <p className="text-muted-foreground text-sm">
                Chilling dough (30 mins to 24 hours) solidifies fats, slows spread, and allows flour to hydrate fully, creating thicker cookies.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Quick Reference Chart
          </h2>

          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 my-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-amber-300">
                  <th className="text-left py-3 text-amber-800">Want More Spread?</th>
                  <th className="text-left py-3 text-orange-800">Want Less Spread?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-200">
                <tr>
                  <td className="py-3 text-muted-foreground">Use melted butter</td>
                  <td className="py-3 text-muted-foreground">Use cold butter</td>
                </tr>
                <tr>
                  <td className="py-3 text-muted-foreground">More white sugar</td>
                  <td className="py-3 text-muted-foreground">More brown sugar</td>
                </tr>
                <tr>
                  <td className="py-3 text-muted-foreground">Less flour</td>
                  <td className="py-3 text-muted-foreground">More flour</td>
                </tr>
                <tr>
                  <td className="py-3 text-muted-foreground">More baking soda</td>
                  <td className="py-3 text-muted-foreground">More baking powder</td>
                </tr>
                <tr>
                  <td className="py-3 text-muted-foreground">Skip chilling</td>
                  <td className="py-3 text-muted-foreground">Chill dough 24 hours</td>
                </tr>
                <tr>
                  <td className="py-3 text-muted-foreground">Lower oven temp (325°F)</td>
                  <td className="py-3 text-muted-foreground">Higher oven temp (375°F)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Experiment with Cookie Spread</h2>
            <p className="text-lg text-white/90 mb-6">
              Ready to test these principles? Use CookieSensei to adjust butter temperature, sugar ratios, and leavening to see predicted spread before you bake.
            </p>
            <a 
              href="https://cookiesensei.senseifood.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Open CookieSensei
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}