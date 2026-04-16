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
  "intro": "Pairing is temporal. The same sauce that loves a poached protein can fight a char-heavy crust because the palate timeline stacks peaks instead of alternating them.",
  "sections": [
    {
      "heading": "Maillard load on protein vs acid in sauce",
      "paragraphs": [
        "Heavy sear brings bitter melanoidins; sharp sauce adds another peak. Reduce one dimension or add fat/sweet bridge."
      ]
    },
    {
      "heading": "Temperature at contact",
      "paragraphs": [
        "Cold sauce on screaming-hot meat flashes volatile aromatics away while fat reads heavy. Temper sauce closer to protein surface temp."
      ]
    },
    {
      "heading": "Sequence in composed bites",
      "paragraphs": [
        "Thin sauce under slices reads integrated; thick glaze on top reads separate—design for fork behavior."
      ]
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
