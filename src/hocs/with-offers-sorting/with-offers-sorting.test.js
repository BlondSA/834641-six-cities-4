import React from "react";
import renderer from "react-test-renderer";
import withOffersSorting from "./with-offers-sorting.jsx";

const MockComponent = () => {
  return <div></div>;
};

const MockComponentWrapped = withOffersSorting(MockComponent);

describe(`WithOffersSorting snapshot`, () => {
  it(`WithOffersSorting render correctly`, () => {
    const tree = renderer.create(<MockComponentWrapped
      isOpen={true}
      onSortingItemClick={() => {}}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
