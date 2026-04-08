import { Outlet } from "react-router";
import { ArticleFixRecipeBar } from "./components/ArticleFixRecipeBar";
import { DocumentMeta } from "./components/DocumentMeta";
import { ScrollToTop } from "./components/ScrollToTop";
import { usePageTracking } from "./hooks/usePageTracking";

export default function Root() {
  usePageTracking();

  return (
    <>
      <DocumentMeta />
      <ScrollToTop />
      <Outlet />
      <ArticleFixRecipeBar />
    </>
  );
}