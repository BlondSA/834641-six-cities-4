import React from "react";
import renderer from "react-test-renderer";
import {offers} from "../../mocks/offers.js";
import ReviewsList from "./reviews-list.jsx";

describe(`<ReviewsList/> render snapchots`, () => {
  it(`with_data`, () => {
    const tree = renderer.create(
        <ReviewsList
          reviews={offers[0].reviews} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`without_data`, () => {
    const tree = renderer.create(<ReviewsList reviews={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
