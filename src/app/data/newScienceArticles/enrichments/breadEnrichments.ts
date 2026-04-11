import type { ArticleEnrichment } from '../articleEnrichmentTypes';

export const BREAD_ENRICHMENTS: Record<string, ArticleEnrichment> = {
  'why-bread-is-dense': {
    introAppend:
      'Internal finish temperatures for lean pan loaves often land near 200–208°F (93–97°C); pulling at 190°F (88°C) can leave a gummy layer that reads as dense once cooled. Enriched doughs with sugar and fat may finish a few degrees lower on the thermometer while still acceptable—always compare to your target crumb photo, not only numbers.',
    sections: [
      {
        heading: 'Dough temperature through the process',
        paragraphs: [
          'Bulk fermentation around 75–78°F (24–26°C) is a common target for straight doughs; much colder slows yeast enough to mimic “no activity,” while warmer pushes alcohol and acidity that can weaken gluten over time. For every 9°F (5°C) change, fermentation rate roughly doubles or halves—rough rule of thumb from Arrhenius-style kinetics in kitchen terms.',
          'Final proof skin temperature matters: drafts below 65°F (18°C) can form a dry skin that restricts oven spring; overly humid proofer air above 85°F (29°C) can overproof before you notice.',
        ],
      },
      {
        heading: 'Hydration and flour protein',
        paragraphs: [
          'Protein near 11–12% (typical AP) vs 12–14% (bread flour) changes water binding and mixing time. High hydration without adequate folding yields a slack dough that bakes dense if shape does not hold tension.',
        ],
      },
    ],
    faqs: [
      { q: 'Does vitamin C help density?', a: 'A tiny amount can strengthen gluten oxidatively; not a substitute for correct fermentation.' },
      { q: 'Dense rye vs wheat?', a: 'Rye pentosans behave differently—dense can be normal; compare to style.' },
    ],
  },
  'why-bread-is-gummy-inside': {
    introAppend:
      'Gelatinization of starch in wheat flour is largely complete in the 185–205°F (85–96°C) internal range for lean bread; gummy often means you exited the oven before that band was uniform, or sliced when interior was still 120–140°F (49–60°C) and steam-soft.',
    sections: [
      {
        heading: 'Carry-over and cooling',
        paragraphs: [
          'Loaves can rise 2–5°F after removal from residual heat; however, they cannot “finish baking” on the rack if pulled far under temp—carry-over is not a substitute for reaching set.',
          'Cool at least to 90°F (32°C) internal before slicing large loaves if you want clean slices; warm bread smears and feels wet even when correctly baked.',
        ],
      },
      {
        heading: 'Enzymes and long autolyse',
        paragraphs: [
          'Excessive protease activity from very long cold autolyse can degrade gluten enough to yield a sticky crumb—different from under-bake but still gummy to the tooth.',
        ],
      },
    ],
    faqs: [
      { q: 'Thermometer calibration?', a: 'Ice water should read 32°F (0°C); boiling water near 212°F (100°C) at sea level—adjust expectations at altitude.' },
      { q: 'SD vs yeast gumminess?', a: 'Sourdough acidity can interact with starch texture; still check internal temp first.' },
    ],
  },
  'why-bread-collapses-after-baking': {
    introAppend:
      'Structure must withstand steam pressure until the crust sets—typically as internal temp climbs through the 180–205°F (82–96°C) window. Over-proofed dough has exhausted gluten elasticity; the dome peaks then falls when crust cannot resist internal shrinkage as gas cools.',
    sections: [
      {
        heading: 'Oven spring window',
        paragraphs: [
          'Maximum expansion often occurs in the first 5–10 minutes when crust is still flexible; too low oven temperature delays crust set and can yield lateral spread instead of upward spring.',
          'Steam in the first minutes keeps crust extensible; removing steam too late can trap excess moisture in the crumb.',
        ],
      },
      {
        heading: 'Scoring depth',
        paragraphs: [
          'Too shallow and the loaf bursts randomly; too deep can deflate. Aim for controlled expansion along the score line at 450–475°F (232–246°C) typical hearth temps.',
        ],
      },
    ],
    faqs: [
      { q: 'Collapsed only in center?', a: 'Often under-proofed surface vs over-proofed core mismatch—check shaping tension.' },
      { q: 'Pan bread collapse?', a: 'Lid removal timing on pullman loaves matters—steam and pressure release.' },
    ],
  },
  'why-bread-is-dry': {
    introAppend:
      'Perceived dryness rises when crumb loses plasticizing water—both from over-baking past 210°F (99°C) in spots and from staling retrogradation over hours to days. Fat-enriched breads lose free moisture differently than lean loaves.',
    sections: [
      {
        heading: 'Bake profile',
        paragraphs: [
          'Lower temperature longer bake evens heat for thick loaves; thin free-form loaves tolerate higher radiant heat. Tent foil when crust hits amber but interior lags 15°F behind target.',
          'Steam early prevents premature crust that traps steam inside unevenly—dry crust, wet crumb paradox is possible.',
        ],
      },
      {
        heading: 'Storage RH',
        paragraphs: [
          'Bread boxes around 70–80% relative humidity slow staling compared with paper bags on a dry counter—without encouraging mold in warm kitchens.',
        ],
      },
    ],
    faqs: [
      { q: 'Oil vs butter dryness?', a: 'Oil often feels softer next-day; butter firms when cold.' },
      { q: 'Freeze drying?', a: 'Freezer burn is sublimation—airtight wrap prevents it.' },
    ],
  },
  'why-bread-is-too-chewy': {
    introAppend:
      'Chew correlates with high gluten development, low hydration relative to protein, and long mixing—sometimes desirable in NY-style bagels, less so in sandwich bread. Temperature of water during mix affects gluten relaxation; warmer dough extensible, cooler tighter.',
    sections: [
      {
        heading: 'Protein and hydration math',
        paragraphs: [
          'Bread flour at identical hydration feels chewier than AP because more gluten can form. Reducing mix time or adding autolyse softens perception without always lowering protein.',
          'Whole wheat bran cuts gluten strands—can paradoxically feel gritty-chewy; different fix than white flour chew.',
        ],
      },
      {
        heading: 'Bake color and Maillard',
        paragraphs: [
          'Dark crust adds bitter-chewy edge perception; lower final temp or shorter bake if interior is already 205°F (96°C).',
        ],
      },
    ],
    faqs: [
      { q: 'Chewy vs tough?', a: 'Tough tears; chewy springs—different levers.' },
      { q: 'Overnight cold ferment chew?', a: 'Acidity strengthens gluten feel; shorter warm bulk can soften.' },
    ],
  },
  'why-bread-crust-is-too-hard': {
    introAppend:
      'Crust hardness rises with surface dehydration above ~300°F (149°C) local surface temp during bake and with low humidity ovens. Steam early keeps crust plastic longer; dry heat the whole time yields thick leathery crusts.',
    sections: [
      {
        heading: 'Temperature and time at surface',
        paragraphs: [
          'Convection accelerates crust formation—reduce temp or time. Dutch ovens trap steam then remove lid to brown—sequence controls crust thickness.',
          'Egg washes and milk washes brown at different rates; egg proteins set firm.',
        ],
      },
      {
        heading: 'Cooling',
        paragraphs: [
          'Cooling in a steamy environment (tent with towel) softens crust slightly by moisture redistribution—does not fix over-thick crust from bake.',
        ],
      },
    ],
    faqs: [
      { q: 'Baguette should be hard?', a: 'Yes for style—compare to your goal, not soft sandwich bread.' },
      { q: 'Microwave soften?', a: 'Steams surface briefly; stales faster after.' },
    ],
  },
  'why-bread-crust-is-too-soft': {
    introAppend:
      'Soft crust often means insufficient surface dehydration—internal steam kept crust hydrated—or baking in a humid pocket without a final dry phase. Steam injection needs venting later for crackly crust.',
    sections: [
      {
        heading: 'Finish dry',
        paragraphs: [
          'Last 5–10 minutes without steam, optionally convection, drives off surface moisture for caramelization. Internal temp should already be near done before this phase.',
          'Oil-brushed crusts stay softer—choose finish for style.',
        ],
      },
      {
        heading: 'Humidity and cooling',
        paragraphs: [
          'Cooling in sealed bags traps moisture—crust softens. Open rack cool for crisp crust breads.',
        ],
      },
    ],
    faqs: [
      { q: 'Soft sandwich goal?', a: 'Butter-top buns want soft—different target than baguette.' },
      { q: 'Egg wash soft?', a: 'Can keep surface tender; omit for crackly.' },
    ],
  },
  'why-bread-burns-on-the-bottom': {
    introAppend:
      'Contact surface between pan and dough often exceeds air temperature—dark metal, thin sheets, and direct flame transfer can char bottoms above 350°F (177°C) air while the crown looks pale. Thermal mass of baking stone can even out or worsen depending on preheat.',
    sections: [
      {
        heading: 'Insulation tactics',
        paragraphs: [
          'Double pan, baking stone buffer, or parchment layer reduces heat flux to the bottom. Lower rack position away from lower element helps in some ovens.',
          'Reduce oven 25°F (14°C) and extend time—depth of heat matters more than peak temperature for thick loaves.',
        ],
      },
      {
        heading: 'Sugar and dairy',
        paragraphs: [
          'Sugars caramelize faster—sweet doughs need more bottom protection than lean.',
        ],
      },
    ],
    faqs: [
      { q: 'Silicone mat help?', a: 'Insulates slightly; watch for longer bake.' },
      { q: 'Glass pan burn?', a: 'Different heat path—often slower bottom than metal but can still scorch.' },
    ],
  },
  'why-bread-is-pale': {
    introAppend:
      'Maillard browning accelerates above roughly 285°F (140°C) surface temperature with available reducing sugars and amino acids. Steam-heavy ovens without a dry finish keep surfaces below effective browning; low sugar doughs lack substrate.',
    sections: [
      {
        heading: 'Finish temperature and environment',
        paragraphs: [
          'Remove steam, raise temp last minutes, or use convection to dry and brown. Milk, egg, or malt syrup washes add sugars for color without sweetness spike.',
          'Diastatic malt in tiny amounts helps crust color in lean doughs—measure carefully.',
        ],
      },
      {
        heading: 'Oven calibration',
        paragraphs: [
          'If tops are chronically pale, verify actual air temp—you may be 30°F low.',
        ],
      },
    ],
    faqs: [
      { q: 'Pale but baked through?', a: 'Color is optional for safety—texture rules doneness.' },
      { q: 'Whole wheat darker?', a: 'Bran masks crumb color; crust can still be pale without malt.' },
    ],
  },
  'why-dough-is-too-sticky': {
    introAppend:
      'Stickiness often reflects hydration above flour absorption, incomplete gluten development, or amylase activity making slack dough. Finished dough temperature near 75–80°F (24–27°C) feels stickier than cold dough at same hydration due to fat and water mobility.',
    sections: [
      {
        heading: 'Absorption and autolyse',
        paragraphs: [
          'Resting flour and water allows hydration without kneading—less sticky feel after 20–60 minutes. Salt added late in autolyse preserves enzyme control.',
          'Different wheat crops absorb differently—same recipe, new bag of flour may need ±2% water.',
        ],
      },
      {
        heading: 'Handling technique',
        paragraphs: [
          'Wet hands and bench scraper beat adding flour repeatedly—which changes ratio.',
        ],
      },
    ],
    faqs: [
      { q: 'Sticky vs wet?', a: 'Wet is excess water; sticky can be protease or high hydration design.' },
      { q: 'Fix with more flour always?', a: 'Last resort—better folds and time.' },
    ],
  },
  'why-dough-wont-hold-shape': {
    introAppend:
      'Shape retention needs gluten tension and surface dryness; over-hydrated or over-proofed dough flows. Bench rest at 68–75°F (20–24°C) allows relaxation without collapse—too cold and it springs back, too warm and it spreads.',
    sections: [
      {
        heading: 'Strength building',
        paragraphs: [
          'Letter folds during bulk build structure without aggressive mixing. Final shaping should create surface tension—skin seals expansion.',
          'Banneton flour supports wet dough; too little and dough sticks; too much and seam slides.',
        ],
      },
      {
        heading: 'Timing',
        paragraphs: [
          'Shape after sufficient strength exists—under-developed dough tears when tensioned.',
        ],
      },
    ],
    faqs: [
      { q: 'High hydration ciabatta?', a: 'Expected slack—different shaping tools.' },
      { q: 'Pizza dough floppy?', a: 'Warm dough and gluten relaxation—cold re-tighten.' },
    ],
  },
  'why-dough-springs-back-when-shaping': {
    introAppend:
      'Elastic springback is tight gluten not yet relaxed—gluten strands act like rubber bands. Resting dough pieces 10–20 minutes at room temperature allows viscous flow without losing gas.',
    sections: [
      {
        heading: 'Relaxation temperature',
        paragraphs: [
          'Warmer dough relaxes faster; cold dough from fridge needs longer bench rest before final shape.',
          'Over-strong mixing increases elastic memory—gentle handling after autolyse helps.',
        ],
      },
      {
        heading: 'Divide and conquer',
        paragraphs: [
          'Pre-shape rounds before batards to align gluten in stages—less fighting the dough.',
        ],
      },
    ],
    faqs: [
      { q: 'Springback in pizza stretch?', a: 'Same physics—rest between stretches.' },
      { q: 'Whole grain more spring?', a: 'Bran cuts strands—often less spring than white.' },
    ],
  },
  'why-dough-rises-too-fast': {
    introAppend:
      'Fast fermentation at 82–90°F (28–32°C) can double bulk in under an hour—risking alcohol, acetic spike, and weak gluten. Yeast activity is exponential in that band until nutrients limit.',
    sections: [
      {
        heading: 'Cooling control',
        paragraphs: [
          'Move dough to cooler space or use fridge retard. Reduce starter inoculation in sourdough for slower acid build.',
          'Salt percentage within normal 1.8–2.2% flour weight regulates yeast speed slightly.',
        ],
      },
      {
        heading: 'Signals',
        paragraphs: [
          'Over-fast rise often smells beer-y and collapses—smell and volume cues beat clock.',
        ],
      },
    ],
    faqs: [
      { q: 'Instant vs active dry speed?', a: 'Instant skips blooming—can feel faster in same temp.' },
      { q: 'Sugar rush?', a: 'High sugar osmotically stresses yeast initially then feeds—complex curve.' },
    ],
  },
  'why-dough-rises-too-slow': {
    introAppend:
      'Slow rise below 65°F (18°C) for sourdough or cold kitchen can stretch bulk past 6 hours without being “wrong”—but dead yeast or salt errors mimic slowness. Target 76–78°F (24–26°C) for predictable 2–3 hour bulk in many recipes.',
    sections: [
      {
        heading: 'Vitality checks',
        paragraphs: [
          'Bloom yeast in 100–110°F (38–43°C) water with pinch sugar—foam in 10 minutes or replace.',
          'Sourdough starter should double predictably at room temp—refresh if flat after 8 hours.',
        ],
      },
      {
        heading: 'Inhibition',
        paragraphs: [
          'Too much salt or spice (clove, cinnamon) can slow yeast—check weights.',
        ],
      },
    ],
    faqs: [
      { q: 'Cold water shock?', a: 'Fridge-cold mix slows hours—use lukewarm liquids in winter.' },
      { q: 'Old flour?', a: 'Rancid fat can inhibit—smell flour bag.' },
    ],
  },
  'why-bread-needs-steam': {
    introAppend:
      'Steam keeps crust below ~300°F (149°C) surface dehydration briefly so loaves expand before hardening—classic hearth technique. Without steam, crust cracks irregularly and oven spring is reduced.',
    sections: [
      {
        heading: 'How much and when',
        paragraphs: [
          'First 5–15 minutes saturated surface; vent thereafter for color. Home methods: lidded Dutch oven, pan of lava rocks, or mist—each varies humidity.',
          'Too much steam entire bake yields soft, thick crust—balance with dry finish.',
        ],
      },
      {
        heading: 'Science summary',
        paragraphs: [
          'Water film increases heat transfer coefficient briefly and plasticizes starch surface—allows stretch.',
        ],
      },
    ],
    faqs: [
      { q: 'Steam pan dry?', a: 'Preheat rocks with water ready—cold water shock drops oven temp.' },
      { q: 'Every bread?', a: 'Soft sandwich loaves in pans often skip; artisan free-form needs it.' },
    ],
  },
  'why-oven-spring-happens': {
    introAppend:
      'Oven spring is rapid expansion when yeast and trapped water vapor pressure inflate the dough before the crust sets—mostly in the first third of bake while internal temp climbs from 140°F (60°C) toward starch set.',
    sections: [
      {
        heading: 'Gas and vapor',
        paragraphs: [
          'CO₂ from yeast and air bubbles expand with heat; water vapor contributes pressure once localized boiling begins in crumb pores.',
          'Scoring directs expansion—without it, weak points burst randomly.',
        ],
      },
      {
        heading: 'Limits',
        paragraphs: [
          'Over-proofed dough cannot spring—bubble walls already thinned. Under-powered ovens may set crust before expansion completes.',
        ],
      },
    ],
    faqs: [
      { q: 'No spring sourdough?', a: 'Check proof state and steam; both dominate.' },
      { q: 'Pizza spring?', a: 'Same physics—hot stone, fast set.' },
    ],
  },
  'why-bread-needs-scoring': {
    introAppend:
      'Scores control where dough tears under tension as internal pressure rises—typically 15–25 psi equivalent stress in small pockets—so the loaf expands predictably instead of blowing out weak seams.',
    sections: [
      {
        heading: 'Depth and angle',
        paragraphs: [
          'Shallow scores for batards open ears; grigne forms where lip peels. Depth ~¼–½ inch depending on hydration.',
          'Cold retarded dough scores cleaner than warm sticky dough—chill briefly if needed.',
        ],
      },
      {
        heading: 'Pattern and expansion',
        paragraphs: [
          'Multiple scores distribute expansion on very wet dough; single slash for stiff dough.',
        ],
      },
    ],
    faqs: [
      { q: 'Score after loading?', a: 'Score right before oven—delay risks sticking closed.' },
      { q: 'Lame vs knife?', a: 'Curved lame creates flap; straight cuts differ.' },
    ],
  },
  'bread-flour-vs-all-purpose-flour': {
    introAppend:
      'Protein roughly 12–14% for bread flour vs 10–12% for AP in US brands—more gluten potential and water absorption. Ash content and wheat variety also shift extensibility vs elasticity.',
    sections: [
      {
        heading: 'When to choose which',
        paragraphs: [
          'High hydration artisan: bread flour or blended. Tender sandwich: AP or blend. Cake and pastry need low protein—wrong flour entirely.',
          'Measure protein from label when possible; brands vary.',
        ],
      },
      {
        heading: 'Mixing implications',
        paragraphs: [
          'Higher protein tolerates longer mix to windowpane; AP reaches same strength faster but lower ceiling.',
        ],
      },
    ],
    faqs: [
      { q: '00 pizza flour?', a: 'Different grind and protein—specialized for pizza, not generic bread sub.' },
      { q: 'Whole wheat protein number?', a: 'Includes bran weight—does not equal white gluten behavior.' },
    ],
  },
  'why-hydration-matters-in-bread': {
    introAppend:
      'Hydration % (baker’s math: water/flour ×100) sets crumb openness, shelf life, and handling difficulty. Typical sandwich breads 60–65%, artisan open crumb 75–85% with technique.',
    sections: [
      {
        heading: 'Starch and gluten competition',
        paragraphs: [
          'Water hydrates starch for gelatinization and enables gluten network formation—too little and dough tears; too much and dough needs folds to align structure.',
          'Temperature changes apparent hydration—warm water feels softer.',
        ],
      },
      {
        heading: 'Adjusting safely',
        paragraphs: [
          'Move 2–3% at a time; record outcomes. Humidity in flour storage changes effective hydration.',
        ],
      },
    ],
    faqs: [
      { q: 'Same hydration different flour?', a: 'Absorption differs—feel and windowpane test beat numbers.' },
      { q: 'Oil in hydration %?', a: 'Usually counted separately—fat lubricates gluten.' },
    ],
  },
};
