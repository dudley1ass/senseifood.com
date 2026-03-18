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

// Batch 1 - previously added
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

// Batch 2 - Cookie Science expansion
import WhyCookiesBurnOnBottom from "./pages/WhyCookiesBurnOnBottom";
import WhyCookiesCrackOnTop from "./pages/WhyCookiesCrackOnTop";
import WhyCookiesTurnCakey from "./pages/WhyCookiesTurnCakey";
import WhyCookiesBrown from "./pages/WhyCookiesBrown";
import WhyCookiesStickToPan from "./pages/WhyCookiesStickToPan";
import WhyCookiesSpreadUnevenly from "./pages/WhyCookiesSpreadUnevenly";
import WhyCookiesTurnOily from "./pages/WhyCookiesTurnOily";
import WhyCookiesTasteBitter from "./pages/WhyCookiesTasteBitter";
import WhyCookiesGetHardAfterBaking from "./pages/WhyCookiesGetHardAfterBaking";
import WhyCookiesRiseThenFall from "./pages/WhyCookiesRiseThenFall";
import WhyCookiesBakeFasterOnEdges from "./pages/WhyCookiesBakeFasterOnEdges";
import WhyCookiesChangeColor from "./pages/WhyCookiesChangeColor";

// Batch 2 - Cake Science expansion
import WhyCakesRise from "./pages/WhyCakesRise";
import WhyCakesBrown from "./pages/WhyCakesBrown";
import WhyCakesStickToPaperLiners from "./pages/WhyCakesStickToPaperLiners";
import WhyCakesHaveLargeHoles from "./pages/WhyCakesHaveLargeHoles";
import WhyCakesFallAfterBaking from "./pages/WhyCakesFallAfterBaking";
import WhyCakesTasteDry from "./pages/WhyCakesTasteDry";
import WhyCakesTurnGummy from "./pages/WhyCakesTurnGummy";
import WhyCakesRiseUnevenly from "./pages/WhyCakesRiseUnevenly";
import WhyCakesTurnRubbery from "./pages/WhyCakesTurnRubbery";
import WhyCakesStickToCoolingRack from "./pages/WhyCakesStickToCoolingRack";

// Batch 2 - Coffee Science expansion
import WhyCoffeeSmellsGood from "./pages/WhyCoffeeSmellsGood";
import WhyCoffeeLosesFlavor from "./pages/WhyCoffeeLosesFlavor";
import WhyCoffeeTastesAcidic from "./pages/WhyCoffeeTastesAcidic";
import WhyCoffeeMakesCrema from "./pages/WhyCoffeeMakesCrema";
import WhyCoffeeGetsOily from "./pages/WhyCoffeeGetsOily";
import WhyCoffeeGrindSizeMatters from "./pages/WhyCoffeeGrindSizeMatters";
import WhyCoffeeBrewingTimeMatters from "./pages/WhyCoffeeBrewingTimeMatters";
import WhyCoffeeTastesDifferentCold from "./pages/WhyCoffeeTastesDifferentCold";
import WhyCoffeeOxidizes from "./pages/WhyCoffeeOxidizes";
import WhyCoffeeBeansExpandWhenRoasted from "./pages/WhyCoffeeBeansExpandWhenRoasted";
import WhyCoffeeTastesSalty from "./pages/WhyCoffeeTastesSalty";
import WhyCoffeeStales from "./pages/WhyCoffeeStales";

import WhyPieCrustGetsTough from "./pages/WhyPieCrustGetsTough";
import ButterVsShorteningInCrust from "./pages/ButterVsShorteningInCrust";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "articles", Component: Articles },

      // Cookie Science (20 articles)
      { path: "cookie-science/why-cookies-spread", Component: WhyCookiesSpread },
      { path: "cookie-science/brown-sugar-vs-white-sugar", Component: BrownSugarVsWhiteSugar },
      { path: "cookie-science/why-cookies-turn-hard", Component: WhyCookiesHard },
      { path: "cookie-science/why-cookies-are-chewy", Component: WhyCookiesChewy },
      { path: "cookie-science/why-cookies-get-crispy", Component: WhyCookiesGetCrispy },
      { path: "cookie-science/why-cookies-flatten", Component: WhyCookiesFlatten },
      { path: "cookie-science/why-cookies-spread-too-much", Component: WhyCookiesSpreadTooMuch },
      { path: "cookie-science/why-cookies-dont-spread", Component: WhyCookiesDontSpread },
      { path: "cookie-science/why-cookies-burn-on-the-bottom", Component: WhyCookiesBurnOnBottom },
      { path: "cookie-science/why-cookies-crack-on-top", Component: WhyCookiesCrackOnTop },
      { path: "cookie-science/why-cookies-turn-cakey", Component: WhyCookiesTurnCakey },
      { path: "cookie-science/why-cookies-brown", Component: WhyCookiesBrown },
      { path: "cookie-science/why-cookies-stick-to-pan", Component: WhyCookiesStickToPan },
      { path: "cookie-science/why-cookies-spread-unevenly", Component: WhyCookiesSpreadUnevenly },
      { path: "cookie-science/why-cookies-turn-oily", Component: WhyCookiesTurnOily },
      { path: "cookie-science/why-cookies-taste-bitter", Component: WhyCookiesTasteBitter },
      { path: "cookie-science/why-cookies-get-hard-after-baking", Component: WhyCookiesGetHardAfterBaking },
      { path: "cookie-science/why-cookies-rise-then-fall", Component: WhyCookiesRiseThenFall },
      { path: "cookie-science/why-cookies-bake-faster-on-edges", Component: WhyCookiesBakeFasterOnEdges },
      { path: "cookie-science/why-cookies-change-color", Component: WhyCookiesChangeColor },

      // Bread Science (2 articles)
      { path: "bread-science/why-bread-rises", Component: WhyBreadRises },
      { path: "bread-science/how-yeast-works", Component: HowYeastWorks },

      // Cake Science (17 articles)
      { path: "cake-science/why-cakes-dome", Component: WhyCakesDome },
      { path: "cake-science/why-cakes-collapse", Component: WhyCakesCollapse },
      { path: "cake-science/why-cakes-sink", Component: WhyCakesSink },
      { path: "cake-science/why-cakes-crack-on-top", Component: WhyCakesCrackOnTop },
      { path: "cake-science/why-cakes-are-dense", Component: WhyCakesAreDense },
      { path: "cake-science/why-cakes-stick-to-pan", Component: WhyCakesStickToPan },
      { path: "cake-science/why-cakes-dry-out", Component: WhyCakesDryOut },
      { path: "cake-science/why-cakes-rise", Component: WhyCakesRise },
      { path: "cake-science/why-cakes-brown", Component: WhyCakesBrown },
      { path: "cake-science/why-cakes-stick-to-paper-liners", Component: WhyCakesStickToPaperLiners },
      { path: "cake-science/why-cakes-have-large-holes", Component: WhyCakesHaveLargeHoles },
      { path: "cake-science/why-cakes-fall-after-baking", Component: WhyCakesFallAfterBaking },
      { path: "cake-science/why-cakes-taste-dry", Component: WhyCakesTasteDry },
      { path: "cake-science/why-cakes-turn-gummy", Component: WhyCakesTurnGummy },
      { path: "cake-science/why-cakes-rise-unevenly", Component: WhyCakesRiseUnevenly },
      { path: "cake-science/why-cakes-turn-rubbery", Component: WhyCakesTurnRubbery },
      { path: "cake-science/why-cakes-stick-to-cooling-rack", Component: WhyCakesStickToCoolingRack },

      // Pie Science (4 articles)
      { path: "pie-science/why-pie-crust-is-flaky", Component: WhyPieCrustFlaky },
      { path: "pie-science/why-pie-crust-shrinks", Component: WhyPieCrustShrinks },

      { path: "pie-science/why-pie-crust-gets-tough", Component: WhyPieCrustGetsTough },
      { path: "pie-science/butter-vs-shortening-in-crust", Component: ButterVsShorteningInCrust },

      // Ice Cream Science (4 articles)
      { path: "ice-cream-science/why-ice-cream-gets-icy", Component: WhyIceCreamGetsIcy },
      { path: "ice-cream-science/why-ice-cream-melts-fast", Component: WhyIceCreamMeltsFast },
      { path: "ice-cream-science/why-ice-cream-is-creamy", Component: WhyIceCreamIsCreamy },
      { path: "ice-cream-science/why-ice-cream-gets-freezer-burn", Component: WhyIceCreamGetsFreezerBurn },

      // Coffee Science (18 articles)
      { path: "coffee-science/coffee-extraction-science", Component: CoffeeExtractionScience },
      { path: "coffee-science/why-coffee-tastes-bitter", Component: WhyCoffeeTastesBitter },
      { path: "coffee-science/why-coffee-tastes-sour", Component: WhyCoffeeSour },
      { path: "coffee-science/why-coffee-tastes-weak", Component: WhyCoffeeTastesWeak },
      { path: "coffee-science/why-coffee-tastes-burnt", Component: WhyCoffeeTastesBurnt },
      { path: "coffee-science/why-coffee-tastes-watery", Component: WhyCoffeeTastesWatery },
      { path: "coffee-science/why-coffee-smells-good", Component: WhyCoffeeSmellsGood },
      { path: "coffee-science/why-coffee-loses-flavor", Component: WhyCoffeeLosesFlavor },
      { path: "coffee-science/why-coffee-tastes-acidic", Component: WhyCoffeeTastesAcidic },
      { path: "coffee-science/why-coffee-makes-crema", Component: WhyCoffeeMakesCrema },
      { path: "coffee-science/why-coffee-gets-oily", Component: WhyCoffeeGetsOily },
      { path: "coffee-science/why-coffee-grind-size-matters", Component: WhyCoffeeGrindSizeMatters },
      { path: "coffee-science/why-coffee-brewing-time-matters", Component: WhyCoffeeBrewingTimeMatters },
      { path: "coffee-science/why-coffee-tastes-different-cold", Component: WhyCoffeeTastesDifferentCold },
      { path: "coffee-science/why-coffee-oxidizes", Component: WhyCoffeeOxidizes },
      { path: "coffee-science/why-coffee-beans-expand-when-roasted", Component: WhyCoffeeBeansExpandWhenRoasted },
      { path: "coffee-science/why-coffee-tastes-salty", Component: WhyCoffeeTastesSalty },
      { path: "coffee-science/why-coffee-stales", Component: WhyCoffeeStales },
    ],
  },
]);
