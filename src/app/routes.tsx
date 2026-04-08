import { createBrowserRouter } from "react-router";
import Root from "./Root";
import { appRouteChildren } from "./appRouteChildren";

/** Same tree passed to createBrowserRouter — re-export shape for tooling that needs the root layout. */
export const rootRouteDefinition = {
  path: "/",
  Component: Root,
  children: appRouteChildren,
};

export const router = createBrowserRouter([rootRouteDefinition]);
