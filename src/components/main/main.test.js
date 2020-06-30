import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const offersCount = 312;
const offersNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Nice, cozy, warm big bed apartment`,
  `Canal View Prinsengracht`,
  `Huge house with fireplace`,
];

describe(`Testing <Main/>`, () => {
  it(`Main have rendered correctly`, () => {
    const tree = renderer
      .create(
          <Main
            offersCount={offersCount}
            offersNames={offersNames}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
