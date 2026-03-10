import { ChefHat, Package, ArrowRight, Sparkles } from 'lucide-react';

export function WhatCanIMake() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl">What Can I Make?</h3>
                </div>

                {/* Mock ingredient checklist */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border-2 border-green-200">
                    <input type="checkbox" checked readOnly className="w-5 h-5 accent-green-600" />
                    <span className="text-sm">Flour</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border-2 border-green-200">
                    <input type="checkbox" checked readOnly className="w-5 h-5 accent-green-600" />
                    <span className="text-sm">Butter</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border-2 border-green-200">
                    <input type="checkbox" checked readOnly className="w-5 h-5 accent-green-600" />
                    <span className="text-sm">Sugar</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border-2 border-green-200">
                    <input type="checkbox" checked readOnly className="w-5 h-5 accent-green-600" />
                    <span className="text-sm">Eggs</span>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-medium">You can make:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Cookies</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Cakes</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Pie Crust</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-2xl opacity-50" />
          </div>

          {/* Right side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm mb-6 shadow-lg">
              <ChefHat className="w-4 h-4" />
              <span>Ingredient Discovery</span>
            </div>

            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              What Can I Make With What I Have?
            </h2>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Not sure what to bake? Simply select the ingredients you have on hand, and our tools will show you what recipes you can create.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Select Your Ingredients</h3>
                  <p className="text-muted-foreground text-sm">Check off what's in your pantry—flour, sugar, butter, eggs, and more.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">See What You Can Make</h3>
                  <p className="text-muted-foreground text-sm">Get instant suggestions for cookies, cakes, pies, ice cream, or coffee recipes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Build Your Recipe</h3>
                  <p className="text-muted-foreground text-sm">Jump into the tool and customize your recipe with precision controls.</p>
                </div>
              </div>
            </div>

            <a 
              href="#tools"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:shadow-xl hover:shadow-green-500/30 transition-all hover:scale-105"
            >
              Try It Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Feature callout */}
        <div className="mt-16 bg-white rounded-2xl p-8 border-2 border-green-200 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                500+
              </div>
              <p className="text-sm text-muted-foreground">Ingredient Combinations</p>
            </div>
            <div>
              <div className="text-3xl mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Instant
              </div>
              <p className="text-sm text-muted-foreground">Recipe Suggestions</p>
            </div>
            <div>
              <div className="text-3xl mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Zero
              </div>
              <p className="text-sm text-muted-foreground">Food Waste</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
