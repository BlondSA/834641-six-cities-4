import React from "react";
import renderer from "react-test-renderer";
import OfferDetails from "../offer-details/offer-details.jsx";
import {offers} from "../../mocks/offers.js";

describe(`Testing <OfferDetails/>`, () => {
  it(`OfferDetails rendered correctly`, () => {
    const tree = renderer
      .create(
          <OfferDetails
            offer={offers[0]}
            offers={offers.slice(0, 3)}
            onOfferTitleClick={() => {}}
          />,
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
