import type { ArticleEnrichment } from '../articleEnrichmentTypes';

export const CAKE_ENRICHMENTS: Record<string, ArticleEnrichment> = {
  'why-cakes-stick-to-pans-even-when-greased': {
    introAppend:
      'Temperature plays a quiet role: sugar films become tacky in a band roughly between 300–350°F (149–177°C) at the pan interface—exactly where thin batter meets hot metal longest. Oil does not dissolve caramel; it only buys time until structure lifts away. Parchment interrupts that chemistry entirely by keeping batter off bare aluminum or steel.',
    sections: [
      {
        heading: 'Internal temperature and “set” across the crumb',
        paragraphs: [
          'Most butter-based layer cakes finish when the geometric center reaches about 200–210°F (93–99°C) on an instant-read thermometer, though very moist formulas or those with chocolate or fruit can read a little lower while still safe. The critical idea is even set: if the sidewalls hit 212°F (100°C) steam pressure while the center lags 15°F behind, the outer crumb can shrink onto the pan while the middle is still moving—mechanical sticking even when chemically released.',
          'For chiffon or sponge cakes baked in ungreased tube pans, the recipe depends on climbing the sides; greasing those would defeat the design. For butter cakes in round pans, parchment rounds plus a light grease-under-parchment strategy beats grease-alone almost every time.',
        ],
      },
      {
        heading: 'Cooling curves and steam',
        paragraphs: [
          'Between 140–180°F (60–82°C), starch retrogrades and moisture migrates. Steam that condenses between crumb and metal can glue the cake if you invert too late—or tear it if you invert too early. Ten to fifteen minutes on a rack before depanning is a common compromise for butter cakes; sponges often need full cool upside-down per recipe.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does flouring the pan help after greasing?',
        a: 'A thin fat-plus-flour paste can help for some bundts, but for flat rounds, parchment is more reliable than flour alone for high-sugar batters.',
      },
      {
        q: 'Why does my nonstick still stick?',
        a: 'Worn coatings micro-scratch; sugar still reaches metal in spots. Replace pans or use parchment for problem recipes.',
      },
    ],
  },
  'why-cakes-bake-unevenly': {
    introAppend:
      'Radiant heat from oven walls, convection fan impingement, and pan color shift local surface temperature by tens of degrees. A common home oven might read 350°F (177°C) on the thermostat while the back-left corner cycles hotter during the burner or element phase—your cake records that asymmetry as darker crust or a diagonal dome.',
    sections: [
      {
        heading: 'Target air temperature vs. set temperature',
        paragraphs: [
          'Preheat until an oven thermometer on your actual rack reads stable—often 15–25 minutes after the beep. Convection modes typically run effective heat faster at the same set point; reduce 25°F (14°C) or time when switching modes mid-recipe testing.',
          'Dark pans absorb infrared more aggressively than light pans; the same 350°F air produces faster edge set on dark metal. If one side of your kitchen faces a window of afternoon sun on the oven, even insulation quirks can matter on sensitive sponges.',
        ],
      },
      {
        heading: 'Rotation and rack position',
        paragraphs: [
          'Rotate 180° at roughly two-thirds through the bake—after structure has risen but before the crumb fully sets—so you do not collapse a fragile foam. Center mass in the oven vertically: too high and the top browns before the center cooks; too low and bottom heat dominates.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is a baking strip worth it?',
        a: 'Wet fabric strips slow edge heat, reducing the dome and helping even rise—useful when edges race ahead of centers.',
      },
      {
        q: 'My oven runs hot on the right—what do I do?',
        a: 'Bias the pan left, rotate halfway, or bake one layer at a time for competitions where symmetry matters.',
      },
    ],
  },
  'why-cakes-have-a-wet-layer-at-the-bottom': {
    introAppend:
      'From a heat-transfer view, the bottom centimeter is last to reach gelatinization temperature for starch and full protein set—often needing the same internal temp as the center but arriving later because the pan bottom sheds heat to the rack or countertop. Glass and ceramic pans slow bottom heat compared with aluminum, which can paradoxically leave a wet band in recipes timed for metal.',
    sections: [
      {
        heading: 'Probe placement and true doneness',
        paragraphs: [
          'Check internal temperature just above the pan floor, not only in the geometric center of tall layers. If the floor reads 195°F (91°C) but the mid-crumb reads 205°F (96°C), you may still have under-set starch at the interface—extend bake 3–5 minutes with foil if the top is dark enough.',
          'Sugar concentration increases local boiling point depression; very sweet layers can remain syrupy until enough water has steamed off—another reason “wet” reads as gummy rather than merely moist.',
        ],
      },
      {
        heading: 'Emulsion temperature when mixing',
        paragraphs: [
          'Butter around 65–68°F (18–20°C) creams predictably; rock-cold butter or melted butter dropped into a cold mix can encourage fat to pool before baking, amplifying separation. Eggs incorporated near room temperature emulsify more completely than fridge-cold eggs shocked into stiff butter.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I fix a wet bottom by longer cool?',
        a: 'Cooling cannot finish under-baked starch; rebake briefly if discovered immediately, or trim and soak for trifle if already cooled.',
      },
      {
        q: 'Does a water bath cause wet bottoms?',
        a: 'Leakage can; wrap pans well. Otherwise water baths even heating and often reduce wet bands in cheesecakes—different physics than butter cakes.',
      },
    ],
  },
  'why-cakes-turn-out-flat': {
    introAppend:
      'Oven spring depends on gas expanding while the batter viscosity is still dropping—roughly between room temperature and the point where the crumb sets, often starting meaningful structure around 140°F (60°C) for eggs and much later for starch firmness. If your oven is 25°F cool, that window lasts longer and bubbles coalesce and escape instead of staying trapped.',
    sections: [
      {
        heading: 'Leavening chemistry and clock time',
        paragraphs: [
          'Double-acting baking powder releases at wet mix and again with heat; letting batter sit 30 minutes on the counter can exhaust the first reaction. Baking soda needs acid; if pH is wrong, CO₂ is weak or fast and uncontrolled.',
          'Creaming aerates mechanically—under-creamed butter leaves less nucleation for oven spring, especially in recipes that lean on chemical leavening only lightly.',
        ],
      },
      {
        heading: 'Altitude and temperature',
        paragraphs: [
          'At elevation, water boils lower and rises evaporate faster; you may need slightly higher bake temp or more liquid retention strategies. Document your oven’s actual temperature with a thermometer; “350°F” on the dial is often 330°F or 370°F in reality.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does overmixing make flat cakes?',
        a: 'It can deflate foam or build excess gluten in egg-leavened styles—mix until just combined unless the recipe wants strong structure.',
      },
      {
        q: 'Old baking powder—how to test?',
        a: 'Stir a teaspoon into hot water; vigorous bubbling means viable; flat means replace.',
      },
    ],
  },
  'why-cakes-taste-eggy': {
    introAppend:
      'Egg white proteins denature across a wide band starting near 140°F (60°C) and finishing firming well past 180°F (82°C); yolk sets more gradually. Prolonged heat drives sulfur volatiles (hydrogen sulfide family) more than brief gentle sets—sheet cakes with thin edges often overexpose egg to browning heat relative to the interior.',
    sections: [
      {
        heading: 'Maillard, sugar, and masking',
        paragraphs: [
          'Browning reactions produce hundreds of aroma compounds that compete with egg’s mild sulfury notes. Under-browned, pale sponges with high egg ratio read “eggy” faster than well-caramelized surfaces. A few grams of brown sugar or milk powder can increase Maillard without rewriting the formula.',
          'Salt shifts flavor perception broadly; many “eggy” complaints disappear with ⅛–¼ tsp more salt in a test batch—measure by weight for repeatability.',
        ],
      },
      {
        heading: 'Yolk-heavy and custard-style layers',
        paragraphs: [
          'Yolks bring lipids and emulsifiers (lecithin) but also more egg flavor mass. Balancing with vanilla, citrus zest, or coffee in chocolate cakes keeps the profile complex rather than one-note.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Are farm eggs eggier tasting?',
        a: 'Often slightly richer; if it bothers you, use balanced recipes with enough sugar and aroma to mask.',
      },
      {
        q: 'Does egg temperature matter for flavor?',
        a: 'Room-temp eggs emulsify better, reducing streaky overbaked pockets that concentrate sulfur notes.',
      },
    ],
  },
  'why-cakes-are-too-sweet': {
    introAppend:
      'Human sweetness perception drops when bitter, salty, and sour receptors activate—classic taste interaction. A cake at 20% sugar by baker’s percentage can taste sweeter next to unsweetened whipped cream than next to espresso buttercream because context changes the brain’s integration, not only the sugar grams.',
    sections: [
      {
        heading: 'Solids, dissolved sugar, and “sweet hits”',
        paragraphs: [
          'Simple syrup soaks add dissolved sucrose directly to crumb surfaces—very high perceived sweetness per gram compared with sugar baked into structure. Brushing warm layers drives syrup deeper; chilling slows perception slightly but does not remove sugar.',
          'Frostings near room temperature (65–72°F / 18–22°C) taste sweeter than ice-cold frosting because aroma volatiles move faster—temperature is a hidden variable in tastings.',
        ],
      },
      {
        heading: 'Structural limits when cutting sugar',
        paragraphs: [
          'Sugar holds moisture and interferes with gluten; aggressive cuts change texture. Reduce frosting first, or swap part granulated for glucose or trimoline where recipes allow—small % changes with less perceived sweetness sometimes.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why does my cake taste sweeter the second day?',
        a: 'Moisture equilibrates and aromas meld; sometimes sugar perception increases as dryness is less distracting—store airtight.',
      },
      {
        q: 'Coffee in chocolate cake—how much helps?',
        a: 'Even a teaspoon of instant coffee deepens bitterness enough to balance sweetness for many palates.',
      },
    ],
  },
  'why-cakes-crumble-when-cut': {
    introAppend:
      'The crumb fails in shear when tensile strength between starch gel and protein network is low—often below about 12–15% moisture in the free phase for lean sponges, though enriched cakes tolerate wider bands. Refrigerated butter cakes firm fat and can feel crumbly when cold even when moist.',
    sections: [
      {
        heading: 'Temperature at slicing',
        paragraphs: [
          'Buttercream cakes slice cleaner at 65–70°F (18–21°C) than straight from the fridge at 38°F (3°C) where fat is rock-hard and starch is firm. For naked cakes, a brief sit reduces fracture.',
          'Frozen-then-thawed layers can be extra fragile if ice crystals damaged cell walls—crumb coat to catch debris.',
        ],
      },
      {
        heading: 'Structural balance',
        paragraphs: [
          'Too little egg or fat for the flour mass yields a short, sandy break (sometimes desirable for shortbread, wrong for genoise). Too much leavening can leave voids that collapse into crumbs when cut.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Serrated vs chef’s knife?',
        a: 'Serrated saws with lower compression; long thin chef’s strokes work on cold dense cakes with a hot blade.',
      },
      {
        q: 'Why crumb coat?',
        a: 'It glues stray crumbs so final frosting stays smooth—also reduces crumb loss on the cutting board.',
      },
    ],
  },
  'why-cakes-stick-to-knife-when-cutting': {
    introAppend:
      'Sticking is friction plus adhesion: tacky starch above roughly 180°F (82°C) interior can smear on a blade; chilled ganache near 60°F (16°C) fractures while buttercream near 70°F (21°C) smears. The knife sees different rheology in each layer—composite behavior, not one temperature.',
    sections: [
      {
        heading: 'Heat the blade, not the cake',
        paragraphs: [
          'Dip a thin blade in hot water (not boiling), wipe dry, slice in one long draw. The transient heat shears chocolate and buttercream cleanly without melting the whole wedge. Repeat every slice for show-quality portions.',
          'For gummy under-baked interiors, no knife technique fixes incomplete set—reassess bake until probe temps align with your formula style.',
        ],
      },
      {
        heading: 'Humidity and hygroscopic sugar',
        paragraphs: [
          'High humidity days make frostings tackier on the surface; cornstarch-dusted bench or slightly cooler AC can help during assembly. Fondant sweats when moved cold-to-warm—different stick mechanism.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Cheese knife with holes—does it help?',
        a: 'Less surface contact reduces drag on soft cheeses; for cake, thin hot blade usually wins.',
      },
      {
        q: 'Why does my knife get frosting buildup?',
        a: 'Wipe every pass; buildup is adhesive frosting re-depositing, not usually the crumb.',
      },
    ],
  },
  'why-cakes-dry-out-after-one-day': {
    introAppend:
      'Staling is fastest between roughly 32–50°F (0–10°C)—refrigerator territory—because starch retrogrades quickly while water mobility is still meaningful. Freezing near 0°F (-18°C) slows both retrogradation and microbial growth, though ice crystals can damage cells if thawed carelessly.',
    sections: [
      {
        heading: 'Time and temperature storage map',
        paragraphs: [
          'Room temperature (68–72°F / 20–22°C) for butter cakes in airtight domes often beats fridge for texture for 1–2 days if food safety allows. High-sugar/high-acid items resist mold longer than dairy-heavy fillings alone.',
          'Simple syrup (sugar–water brushed on layers) increases free moisture and can mask firming crumb—classic pastry trick without changing the bake itself.',
        ],
      },
      {
        heading: 'Fat type and staling rate',
        paragraphs: [
          'Oil interferes less with starch crystallization long-term than solid butter crystals—oil cakes often taste softer day two. Emulsifiers in commercial mixes play the same role at micro scale.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does bread staling science equal cake staling?',
        a: 'Same starch retrogradation theme; cakes have more sugar and fat modifying the curve.',
      },
      {
        q: 'Microwave to revive?',
        a: 'Brief warming gelatinizes starch temporarily—good for a slice, not a long fix.',
      },
    ],
  },
  'why-cakes-sink-around-the-edges': {
    introAppend:
      'Edge regions reach gelation and crust formation earlier—often 15–30°F ahead of center on the timeline in metal pans. If leavening produces a rapid CO₂ pulse between 120–160°F (49–71°C) but the center cannot polymerize fast enough to trap it, the middle subsides after the rim has locked shape—creating a trough.',
    sections: [
      {
        heading: 'Oven temp and leavening balance',
        paragraphs: [
          'Try 325°F (163°C) instead of 350°F (177°C) for longer, gentler rise if your oven runs hot at the perimeter. Verify with a thermometer—many “325” bakes are actually 340°F at the cake zone.',
          'Double-check baking powder freshness and measure by weight; an accidental double dose creates a bubble storm that outruns structure.',
        ],
      },
      {
        heading: 'Pan size and thermal mass',
        paragraphs: [
          'Thicker batters in deeper pans take longer for center set; edges can overset. Match batter volume to pan charts from tested sources when possible.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why donut dip not full middle sink?',
        a: 'Asymmetric collapse—edges set, center still viscoelastic—localizes the dip as a ring.',
      },
      {
        q: 'Does opening the oven matter?',
        a: 'Early openings shock rising foam; wait until dome is established per recipe guidance.',
      },
    ],
  },
};
