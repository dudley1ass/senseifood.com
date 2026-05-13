import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-stick-together",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Stick Together",
  "subtitle": "Cookies weld when spread puts hot edges in contact while the sugar–fat matrix is still soft—geometry and cooling timing matter as much as any nonstick spray.",
  "readTime": "6 min read",
  "emoji": "🫂",
  "fixRecipe": {
    "category": "cookie",
    "problem": "spreads-too-much"
  },
  "quickAnswer": "Think of warm cookie edges like soft caramel: if they touch while still plastic, they merge. Give them space, cool on a rack with airflow, downsize the scoop if you always collide, and do not stack until truly room temperature—especially for chewy, invert-sugar-heavy doughs.",
  "intro": "Kiss cookies can be intentional; fused mega-cookies usually mean the sheet geometry lost a negotiation with heat. Contact while the crumb is still warm and releasing steam welds edges; cooling below hand-warm reduces tack so cookies stop acting like social glue. Moist centers can also keep edges softer longer, which encourages neighbor bonding. The fix is mostly spacing, pan load, and cooling discipline—not a mystery aerosol.",
  "sections": [
    {
      "heading": "Contact while plastic",
      "paragraphs": [
        "Sugar–fat dough stays viscous until it actually cools; while it is warm, touching edges behave like hot caramel that wants to become one piece. That is not \"bad butter\"—it is phase behavior you can plan around with spacing and rack time."
      ]
    },
    {
      "heading": "Pan loading",
      "paragraphs": [
        "Crowded pans trap steam and slow crust set, which keeps rims softer longer—so edges stay in the danger zone for welding. One sheet per rack position is not fussiness if your recipe spreads; it is airflow."
      ],
      "tip": "One sheet per rack position for airflow unless your recipe specifies otherwise."
    },
    {
      "heading": "Spread prediction",
      "paragraphs": [
        "If dough reliably reaches its neighbors, fight geometry before ideology: smaller scoop, wider spacing, or a touch more flour in a measured test—not a fistful because you are annoyed."
      ]
    },
    {
      "heading": "Ratios",
      "paragraphs": [
        "Fix My Recipe flags high sugar and butter relative to flour—classic spread drivers that make contact more likely. Fix the ratio story before you buy a bigger pan to compensate for physics."
      ]
    },
    {
      "heading": "Cooling protocol",
      "paragraphs": [
        "Aim for generous spacing on the sheet; move cookies to a wire rack before they are fully cool so bottoms do not steam-weld to each other or the pan. If you must stack warm, parchment between layers is cheap insurance."
      ]
    },
    {
      "heading": "Humidity and chew",
      "paragraphs": [
        "Chewy, hygroscopic sugar formulas pull moisture from humid air and can feel tackier in the tin overnight—same chemistry, different timetable than fresh-from-oven welding."
      ]
    },
    {
      "heading": "What actually changes spread on your tray",
      "paragraphs": [
        "Spread begins as butter softens toward body temperature and then fully mobilizes in the oven; edge cookies and dark pans often race ahead of centers. Chewy versus crisp is mostly about how much moisture you leave in the crumb and how brown the edges get—lower moisture plus more Maillard reads crispier; more moisture with gentler browning reads chewier. Chilling dough near refrigerator cold slows early fat flow if you need less spread.",
        "If you are debugging, one honest line per bake beats a perfect spreadsheet: room temp, scoop size, pan color, rack height, and whether the oven had fully recovered between trays. Photograph the sheet at the same minute mark when you compare changes—your eyes catch uneven spread faster than memory.",
        "SenseiFood’s Fix My Recipe debugger pairs those observations with ratio checks so you are not guessing in the dark."
      ]
    },
    {
      "heading": "Extra variables that swing results",
      "paragraphs": [
        "Insulated pans and huge batches change edge versus center heating; bake one controlled test tray before scaling a party. Dough temperature at scoop—say 50°F versus 70°F (10°C versus 21°C)—changes spread even at the same oven setpoint because fat mobility starts earlier in the warm dough."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Cookies Spread",
      "path": "/cookie-science/why-cookies-spread"
    },
    {
      "title": "Why Cookies Spread Unevenly",
      "path": "/cookie-science/why-cookies-spread-unevenly"
    }
  ],
  "faqs": [
    {
      "q": "Why do cookies stick in a jar even after cooling?",
      "a": "Vacuum-cooling in a sealed jar traps humidity on surfaces; warm cookies sealed too early sweat and tack. Let them truly come to room temperature first, then seal—your jar is not evil, it is a humidity trap."
    },
    {
      "q": "Is chocolate bloom the same as sticking?",
      "a": "Different story: bloom is fat or sugar migrating to the surface and recrystallizing—often chalky or streaky—not the hot-edge weld we are talking about here."
    }
  ]
};

export default function WhyCookiesStickTogether() {
  return <ScienceArticlePage spec={SPEC} />;
}
