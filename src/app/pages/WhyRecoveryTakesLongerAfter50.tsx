import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-recovery-takes-longer-after-50',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Recovery Takes Longer After 50',
  subtitle:
    'Sleep architecture shifts, tendons remodel more slowly, and inflammation from a hard day or a minor injury can linger longer than it used to. Food cannot microwave healing, but skipping protein, skimping on sleep, or “pushing through” sharp pain definitely borrows from next week.',
  readTime: '9 min read',
  emoji: '🛌',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Prioritize sleep, distribute protein through meals, hydrate steadily, and return to movement as your clinician clears—gentle consistency beats weekend heroics. Colorful plants and fish patterns help many people simply feel less achy over time, not overnight. Fever, chest pain, one-sided swelling, numbness, or pain that worsens instead of easing needs real medical evaluation, not another stretch from a blog.',
  intro:
    "Feeling beat up longer after yard work, travel, or a new workout is a common story. It does not mean you are broken; it means repair timelines stretched. Muscle needs amino acids, tendons need patient loading, and nerves like calm nights.\n\nNutrition’s role is mostly background support: enough energy to heal, enough protein to rebuild tissue, enough micronutrients from varied food so enzymes can do their jobs. Magic shakes rarely replace those basics.\n\nPsychology matters too. Fear of reinjury can make people avoid movement entirely, which slows strength return. A graded plan—little more each week—often beats all-or-nothing rest.",
  sections: [
    {
      heading: 'What is actually repairing after stress or injury',
      paragraphs: [
        'Muscle fibers repair with protein and rest. Tendons and ligaments remodel slowly because blood supply is modest. Sleep is when growth hormone patterns and tissue cleanup work lean hardest—short nights are not “free” for active adults.',
      ],
    },
    {
      heading: 'Inflammation: friend, then houseguest who overstays',
      paragraphs: [
        'Acute inflammation after a strain is part of healing. When sleep, nutrition, stress, or repeated overload keeps the dial turned up, people feel stiff longer. Gentle movement within safe ranges often helps more than total stillness.',
      ],
    },
    {
      heading: 'Food supports the background hum',
      paragraphs: [
        'Protein at each meal supports repair without making dinner a math exam. Fish, nuts, olive oil, vegetables, and berries are the boring “pattern foods” researchers associate with healthier inflammatory tone over time—not because any one berry is magic.',
      ],
      tip: 'If you are trying to lose weight while healing, very aggressive deficits can slow recovery; clinicians sometimes prioritize healing first for a reason.',
    },
    {
      heading: 'Training and return-to-life pacing',
      paragraphs: [
        'Sharp pain is a stop sign; dull ache that improves as you warm up is a different conversation best had with a professional. Build volume week to week instead of doubling “to catch up.”',
      ],
    },
    {
      heading: 'Alcohol, hydration, and medications',
      paragraphs: [
        'Alcohol disrupts sleep architecture and can increase swelling perception. Dehydration makes tissues feel tighter. Some medications affect sleep or pain—worth reviewing if recovery suddenly changed.',
      ],
    },
    {
      heading: 'When basics are covered but something still feels wrong',
      paragraphs: [
        'Persistent fatigue, night pain, unexplained fevers, or new weakness deserve evaluation. Articles explain common patterns; they do not replace imaging or exam when red flags appear.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Do ice baths help?',
      a: 'Trends come and go; sleep, nutrition, and guided rehab usually move the needle more predictably for most people. If you love cold plunge and your clinician is fine with it, enjoyment counts too.',
    },
    {
      q: 'Collagen supplements?',
      a: 'Evidence is mixed; whole-food protein and vitamin C-rich plants cover basics for most people without extra tubs.',
    },
    {
      q: 'When to call a doctor?',
      a: 'Fever, chest pain, calf swelling after travel, numbness, loss of function, or pain that escalates should prompt urgent evaluation.',
    },
    {
      q: 'Why do I recover slower than my spouse?',
      a: 'Genetics, sleep, prior injuries, training history, stress, and nutrition all differ. Compare yourself to your last month more than to another person.',
    },
  ],
  related: [
    { title: 'Why Muscle Loss Happens as You Age', path: '/nutrition-science/why-muscle-loss-happens-as-you-age' },
    { title: 'Best Foods for Healthy Aging', path: '/nutrition-science/best-foods-for-healthy-aging' },
  ],
};

export default function WhyRecoveryTakesLongerAfter50() {
  return <ScienceArticlePage spec={SPEC} />;
}
