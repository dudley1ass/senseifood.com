import { Beaker, Sliders, Brain, ChefHat } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Beaker,
      title: 'Choose Your Tool',
      description: 'Select from our specialized recipe builders for cookies, cakes, pies, ice cream, or coffee',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Sliders,
      title: 'Adjust Ingredients',
      description: 'Use precision controls to modify ratios, textures, and composition based on science',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Brain,
      title: 'Understand the Science',
      description: 'Learn how each ingredient affects texture, flavor, and structure in real-time',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: ChefHat,
      title: 'Create & Cook',
      description: 'Get your perfected recipe with nutrition data and precise instructions',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to creation in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line (hidden on mobile, shown on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-1 bg-gradient-to-r from-current to-transparent opacity-30" style={{ color: step.color.split(' ')[1] }} />
              )}
              
              <div className="relative bg-white border-2 border-transparent rounded-2xl p-6 text-center hover:shadow-2xl transition-all hover:scale-105 hover:border-current" style={{ borderColor: 'transparent' }}>
                {/* Step number */}
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-r ${step.color} text-white rounded-full flex items-center justify-center shadow-lg`}>
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 mt-2 shadow-xl`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}