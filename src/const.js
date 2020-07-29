const MAX_STARS = 5;
const MIN_REVIEW = 0;
const MAX_REVIEW = 10;

const PLACE_TYPES = [`Apartment`, `Private room`, `House`, `Hotel`];

const City = {
  AMSTERDAM: `Amsterdam`,
  BRUSSELS: `Brussels`,
  COLOGNE: `Cologne`,
  DUSSELDORF: `Hamburg`,
  HAMBURG: `Hamburg`,
  PARIS: `Paris`,
};

const Coordinate = {
  AMSTERDAM: [52.370216, 4.895168],
  BRUSSELS: [50.8502777777778, 4.3486111111111],
  COLOGNE: [50.9330555555556, 6.95],
  DUSSELDORF: [51.2216666666667, 6.7761111111111],
  HAMBURG: [53.5752777777778, 10.0152777777778],
  PARIS: [48.8652777777778, 2.3486111111111],
};

const MapClassName = {
  MAIN: `cities__map`,
  PROPERTY: `property__map`,
};

const PlacesClassNames = {
  MAIN: [`cities__places-list`, `cities__place-card`],
  PROPERTY: [`near-places__list`, `near-places__card`],
};

export {
  City,
  Coordinate,
  MapClassName,
  MAX_REVIEW,
  MAX_STARS,
  MIN_REVIEW,
  PLACE_TYPES,
  PlacesClassNames
};
