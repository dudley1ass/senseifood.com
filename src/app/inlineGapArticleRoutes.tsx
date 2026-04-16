/**
 * Hand-maintained routes for topic-gap articles (full content lives in each page TSX).
 * Paths are also exported for prerender/sitemap.
 */
import WhyCakesOilOut from './pages/WhyCakesOilOut';
import WhyCakesTasteFlat from './pages/WhyCakesTasteFlat';
import WhyCakesFormAThickCrust from './pages/WhyCakesFormAThickCrust';
import WhyCakesStickToThemselvesWhenLayering from './pages/WhyCakesStickToThemselvesWhenLayering';
import WhyCakesLoseHeightAfterFrosting from './pages/WhyCakesLoseHeightAfterFrosting';
import WhyPieFillingsTasteBland from './pages/WhyPieFillingsTasteBland';
import WhyFruitPiesTurnGrainy from './pages/WhyFruitPiesTurnGrainy';
import WhyCustardPiesCrack from './pages/WhyCustardPiesCrack';
import WhyPieCrustBlisters from './pages/WhyPieCrustBlisters';
import WhyDoubleCrustPiesTrapSteam from './pages/WhyDoubleCrustPiesTrapSteam';
import WhyIceCreamTastesTooSweet from './pages/WhyIceCreamTastesTooSweet';
import WhyIceCreamDoesntScoopSmoothly from './pages/WhyIceCreamDoesntScoopSmoothly';
import WhyIceCreamLosesAirOverrunCollapse from './pages/WhyIceCreamLosesAirOverrunCollapse';
import WhyIceCreamDevelopsIceLayersOverTime from './pages/WhyIceCreamDevelopsIceLayersOverTime';
import WhyIceCreamBaseCurdlesBeforeChurning from './pages/WhyIceCreamBaseCurdlesBeforeChurning';
import WhySaucesBreakWhenReheated from './pages/WhySaucesBreakWhenReheated';
import WhySaucesTasteGoodHotButFlatCold from './pages/WhySaucesTasteGoodHotButFlatCold';
import WhySaucesSeparateOnThePlate from './pages/WhySaucesSeparateOnThePlate';
import WhySaucesTasteMetallic from './pages/WhySaucesTasteMetallic';
import WhySaucesClashWithProtein from './pages/WhySaucesClashWithProtein';
import WhyBreadSmellsYeasty from './pages/WhyBreadSmellsYeasty';
import WhyBreadHasNoFlavor from './pages/WhyBreadHasNoFlavor';
import WhyBreadCrumbIsTooTight from './pages/WhyBreadCrumbIsTooTight';
import WhyBreadHasLargeHoles from './pages/WhyBreadHasLargeHoles';
import WhyBreadDoughTearsInsteadOfStretching from './pages/WhyBreadDoughTearsInsteadOfStretching';
import WhyCookiesTasteFloury from './pages/WhyCookiesTasteFloury';
import WhyCookiesHaveNoDepthOfFlavor from './pages/WhyCookiesHaveNoDepthOfFlavor';
import WhyCookiesStickToEachOtherAfterBaking from './pages/WhyCookiesStickToEachOtherAfterBaking';
import WhyCookiesPuffInsteadOfSpread from './pages/WhyCookiesPuffInsteadOfSpread';
import WhyCookiesTasteBetterTheNextDay from './pages/WhyCookiesTasteBetterTheNextDay';
import WhyCoffeeTastesThinButBitter from './pages/WhyCoffeeTastesThinButBitter';
import WhyCoffeeAromaDoesntMatchTaste from './pages/WhyCoffeeAromaDoesntMatchTaste';
import WhyCoffeeTastesBetterAtCertainTemperatures from './pages/WhyCoffeeTastesBetterAtCertainTemperatures';
import WhyCoffeeWaterChemistryMatters from './pages/WhyCoffeeWaterChemistryMatters';
import WhyEspressoChannels from './pages/WhyEspressoChannels';

export const INLINE_GAP_ARTICLE_PATHS: string[] = [
  'cake-science/why-cakes-oil-out',
  'cake-science/why-cakes-taste-flat',
  'cake-science/why-cakes-form-a-thick-crust',
  'cake-science/why-cakes-stick-to-themselves-when-layering',
  'cake-science/why-cakes-lose-height-after-frosting',
  'pie-science/why-pie-fillings-taste-bland',
  'pie-science/why-fruit-pies-turn-grainy',
  'pie-science/why-custard-pies-crack',
  'pie-science/why-pie-crust-blisters',
  'pie-science/why-double-crust-pies-trap-steam',
  'ice-cream-science/why-ice-cream-tastes-too-sweet',
  'ice-cream-science/why-ice-cream-doesnt-scoop-smoothly',
  'ice-cream-science/why-ice-cream-loses-air-overrun-collapse',
  'ice-cream-science/why-ice-cream-develops-ice-layers-over-time',
  'ice-cream-science/why-ice-cream-base-curdles-before-churning',
  'sauce-science/why-sauces-break-when-reheated',
  'sauce-science/why-sauces-taste-good-hot-but-flat-cold',
  'sauce-science/why-sauces-separate-on-the-plate',
  'sauce-science/why-sauces-taste-metallic',
  'sauce-science/why-sauces-clash-with-protein',
  'bread-science/why-bread-smells-yeasty',
  'bread-science/why-bread-has-no-flavor',
  'bread-science/why-bread-crumb-is-too-tight',
  'bread-science/why-bread-has-large-holes',
  'bread-science/why-bread-dough-tears-instead-of-stretching',
  'cookie-science/why-cookies-taste-floury',
  'cookie-science/why-cookies-have-no-depth-of-flavor',
  'cookie-science/why-cookies-stick-to-each-other-after-baking',
  'cookie-science/why-cookies-puff-instead-of-spread',
  'cookie-science/why-cookies-taste-better-the-next-day',
  'coffee-science/why-coffee-tastes-thin-but-bitter',
  'coffee-science/why-coffee-aroma-doesnt-match-taste',
  'coffee-science/why-coffee-tastes-better-at-certain-temperatures',
  'coffee-science/why-coffee-water-chemistry-matters',
  'coffee-science/why-espresso-channels',
];

export const inlineGapArticleRoutes = [
  { path: 'cake-science/why-cakes-oil-out', Component: WhyCakesOilOut },
  { path: 'cake-science/why-cakes-taste-flat', Component: WhyCakesTasteFlat },
  { path: 'cake-science/why-cakes-form-a-thick-crust', Component: WhyCakesFormAThickCrust },
  { path: 'cake-science/why-cakes-stick-to-themselves-when-layering', Component: WhyCakesStickToThemselvesWhenLayering },
  { path: 'cake-science/why-cakes-lose-height-after-frosting', Component: WhyCakesLoseHeightAfterFrosting },
  { path: 'pie-science/why-pie-fillings-taste-bland', Component: WhyPieFillingsTasteBland },
  { path: 'pie-science/why-fruit-pies-turn-grainy', Component: WhyFruitPiesTurnGrainy },
  { path: 'pie-science/why-custard-pies-crack', Component: WhyCustardPiesCrack },
  { path: 'pie-science/why-pie-crust-blisters', Component: WhyPieCrustBlisters },
  { path: 'pie-science/why-double-crust-pies-trap-steam', Component: WhyDoubleCrustPiesTrapSteam },
  { path: 'ice-cream-science/why-ice-cream-tastes-too-sweet', Component: WhyIceCreamTastesTooSweet },
  { path: 'ice-cream-science/why-ice-cream-doesnt-scoop-smoothly', Component: WhyIceCreamDoesntScoopSmoothly },
  { path: 'ice-cream-science/why-ice-cream-loses-air-overrun-collapse', Component: WhyIceCreamLosesAirOverrunCollapse },
  { path: 'ice-cream-science/why-ice-cream-develops-ice-layers-over-time', Component: WhyIceCreamDevelopsIceLayersOverTime },
  { path: 'ice-cream-science/why-ice-cream-base-curdles-before-churning', Component: WhyIceCreamBaseCurdlesBeforeChurning },
  { path: 'sauce-science/why-sauces-break-when-reheated', Component: WhySaucesBreakWhenReheated },
  { path: 'sauce-science/why-sauces-taste-good-hot-but-flat-cold', Component: WhySaucesTasteGoodHotButFlatCold },
  { path: 'sauce-science/why-sauces-separate-on-the-plate', Component: WhySaucesSeparateOnThePlate },
  { path: 'sauce-science/why-sauces-taste-metallic', Component: WhySaucesTasteMetallic },
  { path: 'sauce-science/why-sauces-clash-with-protein', Component: WhySaucesClashWithProtein },
  { path: 'bread-science/why-bread-smells-yeasty', Component: WhyBreadSmellsYeasty },
  { path: 'bread-science/why-bread-has-no-flavor', Component: WhyBreadHasNoFlavor },
  { path: 'bread-science/why-bread-crumb-is-too-tight', Component: WhyBreadCrumbIsTooTight },
  { path: 'bread-science/why-bread-has-large-holes', Component: WhyBreadHasLargeHoles },
  { path: 'bread-science/why-bread-dough-tears-instead-of-stretching', Component: WhyBreadDoughTearsInsteadOfStretching },
  { path: 'cookie-science/why-cookies-taste-floury', Component: WhyCookiesTasteFloury },
  { path: 'cookie-science/why-cookies-have-no-depth-of-flavor', Component: WhyCookiesHaveNoDepthOfFlavor },
  { path: 'cookie-science/why-cookies-stick-to-each-other-after-baking', Component: WhyCookiesStickToEachOtherAfterBaking },
  { path: 'cookie-science/why-cookies-puff-instead-of-spread', Component: WhyCookiesPuffInsteadOfSpread },
  { path: 'cookie-science/why-cookies-taste-better-the-next-day', Component: WhyCookiesTasteBetterTheNextDay },
  { path: 'coffee-science/why-coffee-tastes-thin-but-bitter', Component: WhyCoffeeTastesThinButBitter },
  { path: 'coffee-science/why-coffee-aroma-doesnt-match-taste', Component: WhyCoffeeAromaDoesntMatchTaste },
  { path: 'coffee-science/why-coffee-tastes-better-at-certain-temperatures', Component: WhyCoffeeTastesBetterAtCertainTemperatures },
  { path: 'coffee-science/why-coffee-water-chemistry-matters', Component: WhyCoffeeWaterChemistryMatters },
  { path: 'coffee-science/why-espresso-channels', Component: WhyEspressoChannels },
] as const;
