import type { ArticleEnrichment } from '../articleEnrichmentTypes';

const COFFEE: Record<string, ArticleEnrichment> = {
  'why-coffee-tastes-hollow': {
    introAppend:
      '“Hollow” often describes thin mouthfeel with sour-bitter imbalance—extraction yield in the 16–18% range can taste weak in TDS while still showing acids, common when grind is too coarse or water bypasses the bed. Ideal shot temperatures often sit 195–205°F (90–96°C) at puck for espresso; filter brews peak differently by method.',
    sections: [
      {
        heading: 'Strength vs extraction',
        paragraphs: [
          'Total dissolved solids (roughly related to strength) can be low while extraction percentage is high—bitter and weak simultaneously. Fix ratio before chasing finer grind.',
          'Channeling in espresso creates local over-extraction and local under-extraction—hollow, confusing cups.',
        ],
      },
      {
        heading: 'Water chemistry',
        paragraphs: [
          'Very soft water under-extracts aromatics; very hard can flatten acids—both read “flat” or hollow.',
        ],
      },
    ],
    faqs: [
      { q: 'Light roast hollow?', a: 'High acid low solubles—try hotter water or finer grind within balance.' },
      { q: 'Paper filter hollow?', a: 'Bypass or grind adjustment—method specific.' },
    ],
  },
  'why-coffee-tastes-over-extracted': {
    introAppend:
      'Over-extraction pulls late compounds—tannins, bitter alkaloids—past pleasant balance, often when water contact time is too long or temperature too high. Espresso shots past ~35–40s for same dose often trend woody; filter past ~4:30 can gain dryness.',
    sections: [
      {
        heading: 'Time, temperature, grind',
        paragraphs: [
          'Finer grind increases surface area—same time yields higher extraction. Raise temperature in 1°F steps or coarsen slightly to reduce harshness.',
          'Brew ratio 1:15 vs 1:17 changes strength at same extraction—confusing diagnosis without scale.',
        ],
      },
      {
        heading: 'Dark roast sensitivity',
        paragraphs: [
          'Soluble mass is higher—easier to over-extract quickly; shorter ratios help.',
        ],
      },
    ],
    faqs: [
      { q: 'Bitter vs over-extracted?', a: 'Overlap; TDS measurement clarifies.' },
      { q: 'Stirring pour-over?', a: 'Can even extraction or cause fines migration—technique dependent.' },
    ],
  },
  'why-coffee-tastes-under-extracted': {
    introAppend:
      'Under-extraction stops before sugars and pleasant acids fully dissolve—often sour, salty, vegetal. Water below ~195°F (90°C) for many methods under-solubilizes; grinding too coarse shortens contact inefficiently.',
    sections: [
      {
        heading: 'Yield window',
        paragraphs: [
          'Aim for balanced cup by adjusting grind first in small steps, then temperature ±2°F, then ratio.',
          'Bloom phase matters in pour-over—insufficient wetting leaves dry pockets.',
        ],
      },
      {
        heading: 'Freshness and CO₂',
        paragraphs: [
          'Very fresh espresso off-gasses—first seconds blond; need adjusted yield timing.',
        ],
      },
    ],
    faqs: [
      { q: 'Sour always under?', a: 'Often, but also roast level and water alkalinity interact.' },
      { q: 'Cold brew under?', a: 'Time compensates—12h vs 18h changes extraction curve.' },
    ],
  },
  'why-coffee-strength-vs-extraction-matters': {
    introAppend:
      'Strength (TDS) is concentration; extraction is percentage of grounds dissolved. You can brew 1:10 weak-tasting if under-extracted, or 1:18 strong-tasting if over-extracted—two independent sliders.',
    sections: [
      {
        heading: 'Dialing metaphor',
        paragraphs: [
          'Grind/time mainly moves extraction; ratio mainly moves strength—first principles for troubleshooting.',
          'Ideal cup often targets ~18–22% extraction and ~1.2–1.4% TDS for filter—ranges vary by preference.',
        ],
      },
      {
        heading: 'Practical workflow',
        paragraphs: [
          'Fix extraction window, then adjust ratio for mouthfeel—re-measure when changing roast.',
        ],
      },
    ],
    faqs: [
      { q: 'Refractometer needed?', a: 'Helpful not mandatory—taste with structured checklist works.' },
      { q: 'Espresso TDS?', a: 'Higher range—compare to yield and time, not filter numbers.' },
    ],
  },
  'why-coffee-tastes-different-every-brew': {
    introAppend:
      'Variance sources: grinder retention, water temp drift, pour pattern, bloom vigor, and bean age changing CO₂. Room humidity changes cooling rate of hot water in kettle between pours.',
    sections: [
      {
        heading: 'Checklist',
        paragraphs: [
          'Same dose to 0.1g, same water temp measured at pour spout, same pour cadence—remove variables systematically.',
          'Clean burrs—old fines change dose silently.',
        ],
      },
      {
        heading: 'Bean state',
        paragraphs: [
          'Days 4–14 post-roast often most stable; very fresh or very stale shifts extraction.',
        ],
      },
    ],
    faqs: [
      { q: 'Same recipe different baristas?', a: 'Human pour rate dominates in manual brew.' },
      { q: 'Electric kettle variance?', a: 'Hold temp mode vs boil-then-wait changes first pour temp.' },
    ],
  },
};

const ICE: Record<string, ArticleEnrichment> = {
  'why-ice-cream-is-too-hard': {
    introAppend:
      'Hardness relates to ice phase volume, sugar depression of freezing point, and air (overrun). Domestically, 0°F (-18°C) storage makes high-water, low-sugar bases rock-hard; serving around 6–10°F (-14 to -12°C) for scooping is common parlor practice.',
    sections: [
      {
        heading: 'Sugar, alcohol, and solids',
        paragraphs: [
          'More sugar lowers freezing point—softer at freezer temp but can melt faster when eaten. Fat and MSNF add body.',
          'Alcohol in mix depresses freezing further—balance for texture.',
        ],
      },
      {
        heading: 'Home freezer cycling',
        paragraphs: [
          'Auto-defrost cycles warm slightly—ice crystal growth and hardness change over weeks.',
        ],
      },
    ],
    faqs: [
      { q: 'Let sit 5 minutes?', a: 'Raises temp toward scoopable—valid technique.' },
      { q: 'Glycerin?', a: 'Commercial stabilizer strategies—home recipes differ.' },
    ],
  },
  'why-ice-cream-is-too-soft': {
    introAppend:
      'Soft serve in freezer often means incomplete freezing (draw temperature above ~21°F / -6°C for some bases) or high sugar/alcohol keeping it fluid at 0°F. Poor air incorporation also feels dense-soft.',
    sections: [
      {
        heading: 'Freezer and churn',
        paragraphs: [
          'Domestic machines may not reach commercial overrun—expect softer texture legitimately.',
          'Cure in coldest part of freezer 4+ hours after churn for firmness.',
        ],
      },
      {
        heading: 'Recipe balance',
        paragraphs: [
          'Too much corn syrup or invert can prevent firm set—check solids ratios.',
        ],
      },
    ],
    faqs: [
      { q: 'Soft after week?', a: 'Partial melt-refreeze cycles—texture suffers.' },
      { q: 'Gelato softer?', a: 'Style intent—warmer service temp.' },
    ],
  },
  'why-ice-cream-tastes-icy': {
    introAppend:
      'Icy texture means large ice crystals—often from slow freezing, partial thaw, or low total solids. Rapid freeze to -10°F (-23°C) or below in blast freezers makes small crystals; home freezers grow crystals over time.',
    sections: [
      {
        heading: 'Heat shock',
        paragraphs: [
          'Melting even partially and refreezing coarsens texture—minimize warm trips from store.',
          'Emulsifiers and stabilizers reduce crystal growth kinetics—home eggs/cornstarch play partial role.',
        ],
      },
      {
        heading: 'Water activity',
        paragraphs: [
          'High water, low fat/sugar formulas freeze icier—adjust solids.',
        ],
      },
    ],
    faqs: [
      { q: 'Alcohol icy?', a: 'Keeps liquid phase—different mouthfeel than water ice.' },
      { q: 'Sorbet icy?', a: 'Expected some—sugar and pectin manage it.' },
    ],
  },
  'why-ice-cream-lacks-flavor': {
    introAppend:
      'Flavor perception drops at cold temperatures—taste buds less sensitive around 0–20°F (-18 to -7°C). Fat coats tongue and can mute volatile aromatics unless salt and vanilla are balanced. Overrun dilutes flavor mass per bite.',
    sections: [
      {
        heading: 'Bloom and volatiles',
        paragraphs: [
          'Let pint warm slightly on counter—volatiles release. Same ice cream reads sweeter and more aromatic at 10°F than at -5°F.',
          'Extracts and infusions need concentration to survive dilution by cream.',
        ],
      },
      {
        heading: 'Fat and sugar',
        paragraphs: [
          'Too much fat can flatten perceived flavor intensity—counterintuitive but common in testing.',
        ],
      },
    ],
    faqs: [
      { q: 'Salt in sweet?', a: 'Tiny pinch heightens perceived flavor complexity.' },
      { q: 'Old freezer odors?', a: 'Fat absorbs smells—airtight containers matter.' },
    ],
  },
  'why-ice-cream-separates': {
    introAppend:
      'Separation is broken emulsion—fat globules coalesce and water synerizes—often from heat shock, insufficient emulsifier, or acid curdling proteins. Custard bases need safe pasteurization 175–180°F (79–82°C) hold for egg set without boil.',
    sections: [
      {
        heading: 'Emulsion science',
        paragraphs: [
          'Lecithin in egg yolk and milk helps; commercial products add mono/diglycerides. Homogenization scale matters—blender re-emulsifies small batches.',
          'Acid fruits need stabilized bases—otherwise dairy proteins precipitate.',
        ],
      },
      {
        heading: 'Churn and storage',
        paragraphs: [
          'Over-churning can butter fat—grainy separated feel.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I rescue split base?', a: 'Blend smooth, strain, rechill—sometimes works if not curdled hard.' },
      { q: 'Vegan separates?', a: 'Different emulsifiers—lecithin or gums common.' },
    ],
  },
};

export const COFFEE_ICE_ENRICHMENTS: Record<string, ArticleEnrichment> = {
  ...COFFEE,
  ...ICE,
};
