import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-breakfast-affects-school-performance',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Breakfast Affects School Performance',
  subtitle:
    'Brains run on glucose, and young brains burn through stores faster than adult ones. When breakfast is skipped or is mostly refined sugar, attention and mood often ride a rougher roller coaster until lunch—teachers can sometimes spot the difference before the first worksheet is half done.',
  readTime: '9 min read',
  emoji: '📚',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Pair protein with fiber-rich carbohydrates—eggs and fruit, yogurt and oats, peanut butter on whole grain—instead of sweets alone. A workable breakfast beats a perfect one that never happens: leftovers, school programs, and simple wraps all count. If your child truly is not hungry early, try a small first bite plus a planned mid-morning snack, and coordinate ADHD medication timing with your care team when appetite is affected.',
  intro:
    "Breakfast fights get painted as discipline problems when they are often timing and biology. Some kids wake slowly; some families run early; some mornings are chaos. The performance question is not “did you eat quinoa” but “did you send steady fuel before math.”\n\nMixed meals soften blood sugar swings compared with juice and pastries alone. Protein and fiber slow digestion enough that many kids report fewer mid-morning crashes—not because breakfast is magic, because chemistry is predictable.\n\nTeachers see patterns: irritability, staring off, tears over small frustrations. Food is not the only cause—sleep, anxiety, and learning differences matter too—but skipping fuel is an easy lever to test before harder interventions.",
  sections: [
    {
      heading: 'What changes in the classroom when fuel is steady',
      paragraphs: [
        'Attention, working memory, and emotional regulation all cost energy. When blood sugar spikes and falls quickly, some kids feel shaky, sleepy, or reactive. A steadier curve does not solve every behavior puzzle, but it removes one loud variable.',
      ],
    },
    {
      heading: 'Ultra-refined breakfasts versus mixed plates',
      paragraphs: [
        'Sweet cereal with milk still contains protein from milk—better than nothing—but many kids benefit from adding nuts, seeds, fruit, or eggs when possible. The goal is chew time and slower starch release, not Instagram aesthetics.',
      ],
    },
    {
      heading: 'Real-life wins when minutes are negative',
      paragraphs: [
        'Leftovers, frozen burritos with fruit, smoothies with yogurt or nut butter, cheese toast with tomato, and school breakfast programs are all honorable solutions.',
      ],
      tip: 'Pack a shelf-stable backup in the backpack for missed mornings—nut bar, shelf-stable milk box—so “we ran late” does not mean “zero fuel until noon.”',
    },
    {
      heading: 'Kids who are not hungry early',
      paragraphs: [
        'Try smaller first bites, later bus times when possible, or a two-step breakfast: a little now, a little at school if allowed. Forcing large plates usually backfires.',
      ],
    },
    {
      heading: 'Sports mornings and teen schedules',
      paragraphs: [
        'Early practices change what “breakfast” means—sometimes a banana and peanut butter wrap at 6 am and a fuller meal later is the realistic split.',
      ],
    },
    {
      heading: 'When breakfast is not the whole story',
      paragraphs: [
        'If sleep is chronically short, anxiety is high, or learning feels hard regardless of meals, loop in pediatric and school supports. Nutrition is one leg of the stool.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Not hungry early?',
      a: 'Try smaller starts and planned mid-morning snacks; some kids need time to wake before their stomach joins.',
    },
    {
      q: 'ADHD overlap?',
      a: 'Stimulant medications can blunt appetite—coordinate timing and snacks with your clinician rather than guessing.',
    },
    {
      q: 'Is intermittent fasting okay for kids?',
      a: 'Generally not a DIY trend for growing children—ask your pediatrician if special situations exist.',
    },
    {
      q: 'Does sugar make kids hyper?',
      a: 'Birthday energy is often excitement and context; still, high-sugar low-protein breakfasts can crash mood later even when bounce is not “hyper.”',
    },
  ],
  related: [
    { title: 'How to Build Healthier Kids Meals Without Food Fights', path: '/nutrition-science/how-to-build-healthier-kids-meals-without-food-fights' },
    { title: 'Why Some Kids Are Always Hungry', path: '/nutrition-science/why-some-kids-are-always-hungry' },
  ],
};

export default function WhyBreakfastAffectsSchoolPerformance() {
  return <ScienceArticlePage spec={SPEC} />;
}
