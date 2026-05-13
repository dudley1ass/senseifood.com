import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: "why-ice-cream-gets-sandy",
  segment: "ice-cream-science",
  categoryLabel: "Ice Cream Science",
  title: "Why Ice Cream Gets Sandy",
  subtitle:
    "Grit on the spoon that isn't big ice crystals is usually lactose sand—microscopic crystals of the sugar found in milk dropping out of solution when your base is too rich in milk solids, the freezer runs warm, or the carton melts and refreezes.",
  readTime: "8 min read",
  emoji: "🏖️",
  fixRecipe: {
    category: "iceCream",
    problem: "icy",
  },
  quickAnswer:
    "When ice cream feels sandy or like fine polenta on your tongue, you're usually tasting tiny lactose crystals. Lactose is the natural sugar in milk, and unlike table sugar (sucrose), it doesn't dissolve very well in cold water. The thin film of unfrozen liquid between your ice crystals can only hold so much of it, especially when the recipe leans hard on milk powder or evaporated milk. Slow freezing, a warm freezer, or letting a carton melt and refreeze all push lactose past its limit. The practical fix is to swap part of your table sugar for corn syrup or glucose, ease back on the milk powder, let the base rest overnight before churning, and stop cycling the freezer door.",
  intro:
    "Grit on the spoon can mean two different problems, and people mix them up all the time. The first is big ice crystals—chunky bits of frozen water you can almost hear between your teeth. The second is lactose sand, a shower of microscopic milk-sugar crystals that feels more like very fine cornmeal dissolving on the tongue. They look similar from across the kitchen but they have completely different causes and fixes. This guide walks through how lactose (the natural sugar in milk) hits the limit of how much can stay dissolved, how the freezing curve and your stabilizers (gums and emulsifiers that thicken the base and hold water in place) change what crystallizes, and how the freezer-door habits at your house quietly rewrite the recipe. Your storage routine is part of the formula whether you wrote it down or not.",
  sections: [
    {
      heading: "Lactose solubility and concentrated milk solids",
      paragraphs: [
        "Lactose is the sugar that comes naturally from milk. Chemically it's a disaccharide—two simple sugar units linked together—and it dissolves in cold water far less readily than sucrose, the white granular sugar you keep on the counter. When you build a base that leans on dry milk powder, evaporated milk, or aggressive simmering to concentrate flavor, you are also concentrating the milk solids. The leftover liquid water in the frozen scoop can no longer hold all of that lactose in solution at freezer temperatures, and once it tips past the point where everything will stay dissolved—what chemists call supersaturation—tiny crystals start forming. You taste them as a sandy bloom that often shows up a few days after churning rather than right at the dasher, which is why the same batch can taste smooth on day one and gritty on day five.",
        "High-protein 'clean label' bases—the ones with short ingredient lists and no commercial gums—are common offenders because they don't carry enough corn syrup or glucose to share the water-binding workload with lactose. The fix is rarely to pour in more cream. It's to rebalance the sugar lineup and total solids so lactose stays comfortable in the thin syrupy film around your ice crystals.",
        "Cold blunts your perception of sweetness, which tempts you to add more table sugar so the finished pint tastes right. The trouble is that more sucrose also lowers the freezing point in ways you didn't plan for and shifts the makeup of the unfrozen liquid. A modest swap of some sucrose for glucose solids (corn syrup solids, dextrose, and similar) typically fixes sand more cleanly than just dumping in more white sugar.",
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
        "Ice cream is a partially frozen foam—a tangle of ice crystals, air bubbles, fat globules, and an unfrozen sugary syrup all woven together. Slow freezing or a too-warm freezer grows fewer, larger ice crystals inside the thin liquid channels between them. Sandiness travels alongside this problem because as those big crystals form, the leftover syrup around them concentrates, and the lactose in that syrup gets shoved even closer together. Letting a pint soften on the counter and then refreezing it doesn't reset anything—it locks more solutes into shrinking liquid pockets and gives lactose a fresh excuse to crystallize, even when the original recipe was perfectly balanced at draw.",
        "Draw temperature—the temperature your ice cream is at when it comes out of the machine—matters more than most people think. A warmer draw means more water still has to freeze later inside the carton, which usually means worse crystal control. Following the churn with a proper hardening step in the coldest part of the freezer (commercial cookbooks aim for roughly −10°F to −5°F, or about −23°C to −20°C) locks the small-crystal microstructure in place before everyday door openings start cycling the temperature.",
        "Those pale rings or wavy lines you sometimes see in store-bought pints are called heat-shock lines, and they aren't just cosmetic. They mark places where the surface partially melted and refroze on the truck or in your freezer, concentrating dissolved solids in those spots. That is exactly the kind of micro-environment where lactose finds enough of its neighbors to crystallize out and read as sand on the tongue.",
      ],
    },
    {
      heading: "Emulsifiers, stabilizers, and aging",
      paragraphs: [
        "Emulsifiers (like the lecithin that lives naturally in egg yolks, or the mono- and diglycerides in commercial blends) and hydrocolloids (the gum-style ingredients—locust bean gum, guar, carrageenan and friends) don't change the chemistry of lactose itself. What they do is hold water in place and slow the rate at which ice crystals can grow. With water more tightly bound and crystal growth slowed down, the unfrozen syrup is less likely to hit the harsh local concentration spikes that trigger sand when your freezer temperature swings.",
        "Aging—letting the finished base sit cold overnight before churning—gives proteins time to fully hydrate and lets dry milk solids and any gums completely dissolve. Skip the rest and you'll often taste a faint chalkiness on day one that turns into outright sand by day five, as the unfrozen syrup quietly equilibrates inside the carton.",
        "Home churners with long residence times can concentrate a thin film of mix on the dasher edges and bowl walls. Scrape that down and stir it through before judging texture, so the pint you taste is actually representative of the whole batch and not the edge layer that spent the most time freezing.",
      ],
    },
    {
      heading: "How Fix My Recipe helps",
      paragraphs: [
        "Ice cream mode in SenseiFood's Fix My Recipe debugger compares the sugar, dairy, and water numbers in your recipe against reference patterns tuned for smooth scoop and clean meltdown. Sandy-texture complaints tend to line up with one specific imbalance—too much non-fat milk solids relative to total sugars—and that becomes obvious once you enter your actual grams instead of guessing by volume.",
        "Change one variable per test batch: shift some sucrose to glucose solids, dial back the milk powder, or lower the hardening temperature. Then taste blind with someone else at the table. Sandy lactose is one of the easier flaws for two people to agree on—much more so than 'too sweet' or 'too rich,' which are notoriously personal calls.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can fat bloom feel sandy?",
      a: "Butterfat can sometimes throw off small waxy grains after a botched thaw or a rough churn, but those tend to feel greasy or crumbly between the teeth rather than crystalline like sand. When you're getting a fine, even grit in a milk-forward base, lactose crystals are almost always the right suspect to investigate first.",
    },
    {
      q: "Does alcohol fix sand?",
      a: "Alcohol lowers the freezing point of the base and can make the finished texture softer, but it's a blunt tool—it doesn't specifically target lactose, which is the actual source of the grit. You'll get further by rebalancing the sugar spectrum (some glucose alongside the sucrose) and easing off the milk powder before reaching for the bottle.",
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
