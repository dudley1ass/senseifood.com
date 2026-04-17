import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-stick-to-each-other-after-baking",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Stick to Each Other After Baking",
  "subtitle": "Edges stay thermoplastic until cooled; steam and sugar bridges fuse contact patches.",
  "readTime": "6 min read",
  "level": "Cooling phase",
  "emoji": "🤝",
  "fixRecipe": {
    "category": "cookie",
    "problem": "general"
  },
  "quickAnswer": "Cookies fuse when placed touching while edges are still soft and releasing steam. Space on the sheet, cool on rack with airflow, and do not stack until room temperature. The bond is literal: hot sugar and fat films weld on contact, then set as a shared edge when they cool.",
  "intro": "Baking ends when you decide cooling begins. While cookies are still above the glass transition of their sugar phase, edges are soft and tacky—more like hot candy than finished biscuit. Touch two edges together and you create a shared interface where moisture cannot escape as fast as from a free surface, so the micro-layer stays plastic longer. Steam condenses on slightly cooler neighboring dough, adding water plasticizer exactly where you do not want it. If you then seal the batch in a container while warmth remains, humidity redeposits on surfaces and revives stickiness even after cookies seemed separate. Understanding post-bake as a phase of heat and mass transfer explains why spacing, rack cooling, and storage timing prevent accidental sandwiching better than scraping apart tragedy cookies afterward.",
  "sections": [
    {
      "heading": "Cooling curve on the pan versus rack",
      "paragraphs": [
        "A metal sheet holds sensible heat and limits air circulation around bottoms, so the undersides stay in a plastic regime longer than tops exposed to oven air. Thin, buttery cookies benefit from an early transfer to a wire rack so edges free-set instead of fusing to neighbors or the pan lip.",
        "Crowding matters even without touching: radiant heat from adjacent cookies slows edge set on inward faces. If your recipe spreads aggressively, use two sheets or stagger scoops so each cookie has a microclimate instead of a wall of hot neighbors."
      ],
      "bullets": [
        {
          "title": "When to lift",
          "text": "If cookies are too soft to move intact, wait until the tops look set enough to slide an offset spatula—usually a minute or two on the pan—then transfer."
        },
        {
          "title": "Silicone mats",
          "text": "Mats insulate slightly versus bare metal; bottoms can set slower, increasing side-stick risk on crowded sheets—watch contact patches."
        }
      ]
    },
    {
      "heading": "Sugar, fat, and weld strength",
      "paragraphs": [
        "High sugar and butter formulas leave a thin lipid-sugar film on rims that is adhesive when warm. Pressing warm cookies together cold-welds that film into a shared ridge that later breaks as one piece—hence the fused mega-cookie.",
        "Invert sugar, corn syrup, or honey increases tack and extends the thermoplastic window, so chewy recipes stick more readily than lean shortbreads if handled early."
      ],
      "tip": "For packed lunchboxes, choose fully cooled cookies with cornstarch-dusted fingers or parchment dividers; warmth plus pressure is the stickiness trigger."
    },
    {
      "heading": "Stacking sequence for storage",
      "paragraphs": [
        "Room-temperature cookies can still cold-flow under stack weight, especially chewy or chocolate-coated types. Parchment or wax paper between layers prevents micro-welds and cosmetic damage.",
        "Decorated cookies with icing or jam need rigid separation so fillings do not bridge—treat storage like food packaging engineering, not Tetris."
      ]
    },
    {
      "heading": "Humidity and airtight timing",
      "paragraphs": [
        "Sealing cookies while they breathe steam traps moisture on surfaces, raising water activity at interfaces and making them tacky to each other. Let trays come to room temperature with loose cover first, then move to airtight if you need long shelf life in dry climates.",
        "In humid kitchens, even cooled cookies can pick up surface moisture overnight; a desiccant packet is rarely necessary, but avoiding refrigerator storage for crisp types prevents condensation cycles that revive stickiness."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can I separate stuck cookies without wrecking them?",
      "a": "Gently twist parallel to the contact plane rather than pulling apart perpendicular—less shear tearing. Warming slightly in a low oven can sometimes soften bonds evenly, but risk of over-baking exists; prevention beats repair."
    },
    {
      "q": "Why do chocolate chips make sticking worse?",
      "a": "Molten chocolate is an adhesive. Chips touching between cookies create strong bridges that set as chocolate recrystallizes—cool until chocolate firms before stacking."
    },
    {
      "q": "Does freezing prevent sticking?",
      "a": "Freezing solidifies fat and sugar and stops cold-flow, but wrap layers well first—partial thaw in a sealed bag can still create wet interfaces if temperature fluctuates."
    }
  ],
  "related": [
    {
      "title": "Why Cookies Stick Together",
      "path": "/cookie-science/why-cookies-stick-together"
    },
    {
      "title": "Why Cookies Spread Too Much",
      "path": "/cookie-science/why-cookies-spread-too-much"
    },
    {
      "title": "Why Cookies Spread",
      "path": "/cookie-science/why-cookies-spread"
    },
    {
      "title": "How to Debug Cookie Batch Issues",
      "path": "/cookie-science/how-to-debug-cookie-batch-issues"
    }
  ]
};

export default function WhyCookiesStickToEachOtherAfterBaking() {
  return <ScienceArticlePage spec={SPEC} />;
}
