import React from "react";
import renderer from "react-test-renderer";
import OfferDetails from "../offer-details/offer-details.jsx";
import {offers} from "../../mocks/offers.js";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {SORTING_ITEMS} from "../../const.js";

const mockStore = configureStore([]);
describe(`Testing <OfferDetails/>`, () => {
  it(`OfferDetails rendered correctly`, () => {
    const store = mockStore({
      offer: offers[0],
      offersByCity: offers.slice(0, 3),
      sortingType: SORTING_ITEMS[0],
      hoverCityId: false,
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <OfferDetails
              offer={offers[0]}
              offersByCity={offers.slice(0, 3)}
            />
          </Provider>
          ,
          {
            createNodeMock: () => {
              return document.createElement(`div`);
            },
          }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
