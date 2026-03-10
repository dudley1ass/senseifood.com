import { Outlet } from "react-router";
import { ScrollToTop } from "./components/ScrollToTop";
import { usePageTracking } from "./hooks/usePageTracking";

export default function Root() {
  usePageTracking();
  
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}