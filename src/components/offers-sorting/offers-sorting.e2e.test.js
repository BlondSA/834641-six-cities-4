import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OffersSorting} from "./offers-sorting.jsx";
import {SORTING_ITEMS} from "../../const.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`OffersSorting e2e test`, () => {
  it(`OffersSortingItem on click`, () => {
    const onSortingItemClick = jest.fn();
    const onSortingClick = jest.fn();
    const placesSorting = mount(
        <OffersSorting
          sortingType={SORTING_ITEMS[0]}
          isOpen={true}
          onSortingClick={onSortingClick}
          onSortingItemClick={onSortingItemClick}
        />
    );
    const placesSortingItem = placesSorting.find(`.places__option`);
    placesSortingItem.forEach((v) => {
      v.simulate(`click`, {});
    });
    expect(onSortingItemClick).toHaveBeenCalledTimes(SORTING_ITEMS.length);
  });

  it(`OffersSortingItem on click`, () => {
    const onSortingItemClick = jest.fn();
    const onSortingClick = jest.fn();
    const placesSorting = mount(
        <OffersSorting
          sortingType={SORTING_ITEMS[0]}
          isOpen={false}
          onSortingClick={onSortingClick}
          onSortingItemClick={onSortingItemClick}
        />
    );
    const placesSortingItem = placesSorting.find(`.places__sorting-type`);
    placesSortingItem.simulate(`click`, {});
    expect(onSortingClick).toHaveBeenCalledTimes(1);
  });
});
