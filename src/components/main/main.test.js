import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const Offers = {
  offersCount: 312,
  offersNames: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Nice, cozy, warm big bed apartment`,
    `Canal View Prinsengracht`,
    `Huge house with fireplace`,
  ],
};

describe(`Main`, () => {
  it(`Should Main render correctly`, () => {
    const tree = renderer
      .create(
          <Main
            offersCount={Offers.offersCount}
            offersNames={Offers.offersNames}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
