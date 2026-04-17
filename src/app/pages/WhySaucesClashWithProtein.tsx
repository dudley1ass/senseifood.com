import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Full article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  "slug": "why-sauces-clash-with-protein",
  "segment": "sauce-science",
  "categoryLabel": "Sauce Science",
  "title": "Why Sauces Clash With Protein (Pairing Science)",
  "subtitle": "Intensity, fat level, and Maillard spectrum need to align across the bite timeline.",
  "readTime": "8 min read",
  "level": "Pairing physics",
  "emoji": "🥩",
  "fixRecipe": {
    "category": "baking",
    "problem": "general"
  },
  "quickAnswer": "Clash is often contrast without bridge: seared bitter crust + sharp acid + sweet glaze overloads sequence. Match weight, bridge with shared brown notes, and stagger peaks of salt/acid.",
  "intro": "A composed plate is not one flavor—it is a sequence. Protein brings fat, browned-bitter notes, and savory depth; sauces bring acid, sweetness, emulsified richness, and aromatics. Clash happens when several strong peaks arrive at once (bitter plus sharp plus sweet) or when textures fight (silky emulsion on dry lean meat). Good pairings share a frequency range: a little of the sauce’s brown sugar echoes the sear, the acid is timed to cut fat instead of screech across it, and salt is placed so it amplifies both sides. This guide breaks down the usual collision modes—Maillard load, temperature mismatch, and thickness at contact—so you can adjust sauces like you adjust seasoning: with intent, not hope.",
  "sections": [
    {
      "heading": "Maillard load on protein vs acid in sauce",
      "paragraphs": [
        "Deep sear and long reduction both push roasted, bitter-tending melanoidins. If your sauce also leans on reduced wine, charred allium, or aggressive caramel, you can stack two bitter anchors without a sweet or creamy bridge. The palate reads confusion: nothing feels like the “main note,” so each bite argues.",
        "Fixes are reduction-of-intensity or addition-of-bridge: choose either less sear or a mellower sauce base; add a controlled sweet (fruit, mirin used thoughtfully) or dairy/emulsion fat to bind the edges; or lift umami with a small amount of glutamate-rich ingredients so salt does less heavy lifting."
      ],
      "bullets": [
        {
          "title": "Taste the protein alone first",
          "text": "If the meat is already loud, the sauce should not compete in the same octave—lower acid or lower roast notes."
        },
        {
          "title": "Herb overlap",
          "text": "Rosemary on the chop and rosemary in the sauce can harmonize; mismatched herb families can feel like two different dishes on one fork."
        }
      ]
    },
    {
      "heading": "Temperature at contact",
      "paragraphs": [
        "Temperature changes volatility. A cold chimichurri on scorching steak can flash off aromatics before you taste them, leaving mainly acid and oil. Conversely, a butter-emulsion sauce that is too hot can feel thin and greasy on the tongue because fat separates perceptionally from the protein’s chew.",
        "Temper toward closeness: warm the sauce to near service temperature of the meat for emulsions; for bright herb sauces, consider spooning onto rested slices so the meat surface is not still radiating enough heat to obliterate delicate top notes."
      ]
    },
    {
      "heading": "Sequence in composed bites",
      "paragraphs": [
        "Thickness changes where flavor lands. A thin jus pooled under slices integrates into every bite; a thick glaze painted on top can taste like dessert-on-meat unless sweetness and acid are balanced for that placement. Think about fork behavior: will diners drag through sauce, or lift meat through it?",
        "Design one primary contrast per bite—acid *or* sweet spike *or* crunchy garnish—not all three unless you have fat and umami holding the center."
      ]
    },
    {
      "heading": "Sides as hidden sauce",
      "paragraphs": [
        "Mashed potatoes, polenta, and rice are often the real moderators: they sponge acid and carry fat. If you omit starchy sides, the same sauce can suddenly feel aggressive on protein alone. When plating lean, account for that missing buffer or reduce sauce intensity."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why does the same sauce work on chicken but not beef?",
      "a": "Fat level, myoglobin flavor, and sear depth shift the backdrop. A sharp caper-brown butter may read bright on mild poultry but harsh on a heavily charred ribeye unless you add sweetness or reduce acid."
    },
    {
      "q": "Is “clash” the same as overpowering?",
      "a": "Not exactly. Overpowering is volume; clash is conflicting peaks. A sauce can be quiet and still clash if its acid fights the protein’s bitter edge without a bridge."
    },
    {
      "q": "Does plating order matter at home?",
      "a": "Yes. Sauce underneath integrates; sauce on top reads separate. Family-style service also mixes juices—plan reductions knowing bowls will mingle on the plate."
    }
  ],
  "related": [
    {
      "title": "Umami Axis Beyond Salt, Acid, Fat, Sweet",
      "path": "/sauce-science/umami-axis-beyond-salt-acid-fat-sweet"
    },
    {
      "title": "Salt as Amplifier, Not Only Salty",
      "path": "/sauce-science/salt-as-amplifier-not-only-salty"
    },
    {
      "title": "Temperature: The Silent Killer of Sauces",
      "path": "/sauce-science/temperature-silent-killer-sauces"
    },
    {
      "title": "Emulsion vs Non-Emulsion Sauces",
      "path": "/sauce-science/emulsion-vs-non-emulsion-sauces"
    }
  ]
};

export default function WhySaucesClashWithProtein() {
  return <ScienceArticlePage spec={SPEC} />;
}
