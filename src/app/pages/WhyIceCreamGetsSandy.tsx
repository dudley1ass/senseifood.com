import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: "why-ice-cream-gets-sandy",
  segment: "ice-cream-science",
  categoryLabel: "Ice Cream Science",
  title: "Why Ice Cream Gets Sandy",
  subtitle:
    "Grit that is not big ice crystals is often lactose sand—tiny sugar crystals from milk solids when concentration and temperature history push solubility over the edge.",
  readTime: "8 min read",
  emoji: "🏖️",
  fixRecipe: {
    category: "iceCream",
    problem: "icy",
  },
  quickAnswer:
    "Sandy mouthfeel in ice cream usually comes from lactose crystallizing in the unfrozen water phase when total solids (especially non-fat milk solids) are high, freezing is slow or warm, or the mix is heat-shocked after hardening. Balance MSNF, add corn syrup or glucose to dilute lactose, age the base, churn colder, and minimize melt-refreeze cycles.",
  intro:
    "Icy and sandy both read as grit, but they are different failures. Ice is water freezing into large crystals you can hear between your teeth; lactose sand is a shower of microscopic crystals that feel like fine polenta on the tongue and often show up in high-milk, moderately sweet bases. This guide explains solubility limits, freezing curves, stabilizer roles, and storage abuse so you can match the fix to the sensation. Your freezer habits are part of the recipe.",
  sections: [
    {
      heading: "Lactose solubility and concentrated milk solids",
      paragraphs: [
        "Lactose is a disaccharide with modest solubility compared with sucrose. As you concentrate skim-milk solids through evaporated milk, milk powder, or aggressive reduction, the unfrozen serum in frozen ice cream can hold less lactose in solution at sub-zero temperatures. When supersaturation nucleates, you get a sandy bloom that worsens over days in the freezer—not always immediately at the churn.",
        "High-protein clean label bases without enough bulk sugars or glucose polymers to share the water activity load are common sand culprits. The fix is rarely more cream; it is reshaping the sugar spectrum and total solids so lactose stays happier in solution.",
        "Sweetness perception is cold-suppressed, which tempts people to add more sucrose without realizing they also shifted freezing point and serum composition. A small glucose solids addition often fixes sand more cleanly than piling on table sugar alone.",
      ],
      bullets: [
        {
          title: "Corn syrup / glucose",
          text: "Small partial replacements of sucrose cut lactose supersaturation and improve scoop texture.",
        },
        {
          title: "Milk powder discipline",
          text: "Every extra tablespoon of NFDM raises lactose; weigh it and compare to trusted reference formulas.",
        },
      ],
      tip: "If sand appears only after week two in the home freezer, suspect temperature cycling more than the initial recipe.",
    },
    {
      heading: "Freezing path, ice fraction, and heat shock",
      paragraphs: [
        "Ice cream is a partially frozen foam. Slow freezing or warm freezers grow fewer, larger ice crystals in the aqueous lamellae, but sandiness can coexist when serum concentration spikes around those crystals. Repeated softening on the counter and refreezing concentrates solutes in pockets and retriggers lactose nucleation even if the base was perfect at draw.",
        "Draw temperature matters: warmer exit from the machine leaves more unfrozen water to manage in hardening. A proper −10°F to −5°F hardening step sets microstructure before weekly door openings abuse it.",
        "Heat shock lines in pints are not only cosmetic; they mark thermal history where local melts refreeze and solutes squeeze together. That is exactly where lactose finds friends to crystallize.",
      ],
    },
    {
      heading: "Emulsifiers, stabilizers, and aging",
      paragraphs: [
        "Emulsifiers (egg yolk lecithin, mono-diglycerides) and hydrocolloids (locust bean gum, guar, carrageenan blends) do not erase lactose chemistry, but they improve water immobilization and crystal growth kinetics so the system is less likely to hit harsh local supersaturation during temperature swings.",
        "Aging overnight hydrates proteins and fully dissolves dry milk solids and hydrocolloids; skipping aging shows up as slight chalk first, sand later as concentration equilibrates in the freezer.",
        "Homemade churns with long residence times can partially concentrate the film on the dasher edges; scrape and incorporate evenly so the draw is representative before you judge texture.",
      ],
    },
    {
      heading: "How Fix My Recipe helps",
      paragraphs: [
        "Ice cream mode compares sugar, dairy, and water bands to reference patterns for smooth scoop and meltdown. Sandy texture complaints often correlate with high MSNF relative to total sugars once you enter grams.",
        "Change one axis per test batch: glucose solids, milk powder, or hardening temperature. Blind-taste with a friend—sandy lactose is easier to agree on than too sweet.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can fat bloom feel sandy?",
      a: "Butterfat can form waxy grains after churn-out or abusive thaw, but it usually reads greasy or crumbly rather than crystalline sand; lactose is the prime suspect for fine grit in dairy-forward bases.",
    },
    {
      q: "Does alcohol fix sand?",
      a: "It lowers freezing point and can help texture, but it is not a targeted lactose fix; still use sugar spectrum and MSNF control.",
    },
  ],
  related: [
    { title: "Why Ice Cream Tastes Icy", path: "/ice-cream-science/why-ice-cream-tastes-icy" },
    { title: "Why Ice Cream Gets Icy", path: "/ice-cream-science/why-ice-cream-gets-icy" },
  ],
};

export default function WhyIceCreamGetsSandy() {
  return <ScienceArticlePage spec={SPEC} />;
}
