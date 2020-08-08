import React from "react";
import renderer from "react-test-renderer";
import {OfferList} from "./offer-list.jsx";
import {offers} from "../../mocks/offers.js";
import {OfferClassName, SORTING_ITEMS} from "../../const.js";

describe(`Testing <OffersList/>`, () => {
  it(`OffersList rendered correctly`, () => {
    const tree = renderer
      .create(
          <OfferList
            offersByCity={offers}
            onOfferTitleClick={() => {}}
            sortingType={SORTING_ITEMS[0]}
            className={OfferClassName.MAIN}
            onOfferCardHover={() => {}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
