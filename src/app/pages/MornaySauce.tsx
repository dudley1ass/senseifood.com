import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "mornay-sauce",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Mornay Sauce: Recipe & Balance Guide",
  "subtitle": "Béchamel, Gruyère, and a whisper of mustard — the classic cheese sauce for vegetables and gratins, ruled by gentle heat once the cheese arrives.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🫕",
  "quickAnswer": "Mustard adds acid and cheese adds salt — so add the mustard in small spoonfuls and taste as the Gruyère melts in. Finish the consistency before chasing salt, because cheese carries its own salinity that only fully shows up after it has dissolved into the warm sauce.",
  "intro": "Mornay is a cheese sauce built on top of a white sauce called béchamel — flour cooked in butter to make a roux, then whisked with warm milk into a smooth pourable base. The flour stabilizes everything that comes next: it traps water in a starch network so that the cheese has somewhere structurally safe to melt into. Cheese then brings fat, protein, and savoriness in one ingredient. The Sauce Sensei wheel still applies — salt, acid, fat, sweet, and umami all shift as cheese melts in and as the base tightens by evaporation. Finish the body before you chase seasoning, because cheese carries salt that builds as it dissolves, and mustard adds sharpness that reads louder once the sauce thickens. Your goal is smooth flow without grain — silky enough to drape over cauliflower or run between layers of pasta — and the way to get there is low, patient heat. Once dairy proteins are in play, heroic boiling becomes your enemy: high temperatures cause those proteins to clump and squeeze water out, which is the technical version of \"my sauce broke and went grainy.\"",
  "sections": [
    {
      "heading": "Texture first: a smooth béchamel foundation",
      "paragraphs": [
        "Smooth béchamel makes smooth Mornay. Cook the roux — the flour-and-butter paste — until the raw, pasty flour flavor cooks off and the roux smells faintly toasty. Then add warm milk in stages, whisking each addition completely smooth before the next, so the starch granules in the flour have time to swell evenly and trap water without clumping. If lumps form, work them out before any cheese touches the pan. Cheese cannot fix a gritty base — it can hide grit briefly while the sauce is hot, but the moment it cools on the plate, the gritty texture comes back to the surface. Strain the base through a fine mesh sieve if you are feeding a crowd or serving in a fine-dining context where visual uniformity matters; a quick pass catches rogue clumps that would otherwise become little nodes of graininess in the finished sauce."
      ]
    },
    {
      "heading": "Cheese incorporation: heat, motion, and patience",
      "paragraphs": [
        "Add cheese off the heat or over very gentle warmth, stirring steadily until the cheese melts. Boiling after cheese is in the sauce invites graininess, because the casein proteins (the main milk proteins, which are what make cheese melt smoothly in the first place) tighten under high heat and squeeze out the water and fat that were dispersed evenly through the sauce. Think of cheese as a sensitive guest you are welcoming in calmly. Gruyère melts with body and a nutty savor — it has the right balance of fat, protein, and acidity to give a smooth, pourable result. Pre-grated bags of cheese often include a dusting of starch (potato or cellulose-based) to keep the shreds from clumping in the bag — that anti-caking starch changes how the cheese melts, often making the sauce slightly grainier than it would be from a block. Grate fresh from the block when you care about texture."
      ],
      "tip": "If the sauce tightens too much as cheese goes in, thin with warm milk in small splashes rather than turning the burner up. Heat is what makes the problem; more heat does not fix it."
    },
    {
      "heading": "Mustard, acid balance, and salt sequencing",
      "paragraphs": [
        "Mustard brightens Mornay and cuts the rich coating of cheese-on-cheese — but it brings acid, and acid in dairy can curdle if you go too hard. Add mustard in small spoonfuls, taste after each, and remember that the cheese has already brought some acid and a good amount of salt to the party. Dijon (smooth, sharp, made with white wine) behaves differently from dry mustard powder (more pungent, takes a moment to bloom in liquid). Start with less than you think and adjust upward. Salt last in spirit even if you put a little salt into the béchamel early — the cheese is going to move the salinity needle a lot, and you cannot subtract it. Taste the sauce after all the cheese is in and the sauce has rested a minute, because warm cheese keeps releasing flavor for a beat after melting."
      ],
      "bullets": [
        {
          "title": "Nutmeg and white pepper",
          "text": "These are the traditional background spices — tiny amounts, freshly grated where possible. They should read as warmth and depth, not as anything you can specifically identify on the plate. If guests ask what spice is in your Mornay, you used too much."
        }
      ]
    },
    {
      "heading": "Holding, skinning, and service recovery",
      "paragraphs": [
        "Cheese sauces form a skin on top as they sit, because water evaporates from the surface and proteins concentrate into a thin film. For short holds, press a piece of parchment or plastic wrap directly to the surface to block evaporation. In a restaurant setting, hold the sauce in a narrow bain-marie (a hot water bath) with gentle, occasional stirring; the indirect heat keeps the temperature stable without anywhere overheating. Re-thin with warm milk while whisking — never blast heat to loosen, because that is the same heat that breaks the sauce. If a sauce does break during holding, lower the heat, add a splash of warm milk, and whisk steadily to rebuild. A teaspoon of cold butter off heat can sometimes help reanchor the shine — but still one change at a time so you can see which fix worked."
      ]
    },
    {
      "heading": "Pairing and portion discipline",
      "paragraphs": [
        "Mornay loves vegetables with structure — cauliflower, broccoli, chard, leeks — and starch anchors like gratins, macaroni and cheese, and croque monsieur. If the dish underneath is wet (under-drained pasta or vegetables blanched without being patted dry), your sauce reads thinner and blander, because the surface water mixes with the cheese sauce and dilutes it on the plate. Salt and intensity drop together. Finish a gratin under the broiler only when the sauce layer is even across the whole top; uneven thin spots scorch and turn bitter while the neighboring inch-deep section still looks pale and waiting."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why did my Mornay turn grainy after I added cheese?",
      "a": "Almost always one of three things: too much heat after the cheese went in (the proteins clenched and squeezed out their water), a sudden acid hit while the sauce was already hot (mustard or wine dumped in at the wrong moment), or low-quality pre-grated cheese carrying anti-caking starch that did not play well with the dairy. To rescue, lower the heat, add warm milk gradually, and whisk patiently. To prevent next time, melt cheese gently and never bring a finished Mornay back to a full boil."
    },
    {
      "q": "Can I make Mornay without mustard?",
      "a": "Yes — mustard is balance and lift, not structural. You can skip it entirely and rely on the cheese alone for character, or replace its acid edge with a smaller amount of fresh lemon juice or a quick reduction of mild vinegar. The sauce will read slightly richer and less zippy, which can be exactly right for a delicate vegetable like cauliflower."
    },
    {
      "q": "How do I thin Mornay for a soupier mac-and-cheese style?",
      "a": "Increase warm milk in the béchamel before you add the cheese, so the base is looser to begin with. You can thin afterward by adding more warm milk, but it changes how the salt reads — every spoon of milk dilutes the dissolved cheese, and a sauce that was nicely seasoned suddenly feels slightly under-salted. Set the final thickness, then retaste salt at the end."
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
    "sauceId": "cheese-mornay"
  }
};

export default function MornaySauce() {
  return <ScienceArticlePage spec={SPEC} />;
}
