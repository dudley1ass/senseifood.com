import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-ultra-processed-food-works-with-your-biology',
  segment: 'nutrition-science',
  categoryLabel: 'Human appetite · Evolution',
  title: 'Why Ultra-Processed Food Works With Your Biology',
  subtitle:
    'Energy-dense formulas, low fiber/protein defaults, rapid oral processing, and bliss-point seasoning are not “weak willpower”—they are design choices that line up uncomfortably well with ancient appetite wiring.',
  readTime: '9 min read',
  emoji: '🏭',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Ultra-processed foods often combine refined carbs, fat, and salt with textures that disappear quickly in your mouth—so you can swallow a lot of calories before gut hormones and stretch receptors weigh in. Add novelty (variety packs) and low fiber/protein defaults, and you get a product category that is easy to overeat even when you are not “trying.”',
  intro:
    'This pairs tightly with our processed-food overeating article, but zooms out to evolution: your brain treats reliable calorie hits as high value because historically they were. Here we connect engineered textures, sensory-specific satiety delays, and why “just eat less” can feel absurd when the environment is shaped to maximize picking behavior. The goal is clarity for planning—not fear, not moral panic.',
  sections: [
    {
      heading: 'Designed speed vs natural chew clocks',
      paragraphs: [
        'Whole foods often require mechanical work—chewing, tearing, separating fiber. Many ultra-processed items reduce oral exposure time per calorie, which shifts the timing of fullness signals. That is not mind-control; it is physics and physiology meeting product development.',
      ],
    },
    {
      heading: 'Bliss points and delayed fatigue',
      paragraphs: [
        'Industry formulations search for salt–sugar–fat combinations where liking stays high before sensory fatigue arrives. Home cooking varies night to night; packaged categories can be uncannily consistent—consistency strengthens habits.',
      ],
    },
    {
      heading: 'Fiber and protein are structural brakes',
      paragraphs: [
        'When those brakes are missing, meals can spike and dip in ways that restart snacking sooner. Adding them back is less about “virtue” and more about matching your appetite system with inputs it recognizes as a meal.',
      ],
    },
    {
      heading: 'Policy is personal here—but personal is not only willpower',
      paragraphs: [
        'Sleep, stress, time poverty, and neighborhood food availability shape choices. Individual tactics (pre-portioning, protein anchors, frozen vegetables) matter, but they sit inside a larger system. If you want deeper nutrition support, talk with a registered dietitian—especially for medical conditions.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is all processing bad?',
      a: 'No—freezing, fermenting, and canning are processing too. The concern here is hyper-palatable energy-dense mixes, not a jar of tomatoes.',
    },
    {
      q: 'What is one high-leverage habit?',
      a: 'Build a repeatable “good enough” dinner template with protein + fiber you actually enjoy—defaults beat ideals on busy weeks.',
    },
  ],
  related: [
    { title: 'Why Processed Foods Are Easy to Overeat', path: '/nutrition-science/why-processed-foods-are-easy-to-overeat' },
    { title: 'Why Evolution Tuned Us for Sugar and Fat', path: '/nutrition-science/why-evolution-tuned-us-for-sugar-and-fat' },
    { title: 'Why Humans Crave Junk Food More Than Vegetables', path: '/nutrition-science/why-humans-crave-junk-food-more-than-vegetables' },
  ],
};

export default function WhyUltraProcessedFoodWorksWithYourBiology() {
  return <ScienceArticlePage spec={SPEC} />;
}
