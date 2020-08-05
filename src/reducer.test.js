import {reducer, ActionCreator, ActionType} from "./reducer.js";
import {offers} from "./mocks/offers.js";

const citiesOffersList = [...new Set(offers.map((offer) => offer.city))];

describe(`Action creators for change current city return correct action`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Paris`)).toEqual({
      type: ActionType.CHANGE_CURRENT_CITY,
      payload: `Paris`,
    });
  });
  it(`Reducer should change city by a given value`, () => {
    expect(reducer({
      currentCity: `Amsterdam`,
      offers,
      citiesOffersList
    }, {
      type: ActionType.CHANGE_CURRENT_CITY,
      payload: `Paris`,
    })).toEqual({
      currentCity: `Paris`,
      offers,
      citiesOffersList
    });
  });
});
