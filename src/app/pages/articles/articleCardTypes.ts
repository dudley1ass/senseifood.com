/** Card shown on the /articles library grid — see `allArticlesCatalog.ts` for the full single roster. */
export type ArticleLibraryCard = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  color: string;
  url: string;
  /** CookieSensei, Bread Sensei, Sauce Sensei, Fix My Recipe, etc. */
  senseiPei: string;
};
