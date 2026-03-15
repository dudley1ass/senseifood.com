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
// New pages
import WhyCookiesChewy from "./pages/WhyCookiesChewy";
import WhyCookiesGetCrispy from "./pages/WhyCookiesGetCrispy";
import WhyCookiesFlatten from "./pages/WhyCookiesFlatten";
import WhyCookiesSpreadTooMuch from "./pages/WhyCookiesSpreadTooMuch";
import WhyCookiesDontSpread from "./pages/WhyCookiesDontSpread";
import WhyCakesCrackOnTop from "./pages/WhyCakesCrackOnTop";
import WhyCakesAreDense from "./pages/WhyCakesAreDense";
import WhyCakesStickToPan from "./pages/WhyCakesStickToPan";
import WhyCakesDryOut from "./pages/WhyCakesDryOut";
import WhyPieCrustShrinks from "./pages/WhyPieCrustShrinks";
import WhyIceCreamMeltsFast from "./pages/WhyIceCreamMeltsFast";
import WhyIceCreamIsCreamy from "./pages/WhyIceCreamIsCreamy";
import WhyIceCreamGetsFreezerBurn from "./pages/WhyIceCreamGetsFreezerBurn";
import WhyCoffeeTastesWeak from "./pages/WhyCoffeeTastesWeak";
import WhyCoffeeTastesBurnt from "./pages/WhyCoffeeTastesBurnt";
import WhyCoffeeTastesWatery from "./pages/WhyCoffeeTastesWatery";

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
      { path: "cookie-science/why-cookies-are-chewy", Component: WhyCookiesChewy },
      { path: "cookie-science/why-cookies-get-crispy", Component: WhyCookiesGetCrispy },
      { path: "cookie-science/why-cookies-flatten", Component: WhyCookiesFlatten },
      { path: "cookie-science/why-cookies-spread-too-much", Component: WhyCookiesSpreadTooMuch },
      { path: "cookie-science/why-cookies-dont-spread", Component: WhyCookiesDontSpread },

      // Bread Science
      { path: "bread-science/why-bread-rises", Component: WhyBreadRises },
      { path: "bread-science/how-yeast-works", Component: HowYeastWorks },

      // Cake Science
      { path: "cake-science/why-cakes-dome", Component: WhyCakesDome },
      { path: "cake-science/why-cakes-collapse", Component: WhyCakesCollapse },
      { path: "cake-science/why-cakes-sink", Component: WhyCakesSink },
      { path: "cake-science/why-cakes-crack-on-top", Component: WhyCakesCrackOnTop },
      { path: "cake-science/why-cakes-are-dense", Component: WhyCakesAreDense },
      { path: "cake-science/why-cakes-stick-to-pan", Component: WhyCakesStickToPan },
      { path: "cake-science/why-cakes-dry-out", Component: WhyCakesDryOut },

      // Pie Science
      { path: "pie-science/why-pie-crust-is-flaky", Component: WhyPieCrustFlaky },
      { path: "pie-science/why-pie-crust-shrinks", Component: WhyPieCrustShrinks },

      // Ice Cream Science
      { path: "ice-cream-science/why-ice-cream-gets-icy", Component: WhyIceCreamGetsIcy },
      { path: "ice-cream-science/why-ice-cream-melts-fast", Component: WhyIceCreamMeltsFast },
      { path: "ice-cream-science/why-ice-cream-is-creamy", Component: WhyIceCreamIsCreamy },
      { path: "ice-cream-science/why-ice-cream-gets-freezer-burn", Component: WhyIceCreamGetsFreezerBurn },

      // Coffee Science
      { path: "coffee-science/coffee-extraction-science", Component: CoffeeExtractionScience },
      { path: "coffee-science/why-coffee-tastes-bitter", Component: WhyCoffeeTastesBitter },
      { path: "coffee-science/why-coffee-tastes-sour", Component: WhyCoffeeSour },
      { path: "coffee-science/why-coffee-tastes-weak", Component: WhyCoffeeTastesWeak },
      { path: "coffee-science/why-coffee-tastes-burnt", Component: WhyCoffeeTastesBurnt },
      { path: "coffee-science/why-coffee-tastes-watery", Component: WhyCoffeeTastesWatery },
    ],
  },
]);
