import { Beaker, Sliders, Brain, ChefHat, BookOpen } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Beaker,
      title: 'Pick a starting point',
      description:
        'Choose the outcome you want—cookies, cake, pie, ice cream, or coffee—and open the matching builder.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Sliders,
      title: 'Adjust Ingredients',
      description: 'Use precision controls to modify ratios, textures, and composition based on science.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Brain,
      title: 'Understand the Science',
      description: 'Learn how each ingredient affects texture, flavor, and structure in real-time.',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: ChefHat,
      title: 'Create & Cook',
      description: 'Get your perfected recipe with nutrition data and precise instructions.',
      color: 'from-green-500 to-emerald-600',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white via-violet-50/35 to-pink-50/40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-[2.25rem] font-bold text-rose-900/95 tracking-tight mb-3">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to creation in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="relative bg-white border border-stone-100/80 rounded-2xl p-6 pt-8 text-center shadow-md hover:shadow-xl transition-shadow hover:-translate-y-0.5 duration-300">
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-r ${step.color} text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg`}
                >
                  {index + 1}
                </div>

                <div
                  className={`w-[4.5rem] h-[4.5rem] bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 mt-1 shadow-lg`}
                >
                  <step.icon className="w-9 h-9 text-white" strokeWidth={1.75} />
                </div>

                <h3 className="text-lg font-semibold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#experiments"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3.5 font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            <BookOpen className="w-5 h-5" />
            Learn the Science (Then Apply It)
          </a>
        </div>
      </div>
    </section>
  );
}
