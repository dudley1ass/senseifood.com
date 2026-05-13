import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-healthy-eating-feels-hard',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Healthy Eating Feels Hard',
  subtitle:
    'Modern food places are built for speed, crunch, and crave—not for chewing slowly in a parking lot between errands. Feeling behind is the design, not a personal flaw.',
  readTime: '6 min read',
  emoji: '🏙️',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Shrink the battlefield: keep washed fruit visible, put takeout cash on autopilot for one fewer impulse night, and pick one default breakfast. Small defaults beat giant resolutions.',
  intro:
    'Willpower is a tired muscle. Ultraprocessed snacks are cheap, loud, and everywhere. When “healthy” means cooking from scratch nightly while tired, of course it feels impossible—change the environment first.',
  sections: [
    {
      heading: 'The food environment is loud',
      paragraphs: [
        'Marketing, portion inflation, and apps that deliver sugar in minutes all raise the effort tax on home cooking.',
      ],
    },
    {
      heading: 'Gentle counters that work',
      paragraphs: [
        'Visible fruit, pre-cut vegetables, frozen staples, and a boring grocery list beat heroic meal plans that die by Thursday.',
      ],
    },
  ],
  faqs: [
    { q: 'Is meal prep mandatory?', a: 'No—any friction reduction counts: rotisserie chicken, bagged salad, microwave grains.' },
    { q: 'Food access inequity?', a: 'Time, money, and kitchen tools matter; advice should flex to real constraints.' },
  ],
  related: [
    { title: 'Why Portion Sizes Have Changed So Much', path: '/nutrition-science/why-portion-sizes-have-changed-so-much' },
    { title: 'How to Eat Better Without Giving Up Comfort Food', path: '/nutrition-science/how-to-eat-better-without-giving-up-comfort-food' },
  ],
};

export default function WhyHealthyEatingFeelsHard() {
  return <ScienceArticlePage spec={SPEC} />;
}
