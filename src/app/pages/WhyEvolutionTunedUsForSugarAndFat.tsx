import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-evolution-tuned-us-for-sugar-and-fat',
  segment: 'nutrition-science',
  categoryLabel: 'Human appetite · Evolution',
  title: 'Why Evolution Tuned Us for Sugar and Fat',
  subtitle:
    'Sweetness once signaled ripe fruit and quick energy; fat signaled dense calories you could store—both were survival information. Modern portions arrive faster than those ancient feedback loops expected.',
  readTime: '9 min read',
  emoji: '🧬',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Natural selection cares about reproduction and survival, not beach photos. Systems that noticed sugar, enjoyed fat, and disliked many bitter toxins were adaptive for millions of years. Ultra-palatable modern foods are not “evil”—they are just mismatched to appetites built for scarcity, variability, and lots of chewing.',
  intro:
    'This article stays evolutionary without pretending we are identical to hunter-gatherers: environments differ, genetics vary, and culture matters. Still, the broad outline helps: sweetness as a safe-energy heuristic, fat as a calorie concentrator, bitterness caution, and why novelty and variety delay satiety. When you see the outline, modern marketing looks less like magic and more like engineering on top of old hardware.',
  sections: [
    {
      heading: 'Sweetness as a public signal of ripe calories',
      paragraphs: [
        'Fruit sugars advertise readiness; bitterness can signal “not yet” or “toxic risk.” Children are often more bitter-sensitive—plausible protective biology—while learned preferences expand with safe exposure over years.',
      ],
    },
    {
      heading: 'Fat carries calories and fat-soluble micronutrients',
      paragraphs: [
        'For most of human history, dense energy was not guaranteed. Fat made foods sustaining and helped absorb fat-soluble vitamins. Enjoying fat is not a character flaw; it is a sensible preference in calorie-variable worlds.',
      ],
    },
    {
      heading: 'Why “modern food hijacks instincts” is almost literally true',
      paragraphs: [
        'Packaged foods can combine refined starch, fat, salt, and novelty in every aisle—signals that were rare in the wild now arrive reliably, cheaply, and quickly. Your brain still interprets strong hedonic hits as high value because that heuristic used to be correct often enough to keep you alive.',
      ],
    },
    {
      heading: 'What to do with an old operating system',
      paragraphs: [
        'You cannot uninstall evolution, but you can change defaults: protein anchors, fiber, sleep, stress skills, and environments that make the next bite slightly harder to automate. Read alongside ultra-processed and craving articles for a fuller toolkit.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is the “paleo brain” story oversimplified?',
      a: 'Yes—this is a useful lens, not a complete anthropology course. Real diets varied by ecosystem.',
    },
    {
      q: 'Does this justify eating anything?',
      a: 'No—understanding is not permission. It is context so behavior change feels less mystifying.',
    },
  ],
  related: [
    { title: 'Why Ultra-Processed Food Works With Your Biology', path: '/nutrition-science/why-ultra-processed-food-works-with-your-biology' },
    { title: 'Why Humans Crave Junk Food More Than Vegetables', path: '/nutrition-science/why-humans-crave-junk-food-more-than-vegetables' },
    { title: 'Why Processed Foods Are Easy to Overeat', path: '/nutrition-science/why-processed-foods-are-easy-to-overeat' },
  ],
};

export default function WhyEvolutionTunedUsForSugarAndFat() {
  return <ScienceArticlePage spec={SPEC} />;
}
