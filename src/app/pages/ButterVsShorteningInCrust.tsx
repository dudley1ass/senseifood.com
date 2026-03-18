import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function ButterVsShorteningInCrust() {
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-amber-700 text-white px-4 py-2 rounded-full text-sm mb-6">
            Pie Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-yellow-700 to-amber-700 bg-clip-text text-transparent">
            Butter vs Shortening in Pie Crust
          </h1>
          <p className="text-xl text-muted-foreground">
            Compare how butter and shortening affect flakiness, flavor, tenderness, and workability — and learn when to use each or combine both.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>7 min read</span>
            <span>•</span>
            <span>Intermediate</span>
            <span>🥧🧈</span>
          </div>
        </header>

        <div className="w-full h-80 bg-gradient-to-br from-yellow-200 to-amber-400 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">🥧</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            The butter vs shortening debate is one of the oldest arguments in pie baking — and the answer is genuinely nuanced. Both fats create flaky crust through the same mechanism, but they perform very differently in terms of flavor, texture, and ease of handling. Understanding the chemistry explains exactly when each is the right choice.
          </p>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-yellow-700 to-amber-700 bg-clip-text text-transparent">
            How Fat Creates Flaky Crust
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Both butter and shortening create flakiness through the same mechanism: they coat flour particles and prevent gluten formation, while solid fat chunks create distinct layers separated by fat barriers. When the oven heat hits those fat chunks, they melt and release steam — physically pushing the dough layers apart. The steam escapes upward, leaving behind air pockets. That's the flake.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            The differences between butter and shortening come down to their composition: <strong>water content</strong>, <strong>melting point</strong>, and <strong>flavor compounds</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <div className="text-4xl mb-4">🧈</div>
              <h3 className="text-xl mb-3">Butter</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 80% fat, 18% water, 2% milk solids</li>
                <li>• Melting point: ~95°F (35°C)</li>
                <li>• Rich, complex flavor</li>
                <li>• More tender but less forgiving</li>
                <li>• Harder to work with in warm kitchens</li>
                <li>• Creates flatter, more spread layers</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
              <div className="text-4xl mb-4">🫙</div>
              <h3 className="text-xl mb-3">Shortening</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 100% fat, no water, no milk solids</li>
                <li>• Melting point: ~118°F (48°C)</li>
                <li>• Neutral, almost no flavor</li>
                <li>• More forgiving to work with</li>
                <li>• Stays solid longer during baking</li>
                <li>• Creates taller, more distinct layers</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-yellow-700 to-amber-700 bg-clip-text text-transparent">
            The Science Behind Each Fat
          </h2>

          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 my-8 border-2 border-yellow-200">
            <h3 className="text-2xl mb-4">🧈 Why Butter Wins on Flavor</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Butter contains diacetyl, butyric acid, and hundreds of other flavor compounds that create its characteristic rich, creamy, slightly nutty taste. The milk solids (2%) participate in the Maillard reaction during baking, contributing to a golden-brown color and toasted flavor that shortening simply can't replicate.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The 18% water content is actually an advantage here — that water converts to steam in the oven and contributes to flakiness alongside the melting fat. However, butter's low melting point (≈95°F) means it softens quickly at room temperature, making the dough harder to handle if the kitchen is warm.
              </p>
              <div className="bg-yellow-50 rounded-lg p-3 text-xs">
                <strong>Best for:</strong> Single-crust pies where the crust is visible and flavor matters most — apple, pecan, pumpkin, quiche.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-amber-200">
            <h3 className="text-2xl mb-4">🫙 Why Shortening Wins on Flakiness</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Shortening is 100% fat with no water and a higher melting point (≈118°F). Because it stays solid at higher temperatures, it holds its shape longer in the oven before melting — giving the dough more time to set the distinct layer separations before the fat releases. The result is taller, more dramatically separated layers: the architecture of a truly flaky crust.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The lack of water also means less gluten activation — shortening is a more effective gluten barrier than butter. This creates a more tender, delicate crust that's less prone to toughening even with slightly more handling.
              </p>
              <div className="bg-amber-50 rounded-lg p-3 text-xs">
                <strong>Best for:</strong> Double-crust pies where structural integrity matters, decorative crusts that need to hold crimp shapes, or baking in warm conditions.
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-yellow-700 to-amber-700 bg-clip-text text-transparent">
            The Best of Both Worlds: The 50/50 Blend
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Most professional pastry chefs don't choose one or the other — they blend both. A 50/50 combination (by weight) captures the flavor and color of butter along with the flakiness and workability of shortening. The shortening's higher melting point compensates for butter's tendency to soften, while butter's water and milk solids add flavor and Maillard browning.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200 my-8">
            <h3 className="text-xl mb-6 text-center">Fat Comparison at a Glance</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-amber-200">
                  <th className="text-left py-3 text-amber-800">Attribute</th>
                  <th className="text-center py-3">All Butter</th>
                  <th className="text-center py-3">50/50 Blend</th>
                  <th className="text-center py-3">All Shortening</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100 text-center">
                <tr>
                  <td className="py-3 font-medium text-left">Flavor</td>
                  <td className="py-3">⭐⭐⭐⭐⭐</td>
                  <td className="py-3">⭐⭐⭐⭐</td>
                  <td className="py-3">⭐⭐</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-left">Flakiness</td>
                  <td className="py-3">⭐⭐⭐</td>
                  <td className="py-3">⭐⭐⭐⭐</td>
                  <td className="py-3">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-left">Tenderness</td>
                  <td className="py-3">⭐⭐⭐⭐</td>
                  <td className="py-3">⭐⭐⭐⭐⭐</td>
                  <td className="py-3">⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-left">Workability</td>
                  <td className="py-3">⭐⭐⭐</td>
                  <td className="py-3">⭐⭐⭐⭐</td>
                  <td className="py-3">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-left">Browning</td>
                  <td className="py-3">⭐⭐⭐⭐⭐</td>
                  <td className="py-3">⭐⭐⭐⭐</td>
                  <td className="py-3">⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-yellow-700 to-amber-700 bg-clip-text text-transparent">
            What About Lard?
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Lard is the traditional choice and still produces the gold-standard flaky crust. Its melting point (≈113°F) sits between butter and shortening, it contains no water (like shortening), and it has subtle flavor compounds that contribute to a rich, savory depth. The large fat crystals in lard also create distinctively open, shatter-y layers. If you can source quality leaf lard (from around the kidneys, with a neutral flavor), it's worth trying for a classic savory pie.
          </p>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-cyan-500">
            <h4 className="text-lg mb-2 text-cyan-800">🔬 Science Note: Fat Crystal Size Matters</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The size of fat crystals affects texture. Butter has smaller fat crystals than shortening or lard — which is part of why shortening and lard create more distinctly separated, crunchy flakes while butter produces a more uniform, sandy-tender texture. This is also why the technique matters: leaving fat in larger visible chunks (rather than fully cutting it in) creates more dramatic flake separation regardless of fat type.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-stone-200 my-10">
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Can I substitute butter for shortening 1:1 in pie crust?</h3>
                <p className="text-muted-foreground text-sm">Yes, but the results will differ. Because butter is 80% fat vs shortening's 100%, you'll need slightly more butter to achieve the same fat content — about 1 cup + 2 tbsp of butter to replace 1 cup of shortening. The crust will be more flavorful but slightly less flaky and more prone to shrinking.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Why does all-butter pie crust shrink more?</h3>
                <p className="text-muted-foreground text-sm">Butter's water content activates gluten, and its lower melting point means it softens more during handling — leading to more gluten development overall. More gluten = more shrinkage. Chilling thoroughly at every stage is especially critical with all-butter dough.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">Is Crisco the same as shortening?</h3>
                <p className="text-muted-foreground text-sm">Yes — Crisco is a brand of vegetable shortening and performs identically to generic shortening in pie crust. Modern Crisco (reformulated to remove trans fats) is made from palm oil and soybean oil. It behaves similarly to the original hydrogenated version.</p>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xl mb-2">What is the best fat for a beginner?</h3>
                <p className="text-muted-foreground text-sm">Shortening is the most forgiving for beginners — it stays solid longer, is easier to cut into the flour without warming, and tolerates slightly more handling without toughening. Once you're comfortable with the technique, switch to butter or a blend for better flavor.</p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200 my-10">
            <h3 className="text-2xl mb-4">Related Pie Science</h3>
            <div className="space-y-3">
              <Link to="/pie-science/why-pie-crust-is-flaky" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Pie Crust Is Flaky — the science of steam and layers</Link>
              <Link to="/pie-science/why-pie-crust-shrinks" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Pie Crust Shrinks — gluten tension and how to prevent it</Link>
              <Link to="/pie-science/why-pie-crust-gets-tough" className="block text-amber-700 hover:underline text-sm font-medium">→ Why Pie Crust Gets Tough — the gluten control guide</Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-600 to-amber-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl mb-4">Master Pie Crust Science</h2>
            <p className="text-lg text-white/90 mb-6">
              Explore all our pie and baking science articles to nail every technique.
            </p>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Browse All Articles
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
