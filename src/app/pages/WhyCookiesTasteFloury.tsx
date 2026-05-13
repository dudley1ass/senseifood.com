import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-cookies-taste-floury",
  "segment": "cookie-science",
  "categoryLabel": "Cookie Science",
  "title": "Why Cookies Taste Floury",
  "subtitle": "That chalky cereal note usually means starch never fully hydrated and cooked through—dry pockets, pale thick centers, or flour that never got evenly fat-coated before liquids arrived.",
  "readTime": "7 min read",
  "level": "Hydration & bake",
  "emoji": "🌾",
  "fixRecipe": {
    "category": "cookie",
    "problem": "general"
  },
  "quickAnswer": "\"Floury\" is your mouth noticing starch granules that never finished the cook-and-swell story called gelatinization—often from dry nodules in the dough, a thick dome that browns on the rim while the core stays cool, or mixing order that left streaks of loose flour. Fix the water path and the heat path before you double the vanilla.",
  "intro": "Wheat flour is mostly starch packed in granules; heat and water together turn that chalky potential into a tender gel. In cookies, sugar and fat compete with water for access to those granules, so uneven mixing or a bake profile that sets the top before the center heats through leaves little pockets that still read raw. Mixing order matters because creamed fat and sugar can coat starch and slow clumping, while dumping liquid into loose flour risks paste on the outside and dry islands inside. A golden edge can lie to you: the rim can look \"done\" while a fat scoop’s core never held heat long enough. This is almost always hydration and thermal delivery, not a mystery shortage of brown sugar.",
  "sections": [
    {
      "heading": "Mixing sequence and fat coating",
      "paragraphs": [
        "Classic creaming partially coats starch in fat before bulk hydration, which reduces the free-water channels that create flour clumps. Dumping liquid straight into loose flour can make pasty outer layers with dry centers that look mixed but are not. Under-mixing after flour leaves visible streaks; over-mixing can toughen gluten in some formulas, so the goal is thorough but gentle: enough revolutions to homogenize, not so much that you accidentally make bread dough unless the recipe wants that.",
      ],
      "bullets": [
        {
          "title": "Sift or whisk drys",
          "text": "Even distribution of leaveners and salt prevents localized chemistry that changes set time and masks underbaked centers."
        },
        {
          "title": "Scrape the bowl",
          "text": "Dry flour hides under the beater; pause once to scrape so nothing rides through unmixed."
        }
      ]
    },
    {
      "heading": "Bake temperature, thickness, and spread",
      "paragraphs": [
        "Thick mounds set tops fast while interiors lag in temperature. Dropping the oven temperature slightly and giving a few more minutes lets the center catch up without scorching the rim. Gently flattening dough into disks increases heat penetration per bite depth—a practical lever when the center stays gray-pasty. Convection can even heating but also accelerates surface set; rotate and watch bottom color, because pale bottoms can pair with undercooked cores on insulated mats.",
      ],
      "tip": "If edges are dark and centers still taste floury, thickness is the prime suspect—geometry beat your bake, not the clock alone."
    },
    {
      "heading": "Chilling, hydration time, and flour age",
      "paragraphs": [
        "Cold rest gives water time to migrate into starch more evenly; baking too soon after mixing can leave dry cores in high-sugar doughs where osmotic competition held water back from flour. Overnight rests are not mandatory for every recipe, but they are a reliable lever when hydration evenness and spread both help.",
        "Old flour can taste musty and be misread as \"floury,\" but true raw-starch perception still tracks cook-through. If the note is dusty pantry, replace the flour; if it is chalky paste in the center, fix heat delivery."
      ]
    },
    {
      "heading": "Differentiating floury from starchy-thick or dry",
      "paragraphs": [
        "Cakey cookies can feel moist yet still carry cereal notes if the structure set through egg foam before the thickest region fully cooked—taste carefully. Dry cookies feel low-moisture everywhere; floury cookies often feel pasty in the middle while edges are fine. Chocolate-heavy doughs hide visuals; break one open and look for uniform color without gray streaks—that is the honest scoreboard for gelatinization."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Does bleached versus unbleached flour change floury taste?",
      "a": "Bleaching changes starch and protein slightly and can affect spread, but raw-starch perception is still about cook-through and hydration. Choose flour for the recipe’s intended texture, then ensure bake and mixing support even gelatinization."
    },
    {
      "q": "Can I fix floury centers by microwaving baked cookies?",
      "a": "Microwaves heat unevenly and can ruin texture, but a brief gentle warm-through sometimes finishes underbaked centers in a pinch. Better to rebake at low temperature briefly or adjust future batches—microwave is a bandage, not a process."
    },
    {
      "q": "Why does my gluten-free blend still taste gritty?",
      "a": "Different starches gelatinize differently; grit can be particle size or insufficient hydration and bake time for that blend. It is a related but distinct problem from wheat floury notes—follow blend-specific hydration and rest guidance."
    }
  ],
  "related": [
    {
      "title": "Why Cookies Turn Cakey",
      "path": "/cookie-science/why-cookies-turn-cakey"
    },
    {
      "title": "Why Cookies Stay Thick",
      "path": "/cookie-science/why-cookies-stay-thick"
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

export default function WhyCookiesTasteFloury() {
  return <ScienceArticlePage spec={SPEC} />;
}
