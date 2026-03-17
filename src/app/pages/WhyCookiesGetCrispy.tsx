import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCookiesGetCrispy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <Navigation />

      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm mb-6">
            Cookie Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
            Why Cookies Get Crispy
          </h1>
          <p className="text-xl text-muted-foreground">
            Understand the science behind crispy cookies and how to control crunchiness through ingredients and baking technique.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🥠</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Crispy cookies shatter satisfyingly with every bite. Getting that snap and crunch is entirely intentional — it comes down to driving out moisture and creating a rigid sugar-and-protein structure throughout the cookie.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
            What Makes a Cookie Crispy?
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Crispiness is the absence of moisture. When cookies bake, water evaporates from the dough. If conditions are right — thin shape, high sugar, longer bake time — nearly all moisture is driven out. The remaining structure of caramelized sugar, starch, and protein is rigid and snappy. Any residual moisture (from humidity or hygroscopic ingredients) will soften them over time.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200 my-10">
            <h3 className="text-xl mb-6">Crispy Cookie Factors at a Glance</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-yellow-200">
                  <th className="text-left py-3 text-yellow-800">Factor</th>
                  <th className="text-left py-3 text-green-700">More Crispy</th>
                  <th className="text-left py-3 text-amber-700">Less Crispy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-yellow-100">
                <tr>
                  <td className="py-3 font-medium">Sugar type</td>
                  <td className="py-3 text-muted-foreground">White sugar</td>
                  <td className="py-3 text-muted-foreground">Brown sugar</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Fat type</td>
                  <td className="py-3 text-muted-foreground">Shortening or less fat</td>
                  <td className="py-3 text-muted-foreground">More butter</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Cookie thickness</td>
                  <td className="py-3 text-muted-foreground">Thin and flat</td>
                  <td className="py-3 text-muted-foreground">Thick and tall</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Bake time</td>
                  <td className="py-3 text-muted-foreground">Longer / lower temp</td>
                  <td className="py-3 text-muted-foreground">Shorter / higher temp</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Eggs</td>
                  <td className="py-3 text-muted-foreground">More egg whites</td>
                  <td className="py-3 text-muted-foreground">More egg yolks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
            Key Causes of Crispy Cookies
          </h2>

          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-yellow-200">
            <h3 className="text-2xl mb-4">⚪ White Sugar Dominance</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                White sugar (pure sucrose) has no molasses and doesn't attract moisture from the air. It melts readily at baking temperatures and flows outward, creating thin, flat cookies. As they cool, the caramelized sugar solidifies into a brittle, crispy structure.
              </p>
              <div className="bg-yellow-50 rounded-lg p-3 text-xs">
                <strong>Result:</strong> More white sugar = more spread, more crispiness, less chewiness.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">📏 Thin Shape = More Moisture Loss</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Thin cookies have a high surface-area-to-volume ratio. More surface area exposed to the hot oven means moisture escapes faster and more completely. A cookie that's 4mm thick will be fully crispy long before a 10mm cookie has even set in the center.
              </p>
              <div className="bg-amber-50 rounded-lg p-3 text-xs">
                <strong>Technique:</strong> Press dough balls down flat before baking for thinner, crispier results.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 my-8 border-2 border-orange-200">
            <h3 className="text-2xl mb-4">⏱️ Low and Slow Baking</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A longer bake at slightly lower temperature (325°F instead of 375°F) gives more time for moisture to fully evaporate without burning the outside. This is the secret to evenly crispy snap-all-the-way-through cookies, rather than crispy outside with soft center.
              </p>
              <div className="bg-orange-50 rounded-lg p-3 text-xs">
                <strong>Bonus:</strong> Leave baked cookies on the hot pan for 5–10 extra minutes after the oven to continue drying out.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-yellow-200">
            <h3 className="text-2xl mb-4">🥚 Egg Whites Over Yolks</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Egg whites are mostly water and protein. When baked, they set into a firm, dry network. Egg yolks add fat and moisture that keep cookies tender. For maximum crispiness, use the whole egg (or even just the white) and reduce yolk-heavy recipes.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
            Keeping Cookies Crispy After Baking
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200 my-8">
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 pl-6 py-2">
                <h4 className="font-medium mb-2">Cool completely before storing</h4>
                <p className="text-sm text-muted-foreground">Steam from warm cookies trapped in a container creates condensation that softens crispy texture. Always cool on a wire rack for at least 30 minutes.</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-6 py-2">
                <h4 className="font-medium mb-2">Store with a silica packet or bread heel</h4>
                <p className="text-sm text-muted-foreground">A piece of dry bread or silica gel packet in the container absorbs ambient moisture, extending crispiness for days longer.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6 py-2">
                <h4 className="font-medium mb-2">Re-crisp in the oven</h4>
                <p className="text-sm text-muted-foreground">Soft cookies can be rescued: bake at 300°F for 5–8 minutes to drive out the moisture they've absorbed and restore the snap.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Glass Transition</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Crispy cookies exist in a "glassy" state — sugar molecules are locked in a rigid amorphous solid. When humidity introduces water molecules, they plasticize the sugar network, lowering its glass transition temperature below room temp. This is why crispy cookies go soft in a humid environment.
            </p>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">How do I make my cookies stay crispy?</h3>
                <p className="text-muted-foreground text-sm">Cool completely before storing (steam softens crispy cookies). Store with a silica packet or piece of dry bread to absorb ambient moisture. Re-crisp at 300°F for 5–8 minutes if they soften.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why do crispy cookies go soft overnight?</h3>
                <p className="text-muted-foreground text-sm">Sugar in the cookie absorbs moisture from the air — this is the glass transition from rigid to plasticized. Store in an airtight container with a moisture absorber, or in a dry environment.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">What sugar makes the crispiest cookies?</h3>
                <p className="text-muted-foreground text-sm">White sugar promotes maximum crispiness — it lacks molasses and doesn't attract ambient moisture. All white sugar = crispier cookies. All brown sugar = softer, chewier cookies.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Does cookie thickness affect crispiness?</h3>
                <p className="text-muted-foreground text-sm">Significantly — thin cookies have a high surface-area-to-volume ratio, allowing moisture to escape quickly and completely during baking. Press dough balls flat before baking for thinner, crispier results.</p>
              </div>
            </div>
          </div>
          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/cookie-science/why-cookies-spread" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Spread</Link>
              <Link to="/cookie-science/why-cookies-are-chewy" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Are Chewy</Link>
              <Link to="/cookie-science/why-cookies-flatten" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Flatten</Link>
              <Link to="/cookie-science/why-cookies-spread-too-much" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Cookies Spread Too Much</Link>
              <Link to="/cookie-science/brown-sugar-vs-white-sugar" className="block text-amber-700 hover:underline text-sm font-medium">→ Brown Sugar vs White Sugar</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Design Your Perfect Cookie Texture</h2>
            <p className="text-lg text-white/90 mb-6">
              Want to engineer exactly the crispiness you're after? Use CookieSensei to tweak sugar ratios and predict texture before you bake.
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
