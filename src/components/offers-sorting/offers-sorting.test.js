import React from "react";
import renderer from "react-test-renderer";
import {SORTING_ITEMS} from "../../const.js";
import {OffersSorting} from "./offers-sorting.jsx";

describe(`<OffersSorting/> snapchots test`, () => {
  it(`isClose`, () => {
    const tree = renderer
      .create(
          <OffersSorting
            isOpen={false}
            sortingType={SORTING_ITEMS[0]}
            onSortingClick={() => {}}
            onSortingItemClick={() => {}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
