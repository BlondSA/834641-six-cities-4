import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const offersCount = 312;
const offersNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Nice, cozy, warm big bed apartment`,
  `Canal View Prinsengracht`,
  `Huge house with fireplace`,
];

describe(`Testing Main component e2e`, () => {
  it(`Should logo link be pressed`, () => {
    const onLogoLinkButtonClick = jest.fn();

    const mainComponent = shallow(
        <Main
          offersCount={offersCount}
          offersNames={offersNames}
          onLogoLinkButtonClick={onLogoLinkButtonClick}
        />
    );
    const logoLinkButton = mainComponent.find(`.header__logo-link`);

    logoLinkButton.simulate(`click`);

    expect(onLogoLinkButtonClick.mock.calls.length).toBe(1);
  });
});
