import type { RecipeCategory } from '../diagnostics/types';

export type ScienceArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: { title?: string; text: string }[];
  tip?: string;
};

export type ScienceArticleSpec = {
  slug: string;
  segment:
    | 'bread-science'
    | 'cookie-science'
    | 'cake-science'
    | 'pie-science'
    | 'ice-cream-science'
    | 'coffee-science';
  categoryLabel: string;
  title: string;
  subtitle: string;
  readTime: string;
  level?: string;
  emoji: string;
  quickAnswer: string;
  intro: string;
  sections: ScienceArticleSection[];
  faqs?: { q: string; a: string }[];
  related: { title: string; path: string }[];
  /** Deep link for in-page CTAs (must match FixRecipe PROBLEM_OPTIONS). */
  fixRecipe: { category: RecipeCategory; problem: string };
};

export function articlePath(spec: ScienceArticleSpec): string {
  return `${spec.segment}/${spec.slug}`;
}
