import {reducer, ActionCreator, ActionType} from "./reducer";
import {offers} from "./mocks/offers.js";
import {getCityList, filterOffersByCity} from "./utils/common.js";
import {SORTING_ITEMS} from "./const.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    offers,
    cities: getCityList(offers),
    offersByCity: filterOffersByCity(offers, offers[0].city.name),
    activeOffer: false,
    activeCity: offers[0].city.name,
    sortingType: SORTING_ITEMS[0],
    hoverCityId: false,
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

  it(`Action creator for selectSortingType`, function () {
    expect(ActionCreator.selectSortingType(SORTING_ITEMS[0])).toEqual({
      type: ActionType.SELECT_SORTING_TYPE,
      payload: SORTING_ITEMS[0],
    });
  });

  it(`Action creator for changeHoverCityId`, function () {
    expect(ActionCreator.selectHoverCityId(1)).toEqual({
      type: ActionType.SELECT_HOVER_CITY_ID,
      payload: 1,
    });
  });
});
