import type { ScienceArticleSpec } from '../scienceArticleTypes';

const B_REL = [
  { title: 'Why Bread Rises', path: '/bread-science/why-bread-rises' },
  { title: 'How Yeast Works in Baking', path: '/bread-science/how-yeast-works' },
];

export const breadNewScienceArticlesPart2: ScienceArticleSpec[] = [
  {
    slug: 'why-dough-is-too-sticky',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Dough Is Too Sticky',
    subtitle: 'Stickiness is usually hydration, weak gluten early in mixing, or flour absorption—not necessarily “too much water.”',
    readTime: '7 min read',
    emoji: '🖐️',
    fixRecipe: { category: 'bread', problem: 'general' },
    quickAnswer:
      'Sticky dough often means you are mid-mix before gluten aligns, your hydration is high for your flour, or your hands/tools are dry and grabbing the surface. Wait for rest, use wet hands, and adjust flour brand or hydration on the next bake.',
    intro:
      'Sticky is the wrong word for what beginners feel; “highly hydrated and under-developed” is closer. Professional bakers expect tackiness in many doughs and use technique—folds, scrapers, wet hands—to manage it. This article separates normal tack from true errors so you do not panic-flour your way into a brick.',
    sections: [
      {
        heading: 'Development timeline',
        paragraphs: [
          'In the first minutes after combining flour and water, the mass shreds and sticks. After rest and mechanical work, proteins align and the dough becomes smoother and less clingy. If you add flour during the ugly phase, you permanently change the formula.',
          'Try a 20–30 minute autolyse (flour and water only) before adding salt and yeast on the next attempt; many sticky complaints vanish.',
        ],
      },
      {
        heading: 'Hydration vs flour absorption',
        paragraphs: [
          'An 80% hydration recipe written for a specific mill may feel impossible with another brand. Protein, damaged starch, and milling style change how water binds.',
        ],
        tip: 'Reserve 5% water; add only if the dough genuinely refuses to hydrate after folds.',
      },
      {
        heading: 'Technique: friction and temperature',
        paragraphs: [
          'Cold, dry hands grab dough. Wet hands and a bench scraper reduce tearing. Warm dough is softer; cold dough is firmer—temperature is a texture knob.',
        ],
      },
      {
        heading: 'When to change the recipe',
        paragraphs: [
          'If stickiness persists after full development and the loaf spreads in proof, lower hydration 3–4% or increase strength with a short knead or extra fold series. Fix My Recipe helps compare your ratio to typical bands for sandwich vs artisan styles.',
        ],
      },
    ],
    related: B_REL,
  },
  {
    slug: 'why-dough-wont-hold-shape',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: "Why Dough Won't Hold Shape",
    subtitle: 'Slack dough is about strength, proof state, and hydration relative to protein—not “bad yeast.”',
    readTime: '8 min read',
    emoji: '🫓',
    fixRecipe: { category: 'bread', problem: 'dense' },
    quickAnswer:
      'Dough spreads when gluten is too weak for the hydration used, when it is over-proofed and relaxed, or when shaping skipped surface tension. Strengthen with folds, moderate hydration, or shorter proof.',
    intro:
      'Shape memory in bread is elastic energy stored in gluten. If that network is slack, the dough obeys gravity and becomes a puddle. Fixing shape is about aligning time, temperature, and strength so the loaf you place in the oven is the loaf you meant to bake.',
    sections: [
      {
        heading: 'Hydration beyond flour strength',
        paragraphs: [
          'Social media hydration numbers are not universal. Your flour may not support 78% for a tall batard without careful technique.',
        ],
      },
      {
        heading: 'Proofing past the peak',
        paragraphs: [
          'An over-proofed dough relaxes; shaping tension dissipates within minutes. The poke test and volume cues matter more than the clock.',
        ],
      },
      {
        heading: 'Shaping skills',
        paragraphs: [
          'Tension pulls align outer gluten strands like a rubber band. Under-shaped loaves flatten. Practice with lower hydration dough first.',
        ],
        tip: 'Cold final proof (retard) firms butter-rich doughs for easier scoring.',
      },
      {
        heading: 'Structured experiments',
        paragraphs: [
          'Change hydration or proof time—not both at once. Use Fix My Recipe to see whether your formula already sits at the extreme edge of typical strength bands.',
        ],
      },
    ],
    related: B_REL,
  },
  {
    slug: 'why-dough-springs-back-when-shaping',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Dough Springs Back When Shaping',
    subtitle: 'Elastic snap means gluten is tight—often under-relaxed or too strong for immediate shaping.',
    readTime: '7 min read',
    emoji: '↩️',
    fixRecipe: { category: 'bread', problem: 'general' },
    quickAnswer:
      'Spring-back during shaping is elastic gluten snapping shut. Rest the dough 10–20 minutes (bench rest) so gluten relaxes, or finish bulk fermentation if the dough is under-proofed and fighting you.',
    intro:
      'There are two different “no” feelings in shaping: the dough that melts (slack) and the dough that fights (elastic). Spring-back is the second. It is not defiance; it is physics—stored elastic energy in protein networks that have not relaxed yet.',
    sections: [
      {
        heading: 'Bench rest',
        paragraphs: [
          'After pre-shaping, gluten needs time to redistribute stress. Shaping immediately after dividing often yields rubber-ball behavior.',
        ],
      },
      {
        heading: 'Under-fermented dough',
        paragraphs: [
          'Immature dough is springy because fermentation has not yet softened the protein matrix. Let bulk go longer if volume is low and dough feels cold-tight.',
        ],
      },
      {
        heading: 'Cold dough',
        paragraphs: [
          'Chilled dough feels stiffer. Allow a short warm-up if ethical for your formula before final shaping.',
        ],
      },
      {
        heading: 'Debug companion',
        paragraphs: [
          'If spring-back pairs with dense crumb, you may be under-proofing globally. If spring-back pairs with collapse, you might be mixing timing signals—log temps and times and cross-check ratios in bread mode.',
        ],
      },
    ],
    related: B_REL,
  },
  {
    slug: 'why-dough-rises-too-fast',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Dough Rises Too Fast',
    subtitle: 'Heat, high yeast, sugar, and small dough mass accelerate fermentation—sometimes past flavor and structure.',
    readTime: '7 min read',
    emoji: '🚀',
    fixRecipe: { category: 'bread', problem: 'wont-rise' },
    quickAnswer:
      'Fast rise usually means warm ambient temperature, high yeast percentage, or both. Cool the dough, reduce yeast slightly, or use cold water to stretch fermentation for better flavor and safer proof windows.',
    intro:
      'Rising fast sounds ideal until you miss the peak and over-proof. It also truncates flavor development because bacterial byproducts and slower yeast pathways do not have time to contribute complexity. Speed is not the goal; controlled timing is.',
    sections: [
      {
        heading: 'Temperature dominates',
        paragraphs: [
          'Moving dough from a 62°F kitchen to an 82°F proofing box changes timelines dramatically. Track ambient and dough temperature, not just “two hours.”',
        ],
      },
      {
        heading: 'Yeast quantity',
        paragraphs: [
          'Doubling yeast to “save time” often costs you window width. Precision weighing matters for small masses of yeast.',
        ],
        tip: 'Try cold autolyse and refrigerated bulk for schedule control.',
      },
      {
        heading: 'Sugar and osmotic pressure',
        paragraphs: [
          'Sweet doughs can paradoxically behave oddly; very high sugar ties water and stresses yeast. Fast rise in mild sweet doughs more often traces to warmth.',
        ],
      },
      {
        heading: 'Tooling',
        paragraphs: [
          'If your formula is yeast-heavy relative to flour, Fix My Recipe will contrast it with lean bread norms. Pair that insight with a kitchen thermometer.',
        ],
      },
    ],
    related: B_REL,
  },
  {
    slug: 'why-dough-rises-too-slow',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Dough Rises Too Slow',
    subtitle: 'Cold, tired yeast, salt errors, and extreme sweet or rich doughs stretch timelines.',
    readTime: '7 min read',
    emoji: '🐢',
    fixRecipe: { category: 'bread', problem: 'wont-rise' },
    quickAnswer:
      'Slow rise is often cold dough, weak yeast, or too much salt. Warm the environment gently, verify yeast, and weigh salt. Enriched doughs legitimately take longer—plan for it.',
    intro:
      'Impatience makes every minute feel like failure, but slow is not automatically wrong. The skill is distinguishing healthy slow from broken slow: the first yields flavor; the second yields lunch plans ruined.',
    sections: [
      {
        heading: 'Temperature floor',
        paragraphs: [
          'Below roughly 50°F, yeast activity is minimal for many strains; dough sits. Use a proofer, oven with light on, or longer timeline.',
        ],
      },
      {
        heading: 'Yeast and salt',
        paragraphs: [
          'Old yeast and salt slips are the classic duo. Always verify with a foam test when in doubt.',
        ],
      },
      {
        heading: 'Heavy enrichments',
        paragraphs: [
          'Eggs, butter, and sugar change osmolarity and structure; fermentation crawls. This is expected, not a sign to dump in more yeast mid-bulk without thinking.',
        ],
        tip: 'Preferment or autolyse can jump-start sluggish doughs.',
      },
      {
        heading: 'Sanity check ratios',
        paragraphs: [
          'Bread mode in Fix My Recipe highlights unusually high salt or low yeast for your style. Use it before you randomly double yeast and overshoot the next bake.',
        ],
      },
    ],
    related: B_REL,
  },
  {
    slug: 'why-bread-needs-steam',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Bread Needs Steam',
    subtitle: 'Steam delays crust set, improves oven spring, and influences gloss and ear formation.',
    readTime: '8 min read',
    emoji: '💨',
    fixRecipe: { category: 'bread', problem: 'general' },
    quickAnswer:
      'Steam keeps the dough surface flexible early in the bake so expansion is not trapped by a premature crust. It also gelatinizes starches on the surface for shine. Remove steam later to build crispness and color.',
    intro:
      'Steam is the bridge between raw dough and finished loaf. Without it, crust polymerizes quickly, slashes do not open cleanly, and expansion tears in random weak spots. With too much steam forever, bread never browns. Professional ovens separate these phases; home bakers mimic them with Dutch ovens, trays, or spritz bottles.',
    sections: [
      {
        heading: 'Surface plasticity',
        paragraphs: [
          'Water condenses on cold dough entering a hot oven, keeping the outer layer cooler briefly. That keeps extensibility while internal gas pressure climbs.',
        ],
      },
      {
        heading: 'Starch gelatinization and gloss',
        paragraphs: [
          'Moist heat helps starches swell on the surface, contributing to sheen on some breads.',
        ],
      },
      {
        heading: 'When steam ends',
        paragraphs: [
          'The second phase needs dry heat to caramelize and crisp. Vent lids; open dampers; pull trays.',
        ],
        tip: 'Preheating a Dutch oven longer than needed can overheat the metal; balance preheat with safe handling.',
      },
      {
        heading: 'Connect to debugging',
        paragraphs: [
          'If your loaves blow out at the base, steam plus weak scoring may be interacting. Fix My Recipe still helps you verify whether the dough itself was unusually tight or wet.',
        ],
      },
    ],
    related: B_REL,
  },
  {
    slug: 'why-oven-spring-happens',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Oven Spring Happens',
    subtitle: 'Gas expands, yeast races until heat kills it, and steam pressure inflates cells before the crumb sets.',
    readTime: '8 min read',
    emoji: '🎈',
    fixRecipe: { category: 'bread', problem: 'wont-rise' },
    quickAnswer:
      'Oven spring is rapid expansion from hot gas and steam inside a still-soft dough, amplified by last gasp yeast activity, until proteins set. Strong gluten, proper proof, steam, and heat transfer make it visible.',
    intro:
      'Oven spring is the theatrical moment bread bakers chase: the loaf surges, scores peel back, and the silhouette transforms. Under the drama is straightforward thermodynamics plus biology stopping at a precise death temperature for yeast.',
    sections: [
      {
        heading: 'Gas laws in the crumb',
        paragraphs: [
          'Charles’s law is the intuitive part: gases expand when heated. The less intuitive part is how many separate bubbles do this at once inside a viscoelastic foam.',
        ],
      },
      {
        heading: 'Yeast sprint',
        paragraphs: [
          'Warmth accelerates fermentation until thermal death around 140°F for yeast. That final burst overlaps with expansion.',
        ],
      },
      {
        heading: 'Structure setting',
        paragraphs: [
          'Spring ends when gluten coagulates and starch gelatinizes enough to lock shape. Under-proofed dough can spring then tear; over-proofed dough has little left to give.',
        ],
      },
      {
        heading: 'Practice loop',
        paragraphs: [
          'Photograph each loaf at 2, 5, and 10 minutes in the oven. Pair visuals with Fix My Recipe ratio notes to learn whether problems are fermentation-first or heat-first.',
        ],
      },
    ],
    related: B_REL,
  },
  {
    slug: 'why-bread-needs-scoring',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Bread Needs Scoring',
    subtitle: 'Scores channel expansion so the crust tears predictably instead of randomly.',
    readTime: '7 min read',
    emoji: '✂️',
    fixRecipe: { category: 'bread', problem: 'general' },
    quickAnswer:
      'Scoring creates a weak line where pressure escapes during oven spring. Without it, loaves burst at seams or blow out at the base. Depth and angle interact with dough strength and steam.',
    intro:
      'Bread skin is not decorative packaging; it is a stressed membrane holding pressure. A score is a relief valve engineered into that membrane. Artisan ears are pretty side effects of correct physics, not the primary function.',
    sections: [
      {
        heading: 'Controlled failure',
        paragraphs: [
          'Materials science calls this designing a failure plane. You choose where the dough opens so the rest of the surface stays intact.',
        ],
      },
      {
        heading: 'Strength matching',
        paragraphs: [
          'Weak dough: shallow scores or it tears. Strong dough: confident depth and angle to lift an ear.',
        ],
      },
      {
        heading: 'Pan bread',
        paragraphs: [
          'Sandwich loaves sometimes score for tension relief; sometimes the pan edge guides expansion. Know your formula.',
        ],
        tip: 'Lame blades dull; replace or strop so you cut, not drag.',
      },
      {
        heading: 'Holistic view',
        paragraphs: [
          'If scoring never opens, suspect surface dryness, under-steam, or dough that was already over-proofed and fragile. Ratios from Fix My Recipe help separate dough issues from blade issues.',
        ],
      },
    ],
    related: B_REL,
  },
  {
    slug: 'bread-flour-vs-all-purpose-flour',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Bread Flour vs All-Purpose Flour',
    subtitle: 'Protein drives gluten potential; choose flour for the structure your bread needs.',
    readTime: '8 min read',
    emoji: '🌾',
    fixRecipe: { category: 'bread', problem: 'general' },
    quickAnswer:
      'Bread flour has higher protein for stronger gluten networks—better for chewy, high-volume lean breads. All-purpose is more versatile for mixed enrichments and softer crumbs. Brand matters as much as label.',
    intro:
      'Flour labels are marketing plus regulation plus crop variance. “Bread flour” usually means more gluten-forming protein than all-purpose from the same mill, but two bread flours from different brands can diverge more than bread vs AP within one brand. Bakers think in protein and absorption, not only bag names.',
    sections: [
      {
        heading: 'Protein and mixing tolerance',
        paragraphs: [
          'Higher protein absorbs more water and withstands longer mixing, supporting open crumb in wet doughs.',
        ],
      },
      {
        heading: 'When AP is better',
        paragraphs: [
          'Soft rolls, some enriched doughs, and tender sandwich breads often prefer moderate protein to avoid excessive chew.',
        ],
      },
      {
        heading: 'Ash and milling',
        paragraphs: [
          'Extraction level changes flavor and water needs even when protein looks similar on paper.',
        ],
        tip: 'Keep a notebook page per flour brand with hydration sweet spot from your kitchen.',
      },
      {
        heading: 'Quantify in Fix My Recipe',
        paragraphs: [
          'When you enter flour weight and hydration, bread mode contextualizes whether you are pushing the envelope for the flour class you chose.',
        ],
      },
    ],
    related: B_REL,
  },
  {
    slug: 'why-hydration-matters-in-bread',
    segment: 'bread-science',
    categoryLabel: 'Bread Science',
    title: 'Why Hydration Matters in Bread',
    subtitle: 'Water enables gluten, dissolves salts and sugars, and sets the crumb openness you can achieve.',
    readTime: '8 min read',
    emoji: '💧',
    fixRecipe: { category: 'bread', problem: 'general' },
    quickAnswer:
      'Hydration controls dough extensibility, fermentation speed, and final crumb openness. Too low yields tight crumb; too high demands technique. Express hydration as baker’s percentage of flour weight for repeatability.',
    intro:
      'Hydration is the master variable in lean bread. It is not “how wet it feels” but how much water mass sits relative to flour mass. That ratio determines whether folds work, whether shaping is possible, and how open your alveoli can become before the structure collapses.',
    sections: [
      {
        heading: 'Baker’s percentages',
        paragraphs: [
          'Flour is 100%; water is relative. A 70% dough uses 700 g water per 1000 g flour. This language lets you scale and compare recipes across the internet without cup confusion.',
        ],
      },
      {
        heading: 'Gluten and dilution',
        paragraphs: [
          'Water lets gliadin and glutenin move and link. Extreme hydrations require folds to align strands because kneading alone cannot “press” structure into soup.',
        ],
      },
      {
        heading: 'Fermentation coupling',
        paragraphs: [
          'Wetter doughs often ferment faster at the same temperature because enzymes diffuse readily—but they also feel softer, tempting under-proof misreads.',
        ],
      },
      {
        heading: 'Use the debugger intentionally',
        paragraphs: [
          'Fix My Recipe shines when you enter weights and compare to reference bands. Move hydration in 2–3% steps; it is a coarse knob with fine effects.',
        ],
      },
    ],
    faqs: [
      { q: 'Is higher hydration always better?', a: 'No—technique and flour must match. A failed 80% loaf is worse than a joyful 68% loaf.' },
    ],
    related: B_REL,
  },
];
