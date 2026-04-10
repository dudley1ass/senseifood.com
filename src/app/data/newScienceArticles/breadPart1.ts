import type { ScienceArticleSpec } from '../scienceArticleTypes';

const B_REL = [
  { title: 'Why Bread Rises', path: '/bread-science/why-bread-rises' },
  { title: 'How Yeast Works in Baking', path: '/bread-science/how-yeast-works' },
];

export const breadNewScienceArticlesPart1: ScienceArticleSpec[] = [
  {
    slug: 'why-bread-doesnt-rise',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: "Why Bread Doesn't Rise",
    subtitle: 'Dead yeast, cold dough, salt clashes, weak gluten, and timing mistakes—ranked by how often they show up in home kitchens.',
    readTime: '8 min read',
    emoji: '📉',
    fixRecipe: { category: 'bread', problem: 'wont-rise' },
    quickAnswer:
      "Bread fails to rise when yeast never gets going, gas leaks out of a weak gluten cage, or the dough is too cold to ferment in a reasonable window. Check yeast vitality, dough temperature (roughly 75–80°F for most lean doughs), and whether you're measuring flour by weight.",
    intro:
      "A loaf that stubbornly stays flat is one of the most demoralizing bakes because rise is the first promise bread makes. In practice, \"no rise\" is rarely one mysterious villain; it is usually a chain of small errors that add up to little gas production, poor gas retention, or both. This guide separates the biology (yeast and bacteria), the physics (temperature and pressure), and the structure (gluten development) so you can fix the actual bottleneck instead of guessing.",
    sections: [
      {
        heading: 'Yeast health and food supply',
        paragraphs: [
          "Yeast needs live cells, available sugars, and time. Instant yeast can be mixed straight into flour, but if your yeast is old or stored hot, viable cell count drops and fermentation crawls. A simple vitality check is dissolving a pinch of yeast in lukewarm water with a little sugar: within ten minutes you should see foam. If the surface stays flat, replace the yeast before chasing other variables.",
          "Sugar isn't always the limiting nutrient; flour supplies starch that enzymes break into fermentable sugars during autolyse and bulk fermentation. A dough that is extremely low in available sugar—some ultra-short formulas—can feel sluggish early, but most home failures are not \"starvation\" as much as temperature shock or salt/yeast contact issues.",
        ],
        bullets: [
          { title: 'Water too hot', text: 'Roughly above 120°F can shock or kill yeast; aim for pleasantly warm, not hot-tap scald.' },
          { title: 'Salt directly on yeast', text: 'Mix salt into flour first, or add salt after a short mix so it is not concentrated on the yeast pellet.' },
        ],
        tip: 'Buy fresh yeast in small packs, store sealed in the fridge or freezer, and date the bag when you open it.',
      },
      {
        heading: 'Temperature and timing',
        paragraphs: [
          "Fermentation speed doubles and halves with modest temperature changes. A dough parked at 62°F can look \"dead\" compared to the same dough at 78°F even though nothing is wrong—only slow. Conversely, parking dough on a radiator or in a hot car can push fermentation so fast that alcohol and acidity spike, gluten weakens, and the loaf later collapses.",
          "Give lean doughs at least one honest bulk fermentation window where you see real volume change—often 1.5× to 2× depending on formula—before assuming failure. Enriched doughs with butter, eggs, or milk move on a different clock because fat coats flour and slows gluten alignment.",
        ],
      },
      {
        heading: 'Gluten strength and gas retention',
        paragraphs: [
          "Gas is useless if the dough cannot hold it. Under-mixed dough can ferment \"okay\" yet never trap bubbles in a network, yielding a tight, heavy crumb. Mix to a smooth windowpane-friendly state for the style you want: sandwich bread tolerates more development than an open ciabatta, but both need enough structure to cage CO₂.",
          "Flour choice matters: all-purpose can work for many loaves, but very low-protein flour makes a slack dough that relaxes and spreads instead of springing. If your dough spreads like pancake batter during proof, strengthen with a fold series or adjust hydration downward slightly on the next bake.",
        ],
      },
      {
        heading: 'How Fix My Recipe helps',
        paragraphs: [
          "When you are juggling hydration, yeast, salt, and enrichments, ratios reveal whether you are accidentally running a cold, salty, or under-yeasted dough relative to common successful bands. SenseiFood's bread mode is designed to highlight those mismatches with transparent rules—not a black-box answer.",
          "After you adjust one variable, rebake and compare crumb shots side by side. Bread improves fastest when you treat each bake as an experiment with a written hypothesis: what single change are you testing, and what outcome would falsify your theory?",
        ],
      },
    ],
    faqs: [
      {
        q: 'Can too much salt stop rise?',
        a: 'Yes—salt tightens gluten and slows yeast. A badly mis-measured tablespoon instead of a teaspoon can make bulk fermentation crawl. Always weigh salt.',
      },
      {
        q: 'Does sugar always speed rise?',
        a: 'A little sugar can help osmotically stressed yeast get rolling, but very sweet doughs can invert the effect and slow fermentation; enriched formulas often need more yeast or longer time.',
      },
    ],
    related: B_REL,
  },
  {
    slug: 'why-bread-is-dense',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Bread Is Dense',
    subtitle: 'Dense crumb usually means under-development, under-proofing, too much flour, or a collapsed structure—not “bad luck.”',
    readTime: '8 min read',
    emoji: '🧱',
    fixRecipe: { category: 'bread', problem: 'dense' },
    quickAnswer:
      'Dense bread most often comes from insufficient gas retention (weak gluten or tight shaping), under-proofing, or excess flour tightening the matrix. Verify fermentation cues—poke test, jiggle, volume—not just clock time.',
    intro:
      'Density is how bakers describe a crumb with few evenly distributed alveoli and a heavy chew. It can be pleasant in some rye or whole-grain styles, but when your goal was an open sandwich loaf, density signals that structure set before the crumb could expand. Understanding whether the problem happened during mixing, fermentation, or baking tells you which lever to pull next.',
    sections: [
      {
        heading: 'Under-proofing vs true “tight mixing”',
        paragraphs: [
          'An under-proofed loaf bakes with a tight, shiny crumb and a seam of denser dough near the center. The oven spring is weak because there was not enough total gas inflation before the crust set. The fix is longer bulk or final proof next time, sometimes with a slightly warmer environment.',
          'True tight mixing is rarer in hand mixing but common when a stand mixer runs too long on high speed for a lean dough, shredding extensibility. The loaf rises oddly and the crumb looks fine-grained everywhere, not just at the center.',
        ],
      },
      {
        heading: 'Hydration and flour measurement',
        paragraphs: [
          'Hydration changes how far gluten can stretch. A drier dough than the formula intended feels stiff, tears when stretched, and traps fewer bubbles. Measuring flour by scoop almost always adds extra mass and lowers effective hydration.',
          'If you must use cups, fluff the flour, spoon into the cup without packing, and level. Prefer grams: write your successful hydration percentage on the recipe card once you find the sweet spot for your flour brand.',
        ],
        tip: 'For one diagnostic bake, drop hydration by 2–3% if the dough is impossible to shape; raise it if the dough spreads and refuses to hold tension.',
      },
      {
        heading: 'Collapsed alveoli from over-proofing',
        paragraphs: [
          'Over-proofed dough can fool you: it looks huge, then collapses in the oven and bakes into a dense, gummy layer under a thick crust. The gluten network exhausted its elasticity and cannot hold gas during oven spring.',
          'If your loaf spreads sideways, smells very alcoholic, and the poke test leaves a deep dent that does not spring back, shorten proof next time or cold-retard to slow fermentation.',
        ],
      },
      {
        heading: 'Systematic debugging',
        paragraphs: [
          'Use Fix My Recipe in bread mode with your gram weights to see whether your loaf sits in a plausible flour–water–yeast–salt band for the style you want. Pair that with photos: uniform tight crumb points to mixing or flour; central dense line points to shaping or under-proof; bottom gumminess can be bake temperature or cutting hot.',
          'Change one variable per bake—hydration, proof time, or oven steam—and label your dough tubs. Bread rewards boring note-taking more than heroic intuition.',
        ],
      },
    ],
    faqs: [
      { q: 'Is dense bread always “bad”?', a: 'No—100% rye and some whole-wheat formulas are naturally closer textured. Compare to your intent, not Instagram sourdough.' },
      { q: 'Does oil make bread denser?', a: 'Fat lubricates gluten, which can reduce maximum volume in lean breads but improves softness and shelf life in enriched breads.' },
    ],
    related: B_REL,
  },
  {
    slug: 'why-bread-is-gummy-inside',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Bread Is Gummy Inside',
    subtitle: 'Gelatinized starch needs heat and time to set; under-baking and cutting too soon are classic culprits.',
    readTime: '7 min read',
    emoji: '🫠',
    fixRecipe: { category: 'bread', problem: 'general' },
    quickAnswer:
      'Gummy interior usually means the loaf did not reach a high enough internal temperature for long enough, or you sliced while steam was still redistributing moisture inside the crumb. Aim for roughly 190–210°F internal depending on style, and cool completely before cutting.',
    intro:
      'Gumminess is a texture word for moist starch that feels tacky and clings to the knife. It is not the same as tenderness: tender crumb releases cleanly; gummy crumb smears. Bakers often blame hydration, but the timeline of heat penetrating the loaf matters just as much as the formula on paper.',
    sections: [
      {
        heading: 'Under-baking and carry-over cooking',
        paragraphs: [
          'Bread sets from the outside in. A dark crust can form while the center is still below the temperature where starch fully gelatinizes and proteins set into a stable matrix. That semi-set center feels wet and dense even after cooling.',
          'Use a thermometer in the thickest part. Lean wheat doughs often finish near 200–208°F; enriched breads may read a little lower but still need to cross the threshold where the crumb no longer looks glassy.',
        ],
      },
      {
        heading: 'Cooling and starch retrogradation',
        paragraphs: [
          'Right out of the oven, starch holds trapped steam. Cutting immediately drives steam out of the crumb unevenly and leaves a tacky layer on the blade. Cooling on a rack for at least an hour (large loaves longer) lets moisture equilibrate.',
          'If you need warm bread for guests, compromise with a smaller roll format where heat penetrates evenly, rather than hacking a hot boule.',
        ],
        tip: 'If crust is dark but interior is gummy, lower the temperature 25°F and extend bake time next time—depth of heat matters more than surface color alone.',
      },
      {
        heading: 'Formula factors',
        paragraphs: [
          'Extremely wet doughs are more forgiving for open crumb but easier to under-bake because the crumb looks open while still moist. Sugar and dairy increase browning, which again can mislead your eye.',
          'Sourdough with very high acidity can interact with starch texture; if flavor is sharp and crumb is wet, verify fermentation balance and bake-through, not just “more flour.”',
        ],
      },
      {
        heading: 'Next steps with tools',
        paragraphs: [
          'Log your bake end temperature and cooling time alongside photos. Fix My Recipe helps you compare hydration and enrichment levels to typical profiles so you know whether to adjust the oven story or the dough story first.',
        ],
      },
    ],
    related: B_REL,
  },
  {
    slug: 'why-bread-collapses-after-baking',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Bread Collapses After Baking',
    subtitle: 'Structure buckles when gluten is over-extended, proofing overshoots, or the crust cannot hold internal pressure.',
    readTime: '8 min read',
    emoji: '🥞',
    fixRecipe: { category: 'bread', problem: 'wont-rise' },
    quickAnswer:
      'Post-bake collapse often traces to over-proofed dough, weak gluten for the hydration used, or steam/oven spring that inflated the loaf faster than the crust could polymerize. Score deeply enough to control expansion and match proof time to dough strength.',
    intro:
      'A loaf that looks heroic in the oven but sinks into a wrinkled top is a classic mismatch between gas production and structural integrity. Sometimes the collapse is visible out of the oven; sometimes it is subtle—a flattened dome and compressed crumb. Either way, the fix is to align fermentation, shaping tension, and scoring with the dough you actually have, not the dough you imagined.',
    sections: [
      {
        heading: 'Over-proofing and gluten fatigue',
        paragraphs: [
          'As fermentation continues, gluten stretches and eventually weakens. Gas bubbles merge into fewer, larger pockets that rupture easily during oven spring. The loaf may mushroom sideways or deflate when cooling.',
          'Temperature swings amplify this: a long warm autolyse plus a hot kitchen can push a dough past its peak while you are not watching.',
        ],
      },
      {
        heading: 'Insufficient surface tension',
        paragraphs: [
          'Shaping creates a taut skin that helps the loaf expand upward. Slack shaping yields sideways spread and uneven oven spring, which later settles into a collapsed silhouette.',
          'Practice bench tension pulls without tearing the skin; if the dough tears, rest it five minutes and retry.',
        ],
      },
      {
        heading: 'Scoring and steam',
        paragraphs: [
          'Steam delays crust hardening so the loaf can expand. Without steam, crust sets early and expansion tears happen in unpredictable places. With steam but no score, pressure bursts the weakest seam.',
          'Scores are functional valves, not decoration. They should be deep enough for your dough strength—weak dough, shallower; strong dough, confident depth.',
        ],
      },
      {
        heading: 'Debugging workflow',
        paragraphs: [
          'If collapse correlates with very long proof, shorten bulk or final proof 15–25% next bake. If it correlates with slack dough, lower hydration slightly or add folds. Fix My Recipe can sanity-check whether your formula is unusually wet or low in structural flour for the style.',
        ],
      },
    ],
    faqs: [
      { q: 'Why did my sandwich loaf crater?', a: 'Often over-proof in the pan, or dough too soft for the pan height—center cannot support the dome.' },
    ],
    related: B_REL,
  },
  {
    slug: 'why-bread-is-dry',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Bread Is Dry',
    subtitle: 'Bake time, flour absorption, storage, and enrichment levels all steal moisture from crumb.',
    readTime: '7 min read',
    emoji: '🏜️',
    fixRecipe: { category: 'bread', problem: 'general' },
    quickAnswer:
      'Dry bread usually means over-baked crumb, flour that absorbed more water than the recipe assumed, or storage that let moisture equilibrate into the air. Pull earlier if crust is thick and crumb chalky; store cut sides covered.',
    intro:
      'Dryness is both a sensory label and a physical reality: less free water in the crumb, firmer starch retrogradation, and faster staling. Home bakers often curse “the recipe” when the oven environment and storage habits moved more water than a tablespoon tweak ever could.',
    sections: [
      {
        heading: 'Over-baking beyond the crumb set point',
        paragraphs: [
          'Once internal temperature passes the set range, moisture loss accelerates. A loaf left “to be safe” can read tough and cottony even with a correct formula.',
          'Match loaf size to time: small rolls finish quickly; large miche needs gentle heat longer.',
        ],
      },
      {
        heading: 'Hydration and brand variance',
        paragraphs: [
          'Flour is a crop; protein and ash change seasonally. A hydration that felt perfect in January can feel dry in July with a new bag. Autolyse reveals how thirsty your flour really is.',
        ],
        tip: 'Add water in two stages: hold back 3–5% until you feel the dough after rest.',
      },
      {
        heading: 'Staling and storage',
        paragraphs: [
          'Staling is starch reorganizing, not only water leaving. Refrigeration speeds perceived staling for many breads. Freeze sliced portions you will not eat in a day or two; keep crusty bread in a paper bag and accept that the crust will soften when wrapped.',
        ],
      },
      {
        heading: 'Using the debugger',
        paragraphs: [
          'Compare your dough’s hydration percentage to reference bands in bread mode. If you are low for an artisan open crumb but the bread feels dry, the bake or storage story is the prime suspect, not the recipe’s headline hydration.',
        ],
      },
    ],
    related: B_REL,
  },
  {
    slug: 'why-bread-is-too-chewy',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Bread Is Too Chewy',
    subtitle: 'Chew comes from gluten network density, low moisture, and long mixing—dial each back for a softer bite.',
    readTime: '7 min read',
    emoji: '😬',
    fixRecipe: { category: 'bread', problem: 'dense' },
    quickAnswer:
      'Excess chew usually means strong gluten (high protein flour, long mix), under-hydration, or under-baking leaving a tough core. Try shorter mix, slightly higher hydration, or a small fat or milk addition for tenderness.',
    intro:
      'Chew is not a moral failing; it is rheology. A resilient crumb springs back because gluten and starch form a continuous network. Some breads—bagels, high-gluten sandwich loaves—celebrate that. When your dinner rolls feel like exercise equipment, you want to soften the network or add plasticizers like fat.',
    sections: [
      {
        heading: 'Protein and mixing',
        paragraphs: [
          'Bread flour in a soft-roll formula is a common chew upgrade you did not ask for. Protein links into tighter chains that survive chewing longer.',
          'Long machine mixing aligns gluten aggressively; hand mixing or short mix plus folds can yield a more relaxed crumb.',
        ],
      },
      {
        heading: 'Moisture and fat',
        paragraphs: [
          'Water plasticizes gluten; dry doughs feel tougher. Fat shortens gluten strands by coating flour particles, yielding tenderness—why brioche chews differently than baguette dough.',
        ],
      },
      {
        heading: 'Bake and thickness',
        paragraphs: [
          'Thin crusts with thick, under-set interiors can read oddly chewy at the center. Verify internal temperature and even browning.',
        ],
      },
      {
        heading: 'Tune with Fix My Recipe',
        paragraphs: [
          'Enter your formula to see whether fat and water sit low relative to flour compared with similar breads. One structured change—switching part of the liquid to milk, or swapping a fraction of bread flour to all-purpose—often moves chew more than mystery additives.',
        ],
      },
    ],
    related: B_REL,
  },
  {
    slug: 'why-bread-crust-is-too-hard',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Bread Crust Is Too Hard',
    subtitle: 'Steam, sugar, oven heat, and bake time build crust thickness and hardness.',
    readTime: '7 min read',
    emoji: '🪨',
    fixRecipe: { category: 'bread', problem: 'general' },
    quickAnswer:
      'Hard crusts come from long, dry, hot baking; high sugar or dairy browning; or lack of moisture in the oven early in the bake. Steam the first third, then vent; tent foil if the crust races ahead of the crumb.',
    intro:
      'Crust hardness is the combination of dehydrated surface layers and Maillard polymers that stiffen as moisture leaves. Artisan bakers chase shatter; sandwich lovers want peelable softness. The same dough can lean either way depending on how you manage the oven’s first ten minutes.',
    sections: [
      {
        heading: 'Oven environment',
        paragraphs: [
          'Steam keeps the surface flexible so the loaf can expand and delays excessive early browning. When steam is removed or exhausted, the crust dries and hardens.',
          'A Dutch oven traps enough steam for many home bakers; open bakes need a lidded tray of water or careful spritzing.',
        ],
      },
      {
        heading: 'Sugar, milk, and fat',
        paragraphs: [
          'Sugars caramelize; proteins brown. Enriched doughs color faster, which tempts shorter bakes—watch the interior, not only the glow.',
        ],
        tip: 'If crust is armor-plated but crumb is pale, lower temperature 15–25°F and bake longer.',
      },
      {
        heading: 'Storage effects',
        paragraphs: [
          'Crust softens in plastic as moisture migrates from crumb to surface; it hardens again if over-dried. Choose storage to match how you like to eat the heel.',
        ],
      },
      {
        heading: 'Debug ratios',
        paragraphs: [
          'Fix My Recipe highlights enrichment levels; very sweet doughs need gentler heat strategies. Pair ratio insight with a simple oven log: time under steam, final temp, and internal temperature.',
        ],
      },
    ],
    related: B_REL,
  },
  {
    slug: 'why-bread-crust-is-too-soft',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Bread Crust Is Too Soft',
    subtitle: 'Soft crust means the surface never dried and browned enough—or steam never left the microclimate.',
    readTime: '7 min read',
    emoji: '🧽',
    fixRecipe: { category: 'bread', problem: 'general' },
    quickAnswer:
      'Soft crusts usually mean insufficient final bake drying, baking entirely enclosed without venting, or high humidity storage right after bake. Finish the loaf uncovered until the crust audibly crackles when cooling.',
    intro:
      'A crust that feels leathery or spongy lost the race between interior set and surface dehydration. Steam is essential early, but the second half of the bake is about letting the crust actually become crust.',
    sections: [
      {
        heading: 'Steam too long',
        paragraphs: [
          'If the loaf stays in a sealed humid environment for the entire bake, browning and crisping stall. Vent Dutch ovens; remove lids partway through according to your formula’s style.',
        ],
      },
      {
        heading: 'Oven temperature',
        paragraphs: [
          'Very low temperatures dry the surface slowly and can yield pale, soft skins, especially on egg-washed rolls.',
        ],
      },
      {
        heading: 'Oil washes and butter brushing',
        paragraphs: [
          'Fat on the surface softens perceived crunch. For a crackly baguette, skip post-bake butter; for dinner rolls, softness may be the goal.',
        ],
      },
      {
        heading: 'Systems approach',
        paragraphs: [
          'Note lid-off time and final 5 minutes of convection if available. Cross-check hydration: extremely wet doughs need longer post-steam drying.',
        ],
      },
    ],
    related: B_REL,
  },
  {
    slug: 'why-bread-burns-on-the-bottom',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Bread Burns on the Bottom',
    subtitle: 'Conductive heat from stone, thin pans, and oven floor hot spots chars the base first.',
    readTime: '7 min read',
    emoji: '🔥',
    fixRecipe: { category: 'bread', problem: 'general' },
    quickAnswer:
      'Bottom burn is conductive heat, not mystery. Double-pan, use parchment, raise the rack, lower stone temperature, or place a baking sheet under the loaf to deflect radiant heat from the oven floor.',
    intro:
      'The bottom of a loaf touches the hottest conductive path in most home ovens. While the top browns by radiation and convection, the base can scorch because it sits against metal or ceramic that stores energy. Fixing bottom burn is kitchen physics, not a new ingredient.',
    sections: [
      {
        heading: 'Thermal mass and contact',
        paragraphs: [
          'Baking steel and stones excel at crisp bases but punish delicate sandwich loaves. A second sheet pan as a heat shield adds air gap insulation.',
          'Dark, thin pans run hotter than light, thick ones.',
        ],
      },
      {
        heading: 'Sugar and dairy',
        paragraphs: [
          'Enriched doughs caramelize faster on contact surfaces. Lower the bake temperature slightly and extend time if bottoms race.',
        ],
        tip: 'Slide a thin pizza stone on a rack above the floor to lift the loaf away from the worst radiant zone.',
      },
      {
        heading: 'Preheating myths',
        paragraphs: [
          'Long violent preheats overheat stones. Match preheat duration to what the recipe truly needs.',
        ],
      },
      {
        heading: 'Record and adjust',
        paragraphs: [
          'Log rack position and pan type when bottoms burn. Fix My Recipe still helps you see if the formula is unusually high in sugar, which lowers the thermal margin before char.',
        ],
      },
    ],
    related: B_REL,
  },
  {
    slug: 'why-bread-is-pale',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Bread Is Pale',
    subtitle: 'Maillard needs surface dryness, heat, and reducing sugars; steam and low sugar slow color.',
    readTime: '7 min read',
    emoji: '⬜',
    fixRecipe: { category: 'bread', problem: 'general' },
    quickAnswer:
      'Pale crusts usually mean the surface stayed wet too long, the oven ran cool, or the dough lacked reducing sugars for browning. Reduce steam duration, verify temperature with a thermometer, or brush with wash.',
    intro:
      'Color is flavor when it comes to crust. Pale bread often tastes “raw” even when fully baked because our palates associate depth of roast with aroma compounds from Maillard and caramelization.',
    sections: [
      {
        heading: 'Steam balance',
        paragraphs: [
          'Steam that never clears keeps the crust leathery and blond. Transition to a dry oven phase for color development.',
        ],
      },
      {
        heading: 'Temperature accuracy',
        paragraphs: [
          'Home ovens drift. A 25°F low error can add many minutes to browning while the crumb continues to dry.',
        ],
      },
      {
        heading: 'Washes and toppings',
        paragraphs: [
          'Egg, milk, or malt syrups increase browning. For lean doughs, a light mist of water before loading still allows color if the dry phase follows.',
        ],
      },
      {
        heading: 'Formula angle',
        paragraphs: [
          'Low-sugar, low-fat lean breads are supposed to be lighter in color than brioche. Compare to style intent. Fix My Recipe can show if your enrichment is unexpectedly low relative to similar formulas.',
        ],
      },
    ],
    related: B_REL,
  },
];
