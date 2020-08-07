import {reducer, ActionCreator, ActionType} from "./reducer.js";
import {offers} from "./mocks/offers.js";
import {getCityList, filterOffersByCity} from "./utils/common.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    offers,
    cities: getCityList(offers),
    offersByCity: filterOffersByCity(offers, offers[0].city.name),
    activeOffer: false,
    activeCity: offers[0].city.name,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for selectActiveCity`, function () {
    expect(ActionCreator.selectActiveCity(offers[0].city.name)).toEqual({
      type: ActionType.SELECT_CITY,
      payload: offers[0].city.name,
    });
  });

  it(`Action creator for selectActiveOffer`, function () {
    expect(ActionCreator.selectActiveOffer(offers[0])).toEqual({
      type: ActionType.SELECT_OFFERS,
      payload: offers[0],
    });
  });
});
