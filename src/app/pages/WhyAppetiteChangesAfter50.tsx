import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-appetite-changes-after-50',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Appetite Changes After 50',
  subtitle:
    'Hunger is not a single honest dial on the dashboard. Hormones, medications, mood, smell, pain, and even how dry your mouth feels can all rewrite whether food looks inviting at noon—or strangely pointless until ten at night when your brain finally says “now.”',
  readTime: '9 min read',
  emoji: '🥣',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Start with boring checks: are you thirsty, is a new prescription in the mix, is sleep short, is pain making chewing tiring? Then add gentle structure—regular meal times, smaller plates if big servings feel overwhelming, and aromatic, colorful food that does not rely on salt alone. Sudden appetite loss with unintentional weight loss belongs to a clinician, not a blog checklist.',
  intro:
    "Skipping lunch because nothing sounds good, then grazing through the pantry after dark, is a pattern millions of people recognize. It can feel like your willpower broke when really your signals changed. Midlife often brings quieter thirst cues, duller smell, drier mouth, busier stress, or medications that blunt taste or upset the stomach.\n\nThe goal here is not to shame “emotional eating.” It is to separate what needs medical attention from what responds to environment: keeping a few dependable meals in the rotation, making water easy to sip, and reducing the number of decisions you have to make when motivation is low.\n\nFood is also social. When eating alone more often, some people simply eat less without noticing until energy flags. A simple rhythm—same chair, same mug of tea before breakfast—can matter as much as the nutrient label.",
  sections: [
    {
      heading: 'Common real-world drivers',
      paragraphs: [
        'Thyroid shifts, depression, grief, chronic pain, and poor sleep all tug on appetite from different angles. Some blood pressure medicines dry the mouth; others cause nausea early in the day. Dental pain makes crunchy vegetables quietly disappear from the plate.',
        'Alcohol patterns change satiety timing for some people. Digestive conditions can make fullness arrive early or late. You are allowed to treat appetite as information instead of a character report card.',
      ],
    },
    {
      heading: 'Smell, taste, and the “nothing sounds good” meal',
      paragraphs: [
        'When aroma is flat, food loses its advertisement. Citrus zest, herbs, brothy soups, and gentle spices can bring interest back without turning every meal into a project. Warm food often reads as more comforting than cold salads when motivation is low.',
      ],
    },
    {
      heading: 'Gentle structure beats nagging',
      paragraphs: [
        'Pick roughly three meal times you can defend most days. Keep a “good enough” shelf: eggs, canned soup with beans, frozen vegetables, cheese, bread you like, fruit that does not need peeling drama.',
        'If giant portions feel like a wall, serve smaller amounts with permission to go back—sometimes the plate looks less like a test that way.',
      ],
      tip: 'If hydration is iffy, a glass of water before coffee can change how lunch feels two hours later—thirst still masquerades as hunger sometimes.',
    },
    {
      heading: 'When to treat appetite as urgent',
      paragraphs: [
        'Sudden change, trouble swallowing, pain with eating, vomiting, or unintentional weight loss deserves a clinician. This article is for the slow drift and the confusing weeks—not for red-flag symptoms.',
      ],
    },
    {
      heading: 'Liquids, snacks, and bridges',
      paragraphs: [
        'On low-motivation days, smoothies with yogurt, milk-based cocoa, and blended vegetable soups can be bridges—not replacements for all meals forever, but tools that keep energy steadier than skipping and rebounding.',
      ],
    },
    {
      heading: 'Keeping dignity at the table',
      paragraphs: [
        'If you are cooking for a parent, involve choices: soup versus sandwich, this bowl versus that mug. Dignity supports appetite; infantilizing portions or commentary usually does the opposite.',
      ],
    },
  ],
  faqs: [
    {
      q: 'When should I worry?',
      a: 'Rapid unintentional weight loss, persistent nausea, trouble swallowing, or sharp appetite change over days to weeks should prompt medical evaluation.',
    },
    {
      q: 'Are liquids instead of solids okay?',
      a: 'Short-term bridges are fine; keep protein and fiber in the mix so blood sugar does not roller-coaster. Long-term only-liquid diets need professional planning.',
    },
    {
      q: 'Why am I hungrier at night?',
      a: 'Under-fueling earlier, boredom, stress, short sleep, and habit loops all show up after dark. Name the night you are having before choosing the fix.',
    },
    {
      q: 'Do appetite stimulants exist?',
      a: 'Sometimes clinicians use medications for specific cases; self-experimenting is risky. Bring a two-week food and symptom log to an appointment instead.',
    },
  ],
  related: [
    { title: 'Why Hydration Gets Harder With Age', path: '/nutrition-science/why-hydration-gets-harder-with-age' },
    { title: 'Best Foods for Healthy Aging', path: '/nutrition-science/best-foods-for-healthy-aging' },
  ],
};

export default function WhyAppetiteChangesAfter50() {
  return <ScienceArticlePage spec={SPEC} />;
}
