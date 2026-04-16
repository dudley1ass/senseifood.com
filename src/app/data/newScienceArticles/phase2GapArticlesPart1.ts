import type { ScienceArticleSpec } from '../scienceArticleTypes';

const CAKE_REL = [
  { title: 'How to Debug Cake Problems', path: '/cake-science/how-to-debug-cake-problems' },
  { title: 'Why Cakes Turn Gummy', path: '/cake-science/why-cakes-turn-gummy' },
];

const PIE_REL = [
  { title: 'Why Pie Filling Is Runny', path: '/pie-science/why-pie-filling-is-runny' },
  { title: 'Why Pie Crust Gets Soggy', path: '/pie-science/why-pie-crust-gets-soggy' },
];

/** Phase-2 gap articles: post-bake behavior, emulsions, filling chemistry, steam dynamics — with time/temperature/sequence/holding emphasis. */
export const phase2GapArticlesPart1: ScienceArticleSpec[] = [
  {
    slug: 'why-cakes-oil-out',
    segment: 'cake-science',
    categoryLabel: 'Cake Science',
    title: 'Why Cakes Oil Out (Fat Separation in Batter)',
    subtitle: 'Emulsion timing, fat temperature, and mixing sequence decide whether oil beads later weep from the crumb.',
    readTime: '8 min read',
    level: 'Process & temperature',
    emoji: '🛢️',
    fixRecipe: { category: 'cake', problem: 'general' },
    quickAnswer:
      'Oil on the surface or greasy streaks usually mean the fat–water emulsion broke during mixing or got too warm before structure set. Match fat softness to method, add eggs gradually, and avoid long holds at room temp before baking.',
    intro:
      'Cake batter is a temporary emulsion: fat droplets stay suspended in watery phases because proteins and emulsifiers (especially eggs) coat interfaces. When that balance fails—wrong temperature path, reversed sequence, or sitting too long—fat coalesces and migrates. The symptom shows up as shine, pools, or “sweating” slices.',
    sections: [
      {
        heading: 'Temperature path through creaming and eggs',
        paragraphs: [
          'Butter that is too warm creams faster but creates larger, less stable fat droplets. Cold eggs shock warm fat and encourage splitting. Aim for cool-room butter and eggs that are neither fridge-cold nor warm.',
          'If the bowl heats from a long mix, pause and scrape; surface heat is a silent emulsion killer.',
        ],
      },
      {
        heading: 'Sequence: water and fat meet on your schedule',
        paragraphs: [
          'Dumping liquid before the fat phase is properly aerated and coated can wash out structure. Alternate dry and wet in stages so surfactants from yolk encounter fat in thin films, not floods.',
        ],
      },
      {
        heading: 'Holding phase before the oven',
        paragraphs: [
          'Batters held hot (near a stove or in sun) can partially melt fat microstructure. If you must hold, keep covered and cool; rebalance by slightly chilling the pan before loading.',
        ],
      },
      {
        heading: 'Bake set locks fat in place',
        paragraphs: [
          'Until starch gelatinizes and proteins denature, fat can still move. Under-baked centers often release more free fat as they cool because the network never fully imprisoned droplets.',
        ],
        tip: 'If you see oil pooling on raw batter, remix is rarely safe—portion into a fresh bowl, slightly warm yolk with a splash of milk, and whisk back in off heat, or restart that stage.',
      },
    ],
    related: [
      { title: 'Why Cakes Turn Gummy', path: '/cake-science/why-cakes-turn-gummy' },
      { title: 'Why Cakes Have a Wet Layer at the Bottom', path: '/cake-science/why-cakes-have-a-wet-layer-at-the-bottom' },
      ...CAKE_REL,
    ],
  },
  {
    slug: 'why-cakes-taste-flat',
    segment: 'cake-science',
    categoryLabel: 'Cake Science',
    title: 'Why Cakes Taste Flat (Flavor Layering Failure)',
    subtitle: 'Maillard timing, salt, acid, and aromatic volatility stack—or cancel—depending on bake curve and cooling.',
    readTime: '8 min read',
    level: 'Flavor & heat curve',
    emoji: '😐',
    fixRecipe: { category: 'cake', problem: 'general' },
    quickAnswer:
      'Flat flavor is rarely one missing spice. It is usually weak browning (time/temperature), low salt, no acid contrast, or aromas that baked off because they were added too early or cooled under a tight seal that trapped steam.',
    intro:
      'Flavor in cake is layered: base sweetness, browned notes from the crust, volatile aromatics from extracts and zest, and the finishing perception after swallowing. If your thermal sequence mutes browning or drives volatiles out too early, the crumb reads as “sweet cardboard.”',
    sections: [
      {
        heading: 'Time and temperature create depth',
        paragraphs: [
          'Pale cakes often taste flat because Maillard and caramel notes are under-developed. A slightly longer crust phase at controlled temperature (not a blast that dries the interior) builds complexity.',
        ],
      },
      {
        heading: 'Sequence of volatile ingredients',
        paragraphs: [
          'Alcohols and citrus oils flash off quickly. Adding them at the very end of mixing—or even brushing a cooled cake—preserves top notes that oven heat would erase.',
        ],
      },
      {
        heading: 'Holding and cooling change perception',
        paragraphs: [
          'Trapping steam right after bake with an airtight lid can dull aroma perception. Vent until just warm, then wrap for moisture retention.',
        ],
      },
      {
        heading: 'Salt and acid as amplifiers',
        paragraphs: [
          'Salt lifts sweetness perception; a trace of acid (buttermilk, yogurt, a pinch of citrate) separates sugar monotony. Measure salt by weight; tiny acid moves matter late in the formula.',
        ],
      },
    ],
    related: [
      { title: 'Why Cakes Brown', path: '/cake-science/why-cakes-brown' },
      { title: 'Why Cakes Are Too Sweet', path: '/cake-science/why-cakes-are-too-sweet' },
      ...CAKE_REL,
    ],
  },
  {
    slug: 'why-cakes-form-a-thick-crust',
    segment: 'cake-science',
    categoryLabel: 'Cake Science',
    title: 'Why Cakes Form a Thick Crust',
    subtitle: 'Surface heat flux, sugar load, and bake time relative to pan size build a shell before the center finishes.',
    readTime: '7 min read',
    level: 'Heat transfer',
    emoji: '🧱',
    fixRecipe: { category: 'cake', problem: 'dry' },
    quickAnswer:
      'Thick crusts come from the outside spending too long at high heat while the center catches up—high sugar, dark pans, hot ovens, or long holds after doneness. Lower edge heat, shorten the “extra” bake window, and match pan volume.',
    intro:
      'Crust is where the cake meets the oven’s radiation and convection first. If heat arrives faster than moisture can migrate inward, the surface dries, browns deeply, and keeps reacting while the crumb is still setting. That differential is the physics of a tough rim.',
    sections: [
      {
        heading: 'Temperature: oven vs local pan microclimate',
        paragraphs: [
          'Dark metal and glass accelerate surface set. If edges crust before the dome sets, drop temperature 15–25°F and extend time slightly, or use baking strips to slow edge heat.',
        ],
      },
      {
        heading: 'Sugar and Maillard on the rim',
        paragraphs: [
          'High sugar formulas brown aggressively at the contact zone. Lowering pan-side heat matters more than lowering average oven temperature.',
        ],
      },
      {
        heading: 'Sequence: doneness checks',
        paragraphs: [
          'Repeated door openings change the heat rhythm and can overdry edges while you hunt for center doneness. Probe temperature once you see visual cues instead of opening early.',
        ],
      },
      {
        heading: 'Holding after bake',
        paragraphs: [
          'Leaving a cake in a switched-off but still-hot oven continues crust formation via carryover. Remove to a rack when set targets are met.',
        ],
      },
    ],
    related: [
      { title: 'Why Cakes Bake Unevenly', path: '/cake-science/why-cakes-bake-unevenly' },
      { title: 'Why Cakes Taste Dry', path: '/cake-science/why-cakes-taste-dry' },
      ...CAKE_REL,
    ],
  },
  {
    slug: 'why-cakes-stick-to-themselves-when-layering',
    segment: 'cake-science',
    categoryLabel: 'Cake Science',
    title: 'Why Cakes Stick to Themselves When Layering',
    subtitle: 'Surface tack from sugar glass, incomplete cool-down, and pressure during stacking.',
    readTime: '7 min read',
    level: 'Post-bake handling',
    emoji: '🥞',
    fixRecipe: { category: 'cake', problem: 'general' },
    quickAnswer:
      'Layers fuse when cut faces are still warm, steam-soft, or high in hygroscopic sugar. Chill fully, brush crumbs away, and use a thin barrier (simple syrup with restraint, buttercream dam) before stacking.',
    intro:
      'Assembly is a second thermal process. Warm crumb is plastic; sugar at the cut surface can hygroscopically glue layers. Professional workflows treat chill time and surface film as structural steps, not optional styling.',
    sections: [
      {
        heading: 'Cooling sequence before the knife',
        paragraphs: [
          'Trim and tort while slightly firm, then finish-chill before final stack. Warm centers telegraph outward and re-soften frosting dams.',
        ],
      },
      {
        heading: 'Holding frostings and fillings',
        paragraphs: [
          'Warm jam or ganache releases moisture into the crumb face. Apply cool fillings or set ganache to pipeable thickness first.',
        ],
      },
      {
        heading: 'Pressure and flatness',
        paragraphs: [
          'Over-torquing a scraper when crumb-coating squeezes adhesive sugar syrup between layers. Light touch + chill between coats.',
        ],
      },
      {
        heading: 'Time between crumb coat and final coat',
        paragraphs: [
          'Short rests let buttercream firm so the next layer does not slide-tear. Rushing stacks heat from hands through gloves into surfaces.',
        ],
      },
    ],
    related: [
      { title: 'Why Cakes Stick to the Pan', path: '/cake-science/why-cakes-stick-to-pan' },
      { title: 'Why Cakes Crumble When Cut', path: '/cake-science/why-cakes-crumble-when-cut' },
      ...CAKE_REL,
    ],
  },
  {
    slug: 'why-cakes-lose-height-after-frosting',
    segment: 'cake-science',
    categoryLabel: 'Cake Science',
    title: 'Why Cakes Lose Height After Frosting',
    subtitle: 'Compression, temperature shock, and moisture migration from frosting into a delicate crumb.',
    readTime: '8 min read',
    level: 'Assembly mechanics',
    emoji: '📉',
    fixRecipe: { category: 'cake', problem: 'collapse' },
    quickAnswer:
      'Height drops when soft layers compress under heavy or warm frosting, or when syrup soaks and collapses cell walls. Chill layers, use boards for support, and match frosting temperature to crumb strength.',
    intro:
      'Frosting is load. Even soft buttercream exerts normal force when spread. If the crumb is warm, under-set, or very aerated, that load crushes structure. Height loss is as much mechanics as “too much cream.”',
    sections: [
      {
        heading: 'Temperature when frosting meets cake',
        paragraphs: [
          'Warm frosting softens fat-set crumb; cold frosting on warm cake condenses steam at the interface. Pair temperatures: cool cake, workable—not hot—frosting.',
        ],
      },
      {
        heading: 'Sequence: syrup, soak, and wait',
        paragraphs: [
          'Heavy soak schedules weaken vertical walls. If using syrup, brush lightly and allow a skin to form before stacking.',
        ],
      },
      {
        heading: 'Holding under wrap',
        paragraphs: [
          'Tight plastic before chill can imprint and squash domes. Support with a dome or box that clears the crown.',
        ],
      },
      {
        heading: 'Structural boards and dowels',
        paragraphs: [
          'Tall stacks need horizontal load paths. A cake card under each tier and dowels for tall builds prevent sag that reads as “shrink.”',
        ],
      },
    ],
    related: [
      { title: 'Why Cakes Sink', path: '/cake-science/why-cakes-sink' },
      { title: 'Why Cakes Collapse', path: '/cake-science/why-cakes-collapse' },
      ...CAKE_REL,
    ],
  },
  {
    slug: 'why-pie-fillings-taste-bland',
    segment: 'pie-science',
    categoryLabel: 'Pie Science',
    title: 'Why Pie Fillings Taste Bland (Flavor Dilution Problem)',
    subtitle: 'Fruit water, thickener timing, and bake temperature dilute or trap volatile aromatics.',
    readTime: '8 min read',
    level: 'Concentration & timing',
    emoji: '🫙',
    fixRecipe: { category: 'pie', problem: 'general' },
    quickAnswer:
      'Bland filling usually means flavor compounds were diluted by released fruit juice, masked by too much starch, or never concentrated because the filling never reached a controlled simmer before the crust finished.',
    intro:
      'Pie filling is a concentration problem disguised as a recipe problem. Fruit sheds water in the oven; if that water stays in the matrix without reduction or balance, taste perception drops even when sugar is high.',
    sections: [
      {
        heading: 'Pre-bake concentration sequence',
        paragraphs: [
          'Macrating, draining, then reducing part of the juice builds flavor per spoonful. Skipping reduction is the fastest route to “sweet water with fruit.”',
        ],
      },
      {
        heading: 'Temperature and thickener choice',
        paragraphs: [
          'Starches need full gelatinization temperature for clarity and body, but overheated fruit cooks off aromatics. Pulse heat: thicken, then gentle finish.',
        ],
      },
      {
        heading: 'Holding after slice',
        paragraphs: [
          'Refrigerated slices continue osmosis; salt and acid adjustments show up more clearly after a rest—taste cold if you serve cold.',
        ],
      },
      {
        heading: 'Acid, salt, and bitter edge',
        paragraphs: [
          'A small acid hit (lemon, malic) and pinch salt lift fruit identity the way sugar alone cannot.',
        ],
      },
    ],
    related: [
      { title: 'Why Pie Filling Is Runny', path: '/pie-science/why-pie-filling-is-runny' },
      { title: 'Why Pie Filling Bubbles Over', path: '/pie-science/why-pie-filling-bubbles-over' },
      ...PIE_REL,
    ],
  },
  {
    slug: 'why-fruit-pies-turn-grainy',
    segment: 'pie-science',
    categoryLabel: 'Pie Science',
    title: 'Why Fruit Pies Turn Grainy',
    subtitle: 'Pectin breakdown, sugar crystallization, and overcooked thickeners change mouthfeel.',
    readTime: '7 min read',
    level: 'Heat & starch',
    emoji: '🌫️',
    fixRecipe: { category: 'pie', problem: 'general' },
    quickAnswer:
      'Grainy fruit filling often comes from overcooking pectin, undissolved starch, or high sugar driving crystal formation when the filling cools. Control peak temperature and hydrate starch before it hits acid.',
    intro:
      'Smooth fruit gel is a race between softening cell walls, extracting pectin, and setting starch—each with its own temperature window. Overshoot any window and you feel grit.',
    sections: [
      {
        heading: 'Temperature ceilings for fruit',
        paragraphs: [
          'Long boils past set degrade pectin networks and can cause syneresis followed by grainy reheats. Log your bubble size and time at boil.',
        ],
      },
      {
        heading: 'Sequence: starch before acid extremes',
        paragraphs: [
          'Acid tightens starch granules early. Slurry into warm—not shock-cold—liquid while whisking to full viscosity before major acid hits.',
        ],
      },
      {
        heading: 'Cooling curve and sugar',
        paragraphs: [
          'Rapid cooling with very high sucrose can encourage perceptible crystals. Gentle cool and balanced glucose/fructose sources can smooth perception.',
        ],
      },
    ],
    related: [
      { title: 'Why Pie Filling Is Runny', path: '/pie-science/why-pie-filling-is-runny' },
      { title: 'Why Pie Crust Gets Tough', path: '/pie-science/why-pie-crust-gets-tough' },
      ...PIE_REL,
    ],
  },
  {
    slug: 'why-custard-pies-crack',
    segment: 'pie-science',
    categoryLabel: 'Pie Science',
    title: 'Why Custard Pies Crack',
    subtitle: 'Overbake sets egg proteins too tight; cooling shrinkage exceeds what the surface can flex.',
    readTime: '7 min read',
    level: 'Egg set & cooling',
    emoji: '〰️',
    fixRecipe: { category: 'pie', problem: 'general' },
    quickAnswer:
      'Custard cracks when the interior passes the tight curd stage—usually too hot too long—or cools too fast so the surface tension tears. Pull earlier, use residual heat, and cool gradually.',
    intro:
      'Custard is a delicate protein gel. The oven phase should end while the center still jiggles as a unit; carryover finishes set. Cracks are stress fractures from overcooked protein or thermal shock.',
    sections: [
      {
        heading: 'Target temperature, not color alone',
        paragraphs: [
          'Nose past 185°F in the custard zone and you invite syneresis and surface splits. Probe near center; rely on jiggle plus a few degrees under “firm.”',
        ],
      },
      {
        heading: 'Sequence: blind bake and hot filling',
        paragraphs: [
          'Pouring very hot custard into a very hot shell evens set. Cold shell + hot filling can skin early and tear later.',
        ],
      },
      {
        heading: 'Cooling ramp',
        paragraphs: [
          'Oven door ajar, then counter, then chill. Abrupt fridge moves create a skin that cracks as the interior contracts.',
        ],
      },
    ],
    related: [
      { title: 'Why Pie Crust Shrinks', path: '/pie-science/why-pie-crust-shrinks' },
      { title: 'Why Pie Crust Burns Before Filling Cooks', path: '/pie-science/why-pie-crust-burns-before-filling-cooks' },
      ...PIE_REL,
    ],
  },
  {
    slug: 'why-pie-crust-blisters',
    segment: 'pie-science',
    categoryLabel: 'Pie Science',
    title: 'Why Pie Crust Blisters',
    subtitle: 'Steam pockets under thin dough sheets before lamination-like layers set.',
    readTime: '6 min read',
    level: 'Steam & dock',
    emoji: '🫧',
    fixRecipe: { category: 'pie', problem: 'general' },
    quickAnswer:
      'Blisters are localized steam lifts. Under-docked shells, trapped air, or uneven lamination let water vapor push a bubble before the structure bonds to the pan.',
    intro:
      'Think of blind-bake as pressure management. Without vents, steam finds the weakest plane and domes it. Blisters are the pastry version of blowouts.',
    sections: [
      {
        heading: 'Docking and weights as a time sequence',
        paragraphs: [
          'Dock before weights, bake weighted through steam release phase, then finish exposed per recipe. Skipping the weighted phase invites bubbles.',
        ],
      },
      {
        heading: 'Temperature and pan contact',
        paragraphs: [
          'Air gaps between dough and pan become steam pillows. Press dough to metal, especially corners.',
        ],
      },
      {
        heading: 'Lamination vs shortcut mixing',
        paragraphs: [
          'Uneven fat disks create irregular steam channels—sometimes desirable for flake, sometimes blisters in single-crust bakes.',
        ],
      },
    ],
    related: [
      { title: 'Why Pie Crust Is Flaky', path: '/pie-science/why-pie-crust-is-flaky' },
      { title: 'Why Pie Crust Gets Soggy', path: '/pie-science/why-pie-crust-gets-soggy' },
      ...PIE_REL,
    ],
  },
  {
    slug: 'why-double-crust-pies-trap-steam',
    segment: 'pie-science',
    categoryLabel: 'Pie Science',
    title: 'Why Double Crust Pies Trap Steam',
    subtitle: 'A sealed lid raises internal pressure until vents or edge leaks become the only escape.',
    readTime: '8 min read',
    level: 'Steam dynamics',
    emoji: '💨',
    fixRecipe: { category: 'pie', problem: 'general' },
    quickAnswer:
      'Steam from filling and from dough water has nowhere to go under a sealed top. Without vents—and sometimes even with them—pressure lifts the lid or turns filling soupy. Vent geometry and bake temperature rhythm matter.',
    intro:
      'Double crust is a small pressure cooker. The filling phase change releases water; dough dehydrates. If outflow is slower than generation, you get dome lifts, blowouts, or soggy pockets as steam recondenses.',
    sections: [
      {
        heading: 'Venting as engineered mass flow',
        paragraphs: [
          'Several small cuts beat one big X for even pressure relief. Center vents help mid-thickness steam escape, not just edge.',
        ],
      },
      {
        heading: 'Temperature: start hot vs steady moderate',
        paragraphs: [
          'High start sets edge structure to resist lift; too aggressive without vents tears. Match your recipe’s staged temps to fruit water load.',
        ],
      },
      {
        heading: 'Holding after bake',
        paragraphs: [
          'Cooling traps remaining steam as liquid inside fruit cells—normal—but cutting too soon releases under-set juice. Rest until internal vapor pressure equalizes.',
        ],
      },
    ],
    related: [
      { title: 'Why Pie Filling Bubbles Over', path: '/pie-science/why-pie-filling-bubbles-over' },
      { title: 'Why Pie Crust Cracks When Rolling', path: '/pie-science/why-pie-crust-cracks-when-rolling' },
      ...PIE_REL,
    ],
  },
];
