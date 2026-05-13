import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-some-kids-are-always-hungry',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Some Kids Are "Always Hungry"',
  subtitle:
    'Growth spurts, sleep debt, very active days, and ultraprocessed snacks that melt before fullness shows up can all mimic endless hunger. Sometimes “I am starving” five minutes after crackers is fast-digesting food plus a busy body—not a broken appetite meter. Context matters more than labels.',
  readTime: '9 min read',
  emoji: '🍎',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Offer structured meals plus planned snacks with protein and fiber—apple with peanut butter, cheese and crackers, yogurt with fruit, turkey roll-ups. Check thirst and sleep; both masquerade as hunger. If hunger comes with unintended weight loss, excessive thirst, or bathroom changes, call your pediatrician rather than guessing online.',
  intro:
    "Parents hear “Mom, I am starving” on repeat and wonder if something is wrong—or if the child is manipulating. Often it is neither pathology nor attitude; it is a mismatch between quick calories and steady fullness.\n\nTeen athletes and kids in growth spurts can be honestly ravenous. Other kids graze so often that appetite never fully forms for meals. Liquids and airy snacks can blur cues because they clear the stomach quickly.\n\nEmotional hunger is real too: boredom, worry, and overstimulation sometimes show up as kitchen requests. Naming feelings still pairs with feeding the body on a schedule so kids learn the difference over years, not in one lecture.",
  sections: [
    {
      heading: 'Common honest hunger drivers',
      paragraphs: [
        'Sports seasons, adolescent growth, short nights, and skipped breakfast all raise real needs. Some medications affect appetite. Worm infections are uncommon in many regions but belong on a clinician’s list when hunger is extreme with other signs.',
      ],
    },
    {
      heading: 'Ultraprocessed snacks and the speed trap',
      paragraphs: [
        'Puffs, sweet bars, and juice deliver calories that vanish before chewing and stomach stretch give the brain a full report. Kids ask again because the body is still looking for the meal it did not quite register.',
      ],
    },
    {
      heading: 'Snack design that satisfies longer',
      paragraphs: [
        'Pair carbohydrate with protein or fat: apple plus peanut butter, cheese plus crackers, yogurt with granola, edamame, hummus with vegetables, bean dip with chips in a measured bowl.',
      ],
      tip: 'Serve snacks at the table when you can—walking snacks disappear faster with less memory of eating them.',
    },
    {
      heading: 'Liquids, thirst, and “phantom hunger”',
      paragraphs: [
        'A drink of water before a second snack is a harmless experiment. Sometimes kids interpret thirst as hunger; sometimes adults do too.',
      ],
    },
    {
      heading: 'When hunger words mean something else',
      paragraphs: [
        'Boredom, anxiety, and habit loops can all pull kids to the pantry. That does not mean ignore them—it means offer food on a schedule and also name feelings: “Are we hungry or wound up?”',
      ],
    },
    {
      heading: 'Red flags that deserve medical attention',
      paragraphs: [
        'Constant hunger with weight loss, excessive thirst and urination, abdominal pain, or vomiting needs evaluation—not a nutrition blog triage.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Constant hunger with weight loss?',
      a: 'Medical causes belong on a clinician’s list—do not wait on internet lists.',
    },
    {
      q: 'Emotional eating?',
      a: 'Sometimes hunger words mean boredom or worry—naming feelings still pairs with regular fuel.',
    },
    {
      q: 'Should I limit all snacks?',
      a: 'Structured snacks often work better than unlimited grazing or total restriction.',
    },
    {
      q: 'Growth charts?',
      a: 'Your pediatrician reads trends—bring concerns with examples of typical days.',
    },
  ],
  related: [
    { title: 'Why Kids Love Processed Foods', path: '/nutrition-science/why-kids-love-processed-foods' },
    { title: 'Why Breakfast Affects School Performance', path: '/nutrition-science/why-breakfast-affects-school-performance' },
  ],
};

export default function WhySomeKidsAreAlwaysHungry() {
  return <ScienceArticlePage spec={SPEC} />;
}
