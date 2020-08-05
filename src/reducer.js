import {offers} from "./mocks/offers.js";
import {extend, filterOffersByCity, getCityList} from "./utils/common.js";

const initialState = {
  offers,
  cities: getCityList(offers),
  offersByCity: filterOffersByCity(offers, offers[0].city.name),
  activeOffer: false,
  activeCity: offers[0].city.name,
};

const ActionType = {
  SELECT_CITY: `SELECT_CITY`,
  SELECT_OFFERS: `SELECT_OFFERS`,
};

const ActionCreator = {
  selectActiveCity: (city) => ({
    type: ActionType.SELECT_CITY,
    payload: city,
  }),

  selectActiveOffers: (offer) => ({
    type: ActionType.SELECT_OFFERS,
    payload: offer,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_CITY:
      return extend(state, {
        activeCity: action.payload,
        activeOfferByCity: filterOffersByCity(state.offers, action.payload),
      });
    case ActionType.SELECT_OFFERS:
      return extend(state, {activeOffer: action.payload});
    default:
      return state;
  }
};

export {ActionType, reducer, ActionCreator};
