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
      
      // Cookie Science
      { path: "cookie-science/why-cookies-spread", Component: WhyCookiesSpread },
      { path: "cookie-science/brown-sugar-vs-white-sugar", Component: BrownSugarVsWhiteSugar },
      { path: "cookie-science/why-cookies-turn-hard", Component: WhyCookiesHard },
      
      // Bread Science
      { path: "bread-science/why-bread-rises", Component: WhyBreadRises },
      { path: "bread-science/how-yeast-works", Component: HowYeastWorks },
      
      // Cake Science
      { path: "cake-science/why-cakes-dome", Component: WhyCakesDome },
      { path: "cake-science/why-cakes-collapse", Component: WhyCakesCollapse },
      { path: "cake-science/why-cakes-sink", Component: WhyCakesSink },
      
      // Pie Science
      { path: "pie-science/why-pie-crust-is-flaky", Component: WhyPieCrustFlaky },
      
      // Ice Cream Science
      { path: "ice-cream-science/why-ice-cream-gets-icy", Component: WhyIceCreamGetsIcy },
      
      // Coffee Science
      { path: "coffee-science/coffee-extraction-science", Component: CoffeeExtractionScience },
      { path: "coffee-science/why-coffee-tastes-bitter", Component: WhyCoffeeTastesBitter },
      { path: "coffee-science/why-coffee-tastes-sour", Component: WhyCoffeeSour },
    ],
  },
]);