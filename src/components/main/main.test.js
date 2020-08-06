import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {offers} from "../../mocks/offers.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {cities} from "../../mocks/cities.js";

const mockStore = configureStore([]);

describe(`Testing <Main/>`, () => {
  it(`Main have rendered correctly`, () => {
    const store = mockStore({
      cities,
      activeCity: cities[0],
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <Main activeCity={offers[0].city.name} offersByCity={offers} />
          </Provider>,
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
