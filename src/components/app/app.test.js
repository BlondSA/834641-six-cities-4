import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

describe(`App component snapshot test`, () => {
  it(`App component correctly show MainScreen`, () => {
    const tree = renderer
      .create(
          <App
            offersCount={Offers.offersCount}
            offersNames={Offers.offersNames}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
