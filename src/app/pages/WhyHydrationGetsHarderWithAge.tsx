import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-hydration-gets-harder-with-age',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Hydration Gets Harder With Age',
  subtitle:
    'Thirst can turn into a whisper while your body still loses water through skin, breath, digestion, and sweat—especially in heat, during illness, or when medications change how fluids move. Waiting for a loud “I am thirsty” signal is a gamble many older adults lose without noticing until they feel dizzy, tired, or foggy.',
  readTime: '9 min read',
  emoji: '💧',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Tie fluids to anchors you already have: morning pills, each meal, and brushing teeth. Keep a cup you like where you sit—visibility beats memory. If nighttime bathroom trips are disruptive, shift more fluids earlier in the day rather than playing catch-up at nine pm. Heart and kidney conditions sometimes come with fluid limits—follow your clinician’s numbers, not generic online goals.',
  intro:
    "Hydration is the least glamorous nutrition topic and one of the most practical. Water carries nutrients, cushions joints, keeps stools moving, and helps temperature regulation when summer hits or the furnace runs dry air all winter.\n\nLater in life, total body water tends to inch downward, sweat patterns change, and the brain’s thirst signal can soften. None of that means you need fear every sip; it means habits matter more than sensations. Many people hydrate fine when the glass is already in hand, and struggle when they must “remember” from scratch.\n\nFlavor, temperature, and routine beat lectures. If plain water feels like a chore, broth, fruit in water, tea, and milk still count toward the practical goal: steady intake across the day within any medical limits you have.",
  sections: [
    {
      heading: 'Why the thirst cue fades',
      paragraphs: [
        'Aging changes how tightly the body tracks fluid balance; some medications add diuretics or dry the mouth in ways that feel like dehydration even when salt and water are actually fine. Heat and illness can increase losses quickly.',
        'Swallowing discomfort or mobility pain can also make trips to the sink less appealing—so dehydration becomes a house design problem, not a discipline problem.',
      ],
    },
    {
      heading: 'Medications, heat, and illness',
      paragraphs: [
        'Fevers, vomiting, and diarrhea are obvious dehydrators; mild colds with low appetite can be sneakier because people sip less without noticing. Summer yard work in humid air can outpace thirst if you are focused on finishing “one more row.”',
      ],
      tip: 'If your clinician gave fluid limits for heart or kidney disease, those limits are the law of the land—this article assumes no restriction unless they say otherwise.',
    },
    {
      heading: 'Flavor and temperature tricks that actually work',
      paragraphs: [
        'Cold vs room temperature is preference. Sparkling water, diluted juice, herbal tea, and broth all increase compliance when water feels boring. A squeeze of lemon can make a pitcher disappear faster than willpower ever could.',
      ],
    },
    {
      heading: 'Simple home checks without turning life into a lab',
      paragraphs: [
        'Pale straw urine is a reasonable “on track” signal for many people; very dark urine suggests catching up. Clear-all-day-every-day is not a trophy—needs vary with food and supplements.',
      ],
    },
    {
      heading: 'Hydration and appetite, digestion, and falls',
      paragraphs: [
        'Low fluids can worsen constipation, lightheadedness when standing, and afternoon fatigue that feels like “I need a nap” when you actually need a glass. Fixing fluids first is cheap troubleshooting.',
      ],
    },
    {
      heading: 'Kitchen systems that remove friction',
      paragraphs: [
        'Fill a bottle at breakfast and move it with you room to room. Pair soup with lunch twice a week. Keep a small glass by the pill organizer. These are boring wins—and boring wins are what protect older adults in real homes.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Does coffee dehydrate?',
      a: 'For habitual coffee drinkers, coffee behaves like other fluids in balance studies. If you feel better adding water alongside, that is a fine habit—just not because coffee “cancels” hydration by magic.',
    },
    {
      q: 'How much should I drink?',
      a: 'Public “eight glasses” rules are rough cartoons. Kidney or heart conditions change targets; ask your clinician if you have fluid restrictions or new swelling.',
    },
    {
      q: 'What about sports drinks?',
      a: 'Useful sometimes for heavy sweating or illness-related losses; for everyday sipping, water and normal meals cover electrolytes for most people.',
    },
    {
      q: 'My mouth is dry but I am not thirsty',
      a: 'Dry mouth can be medications, mouth breathing at night, or dehydration. Dentists and clinicians can help sort which; sipping small amounts regularly still helps many people.',
    },
  ],
  related: [
    { title: 'Why Appetite Changes After 50', path: '/nutrition-science/why-appetite-changes-after-50' },
    { title: 'Easy High-Protein Meals for Older Adults', path: '/nutrition-science/easy-high-protein-meals-for-older-adults' },
  ],
};

export default function WhyHydrationGetsHarderWithAge() {
  return <ScienceArticlePage spec={SPEC} />;
}
