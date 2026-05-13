import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "garlic-soy-sauce",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Garlic Soy Sauce: Recipe & Balance Guide",
  "subtitle": "Soy, garlic, and oil — a fast umami condiment and finishing drizzle that lives or dies on heat control.",
  "readTime": "8 min read",
  "level": "Recipe guide",
  "emoji": "🧄",
  "quickAnswer": "Garlic burns faster than almost any other aromatic — sweat it gently in oil before the soy ever hits the pan, or you sear bitterness into the fat that nothing else will hide. If the finished sauce ends up too salty, dilute with water or stock and reduce gently rather than dumping in sugar; salt and sugar do not cancel each other, they just stack on top of each other.",
  "intro": "This is a sauce dominated by umami (the deep savory taste that comes from glutamates in fermented soy and that lingers on the tongue longer than other flavors) with a heavy salt channel because soy sauce is, by weight, very salty. Oil carries the garlic aromatics — fat is a much better solvent for the sulfur compounds responsible for garlic flavor than water is — and acid is usually absent unless you intentionally introduce a small splash of rice vinegar or citrus. The Sauce Sensei wheel helps you see how far \"left\" toward salty you are pushed compared to how deep the umami glow reads on your tongue. Small-volume oil sauces punish high heat: garlic goes from sweetly nutty to bitter and acrid in about ten seconds at high temperatures, and soy reduced too far on a dry pan concentrates the salts into harsh spikes. Think of this as fast infusion and gentle finish, not long boiling, unless you are deliberately reducing a measured amount on purpose. For a noodle bowl, taste the sauce against plain rice or wheat noodles — soy that works on a spoon can still overwhelm a quiet bowl of starch until a splash of water or stock spreads the salinity across the whole serving. A final scatter of scallions or cilantro at the end adds aroma compounds that fade fast under heat, and soy alone cannot replace them.",
  "sections": [
    {
      "heading": "Aromatics: garlic color is flavor destiny",
      "paragraphs": [
        "Infuse the oil with garlic without hard browning — unless you specifically want the sharp, almost acrid flavor of intentionally toasted garlic, which works in some Korean and Sichuan styles. For most table sauces, you want garlic that is pale to light gold, where the natural sugars have caramelized just enough to add sweetness but the proteins have not gone past the deep-brown stage where Maillard chemistry tips into bitter compounds. How you cut the garlic matters more than how long you cook it: a single thick slice browns slowly, a mince browns faster, and microplaned garlic (grated on a fine rasp into a wet paste) burns almost the instant it touches hot oil because it has no thermal mass and maximum surface area exposed to the heat."
      ]
    },
    {
      "heading": "Soy timing and heat",
      "paragraphs": [
        "Adding soy sauce to a ripping-hot empty pan can flash harsh, almost burnt-caramel notes from the sugars and amino acids that give soy its complexity — they Maillard too fast and skip the pleasant stage. Lower the heat before the soy hits, or add soy off the heat entirely for the freshest profile. If you want a sticky glaze, reduce a measured small puddle of soy attentively — the late stage of reduction (after most water has left) concentrates salts and proteins much faster than the early stage, so a sauce can go from glossy to over-salted in a minute. If you want a loose drizzle, stop well before any meaningful reduction; the goal is fresh, sharp umami, not deep cooked notes."
      ],
      "tip": "Taste soy from the bottle every so often — different brands vary wildly in salinity and sweetness, so a soy that worked perfectly in last month's recipe can suddenly read too salty when you open a new brand."
    },
    {
      "heading": "Dilution and rebalancing",
      "paragraphs": [
        "If the finished sauce is too salty for the dish, dilute with water or unsalted stock and re-reduce gently — that is genuinely the only honest fix. Or, if you cannot rebuild from scratch, balance with a measured touch of sweet and fat at service without turning it into candy-soy. Fat rounds salt perception because oil coats the tongue and slightly numbs taste-bud sensitivity to sodium; sweet partly distracts from harsh edges. But always verify you have actually crossed the salt threshold before piling sugar on top, or you end up with a sauce that is both very salty and very sweet — which is its own particular hell."
      ],
      "bullets": [
        {
          "title": "Chili heat",
          "text": "If you add chili, remember that capsaicin (the molecule responsible for chili heat) and salt both light up together on the tongue — taste in small increments, because they amplify each other's loudness rather than cancel out."
        }
      ]
    },
    {
      "heading": "Optional acid and aroma finishes",
      "paragraphs": [
        "A few drops of rice vinegar or fresh lime can lift the whole sauce without dominating — add the acid after the salt is where you want it, because acid changes how you read salt and can fake-shift your sense of saltiness in a misleading direction. Sesame oil should be a last-second finish; heat destroys its delicate top notes within seconds, because the aroma compounds that smell so toasty are also volatile and flash off fast. Scallions, ginger, or citrus zest add high volatile aromatics — molecules that evaporate easily and reach your nose, which is where most of \"flavor\" actually lives — that soy alone cannot supply no matter how long it simmers."
      ]
    },
    {
      "heading": "Storage and safety notes",
      "paragraphs": [
        "Garlic in oil at room temperature is a known food-safety concern — raw garlic carries spores of Clostridium botulinum, and the low-oxygen, low-acid environment of oil at warm temperatures is exactly where those spores can grow into the toxin that causes botulism. Refrigerate any garlic-oil sauce promptly and treat it as a short-lived ingredient unless you are following a tested preservation method (with acid or salt levels that suppress bacterial growth). For make-ahead, keep the garlic, oil, and soy components separate until service whenever you can. This is a real risk, not a theoretical one — small home batches of garlic in oil have caused real outbreaks."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why does my garlic soy taste bitter?",
      "a": "Garlic burned in the oil, or soy reduced too far onto hot metal. When sugars and proteins in either ingredient cross a certain temperature, they tip from the pleasant nutty-brown stage into burnt territory — and burnt is irreversible. Start the garlic on gentler heat next time, and add the soy when the pan is at a moderate temperature, not when it is ripping hot."
    },
    {
      "q": "Can I thicken garlic soy for a clingy glaze?",
      "a": "Cornstarch slurry — a spoon of cornstarch stirred into cold water before going into the warm sauce — gives body without much extra flavor. Reduction also thickens, but it climbs the salt concentration fast because as water leaves, the salt that was dissolved in it stays behind in a smaller pool. Pick one approach and pay attention, or you can end up with a glaze that is both gluey and over-salted at the same time."
    },
    {
      "q": "Is low-sodium soy always better?",
      "a": "Lower sodium, not automatically better flavor. Reducing salt in soy also tends to reduce some of the umami payload, because both sit in the same fermented liquid. When you swap to low-sodium soy, you may need to compensate with a touch more soy by volume, a bit of MSG (which is the same glutamate that builds up naturally in aged soy), or a splash of fish sauce for savory depth — and then re-taste everything else."
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
    "sauceId": "soy-garlic"
  }
};

export default function GarlicSoySauce() {
  return <ScienceArticlePage spec={SPEC} />;
}
