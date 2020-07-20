import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import {offers} from "../../mocks/offers.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const offersCount = 312;

describe(`Testing Main component e2e`, () => {
  it(`Should logo link be pressed`, () => {
    const onOfferTitleClick = jest.fn();

    const mainComponent = shallow(
        <Main
          offersCount = {offersCount}
          offers = {offers}
          onOfferTitleClick = {onOfferTitleClick}
        />
    );

    const offerTitles = mainComponent.find(`.place-card__name a`);

    offerTitles.forEach((offerTitle) => {
      onOfferTitleClick.mockClear();
      offerTitle.simulate(`click`);
      expect(onOfferTitleClick).toHaveBeenCalledTimes(1);
    });
  });
});
