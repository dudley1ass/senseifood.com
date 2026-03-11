import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import WhyCookiesSpread from "./pages/WhyCookiesSpread";
import WhyIceCreamGetsIcy from "./pages/WhyIceCreamGetsIcy";
import CoffeeExtractionScience from "./pages/CoffeeExtractionScience";
import BrownSugarVsWhiteSugar from "./pages/BrownSugarVsWhiteSugar";
import WhyCoffeeTastesBitter from "./pages/WhyCoffeeTastesBitter";
import WhyCakesCollapse from "./pages/WhyCakesCollapse";
import WhyBreadRises from "./pages/WhyBreadRises";
import HowYeastWorks from "./pages/HowYeastWorks";
import WhyCakesDome from "./pages/WhyCakesDome";
import WhyCakesSink from "./pages/WhyCakesSink";
import WhyCookiesHard from "./pages/WhyCookiesHard";
import WhyCoffeeSour from "./pages/WhyCoffeeSour";
import WhyPieCrustFlaky from "./pages/WhyPieCrustFlaky";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "articles", Component: Articles },
      { path: "articles/why-cookies-spread", Component: WhyCookiesSpread },
      { path: "articles/why-ice-cream-gets-icy", Component: WhyIceCreamGetsIcy },
      { path: "articles/coffee-extraction-science", Component: CoffeeExtractionScience },
      { path: "articles/brown-sugar-vs-white-sugar", Component: BrownSugarVsWhiteSugar },
      { path: "articles/why-coffee-tastes-bitter", Component: WhyCoffeeTastesBitter },
      { path: "articles/why-cakes-collapse", Component: WhyCakesCollapse },
      { path: "articles/why-bread-rises", Component: WhyBreadRises },
      { path: "articles/how-yeast-works", Component: HowYeastWorks },
      { path: "articles/why-cakes-dome", Component: WhyCakesDome },
      { path: "articles/why-cakes-sink", Component: WhyCakesSink },
      { path: "articles/why-cookies-turn-hard", Component: WhyCookiesHard },
      { path: "articles/why-coffee-tastes-sour", Component: WhyCoffeeSour },
      { path: "articles/why-pie-crust-is-flaky", Component: WhyPieCrustFlaky },
    ],
  },
]);