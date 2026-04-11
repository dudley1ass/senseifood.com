import type { ScienceArticleSpec } from '../scienceArticleTypes';

export type ArticleEnrichment = {
  introAppend: string;
  sections: ScienceArticleSpec['sections'];
  faqs?: ScienceArticleSpec['faqs'];
};
