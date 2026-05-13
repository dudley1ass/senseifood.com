import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-healthy-eating-feels-hard',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Healthy Eating Feels Hard',
  subtitle:
    'Modern food places are built for speed, crunch, crave, and calories-per-dollar—not for chewing slowly in a parking lot between errands. When “healthy” means cooking from scratch nightly while exhausted, of course it feels impossible. Feeling behind is often the design of the environment, not a personal flaw stamped on your character.',
  readTime: '9 min read',
  emoji: '🏙️',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Shrink the battlefield: washed fruit visible, frozen vegetables in the freezer, one default breakfast, and a short grocery list you repeat. Put takeout money on autopilot for one fewer impulse night if money leaks there. Change the environment before you bet everything on willpower—time, money, kitchen tools, and food access all change what is realistic.',
  intro:
    "Willpower is a tired muscle. Ultraprocessed snacks are cheap, loud, and everywhere. Marketing trains eyes to call “normal” what used to be a feast-sized drink. Shift workers, caregivers, and anyone feeding kids between practices are not failing a fantasy meal plan—life is loud.\n\nThis article names the friction honestly: portion inflation, delivery apps, stress eating, and the way “wellness” culture adds shame on top. Then it returns to small defaults that survive Wednesday.\n\nSenseiFood cares about systems because baking does too—temperature, timing, and mise en place beat heroic last-minute miracles.",
  sections: [
    {
      heading: 'The food environment is loud on purpose',
      paragraphs: [
        'Endcaps, coupons, and bright packaging compete for attention. Value menus train eyes to expect bigger piles for the same dollars. Your brain’s reward system notices fast energy even when your long-term goals whisper “vegetables.”',
      ],
    },
    {
      heading: 'Time is not evenly distributed',
      paragraphs: [
        'Cooking from scratch is a luxury of minutes, mobility, and mental bandwidth. Rotisserie chicken, bagged salad, microwave grains, and canned beans are still “cooking” if they get vegetables and protein onto plates.',
      ],
    },
    {
      heading: 'Gentle counters that actually stick',
      paragraphs: [
        'Visible fruit, pre-cut vegetables when you can splurge, frozen staples, and a boring grocery list beat a January overhaul that dies by Thursday.',
      ],
      tip: 'Pick one dinner you can make asleep and keep ingredients for it every week—tacos, stir-fry, soup—so panic nights have a default.',
    },
    {
      heading: 'Stress, sleep, and the kitchen after dark',
      paragraphs: [
        'Short sleep raises appetite for ultrapalatable food. Naming that pattern reduces shame and points fixes toward bedtimes, not only “discipline.”',
      ],
    },
    {
      heading: 'Money, access, and dignity',
      paragraphs: [
        'Advice should flex to real constraints. Discount produce, food banks, and community programs are part of nutrition—not a footnote for “other people.”',
      ],
    },
    {
      heading: 'When shame is the hidden ingredient',
      paragraphs: [
        'If healthy eating culture makes you feel worse, it is not helping. Swap moral language for practical steps you can repeat without hating your week.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is meal prep mandatory?',
      a: 'No—any friction reduction counts: rotisserie chicken, bagged salad, microwave grains.',
    },
    {
      q: 'Food access inequity?',
      a: 'Time, money, and kitchen tools matter; ignore advice that pretends everyone has the same store and schedule.',
    },
    {
      q: 'Is frozen worse?',
      a: 'Frozen produce is often excellent—sometimes better than sad fresh vegetables abandoned in the drawer.',
    },
    {
      q: 'Takeout “failure”?',
      a: 'Label it part of the plan sometimes—add a salad or fruit, choose protein, and move on without a shame spiral.',
    },
  ],
  related: [
    { title: 'Why Portion Sizes Have Changed So Much', path: '/nutrition-science/why-portion-sizes-have-changed-so-much' },
    { title: 'How to Eat Better Without Giving Up Comfort Food', path: '/nutrition-science/how-to-eat-better-without-giving-up-comfort-food' },
  ],
};

export default function WhyHealthyEatingFeelsHard() {
  return <ScienceArticlePage spec={SPEC} />;
}
