import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {offers} from "../../mocks/offers.js";

const offersCount = 312;

describe(`Testing <App/>`, () => {
  it(`App component correctly show <Main/>`, () => {
    const tree = renderer
      .create(
          <App
            offersCount={offersCount}
            offers={offers}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
