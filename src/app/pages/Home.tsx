import { Cookie, Cake, Coffee, IceCream, PieChart, ArrowRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { ToolCard } from '../components/ToolCard';
import { HowItWorks } from '../components/HowItWorks';
import { WhatCanIMake } from '../components/WhatCanIMake';
import { FeaturedExperiments } from '../components/FeaturedExperiments';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function Home() {
  const tools = [
    {
      name: 'CookieSensei',
      icon: Cookie,
      description: 'Design perfect cookies with precise ingredient ratios and texture control',
      url: 'https://cookiesensei.senseifood.com',
      color: 'from-amber-500 to-orange-600'
    },
    {
      name: 'CakeSensei',
      icon: Cake,
      description: 'Engineer layer cakes with perfect crumb structure and moisture balance',
      url: 'https://cakesensei.senseifood.com',
      color: 'from-pink-500 to-rose-600'
    },
    {
      name: 'PieSensei',
      icon: PieChart,
      description: 'Build perfect pies with crust chemistry and filling formulation',
      url: 'https://piesensei.senseifood.com',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'IceCreamSensei',
      icon: IceCream,
      description: 'Create smooth ice cream with precise formulation and texture control',
      url: 'https://icecreamsensei.senseifood.com',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'BeanSensei',
      icon: Coffee,
      description: 'Perfect your coffee with brewing ratios and extraction science',
      url: 'https://beansensei.senseifood.com',
      color: 'from-stone-600 to-amber-800'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Tools Grid */}
      <section id="tools" className="py-24 px-6 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Food Science Tools</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your specialty and start experimenting with precision recipe engineering
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* What Can I Make */}
      <WhatCanIMake />

      {/* Featured Experiments */}
      <FeaturedExperiments />

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl mb-6">Ready to Master Food Science?</h2>
          <p className="text-xl text-white/90 mb-8">
            Start experimenting with your first recipe builder and discover the science behind great food.
          </p>
          <a 
            href="#tools" 
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            Explore Tools
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}