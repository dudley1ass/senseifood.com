import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-stress-reshapes-appetite-and-snacking',
  segment: 'nutrition-science',
  categoryLabel: 'Human appetite · Brain & behavior',
  title: 'Why Stress Reshapes Appetite and Snacking',
  subtitle:
    'Short sleep, high demand days, and emotional load do not just “lower willpower”—they change hormones, blunt executive control, and bias you toward fast-reward foods that feel like relief in the moment.',
  readTime: '9 min read',
  emoji: '⚡',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Stress biology pushes toward quick calories and strong sensory hits: cortisol patterns, ghrelin/leptin noise after sleep loss, and a tired prefrontal cortex that negotiates less effectively with habit loops. Chips are not morally worse than carrots—they are just a very efficient match to that state. Naming the mechanism is the first step toward kinder defaults.',
  intro:
    'This is not “stress-eating is bad.” It is closer to weather forecasting: when the barometer drops, certain foods become disproportionately attractive because they are easy, predictable, and fast. We will connect sleep debt, allostatic load (wear-and-tear stress), and why crunchy-salty-fat loops feel like control when the day felt uncontrollable—then we will talk practical levers that are not shame-based.',
  sections: [
    {
      heading: 'Sleep loss is an appetite hormone remix',
      paragraphs: [
        'After short sleep, many people report higher cravings and looser snacking—not because discipline vanished, but because appetite regulation is a physiological system that runs cleaner with adequate sleep. That does not mean “just nap away poverty-level stress,” but it does mean sleep is a real variable, not a moral lecture.',
      ],
    },
    {
      heading: 'Executive fatigue and the snack path of least resistance',
      paragraphs: [
        'Decision-making is a limited resource. When your day is full of tradeoffs, your brain loves defaults: open package, predictable crunch, immediate reward. Vegetables often require washing, cutting, and a plan—fine on calm Sundays, harder at 9:30 p.m. after a brutal Tuesday.',
      ],
    },
    {
      heading: 'Comfort is not only nostalgia',
      paragraphs: [
        'Warm, fatty, familiar foods can reduce subjective arousal for some people—there is literature on carbohydrate-rich meals and temporary mood shifts, with huge individual differences. The takeaway is practical: if comfort foods are doing emotional work, only shaming them tends to backfire; pairing them with structure (protein anchors, scheduled meals, pre-portioned snacks) often changes the week more than banning categories.',
      ],
    },
    {
      heading: 'What helps without pretending stress is optional',
      paragraphs: [
        'Try “if-then” snacks you genuinely like that still carry protein or fiber (Greek yogurt, nuts, cheese + fruit), reduce friction for vegetables you will actually eat (frozen mixed veg, bagged salad + dressing you enjoy), and notice screens-at-night patterns that steal sleep. Pair this read with fiber/blood-sugar and ultra-processed articles in the library for a fuller map.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is emotional eating a disorder?',
      a: 'Everyone eats with emotions sometimes. If you feel out of control, distressed, or unwell, seek professional support—this article is education, not diagnosis.',
    },
    {
      q: 'What is one tiny experiment?',
      a: 'For one week, add 20g protein to the meal before your hardest evening stretch—not to “earn food,” but to see if cravings soften when satiety signals arrive earlier.',
    },
  ],
  related: [
    { title: 'Why Late-Night Snacking Happens', path: '/nutrition-science/why-late-night-snacking-happens' },
    { title: 'Why Humans Crave Junk Food More Than Vegetables', path: '/nutrition-science/why-humans-crave-junk-food-more-than-vegetables' },
    { title: 'Why Fiber Matters for Blood Sugar', path: '/nutrition-science/why-fiber-matters-for-blood-sugar' },
  ],
};

export default function WhyStressReshapesAppetiteAndSnacking() {
  return <ScienceArticlePage spec={SPEC} />;
}
