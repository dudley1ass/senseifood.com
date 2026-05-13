import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-late-night-snacking-happens',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Late-Night Snacking Happens',
  subtitle:
    'Short sleep, stress, skipped daytime meals, and ultracrunchy TV snacks all nudge the kitchen after dark. Sometimes night hunger is honest hunger from an underfed day; sometimes it is comfort after hard news. Biology and habit share the remote—labeling the night you are having helps you pick a kind fix instead of spiraling.',
  readTime: '9 min read',
  emoji: '🌙',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Front-load protein at breakfast and lunch when you can, dim the kitchen after a planned snack, and move screens away from the pantry. If sleep is broken, treat sleep as the nutrition lever first. Pair nighttime carbs with yogurt, nuts, or cheese so blood sugar does not roller-coaster. Shift work means “late” is relative—design around your real schedule, not random internet cutoffs after seven pm.',
  intro:
    "Night snacking is one of the most judged habits and one of the most human. Bodies can be hungry late when daytime meals were small, fast, or mostly ultraprocessed. Nervous systems also seek soothing when the house is quiet and the inbox is not.\n\nThis article avoids moral panic. It separates true hunger cues from stress loops, medication timing changes, and the way screens make hand-to-mouth eating invisible.\n\nSmall rituals—pre-portioned bowls, brushing teeth after a planned snack—can reduce autopilot without demanding perfection.",
  sections: [
    {
      heading: 'Sleep debt and appetite hormones',
      paragraphs: [
        'Short sleep tends to raise hunger signals and make ultrapalatable food louder. Fixing sleep even a little can quiet the pantry pull more than a new list of banned foods.',
      ],
    },
    {
      heading: 'Under-fueling by day, catching up at night',
      paragraphs: [
        'Skipped breakfast, salad-only lunch, and coffee-as-meal often end in a real calorie debt by nine pm. The fix is daytime anchors, not only willpower at midnight.',
      ],
    },
    {
      heading: 'Stress, boredom, and the “second stomach”',
      paragraphs: [
        'Sometimes the mouth wants activity when the mind wants distraction. Naming that pattern is not insulting—it helps you choose tea, a shower, or a short walk before opening the chips.',
      ],
      tip: 'If you want a snack, put it on a plate at the table—walking snacks disappear with less memory of eating them.',
    },
    {
      heading: 'If you are going to snack, stack it kindly',
      paragraphs: [
        'Pair crackers with cheese, fruit with peanut butter, or cereal with milk so the arc is steadier than dry carbs alone. Pre-portion bowls before the show starts.',
      ],
    },
    {
      heading: 'Medications, alcohol, and schedule shifts',
      paragraphs: [
        'Some drugs change appetite timing; alcohol lowers inhibitions around seconds. Shift workers deserve plans that respect midnight hunger as real life, not laziness.',
      ],
    },
    {
      heading: 'When night eating needs professional support',
      paragraphs: [
        'If night eating feels compulsive, secretive, or paired with distress, ask a clinician or therapist trained in eating concerns—articles are not therapy.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Stop eating after 7 pm?',
      a: 'Rules that ignore shift work or family dinner are not universal—design around your real schedule.',
    },
    {
      q: 'Medications?',
      a: 'Some drugs affect appetite timing—ask your clinician if nights suddenly changed.',
    },
    {
      q: 'Is it bad every time?',
      a: 'Occasional evening snacks are normal life; patterns that hurt sleep or goals deserve gentle experiments, not shame.',
    },
    {
      q: 'Night shift workers?',
      a: 'Your “dinner” may be at two am—focus on balanced meals at your wake time and steady hydration.',
    },
  ],
  related: [
    { title: 'Why Healthy Eating Feels Hard', path: '/nutrition-science/why-healthy-eating-feels-hard' },
    { title: 'How to Eat Better Without Giving Up Comfort Food', path: '/nutrition-science/how-to-eat-better-without-giving-up-comfort-food' },
  ],
};

export default function WhyLateNightSnackingHappens() {
  return <ScienceArticlePage spec={SPEC} />;
}
