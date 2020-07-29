import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offer-list.jsx";
import {offers} from "../../mocks/offers.js";
import {PlaceClassName} from "../../const.js";

describe(`Testing <OffersList/>`, () => {
  it(`OffersList rendered correctly`, () => {
    const tree = renderer
      .create(
          <OfferList
            offers={offers}
            onOfferTitleClick={() => {}}
            className={PlaceClassName.MAIN}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
