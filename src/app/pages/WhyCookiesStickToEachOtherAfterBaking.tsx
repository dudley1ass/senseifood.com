import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-stick-to-each-other-after-baking",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Stick to Each Other After Baking",
  "subtitle": "Warm edges are still soft and a little sticky—almost like hot candy—so when two cookies kiss, sugar and fat films weld and then cool as one shared ridge.",
  "readTime": "6 min read",
  "level": "Cooling phase",
  "emoji": "🤝",
  "fixRecipe": {
    "category": "cookie",
    "problem": "general"
  },
  "quickAnswer": "Cookies fuse when they are still warm enough that sugar and fat behave like a soft adhesive: touching edges share a steamy interface that cannot dry as fast as an open top, so the weld stays plastic longer. Space on the sheet, air circulation on a rack, and waiting until fully cool before stacking prevents the literal hot-glue phase.",
  "intro": "Cooling is still part of baking. While edges are above the temperature where sugar behaves like a stiff glass, they are tacky—more hot candy than finished biscuit. Press two warm edges together and you create a shared micro-layer where moisture cannot escape as fast as from a free surface, so the interface stays soft longer. Steam condenses on slightly cooler neighbors, which adds water right where you do not want it. Seal a warm batch in a tub and you recycle humidity onto surfaces, which can revive stickiness even after cookies looked separate. This is heat and mass transfer doing social networking—spacing, racks, and timing are the polite boundaries.",
  "sections": [
    {
      "heading": "Cooling curve on the pan versus rack",
      "paragraphs": [
        "Sheet metal holds heat and limits air under the cookie, so bottoms can stay in that soft, tacky window longer than the tops you can see. Moving to a wire rack early gives edges free air so they set instead of fusing to neighbors or the pan lip. Crowding matters even without touching: radiant heat from adjacent cookies slows inward faces from cooling at the same pace as outer edges.",
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
        "High sugar and butter formulas leave a thin lipid-sugar film on rims that is genuinely adhesive when warm. Press warm cookies together and you cold-weld that film into a shared ridge that later breaks as one mega-cookie. Invert sugar from corn syrup, honey, or molasses increases tack and stretches the soft window, so chewy styles stick more readily than lean shortbreads if you handle them early.",
      ],
      "tip": "For packed lunchboxes, choose fully cooled cookies with cornstarch-dusted fingers or parchment dividers; warmth plus pressure is the stickiness trigger."
    },
    {
      "heading": "Stacking sequence for storage",
      "paragraphs": [
        "Even \"room temperature\" stacks can cold-flow under weight, especially chewy or chocolate-coated cookies. Parchment between layers prevents micro-welds and cosmetic dings. Filled or iced cookies need rigid separation so jam or buttercream does not bridge—think like packaging, not Tetris speedrun.",
      ]
    },
    {
      "heading": "Humidity and airtight timing",
      "paragraphs": [
        "Sealing while cookies are still exhaling steam traps moisture on surfaces, raising water activity at interfaces and making them tacky to each other. Let trays come to room temperature under a loose cover first, then go airtight if you need longer storage in dry climates. In humid kitchens, cooled cookies can still pick up surface moisture overnight; skipping the fridge for crisp types avoids condensation cycles that revive stickiness.",
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can I separate stuck cookies without wrecking them?",
      "a": "Twist gently along the contact plane instead of yanking straight apart—you tear less surface that way. A very low oven can sometimes re-soften bonds evenly, but you risk over-baking; prevention beats surgery.",
    },
    {
      "q": "Why do chocolate chips make sticking worse?",
      "a": "Molten chocolate is basically edible glue. Chips that touch between cookies bridge as they cool; wait until chocolate is firm before you stack, or use parchment dividers like a civilized person.",
    },
    {
      "q": "Does freezing prevent sticking?",
      "a": "Freezing solidifies fat and slows cold-flow, but wrap layers well—partial thaw in a sealed bag can still create wet interfaces if temperatures swing in the freezer door zone.",
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
