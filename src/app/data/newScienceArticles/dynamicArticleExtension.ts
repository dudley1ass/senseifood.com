import type { ScienceArticleSpec } from '../scienceArticleTypes';

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function bodyWords(spec: ScienceArticleSpec): string {
  let t = `${spec.quickAnswer} ${spec.intro} ${spec.subtitle} `;
  for (const sec of spec.sections) {
    t += `${sec.heading} `;
    for (const p of sec.paragraphs) t += `${p} `;
    if (sec.bullets) for (const b of sec.bullets) t += `${b.title ?? ''} ${b.text} `;
    if (sec.tip) t += `${sec.tip} `;
  }
  if (spec.faqs) for (const f of spec.faqs) t += `${f.q} ${f.a} `;
  return t;
}

function benchmarkCopy(spec: ScienceArticleSpec): string {
  const seg = spec.segment;
  if (seg === 'bread-science') {
    return `For lean wheat doughs, internal doneness often lands near 200–208°F (93–97°C) in the thickest part; enriched doughs may finish a few degrees lower while still safe. Bulk fermentation is most predictable around 75–80°F (24–27°C) for many straight doughs—colder slows yeast exponentially; warmer accelerates alcohol and acid production. If you shape cold, allow bench rest until the dough yields when pressed—typically 10–20 minutes at room temperature—before final tension. Steam in the first minutes of baking keeps crust extensible for oven spring; venting later drives Maillard browning.`;
  }
  if (seg === 'cake-science') {
    return `Butter cakes commonly finish between 200–210°F (93–99°C) at the geometric center, though chocolate and very moist formulas can mislead thermometers—pair probe results with spring-back and clean skewer. Edge-to-center gradients matter: a reading “done” only at the top center can still leave wet bands near the pan floor—check an inch above the bottom in thick layers. Convection and dark pans shift effective heat; if edges race, lower the set temperature about 25°F (14°C) and extend time. Cooling until crumb structure stabilizes—often below 100°F (38°C) internally for large layers—reduces tearing and sticky knife drag.`;
  }
  if (seg === 'cookie-science') {
    return `Cookie spread begins as butter phases soften near body temperature and fully mobilizes in the oven—edges often see higher heat first, so tray position and rotation matter. For chewy vs crisp targets, final internal moisture and surface dehydration differ: lower final moisture and more edge browning read “crisp,” while higher moisture and less Maillard read “chewy.” Chill dough near 38°F (3°C) to delay fat flow and reduce spread if needed. Sheet color changes bottom heat flux; light aluminum often gentler than dark nonstick for the same set temperature.`;
  }
  if (seg === 'pie-science') {
    return `Pie dough stays workable around 50–60°F (10–16°C); warmer butter smears, colder dough cracks. Blind-bake until the shell reaches golden where it contacts filling—pale bottoms often mean soggy interfaces even when fruit reads hot. Fruit fillings commonly need to exceed roughly 200°F (93°C) in the bubbling center for starch thickeners to fully activate, but edges can scorch above 350°F (177°C) local surface—foil shields help. Glass and ceramic pans change bottom heat paths versus metal; adjust rack and time, not only temperature.`;
  }
  if (seg === 'coffee-science') {
    return `Water temperature for manual filter brewing is often discussed around 195–205°F (90–96°C) off boil, adjusting for roast and altitude—cooler water can under-extract acids while hotter water can over-extract bitter compounds. Espresso puck temperature interacts with pressure and flow: channeling produces mixed under/over pockets in one cup. Grind size changes surface area exponentially in practice—small grind steps move extraction more than large temperature jumps. Record dose, yield, time, and taste notes together; changing only one variable per session isolates cause.`;
  }
  return `Ice cream hardness depends on ice phase fraction, sugar depression of freezing point, fat network, and air (overrun). Typical home freezers sit near 0°F (-18°C); serving slightly warmer—around 6–10°F (-14 to -12°C) for hard-pack—improves scoopability. Pasteurizing custard bases to roughly 175–180°F (79–82°C) without boiling sets proteins safely; boiling risks curdling emulsions. Rapid freezing forms smaller ice crystals; slow freezing and partial thaw cycles grow crystals and feel icy. Total solids (fat + MSNF + sugar + stabilizers) set body; water-only bases freeze harder.`;
}

function topUpCopy(spec: ScienceArticleSpec): string {
  const seg = spec.segment;
  if (seg === 'ice-cream-science') {
    return `Overrun (air volume) changes how flavors release and how hardness reads—home machines vary; note churn time and visual “soft-serve” finish before hardening. Emulsifiers and eggs shift freezing curves a few degrees; document brand changes. If you temper for service, track hold time above 0°F (−18°C)—small windows change mouthfeel dramatically. Solids—not just fat—include milk solids nonfat; higher MSNF can increase water binding and change scoop firmness at the same sugar level. Alcohol and invert syrups both depress freezing point; a few percentage points of ethanol can keep bases softer at 0°F than math from sugar alone would suggest.`;
  }
  if (seg === 'coffee-science') {
    return `Grinder retention can silently change dose: purge stale grounds after idle. Water TDS around 75–150 ppm is a common specialty-coffee starting band; extremely soft or hard municipal water shifts extraction without you touching grind. For espresso, track yield in grams alongside time—ratio changes strength independent of extraction.`;
  }
  if (seg === 'pie-science') {
    return `Egg washes brown at different rates: whole egg vs yolk vs milk—pick one per series of tests. Docking and pie weights change steam escape during blind bake; note weight amount and bake minutes. Fruit pH affects starch set; very acid fillings may need adjusted thickener percentages from generic charts.`;
  }
  if (seg === 'cookie-science') {
    return `Pan insulation and batch size alter edge vs center: bake one test tray with a single dough batch before scaling. Dough temperature entering the oven—if you scoop at 50°F (10°C) vs 70°F (21°C)—changes spread even at the same set temperature.`;
  }
  return `When a symptom persists, compare two batches on consecutive days with the same flour bag and yeast lot—raw ingredient drift is real. Keep a kitchen thermometer calibrated yearly if you bake weekly; five degrees at the oven cavity is enough to change set time materially.`;
}

export function appendDynamicSectionIfShort(spec: ScienceArticleSpec): ScienceArticleSpec {
  if (countWords(bodyWords(spec)) >= 600) return spec;

  const bench = benchmarkCopy(spec);
  const extra = {
    heading: 'Benchmark temperatures and a repeatable test protocol',
    paragraphs: [
      `This guide on ${spec.title.toLowerCase()} is easier to act on when you anchor numbers instead of vibes. ${bench} Write down ambient kitchen temperature (°F), the set point on your oven or machine, and—when relevant—an internal probe reading or brew time. Change one input per trial: flour brand, hydration percentage, grind setting, chill time, or rack position. Photograph crumb or cup side-by-side after each change. SenseiFood’s Fix My Recipe debugger pairs these observations with ratio checks for your category so the next bake or brew is a measured step, not a guess.`,
      `If you use °C in the kitchen, convert critical bands once and tape them inside a cabinet: 200°F ≈ 93°C (cake/bread finish neighborhood), 350°F ≈ 177°C (common cake/cookie air set point), 212°F = 100°C (sea-level water boil), and espresso extraction times often discussed in the 25–35 second range for classic 9-bar shots—always taste-adjusted to your machine. Altitude lowers water’s boiling point, which shifts extraction and evaporation; bakers at elevation should rely more on internal temperature and visual set than on clock alone.`,
      `Humidity changes how dough skins, how icing behaves, and how staling feels the next day—note outdoor weather when results swing for no obvious reason. For anything oven-based, log preheat completion time: many ovens continue drifting 10–20°F after the beep. For frozen desserts, log freezer display temp if available; a chest freezer near −10°F (−23°C) behaves differently than a frost-free kitchen freezer with defrost cycles. Small environmental logs turn one-off failures into solvable patterns.`,
    ],
  };

  let merged: ScienceArticleSpec = {
    ...spec,
    sections: [...spec.sections, extra],
  };

  if (countWords(bodyWords(merged)) < 600) {
    merged = {
      ...merged,
      sections: [
        ...merged.sections,
        {
          heading: 'Extra variables that swing results',
          paragraphs: [topUpCopy(spec)],
        },
      ],
    };
  }

  return merged;
}
