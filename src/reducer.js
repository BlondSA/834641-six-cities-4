import {offers} from "./mocks/offers.js";
import {extend, getCityList, filterOffersByCity} from "./utils/common.js";
import {SORTING_ITEMS} from "./const.js";

const initialState = {
  offers,
  cities: getCityList(offers),
  offersByCity: filterOffersByCity(offers, offers[0].city.name),
  activeOffer: false,
  activeCity: offers[0].city.name,
  sortingType: SORTING_ITEMS[0],
  hoverCityId: false,
};

const ActionType = {
  SELECT_CITY: `SELECT_CITY`,
  SELECT_OFFERS: `SELECT_OFFERS`,
  SELECT_SORTING_TYPE: `SELECT_SORTING_TYPE`,
  SELECT_HOVER_CITY_ID: `SELECT_HOVER_CITY_ID`,
};

const ActionCreator = {
  selectActiveCity: (city) => ({
    type: ActionType.SELECT_CITY,
    payload: city,
  }),

  selectActiveOffer: (offer) => ({
    type: ActionType.SELECT_OFFERS,
    payload: offer,
  }),

  selectSortingType: (sortingType) => ({
    type: ActionType.SELECT_SORTING_TYPE,
    payload: sortingType,
  }),

  selectHoverCityId: (offerId) => ({
    type: ActionType.SELECT_HOVER_CITY_ID,
    payload: offerId,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_CITY:
      return extend(state, {
        activeCity: action.payload,
        offersByCity: filterOffersByCity(state.offers, action.payload),
        sortingType: SORTING_ITEMS[0],
      });
    case ActionType.SELECT_OFFERS:
      return extend(state, {activeOffer: action.payload});
    case ActionType.SELECT_SORTING_TYPE:
      return extend(state, {sortingType: action.payload});
    case ActionType.SELECT_HOVER_CITY_ID:
      return extend(state, {hoverCityId: action.payload});
    default:
      return state;
  }
};

export {ActionCreator, ActionType, reducer};
