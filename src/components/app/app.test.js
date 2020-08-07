import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {offers} from "../../mocks/offers.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {cities} from "../../mocks/cities.js";
import {SORTING_ITEMS} from "../../const.js";

const mockStore = configureStore([]);

describe(`Testing <App/>`, () => {
  it(`App component correctly show <Main/>`, () => {
    const store = mockStore({
      activeCity: cities[3],
      offersByCity: offers.slice(0, 3),
      activeOffer: false,
      cities,
      sortingType: SORTING_ITEMS[0],
      hoverCityId: false,
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>,
          {
            createNodeMock: () => {
              return document.createElement(`div`);
            },
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Offer-Details`, () => {
    const store = mockStore({
      activeCity: cities[3],
      offersByCity: offers.slice(0, 3),
      activeOffer: offers[0],
      cities,
      sortingType: SORTING_ITEMS[0],
      hoverCityId: false,
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>, {
            createNodeMock: () => {
              return document.createElement(`div`);
            },
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
