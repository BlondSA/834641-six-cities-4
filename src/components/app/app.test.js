import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const offersCount = 312;
const offersNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Nice, cozy, warm big bed apartment`,
  `Canal View Prinsengracht`,
  `Huge house with fireplace`,
];

describe(`Testing <App/>`, () => {
  it(`App component correctly show <Main/>`, () => {
    const tree = renderer
      .create(
          <App
            offersCount={offersCount}
            offersNames={offersNames}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
