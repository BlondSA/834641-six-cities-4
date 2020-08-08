const MAX_STARS = 5;
const MIN_REVIEW = 0;
const MAX_REVIEW = 10;

const OFFER_TYPES = [`apartment`, `private room`, `house`, `hotel`];

const City = {
  AMSTERDAM: `Amsterdam`,
  BRUSSELS: `Brussels`,
  COLOGNE: `Cologne`,
  DUSSELDORF: `Hamburg`,
  HAMBURG: `Hamburg`,
  PARIS: `Paris`,
};

const MapClassName = {
  MAIN: `cities__map`,
  PROPERTY: `property__map`,
};

const OfferClassName = {
  MAIN: [`cities__places-list`, `cities__place-card`],
  PROPERTY: [`near-places__list`, `near-places__card`],
};

const SORTING_ITEMS = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`,
];

const SortingType = {
  PRICE: `price`,
  RATING: `rating`,
};

export {
  City,
  MapClassName,
  MAX_REVIEW,
  MAX_STARS,
  MIN_REVIEW,
  OFFER_TYPES,
  OfferClassName,
  SORTING_ITEMS,
  SortingType,
};
