import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offer-list.jsx";
import {offers} from "../../mocks/offers.js";
import {OfferClassName} from "../../const.js";

describe(`Testing <OffersList/>`, () => {
  it(`OffersList rendered correctly`, () => {
    const tree = renderer
      .create(
          <OfferList
            offers={offers}
            onOfferTitleClick={() => {}}
            className={OfferClassName.MAIN}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
