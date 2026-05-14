import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-humans-crave-junk-food-more-than-vegetables',
  segment: 'nutrition-science',
  categoryLabel: 'Human appetite · Brain & behavior',
  title: 'Why Humans Crave Junk Food More Than Vegetables',
  subtitle:
    'It is not because you are “weak”—it is because calorie-dense, fast-eating, salt–fat–sugar combos light up reward circuits while many vegetables ask for chewing time, bitterness tolerance, and slower gut feedback before they feel “exciting.”',
  readTime: '9 min read',
  emoji: '🧠',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Your ancestors lived in scarcity: brains that noticed sugar, fat, and salt quickly out-reproduced brains that ignored them. Modern snacks are engineered to hit those detectors in milliseconds—while broccoli is fiber-forward, sometimes bitter, and rarely delivers calories as fast as a chip disappears on your tongue. That mismatch is biology meeting food science, not a moral score.',
  intro:
    'This article is not a lecture about “clean eating.” It is a map: energy density (calories per bite), oral processing speed (how fast food vanishes), sensory contrast (crunch then melt), dopamine-friendly novelty (variety packs beat one-note bowls), and how vegetables earn their keep through fiber and chewing time. When you see the mechanisms, you can design meals that still feel satisfying without pretending your brain is a spreadsheet.',
  sections: [
    {
      heading: 'Calories your brain can count before your stomach weighs in',
      paragraphs: [
        'Many hyper-palatable snacks pack a lot of energy into textures that melt, dissolve, or crunch away quickly—so you swallow a surprising number of calories before stretch receptors and gut hormones have much to say. Vegetables usually add bulk and fiber first, which is great for fullness later, but not the same instant “reward per second” profile your attention economy notices when you are tired.',
      ],
    },
    {
      heading: 'Bitterness, chewing, and the “is this safe?” guess',
      paragraphs: [
        'Humans are cautious about bitterness because many toxic plant alkaloids read bitter. Childhood sensitivity is normal; repeated calm exposure still works better than pressure. Meanwhile, salt–fat–sugar synergy hits liking fast and delays sensory fatigue—the bliss-point idea—so the same brain that hedges on kale may say yes quickly to a fry.',
      ],
    },
    {
      heading: 'Dopamine is about anticipation, not only pleasure',
      paragraphs: [
        'Cue → expect → bite → reward: that loop strengthens with reliable timing (open bag, hear crunch, taste salt). Vegetables can be delicious, but they rarely deliver the same engineered timing unless you build contrast and fat intentionally—think roasted edges, acids, and sauces—because they are not trying to be a bag of chips.',
      ],
    },
    {
      heading: 'What to do with this information',
      paragraphs: [
        'If you want more vegetables without a civil war inside your head, pair them with protein and fat anchors, roast for Maillard browning, add acid to lift sweetness perception, and pre-portion snacks so “one more handful” is not the default ending. SenseiFood’s other human-appetite reads connect stress, ultra-processed design, and flavor chemistry—use them together, not as a replacement for medical care if you need it.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Does this mean vegetables are “bad food”?',
      a: 'No—fiber, potassium patterns, and phytochemical diversity still matter for long-term health. The point is that “why is this hard?” has real mechanisms, not moral failure.',
    },
    {
      q: 'Is food addiction the same as drug addiction?',
      a: 'There are overlapping brain systems (reward, habit), but food is not identical to substances—context, sleep, stress, and environment often matter enormously. If you are struggling in ways that scare you, talk to a clinician.',
    },
  ],
  related: [
    { title: 'Why Ultra-Processed Food Works With Your Biology', path: '/nutrition-science/why-ultra-processed-food-works-with-your-biology' },
    { title: 'Why Evolution Tuned Us for Sugar and Fat', path: '/nutrition-science/why-evolution-tuned-us-for-sugar-and-fat' },
    { title: 'Why Processed Foods Are Easy to Overeat', path: '/nutrition-science/why-processed-foods-are-easy-to-overeat' },
  ],
};

export default function WhyHumansCraveJunkFoodMoreThanVegetables() {
  return <ScienceArticlePage spec={SPEC} />;
}
