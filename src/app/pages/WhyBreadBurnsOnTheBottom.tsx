import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-burns-on-the-bottom",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Burns on the Bottom",
  "subtitle": "Conductive heat from baking stones, thin pans, and oven floor hot spots chars the base of a loaf before the top has even browned.",
  "readTime": "7 min read",
  "emoji": "🔥",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Bottom burn is physics, not bad luck. The base of a loaf touches the hottest part of most ovens — the metal pan, hot stone, or oven floor — and absorbs heat directly through contact, while the top only gets the surrounding hot air. Double-pan the loaf for insulation, use parchment, raise the rack, lower the oven temperature, or slide a baking sheet underneath as a heat shield.",
  "intro": "The bottom of a loaf touches the hottest conductive heat path in most home ovens. While the top of the loaf browns by radiation (heat traveling as infrared waves from the oven walls and element) and convection (hot air circulating around the loaf), the base sits against metal, ceramic, or stone that stores and transfers heat much more aggressively. That direct contact temperature can run higher than the air temperature you set on the dial. Fixing bottom burn is kitchen physics, not a new ingredient or a different recipe. The contact surface between pan and dough often exceeds the listed oven temperature — dark metal, thin sheets, and direct exposure to the lower heating element can push the pan-side temperature far past where sugars in the crust start to scorch (around 350°F / 177°C is where simple sugars begin to caramelize, and bottom contact can easily exceed that). The thermal mass of a baking stone (how much heat it stores and how slowly it releases it) can either even out hot spots or worsen them, depending on how long you preheated the stone.",
  "sections": [
    {
      "heading": "Thermal mass and contact",
      "paragraphs": [
        "Baking steels and stones are wonderful for getting a crisp, crackly bottom on a baguette or a pizza — but they punish delicate sandwich loaves that needed gentler heat. A second sheet pan placed underneath the loaf adds an air gap, which acts as insulation because air conducts heat much more slowly than metal or stone. Dark, thin pans run hotter than light-colored, thick ones — dark surfaces absorb more radiant heat from the oven walls, and thin metal cannot buffer that heat the way thick metal can. If you keep getting bottom burn from one specific pan, the pan itself is likely the problem."
      ]
    },
    {
      "heading": "Sugar and dairy",
      "paragraphs": [
        "Enriched doughs — those containing milk, eggs, butter, or honey — caramelize and brown more aggressively on contact surfaces because they carry more sugars and milk proteins. The same heat that would gently color a lean dough can burn an enriched one in the same time. Lower the bake temperature slightly (15 to 25°F / 9 to 14°C) and extend the time if the bottoms are racing ahead of the tops; the deeper, slower heat protects the bottom while still letting the rest of the loaf finish."
      ],
      "tip": "Slide a thin pizza stone or a second sheet pan on a rack above the floor — that lifts the loaf away from the worst radiant zone, which is the immediate heat coming up from the lower heating element."
    },
    {
      "heading": "Preheating myths",
      "paragraphs": [
        "Long, violent preheats can overheat a stone past what your recipe actually needs — a stone that has been heating at 500°F for an hour has stored an enormous amount of energy, and that energy dumps into the bottom of the loaf the moment dough meets stone. Match the preheat duration to what the recipe really requires. Twenty to thirty minutes is enough to bring most stones to working temperature; a full hour at high heat usually just over-stores energy that scorches loaves."
      ]
    },
    {
      "heading": "Record and adjust",
      "paragraphs": [
        "Log the rack position and pan type each time you bake. If the bottoms burn, write down exactly which pan you used, which rack you placed it on, and what temperature you set. After a few bakes you will see patterns: \"my dark pan on the lowest rack always burns,\" \"glass pans need lower temperatures than I expect.\" Fix My Recipe can also help you see whether the formula itself is unusually high in sugar or fat — both of which lower the thermal margin before things char — and warn you to take extra precautions."
      ]
    },
    {
      "heading": "Insulation tactics",
      "paragraphs": [
        "Double pans, baking stone buffers, or a layer of parchment paper underneath the loaf all reduce the rate of heat transfer to the bottom. The principle is simple: any layer with lower thermal conductivity (or any added air gap) slows the flow of heat from the hot surface to the dough. Lowering the rack position away from the lower heating element helps in some oven geometries, especially in ovens with strong bottom elements. Reducing the oven temperature by 25°F (14°C) and extending the bake time is another common move — for thick loaves, the depth of heat matters more than the peak temperature, because the inside still needs time to reach doneness regardless of how hot the outside is."
      ]
    },
    {
      "heading": "Sugar and dairy revisited",
      "paragraphs": [
        "Sweet doughs deserve extra bottom protection because sugars on the pan-side surface will brown faster than the same exposure on lean dough. A standard sandwich loaf can usually take direct contact with a metal pan at 375°F (191°C) without trouble; a brioche or a cinnamon roll at the same setting can scorch the bottoms in under ten minutes. Lower the temperature for enriched bakes by default."
      ]
    },
    {
      "heading": "Reading the oven and adjusting in real time",
      "paragraphs": [
        "Most home ovens are not as accurate as their dial suggests. A 350°F setting can land anywhere from 325°F to 375°F in actual cavity temperature, and the heat distribution within the oven varies even more — corners and rack edges can run 15 to 25°F different from the center, depending on the oven's age, calibration, and design. An inexpensive oven thermometer placed inside the oven gives you a real reading and is worth the small investment. Once you know your oven's quirks (\"my oven runs 20°F hot, and the back-left corner is the hottest spot\"), you can adapt any recipe to compensate.",
        "Internal doneness temperatures help on the other end: for most lean wheat loaves, the bread is done when the center reaches around 200 to 208°F (93 to 97°C). Pulling at that temperature gives the crumb time to set without drying out the crust further. Enriched doughs may read a few degrees lower at doneness because their higher sugar and fat content slow the rate of moisture loss inside. An instant-read thermometer probe into the bottom of the loaf settles the question fast."
      ]
    }
  ],
  "related": [
    {
      "title": "Why Bread Rises",
      "path": "/bread-science/why-bread-rises"
    },
    {
      "title": "How Yeast Works in Baking",
      "path": "/bread-science/how-yeast-works"
    }
  ],
  "faqs": [
    {
      "q": "Does a silicone mat help with bottom burn?",
      "a": "A little. Silicone insulates more than bare metal because it has lower thermal conductivity, so the rate of heat transfer to the dough is slower. Expect a slightly longer bake to compensate — the loaf has to spend more time in the oven to reach the same internal temperature. Watch the top so it does not over-brown while you wait for the bottom to finish."
    },
    {
      "q": "Will a glass pan burn the bottom?",
      "a": "Glass behaves differently from metal. It conducts heat more slowly but stores it well once warm, so glass pans can give you a slower, more even bottom bake — often less prone to outright burn but more prone to slow over-browning if the oven is set too high. Drop the temperature by 25°F (14°C) compared to a metal-pan recipe and check earlier than the recipe says."
    }
  ]
};

export default function WhyBreadBurnsOnTheBottom() {
  return <ScienceArticlePage spec={SPEC} />;
}
