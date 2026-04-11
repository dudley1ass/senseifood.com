import type { ArticleEnrichment } from '../articleEnrichmentTypes';

const COOKIE: Record<string, ArticleEnrichment> = {
  'why-cookies-taste-too-sweet': {
    introAppend:
      'Perceived sweetness spikes when sucrose concentration on the tongue is high and bitter/salt balance is low—typical around 68–72°F (20–22°C) serving temp for dough. Browned cookies show less “raw sugar” perception than pale ones because Maillard products add complexity.',
    sections: [
      {
        heading: 'Sugar chemistry and bake color',
        paragraphs: [
          'Invert sugar from corn syrup or honey tastes sweeter at equal weight to some palates because fructose is perceived sweeter than sucrose—recipe swaps are not 1:1 sensory.',
          'Salt at 0.3–0.5% flour weight often corrects cloying in test batches—measure grams.',
        ],
      },
      {
        heading: 'Chilling and sugar dissolution',
        paragraphs: [
          'Chilled dough dissolves sugar less before bake, changing spread and surface caramelization—sweetness perception interacts with texture.',
        ],
      },
    ],
    faqs: [
      { q: 'European butter cookies sweeter?', a: 'Higher butterfat can carry sweetness differently—compare by weight.' },
      { q: 'Stevia swap?', a: 'Bulking and browning differ—expect texture change.' },
    ],
  },
  'why-cookies-spread-in-oven-but-not-before': {
    introAppend:
      'Spread requires fat phase transition—butter melts near 90–95°F (32–35°C) body-soft then fully liquefies in the oven—plus sugar dissolution lowering viscosity. Before bake, dough below fat melt stays structured; in-oven flow begins as temperature passes ~100°F (38°C) throughout the piece.',
    sections: [
      {
        heading: 'Oven heat transfer',
        paragraphs: [
          'Edge cookies reach melt faster than center—differential spread in one tray is normal. Aluminum vs insulated sheets change bottom heat flux.',
          'Sugar type changes melt curve—more dissolved sugar flows earlier.',
        ],
      },
      {
        heading: 'Leavening timing',
        paragraphs: [
          'Baking soda releases with acid and heat; delayed spread can pair with late CO₂ puff after fat has flowed.',
        ],
      },
    ],
    faqs: [
      { q: 'Room temp butter effect?', a: 'More pre-melt on sheet—often more pre-spread before oven.' },
      { q: 'Frozen dough disk?', a: 'Delays melt—less spread until thaw in oven.' },
    ],
  },
  'why-cookies-turn-out-different-each-batch': {
    introAppend:
      'Repeatability needs controlled dough temperature (ideally 65–70°F / 18–21°C when scooping), consistent scoop size, and oven verification—many home ovens cycle ±25°F around setpoint affecting spread and browning.',
    sections: [
      {
        heading: 'Measurements and tools',
        paragraphs: [
          'Gram scales for flour and sugar remove the largest variance. Spooned cups vary 10–15% mass.',
          'Same rack position and preheat stabilization (thermometer, not beep) matter.',
        ],
      },
      {
        heading: 'Butter and mixing',
        paragraphs: [
          'Creaming time changes air cell count—timer helps. Butter temp affects emulsion before flour.',
        ],
      },
    ],
    faqs: [
      { q: 'Humidity day difference?', a: 'Flour absorbs moisture—slightly less flour or shorter bake sometimes.' },
      { q: 'Dark sheet variance?', a: 'Swap to light or reduce temp 25°F for same timing.' },
    ],
  },
  'why-chilling-cookie-dough-matters': {
    introAppend:
      'Chilling firms fat, slows gluten relaxation, and allows sugar to hydrate more fully—changing spread kinetics. Dough at 38°F (3°C) enters the oven with less pre-melt than 70°F (21°C) dough, often reducing spread several millimeters per cookie.',
    sections: [
      {
        heading: 'Time and temperature',
        paragraphs: [
          '30–60 minutes chills surface; 24–72 hours develops flavor via limited fermentation and full sugar equilibrium.',
          'Resting also reduces sticky handling—easier scoop consistency.',
        ],
      },
      {
        heading: 'Hydration of flour',
        paragraphs: [
          'Even hydration reduces free water flash-off in first oven minutes—slightly thicker result.',
        ],
      },
    ],
    faqs: [
      { q: 'Freeze instead of chill?', a: 'Longer delay to bake—thaw slightly for even bake.' },
      { q: 'Skip for thin crisps?', a: 'Sometimes yes—style dependent.' },
    ],
  },
  'why-cookies-stick-together': {
    introAppend:
      'Contact while above glass transition temperature for sugar-fat matrix (~ room temp for soft batches) welds cookies; cooling below ~95°F (35°C) surface reduces tack. Moisture migration from under-baked centers also glues neighbors.',
    sections: [
      {
        heading: 'Cooling protocol',
        paragraphs: [
          'Space 2 inches on sheet; move to wire rack before fully cool so bases do not steam-weld to pan neighbors.',
          'Layer storage with parchment between when still slightly warm.',
        ],
      },
      {
        heading: 'Humidity and chew',
        paragraphs: [
          'Chewy cookies with hygroscopic sugar pull water from air—stickier stacks in humid climates.',
        ],
      },
    ],
    faqs: [
      { q: 'Stick in jar?', a: 'Vacuum cooling then seal; warm cookies sweat.' },
      { q: 'Chocolate bloom sticky?', a: 'Different issue—fat/sugar bloom on surface.' },
    ],
  },
};

const PIE: Record<string, ArticleEnrichment> = {
  'why-pie-crust-cracks-when-rolling': {
    introAppend:
      'Pie dough is a fat-laminated starch matrix—too cold (~35°F / 2°C) and fat shatters; too warm (~65°F / 18°C) and gluten forms tough sheets that tear. Ideal laminate often rolled around 50–60°F (10–16°C).',
    sections: [
      {
        heading: 'Water and gluten',
        paragraphs: [
          'Minimal water reduces gluten but risks brittleness—balance with vinegar or vodka tricks for tenderness without excess gluten.',
          'Rest between rolls relaxes gluten elasticity—reduces springback tears.',
        ],
      },
      {
        heading: 'Technique',
        paragraphs: [
          'Roll from center outward evenly; quarter-turns keep round shape without overworking one axis.',
        ],
      },
    ],
    faqs: [
      { q: 'Food processor vs hand?', a: 'Processor risks over-cutting fat too fine—less flake.' },
      { q: 'Whole wheat crust?', a: 'Bran cuts gluten—different crack behavior.' },
    ],
  },
  'why-pie-crust-falls-apart': {
    introAppend:
      'Structural integrity needs enough hydrated gluten to hold shape but not so much that toughness dominates—often 3–6% water by flour weight in very short doughs, highly sensitive. Overworking raises gluten and can paradoxically shrink or slough in layers.',
    sections: [
      {
        heading: 'Fat size distribution',
        paragraphs: [
          'Pea-sized butter leaves voids; sand-texture shortens too much for transfer. Chill between steps.',
          'Blind bake with weights until set—steam puff can shatter unweighted.',
        ],
      },
      {
        heading: 'Pan release',
        paragraphs: [
          'Glass vs metal bend differently—support sides when moving.',
        ],
      },
    ],
    faqs: [
      { q: 'Gluten-free crust?', a: 'Binders like xanthan replace gluten—different handling.' },
      { q: 'Cracks when folding?', a: 'Dough too dry—spritz water sparingly.' },
    ],
  },
  'why-pie-filling-bubbles-over': {
    introAppend:
      'Boiling point of sucrose solutions rises with concentration—fruit fillings can superheat past 212°F (100°C) in thick viscous pockets, then erupt through vents. Steam expansion plus starch gel swelling adds volume suddenly.',
    sections: [
      {
        heading: 'Vents and lattice',
        paragraphs: [
          'Enough vent area prevents pressure build-up; egg wash sealing edges too well traps steam.',
          'Foil ring on crust edge reduces over-brown while center finishes to safe 195–200°F (91–93°C) for thickened fruit.',
        ],
      },
      {
        heading: 'Thickener choice',
        paragraphs: [
          'Cornstarch vs tapioca vs flour change burst behavior—tapioca can clear but boil vigorously.',
        ],
      },
    ],
    faqs: [
      { q: 'Pumpkin boil-over?', a: 'Custard fillings swell—shallow pan helps.' },
      { q: 'Slurry lumps?', a: 'Lumps cause local steam pockets—whisk smooth.' },
    ],
  },
  'why-pie-crust-is-too-pale': {
    introAppend:
      'Maillard on pastry needs surface dehydration and roughly 300°F+ (149°C+) local crust temp; soggy fillings steaming the underside keep bottom pale. Egg wash adds proteins and sugars for browning.',
    sections: [
      {
        heading: 'Bake sequence',
        paragraphs: [
          'Blind bake bottom until golden before wet filling, or use bottom heat strategies (stone, lower rack).',
          'Brush milk vs egg vs sugar—each shifts browning rate.',
        ],
      },
      {
        heading: 'Sugar in dough',
        paragraphs: [
          'A teaspoon sugar in dough increases browning without sweetness spike.',
        ],
      },
    ],
    faqs: [
      { q: 'Glass pan pale bottom?', a: 'Often slower brown—move lower or longer.' },
      { q: 'Soggy blocking brown?', a: 'Brush egg mid-bake after docking—careful with weights.' },
    ],
  },
  'why-pie-crust-burns-before-filling-cooks': {
    introAppend:
      'Edge crust sees higher heat flux than protected center under lattice or full top—edges can exceed 350°F (177°C) while center filling lingers at 180°F (82°C). Foil shields reduce radiant heat to rim.',
    sections: [
      {
        heading: 'Temperature strategy',
        paragraphs: [
          'Start high 425°F (218°C) for set then reduce to 350°F (177°C) for filling finish—classic double-temp approach.',
          'Place pie on preheated stone for bottom set while covering rim with foil ring.',
        ],
      },
      {
        heading: 'Filling thickness',
        paragraphs: [
          'Thicker fillings need longer center time—protect edges entire bake.',
        ],
      },
    ],
    faqs: [
      { q: 'Custard curdle risk?', a: 'Low slow finish after hot shell set—different curve than fruit.' },
      { q: 'Convection?', a: 'Browns faster—reduce 25°F or shield earlier.' },
    ],
  },
};

export const COOKIE_PIE_ENRICHMENTS: Record<string, ArticleEnrichment> = {
  ...COOKIE,
  ...PIE,
};
