import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "basil-pesto",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Basil Pesto: Recipe & Balance Guide",
  "subtitle": "Oil, basil, nuts, and cheese — a herb sauce that is part suspension and part emulsion, with most of its salt hiding inside the cheese.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🌿",
  "quickAnswer": "Pulse, do not puree — the heat from a spinning blade bruises basil leaves and dulls their fresh aroma fast. Drizzle the oil in a slow stream instead of dumping it, so the water from the basil and the oil meet in tiny droplets and partly emulsify (oil and water held together as a stable mix instead of separating). A spoonful of ice water can stabilize that emulsion without making the pesto greasier.",
  "intro": "Pesto looks like a simple chop, but it is really three things layered together: oil carrying the green herb aroma, tiny droplets of basil moisture suspended in that oil, and a salt-and-umami payload coming mostly from the cheese. There is usually no big acid in the bowl — sometimes a squeeze of lemon for lift, but never the sharp tang of a salad dressing. Your three enemies are heat, oxygen, and over-cheesing. Heat from blade friction in a food processor literally cooks fragile leaf cell walls, breaking down chlorophyll (the pigment that makes basil green) and the volatile oils that smell like summer. Oxygen turns cut basil brown in minutes through enzymatic browning, the same reaction that darkens a sliced apple. And cheese is mostly salt with flavor attached, so adding \"a little more parmesan\" is almost the same as adding a pinch of salt and a punch of glutamate (the umami-bringing amino acid). Think of pesto as a partial emulsion — small stable oil-and-water droplets clinging to herb solids — rather than a smooth purée. When that picture is right, the sauce drapes onto pasta in a glossy coat instead of pooling into oily puddles around the noodles.",
  "sections": [
    {
      "heading": "Technique: mortar versus machine",
      "paragraphs": [
        "A mortar and pestle crushes leaves in a way that bruises slowly and unevenly, releasing oils without heating the herb. The result is a pesto with visible texture — flecks of pine nut, ribbons of cheese, leaves you can still identify — and a brighter green flavor because less chlorophyll has been beat up. A food processor goes faster, but the blade spins thousands of times per minute and friction warms the bowl noticeably; if you let it run continuously, the heat you can feel through the lid is the same heat dulling the basil. Pulse in short bursts, scrape the corners often, and pour oil in a slow steady stream so the water and oil phases meet in controlled films and merge into stable little droplets, rather than dumping the oil and forcing the sauce to find its own balance — which usually means oil and water separating into greasy pools."
      ]
    },
    {
      "heading": "Cheese, nuts, and salt balance",
      "paragraphs": [
        "Parmesan brings two things at once: salinity and umami (the deep, savory taste that comes from glutamates and is the same flavor that makes a long-cooked broth feel \"meaty\"). That double-duty is why adding more cheese is not the same as just adding salt — you also push the savory volume knob, and at some point pesto starts to read more like cheese sauce than herb sauce. Toast nuts gently for depth, but watch them closely; burnt nuts add a real bitterness that no amount of basil can hide. Pine nuts are the classic and give a soft, slightly resinous note. Walnuts are richer and tannic. Almonds are cleaner and milder. Each changes the fat profile and how the sauce coats your tongue, so taste a single toasted nut before committing a whole batch."
      ],
      "bullets": [
        {
          "title": "Garlic",
          "text": "Raw garlic gets noticeably stronger overnight as enzymes keep generating sulfur compounds (the chemistry that gives garlic its bite) — start with less than you think if you plan to hold the pesto for service tomorrow."
        }
      ]
    },
    {
      "heading": "Acid, water, and emulsion help",
      "paragraphs": [
        "A small squeeze of lemon at the end can lift the sauce without turning it sharp — but add it after the cheese, because the cheese already carries some acid and most of the salt, and you want to judge those before adding more sourness. A tablespoon of ice water blended in helps the oil and water phases hold together longer, which lets you get a creamier sauce without dumping in more olive oil. If the finished pesto looks oily on the plate — a slick of green-tinted fat separating from the herb solids — you probably either added oil too quickly or let the processor heat the mix, both of which break the partial emulsion. Reprocess briefly with a teaspoon of water or another small handful of cheese or nuts to give the oil something fresh to cling to."
      ],
      "tip": "Taste the pasta water before thinning pesto with it — sometimes salty pasta water bridges the sauce to the noodles perfectly, and sometimes it pushes a salty pesto over the cliff."
    },
    {
      "heading": "Storage and color",
      "paragraphs": [
        "Pesto darkens with air contact because of enzymatic browning — the same reaction that turns sliced apples brown — combined with chlorophyll breakdown driven by oxygen and acid. A thin oil cap floating on top of the pesto seals out air the way a layer of saran wrap does, just more elegantly. Pressing plastic wrap directly onto the surface works just as well. Some cooks briefly blanch the basil in boiling water (a few seconds, then straight into ice water) to deactivate the browning enzymes, which keeps pesto vivid green for days but trades a tiny bit of fresh-leaf flavor for a slightly cooked note. There is no single right answer — pick the trade-off you prefer."
      ]
    },
    {
      "heading": "Service and pairing",
      "paragraphs": [
        "Toss pesto with hot pasta off the heat, not on the burner. The residual warmth from the noodles is plenty to loosen the sauce, and any extra heat dulls the aroma compounds you worked to preserve. Save a cup of pasta water before draining and use it in small splashes to adjust how the sauce clings — the dissolved starch in pasta water acts almost like a stabilizer, helping oil and water stay together as it coats the noodles. Pesto is not only a pasta sauce; spoon it over roasted vegetables, thin it with extra oil for a drizzle, or layer it under grilled fish or chicken, and remember to retaste salt whenever the context changes, because what reads perfect on plain pasta might overpower something delicate underneath."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why did my pesto turn brown overnight?",
      "a": "Two reactions worked together while you slept. Enzymatic browning — the same mechanism that turns cut apples brown — kept oxidizing cut basil surfaces wherever air could reach them. And chlorophyll, the green pigment, slowly breaks down on contact with oxygen and acid. Press plastic wrap directly to the surface, top with a thin film of oil, and try to keep blade heat down during prep; cooler, less-bruised leaves brown more slowly."
    },
    {
      "q": "Can I make pesto without cheese?",
      "a": "Yes, but you have to replace what the cheese was doing — and it was doing two jobs, salt and umami. Try a small amount of white miso, a handful of extra toasted nuts, nutritional yeast, or a splash of soy sauce to bring back the savory backbone, and then add salt deliberately rather than by tasting and panicking. A dairy-free pesto can be just as satisfying, but it needs explicit seasoning rather than coasting on cheese."
    },
    {
      "q": "Is extra-virgin olive oil mandatory?",
      "a": "Traditional and delicious, but not the only choice. Some extra-virgin oils are aggressively peppery — a defense compound called oleocanthal can make a young oil bite your throat — and that bitterness can dominate delicate basil. Many cooks blend a mild, neutral-ish oil for the bulk of the pesto and then finish with a small drizzle of fragrant extra-virgin on top, so the fruity aroma still reads on the plate without bullying the herb."
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
