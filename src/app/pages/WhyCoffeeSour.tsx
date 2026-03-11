import { ArrowLeft, Droplet, Timer, Thermometer, Grape } from 'lucide-react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function WhyCoffeeSour() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-700 text-white px-4 py-2 rounded-full text-sm mb-6">
            Coffee Science
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
            Why Coffee Tastes Sour
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn what causes sour coffee and how to fix it through better brewing technique and bean selection.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>6 min read</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </header>

        {/* Hero Image Placeholder */}
        <div className="w-full h-80 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-3xl mb-12 flex items-center justify-center shadow-2xl">
          <span className="text-8xl">☕😖</span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8">
            Sour coffee is unpleasant and sharp, leaving an acidic aftertaste. While some bright acidity can be desirable, excessive sourness indicates under-extraction—when hot water hasn't pulled enough flavor compounds from the coffee grounds.
          </p>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 my-8 border-2 border-yellow-200">
            <h3 className="text-2xl mb-4 flex items-center gap-3">
              <Grape className="w-7 h-7 text-yellow-600" />
              Understanding Coffee Acidity
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Not all acidity is bad! Coffee naturally contains organic acids that create pleasant brightness:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ <strong>Citric acid</strong> - Bright, lemony notes (desirable)</li>
              <li>✓ <strong>Malic acid</strong> - Apple-like tartness (desirable)</li>
              <li>✗ <strong>Acetic acid</strong> - Harsh, vinegary sourness (undesirable)</li>
              <li>✗ <strong>Quinic acid</strong> - Bitter sourness from over-roasting or old coffee</li>
            </ul>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
            The Science of Under-Extraction
          </h2>

          <p className="leading-relaxed text-foreground/80 mb-6">
            Coffee extraction happens in stages. Acids extract first, followed by sugars and oils, then bitter compounds. When brewing stops too early, you get only the acids without the balancing sweetness and body.
          </p>

          <div className="bg-white rounded-2xl p-8 my-8 shadow-lg border-2 border-orange-200">
            <h3 className="text-xl mb-4">Extraction Timeline</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-orange-500">1st</span>
                <div>
                  <h4 className="font-bold mb-1">Acids & Salts (Sour)</h4>
                  <p className="text-sm text-muted-foreground">Extract quickly in the first 30 seconds</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-amber-500">2nd</span>
                <div>
                  <h4 className="font-bold mb-1">Sugars & Aromatics (Sweet)</h4>
                  <p className="text-sm text-muted-foreground">Extract in the middle phase, balancing acids</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-stone-500">3rd</span>
                <div>
                  <h4 className="font-bold mb-1">Bitter Compounds (Bitter)</h4>
                  <p className="text-sm text-muted-foreground">Extract last, adding depth but can overwhelm</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
            Top Causes of Sour Coffee
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Thermometer className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Water Too Cold</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Low water temperature (below 195°F / 90°C) doesn't extract enough flavor compounds, leaving coffee sour and weak.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <p className="text-sm"><strong className="text-blue-700">Fix:</strong> Use water between 195-205°F (90-96°C). If you don't have a thermometer, let boiling water rest for 30 seconds.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-orange-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Timer className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Brew Time Too Short</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Rushing the brew doesn't give water enough contact time to extract sugars and oils that balance acidity.
                  </p>
                  <div className="bg-orange-50 rounded-xl p-4">
                    <p className="text-sm"><strong className="text-orange-700">Fix:</strong> Follow proper brew times: French Press (4 min), Pour Over (3-4 min), Espresso (25-30 sec).</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Grind Too Coarse</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Large coffee particles have less surface area, reducing extraction. Water flows through too quickly without extracting enough flavor.
                  </p>
                  <div className="bg-purple-50 rounded-xl p-4">
                    <p className="text-sm"><strong className="text-purple-700">Fix:</strong> Use a finer grind setting. Adjust gradually—go one notch finer at a time until sourness disappears.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Droplet className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Coffee-to-Water Ratio Off</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Using too little coffee for the amount of water means each ground extracts less, resulting in weak, sour brew.
                  </p>
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-sm"><strong className="text-green-700">Fix:</strong> Use the golden ratio: 1:16 (1 gram coffee to 16 grams water) or about 2 tablespoons per 6 oz cup.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">☀️</span>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Light Roast Beans</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Light roasts naturally have more acidity and require precise brewing. Under-extraction amplifies their inherent sourness.
                  </p>
                  <div className="bg-red-50 rounded-xl p-4">
                    <p className="text-sm"><strong className="text-red-700">Fix:</strong> For beginners, try medium roasts which are more forgiving. Or increase water temp and brew time for light roasts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
            Quick Fix Guide
          </h2>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 my-8 border-2 border-green-200">
            <h3 className="text-2xl mb-6">If Your Coffee Is Sour, Try This (In Order):</h3>
            <ol className="space-y-4 text-foreground/80 list-decimal list-inside">
              <li className="leading-relaxed">
                <strong>Check water temperature</strong> - Make sure it's hot enough (195-205°F)
              </li>
              <li className="leading-relaxed">
                <strong>Grind finer</strong> - One notch finer on your grinder
              </li>
              <li className="leading-relaxed">
                <strong>Brew longer</strong> - Add 30 seconds to 1 minute to contact time
              </li>
              <li className="leading-relaxed">
                <strong>Use more coffee</strong> - Increase coffee-to-water ratio slightly
              </li>
              <li className="leading-relaxed">
                <strong>Try different beans</strong> - Switch to medium roast if using light roast
              </li>
            </ol>
          </div>

          <h2 className="text-3xl mt-12 mb-6 bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
            Sour vs. Bright: Know the Difference
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl mb-3 text-green-700">Pleasant Brightness</h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Clean, crisp finish</li>
                <li>• Citrus or berry notes</li>
                <li>• Balanced with sweetness</li>
                <li>• Refreshing aftertaste</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200">
              <div className="text-4xl mb-4">✗</div>
              <h3 className="text-xl mb-3 text-red-700">Unpleasant Sourness</h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Sharp, puckering sensation</li>
                <li>• Vinegar-like taste</li>
                <li>• Thin, weak body</li>
                <li>• Lingering harsh acidity</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8 my-12 border-2 border-amber-300">
            <h3 className="text-2xl mb-4">Key Takeaways</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-yellow-700 font-bold text-xl">→</span>
                <span>Sour coffee = under-extraction (acids extracted without balancing sugars)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-700 font-bold text-xl">→</span>
                <span>Increase extraction by using hotter water, finer grind, or longer brew time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-700 font-bold text-xl">→</span>
                <span>Proper water temperature (195-205°F) is the #1 fix for sour coffee</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-700 font-bold text-xl">→</span>
                <span>Pleasant brightness is different from harsh sourness</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-amber-700 to-yellow-700 rounded-3xl p-10 text-white my-16 shadow-2xl">
            <h3 className="text-3xl mb-4">Master Coffee Brewing</h3>
            <p className="text-white/90 mb-6 text-lg">
              Get the perfect extraction every time with our coffee brewing calculator. Dial in your ideal ratios, temperatures, and times.
            </p>
            <a 
              href="https://beansensei.senseifood.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-amber-700 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Try BeanSensei →
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
