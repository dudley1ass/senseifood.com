import type { ScienceArticleSpec } from '../scienceArticleTypes';

export const sauceScienceArticles: ScienceArticleSpec[] = [
  {
    slug: 'temperature-silent-killer-sauces',
    segment: 'sauce-science',
    categoryLabel: 'Sauce Science',
    title: 'Temperature: The Silent Killer of Sauces',
    subtitle: 'Why heat control matters more than ingredient lists for stable, glossy sauces.',
    readTime: '9 min read',
    level: 'Sauce fundamentals',
    emoji: '🌡️',
    quickAnswer:
      'Most sauces fail because of heat path, not ingredient quality. If it breaks, lower heat first, then repair.',
    intro:
      'Sauces are thermal systems. You are not only combining ingredients—you are controlling protein behavior, fat dispersion, and evaporation under changing temperature. The same recipe can be silky at one simmer intensity and split at another.',
    sections: [
      {
        heading: 'Low heat and high heat fail differently',
        paragraphs: [
          'Low heat can leave aromatics under-extracted and emulsions under-formed, giving a flat, disconnected flavor. High heat does the opposite: it pushes proteins and fat droplets past stability limits, so butter, cream, and cheese sauces separate.',
          'This is why two cooks using the same grams can get opposite outcomes. The process history matters more than static composition.',
        ],
        tip: 'If a sauce breaks, LOWER HEAT before adding any fix ingredient.',
      },
      {
        heading: 'State beats ratio',
        paragraphs: [
          'Flavor wheels describe balance dimensions like salt, fat, acid, and sweet. Temperature describes physical state. A sauce can be “balanced” on paper but unstable in the pan because the emulsion state has already failed.',
          'Use visual cues: tiny active bubbles and glossy surface are usually safer than aggressive rolling boil when finishing with dairy fat.',
        ],
      },
      {
        heading: 'Practical thermal workflow',
        paragraphs: [
          'Build flavor at higher heat, then step down before finishing. Add butter, cream, or cheese at controlled sub-boil or off-heat carryover. Re-check texture before final seasoning.',
          'Treat your stove like equipment with calibration variance. “Medium” is not universal; note your own dial positions that produce reliable sauce behavior.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I fix a broken sauce by whisking harder?',
        a: 'Sometimes temporarily, but if heat is still too high the break often returns. Reduce heat first, then add warm liquid and whisk.',
      },
      {
        q: 'Why does restaurant sauce seem more consistent?',
        a: 'They standardize both formula and heat workflow, including reduction targets and finishing temperatures.',
      },
    ],
    related: [
      { title: 'Emulsion vs Non-Emulsion Sauces', path: '/sauce-science/emulsion-vs-non-emulsion-sauces' },
      { title: 'Order of Operations in Sauces', path: '/sauce-science/order-of-operations-sauce-timing' },
    ],
    fixRecipe: { category: 'baking', problem: 'general' },
  },
  {
    slug: 'order-of-operations-sauce-timing',
    segment: 'sauce-science',
    categoryLabel: 'Sauce Science',
    title: 'Order of Operations: Timing Changes Everything',
    subtitle: 'Same ingredients, different sequence, completely different sauce.',
    readTime: '8 min read',
    emoji: '⏱️',
    quickAnswer: 'Finish with FAT and ACID at the end for cleaner flavor and better texture stability.',
    intro:
      'Sauce building is non-commutative: ingredient A then B is not equal to B then A. Timing controls volatility, texture, and whether emulsions survive service.',
    sections: [
      {
        heading: 'Why sequence matters',
        paragraphs: [
          'Acid added early can mute bright top notes and alter thickening behavior. Acid added late preserves freshness and perceived lift.',
          'Butter added at boil often separates; butter added off heat creates a finer, glossier finish.',
        ],
      },
      {
        heading: 'Finish stage strategy',
        paragraphs: [
          'Use finishing fat to round edges and carry aroma compounds. Use finishing acid for brightness and contrast. Taste after each step, because each move changes perception of the next.',
          'This workflow reduces the common correction spiral (too sharp → too sweet → too salty).',
        ],
        tip: 'Finish with FAT and ACID at the end.',
      },
    ],
    related: [
      { title: 'Temperature: The Silent Killer', path: '/sauce-science/temperature-silent-killer-sauces' },
      { title: 'The One Change Rule', path: '/sauce-science/one-change-rule-sauce-debugging' },
    ],
    fixRecipe: { category: 'baking', problem: 'general' },
  },
  {
    slug: 'salt-as-amplifier-not-only-salty',
    segment: 'sauce-science',
    categoryLabel: 'Sauce Science',
    title: 'Salt Is an Amplifier, Not Just “Salty”',
    subtitle: 'Why under-salted sauces read flat even when acid and fat are present.',
    readTime: '8 min read',
    emoji: '🧂',
    quickAnswer: 'Before adding acid or sugar, verify salt threshold—salt multiplies total flavor expression.',
    intro:
      'Salt does more than add saltiness. It can suppress bitterness, increase flavor contrast, and make umami more legible. Many “needs acid” sauces are actually under-salted.',
    sections: [
      {
        heading: 'Salt as a perception multiplier',
        paragraphs: [
          'At culinary concentrations, salt can increase apparent sweetness and savory depth while reducing harshness. This changes the whole profile, not one axis.',
          'A sauce can be compositionally balanced but perceptually muted until salt reaches threshold.',
        ],
      },
      {
        heading: 'Debug order',
        paragraphs: [
          'Taste, add a small dissolved salt increment, taste again. If flavor “wakes up,” keep salt correction as the primary move and avoid over-acidifying.',
        ],
        tip: 'Before fixing anything—check salt.',
      },
    ],
    related: [
      { title: 'Umami: The Fifth Axis', path: '/sauce-science/umami-axis-beyond-salt-acid-fat-sweet' },
      { title: 'Hidden Water Content', path: '/sauce-science/water-content-hidden-dilution' },
    ],
    fixRecipe: { category: 'baking', problem: 'general' },
  },
  {
    slug: 'water-content-hidden-dilution',
    segment: 'sauce-science',
    categoryLabel: 'Sauce Science',
    title: 'Hidden Water Content: The Dilution Variable',
    subtitle: 'Why sauces go thin when proteins and vegetables release unexpected moisture.',
    readTime: '8 min read',
    emoji: '💧',
    quickAnswer: 'Unexpectedly thin sauce is usually a water-load problem first; reduce before re-seasoning.',
    intro:
      'Food releases water during cooking. Chicken, vegetables, and thawed ingredients can dilute your sauce after it seemed perfect, causing weak flavor and poor body.',
    sections: [
      {
        heading: 'Where extra water comes from',
        paragraphs: [
          'Protein purge, osmotic release from vegetables, and freeze-thaw water migration all add liquid that recipes rarely account for.',
          'If you season before this release stabilizes, final sauce often lands underpowered.',
        ],
      },
      {
        heading: 'Corrective sequence',
        paragraphs: [
          'Do not immediately add more salt, acid, and fat. First reduce to your target consistency, then reassess seasoning.',
          'This avoids over-seasoning a sauce that only needed water removal.',
        ],
        tip: 'Unexpected thin? Reduce first before adjusting.',
      },
    ],
    related: [
      { title: 'Reduction Curve Is Nonlinear', path: '/sauce-science/reduction-curve-nonlinear-flavor' },
      { title: 'Salt as Amplifier', path: '/sauce-science/salt-as-amplifier-not-only-salty' },
    ],
    fixRecipe: { category: 'baking', problem: 'general' },
  },
  {
    slug: 'emulsion-vs-non-emulsion-sauces',
    segment: 'sauce-science',
    categoryLabel: 'Sauce Science',
    title: 'Emulsion vs Non-Emulsion: Two Sauce Worlds',
    subtitle: 'How to diagnose oily separation vs normal concentration behavior.',
    readTime: '9 min read',
    emoji: '🧈',
    quickAnswer: 'If it looks oily and separated, treat it as emulsion failure: add warm liquid + whisk after lowering heat.',
    intro:
      'Not all sauces are built on the same physics. Emulsified sauces can break. Non-emulsified sauces generally concentrate. Correct diagnosis determines the right fix.',
    sections: [
      {
        heading: 'What breaks and what concentrates',
        paragraphs: [
          'Pan sauces, mayo, and many cheese sauces depend on dispersed fat droplets, so they can split into oil and water phases.',
          'Reductions and soy glazes typically do not “break” the same way; they intensify as water evaporates.',
        ],
      },
      {
        heading: 'Visual triage',
        paragraphs: [
          'Glossy cohesion usually signals stable structure. Persistent oil slicks or pooling indicate broken emulsions.',
        ],
        tip: 'If oily, it is likely broken — add warm liquid + whisk after lowering heat.',
      },
    ],
    related: [
      { title: 'Temperature: The Silent Killer', path: '/sauce-science/temperature-silent-killer-sauces' },
      { title: 'Reduction Curve', path: '/sauce-science/reduction-curve-nonlinear-flavor' },
    ],
    fixRecipe: { category: 'baking', problem: 'general' },
  },
  {
    slug: 'reduction-curve-nonlinear-flavor',
    segment: 'sauce-science',
    categoryLabel: 'Sauce Science',
    title: 'Reduction Curve: Flavor Is Not Linear',
    subtitle: 'Why late-stage reduction can rapidly overshoot saltiness and bitterness.',
    readTime: '8 min read',
    emoji: '📉',
    quickAnswer: 'Flavor concentration accelerates late in reduction; if too intense, add liquid and rebuild.',
    intro:
      'Early reduction often improves flavor. Late reduction can quickly push sauces from rich to harsh because concentration effects are nonlinear.',
    sections: [
      {
        heading: 'The late-stage acceleration effect',
        paragraphs: [
          'At lower remaining volume, each additional boil-off step creates bigger jumps in concentration. Salt and bitter compounds cross thresholds quickly.',
          'This explains why a sauce can go from perfect to overdone in a short window.',
        ],
      },
      {
        heading: 'Recovering over-reduction',
        paragraphs: [
          'Dilute with stock or water, then retune seasoning gradually. Avoid masking with sugar alone, which can produce imbalance.',
        ],
        tip: 'If flavor is too strong, you reduced too far — add liquid.',
      },
    ],
    related: [
      { title: 'Hidden Water Content', path: '/sauce-science/water-content-hidden-dilution' },
      { title: 'One Change Rule', path: '/sauce-science/one-change-rule-sauce-debugging' },
    ],
    fixRecipe: { category: 'baking', problem: 'general' },
  },
  {
    slug: 'one-change-rule-sauce-debugging',
    segment: 'sauce-science',
    categoryLabel: 'Sauce Science',
    title: 'The One Change Rule for Sauce Debugging',
    subtitle: 'How to stop over-correcting and make repeatable improvements.',
    readTime: '7 min read',
    emoji: '🧠',
    quickAnswer: 'Make one adjustment, taste, then repeat. Multivariable panic destroys signal.',
    intro:
      'Most sauce failures get worse because cooks apply multiple corrections at once. That hides causality and makes recipes impossible to replicate.',
    sections: [
      {
        heading: 'Why one-variable iteration wins',
        paragraphs: [
          'Single-step adjustments preserve feedback quality. You can identify which action fixed texture, balance, or aroma.',
          'Professional kitchens rely on this loop because it compounds knowledge fast and reduces waste.',
        ],
      },
      {
        heading: 'Operational loop',
        paragraphs: ['Define one problem, choose one correction, taste, log, repeat until target state.'],
        tip: 'Make ONE adjustment → taste → repeat.',
      },
    ],
    related: [
      { title: 'Order of Operations', path: '/sauce-science/order-of-operations-sauce-timing' },
      { title: 'Reduction Curve', path: '/sauce-science/reduction-curve-nonlinear-flavor' },
    ],
    fixRecipe: { category: 'baking', problem: 'recipes-fail' },
  },
  {
    slug: 'umami-axis-beyond-salt-acid-fat-sweet',
    segment: 'sauce-science',
    categoryLabel: 'Sauce Science',
    title: 'Umami: The Missing Fifth Axis',
    subtitle: 'Balanced sauces can still feel empty without savory depth compounds.',
    readTime: '8 min read',
    emoji: '🍄',
    quickAnswer: 'If sauce is balanced but hollow, add umami (soy, mushroom, parmesan, tomato paste, Worcestershire).',
    intro:
      'Salt, acid, fat, and sweet explain a lot, but not everything. Umami adds persistent savory depth that makes sauces taste complete rather than merely balanced.',
    sections: [
      {
        heading: 'Why balanced can still feel empty',
        paragraphs: [
          'A sauce can hit structural balance yet lack glutamate and nucleotide-driven savoriness. The result is clean but unsatisfying flavor.',
          'Umami sources increase perceived depth and length without necessarily increasing acidity or sweetness.',
        ],
      },
      {
        heading: 'Practical umami additions',
        paragraphs: [
          'Use small doses and retaste: soy sauce, mushroom concentrates, parmesan, tomato paste, anchovy, or Worcestershire can all add backbone.',
        ],
        tip: 'Still missing something? Add UMAMI.',
      },
    ],
    related: [
      { title: 'Salt Is an Amplifier', path: '/sauce-science/salt-as-amplifier-not-only-salty' },
      { title: 'Emulsion vs Non-Emulsion', path: '/sauce-science/emulsion-vs-non-emulsion-sauces' },
    ],
    fixRecipe: { category: 'baking', problem: 'general' },
  },
];
