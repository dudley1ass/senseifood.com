import { ChefHat, Package, ArrowRight, Sparkles } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router';
import { trackCTAClick, trackHomePath, trackIngredientSelection, trackToolStart } from '../utils/analytics';

const PANTRY_ITEMS = [
  { id: 'flour', label: 'Flour (all-purpose)' },
  { id: 'butter', label: 'Butter' },
  { id: 'sugar', label: 'Sugar (white or brown)' },
  { id: 'eggs', label: 'Eggs' },
  { id: 'baking_powder', label: 'Baking powder / soda' },
  { id: 'salt', label: 'Salt' },
  { id: 'milk', label: 'Milk' },
  { id: 'cream', label: 'Heavy cream' },
  { id: 'chocolate', label: 'Chocolate / cocoa' },
  { id: 'yeast', label: 'Yeast' },
  { id: 'coffee', label: 'Coffee beans / grounds' },
  { id: 'vanilla', label: 'Vanilla' },
  { id: 'oil', label: 'Oil' },
  { id: 'cornstarch', label: 'Cornstarch / starch' },
] as const;

type PantryId = (typeof PANTRY_ITEMS)[number]['id'];

const TOOL_LINKS = {
  CookieSensei: 'https://cookiesensei.senseifood.com',
  CakeSensei: 'https://cakesensei.senseifood.com',
  PieSensei: 'https://piesensei.senseifood.com',
  IceCreamSensei: 'https://icecreamsensei.senseifood.com',
  BeanSensei: 'https://beansensei.senseifood.com',
} as const;

type Suggestion =
  | {
      kind: 'tool';
      title: string;
      blurb: string;
      href: string;
      toolName: keyof typeof TOOL_LINKS;
    }
  | {
      kind: 'article';
      title: string;
      blurb: string;
      to: string;
    };

function buildSuggestions(selected: Set<PantryId>): Suggestion[] {
  const has = (...ids: PantryId[]) => ids.every((id) => selected.has(id));
  const any = (...ids: PantryId[]) => ids.some((id) => selected.has(id));
  const out: Suggestion[] = [];

  if (has('flour', 'butter', 'sugar') || (has('flour', 'sugar') && has('oil'))) {
    out.push({
      kind: 'tool',
      title: 'Cookies, brownies & bar bakes',
      blurb: 'Shape spread, chew, and richness from what you checked off.',
      href: TOOL_LINKS.CookieSensei,
      toolName: 'CookieSensei',
    });
  }

  if (has('flour', 'eggs', 'sugar') && any('butter', 'oil', 'milk')) {
    out.push({
      kind: 'tool',
      title: 'Cakes & cupcakes',
      blurb: 'Structure, crumb, and moisture — dial ratios with a cake-first builder.',
      href: TOOL_LINKS.CakeSensei,
      toolName: 'CakeSensei',
    });
  }

  if (has('flour', 'butter') && any('sugar', 'salt')) {
    out.push({
      kind: 'tool',
      title: 'Pie crust & fillings',
      blurb: 'Flaky crust chemistry and thickeners for slices that hold.',
      href: TOOL_LINKS.PieSensei,
      toolName: 'PieSensei',
    });
  }

  if (
    (has('cream', 'sugar') && any('milk', 'eggs')) ||
    (has('milk', 'sugar', 'eggs') && any('vanilla'))
  ) {
    out.push({
      kind: 'tool',
      title: 'Ice cream & frozen desserts',
      blurb: 'Frozen texture, iciness, and scoopability from your dairy and sugar.',
      href: TOOL_LINKS.IceCreamSensei,
      toolName: 'IceCreamSensei',
    });
  }

  if (has('coffee')) {
    out.push({
      kind: 'tool',
      title: 'Coffee extraction',
      blurb: 'Grind, ratio, and time — fix bitter, sour, or weak cups.',
      href: TOOL_LINKS.BeanSensei,
      toolName: 'BeanSensei',
    });
  }

  if (has('flour', 'yeast')) {
    out.push({
      kind: 'article',
      title: 'Bread & yeast dough',
      blurb:
        'BreadSensei isn’t on the homepage yet — start with the science of rise and fermentation, then use your pantry in any baking tool.',
      to: '/bread-science/why-bread-rises',
    });
  }

  return out;
}

export function WhatCanIMake() {
  const [selected, setSelected] = useState<Set<PantryId>>(() => new Set());

  const toggle = useCallback((id: PantryId) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const suggestions = useMemo(() => buildSuggestions(selected), [selected]);

  const selectedLabels = useMemo(
    () =>
      PANTRY_ITEMS.filter((item) => selected.has(item.id))
        .map((item) => item.label),
    [selected]
  );

  const trackSelectionAndTool = (s: Extract<Suggestion, { kind: 'tool' }>, source: string) => {
    const labels = PANTRY_ITEMS.filter((i) => selected.has(i.id)).map((i) => i.label);
    trackIngredientSelection(labels);
    trackCTAClick(source, `open_${s.toolName}`);
    trackToolStart(s.toolName, source);
  };

  const handleBrowseTools = () => {
    trackCTAClick('what_can_i_make', 'browse_all_tools');
  };

  const handleScrollToPicker = () => {
    trackHomePath('ingredients', 'what_can_i_make_section');
    trackCTAClick('what_can_i_make', 'jump_to_ingredient_picker');
  };

  return (
    <section id="what-can-i-make" className="py-24 px-6 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div
                id="ingredient-picker"
                className="bg-white rounded-2xl p-6 md:p-8 scroll-mt-28 border border-green-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">What’s in your kitchen?</h3>
                    <p className="text-sm text-muted-foreground">Tap everything you have on hand.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 max-h-[min(420px,55vh)] overflow-y-auto pr-1">
                  {PANTRY_ITEMS.map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors ${
                        selected.has(item.id)
                          ? 'bg-green-50 border-green-500 shadow-sm'
                          : 'bg-gray-50/80 border-transparent hover:border-green-200'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selected.has(item.id)}
                        onChange={() => toggle(item.id)}
                        className="w-5 h-5 accent-green-600 shrink-0"
                      />
                      <span className="text-sm font-medium leading-snug">{item.label}</span>
                    </label>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span className="text-sm font-medium">Suggested next steps</span>
                  </div>
                  {selected.size === 0 ? (
                    <p className="text-sm text-white/90">
                      Select at least one ingredient to see which Sensei tool matches what you can make.
                    </p>
                  ) : suggestions.length === 0 ? (
                    <p className="text-sm text-white/90">
                      Add a few basics (flour, sugar, butter, eggs, cream, or coffee) to unlock tool
                      suggestions — or browse all tools below.
                    </p>
                  ) : (
                    <ul className="space-y-3">
                      {suggestions.map((s) => (
                        <li key={s.kind === 'tool' ? s.href : s.to}>
                          <div className="text-sm font-semibold">{s.title}</div>
                          <p className="text-xs text-white/85 mt-0.5 mb-2">{s.blurb}</p>
                          {s.kind === 'tool' ? (
                            <a
                              href={s.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => trackSelectionAndTool(s, 'what_can_i_make_suggestion')}
                              className="inline-flex items-center gap-1 text-xs font-bold bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg"
                            >
                              Open {s.toolName.replace('Sensei', '')} Sensei
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          ) : (
                            <Link
                              to={s.to}
                              onClick={() => {
                                trackIngredientSelection(selectedLabels);
                                trackCTAClick('what_can_i_make_suggestion', 'read_bread_science');
                              }}
                              className="inline-flex items-center gap-1 text-xs font-bold bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg"
                            >
                              Read bread science article
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-2xl opacity-50 pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-2xl opacity-50 pointer-events-none" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm mb-6 shadow-lg">
              <ChefHat className="w-4 h-4" />
              <span>Ingredient discovery</span>
            </div>

            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              What can I make with what I have?
            </h2>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Check off your pantry on the left. We’ll point you to the Sensei that fits — not a generic
              list that sends you somewhere else first.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Select ingredients</h3>
                  <p className="text-muted-foreground text-sm">
                    Use the checklist — it’s interactive, not a mock screenshot.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Get a matching tool</h3>
                  <p className="text-muted-foreground text-sm">
                    Suggestions update as you tap. Each link opens the right builder.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Build the recipe</h3>
                  <p className="text-muted-foreground text-sm">
                    Inside each Sensei you get sliders, ratios, and science — not just a static page.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#ingredient-picker"
                onClick={handleScrollToPicker}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:shadow-xl hover:shadow-green-500/30 transition-all hover:scale-[1.02]"
              >
                Jump to ingredient list
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#pick-starting-point"
                onClick={handleBrowseTools}
                className="inline-flex items-center justify-center gap-2 border-2 border-green-600 text-green-800 px-6 py-3 rounded-lg hover:bg-green-50 transition-all"
              >
                Browse all tools
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border-2 border-green-200 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {PANTRY_ITEMS.length}
              </div>
              <p className="text-sm text-muted-foreground">Pantry items to pick from</p>
            </div>
            <div>
              <div className="text-3xl mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Live
              </div>
              <p className="text-sm text-muted-foreground">Suggestions as you select</p>
            </div>
            <div>
              <div className="text-3xl mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                5+
              </div>
              <p className="text-sm text-muted-foreground">Sensei builders linked</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
