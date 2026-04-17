import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "basil-pesto",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Basil Pesto: Recipe & Balance Guide",
  "subtitle": "Oil + basil + nuts + cheese — emulsion-like herb sauce with salt from cheese.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🌿",
  "quickAnswer": "Pulse, don’t obliterate — heat from over-processing bruises basil and dulls aroma. Stream oil to partially emulsify; a little ice water can help emulsion without more oil.",
  "intro": "Pesto is oil-forward with herb solids and cheese providing salt and umami. Acid is usually subtle—sometimes lemon brightens without reading like salad dressing. The Sauce Sensei wheel still helps when you adjust cheese or nuts: those moves change salt, fat dominance, and texture fast. Your enemies are excess heat from the blade, oxidation, and over-cheesing that turns a fresh sauce into a salty paste. Think partial emulsion: small stable droplets suspended enough to cling to pasta without separating into oily pools. Nut toast level and cheese brand both move salt—when you change either, reset your mental salt budget before adding pinch after pinch.",
  "sections": [
    {
      "heading": "Technique: mortar versus machine",
      "paragraphs": [
        "Traditional mortar work bruises less and yields a more varied texture; careful food-processor pulses preserve brighter green flavor when you refuse to run continuously. Stream oil slowly so water and oil phases meet in controlled films; dumping oil invites separation.",
        "Scrape the bowl often—unmixed corners hide coarse bits that later read gritty on the tooth."
      ]
    },
    {
      "heading": "Cheese, nuts, and salt balance",
      "paragraphs": [
        "Parmesan brings salinity; adding more cheese is not the same as adding salt thoughtfully. Toast nuts for depth but watch bitterness—burnt nuts make bitter pesto fast.",
        "Pine nuts are classic; walnuts or almonds change fat profile and mouth-coating. Taste nuts before committing a batch."
      ],
      "bullets": [
        {
          "title": "Garlic",
          "text": "Raw garlic intensifies overnight—start with less if you hold pesto for service tomorrow."
        }
      ]
    },
    {
      "heading": "Acid, water, and emulsion help",
      "paragraphs": [
        "A small splash of lemon can lift without turning the sauce sharp—add after cheese so you judge salt correctly. A tablespoon of ice water can help emulsion stability in processors without increasing oil load.",
        "If pesto is oily on the plate, you may have added oil too fast or overheated the mix—reprocess with a touch of water or another pinch of solids to re-anchor."
      ],
      "tip": "Taste pasta water salinity before thinning pesto with it—sometimes pasta water is the bridge; sometimes it is too salty."
    },
    {
      "heading": "Storage and color",
      "paragraphs": [
        "Surface oil limits oxidation; pesto darkens with air contact—press plastic directly to the surface if holding overnight. A thin oil cap is traditional for a reason.",
        "Blanching basil is optional trade: greener color versus a slight cooked note—pick your aesthetic."
      ]
    },
    {
      "heading": "Service and pairing",
      "paragraphs": [
        "Toss with hot pasta off heat; residual heat can dull aroma if you cook pesto like a tomato sauce. Reserve pasta water to adjust viscosity in the bowl.",
        "Beyond pasta: spoon over vegetables, thin for drizzle, or layer under proteins—adjust salt when context changes."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why did my pesto turn brown overnight?",
      "a": "Enzymatic browning and oxidation at air contact. Press film to the surface, top with oil, and minimize blade heat during prep."
    },
    {
      "q": "Can I make pesto without cheese?",
      "a": "Yes—replace savoriness with toasted nuts, miso (watch salt), or nutritional yeast. You will need explicit salt and umami tuning."
    },
    {
      "q": "Is extra-virgin olive oil mandatory?",
      "a": "Traditional and delicious, but peppery oils can dominate delicate basil. Some cooks blend mild oil for body and a finish of fragrant EVOO."
    }
  ],
  "related": [
    {
      "title": "Temperature: The Silent Killer of Sauces",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "Order of Operations: Timing Changes Everything",
      "path": "/sauce-science/order-of-operations-sauce-timing"
    }
  ],
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "sauceSensei": {
    "sauceId": "herb-pesto"
  }
};

export default function BasilPesto() {
  return <ScienceArticlePage spec={SPEC} />;
}
