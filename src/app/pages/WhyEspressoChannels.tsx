import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-espresso-channels",
  "segment": "coffee-science",
  "categoryLabel": "Coffee Science",
  "title": "Why Espresso Channels (Extraction Path Failure)",
  "subtitle": "Density gradients, edge effects, and uneven prep create least-resistance rivers.",
  "readTime": "8 min read",
  "level": "Pressure bed physics",
  "emoji": "🌀",
  "fixRecipe": {
    "category": "coffee",
    "problem": "extraction-balance"
  },
  "quickAnswer": "Channeling is water cheating past grounds instead of flowing evenly through the puck. Fix distribution (WDT), level tamp, align basket and shower screen, match dose to basket depth, and avoid cracked pucks from impact. At nine bar, a narrow high-flow path steals extraction from the rest of the bed, producing sour under-extracted liquid alongside bitter over-extracted liquid at once.",
  "intro": "Espresso forces hot water through a compressed cake of coffee in seconds. If that cake is even slightly heterogeneous, fluid mechanics does what fluid mechanics always does: it finds the path of least resistance. A hairline crack, a dense rim with a soft center, or a clump that never broke apart becomes a low-impedance channel where velocity spikes. Water moving faster extracts differently—often too little from neighboring regions and too much along the channel walls—so the cup can taste simultaneously thin-sour and harsh-bitter even when total shot time looks normal. Distribution tools and careful technique exist because human fingers are poor randomizers at millimeter scale. Understanding channeling as a physics problem explains why minor routine changes—tap while dosing, spin before tamp, lock straight—sometimes matter more than another quarter-notch on the grinder.",
  "sections": [
    {
      "heading": "Prep sequence: distribute before compress",
      "paragraphs": [
        "Tamping only compresses what is already there; it cannot erase vertical stripes of different density left by uneven settling. That is why baristas use stirring distribution (WDT), needle tools, or stockfleth-style grooming: the goal is uniform bulk density before the puck sees pressure.",
        "Clumps from electrostatic fines or moist beans create local low-permeability lumps surrounded by faster flow paths. Breaking clumps and homogenizing particle arrangement reduces the odds that one sector becomes a preferred highway."
      ],
      "bullets": [
        {
          "title": "Level before tamp",
          "text": "A tilted bed becomes a tilted fracture risk after compression—check visually from multiple angles."
        },
        {
          "title": "Consistent dose",
          "text": "Changing grams changes headspace and side-wall gap dynamics; chase channel fixes at fixed dose first."
        }
      ]
    },
    {
      "heading": "Tamping, basket fit, and edge channeling",
      "paragraphs": [
        "Basket diameter and dose interact: too little coffee leaves a wide gap where water can skirt the puck edge; too much risks touching the shower screen and cracking the puck when engaged. Match dose to your basket manufacturer’s intent and measure headspace if shots channel mysteriously.",
        "Uneven tamps or pucks knocked on the rim while locking in can create micro-fissures. Smooth, perpendicular pressure and gentle portafilter insertion matter."
      ],
      "tip": "If you see blond jets early from one sector of the basket, think distribution and edge effects before grind—blonding localized to a sector is a geography problem."
    },
    {
      "heading": "Temperature, preinfusion, and viscosity",
      "paragraphs": [
        "Soft, low-pressure preinfusion wets the puck before full nine-bar ramps, which can reduce early channel blowouts by allowing even saturation. Machines without preinfusion still benefit from consistent temperature stability so viscosity does not swing shot to shot.",
        "Very dry pucks or extremely hot dry screens can change the first moments of flow; some users adjust flush routines to normalize head temperature before locking in."
      ]
    },
    {
      "heading": "Puck integrity from prep to pull",
      "paragraphs": [
        "Delayed shots after tamping can let the puck expand slightly or dry on top depending on environment—either may change flow. Conversely, rushing can leave unsettled fines. Develop a calm, repeatable timeline: dose, distribute, tamp, lock, pull—or know why you deviate.",
        "Transport shocks—dropping the portafilter, banging it—can crack an otherwise fine puck. Treat the assembled portafilter like a precision instrument, not a pan."
      ]
    }
  ],
  "faqs": [
    {
      "q": "How do I know it is channeling and not just bad beans?",
      "a": "Channeling often shows uneven blonding, asymmetric flow from the basket bottom, and a cup that mixes sour and bitter in ways that change when you fix prep but keep beans constant. Beans matter, but repeatable spatial symptoms point to bed physics."
    },
    {
      "q": "Do paper or mesh puck screens help?",
      "a": "Screens can redistribute top water entry and reduce jetting from shower holes, which helps some setups. They do not replace good distribution; think of them as insurance on top of sound technique."
    },
    {
      "q": "Why does my bottomless portafilter spray?",
      "a": "Spray usually indicates uneven resistance—classic channeling or severe clumping. It can also be overdosing or cracked pucks. Use the spray pattern as diagnostic video feedback, not as shame—fix distribution first."
    }
  ],
  "related": [
    {
      "title": "Why Coffee Grind Size Matters",
      "path": "/coffee-science/why-coffee-grind-size-matters"
    },
    {
      "title": "Why Coffee Brewing Time Matters",
      "path": "/coffee-science/why-coffee-brewing-time-matters"
    },
    {
      "title": "Coffee Extraction Science",
      "path": "/coffee-science/coffee-extraction-science"
    },
    {
      "title": "How to Debug Your Coffee",
      "path": "/coffee-science/how-to-debug-your-coffee"
    }
  ]
};

export default function WhyEspressoChannels() {
  return <ScienceArticlePage spec={SPEC} />;
}
