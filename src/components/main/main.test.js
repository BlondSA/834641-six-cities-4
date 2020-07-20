import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {offers} from "../../mocks/offers.js";

const offersCount = 312;

describe(`Testing <Main/>`, () => {
  it(`Main have rendered correctly`, () => {
    const tree = renderer
      .create(
          <Main
            offersCount={offersCount}
            offers={offers}
            onOfferTitleClick = {() => {}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
