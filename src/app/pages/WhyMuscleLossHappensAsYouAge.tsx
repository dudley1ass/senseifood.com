import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-muscle-loss-happens-as-you-age',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Muscle Loss Happens as You Age',
  subtitle:
    'Sarcopenia is the gradual loss of muscle and strength—not a personality failure, but tissue responding to signals. When steps drop, meals shrink, pain keeps you still, or illness forces bed rest, your body quietly decides some muscle is expensive to maintain. The good news is that food and movement send the opposite signal: still worth keeping.',
  readTime: '9 min read',
  emoji: '💪',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Combine protein across meals with resistance training a few times weekly—even bands and bodyweight count. Protect nutrition during illness and after surgery; those windows steal muscle fastest. Walking is wonderful for heart and mood, but muscle also wants to be loaded directly. If you have heart or joint limits, a clinician or physical therapist can help you pick safe starting points.',
  intro:
    "Muscle is not only for athletes. It stabilizes blood sugar after meals, supports immune work, and determines whether stairs feel like exercise or just stairs. With age, hormonal shifts, lower chronic activity, and sometimes chronic inflammation make maintenance a little more like tending a garden than ignoring it.\n\nLoss is usually slow until a crisis hits—a broken hip, a long hospital stay—and then people notice how fast strength can fall. The public health story is not fear; it is gentle prevention: enough protein, enough resistance, enough sleep, and enough calories during recovery.\n\nThis article speaks kitchen plain: eggs, beans, yogurt, fish, and tofu are tools; so are groceries carried with intent and chairs used for sit-to-stand practice. You are allowed to start small and stay small if that is what you will repeat.",
  sections: [
    {
      heading: 'What you feel before the textbook definition',
      paragraphs: [
        'Slower stairs, softer grip jars, fatigue after yard work, or needing arms to rise from a low couch can be early hints. People often blame “getting old” when the body is actually asking for protein and loading.',
      ],
    },
    {
      heading: 'Why bed rest and illness accelerate loss',
      paragraphs: [
        'Muscle turns over constantly. When you are still for days, the balance tips toward breakdown unless nutrition steps up. That is why hospitals pay attention to protein after surgery—not as trivia, as recovery infrastructure.',
      ],
    },
    {
      heading: 'Food as teammate, not a miracle powder',
      paragraphs: [
        'Dairy, soy, eggs, fish, poultry, and meat bring leucine-rich patterns that flip repair switches more efficiently than tiny token protein hits. Plant proteins still work—especially when you eat enough total and combine across the day.',
        'Vitamin D status shows up in bone and muscle conversations often; routine care beats guessing from headlines.',
      ],
      tip: 'If chewing hurts, switch textures—shredded meats, tofu, lentils—rather than dropping protein entirely.',
    },
    {
      heading: 'Training: the signal that says “keep this tissue”',
      paragraphs: [
        'Resistance tells muscle fibers they are still needed. That can be gym weights, but it can also be resistance bands, carrying laundry upstairs on purpose, or repeated controlled stands from a chair.',
        'Walking complements; it does not fully replace loading for muscle size and power in most people.',
      ],
    },
    {
      heading: 'Sleep, stress, and inflammation',
      paragraphs: [
        'Poor sleep raises stress hormones that make muscle maintenance harder. Chronic pain and untreated inflammation also steal appetite and activity at the same time—a double hit.',
      ],
    },
    {
      heading: 'When to get individualized help',
      paragraphs: [
        'Heart disease, uncontrolled blood pressure, severe arthritis, or frailty concerns deserve a guided plan. A few sessions with a physical therapist can turn “I should exercise” into a repeatable home routine.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is walking enough?',
      a: 'Walking is excellent for many outcomes; add resistance for muscle directly. Both together beat either alone for most older adults.',
    },
    {
      q: 'Will I bulk up?',
      a: 'Most adults starting resistance training gain strength and function without looking like a bodybuilder—especially with moderate loads and good protein, not extremes.',
    },
    {
      q: 'Illness spikes?',
      a: 'After infections or surgery, prioritize protein as tolerated and follow rehab guidance—losses can snowball quietly if people eat little and move less.',
    },
    {
      q: 'Vegetarian or vegan?',
      a: 'Soy, legumes, quinoa, nuts, and dairy if included can meet needs with attention to total grams and distribution—dietitians help when appetite is low.',
    },
  ],
  related: [
    { title: 'Why Protein Matters More After 50', path: '/nutrition-science/why-protein-matters-more-after-50' },
    { title: 'Why Recovery Takes Longer After 50', path: '/nutrition-science/why-recovery-takes-longer-after-50' },
  ],
};

export default function WhyMuscleLossHappensAsYouAge() {
  return <ScienceArticlePage spec={SPEC} />;
}
