import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-bread-tastes-bland",
  "segment": "bread-science",
  "categoryLabel": "Bread Science",
  "title": "Why Bread Tastes Bland",
  "subtitle": "A short fermentation, a shy hand with salt, and a crust that never browned all stack up into flat flavor—even when the crumb looks beautiful.",
  "readTime": "8 min read",
  "emoji": "🍞",
  "fixRecipe": {
    "category": "bread",
    "problem": "general"
  },
  "quickAnswer": "Bread tastes bland when the fermentation was too quick to build up the tangy acids and fruity aromas the yeast and bacteria normally produce, when the salt is too low to make the rest of the flavor pop, and when the crust stayed pale because of too much steam, a cool oven, or a dough without enough sugar to brown well. Fix it by stretching out the bulk rise (or doing a cold rest in the fridge), weighing the salt instead of measuring by spoon, and finishing the bake with enough heat and a dry oven so the crust can build real color.",
  "intro": "The flavor of a lean loaf of bread is not hiding in a secret spice rack—it comes from time, salt, and crust browning acting on the amino acids and sugars that are already in flour. A loaf can look textbook-perfect and still eat like a piece of cotton when those three things never got their hours. This guide ranks the usual suspects—the yeast schedule, the grams of salt, the dough temperature, the steam in the oven, and the scoring—so you can fix bland bread without randomly throwing more honey at it. Your timeline is an ingredient just like flour is. A small tasting protocol helps: take a bite of just the crumb and then a bite of just the crust at room temperature; bread straight from the fridge mutes the aromas unfairly. Note your preferment percentage (the share of total flour that you fermented in advance), your total bulk fermentation time, and the final internal temperature, because under-baked lean bread can taste oddly raw and sweet rather than nutty. If you are baking an enriched dough, note the dairy fat too, because butter and milk coat your tongue differently than lean bread does. When you adjust salt, move in tiny steps—0.1% increments based on the flour weight—and rebake each time; bigger jumps hide which threshold actually mattered. Pair every timeline change with a quick crumb photo so you can correlate how open the crumb is with how deep the flavor turned out, instead of guessing from volume alone.",
  "sections": [
    {
      "heading": "Fermentation time and organic acids",
      "paragraphs": [
        "Yeast and bacteria produce acids and alcohols that quietly rearrange how your tongue perceives sweetness and grain notes. A rushed dough at warm room temperature can puff up beautifully with gas and still come out flavor-thin, because the slow flavor chemistry never had time to happen. Cold retardation (parking the shaped or bulked dough in the fridge for several hours up to a couple of days) slows the yeast more than the bacteria, especially in sourdough, and usually deepens flavor without forcing you to stay up late. Over-yeasted fast doughs are a special trap: they can smell strongly alcoholic and still taste hollow, because the volatile aroma compounds blew off during the aggressive proof."
      ],
      "tip": "Log the actual temperature of the dough and how much its volume has grown, not just the minutes on the clock—an hour at 62°F versus an hour at 78°F is a completely different flavor path."
    },
    {
      "heading": "Salt as a flavor threshold",
      "paragraphs": [
        "Salt does more than make bread taste salty: it suppresses bitter notes and makes subtle caramel, nutty, and grain flavors readable. An under-salted loaf tends to read sweet-flat or even cardboard-flat depending on the formula. Weigh the salt to the gram—measuring by teaspoon is one of the most common sources of blandness in scaled-down home batches, because a teaspoon of fine salt and a teaspoon of flaky salt have very different weights. Toppings like sesame or poppy seeds can disguise an under-salted interior until you bite into the center of the loaf alone."
      ]
    },
    {
      "heading": "Maillard crust and reducing sugars",
      "paragraphs": [
        "A browned crust is concentrated flavor: the Maillard reaction (the chemistry between sugars and amino acids that builds roasted, savory aromas) generates compounds called Strecker aldehydes and melanoidins, which carry the roasted, nutty notes that are missing from a pale interior. Too much steam late in the bake can keep the crust chewy and stuck on pale; on the other end, edges that burn while shoulders stay pale just signal uneven heat in the oven, not a personal failing. If your flour seems shy on browning sugars (it happens), a touch of diastatic malt (malted barley flour with active enzymes that release sugars from starch), a teaspoon of honey or malt extract, or a longer cold proof all increase the supply of reducing sugars the crust needs for color."
      ]
    },
    {
      "heading": "How Fix My Recipe helps",
      "paragraphs": [
        "Bread mode shows where your hydration and enrichment sit relative to typical recipes—both of which interact strongly with fermentation speed and flavor. Blandness paired with a gummy crumb is a different diagnosis than blandness with a beautifully open crumb. Either way, the rule is the same: change only one variable per bake (salt percent, cold proof length, or final bake temperature curve) so you actually know what fixed it."
      ]
    },
    {
      "heading": "Closing the loop on flavor",
      "paragraphs": [
        "Bland bread is often a time problem dressed up as a spice problem. The crumb looks fine because the gas showed up to the party on schedule, while the acids and fruity esters from fermentation were stuck in traffic. Salt and a real, properly-browned crust are the moments where a quiet dough finally speaks up. Change one timeline or salt step per bake, then describe the loaf to yourself in plain words—was it nutty or sweet-dough-flat? Was the crust crackling or just chewy? That kind of plain-English story will tell you more about taste than any photo checklist ever will."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Does oil make bread taste bland?",
      "a": "Fat can mute some volatile aromas, but enriched breads (with oil, butter, or eggs) should still taste rounded and rich. If your enriched loaf tastes flat, check the salt and the fermentation time first before blaming the oil."
    },
    {
      "q": "Could my flour just be too old?",
      "a": "Rancid fat in old whole-grain flour usually tastes bitter or cardboard, not just quiet, so true bland flavor is more often a fermentation or salt issue. That said, weak older wheat can feel dull and lifeless—if you suspect the flour, do a side-by-side bake with a freshly opened bag and trust your tongue."
    }
  ],
  "related": [
    {
      "title": "Why Bread Has No Flavor",
      "path": "/bread-science/why-bread-has-no-flavor"
    },
    {
      "title": "How Yeast Works in Baking",
      "path": "/bread-science/how-yeast-works"
    }
  ]
};

export default function WhyBreadTastesBland() {
  return <ScienceArticlePage spec={SPEC} />;
}
