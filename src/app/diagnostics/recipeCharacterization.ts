import type { DiagnosticInput, RecipeCategory, RecipeCharacterization } from './types';

const LARGE_EGG_G = 50;

/**
 * Deterministic read: from flour / fat / sugar / eggs / leaveners / liquids, what this tends to bake like.
 * Home baking varies; this is a teaching label, not a guarantee.
 */
export function deriveRecipeCharacterization(input: DiagnosticInput): RecipeCharacterization | null {
  const flour = input.flourG ?? 0;
  if (flour <= 0) return null;

  const fat = input.butterG ?? 0;
  const sugar = input.sugarG ?? 0;
  const fatRatio = fat / flour;
  const sugarRatio = sugar / flour;
  const eggs = input.eggCount ?? 0;
  const eggToFlour = (eggs * LARGE_EGG_G) / flour;

  const cupsEq = flour / 120;
  const tspChem =
    (input.bakingPowderG ?? 0) / 4 + (input.bakingSodaG ?? 0) / 4.6;
  const tspPerCup = cupsEq > 0 ? tspChem / cupsEq : 0;

  const yeastG = input.yeastG ?? 0;
  const liquidG = input.liquidG ?? 0;
  const liquidRatio = liquidG / flour;

  const cat = input.category;

  if (cat === 'bread') {
    if (yeastG > 0.5) {
      return {
        headline: 'Yeast-leavened dough',
        blurb: 'Yeast plus flour points to bread: rise and crumb come from gluten development and fermentation time—not just the numbers on the page.',
      };
    }
    return {
      headline: 'Flour-heavy mix with little or no yeast listed',
      blurb: 'For real bread, add instant yeast to the table—or you may be closer to quick bread / soda bread if baking soda appears.',
    };
  }

  if (cat === 'pie') {
    if (fatRatio >= 0.32 && fatRatio <= 0.7 && sugarRatio < 0.28) {
      return {
        headline: 'Pastry / pie crust–style fat-to-flour balance',
        blurb: 'Fat near this range vs flour is typical for flaky crust: keep fat cold and don’t overwork for layers.',
      };
    }
    return {
      headline: 'Rich crust or filled pie build',
      blurb: 'Your flour and fat lines suggest pastry; filling moisture will change how crisp the bottom stays.',
    };
  }

  if (cat === 'cake') {
    if (eggToFlour >= 0.38 && liquidRatio > 0.55) {
      return {
        headline: 'Moist, tender cake-style batter',
        blurb: 'Eggs and liquids vs flour look like a classic cake: mix to combine once flour goes in to avoid a tough crumb.',
      };
    }
    if (tspPerCup >= 2.2) {
      return {
        headline: 'Well-leavened, light cake structure',
        blurb: 'Chemical leavening per cup of flour is fairly high—expect good lift if acid and leaver are in balance.',
      };
    }
    return {
      headline: 'Cake-style formula',
      blurb: 'Ratios read as a structured cake batter; dryness or density usually tracks bake time, pan size, and oven temp.',
    };
  }

  // cookie, baking, coffee/ice-cream-with-flour → same ratio read
  const cookieCat =
    cat === 'coffee' || cat === 'iceCream' ? 'baking' : cat === 'cookie' || cat === 'baking' ? cat : 'baking';

  return characterizeCookieLike(cookieCat, {
    fatRatio,
    sugarRatio,
    eggToFlour,
    tspPerCup,
    eggs,
  });
}

function characterizeCookieLike(
  category: RecipeCategory,
  p: {
    fatRatio: number;
    sugarRatio: number;
    eggToFlour: number;
    tspPerCup: number;
    eggs: number;
  }
): RecipeCharacterization {
  const { fatRatio, sugarRatio, eggToFlour, tspPerCup, eggs } = p;

  if (fatRatio < 0.32 && sugarRatio < 0.36 && eggs === 0) {
    return {
      headline: 'Crisp, lean shortbread or slice-and-bake style',
      blurb: 'Low fat and sugar vs flour with no eggs usually bakes firm and crumbly—great for neat edges, not gooey centers.',
    };
  }

  if (tspPerCup >= 1.8 && eggToFlour >= 0.32) {
    return {
      headline: 'Soft, cakey cookie or bar',
      blurb: 'Plenty of egg and chemical leavening vs flour nudges the crumb toward cake: puffed and tender, less thin-and-chewy.',
    };
  }

  if (sugarRatio >= 0.54 && fatRatio >= 0.44) {
    return {
      headline: 'Thin, chewy cookie that spreads and browns',
      blurb: 'High sugar and fat vs flour weakens structure and drives spread and caramelization—think glossy sugar cookies unless the dough is chilled.',
    };
  }

  if (sugarRatio >= 0.4 && fatRatio >= 0.36 && fatRatio <= 0.58) {
    return {
      headline: 'Classic drop-cookie range (chewy / balanced)',
      blurb: 'Sugar and fat sit near familiar chocolate-chip territory: spread and texture still shift a lot with chill time, butter temp, and oven rack.',
    };
  }

  if (fatRatio > 0.58) {
    return {
      headline: 'Very rich, tender, spread-prone dough',
      blurb: 'Fat well above flour by weight makes a soft, often flat cookie unless you add flour, chill thoroughly, or bake from cold.',
    };
  }

  if (sugarRatio < 0.38 && fatRatio >= 0.36) {
    return {
      headline: 'Milder sweetness, more structured cookie',
      blurb: 'Lower sugar vs flour reins in spread and browning; cookies often stay thicker with a softer-not-ultra-chewy bite.',
    };
  }

  const scope =
    category === 'baking'
      ? 'cookie or bar'
      : 'cookie';

  return {
    headline: `General ${scope} dough`,
    blurb: 'Flour, fat, and sugar sit in a workable middle; eggs and leavening nudge cakey vs crisp. Oven temp and dough temperature finish the story.',
  };
}
