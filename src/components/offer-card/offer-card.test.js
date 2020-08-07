import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";
import {offers} from "../../mocks/offers.js";
import {OfferClassName} from "../../const.js";

describe(`Testing <OfferCard/>`, () => {
  it(`OffersCard rendered correctly`, () => {
    const tree = renderer
      .create(
          <OfferCard
            offer={offers[0]}
            onOfferTitleClick={() => {}}
            className={OfferClassName.MAIN[1]}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
