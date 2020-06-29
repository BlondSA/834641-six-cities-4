import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

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

describe(`Main component e2e test`, () => {
  it(`Should logo link be pressed`, () => {
    const onLogoLinkButtonClick = jest.fn();

    const mainComponent = shallow(
        <Main
          offersCount={Offers.offersCount}
          offersNames={Offers.offersNames}
          onLogoLinkButtonClick={onLogoLinkButtonClick}
        />
    );
    const logoLinkButton = mainComponent.find(`.header__logo-link`);

    logoLinkButton.props().onClick();

    expect(onLogoLinkButtonClick.mock.calls.length).toBe(1);
  });
});
