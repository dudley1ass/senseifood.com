import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'how-to-eat-better-without-giving-up-comfort-food',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'How to Eat Better Without Giving Up Comfort Food',
  subtitle:
    'Satisfaction is not the enemy of health—deprivation often is. Comfort food carries memory, culture, and stress relief. When joy gets erased from the plan, brains tend to hunt harder later. Building meals that include comfort plus steadier sides is how kitchens stay kind long term, including on Fridays.',
  readTime: '9 min read',
  emoji: '🍜',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Add before you only subtract: salad with pizza night, fruit with ice cream, beans in chili, vegetables on the side of mac and cheese. Plan treats on purpose so random restriction does not teach the pantry as forbidden treasure. Split restaurant entrees, box half automatically, or serve family style so seconds are a choice—not autopilot while watching TV.',
  intro:
    "Many “healthy eating” plans accidentally train all-or-nothing thinking: clean weekdays, chaotic weekends, shame Monday. That loop exhausts people and rarely teaches skills.\n\nBetter does not mean purer. It means steadier energy, enough fiber and protein for your goals, and enough pleasure that you will still be doing this in six months.\n\nThis article uses plain language: keep the burger; add slaw. Keep the noodles; add tofu or chicken and vegetables. Satisfaction plus fiber beats grim bowls you abandon.",
  sections: [
    {
      heading: 'The “add” frame instead of the punishment frame',
      paragraphs: [
        'Adding produce, beans, or yogurt alongside favorites increases fullness without turning dinner into a referendum on morality.',
      ],
    },
    {
      heading: 'Planned joy beats chaotic binges',
      paragraphs: [
        'When dessert is forbidden all week, Saturday becomes a speedrun. Predictable treats—Friday movie ice cream—often calm the scarcity alarm.',
      ],
      tip: 'Sometimes serve a small dessert with the meal so it stops being a trophy earned by clearing vegetables.',
    },
    {
      heading: 'Portions without shame',
      paragraphs: [
        'Split entrees, choose starters as mains, or box half before you start eating so eyes do not negotiate with a mountain on the plate.',
      ],
    },
    {
      heading: 'Comfort foods across cultures',
      paragraphs: [
        'Stews, rice dishes, noodles, and breads are not “guilty”—they are heritage. Balance can live inside those meals with vegetables, beans, and proteins you already love.',
      ],
    },
    {
      heading: 'Emotional eating without the lecture',
      paragraphs: [
        'Sometimes people eat for comfort because it works a little. Naming feelings and still feeding the body on a schedule are skills that grow together. Counseling helps when food is the only tool left.',
      ],
    },
    {
      heading: 'When medical nutrition needs a different lane',
      paragraphs: [
        'Diabetes, celiac disease, kidney disease, and other conditions change what “better” means. Use general articles for ideas, clinicians for targets.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is cheat day language harmful?',
      a: 'All-or-nothing framing often backfires; predictable joy beats chaotic restriction cycles.',
    },
    {
      q: 'Emotional eating?',
      a: 'Name feelings and still feed the body—skills overlap; consider counseling if food is the only coping tool.',
    },
    {
      q: 'Fast food sometimes?',
      a: 'Yes—choose veg-heavy sides, add fruit at home, and skip the shame spiral that triggers second rounds of “well I blew it.”',
    },
    {
      q: 'Alcohol with comfort meals?',
      a: 'It lowers inhibitions around seconds; plan portions earlier if that pattern shows up for you.',
    },
  ],
  related: [
    { title: 'Why Late-Night Snacking Happens', path: '/nutrition-science/why-late-night-snacking-happens' },
    { title: 'Why Healthy Eating Feels Hard', path: '/nutrition-science/why-healthy-eating-feels-hard' },
  ],
};

export default function HowToEatBetterWithoutGivingUpComfortFood() {
  return <ScienceArticlePage spec={SPEC} />;
}
