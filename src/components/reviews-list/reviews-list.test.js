import React from "react";
import renderer from "react-test-renderer";
import {reviews} from "../../mocks/reviews.js";
import ReviewsList from "./reviews-list.jsx";

describe(`<ReviewsList/> render snapchots`, () => {
  it(`with_data`, () => {
    const tree = renderer.create(
        <ReviewsList
          reviews={reviews} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`without_data`, () => {
    const tree = renderer.create(<ReviewsList reviews={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
