import { ArrowRight, Sparkles } from 'lucide-react';
import { trackCTAClick, trackToolStart } from '../utils/analytics';

const PRIMARY_TOOL_URL = 'https://cookiesensei.senseifood.com';

export function Hero() {
  const handlePrimaryCtaClick = () => {
    trackCTAClick('home_hero', 'build_analyze_recipe');
    trackToolStart('CookieSensei', 'home_hero');
  };

  const handleSecondaryCtaClick = () => {
    trackCTAClick('home_hero', 'explore_all_tools');
  };

  return (
    <section className="relative overflow-hidden py-32 px-6">
      {/* Vibrant background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 -z-10" />
      
      {/* Colorful decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full mb-8 shadow-lg shadow-purple-500/20">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">Where Food Meets Science</span>
        </div>

        <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
          Master the Science of Food
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Design recipes, experiment with ingredients, and instantly see the science and nutrition behind what you create.
        </p>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          100% free food science tools. No account required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={PRIMARY_TOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePrimaryCtaClick}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all hover:scale-105"
          >
            Build / Analyze a Recipe
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#tools"
            onClick={handleSecondaryCtaClick}
            className="inline-flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all hover:scale-105"
          >
            Explore All Tools
          </a>
        </div>

        {/* Colorful Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-20 max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-4 md:p-6 border border-blue-500/20">
            <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">5</div>
            <div className="text-xs md:text-sm text-muted-foreground leading-tight">Food Science Tools</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-4 md:p-6 border border-purple-500/20">
            <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">∞</div>
            <div className="text-xs md:text-sm text-muted-foreground leading-tight">Recipe Experiments</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-2xl p-4 md:p-6 border border-orange-500/20">
            <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground leading-tight">Free — No Account</div>
          </div>
        </div>
      </div>
    </section>
  );
}