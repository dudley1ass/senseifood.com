import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

const SPEC: ScienceArticleSpec = {
  slug: 'why-kids-reject-vegetables',
  segment: 'nutrition-science',
  categoryLabel: 'Nutrition',
  title: 'Why Kids Reject Vegetables',
  subtitle:
    'Many vegetables bring bitter compounds and fibrous textures that read as “loud” to sensitive young tasters. Evolution also nudges kids toward caution with novel plants—food neophobia is a safety feature, not a referendum on your cooking. When adults stay calm, curiosity has room to return on its own schedule.',
  readTime: '9 min read',
  emoji: '🥦',
  fixRecipe: { category: 'baking', problem: 'general' },
  quickAnswer:
    'Offer tiny tastes without pressure, pair vegetables with dips and foods they already trust, and roast or grill to sweeten edges. Keep modeling relaxed eating at shared meals; negotiation and bribery usually train kids to treat vegetables as a hurdle between them and dessert. If the “safe food list” shrinks fast or growth is off, ask your pediatrician or a feeding specialist early.',
  intro:
    "Picky phases are so common they are almost boring—unless you are living through dinner every night. Vegetables show up with bitterness, crunch, slime, seeds, and skins that can overwhelm a child who is also tired, distracted, or uneasy about control at the table.\n\nThis article separates biology from behavior myths. Sensitive kids are not “spoiled”; they are tasting the world at a different volume. Your job is to lower the stakes: one pea is still data for a brain learning what is safe.\n\nLong-term acceptance usually comes from repeated low-pressure exposure, not from winning a standoff. Think months, not one heroic Tuesday where you “made them try it.”",
  sections: [
    {
      heading: 'Bitterness, texture, and sensory honesty',
      paragraphs: [
        'Some children taste bitter compounds like PROP more intensely. Raw broccoli and dark greens can feel harsh while the same vegetable roasted with oil tastes like a different food.',
        'Texture matters as much as flavor: slippery canned green beans versus crisp snap peas hit different sensory buttons. Mash, roast, shred, or serve with dip—variety is exposure, not “sneaking.”',
      ],
    },
    {
      heading: 'Control, stress, and the dinner table as a stage',
      paragraphs: [
        'When meals become a performance review, kids defend territory the only way they can—by refusing. Neutral language (“this is pepper; it is crunchy”) beats moral framing (“good kids eat vegetables”).',
      ],
    },
    {
      heading: 'What actually improves acceptance over time',
      paragraphs: [
        'Seeing vegetables on the table counts even if they are not eaten. Helping wash or snap peas counts. A lick counts. Progress is nonlinear: Tuesday’s no can be May’s yes.',
        'Pairing with ranch, hummus, cheese, or fruit keeps nervous systems calmer than staring at a naked pile of leaves.',
      ],
      tip: 'Serve a tiny amount family-style so refusing does not feel like rejecting a mountain someone plated “for your own good.”',
    },
    {
      heading: 'Purees and hiding: helpful or sneaky?',
      paragraphs: [
        'Blending vegetables into sauces can add nutrients on a rough week, but kids also need honest exposure to learn long-term acceptance. A split strategy—some hidden, some visible—often matches real life.',
      ],
    },
    {
      heading: 'When picky is more than a phase',
      paragraphs: [
        'If swallowing is hard, gagging is frequent, weight drops, or anxiety spikes around food, ask professionals. Some kids need occupational therapy or feeding therapy—not harsher parenting.',
      ],
    },
    {
      heading: 'Keeping adult sanity intact',
      paragraphs: [
        'You are allowed to serve vegetables without turning every bite into a lesson. Breathe, eat your own vegetables without commentary, and protect sleep—tired kids are louder refusers.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Should I hide veggies in sauces?',
      a: 'Fine for nutrients sometimes; balance with visible exposure so skills grow, not just grams.',
    },
    {
      q: 'When should I get help?',
      a: 'Falling growth curves, very short safe-food lists, frequent gagging, or fear of choking deserve pediatric guidance.',
    },
    {
      q: 'Do I have to clean my plate?',
      a: 'No—pressure often worsens refusal. Division of responsibility models work better for many families.',
    },
    {
      q: 'Are multivitamins the fix?',
      a: 'They can patch gaps short term; they rarely teach kids to enjoy plants. Use them as bridges with clinician input, not replacements for exposure.',
    },
  ],
  related: [
    { title: 'How to Introduce New Foods to Kids', path: '/nutrition-science/how-to-introduce-new-foods-to-kids' },
    { title: 'How to Build Healthier Kids Meals Without Food Fights', path: '/nutrition-science/how-to-build-healthier-kids-meals-without-food-fights' },
  ],
};

export default function WhyKidsRejectVegetables() {
  return <ScienceArticlePage spec={SPEC} />;
}
