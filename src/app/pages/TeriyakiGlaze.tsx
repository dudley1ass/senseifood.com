import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "teriyaki-glaze",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Teriyaki Glaze: Recipe & Balance Guide",
  "subtitle": "Soy, sugar, and mirin — a high-umami, sweet-salt glaze that lives in a narrow band between glossy and burnt.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🍯",
  "quickAnswer": "Sugar starts to caramelize (the chemistry of sugar molecules darkening on their own under heat) as the water leaves the pan, and that caramelization can flip from delicious to acrid in seconds at the end. Pull the pan from the heat before the glaze goes dark — bitter is one step past glossy on the same heat curve. Keep the pan moving on uneven burners to spread the heat.",
  "intro": "Teriyaki-style glazes combine soy sauce umami, sweeteners, and often the gentle acidity and aroma of mirin (a sweet Japanese rice wine made for cooking, with a low alcohol content and natural fruity-sweet character). The Sauce Sensei wheel helps separate the salt pull from the umami depth — they stack on top of each other, but they are not the same lever, and confusing them leads to over-salting when you really wanted more savoriness. You are building a sticky, sheen-forward sauce that has to survive contact with high heat on grilled or seared protein without turning into tar. That means respecting the reduction rate (how fast water is leaving the pan), managing sugar's tendency to scorch on dry pan walls, and finishing with small acid adjustments after the salt is right. Home cooks often win on flavor and lose on timing — the recipe lands beautifully on a Tuesday and turns into burnt syrup on a Friday because the burner ran hotter. This guide foregrounds heat behavior so the glaze stays in the glossy band. A cold-spoon test helps confirm thickness: if a small drop of glaze sets hard and brittle on cold metal in seconds, you are closer to candy than to glaze and the next minute of reduction will tip you over.",
  "sections": [
    {
      "heading": "Heat and sheen: staying in the glossy band",
      "paragraphs": [
        "You want a glaze that flows just enough to coat a piece of chicken or salmon — not a brittle candy shell that crackles when you bite. Overheated sugar moves from caramel notes (deep, slightly bitter-sweet, complex) to acrid burnt notes (sharp, harsh, unmistakably scorched) quickly, especially in thin layers on hot metal where the surface temperature can spike far above the bulk temperature of the sauce. Keep the pan moving or control the burner output carefully; watch color and smell as much as the clock. If you reduce too dry, the soy proteins and the sugars together can scorch in small spots, which then taint the rest of the batch. A splash of water buys forgiveness if you catch the early signs — rebuild the sheen with gentle heat from there."
      ]
    },
    {
      "heading": "Balance: salt, sweet, umami, and late acid",
      "paragraphs": [
        "If the glaze tastes flat, verify the salt threshold before chasing more sweetness. Soy sauce brings both salt and umami at the same time, so adding more soy to fix flatness can over-salt the sauce when really the problem is just that the existing salt has not registered yet on your tongue. If the glaze tastes cloying — too sweet, sticky — a measured acid hit after the salt is plausible can lift the whole thing without reading as sour. Rice vinegar or fresh citrus work; add the acid in drops and taste. Acid added before salt tends to mislead the tongue in soy-led builds, because acid changes how you read every other taste, including salt."
      ],
      "tip": "If it tastes flat, consider a tiny acid touch after the salt threshold is correct — not before. Acid amplifies what is already there; it cannot create depth that is missing."
    },
    {
      "heading": "Mirin, sake, and alcohol handling",
      "paragraphs": [
        "Mirin contributes sweetness and a gentle fruity aroma — different grades vary noticeably in their sugar and salt content (true honjozo mirin is naturally fermented and complex, while \"mirin-style condiment\" is often just sweetened rice wine with corn syrup added). Taste your specific bottle before scaling a recipe blindly. Briefly boiling off harsh alcohol heat matters when you want clean aroma in a fast glaze, because the raw alcohol bite (mostly from ethanol vaporizing) can mask the more subtle sweet and fermented notes. If you substitute honey or brown sugar for the mirin, expect faster browning — both of those are sweeter and more reactive with heat than the sugars in mirin, so lower the heat accordingly and watch more carefully near the end."
      ]
    },
    {
      "heading": "Protein glazing technique",
      "paragraphs": [
        "Pat the protein dry before glazing so the sauce sticks instead of washing off into the pan. A wet surface adds water to the glaze on contact, diluting it and making it slide rather than cling. Build the glaze in layers: brush, flip, reduce any pan-side sauce, brush again. One thick flood of glaze at the start tends to run off; multiple thin layers build up into a glossy coat that adheres firmly. Cornstarch slurry (cornstarch dissolved in cold water before going into warm sauce) changes the behavior of the glaze: it gives a thicker cling and a slightly different shine compared to pure reduction. Match the thickness to how you want the sauce to ride on the food — thinner for a glazed grilled chicken thigh, thicker for a teriyaki sauce drizzled over a rice bowl."
      ]
    },
    {
      "heading": "Storage and reheating",
      "paragraphs": [
        "Sugar-heavy glazes crystallize or tighten in the fridge — the sugars come out of solution as the temperature drops, and what was a smooth pourable glaze can set firm. Reheat gently with a small splash of water and whisk to restore the shine. The microwave works in bursts if you have to use one, but even heat reduces the risk of scorching one spot while another stays cold. If the stored glaze tastes flat when reheated, refresh it with a tiny splash of fresh soy sauce or freshly grated aromatics (ginger, garlic) at reheat — do not default to more sugar. The flat taste usually comes from volatile aromas that escaped during storage, not from missing sweetness."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why is my teriyaki bitter?",
      "a": "The sugar was pushed past caramel into burnt territory, or soy reduced onto dry pan hot spots and the soy proteins scorched. Both create bitterness that the rest of the sauce cannot hide. Dilute the current batch, clean any burnt film off the pan if you can, and rebuild on gentler heat. The next batch should ideally be reduced over medium-low with frequent pan movement, not high heat and walking away."
    },
    {
      "q": "Can I thicken teriyaki without long reduction?",
      "a": "Yes — a small cornstarch slurry added after the flavor is balanced gives body fast, in seconds rather than minutes. Slurry does not replace the flavor development that comes from modest reduction (the integration of soy, sugar, and aromatics), but it gives you the clinging mouthfeel without the risk of scorching. A reasonable approach is partial reduction for flavor, plus a small slurry at the end for body."
    },
    {
      "q": "Is teriyaki always gluten-free?",
      "a": "No — traditional soy sauce contains wheat, because soy sauce is fermented from a combination of soybeans and wheat. If you need a gluten-free version, use tamari (a wheat-free Japanese soy sauce, sometimes labeled \"gluten-free\" explicitly) or a certified gluten-free soy sauce. Mirin grades also vary — some include wheat-based ingredients in the cheaper styles. Read labels carefully if gluten is a strict need."
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
    "sauceId": "soy-teriyaki"
  }
};

export default function TeriyakiGlaze() {
  return <ScienceArticlePage spec={SPEC} />;
}
