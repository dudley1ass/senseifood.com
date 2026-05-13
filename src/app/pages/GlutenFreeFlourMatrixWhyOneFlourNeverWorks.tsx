import { ScienceArticlePage } from '../components/ScienceArticlePage';
import type { ScienceArticleSpec } from '../data/scienceArticleTypes';

/** Article content for this route — lives in this file only. */
const SPEC: ScienceArticleSpec = {
  slug: 'gluten-free-flour-matrix-why-one-flour-never-works',
  segment: 'baking-science',
  categoryLabel: 'Baking Science',
  title: 'The Gluten-Free Flour Matrix: Why One Flour Never Works',
  subtitle:
    'Wheat flour is a general contractor. Gluten-free ingredients are specialists. A successful blend assigns each flour a job—body, tenderness, stretch, and binding—instead of asking rice flour to play every role at once.',
  readTime: '9 min read',
  emoji: '??',
  fixRecipe: {
    category: 'baking',
    problem: 'general',
  },
  quickAnswer:
    'One gluten-free flour rarely succeeds because no single starch or nut meal simultaneously provides structure, tenderness, elasticity, and stable moisture. Blends pair a structural flour (like rice or sorghum) with tenderizing meals, elastic starches (tapioca, potato), and a touch of binder so the matrix can hold gas and slice cleanly.',
  intro:
    'If you have ever swapped a cup of wheat for a cup of rice and met a brick, you already felt the matrix problem. Rice brings starch and weight; it does not bring wheat’s spring. Almond brings fat and tenderness; alone it crumbles. Tapioca brings stretch; alone it can feel gummy. Commercial blends exist because someone already negotiated those tradeoffs for a narrow range of recipes. Your kitchen wins when you think in roles—what needs to be strong, what needs to be soft, what needs to grab water—then assign ingredients to those roles.',
  sections: [
    {
      heading: 'Four buckets to balance',
      paragraphs: [
        'Structure flours (rice, sorghum, millet) give bulk. Tender flours (almond, coconut in careful amounts) soften. Elastic starches (tapioca, potato, cornstarch) change chew and spread. Binders (xanthan, guar, psyllium) stitch the network so bubbles do not flee. Most failures are a missing bucket, not a “bad” flour.',
      ],
    },
    {
      heading: 'Why one bag cannot be best at everything',
      paragraphs: [
        'Bread wants gas retention; cake wants a fine, even crumb; cookies want controlled spread. Each style stresses the matrix differently, which is why an all-purpose gluten-free blend might nail muffins but feel wrong in artisan bread. Category-specific tuning is normal, not a sign you failed.',
      ],
    },
    {
      heading: 'Ranges are starting lines, not laws',
      paragraphs: [
        'Guides that quote percentages for structure vs starch are training wheels. Hydration, eggs, sugar type, and bake profile still move the outcome. Change one lever at a time when you adjust a blend so you know what moved.',
      ],
      tip: 'If the crumb is dry and sandy, look first at hydration and bake endpoint before you throw more gum at the problem; if it is gummy, elastic starch or binder may be high relative to structure.',
    },
    {
      heading: 'How Fix My Recipe helps',
      paragraphs: [
        'When weights are logged, the tool can highlight lopsided fat or liquid against the style you are baking, which is often faster than guessing which flour “feels wrong.”',
      ],
    },
  ],
  faqs: [
    {
      q: 'Can I bake with only oat flour?',
      a: 'Sometimes, for specific recipes, but expect different hydration and less classic rise unless you add binders and balance starches for that formula.',
    },
    {
      q: 'Do I need a kitchen scale?',
      a: 'Strongly yes for gluten-free work—small flour differences change hydration windows quickly.',
    },
  ],
  related: [
    { title: 'Why Gluten Matters (and What You Are Replacing)', path: '/baking-science/why-gluten-matters-and-what-youre-replacing' },
    { title: 'Hydrocolloids: Xanthan and Guar Gum', path: '/baking-science/hydrocolloids-secret-weapon-xanthan-guar-gum' },
    { title: 'Leavening Without Gluten', path: '/baking-science/leavening-without-gluten-why-rise-is-harder' },
  ],
};

export default function GlutenFreeFlourMatrixWhyOneFlourNeverWorks() {
  return <ScienceArticlePage spec={SPEC} />;
}
